"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["38219"],
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
      var a = t(442837),
        l = t(146085),
        s = t(984933),
        i = t(496675);
      function o(e) {
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
          return o;
        },
      });
      var a = t(735250);
      t(470079);
      var l = t(481060),
        s = t(689938),
        i = t(186983);
      function o(e) {
        let { sendStartNotification: n, setSendStartNotification: t } = e,
          o = n
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
                children: (e) => (0, a.jsx)("span", { ...e, children: o }),
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
        o = t(854698),
        r = t(689938),
        c = t(84794);
      function d(e) {
        let { startDate: n, recurrenceRule: t, onRecurrenceChange: d } = e,
          u = l.useMemo(() => (0, o.zi)(n, t), [t, n]),
          _ = (0, o.P8)(n),
          m = (e) => e.toString(),
          h = (0, a.jsxs)("div", {
            className: c.title,
            children: [
              r.Z.Messages.CREATE_EVENT_RECUR_LABEL,
              (0, a.jsx)(s.TextBadge, {
                text: r.Z.Messages.NEW,
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
      var a = t(735250);
      t(470079);
      var l = t(913527),
        s = t.n(l),
        i = t(481060),
        o = t(854698),
        r = t(401876),
        c = t(689938),
        d = t(201750);
      function u(e) {
        let {
          className: n,
          onScheduleChange: t,
          onRecurrenceChange: l,
          onTimeChange: u,
          timeSelected: _ = !0,
          schedule: m,
          recurrenceRule: h,
          showEndDate: E = !1,
          requireEndDate: x = !1,
          disableStartDateTime: I = !1,
        } = e;
        if (null == m) return null;
        let T = null,
          N = m.startDate,
          g = s()(),
          C = s()().add(o.G3, "days"),
          f = s()().add(o.Ib, "days");
        null != h && (C.add(o.hn, "years"), f.add(o.hn, "years"));
        let v = (e) => {
          t({ ...m, endDate: e });
        };
        return (
          E &&
            (T =
              null != m.endDate || x
                ? (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsxs)("div", {
                        className: d.doubleInput,
                        children: [
                          (0, a.jsx)(i.FormItem, {
                            title: c.Z.Messages.CREATE_EVENT_END_DATE_LABEL,
                            required: x,
                            children: (0, a.jsx)(i.DateInput, {
                              value: m.endDate,
                              onSelect: v,
                              minDate: m.startDate,
                              maxDate: f,
                            }),
                          }),
                          (0, a.jsx)(i.FormItem, {
                            title: c.Z.Messages.CREATE_EVENT_END_TIME_LABEL,
                            required: x,
                            children: (0, a.jsx)(i.TimeInput, {
                              value: m.endDate,
                              onChange: v,
                            }),
                          }),
                        ],
                      }),
                      x
                        ? null
                        : (0, a.jsx)(i.Button, {
                            onClick: () => {
                              v(void 0);
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
                      v(s()(m.startDate).add(1, "hour"));
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
                      value: m.startDate,
                      onSelect: (e) => {
                        t({ ...m, startDate: e });
                      },
                      minDate: g,
                      maxDate: C,
                      disabled: I,
                    }),
                  }),
                  (0, a.jsx)(i.FormItem, {
                    title: c.Z.Messages.CREATE_EVENT_START_TIME_LABEL,
                    required: !0,
                    children: (0, a.jsx)(i.TimeInput, {
                      value: m.startDate,
                      onChange: (e) => {
                        if (!!e.isValid())
                          null == u || u(!0), t({ ...m, startDate: e });
                      },
                      hideValue: !_,
                      disabled: I,
                    }),
                  }),
                ],
              }),
              T,
              null != N &&
                null != l &&
                (0, a.jsx)(r.Z, {
                  onRecurrenceChange: l,
                  startDate: N,
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
        o = t(689938),
        r = t(543471);
      function c(e) {
        let { guild: n, speakers: t, speakerCount: l, className: c } = e,
          d = t.slice(0, 5),
          u = d.map((e) => {
            var t, l;
            return (0, a.jsxs)(
              "div",
              {
                className: r.speakerContainer,
                children: [
                  (0, a.jsx)(i.Avatar, {
                    src:
                      null == e
                        ? void 0
                        : null === (t = e.user) || void 0 === t
                          ? void 0
                          : t.getAvatarURL(n.id, 20),
                    size: i.AvatarSizes.SIZE_20,
                    className: r.avatar,
                    "aria-label": "".concat(
                      null == e ? void 0 : e.userNick,
                      "-avatar",
                    ),
                  }),
                  (0, a.jsx)("div", {
                    className: r.textInGridContainer,
                    children: (0, a.jsx)(i.Text, {
                      color: "header-secondary",
                      variant: "text-sm/normal",
                      className: r.textInGrid,
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
          className: s()(r.grid, c),
          children: [
            u,
            _ > 0 &&
              (0, a.jsxs)("div", {
                className: r.speakerContainer,
                children: [
                  (0, a.jsx)("div", {
                    className: r.iconMicrophone,
                    children: (0, a.jsx)(i.MicrophoneIcon, {
                      size: "custom",
                      color: "currentColor",
                      height: 12,
                    }),
                  }),
                  (0, a.jsx)(i.Text, {
                    color: "header-secondary",
                    variant: "text-sm/normal",
                    className: r.textInGrid,
                    children:
                      o.Z.Messages.STAGE_DISCOVERY_LIVE_STAGE_TILE_SPEAKER_SUMMARY_OVERFLOW.format(
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
          return o;
        },
        U: function () {
          return r;
        },
      });
      var a = t(442837),
        l = t(650774),
        s = t(496675),
        i = t(231338);
      function o(e) {
        return (0, a.e7)(
          [s.Z],
          () => null != e && s.Z.can(i.Pl.MENTION_EVERYONE, e),
          [e],
        );
      }
      function r(e) {
        let n = null == e ? void 0 : e.guild_id,
          t = (0, a.e7)([l.Z], () => l.Z.getMemberCount(n), [n]);
        return null == e || (null != t && !(t > 5e4) && !0);
      }
    },
    38981: function (e, n, t) {
      var a = t(735250);
      t(470079);
      var l = t(120356),
        s = t.n(l),
        i = t(481060),
        o = t(355430);
      n.Z = function (e) {
        let { count: n, className: t } = e;
        return (0, a.jsxs)("div", {
          className: s()(o.container, t),
          children: [
            (0, a.jsx)(i.HeadphonesIcon, {
              size: "custom",
              color: "currentColor",
              width: 12,
              height: 12,
              className: o.icon,
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
          return x;
        },
        mv: function () {
          return E;
        },
      });
      var a = t(735250);
      t(470079);
      var l = t(442837),
        s = t(692547),
        i = t(481060),
        o = t(239091),
        r = t(584511),
        c = t(112831),
        d = t(51144),
        u = t(88751),
        _ = t(930180),
        m = t(689938),
        h = t(585866);
      let E = (e) => {
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
                      m.Z.Messages.STAGE_BLOCKED_USERS_DESCRIPTION_COUNT.format(
                        { number: t },
                      ),
                  }),
                  (0, a.jsx)(i.Clickable, {
                    className: h.blockedButton,
                    onClick: (e) => {
                      (0, o.vq)(
                        e,
                        (e) => (0, a.jsx)(I, { ...e, channelId: n }),
                        { position: "left", align: "bottom" },
                      );
                    },
                    children: m.Z.Messages.VIEW_ALL,
                  }),
                ],
              });
        },
        x = (e) => {
          let { user: n, showStatus: t, speaker: s, channelId: o } = e,
            _ = (0, l.e7)([u.ZP], () => u.ZP.isModerator(n.id, o)),
            E = null;
          return (
            t &&
              (E = s
                ? m.Z.Messages.STAGE_SPEAKER
                : _
                  ? m.Z.Messages.STAGE_MODERATOR_TOOLTIP
                  : m.Z.Messages.STAGE_AUDIENCE),
            (0, a.jsxs)("div", {
              className: h.user,
              children: [
                (0, a.jsx)(
                  r.Z,
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
                          children: m.Z.Messages.BLOCKED,
                        }),
                        (0, a.jsxs)(i.Text, {
                          variant: "text-xs/normal",
                          color: "text-muted",
                          children: [" ", "| ", E],
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
              return (0, a.jsx)(x, { user: t, channelId: n }, t.id);
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
        o = t(805881),
        r = t(296507),
        c = t(866402);
      function d(e) {
        let { className: n, children: t } = e;
        return (0, a.jsxs)("div", {
          className: s()(o.container, n),
          children: [
            (0, a.jsx)("img", {
              alt: i.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
              src: c,
              className: s()(o.sparkleIcon, o.sparkleBottom),
            }),
            t,
            (0, a.jsx)("img", {
              alt: i.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
              src: r,
              className: s()(o.sparkleIcon, o.sparkleTop),
            }),
          ],
        });
      }
    },
    659972: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return E;
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
        o = t.n(i),
        r = t(481060),
        c = t(565138),
        d = t(372769),
        u = t(857395),
        _ = t(131154),
        m = t(38981),
        h = t(40916);
      function E(e) {
        let {
            guild: n,
            stageInstance: t,
            showGuildPopout: a,
            setShowGuildPopout: l,
            handleGuildNameClick: i,
            source: E,
            speakers: x,
            speakerCount: I,
            audienceCount: T,
            channelName: N,
          } = e,
          g = n.id;
        return (0, s.jsx)("div", {
          className: h.contentContainer,
          children: (0, s.jsxs)("div", {
            className: h.headerContainer,
            children: [
              (0, s.jsxs)("div", {
                className: h.guildInfoContainer,
                children: [
                  (0, s.jsx)(u.Z, {
                    guildId: g,
                    shouldShow: a,
                    onRequestClose: () => l(!1),
                    children: () =>
                      (0, s.jsxs)(r.Clickable, {
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
                              (0, s.jsx)(r.Text, {
                                color: "header-secondary",
                                variant: "text-sm/normal",
                                className: o()(h.guildName, {
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
                      6 === E &&
                        (0, s.jsx)("div", {
                          className: h.featuredTag,
                          children: (0, s.jsx)(r.Text, {
                            variant: "text-sm/normal",
                            className: h.featuredTagText,
                            children: "Featured",
                          }),
                        }),
                      (0, s.jsx)(m.Z, {
                        count: T,
                        className: h.__invalid_audienceCount,
                      }),
                    ],
                  }),
                ],
              }),
              (0, s.jsx)(r.Text, {
                color: "header-primary",
                variant: "text-lg/semibold",
                className: h.topicText,
                children: t.topic,
              }),
              (0, s.jsx)(r.Text, {
                color: "header-secondary",
                className: h.description,
                variant: "text-sm/normal",
                children: t.description,
              }),
              (0, s.jsx)(_.Z, {
                guild: n,
                speakers: x,
                speakerCount: I,
                className: h.speakers,
              }),
              null != N &&
                (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)("hr", { className: h.divider }),
                    (0, s.jsxs)("div", {
                      className: h.footer,
                      children: [
                        (0, s.jsx)(r.StageIcon, {
                          size: "custom",
                          color: "currentColor",
                          width: 20,
                          height: 20,
                          className: h.icon,
                        }),
                        (0, s.jsx)(r.Text, {
                          color: "header-secondary",
                          className: h.__invalid_label,
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
          return g;
        },
      }),
        t(653041);
      var a = t(735250);
      t(470079);
      var l = t(442837),
        s = t(481060),
        i = t(594174),
        o = t(311888),
        r = t(63063),
        c = t(5192),
        d = t(431328),
        u = t(501655),
        _ = t(659972),
        m = t(981631),
        h = t(765305),
        E = t(689938),
        x = t(264252);
      function I(e) {
        let { icon: n } = e;
        return (0, a.jsx)("div", {
          className: x.iconContainer,
          children: (0, a.jsx)(n, { color: "currentColor", size: "md" }),
        });
      }
      function T(e) {
        let { icon: n, text: t } = e;
        return (0, a.jsxs)("div", {
          className: x.listItemContainer,
          children: [
            (0, a.jsx)("div", {
              className: x.listItemIconContainer,
              children: n,
            }),
            (0, a.jsx)(s.Text, {
              className: x.listItemText,
              variant: "text-md/normal",
              color: "header-secondary",
              children: t,
            }),
          ],
        });
      }
      function N(e) {
        var n;
        let { guild: t, channel: s, stageData: o } = e,
          r = (0, l.e7)([i.default], () => i.default.getCurrentUser(), []),
          m = {
            id: "1337",
            guild_id: t.id,
            channel_id: s.id,
            topic: o.topic,
            description: o.description,
            privacy_level:
              null !== (n = o.privacyLevel) && void 0 !== n ? n : h.j8.PUBLIC,
          },
          E = (0, d.w8)(s.id, u.pV.SPEAKER),
          I = (0, d.Rk)(s.id, u.pV.AUDIENCE),
          T = E.slice(0, 5);
        return (
          null ==
            T.find((e) => {
              var n;
              return (
                (null === (n = e.user) || void 0 === n ? void 0 : n.id) ===
                (null == r ? void 0 : r.id)
              );
            }) && T.push({ user: r, userNick: c.ZP.getName(t.id, s.id, r) }),
          (0, a.jsx)("div", {
            className: x.previewCardContainer,
            children: (0, a.jsx)("div", {
              className: x.previewCard,
              children: (0, a.jsx)(_.Z, {
                guild: t,
                stageInstance: m,
                showGuildPopout: !1,
                setShowGuildPopout: () => {},
                source: _.k.UNSPECIFIED,
                speakers: T,
                speakerCount: E.length,
                audienceCount: Math.max(1337, I),
                channelName: s.name,
              }),
            }),
          })
        );
      }
      function g(e) {
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
                (0, a.jsx)(N, { guild: n, channel: t, stageData: l }),
                (0, a.jsxs)(s.ModalContent, {
                  className: x.container,
                  children: [
                    (0, a.jsxs)("div", {
                      className: x.header,
                      children: [
                        (0, a.jsx)(s.Heading, {
                          id: i,
                          className: x.__invalid_title,
                          variant: "heading-xl/semibold",
                          children:
                            E.Z.Messages.START_STAGE_PUBLIC_PREVIEW_TITLE,
                        }),
                        (0, a.jsx)(s.Text, {
                          className: x.subtitle,
                          color: "header-secondary",
                          variant: "text-sm/normal",
                          children:
                            E.Z.Messages.START_STAGE_PUBLIC_PREVIEW_SUBTITLE,
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: x.__invalid_list,
                      children: [
                        (0, a.jsx)(T, {
                          icon: (0, a.jsx)(I, { icon: s.CompassIcon }),
                          text: E.Z.Messages
                            .START_STAGE_PUBLIC_PREVIEW_SECTION_ONE,
                        }),
                        (0, a.jsx)(T, {
                          icon: (0, a.jsx)(I, { icon: s.FriendsIcon }),
                          text: E.Z.Messages
                            .START_STAGE_PUBLIC_PREVIEW_SECTION_TWO,
                        }),
                        (0, a.jsx)(T, {
                          icon: (0, a.jsx)(I, { icon: s.PencilIcon }),
                          text: E.Z.Messages
                            .START_STAGE_PUBLIC_PREVIEW_SECTION_THREE,
                        }),
                        (0, a.jsx)(T, {
                          icon: (0, a.jsx)(o.Z, {
                            className: x.badgeIconBackground,
                            foreground: x.badgeIconForeground,
                            width: 40,
                            height: 40,
                          }),
                          text: E.Z.Messages.START_STAGE_PUBLIC_PREVIEW_SECTION_FOUR.format(
                            {
                              articleURL: r.Z.getArticleURL(
                                m.BhN.STAGE_CHANNEL_GUIDELINES,
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
                        E.Z.Messages.START_STAGE_CHANNEL_EVENT_MODAL_BUTTON,
                    }),
                    (0, a.jsx)(s.Button, {
                      color: s.Button.Colors.PRIMARY,
                      className: x.cancelButton,
                      onClick: u,
                      children: E.Z.Messages.CANCEL,
                    }),
                    (0, a.jsx)(s.Button, {
                      look: s.Button.Looks.LINK,
                      color: s.Button.Colors.LINK,
                      className: x.backButton,
                      onClick: _,
                      size: s.Button.Sizes.MIN,
                      children: E.Z.Messages.BACK,
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
      var a = t(735250),
        l = t(470079),
        s = t(913527),
        i = t.n(s),
        o = t(442837),
        r = t(481060),
        c = t(933557),
        d = t(77810),
        u = t(854698),
        _ = t(40623),
        m = t(440371),
        h = t(810788),
        E = t(699516),
        x = t(594174),
        I = t(626135),
        T = t(570188),
        N = t(427679),
        g = t(930180),
        C = t(582019),
        f = t(157925),
        v = t(981631),
        S = t(765305),
        j = t(190378),
        A = t(689938),
        p = t(151581);
      function L(e) {
        let { stageChannelsInGuild: n, channel: t, onSelectChannel: l } = e;
        return null == l
          ? null
          : (0, a.jsx)(a.Fragment, {
              children: (0, a.jsx)(r.FormItem, {
                title:
                  A.Z.Messages.START_STAGE_MODAL_SET_TOPIC_SELECT_LABEL +
                  " asdf",
                className: p.channelSelectionFormItem,
                required: !0,
                children: (0, a.jsx)(r.SearchableSelect, {
                  value: t.id,
                  options: n.map((e) => ({
                    value: e.id,
                    label: (0, c.F6)(e, x.default, E.Z, !0),
                  })),
                  onChange: (e) => {
                    let t = n.find((n) => n.id === e);
                    null != t && l(t);
                  },
                  renderOptionPrefix: () =>
                    (0, a.jsx)(r.StageIcon, {
                      size: "custom",
                      color: "currentColor",
                      height: 24,
                    }),
                }),
              }),
            });
      }
      function Z(e) {
        var n, t, s, E, x, Z, R, M;
        let {
            channel: B,
            guild: D,
            header: b,
            error: k,
            loading: G,
            onSave: P,
            onEventSave: O,
            onClose: U,
            onSelectChannel: F,
            isEvent: V = !1,
            defaultOptions: y,
            isSlideReady: w = !0,
          } = e,
          z = l.useMemo(() => N.Z.getStageInstanceByChannel(B.id), [B.id]),
          [H, W] = l.useState(
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
          [q, K] = l.useState(
            null !== (s = null == y ? void 0 : y.description) && void 0 !== s
              ? s
              : "",
          ),
          [Y] = l.useState(V),
          [J, X] = l.useState(
            null !== (E = null == y ? void 0 : y.schedule) && void 0 !== E
              ? E
              : { startDate: (0, u.ib)() },
          ),
          [Q, $] = l.useState(Y && (null == y ? void 0 : y.schedule) != null),
          ee = (0, T.J)(B),
          en = (0, T.U)(B),
          et = null == z && ee && !Y,
          [ea, el] = l.useState(et && en),
          es = (0, o.e7)([h.Z], () =>
            h.Z.hasHotspot(j.v.LIVE_STAGE_NOTIFICATION_BADGE),
          ),
          ei = S.j8.GUILD_ONLY,
          [eo] = l.useState(
            null !==
              (Z =
                null !== (x = null == y ? void 0 : y.privacyLevel) &&
                void 0 !== x
                  ? x
                  : null == z
                    ? void 0
                    : z.privacy_level) && void 0 !== Z
              ? Z
              : ei,
          ),
          [er, ec] = l.useState(null == y ? void 0 : y.recurrenceRule),
          ed = (0, g._d)(B.id),
          [eu, e_] = l.useState(!1),
          em = (0, c.ZP)(B),
          eh = (0, d.q)(D),
          eE = null != F,
          ex = eh.length > 1;
        l.useEffect(() => {
          I.default.track(v.rMx.START_STAGE_OPENED, {
            stage_instance_id: null == z ? void 0 : z.id,
            can_start_public_stage: !1,
            guild_id: B.guild_id,
          });
        }, []);
        let eI = (e) => {
          if (
            (e.preventDefault(), eo === S.j8.PUBLIC && H.length < 20 && !eu)
          ) {
            e_(!0);
            return;
          }
          let n = { topic: H, privacyLevel: eo, sendStartNotification: ea };
          if (Y) {
            if (!Q) return;
            null == O ||
              O({
                ...n,
                schedule: J,
                description: q,
                entityType: S.WX.STAGE_INSTANCE,
              });
            return;
          }
          null == P || P(n);
        };
        let { color: eT, text: eN } =
            ((R = z),
            (M = eo),
            Y
              ? {
                  color: r.Button.Colors.BRAND,
                  text: A.Z.Messages.SCHEDULE_EVENT,
                }
              : M === S.j8.PUBLIC &&
                  (null == R ? void 0 : R.privacy_level) !== S.j8.PUBLIC
                ? { color: r.Button.Colors.BRAND, text: A.Z.Messages.CONTINUE }
                : null == R
                  ? {
                      color: r.Button.Colors.GREEN,
                      text: A.Z.Messages.START_STAGE_CHANNEL_EVENT_MODAL_BUTTON,
                    }
                  : {
                      color: r.Button.Colors.BRAND,
                      text: A.Z.Messages.SAVE_CHANGES,
                    }),
          eg = l.useRef(null);
        l.useEffect(() => {
          var e;
          w && (null === (e = eg.current) || void 0 === e || e.focus());
        }, [w]);
        let eC = Q && null != J.startDate && J.startDate >= i()();
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsxs)(r.ModalContent, {
              className: p.modalContent,
              children: [
                b,
                (0, a.jsx)("div", {
                  className: p.blockedUsersContainer,
                  children:
                    null == z &&
                    ed > 0 &&
                    (0, a.jsx)(C.mv, { channelId: B.id }),
                }),
                (0, a.jsxs)("form", {
                  onSubmit: eI,
                  className: p.form,
                  children: [
                    (0, a.jsxs)(r.FormItem, {
                      title: V
                        ? A.Z.Messages.GUILD_EVENT_CREATE_TOPIC_LABEL
                        : A.Z.Messages
                            .START_STAGE_CHANNEL_EVENT_MODAL_TOPIC_LABEL,
                      className: p.topicFormItem,
                      required: !0,
                      children: [
                        (0, a.jsx)(r.TextInput, {
                          className: p.textInput,
                          onChange: (e) => W(e),
                          placeholder:
                            A.Z.Messages
                              .START_STAGE_CHANNEL_EVENT_MODAL_TOPIC_PLACEHOLDER,
                          maxLength: f.xA,
                          value: H,
                          autoComplete: "off",
                          inputRef: eg,
                        }),
                        eu &&
                          (0, a.jsx)(r.Text, {
                            variant: "text-xs/normal",
                            color: "text-warning",
                            className: p.warning,
                            children:
                              A.Z.Messages
                                .START_STAGE_PUBLIC_SHORT_TOPIC_WARNING,
                          }),
                        null != k
                          ? (0, a.jsx)(r.Text, {
                              color: "text-danger",
                              variant: "text-xs/normal",
                              className: p.warning,
                              children: k.getAnyErrorMessage(),
                            })
                          : null,
                      ],
                    }),
                    eE && ex
                      ? (0, a.jsx)(L, {
                          stageChannelsInGuild: eh,
                          channel: B,
                          onSelectChannel: F,
                        })
                      : null,
                    Y &&
                      (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)(m.Z, {
                            className: p.formItem,
                            onScheduleChange: X,
                            onRecurrenceChange: (e) => {
                              let n = J.startDate;
                              if (null != n) ec((0, u.mF)(e, n));
                            },
                            schedule: J,
                            recurrenceRule: er,
                            timeSelected: Q,
                            onTimeChange: $,
                          }),
                          null != J.startDate && J.startDate < i()()
                            ? (0, a.jsx)(r.Text, {
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
                      (0, a.jsx)(r.FormItem, {
                        title:
                          A.Z.Messages
                            .CREATE_STAGE_INSTANCE_DESCRIPTION_INPUT_LABEL,
                        className: p.formItem,
                        children: (0, a.jsx)(r.TextArea, {
                          placeholder:
                            A.Z.Messages
                              .GUILD_EVENT_CREATE_DESCRIPTION_PLACEHOLDER,
                          value: q,
                          onChange: (e) => K(e),
                          maxLength: S.wm,
                        }),
                      }),
                    et
                      ? (0, a.jsx)(_.Z, {
                          sendStartNotification: ea,
                          setSendStartNotification: el,
                          showNotificationNewBadge: es,
                        })
                      : null,
                    eE && !ex
                      ? (0, a.jsx)(r.Text, {
                          color: "header-secondary",
                          variant: "text-xs/normal",
                          className: p.channelSelection,
                          children:
                            A.Z.Messages.START_STAGE_MODAL_SET_TOPIC_HELP_TEXT.format(
                              {
                                stageName: em,
                                stageHook: (e, n) =>
                                  (0, a.jsx)(
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
            (0, a.jsxs)(r.ModalFooter, {
              children: [
                (0, a.jsx)(r.Button, {
                  color: eT,
                  onClick: eI,
                  disabled: "" === H || null == eo || (V && !eC),
                  submitting: G,
                  children: eN,
                }),
                (0, a.jsx)(r.Button, {
                  color: r.Button.Colors.PRIMARY,
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
      var a = t(735250),
        l = t(470079),
        s = t(442837),
        i = t(481060),
        o = t(313201),
        r = t(430824),
        c = t(427679),
        d = t(939863),
        u = t(540186),
        _ = t(609776),
        m = t(289584),
        h = t(180899),
        E = t(157925),
        x = t(689938),
        I = t(469433);
      function T(e) {
        let {
          guild: n,
          channel: t,
          stageInstance: l,
          headerId: s,
          onClose: o,
          loading: r,
          error: c,
          onSave: u,
          defaultOptions: m,
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
                      ? x.Z.Messages.START_STAGE_CHANNEL_EVENT_MODAL_TITLE
                      : x.Z.Messages.EDIT_STAGE_CHANNEL_TITLE,
                }),
                (0, a.jsx)(i.Text, {
                  variant: "text-sm/normal",
                  color: "header-secondary",
                  className: I.headerSubtitle,
                  children:
                    null == l
                      ? x.Z.Messages.START_STAGE_CHANNEL_EVENT_MODAL_SUBTITLE
                      : x.Z.Messages.EDIT_STAGE_SUBTITLE,
                }),
              ],
            }),
            (0, a.jsx)(_.Z, {
              guild: n,
              channel: t,
              onSave: u,
              error: c,
              loading: r,
              onClose: o,
              defaultOptions: m,
              isSlideReady: h,
            }),
          ],
        });
      }
      function N(e) {
        let { channel: n, onClose: t, transitionState: d, ..._ } = e,
          x = (0, o.Dt)(),
          N = (0, s.e7)([r.Z], () => r.Z.getGuild(n.guild_id)),
          g = l.useMemo(() => c.Z.getStageInstanceByChannel(n.id), [n.id]),
          { loading: C, error: f, onSave: v } = (0, m.Z)(n, t),
          {
            modalStep: S,
            setModalStep: j,
            readySlide: A,
            handleSlideReady: p,
            savedOptions: L,
            handleSettingsSave: Z,
            handleDelayedSave: R,
          } = (0, h.Z)({
            stageInstance: g,
            defaultStep: E.lv.STAGE_CHANNEL_SETTINGS,
            error: f,
            onSave: v,
          });
        return (l.useEffect(() => {
          null == N && t();
        }, [N, t]),
        null == N)
          ? null
          : (0, a.jsx)(i.ModalRoot, {
              transitionState: d,
              "aria-labelledby": x,
              ..._,
              size: i.ModalSize.SMALL,
              children: (0, a.jsxs)(i.Slides, {
                activeSlide: S,
                width: 440,
                onSlideReady: p,
                children: [
                  (0, a.jsx)(i.Slide, {
                    id: E.lv.STAGE_CHANNEL_SETTINGS,
                    children: (0, a.jsx)("div", {
                      className: I.slideContainer,
                      children: (0, a.jsx)(T, {
                        guild: N,
                        channel: n,
                        stageInstance: g,
                        headerId: x,
                        onClose: t,
                        loading: C,
                        error: f,
                        onSave: Z,
                        defaultOptions: L,
                        isSlideReady: A === E.lv.STAGE_CHANNEL_SETTINGS,
                      }),
                    }),
                  }),
                  (0, a.jsx)(i.Slide, {
                    id: E.lv.PUBLIC_STAGE_PREVIEW,
                    children: (0, a.jsx)("div", {
                      className: I.slideContainer,
                      children: (0, a.jsx)(u.Z, {
                        headerId: x,
                        guild: N,
                        channel: n,
                        stageData: L,
                        loading: C,
                        onNext: R,
                        onCancel: t,
                        onBack: () => j(E.lv.STAGE_CHANNEL_SETTINGS),
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
        o = t(142497),
        r = t(570188),
        c = t(471253),
        d = t(427679),
        u = t(190378);
      function _(e, n) {
        let t =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : null,
          [_, m] = a.useState(!1),
          [h, E] = a.useState(null),
          x = a.useMemo(
            () => d.Z.getStageInstanceByChannel(null == e ? void 0 : e.id),
            [null == e ? void 0 : e.id],
          ),
          I = (0, r.J)(e);
        return {
          loading: _,
          error: h,
          onSave: async (a) => {
            let { topic: r, privacyLevel: d, sendStartNotification: _ } = a;
            if (null != e && "" !== r && null != d) {
              m(!0),
                E(null),
                null != t &&
                  (l.Z.selectGuild(t), s.default.selectVoiceChannel(e.id));
              try {
                let t;
                null != x
                  ? (t = await c.Ef(e, r, d))
                  : ((t = await c.HO(e, r, d, null != _ && _)),
                    I && o.Kw(u.v.LIVE_STAGE_NOTIFICATION_BADGE)),
                  n(t);
              } catch (e) {
                E(new i.Hx(e)), m(!1);
              }
            }
          },
        };
      }
    },
    180899: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return r;
        },
      }),
        t(47120);
      var a = t(470079),
        l = t(512722),
        s = t.n(l),
        i = t(157925),
        o = t(765305);
      function r(e) {
        let { stageInstance: n, defaultStep: t, error: l, onSave: r } = e,
          [c, d] = a.useState(t),
          [u, _] = a.useState(),
          [m, h] = a.useState(null);
        return (
          a.useEffect(() => {
            null != l && d(i.lv.STAGE_CHANNEL_SETTINGS);
          }, [l]),
          {
            modalStep: c,
            setModalStep: d,
            readySlide: m,
            handleSlideReady: function (e) {
              return h(e);
            },
            savedOptions: u,
            handleSettingsSave: function (e) {
              if (
                (_(e),
                e.privacyLevel === o.j8.PUBLIC &&
                  (null == n ? void 0 : n.privacy_level) !== o.j8.PUBLIC)
              ) {
                d(i.lv.PUBLIC_STAGE_PREVIEW);
                return;
              }
              r(e);
            },
            handleDelayedSave: function () {
              s()(null != u, "Must have some saved options."), r(u);
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
          ...o
        } = e;
        return (0, a.jsxs)("svg", {
          ...(0, l.Z)(o),
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
    771370: function (e, n, t) {
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
    186983: function (e, n, t) {
      e.exports = {
        notificationToggle: "notificationToggle_ab70d0",
        tooltip: "tooltip_ab70d0",
      };
    },
    84794: function (e, n, t) {
      e.exports = { title: "title_a33974" };
    },
    201750: function (e, n, t) {
      e.exports = {
        doubleInput: "doubleInput_c8eacd",
        link: "link_c8eacd",
        addIcon: "addIcon_c8eacd",
        removeIcon: "removeIcon_c8eacd",
      };
    },
    543471: function (e, n, t) {
      e.exports = {
        grid: "grid_bd205c",
        speakerContainer: "speakerContainer_bd205c",
        avatar: "avatar_bd205c",
        iconMicrophone: "iconMicrophone_bd205c",
        textInGridContainer: "textInGridContainer_bd205c",
        textInGrid: "textInGrid_bd205c",
      };
    },
    355430: function (e, n, t) {
      e.exports = { container: "container_fe77dd", icon: "icon_fe77dd" };
    },
    585866: function (e, n, t) {
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
    805881: function (e, n, t) {
      e.exports = {
        container: "container_c5e69b",
        sparkleIcon: "sparkleIcon_c5e69b",
        sparkleTop: "sparkleTop_c5e69b",
        sparkleBottom: "sparkleBottom_c5e69b",
      };
    },
    40916: function (e, n, t) {
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
    264252: function (e, n, t) {
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
    151581: function (e, n, t) {
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
    469433: function (e, n, t) {
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
//# sourceMappingURL=0c12b6a379f5be4a2bc1.js.map
