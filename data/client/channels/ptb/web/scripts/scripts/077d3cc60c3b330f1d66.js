"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["24753"],
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
      var s = t(442837),
        a = t(146085),
        l = t(984933),
        i = t(496675);
      function r(e) {
        var n;
        let t =
          null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : null;
        return (0, s.Wu)(
          [l.ZP, i.Z],
          () =>
            l.ZP.getChannels(t)[l.Zb].reduce((e, n) => {
              let t = n.channel;
              return t.isGuildStageVoice()
                ? ((function (e) {
                    let n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : i.Z;
                    return !!e.isGuildStageVoice() && n.can(a.yP, e);
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
      var s = t(735250);
      t(470079);
      var a = t(481060),
        l = t(689938),
        i = t(701424);
      function r(e) {
        let { sendStartNotification: n, setSendStartNotification: t } = e,
          r = n
            ? l.Z.Messages.GUILD_NOTIFY_MEMBERS_ENABLED_NEW
            : l.Z.Messages.GUILD_NOTIFY_MEMBERS_DISABLED_NEW;
        return (0, s.jsx)("div", {
          className: i.notificationToggle,
          children: (0, s.jsx)(a.Checkbox, {
            type: a.Checkbox.Types.INVERTED,
            size: 14,
            className: i.__invalid_checkbox,
            value: n,
            onChange: function () {
              t(!n);
            },
            children: (0, s.jsx)(a.Text, {
              color: "header-secondary",
              variant: "text-sm/normal",
              children: (0, s.jsx)(a.Tooltip, {
                position: "bottom",
                tooltipClassName: i.tooltip,
                text: l.Z.Messages.GUILD_NOTIFY_MEMBERS_TOOLTIP_NEW,
                "aria-label": l.Z.Messages.GUILD_NOTIFY_MEMBERS_TOOLTIP_NEW,
                children: (e) => (0, s.jsx)("span", { ...e, children: r }),
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
      var s = t(735250),
        a = t(470079),
        l = t(481060),
        i = t(377171),
        r = t(854698),
        o = t(689938),
        c = t(94277);
      function d(e) {
        let { startDate: n, recurrenceRule: t, onRecurrenceChange: d } = e,
          u = a.useMemo(() => (0, r.zi)(n, t), [t, n]),
          _ = (0, r.P8)(n),
          E = (e) => e.toString(),
          x = (0, s.jsxs)("div", {
            className: c.title,
            children: [
              o.Z.Messages.CREATE_EVENT_RECUR_LABEL,
              (0, s.jsx)(l.TextBadge, {
                text: o.Z.Messages.NEW,
                color: i.Z.BG_BRAND,
              }),
            ],
          });
        return (0, s.jsx)(l.FormItem, {
          title: x,
          required: !0,
          children: (0, s.jsx)(l.Select, {
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
      var s = t(735250);
      t(470079);
      var a = t(913527),
        l = t.n(a),
        i = t(481060),
        r = t(854698),
        o = t(401876),
        c = t(689938),
        d = t(805553);
      function u(e) {
        let {
          className: n,
          onScheduleChange: t,
          onRecurrenceChange: a,
          onTimeChange: u,
          timeSelected: _ = !0,
          schedule: E,
          recurrenceRule: x,
          showEndDate: m = !1,
          requireEndDate: h = !1,
          disableStartDateTime: I = !1,
        } = e;
        if (null == E) return null;
        let T = null,
          N = E.startDate,
          C = l()(),
          g = l()().add(r.G3, "days"),
          v = l()().add(r.Ib, "days");
        null != x && (g.add(r.hn, "years"), v.add(r.hn, "years"));
        let S = (e) => {
          t({ ...E, endDate: e });
        };
        return (
          m &&
            (T =
              null != E.endDate || h
                ? (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsxs)("div", {
                        className: d.doubleInput,
                        children: [
                          (0, s.jsx)(i.FormItem, {
                            title: c.Z.Messages.CREATE_EVENT_END_DATE_LABEL,
                            required: h,
                            children: (0, s.jsx)(i.DateInput, {
                              value: E.endDate,
                              onSelect: S,
                              minDate: E.startDate,
                              maxDate: v,
                            }),
                          }),
                          (0, s.jsx)(i.FormItem, {
                            title: c.Z.Messages.CREATE_EVENT_END_TIME_LABEL,
                            required: h,
                            children: (0, s.jsx)(i.TimeInput, {
                              value: E.endDate,
                              onChange: S,
                            }),
                          }),
                        ],
                      }),
                      h
                        ? null
                        : (0, s.jsx)(i.Button, {
                            onClick: () => {
                              S(void 0);
                            },
                            look: i.Button.Looks.BLANK,
                            size: i.Button.Sizes.MIN,
                            children: (0, s.jsxs)("div", {
                              className: d.link,
                              children: [
                                (0, s.jsx)(i.CircleXIcon, {
                                  size: "custom",
                                  color: "currentColor",
                                  width: 17,
                                  height: 17,
                                  className: d.removeIcon,
                                }),
                                (0, s.jsx)(i.Text, {
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
                : (0, s.jsx)(i.Button, {
                    look: i.Button.Looks.BLANK,
                    size: i.Button.Sizes.MIN,
                    onClick: () => {
                      S(l()(E.startDate).add(1, "hour"));
                    },
                    children: (0, s.jsxs)("div", {
                      className: d.link,
                      children: [
                        (0, s.jsx)(i.CirclePlusIcon, {
                          size: "custom",
                          color: "currentColor",
                          width: 20,
                          height: 20,
                          className: d.addIcon,
                        }),
                        (0, s.jsx)(i.Text, {
                          variant: "text-sm/normal",
                          children:
                            c.Z.Messages.CREATE_EVENT_ADD_END_TIME_LABEL,
                        }),
                      ],
                    }),
                  })),
          (0, s.jsxs)("div", {
            className: n,
            children: [
              (0, s.jsxs)("div", {
                className: d.doubleInput,
                children: [
                  (0, s.jsx)(i.FormItem, {
                    title: c.Z.Messages.CREATE_EVENT_START_DATE_LABEL,
                    required: !0,
                    children: (0, s.jsx)(i.DateInput, {
                      value: E.startDate,
                      onSelect: (e) => {
                        t({ ...E, startDate: e });
                      },
                      minDate: C,
                      maxDate: g,
                      disabled: I,
                    }),
                  }),
                  (0, s.jsx)(i.FormItem, {
                    title: c.Z.Messages.CREATE_EVENT_START_TIME_LABEL,
                    required: !0,
                    children: (0, s.jsx)(i.TimeInput, {
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
              T,
              null != N &&
                null != a &&
                (0, s.jsx)(o.Z, {
                  onRecurrenceChange: a,
                  startDate: N,
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
      var s = t(735250);
      t(470079);
      var a = t(120356),
        l = t.n(a),
        i = t(481060),
        r = t(689938),
        o = t(571032);
      function c(e) {
        let { guild: n, speakers: t, speakerCount: a, className: c } = e,
          d = t.slice(0, 5),
          u = d.map((e) => {
            var t, a;
            return (0, s.jsxs)(
              "div",
              {
                className: o.speakerContainer,
                children: [
                  (0, s.jsx)(i.Avatar, {
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
                  (0, s.jsx)("div", {
                    className: o.textInGridContainer,
                    children: (0, s.jsx)(i.Text, {
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
                : null === (a = e.user) || void 0 === a
                  ? void 0
                  : a.id,
            );
          }),
          _ = a - d.length;
        return (0, s.jsxs)("div", {
          className: l()(o.grid, c),
          children: [
            u,
            _ > 0 &&
              (0, s.jsxs)("div", {
                className: o.speakerContainer,
                children: [
                  (0, s.jsx)("div", {
                    className: o.iconMicrophone,
                    children: (0, s.jsx)(i.MicrophoneIcon, {
                      size: "custom",
                      color: "currentColor",
                      height: 12,
                    }),
                  }),
                  (0, s.jsx)(i.Text, {
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
      var s = t(442837),
        a = t(650774),
        l = t(496675),
        i = t(231338);
      function r(e) {
        return (0, s.e7)(
          [l.Z],
          () => null != e && l.Z.can(i.Pl.MENTION_EVERYONE, e),
          [e],
        );
      }
      function o(e) {
        let n = null == e ? void 0 : e.guild_id,
          t = (0, s.e7)([a.Z], () => a.Z.getMemberCount(n), [n]);
        return null == e || (null != t && !(t > 5e4) && !0);
      }
    },
    38981: function (e, n, t) {
      var s = t(735250);
      t(470079);
      var a = t(120356),
        l = t.n(a),
        i = t(481060),
        r = t(249133);
      n.Z = function (e) {
        let { count: n, className: t } = e;
        return (0, s.jsxs)("div", {
          className: l()(r.container, t),
          children: [
            (0, s.jsx)(i.HeadphonesIcon, {
              size: "custom",
              color: "currentColor",
              width: 12,
              height: 12,
              className: r.icon,
            }),
            (0, s.jsx)(i.Text, {
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
          return h;
        },
        mv: function () {
          return m;
        },
      });
      var s = t(735250);
      t(470079);
      var a = t(442837),
        l = t(692547),
        i = t(481060),
        r = t(239091),
        o = t(584511),
        c = t(112831),
        d = t(51144),
        u = t(88751),
        _ = t(930180),
        E = t(689938),
        x = t(578814);
      let m = (e) => {
          let { channelId: n } = e,
            t = (0, _._d)(n);
          return 0 === t
            ? null
            : (0, s.jsxs)("div", {
                className: x.blockedNotice,
                children: [
                  (0, s.jsx)(i.DenyIcon, {
                    size: "lg",
                    className: x.__invalid_blockedIcon,
                    color: l.Z.unsafe_rawColors.RED_400.css,
                  }),
                  (0, s.jsx)(i.Text, {
                    variant: "text-xs/normal",
                    color: "header-secondary",
                    children:
                      E.Z.Messages.STAGE_BLOCKED_USERS_DESCRIPTION_COUNT.format(
                        { number: t },
                      ),
                  }),
                  (0, s.jsx)(i.Clickable, {
                    className: x.blockedButton,
                    onClick: (e) => {
                      (0, r.vq)(
                        e,
                        (e) => (0, s.jsx)(I, { ...e, channelId: n }),
                        { position: "left", align: "bottom" },
                      );
                    },
                    children: E.Z.Messages.VIEW_ALL,
                  }),
                ],
              });
        },
        h = (e) => {
          let { user: n, showStatus: t, speaker: l, channelId: r } = e,
            _ = (0, a.e7)([u.ZP], () => u.ZP.isModerator(n.id, r)),
            m = null;
          return (
            t &&
              (m = l
                ? E.Z.Messages.STAGE_SPEAKER
                : _
                  ? E.Z.Messages.STAGE_MODERATOR_TOOLTIP
                  : E.Z.Messages.STAGE_AUDIENCE),
            (0, s.jsxs)("div", {
              className: x.user,
              children: [
                (0, s.jsx)(
                  o.Z,
                  {
                    src: n.getAvatarURL(null, 32),
                    size: i.AvatarSizes.SIZE_32,
                    muted: !1,
                    deafen: !1,
                    speaking: !1,
                    ringing: !1,
                    renderIcon: l
                      ? () =>
                          (0, s.jsx)(i.MicrophoneIcon, {
                            size: "md",
                            color: "currentColor",
                            className: x.icon,
                          })
                      : null,
                  },
                  n.id,
                ),
                (0, s.jsxs)("div", {
                  className: x.userInfo,
                  children: [
                    (0, s.jsxs)("div", {
                      className: x.username,
                      children: [
                        (0, s.jsx)(c.Z, {
                          size: t ? c.Z.Sizes.SIZE_16 : c.Z.Sizes.SIZE_14,
                          children: d.ZP.getName(n),
                        }),
                        (0, s.jsx)(c.Z, {
                          size: t ? c.Z.Sizes.SIZE_16 : c.Z.Sizes.SIZE_14,
                          color: c.Z.Colors.HEADER_SECONDARY,
                          children: "#".concat(n.discriminator),
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className: x.username,
                      children: [
                        (0, s.jsx)(i.Text, {
                          variant: "text-xs/normal",
                          color: "text-danger",
                          children: E.Z.Messages.BLOCKED,
                        }),
                        (0, s.jsxs)(i.Text, {
                          variant: "text-xs/normal",
                          color: "text-muted",
                          children: [" ", "| ", m],
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
          return (0, s.jsx)(i.Scroller, {
            className: x.container,
            children: t.map((e) => {
              let { user: t } = e;
              return (0, s.jsx)(h, { user: t, channelId: n }, t.id);
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
      var s = t(735250);
      t(470079);
      var a = t(120356),
        l = t.n(a),
        i = t(689938),
        r = t(843117),
        o = t(296507),
        c = t(866402);
      function d(e) {
        let { className: n, children: t } = e;
        return (0, s.jsxs)("div", {
          className: l()(r.container, n),
          children: [
            (0, s.jsx)("img", {
              alt: i.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
              src: c,
              className: l()(r.sparkleIcon, r.sparkleBottom),
            }),
            t,
            (0, s.jsx)("img", {
              alt: i.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
              src: o,
              className: l()(r.sparkleIcon, r.sparkleTop),
            }),
          ],
        });
      }
    },
    659972: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return m;
        },
        k: function () {
          return a;
        },
      });
      var s,
        a,
        l = t(735250);
      t(470079);
      var i = t(120356),
        r = t.n(i),
        o = t(481060),
        c = t(565138),
        d = t(372769),
        u = t(857395),
        _ = t(131154),
        E = t(38981),
        x = t(142664);
      function m(e) {
        let {
            guild: n,
            stageInstance: t,
            showGuildPopout: s,
            setShowGuildPopout: a,
            handleGuildNameClick: i,
            source: m,
            speakers: h,
            speakerCount: I,
            audienceCount: T,
            channelName: N,
          } = e,
          C = n.id;
        return (0, l.jsx)("div", {
          className: x.contentContainer,
          children: (0, l.jsxs)("div", {
            className: x.headerContainer,
            children: [
              (0, l.jsxs)("div", {
                className: x.guildInfoContainer,
                children: [
                  (0, l.jsx)(u.Z, {
                    guildId: C,
                    shouldShow: s,
                    onRequestClose: () => a(!1),
                    children: () =>
                      (0, l.jsxs)(o.Clickable, {
                        className: x.flexContainerRow,
                        onClick: i,
                        children: [
                          (0, l.jsx)(c.Z, {
                            guild: n,
                            size: c.Z.Sizes.MINI,
                            className: x.guildIcon,
                          }),
                          (0, l.jsxs)("div", {
                            className: x.flexContainerRow,
                            children: [
                              (0, l.jsx)(o.Text, {
                                color: "header-secondary",
                                variant: "text-sm/normal",
                                className: r()(x.guildName, {
                                  [x.disabled]: null == i,
                                }),
                                children: n.name,
                              }),
                              (0, l.jsx)(d.Z, { guild: n }),
                            ],
                          }),
                        ],
                      }),
                  }),
                  (0, l.jsxs)("div", {
                    className: x.rightJustifiedContent,
                    children: [
                      6 === m &&
                        (0, l.jsx)("div", {
                          className: x.featuredTag,
                          children: (0, l.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            className: x.featuredTagText,
                            children: "Featured",
                          }),
                        }),
                      (0, l.jsx)(E.Z, {
                        count: T,
                        className: x.__invalid_audienceCount,
                      }),
                    ],
                  }),
                ],
              }),
              (0, l.jsx)(o.Text, {
                color: "header-primary",
                variant: "text-lg/semibold",
                className: x.topicText,
                children: t.topic,
              }),
              (0, l.jsx)(o.Text, {
                color: "header-secondary",
                className: x.description,
                variant: "text-sm/normal",
                children: t.description,
              }),
              (0, l.jsx)(_.Z, {
                guild: n,
                speakers: h,
                speakerCount: I,
                className: x.speakers,
              }),
              null != N &&
                (0, l.jsxs)(l.Fragment, {
                  children: [
                    (0, l.jsx)("hr", { className: x.divider }),
                    (0, l.jsxs)("div", {
                      className: x.footer,
                      children: [
                        (0, l.jsx)(o.StageIcon, {
                          size: "custom",
                          color: "currentColor",
                          width: 20,
                          height: 20,
                          className: x.icon,
                        }),
                        (0, l.jsx)(o.Text, {
                          color: "header-secondary",
                          className: x.__invalid_label,
                          variant: "text-sm/normal",
                          children: N,
                        }),
                      ],
                    }),
                  ],
                }),
            ],
          }),
        });
      }
      ((s = a || (a = {}))[(s.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (s[(s.TRENDING = 1)] = "TRENDING"),
        (s[(s.PERSONALIZED = 2)] = "PERSONALIZED"),
        (s[(s.USER_GUILDS = 3)] = "USER_GUILDS"),
        (s[(s.FRIENDS_GUILDS = 4)] = "FRIENDS_GUILDS"),
        (s[(s.INTRO_CARD = 5)] = "INTRO_CARD"),
        (s[(s.FEATURED = 6)] = "FEATURED");
    },
    540186: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return C;
        },
      }),
        t(653041);
      var s = t(735250);
      t(470079);
      var a = t(442837),
        l = t(481060),
        i = t(594174),
        r = t(311888),
        o = t(63063),
        c = t(5192),
        d = t(431328),
        u = t(501655),
        _ = t(659972),
        E = t(981631),
        x = t(765305),
        m = t(689938),
        h = t(537889);
      function I(e) {
        let { icon: n } = e;
        return (0, s.jsx)("div", {
          className: h.iconContainer,
          children: (0, s.jsx)(n, { color: "currentColor", size: "md" }),
        });
      }
      function T(e) {
        let { icon: n, text: t } = e;
        return (0, s.jsxs)("div", {
          className: h.listItemContainer,
          children: [
            (0, s.jsx)("div", {
              className: h.listItemIconContainer,
              children: n,
            }),
            (0, s.jsx)(l.Text, {
              className: h.listItemText,
              variant: "text-md/normal",
              color: "header-secondary",
              children: t,
            }),
          ],
        });
      }
      function N(e) {
        var n;
        let { guild: t, channel: l, stageData: r } = e,
          o = (0, a.e7)([i.default], () => i.default.getCurrentUser(), []),
          E = {
            id: "1337",
            guild_id: t.id,
            channel_id: l.id,
            topic: r.topic,
            description: r.description,
            privacy_level:
              null !== (n = r.privacyLevel) && void 0 !== n ? n : x.j8.PUBLIC,
          },
          m = (0, d.w8)(l.id, u.pV.SPEAKER),
          I = (0, d.Rk)(l.id, u.pV.AUDIENCE),
          T = m.slice(0, 5);
        return (
          null ==
            T.find((e) => {
              var n;
              return (
                (null === (n = e.user) || void 0 === n ? void 0 : n.id) ===
                (null == o ? void 0 : o.id)
              );
            }) && T.push({ user: o, userNick: c.ZP.getName(t.id, l.id, o) }),
          (0, s.jsx)("div", {
            className: h.previewCardContainer,
            children: (0, s.jsx)("div", {
              className: h.previewCard,
              children: (0, s.jsx)(_.Z, {
                guild: t,
                stageInstance: E,
                showGuildPopout: !1,
                setShowGuildPopout: () => {},
                source: _.k.UNSPECIFIED,
                speakers: T,
                speakerCount: m.length,
                audienceCount: Math.max(1337, I),
                channelName: l.name,
              }),
            }),
          })
        );
      }
      function C(e) {
        let {
          guild: n,
          channel: t,
          stageData: a,
          headerId: i,
          loading: c,
          onNext: d,
          onCancel: u,
          onBack: _,
        } = e;
        return null == n || null == t || null == a
          ? null
          : (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)(N, { guild: n, channel: t, stageData: a }),
                (0, s.jsxs)(l.ModalContent, {
                  className: h.container,
                  children: [
                    (0, s.jsxs)("div", {
                      className: h.header,
                      children: [
                        (0, s.jsx)(l.Heading, {
                          id: i,
                          className: h.__invalid_title,
                          variant: "heading-xl/semibold",
                          children:
                            m.Z.Messages.START_STAGE_PUBLIC_PREVIEW_TITLE,
                        }),
                        (0, s.jsx)(l.Text, {
                          className: h.subtitle,
                          color: "header-secondary",
                          variant: "text-sm/normal",
                          children:
                            m.Z.Messages.START_STAGE_PUBLIC_PREVIEW_SUBTITLE,
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className: h.__invalid_list,
                      children: [
                        (0, s.jsx)(T, {
                          icon: (0, s.jsx)(I, { icon: l.CompassIcon }),
                          text: m.Z.Messages
                            .START_STAGE_PUBLIC_PREVIEW_SECTION_ONE,
                        }),
                        (0, s.jsx)(T, {
                          icon: (0, s.jsx)(I, { icon: l.FriendsIcon }),
                          text: m.Z.Messages
                            .START_STAGE_PUBLIC_PREVIEW_SECTION_TWO,
                        }),
                        (0, s.jsx)(T, {
                          icon: (0, s.jsx)(I, { icon: l.PencilIcon }),
                          text: m.Z.Messages
                            .START_STAGE_PUBLIC_PREVIEW_SECTION_THREE,
                        }),
                        (0, s.jsx)(T, {
                          icon: (0, s.jsx)(r.Z, {
                            className: h.badgeIconBackground,
                            foreground: h.badgeIconForeground,
                            width: 40,
                            height: 40,
                          }),
                          text: m.Z.Messages.START_STAGE_PUBLIC_PREVIEW_SECTION_FOUR.format(
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
                (0, s.jsxs)(l.ModalFooter, {
                  children: [
                    (0, s.jsx)(l.Button, {
                      color: l.Button.Colors.GREEN,
                      onClick: d,
                      submitting: c,
                      children:
                        m.Z.Messages.START_STAGE_CHANNEL_EVENT_MODAL_BUTTON,
                    }),
                    (0, s.jsx)(l.Button, {
                      color: l.Button.Colors.PRIMARY,
                      className: h.cancelButton,
                      onClick: u,
                      children: m.Z.Messages.CANCEL,
                    }),
                    (0, s.jsx)(l.Button, {
                      look: l.Button.Looks.LINK,
                      color: l.Button.Colors.LINK,
                      className: h.backButton,
                      onClick: _,
                      size: l.Button.Sizes.MIN,
                      children: m.Z.Messages.BACK,
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
          return Z;
        },
      }),
        t(47120);
      var s = t(735250),
        a = t(470079),
        l = t(913527),
        i = t.n(l),
        r = t(442837),
        o = t(481060),
        c = t(933557),
        d = t(77810),
        u = t(854698),
        _ = t(40623),
        E = t(440371),
        x = t(810788),
        m = t(699516),
        h = t(594174),
        I = t(626135),
        T = t(570188),
        N = t(427679),
        C = t(930180),
        g = t(582019),
        v = t(157925),
        S = t(981631),
        f = t(765305),
        j = t(190378),
        A = t(689938),
        p = t(479562);
      function L(e) {
        let { stageChannelsInGuild: n, channel: t, onSelectChannel: a } = e;
        return null == a
          ? null
          : (0, s.jsx)(s.Fragment, {
              children: (0, s.jsx)(o.FormItem, {
                title:
                  A.Z.Messages.START_STAGE_MODAL_SET_TOPIC_SELECT_LABEL +
                  " asdf",
                className: p.channelSelectionFormItem,
                required: !0,
                children: (0, s.jsx)(o.SearchableSelect, {
                  value: t.id,
                  options: n.map((e) => ({
                    value: e.id,
                    label: (0, c.F6)(e, h.default, m.Z, !0),
                  })),
                  onChange: (e) => {
                    let t = n.find((n) => n.id === e);
                    null != t && a(t);
                  },
                  renderOptionPrefix: () =>
                    (0, s.jsx)(o.StageIcon, {
                      size: "custom",
                      color: "currentColor",
                      height: 24,
                    }),
                }),
              }),
            });
      }
      function Z(e) {
        var n, t, l, m, h, Z, R, M;
        let {
            channel: B,
            guild: D,
            header: b,
            error: k,
            loading: G,
            onSave: O,
            onEventSave: P,
            onClose: U,
            onSelectChannel: F,
            isEvent: V = !1,
            defaultOptions: y,
            isSlideReady: w = !0,
          } = e,
          z = a.useMemo(() => N.Z.getStageInstanceByChannel(B.id), [B.id]),
          [H, W] = a.useState(
            null !==
              (t =
                null !== (n = null == y ? void 0 : y.topic) && void 0 !== n
                  ? n
                  : null == z
                    ? void 0
                    : z.topic) && void 0 !== t
              ? t
              : "",
          ),
          [q, K] = a.useState(
            null !== (l = null == y ? void 0 : y.description) && void 0 !== l
              ? l
              : "",
          ),
          [Y] = a.useState(V),
          [J, X] = a.useState(
            null !== (m = null == y ? void 0 : y.schedule) && void 0 !== m
              ? m
              : { startDate: (0, u.ib)() },
          ),
          [Q, $] = a.useState(Y && (null == y ? void 0 : y.schedule) != null),
          ee = (0, T.J)(B),
          en = (0, T.U)(B),
          et = null == z && ee && !Y,
          [es, ea] = a.useState(et && en),
          el = (0, r.e7)([x.Z], () =>
            x.Z.hasHotspot(j.v.LIVE_STAGE_NOTIFICATION_BADGE),
          ),
          ei = f.j8.GUILD_ONLY,
          [er] = a.useState(
            null !==
              (Z =
                null !== (h = null == y ? void 0 : y.privacyLevel) &&
                void 0 !== h
                  ? h
                  : null == z
                    ? void 0
                    : z.privacy_level) && void 0 !== Z
              ? Z
              : ei,
          ),
          [eo, ec] = a.useState(null == y ? void 0 : y.recurrenceRule),
          ed = (0, C._d)(B.id),
          [eu, e_] = a.useState(!1),
          eE = (0, c.ZP)(B),
          ex = (0, d.q)(D),
          em = null != F,
          eh = ex.length > 1;
        a.useEffect(() => {
          I.default.track(S.rMx.START_STAGE_OPENED, {
            stage_instance_id: null == z ? void 0 : z.id,
            can_start_public_stage: !1,
            guild_id: B.guild_id,
          });
        }, []);
        let eI = (e) => {
          if (
            (e.preventDefault(), er === f.j8.PUBLIC && H.length < 20 && !eu)
          ) {
            e_(!0);
            return;
          }
          let n = { topic: H, privacyLevel: er, sendStartNotification: es };
          if (Y) {
            if (!Q) return;
            null == P ||
              P({
                ...n,
                schedule: J,
                description: q,
                entityType: f.WX.STAGE_INSTANCE,
              });
            return;
          }
          null == O || O(n);
        };
        let { color: eT, text: eN } =
            ((R = z),
            (M = er),
            Y
              ? {
                  color: o.Button.Colors.BRAND,
                  text: A.Z.Messages.SCHEDULE_EVENT,
                }
              : M === f.j8.PUBLIC &&
                  (null == R ? void 0 : R.privacy_level) !== f.j8.PUBLIC
                ? { color: o.Button.Colors.BRAND, text: A.Z.Messages.CONTINUE }
                : null == R
                  ? {
                      color: o.Button.Colors.GREEN,
                      text: A.Z.Messages.START_STAGE_CHANNEL_EVENT_MODAL_BUTTON,
                    }
                  : {
                      color: o.Button.Colors.BRAND,
                      text: A.Z.Messages.SAVE_CHANGES,
                    }),
          eC = a.useRef(null);
        a.useEffect(() => {
          var e;
          w && (null === (e = eC.current) || void 0 === e || e.focus());
        }, [w]);
        let eg = Q && null != J.startDate && J.startDate >= i()();
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)(o.ModalContent, {
              className: p.modalContent,
              children: [
                b,
                (0, s.jsx)("div", {
                  className: p.blockedUsersContainer,
                  children:
                    null == z &&
                    ed > 0 &&
                    (0, s.jsx)(g.mv, { channelId: B.id }),
                }),
                (0, s.jsxs)("form", {
                  onSubmit: eI,
                  className: p.form,
                  children: [
                    (0, s.jsxs)(o.FormItem, {
                      title: V
                        ? A.Z.Messages.GUILD_EVENT_CREATE_TOPIC_LABEL
                        : A.Z.Messages
                            .START_STAGE_CHANNEL_EVENT_MODAL_TOPIC_LABEL,
                      className: p.topicFormItem,
                      required: !0,
                      children: [
                        (0, s.jsx)(o.TextInput, {
                          className: p.textInput,
                          onChange: (e) => W(e),
                          placeholder:
                            A.Z.Messages
                              .START_STAGE_CHANNEL_EVENT_MODAL_TOPIC_PLACEHOLDER,
                          maxLength: v.xA,
                          value: H,
                          autoComplete: "off",
                          inputRef: eC,
                        }),
                        eu &&
                          (0, s.jsx)(o.Text, {
                            variant: "text-xs/normal",
                            color: "text-warning",
                            className: p.warning,
                            children:
                              A.Z.Messages
                                .START_STAGE_PUBLIC_SHORT_TOPIC_WARNING,
                          }),
                        null != k
                          ? (0, s.jsx)(o.Text, {
                              color: "text-danger",
                              variant: "text-xs/normal",
                              className: p.warning,
                              children: k.getAnyErrorMessage(),
                            })
                          : null,
                      ],
                    }),
                    em && eh
                      ? (0, s.jsx)(L, {
                          stageChannelsInGuild: ex,
                          channel: B,
                          onSelectChannel: F,
                        })
                      : null,
                    Y &&
                      (0, s.jsxs)(s.Fragment, {
                        children: [
                          (0, s.jsx)(E.Z, {
                            className: p.formItem,
                            onScheduleChange: X,
                            onRecurrenceChange: (e) => {
                              let n = J.startDate;
                              if (null != n) ec((0, u.mF)(e, n));
                            },
                            schedule: J,
                            recurrenceRule: eo,
                            timeSelected: Q,
                            onTimeChange: $,
                          }),
                          null != J.startDate && J.startDate < i()()
                            ? (0, s.jsx)(o.Text, {
                                color: "text-danger",
                                variant: "text-xs/normal",
                                className: p.warning,
                                children:
                                  A.Z.Messages.GUILD_EVENT_PAST_START_DATE,
                              })
                            : null,
                        ],
                      }),
                    V &&
                      (0, s.jsx)(o.FormItem, {
                        title:
                          A.Z.Messages
                            .CREATE_STAGE_INSTANCE_DESCRIPTION_INPUT_LABEL,
                        className: p.formItem,
                        children: (0, s.jsx)(o.TextArea, {
                          placeholder:
                            A.Z.Messages
                              .GUILD_EVENT_CREATE_DESCRIPTION_PLACEHOLDER,
                          value: q,
                          onChange: (e) => K(e),
                          maxLength: f.wm,
                        }),
                      }),
                    et
                      ? (0, s.jsx)(_.Z, {
                          sendStartNotification: es,
                          setSendStartNotification: ea,
                          showNotificationNewBadge: el,
                        })
                      : null,
                    em && !eh
                      ? (0, s.jsx)(o.Text, {
                          color: "header-secondary",
                          variant: "text-xs/normal",
                          className: p.channelSelection,
                          children:
                            A.Z.Messages.START_STAGE_MODAL_SET_TOPIC_HELP_TEXT.format(
                              {
                                stageName: eE,
                                stageHook: (e, n) =>
                                  (0, s.jsx)(
                                    "span",
                                    {
                                      className: p.channelName,
                                      children: B.name,
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
            (0, s.jsxs)(o.ModalFooter, {
              children: [
                (0, s.jsx)(o.Button, {
                  color: eT,
                  onClick: eI,
                  disabled: "" === H || null == er || (V && !eg),
                  submitting: G,
                  children: eN,
                }),
                (0, s.jsx)(o.Button, {
                  color: o.Button.Colors.PRIMARY,
                  className: p.cancelButton,
                  onClick: U,
                  children: A.Z.Messages.CANCEL,
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
            return N;
          },
        });
      var s = t(735250),
        a = t(470079),
        l = t(442837),
        i = t(481060),
        r = t(313201),
        o = t(430824),
        c = t(427679),
        d = t(939863),
        u = t(540186),
        _ = t(609776),
        E = t(289584),
        x = t(180899),
        m = t(157925),
        h = t(689938),
        I = t(639879);
      function T(e) {
        let {
          guild: n,
          channel: t,
          stageInstance: a,
          headerId: l,
          onClose: r,
          loading: o,
          error: c,
          onSave: u,
          defaultOptions: E,
          isSlideReady: x,
        } = e;
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)("div", {
              className: I.content,
              children: [
                (0, s.jsx)(d.Z, {
                  children: (0, s.jsx)("div", {
                    className: I.stageIconBackground,
                    children: (0, s.jsx)(i.StageIcon, {
                      size: "custom",
                      color: "currentColor",
                      width: 32,
                      height: 32,
                      className: I.stageIcon,
                    }),
                  }),
                }),
                (0, s.jsx)(i.Heading, {
                  id: l,
                  variant: "heading-xl/semibold",
                  color: "header-primary",
                  className: I.headerTitle,
                  children:
                    null == a
                      ? h.Z.Messages.START_STAGE_CHANNEL_EVENT_MODAL_TITLE
                      : h.Z.Messages.EDIT_STAGE_CHANNEL_TITLE,
                }),
                (0, s.jsx)(i.Text, {
                  variant: "text-sm/normal",
                  color: "header-secondary",
                  className: I.headerSubtitle,
                  children:
                    null == a
                      ? h.Z.Messages.START_STAGE_CHANNEL_EVENT_MODAL_SUBTITLE
                      : h.Z.Messages.EDIT_STAGE_SUBTITLE,
                }),
              ],
            }),
            (0, s.jsx)(_.Z, {
              guild: n,
              channel: t,
              onSave: u,
              error: c,
              loading: o,
              onClose: r,
              defaultOptions: E,
              isSlideReady: x,
            }),
          ],
        });
      }
      function N(e) {
        let { channel: n, onClose: t, transitionState: d, ..._ } = e,
          h = (0, r.Dt)(),
          N = (0, l.e7)([o.Z], () => o.Z.getGuild(n.guild_id)),
          C = a.useMemo(() => c.Z.getStageInstanceByChannel(n.id), [n.id]),
          { loading: g, error: v, onSave: S } = (0, E.Z)(n, t),
          {
            modalStep: f,
            setModalStep: j,
            readySlide: A,
            handleSlideReady: p,
            savedOptions: L,
            handleSettingsSave: Z,
            handleDelayedSave: R,
          } = (0, x.Z)({
            stageInstance: C,
            defaultStep: m.lv.STAGE_CHANNEL_SETTINGS,
            error: v,
            onSave: S,
          });
        return (a.useEffect(() => {
          null == N && t();
        }, [N, t]),
        null == N)
          ? null
          : (0, s.jsx)(i.ModalRoot, {
              transitionState: d,
              "aria-labelledby": h,
              ..._,
              size: i.ModalSize.SMALL,
              children: (0, s.jsxs)(i.Slides, {
                activeSlide: f,
                width: 440,
                onSlideReady: p,
                children: [
                  (0, s.jsx)(i.Slide, {
                    id: m.lv.STAGE_CHANNEL_SETTINGS,
                    children: (0, s.jsx)("div", {
                      className: I.slideContainer,
                      children: (0, s.jsx)(T, {
                        guild: N,
                        channel: n,
                        stageInstance: C,
                        headerId: h,
                        onClose: t,
                        loading: g,
                        error: v,
                        onSave: Z,
                        defaultOptions: L,
                        isSlideReady: A === m.lv.STAGE_CHANNEL_SETTINGS,
                      }),
                    }),
                  }),
                  (0, s.jsx)(i.Slide, {
                    id: m.lv.PUBLIC_STAGE_PREVIEW,
                    children: (0, s.jsx)("div", {
                      className: I.slideContainer,
                      children: (0, s.jsx)(u.Z, {
                        headerId: h,
                        guild: N,
                        channel: n,
                        stageData: L,
                        loading: g,
                        onNext: R,
                        onCancel: t,
                        onBack: () => j(m.lv.STAGE_CHANNEL_SETTINGS),
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
      var s = t(470079),
        a = t(749210),
        l = t(287734),
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
          [_, E] = s.useState(!1),
          [x, m] = s.useState(null),
          h = s.useMemo(
            () => d.Z.getStageInstanceByChannel(null == e ? void 0 : e.id),
            [null == e ? void 0 : e.id],
          ),
          I = (0, o.J)(e);
        return {
          loading: _,
          error: x,
          onSave: async (s) => {
            let { topic: o, privacyLevel: d, sendStartNotification: _ } = s;
            if (null != e && "" !== o && null != d) {
              E(!0),
                m(null),
                null != t &&
                  (a.Z.selectGuild(t), l.default.selectVoiceChannel(e.id));
              try {
                let t;
                null != h
                  ? (t = await c.Ef(e, o, d))
                  : ((t = await c.HO(e, o, d, null != _ && _)),
                    I && r.Kw(u.v.LIVE_STAGE_NOTIFICATION_BADGE)),
                  n(t);
              } catch (e) {
                m(new i.Hx(e)), E(!1);
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
      var s = t(470079),
        a = t(512722),
        l = t.n(a),
        i = t(157925),
        r = t(765305);
      function o(e) {
        let { stageInstance: n, defaultStep: t, error: a, onSave: o } = e,
          [c, d] = s.useState(t),
          [u, _] = s.useState(),
          [E, x] = s.useState(null);
        return (
          s.useEffect(() => {
            null != a && d(i.lv.STAGE_CHANNEL_SETTINGS);
          }, [a]),
          {
            modalStep: c,
            setModalStep: d,
            readySlide: E,
            handleSlideReady: function (e) {
              return x(e);
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
              l()(null != u, "Must have some saved options."), o(u);
            },
          }
        );
      }
    },
    311888: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return l;
        },
      });
      var s = t(735250);
      t(470079);
      var a = t(325767);
      function l(e) {
        let {
          width: n = 32,
          height: t = 32,
          color: l = "currentColor",
          foreground: i,
          ...r
        } = e;
        return (0, s.jsxs)("svg", {
          ...(0, a.Z)(r),
          width: n,
          height: t,
          viewBox: "0 0 32 32",
          children: [
            (0, s.jsx)("rect", {
              width: "32",
              height: "32",
              rx: "16",
              fill: l,
            }),
            (0, s.jsx)("path", {
              d: "M23 9.99995C19.56 9.99995 16.826 6.43495 16.799 6.39795C16.421 5.89795 15.579 5.89795 15.201 6.39795C15.174 6.43495 12.44 9.99995 9 9.99995C8.447 9.99995 8 10.4479 8 10.9999V17.9999C8 21.8069 14.764 25.4779 15.534 25.8839C15.68 25.9609 15.84 25.9979 16 25.9979C16.16 25.9979 16.32 25.9599 16.466 25.8839C17.236 25.4779 24 21.8069 24 17.9999V10.9999C24 10.4479 23.553 9.99995 23 9.99995ZM19 19.9999L16 17.9999L13 19.9999L14 16.9999L12 14.9999H15L16 11.9999L17 14.9999H20L18 16.9999L19 19.9999Z",
              className: i,
            }),
          ],
        });
      }
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
//# sourceMappingURL=077d3cc60c3b330f1d66.js.map
