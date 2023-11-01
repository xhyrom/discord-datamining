(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["4468"], {
        625634: function(e, t, _) {
            "use strict";
            _.r(t), _.d(t, {
                default: function() {
                    return l
                }
            });
            var i = _("446674"),
                I = _("913144"),
                s = _("521012");
            let T = !1,
                E = {};

            function o(e) {
                let {
                    guildBoostSlot: t
                } = e;
                E = {
                    ...E,
                    [t.id]: t
                }
            }

            function u() {
                let e = {};
                for (let t of Object.values(E)) e[t.id] = t, t.subscription = s.default.getSubscriptionById(t.subscriptionId);
                E = e
            }
            class r extends i.default.Store {
                initialize() {
                    this.syncWith([s.default], u)
                }
                get hasFetched() {
                    return T
                }
                get boostSlots() {
                    return E
                }
                getGuildBoostSlot(e) {
                    return E[e]
                }
            }
            r.displayName = "GuildBoostSlotStore";
            var l = new r(I.default, {
                GUILD_BOOST_SLOTS_FETCH_SUCCESS: function(e) {
                    let {
                        guildBoostSlots: t
                    } = e;
                    E = {}, t.forEach(e => {
                        E[e.id] = e
                    }), T = !0
                },
                GUILD_BOOST_SLOT_UPDATE_SUCCESS: o,
                GUILD_BOOST_SLOT_CREATE: o,
                GUILD_BOOST_SLOT_UPDATE: o,
                LOGOUT: function() {
                    E = {}, T = !1
                }
            })
        },
        427459: function(e, t, _) {
            "use strict";
            _.r(t), _.d(t, {
                PerkIcons: function() {
                    return T
                },
                getNextTier: function() {
                    return D
                },
                getTotalStickerCountForTier: function() {
                    return N
                },
                getIncrementalStickerCountForTier: function() {
                    return f
                },
                getTotalSoundboardSoundCountForTier: function() {
                    return O
                },
                getIncrementalSoundboardSoundCountForTier: function() {
                    return P
                },
                getTiers: function() {
                    return c
                },
                getTierName: function() {
                    return A
                },
                getShortenedTierName: function() {
                    return B
                },
                minimumRequiredTierForGuildFeature: function() {
                    return g
                },
                boostedGuildTierToAnalyticsObjectType: function() {
                    return C
                },
                getGuildTierFromAppliedBoostCount: function() {
                    return m
                },
                getNextGuildTierFromAppliedBoostCount: function() {
                    return p
                },
                getAppliedGuildBoostMonths: function() {
                    return K
                },
                isGuildBoostedAtLeast: function() {
                    return b
                },
                isTierUnlocked: function() {
                    return V
                },
                getAvailableGuildBoostSlots: function() {
                    return h
                },
                generateBlockGuildSubscriptionPurchasesNode: function() {
                    return F
                },
                isInGracePeriod: function() {
                    return y
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
                    return H
                },
                getNumberOfAppliedBoostsNeededForTier: function() {
                    return J
                },
                isGuildBoostSlotCanceled: function() {
                    return w
                }
            });
            var i, I, s, T, E = _("917351"),
                o = _.n(E),
                u = _("866227"),
                r = _.n(u),
                l = _("625634"),
                d = _("521012"),
                n = _("993105"),
                R = _("449008"),
                a = _("701909"),
                G = _("719923"),
                S = _("49111"),
                U = _("646718"),
                M = _("782340");
            (i = s || (s = {}))[i.LEVEL_1 = 1] = "LEVEL_1", i[i.LEVEL_2 = 2] = "LEVEL_2", i[i.LEVEL_3 = 3] = "LEVEL_3", i[i.LEVEL_4 = 4] = "LEVEL_4", i[i.LEVEL_5 = 5] = "LEVEL_5", i[i.LEVEL_6 = 6] = "LEVEL_6", i[i.LEVEL_7 = 7] = "LEVEL_7", i[i.LEVEL_8 = 8] = "LEVEL_8", i[i.LEVEL_9 = 9] = "LEVEL_9", Object.freeze({
                1: 1,
                2: 2,
                3: 3,
                4: 6,
                5: 9,
                6: 12,
                7: 15,
                8: 18,
                9: 24
            }), (I = T || (T = {}))[I.EMOJI = 1] = "EMOJI", I[I.AUDIO = 2] = "AUDIO", I[I.ANIMATED = 3] = "ANIMATED", I[I.CUSTOMIZATION = 4] = "CUSTOMIZATION", I[I.UPLOAD = 5] = "UPLOAD", I[I.VANITY = 6] = "VANITY", I[I.STREAM = 7] = "STREAM", I[I.STICKER = 8] = "STICKER", I[I.CUSTOM_ROLE_ICON = 11] = "CUSTOM_ROLE_ICON", I[I.STAGE_VIDEO = 12] = "STAGE_VIDEO", I[I.SOUNDBOARD = 13] = "SOUNDBOARD";
            let L = [S.BoostedGuildTiers.NONE, S.BoostedGuildTiers.TIER_1, S.BoostedGuildTiers.TIER_2, S.BoostedGuildTiers.TIER_3],
                D = (e, t) => {
                    var _;
                    return e === S.BoostedGuildTiers.NONE ? S.BoostedGuildTiers.TIER_1 : null === (_ = k(t).find(t => t.tier === e)) || void 0 === _ ? void 0 : _.nextTier
                },
                N = e => U.TotalStickerCountsByTier[e],
                f = e => U.IncrementalStickerCountsByTier[e],
                O = e => U.TotalSoundboardSoundCountsByTier[e],
                P = e => {
                    if (e === S.BoostedGuildTiers.NONE) return U.TotalSoundboardSoundCountsByTier[e];
                    let t = L[L.indexOf(e) - 1];
                    return U.TotalSoundboardSoundCountsByTier[e] - U.TotalSoundboardSoundCountsByTier[t]
                },
                c = e => [{
                    tier: S.BoostedGuildTiers.TIER_1,
                    title: M.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERKS_TITLE_TIER_1,
                    perks: [{
                        title: M.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_EMOJI.format({
                            adding: U.BoostedGuildFeatures[S.BoostedGuildTiers.TIER_1].limits.emoji - U.BoostedGuildFeatures[S.BoostedGuildTiers.NONE].limits.emoji,
                            total: U.BoostedGuildFeatures[S.BoostedGuildTiers.TIER_1].limits.emoji
                        }),
                        description: M.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_EMOJI,
                        icon: T.EMOJI
                    }, {
                        title: M.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_STICKER.format({
                            adding: f(S.BoostedGuildTiers.TIER_1),
                            total: N(S.BoostedGuildTiers.TIER_1)
                        }),
                        description: M.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_STICKER,
                        icon: T.STICKER
                    }, {
                        title: M.default.Messages.SOUNDBOARD_MARKETING_BOOSTING_PERKS.format({
                            soundCount: P(S.BoostedGuildTiers.TIER_1),
                            totalSoundCount: O(S.BoostedGuildTiers.TIER_1)
                        }),
                        description: M.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_SOUNDBOARD,
                        icon: T.SOUNDBOARD
                    }, {
                        title: M.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_AUDIO_QUALITY.format({
                            bitrate: U.BoostedGuildFeatures[S.BoostedGuildTiers.TIER_1].limits.bitrate / 1e3
                        }),
                        description: M.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_AUDIO_QUALITY,
                        icon: T.AUDIO
                    }, {
                        title: M.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_1_ANIMATED_GUILD_ICON,
                        description: M.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_ANIMATED_GUILD_ICON.format(),
                        icon: T.ANIMATED
                    }, {
                        title: M.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_1_SPLASH,
                        description: M.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_SPLASH,
                        icon: T.CUSTOMIZATION
                    }, {
                        title: M.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_1_STREAMING,
                        description: M.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_STREAMING,
                        icon: T.STREAM
                    }].filter(R.isNotNullish)
                }, {
                    tier: S.BoostedGuildTiers.TIER_2,
                    title: M.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERKS_TITLE_TIER_2,
                    perks: [{
                        title: M.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_EMOJI.format({
                            adding: U.BoostedGuildFeatures[S.BoostedGuildTiers.TIER_2].limits.emoji - U.BoostedGuildFeatures[S.BoostedGuildTiers.TIER_1].limits.emoji,
                            total: U.BoostedGuildFeatures[S.BoostedGuildTiers.TIER_2].limits.emoji
                        }),
                        description: M.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_EMOJI,
                        icon: T.EMOJI
                    }, {
                        title: M.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_STICKER.format({
                            adding: f(S.BoostedGuildTiers.TIER_2),
                            total: N(S.BoostedGuildTiers.TIER_2)
                        }),
                        description: M.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_STICKER,
                        icon: T.STICKER
                    }, {
                        title: M.default.Messages.SOUNDBOARD_MARKETING_BOOSTING_PERKS.format({
                            soundCount: P(S.BoostedGuildTiers.TIER_2),
                            totalSoundCount: O(S.BoostedGuildTiers.TIER_2)
                        }),
                        description: M.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_SOUNDBOARD,
                        icon: T.SOUNDBOARD
                    }, {
                        title: M.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_AUDIO_QUALITY.format({
                            bitrate: U.BoostedGuildFeatures[S.BoostedGuildTiers.TIER_2].limits.bitrate / 1e3
                        }),
                        description: M.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_AUDIO_QUALITY,
                        icon: T.AUDIO
                    }, {
                        title: M.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_2_BANNER,
                        description: M.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_BANNER,
                        icon: T.CUSTOMIZATION
                    }, {
                        title: M.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_UPLOAD_LIMIT.format({
                            fileSize: (0, n.formatSize)(U.BoostedGuildFeatures[S.BoostedGuildTiers.TIER_2].limits.fileSize / 1024, {
                                useKibibytes: !0
                            })
                        }),
                        description: M.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_UPLOAD_LIMIT.format(),
                        icon: T.UPLOAD
                    }, {
                        title: M.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_2_STREAMING,
                        description: M.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_STREAMING,
                        icon: T.STREAM
                    }, {
                        title: M.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_2_CUSTOM_ROLE_ICONS,
                        description: M.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_CUSTOM_ROLE_ICONS,
                        icon: T.CUSTOM_ROLE_ICON
                    }, e ? {
                        title: M.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_VIDEO_STAGE.format({
                            limit: S.MAX_STAGE_VIDEO_USER_LIMIT_TIER2
                        }),
                        description: M.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_VIDEO_STAGE.format({
                            limit: S.MAX_STAGE_VIDEO_USER_LIMIT_TIER2
                        }),
                        icon: T.STAGE_VIDEO
                    } : null].filter(R.isNotNullish)
                }, {
                    tier: S.BoostedGuildTiers.TIER_3,
                    title: M.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERKS_TITLE_TIER_3,
                    perks: [{
                        title: M.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_EMOJI.format({
                            adding: U.BoostedGuildFeatures[S.BoostedGuildTiers.TIER_3].limits.emoji - U.BoostedGuildFeatures[S.BoostedGuildTiers.TIER_2].limits.emoji,
                            total: U.BoostedGuildFeatures[S.BoostedGuildTiers.TIER_3].limits.emoji
                        }),
                        description: M.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_EMOJI,
                        icon: T.EMOJI
                    }, {
                        title: M.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_STICKER.format({
                            adding: f(S.BoostedGuildTiers.TIER_3),
                            total: N(S.BoostedGuildTiers.TIER_3)
                        }),
                        description: M.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_STICKER,
                        icon: T.STICKER
                    }, {
                        title: M.default.Messages.SOUNDBOARD_MARKETING_BOOSTING_PERKS.format({
                            soundCount: P(S.BoostedGuildTiers.TIER_3),
                            totalSoundCount: O(S.BoostedGuildTiers.TIER_3)
                        }),
                        description: M.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_SOUNDBOARD,
                        icon: T.SOUNDBOARD
                    }, {
                        title: M.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_AUDIO_QUALITY.format({
                            bitrate: U.BoostedGuildFeatures[S.BoostedGuildTiers.TIER_3].limits.bitrate / 1e3
                        }),
                        description: M.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_AUDIO_QUALITY,
                        icon: T.AUDIO
                    }, {
                        title: M.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_3_VANITY_URL,
                        description: M.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_VANITY_URL.format({
                            helpdeskArticle: a.default.getArticleURL(S.HelpdeskArticles.GUILD_VANITY_URL)
                        }),
                        icon: T.VANITY
                    }, {
                        title: M.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_UPLOAD_LIMIT.format({
                            fileSize: (0, n.formatSize)(U.BoostedGuildFeatures[S.BoostedGuildTiers.TIER_3].limits.fileSize / 1024, {
                                useKibibytes: !0
                            })
                        }),
                        description: M.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_UPLOAD_LIMIT.format(),
                        icon: T.UPLOAD
                    }, {
                        title: M.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_3_ANIMATED_BANNER,
                        description: M.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_ANIMATED_BANNER,
                        icon: T.ANIMATED
                    }, e ? {
                        title: M.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_VIDEO_STAGE.format({
                            limit: S.MAX_STAGE_VIDEO_USER_LIMIT_TIER3
                        }),
                        description: M.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_VIDEO_STAGE.format({
                            limit: S.MAX_STAGE_VIDEO_USER_LIMIT_TIER3
                        }),
                        icon: T.STAGE_VIDEO
                    } : null].filter(R.isNotNullish)
                }];

            function A(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    {
                        useLevels: _ = !0
                    } = t;
                switch (e) {
                    case S.BoostedGuildTiers.NONE:
                        return _ ? M.default.Messages.PREMIUM_GUILD_TIER_0 : M.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_NONE_NAME;
                    case S.BoostedGuildTiers.TIER_1:
                        return M.default.Messages.PREMIUM_GUILD_TIER_1;
                    case S.BoostedGuildTiers.TIER_2:
                        return M.default.Messages.PREMIUM_GUILD_TIER_2;
                    case S.BoostedGuildTiers.TIER_3:
                        return M.default.Messages.PREMIUM_GUILD_TIER_3;
                    default:
                        throw Error("Not a valid tier type")
                }
            }

            function B(e) {
                switch (e) {
                    case S.BoostedGuildTiers.NONE:
                        return M.default.Messages.PREMIUM_GUILD_TIER_0;
                    case S.BoostedGuildTiers.TIER_1:
                        return M.default.Messages.PREMIUM_GUILD_TIER_1_SHORT;
                    case S.BoostedGuildTiers.TIER_2:
                        return M.default.Messages.PREMIUM_GUILD_TIER_2_SHORT;
                    case S.BoostedGuildTiers.TIER_3:
                        return M.default.Messages.PREMIUM_GUILD_TIER_3_SHORT;
                    default:
                        throw Error("Not a valid tier type")
                }
            }
            let g = o.memoize(e => (0, U.BoostedGuildFeatures)[S.BoostedGuildTiers.TIER_1].features.includes(e) ? S.BoostedGuildTiers.TIER_1 : (0, U.BoostedGuildFeatures)[S.BoostedGuildTiers.TIER_2].features.includes(e) ? S.BoostedGuildTiers.TIER_2 : (0, U.BoostedGuildFeatures)[S.BoostedGuildTiers.TIER_3].features.includes(e) ? S.BoostedGuildTiers.TIER_3 : null),
                C = e => {
                    if (e === S.BoostedGuildTiers.NONE) return S.AnalyticsObjectTypes.NONE;
                    if (e === S.BoostedGuildTiers.TIER_1) return S.AnalyticsObjectTypes.TIER_1;
                    if (e === S.BoostedGuildTiers.TIER_2) return S.AnalyticsObjectTypes.TIER_2;
                    else if (e === S.BoostedGuildTiers.TIER_3) return S.AnalyticsObjectTypes.TIER_3;
                    return null
                };

            function m(e, t) {
                for (let _ of k(t))
                    if (e >= _.amount) return _.tier;
                return S.BoostedGuildTiers.NONE
            }

            function p(e, t) {
                for (let _ of k(t))
                    if (e >= _.amount) return _.nextTier;
                return S.BoostedGuildTiers.TIER_1
            }

            function K(e) {
                var t;
                return null !== (t = r().diff(r(e), "months")) && void 0 !== t ? t : 1
            }

            function b(e, t) {
                return null == t || null != e && e >= t
            }

            function V(e, t) {
                return b(e.premiumTier, t)
            }

            function h(e) {
                return o.values(e).filter(e => e.isAvailable())
            }

            function F() {
                let e = d.default.getPremiumTypeSubscription(),
                    t = Object.values(l.default.boostSlots),
                    {
                        numAvailableGuildBoostSlots: _,
                        numCanceledGuildBoostSlots: i
                    } = t.reduce((e, t) => (w(t) && e.numCanceledGuildBoostSlots++, t.isAvailable() && e.numAvailableGuildBoostSlots++, e), {
                        numAvailableGuildBoostSlots: 0,
                        numCanceledGuildBoostSlots: 0
                    });
                if (null == e || _ > 0) return null;
                if (e.status === S.SubscriptionStatusTypes.PAST_DUE) return M.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_SUBSCRIPTION_PAST_DUE;
                if (e.status === S.SubscriptionStatusTypes.ACCOUNT_HOLD) return M.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_SUBSCRIPTION_ACCOUNT_HOLD;
                if (i > 0) return M.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_PENDING_MUTATION_PREMIUM_GUILD_SUBSCRIPTION;
                if (null == e.renewalMutations) return null;
                let I = G.getNumPremiumGuildSubscriptions(e.renewalMutations.additionalPlans),
                    s = G.getNumPremiumGuildSubscriptions(e.additionalPlans);
                return s > I ? M.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_PENDING_MUTATION_PREMIUM_GUILD_SUBSCRIPTION : M.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_PENDING_MUTATION_PLAN
            }

            function y(e, t) {
                return v(e, t) > 0
            }

            function v(e, t) {
                let _ = m(e.length, t),
                    i = Y(t)[_],
                    I = e.filter(e => null != e.endsAt);
                return i - (e.length - I.length)
            }

            function Y(e) {
                return S.AppliedGuildBoostsRequiredForBoostedGuildTier
            }

            function k(e) {
                let t = Y(e);
                return [{
                    tier: S.BoostedGuildTiers.TIER_3,
                    amount: t[S.BoostedGuildTiers.TIER_3],
                    nextTier: null
                }, {
                    tier: S.BoostedGuildTiers.TIER_2,
                    amount: t[S.BoostedGuildTiers.TIER_2],
                    nextTier: S.BoostedGuildTiers.TIER_3
                }, {
                    tier: S.BoostedGuildTiers.TIER_1,
                    amount: t[S.BoostedGuildTiers.TIER_1],
                    nextTier: S.BoostedGuildTiers.TIER_2
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
                let _ = f(t),
                    i = L.indexOf(t);
                if (-1 === i) return 0;
                let I = L[i - 1],
                    s = null != I ? N(I) : 0,
                    T = N(t);
                return Math.max(0, _ - e.slice(s, T).length)
            }

            function H(e, t) {
                let _ = L.indexOf(t);
                if (-1 === _) return 0;
                let i = O(t);
                return Math.max(0, i - e.length)
            }

            function J(e, t) {
                let _ = e.premiumSubscriberCount,
                    i = Y(e.id)[t];
                return Math.max(0, i - _)
            }

            function w(e) {
                var t;
                return (null === (t = e.subscription) || void 0 === t ? void 0 : t.status) === S.SubscriptionStatusTypes.CANCELED || e.canceled
            }
        }
    }
]);
//# sourceMappingURL=e9a351b295e82a50b02f.js.map