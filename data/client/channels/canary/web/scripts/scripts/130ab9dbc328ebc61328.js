"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["25421"],
  {
    354741: function (n, e, t) {
      t.r(e);
      var i = t(200651);
      t(192379);
      var l = t(481060),
        a = t(493683),
        r = t(239091),
        u = t(883385),
        o = t(108843),
        d = t(947440),
        c = t(100527),
        s = t(299206),
        f = t(895563),
        h = t(212205),
        x = t(62420),
        I = t(122074),
        m = t(314897),
        _ = t(858687),
        M = t(461535),
        C = t(776568),
        g = t(981631),
        v = t(388032);
      e.default = (0, o.Z)(
        (0, u.Z)(
          function (n) {
            let { channel: e, selected: u, onSelect: o } = n,
              c = e.isOwner(m.default.getId()),
              p = (0, M.Z)(e),
              T = (0, C.ZP)(e),
              j = (0, I.Uf)(g.aIL, e.id, "top"),
              N = (0, _.Z)(e, u),
              O = (0, s.Z)({ id: e.id, label: v.intl.string(v.t.gFHI3t) }),
              E = (0, d.Z)(e),
              S = (0, f.l)(e),
              b = (0, f.P)(e),
              Z = (0, h.Z)(e),
              U = (0, x.Z)(e);
            return null == e || e.isManaged()
              ? null
              : (0, i.jsxs)(l.Menu, {
                  navId: "gdm-context",
                  "aria-label": v.intl.string(v.t.Xm41aW),
                  onClose: r.Zy,
                  onSelect: o,
                  children: [
                    (0, i.jsx)(l.MenuGroup, { children: p }),
                    (0, i.jsxs)(l.MenuGroup, { children: [S, Z, U] }),
                    (0, i.jsxs)(l.MenuGroup, {
                      children: [
                        c
                          ? (0, i.jsx)(l.MenuItem, {
                              id: "instant-invites",
                              label: v.intl.string(v.t.ngRFjY),
                              action: () =>
                                (0, l.openModalLazy)(async () => {
                                  let { default: n } = await t
                                    .e("97573")
                                    .then(t.bind(t, 892382));
                                  return (t) =>
                                    (0, i.jsx)(n, { channelId: e.id, ...t });
                                }),
                            })
                          : null,
                        (0, i.jsx)(l.MenuControlItem, {
                          id: "change-icon",
                          showDefaultFocus: !0,
                          control: (n, t) =>
                            (0, i.jsx)(l.MenuImageUploadControl, {
                              onChange: (t) => {
                                var i;
                                a.Z.setIcon(e.id, t),
                                  null === (i = n.onClose) ||
                                    void 0 === i ||
                                    i.call(n);
                              },
                              multiple: !1,
                              "aria-label": v.intl.string(v.t["6yrpFR"]),
                              ...n,
                              ref: t,
                            }),
                          label: v.intl.string(v.t["6yrpFR"]),
                        }),
                        null != e.icon
                          ? (0, i.jsx)(l.MenuItem, {
                              id: "remove-icon",
                              label: v.intl.string(v.t["uY+Nk5"]),
                              action: () => a.Z.setIcon(e.id, null),
                            })
                          : null,
                      ],
                    }),
                    (0, i.jsx)(l.MenuGroup, { children: E }),
                    (0, i.jsxs)(l.MenuGroup, { children: [T, j] }),
                    (0, i.jsx)(l.MenuGroup, { children: N }),
                    (0, i.jsx)(l.MenuGroup, { children: b }),
                    (0, i.jsx)(l.MenuGroup, { children: O }),
                  ],
                });
          },
          { object: g.qAy.CONTEXT_MENU },
        ),
        [c.Z.CONTEXT_MENU, c.Z.GROUP_DM_MENU],
      );
    },
    858687: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return s;
        },
      });
      var i = t(200651),
        l = t(192379),
        a = t(481060),
        r = t(493683),
        u = t(699516),
        o = t(594174),
        d = t(933557),
        c = t(388032);
      function s(n, e) {
        let s = l.useCallback(() => {
          let l = (0, d.F6)(n, o.default, u.Z),
            s = c.intl.formatToPlainString(c.t.hJ5Ap6, { name: l }),
            f = c.intl.format(c.t.SSIVOj, { name: l });
          n.isManaged() &&
            ((s = c.intl.formatToPlainString(c.t.hVGjER, { name: l })),
            (f = c.intl.format(c.t.IK1Qvr, { name: l })));
          let h = function (t) {
            let i =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            r.Z.closePrivateChannel(n.id, e, i);
          };
          (0, a.openModalLazy)(async () => {
            let { default: n } = await t.e("14604").then(t.bind(t, 960670));
            return (e) =>
              (0, i.jsx)(n, { header: s, body: f, onSubmit: h, ...e });
          });
        }, [n, e]);
        return (0, i.jsx)(a.MenuItem, {
          id: "leave-channel",
          label: c.intl.string(c.t["26C4oq"]),
          action: s,
          color: "danger",
        });
      }
    },
    461535: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return I;
        },
      }),
        t(47120);
      var i = t(200651);
      t(192379);
      var l = t(442837),
        a = t(481060),
        r = t(45114),
        u = t(456269),
        o = t(344185),
        d = t(569471),
        c = t(131704),
        s = t(324067),
        f = t(306680),
        h = t(981631),
        x = t(388032);
      function I(n) {
        let e = (function (n) {
          let e = (0, u.n2)(n.guild_id, n.id),
            t = (0, l.e7)(
              [f.ZP, s.Z, o.Z, d.Z],
              () => {
                if (n.isForumPost()) return f.ZP.isForumPostUnread(n.id);
                if (n.type !== h.d4z.GUILD_CATEGORY)
                  return f.ZP.hasUnreadOrMentions(n.id);
                {
                  let e = s.Z.getCategories(n.getGuildId());
                  if (null == e[n.id]) return !1;
                  if (
                    e[n.id].some((n) => {
                      let { channel: e } = n;
                      return (
                        (0, c.Em)(e.type) && f.ZP.hasUnreadOrMentions(e.id)
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
        return (0, i.jsx)(a.MenuItem, {
          id: "mark-channel-read",
          label: x.intl.string(x.t.e6RscX),
          action: function () {
            (0, r.U6)(n);
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
          return m;
        },
      }),
        t(47120);
      var i = t(200651);
      t(192379);
      var l = t(392711),
        a = t.n(l),
        r = t(442837),
        u = t(481060),
        o = t(984933),
        d = t(853856),
        c = t(117984),
        s = t(593214),
        f = t(362658),
        h = t(981631),
        x = t(388032);
      function I(n, e) {
        return n.type === h.d4z.GROUP_DM
          ? e
            ? x.intl.string(x.t["0BWmSE"])
            : x.intl.string(x.t.uuVTOD)
          : n.type === h.d4z.DM
            ? e
              ? x.intl.string(x.t["2wfKGh"])
              : x.intl.string(x.t.wPbAsb)
            : e
              ? x.intl.string(x.t.Bou7lZ)
              : x.intl.string(x.t["4wcdEx"]);
      }
      function m(n) {
        let e = (0, r.e7)([o.ZP], () => o.ZP.getChannels(h.I_8))[
            h.d4z.GUILD_CATEGORY
          ],
          { isFavoritesPerk: t } = (0, f.z)("58e21a_1"),
          { notifyFavoriteAdded: l } = (0, s.up)();
        if (!(0, s.li)(n)) return null;
        let [[d], x] = a().partition(e, (n) => "null" === n.channel.id);
        function m(e) {
          l(), (0, c.kj)(n.id, e);
        }
        return 0 === x.length
          ? (0, i.jsx)(u.MenuItem, {
              id: "favorite-channel",
              label: I(n, !1),
              action: () => m(null),
            })
          : (0, i.jsxs)(u.MenuItem, {
              id: "favorite-channel",
              label: I(n, !1),
              action: () => m(null),
              children: [
                t &&
                  (0, i.jsx)(u.MenuGroup, {
                    children: (0, i.jsx)(
                      u.MenuItem,
                      {
                        id: "favorite-".concat(d.channel.id),
                        label: d.channel.name,
                        action: () =>
                          m("null" === d.channel.id ? null : d.channel.id),
                      },
                      d.channel.id,
                    ),
                  }),
                (0, i.jsx)(u.MenuGroup, {
                  children: x.map((n) =>
                    (0, i.jsx)(
                      u.MenuItem,
                      {
                        id: "favorite-".concat(n.channel.id),
                        label: n.channel.name,
                        action: () => m(n.channel.id),
                      },
                      n.channel.id,
                    ),
                  ),
                }),
              ],
            });
      }
      function _(n) {
        let e = (0, r.e7)([d.Z], () => d.Z.isFavorite(n.id));
        return __OVERLAY__ || !e
          ? null
          : (0, i.jsx)(u.MenuItem, {
              id: "favorite-channel",
              label: I(n, !0),
              color: "danger",
              action: () =>
                n.type === h.d4z.GUILD_CATEGORY
                  ? (0, u.openModalLazy)(async () => {
                      let { default: e } = await t
                        .e("37720")
                        .then(t.bind(t, 357632));
                      return (t) =>
                        (0, i.jsx)(e, {
                          ...t,
                          onConfirm: () => {
                            t.onClose(), (0, c.oC)(n.id);
                          },
                          channel: n,
                        });
                    })
                  : (0, c.oC)(n.id),
            });
      }
    },
    212205: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return c;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(442837),
        a = t(481060),
        r = t(914010),
        u = t(362658),
        o = t(981631),
        d = t(388032);
      function c(n) {
        let e = (0, l.e7)([r.Z], () => r.Z.getGuildId()),
          c = n.type === o.d4z.GUILD_CATEGORY,
          { isFavoritesPerk: s } = (0, u.z)("useChannelFavoriteSetNickname");
        return __OVERLAY__ || e !== o.I_8
          ? null
          : (0, i.jsx)(a.MenuItem, {
              id: "set-channel-nickname",
              label:
                s && c ? d.intl.string(d.t.xXYKiI) : d.intl.string(d.t.dilOFx),
              action: function () {
                (0, a.openModalLazy)(async () => {
                  let { default: e } = await t
                    .e("46161")
                    .then(t.bind(t, 238716));
                  return (t) =>
                    (0, i.jsx)(e, {
                      ...t,
                      channelId: n.id,
                      heading:
                        s && c
                          ? d.intl.string(d.t.xXYKiI)
                          : d.intl.string(d.t.dilOFx),
                      formTitle:
                        s && c
                          ? d.intl.string(d.t.OCAkGB)
                          : d.intl.string(d.t["621LJC"]),
                      allowReset: !(s && c),
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
      var l = t(481060),
        a = t(117984),
        r = t(593214),
        u = t(362658),
        o = t(388032);
      function d(n) {
        let e = (0, r.Mt)(),
          t = (0, r.s4)(n.id),
          d = (0, r.zv)(),
          { isFavoritesPerk: c } = (0, u.z)("useChannelMoveToCategory");
        if (__OVERLAY__ || !e || null == t || !c) return null;
        let [s, f] = (function (n) {
          let e = [],
            t = null;
          for (let i of n) null == i.id ? (t = i) : e.push(i);
          return [t, e];
        })(d.filter((n) => n.id !== (null == t ? void 0 : t.parentId)));
        function h(n) {
          null != t && (0, a.uA)(t.id, n);
        }
        return null == s && 0 === f.length
          ? null
          : (0, i.jsxs)(l.MenuItem, {
              id: "move-to-category",
              label: o.intl.string(o.t.FAplmp),
              children: [
                null != s &&
                  (0, i.jsx)(l.MenuGroup, {
                    children: (0, i.jsx)(l.MenuItem, {
                      id: "favorite-uncategorized",
                      label: s.name,
                      action: () => h(s.id),
                    }),
                  }),
                f.length > 0 &&
                  (0, i.jsx)(l.MenuGroup, {
                    children: f.map((n) => {
                      let { id: e, name: t } = n;
                      return (0, i.jsx)(
                        l.MenuItem,
                        {
                          id: "favorite-".concat(e),
                          label: t,
                          action: () => h(e),
                        },
                        e,
                      );
                    }),
                  }),
              ],
            });
      }
    },
    122074: function (n, e, t) {
      t.d(e, {
        U: function () {
          return E;
        },
        Uf: function () {
          return O;
        },
        ng: function () {
          return N;
        },
      }),
        t(47120);
      var i = t(200651),
        l = t(192379),
        a = t(442837),
        r = t(704215),
        u = t(481060),
        o = t(436774),
        d = t(706140),
        c = t(9156),
        s = t(594174),
        f = t(74538),
        h = t(759198),
        x = t(11352),
        I = t(213931),
        m = t(767157),
        _ = t(112440),
        M = t(671105),
        C = t(552958),
        g = t(981631),
        v = t(921944),
        p = t(871465),
        T = t(388032),
        j = t(276781);
      function N(n, e) {
        let t = x.Y.useExperiment(
            { location: "guild_context_menu" },
            { autoTrackExposure: !0 },
          ),
          l = S(
            n,
            void 0,
            r.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE,
            t.nestedEntry ? "trailing" : "top",
          ),
          a = (t.nestedEntry && e) || (!t.nestedEntry && !e);
        return (0, i.jsx)(i.Fragment, { children: a && l });
      }
      function O(n, e, t) {
        return S(n, e, r.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GDM_DM_BADGE, t);
      }
      function E() {
        let n = x.Y.useExperiment(
            { location: "guild_context_menu" },
            { autoTrackExposure: !0 },
          ),
          [e] = (0, d.cv)([r.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE]);
        return (0, i.jsx)(i.Fragment, {
          children:
            n.enabled &&
            n.nestedEntry &&
            e === r.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE &&
            (0, i.jsx)(u.TextBadge, {
              className: j.newBadge,
              text: T.intl.string(T.t.y2b7CA),
            }),
        });
      }
      function S(n, e, r, N) {
        var O, E;
        let S = (0, M.OR)(n),
          b = (0, M._c)(n, e),
          Z = (0, a.e7)([s.default], () => s.default.getCurrentUser()),
          U = (0, a.e7)([c.ZP], () => c.ZP.isMuted(n), [n]),
          y = f.ZP.canUseCustomNotificationSounds(Z),
          A = y ? (null != b ? b : S) : p.YC.CLASSIC,
          G = x.Y.useExperiment(
            { location: "guild_context_menu" },
            { autoTrackExposure: !0 },
          ).enabled,
          [P, L] = l.useState(!1),
          { playSound: R } = (0, C.Z)(),
          [D, F] = (0, d.cv)([r]),
          w = D === r;
        if (
          (l.useEffect(
            () => () => {
              P && F(v.L.TAKE_ACTION);
            },
            [P, F],
          ),
          !G)
        )
          return null;
        let k = (t) => {
            if ((R(t), F(v.L.TAKE_ACTION), !y && t !== p.YC.CLASSIC)) {
              (0, m.Z)(t, "contextMenu"), (0, _.Z)();
              return;
            }
            null != e
              ? (0, I.M)(n, e, A, t, "contextMenu")
              : (0, I.t)(n, A, t, "contextMenu");
          },
          z = y ? u.Text : h.Z,
          Y = (0, p.LB)(),
          B =
            null !==
              (E =
                null === (O = Y.find((n) => n.value === A)) || void 0 === O
                  ? void 0
                  : O.label) && void 0 !== E
              ? E
              : T.intl.string(T.t.p3Hg5e),
          V = (0, i.jsx)(u.TextBadge, {
            className: j.newBadge,
            text: T.intl.string(T.t.y2b7CA),
          });
        return (0, i.jsx)(u.MenuItem, {
          id: "notification-sounds",
          label: (n) => {
            let { isFocused: e } = n;
            return (
              e && L(e),
              (0, i.jsxs)("div", {
                className: j.rootContainer,
                children: [
                  (0, i.jsxs)("div", {
                    children: [
                      w && "top" === N && V,
                      (0, i.jsxs)("div", {
                        className: j.headerContainer,
                        children: [
                          (0, i.jsx)(z, {
                            className: j.text,
                            color: e ? "always-white" : void 0,
                            variant: "text-sm/medium",
                            children: T.intl.string(T.t.mrqSOj),
                          }),
                          (0, i.jsx)(u.NitroWheelIcon, {
                            size: "xs",
                            className: j.nitroWheel,
                            color: e
                              ? "white"
                              : y
                                ? void 0
                                : o.JX.PREMIUM_TIER_2,
                          }),
                        ],
                      }),
                      null != B &&
                        (0, i.jsx)(z, {
                          className: j.text,
                          color: e ? "always-white" : void 0,
                          variant: "text-xs/normal",
                          children: B,
                        }),
                    ],
                  }),
                  w && "trailing" === N && V,
                ],
              })
            );
          },
          action:
            n !== g.aIL
              ? () =>
                  (0, u.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                      t.e("5863"),
                      t.e("30872"),
                    ]).then(t.bind(t, 751212));
                    return (t) => (0, i.jsx)(e, { ...t, guildId: n });
                  })
              : void 0,
          hasSubmenu: !0,
          children: (0, i.jsxs)(u.MenuGroup, {
            children: [
              Y.map((n, e) =>
                (0, i.jsxs)(
                  l.Fragment,
                  {
                    children: [
                      y || n.value === p.YC.CLASSIC
                        ? (0, i.jsx)(u.MenuRadioItem, {
                            id: n.label,
                            group: "notification-preset",
                            checked: (null != A ? A : p.YC.CLASSIC) === n.value,
                            label: n.label,
                            action: () => k(n.value),
                          })
                        : (0, i.jsx)(u.MenuItem, {
                            id: n.label,
                            label: (e) => {
                              let { isFocused: t } = e;
                              return (0, i.jsxs)("div", {
                                className: j.labelContainer,
                                children: [
                                  (0, i.jsx)(h.Z, {
                                    color: t ? "always-white" : void 0,
                                    variant: "text-sm/medium",
                                    children: n.label,
                                  }),
                                  (0, i.jsx)(u.CirclePlayIcon, {
                                    className: j.playButton,
                                    color: t
                                      ? u.tokens.colors.INTERACTIVE_ACTIVE
                                      : u.tokens.colors.INTERACTIVE_NORMAL,
                                  }),
                                ],
                              });
                            },
                            action: () => k(n.value),
                          }),
                      n.value === p.YC.CLASSIC
                        ? (0, i.jsx)(u.MenuSeparator, {})
                        : null,
                    ],
                  },
                  e,
                ),
              ),
              U &&
                (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)(u.MenuSeparator, {}),
                    (0, i.jsx)(u.MenuItem, {
                      id: "label",
                      label: (0, i.jsx)(u.Text, {
                        className: j.mutedLabel,
                        variant: "text-sm/medium",
                        children: T.intl.string(T.t["a9G/ER"]),
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
          return r;
        },
      }),
        t(47120);
      var i = t(192379),
        l = t(974180),
        a = t(557177);
      function r() {
        let [n, e] = i.useState(),
          t = i.useRef(-1);
        return {
          playSound: i.useCallback((n) => {
            e(n),
              a.GN(
                l.Ay,
                l.yk,
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
        l = t(675478),
        a = t(592125),
        r = t(626135),
        u = t(981631);
      function o(n, e, t, a) {
        if (e !== t)
          (0, l.PS)(
            n,
            (n) => {
              n.customNotificationSoundConfig = {
                notificationSoundPackId: i.Gm.create({ value: t }),
              };
            },
            l.fy.INFREQUENT_USER_ACTION,
          ),
            r.default.track(u.rMx.CUSTOM_NOTIFICATION_SOUND_SETTINGS_UPDATED, {
              guild_id: n,
              location: a,
              soundpack: t,
            });
      }
      function d(n, e, t, o, d) {
        var c;
        if (t !== o)
          (0, l.BU)(
            n,
            e,
            (n) => {
              n.customNotificationSoundConfig = {
                notificationSoundPackId: i.Gm.create({ value: o }),
              };
            },
            l.fy.INFREQUENT_USER_ACTION,
          ),
            r.default.track(u.rMx.CUSTOM_NOTIFICATION_SOUND_SETTINGS_UPDATED, {
              guild_id: n,
              channel_id: e,
              channel_type:
                null === (c = a.Z.getChannel(e)) || void 0 === c
                  ? void 0
                  : c.type,
              location: d,
              soundpack: o,
            });
      }
    },
    767157: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return a;
        },
      });
      var i = t(626135),
        l = t(981631);
      function a(n, e) {
        i.default.track(l.rMx.CUSTOM_NOTIFICATION_SOUND_OPTION_PLAYED, {
          location: e,
          soundpack: n,
        });
      }
    },
    112440: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return a;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(481060);
      function a() {
        (0, l.openModalLazy)(async () => {
          let { default: n } = await t.e("72323").then(t.bind(t, 933006));
          return (e) => (0, i.jsx)(n, { ...e });
        });
      }
    },
    276781: function (n, e, t) {
      n.exports = {
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
//# sourceMappingURL=130ab9dbc328ebc61328.js.map
