"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["58059"],
  {
    218035: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return S;
        },
        c: function () {
          return _;
        },
      });
      var i = n(200651);
      n(192379);
      var s = n(442837),
        r = n(481060),
        l = n(87051),
        a = n(729052),
        d = n(9156),
        o = n(621600),
        u = n(981631),
        c = n(388032);
      function g(t) {
        var e, n, i;
        let s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        switch (t.type) {
          case u.d4z.GUILD_VOICE:
            return s
              ? ((e = t),
                [
                  {
                    setting: u.bL.NULL,
                    label:
                      null != e.parent_id
                        ? c.intl.string(c.t.wlrV1d)
                        : c.intl.string(c.t["1Wn2Mz"]),
                  },
                  {
                    setting: u.bL.ALL_MESSAGES,
                    label: c.intl.string(c.t["9sGJkp"]),
                  },
                  {
                    setting: u.bL.ONLY_MENTIONS,
                    label: c.intl.format(c.t.cpcXvb, {}),
                  },
                  {
                    setting: u.bL.NO_MESSAGES,
                    label: c.intl.string(c.t.CtVGyc),
                  },
                ])
              : null;
          case u.d4z.GUILD_STAGE_VOICE:
            return (
              (n = t),
              [
                {
                  setting: u.bL.NULL,
                  label:
                    null != n.parent_id
                      ? c.intl.string(c.t.wlrV1d)
                      : c.intl.string(c.t["1Wn2Mz"]),
                },
                {
                  setting: u.bL.ONLY_MENTIONS,
                  label: c.intl.string(c.t["BENn//"]),
                },
                { setting: u.bL.NO_MESSAGES, label: c.intl.string(c.t.CtVGyc) },
              ]
            );
          default:
            return (
              (i = t),
              [
                {
                  setting: u.bL.NULL,
                  label:
                    null != i.parent_id
                      ? c.intl.string(c.t.wlrV1d)
                      : c.intl.string(c.t["1Wn2Mz"]),
                },
                {
                  setting: u.bL.ALL_MESSAGES,
                  label: c.intl.string(c.t["n/bTaW"]),
                },
                {
                  setting: u.bL.ONLY_MENTIONS,
                  label: c.intl.format(c.t.L2hmY2, {}),
                },
                { setting: u.bL.NO_MESSAGES, label: c.intl.string(c.t.CtVGyc) },
              ]
            );
        }
      }
      function _(t) {
        let e = t.getGuildId(),
          n = t.id,
          _ = (0, s.e7)(
            [d.ZP],
            () => {
              let n = u.bL.NULL;
              return (
                null != t.parent_id &&
                  (n = d.ZP.getChannelMessageNotifications(e, t.parent_id)),
                n !== u.bL.NULL ? n : d.ZP.getMessageNotifications(e)
              );
            },
            [e, t.parent_id],
          ),
          S = (0, s.e7)([d.ZP], () => d.ZP.getNewForumThreadsCreated(t)),
          L = (0, s.e7)([d.ZP], () => d.ZP.getChannelOverrides(e)[n], [e, n]),
          h = null == L ? u.bL.NULL : L.message_notifications,
          E = (0, a.p2)(t),
          N = g(t, E);
        return null == N
          ? null
          : (0, i.jsxs)(i.Fragment, {
              children: [
                t.isForumLikeChannel()
                  ? (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)(r.MenuCheckboxItem, {
                          id: "new-forum-threads-created",
                          label: c.intl.string(c.t.Rkgjpq),
                          checked: S,
                          action: () => l.Z.setForumThreadsCreated(t, !S),
                        }),
                        (0, i.jsx)(r.MenuSeparator, {}),
                      ],
                    })
                  : null,
                N.map((s) => {
                  let { setting: a, label: d } = s;
                  return (0, i.jsx)(
                    r.MenuRadioItem,
                    {
                      group: "channel-notifications",
                      id: "".concat(a),
                      label: d,
                      subtext:
                        a === u.bL.NULL
                          ? (function (t, e) {
                              let n =
                                arguments.length > 2 &&
                                void 0 !== arguments[2] &&
                                arguments[2];
                              switch (t) {
                                case u.bL.ALL_MESSAGES:
                                  return e.type === u.d4z.GUILD_VOICE && n
                                    ? c.intl.string(c.t["9sGJkp"])
                                    : c.intl.string(c.t["n/bTaW"]);
                                case u.bL.ONLY_MENTIONS:
                                  return c.intl.format(c.t.L2hmY2, {});
                                case u.bL.NO_MESSAGES:
                                  return c.intl.string(c.t.CtVGyc);
                                case u.bL.NULL:
                                default:
                                  return;
                              }
                            })(_, t, E)
                          : void 0,
                      action: () => {
                        var t;
                        return (
                          (t = a),
                          void (
                            null != e &&
                            l.Z.updateChannelOverrideSettings(
                              e,
                              n,
                              { message_notifications: t },
                              o.UE.notifications(t),
                            )
                          )
                        );
                      },
                      checked: a === h,
                    },
                    a,
                  );
                }),
              ],
            });
      }
      function S(t) {
        var e, n;
        let l = _(t),
          o = (0, s.e7)([d.ZP], () => d.ZP.resolvedMessageNotifications(t), [
            t,
          ]),
          S = (0, s.e7)(
            [d.ZP],
            () => d.ZP.getChannelOverrides(t.guild_id)[t.id],
            [t.guild_id, t.id],
          ),
          L = null == S ? u.bL.NULL : S.message_notifications,
          h = (0, a.p2)(t),
          E =
            L === u.bL.NULL && t.isGuildStageVoice()
              ? c.intl.format(c.t.L2hmY2, {})
              : null === (n = g(t, h)) || void 0 === n
                ? void 0
                : null ===
                      (e = n.find((t) => {
                        let { setting: e } = t;
                        return e === o;
                      })) || void 0 === e
                  ? void 0
                  : e.label;
        return null != l
          ? (0, i.jsx)(r.MenuItem, {
              id: "channel-notifications",
              label: c.intl.string(c.t.h850Sk),
              subtext: E,
              children: l,
            })
          : null;
      }
    },
    775666: function (t, e, n) {
      n.d(e, {
        EQ: function () {
          return N;
        },
        T5: function () {
          return M;
        },
        ZP: function () {
          return E;
        },
      }),
        n(47120),
        n(789020);
      var i = n(200651),
        s = n(192379),
        r = n(442837),
        l = n(481060),
        a = n(87051),
        d = n(221259),
        o = n(113449),
        u = n(686660),
        c = n(9156),
        g = n(621600),
        _ = n(981631),
        S = n(490897),
        L = n(526761),
        h = n(388032);
      function E(t) {
        let e = N(t);
        return t.type === _.d4z.GUILD_VOICE
          ? null
          : (0, i.jsx)(l.MenuItem, {
              id: "channel_notification_settings",
              label: h.intl.string(h.t.HcoRu7),
              children: e,
            });
      }
      function N(t) {
        let e = (0, d.ZA)(t),
          n = (0, d.yN)(t),
          o = e.preset === u.s8.CUSTOM && !n.inherited,
          [g, S] = s.useState(o),
          [L, E] = s.useState(!1),
          N = L ? u.s8.CUSTOM : e.preset,
          b = M(t, () => E(!1)),
          f = (0, r.e7)([c.ZP], () => c.ZP.getNewForumThreadsCreated(t)),
          p =
            "parent" === n.inheritedFrom
              ? h.intl.string(h.t.wlrV1d)
              : h.intl.string(h.t["1Wn2Mz"]);
        return t.type === _.d4z.GUILD_STAGE_VOICE
          ? (0, i.jsxs)(l.MenuGroup, {
              children: [
                (0, i.jsx)(l.MenuRadioItem, {
                  id: "cns_default",
                  label: p,
                  checked: n.inherited,
                  group: "channel_notification_settings",
                  subtext:
                    e.notification === _.bL.NO_MESSAGES
                      ? h.intl.string(h.t.CtVGyc)
                      : h.intl.string(h.t["BENn//"]),
                  action: () => (0, d.JK)(t.guild_id, t.id),
                }),
                (0, i.jsx)(l.MenuRadioItem, {
                  id: "cns_only_mention",
                  group: "channel_notification_settings",
                  checked: !n.inherited && e.notification !== _.bL.NO_MESSAGES,
                  label: h.intl.string(h.t["BENn//"]),
                  action: () => (0, d.ft)(t.guild_id, t.id, _.bL.ONLY_MENTIONS),
                }),
                (0, i.jsx)(l.MenuRadioItem, {
                  id: "cns_no_message",
                  group: "channel_notification_settings",
                  label: h.intl.string(h.t.CtVGyc),
                  checked: !n.inherited && e.notification === _.bL.NO_MESSAGES,
                  action: () => (0, d.ft)(t.guild_id, t.id, _.bL.NO_MESSAGES),
                }),
              ],
            })
          : (0, i.jsxs)(i.Fragment, {
              children: [
                t.isForumLikeChannel()
                  ? (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)(l.MenuCheckboxItem, {
                          id: "new-forum-threads-created",
                          label: h.intl.string(h.t.Rkgjpq),
                          checked: f,
                          action: () => a.Z.setForumThreadsCreated(t, !f),
                        }),
                        (0, i.jsx)(l.MenuSeparator, {}),
                      ],
                    })
                  : null,
                (0, i.jsxs)(l.MenuGroup, {
                  children: [
                    (0, i.jsx)(l.MenuRadioItem, {
                      id: "cns_default",
                      label: p,
                      group: "channel_notification_settings",
                      checked: n.inherited && !L,
                      subtext: n.inheritedPreset,
                      action: () => ((0, d.JK)(t.guild_id, t.id), E(!1)),
                    }),
                    (0, i.jsx)(l.MenuRadioItem, {
                      id: "cns_everything",
                      group: "channel_notification_settings",
                      label: h.intl.string(h.t.hZrr6u),
                      checked: !n.inherited && N === u.s8.ALL_MESSAGES,
                      action: () => (
                        (0, d._m)(t.guild_id, t.id, u.s8.ALL_MESSAGES), E(!1)
                      ),
                    }),
                    (0, i.jsx)(l.MenuRadioItem, {
                      id: "cns_essentials",
                      group: "channel_notification_settings",
                      label: h.intl.string(h.t.y59NJi),
                      checked: !n.inherited && N === u.s8.MENTIONS,
                      action: () => (
                        (0, d._m)(t.guild_id, t.id, u.s8.MENTIONS), E(!1)
                      ),
                    }),
                    (0, i.jsx)(l.MenuRadioItem, {
                      id: "cns_nothing",
                      group: "channel_notification_settings",
                      label: h.intl.string(h.t["pGn/bG"]),
                      checked: !n.inherited && N === u.s8.NOTHING,
                      action: () => (
                        (0, d._m)(t.guild_id, t.id, u.s8.NOTHING), E(!1)
                      ),
                    }),
                    (0, i.jsx)(l.MenuRadioItem, {
                      id: "cns_custom",
                      group: "channel_notification_settings",
                      label: h.intl.string(h.t["32yow8"]),
                      checked: L || (!n.inherited && N === u.s8.CUSTOM),
                      action: () => (S(!0), E(!0)),
                    }),
                  ],
                }),
                (g || o) && b,
              ],
            });
      }
      function M(t, e) {
        let { notification: n, unread: s } = (0, d.ZA)(t),
          r = (t) => {
            t(), e();
          },
          u = (e) => {
            let n = { message_notifications: e };
            e === _.bL.ALL_MESSAGES &&
              s !== S.i.ALL_MESSAGES &&
              (n.flags = (0, o.pq)(
                c.ZP.getChannelIdFlags(t.guild_id, t.id),
                L.ic.UNREADS_ALL_MESSAGES,
              )),
              a.Z.updateChannelOverrideSettings(
                t.guild_id,
                t.id,
                n,
                g.UE.notifications(e),
              );
          };
        return (0, i.jsxs)(l.MenuGroup, {
          children: [
            (0, i.jsxs)(
              l.MenuItem,
              {
                id: "unread_setting",
                label: "Unread Badges",
                children: [
                  (0, i.jsx)(l.MenuRadioItem, {
                    id: "unread_setting_all_messages",
                    group: "unread_setting",
                    checked: s === S.i.ALL_MESSAGES,
                    label: h.intl.string(h.t["HVah//"]),
                    action: () =>
                      r(() => (0, d.IG)(t.guild_id, t.id, S.i.ALL_MESSAGES)),
                  }),
                  (0, i.jsx)(l.MenuRadioItem, {
                    id: "unread_setting_mention_only",
                    group: "unread_setting",
                    checked: s === S.i.ONLY_MENTIONS,
                    label: h.intl.string(h.t["tu+ZWF"]),
                    disabled:
                      s !== S.i.ONLY_MENTIONS && n === _.bL.ALL_MESSAGES,
                    subtext:
                      s !== S.i.ONLY_MENTIONS && n === _.bL.ALL_MESSAGES
                        ? h.intl.string(h.t.eP8yWV)
                        : void 0,
                    action: () =>
                      r(() => (0, d.IG)(t.guild_id, t.id, S.i.ONLY_MENTIONS)),
                  }),
                ],
              },
              "unread_setting",
            ),
            (0, i.jsxs)(
              l.MenuItem,
              {
                id: "push_settings",
                label: h.intl.string(h.t.HcoRu7),
                children: [
                  (0, i.jsx)(l.MenuRadioItem, {
                    group: "notification-preset",
                    id: "push_settings_everything",
                    label: h.intl.string(h.t["HVah//"]),
                    checked: n === _.bL.ALL_MESSAGES,
                    subtext:
                      s !== S.i.ALL_MESSAGES && n !== _.bL.ALL_MESSAGES
                        ? h.intl.string(h.t.idXSbG)
                        : void 0,
                    action: () => r(() => u(_.bL.ALL_MESSAGES)),
                  }),
                  (0, i.jsx)(l.MenuRadioItem, {
                    group: "notification-preset",
                    id: "push_settings_everything_mention",
                    checked: n === _.bL.ONLY_MENTIONS,
                    label: h.intl.string(h.t["tu+ZWF"]),
                    action: () => r(() => u(_.bL.ONLY_MENTIONS)),
                  }),
                  (0, i.jsx)(l.MenuRadioItem, {
                    group: "notification-preset",
                    id: "push_settings_everything_nothing",
                    label: h.intl.string(h.t.X4wWUl),
                    checked: n === _.bL.NO_MESSAGES,
                    action: () => r(() => u(_.bL.NO_MESSAGES)),
                  }),
                ],
              },
              "push_settings",
            ),
          ],
        });
      }
    },
    221259: function (t, e, n) {
      n.d(e, {
        IG: function () {
          return N;
        },
        JK: function () {
          return E;
        },
        ZA: function () {
          return S;
        },
        _m: function () {
          return h;
        },
        ft: function () {
          return M;
        },
        yN: function () {
          return L;
        },
      }),
        n(47120);
      var i = n(399606),
        s = n(87051),
        r = n(592125),
        l = n(9156),
        a = n(621600),
        d = n(423589),
        o = n(113449),
        u = n(686660),
        c = n(981631),
        g = n(490897),
        _ = n(526761);
      function S(t) {
        let e = (0, i.e7)([l.ZP], () => l.ZP.resolveUnreadSetting(t)),
          n = (0, i.e7)([l.ZP], () => l.ZP.resolvedMessageNotifications(t));
        return { unread: e, notification: n, preset: (0, u.gs)(e, n) };
      }
      function L(t) {
        let e = (0, i.Wu)([l.ZP], () =>
            (0, d.OD)(l.ZP.getChannelOverrides(t.guild_id), {
              ignoreMute: !0,
              ignoreUnreadSetting: !1,
              ignoreNotificationSetting: !1,
            }),
          ),
          [n, s] = (0, i.Wu)(
            [l.ZP, r.Z],
            () => {
              let n = r.Z.getChannel(t.parent_id);
              return null != n && e.includes(n.id)
                ? [
                    "parent",
                    (0, u.p1)(
                      (0, u.gs)(
                        l.ZP.resolveUnreadSetting(n),
                        l.ZP.resolvedMessageNotifications(n),
                      ),
                    ),
                  ]
                : [
                    "guild",
                    (0, u.p1)(
                      (0, u.gs)(
                        l.ZP.getGuildUnreadSetting(t.guild_id),
                        l.ZP.getMessageNotifications(t.guild_id),
                      ),
                    ),
                  ];
            },
            [t.guild_id, t.parent_id, e],
          );
        return {
          inherited: !e.includes(t.id),
          inheritedFrom: n,
          inheritedPreset: s,
        };
      }
      function h(t, e, n) {
        let i = l.ZP.getChannelIdFlags(t, e);
        n === u.s8.ALL_MESSAGES
          ? s.Z.updateChannelOverrideSettings(
              t,
              e,
              {
                message_notifications: c.bL.ALL_MESSAGES,
                flags: (0, o.pq)(i, _.ic.UNREADS_ALL_MESSAGES),
              },
              a.ZB.PresetAll,
            )
          : n === u.s8.MENTIONS
            ? s.Z.updateChannelOverrideSettings(
                t,
                e,
                {
                  message_notifications: c.bL.ONLY_MENTIONS,
                  flags: (0, o.pq)(i, _.ic.UNREADS_ONLY_MENTIONS),
                },
                a.ZB.PresetMentions,
              )
            : n === u.s8.NOTHING &&
              s.Z.updateChannelOverrideSettings(
                t,
                e,
                {
                  message_notifications: c.bL.NO_MESSAGES,
                  flags: (0, o.pq)(i, _.ic.UNREADS_ONLY_MENTIONS),
                },
                a.ZB.PresetNothing,
              );
      }
      function E(t, e) {
        s.Z.updateChannelOverrideSettings(
          t,
          e,
          {
            message_notifications: c.bL.NULL,
            flags: (0, o.YF)(l.ZP.getChannelIdFlags(t, e)),
          },
          a.ZB.PresetDefault,
        );
      }
      function N(t, e, n) {
        let i = l.ZP.getChannelIdFlags(t, e);
        s.Z.updateChannelOverrideSettings(
          t,
          e,
          {
            flags: (0, o.pq)(
              i,
              n === g.i.ALL_MESSAGES
                ? _.ic.UNREADS_ALL_MESSAGES
                : _.ic.UNREADS_ONLY_MENTIONS,
            ),
          },
          a.UE.unreads(n),
        );
      }
      function M(t, e, n) {
        s.Z.updateChannelOverrideSettings(
          t,
          e,
          { message_notifications: n },
          a.UE.notifications(n),
        );
      }
    },
  },
]);
//# sourceMappingURL=3d2afbb343b60e783c0a.js.map
