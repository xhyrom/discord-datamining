"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["84686"],
  {
    296507: function (n) {
      n.exports = "/assets/8447e4e321cc04bd6a4c.svg";
    },
    866402: function (n) {
      n.exports = "/assets/9d5696b9d1f0b77fd074.svg";
    },
    471253: function (n, e, t) {
      t.d(e, {
        DT: function () {
          return b;
        },
        Ef: function () {
          return S;
        },
        HO: function () {
          return v;
        },
        NZ: function () {
          return k;
        },
        Pq: function () {
          return j;
        },
        Q1: function () {
          return E;
        },
        RK: function () {
          return T;
        },
        _0: function () {
          return I;
        },
        hz: function () {
          return p;
        },
        yi: function () {
          return N;
        },
      });
      var r = t(512722),
        i = t.n(r),
        l = t(149765),
        c = t(544891),
        s = t(493683);
      t(749210);
      var o = t(911969),
        a = t(367907),
        d = t(944486),
        u = t(979651),
        h = t(700785),
        _ = t(922482),
        m = t(192079),
        x = t(706058),
        g = t(590415),
        f = t(981631);
      function E(n, e) {
        let t = n.getGuildId();
        return (
          i()(null != t, "This channel cannot be guildless."),
          e && (0, a.yw)(f.rMx.REQUEST_TO_SPEAK_INITIATED, { ...(0, m.s$)(n) }),
          c.tn.patch({
            url: f.ANM.UPDATE_VOICE_STATE(t),
            body: {
              request_to_speak_timestamp: e ? new Date().toISOString() : null,
              channel_id: n.id,
            },
            rejectWithError: !1,
          })
        );
      }
      function I(n, e) {
        let t = n.getGuildId();
        return (
          i()(null != t, "This channel cannot be guildless."),
          c.tn.patch({
            url: f.ANM.UPDATE_VOICE_STATE(t, e),
            body: {
              suppress: !1,
              request_to_speak_timestamp: new Date().toISOString(),
              channel_id: n.id,
            },
            rejectWithError: !1,
          })
        );
      }
      function T(n, e) {
        let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          r = null == n ? void 0 : n.getGuildId();
        i()(null != r, "This channel cannot be guildless.");
        let l = u.Z.getVoiceStateForChannel(n.id);
        return (
          (0, g.gf)(l) === g.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK &&
            !e &&
            (0, a.yw)(f.rMx.PROMOTED_TO_SPEAKER, { ...(0, m.s$)(n) }),
          c.tn.patch({
            url: f.ANM.UPDATE_VOICE_STATE(r),
            body: {
              suppress: e,
              request_to_speak_timestamp: null,
              channel_id: n.id,
              ...(t ? { silent: t } : {}),
            },
            rejectWithError: !1,
          })
        );
      }
      function N(n) {
        let e = null == n ? void 0 : n.getGuildId();
        return (
          i()(null != e, "This channel cannot be guildless."),
          c.tn.patch({
            url: f.ANM.UPDATE_VOICE_STATE(e),
            body: {
              suppress: !0,
              channel_id: n.id,
              self_video: !1,
              self_stream: !1,
            },
            rejectWithError: !1,
          })
        );
      }
      function b(n, e, t) {
        let r = n.getGuildId();
        return (
          i()(null != r, "This channel cannot be guildless."),
          c.tn.patch({
            url: f.ANM.UPDATE_VOICE_STATE(r, e),
            body: { suppress: t, channel_id: n.id },
            rejectWithError: !1,
          })
        );
      }
      function p(n, e) {
        if (null == e || null == n) return;
        let t = e.getGuildId();
        return (
          i()(null != t, "This channel cannot be guildless."),
          b(e, n.id, !0),
          c.tn.patch({
            url: f.ANM.UPDATE_VOICE_STATE(t, n.id),
            body: {
              suppress: !0,
              channel_id: e.id,
              self_video: !1,
              self_stream: !1,
            },
            rejectWithError: !1,
          })
        );
      }
      function j(n, e, t) {
        let r = n.getGuildId();
        i()(null != r, "Channel cannot be guildless");
        let c = n.permissionOverwrites[r],
          a = { id: r, type: o.BN.ROLE, allow: h.Hn, deny: h.Hn, ...c };
        t
          ? ((a.allow = l.IH(a.allow, e)), (a.deny = l.Od(a.deny, e)))
          : ((a.allow = l.Od(a.allow, e)), (a.deny = l.IH(a.deny, e))),
          s.Z.updatePermissionOverwrite(n.id, a);
      }
      async function v(n, e, t, r) {
        if ("" === e) return;
        d.Z.getVoiceChannelId() !== n.id && (0, _.TM)(n);
        let i = await (0, x.me)(n.id, e, t, r);
        return T(n, !1, !0), i;
      }
      async function S(n, e, t) {
        if ("" !== e) return await (0, x.Dk)(n.id, e, t);
      }
      async function k(n) {
        await (0, x.Ix)(n.id);
      }
    },
    192079: function (n, e, t) {
      t.d(e, {
        ER: function () {
          return u;
        },
        kk: function () {
          return h;
        },
        s$: function () {
          return _;
        },
      }),
        t(724458),
        t(47120),
        t(392711);
      var r = t(19780),
        i = t(5192),
        l = t(700785),
        c = t(427679),
        s = t(157925),
        o = t(981631),
        a = t(71080),
        d = t(388032);
      function u(n, e, t, r) {
        let l = e[0],
          c = i.ZP.getName(n, t, l),
          s = null != r ? r : e.length;
        return 1 === s && null != l
          ? c
          : null == l
            ? d.intl.formatToPlainString(d.t.chmM9P, { count: s })
            : d.intl.formatToPlainString(d.t.GhkJ29, { name: c, count: s - 1 });
      }
      function h(n, e) {
        switch (n) {
          case a.aC.OWNER:
            return d.intl.string(d.t.icuNBA);
          case a.aC.ADMINISTRATOR:
            return d.intl.string(d.t.eTmN5e);
          case a.aC.MEMBER:
          case a.aC.ROLE:
            return e ? d.intl.string(d.t.Hw3XW1) : d.intl.string(d.t.YieyPj);
          case a.aC.EMPTY_STATE:
        }
        return null;
      }
      function _(n) {
        let e = c.Z.getStageInstanceByChannel(n.id);
        return {
          channel_id: n.id,
          guild_id: n.guild_id,
          topic: null == e ? void 0 : e.topic,
          media_session_id: r.Z.getMediaSessionId(),
          request_to_speak_state: l.Uu(o.Plq.REQUEST_TO_SPEAK, n)
            ? s.BM.EVERYONE
            : s.BM.NO_ONE,
          stage_instance_id: null == e ? void 0 : e.id,
        };
      }
    },
    706058: function (n, e, t) {
      t.d(e, {
        Dk: function () {
          return c;
        },
        Ix: function () {
          return s;
        },
        me: function () {
          return l;
        },
      });
      var r = t(544891),
        i = t(981631);
      async function l(n, e, t, l, c) {
        return (
          await r.tn.post({
            url: i.ANM.STAGE_INSTANCES,
            body: {
              channel_id: n,
              topic: e,
              privacy_level: t,
              guild_scheduled_event_id: c,
              send_start_notification: l,
            },
            rejectWithError: !1,
          })
        ).body;
      }
      async function c(n, e, t) {
        return (
          await r.tn.patch({
            url: i.ANM.STAGE_INSTANCE(n),
            body: { topic: e, privacy_level: t },
            rejectWithError: !1,
          })
        ).body;
      }
      function s(n) {
        return r.tn.del({ url: i.ANM.STAGE_INSTANCE(n), rejectWithError: !1 });
      }
    },
    46920: function (n, e, t) {
      t.d(e, {
        Ie: function () {
          return I;
        },
        mv: function () {
          return f;
        },
      }),
        t(47120);
      var r = t(200651);
      t(192379);
      var i = t(442837),
        l = t(692547),
        c = t(481060),
        s = t(239091),
        o = t(584511),
        a = t(118012),
        d = t(922611),
        u = t(699516),
        h = t(51144),
        _ = t(88751),
        m = t(930180),
        x = t(388032),
        g = t(834110);
      let f = (n) => {
          let { channelId: e } = n,
            t = (0, m._d)(e);
          return (0, d.Do)({ location: "blocked-users-notice" })
            ? (0, r.jsx)(E, { channelId: e })
            : 0 === t
              ? null
              : (0, r.jsxs)("div", {
                  className: g.blockedNotice,
                  children: [
                    (0, r.jsx)(c.DenyIcon, {
                      size: "lg",
                      className: g.__invalid_blockedIcon,
                      color: l.Z.unsafe_rawColors.RED_400.css,
                    }),
                    (0, r.jsx)(c.Text, {
                      variant: "text-xs/normal",
                      color: "header-secondary",
                      children: x.intl.format(x.t["6Tcdt7"], { number: t }),
                    }),
                    (0, r.jsx)(c.Clickable, {
                      className: g.blockedButton,
                      onClick: (n) => {
                        (0, s.vq)(
                          n,
                          (n) => (0, r.jsx)(T, { ...n, channelId: e }),
                          { position: "left", align: "bottom" },
                        );
                      },
                      children: x.intl.string(x.t.rUEjBQ),
                    }),
                  ],
                });
        },
        E = (n) => {
          let { channelId: e } = n,
            t = (0, m._d)(e),
            i = (0, m.K3)(e);
          if (0 === t && 0 === i) return null;
          let o = (n) => {
            (0, s.vq)(n, (n) => (0, r.jsx)(T, { ...n, channelId: e }), {
              position: "left",
              align: "bottom",
            });
          };
          return t > 0 && i > 0
            ? (0, r.jsxs)("div", {
                className: g.blockedNotice,
                children: [
                  (0, r.jsx)(c.DenyIcon, {
                    size: "lg",
                    color: l.Z.unsafe_rawColors.RED_400.css,
                  }),
                  (0, r.jsx)(c.Text, {
                    variant: "text-xs/normal",
                    color: "header-secondary",
                    children: x.intl.string(x.t["P/KFX1"]),
                  }),
                  (0, r.jsx)(c.Clickable, {
                    className: g.blockedButton,
                    onClick: o,
                    children: x.intl.string(x.t.rUEjBQ),
                  }),
                ],
              })
            : i > 0
              ? (0, r.jsxs)("div", {
                  className: g.blockedNotice,
                  children: [
                    (0, r.jsx)(c.EyeSlashIcon, { size: "lg" }),
                    (0, r.jsx)(c.Text, {
                      variant: "text-xs/normal",
                      color: "header-secondary",
                      children: x.intl.format(x.t.Ri3o39, { number: i }),
                    }),
                    (0, r.jsx)(c.Clickable, {
                      className: g.blockedButton,
                      onClick: o,
                      children: x.intl.string(x.t.rUEjBQ),
                    }),
                  ],
                })
              : (0, r.jsxs)("div", {
                  className: g.blockedNotice,
                  children: [
                    (0, r.jsx)(c.DenyIcon, {
                      size: "lg",
                      color: l.Z.unsafe_rawColors.RED_400.css,
                    }),
                    (0, r.jsx)(c.Text, {
                      variant: "text-xs/normal",
                      color: "header-secondary",
                      children: x.intl.format(x.t["6Tcdt7"], { number: t }),
                    }),
                    (0, r.jsx)(c.Clickable, {
                      className: g.blockedButton,
                      onClick: o,
                      children: x.intl.string(x.t.rUEjBQ),
                    }),
                  ],
                });
        },
        I = (n) => {
          let { user: e, showStatus: t, speaker: l, channelId: s } = n,
            d = (0, i.e7)([_.ZP], () => _.ZP.isModerator(e.id, s)),
            m = (0, i.e7)([u.Z], () => u.Z.isBlocked(e.id)),
            f = null;
          return (
            t &&
              (f = l
                ? x.intl.string(x.t.LqMmGx)
                : d
                  ? x.intl.string(x.t.GMZqSk)
                  : x.intl.string(x.t.suRAp6)),
            (0, r.jsxs)("div", {
              className: g.user,
              children: [
                (0, r.jsx)(
                  o.Z,
                  {
                    src: e.getAvatarURL(null, 32),
                    size: c.AvatarSizes.SIZE_32,
                    muted: !1,
                    deafen: !1,
                    speaking: !1,
                    ringing: !1,
                    renderIcon: l
                      ? () =>
                          (0, r.jsx)(c.MicrophoneIcon, {
                            size: "md",
                            color: "currentColor",
                            className: g.icon,
                          })
                      : null,
                  },
                  e.id,
                ),
                (0, r.jsxs)("div", {
                  className: g.userInfo,
                  children: [
                    (0, r.jsxs)("div", {
                      className: g.username,
                      children: [
                        (0, r.jsx)(a.Z, {
                          size: t ? a.Z.Sizes.SIZE_16 : a.Z.Sizes.SIZE_14,
                          children: h.ZP.getName(e),
                        }),
                        (0, r.jsx)(a.Z, {
                          size: t ? a.Z.Sizes.SIZE_16 : a.Z.Sizes.SIZE_14,
                          color: a.Z.Colors.HEADER_SECONDARY,
                          children: "#".concat(e.discriminator),
                        }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className: g.username,
                      children: [
                        (0, r.jsx)(c.Text, {
                          variant: "text-xs/normal",
                          color: m ? "text-danger" : "text-normal",
                          children: m
                            ? x.intl.string(x.t["4bDptL"])
                            : x.intl.string(x.t.tFY5ZW),
                        }),
                        (0, r.jsxs)(c.Text, {
                          variant: "text-xs/normal",
                          color: "text-muted",
                          children: ["| ", f],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        },
        T = (n) => {
          let { channelId: e } = n,
            t = (0, m.z)(e),
            i = (0, m.bA)(e);
          return (0, r.jsx)(c.Scroller, {
            className: g.container,
            children: [...t, ...i].map((n) => {
              let { user: t } = n;
              return (0, r.jsx)(I, { user: t, channelId: e }, t.id);
            }),
          });
        };
    },
    939863: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return d;
        },
      });
      var r = t(200651);
      t(192379);
      var i = t(120356),
        l = t.n(i),
        c = t(388032),
        s = t(443644),
        o = t(296507),
        a = t(866402);
      function d(n) {
        let { className: e, children: t } = n;
        return (0, r.jsxs)("div", {
          className: l()(s.container, e),
          children: [
            (0, r.jsx)("img", {
              alt: c.intl.string(c.t.VoB8OT),
              src: a,
              className: l()(s.sparkleIcon, s.sparkleBottom),
            }),
            t,
            (0, r.jsx)("img", {
              alt: c.intl.string(c.t.VoB8OT),
              src: o,
              className: l()(s.sparkleIcon, s.sparkleTop),
            }),
          ],
        });
      }
    },
    665111: function (n, e, t) {
      t.r(e),
        t.d(e, {
          default: function () {
            return h;
          },
        });
      var r = t(200651);
      t(192379);
      var i = t(481060),
        l = t(313201),
        c = t(471253),
        s = t(930180),
        o = t(46920),
        a = t(939863),
        d = t(388032),
        u = t(27507);
      function h(n) {
        let { channel: e, transitionState: t, onClose: h, ..._ } = n,
          m = (0, l.Dt)(),
          x = (0, s._d)(e.id),
          g = (0, s.K3)(e.id),
          f = async () => {
            await (0, c.yi)(e), h();
          },
          E = async () => {
            await (0, c.RK)(e, !1), h();
          };
        return (0, r.jsx)(i.ModalRoot, {
          transitionState: t,
          "aria-labelledby": m,
          ..._,
          size: i.ModalSize.SMALL,
          children: (0, r.jsxs)(i.ModalContent, {
            className: u.content,
            children: [
              (0, r.jsx)(a.Z, {
                children: (0, r.jsx)("div", {
                  className: u.stageIconBackground,
                  children: (0, r.jsx)(i.StageIcon, {
                    size: "custom",
                    color: "currentColor",
                    width: 40,
                    height: 40,
                    className: u.stageIcon,
                  }),
                }),
              }),
              (0, r.jsx)(i.Heading, {
                id: m,
                variant: "heading-xl/semibold",
                color: "header-primary",
                className: u.headerTitle,
                children: d.intl.string(d.t.njetU1),
              }),
              (0, r.jsx)(i.Text, {
                variant: "text-sm/normal",
                color: "header-secondary",
                className: u.headerSubtitle,
                children: d.intl.string(d.t.LQY4JS),
              }),
              (x > 0 || g > 0) && (0, r.jsx)(o.mv, { channelId: e.id }),
              (0, r.jsxs)("div", {
                className: u.buttonsContainer,
                children: [
                  (0, r.jsxs)(i.Button, {
                    color: i.Button.Colors.PRIMARY,
                    className: u.button,
                    innerClassName: u.innerButton,
                    onClick: E,
                    children: [
                      (0, r.jsx)("div", {
                        className: u.icon,
                        children: (0, r.jsx)(i.MicrophoneIcon, {
                          size: "custom",
                          color: "currentColor",
                          width: 20,
                          height: 20,
                        }),
                      }),
                      d.intl.string(d.t["Q8o/tb"]),
                    ],
                  }),
                  (0, r.jsxs)(i.Button, {
                    color: i.Button.Colors.PRIMARY,
                    className: u.button,
                    innerClassName: u.innerButton,
                    onClick: f,
                    children: [
                      (0, r.jsx)("div", {
                        className: u.icon,
                        children: (0, r.jsx)(i.GroupIcon, {
                          size: "custom",
                          color: "currentColor",
                          width: 20,
                          height: 20,
                        }),
                      }),
                      d.intl.string(d.t["N3/Oyc"]),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    834110: function (n, e, t) {
      n.exports = {
        container: "container_cc6cdc",
        user: "user_cc6cdc",
        username: "username_cc6cdc",
        blockedNotice: "blockedNotice_cc6cdc",
        blockedButton: "blockedButton_cc6cdc",
        icon: "icon_cc6cdc",
        userInfo: "userInfo_cc6cdc",
      };
    },
    443644: function (n, e, t) {
      n.exports = {
        container: "container_c5e69b",
        sparkleIcon: "sparkleIcon_c5e69b",
        sparkleTop: "sparkleTop_c5e69b",
        sparkleBottom: "sparkleBottom_c5e69b",
      };
    },
    27507: function (n, e, t) {
      n.exports = {
        content: "content_d26d60",
        stageIconBackground: "stageIconBackground_d26d60",
        stageIcon: "stageIcon_d26d60",
        headerTitle: "headerTitle_d26d60",
        headerSubtitle: "headerSubtitle_d26d60",
        buttonsContainer: "buttonsContainer_d26d60",
        button: "button_d26d60",
        innerButton: "innerButton_d26d60",
        icon: "icon_d26d60",
      };
    },
  },
]);
//# sourceMappingURL=4e194fac259ac88dbccb.js.map
