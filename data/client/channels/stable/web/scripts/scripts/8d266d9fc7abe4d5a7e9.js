(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["67079"], {
        437822: function(e, t, o) {
            "use strict";
            let s;
            o.r(t), o.d(t, {
                PasswordResetResult: function() {
                    return n
                },
                default: function() {
                    return g
                }
            }), o("70102"), o("860677"), o("506083");
            var n, a, l = o("759843"),
                d = o("171718"),
                r = o("872717"),
                i = o("95410"),
                u = o("913144"),
                c = o("448993"),
                E = o("307439"),
                _ = o("605250"),
                p = o("21121"),
                f = o("776502"),
                h = o("393414"),
                S = o("271938"),
                A = o("350522"),
                O = o("840707"),
                N = o("772017"),
                I = o("49111"),
                y = o("191349"),
                R = o("782340");
            let m = new _.default("AuthenticationActionCreators"),
                T = null;

            function C(e) {
                return null == e ? R.default.Messages.NETWORK_ERROR_REST_REQUEST : null != e.message ? e.message : null != e.code && Array.isArray(e.code) ? e.code[0] : R.default.Messages.NETWORK_ERROR_REST_REQUEST
            }

            function v(e) {
                let t = {
                    type: "LOGOUT",
                    ...e
                };
                u.default.dispatch(t).catch(e => {
                    var t;
                    throw m.error("Error while dispatching LOGOUT", e), null === (t = window.DiscordErrors) || void 0 === t || t.softCrash(e), e
                })
            }

            function M() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : I.Routes.DEFAULT_LOGGED_OUT;
                v();
                let t = (0, p.getRootNavigationRefIfInExperiment)();
                null != e && (null != t ? (N.default.popAll(), t.navigate("auth")) : (0, h.transitionTo)(e))
            }(a = n || (n = {})).MFA = "MFA", a.SUCCESS = "SUCCESS";
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
                        login: o,
                        password: s,
                        loginCode: n,
                        undelete: a,
                        source: d,
                        giftCodeSKUId: r,
                        invite: i,
                        isMultiAccount: E
                    } = e;
                    u.default.dispatch({
                        type: "LOGIN",
                        login: o,
                        loginMethod: null != n && "" !== n ? I.LoginMethods.LOGIN_CODE : I.LoginMethods.PASSWORD
                    }), this.setLoginCredentials(o, null !== (t = null != s ? s : n) && void 0 !== t ? t : void 0), O.default.post({
                        url: I.Endpoints.LOGIN,
                        body: {
                            login: o,
                            password: s,
                            undelete: a,
                            login_code: n,
                            login_source: d,
                            gift_code_sku_id: r
                        },
                        retries: 2,
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: l.NetworkActionNames.USER_LOGIN,
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
                                sms: o,
                                webauthn: s,
                                ticket: n,
                                token: a,
                                backup: l,
                                user_id: d,
                                required_actions: r,
                                totp: i
                            }
                        } = e;
                        u.default.dispatch({
                            type: "LOGIN_ATTEMPTED",
                            user_id: d,
                            required_actions: r
                        }), t ? u.default.dispatch({
                            type: "LOGIN_MFA_STEP",
                            ticket: n,
                            sms: o,
                            webauthn: s,
                            totp: i,
                            backup: l
                        }) : E ? this.switchAccountToken(a) : u.default.dispatch({
                            type: "LOGIN_SUCCESS",
                            token: a
                        })
                    }, e => {
                        var t;
                        let n = null === (t = e.body) || void 0 === t ? void 0 : t.code;
                        n === I.AbortCodes.ACCOUNT_SCHEDULED_FOR_DELETION && null != s && "" !== s ? u.default.dispatch({
                            type: "LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION",
                            credentials: {
                                login: o,
                                password: s
                            }
                        }) : n === I.AbortCodes.ACCOUNT_DISABLED && null != s && "" !== s ? u.default.dispatch({
                            type: "LOGIN_ACCOUNT_DISABLED",
                            credentials: {
                                login: o,
                                password: s
                            }
                        }) : n === I.AbortCodes.PHONE_VERIFICATION_REQUIRED ? u.default.dispatch({
                            type: "LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED"
                        }) : u.default.dispatch({
                            type: "LOGIN_FAILURE",
                            error: new c.V6OrEarlierAPIError(e)
                        })
                    })
                },
                loginMFA(e) {
                    let {
                        code: t,
                        ticket: o,
                        source: s,
                        giftCodeSKUId: n,
                        isMultiAccount: a,
                        isWebAuthn: d
                    } = e;
                    d ? u.default.dispatch({
                        type: "LOGIN_MFA_WEBAUTHN"
                    }) : u.default.dispatch({
                        type: "LOGIN_MFA"
                    }), O.default.post({
                        url: d ? I.Endpoints.LOGIN_WEBAUTHN : I.Endpoints.LOGIN_MFA,
                        body: {
                            code: t,
                            ticket: o,
                            login_source: s,
                            gift_code_sku_id: n
                        },
                        retries: 2,
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: l.NetworkActionNames.USER_LOGIN_MFA
                        }
                    }).then(e => {
                        a ? this.switchAccountToken(e.body.token) : u.default.dispatch({
                            type: "LOGIN_SUCCESS",
                            token: e.body.token
                        })
                    }, e => u.default.dispatch({
                        type: "LOGIN_MFA_FAILURE",
                        message: C(e.body)
                    }))
                },
                loginMFAv2(e) {
                    let t, {
                        code: o,
                        ticket: s,
                        source: n,
                        giftCodeSKUId: a,
                        isMultiAccount: d,
                        mfaType: r
                    } = e;
                    return t = "webauthn" === r ? I.Endpoints.LOGIN_WEBAUTHN : "sms" === r ? I.Endpoints.LOGIN_SMS : I.Endpoints.LOGIN_MFA, O.default.post({
                        url: t,
                        body: {
                            code: o,
                            ticket: s,
                            login_source: n,
                            gift_code_sku_id: a
                        },
                        retries: 2,
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: l.NetworkActionNames.USER_LOGIN_MFA
                        }
                    }).then(e => {
                        d ? this.switchAccountToken(e.body.token) : u.default.dispatch({
                            type: "LOGIN_SUCCESS",
                            token: e.body.token
                        })
                    }).catch(e => {
                        var t;
                        if ((null === (t = e.body) || void 0 === t ? void 0 : t.code) === I.AbortCodes.MFA_INVALID_CODE) throw Error((0, f.mapError)(r));
                        throw e
                    })
                },
                requestSMSToken(e) {
                    u.default.dispatch({
                        type: "LOGIN_MFA_SMS"
                    }), O.default.post({
                        url: I.Endpoints.LOGIN_SMS_SEND,
                        body: {
                            ticket: e
                        },
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: l.NetworkActionNames.LOGIN_REQUEST_SMS_TOKEN
                        }
                    }).then(e => {
                        let {
                            body: {
                                phone: t
                            }
                        } = e;
                        u.default.dispatch({
                            type: "LOGIN_MFA_SMS_REQUEST_SUCCESS",
                            phone: t
                        })
                    }, e => {
                        u.default.dispatch({
                            type: "LOGIN_MFA_FAILURE",
                            message: C(e.body)
                        })
                    })
                },
                loginSMS(e) {
                    let {
                        code: t,
                        ticket: o,
                        source: s,
                        giftCodeSKUId: n,
                        isMultiAccount: a
                    } = e;
                    u.default.dispatch({
                        type: "LOGIN_MFA_SMS"
                    }), O.default.post({
                        url: I.Endpoints.LOGIN_SMS,
                        body: {
                            code: t,
                            ticket: o,
                            login_source: s,
                            gift_code_sku_id: n
                        },
                        retries: 2,
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: l.NetworkActionNames.USER_LOGIN_MFA_SMS
                        }
                    }).then(e => {
                        a ? this.switchAccountToken(e.body.token) : u.default.dispatch({
                            type: "LOGIN_SUCCESS",
                            token: e.body.token
                        })
                    }, e => u.default.dispatch({
                        type: "LOGIN_MFA_SMS_FAILURE",
                        message: C(e.body)
                    }))
                },
                loginToken(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    return u.default.dispatch({
                        type: "LOGIN"
                    }), new Promise(o => {
                        setImmediate(() => {
                            u.default.dispatch({
                                type: "LOGIN_SUCCESS",
                                token: e
                            }), t && this.startSession(e), o()
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
                    v(e)
                },
                logout() {
                    var e;
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : I.Routes.DEFAULT_LOGGED_OUT,
                        o = arguments.length > 1 ? arguments[1] : void 0;
                    return O.default.post({
                        url: I.Endpoints.LOGOUT,
                        body: {
                            provider: (0, y.getDevicePushProvider)(),
                            token: i.default.get(I.DEVICE_TOKEN),
                            voip_provider: y.DEVICE_PUSH_VOIP_PROVIDER,
                            voip_token: i.default.get(I.DEVICE_VOIP_TOKEN)
                        },
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: l.NetworkActionNames.USER_LOGOUT
                        },
                        ...null != o && {
                            headers: {
                                authorization: null !== (e = d.default.getToken(o)) && void 0 !== e ? e : ""
                            }
                        }
                    }).finally(() => {
                        (null == o || o === S.default.getId()) && M(t)
                    })
                },
                switchAccountToken(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        o = S.default.getToken();
                    m.log("Switching accounts", {
                        wasLoggedIn: null != o,
                        tokenHasChanged: e !== o
                    }), v({
                        isSwitchingAccount: !0
                    });
                    let s = this.loginToken(e, !0).then(() => {
                        let t = S.default.getToken();
                        m.log("Switched accounts finished", {
                            isCorrectToken: e === t
                        })
                    });
                    return t && (0, h.transitionTo)(I.Routes.ME), s
                },
                verifySSOToken() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : I.Routes.DEFAULT_LOGGED_OUT;
                    return r.default.get({
                        url: I.Endpoints.ME,
                        oldFormErrors: !0
                    }).catch(() => M(e))
                },
                verify(e) {
                    null != e ? O.default.post({
                        url: I.Endpoints.VERIFY,
                        body: {
                            token: e
                        },
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: l.NetworkActionNames.USER_VERIFY
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
                            url: I.Endpoints.AUTHORIZE_PAYMENT,
                            body: {
                                token: e
                            },
                            oldFormErrors: !0,
                            trackedActionData: {
                                event: l.NetworkActionNames.AUTHORIZE_PAYMENT
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
                            url: I.Endpoints.AUTHORIZE_IP,
                            body: {
                                token: e
                            },
                            oldFormErrors: !0,
                            trackedActionData: {
                                event: l.NetworkActionNames.AUTHORIZE_IP
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
                    url: I.Endpoints.VERIFY_RESEND,
                    oldFormErrors: !0,
                    trackedActionData: {
                        event: l.NetworkActionNames.USER_VERIFY_RESEND
                    }
                }),
                async resetPassword(e, t, o) {
                    u.default.dispatch({
                        type: "LOGIN"
                    });
                    let s = {
                            token: e,
                            password: t,
                            source: o
                        },
                        n = i.default.get(I.DEVICE_TOKEN),
                        a = (0, y.getDevicePushProvider)();
                    null != a && null != n && (s.push_provider = a, s.push_token = n);
                    let d = i.default.get(I.DEVICE_VOIP_TOKEN);
                    null != y.DEVICE_PUSH_VOIP_PROVIDER && null != d && (s.push_voip_provider = y.DEVICE_PUSH_VOIP_PROVIDER, s.push_voip_token = d);
                    try {
                        let {
                            body: {
                                mfa: e,
                                sms: t,
                                webauthn: o,
                                ticket: n,
                                token: a,
                                backup: d,
                                totp: r
                            }
                        } = await O.default.post({
                            url: I.Endpoints.RESET_PASSWORD,
                            body: s,
                            oldFormErrors: !0,
                            trackedActionData: {
                                event: l.NetworkActionNames.USER_RESET_PASSWORD
                            }
                        });
                        return {
                            result: e ? "MFA" : "SUCCESS",
                            sms: t,
                            webauthn: o,
                            ticket: n,
                            token: a,
                            backup: d,
                            totp: r
                        }
                    } catch (e) {
                        throw u.default.dispatch({
                            type: "LOGIN_FAILURE",
                            error: new c.V6OrEarlierAPIError(e)
                        }), e
                    }
                },
                async resetPasswordMFA(e, t, o, s, n) {
                    u.default.dispatch({
                        type: "LOGIN_MFA"
                    });
                    try {
                        let a = await O.default.post({
                            url: I.Endpoints.RESET_PASSWORD,
                            body: {
                                code: e,
                                ticket: t,
                                password: o,
                                token: s,
                                source: n
                            },
                            oldFormErrors: !0,
                            trackedActionData: {
                                event: l.NetworkActionNames.USER_RESET_PASSWORD,
                                properties: {
                                    mfa: !0
                                }
                            }
                        });
                        return a.body.token
                    } catch (e) {
                        throw u.default.dispatch({
                            type: "LOGIN_MFA_FAILURE",
                            message: C(e.body)
                        }), e
                    }
                },
                async resetPasswordMFAv2(e) {
                    let {
                        method: t,
                        code: o,
                        ticket: s,
                        password: n,
                        token: a,
                        source: d
                    } = e;
                    u.default.dispatch({
                        type: "LOGIN_MFA"
                    });
                    let r = await O.default.post({
                        url: I.Endpoints.RESET_PASSWORD,
                        body: {
                            code: o,
                            ticket: s,
                            password: n,
                            token: a,
                            source: d,
                            method: t
                        },
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: l.NetworkActionNames.USER_RESET_PASSWORD,
                            properties: {
                                mfa: !0
                            }
                        }
                    });
                    return r.body.token
                },
                async forgotPassword(e) {
                    this.setLoginCredentials(e), u.default.dispatch({
                        type: "FORGOT_PASSWORD_REQUEST"
                    });
                    try {
                        await O.default.post({
                            url: I.Endpoints.FORGOT_PASSWORD,
                            body: {
                                login: e
                            },
                            oldFormErrors: !0,
                            trackedActionData: {
                                event: l.NetworkActionNames.FORGOT_PASSWORD
                            }
                        }), u.default.dispatch({
                            type: "FORGOT_PASSWORD_SENT"
                        })
                    } catch (o) {
                        let e = new c.V6OrEarlierAPIError(o),
                            t = e.code;
                        throw t === I.AbortCodes.PHONE_VERIFICATION_REQUIRED ? u.default.dispatch({
                            type: "LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION"
                        }) : u.default.dispatch({
                            type: "LOGIN_FAILURE",
                            error: e
                        }), o
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
                getLocationMetadata: () => null != T ? T : (clearTimeout(s), s = setTimeout(() => {
                    u.default.dispatch({
                        type: "SET_CONSENT_REQUIRED",
                        consentRequired: !0
                    })
                }, 5e3), T = r.default.get({
                    url: I.Endpoints.AUTH_LOCATION_METADATA,
                    retries: 2,
                    oldFormErrors: !0
                }).then(e => {
                    var t, o, n, a, l;
                    if (clearTimeout(s), null == A.default.getAuthenticationConsentRequired()) {
                        let t = null === (a = null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.consent_required) || void 0 === a || a;
                        u.default.dispatch({
                            type: "SET_CONSENT_REQUIRED",
                            consentRequired: t
                        })
                    }
                    if (u.default.dispatch({
                            type: "SET_LOCATION_METADATA",
                            countryCode: null !== (l = null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.country_code) && void 0 !== l ? l : void 0
                        }), T = null, (null == e ? void 0 : null === (o = e.body) || void 0 === o ? void 0 : o.promotional_email_opt_in) != null) {
                        let t = e.body.promotional_email_opt_in;
                        (0, E.setPromoEmailConsentState)({
                            required: t.required,
                            checked: t.pre_checked,
                            preChecked: t.pre_checked
                        })
                    }
                }, () => {
                    clearTimeout(s), u.default.dispatch({
                        type: "SET_CONSENT_REQUIRED",
                        consentRequired: !0
                    }), T = null
                }))
            }
        },
        772017: function(e, t, o) {
            "use strict";
            o.r(t), o.d(t, {
                default: function() {
                    return c
                }
            }), o("424973");
            var s = o("995008"),
                n = o.n(s),
                a = o("913144"),
                l = o("693051"),
                d = o("153498"),
                r = o("76493"),
                i = o("91731"),
                u = o("49111"),
                c = {
                    push(e, t) {
                        let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n("modal"),
                            s = arguments.length > 3 ? arguments[3] : void 0,
                            l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : u.AppContext.APP;
                        return (0, d.pushModal)({
                            key: o,
                            modal: (0, i.default)(e, {}, t, o),
                            ...s
                        }), a.default.dispatch({
                            type: "MODAL_PUSH",
                            modal: e,
                            props: t,
                            key: o,
                            appContext: l
                        }), o
                    },
                    pushLazy(e, t) {
                        let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n("modal"),
                            s = arguments.length > 3 ? arguments[3] : void 0,
                            a = (0, l.getRootNavigationRef)();
                        return null != a && a.isReady() ? (e instanceof Promise ? e.then(e => {
                            let {
                                default: t
                            } = e;
                            return t
                        }) : e()).then(e => this.push(e, t, o, s)) : new Promise(n => r.default.enqueue(() => n(this.pushLazy(e, t, o, s))))
                    },
                    updateAnimation(e, t) {
                        a.default.dispatch({
                            type: "MODAL_UPDATE",
                            key: e,
                            props: {},
                            partial: !0,
                            animation: t
                        })
                    },
                    pop() {
                        (0, d.popModal)(), a.default.dispatch({
                            type: "MODAL_POP"
                        })
                    },
                    popWithKey(e, t) {
                        (0, d.popModal)(e, t), a.default.dispatch({
                            type: "MODAL_POP",
                            key: e,
                            onExited: t
                        })
                    },
                    popAll() {
                        (0, d.popAllModals)(), a.default.dispatch({
                            type: "MODAL_POP_ALL"
                        }), a.default.dispatch({
                            type: "CHANNEL_SETTINGS_CLOSE"
                        }), a.default.dispatch({
                            type: "EMAIL_VERIFICATION_MODAL_CLOSE"
                        }), a.default.dispatch({
                            type: "GUILD_SETTINGS_CLOSE"
                        }), a.default.dispatch({
                            type: "HIDE_ACTION_SHEET"
                        }), a.default.dispatch({
                            type: "DISPLAYED_INVITE_CLEAR"
                        }), a.default.dispatch({
                            type: "DRAWER_CLOSE",
                            animated: !0
                        }), a.default.dispatch({
                            type: "NOTIFICATION_SETTINGS_MODAL_CLOSE"
                        }), a.default.dispatch({
                            type: "QUICKSWITCHER_HIDE"
                        }), a.default.dispatch({
                            type: "MENTION_MODAL_CLOSE"
                        }), a.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLOSE"
                        }), a.default.dispatch({
                            type: "SEARCH_MODAL_CLOSE"
                        }), a.default.dispatch({
                            type: "CONNECTIONS_GRID_MODAL_HIDE"
                        })
                    }
                }
        },
        307439: function(e, t, o) {
            "use strict";
            o.r(t), o.d(t, {
                setPromoEmailConsentState: function() {
                    return a
                },
                setPromoEmailConsentChecked: function() {
                    return l
                },
                usePromoEmailConsentStore: function() {
                    return d
                }
            });
            var s = o("308503");
            let n = (0, s.default)(() => ({
                    required: !1,
                    checked: !1,
                    preChecked: !1
                })),
                a = e => {
                    n.setState(e)
                },
                l = e => {
                    n.setState({
                        checked: e
                    })
                },
                d = n
        },
        76493: function(e, t, o) {
            "use strict";
            o.r(t), o.d(t, {
                default: function() {
                    return s
                }
            }), o("424973");
            var s = new class e {
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
        776502: function(e, t, o) {
            "use strict";
            o.r(t), o.d(t, {
                mapError: function() {
                    return d
                },
                openMFAModal: function() {
                    return i
                }
            }), o("70102"), o("581081");
            var s = o("872717"),
                n = o("695501"),
                a = o("49111"),
                l = o("782340");

            function d(e) {
                let t = l.default.Messages.MFA_V2_INVALID_CODE;
                switch (e) {
                    case "webauthn":
                        t = l.default.Messages.MFA_V2_INVALID_WEBAUTHN;
                        break;
                    case "password":
                        t = l.default.Messages.MFA_V2_INVALID_PASSWORD
                }
                return t
            }
            async function r(e) {
                let {
                    ticket: t,
                    mfaType: o,
                    data: n
                } = e, l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                try {
                    let e = await s.default.post({
                        url: a.Endpoints.FINISH_MFA_CHECK,
                        body: {
                            ticket: t,
                            mfa_type: o,
                            data: n
                        },
                        retries: l
                    });
                    return e.body
                } catch (e) {
                    var r;
                    if ((null === (r = e.body) || void 0 === r ? void 0 : r.code) === a.AbortCodes.MFA_INVALID_CODE) throw Error(d(o));
                    throw e
                }
            }

            function i(e, t, s) {
                let l = async e => {
                    let o = await r(e),
                        s = {
                            "X-Discord-MFA-Authorization": o.token
                        };
                    return new Promise((o, n) => {
                        t(s, (t, s, l) => {
                            var r, i;
                            return (null === (r = t.body) || void 0 === r ? void 0 : r.code) === a.AbortCodes.MFA_INVALID_CODE || (null === (i = t.body) || void 0 === i ? void 0 : i.code) === a.AbortCodes.MFA_REQUIRED ? (n(Error(d(e.mfaType))), !0) : (o(), !1)
                        })
                    })
                };
                e.methods = e.methods.filter(e => Object.hasOwn(n.SELECT_NAMES, e.type)), o("24287").openMFAModal(e, l, s)
            }
        },
        695501: function(e, t, o) {
            "use strict";
            o.r(t), o.d(t, {
                SELECT_NAMES: function() {
                    return n
                }
            });
            var s = o("782340");
            let n = {
                get webauthn() {
                    return s.default.Messages.MFA_V2_WEBAUTHN_NAME
                },
                get totp() {
                    return s.default.Messages.MFA_V2_TOTP_NAME
                },
                get sms() {
                    return s.default.Messages.MFA_V2_SMS_NAME
                },
                get password() {
                    return s.default.Messages.MFA_V2_PASSWORD_NAME
                },
                get backup() {
                    return s.default.Messages.MFA_V2_BACKUP_NAME
                }
            }
        },
        24287: function(e, t, o) {
            "use strict";
            o.r(t), o.d(t, {
                MFAModal: function() {
                    return v
                },
                MFASlides: function() {
                    return M
                },
                openMFAModal: function() {
                    return g
                }
            }), o("222007"), o("781738"), o("506083"), o("70102");
            var s = o("37983"),
                n = o("884691"),
                a = o("376507"),
                l = o("872717"),
                d = o("77078"),
                r = o("145131"),
                i = o("772280"),
                u = o("773336"),
                c = o("286235"),
                E = o("50885"),
                _ = o("695501"),
                p = o("49111"),
                f = o("782340"),
                h = o("992279");

            function S(e) {
                let {
                    subtitle: t,
                    onClose: o
                } = e;
                return (0, s.jsxs)(d.ModalHeader, {
                    direction: r.default.Direction.VERTICAL,
                    className: h.header,
                    separator: !1,
                    children: [(0, s.jsx)(d.Heading, {
                        variant: "heading-xl/semibold",
                        children: f.default.Messages.MFA_V2_HEADER
                    }), null != t && (0, s.jsx)(d.Text, {
                        color: "header-secondary",
                        variant: "text-md/normal",
                        className: h.subtitle,
                        children: t
                    }), (0, s.jsx)(d.ModalCloseButton, {
                        className: h.closeButton,
                        onClick: o
                    })]
                })
            }

            function A(e) {
                let {
                    children: t
                } = e;
                return (0, s.jsx)(d.ModalContent, {
                    className: h.content,
                    children: t
                })
            }

            function O(e) {
                let {
                    error: t
                } = e;
                return null == t ? null : (0, s.jsx)(d.Text, {
                    className: h.error,
                    variant: "text-sm/normal",
                    color: "text-danger",
                    children: t
                })
            }

            function N(e) {
                let {
                    request: t,
                    setSlide: o,
                    showConfirm: n = !1,
                    ...a
                } = e, l = t.methods.length > 1;
                return l || n ? (0, s.jsxs)(d.ModalFooter, {
                    className: h.footer,
                    direction: n && !l ? r.default.Direction.HORIZONTAL_REVERSE : r.default.Direction.HORIZONTAL,
                    children: [l && (0, s.jsx)(d.Button, {
                        look: d.Button.Looks.LINK,
                        onClick: () => o("select"),
                        color: d.Button.Colors.PRIMARY,
                        children: f.default.Messages.MFA_V2_GO_TO_SELECT
                    }), n && (0, s.jsx)(d.Button, {
                        type: "submit",
                        ...a,
                        children: f.default.Messages.CONFIRM
                    })]
                }) : null
            }

            function I(e) {
                let {
                    request: t,
                    setSlide: o,
                    onClose: n
                } = e;
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(S, {
                        subtitle: f.default.Messages.MFA_V2_SELECT_HEADER,
                        onClose: n
                    }), (0, s.jsx)(A, {
                        children: t.methods.map(e => (0, s.jsxs)(d.Clickable, {
                            className: h.listItemContainer,
                            onClick: () => {
                                o(e.type)
                            },
                            children: [(0, s.jsx)(d.Text, {
                                className: h.listItemText,
                                variant: "text-md/semibold",
                                children: _.SELECT_NAMES[e.type]
                            }), (0, s.jsx)(i.default, {
                                width: 20,
                                height: 20,
                                className: h.listItemArrow
                            })]
                        }, e.type))
                    })]
                })
            }

            function y(e) {
                let {
                    request: t,
                    finish: o,
                    setSlide: l,
                    onClose: r
                } = e, [i, _] = n.useState(!1), [h, I] = n.useState(null), {
                    challenge: y
                } = t.methods.find(e => "webauthn" === e.type), R = async () => {
                    _(!0), I(null);
                    let e = u.isPlatformEmbedded && E.default.supportsFeature(p.NativeFeatures.WEBAUTHN) ? E.default.webAuthnAuthenticate(y) : a.get(JSON.parse(y)).then(e => JSON.stringify(e));
                    try {
                        let t = await e;
                        await o({
                            mfaType: "webauthn",
                            data: t
                        })
                    } catch (e) {
                        c.default.captureException(e), I(f.default.Messages.MFA_V2_WEBAUTHN_GENERIC_ERROR)
                    } finally {
                        _(!1)
                    }
                };
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(S, {
                        onClose: r
                    }), (0, s.jsxs)(A, {
                        children: [(0, s.jsx)(d.Button, {
                            submitting: i,
                            onClick: R,
                            children: f.default.Messages.MFA_V2_WEBAUTHN_CTA
                        }), (0, s.jsx)(O, {
                            error: h
                        })]
                    }), (0, s.jsx)(N, {
                        request: t,
                        setSlide: l
                    })]
                })
            }

            function R(e) {
                let {
                    request: t,
                    finish: o,
                    setSlide: a,
                    onClose: l,
                    isSlideReady: r
                } = e, [i, u] = n.useState(!1), [c, E] = n.useState(null), [_, p] = n.useState(""), h = n.useRef(null), I = f.default.Messages.TWO_FA_ENTER_BACKUP_LABEL, y = f.default.Messages.TWO_FA_BACKUP_CODE, R = n.useCallback(e => {
                    p(e), E(null)
                }, [p, E]);
                return n.useEffect(() => {
                    if (r) {
                        var e;
                        null === (e = h.current) || void 0 === e || e.focus()
                    }
                }, [r]), (0, s.jsxs)("form", {
                    onSubmit: e => {
                        e.preventDefault(), u(!0), o({
                            mfaType: "backup",
                            data: _.replace(/-/g, "")
                        }).catch(e => {
                            var t, o;
                            E(null !== (o = e.message) && void 0 !== o ? o : null === (t = e.body) || void 0 === t ? void 0 : t.message)
                        }).finally(() => {
                            u(!1)
                        })
                    },
                    children: [(0, s.jsx)(S, {
                        onClose: l
                    }), (0, s.jsx)(A, {
                        children: (0, s.jsxs)(d.FormItem, {
                            title: I,
                            children: [(0, s.jsx)(d.TextInput, {
                                inputRef: h,
                                onChange: R,
                                placeholder: y,
                                maxLength: 9,
                                minLength: 8,
                                value: _,
                                spellCheck: "false",
                                disabled: i
                            }), (0, s.jsx)(O, {
                                error: c
                            })]
                        })
                    }), (0, s.jsx)(N, {
                        request: t,
                        setSlide: a,
                        showConfirm: !0,
                        disabled: _.length < 8,
                        submitting: i
                    })]
                })
            }

            function m(e) {
                let {
                    request: t,
                    finish: o,
                    setSlide: a,
                    onClose: l,
                    isSlideReady: r
                } = e, [i, u] = n.useState(!1), [c, E] = n.useState(null), [_, p] = n.useState(""), h = n.useRef(null);
                return n.useEffect(() => {
                    if (r) {
                        var e;
                        null === (e = h.current) || void 0 === e || e.focus()
                    }
                }, [r]), (0, s.jsxs)("form", {
                    onSubmit: e => {
                        e.preventDefault(), u(!0), o({
                            mfaType: "totp",
                            data: _
                        }).catch(e => {
                            var t, o;
                            E(null !== (o = e.message) && void 0 !== o ? o : null === (t = e.body) || void 0 === t ? void 0 : t.message)
                        }).finally(() => {
                            u(!1)
                        })
                    },
                    children: [(0, s.jsx)(S, {
                        onClose: l
                    }), (0, s.jsx)(A, {
                        children: (0, s.jsxs)(d.FormItem, {
                            title: f.default.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL,
                            children: [(0, s.jsx)(d.TextInput, {
                                inputRef: h,
                                onChange: p,
                                placeholder: f.default.Messages.TWO_FA_AUTH_CODE_NO_BACKUP,
                                maxLength: 6,
                                minLength: 6,
                                value: _,
                                autoComplete: "one-time-code",
                                spellCheck: "false",
                                disabled: i
                            }), (0, s.jsx)(O, {
                                error: c
                            })]
                        })
                    }), (0, s.jsx)(N, {
                        request: t,
                        setSlide: a,
                        showConfirm: !0,
                        disabled: 0 === _.length,
                        submitting: i
                    })]
                })
            }

            function T(e) {
                let {
                    request: t,
                    finish: o,
                    setSlide: a,
                    onClose: r,
                    isSlideReady: i
                } = e, [u, c] = n.useState(!1), [E, _] = n.useState(null), [I, y] = n.useState(!1), [R, m] = n.useState(null), [T, C] = n.useState(""), v = n.useRef(null);
                n.useEffect(() => {
                    c(!0), l.default.post({
                        url: p.Endpoints.LOGIN_SMS_SEND,
                        body: {
                            ticket: t.ticket
                        },
                        oldFormErrors: !0
                    }).then(e => {
                        _(e.body.phone)
                    }).catch(e => {
                        var t;
                        m(e.message || (null === (t = e.body) || void 0 === t ? void 0 : t.message))
                    }).finally(() => {
                        c(!1)
                    })
                }, [t.ticket]), n.useEffect(() => {
                    if (i) {
                        var e;
                        null === (e = v.current) || void 0 === e || e.focus()
                    }
                }, [i]);
                let M = null == E ? f.default.Messages.TWO_FA_ENTER_SMS_TOKEN_SENDING : f.default.Messages.TWO_FA_ENTER_SMS_TOKEN_SENT.format({
                    phoneNumber: E
                });
                return (0, s.jsxs)("form", {
                    onSubmit: e => {
                        e.preventDefault(), y(!0), o({
                            mfaType: "sms",
                            data: T
                        }).catch(e => {
                            var t, o;
                            m(null !== (o = e.message) && void 0 !== o ? o : null === (t = e.body) || void 0 === t ? void 0 : t.message)
                        }).finally(() => {
                            y(!1)
                        })
                    },
                    children: [(0, s.jsx)(S, {
                        subtitle: M,
                        onClose: r
                    }), (0, s.jsx)(A, {
                        children: (0, s.jsxs)(d.FormItem, {
                            title: f.default.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL,
                            children: [(0, s.jsxs)("div", {
                                className: h.smsInputContainer,
                                children: [(0, s.jsx)(d.TextInput, {
                                    className: h.smsInput,
                                    inputRef: v,
                                    onChange: C,
                                    placeholder: f.default.Messages.TWO_FA_AUTH_CODE_NO_BACKUP,
                                    maxLength: 10,
                                    value: T,
                                    autoComplete: "one-time-code",
                                    spellCheck: "false",
                                    disabled: I
                                }), (0, s.jsx)(d.Button, {
                                    size: d.Button.Sizes.MEDIUM,
                                    submitting: u,
                                    onClick: () => {
                                        l.default.post({
                                            url: p.Endpoints.LOGIN_SMS_SEND,
                                            body: {
                                                ticket: t.ticket
                                            },
                                            oldFormErrors: !0
                                        }).then(e => {
                                            _(e.body.phone)
                                        }).catch(e => {
                                            var t;
                                            m(e.message || (null === (t = e.body) || void 0 === t ? void 0 : t.message))
                                        })
                                    },
                                    children: f.default.Messages.MFA_SMS_RESEND
                                })]
                            }), (0, s.jsx)(O, {
                                error: R
                            })]
                        })
                    }), (0, s.jsx)(N, {
                        request: t,
                        setSlide: a,
                        showConfirm: !0,
                        disabled: 0 === T.length,
                        submitting: I
                    })]
                })
            }

            function C(e) {
                let {
                    request: t,
                    finish: o,
                    setSlide: a,
                    onClose: l,
                    isSlideReady: r
                } = e, [i, u] = n.useState(!1), [c, E] = n.useState(null), [_, p] = n.useState(""), h = n.useRef(null);
                return n.useEffect(() => {
                    if (r) {
                        var e;
                        null === (e = h.current) || void 0 === e || e.focus()
                    }
                }, [r]), (0, s.jsxs)("form", {
                    onSubmit: e => {
                        e.preventDefault(), u(!0), o({
                            mfaType: "password",
                            data: _
                        }).catch(e => {
                            var t, o;
                            E(null !== (o = e.message) && void 0 !== o ? o : null === (t = e.body) || void 0 === t ? void 0 : t.message)
                        }).finally(() => {
                            u(!1)
                        })
                    },
                    children: [(0, s.jsx)(S, {
                        onClose: l
                    }), (0, s.jsx)(A, {
                        children: (0, s.jsxs)(d.FormItem, {
                            title: f.default.Messages.FORM_LABEL_PASSWORD,
                            children: [(0, s.jsx)(d.TextInput, {
                                inputRef: h,
                                onChange: p,
                                value: _,
                                type: "password",
                                autoComplete: "password",
                                spellCheck: "false",
                                disabled: i
                            }), (0, s.jsx)(O, {
                                error: c
                            })]
                        })
                    }), (0, s.jsx)(N, {
                        request: t,
                        setSlide: a,
                        showConfirm: !0,
                        disabled: 0 === _.length,
                        submitting: i
                    })]
                })
            }

            function v(e) {
                let {
                    transitionState: t,
                    request: o,
                    finish: n,
                    onClose: a
                } = e;
                return (0, s.jsx)(d.ModalRoot, {
                    transitionState: t,
                    size: d.ModalSize.SMALL,
                    "aria-label": f.default.Messages.MFA_V2_HEADER,
                    children: (0, s.jsx)(M, {
                        request: o,
                        mfaFinish: n,
                        onClose: a,
                        onEarlyClose: a
                    })
                })
            }

            function M(e) {
                var t, o;
                let {
                    request: a,
                    mfaFinish: l,
                    onEarlyClose: r,
                    onClose: i,
                    width: u = 440
                } = e, [c, E] = n.useState(null !== (o = null === (t = a.methods[0]) || void 0 === t ? void 0 : t.type) && void 0 !== o ? o : "select"), [_, p] = n.useState(c), f = async e => {
                    let {
                        mfaType: t,
                        data: o
                    } = e;
                    await l({
                        mfaType: t,
                        data: o,
                        ticket: a.ticket
                    }), null != i && i()
                }, h = {
                    request: a,
                    finish: f,
                    setSlide: E,
                    onClose: r
                };
                return (0, s.jsxs)(d.Slides, {
                    activeSlide: c,
                    width: u,
                    onSlideReady: p,
                    children: [(0, s.jsx)(d.Slide, {
                        id: "select",
                        children: (0, s.jsx)(I, {
                            ...h
                        })
                    }), (0, s.jsx)(d.Slide, {
                        id: "webauthn",
                        children: (0, s.jsx)(y, {
                            ...h
                        })
                    }), (0, s.jsx)(d.Slide, {
                        id: "totp",
                        children: (0, s.jsx)(m, {
                            ...h,
                            isSlideReady: "totp" === _
                        })
                    }), (0, s.jsx)(d.Slide, {
                        id: "sms",
                        children: (0, s.jsx)(T, {
                            ...h,
                            isSlideReady: "sms" === _
                        })
                    }), (0, s.jsx)(d.Slide, {
                        id: "backup",
                        children: (0, s.jsx)(R, {
                            ...h,
                            isSlideReady: "backup" === _
                        })
                    }), (0, s.jsx)(d.Slide, {
                        id: "password",
                        children: (0, s.jsx)(C, {
                            ...h,
                            isSlideReady: "password" === _
                        })
                    })]
                })
            }

            function g(e, t, o) {
                (0, d.openModal)(o => (0, s.jsx)(v, {
                    finish: t,
                    request: e,
                    ...o
                }), {
                    onCloseCallback: () => {
                        o(Error(f.default.Messages.MFA_V2_CANCELED))
                    }
                })
            }
        },
        350522: function(e, t, o) {
            "use strict";
            o.r(t), o.d(t, {
                default: function() {
                    return u
                }
            });
            var s = o("446674"),
                n = o("913144");
            let a = !1,
                l = !1,
                d = {},
                r = null;
            class i extends s.default.Store {
                hasConsented(e) {
                    return null != d[e] && d[e].consented
                }
                get fetchedConsents() {
                    return a
                }
                get receivedConsentsInConnectionOpen() {
                    return l
                }
                getAuthenticationConsentRequired() {
                    return r
                }
            }
            i.displayName = "ConsentStore";
            var u = new i(n.default, {
                CONNECTION_OPEN: function(e) {
                    let {
                        consents: t
                    } = e;
                    null != t && (d = {
                        ...d,
                        ...t
                    }, l = !0)
                },
                UPDATE_CONSENTS: function(e) {
                    let {
                        consents: t
                    } = e;
                    d = {
                        ...t
                    }, a = !0
                },
                SET_CONSENT_REQUIRED: function(e) {
                    r = e.consentRequired
                },
                LOGOUT: function() {
                    r = null
                }
            })
        },
        91731: function(e, t, o) {
            "use strict";
            o.r(t), o.d(t, {
                default: function() {
                    return a
                }
            });
            var s = o("206230"),
                n = o("49111");

            function a(e, t, o) {
                var a, l, d, r, i, u, c, E;
                let _ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                return {
                    key: null !== (l = null !== (a = t.key) && void 0 !== a ? a : _) && void 0 !== l ? l : "modal",
                    modal: e,
                    animation: null !== (d = t.animation) && void 0 !== d ? d : s.default.useReducedMotion ? n.ModalAnimation.FADE : n.ModalAnimation.SLIDE_UP,
                    shouldPersistUnderModals: null !== (r = t.shouldPersistUnderModals) && void 0 !== r && r,
                    props: o,
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
//# sourceMappingURL=8d266d9fc7abe4d5a7e9.js.map