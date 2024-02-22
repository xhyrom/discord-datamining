(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["21251"], {
        20606: function(r, a, _) {
            "use strict";
            _.r(a), _.d(a, {
                default: function() {
                    return e
                }
            });
            var e = _("171210").default
        },
        956089: function(r, a, _) {
            "use strict";
            _.r(a), _.d(a, {
                BadgeShapes: function() {
                    return o
                },
                getBadgeWidthForValue: function() {
                    return T
                },
                getBadgeCountString: function() {
                    return O
                },
                NumberBadge: function() {
                    return N
                },
                TextBadge: function() {
                    return A
                },
                PremiumBadge: function() {
                    return d
                },
                IconBadge: function() {
                    return i
                },
                CircleBadge: function() {
                    return D
                }
            });
            var e = _("37983");
            _("884691");
            var E = _("414456"),
                t = _.n(E);
            _("77078");
            var R = _("20606");
            _("782340");
            var n = _("227940");
            let o = {
                ROUND: n.baseShapeRound,
                ROUND_LEFT: n.baseShapeRoundLeft,
                ROUND_RIGHT: n.baseShapeRoundRight,
                SQUARE: ""
            };

            function T(r) {
                return r < 10 ? 16 : r < 100 ? 22 : 30
            }

            function O(r) {
                return r < 1e3 ? "".concat(r) : "".concat(Math.min(Math.floor(r / 1e3), 9), "k+")
            }
            let N = r => {
                    let {
                        count: a,
                        color: _ = R.default.STATUS_DANGER,
                        disableColor: E = !1,
                        shape: N = o.ROUND,
                        className: A,
                        style: d,
                        ...i
                    } = r;
                    return (0, e.jsx)("div", {
                        className: t(A, n.numberBadge, N),
                        style: {
                            backgroundColor: E ? void 0 : _,
                            width: T(a),
                            paddingRight: function(r) {
                                switch (r) {
                                    case 1:
                                    case 4:
                                    case 6:
                                        return 1;
                                    default:
                                        return
                                }
                            }(a),
                            ...d
                        },
                        ...i,
                        children: O(a)
                    })
                },
                A = r => {
                    let {
                        text: a,
                        className: _,
                        color: E = R.default.STATUS_DANGER,
                        shape: T = o.ROUND,
                        disableColor: O = !1,
                        style: N,
                        ...A
                    } = r;
                    return (0, e.jsx)("div", {
                        className: t(_, n.textBadge, T),
                        style: {
                            backgroundColor: O ? void 0 : E,
                            ...N
                        },
                        ...A,
                        children: a
                    })
                },
                d = r => {
                    let {
                        text: a,
                        className: _,
                        ...E
                    } = r;
                    return (0, e.jsx)(A, {
                        className: t(n.premiumBadge, _),
                        text: a,
                        ...E
                    })
                },
                i = r => {
                    let {
                        icon: a,
                        className: _,
                        color: E = R.default.STATUS_DANGER,
                        shape: T = o.ROUND,
                        disableColor: O = !1,
                        style: N
                    } = r;
                    return (0, e.jsx)("div", {
                        className: t(_, n.iconBadge, T),
                        style: {
                            backgroundColor: O ? void 0 : E,
                            ...N
                        },
                        children: (0, e.jsx)(a, {
                            className: n.icon
                        })
                    })
                },
                D = r => {
                    let {
                        className: a,
                        color: _ = R.default.INTERACTIVE_ACTIVE,
                        shape: E = o.ROUND,
                        disableColor: T = !1,
                        style: O,
                        ...N
                    } = r;
                    return (0, e.jsx)("div", {
                        className: t(a, n.circleBadge, E),
                        style: {
                            backgroundColor: T ? void 0 : _,
                            ...O
                        },
                        ...N
                    })
                }
        },
        171210: function(r, a, _) {
            "use strict";
            _.r(a), _.d(a, {
                default: function() {
                    return t
                }
            }), (e = E || (E = {})).ACTION_SHEET_GRADIENT_BG = "var(--action-sheet-gradient-bg)", e.ACTIVITY_CARD_BACKGROUND = "var(--activity-card-background)", e.ACTIVITY_CARD_ICON_OVERLAY = "var(--activity-card-icon-overlay)", e.ALERT_BG = "var(--alert-bg)", e.ANDROID_NAVIGATION_BAR_BACKGROUND = "var(--android-navigation-bar-background)", e.ANDROID_NAVIGATION_SCRIM_BACKGROUND = "var(--android-navigation-scrim-background)", e.ANDROID_RIPPLE = "var(--android-ripple)", e.BACKGROUND_ACCENT = "var(--background-accent)", e.BACKGROUND_FLOATING = "var(--background-floating)", e.BACKGROUND_MENTIONED = "var(--background-mentioned)", e.BACKGROUND_MENTIONED_HOVER = "var(--background-mentioned-hover)", e.BACKGROUND_MESSAGE_AUTOMOD = "var(--background-message-automod)", e.BACKGROUND_MESSAGE_AUTOMOD_HOVER = "var(--background-message-automod-hover)", e.BACKGROUND_MESSAGE_HIGHLIGHT = "var(--background-message-highlight)", e.BACKGROUND_MESSAGE_HIGHLIGHT_HOVER = "var(--background-message-highlight-hover)", e.BACKGROUND_MESSAGE_HOVER = "var(--background-message-hover)", e.BACKGROUND_MOBILE_PRIMARY = "var(--background-mobile-primary)", e.BACKGROUND_MOBILE_SECONDARY = "var(--background-mobile-secondary)", e.BACKGROUND_MODIFIER_ACCENT = "var(--background-modifier-accent)", e.BACKGROUND_MODIFIER_ACCENT_2 = "var(--background-modifier-accent-2)", e.BACKGROUND_MODIFIER_ACTIVE = "var(--background-modifier-active)", e.BACKGROUND_MODIFIER_HOVER = "var(--background-modifier-hover)", e.BACKGROUND_MODIFIER_SELECTED = "var(--background-modifier-selected)", e.BACKGROUND_NESTED_FLOATING = "var(--background-nested-floating)", e.BACKGROUND_PRIMARY = "var(--background-primary)", e.BACKGROUND_SECONDARY = "var(--background-secondary)", e.BACKGROUND_SECONDARY_ALT = "var(--background-secondary-alt)", e.BACKGROUND_TERTIARY = "var(--background-tertiary)", e.BG_BACKDROP = "var(--bg-backdrop)", e.BG_BACKDROP_NO_OPACITY = "var(--bg-backdrop-no-opacity)", e.BG_BASE_PRIMARY = "var(--bg-base-primary)", e.BG_BASE_SECONDARY = "var(--bg-base-secondary)", e.BG_BASE_TERTIARY = "var(--bg-base-tertiary)", e.BG_BRAND = "var(--bg-brand)", e.BG_MOD_FAINT = "var(--bg-mod-faint)", e.BG_MOD_STRONG = "var(--bg-mod-strong)", e.BG_MOD_SUBTLE = "var(--bg-mod-subtle)", e.BG_SURFACE_OVERLAY = "var(--bg-surface-overlay)", e.BG_SURFACE_OVERLAY_TMP = "var(--bg-surface-overlay-tmp)", e.BG_SURFACE_RAISED = "var(--bg-surface-raised)", e.BLACK = "var(--black)", e.BLUR_FALLBACK = "var(--blur-fallback)", e.BLUR_FALLBACK_PRESSED = "var(--blur-fallback-pressed)", e.BORDER_FAINT = "var(--border-faint)", e.BORDER_STRONG = "var(--border-strong)", e.BORDER_SUBTLE = "var(--border-subtle)", e.BUG_REPORTER_MODAL_SUBMITTING_BACKGROUND = "var(--bug-reporter-modal-submitting-background)", e.BUTTON_CREATOR_REVENUE_BACKGROUND = "var(--button-creator-revenue-background)", e.BUTTON_DANGER_BACKGROUND = "var(--button-danger-background)", e.BUTTON_DANGER_BACKGROUND_ACTIVE = "var(--button-danger-background-active)", e.BUTTON_DANGER_BACKGROUND_DISABLED = "var(--button-danger-background-disabled)", e.BUTTON_DANGER_BACKGROUND_HOVER = "var(--button-danger-background-hover)", e.BUTTON_OUTLINE_BRAND_BACKGROUND = "var(--button-outline-brand-background)", e.BUTTON_OUTLINE_BRAND_BACKGROUND_ACTIVE = "var(--button-outline-brand-background-active)", e.BUTTON_OUTLINE_BRAND_BACKGROUND_HOVER = "var(--button-outline-brand-background-hover)", e.BUTTON_OUTLINE_BRAND_BORDER = "var(--button-outline-brand-border)", e.BUTTON_OUTLINE_BRAND_BORDER_ACTIVE = "var(--button-outline-brand-border-active)", e.BUTTON_OUTLINE_BRAND_BORDER_HOVER = "var(--button-outline-brand-border-hover)", e.BUTTON_OUTLINE_BRAND_TEXT = "var(--button-outline-brand-text)", e.BUTTON_OUTLINE_BRAND_TEXT_ACTIVE = "var(--button-outline-brand-text-active)", e.BUTTON_OUTLINE_BRAND_TEXT_HOVER = "var(--button-outline-brand-text-hover)", e.BUTTON_OUTLINE_DANGER_BACKGROUND = "var(--button-outline-danger-background)", e.BUTTON_OUTLINE_DANGER_BACKGROUND_ACTIVE = "var(--button-outline-danger-background-active)", e.BUTTON_OUTLINE_DANGER_BACKGROUND_HOVER = "var(--button-outline-danger-background-hover)", e.BUTTON_OUTLINE_DANGER_BORDER = "var(--button-outline-danger-border)", e.BUTTON_OUTLINE_DANGER_BORDER_ACTIVE = "var(--button-outline-danger-border-active)", e.BUTTON_OUTLINE_DANGER_BORDER_HOVER = "var(--button-outline-danger-border-hover)", e.BUTTON_OUTLINE_DANGER_TEXT = "var(--button-outline-danger-text)", e.BUTTON_OUTLINE_DANGER_TEXT_ACTIVE = "var(--button-outline-danger-text-active)", e.BUTTON_OUTLINE_DANGER_TEXT_HOVER = "var(--button-outline-danger-text-hover)", e.BUTTON_OUTLINE_POSITIVE_BACKGROUND = "var(--button-outline-positive-background)", e.BUTTON_OUTLINE_POSITIVE_BACKGROUND_ACTIVE = "var(--button-outline-positive-background-active)", e.BUTTON_OUTLINE_POSITIVE_BACKGROUND_HOVER = "var(--button-outline-positive-background-hover)", e.BUTTON_OUTLINE_POSITIVE_BORDER = "var(--button-outline-positive-border)", e.BUTTON_OUTLINE_POSITIVE_BORDER_ACTIVE = "var(--button-outline-positive-border-active)", e.BUTTON_OUTLINE_POSITIVE_BORDER_HOVER = "var(--button-outline-positive-border-hover)", e.BUTTON_OUTLINE_POSITIVE_TEXT = "var(--button-outline-positive-text)", e.BUTTON_OUTLINE_POSITIVE_TEXT_ACTIVE = "var(--button-outline-positive-text-active)", e.BUTTON_OUTLINE_POSITIVE_TEXT_HOVER = "var(--button-outline-positive-text-hover)", e.BUTTON_OUTLINE_PRIMARY_BACKGROUND = "var(--button-outline-primary-background)", e.BUTTON_OUTLINE_PRIMARY_BACKGROUND_ACTIVE = "var(--button-outline-primary-background-active)", e.BUTTON_OUTLINE_PRIMARY_BACKGROUND_HOVER = "var(--button-outline-primary-background-hover)", e.BUTTON_OUTLINE_PRIMARY_BORDER = "var(--button-outline-primary-border)", e.BUTTON_OUTLINE_PRIMARY_BORDER_ACTIVE = "var(--button-outline-primary-border-active)", e.BUTTON_OUTLINE_PRIMARY_BORDER_HOVER = "var(--button-outline-primary-border-hover)", e.BUTTON_OUTLINE_PRIMARY_TEXT = "var(--button-outline-primary-text)", e.BUTTON_OUTLINE_PRIMARY_TEXT_ACTIVE = "var(--button-outline-primary-text-active)", e.BUTTON_OUTLINE_PRIMARY_TEXT_HOVER = "var(--button-outline-primary-text-hover)", e.BUTTON_POSITIVE_BACKGROUND = "var(--button-positive-background)", e.BUTTON_POSITIVE_BACKGROUND_ACTIVE = "var(--button-positive-background-active)", e.BUTTON_POSITIVE_BACKGROUND_DISABLED = "var(--button-positive-background-disabled)", e.BUTTON_POSITIVE_BACKGROUND_HOVER = "var(--button-positive-background-hover)", e.BUTTON_SECONDARY_BACKGROUND = "var(--button-secondary-background)", e.BUTTON_SECONDARY_BACKGROUND_ACTIVE = "var(--button-secondary-background-active)", e.BUTTON_SECONDARY_BACKGROUND_DISABLED = "var(--button-secondary-background-disabled)", e.BUTTON_SECONDARY_BACKGROUND_HOVER = "var(--button-secondary-background-hover)", e.CARD_GRADIENT_BG = "var(--card-gradient-bg)", e.CARD_GRADIENT_PRESSED_BG = "var(--card-gradient-pressed-bg)", e.CARD_PRIMARY_BG = "var(--card-primary-bg)", e.CARD_PRIMARY_PRESSED_BG = "var(--card-primary-pressed-bg)", e.CARD_SECONDARY_BG = "var(--card-secondary-bg)", e.CARD_SECONDARY_PRESSED_BG = "var(--card-secondary-pressed-bg)", e.CHANNEL_ICON = "var(--channel-icon)", e.CHANNEL_TEXT_AREA_PLACEHOLDER = "var(--channel-text-area-placeholder)", e.CHANNELS_DEFAULT = "var(--channels-default)", e.CHANNELTEXTAREA_BACKGROUND = "var(--channeltextarea-background)", e.CHAT_BACKGROUND = "var(--chat-background)", e.CHAT_BANNER_BG = "var(--chat-banner-bg)", e.CHAT_BORDER = "var(--chat-border)", e.CHAT_INPUT_CONTAINER_BACKGROUND = "var(--chat-input-container-background)", e.CHAT_SWIPE_TO_REPLY_BACKGROUND = "var(--chat-swipe-to-reply-background)", e.CHAT_SWIPE_TO_REPLY_GRADIENT_BACKGROUND = "var(--chat-swipe-to-reply-gradient-background)", e.CONTEXT_MENU_BACKDROP_BACKGROUND = "var(--context-menu-backdrop-background)", e.CONTROL_BRAND_FOREGROUND = "var(--control-brand-foreground)", e.CONTROL_BRAND_FOREGROUND_NEW = "var(--control-brand-foreground-new)", e.CREATOR_REVENUE_ICON_GRADIENT_END = "var(--creator-revenue-icon-gradient-end)", e.CREATOR_REVENUE_ICON_GRADIENT_START = "var(--creator-revenue-icon-gradient-start)", e.CREATOR_REVENUE_INFO_BOX_BACKGROUND = "var(--creator-revenue-info-box-background)", e.CREATOR_REVENUE_INFO_BOX_BORDER = "var(--creator-revenue-info-box-border)", e.CREATOR_REVENUE_LOCKED_CHANNEL_ICON = "var(--creator-revenue-locked-channel-icon)", e.CREATOR_REVENUE_PROGRESS_BAR = "var(--creator-revenue-progress-bar)", e.DEPRECATED_CARD_BG = "var(--deprecated-card-bg)", e.DEPRECATED_CARD_EDITABLE_BG = "var(--deprecated-card-editable-bg)", e.DEPRECATED_QUICKSWITCHER_INPUT_BACKGROUND = "var(--deprecated-quickswitcher-input-background)", e.DEPRECATED_QUICKSWITCHER_INPUT_PLACEHOLDER = "var(--deprecated-quickswitcher-input-placeholder)", e.DEPRECATED_STORE_BG = "var(--deprecated-store-bg)", e.DEPRECATED_TEXT_INPUT_BG = "var(--deprecated-text-input-bg)", e.DEPRECATED_TEXT_INPUT_BORDER = "var(--deprecated-text-input-border)", e.DEPRECATED_TEXT_INPUT_BORDER_DISABLED = "var(--deprecated-text-input-border-disabled)", e.DEPRECATED_TEXT_INPUT_BORDER_HOVER = "var(--deprecated-text-input-border-hover)", e.DEPRECATED_TEXT_INPUT_PREFIX = "var(--deprecated-text-input-prefix)", e.DISPLAY_BANNER_OVERFLOW_BACKGROUND = "var(--display-banner-overflow-background)", e.DIVIDER_STRONG = "var(--divider-strong)", e.DIVIDER_SUBTLE = "var(--divider-subtle)", e.EMBED_BACKGROUND = "var(--embed-background)", e.EMBED_BACKGROUND_ALTERNATE = "var(--embed-background-alternate)", e.EMBED_TITLE = "var(--embed-title)", e.EXPRESSION_PICKER_BG = "var(--expression-picker-bg)", e.FOCUS_PRIMARY = "var(--focus-primary)", e.FORUM_POST_EXTRA_MEDIA_COUNT_CONTAINER_BACKGROUND = "var(--forum-post-extra-media-count-container-background)", e.FORUM_POST_TAG_BACKGROUND = "var(--forum-post-tag-background)", e.GUILD_ICON_INACTIVE_BG = "var(--guild-icon-inactive-bg)", e.GUILD_ICON_INACTIVE_NESTED_BG = "var(--guild-icon-inactive-nested-bg)", e.GUILD_NOTIFICATIONS_BOTTOM_SHEET_PILL_BACKGROUND = "var(--guild-notifications-bottom-sheet-pill-background)", e.HALO_POSITIVE = "var(--halo-positive)", e.HEADER_MUTED = "var(--header-muted)", e.HEADER_PRIMARY = "var(--header-primary)", e.HEADER_SECONDARY = "var(--header-secondary)", e.HOME_BACKGROUND = "var(--home-background)", e.HOME_CARD_RESTING_BORDER = "var(--home-card-resting-border)", e.ICON_MUTED = "var(--icon-muted)", e.ICON_PRIMARY = "var(--icon-primary)", e.ICON_SECONDARY = "var(--icon-secondary)", e.ICON_TRANSPARENT = "var(--icon-transparent)", e.INFO_BOX_BACKGROUND = "var(--info-box-background)", e.INFO_DANGER_BACKGROUND = "var(--info-danger-background)", e.INFO_DANGER_FOREGROUND = "var(--info-danger-foreground)", e.INFO_DANGER_TEXT = "var(--info-danger-text)", e.INFO_HELP_BACKGROUND = "var(--info-help-background)", e.INFO_HELP_FOREGROUND = "var(--info-help-foreground)", e.INFO_HELP_TEXT = "var(--info-help-text)", e.INFO_POSITIVE_BACKGROUND = "var(--info-positive-background)", e.INFO_POSITIVE_FOREGROUND = "var(--info-positive-foreground)", e.INFO_POSITIVE_TEXT = "var(--info-positive-text)", e.INFO_WARNING_BACKGROUND = "var(--info-warning-background)", e.INFO_WARNING_FOREGROUND = "var(--info-warning-foreground)", e.INFO_WARNING_TEXT = "var(--info-warning-text)", e.INPUT_BACKGROUND = "var(--input-background)", e.INPUT_FOCUSED_BORDER = "var(--input-focused-border)", e.INPUT_PLACEHOLDER_TEXT = "var(--input-placeholder-text)", e.INTERACTIVE_ACTIVE = "var(--interactive-active)", e.INTERACTIVE_HOVER = "var(--interactive-hover)", e.INTERACTIVE_MUTED = "var(--interactive-muted)", e.INTERACTIVE_NORMAL = "var(--interactive-normal)", e.LEGACY_ANDROID_BLUR_OVERLAY_DEFAULT = "var(--legacy-android-blur-overlay-default)", e.LEGACY_ANDROID_BLUR_OVERLAY_ULTRA_THIN = "var(--legacy-android-blur-overlay-ultra-thin)", e.LEGACY_BLUR_FALLBACK_DEFAULT = "var(--legacy-blur-fallback-default)", e.LEGACY_BLUR_FALLBACK_ULTRA_THIN = "var(--legacy-blur-fallback-ultra-thin)", e.LIVE_STAGE_TILE_BORDER = "var(--live-stage-tile-border)", e.LOGO_PRIMARY = "var(--logo-primary)", e.MENTION_BACKGROUND = "var(--mention-background)", e.MENTION_FOREGROUND = "var(--mention-foreground)", e.MODAL_BACKGROUND = "var(--modal-background)", e.MODAL_FOOTER_BACKGROUND = "var(--modal-footer-background)", e.NAVIGATOR_HEADER_TINT = "var(--navigator-header-tint)", e.PANEL_BG = "var(--panel-bg)", e.POLLS_EMBED_BACKGROUND = "var(--polls-embed-background)", e.POLLS_EMBED_BORDER = "var(--polls-embed-border)", e.POLLS_IMAGE_NORMAL_BORDER = "var(--polls-image-normal-border)", e.POLLS_NORMAL_BORDER = "var(--polls-normal-border)", e.POLLS_NORMAL_CONFETTI = "var(--polls-normal-confetti)", e.POLLS_NORMAL_FILL = "var(--polls-normal-fill)", e.POLLS_NORMAL_FILL_HOVER = "var(--polls-normal-fill-hover)", e.POLLS_NORMAL_IMAGE_BACKGROUND = "var(--polls-normal-image-background)", e.POLLS_NORMAL_LABEL = "var(--polls-normal-label)", e.POLLS_RESULT_FILL = "var(--polls-result-fill)", e.POLLS_VICTOR_BORDER = "var(--polls-victor-border)", e.POLLS_VICTOR_FILL = "var(--polls-victor-fill)", e.POLLS_VICTOR_LABEL = "var(--polls-victor-label)", e.POLLS_VOTED_BORDER = "var(--polls-voted-border)", e.POLLS_VOTED_FILL = "var(--polls-voted-fill)", e.POLLS_VOTED_LABEL = "var(--polls-voted-label)", e.PROFILE_GRADIENT_CARD_BACKGROUND = "var(--profile-gradient-card-background)", e.PROFILE_GRADIENT_MESSAGE_INPUT_BORDER = "var(--profile-gradient-message-input-border)", e.PROFILE_GRADIENT_NOTE_BACKGROUND = "var(--profile-gradient-note-background)", e.PROFILE_GRADIENT_OVERLAY = "var(--profile-gradient-overlay)", e.PROFILE_GRADIENT_OVERLAY_SYNCED_WITH_USER_THEME = "var(--profile-gradient-overlay-synced-with-user-theme)", e.PROFILE_GRADIENT_PROFILE_BODY_BACKGROUND_HOVER = "var(--profile-gradient-profile-body-background-hover)", e.PROFILE_GRADIENT_ROLE_PILL_BACKGROUND = "var(--profile-gradient-role-pill-background)", e.PROFILE_GRADIENT_ROLE_PILL_BORDER = "var(--profile-gradient-role-pill-border)", e.PROFILE_GRADIENT_SECTION_BOX = "var(--profile-gradient-section-box)", e.REDESIGN_ACTIVITY_CARD_BACKGROUND = "var(--redesign-activity-card-background)", e.REDESIGN_ACTIVITY_CARD_BACKGROUND_PRESSED = "var(--redesign-activity-card-background-pressed)", e.REDESIGN_ACTIVITY_CARD_BADGE_ICON = "var(--redesign-activity-card-badge-icon)", e.REDESIGN_ACTIVITY_CARD_BORDER = "var(--redesign-activity-card-border)", e.REDESIGN_ACTIVITY_CARD_OVERFLOW_BACKGROUND = "var(--redesign-activity-card-overflow-background)", e.REDESIGN_BUTTON_DANGER_BACKGROUND = "var(--redesign-button-danger-background)", e.REDESIGN_BUTTON_DANGER_PRESSED_BACKGROUND = "var(--redesign-button-danger-pressed-background)", e.REDESIGN_BUTTON_DANGER_TEXT = "var(--redesign-button-danger-text)", e.REDESIGN_BUTTON_OVERLAY_ALPHA_BACKGROUND = "var(--redesign-button-overlay-alpha-background)", e.REDESIGN_BUTTON_OVERLAY_ALPHA_PRESSED_BACKGROUND = "var(--redesign-button-overlay-alpha-pressed-background)", e.REDESIGN_BUTTON_OVERLAY_ALPHA_TEXT = "var(--redesign-button-overlay-alpha-text)", e.REDESIGN_BUTTON_OVERLAY_BACKGROUND = "var(--redesign-button-overlay-background)", e.REDESIGN_BUTTON_OVERLAY_PRESSED_BACKGROUND = "var(--redesign-button-overlay-pressed-background)", e.REDESIGN_BUTTON_OVERLAY_TEXT = "var(--redesign-button-overlay-text)", e.REDESIGN_BUTTON_POSITIVE_BACKGROUND = "var(--redesign-button-positive-background)", e.REDESIGN_BUTTON_POSITIVE_PRESSED_BACKGROUND = "var(--redesign-button-positive-pressed-background)", e.REDESIGN_BUTTON_POSITIVE_TEXT = "var(--redesign-button-positive-text)", e.REDESIGN_BUTTON_PRIMARY_ALT_BACKGROUND = "var(--redesign-button-primary-alt-background)", e.REDESIGN_BUTTON_PRIMARY_ALT_BORDER = "var(--redesign-button-primary-alt-border)", e.REDESIGN_BUTTON_PRIMARY_ALT_ON_BLURPLE_BACKGROUND = "var(--redesign-button-primary-alt-on-blurple-background)", e.REDESIGN_BUTTON_PRIMARY_ALT_ON_BLURPLE_BORDER = "var(--redesign-button-primary-alt-on-blurple-border)", e.REDESIGN_BUTTON_PRIMARY_ALT_ON_BLURPLE_PRESSED_BACKGROUND = "var(--redesign-button-primary-alt-on-blurple-pressed-background)", e.REDESIGN_BUTTON_PRIMARY_ALT_ON_BLURPLE_PRESSED_BORDER = "var(--redesign-button-primary-alt-on-blurple-pressed-border)", e.REDESIGN_BUTTON_PRIMARY_ALT_ON_BLURPLE_TEXT = "var(--redesign-button-primary-alt-on-blurple-text)", e.REDESIGN_BUTTON_PRIMARY_ALT_PRESSED_BACKGROUND = "var(--redesign-button-primary-alt-pressed-background)", e.REDESIGN_BUTTON_PRIMARY_ALT_PRESSED_BORDER = "var(--redesign-button-primary-alt-pressed-border)", e.REDESIGN_BUTTON_PRIMARY_ALT_PRESSED_TEXT = "var(--redesign-button-primary-alt-pressed-text)", e.REDESIGN_BUTTON_PRIMARY_ALT_TEXT = "var(--redesign-button-primary-alt-text)", e.REDESIGN_BUTTON_PRIMARY_BACKGROUND = "var(--redesign-button-primary-background)", e.REDESIGN_BUTTON_PRIMARY_ON_BLURPLE_BACKGROUND = "var(--redesign-button-primary-on-blurple-background)", e.REDESIGN_BUTTON_PRIMARY_ON_BLURPLE_PRESSED_BACKGROUND = "var(--redesign-button-primary-on-blurple-pressed-background)", e.REDESIGN_BUTTON_PRIMARY_ON_BLURPLE_PRESSED_TEXT = "var(--redesign-button-primary-on-blurple-pressed-text)", e.REDESIGN_BUTTON_PRIMARY_ON_BLURPLE_TEXT = "var(--redesign-button-primary-on-blurple-text)", e.REDESIGN_BUTTON_PRIMARY_PRESSED_BACKGROUND = "var(--redesign-button-primary-pressed-background)", e.REDESIGN_BUTTON_PRIMARY_TEXT = "var(--redesign-button-primary-text)", e.REDESIGN_BUTTON_SECONDARY_ALT_BACKGROUND = "var(--redesign-button-secondary-alt-background)", e.REDESIGN_BUTTON_SECONDARY_ALT_PRESSED_BACKGROUND = "var(--redesign-button-secondary-alt-pressed-background)", e.REDESIGN_BUTTON_SECONDARY_ALT_PRESSED_TEXT = "var(--redesign-button-secondary-alt-pressed-text)", e.REDESIGN_BUTTON_SECONDARY_ALT_TEXT = "var(--redesign-button-secondary-alt-text)", e.REDESIGN_BUTTON_SECONDARY_BACKGROUND = "var(--redesign-button-secondary-background)", e.REDESIGN_BUTTON_SECONDARY_BORDER = "var(--redesign-button-secondary-border)", e.REDESIGN_BUTTON_SECONDARY_PRESSED_BACKGROUND = "var(--redesign-button-secondary-pressed-background)", e.REDESIGN_BUTTON_SECONDARY_PRESSED_BORDER = "var(--redesign-button-secondary-pressed-border)", e.REDESIGN_BUTTON_SECONDARY_TEXT = "var(--redesign-button-secondary-text)", e.REDESIGN_BUTTON_SELECTED_BACKGROUND = "var(--redesign-button-selected-background)", e.REDESIGN_BUTTON_SELECTED_PRESSED_BACKGROUND = "var(--redesign-button-selected-pressed-background)", e.REDESIGN_BUTTON_SELECTED_TEXT = "var(--redesign-button-selected-text)", e.REDESIGN_CHANNEL_CATEGORY_NAME_TEXT = "var(--redesign-channel-category-name-text)", e.REDESIGN_CHANNEL_MESSAGE_PREVIEW_TEXT = "var(--redesign-channel-message-preview-text)", e.REDESIGN_CHANNEL_NAME_MUTED_TEXT = "var(--redesign-channel-name-muted-text)", e.REDESIGN_CHANNEL_NAME_TEXT = "var(--redesign-channel-name-text)", e.REDESIGN_CHAT_INPUT_BACKGROUND = "var(--redesign-chat-input-background)", e.REDESIGN_INPUT_CONTROL_ACTIVE_BG = "var(--redesign-input-control-active-bg)", e.REDESIGN_INPUT_CONTROL_SELECTED = "var(--redesign-input-control-selected)", e.REDESIGN_ONLY_BACKGROUND_ACTIVE = "var(--redesign-only-background-active)", e.REDESIGN_ONLY_BACKGROUND_DEFAULT = "var(--redesign-only-background-default)", e.REDESIGN_ONLY_BACKGROUND_OVERLAY = "var(--redesign-only-background-overlay)", e.REDESIGN_ONLY_BACKGROUND_RAISED = "var(--redesign-only-background-raised)", e.REDESIGN_ONLY_BACKGROUND_SUNKEN = "var(--redesign-only-background-sunken)", e.SCROLLBAR_AUTO_SCROLLBAR_COLOR_THUMB = "var(--scrollbar-auto-scrollbar-color-thumb)", e.SCROLLBAR_AUTO_SCROLLBAR_COLOR_TRACK = "var(--scrollbar-auto-scrollbar-color-track)", e.SCROLLBAR_AUTO_THUMB = "var(--scrollbar-auto-thumb)", e.SCROLLBAR_AUTO_TRACK = "var(--scrollbar-auto-track)", e.SCROLLBAR_THIN_THUMB = "var(--scrollbar-thin-thumb)", e.SCROLLBAR_THIN_TRACK = "var(--scrollbar-thin-track)", e.SPOILER_HIDDEN_BACKGROUND = "var(--spoiler-hidden-background)", e.SPOILER_REVEALED_BACKGROUND = "var(--spoiler-revealed-background)", e.STATUS_DANGER = "var(--status-danger)", e.STATUS_DANGER_BACKGROUND = "var(--status-danger-background)", e.STATUS_DANGER_TEXT = "var(--status-danger-text)", e.STATUS_DND = "var(--status-dnd)", e.STATUS_IDLE = "var(--status-idle)", e.STATUS_OFFLINE = "var(--status-offline)", e.STATUS_ONLINE = "var(--status-online)", e.STATUS_POSITIVE = "var(--status-positive)", e.STATUS_POSITIVE_BACKGROUND = "var(--status-positive-background)", e.STATUS_POSITIVE_TEXT = "var(--status-positive-text)", e.STATUS_SPEAKING = "var(--status-speaking)", e.STATUS_WARNING = "var(--status-warning)", e.STATUS_WARNING_BACKGROUND = "var(--status-warning-background)", e.STATUS_WARNING_TEXT = "var(--status-warning-text)", e.TEXT_BRAND = "var(--text-brand)", e.TEXT_DANGER = "var(--text-danger)", e.TEXT_LINK = "var(--text-link)", e.TEXT_LINK_LOW_SATURATION = "var(--text-link-low-saturation)", e.TEXT_LOW_CONTRAST = "var(--text-low-contrast)", e.TEXT_MESSAGE_PREVIEW_LOW_SAT = "var(--text-message-preview-low-sat)", e.TEXT_MUTED = "var(--text-muted)", e.TEXT_MUTED_ON_DEFAULT = "var(--text-muted-on-default)", e.TEXT_NORMAL = "var(--text-normal)", e.TEXT_POSITIVE = "var(--text-positive)", e.TEXT_PRIMARY = "var(--text-primary)", e.TEXT_SECONDARY = "var(--text-secondary)", e.TEXT_WARNING = "var(--text-warning)", e.TEXTBOX_MARKDOWN_SYNTAX = "var(--textbox-markdown-syntax)", e.THEME_LOCKED_BLUR_FALLBACK = "var(--theme-locked-blur-fallback)", e.TOAST_BG = "var(--toast-bg)", e.TYPING_INDICATOR_BG = "var(--typing-indicator-bg)", e.USER_PROFILE_HEADER_OVERFLOW_BACKGROUND = "var(--user-profile-header-overflow-background)", e.VOICE_VIDEO_VIDEO_TILE_BACKGROUND = "var(--voice-video-video-tile-background)", e.VOICE_VIDEO_VIDEO_TILE_BLUR_FALLBACK = "var(--voice-video-video-tile-blur-fallback)", e.WHITE = "var(--white)";
            var e, E, t = E
        }
    }
]);
//# sourceMappingURL=21251.3412b316a28e566b4fce.js.map