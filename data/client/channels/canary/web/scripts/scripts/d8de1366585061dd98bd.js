"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["39352"],
  {
    296507: function (e) {
      e.exports = "/assets/8447e4e321cc04bd6a4c.svg";
    },
    866402: function (e) {
      e.exports = "/assets/9d5696b9d1f0b77fd074.svg";
    },
    241155: function (e, n, t) {
      t(47120);
      var l,
        i,
        r,
        a,
        o = t(392711),
        c = t.n(o),
        s = t(442837),
        d = t(570140),
        u = t(924301),
        _ = t(601964),
        h = t(486527);
      let v = !1,
        f = {},
        E = {},
        g = {},
        m = (e) => (
          (g[e.guild_scheduled_event.id] = new _.ZP(
            e.guild_scheduled_event.guild,
          )),
          (E[e.guild_scheduled_event.id] = e.guild_scheduled_event),
          {
            channelId: e.directory_channel_id,
            scheduledEventId: e.entity_id,
            type: h.C2.GUILD_SCHEDULED_EVENT,
            authorId: e.author_id,
            createdAt: e.created_at,
          }
        );
      class x extends (l = s.ZP.Store) {
        isFetching() {
          return v;
        }
        getEventDirectoryEntries(e) {
          if (null != e) return f[e];
        }
        getCachedGuildByEventId(e) {
          var n;
          return null !== (n = g[e]) && void 0 !== n ? n : void 0;
        }
        getCachedGuildScheduledEventById(e) {
          var n;
          return null !== (n = E[e]) && void 0 !== n ? n : void 0;
        }
      }
      (a = "EventDirectoryStore"),
        (r = "displayName") in (i = x)
          ? Object.defineProperty(i, r, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[r] = a),
        (n.Z = new x(d.Z, {
          EVENT_DIRECTORY_FETCH_START: function () {
            v = !0;
          },
          EVENT_DIRECTORY_FETCH_SUCCESS: function (e) {
            let { channelId: n, entries: t } = e;
            v = !1;
            let l = c().sortBy(
                [...t],
                [
                  function (e) {
                    return (0, u.CQ)(e.guild_scheduled_event);
                  },
                ],
              ),
              i = c().map(l, m);
            f[n] = i;
          },
          EVENT_DIRECTORY_FETCH_FAILURE: function () {
            v = !1;
          },
        }));
    },
    951539: function (e, n, t) {
      t.d(n, {
        ZP: function () {
          return E;
        },
        so: function () {
          return f;
        },
        wg: function () {
          return v;
        },
      }),
        t(47120);
      var l = t(442837),
        i = t(159300),
        r = t(427679),
        a = t(592125),
        o = t(984933),
        c = t(430824),
        s = t(496675),
        d = t(700785),
        u = t(924301),
        _ = t(765305),
        h = t(981631);
      function v(e) {
        var n;
        let [t] =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : [a.Z];
        let { entityType: l, channelId: i } =
          "entity_type" in (n = e)
            ? { entityType: n.entity_type, channelId: n.channel_id }
            : n;
        if (l === _.WX.EXTERNAL) return !0;
        let r = t.getChannel(i);
        return null != r && d.Uu(h.Plq.VIEW_CHANNEL, r);
      }
      function f(e) {
        let [n, t, l, d] =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : [o.ZP, a.Z, c.Z, r.Z];
        if ((0, u.Z2)(e)) return !1;
        let { guild_id: h, channel_id: f } = e,
          E =
            e.entity_type === _.WX.EXTERNAL
              ? n.getDefaultChannel(e.guild_id)
              : t.getChannel(f),
          g = l.getGuild(h),
          m = d.getStageInstanceByChannel(f);
        return !!(0, i.b)(s.Z, g, E, m) && null != E && v(e, [t]);
      }
      function E(e) {
        return (0, l.e7)(
          [o.ZP, a.Z, c.Z, r.Z],
          () => f(e, [o.ZP, a.Z, c.Z, r.Z]),
          [e],
        );
      }
    },
    592126: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return a;
        },
      });
      var l = t(442837),
        i = t(241155),
        r = t(430824);
      function a(e, n) {
        return (0, l.cj)(
          [r.Z, i.Z],
          () => {
            let t = r.Z.getGuild(e),
              l = null != t;
            return (
              null == t && null != n && (t = i.Z.getCachedGuildByEventId(n)),
              { isMember: l, guild: t }
            );
          },
          [e, n],
        );
      }
    },
    711373: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      }),
        t(724458),
        t(47120),
        t(653041);
      var l = t(470079),
        i = t(442837),
        r = t(924301),
        a = t(765305);
      function o(e, n) {
        let t = (0, i.Wu)(
            [r.ZP],
            () => Object.values(r.ZP.getUsersForGuildEvent(e, null)),
            [e],
          ),
          o = (0, i.Wu)(
            [r.ZP],
            () => Object.values(r.ZP.getUsersForGuildEvent(e, n)),
            [e, n],
          );
        return (0, l.useMemo)(() => {
          let e = o.reduce((e, n) => ((e[n.user_id] = n), e), {}),
            n = t.filter((n) => {
              let t = e[n.user_id];
              return null == t || t.response === a.gv.INTERESTED;
            }),
            l = o.filter((e) => e.response === a.gv.INTERESTED),
            i = new Set(),
            r = [],
            c = (e) => {
              !i.has(e.user_id) && (r.push(e), i.add(e.user_id));
            };
          return n.forEach(c), l.forEach(c), r;
        }, [t, o]);
      }
    },
    118998: function (e, n, t) {
      t.d(n, {
        H: function () {
          return l;
        },
      });
      let l = (e) => {
        let { guildId: n, guildEventId: t } = e;
        return "https://discord.com/events/".concat(n, "/").concat(t);
      };
    },
    697849: function (e, n, t) {
      t.r(n), t(47120);
      var l = t(735250),
        i = t(470079),
        r = t(442837),
        a = t(481060),
        o = t(100527),
        c = t(906732),
        s = t(313201),
        d = t(724912),
        u = t(41776),
        _ = t(592125),
        h = t(626135),
        v = t(981888),
        f = t(897285),
        E = t(924301),
        g = t(951539),
        m = t(592126),
        x = t(315416),
        I = t(711373),
        Z = t(274311),
        b = t(854698),
        N = t(405613),
        T = t(285784),
        C = t(95291),
        p = t(187443),
        j = t(464766),
        S = t(724278),
        L = t(462747),
        R = t(462179),
        y = t(765305),
        k = t(981631),
        P = t(828819);
      function M(e) {
        let {
            guildEvent: n,
            guild: t,
            channel: i,
            onActionTaken: a,
            isHub: o,
            isMember: c,
            recurrenceId: s,
          } = e,
          d = (0, E.xt)(n),
          _ = (0, r.e7)(
            [E.ZP],
            () => E.ZP.isInterestedInEventRecurrence(n.id, s),
            [s, n],
          ),
          h = (0, g.ZP)(n),
          v = (0, r.e7)([u.Z], () => u.Z.isLurking(t.id), [t.id]),
          f = (0, Z.T)(null == i ? void 0 : i.id, n.id),
          m = (0, R.Z)({
            guild: t,
            channel: i,
            guildScheduledEvent: n,
            isActive: d,
            recurrenceId: s,
            onActionTaken: a,
          }),
          { entity_type: x } = n;
        return o
          ? (0, l.jsx)(p.Z, {
              isActive: d,
              isUserLurking: v,
              rsvped: _,
              isMember: c,
              isDetailsView: !0,
              guildName: null == t ? void 0 : t.name,
              isChannelPublic: f,
              canInvite: h,
              ...m,
            })
          : (0, l.jsx)(T.ZP, {
              isActive: d,
              isUserLurking: v,
              rsvped: _,
              isChannelPublic: f,
              canInvite: h,
              entityType: x,
              ...m,
            });
      }
      n.default = (e) => {
        let {
            guildScheduledEventId: n,
            parentGuildId: t,
            transitionState: u,
            initialRecurrenceId: g,
            onClose: Z,
          } = e,
          { analyticsLocations: T } = (0, c.ZP)(o.Z.GUILD_EVENT_MODAL),
          [p, R] = i.useState(g),
          D = (0, r.e7)([E.ZP], () => E.ZP.getGuildScheduledEvent(n), [n]),
          A = null == D ? void 0 : D.id,
          B = null == D ? void 0 : D.guild_id,
          { guild: G, isMember: U } = (0, m.Z)(B, A),
          w = (0, d.Z)(t),
          O = null == D ? void 0 : D.channel_id,
          V = (0, r.e7)([_.Z], () => _.Z.getChannel(O), [O]),
          F = (0, s.Dt)(),
          [H, z] = i.useState(y.fL.EVENT_INFO),
          X = (0, I.Z)(A, p),
          W = (0, x.Z)(B, A, p),
          [Y, { loading: J, error: K }] = (0, v.Z)(() =>
            f.Z.getGuildEventUsers(null == D ? void 0 : D.id, p, B),
          );
        i.useEffect(() => {
          null == D
            ? Z()
            : h.default.track(k.rMx.OPEN_MODAL, {
                type: y.zw,
                guild_id: D.guild_id,
              });
        }, [D, Z]);
        let q = i.useRef(null),
          [Q, $] = i.useState(0);
        if (
          (i.useLayoutEffect(() => {
            var e, n;
            let t = (null == D ? void 0 : D.recurrence_rule) != null ? 16 : 0;
            $(
              (null !==
                (n =
                  null == q
                    ? void 0
                    : null === (e = q.current) || void 0 === e
                      ? void 0
                      : e.offsetHeight) && void 0 !== n
                ? n
                : 0) + t,
            );
          }, [q, null == D ? void 0 : D.recurrence_rule]),
          null == D || null == G || (!U && !w))
        )
          return null;
        let ee = (e) => {
            if (e !== H) e === y.fL.RSVP_LIST && Y(), z(e);
          },
          en = null != p ? p : (0, b.DK)(D);
        return (0, l.jsx)(c.Gt, {
          value: T,
          children: (0, l.jsxs)(a.ModalRoot, {
            size: a.ModalSize.MEDIUM,
            transitionState: u,
            "aria-labelledby": F,
            className: P.root,
            children: [
              (null == D ? void 0 : D.image) != null &&
                (0, l.jsx)(C.Z, { source: (0, N.Z)(D), className: P.banner }),
              (0, l.jsx)(j.Z, {
                onClose: Z,
                selectedTab: H,
                onTabSelected: ee,
                userCount: W,
                hasBanner: (null == D ? void 0 : D.image) != null,
                isHub: w,
              }),
              (0, l.jsx)("div", {
                className: P.container,
                children: (0, l.jsx)(a.ModalContent, {
                  className: P.contentContainer,
                  style: { height: Q },
                  children: (0, l.jsxs)(a.Slides, {
                    activeSlide: H,
                    width: 600,
                    centered: !1,
                    children: [
                      (0, l.jsx)(a.Slide, {
                        id: y.fL.EVENT_INFO,
                        children: (0, l.jsx)(S.Z, {
                          guildEvent: D,
                          guild: G,
                          channel: V,
                          headerId: F,
                          onClose: Z,
                          onClickInterestedCount: () => ee(y.fL.RSVP_LIST),
                          isHub: w,
                          containerRef: q,
                          recurrenceId: en,
                          setRecurrenceId: R,
                        }),
                      }),
                      (0, l.jsx)(a.Slide, {
                        id: y.fL.RSVP_LIST,
                        children: (0, l.jsx)(L.Z, {
                          guildEvent: D,
                          recurrenceId: en,
                          eventUsers: X,
                          loading: J,
                          containerHeight: Q,
                          error: K,
                        }),
                      }),
                    ],
                  }),
                }),
              }),
              (0, l.jsx)(a.ModalFooter, {
                className: P.footer,
                children: (0, l.jsx)(M, {
                  guildEvent: D,
                  isHub: w,
                  isMember: U,
                  guild: G,
                  channel: V,
                  onActionTaken: Z,
                  recurrenceId: en,
                }),
              }),
            ],
          }),
        });
      };
    },
    464766: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      }),
        t(653041);
      var l = t(735250),
        i = t(470079),
        r = t(120356),
        a = t.n(r),
        o = t(481060),
        c = t(765305),
        s = t(689938),
        d = t(400463);
      function u(e) {
        let {
            onClose: n,
            selectedTab: t,
            onTabSelected: r,
            userCount: u,
            hasBanner: _,
            isHub: h = !1,
          } = e,
          v = i.useRef(null);
        i.useEffect(() => {
          var e, n, t;
          return null === (t = v.current) || void 0 === t
            ? void 0
            : null === (n = t.ref) || void 0 === n
              ? void 0
              : null === (e = n.blur) || void 0 === e
                ? void 0
                : e.call(n);
        }, []);
        let f = s.Z.Messages.GUILD_EVENT_DETAILS_USER_LIST_TAB_TITLE.format({
            userCount: u,
          }),
          E = [
            (0, l.jsx)(
              o.TabBar.Item,
              {
                className: d.tabBarItem,
                id: c.fL.EVENT_INFO,
                children: s.Z.Messages.GUILD_EVENT_DETAILS_INFO_TAB_TITLE,
              },
              "event-details",
            ),
          ];
        return (
          !h &&
            E.push(
              (0, l.jsx)(
                o.TabBar.Item,
                { className: d.tabBarItem, id: c.fL.RSVP_LIST, children: f },
                "is-hub",
              ),
            ),
          (0, l.jsxs)("div", {
            className: d.container,
            children: [
              (0, l.jsx)(o.Clickable, {
                ref: v,
                onClick: n,
                className: d.closeButton,
                "aria-label": s.Z.Messages.CLOSE,
                children: (0, l.jsx)(o.XSmallIcon, {
                  size: "md",
                  color: "currentColor",
                  className: a()(d.closeIcon, _ && d.closeIconBanner),
                }),
              }),
              (0, l.jsx)(o.TabBar, {
                className: d.tabBar,
                "aria-label": s.Z.Messages.OPTIONS,
                selectedItem: t,
                type: "top",
                onItemSelect: r,
                children: E,
              }),
            ],
          })
        );
      }
    },
    724278: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return M;
        },
      });
      var l = t(735250),
        i = t(470079),
        r = t(120356),
        a = t.n(r),
        o = t(442837),
        c = t(481060),
        s = t(447543),
        d = t(906732),
        u = t(565138),
        _ = t(372769),
        h = t(171368),
        v = t(271383),
        f = t(430824),
        E = t(51144),
        g = t(897285),
        m = t(978227),
        x = t(894017),
        I = t(79874),
        Z = t(315416),
        b = t(236373),
        N = t(854698),
        T = t(391174),
        C = t(810561),
        p = t(390966),
        j = t(390072),
        S = t(981631),
        L = t(689938),
        R = t(448144);
      function y(e) {
        var n;
        let { creator: t, guildId: i, channelId: r } = e,
          { analyticsLocations: a } = (0, d.ZP)(),
          s = (0, o.e7)([v.ZP], () => v.ZP.getMember(i, t.id), [t, i]);
        return (0, l.jsxs)("div", {
          className: R.row,
          children: [
            (0, l.jsx)(c.Avatar, {
              size: c.AvatarSizes.SIZE_20,
              src: t.getAvatarURL(i, 20),
              "aria-label":
                null !== (n = null == s ? void 0 : s.nick) && void 0 !== n
                  ? n
                  : E.ZP.getName(t),
              className: R.icon,
            }),
            (0, l.jsx)(c.Text, {
              color: "header-secondary",
              variant: "text-sm/normal",
              children: L.Z.Messages.GUILD_EVENT_CREATED_BY_HOOK.format({
                usernameHook: function () {
                  var e, n;
                  return (0, l.jsx)(
                    c.Clickable,
                    {
                      onClick: () =>
                        (0, h.openUserProfileModal)({
                          guildId: i,
                          channelId: r,
                          userId: t.id,
                          roleId: null == s ? void 0 : s.colorRoleId,
                          sourceAnalyticsLocations: a,
                          analyticsLocation: {
                            section:
                              S.jXE.SCHEDULED_GUILD_EVENT_INFORMATION_DIALOG,
                          },
                        }),
                      className: R.creator,
                      tag: "span",
                      role: "link",
                      children: (0, l.jsx)(c.NameWithRole, {
                        name:
                          null !== (e = null == s ? void 0 : s.nick) &&
                          void 0 !== e
                            ? e
                            : E.ZP.getName(t),
                        color:
                          null !== (n = null == s ? void 0 : s.colorString) &&
                          void 0 !== n
                            ? n
                            : void 0,
                      }),
                    },
                    "open-user-profile",
                  );
                },
              }),
            }),
          ],
        });
      }
      function k(e) {
        let { guild: n, onClick: t, onClose: r } = e,
          o = i.useCallback(
            (e) => {
              null == t || t(e), null != t && (null == r || r(e));
            },
            [t, r],
          ),
          s = (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)(u.Z, {
                guild: n,
                size: u.Z.Sizes.MINI,
                active: !0,
                className: a()(R.guildIcon, R.icon),
              }),
              (0, l.jsx)(_.Z, {
                guild: n,
                tooltipPosition: "top",
                tooltipColor: c.Tooltip.Colors.PRIMARY,
                size: 16,
                className: R.guildBadge,
              }),
              (0, l.jsx)(c.Text, {
                color: "header-secondary",
                variant: "text-sm/normal",
                className: R.linkText,
                children: n.name,
              }),
            ],
          });
        return (0, l.jsx)("div", {
          className: R.row,
          children:
            null != t
              ? (0, l.jsx)(c.Clickable, {
                  onClick: o,
                  className: R.clickable,
                  role: "link",
                  children: s,
                })
              : s,
        });
      }
      function P(e) {
        let { userCount: n, onClick: t } = e;
        return (0, l.jsxs)("div", {
          className: R.row,
          children: [
            (0, l.jsx)(c.GroupIcon, {
              size: "custom",
              color: "currentColor",
              width: 20,
              height: 20,
              className: R.icon,
            }),
            (0, l.jsx)(c.Clickable, {
              onClick: t,
              className: R.interestedCount,
              children: (0, l.jsx)(c.Text, {
                color: "header-secondary",
                variant: "text-sm/normal",
                children: L.Z.Messages.GUILD_EVENT_INTERESTED_COUNT.format({
                  count: n,
                }),
              }),
            }),
          ],
        });
      }
      function M(e) {
        let {
            guildEvent: n,
            guild: t,
            channel: r,
            headerId: a,
            onClose: d,
            onClickInterestedCount: u,
            isHub: _ = !1,
            containerRef: h,
            recurrenceId: v,
            setRecurrenceId: E,
          } = e,
          S = (0, o.e7)([f.Z], () => null != f.Z.getGuild(t.id), [t.id]),
          { startTime: L, endTime: M } = (0, I.ZP)(n, v),
          D = (0, Z.Z)(n.guild_id, n.id, v),
          A = i.useCallback(
            (e) => {
              e.stopPropagation(), null != n && (0, s.B)(n);
            },
            [n],
          ),
          B = (0, x.Z)(v, n.id),
          G = (0, m.Z)(n);
        i.useEffect(() => {
          g.Z.getGuildEventUserCounts(t.id, n.id, null != v ? [v] : []),
            g.Z.getGuildEventsForCurrentUser(t.id);
        }, [t.id, n.id, v]);
        let U = (0, b.KV)(n.recurrence_rule),
          w =
            (null == n ? void 0 : n.scheduled_start_time) != null
              ? (0, N.lh)(
                  B,
                  L,
                  new Date(null == n ? void 0 : n.scheduled_start_time),
                )
              : null;
        return (0, l.jsxs)("div", {
          ref: h,
          children: [
            (0, l.jsxs)("div", {
              className: R.header,
              children: [
                (0, l.jsx)(p.z, {
                  startTime: L.toISOString(),
                  endTime: null == M ? void 0 : M.toISOString(),
                  status: null != w ? w : n.status,
                  eventType: n.entity_type,
                  guildEventId: n.id,
                  recurrenceId: v,
                }),
                (0, l.jsx)(c.Heading, {
                  id: a,
                  variant: "heading-lg/semibold",
                  color: "header-primary",
                  className: R.title,
                  children: n.name,
                }),
              ],
            }),
            (0, l.jsxs)("div", {
              className: R.body,
              children: [
                (0, l.jsx)(k, {
                  guild: t,
                  onClick: S ? A : void 0,
                  onClose: d,
                }),
                (0, l.jsx)(j.Z, {
                  guildScheduledEvent: n,
                  channel: r,
                  onClose: d,
                }),
                null != D && (0, l.jsx)(P, { userCount: D, onClick: u }),
                !_ &&
                  null != G &&
                  (0, l.jsx)(
                    y,
                    {
                      creator: G,
                      guildId: t.id,
                      channelId: null == r ? void 0 : r.id,
                    },
                    G.id,
                  ),
                null != n.description &&
                  (0, l.jsx)("div", {
                    className: R.description,
                    children: (0, l.jsx)(T.Z, {
                      description: n.description,
                      truncate: !1,
                      guildId: t.id,
                    }),
                  }),
              ],
            }),
            null != U && (0, l.jsx)("hr", { className: R.divider }),
            null != U &&
              (0, l.jsx)(C.Z, {
                guildId: t.id,
                recurrenceRule: U,
                guildEventId: n.id,
                onRecurrenceClick: E,
                hideScroller: !0,
                activeRecurrenceId: v,
              }),
          ],
        });
      }
    },
    390072: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var l = t(735250),
        i = t(470079),
        r = t(481060),
        a = t(725436),
        o = t(11868),
        c = t(217804),
        s = t(765305),
        d = t(448144);
      function u(e) {
        let { guildScheduledEvent: n, channel: t, onClose: u } = e,
          _ = n.entity_type === s.WX.EXTERNAL,
          h = i.useCallback((e) => (0, o.Qt)(n, u)(e), [n, u]),
          v = (0, c.u)(n, t);
        if (null == v) return null;
        let { IconComponent: f, locationName: E } = v,
          g = (0, l.jsxs)(l.Fragment, {
            children: [
              null != f &&
                (0, l.jsx)(f, {
                  size: "custom",
                  color: "currentColor",
                  width: 20,
                  height: 20,
                  className: d.channelIcon,
                }),
              (0, l.jsx)(r.Text, {
                color: "header-secondary",
                variant: "text-sm/normal",
                className: d.locationText,
                children: (0, a.m)(E, !0),
              }),
            ],
          });
        return (0, l.jsx)("div", {
          className: d.row,
          children:
            null != h
              ? (0, l.jsx)(r.Clickable, {
                  className: _ ? d.externalLocation : d.channelLocation,
                  onClick: h,
                  children: g,
                })
              : g,
        });
      }
    },
    462747: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return L;
        },
      });
      var l = t(735250);
      t(470079);
      var i = t(120356),
        r = t.n(i),
        a = t(442837),
        o = t(481060),
        c = t(239091),
        s = t(129861),
        d = t(939863),
        u = t(184301),
        _ = t(347475),
        h = t(314897),
        v = t(158776),
        f = t(885110),
        E = t(594174),
        g = t(315416),
        m = t(765305),
        x = t(689938),
        I = t(513994);
      function Z(e) {
        let { children: n } = e;
        return (0, l.jsxs)("div", {
          className: I.emptyContainer,
          children: [
            (0, l.jsx)(d.Z, {
              children: (0, l.jsx)("div", {
                className: I.circle,
                children: (0, l.jsx)(o.GroupIcon, {
                  size: "custom",
                  color: "currentColor",
                  height: 40,
                  width: 40,
                  className: I.icon,
                }),
              }),
            }),
            n,
          ],
        });
      }
      function b() {
        return (0, l.jsx)(Z, {
          children: (0, l.jsx)(o.Heading, {
            color: "header-primary",
            variant: "heading-xl/semibold",
            className: I.title,
            children: x.Z.Messages.GUILD_EVENT_DETAILS_USER_LIST_EMPTY_TITLE,
          }),
        });
      }
      function N() {
        return (0, l.jsx)(Z, {
          children: (0, l.jsx)(o.Heading, {
            color: "header-secondary",
            variant: "heading-md/semibold",
            className: I.errorTitle,
            children: x.Z.Messages.GUILD_EVENT_DETAILS_USER_LIST_FETCH_ERROR,
          }),
        });
      }
      function T(e) {
        let { count: n } = e;
        return (0, l.jsx)(l.Fragment, {
          children: (0, l.jsxs)("div", {
            className: I.listRow,
            children: [
              (0, l.jsx)("div", {
                className: r()(I.listRowCircle, I.listAvatar),
                children: (0, l.jsx)(o.GroupIcon, {
                  size: "custom",
                  color: "currentColor",
                  height: 14,
                  width: 14,
                  className: I.icon,
                }),
              }),
              (0, l.jsx)(o.Text, {
                color: "text-normal",
                variant: "text-md/normal",
                children:
                  x.Z.Messages.GUILD_EVENT_DETAILS_USER_LIST_REMAINING.format({
                    userRemainCount: n,
                  }),
              }),
            ],
          }),
        });
      }
      function C(e) {
        let { eventUser: n, guildId: t, onContextMenu: i } = e,
          c = (0, a.e7)([E.default], () => E.default.getUser(n.user_id)),
          d = (0, a.e7)(
            [f.Z, v.Z, h.default],
            () =>
              n.user_id === h.default.getId()
                ? f.Z.getStatus()
                : v.Z.getStatus(n.user_id, t),
            [n.user_id, t],
          );
        return null == c
          ? null
          : (0, l.jsx)(o.Popout, {
              preload: () =>
                (0, u.Z)(c.id, c.getAvatarURL(t, 80), { guildId: t }),
              renderPopout: (e) =>
                (0, l.jsx)(_.Z, { ...e, userId: n.user_id, guildId: t }),
              position: "left",
              spacing: 16,
              children: (e, a) => {
                var u;
                let { isShown: _ } = a;
                return (0, l.jsxs)(o.Clickable, {
                  className: r()(I.listRow, I.interactiveRow, {
                    [I.selected]: _,
                  }),
                  onContextMenu: (e) => i(e, c),
                  ...e,
                  children: [
                    (0, l.jsx)(o.Avatar, {
                      src: c.getAvatarURL(t, 24),
                      "aria-label": c.username,
                      size: o.AvatarSizes.SIZE_24,
                      className: I.listAvatar,
                      status: d,
                    }),
                    (0, l.jsx)(s.Z, {
                      user: c,
                      className: I.listName,
                      discriminatorClass: I.listDiscriminator,
                      nick:
                        null === (u = n.member) || void 0 === u
                          ? void 0
                          : u.nick,
                    }),
                  ],
                });
              },
            });
      }
      function p(e) {
        let {
          eventUsers: n,
          guildId: t,
          usersNotShownCount: i = 0,
          onContextMenu: r,
        } = e;
        return (0, l.jsxs)(o.ScrollerThin, {
          className: I.listScroller,
          children: [
            n.map((e) =>
              (0, l.jsx)(
                C,
                { guildId: t, eventUser: e, onContextMenu: r },
                e.user_id,
              ),
            ),
            i > 0 && (0, l.jsx)(T, { count: i }),
          ],
        });
      }
      function j(e) {
        let { children: n, style: t } = e;
        return (0, l.jsx)("div", {
          className: I.container,
          style: null != t ? t : {},
          children: n,
        });
      }
      function S(e) {
        let { children: n, height: t } = e;
        return (0, l.jsx)(j, { style: { height: t }, children: n });
      }
      function L(e) {
        let {
            guildEvent: n,
            recurrenceId: i,
            eventUsers: r,
            loading: a,
            error: s,
            containerHeight: d,
          } = e,
          u = (0, g.Z)(n.guild_id, n.id, i);
        if (a && 0 === r.length)
          return (0, l.jsx)(S, {
            height: d,
            children: (0, l.jsx)(o.Spinner, {
              type: o.Spinner.Type.SPINNING_CIRCLE,
              className: I.spinner,
            }),
          });
        if (null != s && 0 === r.length)
          return (0, l.jsx)(S, { height: d, children: (0, l.jsx)(N, {}) });
        let _ = 0;
        return (
          r.length >= m.rC && u > m.rC && (_ = Math.max(u - r.length, 0)),
          0 === r.length
            ? (0, l.jsx)(S, { height: d, children: (0, l.jsx)(b, {}) })
            : (0, l.jsx)(j, {
                children: (0, l.jsx)(p, {
                  eventUsers: r,
                  guildId: n.guild_id,
                  onContextMenu: function (e, n) {
                    (0, c.jW)(e, async () => {
                      let { default: e } = await Promise.all([
                        t.e("79695"),
                        t.e("69220"),
                      ]).then(t.bind(t, 881351));
                      return (t) => (0, l.jsx)(e, { ...t, user: n });
                    });
                  },
                  usersNotShownCount: _,
                }),
              })
        );
      }
    },
    462179: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return S;
        },
      });
      var l = t(735250);
      t(470079);
      var i = t(442837),
        r = t(481060),
        a = t(239091),
        o = t(749210),
        c = t(305325),
        s = t(281956),
        d = t(357156),
        u = t(703656),
        _ = t(922482),
        h = t(984933),
        v = t(430824),
        f = t(496675),
        E = t(626135),
        g = t(572004),
        m = t(482241),
        x = t(951539),
        I = t(894017),
        Z = t(274311),
        b = t(854698),
        N = t(118998),
        T = t(139712),
        C = t(765305),
        p = t(981631),
        j = t(689938);
      function S(e) {
        let {
            guild: n,
            channel: S,
            guildScheduledEvent: L,
            isActive: R,
            recurrenceId: y,
            onActionTaken: k,
          } = e,
          { scheduled_start_time: P, id: M, entity_type: D, guild_id: A } = L,
          { canManageGuildEvent: B } = (0, d.XJ)(null != S ? S : n),
          G = B(L),
          U = (0, x.ZP)(L),
          w = (0, Z.T)(null == S ? void 0 : S.id, L.id),
          { withinStartWindow: O } = (0, b.ub)(P),
          V = (0, i.e7)(
            [f.Z],
            () =>
              (null == S ? !void 0 : !S.isGuildVocal()) ||
              f.Z.can(p.Plq.CONNECT, S),
            [S],
          ),
          F = (0, s.J)(A),
          H = (0, I.Z)(y, M);
        function z(e) {
          e.stopPropagation(), (0, T.Z)(M, y, A);
        }
        async function X(e) {
          e.stopPropagation(),
            await o.Z.joinGuild(A),
            v.Z.addConditionalChangeListener(
              () => null == v.Z.getGuild(A) || (!R && z(e), W(e), !1),
            );
        }
        function W(e) {
          e.stopPropagation();
          let n = h.ZP.getDefaultChannel(A);
          (0, r.closeAllModals)(), (0, u.XU)(A, null == n ? void 0 : n.id);
        }
        return {
          onDeleteClick: G
            ? function (e) {
                if ((e.stopPropagation(), !!G && !R))
                  (0, r.openModal)((e) =>
                    (0, l.jsx)(r.ConfirmModal, {
                      ...e,
                      header: j.Z.Messages.GUILD_EVENT_DELETE_CONFIRM_HEADER,
                      confirmText: j.Z.Messages.DELETE,
                      cancelText: j.Z.Messages.CANCEL,
                      onConfirm: () => m.Z.deleteGuildEvent(M, A),
                      children: (0, l.jsx)(r.Text, {
                        variant: "text-md/normal",
                        children: j.Z.Messages.GUILD_EVENT_DELETE_CONFIRM_BODY,
                      }),
                    }),
                  );
              }
            : void 0,
          onContextMenu: function (e) {
            e.stopPropagation(),
              null != n &&
                (0, a.jW)(e, async () => {
                  let { default: e } = await Promise.all([
                    t.e("15450"),
                    t.e("37133"),
                  ]).then(t.bind(t, 215269));
                  return (t) =>
                    (0, l.jsx)(e, {
                      guildEventId: M,
                      recurrenceId: y,
                      channel: S,
                      guild: n,
                      ...t,
                    });
                });
          },
          onJoinClick:
            V || F
              ? function (e) {
                  if ((e.stopPropagation(), F)) {
                    null == k || k(), (0, c.hk)(A);
                    return;
                  }
                  (null == S ? void 0 : S.isGuildStageVoice())
                    ? ((0, _.Cq)(S), null == k || k())
                    : (null == S ? void 0 : S.isGuildVoice()) &&
                      (m.Z.joinVoiceEvent(S.guild_id, S.id), null == k || k());
                }
              : void 0,
          onRsvpClick: z,
          onStartClick:
            G && O && !(null == H ? void 0 : H.is_canceled)
              ? function (e) {
                  e.stopPropagation(),
                    (0, r.openModalLazy)(async () => {
                      let { default: e } = await Promise.all([
                        t.e("84722"),
                        t.e("66586"),
                      ]).then(t.bind(t, 296864));
                      return (n) =>
                        (0, l.jsx)(e, { ...n, event: L, onSuccess: k });
                    });
                }
              : void 0,
          onInviteClick: function (e) {
            if ((e.stopPropagation(), null != n)) {
              if (!U || !w) {
                let e = (0, N.H)({ guildId: A, guildEventId: M });
                (0, g.JG)(e),
                  E.default.track(p.rMx.GUILD_SCHEDULED_EVENT_LINK_COPIED, {
                    guild_id: A,
                    guild_scheduled_event_id: M,
                  });
                return;
              }
              (0, r.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                  t.e("7654"),
                  t.e("1187"),
                  t.e("90761"),
                ]).then(t.bind(t, 560114));
                return (t) =>
                  (0, l.jsx)(e, {
                    ...t,
                    guild: n,
                    channel: S,
                    guildScheduledEvent: L,
                    source: p.t4x.GUILD_EVENTS,
                  });
              });
            }
          },
          onEndClick:
            G && D === C.WX.EXTERNAL && R
              ? function (e) {
                  if ((e.stopPropagation(), !G)) return;
                  let n = () => {
                    m.Z.endEvent(M, A), (0, r.closeAllModals)();
                  };
                  (0, r.openModal)((e) =>
                    (0, l.jsx)(r.ConfirmModal, {
                      ...e,
                      header: j.Z.Messages.END_EVENT,
                      confirmText: j.Z.Messages.GUILD_EVENT_END_PROMPT_CONFIRM,
                      cancelText: j.Z.Messages.CANCEL,
                      onConfirm: n,
                      children: (0, l.jsx)(r.Text, {
                        variant: "text-md/normal",
                        children:
                          j.Z.Messages.GUILD_EVENT_EXTERNAL_END_PROMPT_TITLE,
                      }),
                    }),
                  );
                }
              : void 0,
          onJoinGuildClick: X,
          onGoToGuildClick: W,
        };
      }
    },
    724912: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return a;
        },
      });
      var l = t(442837),
        i = t(430824),
        r = t(981631);
      function a(e) {
        return (0, l.e7)(
          [i.Z],
          () => {
            var n;
            if (null == e) return !1;
            let t = i.Z.getGuild(e);
            return (
              null !== (n = null == t ? void 0 : t.hasFeature(r.oNc.HUB)) &&
              void 0 !== n &&
              n
            );
          },
          [e],
        );
      }
    },
    939863: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return d;
        },
      });
      var l = t(735250);
      t(470079);
      var i = t(120356),
        r = t.n(i),
        a = t(689938),
        o = t(843117),
        c = t(296507),
        s = t(866402);
      function d(e) {
        let { className: n, children: t } = e;
        return (0, l.jsxs)("div", {
          className: r()(o.container, n),
          children: [
            (0, l.jsx)("img", {
              alt: a.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
              src: s,
              className: r()(o.sparkleIcon, o.sparkleBottom),
            }),
            t,
            (0, l.jsx)("img", {
              alt: a.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
              src: c,
              className: r()(o.sparkleIcon, o.sparkleTop),
            }),
          ],
        });
      }
    },
    981888: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return r;
        },
      }),
        t(47120);
      var l = t(470079),
        i = t(881052);
      function r(e, n) {
        let [t, r] = l.useState(!1),
          [a, o] = l.useState(null);
        return [
          async () => {
            r(!0), o(null);
            try {
              let n = await e();
              return r(!1), o(null), n;
            } catch (t) {
              let e = new i.Hx(t);
              return null == n || n(e), o(e), r(!1), null;
            }
          },
          { loading: t, error: a },
        ];
      }
    },
    269907: function (e, n, t) {
      e.exports = {
        container: "container_e6c1bb",
        iconButton: "iconButton_e6c1bb",
        icon: "icon_e6c1bb",
        innerButton: "innerButton_e6c1bb",
        tooltips: "tooltips_e6c1bb",
      };
    },
    676646: function (e, n, t) {
      e.exports = {
        container: "container_ee9d1a",
        canceled: "canceled_ee9d1a",
        active: "active_ee9d1a",
        timeStatus: "timeStatus_ee9d1a",
        icon: "icon_ee9d1a",
        iconButton: "iconButton_ee9d1a",
        canceledStatus: "canceledStatus_ee9d1a",
        clickable: "clickable_ee9d1a",
      };
    },
    128729: function (e, n, t) {
      e.exports = {
        recurrences: "recurrences_cf6131",
        heading: "heading_cf6131",
        scroller: "scroller_cf6131",
        showScroller: "showScroller_cf6131",
        button: "button_cf6131",
      };
    },
    828819: function (e, n, t) {
      e.exports = {
        root: "root_b747e2",
        banner: "banner_b747e2",
        container: "container_b747e2",
        contentContainer: "contentContainer_b747e2",
        footer: "footer_b747e2",
      };
    },
    494545: function (e, n, t) {
      e.exports = {
        container: "container_d9ad97",
        iconButton: "iconButton_d9ad97",
        icon: "icon_d9ad97",
        innerButton: "innerButton_d9ad97",
        button: "button_d9ad97",
      };
    },
    400463: function (e, n, t) {
      e.exports = {
        tabBar: "tabBar_a31cc1",
        tabBarItem: "tabBarItem_a31cc1",
        container: "container_a31cc1",
        closeIcon: "closeIcon_a31cc1",
        closeIconBanner: "closeIconBanner_a31cc1",
        closeButton: "closeButton_a31cc1",
      };
    },
    448144: function (e, n, t) {
      e.exports = {
        header: "header_ecbdaf",
        title: "title_ecbdaf",
        description: "description_ecbdaf",
        guildBadge: "guildBadge_ecbdaf",
        row: "row_ecbdaf",
        guildIcon: "guildIcon_ecbdaf",
        body: "body_ecbdaf",
        icon: "icon_ecbdaf",
        channelIcon: "channelIcon_ecbdaf",
        clickable: "clickable_ecbdaf",
        linkText: "linkText_ecbdaf",
        channelLocation: "channelLocation_ecbdaf",
        locationText: "locationText_ecbdaf",
        externalLocation: "externalLocation_ecbdaf",
        interestedCount: "interestedCount_ecbdaf",
        creator: "creator_ecbdaf",
        divider: "divider_ecbdaf",
      };
    },
    513994: function (e, n, t) {
      e.exports = {
        container: "container_b5365d",
        emptyContainer: "emptyContainer_b5365d",
        title: "title_b5365d",
        errorTitle: "errorTitle_b5365d",
        icon: "icon_b5365d",
        circle: "circle_b5365d",
        listRowCircle: "listRowCircle_b5365d",
        listRow: "listRow_b5365d",
        interactiveRow: "interactiveRow_b5365d",
        listName: "listName_b5365d",
        listAvatar: "listAvatar_b5365d",
        listDiscriminator: "listDiscriminator_b5365d",
        spinner: "spinner_b5365d",
        listScroller: "listScroller_b5365d",
        selected: "selected_b5365d",
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
  },
]);
//# sourceMappingURL=d8de1366585061dd98bd.js.map
