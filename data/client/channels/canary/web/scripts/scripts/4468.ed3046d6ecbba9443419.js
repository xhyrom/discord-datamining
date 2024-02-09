(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["4468"], {
        625634: function(e, t, _) {
            "use strict";
            _.r(t), _.d(t, {
                default: function() {
                    return l
                }
            }), _("222007");
            var i = _("446674"),
                s = _("913144"),
                I = _("521012");
            let T = !1,
                o = {};

            function E(e) {
                let {
                    guildBoostSlot: t
                } = e;
                o = {
                    ...o,
                    [t.id]: t
                }
            }

            function u() {
                let e = {};
                for (let t of Object.values(o)) e[t.id] = t, t.subscription = I.default.getSubscriptionById(t.subscriptionId);
                o = e
            }
            class r extends i.default.Store {
                initialize() {
                    this.syncWith([I.default], u)
                }
                get hasFetched() {
                    return T
                }
                get boostSlots() {
                    return o
                }
                getGuildBoostSlot(e) {
                    return o[e]
                }
            }
            r.displayName = "GuildBoostSlotStore";
            var l = new r(s.default, {
                GUILD_BOOST_SLOTS_FETCH_SUCCESS: function(e) {
                    let {
                        guildBoostSlots: t
                    } = e;
                    o = {}, t.forEach(e => {
                        o[e.id] = e
                    }), T = !0
                },
                GUILD_BOOST_SLOT_UPDATE_SUCCESS: E,
                GUILD_BOOST_SLOT_CREATE: E,
                GUILD_BOOST_SLOT_UPDATE: E,
                LOGOUT: function() {
                    o = {}, T = !1
                }
            })
        },
        427459: function(e, t, _) {
            "use strict";
            _.r(t), _.d(t, {
                PerkIcons: function() {
                    return i
                },
                getNextTier: function() {
                    return S
                },
                getTotalStickerCountForTier: function() {
                    return U
                },
                getIncrementalStickerCountForTier: function() {
                    return M
                },
                getTotalSoundboardSoundCountForTier: function() {
                    return D
                },
                getIncrementalSoundboardSoundCountForTier: function() {
                    return N
                },
                getTiers: function() {
                    return L
                },
                getTierName: function() {
                    return f
                },
                getShortenedTierName: function() {
                    return P
                },
                minimumRequiredTierForGuildFeature: function() {
                    return c
                },
                boostedGuildTierToAnalyticsObjectType: function() {
                    return O
                },
                getGuildTierFromAppliedBoostCount: function() {
                    return B
                },
                isGuildBoostedAtLeast: function() {
                    return A
                },
                isTierUnlocked: function() {
                    return g
                },
                getAvailableGuildBoostSlots: function() {
                    return C
                },
                generateBlockGuildSubscriptionPurchasesNode: function() {
                    return m
                },
                isInGracePeriod: function() {
                    return p
                },
                appliedGuildBoostsRequiredForPerks: function() {
                    return K
                },
                getAppliedGuildBoostsRequired: function() {
                    return b
                },
                getGracePeriodEndingDate: function() {
                    return F
                },
                getAvailableStickerSlotCount: function() {
                    return y
                },
                getAvailableSoundboardSoundCount: function() {
                    return v
                },
                getNumberOfAppliedBoostsNeededForTier: function() {
                    return Y
                },
                isGuildBoostSlotCanceled: function() {
                    return k
                }
            }), _("70102"), _("222007"), _("808653");
            var i, s, I = _("917351"),
                T = _.n(I);
            _("866227");
            var o = _("625634"),
                E = _("521012"),
                u = _("993105"),
                r = _("449008"),
                l = _("701909"),
                d = _("719923"),
                n = _("49111"),
                R = _("646718"),
                a = _("782340");
            Object.freeze({
                1: 1,
                2: 2,
                3: 3,
                4: 6,
                5: 9,
                6: 12,
                7: 15,
                8: 18,
                9: 24
            }), (s = i || (i = {}))[s.EMOJI = 1] = "EMOJI", s[s.AUDIO = 2] = "AUDIO", s[s.ANIMATED = 3] = "ANIMATED", s[s.CUSTOMIZATION = 4] = "CUSTOMIZATION", s[s.UPLOAD = 5] = "UPLOAD", s[s.VANITY = 6] = "VANITY", s[s.STREAM = 7] = "STREAM", s[s.STICKER = 8] = "STICKER", s[s.CUSTOM_ROLE_ICON = 11] = "CUSTOM_ROLE_ICON", s[s.STAGE_VIDEO = 12] = "STAGE_VIDEO", s[s.SOUNDBOARD = 13] = "SOUNDBOARD";
            let G = [n.BoostedGuildTiers.NONE, n.BoostedGuildTiers.TIER_1, n.BoostedGuildTiers.TIER_2, n.BoostedGuildTiers.TIER_3],
                S = (e, t) => {
                    var _;
                    return e === n.BoostedGuildTiers.NONE ? n.BoostedGuildTiers.TIER_1 : null === (_ = h(t).find(t => t.tier === e)) || void 0 === _ ? void 0 : _.nextTier
                },
                U = e => R.TotalStickerCountsByTier[e],
                M = e => R.IncrementalStickerCountsByTier[e],
                D = e => R.TotalSoundboardSoundCountsByTier[e],
                N = e => {
                    if (e === n.BoostedGuildTiers.NONE) return R.TotalSoundboardSoundCountsByTier[e];
                    let t = G[G.indexOf(e) - 1];
                    return R.TotalSoundboardSoundCountsByTier[e] - R.TotalSoundboardSoundCountsByTier[t]
                },
                L = e => [{
                    tier: n.BoostedGuildTiers.TIER_1,
                    title: a.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERKS_TITLE_TIER_1,
                    perks: [{
                        title: a.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_EMOJI.format({
                            adding: R.BoostedGuildFeatures[n.BoostedGuildTiers.TIER_1].limits.emoji - R.BoostedGuildFeatures[n.BoostedGuildTiers.NONE].limits.emoji,
                            total: R.BoostedGuildFeatures[n.BoostedGuildTiers.TIER_1].limits.emoji
                        }),
                        description: a.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_EMOJI,
                        icon: 1
                    }, {
                        title: a.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_STICKER.format({
                            adding: M(n.BoostedGuildTiers.TIER_1),
                            total: U(n.BoostedGuildTiers.TIER_1)
                        }),
                        description: a.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_STICKER,
                        icon: 8
                    }, {
                        title: a.default.Messages.SOUNDBOARD_MARKETING_BOOSTING_PERKS.format({
                            soundCount: N(n.BoostedGuildTiers.TIER_1),
                            totalSoundCount: D(n.BoostedGuildTiers.TIER_1)
                        }),
                        description: a.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_SOUNDBOARD,
                        icon: 13
                    }, {
                        title: a.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_AUDIO_QUALITY.format({
                            bitrate: R.BoostedGuildFeatures[n.BoostedGuildTiers.TIER_1].limits.bitrate / 1e3
                        }),
                        description: a.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_AUDIO_QUALITY,
                        icon: 2
                    }, {
                        title: a.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_1_ANIMATED_GUILD_ICON,
                        description: a.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_ANIMATED_GUILD_ICON.format(),
                        icon: 3
                    }, {
                        title: a.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_1_SPLASH,
                        description: a.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_SPLASH,
                        icon: 4
                    }, {
                        title: a.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_1_STREAMING,
                        description: a.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_STREAMING,
                        icon: 7
                    }].filter(r.isNotNullish)
                }, {
                    tier: n.BoostedGuildTiers.TIER_2,
                    title: a.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERKS_TITLE_TIER_2,
                    perks: [{
                        title: a.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_EMOJI.format({
                            adding: R.BoostedGuildFeatures[n.BoostedGuildTiers.TIER_2].limits.emoji - R.BoostedGuildFeatures[n.BoostedGuildTiers.TIER_1].limits.emoji,
                            total: R.BoostedGuildFeatures[n.BoostedGuildTiers.TIER_2].limits.emoji
                        }),
                        description: a.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_EMOJI,
                        icon: 1
                    }, {
                        title: a.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_STICKER.format({
                            adding: M(n.BoostedGuildTiers.TIER_2),
                            total: U(n.BoostedGuildTiers.TIER_2)
                        }),
                        description: a.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_STICKER,
                        icon: 8
                    }, {
                        title: a.default.Messages.SOUNDBOARD_MARKETING_BOOSTING_PERKS.format({
                            soundCount: N(n.BoostedGuildTiers.TIER_2),
                            totalSoundCount: D(n.BoostedGuildTiers.TIER_2)
                        }),
                        description: a.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_SOUNDBOARD,
                        icon: 13
                    }, {
                        title: a.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_AUDIO_QUALITY.format({
                            bitrate: R.BoostedGuildFeatures[n.BoostedGuildTiers.TIER_2].limits.bitrate / 1e3
                        }),
                        description: a.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_AUDIO_QUALITY,
                        icon: 2
                    }, {
                        title: a.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_2_BANNER,
                        description: a.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_BANNER,
                        icon: 4
                    }, {
                        title: a.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_UPLOAD_LIMIT.format({
                            fileSize: (0, u.formatSize)(R.BoostedGuildFeatures[n.BoostedGuildTiers.TIER_2].limits.fileSize / 1024, {
                                useKibibytes: !0
                            })
                        }),
                        description: a.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_UPLOAD_LIMIT.format(),
                        icon: 5
                    }, {
                        title: a.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_2_STREAMING,
                        description: a.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_STREAMING,
                        icon: 7
                    }, {
                        title: a.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_2_CUSTOM_ROLE_ICONS,
                        description: a.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_CUSTOM_ROLE_ICONS,
                        icon: 11
                    }, e ? {
                        title: a.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_VIDEO_STAGE.format({
                            limit: n.MAX_STAGE_VIDEO_USER_LIMIT_TIER2
                        }),
                        description: a.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_VIDEO_STAGE.format({
                            limit: n.MAX_STAGE_VIDEO_USER_LIMIT_TIER2
                        }),
                        icon: 12
                    } : null].filter(r.isNotNullish)
                }, {
                    tier: n.BoostedGuildTiers.TIER_3,
                    title: a.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERKS_TITLE_TIER_3,
                    perks: [{
                        title: a.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_EMOJI.format({
                            adding: R.BoostedGuildFeatures[n.BoostedGuildTiers.TIER_3].limits.emoji - R.BoostedGuildFeatures[n.BoostedGuildTiers.TIER_2].limits.emoji,
                            total: R.BoostedGuildFeatures[n.BoostedGuildTiers.TIER_3].limits.emoji
                        }),
                        description: a.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_EMOJI,
                        icon: 1
                    }, {
                        title: a.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_STICKER.format({
                            adding: M(n.BoostedGuildTiers.TIER_3),
                            total: U(n.BoostedGuildTiers.TIER_3)
                        }),
                        description: a.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_STICKER,
                        icon: 8
                    }, {
                        title: a.default.Messages.SOUNDBOARD_MARKETING_BOOSTING_PERKS.format({
                            soundCount: N(n.BoostedGuildTiers.TIER_3),
                            totalSoundCount: D(n.BoostedGuildTiers.TIER_3)
                        }),
                        description: a.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_SOUNDBOARD,
                        icon: 13
                    }, {
                        title: a.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_AUDIO_QUALITY.format({
                            bitrate: R.BoostedGuildFeatures[n.BoostedGuildTiers.TIER_3].limits.bitrate / 1e3
                        }),
                        description: a.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_AUDIO_QUALITY,
                        icon: 2
                    }, {
                        title: a.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_3_VANITY_URL,
                        description: a.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_VANITY_URL.format({
                            helpdeskArticle: l.default.getArticleURL(n.HelpdeskArticles.GUILD_VANITY_URL)
                        }),
                        icon: 6
                    }, {
                        title: a.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_UPLOAD_LIMIT.format({
                            fileSize: (0, u.formatSize)(R.BoostedGuildFeatures[n.BoostedGuildTiers.TIER_3].limits.fileSize / 1024, {
                                useKibibytes: !0
                            })
                        }),
                        description: a.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_UPLOAD_LIMIT.format(),
                        icon: 5
                    }, {
                        title: a.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_3_ANIMATED_BANNER,
                        description: a.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_ANIMATED_BANNER,
                        icon: 3
                    }, e ? {
                        title: a.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_VIDEO_STAGE.format({
                            limit: n.MAX_STAGE_VIDEO_USER_LIMIT_TIER3
                        }),
                        description: a.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_VIDEO_STAGE.format({
                            limit: n.MAX_STAGE_VIDEO_USER_LIMIT_TIER3
                        }),
                        icon: 12
                    } : null].filter(r.isNotNullish)
                }];

            function f(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    {
                        useLevels: _ = !0
                    } = t;
                switch (e) {
                    case n.BoostedGuildTiers.NONE:
                        return _ ? a.default.Messages.PREMIUM_GUILD_TIER_0 : a.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_NONE_NAME;
                    case n.BoostedGuildTiers.TIER_1:
                        return a.default.Messages.PREMIUM_GUILD_TIER_1;
                    case n.BoostedGuildTiers.TIER_2:
                        return a.default.Messages.PREMIUM_GUILD_TIER_2;
                    case n.BoostedGuildTiers.TIER_3:
                        return a.default.Messages.PREMIUM_GUILD_TIER_3;
                    default:
                        throw Error("Not a valid tier type")
                }
            }

            function P(e) {
                switch (e) {
                    case n.BoostedGuildTiers.NONE:
                        return a.default.Messages.PREMIUM_GUILD_TIER_0;
                    case n.BoostedGuildTiers.TIER_1:
                        return a.default.Messages.PREMIUM_GUILD_TIER_1_SHORT;
                    case n.BoostedGuildTiers.TIER_2:
                        return a.default.Messages.PREMIUM_GUILD_TIER_2_SHORT;
                    case n.BoostedGuildTiers.TIER_3:
                        return a.default.Messages.PREMIUM_GUILD_TIER_3_SHORT;
                    default:
                        throw Error("Not a valid tier type")
                }
            }
            let c = T.memoize(e => (0, R.BoostedGuildFeatures)[n.BoostedGuildTiers.TIER_1].features.includes(e) ? n.BoostedGuildTiers.TIER_1 : (0, R.BoostedGuildFeatures)[n.BoostedGuildTiers.TIER_2].features.includes(e) ? n.BoostedGuildTiers.TIER_2 : (0, R.BoostedGuildFeatures)[n.BoostedGuildTiers.TIER_3].features.includes(e) ? n.BoostedGuildTiers.TIER_3 : null),
                O = e => {
                    if (e === n.BoostedGuildTiers.NONE) return n.AnalyticsObjectTypes.NONE;
                    if (e === n.BoostedGuildTiers.TIER_1) return n.AnalyticsObjectTypes.TIER_1;
                    if (e === n.BoostedGuildTiers.TIER_2) return n.AnalyticsObjectTypes.TIER_2;
                    else if (e === n.BoostedGuildTiers.TIER_3) return n.AnalyticsObjectTypes.TIER_3;
                    return null
                };

            function B(e, t) {
                for (let _ of h(t))
                    if (e >= _.amount) return _.tier;
                return n.BoostedGuildTiers.NONE
            }

            function A(e, t) {
                return null == t || null != e && e >= t
            }

            function g(e, t) {
                return A(e.premiumTier, t)
            }

            function C(e) {
                return T.values(e).filter(e => e.isAvailable())
            }

            function m() {
                let e = E.default.getPremiumTypeSubscription(),
                    t = Object.values(o.default.boostSlots),
                    {
                        numAvailableGuildBoostSlots: _,
                        numCanceledGuildBoostSlots: i
                    } = t.reduce((e, t) => (k(t) && e.numCanceledGuildBoostSlots++, t.isAvailable() && e.numAvailableGuildBoostSlots++, e), {
                        numAvailableGuildBoostSlots: 0,
                        numCanceledGuildBoostSlots: 0
                    });
                if (null == e || _ > 0) return null;
                if (e.status === n.SubscriptionStatusTypes.PAST_DUE) return a.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_SUBSCRIPTION_PAST_DUE;
                if (e.status === n.SubscriptionStatusTypes.ACCOUNT_HOLD) return a.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_SUBSCRIPTION_ACCOUNT_HOLD;
                if (i > 0) return a.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_PENDING_MUTATION_PREMIUM_GUILD_SUBSCRIPTION;
                if (null == e.renewalMutations) return null;
                let s = d.getNumPremiumGuildSubscriptions(e.renewalMutations.additionalPlans),
                    I = d.getNumPremiumGuildSubscriptions(e.additionalPlans);
                return I > s ? a.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_PENDING_MUTATION_PREMIUM_GUILD_SUBSCRIPTION : a.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_PENDING_MUTATION_PLAN
            }

            function p(e, t) {
                return K(e, t) > 0
            }

            function K(e, t) {
                let _ = B(e.length, t),
                    i = b(t)[_],
                    s = e.filter(e => null != e.endsAt);
                return i - (e.length - s.length)
            }

            function b(e) {
                return n.AppliedGuildBoostsRequiredForBoostedGuildTier
            }

            function h(e) {
                let t = b(e);
                return [{
                    tier: n.BoostedGuildTiers.TIER_3,
                    amount: t[n.BoostedGuildTiers.TIER_3],
                    nextTier: null
                }, {
                    tier: n.BoostedGuildTiers.TIER_2,
                    amount: t[n.BoostedGuildTiers.TIER_2],
                    nextTier: n.BoostedGuildTiers.TIER_3
                }, {
                    tier: n.BoostedGuildTiers.TIER_1,
                    amount: t[n.BoostedGuildTiers.TIER_1],
                    nextTier: n.BoostedGuildTiers.TIER_2
                }]
            }

            function F(e, t) {
                let _ = K(e, t);
                if (_ > 0) {
                    let t = e.sort((e, t) => null != e.endsAt && null != t.endsAt ? e.endsAt.getTime() - t.endsAt.getTime() : -1).filter(e => null != e.endsAt),
                        i = t[t.length - _];
                    return i.endsAt
                }
                return null
            }

            function y(e, t) {
                let _ = M(t),
                    i = G.indexOf(t);
                if (-1 === i) return 0;
                let s = G[i - 1],
                    I = null != s ? U(s) : 0,
                    T = U(t);
                return Math.max(0, _ - e.slice(I, T).length)
            }

            function v(e, t) {
                let _ = G.indexOf(t);
                if (-1 === _) return 0;
                let i = D(t);
                return Math.max(0, i - e.length)
            }

            function Y(e, t) {
                let _ = e.premiumSubscriberCount,
                    i = b(e.id)[t];
                return Math.max(0, i - _)
            }

            function k(e) {
                var t;
                return (null === (t = e.subscription) || void 0 === t ? void 0 : t.status) === n.SubscriptionStatusTypes.CANCELED || e.canceled
            }
        }
    }
]);
//# sourceMappingURL=4468.ed3046d6ecbba9443419.js.map