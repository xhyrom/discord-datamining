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
          return o;
        },
      }),
        t(724458),
        t(653041);
      var l = t(442837),
        i = t(146085),
        a = t(984933),
        r = t(496675);
      function o(e) {
        var n;
        let t =
          null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : null;
        return (0, l.Wu)(
          [a.ZP, r.Z],
          () =>
            a.ZP.getChannels(t)[a.Zb].reduce((e, n) => {
              let t = n.channel;
              return t.isGuildStageVoice()
                ? ((function (e) {
                    let n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : r.Z;
                    return !!e.isGuildStageVoice() && n.can(i.yP, e);
                  })(n.channel, r.Z) && e.push(t),
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
          return o;
        },
      });
      var l = t(200651);
      t(192379);
      var i = t(481060),
        a = t(388032),
        r = t(701424);
      function o(e) {
        let { sendStartNotification: n, setSendStartNotification: t } = e,
          o = n ? a.intl.string(a.t.xAT8lJ) : a.intl.string(a.t["Y+18hY"]);
        return (0, l.jsx)("div", {
          className: r.notificationToggle,
          children: (0, l.jsx)(i.Checkbox, {
            type: i.Checkbox.Types.INVERTED,
            size: 14,
            className: r.__invalid_checkbox,
            value: n,
            onChange: function () {
              t(!n);
            },
            children: (0, l.jsx)(i.Text, {
              color: "header-secondary",
              variant: "text-sm/normal",
              children: (0, l.jsx)(i.Tooltip, {
                position: "bottom",
                tooltipClassName: r.tooltip,
                text: a.intl.string(a.t["4A/xnZ"]),
                "aria-label": a.intl.string(a.t["4A/xnZ"]),
                children: (e) => (0, l.jsx)("span", { ...e, children: o }),
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
      var l = t(200651),
        i = t(192379),
        a = t(481060),
        r = t(377171),
        o = t(854698),
        s = t(388032),
        c = t(94277);
      function d(e) {
        let { startDate: n, recurrenceRule: t, onRecurrenceChange: d } = e,
          u = i.useMemo(() => (0, o.zi)(n, t), [t, n]),
          h = (0, o.P8)(n),
          m = (e) => e.toString(),
          x = (0, l.jsxs)("div", {
            className: c.title,
            children: [
              s.intl.string(s.t["59TVxM"]),
              (0, l.jsx)(a.TextBadge, {
                text: s.intl.string(s.t.y2b7CA),
                color: r.Z.BG_BRAND,
              }),
            ],
          });
        return (0, l.jsx)(a.FormItem, {
          title: x,
          required: !0,
          children: (0, l.jsx)(a.Select, {
            placeholder: "gaming",
            options: h,
            select: d,
            serialize: m,
            isSelected: (e) => null != u && m(e) === m(u),
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
      var l = t(200651);
      t(192379);
      var i = t(913527),
        a = t.n(i),
        r = t(481060),
        o = t(854698),
        s = t(401876),
        c = t(388032),
        d = t(805553);
      function u(e) {
        let {
          className: n,
          onScheduleChange: t,
          onRecurrenceChange: i,
          onTimeChange: u,
          timeSelected: h = !0,
          schedule: m,
          recurrenceRule: x,
          showEndDate: f = !1,
          requireEndDate: g = !1,
          disableStartDateTime: _ = !1,
        } = e;
        if (null == m) return null;
        let v = null,
          I = m.startDate,
          N = a()(),
          p = a()().add(o.G3, "days"),
          C = a()().add(o.Ib, "days");
        null != x && (p.add(o.hn, "years"), C.add(o.hn, "years"));
        let j = (e) => {
          t({ ...m, endDate: e });
        };
        return (
          f &&
            (v =
              null != m.endDate || g
                ? (0, l.jsxs)(l.Fragment, {
                    children: [
                      (0, l.jsxs)("div", {
                        className: d.doubleInput,
                        children: [
                          (0, l.jsx)(r.FormItem, {
                            title: c.intl.string(c.t.CTLgZG),
                            required: g,
                            children: (0, l.jsx)(r.DateInput, {
                              value: m.endDate,
                              onSelect: j,
                              minDate: m.startDate,
                              maxDate: C,
                            }),
                          }),
                          (0, l.jsx)(r.FormItem, {
                            title: c.intl.string(c.t.j2RuXF),
                            required: g,
                            children: (0, l.jsx)(r.TimeInput, {
                              value: m.endDate,
                              onChange: j,
                            }),
                          }),
                        ],
                      }),
                      g
                        ? null
                        : (0, l.jsx)(r.Button, {
                            onClick: () => {
                              j(void 0);
                            },
                            look: r.Button.Looks.BLANK,
                            size: r.Button.Sizes.MIN,
                            children: (0, l.jsxs)("div", {
                              className: d.link,
                              children: [
                                (0, l.jsx)(r.CircleXIcon, {
                                  size: "custom",
                                  color: "currentColor",
                                  width: 17,
                                  height: 17,
                                  className: d.removeIcon,
                                }),
                                (0, l.jsx)(r.Text, {
                                  variant: "text-sm/normal",
                                  children: c.intl.string(c.t.petdfn),
                                }),
                              ],
                            }),
                          }),
                    ],
                  })
                : (0, l.jsx)(r.Button, {
                    look: r.Button.Looks.BLANK,
                    size: r.Button.Sizes.MIN,
                    onClick: () => {
                      j(a()(m.startDate).add(1, "hour"));
                    },
                    children: (0, l.jsxs)("div", {
                      className: d.link,
                      children: [
                        (0, l.jsx)(r.CirclePlusIcon, {
                          size: "custom",
                          color: "currentColor",
                          width: 20,
                          height: 20,
                          className: d.addIcon,
                        }),
                        (0, l.jsx)(r.Text, {
                          variant: "text-sm/normal",
                          children: c.intl.string(c.t.ncdPcn),
                        }),
                      ],
                    }),
                  })),
          (0, l.jsxs)("div", {
            className: n,
            children: [
              (0, l.jsxs)("div", {
                className: d.doubleInput,
                children: [
                  (0, l.jsx)(r.FormItem, {
                    title: c.intl.string(c.t.kKOIwM),
                    required: !0,
                    children: (0, l.jsx)(r.DateInput, {
                      value: m.startDate,
                      onSelect: (e) => {
                        t({ ...m, startDate: e });
                      },
                      minDate: N,
                      maxDate: p,
                      disabled: _,
                    }),
                  }),
                  (0, l.jsx)(r.FormItem, {
                    title: c.intl.string(c.t["6dGmCA"]),
                    required: !0,
                    children: (0, l.jsx)(r.TimeInput, {
                      value: m.startDate,
                      onChange: (e) => {
                        if (!!e.isValid())
                          null == u || u(!0), t({ ...m, startDate: e });
                      },
                      hideValue: !h,
                      disabled: _,
                    }),
                  }),
                ],
              }),
              v,
              null != I &&
                null != i &&
                (0, l.jsx)(s.Z, {
                  onRecurrenceChange: i,
                  startDate: I,
                  recurrenceRule: x,
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
      var l = t(200651);
      t(192379);
      var i = t(120356),
        a = t.n(i),
        r = t(481060),
        o = t(388032),
        s = t(571032);
      function c(e) {
        let { guild: n, speakers: t, speakerCount: i, className: c } = e,
          d = t.slice(0, 5),
          u = d.map((e) => {
            var t, i;
            return (0, l.jsxs)(
              "div",
              {
                className: s.speakerContainer,
                children: [
                  (0, l.jsx)(r.Avatar, {
                    src:
                      null == e
                        ? void 0
                        : null === (t = e.user) || void 0 === t
                          ? void 0
                          : t.getAvatarURL(n.id, 20),
                    size: r.AvatarSizes.SIZE_20,
                    className: s.avatar,
                    "aria-label": "".concat(
                      null == e ? void 0 : e.userNick,
                      "-avatar",
                    ),
                  }),
                  (0, l.jsx)("div", {
                    className: s.textInGridContainer,
                    children: (0, l.jsx)(r.Text, {
                      color: "header-secondary",
                      variant: "text-sm/normal",
                      className: s.textInGrid,
                      children: null == e ? void 0 : e.userNick,
                    }),
                  }),
                ],
              },
              null == e
                ? void 0
                : null === (i = e.user) || void 0 === i
                  ? void 0
                  : i.id,
            );
          }),
          h = i - d.length;
        return (0, l.jsxs)("div", {
          className: a()(s.grid, c),
          children: [
            u,
            h > 0 &&
              (0, l.jsxs)("div", {
                className: s.speakerContainer,
                children: [
                  (0, l.jsx)("div", {
                    className: s.iconMicrophone,
                    children: (0, l.jsx)(r.MicrophoneIcon, {
                      size: "custom",
                      color: "currentColor",
                      height: 12,
                    }),
                  }),
                  (0, l.jsx)(r.Text, {
                    color: "header-secondary",
                    variant: "text-sm/normal",
                    className: s.textInGrid,
                    children: o.intl.format(o.t["185ggI"], { count: h }),
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
          return o;
        },
        U: function () {
          return s;
        },
      });
      var l = t(442837),
        i = t(650774),
        a = t(496675),
        r = t(231338);
      function o(e) {
        return (0, l.e7)(
          [a.Z],
          () => null != e && a.Z.can(r.Pl.MENTION_EVERYONE, e),
          [e],
        );
      }
      function s(e) {
        let n = null == e ? void 0 : e.guild_id,
          t = (0, l.e7)([i.Z], () => i.Z.getMemberCount(n), [n]);
        return null == e || (null != t && !(t > 5e4) && !0);
      }
    },
    471253: function (e, n, t) {
      t.d(n, {
        DT: function () {
          return C;
        },
        Ef: function () {
          return E;
        },
        HO: function () {
          return T;
        },
        NZ: function () {
          return b;
        },
        Pq: function () {
          return S;
        },
        Q1: function () {
          return v;
        },
        RK: function () {
          return N;
        },
        _0: function () {
          return I;
        },
        hz: function () {
          return j;
        },
        yi: function () {
          return p;
        },
      });
      var l = t(512722),
        i = t.n(l),
        a = t(149765),
        r = t(544891),
        o = t(493683);
      t(749210);
      var s = t(911969),
        c = t(367907),
        d = t(944486),
        u = t(979651),
        h = t(700785),
        m = t(922482),
        x = t(192079),
        f = t(706058),
        g = t(590415),
        _ = t(981631);
      function v(e, n) {
        let t = e.getGuildId();
        return (
          i()(null != t, "This channel cannot be guildless."),
          n && (0, c.yw)(_.rMx.REQUEST_TO_SPEAK_INITIATED, { ...(0, x.s$)(e) }),
          r.tn.patch({
            url: _.ANM.UPDATE_VOICE_STATE(t),
            body: {
              request_to_speak_timestamp: n ? new Date().toISOString() : null,
              channel_id: e.id,
            },
          })
        );
      }
      function I(e, n) {
        let t = e.getGuildId();
        return (
          i()(null != t, "This channel cannot be guildless."),
          r.tn.patch({
            url: _.ANM.UPDATE_VOICE_STATE(t, n),
            body: {
              suppress: !1,
              request_to_speak_timestamp: new Date().toISOString(),
              channel_id: e.id,
            },
          })
        );
      }
      function N(e, n) {
        let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          l = null == e ? void 0 : e.getGuildId();
        i()(null != l, "This channel cannot be guildless.");
        let a = u.Z.getVoiceStateForChannel(e.id);
        return (
          (0, g.gf)(a) === g.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK &&
            !n &&
            (0, c.yw)(_.rMx.PROMOTED_TO_SPEAKER, { ...(0, x.s$)(e) }),
          r.tn.patch({
            url: _.ANM.UPDATE_VOICE_STATE(l),
            body: {
              suppress: n,
              request_to_speak_timestamp: null,
              channel_id: e.id,
              ...(t ? { silent: t } : {}),
            },
          })
        );
      }
      function p(e) {
        let n = null == e ? void 0 : e.getGuildId();
        return (
          i()(null != n, "This channel cannot be guildless."),
          r.tn.patch({
            url: _.ANM.UPDATE_VOICE_STATE(n),
            body: {
              suppress: !0,
              channel_id: e.id,
              self_video: !1,
              self_stream: !1,
            },
          })
        );
      }
      function C(e, n, t) {
        let l = e.getGuildId();
        return (
          i()(null != l, "This channel cannot be guildless."),
          r.tn.patch({
            url: _.ANM.UPDATE_VOICE_STATE(l, n),
            body: { suppress: t, channel_id: e.id },
          })
        );
      }
      function j(e, n) {
        if (null == n || null == e) return;
        let t = n.getGuildId();
        return (
          i()(null != t, "This channel cannot be guildless."),
          C(n, e.id, !0),
          r.tn.patch({
            url: _.ANM.UPDATE_VOICE_STATE(t, e.id),
            body: {
              suppress: !0,
              channel_id: n.id,
              self_video: !1,
              self_stream: !1,
            },
          })
        );
      }
      function S(e, n, t) {
        let l = e.getGuildId();
        i()(null != l, "Channel cannot be guildless");
        let r = e.permissionOverwrites[l],
          c = { id: l, type: s.BN.ROLE, allow: h.Hn, deny: h.Hn, ...r };
        t
          ? ((c.allow = a.IH(c.allow, n)), (c.deny = a.Od(c.deny, n)))
          : ((c.allow = a.Od(c.allow, n)), (c.deny = a.IH(c.deny, n))),
          o.Z.updatePermissionOverwrite(e.id, c);
      }
      async function T(e, n, t, l) {
        if ("" === n) return;
        d.Z.getVoiceChannelId() !== e.id && (0, m.TM)(e);
        let i = await (0, f.me)(e.id, n, t, l);
        return N(e, !1, !0), i;
      }
      async function E(e, n, t) {
        if ("" !== n) return await (0, f.Dk)(e.id, n, t);
      }
      async function b(e) {
        await (0, f.Ix)(e.id);
      }
    },
    192079: function (e, n, t) {
      t.d(n, {
        ER: function () {
          return u;
        },
        kk: function () {
          return h;
        },
        s$: function () {
          return m;
        },
      }),
        t(724458),
        t(47120),
        t(392711);
      var l = t(19780),
        i = t(5192),
        a = t(700785),
        r = t(427679),
        o = t(157925),
        s = t(981631),
        c = t(71080),
        d = t(388032);
      function u(e, n, t, l) {
        let a = n[0],
          r = i.ZP.getName(e, t, a),
          o = null != l ? l : n.length;
        return 1 === o && null != a
          ? r
          : null == a
            ? d.intl.formatToPlainString(d.t.chmM9P, { count: o })
            : d.intl.formatToPlainString(d.t.GhkJ29, { name: r, count: o - 1 });
      }
      function h(e, n) {
        switch (e) {
          case c.aC.OWNER:
            return d.intl.string(d.t.icuNBA);
          case c.aC.ADMINISTRATOR:
            return d.intl.string(d.t.eTmN5e);
          case c.aC.MEMBER:
          case c.aC.ROLE:
            return n ? d.intl.string(d.t.Hw3XW1) : d.intl.string(d.t.YieyPj);
          case c.aC.EMPTY_STATE:
        }
        return null;
      }
      function m(e) {
        let n = r.Z.getStageInstanceByChannel(e.id);
        return {
          channel_id: e.id,
          guild_id: e.guild_id,
          topic: null == n ? void 0 : n.topic,
          media_session_id: l.Z.getMediaSessionId(),
          request_to_speak_state: a.Uu(s.Plq.REQUEST_TO_SPEAK, e)
            ? o.BM.EVERYONE
            : o.BM.NO_ONE,
          stage_instance_id: null == n ? void 0 : n.id,
        };
      }
    },
    706058: function (e, n, t) {
      t.d(n, {
        Dk: function () {
          return r;
        },
        Ix: function () {
          return o;
        },
        me: function () {
          return a;
        },
      });
      var l = t(544891),
        i = t(981631);
      async function a(e, n, t, a, r) {
        return (
          await l.tn.post({
            url: i.ANM.STAGE_INSTANCES,
            body: {
              channel_id: e,
              topic: n,
              privacy_level: t,
              guild_scheduled_event_id: r,
              send_start_notification: a,
            },
          })
        ).body;
      }
      async function r(e, n, t) {
        return (
          await l.tn.patch({
            url: i.ANM.STAGE_INSTANCE(e),
            body: { topic: n, privacy_level: t },
          })
        ).body;
      }
      function o(e) {
        return l.tn.del(i.ANM.STAGE_INSTANCE(e));
      }
    },
    38981: function (e, n, t) {
      var l = t(200651);
      t(192379);
      var i = t(120356),
        a = t.n(i),
        r = t(481060),
        o = t(249133);
      n.Z = function (e) {
        let { count: n, className: t } = e;
        return (0, l.jsxs)("div", {
          className: a()(o.container, t),
          children: [
            (0, l.jsx)(r.HeadphonesIcon, {
              size: "custom",
              color: "currentColor",
              width: 12,
              height: 12,
              className: o.icon,
            }),
            (0, l.jsx)(r.Text, {
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
          return g;
        },
        mv: function () {
          return f;
        },
      });
      var l = t(200651);
      t(192379);
      var i = t(442837),
        a = t(692547),
        r = t(481060),
        o = t(239091),
        s = t(584511),
        c = t(112831),
        d = t(51144),
        u = t(88751),
        h = t(930180),
        m = t(388032),
        x = t(578814);
      let f = (e) => {
          let { channelId: n } = e,
            t = (0, h._d)(n);
          return 0 === t
            ? null
            : (0, l.jsxs)("div", {
                className: x.blockedNotice,
                children: [
                  (0, l.jsx)(r.DenyIcon, {
                    size: "lg",
                    className: x.__invalid_blockedIcon,
                    color: a.Z.unsafe_rawColors.RED_400.css,
                  }),
                  (0, l.jsx)(r.Text, {
                    variant: "text-xs/normal",
                    color: "header-secondary",
                    children: m.intl.format(m.t["6Tcdt7"], { number: t }),
                  }),
                  (0, l.jsx)(r.Clickable, {
                    className: x.blockedButton,
                    onClick: (e) => {
                      (0, o.vq)(
                        e,
                        (e) => (0, l.jsx)(_, { ...e, channelId: n }),
                        { position: "left", align: "bottom" },
                      );
                    },
                    children: m.intl.string(m.t.rUEjBQ),
                  }),
                ],
              });
        },
        g = (e) => {
          let { user: n, showStatus: t, speaker: a, channelId: o } = e,
            h = (0, i.e7)([u.ZP], () => u.ZP.isModerator(n.id, o)),
            f = null;
          return (
            t &&
              (f = a
                ? m.intl.string(m.t.LqMmGx)
                : h
                  ? m.intl.string(m.t.GMZqSk)
                  : m.intl.string(m.t.suRAp6)),
            (0, l.jsxs)("div", {
              className: x.user,
              children: [
                (0, l.jsx)(
                  s.Z,
                  {
                    src: n.getAvatarURL(null, 32),
                    size: r.AvatarSizes.SIZE_32,
                    muted: !1,
                    deafen: !1,
                    speaking: !1,
                    ringing: !1,
                    renderIcon: a
                      ? () =>
                          (0, l.jsx)(r.MicrophoneIcon, {
                            size: "md",
                            color: "currentColor",
                            className: x.icon,
                          })
                      : null,
                  },
                  n.id,
                ),
                (0, l.jsxs)("div", {
                  className: x.userInfo,
                  children: [
                    (0, l.jsxs)("div", {
                      className: x.username,
                      children: [
                        (0, l.jsx)(c.Z, {
                          size: t ? c.Z.Sizes.SIZE_16 : c.Z.Sizes.SIZE_14,
                          children: d.ZP.getName(n),
                        }),
                        (0, l.jsx)(c.Z, {
                          size: t ? c.Z.Sizes.SIZE_16 : c.Z.Sizes.SIZE_14,
                          color: c.Z.Colors.HEADER_SECONDARY,
                          children: "#".concat(n.discriminator),
                        }),
                      ],
                    }),
                    (0, l.jsxs)("div", {
                      className: x.username,
                      children: [
                        (0, l.jsx)(r.Text, {
                          variant: "text-xs/normal",
                          color: "text-danger",
                          children: m.intl.string(m.t["4bDptL"]),
                        }),
                        (0, l.jsxs)(r.Text, {
                          variant: "text-xs/normal",
                          color: "text-muted",
                          children: [" ", "| ", f],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        },
        _ = (e) => {
          let { channelId: n } = e,
            t = (0, h.z)(n);
          return (0, l.jsx)(r.Scroller, {
            className: x.container,
            children: t.map((e) => {
              let { user: t } = e;
              return (0, l.jsx)(g, { user: t, channelId: n }, t.id);
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
      var l = t(200651);
      t(192379);
      var i = t(120356),
        a = t.n(i),
        r = t(388032),
        o = t(843117),
        s = t(296507),
        c = t(866402);
      function d(e) {
        let { className: n, children: t } = e;
        return (0, l.jsxs)("div", {
          className: a()(o.container, n),
          children: [
            (0, l.jsx)("img", {
              alt: r.intl.string(r.t.VoB8OT),
              src: c,
              className: a()(o.sparkleIcon, o.sparkleBottom),
            }),
            t,
            (0, l.jsx)("img", {
              alt: r.intl.string(r.t.VoB8OT),
              src: s,
              className: a()(o.sparkleIcon, o.sparkleTop),
            }),
          ],
        });
      }
    },
    659972: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return f;
        },
        k: function () {
          return i;
        },
      });
      var l,
        i,
        a = t(200651);
      t(192379);
      var r = t(120356),
        o = t.n(r),
        s = t(481060),
        c = t(565138),
        d = t(372769),
        u = t(857395),
        h = t(131154),
        m = t(38981),
        x = t(142664);
      function f(e) {
        let {
            guild: n,
            stageInstance: t,
            showGuildPopout: l,
            setShowGuildPopout: i,
            handleGuildNameClick: r,
            source: f,
            speakers: g,
            speakerCount: _,
            audienceCount: v,
            channelName: I,
          } = e,
          N = n.id;
        return (0, a.jsx)("div", {
          className: x.contentContainer,
          children: (0, a.jsxs)("div", {
            className: x.headerContainer,
            children: [
              (0, a.jsxs)("div", {
                className: x.guildInfoContainer,
                children: [
                  (0, a.jsx)(u.Z, {
                    guildId: N,
                    shouldShow: l,
                    onRequestClose: () => i(!1),
                    children: () =>
                      (0, a.jsxs)(s.Clickable, {
                        className: x.flexContainerRow,
                        onClick: r,
                        children: [
                          (0, a.jsx)(c.Z, {
                            guild: n,
                            size: c.Z.Sizes.MINI,
                            className: x.guildIcon,
                          }),
                          (0, a.jsxs)("div", {
                            className: x.flexContainerRow,
                            children: [
                              (0, a.jsx)(s.Text, {
                                color: "header-secondary",
                                variant: "text-sm/normal",
                                className: o()(x.guildName, {
                                  [x.disabled]: null == r,
                                }),
                                children: n.name,
                              }),
                              (0, a.jsx)(d.Z, { guild: n }),
                            ],
                          }),
                        ],
                      }),
                  }),
                  (0, a.jsxs)("div", {
                    className: x.rightJustifiedContent,
                    children: [
                      6 === f &&
                        (0, a.jsx)("div", {
                          className: x.featuredTag,
                          children: (0, a.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            className: x.featuredTagText,
                            children: "Featured",
                          }),
                        }),
                      (0, a.jsx)(m.Z, {
                        count: v,
                        className: x.__invalid_audienceCount,
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsx)(s.Text, {
                color: "header-primary",
                variant: "text-lg/semibold",
                className: x.topicText,
                children: t.topic,
              }),
              (0, a.jsx)(s.Text, {
                color: "header-secondary",
                className: x.description,
                variant: "text-sm/normal",
                children: t.description,
              }),
              (0, a.jsx)(h.Z, {
                guild: n,
                speakers: g,
                speakerCount: _,
                className: x.speakers,
              }),
              null != I &&
                (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)("hr", { className: x.divider }),
                    (0, a.jsxs)("div", {
                      className: x.footer,
                      children: [
                        (0, a.jsx)(s.StageIcon, {
                          size: "custom",
                          color: "currentColor",
                          width: 20,
                          height: 20,
                          className: x.icon,
                        }),
                        (0, a.jsx)(s.Text, {
                          color: "header-secondary",
                          className: x.__invalid_label,
                          variant: "text-sm/normal",
                          children: I,
                        }),
                      ],
                    }),
                  ],
                }),
            ],
          }),
        });
      }
      ((l = i || (i = {}))[(l.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (l[(l.TRENDING = 1)] = "TRENDING"),
        (l[(l.PERSONALIZED = 2)] = "PERSONALIZED"),
        (l[(l.USER_GUILDS = 3)] = "USER_GUILDS"),
        (l[(l.FRIENDS_GUILDS = 4)] = "FRIENDS_GUILDS"),
        (l[(l.INTRO_CARD = 5)] = "INTRO_CARD"),
        (l[(l.FEATURED = 6)] = "FEATURED");
    },
    540186: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return N;
        },
      }),
        t(653041);
      var l = t(200651);
      t(192379);
      var i = t(442837),
        a = t(481060),
        r = t(594174),
        o = t(311888),
        s = t(63063),
        c = t(5192),
        d = t(431328),
        u = t(501655),
        h = t(659972),
        m = t(981631),
        x = t(765305),
        f = t(388032),
        g = t(537889);
      function _(e) {
        let { icon: n } = e;
        return (0, l.jsx)("div", {
          className: g.iconContainer,
          children: (0, l.jsx)(n, { color: "currentColor", size: "md" }),
        });
      }
      function v(e) {
        let { icon: n, text: t } = e;
        return (0, l.jsxs)("div", {
          className: g.listItemContainer,
          children: [
            (0, l.jsx)("div", {
              className: g.listItemIconContainer,
              children: n,
            }),
            (0, l.jsx)(a.Text, {
              className: g.listItemText,
              variant: "text-md/normal",
              color: "header-secondary",
              children: t,
            }),
          ],
        });
      }
      function I(e) {
        var n;
        let { guild: t, channel: a, stageData: o } = e,
          s = (0, i.e7)([r.default], () => r.default.getCurrentUser(), []),
          m = {
            id: "1337",
            guild_id: t.id,
            channel_id: a.id,
            topic: o.topic,
            description: o.description,
            privacy_level:
              null !== (n = o.privacyLevel) && void 0 !== n ? n : x.j8.PUBLIC,
          },
          f = (0, d.w8)(a.id, u.pV.SPEAKER),
          _ = (0, d.Rk)(a.id, u.pV.AUDIENCE),
          v = f.slice(0, 5);
        return (
          null ==
            v.find((e) => {
              var n;
              return (
                (null === (n = e.user) || void 0 === n ? void 0 : n.id) ===
                (null == s ? void 0 : s.id)
              );
            }) && v.push({ user: s, userNick: c.ZP.getName(t.id, a.id, s) }),
          (0, l.jsx)("div", {
            className: g.previewCardContainer,
            children: (0, l.jsx)("div", {
              className: g.previewCard,
              children: (0, l.jsx)(h.Z, {
                guild: t,
                stageInstance: m,
                showGuildPopout: !1,
                setShowGuildPopout: () => {},
                source: h.k.UNSPECIFIED,
                speakers: v,
                speakerCount: f.length,
                audienceCount: Math.max(1337, _),
                channelName: a.name,
              }),
            }),
          })
        );
      }
      function N(e) {
        let {
          guild: n,
          channel: t,
          stageData: i,
          headerId: r,
          loading: c,
          onNext: d,
          onCancel: u,
          onBack: h,
        } = e;
        return null == n || null == t || null == i
          ? null
          : (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsx)(I, { guild: n, channel: t, stageData: i }),
                (0, l.jsxs)(a.ModalContent, {
                  className: g.container,
                  children: [
                    (0, l.jsxs)("div", {
                      className: g.header,
                      children: [
                        (0, l.jsx)(a.Heading, {
                          id: r,
                          className: g.__invalid_title,
                          variant: "heading-xl/semibold",
                          children: f.intl.string(f.t.GXpXTE),
                        }),
                        (0, l.jsx)(a.Text, {
                          className: g.subtitle,
                          color: "header-secondary",
                          variant: "text-sm/normal",
                          children: f.intl.string(f.t.JaYMvL),
                        }),
                      ],
                    }),
                    (0, l.jsxs)("div", {
                      className: g.__invalid_list,
                      children: [
                        (0, l.jsx)(v, {
                          icon: (0, l.jsx)(_, { icon: a.CompassIcon }),
                          text: f.intl.string(f.t.u6oOcn),
                        }),
                        (0, l.jsx)(v, {
                          icon: (0, l.jsx)(_, { icon: a.FriendsIcon }),
                          text: f.intl.string(f.t.QC8ymZ),
                        }),
                        (0, l.jsx)(v, {
                          icon: (0, l.jsx)(_, { icon: a.PencilIcon }),
                          text: f.intl.string(f.t.mgGOT0),
                        }),
                        (0, l.jsx)(v, {
                          icon: (0, l.jsx)(o.Z, {
                            className: g.badgeIconBackground,
                            foreground: g.badgeIconForeground,
                            width: 40,
                            height: 40,
                          }),
                          text: f.intl.format(f.t.qLmNLC, {
                            articleURL: s.Z.getArticleURL(
                              m.BhN.STAGE_CHANNEL_GUIDELINES,
                            ),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, l.jsxs)(a.ModalFooter, {
                  children: [
                    (0, l.jsx)(a.Button, {
                      color: a.Button.Colors.GREEN,
                      onClick: d,
                      submitting: c,
                      children: f.intl.string(f.t.s8mM8P),
                    }),
                    (0, l.jsx)(a.Button, {
                      color: a.Button.Colors.PRIMARY,
                      className: g.cancelButton,
                      onClick: u,
                      children: f.intl.string(f.t["ETE/oK"]),
                    }),
                    (0, l.jsx)(a.Button, {
                      look: a.Button.Looks.LINK,
                      color: a.Button.Colors.LINK,
                      className: g.backButton,
                      onClick: h,
                      size: a.Button.Sizes.MIN,
                      children: f.intl.string(f.t["13/7kZ"]),
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
          return k;
        },
      }),
        t(47120);
      var l = t(200651),
        i = t(192379),
        a = t(913527),
        r = t.n(a),
        o = t(442837),
        s = t(481060),
        c = t(933557),
        d = t(77810),
        u = t(854698),
        h = t(40623),
        m = t(440371),
        x = t(810788),
        f = t(699516),
        g = t(594174),
        _ = t(626135),
        v = t(570188),
        I = t(427679),
        N = t(930180),
        p = t(582019),
        C = t(157925),
        j = t(981631),
        S = t(765305),
        T = t(190378),
        E = t(388032),
        b = t(479562);
      function A(e) {
        let { stageChannelsInGuild: n, channel: t, onSelectChannel: i } = e;
        return null == i
          ? null
          : (0, l.jsx)(l.Fragment, {
              children: (0, l.jsx)(s.FormItem, {
                title: E.intl.string(E.t.S7GjDw) + " asdf",
                className: b.channelSelectionFormItem,
                required: !0,
                children: (0, l.jsx)(s.SearchableSelect, {
                  value: t.id,
                  options: n.map((e) => ({
                    value: e.id,
                    label: (0, c.F6)(e, g.default, f.Z, !0),
                  })),
                  onChange: (e) => {
                    let t = n.find((n) => n.id === e);
                    null != t && i(t);
                  },
                  renderOptionPrefix: () =>
                    (0, l.jsx)(s.StageIcon, {
                      size: "custom",
                      color: "currentColor",
                      height: 24,
                    }),
                }),
              }),
            });
      }
      function k(e) {
        var n, t, a, f, g, k, Z, B;
        let {
            channel: D,
            guild: y,
            header: R,
            error: P,
            loading: w,
            onSave: G,
            onEventSave: M,
            onClose: L,
            onSelectChannel: O,
            isEvent: U = !1,
            defaultOptions: F,
            isSlideReady: z = !0,
          } = e,
          H = i.useMemo(() => I.Z.getStageInstanceByChannel(D.id), [D.id]),
          [V, q] = i.useState(
            null !==
              (t =
                null !== (n = null == F ? void 0 : F.topic) && void 0 !== n
                  ? n
                  : null == H
                    ? void 0
                    : H.topic) && void 0 !== t
              ? t
              : "",
          ),
          [K, W] = i.useState(
            null !== (a = null == F ? void 0 : F.description) && void 0 !== a
              ? a
              : "",
          ),
          [Y] = i.useState(U),
          [J, Q] = i.useState(
            null !== (f = null == F ? void 0 : F.schedule) && void 0 !== f
              ? f
              : { startDate: (0, u.ib)() },
          ),
          [X, $] = i.useState(Y && (null == F ? void 0 : F.schedule) != null),
          ee = (0, v.J)(D),
          en = (0, v.U)(D),
          et = null == H && ee && !Y,
          [el, ei] = i.useState(et && en),
          ea = (0, o.e7)([x.Z], () =>
            x.Z.hasHotspot(T.v.LIVE_STAGE_NOTIFICATION_BADGE),
          ),
          er = S.j8.GUILD_ONLY,
          [eo] = i.useState(
            null !==
              (k =
                null !== (g = null == F ? void 0 : F.privacyLevel) &&
                void 0 !== g
                  ? g
                  : null == H
                    ? void 0
                    : H.privacy_level) && void 0 !== k
              ? k
              : er,
          ),
          [es, ec] = i.useState(null == F ? void 0 : F.recurrenceRule),
          ed = (0, N._d)(D.id),
          [eu, eh] = i.useState(!1),
          em = (0, c.ZP)(D),
          ex = (0, d.q)(y),
          ef = null != O,
          eg = ex.length > 1;
        i.useEffect(() => {
          _.default.track(j.rMx.START_STAGE_OPENED, {
            stage_instance_id: null == H ? void 0 : H.id,
            can_start_public_stage: !1,
            guild_id: D.guild_id,
          });
        }, []);
        let e_ = (e) => {
          if (
            (e.preventDefault(), eo === S.j8.PUBLIC && V.length < 20 && !eu)
          ) {
            eh(!0);
            return;
          }
          let n = { topic: V, privacyLevel: eo, sendStartNotification: el };
          if (Y) {
            if (!X) return;
            null == M ||
              M({
                ...n,
                schedule: J,
                description: K,
                entityType: S.WX.STAGE_INSTANCE,
              });
            return;
          }
          null == G || G(n);
        };
        let { color: ev, text: eI } =
            ((Z = H),
            (B = eo),
            Y
              ? {
                  color: s.Button.Colors.BRAND,
                  text: E.intl.string(E.t["60lJ0N"]),
                }
              : B === S.j8.PUBLIC &&
                  (null == Z ? void 0 : Z.privacy_level) !== S.j8.PUBLIC
                ? {
                    color: s.Button.Colors.BRAND,
                    text: E.intl.string(E.t["3PatS0"]),
                  }
                : null == Z
                  ? {
                      color: s.Button.Colors.GREEN,
                      text: E.intl.string(E.t.s8mM8P),
                    }
                  : {
                      color: s.Button.Colors.BRAND,
                      text: E.intl.string(E.t.K344S0),
                    }),
          eN = i.useRef(null);
        i.useEffect(() => {
          var e;
          z && (null === (e = eN.current) || void 0 === e || e.focus());
        }, [z]);
        let ep = X && null != J.startDate && J.startDate >= r()();
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsxs)(s.ModalContent, {
              className: b.modalContent,
              children: [
                R,
                (0, l.jsx)("div", {
                  className: b.blockedUsersContainer,
                  children:
                    null == H &&
                    ed > 0 &&
                    (0, l.jsx)(p.mv, { channelId: D.id }),
                }),
                (0, l.jsxs)("form", {
                  onSubmit: e_,
                  className: b.form,
                  children: [
                    (0, l.jsxs)(s.FormItem, {
                      title: U
                        ? E.intl.string(E.t["0HbEQ0"])
                        : E.intl.string(E.t["5FPBOD"]),
                      className: b.topicFormItem,
                      required: !0,
                      children: [
                        (0, l.jsx)(s.TextInput, {
                          className: b.textInput,
                          onChange: (e) => q(e),
                          placeholder: E.intl.string(E.t.ZwWrub),
                          maxLength: C.xA,
                          value: V,
                          autoComplete: "off",
                          inputRef: eN,
                        }),
                        eu &&
                          (0, l.jsx)(s.Text, {
                            variant: "text-xs/normal",
                            color: "text-warning",
                            className: b.warning,
                            children: E.intl.string(E.t.AqTyaW),
                          }),
                        null != P
                          ? (0, l.jsx)(s.Text, {
                              color: "text-danger",
                              variant: "text-xs/normal",
                              className: b.warning,
                              children: P.getAnyErrorMessage(),
                            })
                          : null,
                      ],
                    }),
                    ef && eg
                      ? (0, l.jsx)(A, {
                          stageChannelsInGuild: ex,
                          channel: D,
                          onSelectChannel: O,
                        })
                      : null,
                    Y &&
                      (0, l.jsxs)(l.Fragment, {
                        children: [
                          (0, l.jsx)(m.Z, {
                            className: b.formItem,
                            onScheduleChange: Q,
                            onRecurrenceChange: (e) => {
                              let n = J.startDate;
                              if (null != n) ec((0, u.mF)(e, n));
                            },
                            schedule: J,
                            recurrenceRule: es,
                            timeSelected: X,
                            onTimeChange: $,
                          }),
                          null != J.startDate && J.startDate < r()()
                            ? (0, l.jsx)(s.Text, {
                                color: "text-danger",
                                variant: "text-xs/normal",
                                className: b.warning,
                                children: E.intl.string(E.t.AXR5Sk),
                              })
                            : null,
                        ],
                      }),
                    U &&
                      (0, l.jsx)(s.FormItem, {
                        title: E.intl.string(E.t["+gRCCw"]),
                        className: b.formItem,
                        children: (0, l.jsx)(s.TextArea, {
                          placeholder: E.intl.string(E.t["kWO/Ex"]),
                          value: K,
                          onChange: (e) => W(e),
                          maxLength: S.wm,
                        }),
                      }),
                    et
                      ? (0, l.jsx)(h.Z, {
                          sendStartNotification: el,
                          setSendStartNotification: ei,
                          showNotificationNewBadge: ea,
                        })
                      : null,
                    ef && !eg
                      ? (0, l.jsx)(s.Text, {
                          color: "header-secondary",
                          variant: "text-xs/normal",
                          className: b.channelSelection,
                          children: E.intl.format(E.t["S+9O7u"], {
                            stageName: em,
                            stageHook: (e, n) =>
                              (0, l.jsx)(
                                "span",
                                { className: b.channelName, children: D.name },
                                n,
                              ),
                          }),
                        })
                      : null,
                  ],
                }),
              ],
            }),
            (0, l.jsxs)(s.ModalFooter, {
              children: [
                (0, l.jsx)(s.Button, {
                  color: ev,
                  onClick: e_,
                  disabled: "" === V || null == eo || (U && !ep),
                  submitting: w,
                  children: eI,
                }),
                (0, l.jsx)(s.Button, {
                  color: s.Button.Colors.PRIMARY,
                  className: b.cancelButton,
                  onClick: L,
                  children: E.intl.string(E.t["ETE/oK"]),
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
            return I;
          },
        });
      var l = t(200651),
        i = t(192379),
        a = t(442837),
        r = t(481060),
        o = t(313201),
        s = t(430824),
        c = t(427679),
        d = t(939863),
        u = t(540186),
        h = t(609776),
        m = t(289584),
        x = t(180899),
        f = t(157925),
        g = t(388032),
        _ = t(639879);
      function v(e) {
        let {
          guild: n,
          channel: t,
          stageInstance: i,
          headerId: a,
          onClose: o,
          loading: s,
          error: c,
          onSave: u,
          defaultOptions: m,
          isSlideReady: x,
        } = e;
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsxs)("div", {
              className: _.content,
              children: [
                (0, l.jsx)(d.Z, {
                  children: (0, l.jsx)("div", {
                    className: _.stageIconBackground,
                    children: (0, l.jsx)(r.StageIcon, {
                      size: "custom",
                      color: "currentColor",
                      width: 32,
                      height: 32,
                      className: _.stageIcon,
                    }),
                  }),
                }),
                (0, l.jsx)(r.Heading, {
                  id: a,
                  variant: "heading-xl/semibold",
                  color: "header-primary",
                  className: _.headerTitle,
                  children:
                    null == i
                      ? g.intl.string(g.t.DDF0cH)
                      : g.intl.string(g.t.YPdQOj),
                }),
                (0, l.jsx)(r.Text, {
                  variant: "text-sm/normal",
                  color: "header-secondary",
                  className: _.headerSubtitle,
                  children:
                    null == i
                      ? g.intl.string(g.t.bqQIwc)
                      : g.intl.string(g.t["I+9bLy"]),
                }),
              ],
            }),
            (0, l.jsx)(h.Z, {
              guild: n,
              channel: t,
              onSave: u,
              error: c,
              loading: s,
              onClose: o,
              defaultOptions: m,
              isSlideReady: x,
            }),
          ],
        });
      }
      function I(e) {
        let { channel: n, onClose: t, transitionState: d, ...h } = e,
          g = (0, o.Dt)(),
          I = (0, a.e7)([s.Z], () => s.Z.getGuild(n.guild_id)),
          N = i.useMemo(() => c.Z.getStageInstanceByChannel(n.id), [n.id]),
          { loading: p, error: C, onSave: j } = (0, m.Z)(n, t),
          {
            modalStep: S,
            setModalStep: T,
            readySlide: E,
            handleSlideReady: b,
            savedOptions: A,
            handleSettingsSave: k,
            handleDelayedSave: Z,
          } = (0, x.Z)({
            stageInstance: N,
            defaultStep: f.lv.STAGE_CHANNEL_SETTINGS,
            error: C,
            onSave: j,
          });
        return (i.useEffect(() => {
          null == I && t();
        }, [I, t]),
        null == I)
          ? null
          : (0, l.jsx)(r.ModalRoot, {
              transitionState: d,
              "aria-labelledby": g,
              ...h,
              size: r.ModalSize.SMALL,
              children: (0, l.jsxs)(r.Slides, {
                activeSlide: S,
                width: 440,
                onSlideReady: b,
                children: [
                  (0, l.jsx)(r.Slide, {
                    id: f.lv.STAGE_CHANNEL_SETTINGS,
                    children: (0, l.jsx)("div", {
                      className: _.slideContainer,
                      children: (0, l.jsx)(v, {
                        guild: I,
                        channel: n,
                        stageInstance: N,
                        headerId: g,
                        onClose: t,
                        loading: p,
                        error: C,
                        onSave: k,
                        defaultOptions: A,
                        isSlideReady: E === f.lv.STAGE_CHANNEL_SETTINGS,
                      }),
                    }),
                  }),
                  (0, l.jsx)(r.Slide, {
                    id: f.lv.PUBLIC_STAGE_PREVIEW,
                    children: (0, l.jsx)("div", {
                      className: _.slideContainer,
                      children: (0, l.jsx)(u.Z, {
                        headerId: g,
                        guild: I,
                        channel: n,
                        stageData: A,
                        loading: p,
                        onNext: Z,
                        onCancel: t,
                        onBack: () => T(f.lv.STAGE_CHANNEL_SETTINGS),
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
          return h;
        },
      }),
        t(47120);
      var l = t(192379),
        i = t(749210),
        a = t(287734),
        r = t(881052),
        o = t(142497),
        s = t(570188),
        c = t(471253),
        d = t(427679),
        u = t(190378);
      function h(e, n) {
        let t =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : null,
          [h, m] = l.useState(!1),
          [x, f] = l.useState(null),
          g = l.useMemo(
            () => d.Z.getStageInstanceByChannel(null == e ? void 0 : e.id),
            [null == e ? void 0 : e.id],
          ),
          _ = (0, s.J)(e);
        return {
          loading: h,
          error: x,
          onSave: async (l) => {
            let { topic: s, privacyLevel: d, sendStartNotification: h } = l;
            if (null != e && "" !== s && null != d) {
              m(!0),
                f(null),
                null != t &&
                  (i.Z.selectGuild(t), a.default.selectVoiceChannel(e.id));
              try {
                let t;
                null != g
                  ? (t = await c.Ef(e, s, d))
                  : ((t = await c.HO(e, s, d, null != h && h)),
                    _ && o.Kw(u.v.LIVE_STAGE_NOTIFICATION_BADGE)),
                  n(t);
              } catch (e) {
                f(new r.Hx(e)), m(!1);
              }
            }
          },
        };
      }
    },
    180899: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      }),
        t(47120);
      var l = t(192379),
        i = t(512722),
        a = t.n(i),
        r = t(157925),
        o = t(765305);
      function s(e) {
        let { stageInstance: n, defaultStep: t, error: i, onSave: s } = e,
          [c, d] = l.useState(t),
          [u, h] = l.useState(),
          [m, x] = l.useState(null);
        return (
          l.useEffect(() => {
            null != i && d(r.lv.STAGE_CHANNEL_SETTINGS);
          }, [i]),
          {
            modalStep: c,
            setModalStep: d,
            readySlide: m,
            handleSlideReady: function (e) {
              return x(e);
            },
            savedOptions: u,
            handleSettingsSave: function (e) {
              if (
                (h(e),
                e.privacyLevel === o.j8.PUBLIC &&
                  (null == n ? void 0 : n.privacy_level) !== o.j8.PUBLIC)
              ) {
                d(r.lv.PUBLIC_STAGE_PREVIEW);
                return;
              }
              s(e);
            },
            handleDelayedSave: function () {
              a()(null != u, "Must have some saved options."), s(u);
            },
          }
        );
      }
    },
    311888: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return a;
        },
      });
      var l = t(200651);
      t(192379);
      var i = t(325767);
      function a(e) {
        let {
          width: n = 32,
          height: t = 32,
          color: a = "currentColor",
          foreground: r,
          ...o
        } = e;
        return (0, l.jsxs)("svg", {
          ...(0, i.Z)(o),
          width: n,
          height: t,
          viewBox: "0 0 32 32",
          children: [
            (0, l.jsx)("rect", {
              width: "32",
              height: "32",
              rx: "16",
              fill: a,
            }),
            (0, l.jsx)("path", {
              d: "M23 9.99995C19.56 9.99995 16.826 6.43495 16.799 6.39795C16.421 5.89795 15.579 5.89795 15.201 6.39795C15.174 6.43495 12.44 9.99995 9 9.99995C8.447 9.99995 8 10.4479 8 10.9999V17.9999C8 21.8069 14.764 25.4779 15.534 25.8839C15.68 25.9609 15.84 25.9979 16 25.9979C16.16 25.9979 16.32 25.9599 16.466 25.8839C17.236 25.4779 24 21.8069 24 17.9999V10.9999C24 10.4479 23.553 9.99995 23 9.99995ZM19 19.9999L16 17.9999L13 19.9999L14 16.9999L12 14.9999H15L16 11.9999L17 14.9999H20L18 16.9999L19 19.9999Z",
              className: r,
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
//# sourceMappingURL=f57d52e78d901d5e78a7.js.map
