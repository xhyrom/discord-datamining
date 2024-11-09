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
          return J;
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
        h = n(650774),
        f = n(430824),
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
        U = n(527805),
        Y = n(620662),
        M = n(841784),
        V = n(275920),
        k = n(701488),
        D = n(981631),
        F = n(616922),
        R = n(388032);
      function J(i, t) {
        let { analyticsLocations: J } = (0, s.ZP)(),
          w = (0, l.e7)([x.default], () => x.default.getCurrentUser()),
          W = (0, l.e7)([G.ZP], () => G.ZP.getSelfEmbeddedActivities()),
          X = (0, l.Wu)([C.Z], () =>
            C.Z.getActivities().filter(
              (i) =>
                null == i.application_id ||
                !(null == W ? void 0 : W.has(i.application_id)),
            ),
          ),
          q = (0, l.Wu)(
            [N.Z],
            () =>
              null != t
                ? N.Z.getActivities(t.id, null == i ? void 0 : i.getGuildId())
                : [],
            [t, i],
          ),
          z = (0, l.Wu)(
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
          H = (0, l.e7)(
            [m.Z],
            () => null == i || i.isPrivate() || m.Z.can(D.Plq.SEND_MESSAGES, i),
            [i],
          ),
          K = (0, l.Wu)(
            [j.Z],
            () => [
              ...q.map(
                (i) =>
                  null != i.application_id &&
                  j.Z.getState(i.application_id, D.mFx.JOIN) === D.OcF.LOADING,
              ),
              ...z.map(
                (i) =>
                  j.Z.getState(i.applicationId, D.mFx.JOIN) === D.OcF.LOADING,
              ),
            ],
            [q, z],
          ),
          Q = (0, c.Z)([
            ...q
              .filter((i) => (null == i ? void 0 : i.application_id) != null)
              .map((i) => i.application_id),
            ...z.map((i) => i.applicationId),
          ]),
          B = null == i ? void 0 : i.id,
          $ = (0, l.Wu)(
            [_.Z, f.Z, h.Z, b.Z, E.Z, g.Z, m.Z],
            () => [
              ...q.map((i) =>
                (0, O.Z)({
                  user: null != t ? t : w,
                  activity: i,
                  application: Q.find(
                    (t) => (null == t ? void 0 : t.id) === i.application_id,
                  ),
                  channelId: B,
                  currentUser: w,
                  isEmbedded: (0, M.Z)(i),
                  ChannelStore: _.Z,
                  GuildStore: f.Z,
                  GuildMemberCountStore: h.Z,
                  RelationshipStore: b.Z,
                  SelectedChannelStore: E.Z,
                  VoiceStateStore: g.Z,
                  PermissionStore: m.Z,
                }),
              ),
              ...z.map((i) => {
                let n = null != t ? t : w;
                return (
                  null != n &&
                  (0, U.ZP)({
                    userId: n.id,
                    application: Q.find(
                      (t) => (null == t ? void 0 : t.id) === i.applicationId,
                    ),
                    channelId: B,
                    currentUser: w,
                    isActivitiesEnabledForCurrentPlatform: (0, P.a)(),
                    ChannelStore: _.Z,
                    GuildStore: f.Z,
                    VoiceStateStore: g.Z,
                    PermissionStore: m.Z,
                  }) === U.Fw.CAN_JOIN
                );
              }),
            ],
            [q, Q, B, w, z, t],
          ),
          ii = (0, l.Wu)(
            [p.Z, y.default],
            () =>
              q.map((i) =>
                i.type === D.IIU.LISTENING && null != t
                  ? (0, Z.Z)(p.Z, y.default, t, i)
                  : void 0,
              ),
            [t, q],
          ),
          it = (0, u.O)();
        if (!H && (null == i ? void 0 : i.type) !== D.d4z.GUILD_VOICE)
          return null;
        let ie = (n, e) => {
            null != i
              ? a.Z.sendActivityInvite({
                  type: n,
                  channelId: i.id,
                  activity: e,
                  location: D.Sbl.CONTEXT_MENU,
                })
              : null != t &&
                a.Z.sendActivityInviteUser({
                  type: n,
                  userId: t.id,
                  activity: e,
                  location: D.Sbl.CONTEXT_MENU,
                });
          },
          il = (l, a) => {
            let o = _.Z.getChannel(l),
              u = null == o ? void 0 : f.Z.getGuild(o.guild_id);
            return null == o || null == u
              ? void 0
              : null != t
                ? A.pu({
                    channelId: o.id,
                    applicationId: a,
                    userId: t.id,
                    location: D.t4x.CONTEXT_MENU,
                  })
                : null != i && i.type === D.d4z.GUILD_VOICE
                  ? (0, d.openModalLazy)(
                      async () => {
                        let { default: t } = await Promise.all([
                          n.e("7654"),
                          n.e("1187"),
                          n.e("79254"),
                        ]).then(n.bind(n, 560114));
                        return (n) =>
                          (0, e.jsx)(t, {
                            ...n,
                            guild: u,
                            channel: o,
                            applicationId: a,
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
                    ? A.sN({
                        activityChannelId: o.id,
                        invitedChannelId: i.id,
                        applicationId: a,
                        location: D.t4x.CONTEXT_MENU,
                      })
                    : void 0;
          },
          id = async (i) => {
            var n, e;
            let l = (0, Y.Z)(i, D.xjy.EMBEDDED),
              d = E.Z.getVoiceChannelId(),
              a = _.Z.getChannel(d);
            await o.Z.join({
              userId: t.id,
              sessionId: i.session_id,
              applicationId: i.application_id,
              channelId: d,
              messageId: null,
              intent: k.Ws.PLAY,
              embedded: l,
              partyId: null === (n = i.party) || void 0 === n ? void 0 : n.id,
              locationObject: it.location,
              analyticsLocations: J,
            }),
              !l &&
                (0, V.Z)({
                  type: D.q5t.JOIN,
                  userId: t.id,
                  guildId: null == a ? void 0 : a.guild_id,
                  channelId: d,
                  channelType: null == a ? void 0 : a.type,
                  applicationId: i.application_id,
                  partyId:
                    null === (e = i.party) || void 0 === e ? void 0 : e.id,
                  locationObject: it.location,
                  analyticsLocations: J,
                });
          },
          ia = async (t) => {
            await (0, L.Z)({
              applicationId: t.applicationId,
              activityChannelId: null == i ? void 0 : i.id,
              locationObject: it.location,
              analyticsLocations: J,
            });
          },
          io = [];
        return (
          null == W ||
            W.forEach((n) => {
              let l =
                  (null == t ? void 0 : t.id) != null &&
                  n.userIds.has(null == t ? void 0 : t.id),
                a = m.Z.can(D.Plq.CREATE_INSTANT_INVITE, i),
                o = Q.find(
                  (i) => (null == i ? void 0 : i.id) === n.applicationId,
                );
              if (null != n.launchId && !l && !!a && null != o)
                io.push(
                  (0, e.jsx)(
                    d.MenuItem,
                    {
                      id: "invite-to-join-embedded",
                      label: R.intl.string(R.t["3fRyS0"]),
                      subtext: o.name,
                      action: () => {
                        il(n.channelId, n.applicationId);
                      },
                    },
                    "self-embedded-".concat(n.applicationId),
                  ),
                );
            }),
          X.forEach((i, t) => {
            i.type === D.IIU.PLAYING && (0, Y.Z)(i, D.xjy.JOIN)
              ? io.push(
                  (0, e.jsx)(
                    d.MenuItem,
                    {
                      id: "invite-to-join",
                      label: R.intl.string(R.t["3fRyS0"]),
                      subtext: i.name,
                      action: () => ie(D.mFx.JOIN, i),
                    },
                    "self".concat(t),
                  ),
                )
              : i.type === D.IIU.LISTENING &&
                (0, Y.Z)(i, D.xjy.SYNC) &&
                io.push(
                  (0, e.jsx)(
                    d.MenuItem,
                    {
                      id: "invite-to-listen",
                      label: R.intl.string(R.t["5vvGpa"]),
                      subtext: i.name,
                      action: () => ie(D.mFx.LISTEN, i),
                    },
                    "self".concat(t),
                  ),
                );
          }),
          io.length > 0 && io.push((0, e.jsx)(d.MenuSeparator, {})),
          q.forEach((n, l) => {
            if (
              n.type === D.IIU.PLAYING &&
              (0, Y.Z)(n, D.xjy.JOIN) &&
              null != n.session_id &&
              null != n.application_id
            ) {
              if ($[l]) {
                let i = K[l];
                io.push(
                  (0, e.jsx)(
                    d.MenuItem,
                    {
                      id: "join",
                      label: i
                        ? R.intl.string(R.t.bf6Ci4)
                        : R.intl.string(R.t.VJlc0d),
                      disabled: i,
                      hint: i
                        ? (0, e.jsx)(d.Spinner, {
                            type: d.Spinner.Type.PULSING_ELLIPSIS,
                          })
                        : null,
                      subtext: n.name,
                      action: () => id(n),
                    },
                    l,
                  ),
                );
              } else
                io.push(
                  (0, e.jsx)(
                    d.MenuItem,
                    {
                      id: "ask-to-join",
                      label: R.intl.string(R.t.OKsSCQ),
                      subtext: n.name,
                      action: () => ie(D.mFx.JOIN_REQUEST, n),
                    },
                    l,
                  ),
                );
            } else if (
              n.type === D.IIU.LISTENING &&
              (0, Y.Z)(n, D.xjy.SYNC) &&
              null != ii[l]
            ) {
              let a = ii[l],
                { playDisabled: o, syncDisabled: u } = a;
              io.push(
                (0, e.jsx)(
                  d.MenuItem,
                  {
                    id: "spotify-play-".concat(n.session_id),
                    action: () => (0, S.Z)(a, F.kG.USER_ACTIVITY_PLAY),
                    label: (0, I.Z)(a, F.kG.USER_ACTIVITY_PLAY),
                    subtext: o
                      ? (0, r.Z)(
                          a,
                          F.kG.USER_ACTIVITY_PLAY,
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
                    action: () => (0, v.Z)(a, F.kG.USER_ACTIVITY_SYNC),
                    label: R.intl.string(R.t.gXYoq6),
                    subtext: u
                      ? (0, r.Z)(
                          a,
                          F.kG.USER_ACTIVITY_SYNC,
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
          z.forEach((i, t) => {
            var n;
            let l = i.userIds.has(
                null !== (n = null == w ? void 0 : w.id) && void 0 !== n
                  ? n
                  : D.lds,
              ),
              a = t + q.length,
              o = K[a] || l,
              u = R.intl.string(R.t["4i2vj4"]);
            l
              ? (u = R.intl.string(R.t["0OiwfH"]))
              : K[a] && (u = R.intl.string(R.t.bf6Ci4));
            let s = Q.find(
              (t) => (null == t ? void 0 : t.id) === i.applicationId,
            );
            $[a] &&
              null != s &&
              io.push(
                (0, e.jsx)(
                  d.MenuItem,
                  {
                    id: "embedded-activity-join-".concat(i.applicationId),
                    label: u,
                    disabled: o,
                    hint: K[a]
                      ? (0, e.jsx)(d.Spinner, {
                          type: d.Spinner.Type.PULSING_ELLIPSIS,
                        })
                      : null,
                    subtext: s.name,
                    action: () => ia(i),
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
//# sourceMappingURL=d16106d2a5275e2c5139.js.map
