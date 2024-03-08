(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["21251"], {
        20606: function(r, a, e) {
            "use strict";
            e.r(a), e.d(a, {
                default: function() {
                    return _
                }
            });
            var _ = e("171210").default
        },
        956089: function(r, a, e) {
            "use strict";
            e.r(a), e.d(a, {
                BadgeShapes: function() {
                    return n
                },
                getBadgeWidthForValue: function() {
                    return o
                },
                getBadgeCountString: function() {
                    return N
                },
                NumberBadge: function() {
                    return O
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
            var _ = e("37983");
            e("884691");
            var E = e("414456"),
                t = e.n(E);
            e("77078");
            var R = e("20606");
            e("782340");
            var T = e("227940");
            let n = {
                ROUND: T.baseShapeRound,
                ROUND_LEFT: T.baseShapeRoundLeft,
                ROUND_RIGHT: T.baseShapeRoundRight,
                SQUARE: ""
            };

            function o(r) {
                return r < 10 ? 16 : r < 100 ? 22 : 30
            }

            function N(r) {
                return r < 1e3 ? "".concat(r) : "".concat(Math.min(Math.floor(r / 1e3), 9), "k+")
            }
            let O = r => {
                    let {
                        count: a,
                        color: e = R.default.STATUS_DANGER,
                        disableColor: E = !1,
                        shape: O = n.ROUND,
                        className: A,
                        style: d,
                        ...i
                    } = r;
                    return (0, _.jsx)("div", {
                        className: t(A, T.numberBadge, O),
                        style: {
                            backgroundColor: E ? void 0 : e,
                            width: o(a),
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
                        children: N(a)
                    })
                },
                A = r => {
                    let {
                        text: a,
                        className: e,
                        color: E = R.default.STATUS_DANGER,
                        shape: o = n.ROUND,
                        disableColor: N = !1,
                        style: O,
                        ...A
                    } = r;
                    return (0, _.jsx)("div", {
                        className: t(e, T.textBadge, o),
                        style: {
                            backgroundColor: N ? void 0 : E,
                            ...O
                        },
                        ...A,
                        children: a
                    })
                },
                d = r => {
                    let {
                        text: a,
                        className: e,
                        ...E
                    } = r;
                    return (0, _.jsx)(A, {
                        className: t(T.premiumBadge, e),
                        text: a,
                        ...E
                    })
                },
                i = r => {
                    let {
                        icon: a,
                        className: e,
                        color: E = R.default.STATUS_DANGER,
                        shape: o = n.ROUND,
                        disableColor: N = !1,
                        style: O
                    } = r;
                    return (0, _.jsx)("div", {
                        className: t(e, T.iconBadge, o),
                        style: {
                            backgroundColor: N ? void 0 : E,
                            ...O
                        },
                        children: (0, _.jsx)(a, {
                            className: T.icon
                        })
                    })
                },
                D = r => {
                    let {
                        className: a,
                        color: e = R.default.INTERACTIVE_ACTIVE,
                        shape: E = n.ROUND,
                        disableColor: o = !1,
                        style: N,
                        ...O
                    } = r;
                    return (0, _.jsx)("div", {
                        className: t(a, T.circleBadge, E),
                        style: {
                            backgroundColor: o ? void 0 : e,
                            ...N
                        },
                        ...O
                    })
                }
        },
        171210: function(r, a, e) {
            "use strict";
            e.r(a), e.d(a, {
                default: function() {
                    return t
                }
            }), (_ = E || (E = {})).ACTION_SHEET_GRADIENT_BG = "var(--action-sheet-gradient-bg)", _.ACTIVITY_CARD_BACKGROUND = "var(--activity-card-background)", _.ACTIVITY_CARD_ICON_OVERLAY = "var(--activity-card-icon-overlay)", _.ALERT_BG = "var(--alert-bg)", _.ANDROID_NAVIGATION_BAR_BACKGROUND = "var(--android-navigation-bar-background)", _.ANDROID_NAVIGATION_SCRIM_BACKGROUND = "var(--android-navigation-scrim-background)", _.ANDROID_RIPPLE = "var(--android-ripple)", _.BACKGROUND_ACCENT = "var(--background-accent)", _.BACKGROUND_FLOATING = "var(--background-floating)", _.BACKGROUND_MENTIONED = "var(--background-mentioned)", _.BACKGROUND_MENTIONED_HOVER = "var(--background-mentioned-hover)", _.BACKGROUND_MESSAGE_AUTOMOD = "var(--background-message-automod)", _.BACKGROUND_MESSAGE_AUTOMOD_HOVER = "var(--background-message-automod-hover)", _.BACKGROUND_MESSAGE_HIGHLIGHT = "var(--background-message-highlight)", _.BACKGROUND_MESSAGE_HIGHLIGHT_HOVER = "var(--background-message-highlight-hover)", _.BACKGROUND_MESSAGE_HOVER = "var(--background-message-hover)", _.BACKGROUND_MOBILE_PRIMARY = "var(--background-mobile-primary)", _.BACKGROUND_MOBILE_SECONDARY = "var(--background-mobile-secondary)", _.BACKGROUND_MODIFIER_ACCENT = "var(--background-modifier-accent)", _.BACKGROUND_MODIFIER_ACCENT_2 = "var(--background-modifier-accent-2)", _.BACKGROUND_MODIFIER_ACTIVE = "var(--background-modifier-active)", _.BACKGROUND_MODIFIER_HOVER = "var(--background-modifier-hover)", _.BACKGROUND_MODIFIER_SELECTED = "var(--background-modifier-selected)", _.BACKGROUND_NESTED_FLOATING = "var(--background-nested-floating)", _.BACKGROUND_PRIMARY = "var(--background-primary)", _.BACKGROUND_SECONDARY = "var(--background-secondary)", _.BACKGROUND_SECONDARY_ALT = "var(--background-secondary-alt)", _.BACKGROUND_TERTIARY = "var(--background-tertiary)", _.BG_BACKDROP = "var(--bg-backdrop)", _.BG_BACKDROP_NO_OPACITY = "var(--bg-backdrop-no-opacity)", _.BG_BASE_PRIMARY = "var(--bg-base-primary)", _.BG_BASE_SECONDARY = "var(--bg-base-secondary)", _.BG_BASE_TERTIARY = "var(--bg-base-tertiary)", _.BG_BRAND = "var(--bg-brand)", _.BG_MOD_FAINT = "var(--bg-mod-faint)", _.BG_MOD_STRONG = "var(--bg-mod-strong)", _.BG_MOD_SUBTLE = "var(--bg-mod-subtle)", _.BG_SURFACE_OVERLAY = "var(--bg-surface-overlay)", _.BG_SURFACE_OVERLAY_TMP = "var(--bg-surface-overlay-tmp)", _.BG_SURFACE_RAISED = "var(--bg-surface-raised)", _.BLACK = "var(--black)", _.BLUR_FALLBACK = "var(--blur-fallback)", _.BLUR_FALLBACK_PRESSED = "var(--blur-fallback-pressed)", _.BORDER_FAINT = "var(--border-faint)", _.BORDER_STRONG = "var(--border-strong)", _.BORDER_SUBTLE = "var(--border-subtle)", _.BUG_REPORTER_MODAL_SUBMITTING_BACKGROUND = "var(--bug-reporter-modal-submitting-background)", _.BUTTON_CREATOR_REVENUE_BACKGROUND = "var(--button-creator-revenue-background)", _.BUTTON_DANGER_BACKGROUND = "var(--button-danger-background)", _.BUTTON_DANGER_BACKGROUND_ACTIVE = "var(--button-danger-background-active)", _.BUTTON_DANGER_BACKGROUND_DISABLED = "var(--button-danger-background-disabled)", _.BUTTON_DANGER_BACKGROUND_HOVER = "var(--button-danger-background-hover)", _.BUTTON_OUTLINE_BRAND_BACKGROUND = "var(--button-outline-brand-background)", _.BUTTON_OUTLINE_BRAND_BACKGROUND_ACTIVE = "var(--button-outline-brand-background-active)", _.BUTTON_OUTLINE_BRAND_BACKGROUND_HOVER = "var(--button-outline-brand-background-hover)", _.BUTTON_OUTLINE_BRAND_BORDER = "var(--button-outline-brand-border)", _.BUTTON_OUTLINE_BRAND_BORDER_ACTIVE = "var(--button-outline-brand-border-active)", _.BUTTON_OUTLINE_BRAND_BORDER_HOVER = "var(--button-outline-brand-border-hover)", _.BUTTON_OUTLINE_BRAND_TEXT = "var(--button-outline-brand-text)", _.BUTTON_OUTLINE_BRAND_TEXT_ACTIVE = "var(--button-outline-brand-text-active)", _.BUTTON_OUTLINE_BRAND_TEXT_HOVER = "var(--button-outline-brand-text-hover)", _.BUTTON_OUTLINE_DANGER_BACKGROUND = "var(--button-outline-danger-background)", _.BUTTON_OUTLINE_DANGER_BACKGROUND_ACTIVE = "var(--button-outline-danger-background-active)", _.BUTTON_OUTLINE_DANGER_BACKGROUND_HOVER = "var(--button-outline-danger-background-hover)", _.BUTTON_OUTLINE_DANGER_BORDER = "var(--button-outline-danger-border)", _.BUTTON_OUTLINE_DANGER_BORDER_ACTIVE = "var(--button-outline-danger-border-active)", _.BUTTON_OUTLINE_DANGER_BORDER_HOVER = "var(--button-outline-danger-border-hover)", _.BUTTON_OUTLINE_DANGER_TEXT = "var(--button-outline-danger-text)", _.BUTTON_OUTLINE_DANGER_TEXT_ACTIVE = "var(--button-outline-danger-text-active)", _.BUTTON_OUTLINE_DANGER_TEXT_HOVER = "var(--button-outline-danger-text-hover)", _.BUTTON_OUTLINE_POSITIVE_BACKGROUND = "var(--button-outline-positive-background)", _.BUTTON_OUTLINE_POSITIVE_BACKGROUND_ACTIVE = "var(--button-outline-positive-background-active)", _.BUTTON_OUTLINE_POSITIVE_BACKGROUND_HOVER = "var(--button-outline-positive-background-hover)", _.BUTTON_OUTLINE_POSITIVE_BORDER = "var(--button-outline-positive-border)", _.BUTTON_OUTLINE_POSITIVE_BORDER_ACTIVE = "var(--button-outline-positive-border-active)", _.BUTTON_OUTLINE_POSITIVE_BORDER_HOVER = "var(--button-outline-positive-border-hover)", _.BUTTON_OUTLINE_POSITIVE_TEXT = "var(--button-outline-positive-text)", _.BUTTON_OUTLINE_POSITIVE_TEXT_ACTIVE = "var(--button-outline-positive-text-active)", _.BUTTON_OUTLINE_POSITIVE_TEXT_HOVER = "var(--button-outline-positive-text-hover)", _.BUTTON_OUTLINE_PRIMARY_BACKGROUND = "var(--button-outline-primary-background)", _.BUTTON_OUTLINE_PRIMARY_BACKGROUND_ACTIVE = "var(--button-outline-primary-background-active)", _.BUTTON_OUTLINE_PRIMARY_BACKGROUND_HOVER = "var(--button-outline-primary-background-hover)", _.BUTTON_OUTLINE_PRIMARY_BORDER = "var(--button-outline-primary-border)", _.BUTTON_OUTLINE_PRIMARY_BORDER_ACTIVE = "var(--button-outline-primary-border-active)", _.BUTTON_OUTLINE_PRIMARY_BORDER_HOVER = "var(--button-outline-primary-border-hover)", _.BUTTON_OUTLINE_PRIMARY_TEXT = "var(--button-outline-primary-text)", _.BUTTON_OUTLINE_PRIMARY_TEXT_ACTIVE = "var(--button-outline-primary-text-active)", _.BUTTON_OUTLINE_PRIMARY_TEXT_HOVER = "var(--button-outline-primary-text-hover)", _.BUTTON_POSITIVE_BACKGROUND = "var(--button-positive-background)", _.BUTTON_POSITIVE_BACKGROUND_ACTIVE = "var(--button-positive-background-active)", _.BUTTON_POSITIVE_BACKGROUND_DISABLED = "var(--button-positive-background-disabled)", _.BUTTON_POSITIVE_BACKGROUND_HOVER = "var(--button-positive-background-hover)", _.BUTTON_SECONDARY_BACKGROUND = "var(--button-secondary-background)", _.BUTTON_SECONDARY_BACKGROUND_ACTIVE = "var(--button-secondary-background-active)", _.BUTTON_SECONDARY_BACKGROUND_DISABLED = "var(--button-secondary-background-disabled)", _.BUTTON_SECONDARY_BACKGROUND_HOVER = "var(--button-secondary-background-hover)", _.CARD_GRADIENT_BG = "var(--card-gradient-bg)", _.CARD_GRADIENT_PRESSED_BG = "var(--card-gradient-pressed-bg)", _.CARD_PRIMARY_BG = "var(--card-primary-bg)", _.CARD_PRIMARY_PRESSED_BG = "var(--card-primary-pressed-bg)", _.CARD_SECONDARY_BG = "var(--card-secondary-bg)", _.CARD_SECONDARY_PRESSED_BG = "var(--card-secondary-pressed-bg)", _.CHANNEL_ICON = "var(--channel-icon)", _.CHANNEL_TEXT_AREA_PLACEHOLDER = "var(--channel-text-area-placeholder)", _.CHANNELS_DEFAULT = "var(--channels-default)", _.CHANNELTEXTAREA_BACKGROUND = "var(--channeltextarea-background)", _.CHAT_BACKGROUND = "var(--chat-background)", _.CHAT_BANNER_BG = "var(--chat-banner-bg)", _.CHAT_BORDER = "var(--chat-border)", _.CHAT_INPUT_CONTAINER_BACKGROUND = "var(--chat-input-container-background)", _.CHAT_SWIPE_TO_REPLY_BACKGROUND = "var(--chat-swipe-to-reply-background)", _.CHAT_SWIPE_TO_REPLY_GRADIENT_BACKGROUND = "var(--chat-swipe-to-reply-gradient-background)", _.CONTEXT_MENU_BACKDROP_BACKGROUND = "var(--context-menu-backdrop-background)", _.CONTROL_BRAND_FOREGROUND = "var(--control-brand-foreground)", _.CONTROL_BRAND_FOREGROUND_NEW = "var(--control-brand-foreground-new)", _.CREATOR_REVENUE_ICON_GRADIENT_END = "var(--creator-revenue-icon-gradient-end)", _.CREATOR_REVENUE_ICON_GRADIENT_START = "var(--creator-revenue-icon-gradient-start)", _.CREATOR_REVENUE_INFO_BOX_BACKGROUND = "var(--creator-revenue-info-box-background)", _.CREATOR_REVENUE_INFO_BOX_BORDER = "var(--creator-revenue-info-box-border)", _.CREATOR_REVENUE_LOCKED_CHANNEL_ICON = "var(--creator-revenue-locked-channel-icon)", _.CREATOR_REVENUE_PROGRESS_BAR = "var(--creator-revenue-progress-bar)", _.DEPRECATED_CARD_BG = "var(--deprecated-card-bg)", _.DEPRECATED_CARD_EDITABLE_BG = "var(--deprecated-card-editable-bg)", _.DEPRECATED_QUICKSWITCHER_INPUT_BACKGROUND = "var(--deprecated-quickswitcher-input-background)", _.DEPRECATED_QUICKSWITCHER_INPUT_PLACEHOLDER = "var(--deprecated-quickswitcher-input-placeholder)", _.DEPRECATED_STORE_BG = "var(--deprecated-store-bg)", _.DEPRECATED_TEXT_INPUT_BG = "var(--deprecated-text-input-bg)", _.DEPRECATED_TEXT_INPUT_BORDER = "var(--deprecated-text-input-border)", _.DEPRECATED_TEXT_INPUT_BORDER_DISABLED = "var(--deprecated-text-input-border-disabled)", _.DEPRECATED_TEXT_INPUT_BORDER_HOVER = "var(--deprecated-text-input-border-hover)", _.DEPRECATED_TEXT_INPUT_PREFIX = "var(--deprecated-text-input-prefix)", _.DISPLAY_BANNER_OVERFLOW_BACKGROUND = "var(--display-banner-overflow-background)", _.DIVIDER_STRONG = "var(--divider-strong)", _.DIVIDER_SUBTLE = "var(--divider-subtle)", _.EMBED_BACKGROUND = "var(--embed-background)", _.EMBED_BACKGROUND_ALTERNATE = "var(--embed-background-alternate)", _.EMBED_TITLE = "var(--embed-title)", _.EXPRESSION_PICKER_BG = "var(--expression-picker-bg)", _.FOCUS_PRIMARY = "var(--focus-primary)", _.FORUM_POST_EXTRA_MEDIA_COUNT_CONTAINER_BACKGROUND = "var(--forum-post-extra-media-count-container-background)", _.FORUM_POST_TAG_BACKGROUND = "var(--forum-post-tag-background)", _.GUILD_ICON_INACTIVE_BG = "var(--guild-icon-inactive-bg)", _.GUILD_ICON_INACTIVE_NESTED_BG = "var(--guild-icon-inactive-nested-bg)", _.GUILD_NOTIFICATIONS_BOTTOM_SHEET_PILL_BACKGROUND = "var(--guild-notifications-bottom-sheet-pill-background)", _.HALO_POSITIVE = "var(--halo-positive)", _.HEADER_MUTED = "var(--header-muted)", _.HEADER_PRIMARY = "var(--header-primary)", _.HEADER_SECONDARY = "var(--header-secondary)", _.HOME_BACKGROUND = "var(--home-background)", _.HOME_CARD_RESTING_BORDER = "var(--home-card-resting-border)", _.ICON_MUTED = "var(--icon-muted)", _.ICON_PRIMARY = "var(--icon-primary)", _.ICON_SECONDARY = "var(--icon-secondary)", _.ICON_TRANSPARENT = "var(--icon-transparent)", _.INFO_BOX_BACKGROUND = "var(--info-box-background)", _.INFO_DANGER_BACKGROUND = "var(--info-danger-background)", _.INFO_DANGER_FOREGROUND = "var(--info-danger-foreground)", _.INFO_DANGER_TEXT = "var(--info-danger-text)", _.INFO_HELP_BACKGROUND = "var(--info-help-background)", _.INFO_HELP_FOREGROUND = "var(--info-help-foreground)", _.INFO_HELP_TEXT = "var(--info-help-text)", _.INFO_POSITIVE_BACKGROUND = "var(--info-positive-background)", _.INFO_POSITIVE_FOREGROUND = "var(--info-positive-foreground)", _.INFO_POSITIVE_TEXT = "var(--info-positive-text)", _.INFO_WARNING_BACKGROUND = "var(--info-warning-background)", _.INFO_WARNING_FOREGROUND = "var(--info-warning-foreground)", _.INFO_WARNING_TEXT = "var(--info-warning-text)", _.INPUT_BACKGROUND = "var(--input-background)", _.INPUT_FOCUSED_BORDER = "var(--input-focused-border)", _.INPUT_PLACEHOLDER_TEXT = "var(--input-placeholder-text)", _.INTERACTIVE_ACTIVE = "var(--interactive-active)", _.INTERACTIVE_HOVER = "var(--interactive-hover)", _.INTERACTIVE_MUTED = "var(--interactive-muted)", _.INTERACTIVE_NORMAL = "var(--interactive-normal)", _.LEGACY_ANDROID_BLUR_OVERLAY_DEFAULT = "var(--legacy-android-blur-overlay-default)", _.LEGACY_ANDROID_BLUR_OVERLAY_ULTRA_THIN = "var(--legacy-android-blur-overlay-ultra-thin)", _.LEGACY_BLUR_FALLBACK_DEFAULT = "var(--legacy-blur-fallback-default)", _.LEGACY_BLUR_FALLBACK_ULTRA_THIN = "var(--legacy-blur-fallback-ultra-thin)", _.LIVE_STAGE_TILE_BORDER = "var(--live-stage-tile-border)", _.LOGO_PRIMARY = "var(--logo-primary)", _.MENTION_BACKGROUND = "var(--mention-background)", _.MENTION_FOREGROUND = "var(--mention-foreground)", _.MODAL_BACKGROUND = "var(--modal-background)", _.MODAL_FOOTER_BACKGROUND = "var(--modal-footer-background)", _.NAVIGATOR_HEADER_TINT = "var(--navigator-header-tint)", _.PANEL_BG = "var(--panel-bg)", _.POLLS_NORMAL_FILL_HOVER = "var(--polls-normal-fill-hover)", _.POLLS_NORMAL_IMAGE_BACKGROUND = "var(--polls-normal-image-background)", _.POLLS_VICTOR_FILL = "var(--polls-victor-fill)", _.POLLS_VOTED_FILL = "var(--polls-voted-fill)", _.PROFILE_GRADIENT_CARD_BACKGROUND = "var(--profile-gradient-card-background)", _.PROFILE_GRADIENT_MESSAGE_INPUT_BORDER = "var(--profile-gradient-message-input-border)", _.PROFILE_GRADIENT_NOTE_BACKGROUND = "var(--profile-gradient-note-background)", _.PROFILE_GRADIENT_OVERLAY = "var(--profile-gradient-overlay)", _.PROFILE_GRADIENT_OVERLAY_SYNCED_WITH_USER_THEME = "var(--profile-gradient-overlay-synced-with-user-theme)", _.PROFILE_GRADIENT_PROFILE_BODY_BACKGROUND_HOVER = "var(--profile-gradient-profile-body-background-hover)", _.PROFILE_GRADIENT_ROLE_PILL_BACKGROUND = "var(--profile-gradient-role-pill-background)", _.PROFILE_GRADIENT_ROLE_PILL_BORDER = "var(--profile-gradient-role-pill-border)", _.PROFILE_GRADIENT_SECTION_BOX = "var(--profile-gradient-section-box)", _.REDESIGN_ACTIVITY_CARD_BACKGROUND = "var(--redesign-activity-card-background)", _.REDESIGN_ACTIVITY_CARD_BACKGROUND_PRESSED = "var(--redesign-activity-card-background-pressed)", _.REDESIGN_ACTIVITY_CARD_BADGE_ICON = "var(--redesign-activity-card-badge-icon)", _.REDESIGN_ACTIVITY_CARD_BORDER = "var(--redesign-activity-card-border)", _.REDESIGN_ACTIVITY_CARD_OVERFLOW_BACKGROUND = "var(--redesign-activity-card-overflow-background)", _.REDESIGN_BUTTON_ACTIVE_BACKGROUND = "var(--redesign-button-active-background)", _.REDESIGN_BUTTON_ACTIVE_PRESSED_BACKGROUND = "var(--redesign-button-active-pressed-background)", _.REDESIGN_BUTTON_ACTIVE_TEXT = "var(--redesign-button-active-text)", _.REDESIGN_BUTTON_DANGER_BACKGROUND = "var(--redesign-button-danger-background)", _.REDESIGN_BUTTON_DANGER_PRESSED_BACKGROUND = "var(--redesign-button-danger-pressed-background)", _.REDESIGN_BUTTON_DANGER_TEXT = "var(--redesign-button-danger-text)", _.REDESIGN_BUTTON_DESTRUCTIVE_BACKGROUND = "var(--redesign-button-destructive-background)", _.REDESIGN_BUTTON_DESTRUCTIVE_PRESSED_BACKGROUND = "var(--redesign-button-destructive-pressed-background)", _.REDESIGN_BUTTON_DESTRUCTIVE_TEXT = "var(--redesign-button-destructive-text)", _.REDESIGN_BUTTON_OVERLAY_ALPHA_BACKGROUND = "var(--redesign-button-overlay-alpha-background)", _.REDESIGN_BUTTON_OVERLAY_ALPHA_PRESSED_BACKGROUND = "var(--redesign-button-overlay-alpha-pressed-background)", _.REDESIGN_BUTTON_OVERLAY_ALPHA_TEXT = "var(--redesign-button-overlay-alpha-text)", _.REDESIGN_BUTTON_OVERLAY_BACKGROUND = "var(--redesign-button-overlay-background)", _.REDESIGN_BUTTON_OVERLAY_PRESSED_BACKGROUND = "var(--redesign-button-overlay-pressed-background)", _.REDESIGN_BUTTON_OVERLAY_TEXT = "var(--redesign-button-overlay-text)", _.REDESIGN_BUTTON_POSITIVE_BACKGROUND = "var(--redesign-button-positive-background)", _.REDESIGN_BUTTON_POSITIVE_PRESSED_BACKGROUND = "var(--redesign-button-positive-pressed-background)", _.REDESIGN_BUTTON_POSITIVE_TEXT = "var(--redesign-button-positive-text)", _.REDESIGN_BUTTON_PRIMARY_ALT_BACKGROUND = "var(--redesign-button-primary-alt-background)", _.REDESIGN_BUTTON_PRIMARY_ALT_BORDER = "var(--redesign-button-primary-alt-border)", _.REDESIGN_BUTTON_PRIMARY_ALT_ON_BLURPLE_BACKGROUND = "var(--redesign-button-primary-alt-on-blurple-background)", _.REDESIGN_BUTTON_PRIMARY_ALT_ON_BLURPLE_BORDER = "var(--redesign-button-primary-alt-on-blurple-border)", _.REDESIGN_BUTTON_PRIMARY_ALT_ON_BLURPLE_PRESSED_BACKGROUND = "var(--redesign-button-primary-alt-on-blurple-pressed-background)", _.REDESIGN_BUTTON_PRIMARY_ALT_ON_BLURPLE_PRESSED_BORDER = "var(--redesign-button-primary-alt-on-blurple-pressed-border)", _.REDESIGN_BUTTON_PRIMARY_ALT_ON_BLURPLE_TEXT = "var(--redesign-button-primary-alt-on-blurple-text)", _.REDESIGN_BUTTON_PRIMARY_ALT_PRESSED_BACKGROUND = "var(--redesign-button-primary-alt-pressed-background)", _.REDESIGN_BUTTON_PRIMARY_ALT_PRESSED_BORDER = "var(--redesign-button-primary-alt-pressed-border)", _.REDESIGN_BUTTON_PRIMARY_ALT_PRESSED_TEXT = "var(--redesign-button-primary-alt-pressed-text)", _.REDESIGN_BUTTON_PRIMARY_ALT_TEXT = "var(--redesign-button-primary-alt-text)", _.REDESIGN_BUTTON_PRIMARY_BACKGROUND = "var(--redesign-button-primary-background)", _.REDESIGN_BUTTON_PRIMARY_ON_BLURPLE_PRESSED_TEXT = "var(--redesign-button-primary-on-blurple-pressed-text)", _.REDESIGN_BUTTON_PRIMARY_OVERLAY_BACKGROUND = "var(--redesign-button-primary-overlay-background)", _.REDESIGN_BUTTON_PRIMARY_OVERLAY_PRESSED_BACKGROUND = "var(--redesign-button-primary-overlay-pressed-background)", _.REDESIGN_BUTTON_PRIMARY_OVERLAY_TEXT = "var(--redesign-button-primary-overlay-text)", _.REDESIGN_BUTTON_PRIMARY_PRESSED_BACKGROUND = "var(--redesign-button-primary-pressed-background)", _.REDESIGN_BUTTON_PRIMARY_TEXT = "var(--redesign-button-primary-text)", _.REDESIGN_BUTTON_SECONDARY_BACKGROUND = "var(--redesign-button-secondary-background)", _.REDESIGN_BUTTON_SECONDARY_BORDER = "var(--redesign-button-secondary-border)", _.REDESIGN_BUTTON_SECONDARY_OVERLAY_BACKGROUND = "var(--redesign-button-secondary-overlay-background)", _.REDESIGN_BUTTON_SECONDARY_OVERLAY_PRESSED_BACKGROUND = "var(--redesign-button-secondary-overlay-pressed-background)", _.REDESIGN_BUTTON_SECONDARY_OVERLAY_TEXT = "var(--redesign-button-secondary-overlay-text)", _.REDESIGN_BUTTON_SECONDARY_PRESSED_BACKGROUND = "var(--redesign-button-secondary-pressed-background)", _.REDESIGN_BUTTON_SECONDARY_PRESSED_BORDER = "var(--redesign-button-secondary-pressed-border)", _.REDESIGN_BUTTON_SECONDARY_TEXT = "var(--redesign-button-secondary-text)", _.REDESIGN_BUTTON_SELECTED_BACKGROUND = "var(--redesign-button-selected-background)", _.REDESIGN_BUTTON_SELECTED_PRESSED_BACKGROUND = "var(--redesign-button-selected-pressed-background)", _.REDESIGN_BUTTON_SELECTED_TEXT = "var(--redesign-button-selected-text)", _.REDESIGN_BUTTON_TERTIARY_BACKGROUND = "var(--redesign-button-tertiary-background)", _.REDESIGN_BUTTON_TERTIARY_PRESSED_BACKGROUND = "var(--redesign-button-tertiary-pressed-background)", _.REDESIGN_BUTTON_TERTIARY_PRESSED_TEXT = "var(--redesign-button-tertiary-pressed-text)", _.REDESIGN_BUTTON_TERTIARY_TEXT = "var(--redesign-button-tertiary-text)", _.REDESIGN_CHANNEL_CATEGORY_NAME_TEXT = "var(--redesign-channel-category-name-text)", _.REDESIGN_CHANNEL_MESSAGE_PREVIEW_TEXT = "var(--redesign-channel-message-preview-text)", _.REDESIGN_CHANNEL_NAME_MUTED_TEXT = "var(--redesign-channel-name-muted-text)", _.REDESIGN_CHANNEL_NAME_TEXT = "var(--redesign-channel-name-text)", _.REDESIGN_CHAT_INPUT_BACKGROUND = "var(--redesign-chat-input-background)", _.REDESIGN_INPUT_CONTROL_ACTIVE_BG = "var(--redesign-input-control-active-bg)", _.REDESIGN_INPUT_CONTROL_SELECTED = "var(--redesign-input-control-selected)", _.REDESIGN_ONLY_BACKGROUND_ACTIVE = "var(--redesign-only-background-active)", _.REDESIGN_ONLY_BACKGROUND_DEFAULT = "var(--redesign-only-background-default)", _.REDESIGN_ONLY_BACKGROUND_OVERLAY = "var(--redesign-only-background-overlay)", _.REDESIGN_ONLY_BACKGROUND_RAISED = "var(--redesign-only-background-raised)", _.REDESIGN_ONLY_BACKGROUND_SUNKEN = "var(--redesign-only-background-sunken)", _.SCROLLBAR_AUTO_SCROLLBAR_COLOR_THUMB = "var(--scrollbar-auto-scrollbar-color-thumb)", _.SCROLLBAR_AUTO_SCROLLBAR_COLOR_TRACK = "var(--scrollbar-auto-scrollbar-color-track)", _.SCROLLBAR_AUTO_THUMB = "var(--scrollbar-auto-thumb)", _.SCROLLBAR_AUTO_TRACK = "var(--scrollbar-auto-track)", _.SCROLLBAR_THIN_THUMB = "var(--scrollbar-thin-thumb)", _.SCROLLBAR_THIN_TRACK = "var(--scrollbar-thin-track)", _.SPOILER_HIDDEN_BACKGROUND = "var(--spoiler-hidden-background)", _.SPOILER_REVEALED_BACKGROUND = "var(--spoiler-revealed-background)", _.STATUS_DANGER = "var(--status-danger)", _.STATUS_DANGER_BACKGROUND = "var(--status-danger-background)", _.STATUS_DANGER_TEXT = "var(--status-danger-text)", _.STATUS_DND = "var(--status-dnd)", _.STATUS_IDLE = "var(--status-idle)", _.STATUS_OFFLINE = "var(--status-offline)", _.STATUS_ONLINE = "var(--status-online)", _.STATUS_POSITIVE = "var(--status-positive)", _.STATUS_POSITIVE_BACKGROUND = "var(--status-positive-background)", _.STATUS_POSITIVE_TEXT = "var(--status-positive-text)", _.STATUS_SPEAKING = "var(--status-speaking)", _.STATUS_WARNING = "var(--status-warning)", _.STATUS_WARNING_BACKGROUND = "var(--status-warning-background)", _.STATUS_WARNING_TEXT = "var(--status-warning-text)", _.TEXT_BRAND = "var(--text-brand)", _.TEXT_DANGER = "var(--text-danger)", _.TEXT_LINK = "var(--text-link)", _.TEXT_LINK_LOW_SATURATION = "var(--text-link-low-saturation)", _.TEXT_LOW_CONTRAST = "var(--text-low-contrast)", _.TEXT_MESSAGE_PREVIEW_LOW_SAT = "var(--text-message-preview-low-sat)", _.TEXT_MUTED = "var(--text-muted)", _.TEXT_MUTED_ON_DEFAULT = "var(--text-muted-on-default)", _.TEXT_NORMAL = "var(--text-normal)", _.TEXT_POSITIVE = "var(--text-positive)", _.TEXT_PRIMARY = "var(--text-primary)", _.TEXT_SECONDARY = "var(--text-secondary)", _.TEXT_WARNING = "var(--text-warning)", _.TEXTBOX_MARKDOWN_SYNTAX = "var(--textbox-markdown-syntax)", _.THEME_LOCKED_BLUR_FALLBACK = "var(--theme-locked-blur-fallback)", _.TOAST_BG = "var(--toast-bg)", _.TYPING_INDICATOR_BG = "var(--typing-indicator-bg)", _.USER_PROFILE_HEADER_OVERFLOW_BACKGROUND = "var(--user-profile-header-overflow-background)", _.VOICE_VIDEO_VIDEO_TILE_BACKGROUND = "var(--voice-video-video-tile-background)", _.VOICE_VIDEO_VIDEO_TILE_BLUR_FALLBACK = "var(--voice-video-video-tile-blur-fallback)", _.WHITE = "var(--white)", _.YOU_BAR_BG = "var(--you-bar-bg)";
            var _, E, t = E
        }
    }
]);
//# sourceMappingURL=21251.8273829d10e610575c69.js.map