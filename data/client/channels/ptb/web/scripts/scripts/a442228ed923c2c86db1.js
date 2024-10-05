"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["96813"],
  {
    296507: function (e) {
      e.exports = "/assets/8447e4e321cc04bd6a4c.svg";
    },
    866402: function (e) {
      e.exports = "/assets/9d5696b9d1f0b77fd074.svg";
    },
    241155: function (e, n, t) {
      t(47120);
      var i,
        a,
        l,
        r,
        o = t(392711),
        c = t.n(o),
        s = t(442837),
        d = t(570140),
        u = t(924301),
        _ = t(601964),
        g = t(486527);
      let v = !1,
        h = {},
        f = {},
        I = {},
        m = (e) => (
          (I[e.guild_scheduled_event.id] = new _.ZP(
            e.guild_scheduled_event.guild,
          )),
          (f[e.guild_scheduled_event.id] = e.guild_scheduled_event),
          {
            channelId: e.directory_channel_id,
            scheduledEventId: e.entity_id,
            type: g.C2.GUILD_SCHEDULED_EVENT,
            authorId: e.author_id,
            createdAt: e.created_at,
          }
        );
      class p extends (i = s.ZP.Store) {
        isFetching() {
          return v;
        }
        getEventDirectoryEntries(e) {
          if (null != e) return h[e];
        }
        getCachedGuildByEventId(e) {
          var n;
          return null !== (n = I[e]) && void 0 !== n ? n : void 0;
        }
        getCachedGuildScheduledEventById(e) {
          var n;
          return null !== (n = f[e]) && void 0 !== n ? n : void 0;
        }
      }
      (r = "EventDirectoryStore"),
        (l = "displayName") in (a = p)
          ? Object.defineProperty(a, l, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (a[l] = r),
        (n.Z = new p(d.Z, {
          EVENT_DIRECTORY_FETCH_START: function () {
            v = !0;
          },
          EVENT_DIRECTORY_FETCH_SUCCESS: function (e) {
            let { channelId: n, entries: t } = e;
            v = !1;
            let i = c().sortBy(
                [...t],
                [
                  function (e) {
                    return (0, u.CQ)(e.guild_scheduled_event);
                  },
                ],
              ),
              a = c().map(i, m);
            h[n] = a;
          },
          EVENT_DIRECTORY_FETCH_FAILURE: function () {
            v = !1;
          },
        }));
    },
    951539: function (e, n, t) {
      t.d(n, {
        ZP: function () {
          return f;
        },
        so: function () {
          return h;
        },
        wg: function () {
          return v;
        },
      }),
        t(47120);
      var i = t(442837),
        a = t(159300),
        l = t(427679),
        r = t(592125),
        o = t(984933),
        c = t(430824),
        s = t(496675),
        d = t(700785),
        u = t(924301),
        _ = t(765305),
        g = t(981631);
      function v(e) {
        var n;
        let [t] =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : [r.Z];
        let { entityType: i, channelId: a } =
          "entity_type" in (n = e)
            ? { entityType: n.entity_type, channelId: n.channel_id }
            : n;
        if (i === _.WX.EXTERNAL) return !0;
        let l = t.getChannel(a);
        return null != l && d.Uu(g.Plq.VIEW_CHANNEL, l);
      }
      function h(e) {
        let [n, t, i, d] =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : [o.ZP, r.Z, c.Z, l.Z];
        if ((0, u.Z2)(e)) return !1;
        let { guild_id: g, channel_id: h } = e,
          f =
            e.entity_type === _.WX.EXTERNAL
              ? n.getDefaultChannel(e.guild_id)
              : t.getChannel(h),
          I = i.getGuild(g),
          m = d.getStageInstanceByChannel(h);
        return !!(0, a.b)(s.Z, I, f, m) && null != f && v(e, [t]);
      }
      function f(e) {
        return (0, i.e7)(
          [o.ZP, r.Z, c.Z, l.Z],
          () => h(e, [o.ZP, r.Z, c.Z, l.Z]),
          [e],
        );
      }
    },
    592126: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return r;
        },
      });
      var i = t(442837),
        a = t(241155),
        l = t(430824);
      function r(e, n) {
        return (0, i.cj)(
          [l.Z, a.Z],
          () => {
            let t = l.Z.getGuild(e),
              i = null != t;
            return (
              null == t && null != n && (t = a.Z.getCachedGuildByEventId(n)),
              { isMember: i, guild: t }
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
      var i = t(470079),
        a = t(442837),
        l = t(924301),
        r = t(765305);
      function o(e, n) {
        let t = (0, a.Wu)(
            [l.ZP],
            () => Object.values(l.ZP.getUsersForGuildEvent(e, null)),
            [e],
          ),
          o = (0, a.Wu)(
            [l.ZP],
            () => Object.values(l.ZP.getUsersForGuildEvent(e, n)),
            [e, n],
          );
        return (0, i.useMemo)(() => {
          let e = o.reduce((e, n) => ((e[n.user_id] = n), e), {}),
            n = t.filter((n) => {
              let t = e[n.user_id];
              return null == t || t.response === r.gv.INTERESTED;
            }),
            i = o.filter((e) => e.response === r.gv.INTERESTED),
            a = new Set(),
            l = [],
            c = (e) => {
              !a.has(e.user_id) && (l.push(e), a.add(e.user_id));
            };
          return n.forEach(c), i.forEach(c), l;
        }, [t, o]);
      }
    },
    118998: function (e, n, t) {
      t.d(n, {
        H: function () {
          return i;
        },
      });
      let i = (e) => {
        let { guildId: n, guildEventId: t } = e;
        return "https://discord.com/events/".concat(n, "/").concat(t);
      };
    },
    697849: function (e, n, t) {
      t.r(n), t(47120);
      var i = t(735250),
        a = t(470079),
        l = t(442837),
        r = t(481060),
        o = t(100527),
        c = t(906732),
        s = t(313201),
        d = t(724912),
        u = t(41776),
        _ = t(592125),
        g = t(626135),
        v = t(981888),
        h = t(897285),
        f = t(924301),
        I = t(951539),
        m = t(592126),
        p = t(315416),
        E = t(711373),
        x = t(274311),
        b = t(854698),
        C = t(405613),
        N = t(285784),
        T = t(95291),
        Z = t(187443),
        j = t(464766),
        S = t(724278),
        L = t(462747),
        k = t(462179),
        D = t(765305),
        R = t(981631),
        y = t(828819);
      function M(e) {
        let {
            guildEvent: n,
            guild: t,
            channel: a,
            onActionTaken: r,
            isHub: o,
            isMember: c,
            recurrenceId: s,
          } = e,
          d = (0, f.xt)(n),
          _ = (0, l.e7)(
            [f.ZP],
            () => f.ZP.isInterestedInEventRecurrence(n.id, s),
            [s, n],
          ),
          g = (0, I.ZP)(n),
          v = (0, l.e7)([u.Z], () => u.Z.isLurking(t.id), [t.id]),
          h = (0, x.T)(null == a ? void 0 : a.id, n.id),
          m = (0, k.Z)({
            guild: t,
            channel: a,
            guildScheduledEvent: n,
            isActive: d,
            recurrenceId: s,
            onActionTaken: r,
          }),
          { entity_type: p } = n;
        return o
          ? (0, i.jsx)(Z.Z, {
              isActive: d,
              isUserLurking: v,
              rsvped: _,
              isMember: c,
              isDetailsView: !0,
              guildName: null == t ? void 0 : t.name,
              isChannelPublic: h,
              canInvite: g,
              ...m,
            })
          : (0, i.jsx)(N.ZP, {
              isActive: d,
              isUserLurking: v,
              rsvped: _,
              isChannelPublic: h,
              canInvite: g,
              entityType: p,
              ...m,
            });
      }
      n.default = (e) => {
        let {
            guildScheduledEventId: n,
            parentGuildId: t,
            transitionState: u,
            initialRecurrenceId: I,
            onClose: x,
          } = e,
          { analyticsLocations: N } = (0, c.ZP)(o.Z.GUILD_EVENT_MODAL),
          [Z, k] = a.useState(I),
          B = (0, l.e7)([f.ZP], () => f.ZP.getGuildScheduledEvent(n), [n]),
          P = null == B ? void 0 : B.id,
          w = null == B ? void 0 : B.guild_id,
          { guild: A, isMember: G } = (0, m.Z)(w, P),
          O = (0, d.Z)(t),
          U = null == B ? void 0 : B.channel_id,
          V = (0, l.e7)([_.Z], () => _.Z.getChannel(U), [U]),
          F = (0, s.Dt)(),
          [H, z] = a.useState(D.fL.EVENT_INFO),
          W = (0, E.Z)(P, Z),
          X = (0, p.Z)(w, P, Z),
          [J, { loading: Y, error: K }] = (0, v.Z)(() =>
            h.Z.getGuildEventUsers(null == B ? void 0 : B.id, Z, w),
          );
        a.useEffect(() => {
          null == B
            ? x()
            : g.default.track(R.rMx.OPEN_MODAL, {
                type: D.zw,
                guild_id: B.guild_id,
              });
        }, [B, x]);
        let q = a.useRef(null),
          [Q, $] = a.useState(0);
        if (
          (a.useLayoutEffect(() => {
            var e, n;
            let t = (null == B ? void 0 : B.recurrence_rule) != null ? 16 : 0;
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
          }, [q, null == B ? void 0 : B.recurrence_rule]),
          null == B || null == A || (!G && !O))
        )
          return null;
        let ee = (e) => {
            if (e !== H) e === D.fL.RSVP_LIST && J(), z(e);
          },
          en = null != Z ? Z : (0, b.DK)(B);
        return (0, i.jsx)(c.Gt, {
          value: N,
          children: (0, i.jsxs)(r.ModalRoot, {
            size: r.ModalSize.MEDIUM,
            transitionState: u,
            "aria-labelledby": F,
            className: y.root,
            children: [
              (null == B ? void 0 : B.image) != null &&
                (0, i.jsx)(T.Z, { source: (0, C.Z)(B), className: y.banner }),
              (0, i.jsx)(j.Z, {
                onClose: x,
                selectedTab: H,
                onTabSelected: ee,
                userCount: X,
                hasBanner: (null == B ? void 0 : B.image) != null,
                isHub: O,
              }),
              (0, i.jsx)("div", {
                className: y.container,
                children: (0, i.jsx)(r.ModalContent, {
                  className: y.contentContainer,
                  style: { height: Q },
                  children: (0, i.jsxs)(r.Slides, {
                    activeSlide: H,
                    width: 600,
                    centered: !1,
                    children: [
                      (0, i.jsx)(r.Slide, {
                        id: D.fL.EVENT_INFO,
                        children: (0, i.jsx)(S.Z, {
                          guildEvent: B,
                          guild: A,
                          channel: V,
                          headerId: F,
                          onClose: x,
                          onClickInterestedCount: () => ee(D.fL.RSVP_LIST),
                          isHub: O,
                          containerRef: q,
                          recurrenceId: en,
                          setRecurrenceId: k,
                        }),
                      }),
                      (0, i.jsx)(r.Slide, {
                        id: D.fL.RSVP_LIST,
                        children: (0, i.jsx)(L.Z, {
                          guildEvent: B,
                          recurrenceId: en,
                          eventUsers: W,
                          loading: Y,
                          containerHeight: Q,
                          error: K,
                        }),
                      }),
                    ],
                  }),
                }),
              }),
              (0, i.jsx)(r.ModalFooter, {
                className: y.footer,
                children: (0, i.jsx)(M, {
                  guildEvent: B,
                  isHub: O,
                  isMember: G,
                  guild: A,
                  channel: V,
                  onActionTaken: x,
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
      var i = t(735250),
        a = t(470079),
        l = t(120356),
        r = t.n(l),
        o = t(481060),
        c = t(765305),
        s = t(689938),
        d = t(400463);
      function u(e) {
        let {
            onClose: n,
            selectedTab: t,
            onTabSelected: l,
            userCount: u,
            hasBanner: _,
            isHub: g = !1,
          } = e,
          v = a.useRef(null);
        a.useEffect(() => {
          var e, n, t;
          return null === (t = v.current) || void 0 === t
            ? void 0
            : null === (n = t.ref) || void 0 === n
              ? void 0
              : null === (e = n.blur) || void 0 === e
                ? void 0
                : e.call(n);
        }, []);
        let h = s.Z.Messages.GUILD_EVENT_DETAILS_USER_LIST_TAB_TITLE.format({
            userCount: u,
          }),
          f = [
            (0, i.jsx)(
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
          !g &&
            f.push(
              (0, i.jsx)(
                o.TabBar.Item,
                { className: d.tabBarItem, id: c.fL.RSVP_LIST, children: h },
                "is-hub",
              ),
            ),
          (0, i.jsxs)("div", {
            className: d.container,
            children: [
              (0, i.jsx)(o.Clickable, {
                ref: v,
                onClick: n,
                className: d.closeButton,
                "aria-label": s.Z.Messages.CLOSE,
                children: (0, i.jsx)(o.XSmallIcon, {
                  size: "md",
                  color: "currentColor",
                  className: r()(d.closeIcon, _ && d.closeIconBanner),
                }),
              }),
              (0, i.jsx)(o.TabBar, {
                className: d.tabBar,
                "aria-label": s.Z.Messages.OPTIONS,
                selectedItem: t,
                type: "top",
                onItemSelect: l,
                children: f,
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
      var i = t(735250),
        a = t(470079),
        l = t(120356),
        r = t.n(l),
        o = t(442837),
        c = t(481060),
        s = t(447543),
        d = t(906732),
        u = t(565138),
        _ = t(372769),
        g = t(171368),
        v = t(271383),
        h = t(430824),
        f = t(51144),
        I = t(897285),
        m = t(978227),
        p = t(894017),
        E = t(79874),
        x = t(315416),
        b = t(236373),
        C = t(854698),
        N = t(391174),
        T = t(810561),
        Z = t(390966),
        j = t(390072),
        S = t(981631),
        L = t(689938),
        k = t(448144);
      function D(e) {
        var n;
        let { creator: t, guildId: a, channelId: l } = e,
          { analyticsLocations: r } = (0, d.ZP)(),
          s = (0, o.e7)([v.ZP], () => v.ZP.getMember(a, t.id), [t, a]);
        return (0, i.jsxs)("div", {
          className: k.row,
          children: [
            (0, i.jsx)(c.Avatar, {
              size: c.AvatarSizes.SIZE_20,
              src: t.getAvatarURL(a, 20),
              "aria-label":
                null !== (n = null == s ? void 0 : s.nick) && void 0 !== n
                  ? n
                  : f.ZP.getName(t),
              className: k.icon,
            }),
            (0, i.jsx)(c.Text, {
              color: "header-secondary",
              variant: "text-sm/normal",
              children: L.Z.Messages.GUILD_EVENT_CREATED_BY_HOOK.format({
                usernameHook: function () {
                  var e, n;
                  return (0, i.jsx)(
                    c.Clickable,
                    {
                      onClick: () =>
                        (0, g.openUserProfileModal)({
                          guildId: a,
                          channelId: l,
                          userId: t.id,
                          roleId: null == s ? void 0 : s.colorRoleId,
                          sourceAnalyticsLocations: r,
                          analyticsLocation: {
                            section:
                              S.jXE.SCHEDULED_GUILD_EVENT_INFORMATION_DIALOG,
                          },
                        }),
                      className: k.creator,
                      tag: "span",
                      role: "link",
                      children: (0, i.jsx)(c.NameWithRole, {
                        name:
                          null !== (e = null == s ? void 0 : s.nick) &&
                          void 0 !== e
                            ? e
                            : f.ZP.getName(t),
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
      function R(e) {
        let { guild: n, onClick: t, onClose: l } = e,
          o = a.useCallback(
            (e) => {
              null == t || t(e), null != t && (null == l || l(e));
            },
            [t, l],
          ),
          s = (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(u.Z, {
                guild: n,
                size: u.Z.Sizes.MINI,
                active: !0,
                className: r()(k.guildIcon, k.icon),
              }),
              (0, i.jsx)(_.Z, {
                guild: n,
                tooltipPosition: "top",
                tooltipColor: c.Tooltip.Colors.PRIMARY,
                size: 16,
                className: k.guildBadge,
              }),
              (0, i.jsx)(c.Text, {
                color: "header-secondary",
                variant: "text-sm/normal",
                className: k.linkText,
                children: n.name,
              }),
            ],
          });
        return (0, i.jsx)("div", {
          className: k.row,
          children:
            null != t
              ? (0, i.jsx)(c.Clickable, {
                  onClick: o,
                  className: k.clickable,
                  role: "link",
                  children: s,
                })
              : s,
        });
      }
      function y(e) {
        let { userCount: n, onClick: t } = e;
        return (0, i.jsxs)("div", {
          className: k.row,
          children: [
            (0, i.jsx)(c.GroupIcon, {
              size: "custom",
              color: "currentColor",
              width: 20,
              height: 20,
              className: k.icon,
            }),
            (0, i.jsx)(c.Clickable, {
              onClick: t,
              className: k.interestedCount,
              children: (0, i.jsx)(c.Text, {
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
            channel: l,
            headerId: r,
            onClose: d,
            onClickInterestedCount: u,
            isHub: _ = !1,
            containerRef: g,
            recurrenceId: v,
            setRecurrenceId: f,
          } = e,
          S = (0, o.e7)([h.Z], () => null != h.Z.getGuild(t.id), [t.id]),
          { startTime: L, endTime: M } = (0, E.ZP)(n, v),
          B = (0, x.Z)(n.guild_id, n.id, v),
          P = a.useCallback(
            (e) => {
              e.stopPropagation(), null != n && (0, s.B)(n);
            },
            [n],
          ),
          w = (0, p.Z)(v, n.id),
          A = (0, m.Z)(n);
        a.useEffect(() => {
          I.Z.getGuildEventUserCounts(t.id, n.id, null != v ? [v] : []),
            I.Z.getGuildEventsForCurrentUser(t.id);
        }, [t.id, n.id, v]);
        let G = (0, b.KV)(n.recurrence_rule),
          O =
            (null == n ? void 0 : n.scheduled_start_time) != null
              ? (0, C.lh)(
                  w,
                  L,
                  new Date(null == n ? void 0 : n.scheduled_start_time),
                )
              : null;
        return (0, i.jsxs)("div", {
          ref: g,
          children: [
            (0, i.jsxs)("div", {
              className: k.header,
              children: [
                (0, i.jsx)(Z.z, {
                  startTime: L.toISOString(),
                  endTime: null == M ? void 0 : M.toISOString(),
                  status: null != O ? O : n.status,
                  eventType: n.entity_type,
                  guildEventId: n.id,
                  recurrenceId: v,
                }),
                (0, i.jsx)(c.Heading, {
                  id: r,
                  variant: "heading-lg/semibold",
                  color: "header-primary",
                  className: k.title,
                  children: n.name,
                }),
              ],
            }),
            (0, i.jsxs)("div", {
              className: k.body,
              children: [
                (0, i.jsx)(R, {
                  guild: t,
                  onClick: S ? P : void 0,
                  onClose: d,
                }),
                (0, i.jsx)(j.Z, {
                  guildScheduledEvent: n,
                  channel: l,
                  onClose: d,
                }),
                null != B && (0, i.jsx)(y, { userCount: B, onClick: u }),
                !_ &&
                  null != A &&
                  (0, i.jsx)(
                    D,
                    {
                      creator: A,
                      guildId: t.id,
                      channelId: null == l ? void 0 : l.id,
                    },
                    A.id,
                  ),
                null != n.description &&
                  (0, i.jsx)("div", {
                    className: k.description,
                    children: (0, i.jsx)(N.Z, {
                      description: n.description,
                      truncate: !1,
                      guildId: t.id,
                    }),
                  }),
              ],
            }),
            null != G && (0, i.jsx)("hr", { className: k.divider }),
            null != G &&
              (0, i.jsx)(T.Z, {
                guildId: t.id,
                recurrenceRule: G,
                guildEventId: n.id,
                onRecurrenceClick: f,
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
      var i = t(735250),
        a = t(470079),
        l = t(481060),
        r = t(725436),
        o = t(11868),
        c = t(217804),
        s = t(765305),
        d = t(448144);
      function u(e) {
        let { guildScheduledEvent: n, channel: t, onClose: u } = e,
          _ = n.entity_type === s.WX.EXTERNAL,
          g = a.useCallback((e) => (0, o.Qt)(n, u)(e), [n, u]),
          v = (0, c.u)(n, t);
        if (null == v) return null;
        let { IconComponent: h, locationName: f } = v,
          I = (0, i.jsxs)(i.Fragment, {
            children: [
              null != h &&
                (0, i.jsx)(h, {
                  size: "custom",
                  color: "currentColor",
                  width: 20,
                  height: 20,
                  className: d.channelIcon,
                }),
              (0, i.jsx)(l.Text, {
                color: "header-secondary",
                variant: "text-sm/normal",
                className: d.locationText,
                children: (0, r.m)(f, !0),
              }),
            ],
          });
        return (0, i.jsx)("div", {
          className: d.row,
          children:
            null != g
              ? (0, i.jsx)(l.Clickable, {
                  className: _ ? d.externalLocation : d.channelLocation,
                  onClick: g,
                  children: I,
                })
              : I,
        });
      }
    },
    462747: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return L;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(120356),
        l = t.n(a),
        r = t(442837),
        o = t(481060),
        c = t(239091),
        s = t(129861),
        d = t(939863),
        u = t(184301),
        _ = t(347475),
        g = t(314897),
        v = t(158776),
        h = t(885110),
        f = t(594174),
        I = t(315416),
        m = t(765305),
        p = t(689938),
        E = t(513994);
      function x(e) {
        let { children: n } = e;
        return (0, i.jsxs)("div", {
          className: E.emptyContainer,
          children: [
            (0, i.jsx)(d.Z, {
              children: (0, i.jsx)("div", {
                className: E.circle,
                children: (0, i.jsx)(o.GroupIcon, {
                  size: "custom",
                  color: "currentColor",
                  height: 40,
                  width: 40,
                  className: E.icon,
                }),
              }),
            }),
            n,
          ],
        });
      }
      function b() {
        return (0, i.jsx)(x, {
          children: (0, i.jsx)(o.Heading, {
            color: "header-primary",
            variant: "heading-xl/semibold",
            className: E.title,
            children: p.Z.Messages.GUILD_EVENT_DETAILS_USER_LIST_EMPTY_TITLE,
          }),
        });
      }
      function C() {
        return (0, i.jsx)(x, {
          children: (0, i.jsx)(o.Heading, {
            color: "header-secondary",
            variant: "heading-md/semibold",
            className: E.errorTitle,
            children: p.Z.Messages.GUILD_EVENT_DETAILS_USER_LIST_FETCH_ERROR,
          }),
        });
      }
      function N(e) {
        let { count: n } = e;
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsxs)("div", {
            className: E.listRow,
            children: [
              (0, i.jsx)("div", {
                className: l()(E.listRowCircle, E.listAvatar),
                children: (0, i.jsx)(o.GroupIcon, {
                  size: "custom",
                  color: "currentColor",
                  height: 14,
                  width: 14,
                  className: E.icon,
                }),
              }),
              (0, i.jsx)(o.Text, {
                color: "text-normal",
                variant: "text-md/normal",
                children:
                  p.Z.Messages.GUILD_EVENT_DETAILS_USER_LIST_REMAINING.format({
                    userRemainCount: n,
                  }),
              }),
            ],
          }),
        });
      }
      function T(e) {
        let { eventUser: n, guildId: t, onContextMenu: a } = e,
          c = (0, r.e7)([f.default], () => f.default.getUser(n.user_id)),
          d = (0, r.e7)(
            [h.Z, v.Z, g.default],
            () =>
              n.user_id === g.default.getId()
                ? h.Z.getStatus()
                : v.Z.getStatus(n.user_id, t),
            [n.user_id, t],
          );
        return null == c
          ? null
          : (0, i.jsx)(o.Popout, {
              preload: () =>
                (0, u.Z)(c.id, c.getAvatarURL(t, 80), { guildId: t }),
              renderPopout: (e) =>
                (0, i.jsx)(_.Z, { ...e, userId: n.user_id, guildId: t }),
              position: "left",
              spacing: 16,
              children: (e, r) => {
                var u;
                let { isShown: _ } = r;
                return (0, i.jsxs)(o.Clickable, {
                  className: l()(E.listRow, E.interactiveRow, {
                    [E.selected]: _,
                  }),
                  onContextMenu: (e) => a(e, c),
                  ...e,
                  children: [
                    (0, i.jsx)(o.Avatar, {
                      src: c.getAvatarURL(t, 24),
                      "aria-label": c.username,
                      size: o.AvatarSizes.SIZE_24,
                      className: E.listAvatar,
                      status: d,
                    }),
                    (0, i.jsx)(s.Z, {
                      user: c,
                      className: E.listName,
                      discriminatorClass: E.listDiscriminator,
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
      function Z(e) {
        let {
          eventUsers: n,
          guildId: t,
          usersNotShownCount: a = 0,
          onContextMenu: l,
        } = e;
        return (0, i.jsxs)(o.ScrollerThin, {
          className: E.listScroller,
          children: [
            n.map((e) =>
              (0, i.jsx)(
                T,
                { guildId: t, eventUser: e, onContextMenu: l },
                e.user_id,
              ),
            ),
            a > 0 && (0, i.jsx)(N, { count: a }),
          ],
        });
      }
      function j(e) {
        let { children: n, style: t } = e;
        return (0, i.jsx)("div", {
          className: E.container,
          style: null != t ? t : {},
          children: n,
        });
      }
      function S(e) {
        let { children: n, height: t } = e;
        return (0, i.jsx)(j, { style: { height: t }, children: n });
      }
      function L(e) {
        let {
            guildEvent: n,
            recurrenceId: a,
            eventUsers: l,
            loading: r,
            error: s,
            containerHeight: d,
          } = e,
          u = (0, I.Z)(n.guild_id, n.id, a);
        if (r && 0 === l.length)
          return (0, i.jsx)(S, {
            height: d,
            children: (0, i.jsx)(o.Spinner, {
              type: o.Spinner.Type.SPINNING_CIRCLE,
              className: E.spinner,
            }),
          });
        if (null != s && 0 === l.length)
          return (0, i.jsx)(S, { height: d, children: (0, i.jsx)(C, {}) });
        let _ = 0;
        return (
          l.length >= m.rC && u > m.rC && (_ = Math.max(u - l.length, 0)),
          0 === l.length
            ? (0, i.jsx)(S, { height: d, children: (0, i.jsx)(b, {}) })
            : (0, i.jsx)(j, {
                children: (0, i.jsx)(Z, {
                  eventUsers: l,
                  guildId: n.guild_id,
                  onContextMenu: function (e, n) {
                    (0, c.jW)(e, async () => {
                      let { default: e } = await Promise.all([
                        t.e("79695"),
                        t.e("69220"),
                        t.e("50261"),
                      ]).then(t.bind(t, 881351));
                      return (t) => (0, i.jsx)(e, { ...t, user: n });
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
      var i = t(735250);
      t(470079);
      var a = t(442837),
        l = t(481060),
        r = t(239091),
        o = t(749210),
        c = t(305325),
        s = t(281956),
        d = t(357156),
        u = t(703656),
        _ = t(922482),
        g = t(984933),
        v = t(430824),
        h = t(496675),
        f = t(626135),
        I = t(572004),
        m = t(482241),
        p = t(951539),
        E = t(894017),
        x = t(274311),
        b = t(854698),
        C = t(118998),
        N = t(139712),
        T = t(765305),
        Z = t(981631),
        j = t(689938);
      function S(e) {
        let {
            guild: n,
            channel: S,
            guildScheduledEvent: L,
            isActive: k,
            recurrenceId: D,
            onActionTaken: R,
          } = e,
          { scheduled_start_time: y, id: M, entity_type: B, guild_id: P } = L,
          { canManageGuildEvent: w } = (0, d.XJ)(null != S ? S : n),
          A = w(L),
          G = (0, p.ZP)(L),
          O = (0, x.T)(null == S ? void 0 : S.id, L.id),
          { withinStartWindow: U } = (0, b.ub)(y),
          V = (0, a.e7)(
            [h.Z],
            () =>
              (null == S ? !void 0 : !S.isGuildVocal()) ||
              h.Z.can(Z.Plq.CONNECT, S),
            [S],
          ),
          F = (0, s.J)(P),
          H = (0, E.Z)(D, M);
        function z(e) {
          e.stopPropagation(), (0, N.Z)(M, D, P);
        }
        async function W(e) {
          e.stopPropagation(),
            await o.Z.joinGuild(P),
            v.Z.addConditionalChangeListener(
              () => null == v.Z.getGuild(P) || (!k && z(e), X(e), !1),
            );
        }
        function X(e) {
          e.stopPropagation();
          let n = g.ZP.getDefaultChannel(P);
          (0, l.closeAllModals)(), (0, u.XU)(P, null == n ? void 0 : n.id);
        }
        return {
          onDeleteClick: A
            ? function (e) {
                if ((e.stopPropagation(), !!A && !k))
                  (0, l.openModal)((e) =>
                    (0, i.jsx)(l.ConfirmModal, {
                      ...e,
                      header: j.Z.Messages.GUILD_EVENT_DELETE_CONFIRM_HEADER,
                      confirmText: j.Z.Messages.DELETE,
                      cancelText: j.Z.Messages.CANCEL,
                      onConfirm: () => m.Z.deleteGuildEvent(M, P),
                      children: (0, i.jsx)(l.Text, {
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
                (0, r.jW)(e, async () => {
                  let { default: e } = await Promise.all([
                    t.e("15450"),
                    t.e("37133"),
                  ]).then(t.bind(t, 215269));
                  return (t) =>
                    (0, i.jsx)(e, {
                      guildEventId: M,
                      recurrenceId: D,
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
                    null == R || R(), (0, c.hk)(P);
                    return;
                  }
                  (null == S ? void 0 : S.isGuildStageVoice())
                    ? ((0, _.Cq)(S), null == R || R())
                    : (null == S ? void 0 : S.isGuildVoice()) &&
                      (m.Z.joinVoiceEvent(S.guild_id, S.id), null == R || R());
                }
              : void 0,
          onRsvpClick: z,
          onStartClick:
            A && U && !(null == H ? void 0 : H.is_canceled)
              ? function (e) {
                  e.stopPropagation(),
                    (0, l.openModalLazy)(async () => {
                      let { default: e } = await Promise.all([
                        t.e("84722"),
                        t.e("68038"),
                      ]).then(t.bind(t, 296864));
                      return (n) =>
                        (0, i.jsx)(e, { ...n, event: L, onSuccess: R });
                    });
                }
              : void 0,
          onInviteClick: function (e) {
            if ((e.stopPropagation(), null != n)) {
              if (!G || !O) {
                let e = (0, C.H)({ guildId: P, guildEventId: M });
                (0, I.JG)(e),
                  f.default.track(Z.rMx.GUILD_SCHEDULED_EVENT_LINK_COPIED, {
                    guild_id: P,
                    guild_scheduled_event_id: M,
                  });
                return;
              }
              (0, l.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                  t.e("7654"),
                  t.e("1187"),
                  t.e("79254"),
                ]).then(t.bind(t, 560114));
                return (t) =>
                  (0, i.jsx)(e, {
                    ...t,
                    guild: n,
                    channel: S,
                    guildScheduledEvent: L,
                    source: Z.t4x.GUILD_EVENTS,
                  });
              });
            }
          },
          onEndClick:
            A && B === T.WX.EXTERNAL && k
              ? function (e) {
                  if ((e.stopPropagation(), !A)) return;
                  let n = () => {
                    m.Z.endEvent(M, P), (0, l.closeAllModals)();
                  };
                  (0, l.openModal)((e) =>
                    (0, i.jsx)(l.ConfirmModal, {
                      ...e,
                      header: j.Z.Messages.END_EVENT,
                      confirmText: j.Z.Messages.GUILD_EVENT_END_PROMPT_CONFIRM,
                      cancelText: j.Z.Messages.CANCEL,
                      onConfirm: n,
                      children: (0, i.jsx)(l.Text, {
                        variant: "text-md/normal",
                        children:
                          j.Z.Messages.GUILD_EVENT_EXTERNAL_END_PROMPT_TITLE,
                      }),
                    }),
                  );
                }
              : void 0,
          onJoinGuildClick: W,
          onGoToGuildClick: X,
        };
      }
    },
    724912: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return r;
        },
      });
      var i = t(442837),
        a = t(430824),
        l = t(981631);
      function r(e) {
        return (0, i.e7)(
          [a.Z],
          () => {
            var n;
            if (null == e) return !1;
            let t = a.Z.getGuild(e);
            return (
              null !== (n = null == t ? void 0 : t.hasFeature(l.oNc.HUB)) &&
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
      var i = t(735250);
      t(470079);
      var a = t(120356),
        l = t.n(a),
        r = t(689938),
        o = t(843117),
        c = t(296507),
        s = t(866402);
      function d(e) {
        let { className: n, children: t } = e;
        return (0, i.jsxs)("div", {
          className: l()(o.container, n),
          children: [
            (0, i.jsx)("img", {
              alt: r.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
              src: s,
              className: l()(o.sparkleIcon, o.sparkleBottom),
            }),
            t,
            (0, i.jsx)("img", {
              alt: r.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
              src: c,
              className: l()(o.sparkleIcon, o.sparkleTop),
            }),
          ],
        });
      }
    },
    981888: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return l;
        },
      }),
        t(47120);
      var i = t(470079),
        a = t(881052);
      function l(e, n) {
        let [t, l] = i.useState(!1),
          [r, o] = i.useState(null);
        return [
          async () => {
            l(!0), o(null);
            try {
              let n = await e();
              return l(!1), o(null), n;
            } catch (t) {
              let e = new a.Hx(t);
              return null == n || n(e), o(e), l(!1), null;
            }
          },
          { loading: t, error: r },
        ];
      }
    },
    737602: function (e, n, t) {
      e.exports = {
        descriptionText: "descriptionText_f4ba67",
        truncate: "truncate_f4ba67",
      };
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
    731006: function (e, n, t) {
      e.exports = { container: "container_f87f77" };
    },
    247912: function (e, n, t) {
      e.exports = {
        container: "container_a4ec62",
        eventName: "eventName_a4ec62",
        description: "description_a4ec62",
        descriptionWithThumbnail: "descriptionWithThumbnail_a4ec62",
        spacer: "spacer_a4ec62",
        rsvpCount: "rsvpCount_a4ec62",
        rsvpIcon: "rsvpIcon_a4ec62",
        creator: "creator_a4ec62",
        eventInfoStatusContainer: "eventInfoStatusContainer_a4ec62",
        statusContainer: "statusContainer_a4ec62",
        withThumbnail: "withThumbnail_a4ec62",
        thumbnailContainer: "thumbnailContainer_a4ec62",
        thumbnail: "thumbnail_a4ec62",
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
    205569: function (e, n, t) {
      e.exports = {
        eventStatusContainer: "eventStatusContainer_d6a475",
        isRecurring: "isRecurring_d6a475",
        eventStatusLabel: "eventStatusLabel_d6a475",
        liveEventEndTime: "liveEventEndTime_d6a475",
        newBadge: "newBadge_d6a475",
        newBadgeText: "newBadgeText_d6a475",
      };
    },
    639955: function (e, n, t) {
      e.exports = {
        inviteDetailsContainer: "inviteDetailsContainer_a75489",
        clickable: "clickable_a75489",
        guildChannelInfoContainer: "guildChannelInfoContainer_a75489",
        verticalContainer: "verticalContainer_a75489",
        footerContainer: "footerContainer_a75489",
        button: "button_a75489",
        innerButton: "innerButton_a75489",
        buttonIcon: "buttonIcon_a75489",
        eventDescription: "eventDescription_a75489",
        channelDescription: "channelDescription_a75489",
        guildBadge: "guildBadge_a75489",
        guildName: "guildName_a75489",
        guildNameClickable: "guildNameClickable_a75489",
        guildNameLinkable: "guildNameLinkable_a75489 guildName_a75489",
        channelIcon: "channelIcon_a75489",
        channelInfoContainer: "channelInfoContainer_a75489",
        channelLocationLink: "channelLocationLink_a75489",
        banner: "banner_a75489",
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
    196238: function (e, n, t) {
      e.exports = { responseOptions: "responseOptions_ff8b0a" };
    },
    850393: function (e, n, t) {
      t.r(
        (e.exports = {
          wrapper: "wrapper_a71a1c",
          header: "header_a71a1c",
          content: "content_a71a1c",
          guildIcon: "guildIcon_a71a1c",
          applicationIcon: "applicationIcon_a71a1c",
          guildIconJoined: "guildIconJoined_a71a1c guildIcon_a71a1c",
          guildIconImage: "guildIconImage_a71a1c guildIcon_a71a1c",
          guildIconImageJoined:
            "guildIconImageJoined_a71a1c guildIconImage_a71a1c guildIcon_a71a1c",
          inviteDestination: "inviteDestination_a71a1c",
          inviteDestinationJoined:
            "inviteDestinationJoined_a71a1c inviteDestination_a71a1c",
          channel: "channel_a71a1c",
          channelName: "channelName_a71a1c",
          channelIcon: "channelIcon_a71a1c",
          status: "status_a71a1c",
          statusWrapper: "statusWrapper_a71a1c",
          statusOnline: "statusOnline_a71a1c status_a71a1c",
          statusOffline: "statusOffline_a71a1c status_a71a1c",
          count: "count_a71a1c",
          guildNameWrapper: "guildNameWrapper_a71a1c",
          guildName: "guildName_a71a1c",
          guildBadge: "guildBadge_a71a1c",
          guildInfo: "guildInfo_a71a1c",
          guildDetail: "guildDetail_a71a1c",
          statusCounts: "statusCounts_a71a1c",
          inviteSplash: "inviteSplash_a71a1c",
          inviteSplashImage: "inviteSplashImage_a71a1c",
          inviteSplashBadge: "inviteSplashBadge_a71a1c",
          inviteSplashImageLoaded: "inviteSplashImageLoaded_a71a1c",
          button: "button_a71a1c",
          buttonSize: "buttonSize_a71a1c",
          guildIconExpired: "guildIconExpired_a71a1c guildIcon_a71a1c",
          inviteDestinationExpired: "inviteDestinationExpired_a71a1c",
          buttonForNonMember: "buttonForNonMember_a71a1c",
          "invite-button-resolving": "invite-button-resolving_a71a1c",
          resolvingWrapper: "resolvingWrapper_a71a1c",
          resolving: "resolving_a71a1c",
          resolvingBackground: "resolvingBackground_a71a1c",
          resolvingFakeButton: "resolvingFakeButton_a71a1c",
        }),
      );
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
//# sourceMappingURL=a442228ed923c2c86db1.js.map
