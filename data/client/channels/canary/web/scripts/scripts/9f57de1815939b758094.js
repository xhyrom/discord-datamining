"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["53512"],
  {
    180681: function (e) {
      e.exports = "/assets/9058ecf4ddbe95854758.png";
    },
    390115: function (e) {
      e.exports = "/assets/ca5fb77ffc5d15930483.png";
    },
    17840: function (e) {
      e.exports = "/assets/51dbb414dfadb0d08361.png";
    },
    57927: function (e, s, a) {
      a.d(s, {
        Z: function () {
          return j;
        },
      }),
        a(47120);
      var t = a(735250),
        n = a(470079),
        i = a(120356),
        l = a.n(i),
        r = a(392711),
        c = a.n(r),
        d = a(442837),
        o = a(481060),
        _ = a(367907),
        I = a(565138),
        N = a(430824),
        x = a(771845),
        m = a(9156),
        T = a(626135),
        h = a(789662),
        u = a(981631),
        O = a(689938),
        g = a(639516);
      function j(e) {
        let { guildPlans: s, overrideGuild: a } = e,
          i = (0, d.e7)([x.ZP], () => x.ZP.getFlattenedGuildIds()),
          [l, r] = n.useMemo(
            () =>
              c()(s)
                .values()
                .sortBy((e) => {
                  let s = i.indexOf(e.guildId);
                  return -1 === s ? i.length : s;
                })
                .partition((e) => {
                  var s;
                  return (
                    (null !== (s = e.overrideMode) && void 0 !== s
                      ? s
                      : e.mode) === h.AR.UseGreyDot
                  );
                })
                .value(),
            [s, i],
          ),
          o = n.useCallback(
            (e) => {
              var t;
              return a(
                e,
                (null !== (t = s[e].overrideMode) && void 0 !== t
                  ? t
                  : s[e].mode) === h.AR.UseGreyDot
                  ? h.AR.KeepAsIs
                  : h.AR.UseGreyDot,
              );
            },
            [a, s],
          );
        return (0, t.jsxs)("div", {
          className: g.container,
          children: [
            (0, t.jsx)(b, {
              header: O.Z.Messages.NOTIF_MIGRATION_CUSTOMIZE_SECTION2_TITLE,
              subheader:
                O.Z.Messages.NOTIF_MIGRATION_CUSTOMIZE_SECTION2_SUBTITLE,
              guildPlans: r,
              onClick: o,
            }),
            (0, t.jsx)(b, {
              header: O.Z.Messages.NOTIF_MIGRATION_CUSTOMIZE_SECTION1_TITLE,
              subheader:
                O.Z.Messages.NOTIF_MIGRATION_CUSTOMIZE_SECTION1_SUBTITLE,
              guildPlans: l,
              onClick: o,
            }),
          ],
        });
      }
      function b(e) {
        let { header: s, subheader: a, guildPlans: n, onClick: i } = e;
        return (0, t.jsxs)("div", {
          className: g.column,
          children: [
            (0, t.jsxs)("div", {
              className: g.header,
              children: [
                (0, t.jsxs)(o.Text, {
                  className: g.__invalid_sectionTitle,
                  variant: "text-md/medium",
                  color: "header-primary",
                  children: [s, " (", n.length, ")"],
                }),
                (0, t.jsx)(o.Text, {
                  variant: "text-xs/normal",
                  color: "header-secondary",
                  children: a,
                }),
              ],
            }),
            (0, t.jsx)(o.Scroller, {
              className: g.scroller,
              children: (0, t.jsx)("div", {
                className: g.guilds,
                children: n.map((e) =>
                  (0, t.jsx)(M, { plan: e, onClick: i }, e.guildId),
                ),
              }),
            }),
          ],
        });
      }
      function M(e) {
        var s;
        let { plan: a, onClick: n } = e,
          i = (0, d.e7)([N.Z], () => N.Z.getGuild(a.guildId));
        if (null == i) return null;
        let r =
          (null !== (s = a.overrideMode) && void 0 !== s ? s : a.mode) ===
          h.AR.UseGreyDot;
        function c() {
          T.default.track(u.rMx.NOTIFICATION_MIGRATION_GUILD_CHANGED, {
            ...(0, _.hH)(a.guildId),
            is_selected: !r,
            is_muted: m.ZP.isMuted(a.guildId),
            notification_setting: m.ZP.getMessageNotifications(a.guildId),
          }),
            n(a.guildId);
        }
        return (0, t.jsx)(o.Tooltip, {
          text: (0, t.jsxs)("div", {
            children: [
              (0, t.jsx)(o.Text, {
                variant: "text-md/semibold",
                color: "header-primary",
                children: i.name,
              }),
              (0, t.jsxs)("div", {
                className: g.tooltipRow,
                children: [
                  (0, t.jsx)(o.ChatIcon, {
                    size: "xxs",
                    color: "currentColor",
                  }),
                  (0, t.jsx)(o.Text, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    children: a.messagePain
                      ? O.Z.Messages.NOTIF_MIGRATION_GUILD_TOOLTIP_BUSY
                      : O.Z.Messages.NOTIF_MIGRATION_GUILD_TOOLTIP_QUIET,
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                className: g.tooltipRow,
                children: [
                  (0, t.jsx)(o.FriendsIcon, {
                    size: "xxs",
                    color: "currentColor",
                  }),
                  (0, t.jsx)(o.Text, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    children: a.visitsALot
                      ? O.Z.Messages.NOTIF_MIGRATION_GUILD_TOOLTIP_ALOT
                      : O.Z.Messages.NOTIF_MIGRATION_GUILD_TOOLTIP_ALITTLE,
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                className: g.tooltipRow,
                children: [
                  (0, t.jsx)(o.BellIcon, {
                    size: "xxs",
                    color: "currentColor",
                  }),
                  (0, t.jsx)(o.Text, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    children: a.muted
                      ? O.Z.Messages.NOTIF_MIGRATION_GUILD_TOOLTIP_MUTED
                      : O.Z.Messages.NOTIF_MIGRATION_GUILD_TOOLTIP_NOT_MUTED,
                  }),
                ],
              }),
            ],
          }),
          "aria-label": a.debugReason,
          tooltipClassName: g.tooltip,
          children: (e) =>
            (0, t.jsxs)(o.Clickable, {
              ...e,
              className: l()(g.guild, r ? g.selected : void 0),
              onClick: c,
              children: [
                (0, t.jsx)(o.CircleCheckIcon, {
                  size: "xs",
                  color: "currentColor",
                  className: g.checkmark,
                  secondaryColor: "white",
                }),
                (0, t.jsx)(I.Z, {
                  "aria-hidden": !0,
                  className: g.guildIcon,
                  guild: i,
                  size: I.Z.Sizes.MEDIUM,
                  active: !0,
                  tabIndex: -1,
                }),
              ],
            }),
        });
      }
    },
    273236: function (e, s, a) {
      a(47120);
      var t = a(735250),
        n = a(470079),
        i = a(120356),
        l = a.n(i),
        r = a(699581),
        c = a(481060),
        d = a(689938),
        o = a(987671),
        _ = a(55011);
      function I(e) {
        let { text: s, className: a, hidden: n } = e;
        return (0, t.jsxs)("div", {
          className: l()(a, o.tip, { [o.hidden]: n }),
          children: [
            (0, t.jsx)(c.Text, {
              className: o.__invalid_tipText,
              variant: "text-sm/normal",
              color: "text-secondary",
              children: s,
            }),
            (0, t.jsx)("div", { className: o.tipLine }),
          ],
        });
      }
      function N(e) {
        let { grey: s, mention: a, name: n } = e;
        return (0, t.jsxs)("div", {
          className: l()(o.channel, { [o.grey]: s, [o.mention]: a }),
          children: [
            (0, t.jsx)(c.TextIcon, {
              size: "xs",
              color: "currentColor",
              className: o.channelIcon,
            }),
            (0, t.jsx)(c.Text, {
              variant: "text-md/medium",
              className: o.channelName,
              children: n,
            }),
          ],
        });
      }
      s.Z = n.forwardRef(function (e, s) {
        let {} = e,
          [i, l] = n.useState("before"),
          [x, m] = n.useState(!1),
          [T, h] = n.useState(!1);
        n.useImperativeHandle(s, () => ({
          maybeChangeToAfterTab: () => (!T && u("after"), T),
        }));
        let u = n.useCallback((e) => {
          m(!0),
            setTimeout(() => {
              r.unstable_batchedUpdates(() => {
                "after" === e && h(!0), m(!1), l(e);
              });
            }, 400);
        }, []);
        return (0, t.jsxs)(c.Scroller, {
          className: _.content,
          children: [
            (0, t.jsxs)("div", {
              className: _.header,
              children: [
                (0, t.jsx)(c.BellIcon, {
                  size: "custom",
                  color: "currentColor",
                  width: 40,
                  height: 40,
                }),
                (0, t.jsx)(c.Heading, {
                  variant: "heading-xl/semibold",
                  color: "header-primary",
                  children: d.Z.Messages.NOTIF_MIGRATION_INTRO_TITLE,
                }),
                (0, t.jsx)(c.Text, {
                  className: _.__invalid_subtitle,
                  variant: "text-md/normal",
                  color: "header-secondary",
                  children: d.Z.Messages.NOTIF_MIGRATION_INTRO_SUB_TITLE,
                }),
              ],
            }),
            (0, t.jsxs)("div", {
              className: o.container,
              children: [
                (0, t.jsxs)("div", {
                  className: o.tabs,
                  children: [
                    (0, t.jsx)("div", {
                      className: o.tabBackground,
                      style: { left: "before" === i ? 0 : "50%" },
                    }),
                    (0, t.jsx)(c.Clickable, {
                      className: o.tab,
                      onClick: () => u("before"),
                      children: (0, t.jsx)(c.Text, {
                        variant: "text-sm/medium",
                        color: "before" === i ? "header-primary" : "text-muted",
                        children: d.Z.Messages.NOTIF_MIGRATION_INTRO_BEFORE,
                      }),
                    }),
                    (0, t.jsx)(c.Clickable, {
                      className: o.tab,
                      onClick: () => u("after"),
                      children: (0, t.jsx)(c.Text, {
                        variant: "text-sm/medium",
                        color: "after" === i ? "header-primary" : "text-muted",
                        children: d.Z.Messages.NOTIF_MIGRATION_INTRO_AFTER,
                      }),
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: o.previewContainer,
                  children: [
                    (0, t.jsxs)("div", {
                      className: o.guilds,
                      children: [
                        (0, t.jsx)("div", {
                          className: o.unreadGuild,
                          children: (0, t.jsx)("img", {
                            src: a(180681),
                            width: 36,
                            height: 36,
                            alt: "Example Guild Icon",
                          }),
                        }),
                        (0, t.jsx)("div", {
                          className: "after" === i ? o.guild : o.unreadGuild,
                          children: (0, t.jsx)("img", {
                            src: a(390115),
                            width: 36,
                            height: 36,
                            alt: "Example Guild Icon",
                          }),
                        }),
                        (0, t.jsx)("div", {
                          className: "after" === i ? o.guild : o.unreadGuild,
                          children: (0, t.jsx)("img", {
                            src: a(17840),
                            width: 36,
                            height: 36,
                            alt: "Example Guild Icon",
                          }),
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: o.channels,
                      children: [
                        (0, t.jsx)(N, {
                          mention: !0,
                          name: d.Z.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_1,
                        }),
                        (0, t.jsx)(N, {
                          name: d.Z.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_2,
                        }),
                        (0, t.jsx)(N, {
                          grey: "after" === i,
                          name: d.Z.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_3,
                        }),
                        (0, t.jsx)(N, {
                          grey: "after" === i,
                          name: d.Z.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_4,
                        }),
                        (0, t.jsx)(N, {
                          name: d.Z.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_5,
                        }),
                        (0, t.jsx)(N, {
                          grey: "after" === i,
                          name: d.Z.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_6,
                        }),
                        (0, t.jsx)(N, {
                          grey: "after" === i,
                          name: d.Z.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_7,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, t.jsx)(I, {
                  hidden: x || "after" === i,
                  className: o.tipBefore1,
                  text: d.Z.Messages.NOTIF_MIGRATION_INTRO_TIP_BEFORE1,
                }),
                (0, t.jsx)(I, {
                  hidden: x || "after" === i,
                  className: o.tipBefore2,
                  text: d.Z.Messages.NOTIF_MIGRATION_INTRO_TIP_BEFORE2,
                }),
                (0, t.jsx)(I, {
                  hidden: x || "before" === i,
                  className: o.tipAfter1,
                  text: d.Z.Messages.NOTIF_MIGRATION_INTRO_TIP_AFTER1,
                }),
                (0, t.jsx)(I, {
                  hidden: x || "before" === i,
                  className: o.tipAfter2,
                  text: d.Z.Messages.NOTIF_MIGRATION_INTRO_TIP_AFTER2,
                }),
              ],
            }),
          ],
        });
      });
    },
    753521: function (e, s, a) {
      a.r(s),
        a.d(s, {
          default: function () {
            return T;
          },
        }),
        a(47120);
      var t = a(735250),
        n = a(470079),
        i = a(481060),
        l = a(626135),
        r = a(115345),
        c = a(57927),
        d = a(273236),
        o = a(931839),
        _ = a(905987),
        I = a(789662),
        N = a(981631),
        x = a(689938),
        m = a(55011);
      function T(e) {
        let {
            onClose: s,
            transitionState: a,
            dismissable: c,
            guildPain: T,
            myUsage: u,
          } = e,
          [O, g] = n.useState(o.O.Intro),
          { submitted: j, submitting: b, saveSettings: M } = (0, r.vo)(s),
          { guildPlans: v, overrideGuild: f, getDebug: C } = (0, r.F6)(T, u),
          A = n.useRef(null);
        return (
          n.useEffect(() => {
            l.default.track(N.rMx.OPEN_MODAL, {
              type: "notification_migration_modal",
            });
          }, []),
          (0, t.jsxs)(i.ModalRoot, {
            className: m.__invalid_modal,
            transitionState: a,
            "aria-label": x.Z.Messages.NOTIFICATIONS,
            size: i.ModalSize.DYNAMIC,
            children: [
              (0, t.jsx)(o.Z, { selectedTab: O, onClick: g, submitted: j }),
              O === o.O.Intro
                ? (0, t.jsx)(d.Z, { ref: A })
                : O === o.O.Customize
                  ? (0, t.jsx)(h, {
                      guildPlans: v,
                      overrideGuild: f,
                      getDebug: C,
                    })
                  : (0, t.jsx)(_.Z, {
                      count: Object.values(v).filter((e) => {
                        var s;
                        return (
                          (null !== (s = e.overrideMode) && void 0 !== s
                            ? s
                            : e.mode) === I.AR.UseGreyDot
                        );
                      }).length,
                    }),
              (0, t.jsxs)(i.ModalFooter, {
                className: m.buttons,
                children: [
                  (0, t.jsxs)("div", {
                    className: m.__invalid_left,
                    children: [
                      c || (O !== o.O.Tips && O !== o.O.Customize)
                        ? null
                        : (0, t.jsx)(i.Anchor, {
                            className: m.dismiss,
                            href: "https://dis.gd/better-muting",
                            children: (0, t.jsx)(i.Text, {
                              variant: "text-sm/semibold",
                              color: "interactive-normal",
                              children: x.Z.Messages.LEARN_MORE,
                            }),
                          }),
                      c && O === o.O.Intro
                        ? (0, t.jsx)(i.Clickable, {
                            className: m.dismiss,
                            onClick: s,
                            children: (0, t.jsx)(i.Text, {
                              variant: "text-sm/semibold",
                              color: "interactive-normal",
                              children: x.Z.Messages.DISMISS,
                            }),
                          })
                        : null,
                      c && O === o.O.Customize
                        ? (0, t.jsx)(i.Clickable, {
                            className: m.dismiss,
                            onClick: s,
                            children: (0, t.jsx)(i.Text, {
                              variant: "text-sm/semibold",
                              color: "interactive-normal",
                              children: x.Z.Messages.CANCEL,
                            }),
                          })
                        : null,
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: m.right,
                    children: [
                      O === o.O.Customize
                        ? (0, t.jsx)(i.Text, {
                            className: m.warning,
                            variant: "text-xs/medium",
                            color: "text-muted",
                            children: x.Z.Messages.NOTIF_MIGRATION_BACKUP,
                          })
                        : null,
                      O !== o.O.Customize || j
                        ? null
                        : (0, t.jsxs)(i.Button, {
                            onClick: () => g(o.O.Intro),
                            color: i.Button.Colors.TRANSPARENT,
                            children: [
                              (0, t.jsx)(i.ArrowSmallLeftIcon, {
                                size: "xs",
                                color: "currentColor",
                              }),
                              " ",
                              x.Z.Messages.BACK,
                            ],
                          }),
                      O === o.O.Intro
                        ? (0, t.jsxs)(i.Button, {
                            onClick: () => {
                              var e;
                              (null === (e = A.current) || void 0 === e
                                ? void 0
                                : e.maybeChangeToAfterTab()) &&
                                g(o.O.Customize);
                            },
                            children: [
                              x.Z.Messages.TRY_IT_OUT,
                              " ",
                              (0, t.jsx)(i.ArrowSmallRightIcon, {
                                size: "xs",
                                color: "currentColor",
                              }),
                            ],
                          })
                        : O === o.O.Customize
                          ? (0, t.jsxs)(i.Button, {
                              onClick: () => {
                                g(o.O.Tips), M(v);
                              },
                              children: [
                                x.Z.Messages.APPLY,
                                " ",
                                (0, t.jsx)(i.CheckmarkLargeIcon, {
                                  size: "xs",
                                  color: "currentColor",
                                }),
                              ],
                            })
                          : (0, t.jsx)(i.Button, {
                              submitting: b,
                              onClick: s,
                              children: x.Z.Messages.CLOSE,
                            }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      }
      function h(e) {
        let { guildPlans: s, overrideGuild: a } = e;
        return (0, t.jsxs)(i.Scroller, {
          className: m.content,
          children: [
            (0, t.jsxs)("div", {
              className: m.header,
              children: [
                (0, t.jsx)(i.Heading, {
                  variant: "heading-xl/bold",
                  color: "header-primary",
                  children: x.Z.Messages.NOTIF_MIGRATION_CUSTOMIZE_TITLE,
                }),
                (0, t.jsx)(i.Text, {
                  className: m.__invalid_subtitle,
                  variant: "text-md/medium",
                  color: "header-secondary",
                  children: x.Z.Messages.NOTIF_MIGRATION_CUSTOMIZE_SUB_TITLE,
                }),
              ],
            }),
            (0, t.jsx)(c.Z, { guildPlans: s, overrideGuild: a }),
          ],
        });
      }
    },
    931839: function (e, s, a) {
      a.d(s, {
        O: function () {
          return n;
        },
        Z: function () {
          return _;
        },
      });
      var t,
        n,
        i = a(735250);
      a(470079);
      var l = a(120356),
        r = a.n(l),
        c = a(481060),
        d = a(689938),
        o = a(663005);
      function _(e) {
        let { selectedTab: s, onClick: a, submitted: t } = e;
        return (0, i.jsxs)("div", {
          className: o.tabs,
          children: [
            (0, i.jsx)(I, {
              tab: 0,
              selectedTab: s,
              label: d.Z.Messages.NOTIF_MIGRATION_INTRO_TAB,
              disabled: t,
              onClick: a,
            }),
            (0, i.jsx)(I, {
              tab: 1,
              selectedTab: s,
              label: d.Z.Messages.NOTIF_MIGRATION_CUSTOMIZE_TAB,
              disabled: t,
              onClick: a,
            }),
            (0, i.jsx)(I, {
              tab: 2,
              selectedTab: s,
              label: d.Z.Messages.NOTIF_MIGRATION_TIPS_TAB,
              disabled: !t,
              onClick: a,
            }),
          ],
        });
      }
      function I(e) {
        let { tab: s, selectedTab: a, label: t, disabled: n, onClick: l } = e;
        return n
          ? (0, i.jsxs)("div", {
              className: r()(o.tab, { [o.current]: a === s }),
              children: [
                (0, i.jsx)("div", { className: o.progressBar }),
                (0, i.jsx)(c.Text, {
                  variant: "text-xs/medium",
                  color: a === s ? "text-brand" : "text-muted",
                  children: t,
                }),
              ],
            })
          : (0, i.jsxs)(c.Clickable, {
              onClick: () => l(s),
              className: r()(o.tab, { [o.current]: a === s }),
              children: [
                (0, i.jsx)("div", { className: o.progressBar }),
                (0, i.jsx)(c.Text, {
                  variant: "text-xs/medium",
                  color: a === s ? "text-brand" : "text-muted",
                  children: t,
                }),
              ],
            });
      }
      ((t = n || (n = {}))[(t.Intro = 0)] = "Intro"),
        (t[(t.Customize = 1)] = "Customize"),
        (t[(t.Tips = 2)] = "Tips");
    },
    905987: function (e, s, a) {
      a.d(s, {
        Z: function () {
          return h;
        },
      }),
        a(47120);
      var t = a(735250),
        n = a(470079),
        i = a(120356),
        l = a.n(i),
        r = a(442837),
        c = a(481060),
        d = a(430824),
        o = a(771845),
        _ = a(259580),
        I = a(186523),
        N = a(553826),
        x = a(689938),
        m = a(55011),
        T = a(50180);
      function h(e) {
        let { count: s } = e,
          [a, i] = n.useState("server");
        return (0, t.jsxs)(c.Scroller, {
          className: m.content,
          children: [
            (0, t.jsxs)("div", {
              className: l()(m.header, T.header),
              children: [
                (0, t.jsx)(c.CircleCheckIcon, {
                  size: "custom",
                  color: "currentColor",
                  width: 40,
                  height: 40,
                }),
                (0, t.jsx)(c.Heading, {
                  variant: "heading-xl/bold",
                  color: "header-primary",
                  children: x.Z.Messages.NOTIF_MIGRATION_TIPS_TITLE.format({
                    count: s,
                  }),
                }),
                (0, t.jsx)(c.Text, {
                  className: m.__invalid_subtitle,
                  variant: "text-md/medium",
                  color: "header-secondary",
                  children: x.Z.Messages.NOTIF_MIGRATION_TIPS_SUB_TITLE,
                }),
              ],
            }),
            (0, t.jsxs)("div", {
              className: T.tabs,
              children: [
                (0, t.jsx)("div", {
                  className: T.tabBackground,
                  style: { left: "server" === a ? 0 : "50%" },
                }),
                (0, t.jsx)(c.Clickable, {
                  className: T.tab,
                  onClick: () => i("server"),
                  children: (0, t.jsx)(c.Text, {
                    variant: "text-sm/medium",
                    color: "server" === a ? "header-primary" : "text-muted",
                    children: x.Z.Messages.NOTIF_MIGRATION_TIPS_TAB1,
                  }),
                }),
                (0, t.jsx)(c.Clickable, {
                  className: T.tab,
                  onClick: () => i("channel"),
                  children: (0, t.jsx)(c.Text, {
                    variant: "text-sm/medium",
                    color: "channel" === a ? "header-primary" : "text-muted",
                    children: x.Z.Messages.NOTIF_MIGRATION_TIPS_TAB2,
                  }),
                }),
              ],
            }),
            (0, t.jsxs)("div", {
              className: T.container,
              children: [
                (0, t.jsx)(u, { hidden: "channel" === a }),
                (0, t.jsx)(O, { hidden: "server" === a }),
              ],
            }),
          ],
        });
      }
      function u(e) {
        let { hidden: s } = e,
          a = (0, r.e7)([d.Z, o.ZP], () => {
            var e;
            return null ===
              (e = d.Z.getGuild(o.ZP.getFlattenedGuildIds()[0])) || void 0 === e
              ? void 0
              : e.name;
          }),
          [i, I] = n.useState(0);
        return (
          n.useEffect(() => {
            if (s) return;
            let e = 0,
              a = [1500, 1e3, 1e3, 500].map((s, a) =>
                setTimeout(() => I(a + 1), (e += s)),
              );
            return () => {
              a.forEach((e) => clearTimeout(e)), setTimeout(() => I(0), 150);
            };
          }, [s]),
          (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)("div", {
                className: T.containerInner,
                children: (0, t.jsxs)("div", {
                  className: l()(T.serversSection, {
                    [T.hidden]: s,
                    [T.showBigMenu]: i >= 1,
                    [T.fadeChannels]: i >= 1,
                    [T.showModal]: i >= 3,
                  }),
                  children: [
                    (0, t.jsxs)("div", {
                      className: T.channels,
                      children: [
                        (0, t.jsxs)("div", {
                          className: T.guildName,
                          children: [
                            (0, t.jsx)(c.Text, {
                              variant: "text-md/medium",
                              color: "interactive-active",
                              lineClamp: 1,
                              children: null != a ? a : "Keyboard Nerds",
                            }),
                            i >= 1
                              ? (0, t.jsx)(c.XSmallIcon, {
                                  size: "md",
                                  color: "currentColor",
                                  className: T.icon,
                                })
                              : (0, t.jsx)(_.Z, {
                                  className: l()(T.__invalid_downCaret, T.icon),
                                  width: 24,
                                  height: 24,
                                }),
                          ],
                        }),
                        (0, t.jsx)(j, {
                          name: x.Z.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_2,
                        }),
                        (0, t.jsx)(j, {
                          name: x.Z.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_1,
                        }),
                        (0, t.jsx)(j, {
                          grey: !0,
                          name: x.Z.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_3,
                        }),
                        (0, t.jsx)(j, {
                          grey: !0,
                          name: x.Z.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_4,
                        }),
                        (0, t.jsx)(j, {
                          grey: !0,
                          name: x.Z.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_5,
                        }),
                        (0, t.jsx)(j, {
                          nodot: !0,
                          name: x.Z.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_6,
                        }),
                        (0, t.jsx)(j, {
                          nodot: !0,
                          name: x.Z.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_7,
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: T.bigMenu,
                      children: [
                        (0, t.jsx)(b, {
                          text: x.Z.Messages.INVITE_PEOPLE,
                          icon: (0, t.jsx)(c.GroupPlusIcon, {
                            size: "sm",
                            className: T.icon,
                          }),
                        }),
                        (0, t.jsx)("div", { className: T.divider }),
                        (0, t.jsx)(b, {
                          active: i >= 2,
                          text: x.Z.Messages.NOTIFICATION_SETTINGS,
                          icon: (0, t.jsx)(c.BellIcon, {
                            size: "sm",
                            color: "currentColor",
                            className: T.icon,
                          }),
                        }),
                        (0, t.jsx)(b, {
                          text: x.Z.Messages.PRIVACY_SETTINGS,
                          icon: (0, t.jsx)(c.ShieldIcon, {
                            size: "sm",
                            color: "currentColor",
                            className: T.icon,
                          }),
                        }),
                        (0, t.jsx)(b, {
                          text: x.Z.Messages.SERVER_SETTINGS,
                          icon: (0, t.jsx)(c.SettingsIcon, {
                            size: "sm",
                            color: "currentColor",
                            className: T.icon,
                          }),
                        }),
                        (0, t.jsx)(b, {
                          text: x.Z.Messages.CREATE_EVENTS,
                          icon: (0, t.jsx)(c.CalendarPlusIcon, {
                            size: "sm",
                            color: "currentColor",
                            className: T.icon,
                          }),
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: T.notifModal,
                      children: [
                        (0, t.jsx)(c.Text, {
                          className: T.modalHeader,
                          variant: "text-md/medium",
                          color: "interactive-active",
                          children: x.Z.Messages.NOTIFICATION_SETTINGS,
                        }),
                        (0, t.jsxs)("div", {
                          className: T.notifTabs,
                          children: [
                            (0, t.jsxs)("div", {
                              className: T.notifTab,
                              children: [
                                (0, t.jsx)(c.CircleCheckIcon, {
                                  size: "md",
                                  color: "currentColor",
                                }),
                                (0, t.jsx)(c.Text, {
                                  variant: "text-xs/medium",
                                  color: "text-muted",
                                  lineClamp: 1,
                                  children: x.Z.Messages.NOTIFICATION_PRESET_1,
                                }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              className: T.activeNotifTab,
                              children: [
                                (0, t.jsx)(c.AtIcon, {
                                  size: "md",
                                  color: "currentColor",
                                }),
                                (0, t.jsx)(c.Text, {
                                  variant: "text-xs/medium",
                                  color: "interactive-active",
                                  lineClamp: 1,
                                  children: x.Z.Messages.NOTIFICATION_PRESET_2,
                                }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              className: T.notifTab,
                              children: [
                                (0, t.jsx)(c.BellSlashIcon, {
                                  size: "md",
                                  color: "currentColor",
                                }),
                                (0, t.jsx)(c.Text, {
                                  variant: "text-xs/medium",
                                  color: "text-muted",
                                  lineClamp: 1,
                                  children: x.Z.Messages.NOTIFICATION_PRESET_3,
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          className: T.controls,
                          children: [
                            (0, t.jsxs)("div", {
                              className: T.control,
                              children: [
                                (0, t.jsx)("div", {
                                  className: T.controlPlaceholder,
                                }),
                                (0, t.jsx)("div", { className: T.switchOn }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              className: T.control,
                              children: [
                                (0, t.jsx)("div", {
                                  className: T.controlPlaceholder,
                                }),
                                (0, t.jsx)("div", { className: T.switchOff }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, t.jsx)(g, {
                text: x.Z.Messages.NOTIF_MIGRATION_TIPS_TAB1_TIP2,
                className: T.tipServers2,
                hidden: s || i < 4,
              }),
            ],
          })
        );
      }
      function O(e) {
        let { hidden: s } = e,
          [a, i] = n.useState(0);
        return (
          n.useEffect(() => {
            if (s) return;
            let e = 0,
              a = [1e3, 1e3, 1e3, 800, 800].map((s, a) =>
                setTimeout(() => i(a + 1), (e += s)),
              );
            return () => {
              a.forEach((e) => clearTimeout(e)), setTimeout(() => i(0), 150);
            };
          }, [s]),
          (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)("div", {
                className: T.containerInner,
                children: (0, t.jsxs)("div", {
                  className: l()(T.channelsSection, {
                    [T.hidden]: s,
                    [T.fadeOtherChannels]: a >= 2,
                    [T.showLeftMenu]: a >= 2,
                    [T.showRightMenu]: a >= 3,
                  }),
                  children: [
                    (0, t.jsxs)("div", {
                      className: T.channels,
                      children: [
                        (0, t.jsx)(j, {
                          selected: a >= 1,
                          grey: a >= 5,
                          name: x.Z.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_2,
                        }),
                        (0, t.jsx)(j, {
                          name: x.Z.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_1,
                        }),
                        (0, t.jsx)(j, {
                          grey: !0,
                          name: x.Z.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_3,
                        }),
                        (0, t.jsx)(j, {
                          grey: !0,
                          name: x.Z.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_4,
                        }),
                        (0, t.jsx)(j, {
                          grey: !0,
                          name: x.Z.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_5,
                        }),
                        (0, t.jsx)(j, {
                          nodot: !0,
                          name: x.Z.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_6,
                        }),
                        (0, t.jsx)(j, {
                          nodot: !0,
                          name: x.Z.Messages.NOTIF_MIGRATION_INTRO_CHANNEL_7,
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: l()(T.menu, T.leftMenu),
                      children: [
                        (0, t.jsx)(b, {
                          small: !0,
                          text: x.Z.Messages.MUTE,
                          icon: (0, t.jsx)(_.Z, {
                            className: T.caret,
                            width: 12,
                            height: 12,
                          }),
                        }),
                        (0, t.jsx)(b, {
                          small: !0,
                          text: x.Z.Messages.NOTIFICATIONS,
                          active: a >= 3,
                          icon: (0, t.jsx)(_.Z, {
                            className: T.caret,
                            width: 12,
                            height: 12,
                          }),
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: l()(T.menu, T.rightMenu),
                      children: [
                        (0, t.jsx)(b, {
                          small: !0,
                          text: x.Z.Messages.NOTIFICATION_PRESET_1,
                          icon:
                            a <= 4
                              ? (0, t.jsx)(N.Z, {
                                  className: T.icon,
                                  width: 12,
                                  height: 12,
                                })
                              : (0, t.jsx)(I.Z, {
                                  className: T.icon,
                                  width: 12,
                                  height: 12,
                                }),
                          active: a <= 4,
                        }),
                        (0, t.jsx)(b, {
                          small: !0,
                          text: x.Z.Messages.NOTIFICATION_PRESET_2,
                          icon:
                            a >= 5
                              ? (0, t.jsx)(N.Z, {
                                  className: T.icon,
                                  width: 12,
                                  height: 12,
                                })
                              : (0, t.jsx)(I.Z, {
                                  className: T.icon,
                                  width: 12,
                                  height: 12,
                                }),
                          active: a >= 5,
                        }),
                        (0, t.jsx)(b, {
                          small: !0,
                          text: x.Z.Messages.NOTIFICATION_PRESET_3,
                          icon: (0, t.jsx)(I.Z, {
                            className: T.icon,
                            width: 12,
                            height: 12,
                          }),
                        }),
                        (0, t.jsx)(b, {
                          small: !0,
                          text: x.Z.Messages.NOTIFICATION_PRESET_CUSTOM,
                          icon: (0, t.jsx)(I.Z, {
                            className: T.icon,
                            width: 12,
                            height: 12,
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, t.jsx)(g, {
                text: x.Z.Messages.NOTIF_MIGRATION_TIPS_TAB2_TIP1,
                className: T.tipChannels1,
                hidden: s || a < 4,
              }),
              (0, t.jsx)(g, {
                text: x.Z.Messages.NOTIF_MIGRATION_TIPS_TAB2_TIP2,
                className: T.tipChannels2,
                hidden: s || a < 4,
              }),
            ],
          })
        );
      }
      function g(e) {
        let { text: s, className: a, hidden: n } = e;
        return (0, t.jsxs)("div", {
          className: l()(a, T.tip, { [T.hidden]: n }),
          children: [
            (0, t.jsx)(c.Text, {
              className: T.__invalid_tipText,
              variant: "text-sm/normal",
              color: "text-secondary",
              children: s,
            }),
            (0, t.jsx)("div", { className: T.tipLine }),
          ],
        });
      }
      function j(e) {
        let { grey: s, nodot: a, selected: n, name: i } = e;
        return (0, t.jsxs)("div", {
          className: l()(T.channel, {
            [T.grey]: s || a,
            [T.nodot]: a,
            [T.selected]: n,
          }),
          children: [
            (0, t.jsx)(c.TextIcon, {
              size: "xs",
              color: "currentColor",
              className: T.channelIcon,
            }),
            (0, t.jsx)(c.Text, {
              variant: "text-md/medium",
              className: T.channelName,
              children: i,
            }),
          ],
        });
      }
      function b(e) {
        let { text: s, active: a, small: n, icon: i } = e;
        return (0, t.jsxs)("div", {
          className: l()(T.menuItem, { [T.active]: a }),
          children: [
            (0, t.jsx)(c.Text, {
              variant: n ? "text-xs/normal" : "text-sm/normal",
              color: a ? "always-white" : "interactive-normal",
              children: s,
            }),
            i,
          ],
        });
      }
    },
    639516: function (e, s, a) {
      e.exports = {
        container: "container_a8210b",
        scroller: "scroller_a8210b",
        column: "column_a8210b",
        header: "header_a8210b",
        guilds: "guilds_a8210b",
        tooltip: "tooltip_a8210b",
        tooltipRow: "tooltipRow_a8210b",
        guild: "guild_a8210b",
        checkmark: "checkmark_a8210b",
        selected: "selected_a8210b",
        guildIcon: "guildIcon_a8210b",
      };
    },
    987671: function (e, s, a) {
      e.exports = {
        container: "container_f2b17e",
        tabs: "tabs_f2b17e",
        tab: "tab_f2b17e",
        tabBackground: "tabBackground_f2b17e",
        previewContainer: "previewContainer_f2b17e",
        guilds: "guilds_f2b17e",
        guild: "guild_f2b17e",
        unreadGuild: "unreadGuild_f2b17e",
        channels: "channels_f2b17e",
        channel: "channel_f2b17e",
        grey: "grey_f2b17e",
        mention: "mention_f2b17e",
        channelName: "channelName_f2b17e",
        channelIcon: "channelIcon_f2b17e",
        tip: "tip_f2b17e",
        tipLine: "tipLine_f2b17e",
        tipBefore1: "tipBefore1_f2b17e",
        tipAfter1: "tipAfter1_f2b17e",
        hidden: "hidden_f2b17e",
        tipBefore2: "tipBefore2_f2b17e",
        tipAfter2: "tipAfter2_f2b17e",
      };
    },
    55011: function (e, s, a) {
      e.exports = {
        content: "content_ee099b",
        header: "header_ee099b",
        buttons: "buttons_ee099b",
        right: "right_ee099b",
        warning: "warning_ee099b",
        dismiss: "dismiss_ee099b",
      };
    },
    663005: function (e, s, a) {
      e.exports = {
        tabs: "tabs_df66dd",
        tab: "tab_df66dd",
        progressBar: "progressBar_df66dd",
        current: "current_df66dd",
      };
    },
    50180: function (e, s, a) {
      e.exports = {
        header: "header_ed91eb",
        tabs: "tabs_ed91eb",
        tab: "tab_ed91eb",
        tabBackground: "tabBackground_ed91eb",
        container: "container_ed91eb",
        containerInner: "containerInner_ed91eb",
        serversSection: "serversSection_ed91eb",
        channelsSection: "channelsSection_ed91eb",
        hidden: "hidden_ed91eb",
        guildName: "guildName_ed91eb",
        icon: "icon_ed91eb",
        channels: "channels_ed91eb",
        channel: "channel_ed91eb",
        fadeChannels: "fadeChannels_ed91eb",
        fadeOtherChannels: "fadeOtherChannels_ed91eb",
        showModal: "showModal_ed91eb",
        selected: "selected_ed91eb",
        grey: "grey_ed91eb",
        nodot: "nodot_ed91eb",
        channelName: "channelName_ed91eb",
        channelIcon: "channelIcon_ed91eb",
        tip: "tip_ed91eb",
        tipLine: "tipLine_ed91eb",
        tipServers2: "tipServers2_ed91eb",
        tipChannels1: "tipChannels1_ed91eb",
        tipChannels2: "tipChannels2_ed91eb",
        bigMenu: "bigMenu_ed91eb",
        menu: "menu_ed91eb",
        showBigMenu: "showBigMenu_ed91eb",
        menuItem: "menuItem_ed91eb",
        active: "active_ed91eb",
        divider: "divider_ed91eb",
        notifModal: "notifModal_ed91eb",
        modalHeader: "modalHeader_ed91eb",
        notifTabs: "notifTabs_ed91eb",
        notifTab: "notifTab_ed91eb",
        activeNotifTab: "activeNotifTab_ed91eb",
        controls: "controls_ed91eb",
        control: "control_ed91eb",
        controlPlaceholder: "controlPlaceholder_ed91eb",
        switchOn: "switchOn_ed91eb",
        switchOff: "switchOff_ed91eb",
        leftMenu: "leftMenu_ed91eb",
        showLeftMenu: "showLeftMenu_ed91eb",
        rightMenu: "rightMenu_ed91eb",
        showRightMenu: "showRightMenu_ed91eb",
        caret: "caret_ed91eb",
      };
    },
  },
]);
//# sourceMappingURL=9f57de1815939b758094.js.map
