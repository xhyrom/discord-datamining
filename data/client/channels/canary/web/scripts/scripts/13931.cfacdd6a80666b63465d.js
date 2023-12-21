(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["13931"], {
        740841: function(n, e, t) {
            "use strict";
            t.r(e), t.d(e, {
                updateGuildSelfMember: function() {
                    return u
                }
            }), t("789020");
            var i = t("454836"),
                r = t("312916"),
                a = t("243393"),
                o = t("911533"),
                l = t("467006");

            function u(n, e) {
                var t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (o.default.isFullServerPreview(n)) {
                    (0, a.updateImpersonatedData)(n, {
                        memberOptions: e
                    });
                    return
                }
                return r.default.dispatch({
                    type: "GUILD_MEMBER_UPDATE_LOCAL",
                    guildId: n,
                    roles: e.roles,
                    flags: e.flags
                }), i.default.patch({
                    url: l.Endpoints.SET_GUILD_MEMBER(n),
                    body: e,
                    oldFormErrors: !!t || void 0
                })
            }
        },
        523989: function(n, e, t) {
            "use strict";
            t.r(e), t.d(e, {
                default: function() {
                    return y
                }
            });
            var i = t("356056"),
                r = t("21189"),
                a = t("227094"),
                o = t("154005"),
                l = t("761020"),
                u = t("324415");
            t("363505"), t("462848"), t("357629"), t("568603"), t("128242"), t("86693"), t("536091"), t("814951"), t("330740"), t("996173"), t("47120"), t("789020");
            var d = t("392711"),
                s = t.n(d),
                f = t("323419"),
                c = t("454836"),
                _ = t("312916"),
                p = t("297483"),
                g = t("244180"),
                O = t("740841"),
                v = t("243393"),
                N = t("911533"),
                E = t("229986"),
                I = t("731865"),
                S = t("361733"),
                h = t("871831"),
                b = t("328470"),
                D = t("984362"),
                m = t("370275"),
                A = t("281925"),
                P = t("343720"),
                G = t("23650"),
                C = t("246739"),
                T = t("467006"),
                R = t("551748"),
                L = t("587361");

            function F(n) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (!N.default.isFullServerPreview(n)) {
                    var t = e ? P.default.getOnboardingPromptsForOnboarding(n) : P.default.getOnboardingPrompts(n),
                        i = P.default.getOnboardingResponses(n),
                        r = t.map(function(n) {
                            return n.options.filter(function(n) {
                                return i.includes(n.id)
                            })
                        }).flat(),
                        a = {},
                        o = {};
                    return (t.forEach(function(n) {
                        a[n.id] = Date.now(), n.options.forEach(function(n) {
                            return o[n.id] = Date.now()
                        })
                    }), e) ? c.default.post({
                        url: T.Endpoints.GUILD_ONBOARDING_RESPONSES(n),
                        body: {
                            onboarding_responses: r.map(function(n) {
                                return n.id
                            }),
                            onboarding_prompts_seen: a,
                            onboarding_responses_seen: o
                        }
                    }).then(function(e) {
                        null != e.body && _.default.dispatch({
                            type: "GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS",
                            guildId: n,
                            options: e.body.onboarding_responses,
                            prompts_seen: e.body.onboarding_prompts_seen,
                            options_seen: e.body.onboarding_responses_seen
                        })
                    }).catch(function(n) {
                        return A.default.captureException(n)
                    }) : c.default.put({
                        url: T.Endpoints.GUILD_ONBOARDING_RESPONSES(n),
                        body: {
                            onboarding_responses: r.map(function(n) {
                                return n.id
                            }),
                            onboarding_prompts_seen: a,
                            onboarding_responses_seen: o
                        }
                    }).then(function(e) {
                        null != e.body && _.default.dispatch({
                            type: "GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS",
                            guildId: n,
                            options: e.body.onboarding_responses,
                            prompts_seen: e.body.onboarding_prompts_seen,
                            options_seen: e.body.onboarding_responses_seen
                        })
                    }).catch(function(n) {
                        return A.default.captureException(n)
                    })
                }
            }
            var y = {
                selectOption(n, e, t, i) {
                    var r = P.default.getOnboardingPrompt(e);
                    if (null != r) {
                        var a = r.singleSelect ? s().without(s().map(r.options, "id"), t) : [];
                        _.default.dispatch({
                            type: "GUILD_ONBOARDING_SELECT_OPTION",
                            guildId: n,
                            promptId: e,
                            optionId: t,
                            selected: i,
                            removedOptionIds: a
                        })
                    }
                },
                updateOnboardingResponses: s().debounce(F, 1e3),
                updateRolesLocal: function(n, e, t) {
                    var i, r, a = null !== (r = null === (i = S.default.getSelfMember(n)) || void 0 === i ? void 0 : i.roles) && void 0 !== r ? r : [];
                    if (N.default.isViewingRoles(n)) {
                        (0, v.updateImpersonatedRoles)(n, s().difference(s().union(a, e), t));
                        return
                    }(e.length > 0 || t.length > 0) && _.default.dispatch({
                        type: "GUILD_MEMBER_UPDATE_LOCAL",
                        guildId: n,
                        roles: s().difference(s().union(a, e), t),
                        addedRoleIds: e,
                        removedRoleIds: t
                    })
                },
                completeOnboarding(n, e) {
                    var t = e.length > 0 ? e[e.length - 1] : null,
                        i = P.default.getSelectedOptions(n),
                        u = (0, G.getSelectedRoleIds)(i),
                        d = (0, G.getSelectedChannelIds)(i),
                        s = P.default.getEnabled(n) ? P.default.getDefaultChannelIds(n) : [],
                        c = (0, o._)((0, G.getChannelCoverageForOnboarding)(n, e, s), 2),
                        _ = c[0],
                        O = c[1],
                        E = (0, l._)(d).concat((0, l._)(s)),
                        A = E.map(function(n) {
                            return I.default.getChannel(n)
                        }).filter(m.isNotNullish),
                        y = (0, C.getFlattenedChannels)(n, new Set(E), A, !0).length,
                        U = null == t ? [] : t.options.map(function(n) {
                            return n.id
                        });
                    if (b.default.track(T.AnalyticEvents.GUILD_ONBOARDING_STEP_COMPLETED, (0, a._)((0, r._)({}, (0, g.collectGuildAnalyticsMetadata)(n)), {
                            step: e.length - 1,
                            options_selected: null == t ? 0 : i.filter(function(n) {
                                return U.includes(n.id)
                            }).length,
                            skipped: U.length > 0,
                            back: !1,
                            in_onboarding: !0,
                            is_final_step: !0,
                            roles_granted: u.size,
                            channels_granted: y,
                            guild_onboarding_covered_channel_ids: _.map(function(n) {
                                return n.id
                            }),
                            guild_onboarding_uncovered_channel_ids: O.map(function(n) {
                                return n.id
                            })
                        })), (0, p.ackGuildFeature)(n, L.ReadStateTypes.GUILD_ONBOARDING_QUESTION, f.default.fromTimestamp(Date.now())), F(n, !0), N.default.isFullServerPreview(n)) {
                        (0, v.updateImpersonatedChannels)(n, E, []), (0, v.updateImpersonatedData)(n, {
                            optInEnabled: !0
                        }), (0, v.updateImpersonatedRoles)(n, Array.from(u));
                        var M = h.default.getCurrentUser();
                        if (null != M) {
                            var B, w, H = null !== (w = null === (B = S.default.getMember(n, M.id)) || void 0 === B ? void 0 : B.flags) && void 0 !== w ? w : 0;
                            (0, v.updateImpersonatedData)(n, {
                                memberOptions: {
                                    flags: (0, D.setFlag)(H, R.GuildMemberFlags.COMPLETED_ONBOARDING, !0)
                                }
                            })
                        }
                    }
                },
                onboardExistingMember(n, e) {
                    var t = new Set(e);
                    (P.default.getEnabled(n) ? P.default.getDefaultChannelIds(n) : []).forEach(function(n) {
                        return t.add(n)
                    }), t.size > 0 && (0, E.bulkOptInChannels)(n, Array.from(t), !0, {
                        page: T.AnalyticsPages.GUILD_ONBOARDING
                    })
                },
                finishOnboarding(n) {
                    _.default.dispatch({
                        type: "GUILD_ONBOARDING_COMPLETE",
                        guildId: n
                    })
                },
                setUserOnboardingStep(n, e) {
                    _.default.dispatch({
                        type: "GUILD_ONBOARDING_SET_STEP",
                        guildId: n,
                        step: e
                    })
                },
                resetOnboarding: n => (0, i._)(function() {
                    var e, t, i, r;
                    return (0, u._)(this, function(a) {
                        switch (a.label) {
                            case 0:
                                if (!(null != (e = h.default.getCurrentUser()))) return [3, 2];
                                return r = null !== (i = null === (t = S.default.getMember(n, e.id)) || void 0 === t ? void 0 : t.flags) && void 0 !== i ? i : 0, [4, (0, O.updateGuildSelfMember)(n, {
                                    flags: (0, D.setFlag)(r, R.GuildMemberFlags.COMPLETED_ONBOARDING, !1)
                                })];
                            case 1:
                                a.sent(), a.label = 2;
                            case 2:
                                return [2]
                        }
                    })
                })()
            }
        },
        953131: function(n, e, t) {
            "use strict";
            t.r(e), t.d(e, {
                fetchOnboardingPrompts: function() {
                    return I
                },
                loadOnboardingPrompts: function() {
                    return E
                },
                maybeFetchOnboardingPrompts: function() {
                    return S
                },
                startOnboarding: function() {
                    return b
                }
            });
            var i = t("356056"),
                r = t("21189"),
                a = t("227094"),
                o = t("324415");
            t("789020"), t("191489"), t("357629");
            var l = t("454836"),
                u = t("312916"),
                d = t("244180"),
                s = t("262047"),
                f = t("361733"),
                c = t("327271"),
                _ = t("328470"),
                p = t("984362"),
                g = t("343720"),
                O = t("745590"),
                v = t("467006"),
                N = t("551748");

            function E(n) {
                _.default.track(v.AnalyticEvents.GUILD_ONBOARDING_LOADED, (0, a._)((0, r._)({}, (0, d.collectGuildAnalyticsMetadata)(n)), {
                    has_new_prompts: !1,
                    number_of_prompts: 0
                }))
            }

            function I(n) {
                return u.default.dispatch({
                    type: "GUILD_ONBOARDING_PROMPTS_FETCH_START",
                    guildId: n
                }), l.default.get({
                    url: v.Endpoints.GUILD_ONBOARDING(n)
                }).then(function(e) {
                    var t = e.body,
                        i = (0, O.serverApiResponseToClientState)(t);
                    return u.default.dispatch((0, r._)({
                        type: "GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS",
                        guildId: n
                    }, i)).then(function() {
                        return i.prompts
                    })
                }, function(e) {
                    return u.default.dispatch({
                        type: "GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE",
                        guildId: n
                    }), e
                })
            }

            function S(n) {
                return h.apply(this, arguments)
            }

            function h() {
                return (h = (0, i._)(function(n) {
                    var e, t, i, r, a, l, u, d;
                    return (0, o._)(this, function(o) {
                        switch (o.label) {
                            case 0:
                                if (t = s.default.getId(), r = (0, p.hasFlag)(null !== (i = null === (e = f.default.getMember(n, t)) || void 0 === e ? void 0 : e.flags) && void 0 !== i ? i : 0, N.GuildMemberFlags.COMPLETED_ONBOARDING), null == (a = c.default.getGuild(n)) || !a.hasFeature(v.GuildFeatures.GUILD_ONBOARDING)) return [2, Promise.resolve()];
                                if (l = g.default.shouldFetchPrompts(n), u = g.default.getOnboardingPrompts(n), !l && u.length > 0) {
                                    if (u.every(function(n) {
                                            return !n.inOnboarding
                                        })) return D(n), [2, Promise.resolve()];
                                    return !r && b(n), [2, Promise.resolve()]
                                }
                                return [4, I(n)];
                            case 1:
                                if (Array.isArray(d = o.sent()) && d.every(function(n) {
                                        return !n.inOnboarding
                                    })) return D(n), [2, Promise.resolve()];
                                return !r && b(n), [2, d]
                        }
                    })
                })).apply(this, arguments)
            }

            function b(n) {
                u.default.dispatch({
                    type: "GUILD_ONBOARDING_START",
                    guildId: n
                })
            }

            function D(n) {
                _.default.track(v.AnalyticEvents.GUILD_ONBOARDING_STEP_VIEWED, (0, a._)((0, r._)({}, (0, d.collectGuildAnalyticsMetadata)(n)), {
                    step: -2,
                    required: !0
                })), _.default.track(v.AnalyticEvents.GUILD_ONBOARDING_STEP_COMPLETED, (0, a._)((0, r._)({}, (0, d.collectGuildAnalyticsMetadata)(n)), {
                    step: -2,
                    skipped: !1,
                    is_final_step: !0,
                    in_onboarding: !0
                }))
            }
        },
        745590: function(n, e, t) {
            "use strict";
            t.r(e), t.d(e, {
                DROPDOWN_MAX_NUM_OPTIONS: function() {
                    return N
                },
                GuildOnboardingMode: function() {
                    return u
                },
                GuildOnboardingTab: function() {
                    return o
                },
                MAX_NUMBER_OF_ONBOARDING_PROMPTS_IN_ONBOARDING: function() {
                    return E
                },
                MAX_NUM_PROMPTS: function() {
                    return O
                },
                MAX_PROMPT_OPTION_DESCRIPTION_LENGTH: function() {
                    return g
                },
                MAX_PROMPT_OPTION_TITLE_LENGTH: function() {
                    return p
                },
                MAX_PROMPT_TITLE_LENGTH: function() {
                    return _
                },
                MIN_NUMBER_OF_DEFAULT_CHANNELS_FOR_ONBOARDING: function() {
                    return I
                },
                MULTIPLE_CHOICE_MAX_NUM_OPTIONS: function() {
                    return v
                },
                NUM_DEFAULT_CHATTABLE_CHANNELS_MIN: function() {
                    return S
                },
                ONBOARDING_PROMPT_TYPE_SWITCH_THRESHOLD: function() {
                    return h
                },
                OnboardingPromptType: function() {
                    return l
                },
                clientPromptToServerPrompt: function() {
                    return A
                },
                getDefaultPrompt: function() {
                    return D
                },
                getEmptyPrompt: function() {
                    return m
                },
                isDefaultPrompt: function() {
                    return b
                },
                isEmojiEmpty: function() {
                    return C
                },
                serverApiResponseToClientState: function() {
                    return G
                }
            });
            var i, r, a, o, l, u, d = t("261047");
            t("363505"), t("633702"), t("266796");
            var s = t("348327"),
                f = t.n(s),
                c = t("30175"),
                _ = 100,
                p = 50,
                g = 100,
                O = 15,
                v = 12,
                N = 50,
                E = 4,
                I = 7,
                S = 5,
                h = 13;

            function b(n) {
                if (n.options.length > 0) return !1;
                var e = D(),
                    t = (e.id, (0, d._)(e, ["id"]));
                n.id;
                var i = (0, d._)(n, ["id"]);
                return f()(t, i)
            }

            function D() {
                return {
                    id: String(Date.now()),
                    title: c.default.Messages.ONBOARDING_PROMPT_DEFAULT_TITLE,
                    options: [],
                    singleSelect: !1,
                    required: !1,
                    inOnboarding: !0,
                    type: 0
                }
            }

            function m(n) {
                return {
                    id: String(Date.now()),
                    title: "",
                    options: [],
                    singleSelect: !1,
                    required: !1,
                    inOnboarding: n,
                    type: 0
                }
            }

            function A(n) {
                return {
                    id: n.id,
                    options: n.options.map(function(n) {
                        var e, t, i;
                        return {
                            id: n.id,
                            channel_ids: n.channelIds,
                            role_ids: n.roleIds,
                            emoji: n.emoji,
                            emoji_id: null === (e = n.emoji) || void 0 === e ? void 0 : e.id,
                            emoji_name: null === (t = n.emoji) || void 0 === t ? void 0 : t.name,
                            emoji_animated: null === (i = n.emoji) || void 0 === i ? void 0 : i.animated,
                            title: n.title,
                            description: n.description
                        }
                    }),
                    title: n.title,
                    single_select: n.singleSelect,
                    disabled: n.disabled,
                    required: n.required,
                    in_onboarding: n.inOnboarding,
                    type: n.type
                }
            }

            function P(n) {
                return {
                    id: n.id,
                    options: n.options.map(function(n) {
                        var e;
                        return {
                            id: n.id,
                            channelIds: n.channel_ids,
                            roleIds: n.role_ids,
                            emoji: n.emoji,
                            title: n.title,
                            description: null !== (e = n.description) && void 0 !== e ? e : ""
                        }
                    }),
                    title: n.title,
                    singleSelect: n.single_select,
                    disabled: n.disabled,
                    required: n.required,
                    inOnboarding: n.in_onboarding,
                    type: n.type
                }
            }

            function G(n) {
                var e, t, i;
                return {
                    prompts: n.prompts.map(P),
                    defaultChannelIds: n.default_channel_ids,
                    responses: null !== (e = n.responses) && void 0 !== e ? e : [],
                    mode: n.mode,
                    enabled: n.enabled,
                    onboardingPromptsSeen: null !== (t = n.onboarding_prompts_seen) && void 0 !== t ? t : {},
                    onboardingResponsesSeen: null !== (i = n.onboarding_responses_seen) && void 0 !== i ? i : {},
                    belowRequirements: n.below_requirements
                }
            }

            function C(n) {
                return null == n || null == n.id && null == n.name
            }(i = o || (o = {}))[i.CUSTOMIZE = 0] = "CUSTOMIZE", i[i.BROWSE = 1] = "BROWSE", (r = l || (l = {}))[r.MULTIPLE_CHOICE = 0] = "MULTIPLE_CHOICE", r[r.DROPDOWN = 1] = "DROPDOWN", (a = u || (u = {}))[a.ONBOARDING_DEFAULT = 0] = "ONBOARDING_DEFAULT", a[a.ONBOARDING_ADVANCED = 1] = "ONBOARDING_ADVANCED"
        },
        343720: function(n, e, t) {
            "use strict";
            t.r(e), t.d(e, {
                default: function() {
                    return T
                }
            });
            var i = t("87627"),
                r = t("29713"),
                a = t("21189"),
                o = t("227094"),
                l = t("778455");
            t("653041"), t("363505"), t("462848"), t("357629"), t("568603"), t("128242"), t("86693"), t("536091"), t("69485");
            var u = t("392711"),
                d = t.n(u),
                s = t("661223"),
                f = t("312916"),
                c = t("911533"),
                _ = t("731865"),
                p = t("152551"),
                g = t("84819"),
                O = t("919512"),
                v = t("347069"),
                N = t("745590"),
                E = {},
                I = {},
                S = {},
                h = !1;

            function b(n, e, t) {
                return n.map(function(n) {
                    return function(n, e, t) {
                        for (var i = !1, r = [], l = 0; l < n.options.length; l++) {
                            var u = n.options[l],
                                d = null == t[u.id];
                            d && (i = !0), r.push((0, o._)((0, a._)({}, u), {
                                isUnseen: d
                            }))
                        }
                        return (0, o._)((0, a._)({}, n), {
                            options: r,
                            hasNewAnswers: i,
                            isNew: null == e[n.id]
                        })
                    }(n, e, t)
                })
            }

            function D(n) {
                var e, t, i, r, l, u, d, s, f, c = n.guildId,
                    _ = n.updates,
                    p = null !== (l = null !== (r = _.onboardingPromptsSeen) && void 0 !== r ? r : null === (e = E[c]) || void 0 === e ? void 0 : e.onboardingPromptsSeen) && void 0 !== l ? l : {},
                    g = null !== (d = null !== (u = _.onboardingResponsesSeen) && void 0 !== u ? u : null === (t = E[c]) || void 0 === t ? void 0 : t.onboardingResponsesSeen) && void 0 !== d ? d : {},
                    O = b(null !== (f = null !== (s = _.prompts) && void 0 !== s ? s : null === (i = E[c]) || void 0 === i ? void 0 : i.prompts) && void 0 !== f ? f : [], p, g);
                E[c] = (0, o._)((0, a._)({}, E[c], _), {
                    prompts: O
                })
            }

            function m(n, e) {
                if (null != I[n]) {
                    var t = {};
                    Object.keys(I[n]).forEach(function(i) {
                        !e.includes(i) && I[n][i] ? t[i] = !0 : e.includes(i) && !1 === I[n][i] && (t[i] = !1)
                    }), I[n] = t;
                    var i = e.filter(function(n) {
                        return null == t[n] || !0 === t[n]
                    });
                    Object.keys(t).forEach(function(n) {
                        !0 === t[n] && !e.includes(n) && i.push(n)
                    }), E[n] = (0, o._)((0, a._)({}, E[n]), {
                        responses: i
                    })
                }
            }
            var A = [],
                P = [],
                G = [],
                C = function(n) {
                    (0, r._)(t, n);
                    var e = (0, l._)(t);

                    function t() {
                        return (0, i._)(this, t), e.apply(this, arguments)
                    }
                    var a = t.prototype;
                    return a.initialize = function() {
                        this.waitFor(_.default, v.default, c.default)
                    }, a.getOnboardingPromptsForOnboarding = function(n) {
                        var e, t;
                        return null !== (t = null === (e = E[n]) || void 0 === e ? void 0 : e.onboardingPrompts) && void 0 !== t ? t : A
                    }, a.getOnboardingPrompts = function(n) {
                        var e, t;
                        return null !== (t = null === (e = E[n]) || void 0 === e ? void 0 : e.prompts) && void 0 !== t ? t : A
                    }, a.getOnboardingResponses = function(n) {
                        var e, t, i;
                        return c.default.isFullServerPreview(n) ? Array.from(null !== (t = c.default.getOnboardingResponses(n)) && void 0 !== t ? t : P) : null !== (i = null === (e = E[n]) || void 0 === e ? void 0 : e.responses) && void 0 !== i ? i : P
                    }, a.getSelectedOptions = function(n) {
                        var e = this.getOnboardingResponses(n);
                        return this.getOnboardingPrompts(n).map(function(n) {
                            return n.options
                        }).flat().filter(function(n) {
                            return e.includes(n.id)
                        })
                    }, a.getOnboardingResponsesForPrompt = function(n, e) {
                        var t = E[n];
                        if (null == t) return P;
                        var i = t.prompts.find(function(n) {
                            return n.id === e
                        });
                        return null == i ? P : d().intersection(i.options.map(function(n) {
                            return n.id
                        }), this.getOnboardingResponses(n))
                    }, a.getEnabledOnboardingPrompts = function(n) {
                        var e, t, i = E[n];
                        return c.default.isFullServerPreview(n) ? null !== (e = null == i ? void 0 : i.prompts) && void 0 !== e ? e : A : null != i && i.enabled ? null !== (t = i.prompts) && void 0 !== t ? t : A : A
                    }, a.getDefaultChannelIds = function(n) {
                        var e, t;
                        return null !== (t = null === (e = E[n]) || void 0 === e ? void 0 : e.defaultChannelIds) && void 0 !== t ? t : G
                    }, a.getEnabled = function(n) {
                        var e, t;
                        return c.default.isFullServerPreview(n) ? null != E[n] : null !== (t = null === (e = E[n]) || void 0 === e ? void 0 : e.enabled) && void 0 !== t && t
                    }, a.getOnboardingPrompt = function(n) {
                        return Object.values(E).map(function(n) {
                            return n.prompts
                        }).flat().find(function(e) {
                            return e.id === n
                        })
                    }, a.isLoading = function() {
                        return h
                    }, a.shouldFetchPrompts = function(n) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p.default.Millis.HOUR;
                        if (h) return !1;
                        var t = S[n];
                        return null == t || Date.now() - t > e
                    }, a.getPendingResponseOptions = function(n) {
                        return I[n]
                    }, a.ackIdForGuild = function(n) {
                        var e = this.getEnabledOnboardingPrompts(n),
                            t = "0";
                        return e.forEach(function(n) {
                            n.options.forEach(function(n) {
                                g.default.compare(n.id, t) > 0 && (t = n.id)
                            }), g.default.compare(n.id, t) > 0 && (t = n.id)
                        }), t
                    }, a.lastFetchedAt = function(n) {
                        return S[n]
                    }, a.isAdvancedMode = function(n) {
                        var e;
                        return null != n && (null === (e = E[n]) || void 0 === e ? void 0 : e.mode) === N.GuildOnboardingMode.ONBOARDING_ADVANCED
                    }, t
                }(s.default.Store);
            C.displayName = "GuildOnboardingPromptsStore";
            var T = new C(f.default, {
                CONNECTION_OPEN: function() {
                    h = !1, E = {}
                },
                GUILD_ONBOARDING_PROMPTS_FETCH_START: function() {
                    h = !0
                },
                GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: function(n) {
                    var e = n.guildId,
                        t = n.prompts,
                        i = n.defaultChannelIds,
                        r = n.enabled,
                        a = n.responses,
                        o = n.onboardingPromptsSeen,
                        l = n.onboardingResponsesSeen,
                        u = n.mode,
                        d = n.belowRequirements;
                    h = !1;
                    var s = v.default.getOnboardingStatus(e) === v.GuildOnboardingStatus.READY,
                        f = b(t, o, l);
                    E[e] = {
                        enabled: r,
                        mode: u,
                        belowRequirements: d,
                        prompts: f,
                        onboardingPrompts: f.filter(function(n) {
                            return n.inOnboarding
                        }),
                        defaultChannelIds: i.filter(function(n) {
                            return (0, O.canChannelBeDefault)(e, n)
                        }),
                        responses: s ? [] : a,
                        onboardingPromptsSeen: o,
                        onboardingResponsesSeen: l
                    }, !s && m(e, a), S[e] = Date.now()
                },
                GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE: function() {
                    h = !1
                },
                GUILD_ONBOARDING_SELECT_OPTION: function(n) {
                    var e = n.guildId,
                        t = n.optionId,
                        i = n.selected,
                        r = n.removedOptionIds;
                    return !!c.default.isFullServerPreview(e) || null != E[e] && (null != r && r.length > 0 && d().pullAll(E[e].responses, r), i ? E[e].responses.push(t) : d().pull(E[e].responses, t), null == I[e] && (I[e] = {}), I[e][t] = i, null != r && r.forEach(function(n) {
                        return I[e][n] = !1
                    }), I[e] = (0, a._)({}, I[e]), !0)
                },
                GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS: function(n) {
                    var e = n.guildId,
                        t = n.options,
                        i = n.prompts_seen,
                        r = n.options_seen;
                    m(e, t);
                    var l = E[e];
                    if (null == l) return !1;
                    var u = b(l.prompts, i, r);
                    E[e] = (0, o._)((0, a._)({}, l), {
                        prompts: u,
                        onboardingPrompts: u.filter(function(n) {
                            return n.inOnboarding
                        }),
                        onboardingPromptsSeen: i,
                        onboardingResponsesSeen: r
                    })
                },
                GUILD_ONBOARDING_PROMPTS_LOCAL_UPDATE: D,
                GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS: D,
                GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_SUCCESS: function(n) {
                    var e = n.guildId,
                        t = n.channelIds;
                    E[e] = (0, o._)((0, a._)({}, E[e]), {
                        defaultChannelIds: t
                    })
                },
                GUILD_SETTINGS_ONBOARDING_SET_MODE: function(n) {
                    var e = n.guildId,
                        t = n.mode,
                        i = E[e];
                    null != i && (i.mode = t)
                }
            })
        },
        329547: function(n, e, t) {
            "use strict";
            t.r(e), t.d(e, {
                default: function() {
                    return N
                },
                discardOnboardingPromise: function() {
                    return v
                },
                isOnboardingActiveForGuild: function() {
                    return S
                },
                openAndWaitForOnboarding: function() {
                    return I
                }
            });
            var i = t("356056"),
                r = t("324415");
            t("191489"), t("357629");
            var a = t("512722"),
                o = t.n(a),
                l = t("974328"),
                u = t("181123"),
                d = t("521588"),
                s = t("523989"),
                f = t("953131"),
                c = t("347069"),
                _ = t("837354"),
                p = t("467006"),
                g = t("551835"),
                O = {};

            function v(n) {
                O[n] = null
            }

            function N(n) {
                return E.apply(this, arguments)
            }

            function E() {
                return (E = (0, i._)(function(n) {
                    var e, t, i, a, s;
                    return (0, r._)(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return e = n.guildId, t = n.returnChannelId, a = void 0 !== (i = n.isPreview) && i, (0, l.closeAllModals)(), o()(null == O[e], "should not double-join guilds"), [4, (0, u.waitForGuild)(e)];
                            case 1:
                                if (!(s = r.sent()).hasFeature(p.GuildFeatures.COMMUNITY)) return [2];
                                if (!a) return [3, 2];
                                return (0, f.startOnboarding)(e), [3, 4];
                            case 2:
                                if (!s.hasFeature(p.GuildFeatures.GUILD_ONBOARDING)) return [2];
                                return [4, (0, f.maybeFetchOnboardingPrompts)(e)];
                            case 3:
                                r.sent(), r.label = 4;
                            case 4:
                                if (!c.default.shouldShowOnboarding(e)) return [3, 6];
                                return [4, I(e)];
                            case 5:
                                r.sent(), null != t && (0, d.transitionTo)(p.Routes.CHANNEL(e, t)), r.label = 6;
                            case 6:
                                return [2]
                        }
                    })
                })).apply(this, arguments)
            }

            function I(n) {
                return new Promise(function(e) {
                    O[n] = e, (0, _.waitForOnboardingCompletion)(n).then(function() {
                        var e, t;
                        null === (t = O[e = n]) || void 0 === t || t.call(O), O[e] = null, s.default.finishOnboarding(n)
                    }), (0, d.transitionTo)(p.Routes.CHANNEL(n, g.StaticChannelRoute.GUILD_ONBOARDING))
                })
            }

            function S(n) {
                return null != O[n]
            }
        },
        837354: function(n, e, t) {
            "use strict";
            t.r(e), t.d(e, {
                waitForOnboardingCompletion: function() {
                    return l
                }
            }), t("191489"), t("357629"), t("789020");
            var i = t("361733"),
                r = t("984362"),
                a = t("523989"),
                o = t("551748");

            function l(n) {
                return new Promise(function(e) {
                    i.default.addConditionalChangeListener(function() {
                        var t, l = i.default.getSelfMember(n);
                        return !(0, r.hasFlag)(null !== (t = null == l ? void 0 : l.flags) && void 0 !== t ? t : 0, o.GuildMemberFlags.COMPLETED_ONBOARDING) || (a.default.finishOnboarding(n), e(), !1)
                    })
                })
            }
        },
        246739: function(n, e, t) {
            "use strict";
            t.r(e), t.d(e, {
                getFlattenedChannels: function() {
                    return d
                },
                useFlattenedChannels: function() {
                    return s
                }
            });
            var i = t("761020");
            t("996173"), t("47120"), t("357629"), t("363505"), t("462848"), t("330740"), t("653041"), t("633702"), t("266796");
            var r = t("392711"),
                a = t.n(r),
                o = t("661223"),
                l = t("731865"),
                u = t("370275");

            function d(n, e, t) {
                var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    o = a()(l.default.getMutableGuildChannelsForGuild(n)).values().groupBy("parent_id").value(),
                    d = a()(t).map(function(n) {
                        return n.isCategory() ? n.id : n.parent_id
                    }).filter(u.isNotNullish).uniq().map(function(n) {
                        return l.default.getChannel(n)
                    }).filter(u.isNotNullish).sortBy("position").value(),
                    s = new Set(d.map(function(n) {
                        return n.id
                    })),
                    f = t.filter(function(n) {
                        return !n.isCategory() && (null == n.parent_id || !s.has(n.parent_id))
                    });
                f = a().sortBy(f, function(n) {
                    return n.isGuildVocal() ? n.position + 1e4 : n.position
                });
                var c = !0,
                    _ = !1,
                    p = void 0;
                try {
                    for (var g, O = d[Symbol.iterator](); !(c = (g = O.next()).done); c = !0) ! function() {
                        var n, l = g.value;
                        !r && f.push(l);
                        var u = e.has(l.id) ? o[l.id] : t.filter(function(n) {
                            return n.parent_id === l.id
                        });
                        u = a().sortBy(null != u ? u : [], function(n) {
                            return n.isGuildVocal() ? n.position + 1e4 : n.position
                        }), (n = f).push.apply(n, (0, i._)(u))
                    }()
                } catch (n) {
                    _ = !0, p = n
                } finally {
                    try {
                        !c && null != O.return && O.return()
                    } finally {
                        if (_) throw p
                    }
                }
                return f
            }

            function s(n, e) {
                var t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return (0, o.useStateFromStoresArray)([l.default], function() {
                    var i = Array.from(e).map(function(n) {
                        return l.default.getChannel(n)
                    }).filter(u.isNotNullish);
                    return d(n, e, i, t)
                })
            }
        },
        229986: function(n, e, t) {
            "use strict";
            t.r(e), t.d(e, {
                bulkOptInChannels: function() {
                    return P
                },
                dimissFavoriteSuggestion: function() {
                    return R
                },
                setGuildOptIn: function() {
                    return G
                },
                setIsFavorite: function() {
                    return C
                },
                setOptInChannel: function() {
                    return b
                },
                updateOptInChannelsBatched: function() {
                    return A
                },
                updateOptInChannelsImmediate: function() {
                    return D
                }
            });
            var i = t("356056"),
                r = t("21189"),
                a = t("227094"),
                o = t("324415");
            t("357629");
            var l = t("392711"),
                u = t("310057"),
                d = t("312916"),
                s = t("427388"),
                f = t("244180"),
                c = t("243393"),
                _ = t("911533"),
                p = t("778492"),
                g = t("259537"),
                O = t("731865"),
                v = t("301309"),
                N = t("328470"),
                E = t("984362"),
                I = t("514363"),
                S = t("467006"),
                h = t("746835");

            function b(n, e, t, i) {
                if (null != n) {
                    if (_.default.isFullServerPreview(n)) {
                        (0, c.updateImpersonatedChannels)(n, t ? [e] : [], t ? [] : [e]);
                        return
                    }
                    var o = v.default.getChannelIdFlags(n, e);
                    !t && (o = (0, E.setFlag)(o, h.ChannelNotificationSettingsFlags.FAVORITED, !1));
                    var l = (0, I.getCurrentChannelSettings)(n, e),
                        u = {
                            flags: (0, E.setFlag)(o, h.ChannelNotificationSettingsFlags.OPT_IN_ENABLED, t)
                        };
                    p.default.saveUserGuildSettingsBulk({
                        [n]: {
                            channel_overrides: {
                                [e]: u
                            }
                        }
                    }), d.default.dispatch({
                        type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE",
                        guildId: n,
                        channelId: e,
                        settings: u
                    }), (0, I.trackChannelNotificationSettingsUpdate)(n, e, u, l, i), T(n), N.default.track(S.AnalyticEvents.CHANNEL_LIST_UPDATED, (0, a._)((0, r._)({}, (0, f.collectGuildAnalyticsMetadata)(n), (0, f.collectChannelAnalyticsMetadata)(O.default.getChannel(e))), {
                        action_type: t ? "add" : "remove",
                        location: i
                    }))
                }
            }

            function D(n, e, t, i) {
                if (null != n) {
                    if (_.default.isFullServerPreview(n)) {
                        (0, c.updateImpersonatedChannels)(n, t ? [e] : [], t ? [] : [e]), (0, c.updateImpersonatedData)(n, {
                            optInEnabled: !0
                        });
                        return
                    }
                    var o = v.default.getChannelIdFlags(n, e);
                    !t && (o = (0, E.setFlag)(o, h.ChannelNotificationSettingsFlags.FAVORITED, !1));
                    var l = (0, I.getCurrentChannelSettings)(n, e),
                        u = {
                            flags: (0, E.setFlag)(o, h.ChannelNotificationSettingsFlags.OPT_IN_ENABLED, t)
                        };
                    if (!v.default.isOptInEnabled(n)) {
                        var s = (0, E.setFlag)(v.default.getGuildFlags(n), h.GuildNotificationSettingsFlags.OPT_IN_CHANNELS_ON, !0);
                        p.default.saveUserGuildSettingsBulk({
                            [n]: {
                                channel_overrides: {
                                    [e]: u
                                },
                                flags: s
                            }
                        })
                    }
                    d.default.dispatch({
                        type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE",
                        guildId: n,
                        channelId: e,
                        settings: u
                    }), (0, I.trackChannelNotificationSettingsUpdate)(n, e, u, l, i), T(n), N.default.track(S.AnalyticEvents.CHANNEL_LIST_UPDATED, (0, a._)((0, r._)({}, (0, f.collectGuildAnalyticsMetadata)(n), (0, f.collectChannelAnalyticsMetadata)(O.default.getChannel(e))), {
                        action_type: t ? "add" : "remove",
                        location: i
                    }))
                }
            }

            function m() {
                return (m = (0, i._)(function(n, e) {
                    var t;
                    return (0, o._)(this, function(i) {
                        switch (i.label) {
                            case 0:
                                if (null == n || _.default.isFullServerPreview(n)) return [2];
                                return t = {
                                    channel_overrides: e
                                }, [4, p.default.saveUserGuildSettingsBulk({
                                    [n]: t
                                })];
                            case 1:
                                return i.sent(), d.default.dispatch({
                                    type: "USER_GUILD_SETTINGS_REMOVE_PENDING_CHANNEL_UPDATES",
                                    guildId: n,
                                    updates: e
                                }), [2]
                        }
                    })
                })).apply(this, arguments)
            }
            var A = (0, l.debounce)(function(n, e) {
                return function(n, e) {
                    return m.apply(this, arguments)
                }(n, e)
            }, 1e3);

            function P(n, e) {
                var t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = arguments.length > 3 ? arguments[3] : void 0;
                if (null != n) {
                    if (_.default.isFullServerPreview(n)) {
                        (0, c.updateImpersonatedChannels)(n, e, []), t && (0, c.updateImpersonatedData)(n, {
                            optInEnabled: !0
                        });
                        return
                    }
                    var o = {};
                    if (e.forEach(function(e) {
                            var t = v.default.getChannelIdFlags(n, e);
                            o[e] = {
                                flags: (0, E.setFlag)(t, h.ChannelNotificationSettingsFlags.OPT_IN_ENABLED, !0)
                            }
                        }), t) {
                        var l = (0, E.setFlag)(v.default.getGuildFlags(n), h.GuildNotificationSettingsFlags.OPT_IN_CHANNELS_ON, !0);
                        s.default.updateGuildAndChannelNotificationSettings(n, {
                            flags: l,
                            channel_overrides: o
                        }), N.default.track(S.AnalyticEvents.CHANNEL_LIST_UPDATED, (0, a._)((0, r._)({}, (0, f.collectGuildAnalyticsMetadata)(n)), {
                            action_type: "add_many_and_enable_guild",
                            location: i
                        }))
                    } else s.default.updateChannelOverrideSettingsBulk(n, o), N.default.track(S.AnalyticEvents.CHANNEL_LIST_UPDATED, (0, a._)((0, r._)({}, (0, f.collectGuildAnalyticsMetadata)(n)), {
                        action_type: "add_many",
                        location: i
                    }))
                }
            }

            function G(n, e, t) {
                if (_.default.isFullServerPreview(n)) {
                    (0, c.updateImpersonatedData)(n, {
                        optInEnabled: e
                    });
                    return
                }
                var i = v.default.getGuildFlags(n);
                s.default.updateGuildNotificationSettings(n, {
                    flags: (0, E.setFlag)(i, h.GuildNotificationSettingsFlags.OPT_IN_CHANNELS_ON, e)
                }), N.default.track(S.AnalyticEvents.CHANNEL_LIST_UPDATED, (0, a._)((0, r._)({}, (0, f.collectGuildAnalyticsMetadata)(n)), {
                    action_type: e ? "guild_enabled" : "guild_disabled",
                    location: t
                }))
            }

            function C(n, e, t, i) {
                if (null != n) {
                    if (!_.default.isFullServerPreview(n)) {
                        var o = v.default.getChannelIdFlags(n, e);
                        !(0, E.hasFlag)(o, h.ChannelNotificationSettingsFlags.OPT_IN_ENABLED) && t && (o = (0, E.setFlag)(o, h.ChannelNotificationSettingsFlags.OPT_IN_ENABLED, !0)), s.default.updateChannelOverrideSettings(n, e, {
                            flags: (0, E.setFlag)(o, h.ChannelNotificationSettingsFlags.FAVORITED, t)
                        }), N.default.track(S.AnalyticEvents.CHANNEL_LIST_UPDATED, (0, a._)((0, r._)({}, (0, f.collectGuildAnalyticsMetadata)(n)), {
                            action_type: t ? "favorited" : "unfavorited",
                            location: i
                        }))
                    }
                }
            }

            function T(n) {
                (0, g.updateUserGuildSettings)(n, function(n) {
                    return (!(0, E.hasFlag)(n.guildOnboardingProgress, u.GuildOnboardingProgress.GUILD_NOTICE_CLEARED) || !!(0, E.hasFlag)(n.guildOnboardingProgress, u.GuildOnboardingProgress.GUILD_NOTICE_SHOWN)) && (n.guildOnboardingProgress = (0, E.addFlag)(n.guildOnboardingProgress, u.GuildOnboardingProgress.GUILD_NOTICE_CLEARED), n.guildOnboardingProgress = (0, E.setFlag)(n.guildOnboardingProgress, u.GuildOnboardingProgress.GUILD_NOTICE_SHOWN, !1), !0)
                }, g.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }

            function R(n, e) {
                d.default.dispatch({
                    type: "DISMISS_FAVORITE_SUGGESTION",
                    guildId: n,
                    channelId: e
                })
            }
        }
    }
]);
//# sourceMappingURL=13931.cfacdd6a80666b63465d.js.map