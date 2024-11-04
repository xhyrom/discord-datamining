"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["64679"],
  {
    346486: function (t, i, n) {
      n(47120);
      var E,
        l = n(200651),
        r = n(192379),
        S = n(392711),
        e = n.n(S),
        s = n(55935),
        A = n(388032);
      function o(t, i, n) {
        return (
          i in t
            ? Object.defineProperty(t, i, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[i] = n),
          t
        );
      }
      let _ = () => [
        A.intl.string(A.t["6m/6nJ"]),
        A.intl.string(A.t.n7dksL),
        A.intl.string(A.t["1LyF1t"]),
        A.intl.string(A.t.QJyuxc),
      ];
      class P extends (E = r.PureComponent) {
        componentDidMount() {
          let { intervalDuration: t, onInterval: i } = this.props;
          this._interval = setInterval(() => {
            this.forceUpdate(), null == i || i();
          }, t);
        }
        componentWillUnmount() {
          null != this._interval && clearInterval(this._interval);
        }
        defaultRender(t) {
          let { showDays: i, showUnits: n, className: E } = this.props,
            r = [t.days, t.hours, t.minutes, t.seconds],
            S = _();
          if (0 === t.days) r.shift();
          else if (!i) {
            let t = r.shift();
            r[0] += 24 * t;
          }
          let s = e()(r)
            .map((t) => (t < 10 ? "0".concat(t) : t))
            .map((t, i) => [
              i > 0 && !n ? ":" : " ",
              (0, l.jsxs)(
                "span",
                { children: [t, n ? S[r.length - i - 1] : null] },
                i,
              ),
            ])
            .flatten()
            .value();
          return (0, l.jsx)("span", { className: E, children: s });
        }
        render() {
          let {
            deadline: t,
            children: i,
            className: n,
            stopAtOneSec: E,
          } = this.props;
          if (t === 1 / 0)
            return (0, l.jsx)("span", {
              className: n,
              "aria-label": A.intl.string(A.t.PqEzn5),
              children: "∞",
            });
          let r = (0, s.TD)(Date.now(), t, E);
          return null != i
            ? i(r, this.defaultRender.bind(this, r))
            : this.defaultRender(r);
        }
        constructor(...t) {
          super(...t), o(this, "_interval", void 0);
        }
      }
      o(P, "defaultProps", {
        showDays: !0,
        showUnits: !1,
        stopAtOneSec: !1,
        intervalDuration: 1e3,
      }),
        (i.Z = P);
    },
    208884: function (t, i, n) {
      n.d(i, {
        FX: function () {
          return g;
        },
        Ny: function () {
          return o;
        },
        WV: function () {
          return P;
        },
        WW: function () {
          return e;
        },
        _u: function () {
          return a;
        },
        aW: function () {
          return N;
        },
        kv: function () {
          return I;
        },
        s4: function () {
          return s;
        },
        uu: function () {
          return M;
        },
        vq: function () {
          return _;
        },
        xU: function () {
          return T;
        },
        zO: function () {
          return A;
        },
      }),
        n(653041);
      var E = n(231338),
        l = n(388032);
      function r(t) {
        let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return (
          !i &&
            (t.permissions = t.permissions.filter((t) => {
              let { isExperimental: i } = t;
              return !i;
            })),
          t
        );
      }
      function S(t, i) {
        return t.map((t) => i[t.toString()]);
      }
      function e(t) {
        var i, n;
        return {
          [E.Pl.VIEW_CHANNEL.toString()]: {
            title: l.intl.string(l.t.uV83ys),
            description: l.t.ybTHLi,
            flag: E.Pl.VIEW_CHANNEL,
          },
          [E.Pl.MANAGE_CHANNELS.toString()]: {
            title: l.intl.string(l.t["9qLtWl"]),
            description: l.t.qfJnur,
            flag: E.Pl.MANAGE_CHANNELS,
          },
          [E.Pl.MANAGE_ROLES.toString()]: {
            title: l.intl.string(l.t["C8d+oK"]),
            description: l.t.buo9u7,
            flag: E.Pl.MANAGE_ROLES,
          },
          [E.Pl.MANAGE_GUILD_EXPRESSIONS.toString()]: {
            title: l.intl.string(l.t.bbuXIi),
            description: l.t["4vb3//"],
            flag: E.Pl.MANAGE_GUILD_EXPRESSIONS,
          },
          [E.Pl.CREATE_GUILD_EXPRESSIONS.toString()]: {
            title: l.intl.string(l.t.HarVuL),
            description: l.t.gkdHvL,
            flag: E.Pl.CREATE_GUILD_EXPRESSIONS,
          },
          [E.Pl.VIEW_AUDIT_LOG.toString()]: {
            title: l.intl.string(l.t.fZgLpK),
            description: l.t["0hx75u"],
            flag: E.Pl.VIEW_AUDIT_LOG,
          },
          [E.Pl.VIEW_GUILD_ANALYTICS.toString()]: {
            title: l.intl.string(l.t.rQJBEx),
            description: l.t.whVKhY,
            flag: E.Pl.VIEW_GUILD_ANALYTICS,
          },
          [E.Pl.VIEW_CREATOR_MONETIZATION_ANALYTICS.toString()]: {
            title: l.intl.string(l.t["0lTLTk"]),
            description: l.t.mut6NT,
            flag: E.Pl.VIEW_CREATOR_MONETIZATION_ANALYTICS,
          },
          [E.Pl.MANAGE_WEBHOOKS.toString()]: {
            title: l.intl.string(l.t["/ADKmJ"]),
            description: l.t.LczYqK,
            flag: E.Pl.MANAGE_WEBHOOKS,
          },
          [E.Pl.MANAGE_GUILD.toString()]: {
            title: l.intl.string(l.t.QZRcfH),
            description: l.t["KoQe/P"],
            flag: E.Pl.MANAGE_GUILD,
          },
          [E.Pl.CREATE_INSTANT_INVITE.toString()]: {
            title: l.intl.string(l.t.zJrgTE),
            description: l.t.PCFOZW,
            flag: E.Pl.CREATE_INSTANT_INVITE,
          },
          [E.Pl.CHANGE_NICKNAME.toString()]: {
            title: l.intl.string(l.t.dilOFx),
            description: l.t["b8B++v"],
            flag: E.Pl.CHANGE_NICKNAME,
          },
          [E.Pl.MANAGE_NICKNAMES.toString()]: {
            title: l.intl.string(l.t["t+Ct5+"]),
            description: l.t.hTnlMT,
            flag: E.Pl.MANAGE_NICKNAMES,
          },
          [E.Pl.KICK_MEMBERS.toString()]: {
            title: t.showMembershipManualApprovalPermissions
              ? l.intl.string(l.t["9TxXwc"])
              : l.intl.string(l.t.pBNv6u),
            description: t.showMembershipManualApprovalPermissions
              ? l.t.hGBAn5
              : l.t.rwdPaG,
            flag: E.Pl.KICK_MEMBERS,
          },
          [E.Pl.BAN_MEMBERS.toString()]: {
            title: l.intl.string(l.t.oTBA7O),
            description: l.t.OqNY09,
            flag: E.Pl.BAN_MEMBERS,
          },
          [E.Pl.MODERATE_MEMBERS.toString()]: {
            title: l.intl.string(l.t["+RL6p6"]),
            description: l.t.T6bZsb,
            flag: E.Pl.MODERATE_MEMBERS,
          },
          [E.Pl.SEND_MESSAGES.toString()]: {
            title: t.showForumPermissions
              ? l.intl.string(l.t.S1VOwc)
              : l.intl.string(l.t.T32rkJ),
            description: t.showForumPermissions ? l.t.prvWKi : l.t.qry4PT,
            flag: E.Pl.SEND_MESSAGES,
          },
          [E.Pl.EMBED_LINKS.toString()]: {
            title: l.intl.string(l.t["969dEB"]),
            description: l.t.ChoIi4,
            flag: E.Pl.EMBED_LINKS,
          },
          [E.Pl.ATTACH_FILES.toString()]: {
            title: l.intl.string(l.t["3AS4UF"]),
            description: l.t["/87mYG"],
            flag: E.Pl.ATTACH_FILES,
          },
          [E.Pl.ADD_REACTIONS.toString()]: {
            title: l.intl.string(l.t.yEoJAg),
            description: l.t.FEYwX1,
            flag: E.Pl.ADD_REACTIONS,
          },
          [E.Pl.USE_EXTERNAL_EMOJIS.toString()]: {
            title: l.intl.string(l.t["+bxf3N"]),
            description: l.t.POeVIi,
            flag: E.Pl.USE_EXTERNAL_EMOJIS,
          },
          [E.Pl.USE_EXTERNAL_STICKERS.toString()]: {
            title: l.intl.string(l.t.ERNhYW),
            description: l.t.AdXVhI,
            flag: E.Pl.USE_EXTERNAL_STICKERS,
          },
          [E.Pl.MENTION_EVERYONE.toString()]: {
            title: l.intl.string(l.t.Y78KGB),
            description: l.t.ryj6Nz,
            flag: E.Pl.MENTION_EVERYONE,
          },
          [E.Pl.MANAGE_MESSAGES.toString()]: {
            title: l.intl.string(l.t["6lU9xM"]),
            description: l.t["RXMG//"],
            flag: E.Pl.MANAGE_MESSAGES,
          },
          [E.Pl.READ_MESSAGE_HISTORY.toString()]: {
            title: l.intl.string(l.t.l9ufaW),
            description: l.t.rmHPFR,
            flag: E.Pl.READ_MESSAGE_HISTORY,
          },
          [E.Pl.SEND_TTS_MESSAGES.toString()]: {
            title: l.intl.string(l.t.mMbwh4),
            description: l.t.D6x8Nj,
            flag: E.Pl.SEND_TTS_MESSAGES,
          },
          [E.Pl.USE_APPLICATION_COMMANDS.toString()]: {
            title: l.intl.string(l.t.nkoPOj),
            description: l.t.pJrJ39,
            flag: E.Pl.USE_APPLICATION_COMMANDS,
          },
          [E.Pl.USE_EXTERNAL_APPS.toString()]: {
            title: l.intl.string(l.t.TtA5rK),
            description: t.externalAppsEnabled
              ? l.t.mzLoDQ
              : ""
                  .concat(l.intl.string(l.t.mzLoDQ), " ")
                  .concat(l.intl.string(l.t["5qxqGh"])),
            flag: E.Pl.USE_EXTERNAL_APPS,
          },
          [E.Pl.SEND_VOICE_MESSAGES.toString()]: {
            title: l.intl.string(l.t.WlWSBQ),
            description: l.t.pDuyi4,
            flag: E.Pl.SEND_VOICE_MESSAGES,
          },
          [E.Pl.USE_CLYDE_AI.toString()]: {
            title: l.intl.string(l.t["8eeEZm"]),
            description: l.t.Tx5TjI,
            flag: E.Pl.USE_CLYDE_AI,
          },
          [E.Pl.SEND_POLLS.toString()]: {
            title: l.intl.string(l.t.UMQ7W1),
            description: l.t["Xl6W+P"],
            flag: E.Pl.SEND_POLLS,
          },
          [E.Pl.CONNECT.toString()]: {
            title: l.intl.string(l.t.S0W8Z2),
            description: l.t["3GCm/f"],
            flag: E.Pl.CONNECT,
          },
          [E.Pl.SPEAK.toString()]: {
            title: l.intl.string(l.t["8w1tIS"]),
            description: l.t.y4MncH,
            flag: E.Pl.SPEAK,
          },
          [E.Pl.STREAM.toString()]: {
            title: l.intl.string(l.t.FlNoSU),
            description: l.t["6Z0j9v"],
            flag: E.Pl.STREAM,
          },
          [E.Pl.USE_EMBEDDED_ACTIVITIES.toString()]: {
            title: l.intl.string(l.t.rLSGen),
            description: l.t.BEqU5O,
            flag: E.Pl.USE_EMBEDDED_ACTIVITIES,
          },
          [E.Pl.USE_SOUNDBOARD.toString()]: {
            title: l.intl.string(l.t.Bco7ND),
            description:
              null !== (i = null == t ? void 0 : t.SOUNDBOARD_DESCRIPTION) &&
              void 0 !== i
                ? i
                : l.t["+8p+fX"],
            flag: E.Pl.USE_SOUNDBOARD,
          },
          [E.Pl.USE_EXTERNAL_SOUNDS.toString()]: {
            title: l.intl.string(l.t.pwaVJy),
            description: l.t.qDpPtb,
            flag: E.Pl.USE_EXTERNAL_SOUNDS,
          },
          [E.Pl.USE_VAD.toString()]: {
            title: l.intl.string(l.t["08zAV1"]),
            description: l.t["7CHjmZ"],
            flag: E.Pl.USE_VAD,
          },
          [E.Pl.PRIORITY_SPEAKER.toString()]: {
            title: l.intl.string(l.t.BVK71t),
            description:
              null !==
                (n = null == t ? void 0 : t.PRIORITY_SPEAKER_DESCRIPTION) &&
              void 0 !== n
                ? n
                : l.t.OJkrrq,
            flag: E.Pl.PRIORITY_SPEAKER,
          },
          [E.Pl.MUTE_MEMBERS.toString()]: {
            title: l.intl.string(l.t["8EI309"]),
            description: l.t.PIhGAw,
            flag: E.Pl.MUTE_MEMBERS,
          },
          [E.Pl.DEAFEN_MEMBERS.toString()]: {
            title: l.intl.string(l.t["9L47Fh"]),
            description: l.t["FQr3+v"],
            flag: E.Pl.DEAFEN_MEMBERS,
          },
          [E.Pl.MOVE_MEMBERS.toString()]: {
            title: l.intl.string(l.t.YtjJPT),
            description: l.t.SEe0Gh,
            flag: E.Pl.MOVE_MEMBERS,
          },
          [E.Pl.REQUEST_TO_SPEAK.toString()]: {
            title: l.intl.string(l.t["5kicT0"]),
            description: l.t["yNE+Q0"],
            flag: E.Pl.REQUEST_TO_SPEAK,
            isExperimental: !0,
          },
          [E.Pl.ADMINISTRATOR.toString()]: {
            title: l.intl.string(l.t.PGvZqa),
            description:
              "string" == typeof l.t.UJxMrK
                ? l.t.UJxMrK
                : l.intl.format(l.t.UJxMrK, {}),
            flag: E.Pl.ADMINISTRATOR,
          },
          [E.Pl.MANAGE_EVENTS.toString()]: {
            title: l.intl.string(l.t.HIgA5e),
            description: l.t["SL+qgI"],
            flag: E.Pl.MANAGE_EVENTS,
          },
          [E.Pl.CREATE_EVENTS.toString()]: {
            title: l.intl.string(l.t.qyjZub),
            description: l.t.bQEFJS,
            flag: E.Pl.CREATE_EVENTS,
          },
          [E.Pl.MANAGE_THREADS.toString()]: {
            title: t.showForumPermissions
              ? l.intl.string(l.t.QKe7Q0)
              : l.intl.string(l.t.kEqgr6),
            description: t.showForumPermissions ? l.t.QAxIIi : l.t.AKdc4O,
            flag: E.Pl.MANAGE_THREADS,
          },
          [E.Pl.CREATE_PUBLIC_THREADS.toString()]: {
            title: l.intl.string(l.t["25rKnZ"]),
            description: l.t.ODCYj4,
            flag: E.Pl.CREATE_PUBLIC_THREADS,
          },
          [E.Pl.CREATE_PRIVATE_THREADS.toString()]: {
            title: l.intl.string(l.t.QwbTSU),
            description: l.t["G/cc3t"],
            flag: E.Pl.CREATE_PRIVATE_THREADS,
          },
          [E.Pl.SEND_MESSAGES_IN_THREADS.toString()]: {
            title: t.showForumPermissions
              ? l.intl.string(l.t["5QlVGx"])
              : l.intl.string(l.t.fTE74u),
            description: t.showForumPermissions ? l.t.C2ZPEx : l.t["6pyXvr"],
            flag: E.Pl.SEND_MESSAGES_IN_THREADS,
          },
          [E.Pl.USE_CLYDE_AI.toString()]: {
            title: l.intl.string(l.t["8eeEZm"]),
            description: l.t.Tx5TjI,
            flag: E.Pl.USE_CLYDE_AI,
          },
          [E.Pl.SET_VOICE_CHANNEL_STATUS.toString()]: {
            title: l.intl.string(l.t.VBwkUV),
            description: l.t.C6BzX1,
            flag: E.Pl.SET_VOICE_CHANNEL_STATUS,
          },
        };
      }
      function s(t) {
        var i, n, s, A, o, _, P;
        let N,
          T = e(t);
        let g = [
          (function (t, i) {
            let n = [
              E.Pl.VIEW_CHANNEL,
              E.Pl.MANAGE_CHANNELS,
              E.Pl.MANAGE_ROLES,
              E.Pl.CREATE_GUILD_EXPRESSIONS,
              E.Pl.MANAGE_GUILD_EXPRESSIONS,
              E.Pl.VIEW_AUDIT_LOG,
              E.Pl.VIEW_GUILD_ANALYTICS,
            ];
            return (
              i.showCreatorMonetizationAnalyticsPermission &&
                n.push(E.Pl.VIEW_CREATOR_MONETIZATION_ANALYTICS),
              n.push(E.Pl.MANAGE_WEBHOOKS),
              n.push(E.Pl.MANAGE_GUILD),
              r({ title: l.intl.string(l.t["mYck+P"]), permissions: S(n, t) })
            );
          })(T, t),
          (function (t) {
            let i = [
              E.Pl.CREATE_INSTANT_INVITE,
              E.Pl.CHANGE_NICKNAME,
              E.Pl.MANAGE_NICKNAMES,
              E.Pl.KICK_MEMBERS,
              E.Pl.BAN_MEMBERS,
              E.Pl.MODERATE_MEMBERS,
            ];
            return r({
              title: l.intl.string(l.t.Ny49TE),
              permissions: S(i, t),
            });
          })(T),
          ((i = T),
          (n = t),
          (N = [
            E.Pl.SEND_MESSAGES,
            E.Pl.SEND_MESSAGES_IN_THREADS,
            E.Pl.CREATE_PUBLIC_THREADS,
            E.Pl.CREATE_PRIVATE_THREADS,
            E.Pl.EMBED_LINKS,
            E.Pl.ATTACH_FILES,
            E.Pl.ADD_REACTIONS,
            E.Pl.USE_EXTERNAL_EMOJIS,
            E.Pl.USE_EXTERNAL_STICKERS,
            E.Pl.MENTION_EVERYONE,
            E.Pl.MANAGE_MESSAGES,
            E.Pl.MANAGE_THREADS,
            E.Pl.READ_MESSAGE_HISTORY,
            E.Pl.SEND_TTS_MESSAGES,
            E.Pl.SEND_VOICE_MESSAGES,
            E.Pl.USE_CLYDE_AI,
            E.Pl.SEND_POLLS,
          ]),
          !n.showClydeAIPermissions &&
            (N = N.filter((t) => t !== E.Pl.USE_CLYDE_AI)),
          r({ title: l.intl.string(l.t.cKobOz), permissions: S(N, i) })),
          (function (t, i) {
            let n = [
              E.Pl.CONNECT,
              E.Pl.SPEAK,
              E.Pl.STREAM,
              E.Pl.USE_SOUNDBOARD,
              E.Pl.USE_EXTERNAL_SOUNDS,
              E.Pl.USE_VAD,
              E.Pl.PRIORITY_SPEAKER,
              E.Pl.MUTE_MEMBERS,
              E.Pl.DEAFEN_MEMBERS,
              E.Pl.MOVE_MEMBERS,
              E.Pl.SET_VOICE_CHANNEL_STATUS,
            ];
            return r({
              title: l.intl.string(l.t["46Ra1d"]),
              permissions: S(n, t),
            });
          })(T, 0),
          (function (t) {
            let i = [
              E.Pl.USE_APPLICATION_COMMANDS,
              E.Pl.USE_EMBEDDED_ACTIVITIES,
              E.Pl.USE_EXTERNAL_APPS,
            ];
            return r({
              title: l.intl.string(l.t["rrh/W1"]),
              permissions: S(i, t),
            });
          })(T),
        ];
        if (t.showStageChannelPermissions) {
          g.push(
            ((s = T),
            (A = t),
            r(
              {
                title: l.intl.string(l.t.yniaur),
                permissions: S([E.Pl.REQUEST_TO_SPEAK], s),
              },
              A.showExperimental,
            )),
          );
        }
        return (
          g.push(
            ((o = T),
            (_ = t),
            r(
              {
                title: l.intl.string(l.t.b8lplZ),
                permissions: S([E.Pl.CREATE_EVENTS, E.Pl.MANAGE_EVENTS], o),
              },
              _.showExperimental,
            )),
          ),
          g.push(
            ((P = T),
            r({
              title: l.intl.string(l.t["3uI5CQ"]),
              permissions: S([E.Pl.ADMINISTRATOR], P),
            })),
          ),
          g
        );
      }
      function A(t, i) {
        let n =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : { showManageWebhooks: !0 };
        return {
          title: i,
          permissions: S(
            (null == n ? void 0 : n.showManageWebhooks)
              ? [
                  E.Pl.VIEW_CHANNEL,
                  E.Pl.MANAGE_CHANNELS,
                  E.Pl.MANAGE_ROLES,
                  E.Pl.MANAGE_WEBHOOKS,
                ]
              : [E.Pl.VIEW_CHANNEL, E.Pl.MANAGE_CHANNELS, E.Pl.MANAGE_ROLES],
            t,
          ),
        };
      }
      function o(t, i) {
        return { title: i, permissions: S([E.Pl.CREATE_INSTANT_INVITE], t) };
      }
      function _(t, i, n) {
        let l = [
          E.Pl.SEND_MESSAGES,
          E.Pl.SEND_MESSAGES_IN_THREADS,
          E.Pl.CREATE_PUBLIC_THREADS,
          E.Pl.CREATE_PRIVATE_THREADS,
          E.Pl.EMBED_LINKS,
          E.Pl.ATTACH_FILES,
          E.Pl.ADD_REACTIONS,
          E.Pl.USE_EXTERNAL_EMOJIS,
          E.Pl.USE_EXTERNAL_STICKERS,
          E.Pl.MENTION_EVERYONE,
          E.Pl.MANAGE_MESSAGES,
          E.Pl.MANAGE_THREADS,
          E.Pl.READ_MESSAGE_HISTORY,
          E.Pl.SEND_TTS_MESSAGES,
          E.Pl.SEND_VOICE_MESSAGES,
          E.Pl.USE_CLYDE_AI,
          E.Pl.SEND_POLLS,
        ];
        return (
          (!n.showPrivateThreads || !n.showCreateThreads) &&
            (l = l.filter((t) => t !== E.Pl.CREATE_PRIVATE_THREADS)),
          !n.showCreateThreads &&
            (l = l.filter((t) => t !== E.Pl.CREATE_PUBLIC_THREADS)),
          !n.showClydeAIPermissions &&
            (l = l.filter((t) => t !== E.Pl.USE_CLYDE_AI)),
          { title: i, description: n.sectionDescription, permissions: S(l, t) }
        );
      }
      function P(t, i) {
        return {
          title: i,
          permissions: S(
            [
              E.Pl.CONNECT,
              E.Pl.SPEAK,
              E.Pl.STREAM,
              E.Pl.USE_SOUNDBOARD,
              E.Pl.USE_EXTERNAL_SOUNDS,
              E.Pl.USE_VAD,
              E.Pl.PRIORITY_SPEAKER,
              E.Pl.MUTE_MEMBERS,
              E.Pl.DEAFEN_MEMBERS,
              E.Pl.MOVE_MEMBERS,
              E.Pl.SET_VOICE_CHANNEL_STATUS,
            ],
            t,
          ),
        };
      }
      function N(t, i, n) {
        let l = [
          E.Pl.SEND_MESSAGES,
          E.Pl.EMBED_LINKS,
          E.Pl.ATTACH_FILES,
          E.Pl.ADD_REACTIONS,
          E.Pl.USE_EXTERNAL_EMOJIS,
          E.Pl.USE_EXTERNAL_STICKERS,
          E.Pl.MENTION_EVERYONE,
          E.Pl.MANAGE_MESSAGES,
          E.Pl.READ_MESSAGE_HISTORY,
          E.Pl.SEND_TTS_MESSAGES,
          E.Pl.USE_APPLICATION_COMMANDS,
          E.Pl.SEND_VOICE_MESSAGES,
          E.Pl.SEND_POLLS,
        ];
        return {
          title: i,
          description: n.sectionDescription,
          permissions: S(l, t),
        };
      }
      function T(t, i) {
        return {
          title: i,
          permissions: S(
            [
              E.Pl.USE_APPLICATION_COMMANDS,
              E.Pl.USE_EMBEDDED_ACTIVITIES,
              E.Pl.USE_EXTERNAL_APPS,
            ],
            t,
          ),
        };
      }
      function g(t, i, n) {
        return {
          title: i,
          permissions: S(
            n
              ? [
                  E.Pl.CONNECT,
                  E.Pl.STREAM,
                  E.Pl.MUTE_MEMBERS,
                  E.Pl.MOVE_MEMBERS,
                ]
              : [E.Pl.CONNECT, E.Pl.MUTE_MEMBERS, E.Pl.MOVE_MEMBERS],
            t,
          ),
        };
      }
      function I(t, i) {
        return {
          title: i,
          permissions: S([E.Pl.REQUEST_TO_SPEAK, E.Pl.MENTION_EVERYONE], t),
        };
      }
      function M(t, i) {
        return {
          title: i,
          permissions: S([E.Pl.CREATE_EVENTS, E.Pl.MANAGE_EVENTS], t),
        };
      }
      function a(t) {
        return null == t
          ? t
          : "string" == typeof t
            ? t.trim()
            : "function" == typeof t
              ? l.intl.format(t, {})
              : t;
      }
    },
    60222: function (t, i, n) {
      n.d(i, {
        A: function () {
          return S;
        },
        m: function () {
          return e;
        },
      }),
        n(47120);
      var E = n(442837),
        l = n(430824),
        r = n(981631);
      function S(t) {
        var i;
        let [n] =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : [l.Z];
        return !!(null === (i = n.getGuild(t)) || void 0 === i
          ? void 0
          : i.hasFeature(r.oNc.COMMUNITY));
      }
      function e(t) {
        return (0, E.e7)([l.Z], () => S(t, [l.Z]), [t]);
      }
    },
    233608: function (t, i, n) {
      n(47120);
      var E = n(230711),
        l = n(581364),
        r = n(797610),
        S = n(200876),
        e = n(456269),
        s = n(228392),
        A = n(676317),
        o = n(434404),
        _ = n(208884),
        P = n(368442),
        N = n(60222),
        T = n(665906),
        g = n(131704),
        I = n(430824),
        M = n(63063),
        a = n(981631),
        R = n(71080),
        u = n(388032);
      function D(t) {
        let i = (0, N.A)(t),
          n = (0, e.Eg)(t),
          s = I.Z.getGuild(t),
          A =
            null == s
              ? void 0
              : s.hasFeature(a.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL),
          o = null != s && (0, S.l)(s),
          _ = (0, r.M9)(s),
          P = (0, l.vC)(t, { location: "get_permission_options" });
        return {
          PRIORITY_SPEAKER_DESCRIPTION: u.intl.format(u.t.j66HgY, {
            keybind: u.intl.string(u.t.DkSwJy),
            onClick: () => {
              E.Z.open(a.oAB.KEYBINDS);
            },
          }),
          SOUNDBOARD_DESCRIPTION: u.intl.format(u.t.fVE8y8, {
            helpCenterArticle: M.Z.getArticleURL(a.BhN.SOUNDBOARD),
          }),
          showStageChannelPermissions: i,
          showExperimental: !0,
          showForumPermissions: n,
          showMembershipManualApprovalPermissions: A,
          showCreatorMonetizationAnalyticsPermission: o,
          showClydeAIPermissions: _,
          externalAppsEnabled: P,
        };
      }
      function c(t, i) {
        return t ? [i()] : [];
      }
      i.Z = {
        generateChannelPermissionSpec: function (t, i, n, E) {
          var l, S, N, M, c, O;
          let C = (0, e.Eg)(t),
            p = (0, R.IG)(i, n, C, E),
            d = D(t),
            f =
              T.tM.getCurrentConfig({ guildId: t, location: "3ad37d_1" })
                .enabled && g.Um.has(i.type),
            U = (0, P.tu)(t),
            L = (0, A.ze)(t),
            G = i.isMediaChannel(),
            h = I.Z.getGuild(t),
            m = (0, r.M9)(h);
          switch (i.type) {
            case a.d4z.GUILD_CATEGORY:
              return [
                _.zO(p, u.intl.string(u.t.AkPxc3)),
                _.Ny(p, u.intl.string(u.t.Ny49TE)),
                _.vq(p, u.intl.string(u.t.cKobOz), {
                  showPrivateThreads: !0,
                  showCreateThreads: !0,
                  showClydeAIPermissions: m,
                }),
                _.WV(p, u.intl.string(u.t["46Ra1d"])),
                _.xU(p, u.intl.string(u.t["rrh/W1"])),
                ...((l = d.showStageChannelPermissions),
                (S = () => _.kv(p, u.intl.string(u.t.yniaur))),
                l ? [S()] : []),
                _.uu(p, u.intl.string(u.t.b8lplZ)),
              ];
            case a.d4z.GUILD_VOICE:
              return [
                _.zO(p, u.intl.string(u.t.ouHggI), { showManageWebhooks: !0 }),
                _.Ny(p, u.intl.string(u.t.Ny49TE)),
                _.WV(p, u.intl.string(u.t["46Ra1d"])),
                _.aW(p, u.intl.string(u.t.iqlsnJ), {
                  sectionDescription: L
                    ? u.intl.format(u.t["4Z9FbW"], {
                        setUpAutomod: () => {
                          o.Z.open(t, a.pNK.GUILD_AUTOMOD);
                        },
                      })
                    : void 0,
                }),
                _.uu(p, u.intl.string(u.t.b8lplZ)),
                _.xU(p, u.intl.string(u.t["rrh/W1"])),
              ];
            case a.d4z.GUILD_STAGE_VOICE:
              return [
                _.zO(p, u.intl.string(u.t.ouHggI), { showManageWebhooks: !1 }),
                _.Ny(p, u.intl.string(u.t.Ny49TE)),
                _.FX(p, u.intl.string(u.t["46Ra1d"]), U),
                _.kv(p, u.intl.string(u.t.yniaur)),
                _.uu(p, u.intl.string(u.t.b8lplZ)),
                _.aW(p, u.intl.string(u.t.iqlsnJ), {
                  sectionDescription: L
                    ? u.intl.format(u.t["4Z9FbW"], {
                        setUpAutomod: () => {
                          o.Z.open(t, a.pNK.GUILD_AUTOMOD);
                        },
                      })
                    : void 0,
                }),
              ];
            case a.d4z.GUILD_FORUM:
            case a.d4z.GUILD_MEDIA:
              let V = G ? u.intl.string(u.t.aSjPg4) : u.intl.string(u.t.TS7CnZ),
                B = G ? u.t.YjJTtL : u.t["1MTnqa"];
              return [
                _.zO(p, u.intl.string(u.t.ouHggI)),
                _.Ny(p, u.intl.string(u.t.Ny49TE)),
                _.vq(p, V, {
                  showPrivateThreads: !1,
                  showCreateThreads: !1,
                  sectionDescription: L
                    ? u.intl.format(B, {
                        setUpAutomod: () => {
                          !G && (0, s.MO)(), o.Z.open(t, a.pNK.GUILD_AUTOMOD);
                        },
                      })
                    : void 0,
                  showClydeAIPermissions: m,
                }),
                _.xU(p, u.intl.string(u.t["rrh/W1"])),
                ...((N = f),
                (M = () => _.WV(p, u.intl.string(u.t["46Ra1d"]))),
                N ? [M()] : []),
              ];
            default:
              return [
                _.zO(p, u.intl.string(u.t.ouHggI)),
                _.Ny(p, u.intl.string(u.t.Ny49TE)),
                _.vq(p, u.intl.string(u.t.cKobOz), {
                  showPrivateThreads: i.type !== a.d4z.GUILD_ANNOUNCEMENT,
                  showCreateThreads: !0,
                  showClydeAIPermissions: m,
                }),
                _.xU(p, u.intl.string(u.t["rrh/W1"])),
                ...((c = f),
                (O = () => _.WV(p, u.intl.string(u.t["46Ra1d"]))),
                c ? [O()] : []),
              ];
          }
        },
        generateGuildPermissionSpec: function (t) {
          var i, n;
          let E = new Set();
          return (
            !t.hasFeature(a.oNc.COMMUNITY) &&
              E.add(a.Plq.VIEW_GUILD_ANALYTICS.toString()),
            (i = _.s4(D(t.id))),
            0 === (n = E).size
              ? i
              : i.map((t) => ({
                  ...t,
                  permissions: t.permissions.filter(
                    (t) => !n.has(t.flag.toString()),
                  ),
                }))
          );
        },
        getGuildPermissionSpecMap: function (t) {
          return _.WW(D(t.id));
        },
      };
    },
  },
]);
//# sourceMappingURL=0a74e3b84ed27bec33bc.js.map
