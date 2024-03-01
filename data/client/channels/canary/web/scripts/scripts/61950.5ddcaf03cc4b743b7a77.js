(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["61950"], {
        998460: function(e, t, _) {
            "use strict";
            _.r(t);
            var i = _("873044");
            _.es(i, t)
        },
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

            function u(e) {
                let {
                    guildBoostSlot: t
                } = e;
                o = {
                    ...o,
                    [t.id]: t
                }
            }

            function E() {
                let e = {};
                for (let t of Object.values(o)) e[t.id] = t, t.subscription = I.default.getSubscriptionById(t.subscriptionId);
                o = e
            }
            class r extends i.default.Store {
                initialize() {
                    this.syncWith([I.default], E)
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
                GUILD_BOOST_SLOT_UPDATE_SUCCESS: u,
                GUILD_BOOST_SLOT_CREATE: u,
                GUILD_BOOST_SLOT_UPDATE: u,
                LOGOUT: function() {
                    o = {}, T = !1
                }
            })
        },
        978679: function(e, t, _) {
            "use strict";
            _.r(t), _.d(t, {
                default: function() {
                    return o
                }
            });
            var i = _("37983");
            _("884691");
            var s = _("469563"),
                I = _("998460"),
                T = _("75196"),
                o = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: _ = 24,
                        color: s = "currentColor",
                        foreground: I,
                        ...o
                    } = e;
                    return (0, i.jsx)("svg", {
                        width: t,
                        height: _,
                        ...(0, T.default)(o),
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: s,
                            className: I,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M16.886 7.999H20C21.104 7.999 22 8.896 22 9.999V11.999H2V9.999C2 8.896 2.897 7.999 4 7.999H7.114C6.663 7.764 6.236 7.477 5.879 7.121C4.709 5.951 4.709 4.048 5.879 2.879C7.012 1.746 8.986 1.746 10.121 2.877C11.758 4.514 11.979 7.595 11.998 7.941C11.9991 7.9525 11.9966 7.96279 11.9941 7.97304C11.992 7.98151 11.99 7.98995 11.99 7.999H12.01C12.01 7.98986 12.0079 7.98134 12.0058 7.97287C12.0034 7.96282 12.0009 7.95286 12.002 7.942C12.022 7.596 12.242 4.515 13.879 2.878C15.014 1.745 16.986 1.746 18.121 2.877C19.29 4.049 19.29 5.952 18.121 7.121C17.764 7.477 17.337 7.764 16.886 7.999ZM7.293 5.707C6.903 5.316 6.903 4.682 7.293 4.292C7.481 4.103 7.732 4 8 4C8.268 4 8.519 4.103 8.707 4.292C9.297 4.882 9.641 5.94 9.825 6.822C8.945 6.639 7.879 6.293 7.293 5.707ZM14.174 6.824C14.359 5.941 14.702 4.883 15.293 4.293C15.481 4.103 15.732 4 16 4C16.268 4 16.519 4.103 16.706 4.291C17.096 4.682 17.097 5.316 16.707 5.707C16.116 6.298 15.057 6.642 14.174 6.824ZM3 13.999V19.999C3 21.102 3.897 21.999 5 21.999H11V13.999H3ZM13 13.999V21.999H19C20.104 21.999 21 21.102 21 19.999V13.999H13Z"
                        })
                    })
                }, I.GiftIcon, void 0, {
                    size: 24
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
                    return f
                },
                getTiers: function() {
                    return N
                },
                getTierName: function() {
                    return c
                },
                getShortenedTierName: function() {
                    return L
                },
                minimumRequiredTierForGuildFeature: function() {
                    return P
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
                    return C
                },
                getAvailableGuildBoostSlots: function() {
                    return g
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
                    return v
                },
                getAvailableStickerSlotCount: function() {
                    return y
                },
                getAvailableSoundboardSoundCount: function() {
                    return F
                },
                getNumberOfAppliedBoostsNeededForTier: function() {
                    return H
                },
                isGuildBoostSlotCanceled: function() {
                    return V
                }
            }), _("70102"), _("222007"), _("808653");
            var i, s, I = _("917351"),
                T = _.n(I);
            _("866227");
            var o = _("625634"),
                u = _("521012"),
                E = _("993105"),
                r = _("449008"),
                l = _("701909"),
                d = _("719923"),
                n = _("49111"),
                a = _("646718"),
                R = _("782340");
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
                U = e => a.TotalStickerCountsByTier[e],
                M = e => a.IncrementalStickerCountsByTier[e],
                D = e => a.TotalSoundboardSoundCountsByTier[e],
                f = e => {
                    if (e === n.BoostedGuildTiers.NONE) return a.TotalSoundboardSoundCountsByTier[e];
                    let t = G[G.indexOf(e) - 1];
                    return a.TotalSoundboardSoundCountsByTier[e] - a.TotalSoundboardSoundCountsByTier[t]
                },
                N = e => [{
                    tier: n.BoostedGuildTiers.TIER_1,
                    title: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERKS_TITLE_TIER_1,
                    perks: [{
                        title: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_EMOJI.format({
                            adding: a.BoostedGuildFeatures[n.BoostedGuildTiers.TIER_1].limits.emoji - a.BoostedGuildFeatures[n.BoostedGuildTiers.NONE].limits.emoji,
                            total: a.BoostedGuildFeatures[n.BoostedGuildTiers.TIER_1].limits.emoji
                        }),
                        description: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_EMOJI,
                        icon: 1
                    }, {
                        title: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_STICKER.format({
                            adding: M(n.BoostedGuildTiers.TIER_1),
                            total: U(n.BoostedGuildTiers.TIER_1)
                        }),
                        description: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_STICKER,
                        icon: 8
                    }, {
                        title: R.default.Messages.SOUNDBOARD_MARKETING_BOOSTING_PERKS.format({
                            soundCount: f(n.BoostedGuildTiers.TIER_1),
                            totalSoundCount: D(n.BoostedGuildTiers.TIER_1)
                        }),
                        description: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_SOUNDBOARD,
                        icon: 13
                    }, {
                        title: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_AUDIO_QUALITY.format({
                            bitrate: a.BoostedGuildFeatures[n.BoostedGuildTiers.TIER_1].limits.bitrate / 1e3
                        }),
                        description: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_AUDIO_QUALITY,
                        icon: 2
                    }, {
                        title: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_1_ANIMATED_GUILD_ICON,
                        description: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_ANIMATED_GUILD_ICON.format(),
                        icon: 3
                    }, {
                        title: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_1_SPLASH,
                        description: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_SPLASH,
                        icon: 4
                    }, {
                        title: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_1_STREAMING,
                        description: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_STREAMING,
                        icon: 7
                    }].filter(r.isNotNullish)
                }, {
                    tier: n.BoostedGuildTiers.TIER_2,
                    title: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERKS_TITLE_TIER_2,
                    perks: [{
                        title: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_EMOJI.format({
                            adding: a.BoostedGuildFeatures[n.BoostedGuildTiers.TIER_2].limits.emoji - a.BoostedGuildFeatures[n.BoostedGuildTiers.TIER_1].limits.emoji,
                            total: a.BoostedGuildFeatures[n.BoostedGuildTiers.TIER_2].limits.emoji
                        }),
                        description: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_EMOJI,
                        icon: 1
                    }, {
                        title: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_STICKER.format({
                            adding: M(n.BoostedGuildTiers.TIER_2),
                            total: U(n.BoostedGuildTiers.TIER_2)
                        }),
                        description: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_STICKER,
                        icon: 8
                    }, {
                        title: R.default.Messages.SOUNDBOARD_MARKETING_BOOSTING_PERKS.format({
                            soundCount: f(n.BoostedGuildTiers.TIER_2),
                            totalSoundCount: D(n.BoostedGuildTiers.TIER_2)
                        }),
                        description: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_SOUNDBOARD,
                        icon: 13
                    }, {
                        title: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_AUDIO_QUALITY.format({
                            bitrate: a.BoostedGuildFeatures[n.BoostedGuildTiers.TIER_2].limits.bitrate / 1e3
                        }),
                        description: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_AUDIO_QUALITY,
                        icon: 2
                    }, {
                        title: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_2_BANNER,
                        description: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_BANNER,
                        icon: 4
                    }, {
                        title: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_UPLOAD_LIMIT.format({
                            fileSize: (0, E.formatSize)(a.BoostedGuildFeatures[n.BoostedGuildTiers.TIER_2].limits.fileSize / 1024, {
                                useKibibytes: !0
                            })
                        }),
                        description: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_UPLOAD_LIMIT.format(),
                        icon: 5
                    }, {
                        title: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_2_STREAMING,
                        description: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_STREAMING,
                        icon: 7
                    }, {
                        title: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_2_CUSTOM_ROLE_ICONS,
                        description: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_CUSTOM_ROLE_ICONS,
                        icon: 11
                    }, e ? {
                        title: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_VIDEO_STAGE.format({
                            limit: n.MAX_STAGE_VIDEO_USER_LIMIT_TIER2
                        }),
                        description: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_VIDEO_STAGE.format({
                            limit: n.MAX_STAGE_VIDEO_USER_LIMIT_TIER2
                        }),
                        icon: 12
                    } : null].filter(r.isNotNullish)
                }, {
                    tier: n.BoostedGuildTiers.TIER_3,
                    title: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERKS_TITLE_TIER_3,
                    perks: [{
                        title: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_EMOJI.format({
                            adding: a.BoostedGuildFeatures[n.BoostedGuildTiers.TIER_3].limits.emoji - a.BoostedGuildFeatures[n.BoostedGuildTiers.TIER_2].limits.emoji,
                            total: a.BoostedGuildFeatures[n.BoostedGuildTiers.TIER_3].limits.emoji
                        }),
                        description: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_EMOJI,
                        icon: 1
                    }, {
                        title: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_STICKER.format({
                            adding: M(n.BoostedGuildTiers.TIER_3),
                            total: U(n.BoostedGuildTiers.TIER_3)
                        }),
                        description: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_STICKER,
                        icon: 8
                    }, {
                        title: R.default.Messages.SOUNDBOARD_MARKETING_BOOSTING_PERKS.format({
                            soundCount: f(n.BoostedGuildTiers.TIER_3),
                            totalSoundCount: D(n.BoostedGuildTiers.TIER_3)
                        }),
                        description: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_SOUNDBOARD,
                        icon: 13
                    }, {
                        title: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_AUDIO_QUALITY.format({
                            bitrate: a.BoostedGuildFeatures[n.BoostedGuildTiers.TIER_3].limits.bitrate / 1e3
                        }),
                        description: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_AUDIO_QUALITY,
                        icon: 2
                    }, {
                        title: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_3_VANITY_URL,
                        description: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_VANITY_URL.format({
                            helpdeskArticle: l.default.getArticleURL(n.HelpdeskArticles.GUILD_VANITY_URL)
                        }),
                        icon: 6
                    }, {
                        title: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_UPLOAD_LIMIT.format({
                            fileSize: (0, E.formatSize)(a.BoostedGuildFeatures[n.BoostedGuildTiers.TIER_3].limits.fileSize / 1024, {
                                useKibibytes: !0
                            })
                        }),
                        description: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_UPLOAD_LIMIT.format(),
                        icon: 5
                    }, {
                        title: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_3_ANIMATED_BANNER,
                        description: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_ANIMATED_BANNER,
                        icon: 3
                    }, e ? {
                        title: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_VIDEO_STAGE.format({
                            limit: n.MAX_STAGE_VIDEO_USER_LIMIT_TIER3
                        }),
                        description: R.default.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_VIDEO_STAGE.format({
                            limit: n.MAX_STAGE_VIDEO_USER_LIMIT_TIER3
                        }),
                        icon: 12
                    } : null].filter(r.isNotNullish)
                }];

            function c(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    {
                        useLevels: _ = !0
                    } = t;
                switch (e) {
                    case n.BoostedGuildTiers.NONE:
                        return _ ? R.default.Messages.PREMIUM_GUILD_TIER_0 : R.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_NONE_NAME;
                    case n.BoostedGuildTiers.TIER_1:
                        return R.default.Messages.PREMIUM_GUILD_TIER_1;
                    case n.BoostedGuildTiers.TIER_2:
                        return R.default.Messages.PREMIUM_GUILD_TIER_2;
                    case n.BoostedGuildTiers.TIER_3:
                        return R.default.Messages.PREMIUM_GUILD_TIER_3;
                    default:
                        throw Error("Not a valid tier type")
                }
            }

            function L(e) {
                switch (e) {
                    case n.BoostedGuildTiers.NONE:
                        return R.default.Messages.PREMIUM_GUILD_TIER_0;
                    case n.BoostedGuildTiers.TIER_1:
                        return R.default.Messages.PREMIUM_GUILD_TIER_1_SHORT;
                    case n.BoostedGuildTiers.TIER_2:
                        return R.default.Messages.PREMIUM_GUILD_TIER_2_SHORT;
                    case n.BoostedGuildTiers.TIER_3:
                        return R.default.Messages.PREMIUM_GUILD_TIER_3_SHORT;
                    default:
                        throw Error("Not a valid tier type")
                }
            }
            let P = T.memoize(e => (0, a.BoostedGuildFeatures)[n.BoostedGuildTiers.TIER_1].features.includes(e) ? n.BoostedGuildTiers.TIER_1 : (0, a.BoostedGuildFeatures)[n.BoostedGuildTiers.TIER_2].features.includes(e) ? n.BoostedGuildTiers.TIER_2 : (0, a.BoostedGuildFeatures)[n.BoostedGuildTiers.TIER_3].features.includes(e) ? n.BoostedGuildTiers.TIER_3 : null),
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

            function C(e, t) {
                return A(e.premiumTier, t)
            }

            function g(e) {
                return T.values(e).filter(e => e.isAvailable())
            }

            function m() {
                let e = u.default.getPremiumTypeSubscription(),
                    t = Object.values(o.default.boostSlots),
                    {
                        numAvailableGuildBoostSlots: _,
                        numCanceledGuildBoostSlots: i
                    } = t.reduce((e, t) => (V(t) && e.numCanceledGuildBoostSlots++, t.isAvailable() && e.numAvailableGuildBoostSlots++, e), {
                        numAvailableGuildBoostSlots: 0,
                        numCanceledGuildBoostSlots: 0
                    });
                if (null == e || _ > 0) return null;
                if (e.status === n.SubscriptionStatusTypes.PAST_DUE) return R.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_SUBSCRIPTION_PAST_DUE;
                if (e.status === n.SubscriptionStatusTypes.ACCOUNT_HOLD) return R.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_SUBSCRIPTION_ACCOUNT_HOLD;
                if (i > 0) return R.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_PENDING_MUTATION_PREMIUM_GUILD_SUBSCRIPTION;
                if (null == e.renewalMutations) return null;
                let s = d.getNumPremiumGuildSubscriptions(e.renewalMutations.additionalPlans),
                    I = d.getNumPremiumGuildSubscriptions(e.additionalPlans);
                return I > s ? R.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_PENDING_MUTATION_PREMIUM_GUILD_SUBSCRIPTION : R.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_PENDING_MUTATION_PLAN
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

            function v(e, t) {
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

            function F(e, t) {
                let _ = G.indexOf(t);
                if (-1 === _) return 0;
                let i = D(t);
                return Math.max(0, i - e.length)
            }

            function H(e, t) {
                let _ = e.premiumSubscriberCount,
                    i = b(e.id)[t];
                return Math.max(0, i - _)
            }

            function V(e) {
                var t;
                return (null === (t = e.subscription) || void 0 === t ? void 0 : t.status) === n.SubscriptionStatusTypes.CANCELED || e.canceled
            }
        },
        873044: function(e, t, _) {
            "use strict";
            _.r(t), _.d(t, {
                GiftIcon: function() {
                    return T
                }
            });
            var i = _("37983");
            _("884691");
            var s = _("669491"),
                I = _("82169");
            let T = e => {
                let {
                    width: t = 24,
                    height: _ = 24,
                    color: T = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...u
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, I.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: _,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof T ? T : T.css,
                        fillRule: "evenodd",
                        d: "M4 6a4 4 0 0 1 4-4h.09c1.8 0 3.39 1.18 3.91 2.9A4.09 4.09 0 0 1 15.91 2H16a4 4 0 0 1 3.46 6H20a2 2 0 0 1 2 2v1.5a.5.5 0 0 1-.5.5h-19a.5.5 0 0 1-.5-.5V10c0-1.1.9-2 2-2h.54A3.98 3.98 0 0 1 4 6Zm12 2a2 2 0 1 0 0-4h-.09c-.96 0-1.8.65-2.02 1.58L13.29 8H16Zm-5.89-2.42.6 2.42H8a2 2 0 1 1 0-4h.09c.96 0 1.8.65 2.02 1.58Z",
                        clipRule: "evenodd",
                        className: o
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof T ? T : T.css,
                        d: "M3 20c0 1.1.9 2 2 2h5.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5V20ZM13.5 22a.5.5 0 0 1-.5-.5v-7c0-.28.22-.5.5-.5h7c.28 0 .5.22.5.5V20a2 2 0 0 1-2 2h-5.5Z",
                        className: o
                    })]
                })
            }
        }
    }
]);
//# sourceMappingURL=61950.5ddcaf03cc4b743b7a77.js.map