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
    536411: function (e) {
      e.exports = "/assets/51dbb414dfadb0d08361.png";
    },
    57927: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return _;
        },
      }),
        n(47120);
      var i = n(200651),
        s = n(192379),
        r = n(120356),
        l = n.n(r),
        a = n(392711),
        c = n.n(a),
        d = n(442837),
        o = n(481060),
        m = n(367907),
        x = n(565138),
        h = n(430824),
        u = n(771845),
        j = n(9156),
        g = n(626135),
        b = n(789662),
        v = n(981631),
        f = n(388032),
        N = n(129746);
      function _(e) {
        let { guildPlans: t, overrideGuild: n } = e,
          r = (0, d.e7)([u.ZP], () => u.ZP.getFlattenedGuildIds()),
          [l, a] = s.useMemo(
            () =>
              c()(t)
                .values()
                .sortBy((e) => {
                  let t = r.indexOf(e.guildId);
                  return -1 === t ? r.length : t;
                })
                .partition((e) => {
                  var t;
                  return (
                    (null !== (t = e.overrideMode) && void 0 !== t
                      ? t
                      : e.mode) === b.AR.UseGreyDot
                  );
                })
                .value(),
            [t, r],
          ),
          o = s.useCallback(
            (e) => {
              var i;
              return n(
                e,
                (null !== (i = t[e].overrideMode) && void 0 !== i
                  ? i
                  : t[e].mode) === b.AR.UseGreyDot
                  ? b.AR.KeepAsIs
                  : b.AR.UseGreyDot,
              );
            },
            [n, t],
          );
        return (0, i.jsxs)("div", {
          className: N.container,
          children: [
            (0, i.jsx)(p, {
              header: f.intl.string(f.t.tGGAdX),
              subheader: f.intl.string(f.t["e+d/vr"]),
              guildPlans: a,
              onClick: o,
            }),
            (0, i.jsx)(p, {
              header: f.intl.string(f.t.f6pf39),
              subheader: f.intl.string(f.t.izeB6e),
              guildPlans: l,
              onClick: o,
            }),
          ],
        });
      }
      function p(e) {
        let { header: t, subheader: n, guildPlans: s, onClick: r } = e;
        return (0, i.jsxs)("div", {
          className: N.column,
          children: [
            (0, i.jsxs)("div", {
              className: N.header,
              children: [
                (0, i.jsxs)(o.Text, {
                  className: N.__invalid_sectionTitle,
                  variant: "text-md/medium",
                  color: "header-primary",
                  children: [t, " (", s.length, ")"],
                }),
                (0, i.jsx)(o.Text, {
                  variant: "text-xs/normal",
                  color: "header-secondary",
                  children: n,
                }),
              ],
            }),
            (0, i.jsx)(o.Scroller, {
              className: N.scroller,
              children: (0, i.jsx)("div", {
                className: N.guilds,
                children: s.map((e) =>
                  (0, i.jsx)(C, { plan: e, onClick: r }, e.guildId),
                ),
              }),
            }),
          ],
        });
      }
      function C(e) {
        var t;
        let { plan: n, onClick: s } = e,
          r = (0, d.e7)([h.Z], () => h.Z.getGuild(n.guildId));
        if (null == r) return null;
        let a =
          (null !== (t = n.overrideMode) && void 0 !== t ? t : n.mode) ===
          b.AR.UseGreyDot;
        function c() {
          g.default.track(v.rMx.NOTIFICATION_MIGRATION_GUILD_CHANGED, {
            ...(0, m.hH)(n.guildId),
            is_selected: !a,
            is_muted: j.ZP.isMuted(n.guildId),
            notification_setting: j.ZP.getMessageNotifications(n.guildId),
          }),
            s(n.guildId);
        }
        return (0, i.jsx)(o.Tooltip, {
          text: (0, i.jsxs)("div", {
            children: [
              (0, i.jsx)(o.Text, {
                variant: "text-md/semibold",
                color: "header-primary",
                children: r.name,
              }),
              (0, i.jsxs)("div", {
                className: N.tooltipRow,
                children: [
                  (0, i.jsx)(o.ChatIcon, {
                    size: "xxs",
                    color: "currentColor",
                  }),
                  (0, i.jsx)(o.Text, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    children: n.messagePain
                      ? f.intl.string(f.t["3EQSoK"])
                      : f.intl.string(f.t["CaR/Eh"]),
                  }),
                ],
              }),
              (0, i.jsxs)("div", {
                className: N.tooltipRow,
                children: [
                  (0, i.jsx)(o.FriendsIcon, {
                    size: "xxs",
                    color: "currentColor",
                  }),
                  (0, i.jsx)(o.Text, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    children: n.visitsALot
                      ? f.intl.string(f.t["6dgvsb"])
                      : f.intl.string(f.t.fgedbG),
                  }),
                ],
              }),
              (0, i.jsxs)("div", {
                className: N.tooltipRow,
                children: [
                  (0, i.jsx)(o.BellIcon, {
                    size: "xxs",
                    color: "currentColor",
                  }),
                  (0, i.jsx)(o.Text, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    children: n.muted
                      ? f.intl.string(f.t.rdTrHx)
                      : f.intl.string(f.t.sdFUj4),
                  }),
                ],
              }),
            ],
          }),
          "aria-label": n.debugReason,
          tooltipClassName: N.tooltip,
          children: (e) =>
            (0, i.jsxs)(o.Clickable, {
              ...e,
              className: l()(N.guild, a ? N.selected : void 0),
              onClick: c,
              children: [
                (0, i.jsx)(o.CircleCheckIcon, {
                  size: "xs",
                  color: "currentColor",
                  className: N.checkmark,
                  secondaryColor: "white",
                }),
                (0, i.jsx)(x.Z, {
                  "aria-hidden": !0,
                  className: N.guildIcon,
                  guild: r,
                  size: x.Z.Sizes.MEDIUM,
                  active: !0,
                  tabIndex: -1,
                }),
              ],
            }),
        });
      }
    },
    273236: function (e, t, n) {
      n(47120);
      var i = n(200651),
        s = n(192379),
        r = n(120356),
        l = n.n(r),
        a = n(995295),
        c = n(481060),
        d = n(388032),
        o = n(312327),
        m = n(531570);
      function x(e) {
        let { text: t, className: n, hidden: s } = e;
        return (0, i.jsxs)("div", {
          className: l()(n, o.tip, { [o.hidden]: s }),
          children: [
            (0, i.jsx)(c.Text, {
              className: o.__invalid_tipText,
              variant: "text-sm/normal",
              color: "text-secondary",
              children: t,
            }),
            (0, i.jsx)("div", { className: o.tipLine }),
          ],
        });
      }
      function h(e) {
        let { grey: t, mention: n, name: s } = e;
        return (0, i.jsxs)("div", {
          className: l()(o.channel, { [o.grey]: t, [o.mention]: n }),
          children: [
            (0, i.jsx)(c.TextIcon, {
              size: "xs",
              color: "currentColor",
              className: o.channelIcon,
            }),
            (0, i.jsx)(c.Text, {
              variant: "text-md/medium",
              className: o.channelName,
              children: s,
            }),
          ],
        });
      }
      t.Z = s.forwardRef(function (e, t) {
        let {} = e,
          [r, l] = s.useState("before"),
          [u, j] = s.useState(!1),
          [g, b] = s.useState(!1);
        s.useImperativeHandle(t, () => ({
          maybeChangeToAfterTab: () => (!g && v("after"), g),
        }));
        let v = s.useCallback((e) => {
          j(!0),
            setTimeout(() => {
              a.unstable_batchedUpdates(() => {
                "after" === e && b(!0), j(!1), l(e);
              });
            }, 400);
        }, []);
        return (0, i.jsxs)(c.Scroller, {
          className: m.content,
          children: [
            (0, i.jsxs)("div", {
              className: m.header,
              children: [
                (0, i.jsx)(c.BellIcon, {
                  size: "custom",
                  color: "currentColor",
                  width: 40,
                  height: 40,
                }),
                (0, i.jsx)(c.Heading, {
                  variant: "heading-xl/semibold",
                  color: "header-primary",
                  children: d.intl.string(d.t.c0Fhpa),
                }),
                (0, i.jsx)(c.Text, {
                  className: m.__invalid_subtitle,
                  variant: "text-md/normal",
                  color: "header-secondary",
                  children: d.intl.string(d.t.dKPfBQ),
                }),
              ],
            }),
            (0, i.jsxs)("div", {
              className: o.container,
              children: [
                (0, i.jsxs)("div", {
                  className: o.tabs,
                  children: [
                    (0, i.jsx)("div", {
                      className: o.tabBackground,
                      style: { left: "before" === r ? 0 : "50%" },
                    }),
                    (0, i.jsx)(c.Clickable, {
                      className: o.tab,
                      onClick: () => v("before"),
                      children: (0, i.jsx)(c.Text, {
                        variant: "text-sm/medium",
                        color: "before" === r ? "header-primary" : "text-muted",
                        children: d.intl.string(d.t.sLv7LC),
                      }),
                    }),
                    (0, i.jsx)(c.Clickable, {
                      className: o.tab,
                      onClick: () => v("after"),
                      children: (0, i.jsx)(c.Text, {
                        variant: "text-sm/medium",
                        color: "after" === r ? "header-primary" : "text-muted",
                        children: d.intl.string(d.t.R8eSY2),
                      }),
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: o.previewContainer,
                  children: [
                    (0, i.jsxs)("div", {
                      className: o.guilds,
                      children: [
                        (0, i.jsx)("div", {
                          className: o.unreadGuild,
                          children: (0, i.jsx)("img", {
                            src: n(180681),
                            width: 36,
                            height: 36,
                            alt: "Example Guild Icon",
                          }),
                        }),
                        (0, i.jsx)("div", {
                          className: "after" === r ? o.guild : o.unreadGuild,
                          children: (0, i.jsx)("img", {
                            src: n(390115),
                            width: 36,
                            height: 36,
                            alt: "Example Guild Icon",
                          }),
                        }),
                        (0, i.jsx)("div", {
                          className: "after" === r ? o.guild : o.unreadGuild,
                          children: (0, i.jsx)("img", {
                            src: n(536411),
                            width: 36,
                            height: 36,
                            alt: "Example Guild Icon",
                          }),
                        }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      className: o.channels,
                      children: [
                        (0, i.jsx)(h, {
                          mention: !0,
                          name: d.intl.string(d.t.WFejRk),
                        }),
                        (0, i.jsx)(h, { name: d.intl.string(d.t.jqWm9f) }),
                        (0, i.jsx)(h, {
                          grey: "after" === r,
                          name: d.intl.string(d.t.p9z9Iy),
                        }),
                        (0, i.jsx)(h, {
                          grey: "after" === r,
                          name: d.intl.string(d.t["2bdWDw"]),
                        }),
                        (0, i.jsx)(h, { name: d.intl.string(d.t["Ci+Our"]) }),
                        (0, i.jsx)(h, {
                          grey: "after" === r,
                          name: d.intl.string(d.t["/7TEdn"]),
                        }),
                        (0, i.jsx)(h, {
                          grey: "after" === r,
                          name: d.intl.string(d.t["Ime/t7"]),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, i.jsx)(x, {
                  hidden: u || "after" === r,
                  className: o.tipBefore1,
                  text: d.intl.string(d.t.WrPMOD),
                }),
                (0, i.jsx)(x, {
                  hidden: u || "after" === r,
                  className: o.tipBefore2,
                  text: d.intl.string(d.t["pApL7+"]),
                }),
                (0, i.jsx)(x, {
                  hidden: u || "before" === r,
                  className: o.tipAfter1,
                  text: d.intl.string(d.t.eZb3iY),
                }),
                (0, i.jsx)(x, {
                  hidden: u || "before" === r,
                  className: o.tipAfter2,
                  text: d.intl.string(d.t.M3KrJS),
                }),
              ],
            }),
          ],
        });
      });
    },
    753521: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return g;
          },
        }),
        n(47120);
      var i = n(200651),
        s = n(192379),
        r = n(481060),
        l = n(626135),
        a = n(115345),
        c = n(57927),
        d = n(273236),
        o = n(931839),
        m = n(905987),
        x = n(789662),
        h = n(981631),
        u = n(388032),
        j = n(531570);
      function g(e) {
        let {
            onClose: t,
            transitionState: n,
            dismissable: c,
            guildPain: g,
            myUsage: v,
          } = e,
          [f, N] = s.useState(o.O.Intro),
          { submitted: _, submitting: p, saveSettings: C } = (0, a.vo)(t),
          { guildPlans: I, overrideGuild: T, getDebug: w } = (0, a.F6)(g, v),
          k = s.useRef(null);
        return (
          s.useEffect(() => {
            l.default.track(h.rMx.OPEN_MODAL, {
              type: "notification_migration_modal",
            });
          }, []),
          (0, i.jsxs)(r.ModalRoot, {
            className: j.__invalid_modal,
            transitionState: n,
            "aria-label": u.intl.string(u.t.HcoRu7),
            size: r.ModalSize.DYNAMIC,
            children: [
              (0, i.jsx)(o.Z, { selectedTab: f, onClick: N, submitted: _ }),
              f === o.O.Intro
                ? (0, i.jsx)(d.Z, { ref: k })
                : f === o.O.Customize
                  ? (0, i.jsx)(b, {
                      guildPlans: I,
                      overrideGuild: T,
                      getDebug: w,
                    })
                  : (0, i.jsx)(m.Z, {
                      count: Object.values(I).filter((e) => {
                        var t;
                        return (
                          (null !== (t = e.overrideMode) && void 0 !== t
                            ? t
                            : e.mode) === x.AR.UseGreyDot
                        );
                      }).length,
                    }),
              (0, i.jsxs)(r.ModalFooter, {
                className: j.buttons,
                children: [
                  (0, i.jsxs)("div", {
                    className: j.__invalid_left,
                    children: [
                      c || (f !== o.O.Tips && f !== o.O.Customize)
                        ? null
                        : (0, i.jsx)(r.Anchor, {
                            className: j.dismiss,
                            href: "https://dis.gd/better-muting",
                            children: (0, i.jsx)(r.Text, {
                              variant: "text-sm/semibold",
                              color: "interactive-normal",
                              children: u.intl.string(u.t.hvVgAQ),
                            }),
                          }),
                      c && f === o.O.Intro
                        ? (0, i.jsx)(r.Clickable, {
                            className: j.dismiss,
                            onClick: t,
                            children: (0, i.jsx)(r.Text, {
                              variant: "text-sm/semibold",
                              color: "interactive-normal",
                              children: u.intl.string(u.t.WAI6xs),
                            }),
                          })
                        : null,
                      c && f === o.O.Customize
                        ? (0, i.jsx)(r.Clickable, {
                            className: j.dismiss,
                            onClick: t,
                            children: (0, i.jsx)(r.Text, {
                              variant: "text-sm/semibold",
                              color: "interactive-normal",
                              children: u.intl.string(u.t["ETE/oK"]),
                            }),
                          })
                        : null,
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: j.right,
                    children: [
                      f === o.O.Customize
                        ? (0, i.jsx)(r.Text, {
                            className: j.warning,
                            variant: "text-xs/medium",
                            color: "text-muted",
                            children: u.intl.string(u.t.nlpqxM),
                          })
                        : null,
                      f !== o.O.Customize || _
                        ? null
                        : (0, i.jsxs)(r.Button, {
                            onClick: () => N(o.O.Intro),
                            color: r.Button.Colors.TRANSPARENT,
                            children: [
                              (0, i.jsx)(r.ArrowSmallLeftIcon, {
                                size: "xs",
                                color: "currentColor",
                              }),
                              " ",
                              u.intl.string(u.t["13/7kZ"]),
                            ],
                          }),
                      f === o.O.Intro
                        ? (0, i.jsxs)(r.Button, {
                            onClick: () => {
                              var e;
                              (null === (e = k.current) || void 0 === e
                                ? void 0
                                : e.maybeChangeToAfterTab()) &&
                                N(o.O.Customize);
                            },
                            children: [
                              u.intl.string(u.t.uw9zIy),
                              " ",
                              (0, i.jsx)(r.ArrowSmallRightIcon, {
                                size: "xs",
                                color: "currentColor",
                              }),
                            ],
                          })
                        : f === o.O.Customize
                          ? (0, i.jsxs)(r.Button, {
                              onClick: () => {
                                N(o.O.Tips), C(I);
                              },
                              children: [
                                u.intl.string(u.t["1Qm829"]),
                                " ",
                                (0, i.jsx)(r.CheckmarkLargeIcon, {
                                  size: "xs",
                                  color: "currentColor",
                                }),
                              ],
                            })
                          : (0, i.jsx)(r.Button, {
                              submitting: p,
                              onClick: t,
                              children: u.intl.string(u.t.cpT0Cg),
                            }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      }
      function b(e) {
        let { guildPlans: t, overrideGuild: n } = e;
        return (0, i.jsxs)(r.Scroller, {
          className: j.content,
          children: [
            (0, i.jsxs)("div", {
              className: j.header,
              children: [
                (0, i.jsx)(r.Heading, {
                  variant: "heading-xl/bold",
                  color: "header-primary",
                  children: u.intl.string(u.t["zBC2+f"]),
                }),
                (0, i.jsx)(r.Text, {
                  className: j.__invalid_subtitle,
                  variant: "text-md/medium",
                  color: "header-secondary",
                  children: u.intl.string(u.t["zE9e//"]),
                }),
              ],
            }),
            (0, i.jsx)(c.Z, { guildPlans: t, overrideGuild: n }),
          ],
        });
      }
    },
    931839: function (e, t, n) {
      n.d(t, {
        O: function () {
          return s;
        },
        Z: function () {
          return m;
        },
      });
      var i,
        s,
        r = n(200651);
      n(192379);
      var l = n(120356),
        a = n.n(l),
        c = n(481060),
        d = n(388032),
        o = n(910157);
      function m(e) {
        let { selectedTab: t, onClick: n, submitted: i } = e;
        return (0, r.jsxs)("div", {
          className: o.tabs,
          children: [
            (0, r.jsx)(x, {
              tab: 0,
              selectedTab: t,
              label: d.intl.string(d.t.JwwVrq),
              disabled: i,
              onClick: n,
            }),
            (0, r.jsx)(x, {
              tab: 1,
              selectedTab: t,
              label: d.intl.string(d.t["56vYWV"]),
              disabled: i,
              onClick: n,
            }),
            (0, r.jsx)(x, {
              tab: 2,
              selectedTab: t,
              label: d.intl.string(d.t["0l0rJi"]),
              disabled: !i,
              onClick: n,
            }),
          ],
        });
      }
      function x(e) {
        let { tab: t, selectedTab: n, label: i, disabled: s, onClick: l } = e;
        return s
          ? (0, r.jsxs)("div", {
              className: a()(o.tab, { [o.current]: n === t }),
              children: [
                (0, r.jsx)("div", { className: o.progressBar }),
                (0, r.jsx)(c.Text, {
                  variant: "text-xs/medium",
                  color: n === t ? "text-brand" : "text-muted",
                  children: i,
                }),
              ],
            })
          : (0, r.jsxs)(c.Clickable, {
              onClick: () => l(t),
              className: a()(o.tab, { [o.current]: n === t }),
              children: [
                (0, r.jsx)("div", { className: o.progressBar }),
                (0, r.jsx)(c.Text, {
                  variant: "text-xs/medium",
                  color: n === t ? "text-brand" : "text-muted",
                  children: i,
                }),
              ],
            });
      }
      ((i = s || (s = {}))[(i.Intro = 0)] = "Intro"),
        (i[(i.Customize = 1)] = "Customize"),
        (i[(i.Tips = 2)] = "Tips");
    },
    905987: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return b;
        },
      }),
        n(47120);
      var i = n(200651),
        s = n(192379),
        r = n(120356),
        l = n.n(r),
        a = n(442837),
        c = n(481060),
        d = n(430824),
        o = n(771845),
        m = n(259580),
        x = n(186523),
        h = n(553826),
        u = n(388032),
        j = n(531570),
        g = n(799420);
      function b(e) {
        let { count: t } = e,
          [n, r] = s.useState("server");
        return (0, i.jsxs)(c.Scroller, {
          className: j.content,
          children: [
            (0, i.jsxs)("div", {
              className: l()(j.header, g.header),
              children: [
                (0, i.jsx)(c.CircleCheckIcon, {
                  size: "custom",
                  color: "currentColor",
                  width: 40,
                  height: 40,
                }),
                (0, i.jsx)(c.Heading, {
                  variant: "heading-xl/bold",
                  color: "header-primary",
                  children: u.intl.format(u.t.Wyk03t, { count: t }),
                }),
                (0, i.jsx)(c.Text, {
                  className: j.__invalid_subtitle,
                  variant: "text-md/medium",
                  color: "header-secondary",
                  children: u.intl.string(u.t["jr/rn5"]),
                }),
              ],
            }),
            (0, i.jsxs)("div", {
              className: g.tabs,
              children: [
                (0, i.jsx)("div", {
                  className: g.tabBackground,
                  style: { left: "server" === n ? 0 : "50%" },
                }),
                (0, i.jsx)(c.Clickable, {
                  className: g.tab,
                  onClick: () => r("server"),
                  children: (0, i.jsx)(c.Text, {
                    variant: "text-sm/medium",
                    color: "server" === n ? "header-primary" : "text-muted",
                    children: u.intl.string(u.t.pS4WEh),
                  }),
                }),
                (0, i.jsx)(c.Clickable, {
                  className: g.tab,
                  onClick: () => r("channel"),
                  children: (0, i.jsx)(c.Text, {
                    variant: "text-sm/medium",
                    color: "channel" === n ? "header-primary" : "text-muted",
                    children: u.intl.string(u.t.UVxi0d),
                  }),
                }),
              ],
            }),
            (0, i.jsxs)("div", {
              className: g.container,
              children: [
                (0, i.jsx)(v, { hidden: "channel" === n }),
                (0, i.jsx)(f, { hidden: "server" === n }),
              ],
            }),
          ],
        });
      }
      function v(e) {
        let { hidden: t } = e,
          n = (0, a.e7)([d.Z, o.ZP], () => {
            var e;
            return null ===
              (e = d.Z.getGuild(o.ZP.getFlattenedGuildIds()[0])) || void 0 === e
              ? void 0
              : e.name;
          }),
          [r, x] = s.useState(0);
        return (
          s.useEffect(() => {
            if (t) return;
            let e = 0,
              n = [1500, 1e3, 1e3, 500].map((t, n) =>
                setTimeout(() => x(n + 1), (e += t)),
              );
            return () => {
              n.forEach((e) => clearTimeout(e)), setTimeout(() => x(0), 150);
            };
          }, [t]),
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)("div", {
                className: g.containerInner,
                children: (0, i.jsxs)("div", {
                  className: l()(g.serversSection, {
                    [g.hidden]: t,
                    [g.showBigMenu]: r >= 1,
                    [g.fadeChannels]: r >= 1,
                    [g.showModal]: r >= 3,
                  }),
                  children: [
                    (0, i.jsxs)("div", {
                      className: g.channels,
                      children: [
                        (0, i.jsxs)("div", {
                          className: g.guildName,
                          children: [
                            (0, i.jsx)(c.Text, {
                              variant: "text-md/medium",
                              color: "interactive-active",
                              lineClamp: 1,
                              children: null != n ? n : "Keyboard Nerds",
                            }),
                            r >= 1
                              ? (0, i.jsx)(c.XSmallIcon, {
                                  size: "md",
                                  color: "currentColor",
                                  className: g.icon,
                                })
                              : (0, i.jsx)(m.Z, {
                                  className: l()(g.__invalid_downCaret, g.icon),
                                  width: 24,
                                  height: 24,
                                }),
                          ],
                        }),
                        (0, i.jsx)(_, { name: u.intl.string(u.t.jqWm9f) }),
                        (0, i.jsx)(_, { name: u.intl.string(u.t.WFejRk) }),
                        (0, i.jsx)(_, {
                          grey: !0,
                          name: u.intl.string(u.t.p9z9Iy),
                        }),
                        (0, i.jsx)(_, {
                          grey: !0,
                          name: u.intl.string(u.t["2bdWDw"]),
                        }),
                        (0, i.jsx)(_, {
                          grey: !0,
                          name: u.intl.string(u.t["Ci+Our"]),
                        }),
                        (0, i.jsx)(_, {
                          nodot: !0,
                          name: u.intl.string(u.t["/7TEdn"]),
                        }),
                        (0, i.jsx)(_, {
                          nodot: !0,
                          name: u.intl.string(u.t["Ime/t7"]),
                        }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      className: g.bigMenu,
                      children: [
                        (0, i.jsx)(p, {
                          text: u.intl.string(u.t.BN75l5),
                          icon: (0, i.jsx)(c.GroupPlusIcon, {
                            size: "sm",
                            className: g.icon,
                          }),
                        }),
                        (0, i.jsx)("div", { className: g.divider }),
                        (0, i.jsx)(p, {
                          active: r >= 2,
                          text: u.intl.string(u.t.h850Sk),
                          icon: (0, i.jsx)(c.BellIcon, {
                            size: "sm",
                            color: "currentColor",
                            className: g.icon,
                          }),
                        }),
                        (0, i.jsx)(p, {
                          text: u.intl.string(u.t.BayiAg),
                          icon: (0, i.jsx)(c.ShieldIcon, {
                            size: "sm",
                            color: "currentColor",
                            className: g.icon,
                          }),
                        }),
                        (0, i.jsx)(p, {
                          text: u.intl.string(u.t["154/bG"]),
                          icon: (0, i.jsx)(c.SettingsIcon, {
                            size: "sm",
                            color: "currentColor",
                            className: g.icon,
                          }),
                        }),
                        (0, i.jsx)(p, {
                          text: u.intl.string(u.t.qyjZub),
                          icon: (0, i.jsx)(c.CalendarPlusIcon, {
                            size: "sm",
                            color: "currentColor",
                            className: g.icon,
                          }),
                        }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      className: g.notifModal,
                      children: [
                        (0, i.jsx)(c.Text, {
                          className: g.modalHeader,
                          variant: "text-md/medium",
                          color: "interactive-active",
                          children: u.intl.string(u.t.h850Sk),
                        }),
                        (0, i.jsxs)("div", {
                          className: g.notifTabs,
                          children: [
                            (0, i.jsxs)("div", {
                              className: g.notifTab,
                              children: [
                                (0, i.jsx)(c.CircleCheckIcon, {
                                  size: "md",
                                  color: "currentColor",
                                }),
                                (0, i.jsx)(c.Text, {
                                  variant: "text-xs/medium",
                                  color: "text-muted",
                                  lineClamp: 1,
                                  children: u.intl.string(u.t.hZrr6u),
                                }),
                              ],
                            }),
                            (0, i.jsxs)("div", {
                              className: g.activeNotifTab,
                              children: [
                                (0, i.jsx)(c.AtIcon, {
                                  size: "md",
                                  color: "currentColor",
                                }),
                                (0, i.jsx)(c.Text, {
                                  variant: "text-xs/medium",
                                  color: "interactive-active",
                                  lineClamp: 1,
                                  children: u.intl.string(u.t.y59NJi),
                                }),
                              ],
                            }),
                            (0, i.jsxs)("div", {
                              className: g.notifTab,
                              children: [
                                (0, i.jsx)(c.BellSlashIcon, {
                                  size: "md",
                                  color: "currentColor",
                                }),
                                (0, i.jsx)(c.Text, {
                                  variant: "text-xs/medium",
                                  color: "text-muted",
                                  lineClamp: 1,
                                  children: u.intl.string(u.t["pGn/bG"]),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, i.jsxs)("div", {
                          className: g.controls,
                          children: [
                            (0, i.jsxs)("div", {
                              className: g.control,
                              children: [
                                (0, i.jsx)("div", {
                                  className: g.controlPlaceholder,
                                }),
                                (0, i.jsx)("div", { className: g.switchOn }),
                              ],
                            }),
                            (0, i.jsxs)("div", {
                              className: g.control,
                              children: [
                                (0, i.jsx)("div", {
                                  className: g.controlPlaceholder,
                                }),
                                (0, i.jsx)("div", { className: g.switchOff }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, i.jsx)(N, {
                text: u.intl.string(u.t["C//fOz"]),
                className: g.tipServers2,
                hidden: t || r < 4,
              }),
            ],
          })
        );
      }
      function f(e) {
        let { hidden: t } = e,
          [n, r] = s.useState(0);
        return (
          s.useEffect(() => {
            if (t) return;
            let e = 0,
              n = [1e3, 1e3, 1e3, 800, 800].map((t, n) =>
                setTimeout(() => r(n + 1), (e += t)),
              );
            return () => {
              n.forEach((e) => clearTimeout(e)), setTimeout(() => r(0), 150);
            };
          }, [t]),
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)("div", {
                className: g.containerInner,
                children: (0, i.jsxs)("div", {
                  className: l()(g.channelsSection, {
                    [g.hidden]: t,
                    [g.fadeOtherChannels]: n >= 2,
                    [g.showLeftMenu]: n >= 2,
                    [g.showRightMenu]: n >= 3,
                  }),
                  children: [
                    (0, i.jsxs)("div", {
                      className: g.channels,
                      children: [
                        (0, i.jsx)(_, {
                          selected: n >= 1,
                          grey: n >= 5,
                          name: u.intl.string(u.t.jqWm9f),
                        }),
                        (0, i.jsx)(_, { name: u.intl.string(u.t.WFejRk) }),
                        (0, i.jsx)(_, {
                          grey: !0,
                          name: u.intl.string(u.t.p9z9Iy),
                        }),
                        (0, i.jsx)(_, {
                          grey: !0,
                          name: u.intl.string(u.t["2bdWDw"]),
                        }),
                        (0, i.jsx)(_, {
                          grey: !0,
                          name: u.intl.string(u.t["Ci+Our"]),
                        }),
                        (0, i.jsx)(_, {
                          nodot: !0,
                          name: u.intl.string(u.t["/7TEdn"]),
                        }),
                        (0, i.jsx)(_, {
                          nodot: !0,
                          name: u.intl.string(u.t["Ime/t7"]),
                        }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      className: l()(g.menu, g.leftMenu),
                      children: [
                        (0, i.jsx)(p, {
                          small: !0,
                          text: u.intl.string(u.t["w4m94+"]),
                          icon: (0, i.jsx)(m.Z, {
                            className: g.caret,
                            width: 12,
                            height: 12,
                          }),
                        }),
                        (0, i.jsx)(p, {
                          small: !0,
                          text: u.intl.string(u.t.HcoRu7),
                          active: n >= 3,
                          icon: (0, i.jsx)(m.Z, {
                            className: g.caret,
                            width: 12,
                            height: 12,
                          }),
                        }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      className: l()(g.menu, g.rightMenu),
                      children: [
                        (0, i.jsx)(p, {
                          small: !0,
                          text: u.intl.string(u.t.hZrr6u),
                          icon:
                            n <= 4
                              ? (0, i.jsx)(h.Z, {
                                  className: g.icon,
                                  width: 12,
                                  height: 12,
                                })
                              : (0, i.jsx)(x.Z, {
                                  className: g.icon,
                                  width: 12,
                                  height: 12,
                                }),
                          active: n <= 4,
                        }),
                        (0, i.jsx)(p, {
                          small: !0,
                          text: u.intl.string(u.t.y59NJi),
                          icon:
                            n >= 5
                              ? (0, i.jsx)(h.Z, {
                                  className: g.icon,
                                  width: 12,
                                  height: 12,
                                })
                              : (0, i.jsx)(x.Z, {
                                  className: g.icon,
                                  width: 12,
                                  height: 12,
                                }),
                          active: n >= 5,
                        }),
                        (0, i.jsx)(p, {
                          small: !0,
                          text: u.intl.string(u.t["pGn/bG"]),
                          icon: (0, i.jsx)(x.Z, {
                            className: g.icon,
                            width: 12,
                            height: 12,
                          }),
                        }),
                        (0, i.jsx)(p, {
                          small: !0,
                          text: u.intl.string(u.t["32yow8"]),
                          icon: (0, i.jsx)(x.Z, {
                            className: g.icon,
                            width: 12,
                            height: 12,
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, i.jsx)(N, {
                text: u.intl.string(u.t["5Il5fn"]),
                className: g.tipChannels1,
                hidden: t || n < 4,
              }),
              (0, i.jsx)(N, {
                text: u.intl.string(u.t["+ROcrq"]),
                className: g.tipChannels2,
                hidden: t || n < 4,
              }),
            ],
          })
        );
      }
      function N(e) {
        let { text: t, className: n, hidden: s } = e;
        return (0, i.jsxs)("div", {
          className: l()(n, g.tip, { [g.hidden]: s }),
          children: [
            (0, i.jsx)(c.Text, {
              className: g.__invalid_tipText,
              variant: "text-sm/normal",
              color: "text-secondary",
              children: t,
            }),
            (0, i.jsx)("div", { className: g.tipLine }),
          ],
        });
      }
      function _(e) {
        let { grey: t, nodot: n, selected: s, name: r } = e;
        return (0, i.jsxs)("div", {
          className: l()(g.channel, {
            [g.grey]: t || n,
            [g.nodot]: n,
            [g.selected]: s,
          }),
          children: [
            (0, i.jsx)(c.TextIcon, {
              size: "xs",
              color: "currentColor",
              className: g.channelIcon,
            }),
            (0, i.jsx)(c.Text, {
              variant: "text-md/medium",
              className: g.channelName,
              children: r,
            }),
          ],
        });
      }
      function p(e) {
        let { text: t, active: n, small: s, icon: r } = e;
        return (0, i.jsxs)("div", {
          className: l()(g.menuItem, { [g.active]: n }),
          children: [
            (0, i.jsx)(c.Text, {
              variant: s ? "text-xs/normal" : "text-sm/normal",
              color: n ? "always-white" : "interactive-normal",
              children: t,
            }),
            r,
          ],
        });
      }
    },
    129746: function (e, t, n) {
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
    312327: function (e, t, n) {
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
    531570: function (e, t, n) {
      e.exports = {
        content: "content_ee099b",
        header: "header_ee099b",
        buttons: "buttons_ee099b",
        right: "right_ee099b",
        warning: "warning_ee099b",
        dismiss: "dismiss_ee099b",
      };
    },
    910157: function (e, t, n) {
      e.exports = {
        tabs: "tabs_df66dd",
        tab: "tab_df66dd",
        progressBar: "progressBar_df66dd",
        current: "current_df66dd",
      };
    },
    799420: function (e, t, n) {
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
//# sourceMappingURL=b4191480fdf0da26c085.js.map
