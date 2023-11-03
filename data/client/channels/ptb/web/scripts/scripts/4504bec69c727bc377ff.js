(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["99742"], {
        583367: function(e, t, _) {
            "use strict";
            _.r(t), _.d(t, {
                fetchAppliedGuildBoostsForGuild: function() {
                    return d
                },
                fetchGuildBoostSlots: function() {
                    return E
                },
                applyToGuild: function() {
                    return l
                },
                unapplyFromGuild: function() {
                    return n
                },
                cancelGuildBoostSlot: function() {
                    return a
                },
                uncancelGuildBoostSlot: function() {
                    return S
                }
            });
            var i = _("872717"),
                s = _("913144"),
                I = _("448993"),
                o = _("783111"),
                u = _("522308"),
                r = _("521012"),
                T = _("49111");
            async function d(e) {
                let t = await i.default.get({
                        url: T.Endpoints.APPLIED_GUILD_BOOSTS_FOR_GUILD(e),
                        oldFormErrors: !0
                    }),
                    _ = t.body.map(e => o.default.createFromServer(e));
                return s.default.dispatch({
                    type: "GUILD_APPLIED_BOOSTS_FETCH_SUCCESS",
                    guildId: e,
                    appliedBoosts: _
                }), _
            }
            async function E() {
                let e = await i.default.get({
                        url: T.Endpoints.USER_GUILD_BOOST_SLOTS,
                        oldFormErrors: !0
                    }),
                    t = e.body.map(e => u.default.createFromServer(e, r.default.getSubscriptionById(e.subscription_id)));
                return s.default.dispatch({
                    type: "GUILD_BOOST_SLOTS_FETCH_SUCCESS",
                    guildBoostSlots: t
                }), t
            }
            async function l(e, t) {
                s.default.dispatch({
                    type: "GUILD_APPLY_BOOST_START"
                });
                try {
                    let _ = await i.default.put({
                            url: T.Endpoints.APPLIED_GUILD_BOOSTS_FOR_GUILD(e),
                            body: {
                                user_premium_guild_subscription_slot_ids: t
                            },
                            oldFormErrors: !0
                        }),
                        I = Array.isArray(_.body) ? _.body.map(o.default.createFromServer) : [o.default.createFromServer(_.body)];
                    return s.default.dispatch({
                        type: "GUILD_APPLY_BOOST_SUCCESS",
                        appliedGuildBoost: I
                    }), E(), I
                } catch (t) {
                    let e = new I.AppliedGuildBoostError(t);
                    throw s.default.dispatch({
                        type: "GUILD_APPLY_BOOST_FAIL",
                        error: e
                    }), e
                }
            }
            async function n(e, t) {
                s.default.dispatch({
                    type: "GUILD_UNAPPLY_BOOST_START"
                });
                try {
                    await i.default.delete({
                        url: T.Endpoints.APPLIED_GUILD_BOOST(e, t),
                        oldFormErrors: !0
                    }), E()
                } catch (t) {
                    let e = new I.AppliedGuildBoostError(t);
                    throw s.default.dispatch({
                        type: "GUILD_UNAPPLY_BOOST_FAIL",
                        error: e
                    }), e
                }
                s.default.dispatch({
                    type: "GUILD_UNAPPLY_BOOST_SUCCESS",
                    boostId: t
                })
            }
            async function a(e) {
                let t = await i.default.post({
                        url: T.Endpoints.USER_GUILD_BOOST_SLOT_CANCEL(e),
                        oldFormErrors: !0
                    }),
                    _ = u.default.createFromServer(t.body, r.default.getSubscriptionById(t.body.subscription_id));
                return s.default.dispatch({
                    type: "GUILD_BOOST_SLOT_UPDATE_SUCCESS",
                    guildBoostSlot: _
                }), _
            }
            async function S(e) {
                let t = await i.default.post({
                        url: T.Endpoints.USER_GUILD_BOOST_SLOT_UNCANCEL(e),
                        oldFormErrors: !0
                    }),
                    _ = u.default.createFromServer(t.body, r.default.getSubscriptionById(t.body.subscription_id));
                return s.default.dispatch({
                    type: "GUILD_BOOST_SLOT_UPDATE_SUCCESS",
                    guildBoostSlot: _
                }), _
            }
        },
        783111: function(e, t, _) {
            "use strict";
            _.r(t), _.d(t, {
                default: function() {
                    return I
                }
            });
            var i = _("666038");
            class s extends i.default {
                static createFromServer(e) {
                    return new s({
                        id: e.id,
                        guildId: e.guild_id,
                        userId: null != e.user ? e.user.id : e.user_id,
                        user: e.user,
                        ended: e.ended,
                        endsAt: null != e.ends_at && "" !== e.ends_at ? new Date(e.ends_at) : null
                    })
                }
                constructor(e) {
                    super(), this.id = e.id, this.guildId = e.guildId, this.userId = e.userId, this.user = e.user, this.ended = e.ended, this.endsAt = null != e.endsAt ? e.endsAt : null
                }
            }
            var I = s
        },
        625634: function(e, t, _) {
            "use strict";
            _.r(t), _.d(t, {
                default: function() {
                    return E
                }
            });
            var i = _("446674"),
                s = _("913144"),
                I = _("521012");
            let o = !1,
                u = {};

            function r(e) {
                let {
                    guildBoostSlot: t
                } = e;
                u = {
                    ...u,
                    [t.id]: t
                }
            }

            function T() {
                let e = {};
                for (let t of Object.values(u)) e[t.id] = t, t.subscription = I.default.getSubscriptionById(t.subscriptionId);
                u = e
            }
            class d extends i.default.Store {
                initialize() {
                    this.syncWith([I.default], T)
                }
                get hasFetched() {
                    return o
                }
                get boostSlots() {
                    return u
                }
                getGuildBoostSlot(e) {
                    return u[e]
                }
            }
            d.displayName = "GuildBoostSlotStore";
            var E = new d(s.default, {
                GUILD_BOOST_SLOTS_FETCH_SUCCESS: function(e) {
                    let {
                        guildBoostSlots: t
                    } = e;
                    u = {}, t.forEach(e => {
                        u[e.id] = e
                    }), o = !0
                },
                GUILD_BOOST_SLOT_UPDATE_SUCCESS: r,
                GUILD_BOOST_SLOT_CREATE: r,
                GUILD_BOOST_SLOT_UPDATE: r,
                LOGOUT: function() {
                    u = {}, o = !1
                }
            })
        },
        118503: function(e, t, _) {
            "use strict";
            _.r(t), _.d(t, {
                default: function() {
                    return I
                }
            });
            var i = _("37983");
            _("884691");
            var s = _("75196");

            function I(e) {
                let {
                    width: t = 24,
                    height: _ = 24,
                    color: I = "currentColor",
                    foreground: o,
                    ...u
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, s.default)(u),
                    width: t,
                    height: _,
                    viewBox: "0 0 8 12",
                    children: [(0, i.jsx)("path", {
                        d: "M4 0L0 4V8L4 12L8 8V4L4 0ZM7 7.59L4 10.59L1 7.59V4.41L4 1.41L7 4.41V7.59Z",
                        fill: I,
                        className: o
                    }), (0, i.jsx)("path", {
                        d: "M2 4.83V7.17L4 9.17L6 7.17V4.83L4 2.83L2 4.83Z",
                        fill: I,
                        className: o
                    })]
                })
            }
        },
        427459: function(e, t, _) {
            "use strict";
            _.r(t), _.d(t, {
                PerkIcons: function() {
                    return o
                },
                getNextTier: function() {
                    return D
                },
                getTotalStickerCountForTier: function() {
                    return f
                },
                getIncrementalStickerCountForTier: function() {
                    return c
                },
                getTotalSoundboardSoundCountForTier: function() {
                    return O
                },
                getIncrementalSoundboardSoundCountForTier: function() {
                    return N
                },
                getTiers: function() {
                    return P
                },
                getTierName: function() {
                    return A
                },
                getShortenedTierName: function() {
                    return B
                },
                minimumRequiredTierForGuildFeature: function() {
                    return p
                },
                boostedGuildTierToAnalyticsObjectType: function() {
                    return g
                },
                getGuildTierFromAppliedBoostCount: function() {
                    return C
                },
                getNextGuildTierFromAppliedBoostCount: function() {
                    return m
                },
                getAppliedGuildBoostMonths: function() {
                    return b
                },
                isGuildBoostedAtLeast: function() {
                    return K
                },
                isTierUnlocked: function() {
                    return y
                },
                getAvailableGuildBoostSlots: function() {
                    return h
                },
                generateBlockGuildSubscriptionPurchasesNode: function() {
                    return F
                },
                isInGracePeriod: function() {
                    return V
                },
                appliedGuildBoostsRequiredForPerks: function() {
                    return v
                },
                getAppliedGuildBoostsRequired: function() {
                    return Y
                },
                getGracePeriodEndingDate: function() {
                    return j
                },
                getAvailableStickerSlotCount: function() {
                    return x
                },
                getAvailableSoundboardSoundCount: function() {
                    return k
                },
                getNumberOfAppliedBoostsNeededForTier: function() {
                    return H
                },
                isGuildBoostSlotCanceled: function() {
                    return J
                }
            });
            var i, s, I, o, u = _("917351"),
                r = _.n(u),
                T = _("866227"),
                d = _.n(T),
                E = _("625634"),
                l = _("521012"),
                n = _("993105"),
                a = _("449008"),
                S = _("701909"),
                R = _("719923"),
                G = _("49111"),
                U = _("646718"),
                L = _("782340");
            (i = I || (I = {}))[i.LEVEL_1 = 1] = "LEVEL_1", i[i.LEVEL_2 = 2] = "LEVEL_2", i[i.LEVEL_3 = 3] = "LEVEL_3", i[i.LEVEL_4 = 4] = "LEVEL_4", i[i.LEVEL_5 = 5] = "LEVEL_5", i[i.LEVEL_6 = 6] = "LEVEL_6", i[i.LEVEL_7 = 7] = "LEVEL_7", i[i.LEVEL_8 = 8] = "LEVEL_8", i[i.LEVEL_9 = 9] = "LEVEL_9", Object.freeze({
                1: 1,
                2: 2,
                3: 3,
                4: 6,
                5: 9,
                6: 12,
                7: 15,
                8: 18,
                9: 24
            }), (s = o || (o = {}))[s.EMOJI = 1] = "EMOJI", s[s.AUDIO = 2] = "AUDIO", s[s.ANIMATED = 3] = "ANIMATED", s[s.CUSTOMIZATION = 4] = "CUSTOMIZATION", s[s.UPLOAD = 5] = "UPLOAD", s[s.VANITY = 6] = "VANITY", s[s.STREAM = 7] = "STREAM", s[s.STICKER = 8] = "STICKER", s[s.CUSTOM_ROLE_ICON = 11] = "CUSTOM_ROLE_ICON", s[s.STAGE_VIDEO = 12] = "STAGE_VIDEO", s[s.SOUNDBOARD = 13] = "SOUNDBOARD";
            let M = [G.BoostedGuildTiers.NONE, G.BoostedGuildTiers.TIER_1, G.BoostedGuildTiers.TIER_2, G.BoostedGuildTiers.TIER_3],
                D = (e, t) => {
                    var _;
                    return e === G.BoostedGuildTiers.NONE ? G.BoostedGuildTiers.TIER_1 : null === (_ = w(t).find(t => t.tier === e)) || void 0 === _ ? void 0 : _.nextTier
                },
                f = e => U.TotalStickerCountsByTier[e],
                c = e => U.IncrementalStickerCountsByTier[e],
                O = e => U.TotalSoundboardSoundCountsByTier[e],
                N = e => {
                    if (e === G.BoostedGuildTiers.NONE) return U.TotalSoundboardSoundCountsByTier[e];
                    let t = M[M.indexOf(e) - 1];
                    return U.TotalSoundboardSoundCountsByTier[e] - U.TotalSoundboardSoundCountsByTier[t]
                },
                P = e => [{
                    tier: G.BoostedGuildTiers.TIER_1,
                    title: L.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERKS_TITLE_TIER_1,
                    perks: [{
                        title: L.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_EMOJI.format({
                            adding: U.BoostedGuildFeatures[G.BoostedGuildTiers.TIER_1].limits.emoji - U.BoostedGuildFeatures[G.BoostedGuildTiers.NONE].limits.emoji,
                            total: U.BoostedGuildFeatures[G.BoostedGuildTiers.TIER_1].limits.emoji
                        }),
                        description: L.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_EMOJI,
                        icon: o.EMOJI
                    }, {
                        title: L.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_STICKER.format({
                            adding: c(G.BoostedGuildTiers.TIER_1),
                            total: f(G.BoostedGuildTiers.TIER_1)
                        }),
                        description: L.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_STICKER,
                        icon: o.STICKER
                    }, {
                        title: L.default.Messages.SOUNDBOARD_MARKETING_BOOSTING_PERKS.format({
                            soundCount: N(G.BoostedGuildTiers.TIER_1),
                            totalSoundCount: O(G.BoostedGuildTiers.TIER_1)
                        }),
                        description: L.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_SOUNDBOARD,
                        icon: o.SOUNDBOARD
                    }, {
                        title: L.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_AUDIO_QUALITY.format({
                            bitrate: U.BoostedGuildFeatures[G.BoostedGuildTiers.TIER_1].limits.bitrate / 1e3
                        }),
                        description: L.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_AUDIO_QUALITY,
                        icon: o.AUDIO
                    }, {
                        title: L.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_1_ANIMATED_GUILD_ICON,
                        description: L.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_ANIMATED_GUILD_ICON.format(),
                        icon: o.ANIMATED
                    }, {
                        title: L.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_1_SPLASH,
                        description: L.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_SPLASH,
                        icon: o.CUSTOMIZATION
                    }, {
                        title: L.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_1_STREAMING,
                        description: L.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_STREAMING,
                        icon: o.STREAM
                    }].filter(a.isNotNullish)
                }, {
                    tier: G.BoostedGuildTiers.TIER_2,
                    title: L.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERKS_TITLE_TIER_2,
                    perks: [{
                        title: L.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_EMOJI.format({
                            adding: U.BoostedGuildFeatures[G.BoostedGuildTiers.TIER_2].limits.emoji - U.BoostedGuildFeatures[G.BoostedGuildTiers.TIER_1].limits.emoji,
                            total: U.BoostedGuildFeatures[G.BoostedGuildTiers.TIER_2].limits.emoji
                        }),
                        description: L.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_EMOJI,
                        icon: o.EMOJI
                    }, {
                        title: L.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_STICKER.format({
                            adding: c(G.BoostedGuildTiers.TIER_2),
                            total: f(G.BoostedGuildTiers.TIER_2)
                        }),
                        description: L.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_STICKER,
                        icon: o.STICKER
                    }, {
                        title: L.default.Messages.SOUNDBOARD_MARKETING_BOOSTING_PERKS.format({
                            soundCount: N(G.BoostedGuildTiers.TIER_2),
                            totalSoundCount: O(G.BoostedGuildTiers.TIER_2)
                        }),
                        description: L.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_SOUNDBOARD,
                        icon: o.SOUNDBOARD
                    }, {
                        title: L.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_AUDIO_QUALITY.format({
                            bitrate: U.BoostedGuildFeatures[G.BoostedGuildTiers.TIER_2].limits.bitrate / 1e3
                        }),
                        description: L.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_AUDIO_QUALITY,
                        icon: o.AUDIO
                    }, {
                        title: L.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_2_BANNER,
                        description: L.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_BANNER,
                        icon: o.CUSTOMIZATION
                    }, {
                        title: L.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_UPLOAD_LIMIT.format({
                            fileSize: (0, n.formatSize)(U.BoostedGuildFeatures[G.BoostedGuildTiers.TIER_2].limits.fileSize / 1024, {
                                useKibibytes: !0
                            })
                        }),
                        description: L.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_UPLOAD_LIMIT.format(),
                        icon: o.UPLOAD
                    }, {
                        title: L.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_2_STREAMING,
                        description: L.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_STREAMING,
                        icon: o.STREAM
                    }, {
                        title: L.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_2_CUSTOM_ROLE_ICONS,
                        description: L.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_CUSTOM_ROLE_ICONS,
                        icon: o.CUSTOM_ROLE_ICON
                    }, e ? {
                        title: L.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_VIDEO_STAGE.format({
                            limit: G.MAX_STAGE_VIDEO_USER_LIMIT_TIER2
                        }),
                        description: L.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_VIDEO_STAGE.format({
                            limit: G.MAX_STAGE_VIDEO_USER_LIMIT_TIER2
                        }),
                        icon: o.STAGE_VIDEO
                    } : null].filter(a.isNotNullish)
                }, {
                    tier: G.BoostedGuildTiers.TIER_3,
                    title: L.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERKS_TITLE_TIER_3,
                    perks: [{
                        title: L.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_EMOJI.format({
                            adding: U.BoostedGuildFeatures[G.BoostedGuildTiers.TIER_3].limits.emoji - U.BoostedGuildFeatures[G.BoostedGuildTiers.TIER_2].limits.emoji,
                            total: U.BoostedGuildFeatures[G.BoostedGuildTiers.TIER_3].limits.emoji
                        }),
                        description: L.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_EMOJI,
                        icon: o.EMOJI
                    }, {
                        title: L.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_STICKER.format({
                            adding: c(G.BoostedGuildTiers.TIER_3),
                            total: f(G.BoostedGuildTiers.TIER_3)
                        }),
                        description: L.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_STICKER,
                        icon: o.STICKER
                    }, {
                        title: L.default.Messages.SOUNDBOARD_MARKETING_BOOSTING_PERKS.format({
                            soundCount: N(G.BoostedGuildTiers.TIER_3),
                            totalSoundCount: O(G.BoostedGuildTiers.TIER_3)
                        }),
                        description: L.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_SOUNDBOARD,
                        icon: o.SOUNDBOARD
                    }, {
                        title: L.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_AUDIO_QUALITY.format({
                            bitrate: U.BoostedGuildFeatures[G.BoostedGuildTiers.TIER_3].limits.bitrate / 1e3
                        }),
                        description: L.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_AUDIO_QUALITY,
                        icon: o.AUDIO
                    }, {
                        title: L.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_3_VANITY_URL,
                        description: L.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_VANITY_URL.format({
                            helpdeskArticle: S.default.getArticleURL(G.HelpdeskArticles.GUILD_VANITY_URL)
                        }),
                        icon: o.VANITY
                    }, {
                        title: L.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_UPLOAD_LIMIT.format({
                            fileSize: (0, n.formatSize)(U.BoostedGuildFeatures[G.BoostedGuildTiers.TIER_3].limits.fileSize / 1024, {
                                useKibibytes: !0
                            })
                        }),
                        description: L.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_UPLOAD_LIMIT.format(),
                        icon: o.UPLOAD
                    }, {
                        title: L.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_3_ANIMATED_BANNER,
                        description: L.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_ANIMATED_BANNER,
                        icon: o.ANIMATED
                    }, e ? {
                        title: L.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_VIDEO_STAGE.format({
                            limit: G.MAX_STAGE_VIDEO_USER_LIMIT_TIER3
                        }),
                        description: L.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_VIDEO_STAGE.format({
                            limit: G.MAX_STAGE_VIDEO_USER_LIMIT_TIER3
                        }),
                        icon: o.STAGE_VIDEO
                    } : null].filter(a.isNotNullish)
                }];

            function A(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    {
                        useLevels: _ = !0
                    } = t;
                switch (e) {
                    case G.BoostedGuildTiers.NONE:
                        return _ ? L.default.Messages.PREMIUM_GUILD_TIER_0 : L.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_NONE_NAME;
                    case G.BoostedGuildTiers.TIER_1:
                        return L.default.Messages.PREMIUM_GUILD_TIER_1;
                    case G.BoostedGuildTiers.TIER_2:
                        return L.default.Messages.PREMIUM_GUILD_TIER_2;
                    case G.BoostedGuildTiers.TIER_3:
                        return L.default.Messages.PREMIUM_GUILD_TIER_3;
                    default:
                        throw Error("Not a valid tier type")
                }
            }

            function B(e) {
                switch (e) {
                    case G.BoostedGuildTiers.NONE:
                        return L.default.Messages.PREMIUM_GUILD_TIER_0;
                    case G.BoostedGuildTiers.TIER_1:
                        return L.default.Messages.PREMIUM_GUILD_TIER_1_SHORT;
                    case G.BoostedGuildTiers.TIER_2:
                        return L.default.Messages.PREMIUM_GUILD_TIER_2_SHORT;
                    case G.BoostedGuildTiers.TIER_3:
                        return L.default.Messages.PREMIUM_GUILD_TIER_3_SHORT;
                    default:
                        throw Error("Not a valid tier type")
                }
            }
            let p = r.memoize(e => (0, U.BoostedGuildFeatures)[G.BoostedGuildTiers.TIER_1].features.includes(e) ? G.BoostedGuildTiers.TIER_1 : (0, U.BoostedGuildFeatures)[G.BoostedGuildTiers.TIER_2].features.includes(e) ? G.BoostedGuildTiers.TIER_2 : (0, U.BoostedGuildFeatures)[G.BoostedGuildTiers.TIER_3].features.includes(e) ? G.BoostedGuildTiers.TIER_3 : null),
                g = e => {
                    if (e === G.BoostedGuildTiers.NONE) return G.AnalyticsObjectTypes.NONE;
                    if (e === G.BoostedGuildTiers.TIER_1) return G.AnalyticsObjectTypes.TIER_1;
                    if (e === G.BoostedGuildTiers.TIER_2) return G.AnalyticsObjectTypes.TIER_2;
                    else if (e === G.BoostedGuildTiers.TIER_3) return G.AnalyticsObjectTypes.TIER_3;
                    return null
                };

            function C(e, t) {
                for (let _ of w(t))
                    if (e >= _.amount) return _.tier;
                return G.BoostedGuildTiers.NONE
            }

            function m(e, t) {
                for (let _ of w(t))
                    if (e >= _.amount) return _.nextTier;
                return G.BoostedGuildTiers.TIER_1
            }

            function b(e) {
                var t;
                return null !== (t = d().diff(d(e), "months")) && void 0 !== t ? t : 1
            }

            function K(e, t) {
                return null == t || null != e && e >= t
            }

            function y(e, t) {
                return K(e.premiumTier, t)
            }

            function h(e) {
                return r.values(e).filter(e => e.isAvailable())
            }

            function F() {
                let e = l.default.getPremiumTypeSubscription(),
                    t = Object.values(E.default.boostSlots),
                    {
                        numAvailableGuildBoostSlots: _,
                        numCanceledGuildBoostSlots: i
                    } = t.reduce((e, t) => (J(t) && e.numCanceledGuildBoostSlots++, t.isAvailable() && e.numAvailableGuildBoostSlots++, e), {
                        numAvailableGuildBoostSlots: 0,
                        numCanceledGuildBoostSlots: 0
                    });
                if (null == e || _ > 0) return null;
                if (e.status === G.SubscriptionStatusTypes.PAST_DUE) return L.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_SUBSCRIPTION_PAST_DUE;
                if (e.status === G.SubscriptionStatusTypes.ACCOUNT_HOLD) return L.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_SUBSCRIPTION_ACCOUNT_HOLD;
                if (i > 0) return L.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_PENDING_MUTATION_PREMIUM_GUILD_SUBSCRIPTION;
                if (null == e.renewalMutations) return null;
                let s = R.getNumPremiumGuildSubscriptions(e.renewalMutations.additionalPlans),
                    I = R.getNumPremiumGuildSubscriptions(e.additionalPlans);
                return I > s ? L.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_PENDING_MUTATION_PREMIUM_GUILD_SUBSCRIPTION : L.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_PENDING_MUTATION_PLAN
            }

            function V(e, t) {
                return v(e, t) > 0
            }

            function v(e, t) {
                let _ = C(e.length, t),
                    i = Y(t)[_],
                    s = e.filter(e => null != e.endsAt);
                return i - (e.length - s.length)
            }

            function Y(e) {
                return G.AppliedGuildBoostsRequiredForBoostedGuildTier
            }

            function w(e) {
                let t = Y(e);
                return [{
                    tier: G.BoostedGuildTiers.TIER_3,
                    amount: t[G.BoostedGuildTiers.TIER_3],
                    nextTier: null
                }, {
                    tier: G.BoostedGuildTiers.TIER_2,
                    amount: t[G.BoostedGuildTiers.TIER_2],
                    nextTier: G.BoostedGuildTiers.TIER_3
                }, {
                    tier: G.BoostedGuildTiers.TIER_1,
                    amount: t[G.BoostedGuildTiers.TIER_1],
                    nextTier: G.BoostedGuildTiers.TIER_2
                }]
            }

            function j(e, t) {
                let _ = v(e, t);
                if (_ > 0) {
                    let t = e.sort((e, t) => null != e.endsAt && null != t.endsAt ? e.endsAt.getTime() - t.endsAt.getTime() : -1).filter(e => null != e.endsAt),
                        i = t[t.length - _];
                    return i.endsAt
                }
                return null
            }

            function x(e, t) {
                let _ = c(t),
                    i = M.indexOf(t);
                if (-1 === i) return 0;
                let s = M[i - 1],
                    I = null != s ? f(s) : 0,
                    o = f(t);
                return Math.max(0, _ - e.slice(I, o).length)
            }

            function k(e, t) {
                let _ = M.indexOf(t);
                if (-1 === _) return 0;
                let i = O(t);
                return Math.max(0, i - e.length)
            }

            function H(e, t) {
                let _ = e.premiumSubscriberCount,
                    i = Y(e.id)[t];
                return Math.max(0, i - _)
            }

            function J(e) {
                var t;
                return (null === (t = e.subscription) || void 0 === t ? void 0 : t.status) === G.SubscriptionStatusTypes.CANCELED || e.canceled
            }
        }
    }
]);
//# sourceMappingURL=4504bec69c727bc377ff.js.map