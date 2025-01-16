"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["56826"],
  {
    378712: function (n, e, t) {
      t.d(e, {
        J: function () {
          return u;
        },
      });
      var i = t(544891),
        r = t(359119),
        l = t(981631);
      function u(n) {
        return i.tn.post({
          url: l.ANM.ADD_SAFETY_WARNING(n),
          body: { safety_warning_type: r.pj.LIKELY_ATO },
          rejectWithError: !1,
        });
      }
    },
    985588: function (n, e, t) {
      t.d(e, {
        s: function () {
          return u;
        },
      });
      var i = t(442837),
        r = t(314897),
        l = t(699516);
      function u(n) {
        return (0, i.e7)([l.Z, r.default], () => {
          let e = l.Z.isFriend(n.id),
            t = r.default.getId() === n.id;
          return e && !t && !n.bot && !n.system && !n.isProvisional;
        });
      }
    },
    461535: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return x;
        },
      }),
        t(47120);
      var i = t(200651);
      t(192379);
      var r = t(442837),
        l = t(481060),
        u = t(45114),
        a = t(456269),
        o = t(344185),
        d = t(569471),
        s = t(131704),
        c = t(324067),
        f = t(306680),
        I = t(981631),
        g = t(388032);
      function x(n) {
        let e = (function (n) {
          let e = (0, a.n2)(n.guild_id, n.id),
            t = (0, r.e7)(
              [f.ZP, c.Z, o.Z, d.Z],
              () => {
                if (n.isForumPost()) return f.ZP.isForumPostUnread(n.id);
                if (n.type !== I.d4z.GUILD_CATEGORY)
                  return f.ZP.hasUnreadOrMentions(n.id);
                {
                  let e = c.Z.getCategories(n.getGuildId());
                  if (null == e[n.id]) return !1;
                  if (
                    e[n.id].some((n) => {
                      let { channel: e } = n;
                      return (
                        (0, s.Em)(e.type) && f.ZP.hasUnreadOrMentions(e.id)
                      );
                    })
                  )
                    return !0;
                  let t = new Set(e[n.id].map((n) => n.channel.id)),
                    i = o.Z.getThreadsForGuild(n.guild_id);
                  for (let n in i)
                    if (t.has(n)) {
                      for (let e in i[n])
                        if (
                          d.Z.hasJoined(e) &&
                          !d.Z.isMuted(e) &&
                          f.ZP.hasUnreadOrMentions(e)
                        )
                          return !0;
                    }
                  return !1;
                }
              },
              [n],
            );
          return n.isForumLikeChannel() ? e > 0 : t;
        })(n);
        return (0, i.jsx)(l.MenuItem, {
          id: "mark-channel-read",
          label: g.intl.string(g.t.e6RscX),
          action: function () {
            (0, u.U6)(n);
          },
          disabled: !e,
        });
      }
    },
    895563: function (n, e, t) {
      t.d(e, {
        P: function () {
          return _;
        },
        l: function () {
          return M;
        },
      }),
        t(47120);
      var i = t(200651);
      t(192379);
      var r = t(392711),
        l = t.n(r),
        u = t(442837),
        a = t(481060),
        o = t(984933),
        d = t(853856),
        s = t(117984),
        c = t(593214),
        f = t(362658),
        I = t(981631),
        g = t(388032);
      function x(n, e) {
        return n.type === I.d4z.GROUP_DM
          ? e
            ? g.intl.string(g.t["0BWmSE"])
            : g.intl.string(g.t.uuVTOD)
          : n.type === I.d4z.DM
            ? e
              ? g.intl.string(g.t["2wfKGh"])
              : g.intl.string(g.t.wPbAsb)
            : e
              ? g.intl.string(g.t.Bou7lZ)
              : g.intl.string(g.t["4wcdEx"]);
      }
      function M(n) {
        let e = (0, u.e7)([o.ZP], () => o.ZP.getChannels(I.I_8))[
            I.d4z.GUILD_CATEGORY
          ],
          { isFavoritesPerk: t } = (0, f.z)("58e21a_1"),
          { notifyFavoriteAdded: r } = (0, c.up)();
        if (!(0, c.li)(n)) return null;
        let [[d], g] = l().partition(e, (n) => "null" === n.channel.id);
        function M(e) {
          r(), (0, s.kj)(n.id, e);
        }
        return 0 === g.length
          ? (0, i.jsx)(a.MenuItem, {
              id: "favorite-channel",
              label: x(n, !1),
              action: () => M(null),
            })
          : (0, i.jsxs)(a.MenuItem, {
              id: "favorite-channel",
              label: x(n, !1),
              action: () => M(null),
              children: [
                t &&
                  (0, i.jsx)(a.MenuGroup, {
                    children: (0, i.jsx)(
                      a.MenuItem,
                      {
                        id: "favorite-".concat(d.channel.id),
                        label: d.channel.name,
                        action: () =>
                          M("null" === d.channel.id ? null : d.channel.id),
                      },
                      d.channel.id,
                    ),
                  }),
                (0, i.jsx)(a.MenuGroup, {
                  children: g.map((n) =>
                    (0, i.jsx)(
                      a.MenuItem,
                      {
                        id: "favorite-".concat(n.channel.id),
                        label: n.channel.name,
                        action: () => M(n.channel.id),
                      },
                      n.channel.id,
                    ),
                  ),
                }),
              ],
            });
      }
      function _(n) {
        let e = (0, u.e7)([d.Z], () => d.Z.isFavorite(n.id));
        return __OVERLAY__ || !e
          ? null
          : (0, i.jsx)(a.MenuItem, {
              id: "favorite-channel",
              label: x(n, !0),
              color: "danger",
              action: () =>
                n.type === I.d4z.GUILD_CATEGORY
                  ? (0, a.openModalLazy)(async () => {
                      let { default: e } = await t
                        .e("37720")
                        .then(t.bind(t, 357632));
                      return (t) =>
                        (0, i.jsx)(e, {
                          ...t,
                          onConfirm: () => {
                            t.onClose(), (0, s.oC)(n.id);
                          },
                          channel: n,
                        });
                    })
                  : (0, s.oC)(n.id),
            });
      }
    },
    212205: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return s;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(442837),
        l = t(481060),
        u = t(914010),
        a = t(362658),
        o = t(981631),
        d = t(388032);
      function s(n) {
        let e = (0, r.e7)([u.Z], () => u.Z.getGuildId()),
          s = n.type === o.d4z.GUILD_CATEGORY,
          { isFavoritesPerk: c } = (0, a.z)("useChannelFavoriteSetNickname");
        return __OVERLAY__ || e !== o.I_8
          ? null
          : (0, i.jsx)(l.MenuItem, {
              id: "set-channel-nickname",
              label:
                c && s ? d.intl.string(d.t.xXYKiI) : d.intl.string(d.t.dilOFx),
              action: function () {
                (0, l.openModalLazy)(async () => {
                  let { default: e } = await t
                    .e("46161")
                    .then(t.bind(t, 238716));
                  return (t) =>
                    (0, i.jsx)(e, {
                      ...t,
                      channelId: n.id,
                      heading:
                        c && s
                          ? d.intl.string(d.t.xXYKiI)
                          : d.intl.string(d.t.dilOFx),
                      formTitle:
                        c && s
                          ? d.intl.string(d.t.OCAkGB)
                          : d.intl.string(d.t["621LJC"]),
                      allowReset: !(c && s),
                    });
                });
              },
            });
      }
    },
    62420: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return d;
        },
      }),
        t(653041),
        t(47120);
      var i = t(200651);
      t(192379);
      var r = t(481060),
        l = t(117984),
        u = t(593214),
        a = t(362658),
        o = t(388032);
      function d(n) {
        let e = (0, u.Mt)(),
          t = (0, u.s4)(n.id),
          d = (0, u.zv)(),
          { isFavoritesPerk: s } = (0, a.z)("useChannelMoveToCategory");
        if (__OVERLAY__ || !e || null == t || !s) return null;
        let [c, f] = (function (n) {
          let e = [],
            t = null;
          for (let i of n) null == i.id ? (t = i) : e.push(i);
          return [t, e];
        })(d.filter((n) => n.id !== (null == t ? void 0 : t.parentId)));
        function I(n) {
          null != t && (0, l.uA)(t.id, n);
        }
        return null == c && 0 === f.length
          ? null
          : (0, i.jsxs)(r.MenuItem, {
              id: "move-to-category",
              label: o.intl.string(o.t.FAplmp),
              children: [
                null != c &&
                  (0, i.jsx)(r.MenuGroup, {
                    children: (0, i.jsx)(r.MenuItem, {
                      id: "favorite-uncategorized",
                      label: c.name,
                      action: () => I(c.id),
                    }),
                  }),
                f.length > 0 &&
                  (0, i.jsx)(r.MenuGroup, {
                    children: f.map((n) => {
                      let { id: e, name: t } = n;
                      return (0, i.jsx)(
                        r.MenuItem,
                        {
                          id: "favorite-".concat(e),
                          label: t,
                          action: () => I(e),
                        },
                        e,
                      );
                    }),
                  }),
              ],
            });
      }
    },
    455395: function (n, e, t) {
      t.d(e, {
        i: function () {
          return s;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(481060),
        l = t(359119),
        u = t(832239),
        a = t(237292),
        o = t(100932),
        d = t(388032);
      function s(n) {
        let e = (0, o.x)(n),
          t = (0, a.y0)({
            location: "inappropriate_conversation_context_menu",
          });
        if (null === e || !t) return null;
        let { isTier1: s, isTier2: c } = e;
        return (0, i.jsxs)(i.Fragment, {
          children: [
            !s &&
              (0, i.jsx)(r.MenuItem, {
                id: "mark-as-tier-1-inappro",
                label: d.intl.string(d.t.EuzCER),
                action: () =>
                  (0, u.KK)(n.id, l.pj.INAPPROPRIATE_CONVERSATION_TIER_1),
              }),
            !c &&
              (0, i.jsx)(r.MenuItem, {
                id: "mark-as-tier-2-inappro",
                label: d.intl.string(d.t["tBw/1t"]),
                action: () =>
                  (0, u.KK)(n.id, l.pj.INAPPROPRIATE_CONVERSATION_TIER_2),
              }),
          ],
        });
      }
    },
    750850: function (n, e, t) {
      t.d(e, {
        e: function () {
          return s;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(442837),
        l = t(481060),
        u = t(378712),
        a = t(605984),
        o = t(594174),
        d = t(388032);
      function s(n) {
        let e = (0, r.e7)([o.default], () => o.default.getCurrentUser()),
          t = (0, a.k)(n.id);
        return (null == e ? void 0 : e.isStaff()) === !0 &&
          n.isDM() &&
          null == t
          ? (0, i.jsx)(i.Fragment, {
              children: (0, i.jsx)(l.MenuItem, {
                id: "mark-as-likely-ato",
                label: d.intl.string(d.t.AWKKgY),
                action: () => (0, u.J)(n.id),
              }),
            })
          : null;
      }
    },
    581052: function (n, e, t) {
      t.d(e, {
        V: function () {
          return d;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(442837),
        l = t(481060),
        u = t(823162),
        a = t(594174),
        o = t(388032);
      function d(n) {
        let e = (0, r.e7)([a.default], () => a.default.getCurrentUser());
        return (null == e ? void 0 : e.isStaff()) !== !0
          ? null
          : (0, i.jsxs)(i.Fragment, {
              children: [
                !n.isMessageRequest &&
                  (0, i.jsx)(l.MenuItem, {
                    id: "mark-as-message-request",
                    label: o.intl.string(o.t.L6623t),
                    action: () => (0, u.Xy)(n.id),
                  }),
                (0, i.jsx)(l.MenuItem, {
                  id: "clear-message-request",
                  label: o.intl.string(o.t["85YWlZ"]),
                  action: () => (0, u.qR)(n.id),
                }),
              ],
            });
      }
    },
    875252: function (n, e, t) {
      t.d(e, {
        H: function () {
          return c;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(442837),
        l = t(481060),
        u = t(378298),
        a = t(359119),
        o = t(832239),
        d = t(594174),
        s = t(388032);
      function c(n) {
        let e = (0, r.e7)([d.default], () => d.default.getCurrentUser()),
          t = (0, r.e7)([a.ZP], () => a.ZP.getChannelSafetyWarnings(n.id));
        return (null == e ? void 0 : e.isStaff()) !== !0 ||
          null == t ||
          0 === t.length
          ? null
          : (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(l.MenuItem, {
                  id: "delete-safety-warnings",
                  label: s.intl.string(s.t.g7o9bm),
                  action: () => (0, o.Vp)(n.id),
                }),
                (0, i.jsx)(l.MenuItem, {
                  id: "clear-safety-warnings",
                  label: s.intl.string(s.t.VuSvGh),
                  action: () => (0, u.wS)(n.id),
                }),
              ],
            });
      }
    },
    583332: function (n, e, t) {
      t.d(e, {
        g: function () {
          return s;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(442837),
        l = t(481060),
        u = t(378298),
        a = t(88101),
        o = t(594174),
        d = t(388032);
      function s(n) {
        let e = (0, r.e7)([o.default], () => o.default.getCurrentUser()),
          t = (0, a.P)(n.id);
        return (null == e ? void 0 : e.isStaff()) === !0 &&
          n.isDM() &&
          null == t
          ? (0, i.jsx)(i.Fragment, {
              children: (0, i.jsx)(l.MenuItem, {
                id: "mark-as-stranger-danger",
                label: d.intl.string(d.t.CgWmmZ),
                action: () => (0, u.Dl)(n.id),
              }),
            })
          : null;
      }
    },
    122074: function (n, e, t) {
      t.d(e, {
        U: function () {
          return N;
        },
        Uf: function () {
          return E;
        },
        ng: function () {
          return T;
        },
      }),
        t(47120);
      var i = t(200651),
        r = t(192379),
        l = t(442837),
        u = t(704215),
        a = t(481060),
        o = t(436774),
        d = t(706140),
        s = t(9156),
        c = t(594174),
        f = t(74538),
        I = t(759198),
        g = t(11352),
        x = t(213931),
        M = t(767157),
        _ = t(112440),
        h = t(671105),
        m = t(552958),
        p = t(981631),
        v = t(921944),
        j = t(871465),
        C = t(388032),
        Z = t(150626);
      function T(n, e) {
        let t = g.Y.useExperiment(
            { location: "guild_context_menu" },
            { autoTrackExposure: !0 },
          ),
          r = S(
            n,
            void 0,
            u.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE,
            t.nestedEntry ? "trailing" : "top",
          ),
          l = (t.nestedEntry && e) || (!t.nestedEntry && !e);
        return (0, i.jsx)(i.Fragment, { children: l && r });
      }
      function E(n, e, t) {
        return S(n, e, u.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GDM_DM_BADGE, t);
      }
      function N() {
        let n = g.Y.useExperiment(
            { location: "guild_context_menu" },
            { autoTrackExposure: !0 },
          ),
          [e] = (0, d.cv)([u.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE]);
        return (0, i.jsx)(i.Fragment, {
          children:
            n.enabled &&
            n.nestedEntry &&
            e === u.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE &&
            (0, i.jsx)(a.TextBadge, {
              className: Z.newBadge,
              text: C.intl.string(C.t.y2b7CA),
            }),
        });
      }
      function S(n, e, u, T) {
        var E, N;
        let S = (0, h.OR)(n),
          A = (0, h._c)(n, e),
          U = (0, l.e7)([c.default], () => c.default.getCurrentUser()),
          O = (0, l.e7)([s.ZP], () => s.ZP.isMuted(n), [n]),
          y = f.ZP.canUseCustomNotificationSounds(U),
          b = y ? (null != A ? A : S) : j.YC.CLASSIC,
          G = g.Y.useExperiment(
            { location: "guild_context_menu" },
            { autoTrackExposure: !0 },
          ).enabled,
          [P, R] = r.useState(!1),
          { playSound: D } = (0, m.Z)(),
          [F, L] = (0, d.cv)([u]),
          k = F === u;
        if (
          (r.useEffect(
            () => () => {
              P && L(v.L.TAKE_ACTION);
            },
            [P, L],
          ),
          !G)
        )
          return null;
        let w = (t) => {
            if ((D(t), L(v.L.TAKE_ACTION), !y && t !== j.YC.CLASSIC)) {
              (0, M.Z)(t, "contextMenu"), (0, _.Z)();
              return;
            }
            null != e
              ? (0, x.M)(n, e, b, t, "contextMenu")
              : (0, x.t)(n, b, t, "contextMenu");
          },
          Y = y ? a.Text : I.Z,
          z = (0, j.LB)(),
          B =
            null !==
              (N =
                null === (E = z.find((n) => n.value === b)) || void 0 === E
                  ? void 0
                  : E.label) && void 0 !== N
              ? N
              : C.intl.string(C.t.p3Hg5e),
          V = (0, i.jsx)(a.TextBadge, {
            className: Z.newBadge,
            text: C.intl.string(C.t.y2b7CA),
          });
        return (0, i.jsx)(a.MenuItem, {
          id: "notification-sounds",
          label: (n) => {
            let { isFocused: e } = n;
            return (
              e && R(e),
              (0, i.jsxs)("div", {
                className: Z.rootContainer,
                children: [
                  (0, i.jsxs)("div", {
                    children: [
                      k && "top" === T && V,
                      (0, i.jsxs)("div", {
                        className: Z.headerContainer,
                        children: [
                          (0, i.jsx)(Y, {
                            className: Z.text,
                            color: e ? "always-white" : void 0,
                            variant: "text-sm/medium",
                            children: C.intl.string(C.t.mrqSOj),
                          }),
                          (0, i.jsx)(a.NitroWheelIcon, {
                            size: "xs",
                            className: Z.nitroWheel,
                            color: e
                              ? "white"
                              : y
                                ? void 0
                                : o.JX.PREMIUM_TIER_2,
                          }),
                        ],
                      }),
                      null != B &&
                        (0, i.jsx)(Y, {
                          className: Z.text,
                          color: e ? "always-white" : void 0,
                          variant: "text-xs/normal",
                          children: B,
                        }),
                    ],
                  }),
                  k && "trailing" === T && V,
                ],
              })
            );
          },
          action:
            n !== p.aIL
              ? () =>
                  (0, a.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                      t.e("5863"),
                      t.e("66847"),
                    ]).then(t.bind(t, 751212));
                    return (t) => (0, i.jsx)(e, { ...t, guildId: n });
                  })
              : void 0,
          hasSubmenu: !0,
          children: (0, i.jsxs)(a.MenuGroup, {
            children: [
              z.map((n, e) =>
                (0, i.jsxs)(
                  r.Fragment,
                  {
                    children: [
                      y || n.value === j.YC.CLASSIC
                        ? (0, i.jsx)(a.MenuRadioItem, {
                            id: n.label,
                            group: "notification-preset",
                            checked: (null != b ? b : j.YC.CLASSIC) === n.value,
                            label: n.label,
                            action: () => w(n.value),
                          })
                        : (0, i.jsx)(a.MenuItem, {
                            id: n.label,
                            label: (e) => {
                              let { isFocused: t } = e;
                              return (0, i.jsxs)("div", {
                                className: Z.labelContainer,
                                children: [
                                  (0, i.jsx)(I.Z, {
                                    color: t ? "always-white" : void 0,
                                    variant: "text-sm/medium",
                                    children: n.label,
                                  }),
                                  (0, i.jsx)(a.CirclePlayIcon, {
                                    className: Z.playButton,
                                    color: t
                                      ? a.tokens.colors.INTERACTIVE_ACTIVE
                                      : a.tokens.colors.INTERACTIVE_NORMAL,
                                  }),
                                ],
                              });
                            },
                            action: () => w(n.value),
                          }),
                      n.value === j.YC.CLASSIC
                        ? (0, i.jsx)(a.MenuSeparator, {})
                        : null,
                    ],
                  },
                  e,
                ),
              ),
              O &&
                (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)(a.MenuSeparator, {}),
                    (0, i.jsx)(a.MenuItem, {
                      id: "label",
                      label: (0, i.jsx)(a.Text, {
                        className: Z.mutedLabel,
                        variant: "text-sm/medium",
                        children: C.intl.string(C.t["a9G/ER"]),
                      }),
                    }),
                  ],
                }),
            ],
          }),
        });
      }
    },
    552958: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return u;
        },
      }),
        t(47120);
      var i = t(192379),
        r = t(974180),
        l = t(557177);
      function u() {
        let [n, e] = i.useState(),
          t = i.useRef(-1);
        return {
          playSound: i.useCallback((n) => {
            e(n),
              l.GN(
                r.Ay,
                r.yk,
                () => {
                  clearTimeout(t.current),
                    (t.current = setTimeout(() => {
                      e(void 0);
                    }, 500));
                },
                n,
              );
          }, []),
          isPlaying: null != n,
          soundpackPlaying: n,
        };
      }
    },
    213931: function (n, e, t) {
      t.d(e, {
        M: function () {
          return d;
        },
        t: function () {
          return o;
        },
      });
      var i = t(381499),
        r = t(675478),
        l = t(592125),
        u = t(626135),
        a = t(981631);
      function o(n, e, t, l) {
        if (e !== t)
          (0, r.PS)(
            n,
            (n) => {
              n.customNotificationSoundConfig = {
                notificationSoundPackId: i.Gm.create({ value: t }),
              };
            },
            r.fy.INFREQUENT_USER_ACTION,
          ),
            u.default.track(a.rMx.CUSTOM_NOTIFICATION_SOUND_SETTINGS_UPDATED, {
              guild_id: n,
              location: l,
              soundpack: t,
            });
      }
      function d(n, e, t, o, d) {
        var s;
        if (t !== o)
          (0, r.BU)(
            n,
            e,
            (n) => {
              n.customNotificationSoundConfig = {
                notificationSoundPackId: i.Gm.create({ value: o }),
              };
            },
            r.fy.INFREQUENT_USER_ACTION,
          ),
            u.default.track(a.rMx.CUSTOM_NOTIFICATION_SOUND_SETTINGS_UPDATED, {
              guild_id: n,
              channel_id: e,
              channel_type:
                null === (s = l.Z.getChannel(e)) || void 0 === s
                  ? void 0
                  : s.type,
              location: d,
              soundpack: o,
            });
      }
    },
    767157: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return l;
        },
      });
      var i = t(626135),
        r = t(981631);
      function l(n, e) {
        i.default.track(r.rMx.CUSTOM_NOTIFICATION_SOUND_OPTION_PLAYED, {
          location: e,
          soundpack: n,
        });
      }
    },
    112440: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return l;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(481060);
      function l() {
        (0, r.openModalLazy)(async () => {
          let { default: n } = await t.e("72323").then(t.bind(t, 933006));
          return (e) => (0, i.jsx)(n, { ...e });
        });
      }
    },
    832239: function (n, e, t) {
      t.d(e, {
        JO: function () {
          return u;
        },
        KK: function () {
          return s;
        },
        Vp: function () {
          return d;
        },
        hW: function () {
          return o;
        },
        zu: function () {
          return a;
        },
      });
      var i = t(544891),
        r = t(570140),
        l = t(981631);
      function u() {
        r.Z.dispatch({ type: "VIBING_WUMPUS_PLAY_MUSIC" });
      }
      function a() {
        r.Z.dispatch({ type: "VIBING_WUMPUS_STOP_MUSIC" });
      }
      function o() {
        r.Z.dispatch({ type: "VIBING_WUMPUS_PAUSE_MUSIC" });
      }
      function d(n) {
        return i.tn.del({
          url: l.ANM.DELETE_SAFETY_WARNINGS(n),
          rejectWithError: !1,
        });
      }
      function s(n, e) {
        return i.tn.post({
          url: l.ANM.ADD_SAFETY_WARNING(n),
          body: { safety_warning_type: e },
          rejectWithError: !1,
        });
      }
    },
    100932: function (n, e, t) {
      t.d(e, {
        x: function () {
          return o;
        },
      });
      var i = t(442837),
        r = t(594174),
        l = t(359119),
        u = t(237292),
        a = t(13279);
      let o = (n) => {
        let e = (0, u.y0)({ location: "context-menu-item" }),
          t = (0, i.e7)([r.default], () => r.default.getCurrentUser()),
          o = (0, a.z)(n.id, "context-menu-item");
        if ((null == t ? void 0 : t.isStaff()) !== !0 || !e || !n.isDM())
          return null;
        let d =
          (null == o ? void 0 : o.type) ===
          l.pj.INAPPROPRIATE_CONVERSATION_TIER_1;
        return {
          isTier1: d,
          isTier2:
            (null == o ? void 0 : o.type) ===
            l.pj.INAPPROPRIATE_CONVERSATION_TIER_2,
        };
      };
    },
    131404: function (n, e, t) {
      t.r(e);
      var i = t(200651);
      t(192379);
      var r = t(481060),
        l = t(239091),
        u = t(883385),
        a = t(108843),
        o = t(911969),
        d = t(947440),
        s = t(100527),
        c = t(441061),
        f = t(167675),
        I = t(737013),
        g = t(607783),
        x = t(702321),
        M = t(461535),
        _ = t(776568),
        h = t(299206),
        m = t(895563),
        p = t(212205),
        v = t(62420),
        j = t(455395),
        C = t(750850),
        Z = t(581052),
        T = t(875252),
        E = t(583332),
        N = t(122074),
        S = t(819403),
        A = t(777658),
        U = t(858488),
        O = t(185457),
        y = t(570870),
        b = t(389052),
        G = t(24311),
        P = t(794973),
        R = t(332576),
        D = t(158508),
        F = t(710631),
        L = t(558924),
        k = t(991307),
        w = t(37258),
        Y = t(700994),
        z = t(332031),
        B = t(981631),
        V = t(388032);
      e.default = (0, a.Z)(
        (0, u.Z)(
          function (n) {
            let {
                user: e,
                channel: t,
                channelSelected: u = !1,
                showMute: a = !0,
                showMediaItems: s = !1,
                showChannelCallItems: W = !1,
                showModalItems: K = !0,
                targetIsUser: J = !1,
                context: X,
                onSelect: q,
                onHeightUpdate: H,
              } = n,
              Q = (0, w.Z)({ userId: e.id, guildId: null }),
              $ = (0, G.Z)({ user: e, context: X }),
              nn = (0, O.Z)({ user: e, channelId: t.id, context: X }),
              ne = (0, U.Z)({ user: e }),
              nt = (0, z.Z)(e.id),
              ni = (0, P.Z)(t.id, u),
              nr = (0, F.Z)({ user: e }),
              nl = (0, d.Z)(null, e),
              nu = (0, Y.Z)(e.id),
              na = (0, L.Z)(e, t.id),
              no = (0, A.Z)(e),
              nd = (0, k.Z)(e.id),
              ns = (0, g.B)({
                userId: e.id,
                channelId: t.id,
                guildId: t.getGuildId(),
                location: "DMUserContextMenu",
              }),
              nc = (0, R.Z)(e.id, t.id),
              nf = (0, b.Z)({ user: e, location: "DMUserContextMenu" }),
              nI = (0, D.Z)({ user: e, location: "DMUserContextMenu" }),
              ng = (0, _.ZP)(t),
              nx = (0, N.Uf)(B.aIL, t.id, "trailing"),
              nM = (0, h.Z)({ id: e.id, label: V.intl.string(V.t["/AXYnJ"]) }),
              n_ = (0, h.Z)({ id: t.id, label: V.intl.string(V.t.gFHI3t) }),
              nh = (0, M.Z)(t),
              nm = (0, f.Z)(e.id),
              np = (0, c.Z)(t.id),
              nv = (0, S.Z)(e),
              nj = (0, I.Z)(e.id),
              nC = (0, y.Z)({
                commandType: o.yU.USER,
                commandTargetId: e.id,
                channel: t,
                guildId: void 0,
                onHeightUpdate: H,
              }),
              nZ = (0, m.l)(t),
              nT = (0, m.P)(t),
              nE = (0, p.Z)(t),
              nN = (0, v.Z)(t),
              nS = (0, Z.V)(t),
              nA = (0, j.i)(t),
              nU = (0, E.g)(t),
              nO = (0, T.H)(t),
              ny = (0, C.e)(t),
              nb = t.isManaged(),
              nG = e.isNonUserBot();
            return (0, i.jsxs)(r.Menu, {
              navId: "user-context",
              onClose: l.Zy,
              "aria-label": V.intl.string(V.t.liqwPD),
              onSelect: q,
              children: [
                (0, i.jsx)(r.MenuGroup, {
                  children: !(nG && !(0, x.Z)(t.id)) && nh,
                }),
                (0, i.jsx)(r.MenuGroup, { children: nS }),
                (0, i.jsx)(r.MenuGroup, { children: nO }),
                (0, i.jsx)(r.MenuGroup, { children: nU }),
                (0, i.jsx)(r.MenuGroup, { children: nA }),
                (0, i.jsx)(r.MenuGroup, { children: ny }),
                (0, i.jsxs)(r.MenuGroup, { children: [nZ, nE, nN] }),
                (0, i.jsx)(r.MenuGroup, { children: !nG && nv }),
                (0, i.jsxs)(r.MenuGroup, {
                  children: [
                    !nG &&
                      (0, i.jsxs)(i.Fragment, {
                        children: [K && Q, $, !nb && na, K && nn, K && ne, nt],
                      }),
                    (0, x.Z)(t.id) && Q,
                    ni,
                  ],
                }),
                !nG &&
                  (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)(r.MenuGroup, { children: s && nu }),
                      (0, i.jsx)(r.MenuGroup, { children: K && nl }),
                      (0, i.jsxs)(r.MenuGroup, {
                        children: [
                          s && nd,
                          K && ns,
                          s && nc,
                          nC,
                          K && nr,
                          no,
                          K && nI,
                          K && nf,
                          s && nj,
                        ],
                      }),
                      (0, i.jsxs)(r.MenuGroup, { children: [a && ng, nx] }),
                      W && (0, i.jsxs)(r.MenuGroup, { children: [np, nm] }),
                    ],
                  }),
                (0, x.Z)(t.id) &&
                  (0, i.jsxs)(r.MenuGroup, { children: [a && ng, nx] }),
                (0, i.jsx)(r.MenuGroup, { children: nT }),
                (0, i.jsxs)(r.MenuGroup, { children: [nM, !J && n_] }),
              ],
            });
          },
          { object: B.qAy.CONTEXT_MENU },
        ),
        [s.Z.CONTEXT_MENU, s.Z.DM_USER_MENU],
      );
    },
    794973: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return o;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(481060),
        l = t(493683),
        u = t(592125),
        a = t(388032);
      function o(n, e) {
        let t = u.Z.getChannel(n);
        return null == t || t.isMultiUserDM()
          ? null
          : (0, i.jsx)(r.MenuItem, {
              id: "close-dm",
              label: a.intl.string(a.t.jsvgc3),
              action: () => l.Z.closePrivateChannel(n, e),
            });
      }
    },
    558924: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return c;
        },
      }),
        t(47120);
      var i = t(200651);
      t(192379);
      var r = t(442837),
        l = t(481060),
        u = t(26151),
        a = t(358221),
        o = t(985588),
        d = t(354459),
        s = t(388032);
      function c(n, e) {
        let [t, c] = (0, r.Wu)(
          [a.Z],
          () => [a.Z.getParticipants(e), a.Z.getParticipant(e, n.id)],
          [e, n.id],
        );
        return (0, o.s)(n) && 0 !== t.length
          ? null == c
            ? (0, i.jsx)(l.MenuItem, {
                id: "ring",
                label: s.intl.string(s.t.bHa9kJ),
                action: () => u.Z.ring(e, [n.id]),
              })
            : c.type === d.fO.USER && c.ringing
              ? (0, i.jsx)(l.MenuItem, {
                  id: "stop-ringing",
                  label: s.intl.string(s.t.ygslb2),
                  action: () => u.Z.stopRinging(e, [n.id]),
                })
              : null
          : null;
      }
    },
  },
]);
//# sourceMappingURL=e7372083bed132447764.js.map
