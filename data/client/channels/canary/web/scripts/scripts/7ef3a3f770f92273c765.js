"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["58059"],
  {
    218035: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
        c: function () {
          return o;
        },
      });
      var i = t(735250);
      t(470079);
      var s = t(442837),
        a = t(481060),
        _ = t(87051),
        d = t(729052),
        r = t(9156),
        l = t(621600),
        L = t(981631),
        S = t(689938);
      function E(e) {
        var n, t, i;
        let s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        switch (e.type) {
          case L.d4z.GUILD_VOICE:
            return s
              ? ((n = e),
                [
                  {
                    setting: L.bL.NULL,
                    label:
                      null != n.parent_id
                        ? S.Z.Messages.FORM_LABEL_DEFAULT_CATEGORY
                        : S.Z.Messages.FORM_LABEL_DEFAULT,
                  },
                  {
                    setting: L.bL.ALL_MESSAGES,
                    label: S.Z.Messages.FORM_LABEL_ALL_VOICE_ACTIVITY,
                  },
                  {
                    setting: L.bL.ONLY_MENTIONS,
                    label: S.Z.Messages.FORM_LABEL_ONLY_TEXT_MENTIONS.format(),
                  },
                  {
                    setting: L.bL.NO_MESSAGES,
                    label: S.Z.Messages.FORM_LABEL_NOTHING,
                  },
                ])
              : null;
          case L.d4z.GUILD_STAGE_VOICE:
            return (
              (t = e),
              [
                {
                  setting: L.bL.NULL,
                  label:
                    null != t.parent_id
                      ? S.Z.Messages.FORM_LABEL_DEFAULT_CATEGORY
                      : S.Z.Messages.FORM_LABEL_DEFAULT,
                },
                {
                  setting: L.bL.ONLY_MENTIONS,
                  label: S.Z.Messages.FORM_LABEL_LIVE_STAGES_ONLY,
                },
                {
                  setting: L.bL.NO_MESSAGES,
                  label: S.Z.Messages.FORM_LABEL_NOTHING,
                },
              ]
            );
          default:
            return (
              (i = e),
              [
                {
                  setting: L.bL.NULL,
                  label:
                    null != i.parent_id
                      ? S.Z.Messages.FORM_LABEL_DEFAULT_CATEGORY
                      : S.Z.Messages.FORM_LABEL_DEFAULT,
                },
                {
                  setting: L.bL.ALL_MESSAGES,
                  label: S.Z.Messages.FORM_LABEL_ALL_MESSAGES,
                },
                {
                  setting: L.bL.ONLY_MENTIONS,
                  label: S.Z.Messages.FORM_LABEL_ONLY_MENTIONS.format(),
                },
                {
                  setting: L.bL.NO_MESSAGES,
                  label: S.Z.Messages.FORM_LABEL_NOTHING,
                },
              ]
            );
        }
      }
      function o(e) {
        let n = e.getGuildId(),
          t = e.id,
          o = (0, s.e7)(
            [r.ZP],
            () => {
              let t = L.bL.NULL;
              return (
                null != e.parent_id &&
                  (t = r.ZP.getChannelMessageNotifications(n, e.parent_id)),
                t !== L.bL.NULL ? t : r.ZP.getMessageNotifications(n)
              );
            },
            [n, e.parent_id],
          ),
          u = (0, s.e7)([r.ZP], () => r.ZP.getNewForumThreadsCreated(e)),
          g = (0, s.e7)([r.ZP], () => r.ZP.getChannelOverrides(n)[t], [n, t]),
          N = null == g ? L.bL.NULL : g.message_notifications,
          c = (0, d.p2)(e),
          M = E(e, c);
        return null == M
          ? null
          : (0, i.jsxs)(i.Fragment, {
              children: [
                e.isForumLikeChannel()
                  ? (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)(a.MenuCheckboxItem, {
                          id: "new-forum-threads-created",
                          label: S.Z.Messages.FORUM_NEW_POSTS_CREATED,
                          checked: u,
                          action: () => _.Z.setForumThreadsCreated(e, !u),
                        }),
                        (0, i.jsx)(a.MenuSeparator, {}),
                      ],
                    })
                  : null,
                M.map((s) => {
                  let { setting: d, label: r } = s;
                  return (0, i.jsx)(
                    a.MenuRadioItem,
                    {
                      group: "channel-notifications",
                      id: "".concat(d),
                      label: r,
                      subtext:
                        d === L.bL.NULL
                          ? (function (e, n) {
                              let t =
                                arguments.length > 2 &&
                                void 0 !== arguments[2] &&
                                arguments[2];
                              switch (e) {
                                case L.bL.ALL_MESSAGES:
                                  return n.type === L.d4z.GUILD_VOICE && t
                                    ? S.Z.Messages.FORM_LABEL_ALL_VOICE_ACTIVITY
                                    : S.Z.Messages.FORM_LABEL_ALL_MESSAGES;
                                case L.bL.ONLY_MENTIONS:
                                  return S.Z.Messages.FORM_LABEL_ONLY_MENTIONS.format();
                                case L.bL.NO_MESSAGES:
                                  return S.Z.Messages.FORM_LABEL_NOTHING;
                                case L.bL.NULL:
                                default:
                                  return;
                              }
                            })(o, e, c)
                          : void 0,
                      action: () => {
                        var e;
                        return (
                          (e = d),
                          void (
                            null != n &&
                            _.Z.updateChannelOverrideSettings(
                              n,
                              t,
                              { message_notifications: e },
                              l.UE.notifications(e),
                            )
                          )
                        );
                      },
                      checked: d === N,
                    },
                    d,
                  );
                }),
              ],
            });
      }
      function u(e) {
        var n, t;
        let _ = o(e),
          l = (0, s.e7)([r.ZP], () => r.ZP.resolvedMessageNotifications(e), [
            e,
          ]),
          u = (0, s.e7)(
            [r.ZP],
            () => r.ZP.getChannelOverrides(e.guild_id)[e.id],
            [e.guild_id, e.id],
          ),
          g = null == u ? L.bL.NULL : u.message_notifications,
          N = (0, d.p2)(e),
          c =
            g === L.bL.NULL && e.isGuildStageVoice()
              ? S.Z.Messages.FORM_LABEL_ONLY_MENTIONS.format()
              : null === (t = E(e, N)) || void 0 === t
                ? void 0
                : null ===
                      (n = t.find((e) => {
                        let { setting: n } = e;
                        return n === l;
                      })) || void 0 === n
                  ? void 0
                  : n.label;
        return null != _
          ? (0, i.jsx)(a.MenuItem, {
              id: "channel-notifications",
              label: S.Z.Messages.NOTIFICATION_SETTINGS,
              subtext: c,
              children: _,
            })
          : null;
      }
    },
    775666: function (e, n, t) {
      t.d(n, {
        EQ: function () {
          return M;
        },
        T5: function () {
          return O;
        },
        ZP: function () {
          return c;
        },
      }),
        t(47120),
        t(789020);
      var i = t(735250),
        s = t(470079),
        a = t(442837),
        _ = t(481060),
        d = t(87051),
        r = t(221259),
        l = t(113449),
        L = t(686660),
        S = t(9156),
        E = t(621600),
        o = t(981631),
        u = t(490897),
        g = t(526761),
        N = t(689938);
      function c(e) {
        let n = M(e);
        return e.type === o.d4z.GUILD_VOICE
          ? null
          : (0, i.jsx)(_.MenuItem, {
              id: "channel_notification_settings",
              label: N.Z.Messages.NOTIFICATIONS,
              children: n,
            });
      }
      function M(e) {
        let n = (0, r.ZA)(e),
          t = (0, r.yN)(e),
          l = n.preset === L.s8.CUSTOM && !t.inherited,
          [E, u] = s.useState(l),
          [g, c] = s.useState(!1),
          M = g ? L.s8.CUSTOM : n.preset,
          A = O(e, () => c(!1)),
          I = (0, a.e7)([S.ZP], () => S.ZP.getNewForumThreadsCreated(e)),
          T =
            "parent" === t.inheritedFrom
              ? N.Z.Messages.FORM_LABEL_DEFAULT_CATEGORY
              : N.Z.Messages.FORM_LABEL_DEFAULT;
        return e.type === o.d4z.GUILD_STAGE_VOICE
          ? (0, i.jsxs)(_.MenuGroup, {
              children: [
                (0, i.jsx)(_.MenuRadioItem, {
                  id: "cns_default",
                  label: T,
                  checked: t.inherited,
                  group: "channel_notification_settings",
                  subtext:
                    n.notification === o.bL.NO_MESSAGES
                      ? N.Z.Messages.FORM_LABEL_NOTHING
                      : N.Z.Messages.FORM_LABEL_LIVE_STAGES_ONLY,
                  action: () => (0, r.JK)(e.guild_id, e.id),
                }),
                (0, i.jsx)(_.MenuRadioItem, {
                  id: "cns_only_mention",
                  group: "channel_notification_settings",
                  checked: !t.inherited && n.notification !== o.bL.NO_MESSAGES,
                  label: N.Z.Messages.FORM_LABEL_LIVE_STAGES_ONLY,
                  action: () => (0, r.ft)(e.guild_id, e.id, o.bL.ONLY_MENTIONS),
                }),
                (0, i.jsx)(_.MenuRadioItem, {
                  id: "cns_no_message",
                  group: "channel_notification_settings",
                  label: N.Z.Messages.FORM_LABEL_NOTHING,
                  checked: !t.inherited && n.notification === o.bL.NO_MESSAGES,
                  action: () => (0, r.ft)(e.guild_id, e.id, o.bL.NO_MESSAGES),
                }),
              ],
            })
          : (0, i.jsxs)(i.Fragment, {
              children: [
                e.isForumLikeChannel()
                  ? (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)(_.MenuCheckboxItem, {
                          id: "new-forum-threads-created",
                          label: N.Z.Messages.FORUM_NEW_POSTS_CREATED,
                          checked: I,
                          action: () => d.Z.setForumThreadsCreated(e, !I),
                        }),
                        (0, i.jsx)(_.MenuSeparator, {}),
                      ],
                    })
                  : null,
                (0, i.jsxs)(_.MenuGroup, {
                  children: [
                    (0, i.jsx)(_.MenuRadioItem, {
                      id: "cns_default",
                      label: T,
                      group: "channel_notification_settings",
                      checked: t.inherited && !g,
                      subtext: t.inheritedPreset,
                      action: () => ((0, r.JK)(e.guild_id, e.id), c(!1)),
                    }),
                    (0, i.jsx)(_.MenuRadioItem, {
                      id: "cns_everything",
                      group: "channel_notification_settings",
                      label: N.Z.Messages.NOTIFICATION_PRESET_1,
                      checked: !t.inherited && M === L.s8.ALL_MESSAGES,
                      action: () => (
                        (0, r._m)(e.guild_id, e.id, L.s8.ALL_MESSAGES), c(!1)
                      ),
                    }),
                    (0, i.jsx)(_.MenuRadioItem, {
                      id: "cns_essentials",
                      group: "channel_notification_settings",
                      label: N.Z.Messages.NOTIFICATION_PRESET_2,
                      checked: !t.inherited && M === L.s8.MENTIONS,
                      action: () => (
                        (0, r._m)(e.guild_id, e.id, L.s8.MENTIONS), c(!1)
                      ),
                    }),
                    (0, i.jsx)(_.MenuRadioItem, {
                      id: "cns_nothing",
                      group: "channel_notification_settings",
                      label: N.Z.Messages.NOTIFICATION_PRESET_3,
                      checked: !t.inherited && M === L.s8.NOTHING,
                      action: () => (
                        (0, r._m)(e.guild_id, e.id, L.s8.NOTHING), c(!1)
                      ),
                    }),
                    (0, i.jsx)(_.MenuRadioItem, {
                      id: "cns_custom",
                      group: "channel_notification_settings",
                      label: N.Z.Messages.NOTIFICATION_PRESET_CUSTOM,
                      checked: g || (!t.inherited && M === L.s8.CUSTOM),
                      action: () => (u(!0), c(!0)),
                    }),
                  ],
                }),
                (E || l) && A,
              ],
            });
      }
      function O(e, n) {
        let { notification: t, unread: s } = (0, r.ZA)(e),
          a = (e) => {
            e(), n();
          },
          L = (n) => {
            let t = { message_notifications: n };
            n === o.bL.ALL_MESSAGES &&
              s !== u.i.ALL_MESSAGES &&
              (t.flags = (0, l.pq)(
                S.ZP.getChannelIdFlags(e.guild_id, e.id),
                g.ic.UNREADS_ALL_MESSAGES,
              )),
              d.Z.updateChannelOverrideSettings(
                e.guild_id,
                e.id,
                t,
                E.UE.notifications(n),
              );
          };
        return (0, i.jsxs)(_.MenuGroup, {
          children: [
            (0, i.jsxs)(
              _.MenuItem,
              {
                id: "unread_setting",
                label: "Unread Badges",
                children: [
                  (0, i.jsx)(_.MenuRadioItem, {
                    id: "unread_setting_all_messages",
                    group: "unread_setting",
                    checked: s === u.i.ALL_MESSAGES,
                    label:
                      N.Z.Messages.NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
                    action: () =>
                      a(() => (0, r.IG)(e.guild_id, e.id, u.i.ALL_MESSAGES)),
                  }),
                  (0, i.jsx)(_.MenuRadioItem, {
                    id: "unread_setting_mention_only",
                    group: "unread_setting",
                    checked: s === u.i.ONLY_MENTIONS,
                    label:
                      N.Z.Messages.NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
                    disabled:
                      s !== u.i.ONLY_MENTIONS && t === o.bL.ALL_MESSAGES,
                    subtext:
                      s !== u.i.ONLY_MENTIONS && t === o.bL.ALL_MESSAGES
                        ? N.Z.Messages
                            .NOTIFICATION_SETTINGS_UNREAD_MENTION_ONLY_DISABLED
                        : void 0,
                    action: () =>
                      a(() => (0, r.IG)(e.guild_id, e.id, u.i.ONLY_MENTIONS)),
                  }),
                ],
              },
              "unread_setting",
            ),
            (0, i.jsxs)(
              _.MenuItem,
              {
                id: "push_settings",
                label: N.Z.Messages.NOTIFICATIONS,
                children: [
                  (0, i.jsx)(_.MenuRadioItem, {
                    group: "notification-preset",
                    id: "push_settings_everything",
                    label:
                      N.Z.Messages.NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
                    checked: t === o.bL.ALL_MESSAGES,
                    subtext:
                      s !== u.i.ALL_MESSAGES && t !== o.bL.ALL_MESSAGES
                        ? N.Z.Messages
                            .NOTIFICATION_SETTINGS_UNREAD_UPDATE_WARNING
                        : void 0,
                    action: () => a(() => L(o.bL.ALL_MESSAGES)),
                  }),
                  (0, i.jsx)(_.MenuRadioItem, {
                    group: "notification-preset",
                    id: "push_settings_everything_mention",
                    checked: t === o.bL.ONLY_MENTIONS,
                    label:
                      N.Z.Messages.NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
                    action: () => a(() => L(o.bL.ONLY_MENTIONS)),
                  }),
                  (0, i.jsx)(_.MenuRadioItem, {
                    group: "notification-preset",
                    id: "push_settings_everything_nothing",
                    label: N.Z.Messages.NOTIFICATION_SETTINGS_PRESETS_NONE,
                    checked: t === o.bL.NO_MESSAGES,
                    action: () => a(() => L(o.bL.NO_MESSAGES)),
                  }),
                ],
              },
              "push_settings",
            ),
          ],
        });
      }
    },
    221259: function (e, n, t) {
      t.d(n, {
        IG: function () {
          return M;
        },
        JK: function () {
          return c;
        },
        ZA: function () {
          return u;
        },
        _m: function () {
          return N;
        },
        ft: function () {
          return O;
        },
        yN: function () {
          return g;
        },
      }),
        t(47120);
      var i = t(399606),
        s = t(87051),
        a = t(592125),
        _ = t(9156),
        d = t(621600),
        r = t(423589),
        l = t(113449),
        L = t(686660),
        S = t(981631),
        E = t(490897),
        o = t(526761);
      function u(e) {
        let n = (0, i.e7)([_.ZP], () => _.ZP.resolveUnreadSetting(e)),
          t = (0, i.e7)([_.ZP], () => _.ZP.resolvedMessageNotifications(e));
        return { unread: n, notification: t, preset: (0, L.gs)(n, t) };
      }
      function g(e) {
        let n = (0, i.Wu)([_.ZP], () =>
            (0, r.OD)(_.ZP.getChannelOverrides(e.guild_id), {
              ignoreMute: !0,
              ignoreUnreadSetting: !1,
              ignoreNotificationSetting: !1,
            }),
          ),
          [t, s] = (0, i.Wu)(
            [_.ZP, a.Z],
            () => {
              let t = a.Z.getChannel(e.parent_id);
              return null != t && n.includes(t.id)
                ? [
                    "parent",
                    (0, L.p1)(
                      (0, L.gs)(
                        _.ZP.resolveUnreadSetting(t),
                        _.ZP.resolvedMessageNotifications(t),
                      ),
                    ),
                  ]
                : [
                    "guild",
                    (0, L.p1)(
                      (0, L.gs)(
                        _.ZP.getGuildUnreadSetting(e.guild_id),
                        _.ZP.getMessageNotifications(e.guild_id),
                      ),
                    ),
                  ];
            },
            [e.guild_id, e.parent_id, n],
          );
        return {
          inherited: !n.includes(e.id),
          inheritedFrom: t,
          inheritedPreset: s,
        };
      }
      function N(e, n, t) {
        let i = _.ZP.getChannelIdFlags(e, n);
        t === L.s8.ALL_MESSAGES
          ? s.Z.updateChannelOverrideSettings(
              e,
              n,
              {
                message_notifications: S.bL.ALL_MESSAGES,
                flags: (0, l.pq)(i, o.ic.UNREADS_ALL_MESSAGES),
              },
              d.ZB.PresetAll,
            )
          : t === L.s8.MENTIONS
            ? s.Z.updateChannelOverrideSettings(
                e,
                n,
                {
                  message_notifications: S.bL.ONLY_MENTIONS,
                  flags: (0, l.pq)(i, o.ic.UNREADS_ONLY_MENTIONS),
                },
                d.ZB.PresetMentions,
              )
            : t === L.s8.NOTHING &&
              s.Z.updateChannelOverrideSettings(
                e,
                n,
                {
                  message_notifications: S.bL.NO_MESSAGES,
                  flags: (0, l.pq)(i, o.ic.UNREADS_ONLY_MENTIONS),
                },
                d.ZB.PresetNothing,
              );
      }
      function c(e, n) {
        s.Z.updateChannelOverrideSettings(
          e,
          n,
          {
            message_notifications: S.bL.NULL,
            flags: (0, l.YF)(_.ZP.getChannelIdFlags(e, n)),
          },
          d.ZB.PresetDefault,
        );
      }
      function M(e, n, t) {
        let i = _.ZP.getChannelIdFlags(e, n);
        s.Z.updateChannelOverrideSettings(
          e,
          n,
          {
            flags: (0, l.pq)(
              i,
              t === E.i.ALL_MESSAGES
                ? o.ic.UNREADS_ALL_MESSAGES
                : o.ic.UNREADS_ONLY_MENTIONS,
            ),
          },
          d.UE.unreads(t),
        );
      }
      function O(e, n, t) {
        s.Z.updateChannelOverrideSettings(
          e,
          n,
          { message_notifications: t },
          d.UE.notifications(t),
        );
      }
    },
  },
]);
//# sourceMappingURL=7ef3a3f770f92273c765.js.map
