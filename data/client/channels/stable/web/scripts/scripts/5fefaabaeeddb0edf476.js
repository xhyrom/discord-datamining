"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["64679"],
  {
    346486: function (E, S, _) {
      _(47120);
      var I,
        N = _(735250),
        R = _(470079),
        O = _(392711),
        A = _.n(O),
        P = _(55935),
        t = _(689938);
      function e(E, S, _) {
        return (
          S in E
            ? Object.defineProperty(E, S, {
                value: _,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (E[S] = _),
          E
        );
      }
      let T = () => [
        t.Z.Messages.COUNTDOWN_UNITS_SECONDS,
        t.Z.Messages.COUNTDOWN_UNITS_MINUTES,
        t.Z.Messages.COUNTDOWN_UNITS_HOURS,
        t.Z.Messages.COUNTDOWN_UNITS_DAYS,
      ];
      class M extends (I = R.PureComponent) {
        componentDidMount() {
          let { intervalDuration: E, onInterval: S } = this.props;
          this._interval = setInterval(() => {
            this.forceUpdate(), null == S || S();
          }, E);
        }
        componentWillUnmount() {
          null != this._interval && clearInterval(this._interval);
        }
        defaultRender(E) {
          let { showDays: S, showUnits: _, className: I } = this.props,
            R = [E.days, E.hours, E.minutes, E.seconds],
            O = T();
          if (0 === E.days) R.shift();
          else if (!S) {
            let E = R.shift();
            R[0] += 24 * E;
          }
          let P = A()(R)
            .map((E) => (E < 10 ? "0".concat(E) : E))
            .map((E, S) => [
              S > 0 && !_ ? ":" : " ",
              (0, N.jsxs)(
                "span",
                { children: [E, _ ? O[R.length - S - 1] : null] },
                S,
              ),
            ])
            .flatten()
            .value();
          return (0, N.jsx)("span", { className: I, children: P });
        }
        render() {
          let {
            deadline: E,
            children: S,
            className: _,
            stopAtOneSec: I,
          } = this.props;
          if (E === 1 / 0)
            return (0, N.jsx)("span", {
              className: _,
              "aria-label": t.Z.Messages.MAX_AGE_NEVER,
              children: "∞",
            });
          let R = (0, P.TD)(Date.now(), E, I);
          return null != S
            ? S(R, this.defaultRender.bind(this, R))
            : this.defaultRender(R);
        }
        constructor(...E) {
          super(...E), e(this, "_interval", void 0);
        }
      }
      e(M, "defaultProps", {
        showDays: !0,
        showUnits: !1,
        stopAtOneSec: !1,
        intervalDuration: 1e3,
      }),
        (S.Z = M);
    },
    60222: function (E, S, _) {
      _.d(S, {
        A: function () {
          return O;
        },
        m: function () {
          return A;
        },
      }),
        _(47120);
      var I = _(442837),
        N = _(430824),
        R = _(981631);
      function O(E) {
        var S;
        let [_] =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : [N.Z];
        return !!(null === (S = _.getGuild(E)) || void 0 === S
          ? void 0
          : S.hasFeature(R.oNc.COMMUNITY));
      }
      function A(E) {
        return (0, I.e7)([N.Z], () => O(E, [N.Z]), [E]);
      }
    },
    233608: function (E, S, _) {
      _(47120);
      var I = _(253923),
        N = _(230711),
        R = _(581364),
        O = _(797610),
        A = _(200876),
        P = _(456269),
        t = _(228392),
        e = _(676317),
        T = _(467138),
        M = _(434404),
        i = _(71275),
        l = _(60222),
        s = _(665906),
        n = _(131704),
        r = _(430824),
        C = _(63063),
        D = _(981631),
        o = _(71080),
        L = _(689938);
      function a(E) {
        let S = (0, l.A)(E),
          _ = (0, P.Eg)(E),
          I = (0, T.P)(E),
          t = r.Z.getGuild(E),
          e = null != t && (0, A.l)(t),
          M = (0, O.M9)(t),
          i = (0, R.vC)(E, { location: "get_permission_options" });
        return {
          PRIORITY_SPEAKER_DESCRIPTION:
            L.Z.Messages.ROLE_PERMISSIONS_PRIORITY_SPEAKER_DESCRIPTION_APP.format(
              {
                keybind: L.Z.Messages.KEYBIND_PUSH_TO_TALK_PRIORITY,
                onClick: () => {
                  N.Z.open(D.oAB.KEYBINDS);
                },
              },
            ),
          SOUNDBOARD_DESCRIPTION:
            L.Z.Messages.ROLE_PERMISSIONS_USE_SOUNDBOARD_DESCRIPTION_LEARN_MORE.format(
              { helpCenterArticle: C.Z.getArticleURL(D.BhN.SOUNDBOARD) },
            ),
          showStageChannelPermissions: S,
          showExperimental: !0,
          showForumPermissions: _,
          showMembershipManualApprovalPermissions: I,
          showCreatorMonetizationAnalyticsPermission: e,
          showClydeAIPermissions: M,
          externalAppsEnabled: i,
        };
      }
      function U(E, S) {
        return E ? [S()] : [];
      }
      S.Z = {
        generateChannelPermissionSpec: function (E, S, _, N) {
          var R, A, T, l, C, U;
          let g = (0, P.Eg)(E),
            G = (0, o.IG)(S, _, g, N),
            u = a(E),
            c =
              s.tM.getCurrentConfig({ guildId: E, location: "3ad37d_1" })
                .enabled && n.Um.has(S.type),
            p = (0, i.tu)(E),
            f = (0, e.ze)(E),
            d = S.isMediaChannel(),
            V = r.Z.getGuild(E),
            H = (0, O.M9)(V);
          switch (S.type) {
            case D.d4z.GUILD_CATEGORY:
              return [
                I.zO(G, L.Z.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CATEGORY),
                I.Ny(G, L.Z.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP),
                I.vq(G, L.Z.Messages.ROLE_PERMISSIONS_SECTION_TEXT, {
                  showPrivateThreads: !0,
                  showCreateThreads: !0,
                  showClydeAIPermissions: H,
                }),
                I.WV(G, L.Z.Messages.ROLE_PERMISSIONS_SECTION_VOICE),
                I.xU(G, L.Z.Messages.ROLE_PERMISSIONS_SECTION_APPS),
                ...((R = u.showStageChannelPermissions),
                (A = () =>
                  I.kv(G, L.Z.Messages.ROLE_PERMISSIONS_SECTION_STAGE)),
                R ? [A()] : []),
                I.uu(G, L.Z.Messages.ROLE_PERMISSIONS_SECTION_GUILD_EVENTS),
              ];
            case D.d4z.GUILD_VOICE:
              return [
                I.zO(G, L.Z.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CHANNEL, {
                  showManageWebhooks: !0,
                }),
                I.Ny(G, L.Z.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP),
                I.WV(G, L.Z.Messages.ROLE_PERMISSIONS_SECTION_VOICE),
                I.aW(G, L.Z.Messages.ROLE_PERMISSIONS_SECTION_VOICE_CHAT, {
                  sectionDescription: f
                    ? L.Z.Messages.ROLE_PERMISSIONS_SECTION_VOICE_CHAT_DESCRIPTION.format(
                        {
                          setUpAutomod: () => {
                            M.Z.open(E, D.pNK.GUILD_AUTOMOD);
                          },
                        },
                      )
                    : void 0,
                }),
                I.uu(G, L.Z.Messages.ROLE_PERMISSIONS_SECTION_GUILD_EVENTS),
                I.xU(G, L.Z.Messages.ROLE_PERMISSIONS_SECTION_APPS),
              ];
            case D.d4z.GUILD_STAGE_VOICE:
              return [
                I.zO(G, L.Z.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CHANNEL, {
                  showManageWebhooks: !1,
                }),
                I.Ny(G, L.Z.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP),
                I.FX(G, L.Z.Messages.ROLE_PERMISSIONS_SECTION_VOICE, p),
                I.kv(G, L.Z.Messages.ROLE_PERMISSIONS_SECTION_STAGE),
                I.uu(G, L.Z.Messages.ROLE_PERMISSIONS_SECTION_GUILD_EVENTS),
                I.aW(G, L.Z.Messages.ROLE_PERMISSIONS_SECTION_VOICE_CHAT, {
                  sectionDescription: f
                    ? L.Z.Messages.ROLE_PERMISSIONS_SECTION_VOICE_CHAT_DESCRIPTION.format(
                        {
                          setUpAutomod: () => {
                            M.Z.open(E, D.pNK.GUILD_AUTOMOD);
                          },
                        },
                      )
                    : void 0,
                }),
              ];
            case D.d4z.GUILD_FORUM:
            case D.d4z.GUILD_MEDIA:
              let h = d
                  ? L.Z.Messages.ROLE_PERMISSIONS_SECTION_MEDIA_CHANNEL
                  : L.Z.Messages.ROLE_PERMISSIONS_SECTION_FORUMS,
                B = d
                  ? L.Z.Messages
                      .ROLE_PERMISSIONS_SECTION_MEDIA_CHANNEL_DESCRIPTION
                  : L.Z.Messages.ROLE_PERMISSIONS_SECTION_FORUMS_DESCRIPTION;
              return [
                I.zO(G, L.Z.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CHANNEL),
                I.Ny(G, L.Z.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP),
                I.vq(G, h, {
                  showPrivateThreads: !1,
                  showCreateThreads: !1,
                  sectionDescription: f
                    ? B.format({
                        setUpAutomod: () => {
                          !d && (0, t.MO)(), M.Z.open(E, D.pNK.GUILD_AUTOMOD);
                        },
                      })
                    : void 0,
                  showClydeAIPermissions: H,
                }),
                I.xU(G, L.Z.Messages.ROLE_PERMISSIONS_SECTION_APPS),
                ...((T = c),
                (l = () =>
                  I.WV(G, L.Z.Messages.ROLE_PERMISSIONS_SECTION_VOICE)),
                T ? [l()] : []),
              ];
            default:
              return [
                I.zO(G, L.Z.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CHANNEL),
                I.Ny(G, L.Z.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP),
                I.vq(G, L.Z.Messages.ROLE_PERMISSIONS_SECTION_TEXT, {
                  showPrivateThreads: S.type !== D.d4z.GUILD_ANNOUNCEMENT,
                  showCreateThreads: !0,
                  showClydeAIPermissions: H,
                }),
                I.xU(G, L.Z.Messages.ROLE_PERMISSIONS_SECTION_APPS),
                ...((C = c),
                (U = () =>
                  I.WV(G, L.Z.Messages.ROLE_PERMISSIONS_SECTION_VOICE)),
                C ? [U()] : []),
              ];
          }
        },
        generateGuildPermissionSpec: function (E) {
          var S, _;
          let N = new Set();
          return (
            !E.hasFeature(D.oNc.COMMUNITY) &&
              N.add(D.Plq.VIEW_GUILD_ANALYTICS.toString()),
            (S = I.s4(L.Z.Messages, a(E.id))),
            0 === (_ = N).size
              ? S
              : S.map((E) => ({
                  ...E,
                  permissions: E.permissions.filter(
                    (E) => !_.has(E.flag.toString()),
                  ),
                }))
          );
        },
        getGuildPermissionSpecMap: function (E) {
          return I.WW(L.Z.Messages, a(E.id));
        },
      };
    },
    253923: function (E, S, _) {
      _.d(S, {
        FX: function () {
          return l;
        },
        Ny: function () {
          return t;
        },
        WV: function () {
          return T;
        },
        WW: function () {
          return O;
        },
        _u: function () {
          return r;
        },
        aW: function () {
          return M;
        },
        kv: function () {
          return s;
        },
        s4: function () {
          return A;
        },
        uu: function () {
          return n;
        },
        vq: function () {
          return e;
        },
        xU: function () {
          return i;
        },
        zO: function () {
          return P;
        },
      }),
        _(653041);
      var I = _(231338);
      function N(E) {
        let S = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return (
          !S &&
            (E.permissions = E.permissions.filter((E) => {
              let { isExperimental: S } = E;
              return !S;
            })),
          E
        );
      }
      function R(E, S) {
        return E.map((E) => S[E.toString()]);
      }
      function O(E, S) {
        return {
          [I.Pl.VIEW_CHANNEL.toString()]: {
            title: E.ROLE_PERMISSIONS_VIEW_CHANNEL,
            description: E.ROLE_PERMISSIONS_VIEW_CHANNEL_DESCRIPTION,
            flag: I.Pl.VIEW_CHANNEL,
          },
          [I.Pl.MANAGE_CHANNELS.toString()]: {
            title: E.MANAGE_CHANNELS,
            description: E.ROLE_PERMISSIONS_MANAGE_CHANNELS_DESCRIPTION,
            flag: I.Pl.MANAGE_CHANNELS,
          },
          [I.Pl.MANAGE_ROLES.toString()]: {
            title: E.MANAGE_ROLES,
            description: E.ROLE_PERMISSIONS_MANAGE_ROLES_DESCRIPTION,
            flag: I.Pl.MANAGE_ROLES,
          },
          [I.Pl.MANAGE_GUILD_EXPRESSIONS.toString()]: {
            title: E.MANAGE_EXPRESSIONS,
            description: E.ROLE_PERMISSIONS_MANAGE_EXPRESSIONS_DESCRIPTION,
            flag: I.Pl.MANAGE_GUILD_EXPRESSIONS,
          },
          [I.Pl.CREATE_GUILD_EXPRESSIONS.toString()]: {
            title: E.CREATE_EXPRESSIONS,
            description: E.ROLE_PERMISSIONS_CREATE_EXPRESSIONS_DESCRIPTION,
            flag: I.Pl.CREATE_GUILD_EXPRESSIONS,
          },
          [I.Pl.VIEW_AUDIT_LOG.toString()]: {
            title: E.VIEW_AUDIT_LOG,
            description: E.ROLE_PERMISSIONS_VIEW_AUDIT_LOG_DESCRIPTION,
            flag: I.Pl.VIEW_AUDIT_LOG,
          },
          [I.Pl.VIEW_GUILD_ANALYTICS.toString()]: {
            title: E.VIEW_GUILD_ANALYTICS,
            description: E.ROLE_PERMISSIONS_VIEW_GUILD_ANALYTICS_DESCRIPTION,
            flag: I.Pl.VIEW_GUILD_ANALYTICS,
          },
          [I.Pl.VIEW_CREATOR_MONETIZATION_ANALYTICS.toString()]: {
            title: E.VIEW_CREATOR_MONETIZATION_ANALYTICS,
            description:
              E.ROLE_PERMISSIONS_VIEW_CREATOR_MONETIZATION_ANALYTICS_DESCRIPTION,
            flag: I.Pl.VIEW_CREATOR_MONETIZATION_ANALYTICS,
          },
          [I.Pl.MANAGE_WEBHOOKS.toString()]: {
            title: E.MANAGE_WEBHOOKS,
            description: E.ROLE_PERMISSIONS_MANAGE_WEBHOOKS_DESCRIPTION,
            flag: I.Pl.MANAGE_WEBHOOKS,
          },
          [I.Pl.MANAGE_GUILD.toString()]: {
            title: E.MANAGE_SERVER,
            description: E.ROLE_PERMISSIONS_MANAGE_SERVER_DESCRIPTION,
            flag: I.Pl.MANAGE_GUILD,
          },
          [I.Pl.CREATE_INSTANT_INVITE.toString()]: {
            title: E.CREATE_INSTANT_INVITE,
            description: E.ROLE_PERMISSIONS_CREATE_INSTANT_INVITE_DESCRIPTION,
            flag: I.Pl.CREATE_INSTANT_INVITE,
          },
          [I.Pl.CHANGE_NICKNAME.toString()]: {
            title: E.CHANGE_NICKNAME,
            description: E.ROLE_PERMISSIONS_CHANGE_NICKNAME_DESCRIPTION,
            flag: I.Pl.CHANGE_NICKNAME,
          },
          [I.Pl.MANAGE_NICKNAMES.toString()]: {
            title: E.MANAGE_NICKNAMES,
            description: E.ROLE_PERMISSIONS_MANAGE_NICKNAMES_DESCRIPTION,
            flag: I.Pl.MANAGE_NICKNAMES,
          },
          [I.Pl.KICK_MEMBERS.toString()]: {
            title: S.showMembershipManualApprovalPermissions
              ? E.KICK_MEMBERS_AND_REVIEW_APPLICATIONS
              : E.KICK_MEMBERS,
            description: S.showMembershipManualApprovalPermissions
              ? E.ROLE_PERMISSIONS_KICK_MEMBERS_AND_REVIEW_APPLICATION_DESCRIPTION
              : E.ROLE_PERMISSIONS_KICK_MEMBERS_DESCRIPTION,
            flag: I.Pl.KICK_MEMBERS,
          },
          [I.Pl.BAN_MEMBERS.toString()]: {
            title: E.BAN_MEMBERS,
            description: E.ROLE_PERMISSIONS_BAN_MEMBERS_DESCRIPTION,
            flag: I.Pl.BAN_MEMBERS,
          },
          [I.Pl.MODERATE_MEMBERS.toString()]: {
            title: E.MODERATE_MEMBER,
            description: E.ROLE_PERMISSIONS_MODERATE_MEMBER_DESCRIPTION,
            flag: I.Pl.MODERATE_MEMBERS,
          },
          [I.Pl.SEND_MESSAGES.toString()]: {
            title: S.showForumPermissions
              ? E.SEND_MESSAGES_AND_CREATE_FORUM_POSTS
              : E.SEND_MESSAGES,
            description: S.showForumPermissions
              ? E.ROLE_PERMISSIONS_SEND_MESSAGES_WITH_FORUMS_DESCRIPTION
              : E.ROLE_PERMISSIONS_SEND_MESSAGES_DESCRIPTION,
            flag: I.Pl.SEND_MESSAGES,
          },
          [I.Pl.EMBED_LINKS.toString()]: {
            title: E.EMBED_LINKS,
            description: E.ROLE_PERMISSIONS_EMBED_LINKS_DESCRIPTION,
            flag: I.Pl.EMBED_LINKS,
          },
          [I.Pl.ATTACH_FILES.toString()]: {
            title: E.ATTACH_FILES,
            description: E.ROLE_PERMISSIONS_ATTACH_FILES_DESCRIPTION,
            flag: I.Pl.ATTACH_FILES,
          },
          [I.Pl.ADD_REACTIONS.toString()]: {
            title: E.ADD_REACTIONS,
            description: E.ROLE_PERMISSIONS_ADD_REACTIONS_DESCRIPTION,
            flag: I.Pl.ADD_REACTIONS,
          },
          [I.Pl.USE_EXTERNAL_EMOJIS.toString()]: {
            title: E.ROLE_PERMISSIONS_USE_EXTERNAL_EMOJIS,
            description: E.ROLE_PERMISSIONS_USE_EXTERNAL_EMOJIS_DESCRIPTION,
            flag: I.Pl.USE_EXTERNAL_EMOJIS,
          },
          [I.Pl.USE_EXTERNAL_STICKERS.toString()]: {
            title: E.ROLE_PERMISSIONS_USE_EXTERNAL_STICKERS,
            description: E.ROLE_PERMISSIONS_USE_EXTERNAL_STICKERS_DESCRIPTION,
            flag: I.Pl.USE_EXTERNAL_STICKERS,
          },
          [I.Pl.MENTION_EVERYONE.toString()]: {
            title: E.MENTION_EVERYONE,
            description: E.ROLE_PERMISSIONS_MENTION_EVERYONE_DESCRIPTION,
            flag: I.Pl.MENTION_EVERYONE,
          },
          [I.Pl.MANAGE_MESSAGES.toString()]: {
            title: E.MANAGE_MESSAGES,
            description: E.ROLE_PERMISSIONS_MANAGE_MESSAGES_DESCRIPTION,
            flag: I.Pl.MANAGE_MESSAGES,
          },
          [I.Pl.READ_MESSAGE_HISTORY.toString()]: {
            title: E.READ_MESSAGE_HISTORY,
            description: E.ROLE_PERMISSIONS_READ_MESSAGE_HISTORY_DESCRIPTION,
            flag: I.Pl.READ_MESSAGE_HISTORY,
          },
          [I.Pl.SEND_TTS_MESSAGES.toString()]: {
            title: E.ROLE_PERMISSIONS_SEND_TTS_MESSAGES,
            description: E.ROLE_PERMISSIONS_SEND_TTS_MESSAGES_DESCRIPTION,
            flag: I.Pl.SEND_TTS_MESSAGES,
          },
          [I.Pl.USE_APPLICATION_COMMANDS.toString()]: {
            title: E.ROLE_PERMISSIONS_USE_APPLICATION_COMMANDS,
            description:
              E.ROLE_PERMISSIONS_USE_APPLICATION_COMMANDS_GUILD_DESCRIPTION,
            flag: I.Pl.USE_APPLICATION_COMMANDS,
          },
          [I.Pl.USE_EXTERNAL_APPS.toString()]: {
            title: E.ROLE_PERMISSIONS_USE_EXTERNAL_APPS,
            description: S.externalAppsEnabled
              ? E.ROLE_PERMISSIONS_USE_EXTERNAL_APPS_GUILD_DESCRIPTION
              : ""
                  .concat(
                    E.ROLE_PERMISSIONS_USE_EXTERNAL_APPS_GUILD_DESCRIPTION,
                    " ",
                  )
                  .concat(
                    E.ROLE_PERMISSIONS_USE_EXTERNAL_APPS_GUILD_DESCRIPTION_NOT_ENABLED_YET,
                  ),
            flag: I.Pl.USE_EXTERNAL_APPS,
          },
          [I.Pl.SEND_VOICE_MESSAGES.toString()]: {
            title: E.ROLE_PERMISSIONS_SEND_VOICE_MESSAGE,
            description:
              E.ROLE_PERMISSIONS_SEND_VOICE_MESSAGE_GUILD_DESCRIPTION,
            flag: I.Pl.SEND_VOICE_MESSAGES,
          },
          [I.Pl.USE_CLYDE_AI.toString()]: {
            title: E.ROLE_PERMISSIONS_USE_CLYDE_AI,
            description: E.ROLE_PERMISSIONS_USE_CLYDE_AI_GUILD_DESCRIPTION,
            flag: I.Pl.USE_CLYDE_AI,
          },
          [I.Pl.SEND_POLLS.toString()]: {
            title: E.ROLE_PERMISSIONS_SEND_POLLS,
            description: E.ROLE_PERMISSIONS_SEND_POLLS_DESCRIPTION_GUILD,
            flag: I.Pl.SEND_POLLS,
          },
          [I.Pl.CONNECT.toString()]: {
            title: E.CONNECT,
            description: E.ROLE_PERMISSIONS_CONNECT_DESCRIPTION,
            flag: I.Pl.CONNECT,
          },
          [I.Pl.SPEAK.toString()]: {
            title: E.SPEAK,
            description: E.ROLE_PERMISSIONS_SPEAK_DESCRIPTION,
            flag: I.Pl.SPEAK,
          },
          [I.Pl.STREAM.toString()]: {
            title: E.VIDEO,
            description: E.ROLE_PERMISSIONS_STREAM_DESCRIPTION,
            flag: I.Pl.STREAM,
          },
          [I.Pl.USE_EMBEDDED_ACTIVITIES.toString()]: {
            title: E.USE_EMBEDDED_ACTIVITIES,
            description: E.ROLE_PERMISSIONS_USE_EMBEDDED_ACTIVITIES_DESCRIPTION,
            flag: I.Pl.USE_EMBEDDED_ACTIVITIES,
          },
          [I.Pl.USE_SOUNDBOARD.toString()]: {
            title: E.USE_SOUNDBOARD,
            description:
              (null == S ? void 0 : S.SOUNDBOARD_DESCRIPTION) ||
              E.ROLE_PERMISSIONS_USE_SOUNDBOARD_DESCRIPTION,
            flag: I.Pl.USE_SOUNDBOARD,
          },
          [I.Pl.USE_EXTERNAL_SOUNDS.toString()]: {
            title: E.USE_EXTERNAL_SOUNDS,
            description: E.ROLE_PERMISSIONS_USE_EXTERNAL_SOUNDS_DESCRIPTION,
            flag: I.Pl.USE_EXTERNAL_SOUNDS,
          },
          [I.Pl.USE_VAD.toString()]: {
            title: E.USE_VAD,
            description: E.ROLE_PERMISSIONS_USE_VAD_DESCRIPTION,
            flag: I.Pl.USE_VAD,
          },
          [I.Pl.PRIORITY_SPEAKER.toString()]: {
            title: E.PRIORITY_SPEAKER,
            description:
              (null == S ? void 0 : S.PRIORITY_SPEAKER_DESCRIPTION) ||
              E.ROLE_PERMISSIONS_PRIORITY_SPEAKER_DESCRIPTION,
            flag: I.Pl.PRIORITY_SPEAKER,
          },
          [I.Pl.MUTE_MEMBERS.toString()]: {
            title: E.MUTE_MEMBERS,
            description: E.ROLE_PERMISSIONS_MUTE_MEMBERS_DESCRIPTION,
            flag: I.Pl.MUTE_MEMBERS,
          },
          [I.Pl.DEAFEN_MEMBERS.toString()]: {
            title: E.DEAFEN_MEMBERS,
            description: E.ROLE_PERMISSIONS_DEAFEN_MEMBERS_DESCRIPTION,
            flag: I.Pl.DEAFEN_MEMBERS,
          },
          [I.Pl.MOVE_MEMBERS.toString()]: {
            title: E.MOVE_MEMBERS,
            description: E.ROLE_PERMISSIONS_MOVE_MEMBERS_DESCRIPTION,
            flag: I.Pl.MOVE_MEMBERS,
          },
          [I.Pl.REQUEST_TO_SPEAK.toString()]: {
            title: E.REQUEST_TO_SPEAK,
            description: E.ROLE_PERMISSIONS_REQUEST_TO_SPEAK_DESCRIPTION,
            flag: I.Pl.REQUEST_TO_SPEAK,
            isExperimental: !0,
          },
          [I.Pl.ADMINISTRATOR.toString()]: {
            title: E.ADMINISTRATOR,
            description:
              "string" == typeof E.ROLE_PERMISSIONS_ADMINISTRATOR_DESCRIPTION
                ? E.ROLE_PERMISSIONS_ADMINISTRATOR_DESCRIPTION
                : E.ROLE_PERMISSIONS_ADMINISTRATOR_DESCRIPTION.format(),
            flag: I.Pl.ADMINISTRATOR,
          },
          [I.Pl.MANAGE_EVENTS.toString()]: {
            title: E.MANAGE_EVENTS,
            description: E.ROLE_PERMISSIONS_MANAGE_EVENTS_DESCRIPTION,
            flag: I.Pl.MANAGE_EVENTS,
          },
          [I.Pl.CREATE_EVENTS.toString()]: {
            title: E.CREATE_EVENTS,
            description: E.ROLE_PERMISSIONS_CREATE_EVENTS_DESCRIPTION,
            flag: I.Pl.CREATE_EVENTS,
          },
          [I.Pl.MANAGE_THREADS.toString()]: {
            title: S.showForumPermissions
              ? E.MANAGE_THREADS_AND_FORUM_POSTS
              : E.MANAGE_THREADS,
            description: S.showForumPermissions
              ? E.ROLE_PERMISSIONS_MANAGE_THREADS_AND_FORUMS_DESCRIPTION
              : E.ROLE_PERMISSIONS_MANAGE_THREADS_DESCRIPTION,
            flag: I.Pl.MANAGE_THREADS,
          },
          [I.Pl.CREATE_PUBLIC_THREADS.toString()]: {
            title: E.CREATE_PUBLIC_THREADS,
            description: E.ROLE_PERMISSIONS_CREATE_PUBLIC_THREADS_DESCRIPTION,
            flag: I.Pl.CREATE_PUBLIC_THREADS,
          },
          [I.Pl.CREATE_PRIVATE_THREADS.toString()]: {
            title: E.CREATE_PRIVATE_THREADS,
            description: E.ROLE_PERMISSIONS_CREATE_PRIVATE_THREADS_DESCRIPTION,
            flag: I.Pl.CREATE_PRIVATE_THREADS,
          },
          [I.Pl.SEND_MESSAGES_IN_THREADS.toString()]: {
            title: S.showForumPermissions
              ? E.SEND_MESSAGES_IN_THREADS_AND_FORUM_POSTS
              : E.SEND_MESSAGES_IN_THREADS,
            description: S.showForumPermissions
              ? E.ROLE_PERMISSIONS_SEND_MESSAGES_IN_THREADS_AND_FORUM_POSTS_DESCRIPTION
              : E.ROLE_PERMISSIONS_SEND_MESSAGES_IN_THREADS_DESCRIPTION,
            flag: I.Pl.SEND_MESSAGES_IN_THREADS,
          },
          [I.Pl.USE_CLYDE_AI.toString()]: {
            title: E.ROLE_PERMISSIONS_USE_CLYDE_AI,
            description: E.ROLE_PERMISSIONS_USE_CLYDE_AI_GUILD_DESCRIPTION,
            flag: I.Pl.USE_CLYDE_AI,
          },
          [I.Pl.SET_VOICE_CHANNEL_STATUS.toString()]: {
            title: E.VOICE_CHANNEL_STATUS_PERMISSION_TITLE,
            description: E.VOICE_CHANNEL_STATUS_PERMISSION_DESCRIPTION,
            flag: I.Pl.SET_VOICE_CHANNEL_STATUS,
          },
        };
      }
      function A(E, S) {
        var _, A, P, t, e, T, M, i, l, s;
        let n,
          r = O(E, S);
        let C = [
          (function (E, S, _) {
            let O = [
              I.Pl.VIEW_CHANNEL,
              I.Pl.MANAGE_CHANNELS,
              I.Pl.MANAGE_ROLES,
              I.Pl.CREATE_GUILD_EXPRESSIONS,
              I.Pl.MANAGE_GUILD_EXPRESSIONS,
              I.Pl.VIEW_AUDIT_LOG,
              I.Pl.VIEW_GUILD_ANALYTICS,
            ];
            return (
              _.showCreatorMonetizationAnalyticsPermission &&
                O.push(I.Pl.VIEW_CREATOR_MONETIZATION_ANALYTICS),
              O.push(I.Pl.MANAGE_WEBHOOKS),
              O.push(I.Pl.MANAGE_GUILD),
              N({
                title: S.ROLE_PERMISSIONS_SECTION_GENERAL_GUILD,
                permissions: R(O, E),
              })
            );
          })(r, E, S),
          (function (E, S) {
            let _ = [
              I.Pl.CREATE_INSTANT_INVITE,
              I.Pl.CHANGE_NICKNAME,
              I.Pl.MANAGE_NICKNAMES,
              I.Pl.KICK_MEMBERS,
              I.Pl.BAN_MEMBERS,
              I.Pl.MODERATE_MEMBERS,
            ];
            return N({
              title: S.ROLE_PERMISSIONS_SECTION_MEMBERSHIP,
              permissions: R(_, E),
            });
          })(r, E),
          ((_ = r),
          (A = E),
          (P = S),
          (n = [
            I.Pl.SEND_MESSAGES,
            I.Pl.SEND_MESSAGES_IN_THREADS,
            I.Pl.CREATE_PUBLIC_THREADS,
            I.Pl.CREATE_PRIVATE_THREADS,
            I.Pl.EMBED_LINKS,
            I.Pl.ATTACH_FILES,
            I.Pl.ADD_REACTIONS,
            I.Pl.USE_EXTERNAL_EMOJIS,
            I.Pl.USE_EXTERNAL_STICKERS,
            I.Pl.MENTION_EVERYONE,
            I.Pl.MANAGE_MESSAGES,
            I.Pl.MANAGE_THREADS,
            I.Pl.READ_MESSAGE_HISTORY,
            I.Pl.SEND_TTS_MESSAGES,
            I.Pl.SEND_VOICE_MESSAGES,
            I.Pl.USE_CLYDE_AI,
            I.Pl.SEND_POLLS,
          ]),
          !P.showClydeAIPermissions &&
            (n = n.filter((E) => E !== I.Pl.USE_CLYDE_AI)),
          N({ title: A.ROLE_PERMISSIONS_SECTION_TEXT, permissions: R(n, _) })),
          (function (E, S, _) {
            let O = [
              I.Pl.CONNECT,
              I.Pl.SPEAK,
              I.Pl.STREAM,
              I.Pl.USE_SOUNDBOARD,
              I.Pl.USE_EXTERNAL_SOUNDS,
              I.Pl.USE_VAD,
              I.Pl.PRIORITY_SPEAKER,
              I.Pl.MUTE_MEMBERS,
              I.Pl.DEAFEN_MEMBERS,
              I.Pl.MOVE_MEMBERS,
              I.Pl.SET_VOICE_CHANNEL_STATUS,
            ];
            return N({
              title: S.ROLE_PERMISSIONS_SECTION_VOICE,
              permissions: R(O, E),
            });
          })(r, E, 0),
          (function (E, S) {
            let _ = [
              I.Pl.USE_APPLICATION_COMMANDS,
              I.Pl.USE_EMBEDDED_ACTIVITIES,
              I.Pl.USE_EXTERNAL_APPS,
            ];
            return N({
              title: S.ROLE_PERMISSIONS_SECTION_APPS,
              permissions: R(_, E),
            });
          })(r, E),
        ];
        if (S.showStageChannelPermissions) {
          C.push(
            ((t = r),
            (e = E),
            (T = S),
            N(
              {
                title: e.ROLE_PERMISSIONS_SECTION_STAGE,
                permissions: R([I.Pl.REQUEST_TO_SPEAK], t),
              },
              T.showExperimental,
            )),
          );
        }
        return (
          C.push(
            ((M = r),
            (i = E),
            (l = S),
            N(
              {
                title: i.ROLE_PERMISSIONS_SECTION_GUILD_EVENTS,
                permissions: R([I.Pl.CREATE_EVENTS, I.Pl.MANAGE_EVENTS], M),
              },
              l.showExperimental,
            )),
          ),
          C.push(
            ((s = r),
            N({
              title: E.ROLE_PERMISSIONS_SECTION_ADVANCED,
              permissions: R([I.Pl.ADMINISTRATOR], s),
            })),
          ),
          C
        );
      }
      function P(E, S) {
        let _ =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : { showManageWebhooks: !0 };
        return {
          title: S,
          permissions: R(
            (null == _ ? void 0 : _.showManageWebhooks)
              ? [
                  I.Pl.VIEW_CHANNEL,
                  I.Pl.MANAGE_CHANNELS,
                  I.Pl.MANAGE_ROLES,
                  I.Pl.MANAGE_WEBHOOKS,
                ]
              : [I.Pl.VIEW_CHANNEL, I.Pl.MANAGE_CHANNELS, I.Pl.MANAGE_ROLES],
            E,
          ),
        };
      }
      function t(E, S) {
        return { title: S, permissions: R([I.Pl.CREATE_INSTANT_INVITE], E) };
      }
      function e(E, S, _) {
        let N = [
          I.Pl.SEND_MESSAGES,
          I.Pl.SEND_MESSAGES_IN_THREADS,
          I.Pl.CREATE_PUBLIC_THREADS,
          I.Pl.CREATE_PRIVATE_THREADS,
          I.Pl.EMBED_LINKS,
          I.Pl.ATTACH_FILES,
          I.Pl.ADD_REACTIONS,
          I.Pl.USE_EXTERNAL_EMOJIS,
          I.Pl.USE_EXTERNAL_STICKERS,
          I.Pl.MENTION_EVERYONE,
          I.Pl.MANAGE_MESSAGES,
          I.Pl.MANAGE_THREADS,
          I.Pl.READ_MESSAGE_HISTORY,
          I.Pl.SEND_TTS_MESSAGES,
          I.Pl.SEND_VOICE_MESSAGES,
          I.Pl.USE_CLYDE_AI,
          I.Pl.SEND_POLLS,
        ];
        return (
          (!_.showPrivateThreads || !_.showCreateThreads) &&
            (N = N.filter((E) => E !== I.Pl.CREATE_PRIVATE_THREADS)),
          !_.showCreateThreads &&
            (N = N.filter((E) => E !== I.Pl.CREATE_PUBLIC_THREADS)),
          !_.showClydeAIPermissions &&
            (N = N.filter((E) => E !== I.Pl.USE_CLYDE_AI)),
          { title: S, description: _.sectionDescription, permissions: R(N, E) }
        );
      }
      function T(E, S) {
        return {
          title: S,
          permissions: R(
            [
              I.Pl.CONNECT,
              I.Pl.SPEAK,
              I.Pl.STREAM,
              I.Pl.USE_SOUNDBOARD,
              I.Pl.USE_EXTERNAL_SOUNDS,
              I.Pl.USE_VAD,
              I.Pl.PRIORITY_SPEAKER,
              I.Pl.MUTE_MEMBERS,
              I.Pl.DEAFEN_MEMBERS,
              I.Pl.MOVE_MEMBERS,
              I.Pl.SET_VOICE_CHANNEL_STATUS,
            ],
            E,
          ),
        };
      }
      function M(E, S, _) {
        let N = [
          I.Pl.SEND_MESSAGES,
          I.Pl.EMBED_LINKS,
          I.Pl.ATTACH_FILES,
          I.Pl.ADD_REACTIONS,
          I.Pl.USE_EXTERNAL_EMOJIS,
          I.Pl.USE_EXTERNAL_STICKERS,
          I.Pl.MENTION_EVERYONE,
          I.Pl.MANAGE_MESSAGES,
          I.Pl.READ_MESSAGE_HISTORY,
          I.Pl.SEND_TTS_MESSAGES,
          I.Pl.USE_APPLICATION_COMMANDS,
          I.Pl.SEND_VOICE_MESSAGES,
          I.Pl.SEND_POLLS,
        ];
        return {
          title: S,
          description: _.sectionDescription,
          permissions: R(N, E),
        };
      }
      function i(E, S) {
        return {
          title: S,
          permissions: R(
            [
              I.Pl.USE_APPLICATION_COMMANDS,
              I.Pl.USE_EMBEDDED_ACTIVITIES,
              I.Pl.USE_EXTERNAL_APPS,
            ],
            E,
          ),
        };
      }
      function l(E, S, _) {
        return {
          title: S,
          permissions: R(
            _
              ? [
                  I.Pl.CONNECT,
                  I.Pl.STREAM,
                  I.Pl.MUTE_MEMBERS,
                  I.Pl.MOVE_MEMBERS,
                ]
              : [I.Pl.CONNECT, I.Pl.MUTE_MEMBERS, I.Pl.MOVE_MEMBERS],
            E,
          ),
        };
      }
      function s(E, S) {
        return {
          title: S,
          permissions: R([I.Pl.REQUEST_TO_SPEAK, I.Pl.MENTION_EVERYONE], E),
        };
      }
      function n(E, S) {
        return {
          title: S,
          permissions: R([I.Pl.CREATE_EVENTS, I.Pl.MANAGE_EVENTS], E),
        };
      }
      function r(E) {
        return null == E
          ? E
          : "string" == typeof E
            ? E.trim()
            : "function" == typeof E.format
              ? E.format()
              : E;
      }
    },
  },
]);
//# sourceMappingURL=5fefaabaeeddb0edf476.js.map
