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
          m = (0, o.P8)(n),
          h = (e) => e.toString(),
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
            options: m,
            select: d,
            serialize: h,
            isSelected: (e) => null != u && h(e) === h(u),
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
          timeSelected: m = !0,
          schedule: h,
          recurrenceRule: x,
          showEndDate: g = !1,
          requireEndDate: f = !1,
          disableStartDateTime: v = !1,
        } = e;
        if (null == h) return null;
        let _ = null,
          I = h.startDate,
          N = a()(),
          j = a()().add(o.G3, "days"),
          C = a()().add(o.Ib, "days");
        null != x && (j.add(o.hn, "years"), C.add(o.hn, "years"));
        let p = (e) => {
          t({ ...h, endDate: e });
        };
        return (
          g &&
            (_ =
              null != h.endDate || f
                ? (0, l.jsxs)(l.Fragment, {
                    children: [
                      (0, l.jsxs)("div", {
                        className: d.doubleInput,
                        children: [
                          (0, l.jsx)(r.FormItem, {
                            title: c.intl.string(c.t.CTLgZG),
                            required: f,
                            children: (0, l.jsx)(r.DateInput, {
                              value: h.endDate,
                              onSelect: p,
                              minDate: h.startDate,
                              maxDate: C,
                            }),
                          }),
                          (0, l.jsx)(r.FormItem, {
                            title: c.intl.string(c.t.j2RuXF),
                            required: f,
                            children: (0, l.jsx)(r.TimeInput, {
                              value: h.endDate,
                              onChange: p,
                            }),
                          }),
                        ],
                      }),
                      f
                        ? null
                        : (0, l.jsx)(r.Button, {
                            onClick: () => {
                              p(void 0);
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
                      p(a()(h.startDate).add(1, "hour"));
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
                      value: h.startDate,
                      onSelect: (e) => {
                        t({ ...h, startDate: e });
                      },
                      minDate: N,
                      maxDate: j,
                      disabled: v,
                    }),
                  }),
                  (0, l.jsx)(r.FormItem, {
                    title: c.intl.string(c.t["6dGmCA"]),
                    required: !0,
                    children: (0, l.jsx)(r.TimeInput, {
                      value: h.startDate,
                      onChange: (e) => {
                        if (!!e.isValid())
                          null == u || u(!0), t({ ...h, startDate: e });
                      },
                      hideValue: !m,
                      disabled: v,
                    }),
                  }),
                ],
              }),
              _,
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
          m = i - d.length;
        return (0, l.jsxs)("div", {
          className: a()(s.grid, c),
          children: [
            u,
            m > 0 &&
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
                    children: o.intl.format(o.t["185ggI"], { count: m }),
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
    46920: function (e, n, t) {
      t.d(n, {
        Xd: function () {
          return f;
        },
        mv: function () {
          return g;
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
        m = t(930180),
        h = t(388032),
        x = t(578814);
      let g = (e) => {
          let { channelId: n } = e,
            t = (0, m._d)(n);
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
                    children: h.intl.format(h.t["6Tcdt7"], { number: t }),
                  }),
                  (0, l.jsx)(r.Clickable, {
                    className: x.blockedButton,
                    onClick: (e) => {
                      (0, o.vq)(
                        e,
                        (e) => (0, l.jsx)(v, { ...e, channelId: n }),
                        { position: "left", align: "bottom" },
                      );
                    },
                    children: h.intl.string(h.t.rUEjBQ),
                  }),
                ],
              });
        },
        f = (e) => {
          let { user: n, showStatus: t, speaker: a, channelId: o } = e,
            m = (0, i.e7)([u.ZP], () => u.ZP.isModerator(n.id, o)),
            g = null;
          return (
            t &&
              (g = a
                ? h.intl.string(h.t.LqMmGx)
                : m
                  ? h.intl.string(h.t.GMZqSk)
                  : h.intl.string(h.t.suRAp6)),
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
                          children: h.intl.string(h.t["4bDptL"]),
                        }),
                        (0, l.jsxs)(r.Text, {
                          variant: "text-xs/normal",
                          color: "text-muted",
                          children: [" ", "| ", g],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        },
        v = (e) => {
          let { channelId: n } = e,
            t = (0, m.z)(n);
          return (0, l.jsx)(r.Scroller, {
            className: x.container,
            children: t.map((e) => {
              let { user: t } = e;
              return (0, l.jsx)(f, { user: t, channelId: n }, t.id);
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
          return g;
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
        m = t(131154),
        h = t(38981),
        x = t(142664);
      function g(e) {
        let {
            guild: n,
            stageInstance: t,
            showGuildPopout: l,
            setShowGuildPopout: i,
            handleGuildNameClick: r,
            source: g,
            speakers: f,
            speakerCount: v,
            audienceCount: _,
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
                      6 === g &&
                        (0, a.jsx)("div", {
                          className: x.featuredTag,
                          children: (0, a.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            className: x.featuredTagText,
                            children: "Featured",
                          }),
                        }),
                      (0, a.jsx)(h.Z, {
                        count: _,
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
              (0, a.jsx)(m.Z, {
                guild: n,
                speakers: f,
                speakerCount: v,
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
        m = t(659972),
        h = t(981631),
        x = t(765305),
        g = t(388032),
        f = t(537889);
      function v(e) {
        let { icon: n } = e;
        return (0, l.jsx)("div", {
          className: f.iconContainer,
          children: (0, l.jsx)(n, { color: "currentColor", size: "md" }),
        });
      }
      function _(e) {
        let { icon: n, text: t } = e;
        return (0, l.jsxs)("div", {
          className: f.listItemContainer,
          children: [
            (0, l.jsx)("div", {
              className: f.listItemIconContainer,
              children: n,
            }),
            (0, l.jsx)(a.Text, {
              className: f.listItemText,
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
          h = {
            id: "1337",
            guild_id: t.id,
            channel_id: a.id,
            topic: o.topic,
            description: o.description,
            privacy_level:
              null !== (n = o.privacyLevel) && void 0 !== n ? n : x.j8.PUBLIC,
          },
          g = (0, d.w8)(a.id, u.pV.SPEAKER),
          v = (0, d.Rk)(a.id, u.pV.AUDIENCE),
          _ = g.slice(0, 5);
        return (
          null ==
            _.find((e) => {
              var n;
              return (
                (null === (n = e.user) || void 0 === n ? void 0 : n.id) ===
                (null == s ? void 0 : s.id)
              );
            }) && _.push({ user: s, userNick: c.ZP.getName(t.id, a.id, s) }),
          (0, l.jsx)("div", {
            className: f.previewCardContainer,
            children: (0, l.jsx)("div", {
              className: f.previewCard,
              children: (0, l.jsx)(m.Z, {
                guild: t,
                stageInstance: h,
                showGuildPopout: !1,
                setShowGuildPopout: () => {},
                source: m.k.UNSPECIFIED,
                speakers: _,
                speakerCount: g.length,
                audienceCount: Math.max(1337, v),
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
          onBack: m,
        } = e;
        return null == n || null == t || null == i
          ? null
          : (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsx)(I, { guild: n, channel: t, stageData: i }),
                (0, l.jsxs)(a.ModalContent, {
                  className: f.container,
                  children: [
                    (0, l.jsxs)("div", {
                      className: f.header,
                      children: [
                        (0, l.jsx)(a.Heading, {
                          id: r,
                          className: f.__invalid_title,
                          variant: "heading-xl/semibold",
                          children: g.intl.string(g.t.GXpXTE),
                        }),
                        (0, l.jsx)(a.Text, {
                          className: f.subtitle,
                          color: "header-secondary",
                          variant: "text-sm/normal",
                          children: g.intl.string(g.t.JaYMvL),
                        }),
                      ],
                    }),
                    (0, l.jsxs)("div", {
                      className: f.__invalid_list,
                      children: [
                        (0, l.jsx)(_, {
                          icon: (0, l.jsx)(v, { icon: a.CompassIcon }),
                          text: g.intl.string(g.t.u6oOcn),
                        }),
                        (0, l.jsx)(_, {
                          icon: (0, l.jsx)(v, { icon: a.FriendsIcon }),
                          text: g.intl.string(g.t.QC8ymZ),
                        }),
                        (0, l.jsx)(_, {
                          icon: (0, l.jsx)(v, { icon: a.PencilIcon }),
                          text: g.intl.string(g.t.mgGOT0),
                        }),
                        (0, l.jsx)(_, {
                          icon: (0, l.jsx)(o.Z, {
                            className: f.badgeIconBackground,
                            foreground: f.badgeIconForeground,
                            width: 40,
                            height: 40,
                          }),
                          text: g.intl.format(g.t.qLmNLC, {
                            articleURL: s.Z.getArticleURL(
                              h.BhN.STAGE_CHANNEL_GUIDELINES,
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
                      children: g.intl.string(g.t.s8mM8P),
                    }),
                    (0, l.jsx)(a.Button, {
                      color: a.Button.Colors.PRIMARY,
                      className: f.cancelButton,
                      onClick: u,
                      children: g.intl.string(g.t["ETE/oK"]),
                    }),
                    (0, l.jsx)(a.Button, {
                      look: a.Button.Looks.LINK,
                      color: a.Button.Colors.LINK,
                      className: f.backButton,
                      onClick: m,
                      size: a.Button.Sizes.MIN,
                      children: g.intl.string(g.t["13/7kZ"]),
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
      var l = t(200651),
        i = t(192379),
        a = t(913527),
        r = t.n(a),
        o = t(442837),
        s = t(481060),
        c = t(933557),
        d = t(77810),
        u = t(854698),
        m = t(40623),
        h = t(440371),
        x = t(810788),
        g = t(699516),
        f = t(594174),
        v = t(626135),
        _ = t(570188),
        I = t(427679),
        N = t(930180),
        j = t(46920),
        C = t(157925),
        p = t(981631),
        S = t(765305),
        T = t(190378),
        b = t(388032),
        E = t(479562);
      function k(e) {
        let { stageChannelsInGuild: n, channel: t, onSelectChannel: i } = e;
        return null == i
          ? null
          : (0, l.jsx)(l.Fragment, {
              children: (0, l.jsx)(s.FormItem, {
                title: b.intl.string(b.t.S7GjDw) + " asdf",
                className: E.channelSelectionFormItem,
                required: !0,
                children: (0, l.jsx)(s.SearchableSelect, {
                  value: t.id,
                  options: n.map((e) => ({
                    value: e.id,
                    label: (0, c.F6)(e, f.default, g.Z, !0),
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
      function Z(e) {
        var n, t, a, g, f, Z, B, D;
        let {
            channel: A,
            guild: R,
            header: L,
            error: G,
            loading: P,
            onSave: w,
            onEventSave: y,
            onClose: F,
            onSelectChannel: M,
            isEvent: z = !1,
            defaultOptions: U,
            isSlideReady: O = !0,
          } = e,
          H = i.useMemo(() => I.Z.getStageInstanceByChannel(A.id), [A.id]),
          [V, q] = i.useState(
            null !==
              (t =
                null !== (n = null == U ? void 0 : U.topic) && void 0 !== n
                  ? n
                  : null == H
                    ? void 0
                    : H.topic) && void 0 !== t
              ? t
              : "",
          ),
          [W, K] = i.useState(
            null !== (a = null == U ? void 0 : U.description) && void 0 !== a
              ? a
              : "",
          ),
          [J] = i.useState(z),
          [Y, X] = i.useState(
            null !== (g = null == U ? void 0 : U.schedule) && void 0 !== g
              ? g
              : { startDate: (0, u.ib)() },
          ),
          [Q, $] = i.useState(J && (null == U ? void 0 : U.schedule) != null),
          ee = (0, _.J)(A),
          en = (0, _.U)(A),
          et = null == H && ee && !J,
          [el, ei] = i.useState(et && en),
          ea = (0, o.e7)([x.Z], () =>
            x.Z.hasHotspot(T.v.LIVE_STAGE_NOTIFICATION_BADGE),
          ),
          er = S.j8.GUILD_ONLY,
          [eo] = i.useState(
            null !==
              (Z =
                null !== (f = null == U ? void 0 : U.privacyLevel) &&
                void 0 !== f
                  ? f
                  : null == H
                    ? void 0
                    : H.privacy_level) && void 0 !== Z
              ? Z
              : er,
          ),
          [es, ec] = i.useState(null == U ? void 0 : U.recurrenceRule),
          ed = (0, N._d)(A.id),
          [eu, em] = i.useState(!1),
          eh = (0, c.ZP)(A),
          ex = (0, d.q)(R),
          eg = null != M,
          ef = ex.length > 1;
        i.useEffect(() => {
          v.default.track(p.rMx.START_STAGE_OPENED, {
            stage_instance_id: null == H ? void 0 : H.id,
            can_start_public_stage: !1,
            guild_id: A.guild_id,
          });
        }, []);
        let ev = (e) => {
          if (
            (e.preventDefault(), eo === S.j8.PUBLIC && V.length < 20 && !eu)
          ) {
            em(!0);
            return;
          }
          let n = { topic: V, privacyLevel: eo, sendStartNotification: el };
          if (J) {
            if (!Q) return;
            null == y ||
              y({
                ...n,
                schedule: Y,
                description: W,
                entityType: S.WX.STAGE_INSTANCE,
              });
            return;
          }
          null == w || w(n);
        };
        let { color: e_, text: eI } =
            ((B = H),
            (D = eo),
            J
              ? {
                  color: s.Button.Colors.BRAND,
                  text: b.intl.string(b.t["60lJ0N"]),
                }
              : D === S.j8.PUBLIC &&
                  (null == B ? void 0 : B.privacy_level) !== S.j8.PUBLIC
                ? {
                    color: s.Button.Colors.BRAND,
                    text: b.intl.string(b.t["3PatS0"]),
                  }
                : null == B
                  ? {
                      color: s.Button.Colors.GREEN,
                      text: b.intl.string(b.t.s8mM8P),
                    }
                  : {
                      color: s.Button.Colors.BRAND,
                      text: b.intl.string(b.t.K344S0),
                    }),
          eN = i.useRef(null);
        i.useEffect(() => {
          var e;
          O && (null === (e = eN.current) || void 0 === e || e.focus());
        }, [O]);
        let ej = Q && null != Y.startDate && Y.startDate >= r()();
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsxs)(s.ModalContent, {
              className: E.modalContent,
              children: [
                L,
                (0, l.jsx)("div", {
                  className: E.blockedUsersContainer,
                  children:
                    null == H &&
                    ed > 0 &&
                    (0, l.jsx)(j.mv, { channelId: A.id }),
                }),
                (0, l.jsxs)("form", {
                  onSubmit: ev,
                  className: E.form,
                  children: [
                    (0, l.jsxs)(s.FormItem, {
                      title: z
                        ? b.intl.string(b.t["0HbEQ0"])
                        : b.intl.string(b.t["5FPBOD"]),
                      className: E.topicFormItem,
                      required: !0,
                      children: [
                        (0, l.jsx)(s.TextInput, {
                          className: E.textInput,
                          onChange: (e) => q(e),
                          placeholder: b.intl.string(b.t.ZwWrub),
                          maxLength: C.xA,
                          value: V,
                          autoComplete: "off",
                          inputRef: eN,
                        }),
                        eu &&
                          (0, l.jsx)(s.Text, {
                            variant: "text-xs/normal",
                            color: "text-warning",
                            className: E.warning,
                            children: b.intl.string(b.t.AqTyaW),
                          }),
                        null != G
                          ? (0, l.jsx)(s.Text, {
                              color: "text-danger",
                              variant: "text-xs/normal",
                              className: E.warning,
                              children: G.getAnyErrorMessage(),
                            })
                          : null,
                      ],
                    }),
                    eg && ef
                      ? (0, l.jsx)(k, {
                          stageChannelsInGuild: ex,
                          channel: A,
                          onSelectChannel: M,
                        })
                      : null,
                    J &&
                      (0, l.jsxs)(l.Fragment, {
                        children: [
                          (0, l.jsx)(h.Z, {
                            className: E.formItem,
                            onScheduleChange: X,
                            onRecurrenceChange: (e) => {
                              let n = Y.startDate;
                              if (null != n) ec((0, u.mF)(e, n));
                            },
                            schedule: Y,
                            recurrenceRule: es,
                            timeSelected: Q,
                            onTimeChange: $,
                          }),
                          null != Y.startDate && Y.startDate < r()()
                            ? (0, l.jsx)(s.Text, {
                                color: "text-danger",
                                variant: "text-xs/normal",
                                className: E.warning,
                                children: b.intl.string(b.t.AXR5Sk),
                              })
                            : null,
                        ],
                      }),
                    z &&
                      (0, l.jsx)(s.FormItem, {
                        title: b.intl.string(b.t["+gRCCw"]),
                        className: E.formItem,
                        children: (0, l.jsx)(s.TextArea, {
                          placeholder: b.intl.string(b.t["kWO/Ex"]),
                          value: W,
                          onChange: (e) => K(e),
                          maxLength: S.wm,
                        }),
                      }),
                    et
                      ? (0, l.jsx)(m.Z, {
                          sendStartNotification: el,
                          setSendStartNotification: ei,
                          showNotificationNewBadge: ea,
                        })
                      : null,
                    eg && !ef
                      ? (0, l.jsx)(s.Text, {
                          color: "header-secondary",
                          variant: "text-xs/normal",
                          className: E.channelSelection,
                          children: b.intl.format(b.t["S+9O7u"], {
                            stageName: eh,
                            stageHook: (e, n) =>
                              (0, l.jsx)(
                                "span",
                                { className: E.channelName, children: A.name },
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
                  color: e_,
                  onClick: ev,
                  disabled: "" === V || null == eo || (z && !ej),
                  submitting: P,
                  children: eI,
                }),
                (0, l.jsx)(s.Button, {
                  color: s.Button.Colors.PRIMARY,
                  className: E.cancelButton,
                  onClick: F,
                  children: b.intl.string(b.t["ETE/oK"]),
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
        m = t(609776),
        h = t(289584),
        x = t(180899),
        g = t(157925),
        f = t(388032),
        v = t(639879);
      function _(e) {
        let {
          guild: n,
          channel: t,
          stageInstance: i,
          headerId: a,
          onClose: o,
          loading: s,
          error: c,
          onSave: u,
          defaultOptions: h,
          isSlideReady: x,
        } = e;
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsxs)("div", {
              className: v.content,
              children: [
                (0, l.jsx)(d.Z, {
                  children: (0, l.jsx)("div", {
                    className: v.stageIconBackground,
                    children: (0, l.jsx)(r.StageIcon, {
                      size: "custom",
                      color: "currentColor",
                      width: 32,
                      height: 32,
                      className: v.stageIcon,
                    }),
                  }),
                }),
                (0, l.jsx)(r.Heading, {
                  id: a,
                  variant: "heading-xl/semibold",
                  color: "header-primary",
                  className: v.headerTitle,
                  children:
                    null == i
                      ? f.intl.string(f.t.DDF0cH)
                      : f.intl.string(f.t.YPdQOj),
                }),
                (0, l.jsx)(r.Text, {
                  variant: "text-sm/normal",
                  color: "header-secondary",
                  className: v.headerSubtitle,
                  children:
                    null == i
                      ? f.intl.string(f.t.bqQIwc)
                      : f.intl.string(f.t["I+9bLy"]),
                }),
              ],
            }),
            (0, l.jsx)(m.Z, {
              guild: n,
              channel: t,
              onSave: u,
              error: c,
              loading: s,
              onClose: o,
              defaultOptions: h,
              isSlideReady: x,
            }),
          ],
        });
      }
      function I(e) {
        let { channel: n, onClose: t, transitionState: d, ...m } = e,
          f = (0, o.Dt)(),
          I = (0, a.e7)([s.Z], () => s.Z.getGuild(n.guild_id)),
          N = i.useMemo(() => c.Z.getStageInstanceByChannel(n.id), [n.id]),
          { loading: j, error: C, onSave: p } = (0, h.Z)(n, t),
          {
            modalStep: S,
            setModalStep: T,
            readySlide: b,
            handleSlideReady: E,
            savedOptions: k,
            handleSettingsSave: Z,
            handleDelayedSave: B,
          } = (0, x.Z)({
            stageInstance: N,
            defaultStep: g.lv.STAGE_CHANNEL_SETTINGS,
            error: C,
            onSave: p,
          });
        return (i.useEffect(() => {
          null == I && t();
        }, [I, t]),
        null == I)
          ? null
          : (0, l.jsx)(r.ModalRoot, {
              transitionState: d,
              "aria-labelledby": f,
              ...m,
              size: r.ModalSize.SMALL,
              children: (0, l.jsxs)(r.Slides, {
                activeSlide: S,
                width: 440,
                onSlideReady: E,
                children: [
                  (0, l.jsx)(r.Slide, {
                    id: g.lv.STAGE_CHANNEL_SETTINGS,
                    children: (0, l.jsx)("div", {
                      className: v.slideContainer,
                      children: (0, l.jsx)(_, {
                        guild: I,
                        channel: n,
                        stageInstance: N,
                        headerId: f,
                        onClose: t,
                        loading: j,
                        error: C,
                        onSave: Z,
                        defaultOptions: k,
                        isSlideReady: b === g.lv.STAGE_CHANNEL_SETTINGS,
                      }),
                    }),
                  }),
                  (0, l.jsx)(r.Slide, {
                    id: g.lv.PUBLIC_STAGE_PREVIEW,
                    children: (0, l.jsx)("div", {
                      className: v.slideContainer,
                      children: (0, l.jsx)(u.Z, {
                        headerId: f,
                        guild: I,
                        channel: n,
                        stageData: k,
                        loading: j,
                        onNext: B,
                        onCancel: t,
                        onBack: () => T(g.lv.STAGE_CHANNEL_SETTINGS),
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
          return m;
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
      function m(e, n) {
        let t =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : null,
          [m, h] = l.useState(!1),
          [x, g] = l.useState(null),
          f = l.useMemo(
            () => d.Z.getStageInstanceByChannel(null == e ? void 0 : e.id),
            [null == e ? void 0 : e.id],
          ),
          v = (0, s.J)(e);
        return {
          loading: m,
          error: x,
          onSave: async (l) => {
            let { topic: s, privacyLevel: d, sendStartNotification: m } = l;
            if (null != e && "" !== s && null != d) {
              h(!0),
                g(null),
                null != t &&
                  (i.Z.selectGuild(t), a.default.selectVoiceChannel(e.id));
              try {
                let t;
                null != f
                  ? (t = await c.Ef(e, s, d))
                  : ((t = await c.HO(e, s, d, null != m && m)),
                    v && o.Kw(u.v.LIVE_STAGE_NOTIFICATION_BADGE)),
                  n(t);
              } catch (e) {
                g(new r.Hx(e)), h(!1);
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
          [u, m] = l.useState(),
          [h, x] = l.useState(null);
        return (
          l.useEffect(() => {
            null != i && d(r.lv.STAGE_CHANNEL_SETTINGS);
          }, [i]),
          {
            modalStep: c,
            setModalStep: d,
            readySlide: h,
            handleSlideReady: function (e) {
              return x(e);
            },
            savedOptions: u,
            handleSettingsSave: function (e) {
              if (
                (m(e),
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
//# sourceMappingURL=29ed0e8f514dd33f45f1.js.map
