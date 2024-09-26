"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["56826"],
  {
    985588: function (e, n, t) {
      t.d(n, {
        s: function () {
          return r;
        },
      });
      var i = t(442837),
        a = t(314897),
        l = t(699516);
      function r(e) {
        return (0, i.e7)([l.Z, a.default], () => {
          let n = l.Z.isFriend(e.id),
            t = a.default.getId() === e.id;
          return n && !t && !e.bot && !e.system && !e.isProvisional();
        });
      }
    },
    461535: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return f;
        },
      }),
        t(47120);
      var i = t(735250);
      t(470079);
      var a = t(442837),
        l = t(481060),
        r = t(45114),
        u = t(456269),
        s = t(344185),
        o = t(569471),
        d = t(131704),
        c = t(324067),
        _ = t(306680),
        I = t(981631),
        M = t(689938);
      function f(e) {
        let n = (function (e) {
          let n = (0, u.n2)(e.guild_id, e.id),
            t = (0, a.e7)(
              [_.ZP, c.Z, s.Z, o.Z],
              () => {
                if (e.isForumPost()) return _.ZP.isForumPostUnread(e.id);
                if (e.type !== I.d4z.GUILD_CATEGORY)
                  return _.ZP.hasUnreadOrMentions(e.id);
                {
                  let n = c.Z.getCategories(e.getGuildId());
                  if (null == n[e.id]) return !1;
                  if (
                    n[e.id].some((e) => {
                      let { channel: n } = e;
                      return (
                        (0, d.Em)(n.type) && _.ZP.hasUnreadOrMentions(n.id)
                      );
                    })
                  )
                    return !0;
                  let t = new Set(n[e.id].map((e) => e.channel.id)),
                    i = s.Z.getThreadsForGuild(e.guild_id);
                  for (let e in i)
                    if (t.has(e)) {
                      for (let n in i[e])
                        if (
                          o.Z.hasJoined(n) &&
                          !o.Z.isMuted(n) &&
                          _.ZP.hasUnreadOrMentions(n)
                        )
                          return !0;
                    }
                  return !1;
                }
              },
              [e],
            );
          return e.isForumLikeChannel() ? n > 0 : t;
        })(e);
        return (0, i.jsx)(l.MenuItem, {
          id: "mark-channel-read",
          label: M.Z.Messages.MARK_AS_READ,
          action: function () {
            (0, r.U6)(e);
          },
          disabled: !n,
        });
      }
    },
    895563: function (e, n, t) {
      t.d(n, {
        P: function () {
          return N;
        },
        l: function () {
          return E;
        },
      }),
        t(47120);
      var i = t(735250);
      t(470079);
      var a = t(392711),
        l = t.n(a),
        r = t(442837),
        u = t(481060),
        s = t(984933),
        o = t(853856),
        d = t(117984),
        c = t(593214),
        _ = t(362658),
        I = t(981631),
        M = t(689938);
      function f(e, n) {
        return e.type === I.d4z.GROUP_DM
          ? n
            ? M.Z.Messages.UNFAVORITE_GDM
            : M.Z.Messages.FAVORITE_GDM
          : e.type === I.d4z.DM
            ? n
              ? M.Z.Messages.UNFAVORITE_DM
              : M.Z.Messages.FAVORITE_DM
            : n
              ? M.Z.Messages.UNFAVORITE_CHANNEL
              : M.Z.Messages.FAVORITE_CHANNEL;
      }
      function E(e) {
        let n = (0, r.e7)([s.ZP], () => s.ZP.getChannels(I.I_8))[
            I.d4z.GUILD_CATEGORY
          ],
          { isFavoritesPerk: t } = (0, _.z)("58e21a_1"),
          { notifyFavoriteAdded: a } = (0, c.up)();
        if (!(0, c.li)(e)) return null;
        let [[o], M] = l().partition(n, (e) => "null" === e.channel.id);
        function E(n) {
          a(), (0, d.kj)(e.id, n);
        }
        return 0 === M.length
          ? (0, i.jsx)(u.MenuItem, {
              id: "favorite-channel",
              label: f(e, !1),
              action: () => E(null),
            })
          : (0, i.jsxs)(u.MenuItem, {
              id: "favorite-channel",
              label: f(e, !1),
              action: () => E(null),
              children: [
                t &&
                  (0, i.jsx)(u.MenuGroup, {
                    children: (0, i.jsx)(
                      u.MenuItem,
                      {
                        id: "favorite-".concat(o.channel.id),
                        label: o.channel.name,
                        action: () =>
                          E("null" === o.channel.id ? null : o.channel.id),
                      },
                      o.channel.id,
                    ),
                  }),
                (0, i.jsx)(u.MenuGroup, {
                  children: M.map((e) =>
                    (0, i.jsx)(
                      u.MenuItem,
                      {
                        id: "favorite-".concat(e.channel.id),
                        label: e.channel.name,
                        action: () => E(e.channel.id),
                      },
                      e.channel.id,
                    ),
                  ),
                }),
              ],
            });
      }
      function N(e) {
        let n = (0, r.e7)([o.Z], () => o.Z.isFavorite(e.id));
        return __OVERLAY__ || !n
          ? null
          : (0, i.jsx)(u.MenuItem, {
              id: "favorite-channel",
              label: f(e, !0),
              color: "danger",
              action: () =>
                e.type === I.d4z.GUILD_CATEGORY
                  ? (0, u.openModalLazy)(async () => {
                      let { default: n } = await t
                        .e("37720")
                        .then(t.bind(t, 357632));
                      return (t) =>
                        (0, i.jsx)(n, {
                          ...t,
                          onConfirm: () => {
                            t.onClose(), (0, d.oC)(e.id);
                          },
                          channel: e,
                        });
                    })
                  : (0, d.oC)(e.id),
            });
      }
    },
    212205: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return d;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(442837),
        l = t(481060),
        r = t(914010),
        u = t(362658),
        s = t(981631),
        o = t(689938);
      function d(e) {
        let n = (0, a.e7)([r.Z], () => r.Z.getGuildId()),
          d = e.type === s.d4z.GUILD_CATEGORY,
          { isFavoritesPerk: c } = (0, u.z)("useChannelFavoriteSetNickname");
        return __OVERLAY__ || n !== s.I_8
          ? null
          : (0, i.jsx)(l.MenuItem, {
              id: "set-channel-nickname",
              label:
                c && d
                  ? o.Z.Messages.FAVORITES_RENAME_CATEGORY
                  : o.Z.Messages.CHANGE_NICKNAME,
              action: function () {
                (0, l.openModalLazy)(async () => {
                  let { default: n } = await t
                    .e("46161")
                    .then(t.bind(t, 238716));
                  return (t) =>
                    (0, i.jsx)(n, {
                      ...t,
                      channelId: e.id,
                      heading:
                        c && d
                          ? o.Z.Messages.FAVORITES_RENAME_CATEGORY
                          : o.Z.Messages.CHANGE_NICKNAME,
                      formTitle:
                        c && d
                          ? o.Z.Messages.CATEGORY_NAME
                          : o.Z.Messages.NICKNAME,
                      allowReset: !(c && d),
                    });
                });
              },
            });
      }
    },
    62420: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      }),
        t(653041),
        t(47120);
      var i = t(735250);
      t(470079);
      var a = t(481060),
        l = t(117984),
        r = t(593214),
        u = t(362658),
        s = t(689938);
      function o(e) {
        let n = (0, r.Mt)(),
          t = (0, r.s4)(e.id),
          o = (0, r.zv)(),
          { isFavoritesPerk: d } = (0, u.z)("useChannelMoveToCategory");
        if (__OVERLAY__ || !n || null == t || !d) return null;
        let [c, _] = (function (e) {
          let n = [],
            t = null;
          for (let i of e) null == i.id ? (t = i) : n.push(i);
          return [t, n];
        })(o.filter((e) => e.id !== (null == t ? void 0 : t.parentId)));
        function I(e) {
          null != t && (0, l.uA)(t.id, e);
        }
        return null == c && 0 === _.length
          ? null
          : (0, i.jsxs)(a.MenuItem, {
              id: "move-to-category",
              label: s.Z.Messages.MOVE_TO,
              children: [
                null != c &&
                  (0, i.jsx)(a.MenuGroup, {
                    children: (0, i.jsx)(a.MenuItem, {
                      id: "favorite-uncategorized",
                      label: c.name,
                      action: () => I(c.id),
                    }),
                  }),
                _.length > 0 &&
                  (0, i.jsx)(a.MenuGroup, {
                    children: _.map((e) => {
                      let { id: n, name: t } = e;
                      return (0, i.jsx)(
                        a.MenuItem,
                        {
                          id: "favorite-".concat(n),
                          label: t,
                          action: () => I(n),
                        },
                        n,
                      );
                    }),
                  }),
              ],
            });
      }
    },
    455395: function (e, n, t) {
      t.d(n, {
        i: function () {
          return o;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(481060),
        l = t(359119),
        r = t(832239),
        u = t(100932),
        s = t(689938);
      function o(e) {
        let n = (0, u.x)(e);
        if (null === n) return null;
        let { isTier1: t, isTier2: o } = n;
        return (0, i.jsxs)(i.Fragment, {
          children: [
            !t &&
              (0, i.jsx)(a.MenuItem, {
                id: "mark-as-tier-1-inappro",
                label: s.Z.Messages.INAPPROPRIATE_CONVERSATION_MARK_AS_TIER_1,
                action: () =>
                  (0, r.KK)(e.id, l.pj.INAPPROPRIATE_CONVERSATION_TIER_1),
              }),
            !o &&
              (0, i.jsx)(a.MenuItem, {
                id: "mark-as-tier-2-inappro",
                label: s.Z.Messages.INAPPROPRIATE_CONVERSATION_MARK_AS_TIER_2,
                action: () =>
                  (0, r.KK)(e.id, l.pj.INAPPROPRIATE_CONVERSATION_TIER_2),
              }),
          ],
        });
      }
    },
    581052: function (e, n, t) {
      t.d(n, {
        V: function () {
          return o;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(442837),
        l = t(481060),
        r = t(823162),
        u = t(594174),
        s = t(689938);
      function o(e) {
        let n = (0, a.e7)([u.default], () => u.default.getCurrentUser());
        return (null == n ? void 0 : n.isStaff()) !== !0
          ? null
          : (0, i.jsxs)(i.Fragment, {
              children: [
                !e.isMessageRequest &&
                  (0, i.jsx)(l.MenuItem, {
                    id: "mark-as-message-request",
                    label: s.Z.Messages.MESSAGE_REQUESTS_CONTEXT_MENU_MOVE_TO,
                    action: () => (0, r.Xy)(e.id),
                  }),
                (0, i.jsx)(l.MenuItem, {
                  id: "clear-message-request",
                  label: s.Z.Messages.MESSAGE_REQUESTS_CONTEXT_MENU_CLEAR,
                  action: () => (0, r.qR)(e.id),
                }),
              ],
            });
      }
    },
    875252: function (e, n, t) {
      t.d(n, {
        H: function () {
          return c;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(442837),
        l = t(481060),
        r = t(378298),
        u = t(359119),
        s = t(832239),
        o = t(594174),
        d = t(689938);
      function c(e) {
        let n = (0, a.e7)([o.default], () => o.default.getCurrentUser()),
          t = (0, a.e7)([u.ZP], () => u.ZP.getChannelSafetyWarnings(e.id));
        return (null == n ? void 0 : n.isStaff()) !== !0 ||
          null == t ||
          0 === t.length
          ? null
          : (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(l.MenuItem, {
                  id: "delete-safety-warnings",
                  label: d.Z.Messages.SAFETY_WARNINGS_DELETE,
                  action: () => (0, s.Vp)(e.id),
                }),
                (0, i.jsx)(l.MenuItem, {
                  id: "clear-safety-warnings",
                  label: d.Z.Messages.STRANGER_DANGER_CONTEXT_MENU_CLEAR,
                  action: () => (0, r.wS)(e.id),
                }),
              ],
            });
      }
    },
    122074: function (e, n, t) {
      t.d(n, {
        U: function () {
          return m;
        },
        Uf: function () {
          return S;
        },
        ng: function () {
          return O;
        },
      }),
        t(47120);
      var i = t(735250),
        a = t(470079),
        l = t(442837),
        r = t(704215),
        u = t(481060),
        s = t(436774),
        o = t(706140),
        d = t(9156),
        c = t(594174),
        _ = t(74538),
        I = t(759198),
        M = t(11352),
        f = t(213931),
        E = t(767157),
        N = t(112440),
        T = t(671105),
        Z = t(552958),
        A = t(981631),
        g = t(921944),
        C = t(871465),
        h = t(689938),
        x = t(100210);
      function O(e, n) {
        let t = M.Y.useExperiment(
            { location: "guild_context_menu" },
            { autoTrackExposure: !0 },
          ),
          a = R(
            e,
            void 0,
            r.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE,
            t.nestedEntry ? "trailing" : "top",
          ),
          l = (t.nestedEntry && n) || (!t.nestedEntry && !n);
        return (0, i.jsx)(i.Fragment, { children: l && a });
      }
      function S(e, n, t) {
        return R(e, n, r.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GDM_DM_BADGE, t);
      }
      function m() {
        let e = M.Y.useExperiment(
            { location: "guild_context_menu" },
            { autoTrackExposure: !0 },
          ),
          [n] = (0, o.cv)([r.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE]);
        return (0, i.jsx)(i.Fragment, {
          children:
            e.enabled &&
            e.nestedEntry &&
            n === r.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE &&
            (0, i.jsx)(u.TextBadge, {
              className: x.newBadge,
              text: h.Z.Messages.NEW,
            }),
        });
      }
      function R(e, n, r, O) {
        var S, m;
        let R = (0, T.OR)(e),
          p = (0, T._c)(e, n),
          U = (0, l.e7)([c.default], () => c.default.getCurrentUser()),
          v = (0, l.e7)([d.ZP], () => d.ZP.isMuted(e), [e]),
          j = _.ZP.canUseCustomNotificationSounds(U),
          G = j ? (null != p ? p : R) : C.YC.CLASSIC,
          P = M.Y.useExperiment(
            { location: "guild_context_menu" },
            { autoTrackExposure: !0 },
          ).enabled,
          [y, b] = a.useState(!1),
          { playSound: D } = (0, Z.Z)(),
          [L, F] = (0, o.cv)([r]),
          V = L === r;
        if (
          (a.useEffect(
            () => () => {
              y && F(g.L.TAKE_ACTION);
            },
            [y, F],
          ),
          !P)
        )
          return null;
        let k = (t) => {
            if ((D(t), F(g.L.TAKE_ACTION), !j && t !== C.YC.CLASSIC)) {
              (0, E.Z)(t, "contextMenu"), (0, N.Z)();
              return;
            }
            null != n
              ? (0, f.M)(e, n, G, t, "contextMenu")
              : (0, f.t)(e, G, t, "contextMenu");
          },
          Y = j ? u.Text : I.Z,
          z = (0, C.LB)(),
          w =
            null !==
              (m =
                null === (S = z.find((e) => e.value === G)) || void 0 === S
                  ? void 0
                  : S.label) && void 0 !== m
              ? m
              : h.Z.Messages.SOUNDPACK_DEFAULT_LABEL,
          B = (0, i.jsx)(u.TextBadge, {
            className: x.newBadge,
            text: h.Z.Messages.NEW,
          });
        return (0, i.jsx)(u.MenuItem, {
          id: "notification-sounds",
          label: (e) => {
            let { isFocused: n } = e;
            return (
              n && b(n),
              (0, i.jsxs)("div", {
                className: x.rootContainer,
                children: [
                  (0, i.jsxs)("div", {
                    children: [
                      V && "top" === O && B,
                      (0, i.jsxs)("div", {
                        className: x.headerContainer,
                        children: [
                          (0, i.jsx)(Y, {
                            className: x.text,
                            color: n ? "always-white" : void 0,
                            variant: "text-sm/medium",
                            children:
                              h.Z.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND,
                          }),
                          (0, i.jsx)(u.NitroWheelIcon, {
                            size: "xs",
                            className: x.nitroWheel,
                            color: n
                              ? "white"
                              : j
                                ? void 0
                                : s.JX.PREMIUM_TIER_2,
                          }),
                        ],
                      }),
                      null != w &&
                        (0, i.jsx)(Y, {
                          className: x.text,
                          color: n ? "always-white" : void 0,
                          variant: "text-xs/normal",
                          children: w,
                        }),
                    ],
                  }),
                  V && "trailing" === O && B,
                ],
              })
            );
          },
          action:
            e !== A.aIL
              ? () =>
                  (0, u.openModalLazy)(async () => {
                    let { default: n } = await Promise.all([
                      t.e("5863"),
                      t.e("89746"),
                    ]).then(t.bind(t, 751212));
                    return (t) => (0, i.jsx)(n, { ...t, guildId: e });
                  })
              : void 0,
          hasSubmenu: !0,
          children: (0, i.jsxs)(u.MenuGroup, {
            children: [
              z.map((e, n) =>
                (0, i.jsxs)(
                  a.Fragment,
                  {
                    children: [
                      j || e.value === C.YC.CLASSIC
                        ? (0, i.jsx)(u.MenuRadioItem, {
                            id: e.label,
                            group: "notification-preset",
                            checked: (null != G ? G : C.YC.CLASSIC) === e.value,
                            label: e.label,
                            action: () => k(e.value),
                          })
                        : (0, i.jsx)(u.MenuItem, {
                            id: e.label,
                            label: (n) => {
                              let { isFocused: t } = n;
                              return (0, i.jsxs)("div", {
                                className: x.labelContainer,
                                children: [
                                  (0, i.jsx)(I.Z, {
                                    color: t ? "always-white" : void 0,
                                    variant: "text-sm/medium",
                                    children: e.label,
                                  }),
                                  (0, i.jsx)(u.CirclePlayIcon, {
                                    className: x.playButton,
                                    color: t
                                      ? u.tokens.colors.INTERACTIVE_ACTIVE
                                      : u.tokens.colors.INTERACTIVE_NORMAL,
                                  }),
                                ],
                              });
                            },
                            action: () => k(e.value),
                          }),
                      e.value === C.YC.CLASSIC
                        ? (0, i.jsx)(u.MenuSeparator, {})
                        : null,
                    ],
                  },
                  n,
                ),
              ),
              v &&
                (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)(u.MenuSeparator, {}),
                    (0, i.jsx)(u.MenuItem, {
                      id: "label",
                      label: (0, i.jsx)(u.Text, {
                        className: x.mutedLabel,
                        variant: "text-sm/medium",
                        children:
                          h.Z.Messages
                            .PREMIUM_CUSTOM_NOTIFICATION_SOUND_NOTIFICATION_SETTINGS_WARNING,
                      }),
                    }),
                  ],
                }),
            ],
          }),
        });
      }
    },
    552958: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return r;
        },
      }),
        t(47120);
      var i = t(470079),
        a = t(974180),
        l = t(557177);
      function r() {
        let [e, n] = i.useState(),
          t = i.useRef(-1);
        return {
          playSound: i.useCallback((e) => {
            n(e),
              l.GN(
                a.Ay,
                a.yk,
                () => {
                  clearTimeout(t.current),
                    (t.current = setTimeout(() => {
                      n(void 0);
                    }, 500));
                },
                e,
              );
          }, []),
          isPlaying: null != e,
          soundpackPlaying: e,
        };
      }
    },
    213931: function (e, n, t) {
      t.d(n, {
        M: function () {
          return o;
        },
        t: function () {
          return s;
        },
      });
      var i = t(381499),
        a = t(675478),
        l = t(592125),
        r = t(626135),
        u = t(981631);
      function s(e, n, t, l) {
        if (n !== t)
          (0, a.PS)(
            e,
            (e) => {
              e.customNotificationSoundConfig = {
                notificationSoundPackId: i.Gm.create({ value: t }),
              };
            },
            a.fy.INFREQUENT_USER_ACTION,
          ),
            r.default.track(u.rMx.CUSTOM_NOTIFICATION_SOUND_SETTINGS_UPDATED, {
              guild_id: e,
              location: l,
              soundpack: t,
            });
      }
      function o(e, n, t, s, o) {
        var d;
        if (t !== s)
          (0, a.BU)(
            e,
            n,
            (e) => {
              e.customNotificationSoundConfig = {
                notificationSoundPackId: i.Gm.create({ value: s }),
              };
            },
            a.fy.INFREQUENT_USER_ACTION,
          ),
            r.default.track(u.rMx.CUSTOM_NOTIFICATION_SOUND_SETTINGS_UPDATED, {
              guild_id: e,
              channel_id: n,
              channel_type:
                null === (d = l.Z.getChannel(n)) || void 0 === d
                  ? void 0
                  : d.type,
              location: o,
              soundpack: s,
            });
      }
    },
    767157: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return l;
        },
      });
      var i = t(626135),
        a = t(981631);
      function l(e, n) {
        i.default.track(a.rMx.CUSTOM_NOTIFICATION_SOUND_OPTION_PLAYED, {
          location: n,
          soundpack: e,
        });
      }
    },
    112440: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return l;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(481060);
      function l() {
        (0, a.openModalLazy)(async () => {
          let { default: e } = await t.e("72323").then(t.bind(t, 933006));
          return (n) => (0, i.jsx)(e, { ...n });
        });
      }
    },
    832239: function (e, n, t) {
      t.d(n, {
        JO: function () {
          return r;
        },
        KK: function () {
          return d;
        },
        Vp: function () {
          return o;
        },
        hW: function () {
          return s;
        },
        zu: function () {
          return u;
        },
      });
      var i = t(544891),
        a = t(570140),
        l = t(981631);
      function r() {
        a.Z.dispatch({ type: "VIBING_WUMPUS_PLAY_MUSIC" });
      }
      function u() {
        a.Z.dispatch({ type: "VIBING_WUMPUS_STOP_MUSIC" });
      }
      function s() {
        a.Z.dispatch({ type: "VIBING_WUMPUS_PAUSE_MUSIC" });
      }
      function o(e) {
        return i.tn.del({ url: l.ANM.DELETE_SAFETY_WARNINGS(e) });
      }
      function d(e, n) {
        return i.tn.post({
          url: l.ANM.ADD_SAFETY_WARNING(e),
          body: { safety_warning_type: n },
        });
      }
    },
    100932: function (e, n, t) {
      t.d(n, {
        x: function () {
          return s;
        },
      });
      var i = t(442837),
        a = t(594174),
        l = t(359119),
        r = t(237292),
        u = t(13279);
      let s = (e) => {
        let n = (0, r.y0)({ location: "context-menu-item" }),
          t = (0, i.e7)([a.default], () => a.default.getCurrentUser()),
          s = (0, u.z)(e.id, "context-menu-item");
        if ((null == t ? void 0 : t.isStaff()) !== !0 || !n || !e.isDM())
          return null;
        let o =
          (null == s ? void 0 : s.type) ===
          l.pj.INAPPROPRIATE_CONVERSATION_TIER_1;
        return {
          isTier1: o,
          isTier2:
            (null == s ? void 0 : s.type) ===
            l.pj.INAPPROPRIATE_CONVERSATION_TIER_2,
        };
      };
    },
    131404: function (e, n, t) {
      t.r(n);
      var i = t(735250);
      t(470079);
      var a = t(481060),
        l = t(239091),
        r = t(883385),
        u = t(108843),
        s = t(911969),
        o = t(947440),
        d = t(100527),
        c = t(441061),
        _ = t(167675),
        I = t(737013),
        M = t(607783),
        f = t(702321),
        E = t(461535),
        N = t(776568),
        T = t(299206),
        Z = t(895563),
        A = t(212205),
        g = t(62420),
        C = t(455395),
        h = t(581052),
        x = t(875252),
        O = t(122074),
        S = t(819403),
        m = t(777658),
        R = t(858488),
        p = t(185457),
        U = t(570870),
        v = t(389052),
        j = t(24311),
        G = t(794973),
        P = t(332576),
        y = t(710631),
        b = t(558924),
        D = t(991307),
        L = t(725119),
        F = t(700994),
        V = t(332031),
        k = t(981631),
        Y = t(689938);
      n.default = (0, u.Z)(
        (0, r.Z)(
          function (e) {
            let {
                user: n,
                channel: t,
                channelSelected: r = !1,
                showMute: u = !0,
                showMediaItems: d = !1,
                showChannelCallItems: z = !1,
                showModalItems: w = !0,
                targetIsUser: B = !1,
                context: K,
                onSelect: W,
                onHeightUpdate: H,
              } = e,
              X = (0, L.Z)({ userId: n.id, guildId: null }),
              q = (0, j.Z)({ user: n, context: K }),
              Q = (0, p.Z)({ user: n, channelId: t.id, context: K }),
              J = (0, R.Z)({ user: n }),
              $ = (0, V.Z)(n.id),
              ee = (0, G.Z)(t.id, r),
              en = (0, y.Z)({ user: n }),
              et = (0, o.Z)(null, n),
              ei = (0, F.Z)(n.id),
              ea = (0, b.Z)(n, t.id),
              el = (0, m.Z)(n),
              er = (0, D.Z)(n.id),
              eu = (0, M.B)({
                userId: n.id,
                channelId: t.id,
                guildId: t.getGuildId(),
                location: "DMUserContextMenu",
              }),
              es = (0, P.Z)(n.id, t.id),
              eo = (0, v.Z)({ user: n }),
              ed = (0, N.ZP)(t),
              ec = (0, O.Uf)(k.aIL, t.id, "trailing"),
              e_ = (0, T.Z)({ id: n.id, label: Y.Z.Messages.COPY_ID_USER }),
              eI = (0, T.Z)({ id: t.id, label: Y.Z.Messages.COPY_ID_CHANNEL }),
              eM = (0, E.Z)(t),
              ef = (0, _.Z)(n.id),
              eE = (0, c.Z)(t.id),
              eN = (0, S.Z)(n),
              eT = (0, I.Z)(n.id),
              eZ = (0, U.Z)({
                commandType: s.yU.USER,
                commandTargetId: n.id,
                channel: t,
                guildId: void 0,
                onHeightUpdate: H,
              }),
              eA = (0, Z.l)(t),
              eg = (0, Z.P)(t),
              eC = (0, A.Z)(t),
              eh = (0, g.Z)(t),
              ex = (0, h.V)(t),
              eO = (0, C.i)(t),
              eS = (0, x.H)(t),
              em = t.isManaged(),
              eR = n.isNonUserBot();
            return (0, i.jsxs)(a.Menu, {
              navId: "user-context",
              onClose: l.Zy,
              "aria-label": Y.Z.Messages.USER_ACTIONS_MENU_LABEL,
              onSelect: W,
              children: [
                (0, i.jsx)(a.MenuGroup, {
                  children: !(eR && !(0, f.Z)(t.id)) && eM,
                }),
                (0, i.jsx)(a.MenuGroup, { children: ex }),
                (0, i.jsx)(a.MenuGroup, { children: eS }),
                (0, i.jsx)(a.MenuGroup, { children: eO }),
                (0, i.jsxs)(a.MenuGroup, { children: [eA, eC, eh] }),
                (0, i.jsx)(a.MenuGroup, { children: !eR && eN }),
                (0, i.jsxs)(a.MenuGroup, {
                  children: [
                    !eR &&
                      (0, i.jsxs)(i.Fragment, {
                        children: [w && X, q, !em && ea, w && Q, w && J, $],
                      }),
                    (0, f.Z)(t.id) && X,
                    ee,
                  ],
                }),
                !eR &&
                  (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)(a.MenuGroup, { children: d && ei }),
                      (0, i.jsx)(a.MenuGroup, { children: w && et }),
                      (0, i.jsxs)(a.MenuGroup, {
                        children: [
                          d && er,
                          w && eu,
                          d && es,
                          eZ,
                          w && en,
                          el,
                          w && eo,
                          d && eT,
                        ],
                      }),
                      (0, i.jsxs)(a.MenuGroup, { children: [u && ed, ec] }),
                      z && (0, i.jsxs)(a.MenuGroup, { children: [eE, ef] }),
                    ],
                  }),
                (0, f.Z)(t.id) &&
                  (0, i.jsxs)(a.MenuGroup, { children: [u && ed, ec] }),
                (0, i.jsx)(a.MenuGroup, { children: eg }),
                (0, i.jsxs)(a.MenuGroup, { children: [e_, !B && eI] }),
              ],
            });
          },
          { object: k.qAy.CONTEXT_MENU },
        ),
        [d.Z.CONTEXT_MENU, d.Z.DM_USER_MENU],
      );
    },
    794973: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(481060),
        l = t(493683),
        r = t(592125),
        u = t(689938);
      function s(e, n) {
        let t = r.Z.getChannel(e);
        return null == t || t.isMultiUserDM()
          ? null
          : (0, i.jsx)(a.MenuItem, {
              id: "close-dm",
              label: u.Z.Messages.CLOSE_DM,
              action: () => l.Z.closePrivateChannel(e, n),
            });
      }
    },
    558924: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      }),
        t(47120);
      var i = t(735250);
      t(470079);
      var a = t(442837),
        l = t(481060),
        r = t(26151),
        u = t(358221),
        s = t(985588),
        o = t(354459),
        d = t(689938);
      function c(e, n) {
        let [t, c] = (0, a.Wu)(
          [u.Z],
          () => [u.Z.getParticipants(n), u.Z.getParticipant(n, e.id)],
          [n, e.id],
        );
        return (0, s.s)(e) && 0 !== t.length
          ? null == c
            ? (0, i.jsx)(l.MenuItem, {
                id: "ring",
                label: d.Z.Messages.RING,
                action: () => r.Z.ring(n, [e.id]),
              })
            : c.type === o.fO.USER && c.ringing
              ? (0, i.jsx)(l.MenuItem, {
                  id: "stop-ringing",
                  label: d.Z.Messages.STOP_RINGING,
                  action: () => r.Z.stopRinging(n, [e.id]),
                })
              : null
          : null;
      }
    },
  },
]);
//# sourceMappingURL=a1a12cba5ddb5cadcbd8.js.map
