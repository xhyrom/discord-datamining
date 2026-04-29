"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["42865"],
  {
    887560(e, n, t) {
      t.d(n, {
        Au: () => c,
        UD: () => _,
        bH: () => N,
        gN: () => f,
        mA: () => v,
        qk: () => E,
      });
      var i = t(702841),
        s = t(832712),
        a = t(734057),
        r = t(543465),
        d = t(477427),
        g = t(769591),
        o = t(393432),
        l = t(24873),
        A = t(652215),
        S = t(790782),
        u = t(355097);
      function N(e) {
        let n = (0, i.bG)([r.Ay], () => r.Ay.resolveUnreadSetting(e)),
          t = (0, i.bG)([r.Ay], () => r.Ay.resolvedMessageNotifications(e));
        return { unread: n, notification: t, preset: (0, l.jU)(n, t) };
      }
      function _(e) {
        let n = (0, i.yK)([r.Ay], () =>
            (0, g.ct)(r.Ay.getChannelOverrides(e.guild_id), {
              ignoreMute: !0,
              ignoreUnreadSetting: !1,
              ignoreNotificationSetting: !1,
            }),
          ),
          [t, s] = (0, i.yK)(
            [r.Ay, a.A],
            () => {
              let t = a.A.getChannel(e.parent_id);
              return null != t && n.includes(t.id)
                ? [
                    "parent",
                    (0, l.jL)(
                      (0, l.jU)(
                        r.Ay.resolveUnreadSetting(t),
                        r.Ay.resolvedMessageNotifications(t),
                      ),
                    ),
                  ]
                : [
                    "guild",
                    (0, l.jL)(
                      (0, l.jU)(
                        r.Ay.getGuildUnreadSetting(e.guild_id),
                        r.Ay.getMessageNotifications(e.guild_id),
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
      function f(e, n, t) {
        let i = r.Ay.getChannelIdFlags(e, n);
        t === l.N9.ALL_MESSAGES
          ? s.A.updateChannelOverrideSettings(
              e,
              n,
              {
                message_notifications: A.orn.ALL_MESSAGES,
                flags: (0, o.mD)(i, u.vv.UNREADS_ALL_MESSAGES),
              },
              d.fd.PresetAll,
            )
          : t === l.N9.MENTIONS
            ? s.A.updateChannelOverrideSettings(
                e,
                n,
                {
                  message_notifications: A.orn.ONLY_MENTIONS,
                  flags: (0, o.mD)(i, u.vv.UNREADS_ONLY_MENTIONS),
                },
                d.fd.PresetMentions,
              )
            : t === l.N9.NOTHING &&
              s.A.updateChannelOverrideSettings(
                e,
                n,
                {
                  message_notifications: A.orn.NO_MESSAGES,
                  flags: (0, o.mD)(i, u.vv.UNREADS_ONLY_MENTIONS),
                },
                d.fd.PresetNothing,
              );
      }
      function c(e, n) {
        s.A.updateChannelOverrideSettings(
          e,
          n,
          {
            message_notifications: A.orn.NULL,
            flags: (0, o.PW)(r.Ay.getChannelIdFlags(e, n)),
          },
          d.fd.PresetDefault,
        );
      }
      function v(e, n, t) {
        let i = r.Ay.getChannelIdFlags(e, n);
        s.A.updateChannelOverrideSettings(
          e,
          n,
          {
            flags: (0, o.mD)(
              i,
              t === S.e.ALL_MESSAGES
                ? u.vv.UNREADS_ALL_MESSAGES
                : u.vv.UNREADS_ONLY_MENTIONS,
            ),
          },
          d.G_.unreads(t),
        );
      }
      function E(e, n, t) {
        s.A.updateChannelOverrideSettings(
          e,
          n,
          { message_notifications: t },
          d.G_.notifications(t),
        );
      }
    },
  },
]);
//# sourceMappingURL=42865.d64cf959bed61ead.js.map
