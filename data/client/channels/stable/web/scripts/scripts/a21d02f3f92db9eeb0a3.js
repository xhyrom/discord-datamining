(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["67079"], {
        437822: function(e, t, s) {
            "use strict";
            let o;
            s.r(t), s.d(t, {
                PasswordResetResult: function() {
                    return n
                },
                default: function() {
                    return g
                }
            }), s("70102"), s("860677"), s("506083");
            var n, l, a = s("759843"),
                r = s("171718"),
                d = s("872717"),
                i = s("95410"),
                u = s("913144"),
                c = s("448993"),
                E = s("307439"),
                _ = s("605250"),
                p = s("21121"),
                f = s("776502"),
                h = s("393414"),
                A = s("271938"),
                S = s("350522"),
                O = s("840707"),
                I = s("772017"),
                N = s("49111"),
                R = s("191349"),
                m = s("782340");
            let T = new _.default("AuthenticationActionCreators"),
                C = null;
            (l = n || (n = {})).MFA = "MFA", l.SUCCESS = "SUCCESS";

            function y(e) {
                let t = {
                    type: "LOGOUT",
                    ...e
                };
                u.default.dispatch(t).catch(e => {
                    var t;
                    throw T.error("Error while dispatching LOGOUT", e), null === (t = window.DiscordErrors) || void 0 === t || t.softCrash(e), e
                })
            }

            function v() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : N.Routes.DEFAULT_LOGGED_OUT;
                y();
                let t = (0, p.getRootNavigationRefIfInExperiment)();
                null != e && (null != t ? (I.default.popAll(), t.navigate("auth")) : (0, h.transitionTo)(e))
            }
            var g = {
                startSession(e) {
                    u.default.wait(() => {
                        u.default.dispatch({
                            type: "START_SESSION",
                            token: e
                        })
                    })
                },
                setLoginCredentials(e, t) {
                    u.default.dispatch({
                        type: "SET_LOGIN_CREDENTIALS",
                        login: e,
                        password: t
                    })
                },
                login(e) {
                    var t;
                    let {
                        login: s,
                        password: o,
                        loginCode: n,
                        undelete: l,
                        source: r,
                        giftCodeSKUId: d,
                        invite: i,
                        isMultiAccount: E
                    } = e;
                    u.default.dispatch({
                        type: "LOGIN",
                        login: s,
                        loginMethod: null != n && "" !== n ? N.LoginMethods.LOGIN_CODE : N.LoginMethods.PASSWORD
                    }), this.setLoginCredentials(s, null !== (t = null != o ? o : n) && void 0 !== t ? t : void 0), O.default.post({
                        url: N.Endpoints.LOGIN,
                        body: {
                            login: s,
                            password: o,
                            undelete: l,
                            login_code: n,
                            login_source: r,
                            gift_code_sku_id: d
                        },
                        retries: 2,
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: a.NetworkActionNames.USER_LOGIN,
                            properties: {
                                invite_code: null == i ? void 0 : i.code,
                                is_multi_account: E
                            }
                        },
                        ...E ? {
                            headers: {
                                authorization: ""
                            }
                        } : {}
                    }).then(e => {
                        let {
                            body: {
                                mfa: t,
                                sms: s,
                                webauthn: o,
                                ticket: n,
                                token: l,
                                backup: a,
                                user_id: r,
                                required_actions: d,
                                totp: i
                            }
                        } = e;
                        u.default.dispatch({
                            type: "LOGIN_ATTEMPTED",
                            user_id: r,
                            required_actions: d
                        }), t ? u.default.dispatch({
                            type: "LOGIN_MFA_STEP",
                            ticket: n,
                            sms: s,
                            webauthn: o,
                            totp: i,
                            backup: a
                        }) : E ? this.switchAccountToken(l) : u.default.dispatch({
                            type: "LOGIN_SUCCESS",
                            token: l
                        })
                    }, e => {
                        var t;
                        let n = null === (t = e.body) || void 0 === t ? void 0 : t.code;
                        n === N.AbortCodes.ACCOUNT_SCHEDULED_FOR_DELETION && null != o && "" !== o ? u.default.dispatch({
                            type: "LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION",
                            credentials: {
                                login: s,
                                password: o
                            }
                        }) : n === N.AbortCodes.ACCOUNT_DISABLED && null != o && "" !== o ? u.default.dispatch({
                            type: "LOGIN_ACCOUNT_DISABLED",
                            credentials: {
                                login: s,
                                password: o
                            }
                        }) : n === N.AbortCodes.PHONE_VERIFICATION_REQUIRED ? u.default.dispatch({
                            type: "LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED"
                        }) : u.default.dispatch({
                            type: "LOGIN_FAILURE",
                            error: new c.V6OrEarlierAPIError(e)
                        })
                    })
                },
                loginMFAv2(e) {
                    let t, {
                        code: s,
                        ticket: o,
                        source: n,
                        giftCodeSKUId: l,
                        isMultiAccount: r,
                        mfaType: d
                    } = e;
                    return t = "webauthn" === d ? N.Endpoints.LOGIN_WEBAUTHN : "sms" === d ? N.Endpoints.LOGIN_SMS : N.Endpoints.LOGIN_MFA, O.default.post({
                        url: t,
                        body: {
                            code: s,
                            ticket: o,
                            login_source: n,
                            gift_code_sku_id: l
                        },
                        retries: 2,
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: a.NetworkActionNames.USER_LOGIN_MFA
                        }
                    }).then(e => {
                        r ? this.switchAccountToken(e.body.token) : u.default.dispatch({
                            type: "LOGIN_SUCCESS",
                            token: e.body.token
                        })
                    }).catch(e => {
                        var t;
                        if ((null === (t = e.body) || void 0 === t ? void 0 : t.code) === N.AbortCodes.MFA_INVALID_CODE) throw Error((0, f.mapError)(d));
                        throw e
                    })
                },
                loginToken(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    return u.default.dispatch({
                        type: "LOGIN"
                    }), new Promise(s => {
                        setImmediate(() => {
                            u.default.dispatch({
                                type: "LOGIN_SUCCESS",
                                token: e
                            }), t && this.startSession(e), s()
                        })
                    })
                },
                loginReset(e) {
                    u.default.dispatch({
                        type: "LOGIN_RESET",
                        isMultiAccount: e
                    })
                },
                loginStatusReset() {
                    u.default.dispatch({
                        type: "LOGIN_STATUS_RESET"
                    })
                },
                logoutInternal(e) {
                    y(e)
                },
                logout() {
                    var e;
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : N.Routes.DEFAULT_LOGGED_OUT,
                        s = arguments.length > 1 ? arguments[1] : void 0;
                    return O.default.post({
                        url: N.Endpoints.LOGOUT,
                        body: {
                            provider: (0, R.getDevicePushProvider)(),
                            token: i.default.get(N.DEVICE_TOKEN),
                            voip_provider: R.DEVICE_PUSH_VOIP_PROVIDER,
                            voip_token: i.default.get(N.DEVICE_VOIP_TOKEN)
                        },
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: a.NetworkActionNames.USER_LOGOUT
                        },
                        ...null != s && {
                            headers: {
                                authorization: null !== (e = r.default.getToken(s)) && void 0 !== e ? e : ""
                            }
                        }
                    }).finally(() => {
                        (null == s || s === A.default.getId()) && v(t)
                    })
                },
                switchAccountToken(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        s = A.default.getToken();
                    T.log("Switching accounts", {
                        wasLoggedIn: null != s,
                        tokenHasChanged: e !== s
                    }), y({
                        isSwitchingAccount: !0
                    });
                    let o = this.loginToken(e, !0).then(() => {
                        let t = A.default.getToken();
                        T.log("Switched accounts finished", {
                            isCorrectToken: e === t
                        })
                    });
                    return t && (0, h.transitionTo)(N.Routes.ME), o
                },
                verifySSOToken() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : N.Routes.DEFAULT_LOGGED_OUT;
                    return d.default.get({
                        url: N.Endpoints.ME,
                        oldFormErrors: !0
                    }).catch(() => v(e))
                },
                verify(e) {
                    null != e ? O.default.post({
                        url: N.Endpoints.VERIFY,
                        body: {
                            token: e
                        },
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: a.NetworkActionNames.USER_VERIFY
                        }
                    }).then(e => {
                        u.default.dispatch({
                            type: "LOGIN_SUCCESS",
                            token: e.body.token
                        }), u.default.dispatch({
                            type: "VERIFY_SUCCESS",
                            verifyingUserId: e.body.user_id
                        })
                    }, e => u.default.dispatch({
                        type: "VERIFY_FAILURE",
                        errors: e.body
                    })) : u.default.dispatch({
                        type: "VERIFY_FAILURE",
                        errors: {}
                    })
                },
                async authorizePayment(e) {
                    try {
                        await O.default.post({
                            url: N.Endpoints.AUTHORIZE_PAYMENT,
                            body: {
                                token: e
                            },
                            oldFormErrors: !0,
                            trackedActionData: {
                                event: a.NetworkActionNames.AUTHORIZE_PAYMENT
                            }
                        }), u.default.dispatch({
                            type: "VERIFY_SUCCESS"
                        })
                    } catch (e) {
                        u.default.dispatch({
                            type: "VERIFY_FAILURE",
                            errors: {}
                        })
                    }
                },
                async authorizeIPAddress(e) {
                    if (null == e) {
                        u.default.dispatch({
                            type: "VERIFY_FAILURE",
                            errors: {}
                        });
                        return
                    }
                    try {
                        await O.default.post({
                            url: N.Endpoints.AUTHORIZE_IP,
                            body: {
                                token: e
                            },
                            oldFormErrors: !0,
                            trackedActionData: {
                                event: a.NetworkActionNames.AUTHORIZE_IP
                            }
                        }), u.default.dispatch({
                            type: "VERIFY_SUCCESS"
                        })
                    } catch (e) {
                        u.default.dispatch({
                            type: "VERIFY_FAILURE",
                            errors: {}
                        })
                    }
                },
                verifyResend: () => O.default.post({
                    url: N.Endpoints.VERIFY_RESEND,
                    oldFormErrors: !0,
                    trackedActionData: {
                        event: a.NetworkActionNames.USER_VERIFY_RESEND
                    }
                }),
                async resetPassword(e, t, s) {
                    u.default.dispatch({
                        type: "LOGIN"
                    });
                    let o = {
                            token: e,
                            password: t,
                            source: s
                        },
                        n = i.default.get(N.DEVICE_TOKEN),
                        l = (0, R.getDevicePushProvider)();
                    null != l && null != n && (o.push_provider = l, o.push_token = n);
                    let r = i.default.get(N.DEVICE_VOIP_TOKEN);
                    null != R.DEVICE_PUSH_VOIP_PROVIDER && null != r && (o.push_voip_provider = R.DEVICE_PUSH_VOIP_PROVIDER, o.push_voip_token = r);
                    try {
                        let {
                            body: {
                                mfa: e,
                                sms: t,
                                webauthn: s,
                                ticket: n,
                                token: l,
                                backup: r,
                                totp: d
                            }
                        } = await O.default.post({
                            url: N.Endpoints.RESET_PASSWORD,
                            body: o,
                            oldFormErrors: !0,
                            trackedActionData: {
                                event: a.NetworkActionNames.USER_RESET_PASSWORD
                            }
                        });
                        return {
                            result: e ? "MFA" : "SUCCESS",
                            sms: t,
                            webauthn: s,
                            ticket: n,
                            token: l,
                            backup: r,
                            totp: d
                        }
                    } catch (e) {
                        throw u.default.dispatch({
                            type: "LOGIN_FAILURE",
                            error: new c.V6OrEarlierAPIError(e)
                        }), e
                    }
                },
                async resetPasswordMFA(e, t, s, o, n) {
                    u.default.dispatch({
                        type: "LOGIN_MFA"
                    });
                    try {
                        let l = await O.default.post({
                            url: N.Endpoints.RESET_PASSWORD,
                            body: {
                                code: e,
                                ticket: t,
                                password: s,
                                token: o,
                                source: n
                            },
                            oldFormErrors: !0,
                            trackedActionData: {
                                event: a.NetworkActionNames.USER_RESET_PASSWORD,
                                properties: {
                                    mfa: !0
                                }
                            }
                        });
                        return l.body.token
                    } catch (e) {
                        var l;
                        throw u.default.dispatch({
                            type: "LOGIN_MFA_FAILURE",
                            message: null == (l = e.body) ? m.default.Messages.NETWORK_ERROR_REST_REQUEST : null != l.message ? l.message : null != l.code && Array.isArray(l.code) ? l.code[0] : m.default.Messages.NETWORK_ERROR_REST_REQUEST
                        }), e
                    }
                },
                async resetPasswordMFAv2(e) {
                    let {
                        method: t,
                        code: s,
                        ticket: o,
                        password: n,
                        token: l,
                        source: r
                    } = e;
                    u.default.dispatch({
                        type: "LOGIN_MFA"
                    });
                    let d = await O.default.post({
                        url: N.Endpoints.RESET_PASSWORD,
                        body: {
                            code: s,
                            ticket: o,
                            password: n,
                            token: l,
                            source: r,
                            method: t
                        },
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: a.NetworkActionNames.USER_RESET_PASSWORD,
                            properties: {
                                mfa: !0
                            }
                        }
                    });
                    return d.body.token
                },
                async forgotPassword(e) {
                    this.setLoginCredentials(e), u.default.dispatch({
                        type: "FORGOT_PASSWORD_REQUEST"
                    });
                    try {
                        await O.default.post({
                            url: N.Endpoints.FORGOT_PASSWORD,
                            body: {
                                login: e
                            },
                            oldFormErrors: !0,
                            trackedActionData: {
                                event: a.NetworkActionNames.FORGOT_PASSWORD
                            }
                        }), u.default.dispatch({
                            type: "FORGOT_PASSWORD_SENT"
                        })
                    } catch (s) {
                        let e = new c.V6OrEarlierAPIError(s),
                            t = e.code;
                        throw t === N.AbortCodes.PHONE_VERIFICATION_REQUIRED ? u.default.dispatch({
                            type: "LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION"
                        }) : u.default.dispatch({
                            type: "LOGIN_FAILURE",
                            error: e
                        }), s
                    }
                },
                setFingerprint(e) {
                    u.default.dispatch({
                        type: "FINGERPRINT",
                        fingerprint: e
                    })
                },
                getExperiments(e) {
                    u.default.dispatch({
                        type: "EXPERIMENTS_FETCH",
                        withGuildExperiments: e
                    })
                },
                getLocationMetadata: () => null != C ? C : (clearTimeout(o), o = setTimeout(() => {
                    u.default.dispatch({
                        type: "SET_CONSENT_REQUIRED",
                        consentRequired: !0
                    })
                }, 5e3), C = d.default.get({
                    url: N.Endpoints.AUTH_LOCATION_METADATA,
                    retries: 2,
                    oldFormErrors: !0
                }).then(e => {
                    var t, s, n, l, a;
                    if (clearTimeout(o), null == S.default.getAuthenticationConsentRequired()) {
                        let t = null === (l = null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.consent_required) || void 0 === l || l;
                        u.default.dispatch({
                            type: "SET_CONSENT_REQUIRED",
                            consentRequired: t
                        })
                    }
                    if (u.default.dispatch({
                            type: "SET_LOCATION_METADATA",
                            countryCode: null !== (a = null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.country_code) && void 0 !== a ? a : void 0
                        }), C = null, (null == e ? void 0 : null === (s = e.body) || void 0 === s ? void 0 : s.promotional_email_opt_in) != null) {
                        let t = e.body.promotional_email_opt_in;
                        (0, E.setPromoEmailConsentState)({
                            required: t.required,
                            checked: t.pre_checked,
                            preChecked: t.pre_checked
                        })
                    }
                }, () => {
                    clearTimeout(o), u.default.dispatch({
                        type: "SET_CONSENT_REQUIRED",
                        consentRequired: !0
                    }), C = null
                }))
            }
        },
        772017: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return c
                }
            }), s("424973");
            var o = s("995008"),
                n = s.n(o),
                l = s("913144"),
                a = s("693051"),
                r = s("153498"),
                d = s("76493"),
                i = s("91731"),
                u = s("49111"),
                c = {
                    push(e, t) {
                        let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n("modal"),
                            o = arguments.length > 3 ? arguments[3] : void 0,
                            a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : u.AppContext.APP;
                        return (0, r.pushModal)({
                            key: s,
                            modal: (0, i.default)(e, {}, t, s),
                            ...o
                        }), l.default.dispatch({
                            type: "MODAL_PUSH",
                            modal: e,
                            props: t,
                            key: s,
                            appContext: a
                        }), s
                    },
                    pushLazy(e, t) {
                        let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n("modal"),
                            o = arguments.length > 3 ? arguments[3] : void 0,
                            l = (0, a.getRootNavigationRef)();
                        return null != l && l.isReady() ? (e instanceof Promise ? e.then(e => {
                            let {
                                default: t
                            } = e;
                            return t
                        }) : e()).then(e => this.push(e, t, s, o)) : new Promise(n => d.default.enqueue(() => n(this.pushLazy(e, t, s, o))))
                    },
                    updateAnimation(e, t) {
                        l.default.dispatch({
                            type: "MODAL_UPDATE",
                            key: e,
                            props: {},
                            partial: !0,
                            animation: t
                        })
                    },
                    pop() {
                        (0, r.popModal)(), l.default.dispatch({
                            type: "MODAL_POP"
                        })
                    },
                    popWithKey(e, t) {
                        (0, r.popModal)(e, t), l.default.dispatch({
                            type: "MODAL_POP",
                            key: e,
                            onExited: t
                        })
                    },
                    popAll() {
                        (0, r.popAllModals)(), l.default.dispatch({
                            type: "MODAL_POP_ALL"
                        }), l.default.dispatch({
                            type: "CHANNEL_SETTINGS_CLOSE"
                        }), l.default.dispatch({
                            type: "EMAIL_VERIFICATION_MODAL_CLOSE"
                        }), l.default.dispatch({
                            type: "GUILD_SETTINGS_CLOSE"
                        }), l.default.dispatch({
                            type: "HIDE_ACTION_SHEET"
                        }), l.default.dispatch({
                            type: "DISPLAYED_INVITE_CLEAR"
                        }), l.default.dispatch({
                            type: "DRAWER_CLOSE",
                            animated: !0
                        }), l.default.dispatch({
                            type: "NOTIFICATION_SETTINGS_MODAL_CLOSE"
                        }), l.default.dispatch({
                            type: "QUICKSWITCHER_HIDE"
                        }), l.default.dispatch({
                            type: "MENTION_MODAL_CLOSE"
                        }), l.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLOSE"
                        }), l.default.dispatch({
                            type: "SEARCH_MODAL_CLOSE"
                        }), l.default.dispatch({
                            type: "CONNECTIONS_GRID_MODAL_HIDE"
                        })
                    }
                }
        },
        307439: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                setPromoEmailConsentState: function() {
                    return l
                },
                setPromoEmailConsentChecked: function() {
                    return a
                },
                usePromoEmailConsentStore: function() {
                    return r
                }
            });
            var o = s("308503");
            let n = (0, o.default)(() => ({
                    required: !1,
                    checked: !1,
                    preChecked: !1
                })),
                l = e => {
                    n.setState(e)
                },
                a = e => {
                    n.setState({
                        checked: e
                    })
                },
                r = n
        },
        76493: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return o
                }
            }), s("424973");
            var o = new class e {
                enqueue(e) {
                    this.queue.push(e)
                }
                flush() {
                    for (; this.queue.length > 0;) {
                        var e;
                        null === (e = this.queue.shift()) || void 0 === e || e()
                    }
                }
                constructor() {
                    this.queue = []
                }
            }
        },
        776502: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                mapError: function() {
                    return r
                },
                openMFAModal: function() {
                    return i
                }
            }), s("70102"), s("581081");
            var o = s("872717"),
                n = s("695501"),
                l = s("49111"),
                a = s("782340");

            function r(e) {
                let t = a.default.Messages.MFA_V2_INVALID_CODE;
                switch (e) {
                    case "webauthn":
                        t = a.default.Messages.MFA_V2_INVALID_WEBAUTHN;
                        break;
                    case "password":
                        t = a.default.Messages.MFA_V2_INVALID_PASSWORD
                }
                return t
            }
            async function d(e) {
                let {
                    ticket: t,
                    mfaType: s,
                    data: n
                } = e, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                try {
                    let e = await o.default.post({
                        url: l.Endpoints.FINISH_MFA_CHECK,
                        body: {
                            ticket: t,
                            mfa_type: s,
                            data: n
                        },
                        retries: a
                    });
                    return e.body
                } catch (e) {
                    var d;
                    if ((null === (d = e.body) || void 0 === d ? void 0 : d.code) === l.AbortCodes.MFA_INVALID_CODE) throw Error(r(s));
                    throw e
                }
            }

            function i(e, t, o) {
                let a = async e => {
                    let s = await d(e),
                        o = {
                            "X-Discord-MFA-Authorization": s.token
                        };
                    return new Promise((s, n) => {
                        t(o, (t, o, a) => {
                            var d, i;
                            return (null === (d = t.body) || void 0 === d ? void 0 : d.code) === l.AbortCodes.MFA_INVALID_CODE || (null === (i = t.body) || void 0 === i ? void 0 : i.code) === l.AbortCodes.MFA_REQUIRED ? (n(Error(r(e.mfaType))), !0) : (s(), !1)
                        })
                    })
                };
                e.methods = e.methods.filter(e => Object.hasOwn(n.SELECT_NAMES, e.type)), s("24287").openMFAModal(e, a, o)
            }
        },
        695501: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                SELECT_NAMES: function() {
                    return n
                }
            });
            var o = s("782340");
            let n = {
                get webauthn() {
                    return o.default.Messages.MFA_V2_WEBAUTHN_NAME
                },
                get totp() {
                    return o.default.Messages.MFA_V2_TOTP_NAME
                },
                get sms() {
                    return o.default.Messages.MFA_V2_SMS_NAME
                },
                get password() {
                    return o.default.Messages.MFA_V2_PASSWORD_NAME
                },
                get backup() {
                    return o.default.Messages.MFA_V2_BACKUP_NAME
                }
            }
        },
        24287: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                MFAModal: function() {
                    return v
                },
                MFASlides: function() {
                    return g
                },
                openMFAModal: function() {
                    return M
                }
            }), s("222007"), s("781738"), s("506083"), s("70102");
            var o = s("37983"),
                n = s("884691"),
                l = s("376507"),
                a = s("872717"),
                r = s("77078"),
                d = s("145131"),
                i = s("772280"),
                u = s("773336"),
                c = s("286235"),
                E = s("50885"),
                _ = s("695501"),
                p = s("49111"),
                f = s("782340"),
                h = s("992279");

            function A(e) {
                let {
                    subtitle: t,
                    onClose: s
                } = e;
                return (0, o.jsxs)(r.ModalHeader, {
                    direction: d.default.Direction.VERTICAL,
                    className: h.header,
                    separator: !1,
                    children: [(0, o.jsx)(r.Heading, {
                        variant: "heading-xl/semibold",
                        children: f.default.Messages.MFA_V2_HEADER
                    }), null != t && (0, o.jsx)(r.Text, {
                        color: "header-secondary",
                        variant: "text-md/normal",
                        className: h.subtitle,
                        children: t
                    }), (0, o.jsx)(r.ModalCloseButton, {
                        className: h.closeButton,
                        onClick: s
                    })]
                })
            }

            function S(e) {
                let {
                    children: t
                } = e;
                return (0, o.jsx)(r.ModalContent, {
                    className: h.content,
                    children: t
                })
            }

            function O(e) {
                let {
                    error: t
                } = e;
                return null == t ? null : (0, o.jsx)(r.Text, {
                    className: h.error,
                    variant: "text-sm/normal",
                    color: "text-danger",
                    children: t
                })
            }

            function I(e) {
                let {
                    request: t,
                    setSlide: s,
                    showConfirm: n = !1,
                    ...l
                } = e, a = t.methods.length > 1;
                return a || n ? (0, o.jsxs)(r.ModalFooter, {
                    className: h.footer,
                    direction: n && !a ? d.default.Direction.HORIZONTAL_REVERSE : d.default.Direction.HORIZONTAL,
                    children: [a && (0, o.jsx)(r.Button, {
                        look: r.Button.Looks.LINK,
                        onClick: () => s("select"),
                        color: r.Button.Colors.PRIMARY,
                        children: f.default.Messages.MFA_V2_GO_TO_SELECT
                    }), n && (0, o.jsx)(r.Button, {
                        type: "submit",
                        ...l,
                        children: f.default.Messages.CONFIRM
                    })]
                }) : null
            }

            function N(e) {
                let {
                    request: t,
                    setSlide: s,
                    onClose: n
                } = e;
                return (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)(A, {
                        subtitle: f.default.Messages.MFA_V2_SELECT_HEADER,
                        onClose: n
                    }), (0, o.jsx)(S, {
                        children: t.methods.map(e => (0, o.jsxs)(r.Clickable, {
                            className: h.listItemContainer,
                            onClick: () => {
                                s(e.type)
                            },
                            children: [(0, o.jsx)(r.Text, {
                                className: h.listItemText,
                                variant: "text-md/semibold",
                                children: _.SELECT_NAMES[e.type]
                            }), (0, o.jsx)(i.default, {
                                width: 20,
                                height: 20,
                                className: h.listItemArrow
                            })]
                        }, e.type))
                    })]
                })
            }

            function R(e) {
                let {
                    request: t,
                    finish: s,
                    setSlide: a,
                    onClose: d
                } = e, [i, _] = n.useState(!1), [h, N] = n.useState(null), {
                    challenge: R
                } = t.methods.find(e => "webauthn" === e.type), m = async () => {
                    _(!0), N(null);
                    let e = u.isPlatformEmbedded && E.default.supportsFeature(p.NativeFeatures.WEBAUTHN) ? E.default.webAuthnAuthenticate(R) : l.get(JSON.parse(R)).then(e => JSON.stringify(e));
                    try {
                        let t = await e;
                        await s({
                            mfaType: "webauthn",
                            data: t
                        })
                    } catch (e) {
                        c.default.captureException(e), N(f.default.Messages.MFA_V2_WEBAUTHN_GENERIC_ERROR)
                    } finally {
                        _(!1)
                    }
                };
                return (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)(A, {
                        onClose: d
                    }), (0, o.jsxs)(S, {
                        children: [(0, o.jsx)(r.Button, {
                            submitting: i,
                            onClick: m,
                            children: f.default.Messages.MFA_V2_WEBAUTHN_CTA
                        }), (0, o.jsx)(O, {
                            error: h
                        })]
                    }), (0, o.jsx)(I, {
                        request: t,
                        setSlide: a
                    })]
                })
            }

            function m(e) {
                let {
                    request: t,
                    finish: s,
                    setSlide: l,
                    onClose: a,
                    isSlideReady: d
                } = e, [i, u] = n.useState(!1), [c, E] = n.useState(null), [_, p] = n.useState(""), h = n.useRef(null), N = f.default.Messages.TWO_FA_ENTER_BACKUP_LABEL, R = f.default.Messages.TWO_FA_BACKUP_CODE, m = n.useCallback(e => {
                    p(e), E(null)
                }, [p, E]);
                return n.useEffect(() => {
                    if (d) {
                        var e;
                        null === (e = h.current) || void 0 === e || e.focus()
                    }
                }, [d]), (0, o.jsxs)("form", {
                    onSubmit: e => {
                        e.preventDefault(), u(!0), s({
                            mfaType: "backup",
                            data: _.replace(/-/g, "")
                        }).catch(e => {
                            var t, s;
                            E(null !== (s = e.message) && void 0 !== s ? s : null === (t = e.body) || void 0 === t ? void 0 : t.message)
                        }).finally(() => {
                            u(!1)
                        })
                    },
                    children: [(0, o.jsx)(A, {
                        onClose: a
                    }), (0, o.jsx)(S, {
                        children: (0, o.jsxs)(r.FormItem, {
                            title: N,
                            children: [(0, o.jsx)(r.TextInput, {
                                inputRef: h,
                                onChange: m,
                                placeholder: R,
                                maxLength: 9,
                                minLength: 8,
                                value: _,
                                spellCheck: "false",
                                disabled: i
                            }), (0, o.jsx)(O, {
                                error: c
                            })]
                        })
                    }), (0, o.jsx)(I, {
                        request: t,
                        setSlide: l,
                        showConfirm: !0,
                        disabled: _.length < 8,
                        submitting: i
                    })]
                })
            }

            function T(e) {
                let {
                    request: t,
                    finish: s,
                    setSlide: l,
                    onClose: a,
                    isSlideReady: d
                } = e, [i, u] = n.useState(!1), [c, E] = n.useState(null), [_, p] = n.useState(""), h = n.useRef(null);
                return n.useEffect(() => {
                    if (d) {
                        var e;
                        null === (e = h.current) || void 0 === e || e.focus()
                    }
                }, [d]), (0, o.jsxs)("form", {
                    onSubmit: e => {
                        e.preventDefault(), u(!0), s({
                            mfaType: "totp",
                            data: _
                        }).catch(e => {
                            var t, s;
                            E(null !== (s = e.message) && void 0 !== s ? s : null === (t = e.body) || void 0 === t ? void 0 : t.message)
                        }).finally(() => {
                            u(!1)
                        })
                    },
                    children: [(0, o.jsx)(A, {
                        onClose: a
                    }), (0, o.jsx)(S, {
                        children: (0, o.jsxs)(r.FormItem, {
                            title: f.default.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL,
                            children: [(0, o.jsx)(r.TextInput, {
                                inputRef: h,
                                onChange: p,
                                placeholder: f.default.Messages.TWO_FA_AUTH_CODE_NO_BACKUP,
                                maxLength: 6,
                                minLength: 6,
                                value: _,
                                autoComplete: "one-time-code",
                                spellCheck: "false",
                                disabled: i
                            }), (0, o.jsx)(O, {
                                error: c
                            })]
                        })
                    }), (0, o.jsx)(I, {
                        request: t,
                        setSlide: l,
                        showConfirm: !0,
                        disabled: 0 === _.length,
                        submitting: i
                    })]
                })
            }

            function C(e) {
                let {
                    request: t,
                    finish: s,
                    setSlide: l,
                    onClose: d,
                    isSlideReady: i
                } = e, [u, c] = n.useState(!1), [E, _] = n.useState(null), [N, R] = n.useState(!1), [m, T] = n.useState(null), [C, y] = n.useState(""), v = n.useRef(null);
                n.useEffect(() => {
                    c(!0), a.default.post({
                        url: p.Endpoints.LOGIN_SMS_SEND,
                        body: {
                            ticket: t.ticket
                        },
                        oldFormErrors: !0
                    }).then(e => {
                        _(e.body.phone)
                    }).catch(e => {
                        var t;
                        T(e.message || (null === (t = e.body) || void 0 === t ? void 0 : t.message))
                    }).finally(() => {
                        c(!1)
                    })
                }, [t.ticket]), n.useEffect(() => {
                    if (i) {
                        var e;
                        null === (e = v.current) || void 0 === e || e.focus()
                    }
                }, [i]);
                let g = null == E ? f.default.Messages.TWO_FA_ENTER_SMS_TOKEN_SENDING : f.default.Messages.TWO_FA_ENTER_SMS_TOKEN_SENT.format({
                    phoneNumber: E
                });
                return (0, o.jsxs)("form", {
                    onSubmit: e => {
                        e.preventDefault(), R(!0), s({
                            mfaType: "sms",
                            data: C
                        }).catch(e => {
                            var t, s;
                            T(null !== (s = e.message) && void 0 !== s ? s : null === (t = e.body) || void 0 === t ? void 0 : t.message)
                        }).finally(() => {
                            R(!1)
                        })
                    },
                    children: [(0, o.jsx)(A, {
                        subtitle: g,
                        onClose: d
                    }), (0, o.jsx)(S, {
                        children: (0, o.jsxs)(r.FormItem, {
                            title: f.default.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL,
                            children: [(0, o.jsxs)("div", {
                                className: h.smsInputContainer,
                                children: [(0, o.jsx)(r.TextInput, {
                                    className: h.smsInput,
                                    inputRef: v,
                                    onChange: y,
                                    placeholder: f.default.Messages.TWO_FA_AUTH_CODE_NO_BACKUP,
                                    maxLength: 10,
                                    value: C,
                                    autoComplete: "one-time-code",
                                    spellCheck: "false",
                                    disabled: N
                                }), (0, o.jsx)(r.Button, {
                                    size: r.Button.Sizes.MEDIUM,
                                    submitting: u,
                                    onClick: () => {
                                        a.default.post({
                                            url: p.Endpoints.LOGIN_SMS_SEND,
                                            body: {
                                                ticket: t.ticket
                                            },
                                            oldFormErrors: !0
                                        }).then(e => {
                                            _(e.body.phone)
                                        }).catch(e => {
                                            var t;
                                            T(e.message || (null === (t = e.body) || void 0 === t ? void 0 : t.message))
                                        })
                                    },
                                    children: f.default.Messages.MFA_SMS_RESEND
                                })]
                            }), (0, o.jsx)(O, {
                                error: m
                            })]
                        })
                    }), (0, o.jsx)(I, {
                        request: t,
                        setSlide: l,
                        showConfirm: !0,
                        disabled: 0 === C.length,
                        submitting: N
                    })]
                })
            }

            function y(e) {
                let {
                    request: t,
                    finish: s,
                    setSlide: l,
                    onClose: a,
                    isSlideReady: d
                } = e, [i, u] = n.useState(!1), [c, E] = n.useState(null), [_, p] = n.useState(""), h = n.useRef(null);
                return n.useEffect(() => {
                    if (d) {
                        var e;
                        null === (e = h.current) || void 0 === e || e.focus()
                    }
                }, [d]), (0, o.jsxs)("form", {
                    onSubmit: e => {
                        e.preventDefault(), u(!0), s({
                            mfaType: "password",
                            data: _
                        }).catch(e => {
                            var t, s;
                            E(null !== (s = e.message) && void 0 !== s ? s : null === (t = e.body) || void 0 === t ? void 0 : t.message)
                        }).finally(() => {
                            u(!1)
                        })
                    },
                    children: [(0, o.jsx)(A, {
                        onClose: a
                    }), (0, o.jsx)(S, {
                        children: (0, o.jsxs)(r.FormItem, {
                            title: f.default.Messages.FORM_LABEL_PASSWORD,
                            children: [(0, o.jsx)(r.TextInput, {
                                inputRef: h,
                                onChange: p,
                                value: _,
                                type: "password",
                                autoComplete: "password",
                                spellCheck: "false",
                                disabled: i
                            }), (0, o.jsx)(O, {
                                error: c
                            })]
                        })
                    }), (0, o.jsx)(I, {
                        request: t,
                        setSlide: l,
                        showConfirm: !0,
                        disabled: 0 === _.length,
                        submitting: i
                    })]
                })
            }

            function v(e) {
                let {
                    transitionState: t,
                    request: s,
                    finish: n,
                    onClose: l
                } = e;
                return (0, o.jsx)(r.ModalRoot, {
                    transitionState: t,
                    size: r.ModalSize.SMALL,
                    "aria-label": f.default.Messages.MFA_V2_HEADER,
                    children: (0, o.jsx)(g, {
                        request: s,
                        mfaFinish: n,
                        onClose: l,
                        onEarlyClose: l
                    })
                })
            }

            function g(e) {
                var t, s;
                let {
                    request: l,
                    mfaFinish: a,
                    onEarlyClose: d,
                    onClose: i,
                    width: u = 440
                } = e, [c, E] = n.useState(null !== (s = null === (t = l.methods[0]) || void 0 === t ? void 0 : t.type) && void 0 !== s ? s : "select"), [_, p] = n.useState(c), f = async e => {
                    let {
                        mfaType: t,
                        data: s
                    } = e;
                    await a({
                        mfaType: t,
                        data: s,
                        ticket: l.ticket
                    }), null != i && i()
                }, h = {
                    request: l,
                    finish: f,
                    setSlide: E,
                    onClose: d
                };
                return (0, o.jsxs)(r.Slides, {
                    activeSlide: c,
                    width: u,
                    onSlideReady: p,
                    children: [(0, o.jsx)(r.Slide, {
                        id: "select",
                        children: (0, o.jsx)(N, {
                            ...h
                        })
                    }), (0, o.jsx)(r.Slide, {
                        id: "webauthn",
                        children: (0, o.jsx)(R, {
                            ...h
                        })
                    }), (0, o.jsx)(r.Slide, {
                        id: "totp",
                        children: (0, o.jsx)(T, {
                            ...h,
                            isSlideReady: "totp" === _
                        })
                    }), (0, o.jsx)(r.Slide, {
                        id: "sms",
                        children: (0, o.jsx)(C, {
                            ...h,
                            isSlideReady: "sms" === _
                        })
                    }), (0, o.jsx)(r.Slide, {
                        id: "backup",
                        children: (0, o.jsx)(m, {
                            ...h,
                            isSlideReady: "backup" === _
                        })
                    }), (0, o.jsx)(r.Slide, {
                        id: "password",
                        children: (0, o.jsx)(y, {
                            ...h,
                            isSlideReady: "password" === _
                        })
                    })]
                })
            }

            function M(e, t, s) {
                (0, r.openModal)(s => (0, o.jsx)(v, {
                    finish: t,
                    request: e,
                    ...s
                }), {
                    onCloseCallback: () => {
                        s(Error(f.default.Messages.MFA_V2_CANCELED))
                    }
                })
            }
        },
        350522: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return u
                }
            });
            var o = s("446674"),
                n = s("913144");
            let l = !1,
                a = !1,
                r = {},
                d = null;
            class i extends o.default.Store {
                hasConsented(e) {
                    return null != r[e] && r[e].consented
                }
                get fetchedConsents() {
                    return l
                }
                get receivedConsentsInConnectionOpen() {
                    return a
                }
                getAuthenticationConsentRequired() {
                    return d
                }
            }
            i.displayName = "ConsentStore";
            var u = new i(n.default, {
                CONNECTION_OPEN: function(e) {
                    let {
                        consents: t
                    } = e;
                    null != t && (r = {
                        ...r,
                        ...t
                    }, a = !0)
                },
                UPDATE_CONSENTS: function(e) {
                    let {
                        consents: t
                    } = e;
                    r = {
                        ...t
                    }, l = !0
                },
                SET_CONSENT_REQUIRED: function(e) {
                    d = e.consentRequired
                },
                LOGOUT: function() {
                    d = null
                }
            })
        },
        91731: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return l
                }
            });
            var o = s("206230"),
                n = s("49111");

            function l(e, t, s) {
                var l, a, r, d, i, u, c, E;
                let _ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                return {
                    key: null !== (a = null !== (l = t.key) && void 0 !== l ? l : _) && void 0 !== a ? a : "modal",
                    modal: e,
                    animation: null !== (r = t.animation) && void 0 !== r ? r : o.default.useReducedMotion ? n.ModalAnimation.FADE : n.ModalAnimation.SLIDE_UP,
                    shouldPersistUnderModals: null !== (d = t.shouldPersistUnderModals) && void 0 !== d && d,
                    props: s,
                    backdropStyle: null !== (i = t.backdropStyle) && void 0 !== i ? i : null,
                    backdropInstant: null !== (u = t.backdropInstant) && void 0 !== u && u,
                    disableAnimation: null !== (c = t.disableAnimation) && void 0 !== c && c,
                    closable: "boolean" != typeof t.closable || t.closable,
                    label: null !== (E = t.label) && void 0 !== E ? E : "",
                    callbacks: {}
                }
            }
        }
    }
]);
//# sourceMappingURL=a21d02f3f92db9eeb0a3.js.map