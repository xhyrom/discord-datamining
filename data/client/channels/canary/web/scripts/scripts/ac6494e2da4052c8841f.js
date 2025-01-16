"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["79695"],
  {
    883385: function (i, t, n) {
      n.d(t, {
        Z: function () {
          return d;
        },
      });
      var e = n(200651);
      n(192379);
      var l = n(410575);
      function d(i, t) {
        return function (n) {
          return (0, e.jsx)(l.Z, {
            page: t.page,
            section: t.section,
            object: t.object,
            objectType: t.objectType,
            children: (0, e.jsx)(i, { ...n }),
          });
        };
      }
    },
    108843: function (i, t, n) {
      n.d(t, {
        Z: function () {
          return d;
        },
      });
      var e = n(200651);
      n(192379);
      var l = n(906732);
      function d(i, t) {
        return function (n) {
          let { analyticsLocations: d } = (0, l.ZP)(t);
          return (0, e.jsx)(l.Gt, {
            value: d,
            children: (0, e.jsx)(i, { ...n }),
          });
        };
      }
    },
    947440: function (i, t, n) {
      n.d(t, {
        Z: function () {
          return w;
        },
      }),
        n(47120),
        n(653041);
      var e = n(200651);
      n(192379);
      var l = n(442837),
        d = n(481060),
        a = n(278323),
        o = n(224706),
        u = n(2052),
        s = n(906732),
        c = n(835473),
        p = n(768419),
        I = n(300020),
        r = n(456190),
        Z = n(239470),
        v = n(894344),
        S = n(203777),
        y = n(314897),
        _ = n(592125),
        f = n(650774),
        h = n(430824),
        m = n(496675),
        N = n(158776),
        b = n(699516),
        E = n(944486),
        C = n(885110),
        x = n(594174),
        g = n(979651),
        j = n(181106),
        T = n(5192),
        A = n(566620),
        G = n(317381),
        L = n(638880),
        P = n(782769),
        O = n(255621),
        U = n(16609),
        Y = n(527805),
        M = n(620662),
        V = n(841784),
        k = n(275920),
        D = n(701488),
        F = n(981631),
        R = n(616922),
        J = n(388032);
      function w(i, t) {
        let { analyticsLocations: w } = (0, s.ZP)(),
          W = (0, l.e7)([x.default], () => x.default.getCurrentUser()),
          X = (0, l.e7)([G.ZP], () => G.ZP.getSelfEmbeddedActivities()),
          q = (0, l.Wu)([C.Z], () =>
            C.Z.getActivities().filter(
              (i) =>
                null == i.application_id ||
                !(null == X ? void 0 : X.has(i.application_id)),
            ),
          ),
          z = (0, l.Wu)(
            [N.Z],
            () =>
              null != t
                ? N.Z.getActivities(t.id, null == i ? void 0 : i.getGuildId())
                : [],
            [t, i],
          ),
          H = (0, l.Wu)(
            [G.ZP],
            () => {
              let n =
                (null == i ? void 0 : i.id) != null
                  ? G.ZP.getEmbeddedActivitiesForChannel(i.id)
                  : G.i6;
              return null != t
                ? n.filter((i) => {
                    let { userIds: n } = i;
                    return n.has(t.id);
                  })
                : n;
            },
            [t, i],
          ),
          K = (0, l.e7)(
            [m.Z],
            () => null == i || i.isPrivate() || m.Z.can(F.Plq.SEND_MESSAGES, i),
            [i],
          ),
          Q = (0, l.Wu)(
            [j.Z],
            () => [
              ...z.map(
                (i) =>
                  null != i.application_id &&
                  j.Z.getState(i.application_id, F.mFx.JOIN) === F.OcF.LOADING,
              ),
              ...H.map(
                (i) =>
                  j.Z.getState(i.applicationId, F.mFx.JOIN) === F.OcF.LOADING,
              ),
            ],
            [z, H],
          ),
          B = (0, c.Z)([
            ...z
              .filter((i) => (null == i ? void 0 : i.application_id) != null)
              .map((i) => i.application_id),
            ...H.map((i) => i.applicationId),
          ]),
          $ = null == i ? void 0 : i.id,
          ii = (0, l.Wu)(
            [_.Z, h.Z, f.Z, b.Z, E.Z, g.Z, m.Z],
            () => [
              ...z.map((i) =>
                (0, O.Z)({
                  user: null != t ? t : W,
                  activity: i,
                  application: B.find(
                    (t) => (null == t ? void 0 : t.id) === i.application_id,
                  ),
                  channelId: $,
                  currentUser: W,
                  isEmbedded: (0, V.Z)(i),
                  ChannelStore: _.Z,
                  GuildStore: h.Z,
                  GuildMemberCountStore: f.Z,
                  RelationshipStore: b.Z,
                  SelectedChannelStore: E.Z,
                  VoiceStateStore: g.Z,
                  PermissionStore: m.Z,
                }),
              ),
              ...H.map((i) => {
                let n = null != t ? t : W;
                return (
                  null != n &&
                  (0, Y.ZP)({
                    userId: n.id,
                    application: B.find(
                      (t) => (null == t ? void 0 : t.id) === i.applicationId,
                    ),
                    channelId: $,
                    currentUser: W,
                    isActivitiesEnabledForCurrentPlatform: (0, P.a)(),
                    ChannelStore: _.Z,
                    GuildStore: h.Z,
                    VoiceStateStore: g.Z,
                    PermissionStore: m.Z,
                  }) === Y.Fw.CAN_JOIN
                );
              }),
            ],
            [z, B, $, W, H, t],
          ),
          it = (0, l.Wu)(
            [p.Z, y.default],
            () =>
              z.map((i) =>
                i.type === F.IIU.LISTENING && null != t
                  ? (0, Z.Z)(p.Z, y.default, t, i)
                  : void 0,
              ),
            [t, z],
          ),
          ie = (0, u.O)();
        if (!K && (null == i ? void 0 : i.type) !== F.d4z.GUILD_VOICE)
          return null;
        let il = (n, e) => {
            null != i
              ? a.Z.sendActivityInvite({
                  type: n,
                  channelId: i.id,
                  activity: e,
                  location: F.Sbl.CONTEXT_MENU,
                })
              : null != t &&
                a.Z.sendActivityInviteUser({
                  type: n,
                  userId: t.id,
                  activity: e,
                  location: F.Sbl.CONTEXT_MENU,
                });
          },
          id = (l, a) => {
            let o = _.Z.getChannel(l),
              u = null == o ? void 0 : h.Z.getGuild(o.guild_id);
            return null == o || null == u
              ? void 0
              : null != t
                ? A.pu({
                    channelId: o.id,
                    applicationId: a,
                    userId: t.id,
                    location: F.t4x.CONTEXT_MENU,
                  })
                : null != i && i.type === F.d4z.GUILD_VOICE
                  ? (0, d.openModalLazy)(
                      async () => {
                        let { default: t } = await Promise.all([
                          n.e("7654"),
                          n.e("1187"),
                          n.e("20554"),
                        ]).then(n.bind(n, 560114));
                        return (n) =>
                          (0, e.jsx)(t, {
                            ...n,
                            guild: u,
                            channel: o,
                            applicationId: a,
                            analyticsLocation:
                              i.type === F.d4z.GUILD_VOICE
                                ? F.ZY5.GUILD_CHANNEL
                                : F.ZY5.DM_CHANNEL,
                            source: F.t4x.ACTIVITY_INVITE,
                          });
                      },
                      { modalKey: "use-activity-items-embedded-invite-modal" },
                    )
                  : (null == i ? void 0 : i.id) != null
                    ? A.sN({
                        activityChannelId: o.id,
                        invitedChannelId: i.id,
                        applicationId: a,
                        location: F.t4x.CONTEXT_MENU,
                      })
                    : void 0;
          },
          ia = async (i) => {
            var n, e;
            let l = (0, M.Z)(i, F.xjy.EMBEDDED),
              d = E.Z.getVoiceChannelId(),
              a = _.Z.getChannel(d);
            await o.Z.join({
              userId: t.id,
              sessionId: i.session_id,
              applicationId: i.application_id,
              channelId: d,
              messageId: null,
              intent: D.Ws.PLAY,
              embedded: l,
              partyId: null === (n = i.party) || void 0 === n ? void 0 : n.id,
              locationObject: ie.location,
              analyticsLocations: w,
            }),
              !l &&
                (0, k.Z)({
                  type: F.q5t.JOIN,
                  userId: t.id,
                  guildId: null == a ? void 0 : a.guild_id,
                  channelId: d,
                  channelType: null == a ? void 0 : a.type,
                  applicationId: i.application_id,
                  partyId:
                    null === (e = i.party) || void 0 === e ? void 0 : e.id,
                  locationObject: ie.location,
                  analyticsLocations: w,
                });
          },
          io = async (t) => {
            await (0, L.Z)({
              applicationId: t.applicationId,
              activityChannelId: null == i ? void 0 : i.id,
              locationObject: ie.location,
              analyticsLocations: w,
            });
          },
          iu = [];
        return (
          null == X ||
            X.forEach((n) => {
              let l =
                  (null == t ? void 0 : t.id) != null &&
                  n.userIds.has(null == t ? void 0 : t.id),
                a = m.Z.can(F.Plq.CREATE_INSTANT_INVITE, i),
                o = B.find(
                  (i) => (null == i ? void 0 : i.id) === n.applicationId,
                );
              if (null != n.launchId && !l && !!a && null != o)
                iu.push(
                  (0, e.jsx)(
                    d.MenuItem,
                    {
                      id: "invite-to-join-embedded",
                      label: J.intl.string(J.t["3fRyS0"]),
                      subtext: o.name,
                      action: () => {
                        id((0, U.p)(n.location), n.applicationId);
                      },
                    },
                    "self-embedded-".concat(n.applicationId),
                  ),
                );
            }),
          q.forEach((i, t) => {
            i.type === F.IIU.PLAYING && (0, M.Z)(i, F.xjy.JOIN)
              ? iu.push(
                  (0, e.jsx)(
                    d.MenuItem,
                    {
                      id: "invite-to-join",
                      label: J.intl.string(J.t["3fRyS0"]),
                      subtext: i.name,
                      action: () => il(F.mFx.JOIN, i),
                    },
                    "self".concat(t),
                  ),
                )
              : i.type === F.IIU.LISTENING &&
                (0, M.Z)(i, F.xjy.SYNC) &&
                iu.push(
                  (0, e.jsx)(
                    d.MenuItem,
                    {
                      id: "invite-to-listen",
                      label: J.intl.string(J.t["5vvGpa"]),
                      subtext: i.name,
                      action: () => il(F.mFx.LISTEN, i),
                    },
                    "self".concat(t),
                  ),
                );
          }),
          iu.length > 0 && iu.push((0, e.jsx)(d.MenuSeparator, {})),
          z.forEach((n, l) => {
            if (
              n.type === F.IIU.PLAYING &&
              (0, M.Z)(n, F.xjy.JOIN) &&
              null != n.session_id &&
              null != n.application_id
            ) {
              if (ii[l]) {
                let i = Q[l];
                iu.push(
                  (0, e.jsx)(
                    d.MenuItem,
                    {
                      id: "join",
                      label: i
                        ? J.intl.string(J.t.bf6Ci4)
                        : J.intl.string(J.t.VJlc0d),
                      disabled: i,
                      hint: i
                        ? (0, e.jsx)(d.Spinner, {
                            type: d.Spinner.Type.PULSING_ELLIPSIS,
                          })
                        : null,
                      subtext: n.name,
                      action: () => ia(n),
                    },
                    l,
                  ),
                );
              } else
                iu.push(
                  (0, e.jsx)(
                    d.MenuItem,
                    {
                      id: "ask-to-join",
                      label: J.intl.string(J.t.OKsSCQ),
                      subtext: n.name,
                      action: () => il(F.mFx.JOIN_REQUEST, n),
                    },
                    l,
                  ),
                );
            } else if (
              n.type === F.IIU.LISTENING &&
              (0, M.Z)(n, F.xjy.SYNC) &&
              null != it[l]
            ) {
              let a = it[l],
                { playDisabled: o, syncDisabled: u } = a;
              iu.push(
                (0, e.jsx)(
                  d.MenuItem,
                  {
                    id: "spotify-play-".concat(n.session_id),
                    action: () => (0, S.Z)(a, R.kG.USER_ACTIVITY_PLAY),
                    label: (0, I.Z)(a, R.kG.USER_ACTIVITY_PLAY),
                    subtext: o
                      ? (0, r.Z)(
                          a,
                          R.kG.USER_ACTIVITY_PLAY,
                          null != i
                            ? T.ZP.getNickname(i.guild_id, i.id, t)
                            : void 0,
                        )
                      : void 0,
                    disabled: o,
                  },
                  "spotify-play-".concat(n.session_id),
                ),
                (0, e.jsx)(
                  d.MenuItem,
                  {
                    id: "spotify-sync-".concat(n.session_id),
                    action: () => (0, v.Z)(a, R.kG.USER_ACTIVITY_SYNC),
                    label: J.intl.string(J.t.gXYoq6),
                    subtext: u
                      ? (0, r.Z)(
                          a,
                          R.kG.USER_ACTIVITY_SYNC,
                          null != i
                            ? T.ZP.getNickname(i.guild_id, i.id, t)
                            : void 0,
                        )
                      : void 0,
                    disabled: u,
                  },
                  "spotify-sync-".concat(n.session_id),
                ),
              );
            }
          }),
          H.forEach((i, t) => {
            var n;
            let l = i.userIds.has(
                null !== (n = null == W ? void 0 : W.id) && void 0 !== n
                  ? n
                  : F.lds,
              ),
              a = t + z.length,
              o = Q[a] || l,
              u = J.intl.string(J.t["4i2vj4"]);
            l
              ? (u = J.intl.string(J.t["0OiwfH"]))
              : Q[a] && (u = J.intl.string(J.t.bf6Ci4));
            let s = B.find(
              (t) => (null == t ? void 0 : t.id) === i.applicationId,
            );
            ii[a] &&
              null != s &&
              iu.push(
                (0, e.jsx)(
                  d.MenuItem,
                  {
                    id: "embedded-activity-join-".concat(i.applicationId),
                    label: u,
                    disabled: o,
                    hint: Q[a]
                      ? (0, e.jsx)(d.Spinner, {
                          type: d.Spinner.Type.PULSING_ELLIPSIS,
                        })
                      : null,
                    subtext: s.name,
                    action: () => io(i),
                  },
                  "embedded-activity-".concat(i.applicationId),
                ),
              );
          }),
          iu
        );
      }
    },
  },
]);
//# sourceMappingURL=ac6494e2da4052c8841f.js.map
