(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["46541"], {
        599417: function(e, t, _) {
            "use strict";
            _.r(t), _.d(t, {
                default: function() {
                    return s
                }
            });
            var s, r = _("872717"),
                E = _("49111"),
                i = _("782340");
            s = class extends r.default.V8APIError {
                constructor(e, t) {
                    super(e, t, null != t ? i.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: E.Links.STATUS,
                        details: "".concat(t)
                    }) : i.default.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: E.Links.STATUS
                    }))
                }
            }
        },
        79489: function(e, t, _) {
            "use strict";
            _.r(t), _.d(t, {
                default: function() {
                    return n
                }
            });
            var s = _("888400"),
                r = _("333805"),
                E = _("782340");
            class i extends r.default {
                _getMessageFromRateLimit(e) {
                    let t = e.body.retry_after,
                        _ = (0, s.diffAsUnits)(0, 1e3 * t);
                    return (0, s.unitsAsStrings)(_, {
                        days: E.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_ERROR_RATE_LIMIT_DAYS,
                        hours: E.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_ERROR_RATE_LIMIT_HOURS,
                        minutes: E.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_ERROR_RATE_LIMIT_MINUTES
                    })
                }
                constructor(e, t) {
                    super(e, t), 429 === this.status && (this.message = this._getMessageFromRateLimit(e))
                }
            }
            var n = i
        },
        736978: function(e, t, _) {
            "use strict";
            _.r(t), _.d(t, {
                ErrorCodes: function() {
                    return s
                },
                parseV8BillingAddressSkemaErrorToBillingError: function() {
                    return T
                },
                default: function() {
                    return f
                }
            }), _("222007");
            var s, r, E, i, n, a, I, A, R = _("486196"),
                d = _("614247"),
                l = _("821879"),
                o = _("333805"),
                u = _("782340");
            (n = s || (s = {}))[n.UNKNOWN = 0] = "UNKNOWN", n[n.UNKNOWN_BILLING_PROFILE = 100001] = "UNKNOWN_BILLING_PROFILE", n[n.UNKNOWN_PAYMENT_SOURCE = 100002] = "UNKNOWN_PAYMENT_SOURCE", n[n.UNKNOWN_SUBSCRIPTION = 100003] = "UNKNOWN_SUBSCRIPTION", n[n.ALREADY_SUBSCRIBED = 100004] = "ALREADY_SUBSCRIBED", n[n.INVALID_PLAN = 100005] = "INVALID_PLAN", n[n.PAYMENT_SOURCE_REQUIRED = 100006] = "PAYMENT_SOURCE_REQUIRED", n[n.ALREADY_CANCELED = 100007] = "ALREADY_CANCELED", n[n.INVALID_PAYMENT = 100008] = "INVALID_PAYMENT", n[n.ALREADY_REFUNDED = 100009] = "ALREADY_REFUNDED", n[n.INVALID_BILLING_ADDRESS = 100010] = "INVALID_BILLING_ADDRESS", n[n.ALREADY_PURCHASED = 100011] = "ALREADY_PURCHASED", n[n.NEGATIVE_INVOICE_AMOUNT = 100027] = "NEGATIVE_INVOICE_AMOUNT", n[n.AUTHENTICATION_REQUIRED = 100029] = "AUTHENTICATION_REQUIRED", n[n.SUBSCRIPTION_RENEWAL_IN_PROGRESS = 100042] = "SUBSCRIPTION_RENEWAL_IN_PROGRESS", n[n.CONFIRMATION_REQUIRED = 100047] = "CONFIRMATION_REQUIRED", n[n.CARD_DECLINED = 100054] = "CARD_DECLINED", n[n.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED = 50097] = "INVALID_GIFT_REDEMPTION_FRAUD_REJECTED", n[n.PURCHASE_TOKEN_AUTHORIZATION_REQUIRED = 100056] = "PURCHASE_TOKEN_AUTHORIZATION_REQUIRED", n[n.INVALID_PAYMENT_SOURCE = 50048] = "INVALID_PAYMENT_SOURCE", n[n.INVALID_CURRENCY_FOR_PAYMENT_SOURCE = 100051] = "INVALID_CURRENCY_FOR_PAYMENT_SOURCE", n[n.BILLING_APPLE_SERVER_API_ERROR = 100070] = "BILLING_APPLE_SERVER_API_ERROR", n[n.BILLING_TRIAL_REDEMPTION_DISABLED = 100078] = "BILLING_TRIAL_REDEMPTION_DISABLED", n[n.BILLING_PAUSE_DISABLED = 100079] = "BILLING_PAUSE_DISABLED", n[n.BILLING_PAUSE_PENDING_ALREADY_SET = 100080] = "BILLING_PAUSE_PENDING_ALREADY_SET", n[n.BILLING_PAUSE_NOT_ELIGIBLE = 100081] = "BILLING_PAUSE_NOT_ELIGIBLE", n[n.BILLING_PAUSE_INVALID_INTERVAL = 100082] = "BILLING_PAUSE_INVALID_INTERVAL", n[n.BILLING_ALREADY_PAUSED = 100083] = "BILLING_ALREADY_PAUSED", (a = r || (r = {})).CARD_NUMBER = "cardNumber", a.CARD_CVC = "cvc", a.CARD_EXPIRATION_DATE = "expirationDate", a.CARD_NAME = "name", a.ADDRESS_NAME = "name", a.ADDRESS_LINE_1 = "line1", a.ADDRESS_LINE_2 = "line2", a.ADDRESS_CITY = "city", a.ADDRESS_STATE = "state", a.ADDRESS_POSTAL_CODE = "postalCode", a.ADDRESS_COUNTRY = "country", (I = E || (E = {})).ADDRESS_LINE_1 = "address_line1", I.ADDRESS_LINE_2 = "address_line2", I.ADDRESS_CITY = "address_city", I.ADDRESS_STATE = "address_state", I.ADDRESS_ZIP = "address_zip", I.ADDRESS_COUNTRY = "address_country", I.CARD_NUMBER = "number", I.CARD_EXPIRATION_DATE = "exp", I.CARD_EXPIRATION_MONTH = "exp_month", I.CARD_EXPIRATION_YEAR = "exp_year";
            let N = Object.freeze({
                    address_line1: "line1",
                    address_line2: "line2",
                    address_city: "city",
                    address_state: "state",
                    address_zip: "postalCode",
                    address_country: "country",
                    number: "cardNumber",
                    exp: "expirationDate",
                    exp_month: "expirationDate",
                    exp_year: "expirationDate"
                }),
                D = Object.freeze({
                    line_1: "line1",
                    line_2: "line2",
                    postal_code: "postalCode"
                });
            (A = i || (i = {})).CARD = "card", A.ADDRESS = "address";
            let L = new Set(["cardNumber", "cvc", "expirationDate", "name"]),
                c = new Set(["cardNumber", "cvc", "expirationDate", "name", "postalCode", "country", "line1", "city", "state"]),
                S = new Set(["name", "line1", "line2", "city", "state", "postalCode", "country"]);

            function T(e) {
                var t, _, s, r, E;
                if ("string" != typeof e && (null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.code) === R.INVALID_FORM_BODY_ERROR_CODE) {
                    if (!Array.isArray(null == e ? void 0 : null === (_ = e.body) || void 0 === _ ? void 0 : _.errors) && (null == e ? void 0 : null === (r = e.body) || void 0 === r ? void 0 : null === (s = r.errors) || void 0 === s ? void 0 : s.billing_address) != null) {
                        for (let t in e.body.errors.billing_address) {
                            let _ = e.body.errors.billing_address[t];
                            delete e.body.errors.billing_address[t], e.body.errors[t] = _
                        }
                        delete e.body.errors.billing_address
                    }(null === (E = e.body) || void 0 === E ? void 0 : E.errors) != null && (e.body = (0, d.default)(e.body.errors))
                }
                return new O(e)
            }
            class O extends o.default {
                _isInFieldSet(e) {
                    for (let t in this.fields)
                        if (e.has(t)) return !0
                }
                hasCardError() {
                    return 2 === (0, l.reducedPaymentInfoExperiment)().bucket ? this._isInFieldSet(c) : this._isInFieldSet(L)
                }
                hasAddressError() {
                    return this._isInFieldSet(S)
                }
                constructor(e, t) {
                    for (let _ in super(e, t), this.paymentId = null, 100027 === this.code ? this.message = u.default.Messages.BILLING_ERROR_NEGATIVE_INVOICE_AMOUNT : 50048 === this.code ? this.message = u.default.Messages.BILLING_PAYMENT_SOURCE_INVALID : 100002 === this.code ? this.message = u.default.Messages.BILLING_ERROR_UNKNOWN_PAYMENT_SOURCE : 100042 === this.code ? this.message = u.default.Messages.BILLING_ERROR_PENDING_PAYMENT : 100078 === this.code ? this.message = u.default.Messages.BILLING_TRIAL_REDEMPTION_DISABLED : 429 === this.status ? this.message = u.default.Messages.BILLING_ERROR_RATE_LIMIT : 0 === this.code ? this.message = u.default.Messages.BILLING_ERROR_GENERIC : 400 === this.status && null != this.fields.captcha_key && (this.message = u.default.Messages.BILLING_ERROR_INVALID_CAPTCHA_RESPONSE), this.fields) {
                        let e = N[_] || D[_];
                        if (null != e) {
                            let t = this.fields[_];
                            delete this.fields[_], this.fields[e] = t
                        }
                    }
                    null != e.body && "string" == typeof e.body.payment_id && (this.paymentId = e.body.payment_id)
                }
            }
            O.ErrorCodes = s, O.Fields = r, O.Sections = i, O.CARD_ERRORS = L, O.ADDRESS_ERRORS = S;
            var f = O
        },
        852766: function(e, t, _) {
            "use strict";
            _.r(t), _("736978")
        },
        927367: function(e, t, _) {
            "use strict";
            _.r(t), _.d(t, {
                UploadErrorCodes: function() {
                    return r
                },
                default: function() {
                    return i
                }
            });
            var s, r, E = _("782340");
            (s = r || (r = {}))[s.GENERAL = 0] = "GENERAL", s[s.NO_FILE = 1] = "NO_FILE", s[s.PROGRESS = 2] = "PROGRESS", s[s.UPLOAD = 3] = "UPLOAD", s[s.READ = 4] = "READ";
            var i = class e {
                get displayMessage() {
                    switch (this.code) {
                        case 1:
                            return E.default.Messages.UPLOAD_DEBUG_LOG_FAILURE_NO_FILE;
                        case 2:
                            return E.default.Messages.UPLOAD_DEBUG_LOG_FAILURE_PROGRESS;
                        case 3:
                            return E.default.Messages.UPLOAD_DEBUG_LOG_FAILURE_UPLOAD;
                        case 4:
                            return E.default.Messages.UPLOAD_DEBUG_LOG_FAILURE_READ;
                        default:
                            return E.default.Messages.UPLOAD_DEBUG_LOG_FAILURE
                    }
                }
                constructor(e) {
                    this.code = e
                }
            }
        },
        448993: function(e, t, _) {
            "use strict";
            _.r(t), _.d(t, {
                V6OrEarlierAPIError: function() {
                    return s.default
                },
                APIError: function() {
                    return r.default
                },
                BillingError: function() {
                    return E.default
                },
                AppliedGuildBoostError: function() {
                    return i.default
                },
                UploadVoiceDebugLogsError: function() {
                    return n.default
                },
                UploadErrorCodes: function() {
                    return n.UploadErrorCodes
                }
            });
            var s = _("333805"),
                r = _("599417"),
                E = _("736978");
            _("852766"), _("846071");
            var i = _("79489"),
                n = _("927367")
        },
        651693: function(e, t, _) {
            "use strict";
            _.r(t), _.d(t, {
                isImageFile: function() {
                    return i
                },
                isAnimatedImageUrl: function() {
                    return a
                },
                isVideoUrl: function() {
                    return A
                },
                isVideoFile: function() {
                    return R
                }
            }), _("222007");
            var s = _("773336");
            let r = (e, t) => {
                    if (null == e) return !1;
                    let [_, s] = e.split(/\?/, 1);
                    return t.test(_)
                },
                E = /\.(png|jpe?g|webp|gif|heic|heif|dng)$/i,
                i = e => null != e && E.test(e),
                n = /\.(webp|gif)$/i,
                a = e => r(e, n),
                I = (0, s.isIOS)() ? /\.(mp4|mov)$/i : ((0, s.isAndroid)(), /\.(mp4|webm|mov)$/i),
                A = e => r(e, I),
                R = e => null != e && I.test(e)
        },
        155084: function(e, t, _) {
            "use strict";
            _.r(t), _.d(t, {
                default: function() {
                    return I
                }
            }), _("222007"), _("424973");
            var s = _("615361"),
                r = _("872717"),
                E = _("773336"),
                i = _("827032"),
                n = _("49111");
            let a = new Set(["darwin", "linux", "win32", "ios", "android"]);
            var I = new class e {
                increment(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        {
                            name: _,
                            tags: r
                        } = e,
                        n = {
                            name: _,
                            tags: (0, i.getGlobalTagsArray)()
                        };
                    null != r && r.forEach(e => {
                        n.tags.push(e)
                    });
                    let I = function() {
                        if ((0, E.isWeb)()) return "web";
                        {
                            let e = (0, E.getPlatformName)();
                            return a.has(e) ? e : null
                        }
                    }();
                    null != I && n.tags.push("platform:".concat(I));
                    let A = function() {
                        let e = "{{cf_shim}}RELEASE_CHANNEL{{/cf_shim}}";
                        return s.ReleaseChannelsSets.ALL.has(e) ? e : null
                    }();
                    null != A && n.tags.push("release_channel:".concat(A)), this._metrics.push(n), (t || this._metrics.length >= 100) && this._flush()
                }
                _flush() {
                    if (this._metrics.length > 0) {
                        let e = [...this._metrics];
                        r.default.post({
                            url: n.Endpoints.METRICS,
                            body: {
                                metrics: e
                            },
                            retries: 1
                        }).catch(t => {
                            this._metrics.length + e.length < 100 && (this._metrics = [...this._metrics, ...e])
                        })
                    }
                    this._metrics = []
                }
                constructor() {
                    this._metrics = [], this._intervalId = setInterval(() => {
                        this._flush()
                    }, 12e4)
                }
            }
        },
        821879: function(e, t, _) {
            "use strict";
            _.r(t), _.d(t, {
                reducedPaymentInfoExperiment: function() {
                    return E
                }
            });
            var s = _("862205");
            let r = (0, s.createExperiment)({
                id: "2023-06_reduced_payment_method_address_info",
                label: "Reduced Payment Method Address Info",
                kind: "user",
                defaultConfig: {
                    bucket: 0,
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Simplify address form",
                    config: {
                        bucket: 1,
                        enabled: !0
                    }
                }, {
                    id: 2,
                    label: "Partial address in card form",
                    config: {
                        bucket: 2,
                        enabled: !0
                    }
                }]
            });

            function E() {
                let {
                    autoTrackExposure: e
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                    autoTrackExposure: !0
                }, t = r.getCurrentConfig({
                    location: "2b69fe_1"
                }, {
                    autoTrackExposure: e
                });
                return t
            }
        },
        432710: function(e, t, _) {
            "use strict";
            var s, r;
            _.r(t), _.d(t, {
                MetricEvents: function() {
                    return s
                }
            }), _("222007"), (r = s || (s = {})).APP_CRASHED = "app_crashed", r.SOCKET_CRASHED = "socket_crashed", r.MESSAGE_REQUEST_VIEW = "message_request_view", r.SPAM_MESSAGE_REQUEST_VIEW = "spam_message_request_view", r.SPAM_MESSAGE_REQUEST_ERROR_VIEW = "spam_message_request_error_view", r.FAMILY_CENTER_VIEW = "family_center_view", r.SAFETY_HUB_VIEW = "safety_hub_view", r.MESSAGE_REQUEST_COUNT_DRIFT = "message_request_count_drift", r.FORUM_CHANNEL_GRID_AUTO_ENABLED = "forum_channel_grid_auto_enabled", r.REMIX_FONT_LOADING_ERROR = "remix_font_loading_error", r.AFK_NOT_IDLE = "afk_not_idle", r.CAPTCHA_EVENT = "captcha_event", r.SAFETY_WARNING_VIEW = "safety_warning_view", r.SAFETY_WARNING_MODAL_VIEW = "safety_warning_modal_view", r.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT = "explicit_media_scan_client_timed_out", r.EXPLICIT_MEDIA_SCAN_CLIENT_TIMING = "explicit_media_scan_client_timing", r.OTA_CHECK_ATTEMPT = "OtaCheckAttempt", r.OTA_ASSET_DOWNLOAD_ATTEMPT = "OtaAssetDownloadAttempt", r.OTA_UPDATE_CHECK = "ota_update_check", r.OTA_ASSET_DOWNLOAD = "ota_asset_download", r.DEBUG_OTA_200_TIMEOUT = "debug_ota_200_timeout"
        },
        615361: function(e, t, _) {
            "use strict";
            var s, r;
            _.r(t), _.d(t, {
                ReleaseChannelsSets: function() {
                    return E
                }
            }), _("222007"), (r = s || (s = {})).STABLE = "stable", r.BETA = "beta", r.ALPHA = "alpha", r.PTB = "ptb", r.CANARY = "canary", r.STAGING = "staging", r.DEVELOPMENT = "development";
            let E = {
                ALL: new Set(["alpha", "beta", "canary", "development", "ptb", "stable", "staging"])
            }
        }
    }
]);
//# sourceMappingURL=46541.ab18cbeb54e90f2fb7b5.js.map