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
          return F;
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
        u = n(835473),
        c = n(768419),
        p = n(300020),
        r = n(456190),
        _ = n(239470),
        Z = n(894344),
        N = n(203777),
        T = n(314897),
        S = n(592125),
        E = n(650774),
        v = n(430824),
        C = n(496675),
        h = n(158776),
        y = n(699516),
        m = n(944486),
        A = n(885110),
        b = n(594174),
        f = n(979651),
        O = n(181106),
        x = n(5192),
        g = n(566620),
        j = n(317381),
        L = n(638880),
        U = n(782769),
        M = n(255621),
        G = n(527805),
        Y = n(620662),
        P = n(841784),
        V = n(275920),
        J = n(701488),
        R = n(981631),
        D = n(616922),
        k = n(689938);
      function F(i, e) {
        let { analyticsLocations: F } = (0, I.ZP)(),
          W = (0, l.e7)([b.default], () => b.default.getCurrentUser()),
          w = (0, l.e7)([j.ZP], () => j.ZP.getSelfEmbeddedActivities()),
          X = (0, l.Wu)([A.Z], () =>
            A.Z.getActivities().filter(
              (i) =>
                null != i.application_id &&
                !(null == w ? void 0 : w.has(i.application_id)),
            ),
          ),
          q = (0, l.Wu)(
            [h.Z],
            () =>
              null != e
                ? h.Z.getActivities(e.id, null == i ? void 0 : i.getGuildId())
                : [],
            [e, i],
          ),
          z = (0, l.Wu)(
            [j.ZP],
            () => {
              let n =
                (null == i ? void 0 : i.id) != null
                  ? j.ZP.getEmbeddedActivitiesForChannel(i.id)
                  : j.i6;
              return null != e
                ? n.filter((i) => {
                    let { userIds: n } = i;
                    return n.has(e.id);
                  })
                : n;
            },
            [e, i],
          ),
          B = (0, l.e7)(
            [C.Z],
            () => null == i || i.isPrivate() || C.Z.can(R.Plq.SEND_MESSAGES, i),
            [i],
          ),
          H = (0, l.Wu)(
            [O.Z],
            () => [
              ...q.map(
                (i) =>
                  null != i.application_id &&
                  O.Z.getState(i.application_id, R.mFx.JOIN) === R.OcF.LOADING,
              ),
              ...z.map(
                (i) =>
                  O.Z.getState(i.applicationId, R.mFx.JOIN) === R.OcF.LOADING,
              ),
            ],
            [q, z],
          ),
          K = (0, u.Z)([
            ...q
              .filter((i) => (null == i ? void 0 : i.application_id) != null)
              .map((i) => i.application_id),
            ...z.map((i) => i.applicationId),
          ]),
          Q = null == i ? void 0 : i.id,
          $ = (0, l.Wu)(
            [S.Z, v.Z, E.Z, y.Z, m.Z, f.Z, C.Z],
            () => [
              ...q.map((i) =>
                (0, M.Z)({
                  user: null != e ? e : W,
                  activity: i,
                  application: K.find(
                    (e) => (null == e ? void 0 : e.id) === i.application_id,
                  ),
                  channelId: Q,
                  currentUser: W,
                  isEmbedded: (0, P.Z)(i),
                  ChannelStore: S.Z,
                  GuildStore: v.Z,
                  GuildMemberCountStore: E.Z,
                  RelationshipStore: y.Z,
                  SelectedChannelStore: m.Z,
                  VoiceStateStore: f.Z,
                  PermissionStore: C.Z,
                }),
              ),
              ...z.map((i) => {
                let n = null != e ? e : W;
                return (
                  null != n &&
                  (0, G.ZP)({
                    userId: n.id,
                    application: K.find(
                      (e) => (null == e ? void 0 : e.id) === i.applicationId,
                    ),
                    channelId: Q,
                    currentUser: W,
                    isActivitiesEnabledForCurrentPlatform: (0, U.a)(),
                    ChannelStore: S.Z,
                    GuildStore: v.Z,
                    VoiceStateStore: f.Z,
                    PermissionStore: C.Z,
                  }) === G.Fw.CAN_JOIN
                );
              }),
            ],
            [q, K, Q, W, z, e],
          ),
          ii = (0, l.Wu)(
            [c.Z, T.default],
            () =>
              q.map((i) =>
                i.type === R.IIU.LISTENING && null != e
                  ? (0, _.Z)(c.Z, T.default, e, i)
                  : void 0,
              ),
            [e, q],
          ),
          ie = (0, s.O)();
        if (!B) return null;
        let it = (n, t) => {
            null != i
              ? d.Z.sendActivityInvite({
                  type: n,
                  channelId: i.id,
                  activity: t,
                  location: R.Sbl.CONTEXT_MENU,
                })
              : null != e &&
                d.Z.sendActivityInviteUser({
                  type: n,
                  userId: e.id,
                  activity: t,
                  location: R.Sbl.CONTEXT_MENU,
                });
          },
          il = (l, d) => {
            let o = S.Z.getChannel(l),
              s = null == o ? void 0 : v.Z.getGuild(o.guild_id);
            return null == o || null == s
              ? void 0
              : null != e
                ? g.pu({
                    channelId: o.id,
                    applicationId: d,
                    userId: e.id,
                    location: R.t4x.CONTEXT_MENU,
                  })
                : null != i && i.type === R.d4z.GUILD_VOICE
                  ? (0, a.openModalLazy)(
                      async () => {
                        let { default: e } = await Promise.all([
                          n.e("7654"),
                          n.e("1187"),
                          n.e("79254"),
                        ]).then(n.bind(n, 560114));
                        return (n) =>
                          (0, t.jsx)(e, {
                            ...n,
                            guild: s,
                            channel: o,
                            applicationId: d,
                            analyticsLocation:
                              i.type === R.d4z.GUILD_VOICE
                                ? R.ZY5.GUILD_CHANNEL
                                : R.ZY5.DM_CHANNEL,
                            source: R.t4x.ACTIVITY_INVITE,
                          });
                      },
                      { modalKey: "use-activity-items-embedded-invite-modal" },
                    )
                  : (null == i ? void 0 : i.id) != null
                    ? g.sN({
                        activityChannelId: o.id,
                        invitedChannelId: i.id,
                        applicationId: d,
                        location: R.t4x.CONTEXT_MENU,
                      })
                    : void 0;
          },
          ia = async (i) => {
            var n, t;
            let l = (0, Y.Z)(i, R.xjy.EMBEDDED),
              a = m.Z.getVoiceChannelId(),
              d = S.Z.getChannel(a);
            await o.Z.join({
              userId: e.id,
              sessionId: i.session_id,
              applicationId: i.application_id,
              channelId: a,
              messageId: null,
              intent: J.Ws.PLAY,
              embedded: l,
              partyId: null === (n = i.party) || void 0 === n ? void 0 : n.id,
              locationObject: ie.location,
              analyticsLocations: F,
            }),
              !l &&
                (0, V.Z)({
                  type: R.q5t.JOIN,
                  userId: e.id,
                  guildId: null == d ? void 0 : d.guild_id,
                  channelId: a,
                  channelType: null == d ? void 0 : d.type,
                  applicationId: i.application_id,
                  partyId:
                    null === (t = i.party) || void 0 === t ? void 0 : t.id,
                  locationObject: ie.location,
                  analyticsLocations: F,
                });
          },
          id = async (e) => {
            await (0, L.Z)({
              applicationId: e.applicationId,
              activityChannelId: null == i ? void 0 : i.id,
              locationObject: ie.location,
              analyticsLocations: F,
            });
          },
          io = [];
        return (
          null == w ||
            w.forEach((n) => {
              let l =
                  (null == e ? void 0 : e.id) != null &&
                  n.userIds.has(null == e ? void 0 : e.id),
                d = C.Z.can(R.Plq.CREATE_INSTANT_INVITE, i),
                o = K.find(
                  (i) => (null == i ? void 0 : i.id) === n.applicationId,
                );
              if (null != n.launchId && !l && !!d && null != o)
                io.push(
                  (0, t.jsx)(
                    a.MenuItem,
                    {
                      id: "invite-to-join-embedded",
                      label: k.Z.Messages.USER_ACTIVITY_ACTION_INVITE_TO_JOIN,
                      subtext: o.name,
                      action: () => {
                        il(n.channelId, n.applicationId);
                      },
                    },
                    "self-embedded-".concat(n.applicationId),
                  ),
                );
            }),
          X.forEach((i, e) => {
            i.type === R.IIU.PLAYING && (0, Y.Z)(i, R.xjy.JOIN)
              ? io.push(
                  (0, t.jsx)(
                    a.MenuItem,
                    {
                      id: "invite-to-join",
                      label: k.Z.Messages.USER_ACTIVITY_ACTION_INVITE_TO_JOIN,
                      subtext: i.name,
                      action: () => it(R.mFx.JOIN, i),
                    },
                    "self".concat(e),
                  ),
                )
              : i.type === R.IIU.LISTENING &&
                (0, Y.Z)(i, R.xjy.SYNC) &&
                io.push(
                  (0, t.jsx)(
                    a.MenuItem,
                    {
                      id: "invite-to-listen",
                      label:
                        k.Z.Messages
                          .USER_ACTIVITY_ACTION_INVITE_TO_LISTEN_ALONG,
                      subtext: i.name,
                      action: () => it(R.mFx.LISTEN, i),
                    },
                    "self".concat(e),
                  ),
                );
          }),
          io.length > 0 && io.push((0, t.jsx)(a.MenuSeparator, {})),
          q.forEach((n, l) => {
            if (
              n.type === R.IIU.PLAYING &&
              (0, Y.Z)(n, R.xjy.JOIN) &&
              null != n.session_id &&
              null != n.application_id
            ) {
              if ($[l]) {
                let i = H[l];
                io.push(
                  (0, t.jsx)(
                    a.MenuItem,
                    {
                      id: "join",
                      label: i
                        ? k.Z.Messages.USER_ACTIVITY_JOINING
                        : k.Z.Messages.JOIN,
                      disabled: i,
                      hint: i
                        ? (0, t.jsx)(a.Spinner, {
                            type: a.Spinner.Type.PULSING_ELLIPSIS,
                          })
                        : null,
                      subtext: n.name,
                      action: () => ia(n),
                    },
                    l,
                  ),
                );
              } else
                io.push(
                  (0, t.jsx)(
                    a.MenuItem,
                    {
                      id: "ask-to-join",
                      label: k.Z.Messages.USER_ACTIVITY_ACTION_ASK_TO_JOIN,
                      subtext: n.name,
                      action: () => it(R.mFx.JOIN_REQUEST, n),
                    },
                    l,
                  ),
                );
            } else if (
              n.type === R.IIU.LISTENING &&
              (0, Y.Z)(n, R.xjy.SYNC) &&
              null != ii[l]
            ) {
              let d = ii[l],
                { playDisabled: o, syncDisabled: s } = d;
              io.push(
                (0, t.jsx)(
                  a.MenuItem,
                  {
                    id: "spotify-play-".concat(n.session_id),
                    action: () => (0, N.Z)(d, D.kG.USER_ACTIVITY_PLAY),
                    label: (0, p.Z)(d, D.kG.USER_ACTIVITY_PLAY),
                    subtext: o
                      ? (0, r.Z)(
                          d,
                          D.kG.USER_ACTIVITY_PLAY,
                          null != i
                            ? x.ZP.getNickname(i.guild_id, i.id, e)
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
                    action: () => (0, Z.Z)(d, D.kG.USER_ACTIVITY_SYNC),
                    label: k.Z.Messages.USER_ACTIVITY_LISTEN_ALONG,
                    subtext: s
                      ? (0, r.Z)(
                          d,
                          D.kG.USER_ACTIVITY_SYNC,
                          null != i
                            ? x.ZP.getNickname(i.guild_id, i.id, e)
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
          z.forEach((i, e) => {
            var n;
            let l = i.userIds.has(
                null !== (n = null == W ? void 0 : W.id) && void 0 !== n
                  ? n
                  : R.lds,
              ),
              d = e + q.length,
              o = H[d] || l,
              s = k.Z.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY;
            l
              ? (s = k.Z.Messages.USER_ACTIVITY_CANNOT_JOIN_SELF)
              : H[d] && (s = k.Z.Messages.USER_ACTIVITY_JOINING);
            let I = K.find(
              (e) => (null == e ? void 0 : e.id) === i.applicationId,
            );
            $[d] &&
              null != I &&
              io.push(
                (0, t.jsx)(
                  a.MenuItem,
                  {
                    id: "embedded-activity-join-".concat(i.applicationId),
                    label: s,
                    disabled: o,
                    hint: H[d]
                      ? (0, t.jsx)(a.Spinner, {
                          type: a.Spinner.Type.PULSING_ELLIPSIS,
                        })
                      : null,
                    subtext: I.name,
                    action: () => id(i),
                  },
                  "embedded-activity-".concat(i.applicationId),
                ),
              );
          }),
          io
        );
      }
    },
  },
]);
//# sourceMappingURL=069f4f48515c11f24f79.js.map
