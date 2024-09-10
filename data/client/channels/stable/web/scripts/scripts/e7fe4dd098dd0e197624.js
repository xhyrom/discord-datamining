"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["25421"],
  {
    354741: function (e, n, t) {
      t.r(n);
      var a = t(735250);
      t(470079);
      var l = t(481060),
        i = t(493683),
        r = t(239091),
        u = t(883385),
        o = t(108843),
        s = t(947440),
        d = t(100527),
        c = t(299206),
        _ = t(895563),
        M = t(212205),
        I = t(62420),
        f = t(122074),
        E = t(314897),
        N = t(858687),
        C = t(461535),
        h = t(776568),
        T = t(981631),
        x = t(689938);
      n.default = (0, o.Z)(
        (0, u.Z)(
          function (e) {
            let { channel: n, selected: u, onSelect: o } = e,
              d = n.isOwner(E.default.getId()),
              O = (0, C.Z)(n),
              m = (0, h.ZP)(n),
              A = (0, f.Uf)(T.aIL, n.id, "top"),
              g = (0, N.Z)(n, u),
              Z = (0, c.Z)({ id: n.id, label: x.Z.Messages.COPY_ID_CHANNEL }),
              v = (0, s.Z)(n),
              U = (0, _.l)(n),
              S = (0, _.P)(n),
              p = (0, M.Z)(n),
              j = (0, I.Z)(n);
            return null == n || n.isManaged()
              ? null
              : (0, a.jsxs)(l.Menu, {
                  navId: "gdm-context",
                  "aria-label": x.Z.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                  onClose: r.Zy,
                  onSelect: o,
                  children: [
                    (0, a.jsx)(l.MenuGroup, { children: O }),
                    (0, a.jsxs)(l.MenuGroup, { children: [U, p, j] }),
                    (0, a.jsxs)(l.MenuGroup, {
                      children: [
                        d
                          ? (0, a.jsx)(l.MenuItem, {
                              id: "instant-invites",
                              label: x.Z.Messages.INSTANT_INVITES,
                              action: () =>
                                (0, l.openModalLazy)(async () => {
                                  let { default: e } = await t
                                    .e("97573")
                                    .then(t.bind(t, 892382));
                                  return (t) =>
                                    (0, a.jsx)(e, { channelId: n.id, ...t });
                                }),
                            })
                          : null,
                        (0, a.jsx)(l.MenuControlItem, {
                          id: "change-icon",
                          showDefaultFocus: !0,
                          control: (e, t) =>
                            (0, a.jsx)(l.MenuImageUploadControl, {
                              onChange: (t) => {
                                var a;
                                i.Z.setIcon(n.id, t),
                                  null === (a = e.onClose) ||
                                    void 0 === a ||
                                    a.call(e);
                              },
                              multiple: !1,
                              "aria-label": x.Z.Messages.CHANGE_ICON,
                              ...e,
                              ref: t,
                            }),
                          label: x.Z.Messages.CHANGE_ICON,
                        }),
                        null != n.icon
                          ? (0, a.jsx)(l.MenuItem, {
                              id: "remove-icon",
                              label: x.Z.Messages.REMOVE_ICON,
                              action: () => i.Z.setIcon(n.id, null),
                            })
                          : null,
                      ],
                    }),
                    (0, a.jsx)(l.MenuGroup, { children: v }),
                    (0, a.jsxs)(l.MenuGroup, { children: [m, A] }),
                    (0, a.jsx)(l.MenuGroup, { children: g }),
                    (0, a.jsx)(l.MenuGroup, { children: S }),
                    (0, a.jsx)(l.MenuGroup, { children: Z }),
                  ],
                });
          },
          { object: T.qAy.CONTEXT_MENU },
        ),
        [d.Z.CONTEXT_MENU, d.Z.GROUP_DM_MENU],
      );
    },
    858687: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      });
      var a = t(735250),
        l = t(470079),
        i = t(481060),
        r = t(493683),
        u = t(699516),
        o = t(594174),
        s = t(933557),
        d = t(689938);
      function c(e, n) {
        let c = l.useCallback(() => {
          let l = (0, s.F6)(e, o.default, u.Z),
            c = d.Z.Messages.LEAVE_GROUP_DM_TITLE.format({ name: l }),
            _ = d.Z.Messages.LEAVE_GROUP_DM_BODY.format({ name: l });
          e.isManaged() &&
            ((c = d.Z.Messages.LEAVE_GROUP_DM_MANAGED_TITLE.format({
              name: l,
            })),
            (_ = d.Z.Messages.LEAVE_GROUP_DM_MANAGED_BODY.format({ name: l })));
          let M = function (t) {
            let a =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            r.Z.closePrivateChannel(e.id, n, a);
          };
          (0, i.openModalLazy)(async () => {
            let { default: e } = await t.e("14604").then(t.bind(t, 960670));
            return (n) =>
              (0, a.jsx)(e, { header: c, body: _, onSubmit: M, ...n });
          });
        }, [e, n]);
        return (0, a.jsx)(i.MenuItem, {
          id: "leave-channel",
          label: d.Z.Messages.LEAVE_GROUP_DM,
          action: c,
          color: "danger",
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
      var a = t(735250);
      t(470079);
      var l = t(442837),
        i = t(481060),
        r = t(45114),
        u = t(456269),
        o = t(344185),
        s = t(569471),
        d = t(131704),
        c = t(324067),
        _ = t(306680),
        M = t(981631),
        I = t(689938);
      function f(e) {
        let n = (function (e) {
          let n = (0, u.n2)(e.guild_id, e.id),
            t = (0, l.e7)(
              [_.ZP, c.Z, o.Z, s.Z],
              () => {
                if (e.isForumPost()) return _.ZP.isForumPostUnread(e.id);
                if (e.type !== M.d4z.GUILD_CATEGORY)
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
                    a = o.Z.getThreadsForGuild(e.guild_id);
                  for (let e in a)
                    if (t.has(e)) {
                      for (let n in a[e])
                        if (
                          s.Z.hasJoined(n) &&
                          !s.Z.isMuted(n) &&
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
        return (0, a.jsx)(i.MenuItem, {
          id: "mark-channel-read",
          label: I.Z.Messages.MARK_AS_READ,
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
      var a = t(735250);
      t(470079);
      var l = t(392711),
        i = t.n(l),
        r = t(442837),
        u = t(481060),
        o = t(984933),
        s = t(853856),
        d = t(117984),
        c = t(593214),
        _ = t(362658),
        M = t(981631),
        I = t(689938);
      function f(e, n) {
        return e.type === M.d4z.GROUP_DM
          ? n
            ? I.Z.Messages.UNFAVORITE_GDM
            : I.Z.Messages.FAVORITE_GDM
          : e.type === M.d4z.DM
            ? n
              ? I.Z.Messages.UNFAVORITE_DM
              : I.Z.Messages.FAVORITE_DM
            : n
              ? I.Z.Messages.UNFAVORITE_CHANNEL
              : I.Z.Messages.FAVORITE_CHANNEL;
      }
      function E(e) {
        let n = (0, r.e7)([o.ZP], () => o.ZP.getChannels(M.I_8))[
            M.d4z.GUILD_CATEGORY
          ],
          { isFavoritesPerk: t } = (0, _.z)("58e21a_1"),
          { notifyFavoriteAdded: l } = (0, c.up)();
        if (!(0, c.li)(e)) return null;
        let [[s], I] = i().partition(n, (e) => "null" === e.channel.id);
        function E(n) {
          l(), (0, d.kj)(e.id, n);
        }
        return 0 === I.length
          ? (0, a.jsx)(u.MenuItem, {
              id: "favorite-channel",
              label: f(e, !1),
              action: () => E(null),
            })
          : (0, a.jsxs)(u.MenuItem, {
              id: "favorite-channel",
              label: f(e, !1),
              action: () => E(null),
              children: [
                t &&
                  (0, a.jsx)(u.MenuGroup, {
                    children: (0, a.jsx)(
                      u.MenuItem,
                      {
                        id: "favorite-".concat(s.channel.id),
                        label: s.channel.name,
                        action: () =>
                          E("null" === s.channel.id ? null : s.channel.id),
                      },
                      s.channel.id,
                    ),
                  }),
                (0, a.jsx)(u.MenuGroup, {
                  children: I.map((e) =>
                    (0, a.jsx)(
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
        let n = (0, r.e7)([s.Z], () => s.Z.isFavorite(e.id));
        return __OVERLAY__ || !n
          ? null
          : (0, a.jsx)(u.MenuItem, {
              id: "favorite-channel",
              label: f(e, !0),
              color: "danger",
              action: () =>
                e.type === M.d4z.GUILD_CATEGORY
                  ? (0, u.openModalLazy)(async () => {
                      let { default: n } = await t
                        .e("37720")
                        .then(t.bind(t, 357632));
                      return (t) =>
                        (0, a.jsx)(n, {
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
      var a = t(735250);
      t(470079);
      var l = t(442837),
        i = t(481060),
        r = t(914010),
        u = t(362658),
        o = t(981631),
        s = t(689938);
      function d(e) {
        let n = (0, l.e7)([r.Z], () => r.Z.getGuildId()),
          d = e.type === o.d4z.GUILD_CATEGORY,
          { isFavoritesPerk: c } = (0, u.z)("useChannelFavoriteSetNickname");
        return __OVERLAY__ || n !== o.I_8
          ? null
          : (0, a.jsx)(i.MenuItem, {
              id: "set-channel-nickname",
              label:
                c && d
                  ? s.Z.Messages.FAVORITES_RENAME_CATEGORY
                  : s.Z.Messages.CHANGE_NICKNAME,
              action: function () {
                (0, i.openModalLazy)(async () => {
                  let { default: n } = await t
                    .e("46161")
                    .then(t.bind(t, 238716));
                  return (t) =>
                    (0, a.jsx)(n, {
                      ...t,
                      channelId: e.id,
                      heading:
                        c && d
                          ? s.Z.Messages.FAVORITES_RENAME_CATEGORY
                          : s.Z.Messages.CHANGE_NICKNAME,
                      formTitle:
                        c && d
                          ? s.Z.Messages.CATEGORY_NAME
                          : s.Z.Messages.NICKNAME,
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
          return s;
        },
      }),
        t(653041),
        t(47120);
      var a = t(735250);
      t(470079);
      var l = t(481060),
        i = t(117984),
        r = t(593214),
        u = t(362658),
        o = t(689938);
      function s(e) {
        let n = (0, r.Mt)(),
          t = (0, r.s4)(e.id),
          s = (0, r.zv)(),
          { isFavoritesPerk: d } = (0, u.z)("useChannelMoveToCategory");
        if (__OVERLAY__ || !n || null == t || !d) return null;
        let [c, _] = (function (e) {
          let n = [],
            t = null;
          for (let a of e) null == a.id ? (t = a) : n.push(a);
          return [t, n];
        })(s.filter((e) => e.id !== (null == t ? void 0 : t.parentId)));
        function M(e) {
          null != t && (0, i.uA)(t.id, e);
        }
        return null == c && 0 === _.length
          ? null
          : (0, a.jsxs)(l.MenuItem, {
              id: "move-to-category",
              label: o.Z.Messages.MOVE_TO,
              children: [
                null != c &&
                  (0, a.jsx)(l.MenuGroup, {
                    children: (0, a.jsx)(l.MenuItem, {
                      id: "favorite-uncategorized",
                      label: c.name,
                      action: () => M(c.id),
                    }),
                  }),
                _.length > 0 &&
                  (0, a.jsx)(l.MenuGroup, {
                    children: _.map((e) => {
                      let { id: n, name: t } = e;
                      return (0, a.jsx)(
                        l.MenuItem,
                        {
                          id: "favorite-".concat(n),
                          label: t,
                          action: () => M(n),
                        },
                        n,
                      );
                    }),
                  }),
              ],
            });
      }
    },
    122074: function (e, n, t) {
      t.d(n, {
        U: function () {
          return v;
        },
        Uf: function () {
          return Z;
        },
        ng: function () {
          return g;
        },
      }),
        t(47120);
      var a = t(735250),
        l = t(470079),
        i = t(442837),
        r = t(704215),
        u = t(481060),
        o = t(436774),
        s = t(706140),
        d = t(9156),
        c = t(594174),
        _ = t(74538),
        M = t(759198),
        I = t(11352),
        f = t(213931),
        E = t(767157),
        N = t(112440),
        C = t(671105),
        h = t(552958),
        T = t(981631),
        x = t(921944),
        O = t(871465),
        m = t(689938),
        A = t(100210);
      function g(e, n) {
        let t = I.Y.useExperiment(
            { location: "guild_context_menu" },
            { autoTrackExposure: !0 },
          ),
          l = U(
            e,
            void 0,
            r.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE,
            t.nestedEntry ? "trailing" : "top",
          ),
          i = (t.nestedEntry && n) || (!t.nestedEntry && !n);
        return (0, a.jsx)(a.Fragment, { children: i && l });
      }
      function Z(e, n, t) {
        return U(e, n, r.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GDM_DM_BADGE, t);
      }
      function v() {
        let e = I.Y.useExperiment(
            { location: "guild_context_menu" },
            { autoTrackExposure: !0 },
          ),
          [n] = (0, s.cv)([r.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE]);
        return (0, a.jsx)(a.Fragment, {
          children:
            e.enabled &&
            e.nestedEntry &&
            n === r.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE &&
            (0, a.jsx)(u.TextBadge, {
              className: A.newBadge,
              text: m.Z.Messages.NEW,
            }),
        });
      }
      function U(e, n, r, g) {
        var Z, v;
        let U = (0, C.OR)(e),
          S = (0, C._c)(e, n),
          p = (0, i.e7)([c.default], () => c.default.getCurrentUser()),
          j = (0, i.e7)([d.ZP], () => d.ZP.isMuted(e), [e]),
          G = _.ZP.canUseCustomNotificationSounds(p),
          b = G ? (null != S ? S : U) : O.YC.CLASSIC,
          R = I.Y.useExperiment(
            { location: "guild_context_menu" },
            { autoTrackExposure: !0 },
          ).enabled,
          [D, L] = l.useState(!1),
          { playSound: y } = (0, h.Z)(),
          [P, F] = (0, s.cv)([r]),
          k = P === r;
        if (
          (l.useEffect(
            () => () => {
              D && F(x.L.TAKE_ACTION);
            },
            [D, F],
          ),
          !R)
        )
          return null;
        let w = (t) => {
            if ((y(t), F(x.L.TAKE_ACTION), !G && t !== O.YC.CLASSIC)) {
              (0, E.Z)(t, "contextMenu"), (0, N.Z)();
              return;
            }
            null != n
              ? (0, f.M)(e, n, b, t, "contextMenu")
              : (0, f.t)(e, b, t, "contextMenu");
          },
          z = G ? u.Text : M.Z,
          V = (0, O.LB)(),
          Y =
            null !==
              (v =
                null === (Z = V.find((e) => e.value === b)) || void 0 === Z
                  ? void 0
                  : Z.label) && void 0 !== v
              ? v
              : m.Z.Messages.SOUNDPACK_DEFAULT_LABEL,
          B = (0, a.jsx)(u.TextBadge, {
            className: A.newBadge,
            text: m.Z.Messages.NEW,
          });
        return (0, a.jsx)(u.MenuItem, {
          id: "notification-sounds",
          label: (e) => {
            let { isFocused: n } = e;
            return (
              n && L(n),
              (0, a.jsxs)("div", {
                className: A.rootContainer,
                children: [
                  (0, a.jsxs)("div", {
                    children: [
                      k && "top" === g && B,
                      (0, a.jsxs)("div", {
                        className: A.headerContainer,
                        children: [
                          (0, a.jsx)(z, {
                            className: A.text,
                            color: n ? "always-white" : void 0,
                            variant: "text-sm/medium",
                            children:
                              m.Z.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND,
                          }),
                          (0, a.jsx)(u.NitroWheelIcon, {
                            size: "xs",
                            className: A.nitroWheel,
                            color: n
                              ? "white"
                              : G
                                ? void 0
                                : o.JX.PREMIUM_TIER_2,
                          }),
                        ],
                      }),
                      null != Y &&
                        (0, a.jsx)(z, {
                          className: A.text,
                          color: n ? "always-white" : void 0,
                          variant: "text-xs/normal",
                          children: Y,
                        }),
                    ],
                  }),
                  k && "trailing" === g && B,
                ],
              })
            );
          },
          action:
            e !== T.aIL
              ? () =>
                  (0, u.openModalLazy)(async () => {
                    let { default: n } = await Promise.all([
                      t.e("5863"),
                      t.e("17468"),
                    ]).then(t.bind(t, 751212));
                    return (t) => (0, a.jsx)(n, { ...t, guildId: e });
                  })
              : void 0,
          hasSubmenu: !0,
          children: (0, a.jsxs)(u.MenuGroup, {
            children: [
              V.map((e, n) =>
                (0, a.jsxs)(
                  l.Fragment,
                  {
                    children: [
                      G || e.value === O.YC.CLASSIC
                        ? (0, a.jsx)(u.MenuRadioItem, {
                            id: e.label,
                            group: "notification-preset",
                            checked: (null != b ? b : O.YC.CLASSIC) === e.value,
                            label: e.label,
                            action: () => w(e.value),
                          })
                        : (0, a.jsx)(u.MenuItem, {
                            id: e.label,
                            label: (n) => {
                              let { isFocused: t } = n;
                              return (0, a.jsxs)("div", {
                                className: A.labelContainer,
                                children: [
                                  (0, a.jsx)(M.Z, {
                                    color: t ? "always-white" : void 0,
                                    variant: "text-sm/medium",
                                    children: e.label,
                                  }),
                                  (0, a.jsx)(u.CirclePlayIcon, {
                                    className: A.playButton,
                                    color: t
                                      ? u.tokens.colors.INTERACTIVE_ACTIVE
                                      : u.tokens.colors.INTERACTIVE_NORMAL,
                                  }),
                                ],
                              });
                            },
                            action: () => w(e.value),
                          }),
                      e.value === O.YC.CLASSIC
                        ? (0, a.jsx)(u.MenuSeparator, {})
                        : null,
                    ],
                  },
                  n,
                ),
              ),
              j &&
                (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)(u.MenuSeparator, {}),
                    (0, a.jsx)(u.MenuItem, {
                      id: "label",
                      label: (0, a.jsx)(u.Text, {
                        className: A.mutedLabel,
                        variant: "text-sm/medium",
                        children:
                          m.Z.Messages
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
      var a = t(470079),
        l = t(974180),
        i = t(557177);
      function r() {
        let [e, n] = a.useState(),
          t = a.useRef(-1);
        return {
          playSound: a.useCallback((e) => {
            n(e),
              i.GN(
                l.Ay,
                l.yk,
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
          return s;
        },
        t: function () {
          return o;
        },
      });
      var a = t(381499),
        l = t(675478),
        i = t(592125),
        r = t(626135),
        u = t(981631);
      function o(e, n, t, i) {
        if (n !== t)
          (0, l.PS)(
            e,
            (e) => {
              e.customNotificationSoundConfig = {
                notificationSoundPackId: a.Gm.create({ value: t }),
              };
            },
            l.fy.INFREQUENT_USER_ACTION,
          ),
            r.default.track(u.rMx.CUSTOM_NOTIFICATION_SOUND_SETTINGS_UPDATED, {
              guild_id: e,
              location: i,
              soundpack: t,
            });
      }
      function s(e, n, t, o, s) {
        var d;
        if (t !== o)
          (0, l.BU)(
            e,
            n,
            (e) => {
              e.customNotificationSoundConfig = {
                notificationSoundPackId: a.Gm.create({ value: o }),
              };
            },
            l.fy.INFREQUENT_USER_ACTION,
          ),
            r.default.track(u.rMx.CUSTOM_NOTIFICATION_SOUND_SETTINGS_UPDATED, {
              guild_id: e,
              channel_id: n,
              channel_type:
                null === (d = i.Z.getChannel(n)) || void 0 === d
                  ? void 0
                  : d.type,
              location: s,
              soundpack: o,
            });
      }
    },
    767157: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return i;
        },
      });
      var a = t(626135),
        l = t(981631);
      function i(e, n) {
        a.default.track(l.rMx.CUSTOM_NOTIFICATION_SOUND_OPTION_PLAYED, {
          location: n,
          soundpack: e,
        });
      }
    },
    112440: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return i;
        },
      });
      var a = t(735250);
      t(470079);
      var l = t(481060);
      function i() {
        (0, l.openModalLazy)(async () => {
          let { default: e } = await t.e("72323").then(t.bind(t, 933006));
          return (n) => (0, a.jsx)(e, { ...n });
        });
      }
    },
    100210: function (e, n, t) {
      e.exports = {
        rootContainer: "rootContainer_e45ea8",
        headerContainer: "headerContainer_e45ea8",
        text: "text_e45ea8",
        newBadge: "newBadge_e45ea8",
        nitroWheel: "nitroWheel_e45ea8",
        labelContainer: "labelContainer_e45ea8",
        playButton: "playButton_e45ea8",
        mutedLabel: "mutedLabel_e45ea8",
      };
    },
  },
]);
//# sourceMappingURL=e7fe4dd098dd0e197624.js.map
