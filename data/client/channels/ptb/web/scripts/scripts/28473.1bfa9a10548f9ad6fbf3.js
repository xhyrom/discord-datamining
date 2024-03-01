(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["28473"], {
        606762: function(E, e, s) {
            "use strict";
            s.r(e), s.d(e, {
                RowType: function() {
                    return T
                },
                AudienceSelectorSections: function() {
                    return O
                },
                MEMBER_REQUEST_COUNT: function() {
                    return D
                },
                ADVANCED_MODE_ON_KEY: function() {
                    return i
                },
                getChannelPermissionSpecMap: function() {
                    return r
                }
            });
            var S, _, I, R, T, O, a, t, N = s("79112"),
                n = s("428171"),
                M = s("852040"),
                A = s("701909"),
                C = s("49111"),
                l = s("782340");
            (S = T || (T = {}))[S.EMPTY_STATE = 0] = "EMPTY_STATE", S[S.ADMINISTRATOR = 1] = "ADMINISTRATOR", S[S.ROLE = 2] = "ROLE", S[S.OWNER = 3] = "OWNER", S[S.MEMBER = 4] = "MEMBER", S[S.USER = 5] = "USER", S[S.GUILD = 6] = "GUILD", (_ = O || (O = {}))[_.ROLES = 0] = "ROLES", _[_.MEMBERS = 1] = "MEMBERS", _[_.USERS = 2] = "USERS", _[_.GUILDS = 3] = "GUILDS";
            let D = 20,
                i = "channelPermissionSettingsAdvancedModeOn";

            function r(E, e, s, S) {
                let _ = E.type;
                return {
                    [C.Permissions.VIEW_CHANNEL.toString()]: {
                        title: _ === C.ChannelTypes.GUILD_CATEGORY ? l.default.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL : l.default.Messages.VIEW_CHANNEL,
                        description: (() => {
                            if (e) switch (_) {
                                case C.ChannelTypes.GUILD_CATEGORY:
                                    return l.default.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL_DESCRIPTION_CATEGORY_EVERYONE;
                                case C.ChannelTypes.GUILD_VOICE:
                                case C.ChannelTypes.GUILD_STAGE_VOICE:
                                    return l.default.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL_DESCRIPTION_VOICE_EVERYONE;
                                default:
                                    return l.default.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL_DESCRIPTION_TEXT_EVERYONE
                            }
                            return _ === C.ChannelTypes.GUILD_CATEGORY ? l.default.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL_DESCRIPTION_CATEGORY : l.default.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL_DESCRIPTION_CHANNEL
                        })(),
                        flag: C.Permissions.VIEW_CHANNEL
                    },
                    [C.Permissions.MANAGE_CHANNELS.toString()]: {
                        title: _ === C.ChannelTypes.GUILD_CATEGORY ? l.default.Messages.MANAGE_CHANNELS : l.default.Messages.MANAGE_CHANNEL,
                        description: (() => {
                            switch (_) {
                                case C.ChannelTypes.GUILD_CATEGORY:
                                    return l.default.Messages.ROLE_PERMISSIONS_MANAGE_CHANNEL_DESCRIPTION_CATEGORY;
                                case C.ChannelTypes.GUILD_VOICE:
                                    return l.default.Messages.ROLE_PERMISSIONS_MANAGE_CHANNEL_DESCRIPTION_VOICE;
                                case C.ChannelTypes.GUILD_STAGE_VOICE:
                                    return l.default.Messages.ROLE_PERMISSIONS_MANAGE_CHANNEL_DESCRIPTION_STAGE;
                                default:
                                    return l.default.Messages.ROLE_PERMISSIONS_MANAGE_CHANNEL_DESCRIPTION_TEXT
                            }
                        })(),
                        flag: C.Permissions.MANAGE_CHANNELS
                    },
                    [C.Permissions.MANAGE_ROLES.toString()]: {
                        title: l.default.Messages.MANAGE_PERMISSIONS,
                        description: (() => {
                            switch (_) {
                                case C.ChannelTypes.GUILD_CATEGORY:
                                    return l.default.Messages.ROLE_PERMISSIONS_MANAGE_ROLES_DESCRIPTION_CATEGORY;
                                case C.ChannelTypes.GUILD_STAGE_VOICE:
                                    return l.default.Messages.ROLE_PERMISSIONS_MANAGE_ROLES_DESCRIPTION_STAGE;
                                default:
                                    return l.default.Messages.ROLE_PERMISSIONS_MANAGE_ROLES_DESCRIPTION_CHANNEL
                            }
                        })(),
                        flag: C.Permissions.MANAGE_ROLES
                    },
                    [C.Permissions.MANAGE_WEBHOOKS.toString()]: {
                        title: l.default.Messages.MANAGE_WEBHOOKS,
                        description: _ === C.ChannelTypes.GUILD_CATEGORY ? l.default.Messages.ROLE_PERMISSIONS_MANAGE_WEBHOOKS_DESCRIPTION_CATEGORY : l.default.Messages.ROLE_PERMISSIONS_MANAGE_WEBHOOKS_DESCRIPTION_CHANNEL,
                        flag: C.Permissions.MANAGE_WEBHOOKS
                    },
                    [C.Permissions.CREATE_INSTANT_INVITE.toString()]: {
                        title: l.default.Messages.CREATE_INSTANT_INVITE,
                        description: (() => {
                            switch (_) {
                                case C.ChannelTypes.GUILD_CATEGORY:
                                    return l.default.Messages.ROLE_PERMISSIONS_CREATE_INSTANT_INVITE_DESCRIPTION_CATEGORY;
                                case C.ChannelTypes.GUILD_VOICE:
                                case C.ChannelTypes.GUILD_STAGE_VOICE:
                                    return l.default.Messages.ROLE_PERMISSIONS_CREATE_INSTANT_INVITE_DESCRIPTION_VOICE;
                                default:
                                    return l.default.Messages.ROLE_PERMISSIONS_CREATE_INSTANT_INVITE_DESCRIPTION_TEXT
                            }
                        })(),
                        flag: C.Permissions.CREATE_INSTANT_INVITE
                    },
                    [C.Permissions.SEND_MESSAGES.toString()]: {
                        title: C.ChannelTypesSets.GUILD_THREADS_ONLY.has(_) ? l.default.Messages.CREATE_FORUM_POSTS : s && _ === C.ChannelTypes.GUILD_CATEGORY ? l.default.Messages.SEND_MESSAGES_AND_CREATE_FORUM_POSTS : l.default.Messages.SEND_MESSAGES,
                        description: (() => {
                            switch (_) {
                                case C.ChannelTypes.GUILD_CATEGORY:
                                    return s ? l.default.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_WITH_FORUMS_DESCRIPTION_CATEGORY : l.default.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_DESCRIPTION_CATEGORY;
                                case C.ChannelTypes.GUILD_FORUM:
                                    return (null == S ? void 0 : S.createPostsDisabled) && !E.isMediaChannel() ? n.default.getForumChannelPermissionText() : l.default.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_WITH_FORUMS_DESCRIPTION_TEXT;
                                case C.ChannelTypes.GUILD_MEDIA:
                                    return l.default.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_WITH_FORUMS_DESCRIPTION_TEXT;
                                case C.ChannelTypes.GUILD_ANNOUNCEMENT:
                                    return l.default.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_DESCRIPTION_ANNOUNCEMENT.format({
                                        articleURL: A.default.getArticleURL(C.HelpdeskArticles.ANNOUNCEMENT_CHANNELS)
                                    });
                                case C.ChannelTypes.GUILD_VOICE:
                                    return M.default.getTextInVoiceSendMessageChannelPermissionText(null == S ? void 0 : S.sendMessagesDisabled);
                                default:
                                    return l.default.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_DESCRIPTION_TEXT
                            }
                        })(),
                        flag: C.Permissions.SEND_MESSAGES
                    },
                    [C.Permissions.EMBED_LINKS.toString()]: {
                        title: l.default.Messages.EMBED_LINKS,
                        description: _ === C.ChannelTypes.GUILD_CATEGORY ? l.default.Messages.ROLE_PERMISSIONS_EMBED_LINKS_DESCRIPTION_CATEGORY : l.default.Messages.ROLE_PERMISSIONS_EMBED_LINKS_DESCRIPTION_TEXT,
                        flag: C.Permissions.EMBED_LINKS
                    },
                    [C.Permissions.ATTACH_FILES.toString()]: {
                        title: l.default.Messages.ATTACH_FILES,
                        description: _ === C.ChannelTypes.GUILD_CATEGORY ? l.default.Messages.ROLE_PERMISSIONS_ATTACH_FILES_DESCRIPTION_CATEGORY : l.default.Messages.ROLE_PERMISSIONS_ATTACH_FILES_DESCRIPTION_TEXT,
                        flag: C.Permissions.ATTACH_FILES
                    },
                    [C.Permissions.ADD_REACTIONS.toString()]: {
                        title: l.default.Messages.ADD_REACTIONS,
                        description: (() => {
                            switch (_) {
                                case C.ChannelTypes.GUILD_CATEGORY:
                                    return l.default.Messages.ROLE_PERMISSIONS_ADD_REACTIONS_DESCRIPTION_CATEGORY;
                                case C.ChannelTypes.GUILD_VOICE:
                                    return l.default.Messages.ROLE_PERMISSIONS_ADD_REACTIONS_DESCRIPTION_TEXT_WITH_VOICE_CHANNEL_EFFECTS;
                                default:
                                    return l.default.Messages.ROLE_PERMISSIONS_ADD_REACTIONS_DESCRIPTION_TEXT
                            }
                        })(),
                        flag: C.Permissions.ADD_REACTIONS
                    },
                    [C.Permissions.USE_EXTERNAL_EMOJIS.toString()]: {
                        title: l.default.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_EMOJIS,
                        description: _ === C.ChannelTypes.GUILD_CATEGORY ? l.default.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_EMOJIS_DESCRIPTION_CATEGORY : l.default.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_EMOJIS_DESCRIPTION_TEXT,
                        flag: C.Permissions.USE_EXTERNAL_EMOJIS
                    },
                    [C.Permissions.USE_EXTERNAL_STICKERS.toString()]: {
                        title: l.default.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_STICKERS,
                        description: _ === C.ChannelTypes.GUILD_CATEGORY ? l.default.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_STICKERS_DESCRIPTION_CATEGORY : l.default.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_STICKERS_DESCRIPTION_TEXT,
                        flag: C.Permissions.USE_EXTERNAL_STICKERS
                    },
                    [C.Permissions.MENTION_EVERYONE.toString()]: {
                        title: _ === C.ChannelTypes.GUILD_STAGE_VOICE ? l.default.Messages.MENTION_EVERYONE_STAGE : l.default.Messages.MENTION_EVERYONE,
                        description: _ === C.ChannelTypes.GUILD_CATEGORY ? l.default.Messages.ROLE_PERMISSIONS_MENTION_EVERYONE_DESCRIPTION_CATEGORY : _ === C.ChannelTypes.GUILD_STAGE_VOICE ? l.default.Messages.ROLE_PERMISSIONS_MENTION_EVERYONE_DESCRIPTION_STAGE : l.default.Messages.ROLE_PERMISSIONS_MENTION_EVERYONE_DESCRIPTION_TEXT,
                        flag: C.Permissions.MENTION_EVERYONE
                    },
                    [C.Permissions.MANAGE_MESSAGES.toString()]: {
                        title: l.default.Messages.MANAGE_MESSAGES,
                        description: (() => {
                            switch (_) {
                                case C.ChannelTypes.GUILD_CATEGORY:
                                    return l.default.Messages.ROLE_PERMISSIONS_MANAGE_MESSAGES_DESCRIPTION_CATEGORY;
                                case C.ChannelTypes.GUILD_ANNOUNCEMENT:
                                    return l.default.Messages.ROLE_PERMISSIONS_MANAGE_MESSAGES_DESCRIPTION_ANNOUNCEMENT.format({
                                        articleURL: A.default.getArticleURL(C.HelpdeskArticles.ANNOUNCEMENT_CHANNELS)
                                    });
                                default:
                                    return l.default.Messages.ROLE_PERMISSIONS_MANAGE_MESSAGES_DESCRIPTION_TEXT
                            }
                        })(),
                        flag: C.Permissions.MANAGE_MESSAGES
                    },
                    [C.Permissions.READ_MESSAGE_HISTORY.toString()]: {
                        title: C.ChannelTypesSets.GUILD_THREADS_ONLY.has(_) ? l.default.Messages.READ_POST_HISTORY : l.default.Messages.READ_MESSAGE_HISTORY,
                        description: (() => {
                            switch (_) {
                                case C.ChannelTypes.GUILD_CATEGORY:
                                    return l.default.Messages.ROLE_PERMISSIONS_READ_MESSAGE_HISTORY_DESCRIPTION_CATEGORY;
                                case C.ChannelTypes.GUILD_VOICE:
                                    return M.default.getTextInVoiceReadMessageHistoryChannelPermissionText(null == S ? void 0 : S.readMessageHistoryDisabled);
                                case C.ChannelTypes.GUILD_FORUM:
                                case C.ChannelTypes.GUILD_MEDIA:
                                    return l.default.Messages.ROLE_PERMISSIONS_READ_MESSAGE_HISTORY_DESCRIPTION_FORUM_CHANNEL;
                                default:
                                    return l.default.Messages.ROLE_PERMISSIONS_READ_MESSAGE_HISTORY_DESCRIPTION_TEXT
                            }
                        })(),
                        flag: C.Permissions.READ_MESSAGE_HISTORY
                    },
                    [C.Permissions.SEND_TTS_MESSAGES.toString()]: {
                        title: l.default.Messages.ROLE_PERMISSIONS_SEND_TTS_MESSAGES,
                        description: _ === C.ChannelTypes.GUILD_CATEGORY ? l.default.Messages.ROLE_PERMISSIONS_SEND_TTS_MESSAGES_DESCRIPTION_CATEGORY : l.default.Messages.ROLE_PERMISSIONS_SEND_TTS_MESSAGES_DESCRIPTION_TEXT,
                        flag: C.Permissions.SEND_TTS_MESSAGES
                    },
                    [C.Permissions.USE_APPLICATION_COMMANDS.toString()]: {
                        title: l.default.Messages.ROLE_PERMISSIONS_USE_APPLICATION_COMMANDS,
                        description: _ === C.ChannelTypes.GUILD_CATEGORY ? l.default.Messages.ROLE_PERMISSIONS_USE_APPLICATION_COMMANDS_DESCRIPTION_CATEGORY : l.default.Messages.ROLE_PERMISSIONS_USE_APPLICATION_COMMANDS_DESCRIPTION_TEXT,
                        flag: C.Permissions.USE_APPLICATION_COMMANDS
                    },
                    [C.Permissions.SEND_VOICE_MESSAGES.toString()]: {
                        title: l.default.Messages.ROLE_PERMISSIONS_SEND_VOICE_MESSAGE,
                        description: _ === C.ChannelTypes.GUILD_CATEGORY ? l.default.Messages.ROLE_PERMISSIONS_SEND_VOICE_MESSAGES_DESCRIPTION_CATEGORY : l.default.Messages.ROLE_PERMISSIONS_SEND_VOICE_MESSAGES_DESCRIPTION_TEXT,
                        flag: C.Permissions.SEND_VOICE_MESSAGES
                    },
                    [C.Permissions.USE_CLYDE_AI.toString()]: {
                        title: l.default.Messages.ROLE_PERMISSIONS_USE_CLYDE_AI,
                        description: _ === C.ChannelTypes.GUILD_CATEGORY ? l.default.Messages.ROLE_PERMISSIONS_USE_CLYDE_AI_GUILD_DESCRIPTION : l.default.Messages.ROLE_PERMISSIONS_USE_CLYDE_AI_CHANNEL_DESCRIPTION,
                        flag: C.Permissions.USE_CLYDE_AI
                    },
                    [C.Permissions.CONNECT.toString()]: {
                        title: l.default.Messages.CONNECT,
                        description: (() => {
                            if (e) switch (_) {
                                case C.ChannelTypes.GUILD_CATEGORY:
                                    return l.default.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_CATEGORY_EVERYONE;
                                case C.ChannelTypes.GUILD_STAGE_VOICE:
                                    return l.default.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_STAGE_EVERYONE;
                                case C.ChannelTypes.GUILD_TEXT:
                                case C.ChannelTypes.GUILD_FORUM:
                                case C.ChannelTypes.GUILD_MEDIA:
                                    return l.default.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_THREADS_EVERYONE;
                                default:
                                    return l.default.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_VOICE_EVERYONE
                            }
                            switch (_) {
                                case C.ChannelTypes.GUILD_CATEGORY:
                                    return l.default.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_CATEGORY;
                                case C.ChannelTypes.GUILD_STAGE_VOICE:
                                    return l.default.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_STAGE;
                                case C.ChannelTypes.GUILD_TEXT:
                                case C.ChannelTypes.GUILD_FORUM:
                                case C.ChannelTypes.GUILD_MEDIA:
                                    return l.default.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_THREADS;
                                default:
                                    return l.default.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_VOICE
                            }
                        })(),
                        flag: C.Permissions.CONNECT
                    },
                    [C.Permissions.SPEAK.toString()]: {
                        title: l.default.Messages.SPEAK,
                        description: (() => {
                            switch (_) {
                                case C.ChannelTypes.GUILD_CATEGORY:
                                    return l.default.Messages.ROLE_PERMISSIONS_SPEAK_DESCRIPTION_CATEGORY;
                                case C.ChannelTypes.GUILD_STAGE_VOICE:
                                    return l.default.Messages.ROLE_PERMISSIONS_SPEAK_DESCRIPTION_STAGE;
                                case C.ChannelTypes.GUILD_TEXT:
                                case C.ChannelTypes.GUILD_FORUM:
                                case C.ChannelTypes.GUILD_MEDIA:
                                    return l.default.Messages.ROLE_PERMISSIONS_SPEAK_DESCRIPTION_THREADS;
                                default:
                                    return l.default.Messages.ROLE_PERMISSIONS_SPEAK_DESCRIPTION_VOICE
                            }
                        })(),
                        flag: C.Permissions.SPEAK
                    },
                    [C.Permissions.STREAM.toString()]: {
                        title: l.default.Messages.VIDEO,
                        description: (() => {
                            switch (_) {
                                case C.ChannelTypes.GUILD_CATEGORY:
                                    return l.default.Messages.ROLE_PERMISSIONS_STREAM_DESCRIPTION_CATEGORY;
                                case C.ChannelTypes.GUILD_TEXT:
                                case C.ChannelTypes.GUILD_FORUM:
                                case C.ChannelTypes.GUILD_MEDIA:
                                    return l.default.Messages.ROLE_PERMISSIONS_STREAM_DESCRIPTION_THREADS;
                                case C.ChannelTypes.GUILD_STAGE_VOICE:
                                    return l.default.Messages.ROLE_PERMISSIONS_STREAM_DESCRIPTION_STAGE;
                                default:
                                    return l.default.Messages.ROLE_PERMISSIONS_STREAM_DESCRIPTION_VOICE
                            }
                        })(),
                        flag: C.Permissions.STREAM
                    },
                    [C.Permissions.USE_EMBEDDED_ACTIVITIES.toString()]: {
                        title: l.default.Messages.USE_EMBEDDED_ACTIVITIES,
                        description: (() => {
                            switch (_) {
                                case C.ChannelTypes.GUILD_CATEGORY:
                                    return l.default.Messages.ROLE_PERMISSIONS_USE_EMBEDDED_ACTIVITIES_DESCRIPTION_CATEGORY;
                                case C.ChannelTypes.GUILD_FORUM:
                                case C.ChannelTypes.GUILD_MEDIA:
                                    return l.default.Messages.ROLE_PERMISSIONS_USE_EMBEDDED_ACTIVITIES_DESCRIPTION_THREADS;
                                default:
                                    return l.default.Messages.ROLE_PERMISSIONS_USE_EMBEDDED_ACTIVITIES_DESCRIPTION_CHANNEL
                            }
                        })(),
                        flag: C.Permissions.USE_EMBEDDED_ACTIVITIES
                    },
                    [C.Permissions.USE_SOUNDBOARD.toString()]: {
                        title: l.default.Messages.USE_SOUNDBOARD,
                        description: (() => {
                            switch (_) {
                                case C.ChannelTypes.GUILD_CATEGORY:
                                    return l.default.Messages.ROLE_PERMISSIONS_USE_SOUNDBOARD_DESCRIPTION_CATEGORY.format({
                                        helpCenterArticle: A.default.getArticleURL(C.HelpdeskArticles.SOUNDBOARD)
                                    });
                                case C.ChannelTypes.GUILD_TEXT:
                                case C.ChannelTypes.GUILD_FORUM:
                                case C.ChannelTypes.GUILD_MEDIA:
                                    return l.default.Messages.ROLE_PERMISSIONS_USE_SOUNDBOARD_DESCRIPTION_THREADS.format({
                                        helpCenterArticle: A.default.getArticleURL(C.HelpdeskArticles.SOUNDBOARD)
                                    });
                                default:
                                    return l.default.Messages.ROLE_PERMISSIONS_USE_SOUNDBOARD_DESCRIPTION_VOICE.format({
                                        helpCenterArticle: A.default.getArticleURL(C.HelpdeskArticles.SOUNDBOARD)
                                    })
                            }
                        })(),
                        flag: C.Permissions.USE_SOUNDBOARD
                    },
                    [C.Permissions.USE_EXTERNAL_SOUNDS.toString()]: {
                        title: l.default.Messages.USE_EXTERNAL_SOUNDS,
                        description: l.default.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_SOUNDS_DESCRIPTION,
                        flag: C.Permissions.USE_EXTERNAL_SOUNDS
                    },
                    [C.Permissions.USE_VAD.toString()]: {
                        title: l.default.Messages.USE_VAD,
                        description: (() => {
                            switch (_) {
                                case C.ChannelTypes.GUILD_CATEGORY:
                                    return l.default.Messages.ROLE_PERMISSIONS_USE_VAD_DESCRIPTION_CATEGORY;
                                case C.ChannelTypes.GUILD_STAGE_VOICE:
                                    return l.default.Messages.ROLE_PERMISSIONS_USE_VAD_DESCRIPTION_STAGE;
                                case C.ChannelTypes.GUILD_TEXT:
                                case C.ChannelTypes.GUILD_FORUM:
                                case C.ChannelTypes.GUILD_MEDIA:
                                    return l.default.Messages.ROLE_PERMISSIONS_USE_VAD_DESCRIPTION_THREADS;
                                default:
                                    return l.default.Messages.ROLE_PERMISSIONS_USE_VAD_DESCRIPTION_VOICE
                            }
                        })(),
                        flag: C.Permissions.USE_VAD
                    },
                    [C.Permissions.PRIORITY_SPEAKER.toString()]: {
                        title: l.default.Messages.PRIORITY_SPEAKER,
                        description: (() => {
                            let E = {
                                keybind: l.default.Messages.KEYBIND_PUSH_TO_TALK_PRIORITY,
                                onClick: () => {
                                    N.default.open(C.UserSettingsSections.KEYBINDS)
                                }
                            };
                            switch (_) {
                                case C.ChannelTypes.GUILD_CATEGORY:
                                    return l.default.Messages.ROLE_PERMISSIONS_PRIORITY_SPEAKER_DESCRIPTION_CATEGORY.format(E);
                                case C.ChannelTypes.GUILD_TEXT:
                                case C.ChannelTypes.GUILD_FORUM:
                                case C.ChannelTypes.GUILD_MEDIA:
                                    return l.default.Messages.ROLE_PERMISSIONS_PRIORITY_SPEAKER_DESCRIPTION_THREADS.format(E);
                                default:
                                    return l.default.Messages.ROLE_PERMISSIONS_PRIORITY_SPEAKER_DESCRIPTION_VOICE.format(E)
                            }
                        })(),
                        flag: C.Permissions.PRIORITY_SPEAKER
                    },
                    [C.Permissions.MUTE_MEMBERS.toString()]: {
                        title: l.default.Messages.MUTE_MEMBERS,
                        description: (() => {
                            switch (_) {
                                case C.ChannelTypes.GUILD_CATEGORY:
                                    return l.default.Messages.ROLE_PERMISSIONS_MUTE_MEMBERS_DESCRIPTION_CATEGORY;
                                case C.ChannelTypes.GUILD_STAGE_VOICE:
                                    return l.default.Messages.ROLE_PERMISSIONS_MUTE_MEMBERS_DESCRIPTION_STAGE;
                                case C.ChannelTypes.GUILD_TEXT:
                                case C.ChannelTypes.GUILD_FORUM:
                                case C.ChannelTypes.GUILD_MEDIA:
                                    return l.default.Messages.ROLE_PERMISSIONS_MUTE_MEMBERS_DESCRIPTION_THREADS;
                                default:
                                    return l.default.Messages.ROLE_PERMISSIONS_MUTE_MEMBERS_DESCRIPTION_VOICE
                            }
                        })(),
                        flag: C.Permissions.MUTE_MEMBERS
                    },
                    [C.Permissions.DEAFEN_MEMBERS.toString()]: {
                        title: l.default.Messages.DEAFEN_MEMBERS,
                        description: (() => {
                            switch (_) {
                                case C.ChannelTypes.GUILD_CATEGORY:
                                    return l.default.Messages.ROLE_PERMISSIONS_DEAFEN_MEMBERS_DESCRIPTION_CATEGORY;
                                case C.ChannelTypes.GUILD_TEXT:
                                case C.ChannelTypes.GUILD_FORUM:
                                case C.ChannelTypes.GUILD_MEDIA:
                                    return l.default.Messages.ROLE_PERMISSIONS_DEAFEN_MEMBERS_DESCRIPTION_THREADS;
                                default:
                                    return l.default.Messages.ROLE_PERMISSIONS_DEAFEN_MEMBERS_DESCRIPTION_VOICE
                            }
                        })(),
                        flag: C.Permissions.DEAFEN_MEMBERS
                    },
                    [C.Permissions.MOVE_MEMBERS.toString()]: {
                        title: l.default.Messages.MOVE_MEMBERS,
                        description: (() => {
                            switch (_) {
                                case C.ChannelTypes.GUILD_CATEGORY:
                                    return l.default.Messages.ROLE_PERMISSIONS_MOVE_MEMBERS_DESCRIPTION_CATEGORY;
                                case C.ChannelTypes.GUILD_STAGE_VOICE:
                                    return l.default.Messages.ROLE_PERMISSIONS_MOVE_MEMBERS_DESCRIPTION_STAGE;
                                case C.ChannelTypes.GUILD_TEXT:
                                case C.ChannelTypes.GUILD_FORUM:
                                case C.ChannelTypes.GUILD_MEDIA:
                                    return l.default.Messages.ROLE_PERMISSIONS_MOVE_MEMBERS_DESCRIPTION_THREADS;
                                default:
                                    return l.default.Messages.ROLE_PERMISSIONS_MOVE_MEMBERS_DESCRIPTION_VOICE
                            }
                        })(),
                        flag: C.Permissions.MOVE_MEMBERS
                    },
                    [C.Permissions.REQUEST_TO_SPEAK.toString()]: {
                        title: l.default.Messages.REQUEST_TO_SPEAK,
                        description: _ === C.ChannelTypes.GUILD_CATEGORY ? l.default.Messages.ROLE_PERMISSIONS_REQUEST_TO_SPEAK_DESCRIPTION_CATEGORY : l.default.Messages.ROLE_PERMISSIONS_REQUEST_TO_SPEAK_DESCRIPTION_STAGE,
                        flag: C.Permissions.REQUEST_TO_SPEAK
                    },
                    [C.Permissions.MANAGE_THREADS.toString()]: {
                        title: C.ChannelTypesSets.GUILD_THREADS_ONLY.has(_) ? l.default.Messages.MANAGE_FORUM_POSTS : s && _ === C.ChannelTypes.GUILD_CATEGORY ? l.default.Messages.MANAGE_THREADS_AND_FORUM_POSTS : l.default.Messages.MANAGE_THREADS,
                        description: (() => {
                            switch (_) {
                                case C.ChannelTypes.GUILD_CATEGORY:
                                    return s ? l.default.Messages.ROLE_PERMISSIONS_MANAGE_THREADS_AND_FORUMS_DESCRIPTION_CATEGORY : l.default.Messages.ROLE_PERMISSIONS_MANAGE_THREADS_DESCRIPTION_CATEGORY;
                                case C.ChannelTypes.GUILD_FORUM:
                                case C.ChannelTypes.GUILD_MEDIA:
                                    return l.default.Messages.ROLE_PERMISSIONS_MANAGE_THREADS_AND_FORUMS_DESCRIPTION_TEXT;
                                default:
                                    return l.default.Messages.ROLE_PERMISSIONS_MANAGE_THREADS_DESCRIPTION_TEXT
                            }
                        })(),
                        flag: C.Permissions.MANAGE_THREADS
                    },
                    [C.Permissions.CREATE_PUBLIC_THREADS.toString()]: {
                        title: l.default.Messages.CREATE_PUBLIC_THREADS,
                        description: _ === C.ChannelTypes.GUILD_CATEGORY ? l.default.Messages.ROLE_PERMISSIONS_CREATE_PUBLIC_THREADS_DESCRIPTION_CATEGORY : l.default.Messages.ROLE_PERMISSIONS_CREATE_PUBLIC_THREADS_DESCRIPTION_TEXT,
                        flag: C.Permissions.CREATE_PUBLIC_THREADS
                    },
                    [C.Permissions.CREATE_PRIVATE_THREADS.toString()]: {
                        title: l.default.Messages.CREATE_PRIVATE_THREADS,
                        description: _ === C.ChannelTypes.GUILD_CATEGORY ? l.default.Messages.ROLE_PERMISSIONS_CREATE_PRIVATE_THREADS_DESCRIPTION_CATEGORY : l.default.Messages.ROLE_PERMISSIONS_CREATE_PRIVATE_THREADS_DESCRIPTION_TEXT,
                        flag: C.Permissions.CREATE_PRIVATE_THREADS
                    },
                    [C.Permissions.SEND_MESSAGES_IN_THREADS.toString()]: {
                        title: C.ChannelTypesSets.GUILD_THREADS_ONLY.has(_) ? l.default.Messages.SEND_MESSAGES_IN_FORUM_POSTS : s && _ === C.ChannelTypes.GUILD_CATEGORY ? l.default.Messages.SEND_MESSAGES_IN_THREADS_AND_FORUM_POSTS : l.default.Messages.SEND_MESSAGES_IN_THREADS,
                        description: (() => {
                            switch (_) {
                                case C.ChannelTypes.GUILD_CATEGORY:
                                    return s ? l.default.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_IN_THREADS_AND_FORUM_POSTS_DESCRIPTION_CATEGORY : l.default.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_IN_THREADS_DESCRIPTION_CATEGORY;
                                case C.ChannelTypes.GUILD_FORUM:
                                case C.ChannelTypes.GUILD_MEDIA:
                                    return l.default.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_IN_THREADS_AND_FORUM_POSTS_DESCRIPTION_TEXT;
                                default:
                                    return l.default.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_IN_THREADS_DESCRIPTION_TEXT
                            }
                        })(),
                        flag: C.Permissions.SEND_MESSAGES_IN_THREADS
                    },
                    [C.Permissions.MANAGE_EVENTS.toString()]: {
                        title: l.default.Messages.MANAGE_EVENTS,
                        description: _ === C.ChannelTypes.GUILD_CATEGORY ? l.default.Messages.ROLE_PERMISSIONS_MANAGE_EVENTS_DESCRIPTION_CATEGORY : l.default.Messages.ROLE_PERMISSIONS_MANAGE_EVENTS_DESCRIPTION_CHANNEL,
                        flag: C.Permissions.MANAGE_EVENTS
                    },
                    [C.Permissions.CREATE_EVENTS.toString()]: {
                        title: l.default.Messages.CREATE_EVENTS,
                        description: _ === C.ChannelTypes.GUILD_CATEGORY ? l.default.Messages.ROLE_PERMISSIONS_CREATE_EVENTS_DESCRIPTION_CATEGORY : l.default.Messages.ROLE_PERMISSIONS_CREATE_EVENTS_DESCRIPTION_CHANNEL,
                        flag: C.Permissions.CREATE_EVENTS
                    },
                    [C.Permissions.SET_VOICE_CHANNEL_STATUS.toString()]: {
                        title: (null == S ? void 0 : S.inVoiceBgExperiment) ? l.default.Messages.VOICE_CHANNEL_CUSTOMIZE_PERMISSION_TITLE : l.default.Messages.VOICE_CHANNEL_STATUS_PERMISSION_TITLE,
                        description: (null == S ? void 0 : S.inVoiceBgExperiment) ? l.default.Messages.VOICE_CHANNEL_CUSTOMIZE_PERMISSION_DESCRIPTION : l.default.Messages.VOICE_CHANNEL_STATUS_PERMISSION_DESCRIPTION,
                        flag: C.Permissions.SET_VOICE_CHANNEL_STATUS
                    }
                }
            }(I = a || (a = {})).SETTINGS_PAGE = "settings-page", I.MEMBERS_LIST = "members-list", I.EMPTY_STATE = "empty-state", I.CREATE_CHANNEL = "create-channel", (R = t || (t = {})).BASIC = "basic", R.ADVANCED = "advanced"
        },
        428171: function(E, e, s) {
            "use strict";
            s.r(e), s.d(e, {
                default: function() {
                    return O
                }
            });
            var S = s("37983");
            s("884691");
            var _ = s("77078"),
                I = s("423487"),
                R = s("782340");
            let T = (E, e) => (0, S.jsxs)(_.Text, {
                color: "text-danger",
                style: {
                    display: "flex",
                    gap: "4px",
                    margin: "8px 0 4px 0",
                    alignItems: "center"
                },
                variant: "text-sm/normal",
                children: [(0, S.jsx)(I.default, {
                    width: 14,
                    height: 14
                }), E]
            }, e);
            var O = {
                getForumChannelPermissionText: function() {
                    return R.default.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_WITH_FORUMS_DESCRIPTION_TEXT_DISABLED.format({
                        warningHook: T
                    })
                }
            }
        },
        852040: function(E, e, s) {
            "use strict";
            s.r(e), s.d(e, {
                default: function() {
                    return O
                }
            });
            var S = s("37983");
            s("884691");
            var _ = s("77078"),
                I = s("423487"),
                R = s("782340");
            let T = (E, e) => (0, S.jsxs)(_.Text, {
                color: "text-danger",
                style: {
                    display: "flex",
                    gap: "4px",
                    margin: "8px 0 4px 0",
                    alignItems: "center"
                },
                variant: "text-sm/normal",
                children: [(0, S.jsx)(I.default, {
                    width: 14,
                    height: 14
                }), E]
            }, e);
            var O = {
                getTextInVoiceSendMessageChannelPermissionText: function(E) {
                    return E ? R.default.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_WITH_TIV_DESCRIPTION_TEXT_DISABLED.format({
                        warningHook: T
                    }) : R.default.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_DESCRIPTION_TEXT
                },
                getTextInVoiceReadMessageHistoryChannelPermissionText: function(E) {
                    return E ? R.default.Messages.ROLE_PERMISSIONS_READ_MESSAGE_HISTORY_WITH_TIV_DESCRIPTION_TEXT_DISABLED.format({
                        warningHook: T
                    }) : R.default.Messages.ROLE_PERMISSIONS_READ_MESSAGE_HISTORY_DESCRIPTION_TEXT
                }
            }
        }
    }
]);
//# sourceMappingURL=28473.1bfa9a10548f9ad6fbf3.js.map