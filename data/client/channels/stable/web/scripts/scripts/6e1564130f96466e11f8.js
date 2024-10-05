"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["77425"],
  {
    296507: function (e) {
      e.exports = "/assets/8447e4e321cc04bd6a4c.svg";
    },
    866402: function (e) {
      e.exports = "/assets/9d5696b9d1f0b77fd074.svg";
    },
    77810: function (e, n, t) {
      t.d(n, {
        q: function () {
          return r;
        },
      }),
        t(724458),
        t(653041);
      var a = t(442837),
        l = t(146085),
        s = t(984933),
        i = t(496675);
      function r(e) {
        var n;
        let t =
          null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : null;
        return (0, a.Wu)(
          [s.ZP, i.Z],
          () =>
            s.ZP.getChannels(t)[s.Zb].reduce((e, n) => {
              let t = n.channel;
              return t.isGuildStageVoice()
                ? ((function (e) {
                    let n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : i.Z;
                    return !!e.isGuildStageVoice() && n.can(l.yP, e);
                  })(n.channel, i.Z) && e.push(t),
                  e)
                : e;
            }, []),
          [t],
        );
      }
    },
    40623: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return r;
        },
      });
      var a = t(735250);
      t(470079);
      var l = t(481060),
        s = t(689938),
        i = t(701424);
      function r(e) {
        let { sendStartNotification: n, setSendStartNotification: t } = e,
          r = n
            ? s.Z.Messages.GUILD_NOTIFY_MEMBERS_ENABLED_NEW
            : s.Z.Messages.GUILD_NOTIFY_MEMBERS_DISABLED_NEW;
        return (0, a.jsx)("div", {
          className: i.notificationToggle,
          children: (0, a.jsx)(l.Checkbox, {
            type: l.Checkbox.Types.INVERTED,
            size: 14,
            className: i.__invalid_checkbox,
            value: n,
            onChange: function () {
              t(!n);
            },
            children: (0, a.jsx)(l.Text, {
              color: "header-secondary",
              variant: "text-sm/normal",
              children: (0, a.jsx)(l.Tooltip, {
                position: "bottom",
                tooltipClassName: i.tooltip,
                text: s.Z.Messages.GUILD_NOTIFY_MEMBERS_TOOLTIP_NEW,
                "aria-label": s.Z.Messages.GUILD_NOTIFY_MEMBERS_TOOLTIP_NEW,
                children: (e) => (0, a.jsx)("span", { ...e, children: r }),
              }),
            }),
          }),
        });
      }
    },
    401876: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return d;
        },
      });
      var a = t(735250),
        l = t(470079),
        s = t(481060),
        i = t(377171),
        r = t(854698),
        o = t(689938),
        c = t(94277);
      function d(e) {
        let { startDate: n, recurrenceRule: t, onRecurrenceChange: d } = e,
          u = l.useMemo(() => (0, r.zi)(n, t), [t, n]),
          _ = (0, r.P8)(n),
          E = (e) => e.toString(),
          h = (0, a.jsxs)("div", {
            className: c.title,
            children: [
              o.Z.Messages.CREATE_EVENT_RECUR_LABEL,
              (0, a.jsx)(s.TextBadge, {
                text: o.Z.Messages.NEW,
                color: i.Z.BG_BRAND,
              }),
            ],
          });
        return (0, a.jsx)(s.FormItem, {
          title: h,
          required: !0,
          children: (0, a.jsx)(s.Select, {
            placeholder: "gaming",
            options: _,
            select: d,
            serialize: E,
            isSelected: (e) => null != u && E(e) === E(u),
          }),
        });
      }
    },
    440371: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var a = t(735250);
      t(470079);
      var l = t(913527),
        s = t.n(l),
        i = t(481060),
        r = t(854698),
        o = t(401876),
        c = t(689938),
        d = t(805553);
      function u(e) {
        let {
          className: n,
          onScheduleChange: t,
          onRecurrenceChange: l,
          onTimeChange: u,
          timeSelected: _ = !0,
          schedule: E,
          recurrenceRule: h,
          showEndDate: T = !1,
          requireEndDate: m = !1,
          disableStartDateTime: I = !1,
        } = e;
        if (null == E) return null;
        let N = null,
          x = E.startDate,
          f = s()(),
          g = s()().add(r.G3, "days"),
          S = s()().add(r.Ib, "days");
        null != h && (g.add(r.hn, "years"), S.add(r.hn, "years"));
        let C = (e) => {
          t({ ...E, endDate: e });
        };
        return (
          T &&
            (N =
              null != E.endDate || m
                ? (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsxs)("div", {
                        className: d.doubleInput,
                        children: [
                          (0, a.jsx)(i.FormItem, {
                            title: c.Z.Messages.CREATE_EVENT_END_DATE_LABEL,
                            required: m,
                            children: (0, a.jsx)(i.DateInput, {
                              value: E.endDate,
                              onSelect: C,
                              minDate: E.startDate,
                              maxDate: S,
                            }),
                          }),
                          (0, a.jsx)(i.FormItem, {
                            title: c.Z.Messages.CREATE_EVENT_END_TIME_LABEL,
                            required: m,
                            children: (0, a.jsx)(i.TimeInput, {
                              value: E.endDate,
                              onChange: C,
                            }),
                          }),
                        ],
                      }),
                      m
                        ? null
                        : (0, a.jsx)(i.Button, {
                            onClick: () => {
                              C(void 0);
                            },
                            look: i.Button.Looks.BLANK,
                            size: i.Button.Sizes.MIN,
                            children: (0, a.jsxs)("div", {
                              className: d.link,
                              children: [
                                (0, a.jsx)(i.CircleXIcon, {
                                  size: "custom",
                                  color: "currentColor",
                                  width: 17,
                                  height: 17,
                                  className: d.removeIcon,
                                }),
                                (0, a.jsx)(i.Text, {
                                  variant: "text-sm/normal",
                                  children:
                                    c.Z.Messages
                                      .CREATE_EVENT_REMOVE_END_TIME_LABEL,
                                }),
                              ],
                            }),
                          }),
                    ],
                  })
                : (0, a.jsx)(i.Button, {
                    look: i.Button.Looks.BLANK,
                    size: i.Button.Sizes.MIN,
                    onClick: () => {
                      C(s()(E.startDate).add(1, "hour"));
                    },
                    children: (0, a.jsxs)("div", {
                      className: d.link,
                      children: [
                        (0, a.jsx)(i.CirclePlusIcon, {
                          size: "custom",
                          color: "currentColor",
                          width: 20,
                          height: 20,
                          className: d.addIcon,
                        }),
                        (0, a.jsx)(i.Text, {
                          variant: "text-sm/normal",
                          children:
                            c.Z.Messages.CREATE_EVENT_ADD_END_TIME_LABEL,
                        }),
                      ],
                    }),
                  })),
          (0, a.jsxs)("div", {
            className: n,
            children: [
              (0, a.jsxs)("div", {
                className: d.doubleInput,
                children: [
                  (0, a.jsx)(i.FormItem, {
                    title: c.Z.Messages.CREATE_EVENT_START_DATE_LABEL,
                    required: !0,
                    children: (0, a.jsx)(i.DateInput, {
                      value: E.startDate,
                      onSelect: (e) => {
                        t({ ...E, startDate: e });
                      },
                      minDate: f,
                      maxDate: g,
                      disabled: I,
                    }),
                  }),
                  (0, a.jsx)(i.FormItem, {
                    title: c.Z.Messages.CREATE_EVENT_START_TIME_LABEL,
                    required: !0,
                    children: (0, a.jsx)(i.TimeInput, {
                      value: E.startDate,
                      onChange: (e) => {
                        if (!!e.isValid())
                          null == u || u(!0), t({ ...E, startDate: e });
                      },
                      hideValue: !_,
                      disabled: I,
                    }),
                  }),
                ],
              }),
              N,
              null != x &&
                null != l &&
                (0, a.jsx)(o.Z, {
                  onRecurrenceChange: l,
                  startDate: x,
                  recurrenceRule: h,
                }),
            ],
          })
        );
      }
    },
    131154: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      });
      var a = t(735250);
      t(470079);
      var l = t(120356),
        s = t.n(l),
        i = t(481060),
        r = t(689938),
        o = t(571032);
      function c(e) {
        let { guild: n, speakers: t, speakerCount: l, className: c } = e,
          d = t.slice(0, 5),
          u = d.map((e) => {
            var t, l;
            return (0, a.jsxs)(
              "div",
              {
                className: o.speakerContainer,
                children: [
                  (0, a.jsx)(i.Avatar, {
                    src:
                      null == e
                        ? void 0
                        : null === (t = e.user) || void 0 === t
                          ? void 0
                          : t.getAvatarURL(n.id, 20),
                    size: i.AvatarSizes.SIZE_20,
                    className: o.avatar,
                    "aria-label": "".concat(
                      null == e ? void 0 : e.userNick,
                      "-avatar",
                    ),
                  }),
                  (0, a.jsx)("div", {
                    className: o.textInGridContainer,
                    children: (0, a.jsx)(i.Text, {
                      color: "header-secondary",
                      variant: "text-sm/normal",
                      className: o.textInGrid,
                      children: null == e ? void 0 : e.userNick,
                    }),
                  }),
                ],
              },
              null == e
                ? void 0
                : null === (l = e.user) || void 0 === l
                  ? void 0
                  : l.id,
            );
          }),
          _ = l - d.length;
        return (0, a.jsxs)("div", {
          className: s()(o.grid, c),
          children: [
            u,
            _ > 0 &&
              (0, a.jsxs)("div", {
                className: o.speakerContainer,
                children: [
                  (0, a.jsx)("div", {
                    className: o.iconMicrophone,
                    children: (0, a.jsx)(i.MicrophoneIcon, {
                      size: "custom",
                      color: "currentColor",
                      height: 12,
                    }),
                  }),
                  (0, a.jsx)(i.Text, {
                    color: "header-secondary",
                    variant: "text-sm/normal",
                    className: o.textInGrid,
                    children:
                      r.Z.Messages.STAGE_DISCOVERY_LIVE_STAGE_TILE_SPEAKER_SUMMARY_OVERFLOW.format(
                        { count: _ },
                      ),
                  }),
                ],
              }),
          ],
        });
      }
    },
    570188: function (e, n, t) {
      t.d(n, {
        J: function () {
          return r;
        },
        U: function () {
          return o;
        },
      });
      var a = t(442837),
        l = t(650774),
        s = t(496675),
        i = t(231338);
      function r(e) {
        return (0, a.e7)(
          [s.Z],
          () => null != e && s.Z.can(i.Pl.MENTION_EVERYONE, e),
          [e],
        );
      }
      function o(e) {
        let n = null == e ? void 0 : e.guild_id,
          t = (0, a.e7)([l.Z], () => l.Z.getMemberCount(n), [n]);
        return null == e || (null != t && !(t > 5e4) && !0);
      }
    },
    471253: function (e, n, t) {
      t.d(n, {
        DT: function () {
          return S;
        },
        Ef: function () {
          return p;
        },
        HO: function () {
          return A;
        },
        NZ: function () {
          return j;
        },
        Pq: function () {
          return v;
        },
        Q1: function () {
          return N;
        },
        RK: function () {
          return f;
        },
        _0: function () {
          return x;
        },
        hz: function () {
          return C;
        },
        yi: function () {
          return g;
        },
      });
      var a = t(512722),
        l = t.n(a),
        s = t(149765),
        i = t(544891),
        r = t(493683);
      t(749210);
      var o = t(911969),
        c = t(367907),
        d = t(944486),
        u = t(979651),
        _ = t(700785),
        E = t(922482),
        h = t(192079),
        T = t(706058),
        m = t(590415),
        I = t(981631);
      function N(e, n) {
        let t = e.getGuildId();
        return (
          l()(null != t, "This channel cannot be guildless."),
          n && (0, c.yw)(I.rMx.REQUEST_TO_SPEAK_INITIATED, { ...(0, h.s$)(e) }),
          i.tn.patch({
            url: I.ANM.UPDATE_VOICE_STATE(t),
            body: {
              request_to_speak_timestamp: n ? new Date().toISOString() : null,
              channel_id: e.id,
            },
          })
        );
      }
      function x(e, n) {
        let t = e.getGuildId();
        return (
          l()(null != t, "This channel cannot be guildless."),
          i.tn.patch({
            url: I.ANM.UPDATE_VOICE_STATE(t, n),
            body: {
              suppress: !1,
              request_to_speak_timestamp: new Date().toISOString(),
              channel_id: e.id,
            },
          })
        );
      }
      function f(e, n) {
        let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          a = null == e ? void 0 : e.getGuildId();
        l()(null != a, "This channel cannot be guildless.");
        let s = u.Z.getVoiceStateForChannel(e.id);
        return (
          (0, m.gf)(s) === m.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK &&
            !n &&
            (0, c.yw)(I.rMx.PROMOTED_TO_SPEAKER, { ...(0, h.s$)(e) }),
          i.tn.patch({
            url: I.ANM.UPDATE_VOICE_STATE(a),
            body: {
              suppress: n,
              request_to_speak_timestamp: null,
              channel_id: e.id,
              ...(t ? { silent: t } : {}),
            },
          })
        );
      }
      function g(e) {
        let n = null == e ? void 0 : e.getGuildId();
        return (
          l()(null != n, "This channel cannot be guildless."),
          i.tn.patch({
            url: I.ANM.UPDATE_VOICE_STATE(n),
            body: {
              suppress: !0,
              channel_id: e.id,
              self_video: !1,
              self_stream: !1,
            },
          })
        );
      }
      function S(e, n, t) {
        let a = e.getGuildId();
        return (
          l()(null != a, "This channel cannot be guildless."),
          i.tn.patch({
            url: I.ANM.UPDATE_VOICE_STATE(a, n),
            body: { suppress: t, channel_id: e.id },
          })
        );
      }
      function C(e, n) {
        if (null == n || null == e) return;
        let t = n.getGuildId();
        return (
          l()(null != t, "This channel cannot be guildless."),
          S(n, e.id, !0),
          i.tn.patch({
            url: I.ANM.UPDATE_VOICE_STATE(t, e.id),
            body: {
              suppress: !0,
              channel_id: n.id,
              self_video: !1,
              self_stream: !1,
            },
          })
        );
      }
      function v(e, n, t) {
        let a = e.getGuildId();
        l()(null != a, "Channel cannot be guildless");
        let i = e.permissionOverwrites[a],
          c = { id: a, type: o.BN.ROLE, allow: _.Hn, deny: _.Hn, ...i };
        t
          ? ((c.allow = s.IH(c.allow, n)), (c.deny = s.Od(c.deny, n)))
          : ((c.allow = s.Od(c.allow, n)), (c.deny = s.IH(c.deny, n))),
          r.Z.updatePermissionOverwrite(e.id, c);
      }
      async function A(e, n, t, a) {
        if ("" === n) return;
        d.Z.getVoiceChannelId() !== e.id && (0, E.TM)(e);
        let l = await (0, T.me)(e.id, n, t, a);
        return f(e, !1, !0), l;
      }
      async function p(e, n, t) {
        if ("" !== n) return await (0, T.Dk)(e.id, n, t);
      }
      async function j(e) {
        await (0, T.Ix)(e.id);
      }
    },
    192079: function (e, n, t) {
      t.d(n, {
        ER: function () {
          return u;
        },
        kk: function () {
          return _;
        },
        s$: function () {
          return E;
        },
      }),
        t(724458),
        t(47120),
        t(392711);
      var a = t(19780),
        l = t(5192),
        s = t(700785),
        i = t(427679),
        r = t(157925),
        o = t(981631),
        c = t(71080),
        d = t(689938);
      function u(e, n, t, a) {
        let s = n[0],
          i = l.ZP.getName(e, t, s),
          r = null != a ? a : n.length;
        return 1 === r && null != s
          ? i
          : null == s
            ? d.Z.Messages.SPEAKING_COUNT.format({ count: r })
            : d.Z.Messages.USER_SUMMARY_WITH_OTHERS.format({
                name: i,
                count: r - 1,
              });
      }
      function _(e, n) {
        switch (e) {
          case c.aC.OWNER:
            return d.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_OWNER;
          case c.aC.ADMINISTRATOR:
            return d.Z.Messages
              .CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_ADMINISTRATOR;
          case c.aC.MEMBER:
          case c.aC.ROLE:
            return n
              ? d.Z.Messages.CHANNEL_PERMISSIONS_CANNOT_REMOVE_PERMISSIONS
              : d.Z.Messages.CHANNEL_PERMISSIONS_REMOVE_MODERATOR_TOOLTIP;
          case c.aC.EMPTY_STATE:
        }
        return null;
      }
      function E(e) {
        let n = i.Z.getStageInstanceByChannel(e.id);
        return {
          channel_id: e.id,
          guild_id: e.guild_id,
          topic: null == n ? void 0 : n.topic,
          media_session_id: a.Z.getMediaSessionId(),
          request_to_speak_state: s.Uu(o.Plq.REQUEST_TO_SPEAK, e)
            ? r.BM.EVERYONE
            : r.BM.NO_ONE,
          stage_instance_id: null == n ? void 0 : n.id,
        };
      }
    },
    706058: function (e, n, t) {
      t.d(n, {
        Dk: function () {
          return i;
        },
        Ix: function () {
          return r;
        },
        me: function () {
          return s;
        },
      });
      var a = t(544891),
        l = t(981631);
      async function s(e, n, t, s, i) {
        return (
          await a.tn.post({
            url: l.ANM.STAGE_INSTANCES,
            body: {
              channel_id: e,
              topic: n,
              privacy_level: t,
              guild_scheduled_event_id: i,
              send_start_notification: s,
            },
          })
        ).body;
      }
      async function i(e, n, t) {
        return (
          await a.tn.patch({
            url: l.ANM.STAGE_INSTANCE(e),
            body: { topic: n, privacy_level: t },
          })
        ).body;
      }
      function r(e) {
        return a.tn.del(l.ANM.STAGE_INSTANCE(e));
      }
    },
    38981: function (e, n, t) {
      var a = t(735250);
      t(470079);
      var l = t(120356),
        s = t.n(l),
        i = t(481060),
        r = t(249133);
      n.Z = function (e) {
        let { count: n, className: t } = e;
        return (0, a.jsxs)("div", {
          className: s()(r.container, t),
          children: [
            (0, a.jsx)(i.HeadphonesIcon, {
              size: "custom",
              color: "currentColor",
              width: 12,
              height: 12,
              className: r.icon,
            }),
            (0, a.jsx)(i.Text, {
              color: "header-secondary",
              variant: "text-sm/normal",
              children: null != n ? n : 0,
            }),
          ],
        });
      };
    },
    582019: function (e, n, t) {
      t.d(n, {
        Xd: function () {
          return m;
        },
        mv: function () {
          return T;
        },
      });
      var a = t(735250);
      t(470079);
      var l = t(442837),
        s = t(692547),
        i = t(481060),
        r = t(239091),
        o = t(584511),
        c = t(112831),
        d = t(51144),
        u = t(88751),
        _ = t(930180),
        E = t(689938),
        h = t(578814);
      let T = (e) => {
          let { channelId: n } = e,
            t = (0, _._d)(n);
          return 0 === t
            ? null
            : (0, a.jsxs)("div", {
                className: h.blockedNotice,
                children: [
                  (0, a.jsx)(i.DenyIcon, {
                    size: "lg",
                    className: h.__invalid_blockedIcon,
                    color: s.Z.unsafe_rawColors.RED_400.css,
                  }),
                  (0, a.jsx)(i.Text, {
                    variant: "text-xs/normal",
                    color: "header-secondary",
                    children:
                      E.Z.Messages.STAGE_BLOCKED_USERS_DESCRIPTION_COUNT.format(
                        { number: t },
                      ),
                  }),
                  (0, a.jsx)(i.Clickable, {
                    className: h.blockedButton,
                    onClick: (e) => {
                      (0, r.vq)(
                        e,
                        (e) => (0, a.jsx)(I, { ...e, channelId: n }),
                        { position: "left", align: "bottom" },
                      );
                    },
                    children: E.Z.Messages.VIEW_ALL,
                  }),
                ],
              });
        },
        m = (e) => {
          let { user: n, showStatus: t, speaker: s, channelId: r } = e,
            _ = (0, l.e7)([u.ZP], () => u.ZP.isModerator(n.id, r)),
            T = null;
          return (
            t &&
              (T = s
                ? E.Z.Messages.STAGE_SPEAKER
                : _
                  ? E.Z.Messages.STAGE_MODERATOR_TOOLTIP
                  : E.Z.Messages.STAGE_AUDIENCE),
            (0, a.jsxs)("div", {
              className: h.user,
              children: [
                (0, a.jsx)(
                  o.Z,
                  {
                    src: n.getAvatarURL(null, 32),
                    size: i.AvatarSizes.SIZE_32,
                    muted: !1,
                    deafen: !1,
                    speaking: !1,
                    ringing: !1,
                    renderIcon: s
                      ? () =>
                          (0, a.jsx)(i.MicrophoneIcon, {
                            size: "md",
                            color: "currentColor",
                            className: h.icon,
                          })
                      : null,
                  },
                  n.id,
                ),
                (0, a.jsxs)("div", {
                  className: h.userInfo,
                  children: [
                    (0, a.jsxs)("div", {
                      className: h.username,
                      children: [
                        (0, a.jsx)(c.Z, {
                          size: t ? c.Z.Sizes.SIZE_16 : c.Z.Sizes.SIZE_14,
                          children: d.ZP.getName(n),
                        }),
                        (0, a.jsx)(c.Z, {
                          size: t ? c.Z.Sizes.SIZE_16 : c.Z.Sizes.SIZE_14,
                          color: c.Z.Colors.HEADER_SECONDARY,
                          children: "#".concat(n.discriminator),
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: h.username,
                      children: [
                        (0, a.jsx)(i.Text, {
                          variant: "text-xs/normal",
                          color: "text-danger",
                          children: E.Z.Messages.BLOCKED,
                        }),
                        (0, a.jsxs)(i.Text, {
                          variant: "text-xs/normal",
                          color: "text-muted",
                          children: [" ", "| ", T],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        },
        I = (e) => {
          let { channelId: n } = e,
            t = (0, _.z)(n);
          return (0, a.jsx)(i.Scroller, {
            className: h.container,
            children: t.map((e) => {
              let { user: t } = e;
              return (0, a.jsx)(m, { user: t, channelId: n }, t.id);
            }),
          });
        };
    },
    939863: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return d;
        },
      });
      var a = t(735250);
      t(470079);
      var l = t(120356),
        s = t.n(l),
        i = t(689938),
        r = t(843117),
        o = t(296507),
        c = t(866402);
      function d(e) {
        let { className: n, children: t } = e;
        return (0, a.jsxs)("div", {
          className: s()(r.container, n),
          children: [
            (0, a.jsx)("img", {
              alt: i.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
              src: c,
              className: s()(r.sparkleIcon, r.sparkleBottom),
            }),
            t,
            (0, a.jsx)("img", {
              alt: i.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
              src: o,
              className: s()(r.sparkleIcon, r.sparkleTop),
            }),
          ],
        });
      }
    },
    659972: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return T;
        },
        k: function () {
          return l;
        },
      });
      var a,
        l,
        s = t(735250);
      t(470079);
      var i = t(120356),
        r = t.n(i),
        o = t(481060),
        c = t(565138),
        d = t(372769),
        u = t(857395),
        _ = t(131154),
        E = t(38981),
        h = t(142664);
      function T(e) {
        let {
            guild: n,
            stageInstance: t,
            showGuildPopout: a,
            setShowGuildPopout: l,
            handleGuildNameClick: i,
            source: T,
            speakers: m,
            speakerCount: I,
            audienceCount: N,
            channelName: x,
          } = e,
          f = n.id;
        return (0, s.jsx)("div", {
          className: h.contentContainer,
          children: (0, s.jsxs)("div", {
            className: h.headerContainer,
            children: [
              (0, s.jsxs)("div", {
                className: h.guildInfoContainer,
                children: [
                  (0, s.jsx)(u.Z, {
                    guildId: f,
                    shouldShow: a,
                    onRequestClose: () => l(!1),
                    children: () =>
                      (0, s.jsxs)(o.Clickable, {
                        className: h.flexContainerRow,
                        onClick: i,
                        children: [
                          (0, s.jsx)(c.Z, {
                            guild: n,
                            size: c.Z.Sizes.MINI,
                            className: h.guildIcon,
                          }),
                          (0, s.jsxs)("div", {
                            className: h.flexContainerRow,
                            children: [
                              (0, s.jsx)(o.Text, {
                                color: "header-secondary",
                                variant: "text-sm/normal",
                                className: r()(h.guildName, {
                                  [h.disabled]: null == i,
                                }),
                                children: n.name,
                              }),
                              (0, s.jsx)(d.Z, { guild: n }),
                            ],
                          }),
                        ],
                      }),
                  }),
                  (0, s.jsxs)("div", {
                    className: h.rightJustifiedContent,
                    children: [
                      6 === T &&
                        (0, s.jsx)("div", {
                          className: h.featuredTag,
                          children: (0, s.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            className: h.featuredTagText,
                            children: "Featured",
                          }),
                        }),
                      (0, s.jsx)(E.Z, {
                        count: N,
                        className: h.__invalid_audienceCount,
                      }),
                    ],
                  }),
                ],
              }),
              (0, s.jsx)(o.Text, {
                color: "header-primary",
                variant: "text-lg/semibold",
                className: h.topicText,
                children: t.topic,
              }),
              (0, s.jsx)(o.Text, {
                color: "header-secondary",
                className: h.description,
                variant: "text-sm/normal",
                children: t.description,
              }),
              (0, s.jsx)(_.Z, {
                guild: n,
                speakers: m,
                speakerCount: I,
                className: h.speakers,
              }),
              null != x &&
                (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)("hr", { className: h.divider }),
                    (0, s.jsxs)("div", {
                      className: h.footer,
                      children: [
                        (0, s.jsx)(o.StageIcon, {
                          size: "custom",
                          color: "currentColor",
                          width: 20,
                          height: 20,
                          className: h.icon,
                        }),
                        (0, s.jsx)(o.Text, {
                          color: "header-secondary",
                          className: h.__invalid_label,
                          variant: "text-sm/normal",
                          children: x,
                        }),
                      ],
                    }),
                  ],
                }),
            ],
          }),
        });
      }
      ((a = l || (l = {}))[(a.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (a[(a.TRENDING = 1)] = "TRENDING"),
        (a[(a.PERSONALIZED = 2)] = "PERSONALIZED"),
        (a[(a.USER_GUILDS = 3)] = "USER_GUILDS"),
        (a[(a.FRIENDS_GUILDS = 4)] = "FRIENDS_GUILDS"),
        (a[(a.INTRO_CARD = 5)] = "INTRO_CARD"),
        (a[(a.FEATURED = 6)] = "FEATURED");
    },
    540186: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return f;
        },
      }),
        t(653041);
      var a = t(735250);
      t(470079);
      var l = t(442837),
        s = t(481060),
        i = t(594174),
        r = t(311888),
        o = t(63063),
        c = t(5192),
        d = t(431328),
        u = t(501655),
        _ = t(659972),
        E = t(981631),
        h = t(765305),
        T = t(689938),
        m = t(537889);
      function I(e) {
        let { icon: n } = e;
        return (0, a.jsx)("div", {
          className: m.iconContainer,
          children: (0, a.jsx)(n, { color: "currentColor", size: "md" }),
        });
      }
      function N(e) {
        let { icon: n, text: t } = e;
        return (0, a.jsxs)("div", {
          className: m.listItemContainer,
          children: [
            (0, a.jsx)("div", {
              className: m.listItemIconContainer,
              children: n,
            }),
            (0, a.jsx)(s.Text, {
              className: m.listItemText,
              variant: "text-md/normal",
              color: "header-secondary",
              children: t,
            }),
          ],
        });
      }
      function x(e) {
        var n;
        let { guild: t, channel: s, stageData: r } = e,
          o = (0, l.e7)([i.default], () => i.default.getCurrentUser(), []),
          E = {
            id: "1337",
            guild_id: t.id,
            channel_id: s.id,
            topic: r.topic,
            description: r.description,
            privacy_level:
              null !== (n = r.privacyLevel) && void 0 !== n ? n : h.j8.PUBLIC,
          },
          T = (0, d.w8)(s.id, u.pV.SPEAKER),
          I = (0, d.Rk)(s.id, u.pV.AUDIENCE),
          N = T.slice(0, 5);
        return (
          null ==
            N.find((e) => {
              var n;
              return (
                (null === (n = e.user) || void 0 === n ? void 0 : n.id) ===
                (null == o ? void 0 : o.id)
              );
            }) && N.push({ user: o, userNick: c.ZP.getName(t.id, s.id, o) }),
          (0, a.jsx)("div", {
            className: m.previewCardContainer,
            children: (0, a.jsx)("div", {
              className: m.previewCard,
              children: (0, a.jsx)(_.Z, {
                guild: t,
                stageInstance: E,
                showGuildPopout: !1,
                setShowGuildPopout: () => {},
                source: _.k.UNSPECIFIED,
                speakers: N,
                speakerCount: T.length,
                audienceCount: Math.max(1337, I),
                channelName: s.name,
              }),
            }),
          })
        );
      }
      function f(e) {
        let {
          guild: n,
          channel: t,
          stageData: l,
          headerId: i,
          loading: c,
          onNext: d,
          onCancel: u,
          onBack: _,
        } = e;
        return null == n || null == t || null == l
          ? null
          : (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)(x, { guild: n, channel: t, stageData: l }),
                (0, a.jsxs)(s.ModalContent, {
                  className: m.container,
                  children: [
                    (0, a.jsxs)("div", {
                      className: m.header,
                      children: [
                        (0, a.jsx)(s.Heading, {
                          id: i,
                          className: m.__invalid_title,
                          variant: "heading-xl/semibold",
                          children:
                            T.Z.Messages.START_STAGE_PUBLIC_PREVIEW_TITLE,
                        }),
                        (0, a.jsx)(s.Text, {
                          className: m.subtitle,
                          color: "header-secondary",
                          variant: "text-sm/normal",
                          children:
                            T.Z.Messages.START_STAGE_PUBLIC_PREVIEW_SUBTITLE,
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: m.__invalid_list,
                      children: [
                        (0, a.jsx)(N, {
                          icon: (0, a.jsx)(I, { icon: s.CompassIcon }),
                          text: T.Z.Messages
                            .START_STAGE_PUBLIC_PREVIEW_SECTION_ONE,
                        }),
                        (0, a.jsx)(N, {
                          icon: (0, a.jsx)(I, { icon: s.FriendsIcon }),
                          text: T.Z.Messages
                            .START_STAGE_PUBLIC_PREVIEW_SECTION_TWO,
                        }),
                        (0, a.jsx)(N, {
                          icon: (0, a.jsx)(I, { icon: s.PencilIcon }),
                          text: T.Z.Messages
                            .START_STAGE_PUBLIC_PREVIEW_SECTION_THREE,
                        }),
                        (0, a.jsx)(N, {
                          icon: (0, a.jsx)(r.Z, {
                            className: m.badgeIconBackground,
                            foreground: m.badgeIconForeground,
                            width: 40,
                            height: 40,
                          }),
                          text: T.Z.Messages.START_STAGE_PUBLIC_PREVIEW_SECTION_FOUR.format(
                            {
                              articleURL: o.Z.getArticleURL(
                                E.BhN.STAGE_CHANNEL_GUIDELINES,
                              ),
                            },
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsxs)(s.ModalFooter, {
                  children: [
                    (0, a.jsx)(s.Button, {
                      color: s.Button.Colors.GREEN,
                      onClick: d,
                      submitting: c,
                      children:
                        T.Z.Messages.START_STAGE_CHANNEL_EVENT_MODAL_BUTTON,
                    }),
                    (0, a.jsx)(s.Button, {
                      color: s.Button.Colors.PRIMARY,
                      className: m.cancelButton,
                      onClick: u,
                      children: T.Z.Messages.CANCEL,
                    }),
                    (0, a.jsx)(s.Button, {
                      look: s.Button.Looks.LINK,
                      color: s.Button.Colors.LINK,
                      className: m.backButton,
                      onClick: _,
                      size: s.Button.Sizes.MIN,
                      children: T.Z.Messages.BACK,
                    }),
                  ],
                }),
              ],
            });
      }
    },
    609776: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return M;
        },
      }),
        t(47120);
      var a = t(735250),
        l = t(470079),
        s = t(913527),
        i = t.n(s),
        r = t(442837),
        o = t(481060),
        c = t(933557),
        d = t(77810),
        u = t(854698),
        _ = t(40623),
        E = t(440371),
        h = t(810788),
        T = t(699516),
        m = t(594174),
        I = t(626135),
        N = t(570188),
        x = t(427679),
        f = t(930180),
        g = t(582019),
        S = t(157925),
        C = t(981631),
        v = t(765305),
        A = t(190378),
        p = t(689938),
        j = t(479562);
      function R(e) {
        let { stageChannelsInGuild: n, channel: t, onSelectChannel: l } = e;
        return null == l
          ? null
          : (0, a.jsx)(a.Fragment, {
              children: (0, a.jsx)(o.FormItem, {
                title:
                  p.Z.Messages.START_STAGE_MODAL_SET_TOPIC_SELECT_LABEL +
                  " asdf",
                className: j.channelSelectionFormItem,
                required: !0,
                children: (0, a.jsx)(o.SearchableSelect, {
                  value: t.id,
                  options: n.map((e) => ({
                    value: e.id,
                    label: (0, c.F6)(e, m.default, T.Z, !0),
                  })),
                  onChange: (e) => {
                    let t = n.find((n) => n.id === e);
                    null != t && l(t);
                  },
                  renderOptionPrefix: () =>
                    (0, a.jsx)(o.StageIcon, {
                      size: "custom",
                      color: "currentColor",
                      height: 24,
                    }),
                }),
              }),
            });
      }
      function M(e) {
        var n, t, s, T, m, M, L, Z;
        let {
            channel: O,
            guild: D,
            header: b,
            error: B,
            loading: P,
            onSave: k,
            onEventSave: G,
            onClose: U,
            onSelectChannel: y,
            isEvent: w = !1,
            defaultOptions: V,
            isSlideReady: F = !0,
          } = e,
          H = l.useMemo(() => x.Z.getStageInstanceByChannel(O.id), [O.id]),
          [z, W] = l.useState(
            null !==
              (t =
                null !== (n = null == V ? void 0 : V.topic) && void 0 !== n
                  ? n
                  : null == H
                    ? void 0
                    : H.topic) && void 0 !== t
              ? t
              : "",
          ),
          [K, q] = l.useState(
            null !== (s = null == V ? void 0 : V.description) && void 0 !== s
              ? s
              : "",
          ),
          [Y] = l.useState(w),
          [J, Q] = l.useState(
            null !== (T = null == V ? void 0 : V.schedule) && void 0 !== T
              ? T
              : { startDate: (0, u.ib)() },
          ),
          [X, $] = l.useState(Y && (null == V ? void 0 : V.schedule) != null),
          ee = (0, N.J)(O),
          en = (0, N.U)(O),
          et = null == H && ee && !Y,
          [ea, el] = l.useState(et && en),
          es = (0, r.e7)([h.Z], () =>
            h.Z.hasHotspot(A.v.LIVE_STAGE_NOTIFICATION_BADGE),
          ),
          ei = v.j8.GUILD_ONLY,
          [er] = l.useState(
            null !==
              (M =
                null !== (m = null == V ? void 0 : V.privacyLevel) &&
                void 0 !== m
                  ? m
                  : null == H
                    ? void 0
                    : H.privacy_level) && void 0 !== M
              ? M
              : ei,
          ),
          [eo, ec] = l.useState(null == V ? void 0 : V.recurrenceRule),
          ed = (0, f._d)(O.id),
          [eu, e_] = l.useState(!1),
          eE = (0, c.ZP)(O),
          eh = (0, d.q)(D),
          eT = null != y,
          em = eh.length > 1;
        l.useEffect(() => {
          I.default.track(C.rMx.START_STAGE_OPENED, {
            stage_instance_id: null == H ? void 0 : H.id,
            can_start_public_stage: !1,
            guild_id: O.guild_id,
          });
        }, []);
        let eI = (e) => {
          if (
            (e.preventDefault(), er === v.j8.PUBLIC && z.length < 20 && !eu)
          ) {
            e_(!0);
            return;
          }
          let n = { topic: z, privacyLevel: er, sendStartNotification: ea };
          if (Y) {
            if (!X) return;
            null == G ||
              G({
                ...n,
                schedule: J,
                description: K,
                entityType: v.WX.STAGE_INSTANCE,
              });
            return;
          }
          null == k || k(n);
        };
        let { color: eN, text: ex } =
            ((L = H),
            (Z = er),
            Y
              ? {
                  color: o.Button.Colors.BRAND,
                  text: p.Z.Messages.SCHEDULE_EVENT,
                }
              : Z === v.j8.PUBLIC &&
                  (null == L ? void 0 : L.privacy_level) !== v.j8.PUBLIC
                ? { color: o.Button.Colors.BRAND, text: p.Z.Messages.CONTINUE }
                : null == L
                  ? {
                      color: o.Button.Colors.GREEN,
                      text: p.Z.Messages.START_STAGE_CHANNEL_EVENT_MODAL_BUTTON,
                    }
                  : {
                      color: o.Button.Colors.BRAND,
                      text: p.Z.Messages.SAVE_CHANGES,
                    }),
          ef = l.useRef(null);
        l.useEffect(() => {
          var e;
          F && (null === (e = ef.current) || void 0 === e || e.focus());
        }, [F]);
        let eg = X && null != J.startDate && J.startDate >= i()();
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsxs)(o.ModalContent, {
              className: j.modalContent,
              children: [
                b,
                (0, a.jsx)("div", {
                  className: j.blockedUsersContainer,
                  children:
                    null == H &&
                    ed > 0 &&
                    (0, a.jsx)(g.mv, { channelId: O.id }),
                }),
                (0, a.jsxs)("form", {
                  onSubmit: eI,
                  className: j.form,
                  children: [
                    (0, a.jsxs)(o.FormItem, {
                      title: w
                        ? p.Z.Messages.GUILD_EVENT_CREATE_TOPIC_LABEL
                        : p.Z.Messages
                            .START_STAGE_CHANNEL_EVENT_MODAL_TOPIC_LABEL,
                      className: j.topicFormItem,
                      required: !0,
                      children: [
                        (0, a.jsx)(o.TextInput, {
                          className: j.textInput,
                          onChange: (e) => W(e),
                          placeholder:
                            p.Z.Messages
                              .START_STAGE_CHANNEL_EVENT_MODAL_TOPIC_PLACEHOLDER,
                          maxLength: S.xA,
                          value: z,
                          autoComplete: "off",
                          inputRef: ef,
                        }),
                        eu &&
                          (0, a.jsx)(o.Text, {
                            variant: "text-xs/normal",
                            color: "text-warning",
                            className: j.warning,
                            children:
                              p.Z.Messages
                                .START_STAGE_PUBLIC_SHORT_TOPIC_WARNING,
                          }),
                        null != B
                          ? (0, a.jsx)(o.Text, {
                              color: "text-danger",
                              variant: "text-xs/normal",
                              className: j.warning,
                              children: B.getAnyErrorMessage(),
                            })
                          : null,
                      ],
                    }),
                    eT && em
                      ? (0, a.jsx)(R, {
                          stageChannelsInGuild: eh,
                          channel: O,
                          onSelectChannel: y,
                        })
                      : null,
                    Y &&
                      (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)(E.Z, {
                            className: j.formItem,
                            onScheduleChange: Q,
                            onRecurrenceChange: (e) => {
                              let n = J.startDate;
                              if (null != n) ec((0, u.mF)(e, n));
                            },
                            schedule: J,
                            recurrenceRule: eo,
                            timeSelected: X,
                            onTimeChange: $,
                          }),
                          null != J.startDate && J.startDate < i()()
                            ? (0, a.jsx)(o.Text, {
                                color: "text-danger",
                                variant: "text-xs/normal",
                                className: j.warning,
                                children:
                                  p.Z.Messages.GUILD_EVENT_PAST_START_DATE,
                              })
                            : null,
                        ],
                      }),
                    w &&
                      (0, a.jsx)(o.FormItem, {
                        title:
                          p.Z.Messages
                            .CREATE_STAGE_INSTANCE_DESCRIPTION_INPUT_LABEL,
                        className: j.formItem,
                        children: (0, a.jsx)(o.TextArea, {
                          placeholder:
                            p.Z.Messages
                              .GUILD_EVENT_CREATE_DESCRIPTION_PLACEHOLDER,
                          value: K,
                          onChange: (e) => q(e),
                          maxLength: v.wm,
                        }),
                      }),
                    et
                      ? (0, a.jsx)(_.Z, {
                          sendStartNotification: ea,
                          setSendStartNotification: el,
                          showNotificationNewBadge: es,
                        })
                      : null,
                    eT && !em
                      ? (0, a.jsx)(o.Text, {
                          color: "header-secondary",
                          variant: "text-xs/normal",
                          className: j.channelSelection,
                          children:
                            p.Z.Messages.START_STAGE_MODAL_SET_TOPIC_HELP_TEXT.format(
                              {
                                stageName: eE,
                                stageHook: (e, n) =>
                                  (0, a.jsx)(
                                    "span",
                                    {
                                      className: j.channelName,
                                      children: O.name,
                                    },
                                    n,
                                  ),
                              },
                            ),
                        })
                      : null,
                  ],
                }),
              ],
            }),
            (0, a.jsxs)(o.ModalFooter, {
              children: [
                (0, a.jsx)(o.Button, {
                  color: eN,
                  onClick: eI,
                  disabled: "" === z || null == er || (w && !eg),
                  submitting: P,
                  children: ex,
                }),
                (0, a.jsx)(o.Button, {
                  color: o.Button.Colors.PRIMARY,
                  className: j.cancelButton,
                  onClick: U,
                  children: p.Z.Messages.CANCEL,
                }),
              ],
            }),
          ],
        });
      }
    },
    581355: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return x;
          },
        });
      var a = t(735250),
        l = t(470079),
        s = t(442837),
        i = t(481060),
        r = t(313201),
        o = t(430824),
        c = t(427679),
        d = t(939863),
        u = t(540186),
        _ = t(609776),
        E = t(289584),
        h = t(180899),
        T = t(157925),
        m = t(689938),
        I = t(639879);
      function N(e) {
        let {
          guild: n,
          channel: t,
          stageInstance: l,
          headerId: s,
          onClose: r,
          loading: o,
          error: c,
          onSave: u,
          defaultOptions: E,
          isSlideReady: h,
        } = e;
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsxs)("div", {
              className: I.content,
              children: [
                (0, a.jsx)(d.Z, {
                  children: (0, a.jsx)("div", {
                    className: I.stageIconBackground,
                    children: (0, a.jsx)(i.StageIcon, {
                      size: "custom",
                      color: "currentColor",
                      width: 32,
                      height: 32,
                      className: I.stageIcon,
                    }),
                  }),
                }),
                (0, a.jsx)(i.Heading, {
                  id: s,
                  variant: "heading-xl/semibold",
                  color: "header-primary",
                  className: I.headerTitle,
                  children:
                    null == l
                      ? m.Z.Messages.START_STAGE_CHANNEL_EVENT_MODAL_TITLE
                      : m.Z.Messages.EDIT_STAGE_CHANNEL_TITLE,
                }),
                (0, a.jsx)(i.Text, {
                  variant: "text-sm/normal",
                  color: "header-secondary",
                  className: I.headerSubtitle,
                  children:
                    null == l
                      ? m.Z.Messages.START_STAGE_CHANNEL_EVENT_MODAL_SUBTITLE
                      : m.Z.Messages.EDIT_STAGE_SUBTITLE,
                }),
              ],
            }),
            (0, a.jsx)(_.Z, {
              guild: n,
              channel: t,
              onSave: u,
              error: c,
              loading: o,
              onClose: r,
              defaultOptions: E,
              isSlideReady: h,
            }),
          ],
        });
      }
      function x(e) {
        let { channel: n, onClose: t, transitionState: d, ..._ } = e,
          m = (0, r.Dt)(),
          x = (0, s.e7)([o.Z], () => o.Z.getGuild(n.guild_id)),
          f = l.useMemo(() => c.Z.getStageInstanceByChannel(n.id), [n.id]),
          { loading: g, error: S, onSave: C } = (0, E.Z)(n, t),
          {
            modalStep: v,
            setModalStep: A,
            readySlide: p,
            handleSlideReady: j,
            savedOptions: R,
            handleSettingsSave: M,
            handleDelayedSave: L,
          } = (0, h.Z)({
            stageInstance: f,
            defaultStep: T.lv.STAGE_CHANNEL_SETTINGS,
            error: S,
            onSave: C,
          });
        return (l.useEffect(() => {
          null == x && t();
        }, [x, t]),
        null == x)
          ? null
          : (0, a.jsx)(i.ModalRoot, {
              transitionState: d,
              "aria-labelledby": m,
              ..._,
              size: i.ModalSize.SMALL,
              children: (0, a.jsxs)(i.Slides, {
                activeSlide: v,
                width: 440,
                onSlideReady: j,
                children: [
                  (0, a.jsx)(i.Slide, {
                    id: T.lv.STAGE_CHANNEL_SETTINGS,
                    children: (0, a.jsx)("div", {
                      className: I.slideContainer,
                      children: (0, a.jsx)(N, {
                        guild: x,
                        channel: n,
                        stageInstance: f,
                        headerId: m,
                        onClose: t,
                        loading: g,
                        error: S,
                        onSave: M,
                        defaultOptions: R,
                        isSlideReady: p === T.lv.STAGE_CHANNEL_SETTINGS,
                      }),
                    }),
                  }),
                  (0, a.jsx)(i.Slide, {
                    id: T.lv.PUBLIC_STAGE_PREVIEW,
                    children: (0, a.jsx)("div", {
                      className: I.slideContainer,
                      children: (0, a.jsx)(u.Z, {
                        headerId: m,
                        guild: x,
                        channel: n,
                        stageData: R,
                        loading: g,
                        onNext: L,
                        onCancel: t,
                        onBack: () => A(T.lv.STAGE_CHANNEL_SETTINGS),
                      }),
                    }),
                  }),
                ],
              }),
            });
      }
    },
    289584: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return _;
        },
      }),
        t(47120);
      var a = t(470079),
        l = t(749210),
        s = t(287734),
        i = t(881052),
        r = t(142497),
        o = t(570188),
        c = t(471253),
        d = t(427679),
        u = t(190378);
      function _(e, n) {
        let t =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : null,
          [_, E] = a.useState(!1),
          [h, T] = a.useState(null),
          m = a.useMemo(
            () => d.Z.getStageInstanceByChannel(null == e ? void 0 : e.id),
            [null == e ? void 0 : e.id],
          ),
          I = (0, o.J)(e);
        return {
          loading: _,
          error: h,
          onSave: async (a) => {
            let { topic: o, privacyLevel: d, sendStartNotification: _ } = a;
            if (null != e && "" !== o && null != d) {
              E(!0),
                T(null),
                null != t &&
                  (l.Z.selectGuild(t), s.default.selectVoiceChannel(e.id));
              try {
                let t;
                null != m
                  ? (t = await c.Ef(e, o, d))
                  : ((t = await c.HO(e, o, d, null != _ && _)),
                    I && r.Kw(u.v.LIVE_STAGE_NOTIFICATION_BADGE)),
                  n(t);
              } catch (e) {
                T(new i.Hx(e)), E(!1);
              }
            }
          },
        };
      }
    },
    180899: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      }),
        t(47120);
      var a = t(470079),
        l = t(512722),
        s = t.n(l),
        i = t(157925),
        r = t(765305);
      function o(e) {
        let { stageInstance: n, defaultStep: t, error: l, onSave: o } = e,
          [c, d] = a.useState(t),
          [u, _] = a.useState(),
          [E, h] = a.useState(null);
        return (
          a.useEffect(() => {
            null != l && d(i.lv.STAGE_CHANNEL_SETTINGS);
          }, [l]),
          {
            modalStep: c,
            setModalStep: d,
            readySlide: E,
            handleSlideReady: function (e) {
              return h(e);
            },
            savedOptions: u,
            handleSettingsSave: function (e) {
              if (
                (_(e),
                e.privacyLevel === r.j8.PUBLIC &&
                  (null == n ? void 0 : n.privacy_level) !== r.j8.PUBLIC)
              ) {
                d(i.lv.PUBLIC_STAGE_PREVIEW);
                return;
              }
              o(e);
            },
            handleDelayedSave: function () {
              s()(null != u, "Must have some saved options."), o(u);
            },
          }
        );
      }
    },
    311888: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      });
      var a = t(735250);
      t(470079);
      var l = t(325767);
      function s(e) {
        let {
          width: n = 32,
          height: t = 32,
          color: s = "currentColor",
          foreground: i,
          ...r
        } = e;
        return (0, a.jsxs)("svg", {
          ...(0, l.Z)(r),
          width: n,
          height: t,
          viewBox: "0 0 32 32",
          children: [
            (0, a.jsx)("rect", {
              width: "32",
              height: "32",
              rx: "16",
              fill: s,
            }),
            (0, a.jsx)("path", {
              d: "M23 9.99995C19.56 9.99995 16.826 6.43495 16.799 6.39795C16.421 5.89795 15.579 5.89795 15.201 6.39795C15.174 6.43495 12.44 9.99995 9 9.99995C8.447 9.99995 8 10.4479 8 10.9999V17.9999C8 21.8069 14.764 25.4779 15.534 25.8839C15.68 25.9609 15.84 25.9979 16 25.9979C16.16 25.9979 16.32 25.9599 16.466 25.8839C17.236 25.4779 24 21.8069 24 17.9999V10.9999C24 10.4479 23.553 9.99995 23 9.99995ZM19 19.9999L16 17.9999L13 19.9999L14 16.9999L12 14.9999H15L16 11.9999L17 14.9999H20L18 16.9999L19 19.9999Z",
              className: i,
            }),
          ],
        });
      }
    },
    208052: function (e, n, t) {
      e.exports = {
        guildPopout: "guildPopout_cf5d0a",
        iconMask: "iconMask_cf5d0a",
        unavailableIcon: "unavailableIcon_cf5d0a",
        iconWithSplash: "iconWithSplash_cf5d0a",
        avatar: "avatar_cf5d0a",
        splashImage: "splashImage_cf5d0a",
        body: "body_cf5d0a",
        hasSplash: "hasSplash_cf5d0a",
        guildNameWrapper: "guildNameWrapper_cf5d0a",
        guildName: "guildName_cf5d0a",
        badge: "badge_cf5d0a",
        description: "description_cf5d0a",
        memberInfo: "memberInfo_cf5d0a",
        memberCount: "memberCount_cf5d0a",
        dotOnline: "dotOnline_cf5d0a dot_cf5d0a",
        dotOffline: "dotOffline_cf5d0a dot_cf5d0a",
        memberText: "memberText_cf5d0a",
        footer: "footer_cf5d0a",
        emojiHeader: "emojiHeader_cf5d0a",
        emojiContainer: "emojiContainer_cf5d0a",
        withCounter: "withCounter_cf5d0a",
        emoji: "emoji_cf5d0a",
        emojiCounter: "emojiCounter_cf5d0a",
        splashPlaceholder:
          "splashPlaceholder_cf5d0a placeholderSkeleton_cf5d0a",
        iconPlaceholder: "iconPlaceholder_cf5d0a placeholderSkeleton_cf5d0a",
        namePlaceholder: "namePlaceholder_cf5d0a placeholderSkeleton_cf5d0a",
        memberInfoPlaceholder:
          "memberInfoPlaceholder_cf5d0a placeholderSkeleton_cf5d0a",
        viewButtonPlaceholder: "viewButtonPlaceholder_cf5d0a",
        unavailableHeader: "unavailableHeader_cf5d0a",
      };
    },
    701424: function (e, n, t) {
      e.exports = {
        notificationToggle: "notificationToggle_ab70d0",
        tooltip: "tooltip_ab70d0",
      };
    },
    94277: function (e, n, t) {
      e.exports = { title: "title_a33974" };
    },
    805553: function (e, n, t) {
      e.exports = {
        doubleInput: "doubleInput_c8eacd",
        link: "link_c8eacd",
        addIcon: "addIcon_c8eacd",
        removeIcon: "removeIcon_c8eacd",
      };
    },
    571032: function (e, n, t) {
      e.exports = {
        grid: "grid_bd205c",
        speakerContainer: "speakerContainer_bd205c",
        avatar: "avatar_bd205c",
        iconMicrophone: "iconMicrophone_bd205c",
        textInGridContainer: "textInGridContainer_bd205c",
        textInGrid: "textInGrid_bd205c",
      };
    },
    249133: function (e, n, t) {
      e.exports = { container: "container_fe77dd", icon: "icon_fe77dd" };
    },
    578814: function (e, n, t) {
      e.exports = {
        container: "container_cc6cdc",
        user: "user_cc6cdc",
        username: "username_cc6cdc",
        blockedNotice: "blockedNotice_cc6cdc",
        blockedButton: "blockedButton_cc6cdc",
        icon: "icon_cc6cdc",
        userInfo: "userInfo_cc6cdc",
      };
    },
    843117: function (e, n, t) {
      e.exports = {
        container: "container_c5e69b",
        sparkleIcon: "sparkleIcon_c5e69b",
        sparkleTop: "sparkleTop_c5e69b",
        sparkleBottom: "sparkleBottom_c5e69b",
      };
    },
    142664: function (e, n, t) {
      e.exports = {
        contentContainer: "contentContainer_e25701",
        headerContainer: "headerContainer_e25701",
        guildIcon: "guildIcon_e25701",
        flexContainerRow: "flexContainerRow_e25701",
        guildInfoContainer: "guildInfoContainer_e25701",
        speakers: "speakers_e25701",
        topicText: "topicText_e25701",
        description: "description_e25701",
        guildName: "guildName_e25701",
        disabled: "disabled_e25701",
        featuredTag: "featuredTag_e25701",
        featuredTagText: "featuredTagText_e25701",
        rightJustifiedContent: "rightJustifiedContent_e25701",
        footer: "footer_e25701",
        icon: "icon_e25701",
        divider: "divider_e25701",
      };
    },
    537889: function (e, n, t) {
      e.exports = {
        container: "container_d924d1",
        header: "header_d924d1",
        subtitle: "subtitle_d924d1",
        cancelButton: "cancelButton_d924d1",
        backButton: "backButton_d924d1",
        listItemContainer: "listItemContainer_d924d1",
        listItemIconContainer: "listItemIconContainer_d924d1",
        listItemText: "listItemText_d924d1",
        iconContainer: "iconContainer_d924d1",
        badgeIconBackground: "badgeIconBackground_d924d1",
        badgeIconForeground: "badgeIconForeground_d924d1",
        previewCardContainer: "previewCardContainer_d924d1",
        previewCard: "previewCard_d924d1",
      };
    },
    479562: function (e, n, t) {
      e.exports = {
        modalContent: "modalContent_c8fe09",
        blockedUsersContainer: "blockedUsersContainer_c8fe09",
        form: "form_c8fe09",
        formItem: "formItem_c8fe09",
        topicFormItem: "topicFormItem_c8fe09",
        channelSelectionFormItem: "channelSelectionFormItem_c8fe09",
        textInput: "textInput_c8fe09",
        cancelButton: "cancelButton_c8fe09",
        channelName: "channelName_c8fe09",
        channelSelection: "channelSelection_c8fe09",
        warning: "warning_c8fe09",
      };
    },
    639879: function (e, n, t) {
      e.exports = {
        content: "content_c772ad",
        stageIconBackground: "stageIconBackground_c772ad",
        stageIcon: "stageIcon_c772ad",
        headerTitle: "headerTitle_c772ad",
        headerSubtitle: "headerSubtitle_c772ad",
        slideContainer: "slideContainer_c772ad",
      };
    },
  },
]);
//# sourceMappingURL=6e1564130f96466e11f8.js.map
