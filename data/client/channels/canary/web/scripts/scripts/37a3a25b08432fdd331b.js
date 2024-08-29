"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["79695"],
  {
    883385: function (i, e, n) {
      n.d(e, {
        Z: function () {
          return a;
        },
      });
      var t = n(735250);
      n(470079);
      var l = n(410575);
      function a(i, e) {
        return function (n) {
          return (0, t.jsx)(l.Z, {
            page: e.page,
            section: e.section,
            object: e.object,
            objectType: e.objectType,
            children: (0, t.jsx)(i, { ...n }),
          });
        };
      }
    },
    108843: function (i, e, n) {
      n.d(e, {
        Z: function () {
          return a;
        },
      });
      var t = n(735250);
      n(470079);
      var l = n(906732);
      function a(i, e) {
        return function (n) {
          let { analyticsLocations: a } = (0, l.ZP)(e);
          return (0, t.jsx)(l.Gt, {
            value: a,
            children: (0, t.jsx)(i, { ...n }),
          });
        };
      }
    },
    947440: function (i, e, n) {
      n.d(e, {
        Z: function () {
          return W;
        },
      }),
        n(47120),
        n(653041);
      var t = n(735250);
      n(470079);
      var l = n(442837),
        a = n(481060),
        d = n(278323),
        o = n(224706),
        s = n(2052),
        I = n(906732),
        u = n(895924),
        c = n(835473),
        p = n(768419),
        r = n(300020),
        _ = n(456190),
        Z = n(239470),
        N = n(894344),
        T = n(203777),
        E = n(314897),
        S = n(592125),
        v = n(650774),
        C = n(430824),
        m = n(496675),
        y = n(158776),
        A = n(699516),
        b = n(944486),
        h = n(885110),
        O = n(594174),
        f = n(979651),
        x = n(181106),
        j = n(5192),
        g = n(566620),
        U = n(317381),
        L = n(638880),
        M = n(782769),
        G = n(255621),
        Y = n(527805),
        P = n(620662),
        V = n(841784),
        J = n(275920),
        R = n(701488),
        D = n(981631),
        k = n(616922),
        F = n(689938);
      function W(i, e) {
        let { analyticsLocations: W } = (0, I.ZP)(),
          w = (0, l.e7)([O.default], () => O.default.getCurrentUser()),
          X = (0, l.e7)([U.ZP], () => U.ZP.getSelfEmbeddedActivities()),
          q = (0, l.Wu)([h.Z], () =>
            h.Z.getActivities().filter(
              (i) =>
                null != i.application_id &&
                !(null == X ? void 0 : X.has(i.application_id)),
            ),
          ),
          z = (0, l.Wu)(
            [y.Z],
            () =>
              null != e
                ? y.Z.getActivities(e.id, null == i ? void 0 : i.getGuildId())
                : [],
            [e, i],
          ),
          B = (0, l.Wu)(
            [U.ZP],
            () => {
              let n =
                (null == i ? void 0 : i.id) != null
                  ? U.ZP.getEmbeddedActivitiesForChannel(i.id)
                  : U.i6;
              return null != e
                ? n.filter((i) => {
                    let { userIds: n } = i;
                    return n.has(e.id);
                  })
                : n;
            },
            [e, i],
          ),
          H = (0, l.e7)(
            [m.Z],
            () => null == i || i.isPrivate() || m.Z.can(D.Plq.SEND_MESSAGES, i),
            [i],
          ),
          K = (0, l.Wu)(
            [x.Z],
            () => [
              ...z.map(
                (i) =>
                  null != i.application_id &&
                  x.Z.getState(i.application_id, D.mFx.JOIN) === D.OcF.LOADING,
              ),
              ...B.map(
                (i) =>
                  x.Z.getState(i.applicationId, D.mFx.JOIN) === D.OcF.LOADING,
              ),
            ],
            [z, B],
          ),
          Q = (0, c.Z)([
            ...z
              .filter((i) => (null == i ? void 0 : i.application_id) != null)
              .map((i) => i.application_id),
            ...B.map((i) => i.applicationId),
          ]),
          $ = null == i ? void 0 : i.id,
          ii = (0, l.Wu)(
            [S.Z, C.Z, v.Z, A.Z, b.Z, f.Z, m.Z],
            () => [
              ...z.map((i) =>
                (0, G.Z)({
                  user: null != e ? e : w,
                  activity: i,
                  application: Q.find(
                    (e) => (null == e ? void 0 : e.id) === i.application_id,
                  ),
                  channelId: $,
                  currentUser: w,
                  isEmbedded: (0, V.Z)(i),
                  ChannelStore: S.Z,
                  GuildStore: C.Z,
                  GuildMemberCountStore: v.Z,
                  RelationshipStore: A.Z,
                  SelectedChannelStore: b.Z,
                  VoiceStateStore: f.Z,
                  PermissionStore: m.Z,
                }),
              ),
              ...B.map((i) => {
                let n = null != e ? e : w;
                return (
                  null != n &&
                  (0, Y.ZP)({
                    userId: n.id,
                    application: Q.find(
                      (e) => (null == e ? void 0 : e.id) === i.applicationId,
                    ),
                    channelId: $,
                    currentUser: w,
                    isActivitiesEnabledForCurrentPlatform: (0, M.a)(),
                    ChannelStore: S.Z,
                    GuildStore: C.Z,
                    VoiceStateStore: f.Z,
                    PermissionStore: m.Z,
                  }) === Y.Fw.CAN_JOIN
                );
              }),
            ],
            [z, Q, $, w, B, e],
          ),
          ie = (0, l.Wu)(
            [p.Z, E.default],
            () =>
              z.map((i) =>
                i.type === D.IIU.LISTENING && null != e
                  ? (0, Z.Z)(p.Z, E.default, e, i)
                  : void 0,
              ),
            [e, z],
          ),
          it = (0, s.O)();
        if (!H) return null;
        let il = (n, t) => {
            null != i
              ? d.Z.sendActivityInvite({
                  type: n,
                  channelId: i.id,
                  activity: t,
                  location: D.Sbl.CONTEXT_MENU,
                })
              : null != e &&
                d.Z.sendActivityInviteUser({
                  type: n,
                  userId: e.id,
                  activity: t,
                  location: D.Sbl.CONTEXT_MENU,
                });
          },
          ia = (l, d) => {
            let o = S.Z.getChannel(l),
              s = null == o ? void 0 : C.Z.getGuild(o.guild_id);
            return null == o || null == s
              ? void 0
              : null != e
                ? g.pu({
                    channelId: o.id,
                    applicationId: d,
                    userId: e.id,
                    location: D.t4x.CONTEXT_MENU,
                  })
                : null != i && i.type === D.d4z.GUILD_VOICE
                  ? (0, a.openModalLazy)(
                      async () => {
                        let { default: e } = await Promise.all([
                          n.e("7654"),
                          n.e("1187"),
                          n.e("31400"),
                        ]).then(n.bind(n, 560114));
                        return (n) =>
                          (0, t.jsx)(e, {
                            ...n,
                            guild: s,
                            channel: o,
                            applicationId: d,
                            analyticsLocation:
                              i.type === D.d4z.GUILD_VOICE
                                ? D.ZY5.GUILD_CHANNEL
                                : D.ZY5.DM_CHANNEL,
                            source: D.t4x.ACTIVITY_INVITE,
                          });
                      },
                      { modalKey: "use-activity-items-embedded-invite-modal" },
                    )
                  : (null == i ? void 0 : i.id) != null
                    ? g.sN({
                        activityChannelId: o.id,
                        invitedChannelId: i.id,
                        applicationId: d,
                        location: D.t4x.CONTEXT_MENU,
                      })
                    : void 0;
          },
          id = async (i) => {
            var n, t;
            let l = (0, P.Z)(i, D.xjy.EMBEDDED);
            await o.Z.join({
              userId: e.id,
              sessionId: i.session_id,
              applicationId: i.application_id,
              channelId: b.Z.getVoiceChannelId(),
              messageId: null,
              intent: R.Ws.PLAY,
              embedded: l,
              partyId: null === (n = i.party) || void 0 === n ? void 0 : n.id,
              locationObject: it.location,
              analyticsLocations: W,
            }),
              !l &&
                (0, J.Z)({
                  type: D.q5t.JOIN,
                  userId: e.id,
                  applicationId: i.application_id,
                  partyId:
                    null === (t = i.party) || void 0 === t ? void 0 : t.id,
                  locationObject: it.location,
                  analyticsLocations: W,
                });
          },
          io = async (e) => {
            await (0, L.Z)({
              applicationId: e.applicationId,
              activityChannelId: null == i ? void 0 : i.id,
              locationObject: it.location,
              analyticsLocations: W,
              commandOrigin: u.bB.CONTEXT_MENU,
            });
          },
          is = [];
        return (
          null == X ||
            X.forEach((n) => {
              let l =
                  (null == e ? void 0 : e.id) != null &&
                  n.userIds.has(null == e ? void 0 : e.id),
                d = m.Z.can(D.Plq.CREATE_INSTANT_INVITE, i),
                o = Q.find(
                  (i) => (null == i ? void 0 : i.id) === n.applicationId,
                );
              if (null != n.launchId && !l && !!d && null != o)
                is.push(
                  (0, t.jsx)(
                    a.MenuItem,
                    {
                      id: "invite-to-join-embedded",
                      label: F.Z.Messages.USER_ACTIVITY_ACTION_INVITE_TO_JOIN,
                      subtext: o.name,
                      action: () => {
                        ia(n.channelId, n.applicationId);
                      },
                    },
                    "self-embedded-".concat(n.applicationId),
                  ),
                );
            }),
          q.forEach((i, e) => {
            i.type === D.IIU.PLAYING && (0, P.Z)(i, D.xjy.JOIN)
              ? is.push(
                  (0, t.jsx)(
                    a.MenuItem,
                    {
                      id: "invite-to-join",
                      label: F.Z.Messages.USER_ACTIVITY_ACTION_INVITE_TO_JOIN,
                      subtext: i.name,
                      action: () => il(D.mFx.JOIN, i),
                    },
                    "self".concat(e),
                  ),
                )
              : i.type === D.IIU.LISTENING &&
                (0, P.Z)(i, D.xjy.SYNC) &&
                is.push(
                  (0, t.jsx)(
                    a.MenuItem,
                    {
                      id: "invite-to-listen",
                      label:
                        F.Z.Messages
                          .USER_ACTIVITY_ACTION_INVITE_TO_LISTEN_ALONG,
                      subtext: i.name,
                      action: () => il(D.mFx.LISTEN, i),
                    },
                    "self".concat(e),
                  ),
                );
          }),
          is.length > 0 && is.push((0, t.jsx)(a.MenuSeparator, {})),
          z.forEach((n, l) => {
            if (
              n.type === D.IIU.PLAYING &&
              (0, P.Z)(n, D.xjy.JOIN) &&
              null != n.session_id &&
              null != n.application_id
            ) {
              if (ii[l]) {
                let i = K[l];
                is.push(
                  (0, t.jsx)(
                    a.MenuItem,
                    {
                      id: "join",
                      label: i
                        ? F.Z.Messages.USER_ACTIVITY_JOINING
                        : F.Z.Messages.JOIN,
                      disabled: i,
                      hint: i
                        ? (0, t.jsx)(a.Spinner, {
                            type: a.Spinner.Type.PULSING_ELLIPSIS,
                          })
                        : null,
                      subtext: n.name,
                      action: () => id(n),
                    },
                    l,
                  ),
                );
              } else
                is.push(
                  (0, t.jsx)(
                    a.MenuItem,
                    {
                      id: "ask-to-join",
                      label: F.Z.Messages.USER_ACTIVITY_ACTION_ASK_TO_JOIN,
                      subtext: n.name,
                      action: () => il(D.mFx.JOIN_REQUEST, n),
                    },
                    l,
                  ),
                );
            } else if (
              n.type === D.IIU.LISTENING &&
              (0, P.Z)(n, D.xjy.SYNC) &&
              null != ie[l]
            ) {
              let d = ie[l],
                { playDisabled: o, syncDisabled: s } = d;
              is.push(
                (0, t.jsx)(
                  a.MenuItem,
                  {
                    id: "spotify-play-".concat(n.session_id),
                    action: () => (0, T.Z)(d, k.kG.USER_ACTIVITY_PLAY),
                    label: (0, r.Z)(d, k.kG.USER_ACTIVITY_PLAY),
                    subtext: o
                      ? (0, _.Z)(
                          d,
                          k.kG.USER_ACTIVITY_PLAY,
                          null != i
                            ? j.ZP.getNickname(i.guild_id, i.id, e)
                            : void 0,
                        )
                      : void 0,
                    disabled: o,
                  },
                  "spotify-play-".concat(n.session_id),
                ),
                (0, t.jsx)(
                  a.MenuItem,
                  {
                    id: "spotify-sync-".concat(n.session_id),
                    action: () => (0, N.Z)(d, k.kG.USER_ACTIVITY_SYNC),
                    label: F.Z.Messages.USER_ACTIVITY_LISTEN_ALONG,
                    subtext: s
                      ? (0, _.Z)(
                          d,
                          k.kG.USER_ACTIVITY_SYNC,
                          null != i
                            ? j.ZP.getNickname(i.guild_id, i.id, e)
                            : void 0,
                        )
                      : void 0,
                    disabled: s,
                  },
                  "spotify-sync-".concat(n.session_id),
                ),
              );
            }
          }),
          B.forEach((i, e) => {
            var n;
            let l = i.userIds.has(
                null !== (n = null == w ? void 0 : w.id) && void 0 !== n
                  ? n
                  : D.lds,
              ),
              d = e + z.length,
              o = K[d] || l,
              s = F.Z.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY;
            l
              ? (s = F.Z.Messages.USER_ACTIVITY_CANNOT_JOIN_SELF)
              : K[d] && (s = F.Z.Messages.USER_ACTIVITY_JOINING);
            let I = Q.find(
              (e) => (null == e ? void 0 : e.id) === i.applicationId,
            );
            ii[d] &&
              null != I &&
              is.push(
                (0, t.jsx)(
                  a.MenuItem,
                  {
                    id: "embedded-activity-join-".concat(i.applicationId),
                    label: s,
                    disabled: o,
                    hint: K[d]
                      ? (0, t.jsx)(a.Spinner, {
                          type: a.Spinner.Type.PULSING_ELLIPSIS,
                        })
                      : null,
                    subtext: I.name,
                    action: () => io(i),
                  },
                  "embedded-activity-".concat(i.applicationId),
                ),
              );
          }),
          is
        );
      }
    },
  },
]);
//# sourceMappingURL=37a3a25b08432fdd331b.js.map
