"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["91315"],
  {
    235449: function (e, n, t) {
      t.d(n, {
        FO: function () {
          return v;
        },
        nA: function () {
          return _;
        },
        qQ: function () {
          return R;
        },
        r7: function () {
          return T;
        },
      }),
        t(47120);
      var a = t(470079),
        s = t(392711),
        l = t.n(s),
        r = t(442837),
        i = t(883429),
        o = t(592125),
        c = t(496675),
        d = t(306680),
        u = t(823379),
        h = t(709054),
        m = t(344185),
        g = t(920303),
        E = t(569471),
        f = t(346479),
        Z = t(91159),
        x = t(231338);
      function T() {
        a.useEffect(() => {
          (0, Z.A_)();
        }, []);
      }
      function v(e) {
        let n = (function (e) {
            let n = (0, r.Wu)(
              [c.Z, m.Z, o.Z],
              () =>
                l()(m.Z.getThreadsForParent(e.guild_id, e.id))
                  .values()
                  .map((e) => {
                    let { id: n } = e;
                    return o.Z.getChannel(n);
                  })
                  .filter(u.lm)
                  .filter((e) => c.Z.can(x.Pl.VIEW_CHANNEL, e))
                  .map((e) => e.id)
                  .value(),
              [e.guild_id, e.id],
            );
            return a.useMemo(
              () =>
                l()(n)
                  .sort((e, n) =>
                    h.default.compare(
                      d.ZP.lastMessageId(e),
                      d.ZP.lastMessageId(n),
                    ),
                  )
                  .reverse()
                  .value(),
              [n],
            );
          })(e),
          [t, s] = (0, r.e7)(
            [E.Z],
            () => l().partition(n, (e) => E.Z.hasJoined(e)),
            [n],
            r.pF,
          );
        return { joinedThreadIds: t, unjoinedThreadIds: s };
      }
      function _(e) {
        let n = (0, r.Wu)(
          [c.Z, m.Z, o.Z],
          () =>
            l()(m.Z.getThreadsForGuild(e))
              .values()
              .map((e) => l().values(e))
              .flatten()
              .map((e) => {
                let { id: n } = e;
                return o.Z.getChannel(n);
              })
              .filter(u.lm)
              .filter((e) => c.Z.can(x.Pl.VIEW_CHANNEL, e))
              .map((e) => e.id)
              .value(),
          [e],
        );
        return a.useMemo(
          () =>
            l()(n)
              .sort((e, n) =>
                h.default.compare(d.ZP.lastMessageId(e), d.ZP.lastMessageId(n)),
              )
              .reverse()
              .value(),
          [n],
        );
      }
      function R(e, n, t) {
        let {
            canLoadMore: s,
            loading: d,
            nextOffset: u,
            isInitialLoad: h,
          } = (0, r.cj)([g.Z], () => ({
            loading: g.Z.isLoading(e.id, n, t),
            isInitialLoad: g.Z.isInitialLoad,
            canLoadMore: g.Z.canLoadMore,
            nextOffset: g.Z.nextOffset,
          })),
          m = a.useCallback(() => {
            c.Z.can(x.Pl.READ_MESSAGE_HISTORY, e) &&
              f.Z.loadArchivedThreads(e.guild_id, e.id, n, t, u);
          }, [e, n, t, u]);
        return (
          a.useEffect(() => {
            h && m();
          }, [e.id, n, t, h]),
          a.useEffect(() => {
            i.Z.resort(e.id);
          }, [e.id]),
          {
            threadIds: (0, r.Wu)([g.Z, o.Z, c.Z], () =>
              l()(g.Z.getThreads(e.id, n, t))
                .filter((e) => {
                  let n = o.Z.getChannel(e);
                  return null != n && c.Z.can(x.Pl.VIEW_CHANNEL, n);
                })
                .value(),
            ),
            canLoadMore: s,
            loading: d || h,
            loadMore: m,
          }
        );
      }
    },
    443671: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return h;
        },
      });
      var a = t(735250),
        s = t(470079),
        l = t(120356),
        r = t.n(l),
        i = t(481060),
        o = t(487894),
        c = t(300234),
        d = t(689938),
        u = t(77300);
      function h(e) {
        let { channel: n, threadIds: t, startThread: l, goToThread: h } = e,
          m = s.useCallback(
            (e) =>
              (0, a.jsx)(
                c.Z,
                { threadId: t[e.row], goToThread: h },
                "".concat(e.section, "-").concat(e.row),
              ),
            [t, h],
          );
        return 0 === t.length
          ? (0, a.jsx)(o.Z, {
              channel: n,
              header: d.Z.Messages.THREAD_BROWSER_EMPTY_STATE_HEADER,
              startThread: l,
            })
          : (0, a.jsx)(i.List, {
              className: r()(u.list, u.activeThreadsList),
              fade: !0,
              sections: [t.length],
              sectionHeight: 0,
              rowHeight: 80,
              renderRow: m,
              renderSection: () => null,
              chunkSize: 20,
            });
      }
    },
    593130: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return v;
        },
      }),
        t(47120);
      var a = t(735250),
        s = t(470079),
        l = t(120356),
        r = t.n(l),
        i = t(442837),
        o = t(481060),
        c = t(496675),
        d = t(346479),
        u = t(665906),
        h = t(91159),
        m = t(443671),
        g = t(342449),
        E = t(488131),
        f = t(124368),
        Z = t(981631),
        x = t(689938),
        T = t(70737);
      function v(e) {
        let { channel: n, className: t, onClose: l } = e,
          v = (0, i.e7)([c.Z], () => c.Z.can(Z.Plq.READ_MESSAGE_HISTORY, n)),
          R = (0, u.cD)(n),
          j = () => {
            l(), (0, E.R6)(n, void 0, "Thread Browser Empty State");
          },
          N = s.useCallback(
            (e, n) => {
              l(), (0, E.ok)(e, !n, f.on.BROWSER);
            },
            [l],
          ),
          S = (function (e, n) {
            let [t, a] = s.useState(""),
              [l, r] = s.useState(!1),
              [i, o] = s.useState(!1),
              [c, u] = s.useState([]),
              h = async () => {
                if (null != t && "" !== t) {
                  if (!l) {
                    r(!0);
                    try {
                      let a = await d.Z.searchThreads(e, n, t);
                      o(!0), u(a);
                    } finally {
                      r(!1);
                    }
                  }
                }
              };
            return {
              query: t,
              setQuery: (e) => {
                a(e), 0 === e.length && o(!1);
              },
              isLoading: l,
              hasResults: i,
              submit: h,
              results: c,
            };
          })(n.guild_id, n.id);
        return (
          s.useEffect(() => {
            (0, h.A_)();
          }, []),
          (0, a.jsx)("div", {
            className: r()(t, T.container),
            children: (0, a.jsx)(o.HeadingLevel, {
              component: (0, a.jsxs)("div", {
                className: T.header,
                children: [
                  (0, a.jsx)(o.ThreadIcon, {
                    size: "md",
                    color: "currentColor",
                    className: T.threadIcon,
                  }),
                  (0, a.jsx)(o.Heading, {
                    variant: "heading-md/semibold",
                    className: T.title,
                    children: x.Z.Messages.THREAD_BROWSER_TITLE,
                  }),
                  v
                    ? (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)("div", { className: T.divider }),
                          (0, a.jsx)(_, { ...S }),
                        ],
                      })
                    : null,
                  (0, a.jsx)("div", { className: T.spacer }),
                  R
                    ? (0, a.jsx)(o.Button, {
                        size: o.Button.Sizes.MIN,
                        className: T.createButton,
                        onClick: () => {
                          l(), (0, E.R6)(n, void 0, "Thread Browser Toolbar");
                        },
                        children: x.Z.Messages.CREATE,
                      })
                    : null,
                  (0, a.jsx)(o.Clickable, {
                    className: T.closeIcon,
                    onClick: l,
                    "aria-label": x.Z.Messages.CLOSE,
                    children: (0, a.jsx)(o.XSmallIcon, {
                      size: "md",
                      color: "currentColor",
                    }),
                  }),
                ],
              }),
              children: S.hasResults
                ? (0, a.jsx)(m.Z, {
                    channel: n,
                    startThread: j,
                    goToThread: N,
                    threadIds: S.results,
                  })
                : (0, a.jsx)(g.Z, {
                    channel: n,
                    startThread: j,
                    goToThread: N,
                  }),
            }),
          })
        );
      }
      function _(e) {
        let { query: n, setQuery: t, submit: s, isLoading: l } = e;
        return (0, a.jsx)(o.SearchBar, {
          autoFocus: !0,
          className: T.searchBox,
          query: n,
          isLoading: l,
          onChange: (e) => t(e),
          onClear: () => t(""),
          onKeyDown: (e) => "Enter" === e.key && s(),
          placeholder: x.Z.Messages.SEARCH_THREAD_NAMES,
          "aria-label": x.Z.Messages.SEARCH_THREAD_NAMES,
        });
      }
    },
    487894: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      });
      var a = t(735250);
      t(470079);
      var s = t(481060),
        l = t(499033),
        r = t(665906),
        i = t(689938),
        o = t(417716);
      function c(e) {
        let { channel: n, header: t, startThread: c } = e,
          d = (0, r.NE)(n),
          u = (0, r.Xu)(n);
        return (0, a.jsxs)("div", {
          className: o.container,
          children: [
            (0, a.jsxs)("div", {
              className: o.iconContainer,
              children: [
                (0, a.jsx)("div", {
                  className: o.icon,
                  children: (0, a.jsx)(s.ThreadIcon, {
                    size: "custom",
                    color: "currentColor",
                    width: 36,
                    height: 36,
                  }),
                }),
                (0, a.jsx)(l.Z, { className: o.stars }),
              ],
            }),
            (0, a.jsx)(s.Heading, {
              className: o.header,
              variant: "heading-xl/semibold",
              children: t,
            }),
            (0, a.jsx)(s.Text, {
              color: "header-secondary",
              variant: "text-md/normal",
              children:
                i.Z.Messages.THREAD_BROWSER_EMPTY_STATE_SUBTEXT_REDESIGN,
            }),
            d || u
              ? (0, a.jsx)(s.Button, {
                  className: o.cta,
                  onClick: c,
                  children: i.Z.Messages.CREATE_THREAD,
                })
              : null,
          ],
        });
      }
    },
    300234: function (e, n, t) {
      var a = t(735250),
        s = t(470079),
        l = t(442837),
        r = t(481060),
        i = t(239091),
        o = t(884338),
        c = t(592125),
        d = t(720202),
        u = t(594174),
        h = t(260483),
        m = t(314208),
        g = t(124368),
        E = t(31812);
      function f(e) {
        let { channel: n } = e,
          t = (0, l.e7)([h.Z], () => {
            var e;
            return null !== (e = h.Z.getMemberIdsPreview(n.id)) && void 0 !== e
              ? e
              : [];
          }),
          r = (0, l.e7)([h.Z], () => {
            var e;
            return null !== (e = h.Z.getMemberCount(n.id)) && void 0 !== e
              ? e
              : 0;
          }),
          i = (0, l.Wu)([u.default], () => t.map((e) => u.default.getUser(e)));
        return (s.useEffect(() => {
          t.filter((e, n) => null == i[n]).forEach((e) => {
            d.Z.requestMember(n.guild_id, e);
          });
        }, []),
        0 === t.length)
          ? null
          : (0, a.jsx)(o.Z, {
              className: E.facepile,
              showDefaultAvatarsForNullUsers: !0,
              guildId: n.guild_id,
              users: i,
              count: r,
              max: g.yX,
            });
      }
      n.Z = s.memo(function (e) {
        let { threadId: n, goToThread: s, showChannelName: o } = e,
          d = (0, l.e7)([c.Z], () => c.Z.getChannel(n)),
          u = (0, l.e7)([c.Z], () => c.Z.getChannel(d.parent_id));
        return (0, a.jsxs)(r.Clickable, {
          className: E.container,
          onClick: (e) => s(d, e.shiftKey),
          onContextMenu: (e) =>
            (0, i.jW)(e, async () => {
              let { default: e } = await Promise.all([
                t.e("39285"),
                t.e("40157"),
              ]).then(t.bind(t, 422200));
              return (n) => (0, a.jsx)(e, { ...n, channel: d });
            }),
          children: [
            (0, a.jsxs)("div", {
              className: E.left,
              children: [
                (0, a.jsxs)(r.Heading, {
                  className: E.threadNameLine,
                  variant: "heading-md/semibold",
                  children: [
                    (0, a.jsx)("span", {
                      className: E.threadName,
                      children: d.name,
                    }),
                    o && null != u
                      ? (0, a.jsx)("span", {
                          className: E.parentName,
                          children: "#".concat(u.name),
                        })
                      : null,
                  ],
                }),
                (0, m.Z)(d),
              ],
            }),
            (0, a.jsx)(f, { channel: d }),
          ],
        });
      });
    },
    314208: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return S;
        },
      });
      var a = t(735250),
        s = t(470079),
        l = t(442837),
        r = t(481060),
        i = t(99690),
        o = t(58540),
        c = t(471445),
        d = t(905405),
        u = t(937889),
        h = t(739566),
        m = t(267128),
        g = t(271383),
        E = t(306680),
        f = t(699516),
        Z = t(594174),
        x = t(709054),
        T = t(51144),
        v = t(144140),
        _ = t(91159),
        R = t(217702),
        j = t(689938),
        N = t(31812);
      function S(e) {
        return e.isActiveThread()
          ? (0, a.jsx)(A, { channel: e })
          : (0, a.jsx)(M, { channel: e });
      }
      function A(e) {
        let { channel: n } = e,
          t = (0, l.e7)([v.Z], () => v.Z.getMostRecentMessage(n.id));
        return null == t
          ? (0, a.jsx)(C, { channel: n })
          : (0, a.jsx)(I, { channel: n, message: t });
      }
      function C(e) {
        let { channel: n } = e,
          t = (0, _.Ok)(n);
        return (0, a.jsxs)(r.Text, {
          className: N.subtext,
          variant: "text-sm/normal",
          color: "header-secondary",
          children: [
            j.Z.Messages.THREAD_BROWSER_NO_RECENT_MESSAGES,
            "\xa0 • \xa0",
            (0, _.Ye)(t),
          ],
        });
      }
      function I(e) {
        let { channel: n, message: t } = e;
        (0, o.$)({ [n.guild_id]: [t.author.id] });
        let c = (0, l.e7)([Z.default], () => {
            var e;
            return null !== (e = Z.default.getUser(t.author.id)) && void 0 !== e
              ? e
              : t.author;
          }),
          { nick: g, colorString: E } = (0, h.ZP)(t),
          T = (0, l.e7)([f.Z], () => f.Z.isBlockedForMessage(t)),
          v = (0, d.p)(),
          j = s.useMemo(() => {
            let e =
                null != t.content && "" !== t.content
                  ? (0, u.ZP)(t, { formatInline: !0, shouldFilterKeywords: v })
                      .content
                  : null,
              {
                contentPlaceholder: n,
                renderedContent: s,
                trailingIcon: l,
                leadingIcon: r,
              } = (0, m.f)(t, e, T, N.messageContent, {
                trailingIconClass: N.messageContentTrailingIcon,
                leadingIconClass: N.messageContentLeadingIcon,
                iconSize: R.WW,
              });
            return (0, a.jsxs)(a.Fragment, {
              children: [
                r,
                null != s ? s : (0, a.jsx)("span", { children: n }),
                l,
              ],
            });
          }, [t, T, v]);
        return (0, a.jsxs)(r.Text, {
          className: N.subtext,
          variant: "text-sm/normal",
          color: "header-secondary",
          children: [
            (0, a.jsx)(i.Z, {
              className: N.avatar,
              user: c,
              size: r.AvatarSizes.SIZE_16,
            }),
            (0, a.jsx)(r.NameWithRole, {
              name: g,
              color: E,
              className: N.authorName,
            }),
            ":\xa0",
            j,
            "\xa0 • \xa0",
            (0, _.Ye)(x.default.extractTimestamp(t.id)),
          ],
        });
      }
      function M(e) {
        var n, t, s;
        let { channel: d } = e,
          u = (0, l.e7)([E.ZP], () => E.ZP.lastMessageId(d.id)),
          h =
            null == u
              ? new Date(
                  null !==
                    (t =
                      null === (n = d.threadMetadata) || void 0 === n
                        ? void 0
                        : n.archiveTimestamp) && void 0 !== t
                    ? t
                    : Date.now(),
                ).getTime()
              : x.default.extractTimestamp(u);
        (0, o.$)({ [d.guild_id]: [d.ownerId] });
        let m = (0, l.e7)([Z.default], () => Z.default.getUser(d.ownerId)),
          f = (0, l.e7)([g.ZP], () => g.ZP.getMember(d.guild_id, d.ownerId)),
          v = null !== (s = (0, c.KS)(d)) && void 0 !== s ? s : r.ThreadIcon;
        return (0, a.jsx)(r.Text, {
          className: N.subtext,
          variant: "text-sm/normal",
          color: "header-secondary",
          children:
            null == m
              ? (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)("div", {
                      className: N.noAvatarIcon,
                      children: (0, a.jsx)(v, {
                        width: 10,
                        height: 10,
                        size: "custom",
                        color: "currentColor",
                      }),
                    }),
                    j.Z.Messages.THREAD_BROWSER_LAST_ACTIVE_TIME.format({
                      time: (0, _.Ye)(h),
                    }),
                  ],
                })
              : (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)(i.Z, {
                      className: N.avatar,
                      user: m,
                      size: r.AvatarSizes.SIZE_16,
                    }),
                    j.Z.Messages.THREAD_BROWSER_STARTED_BY.format({
                      authorHook(e, n) {
                        var t, s;
                        return (0, a.jsx)(
                          r.NameWithRole,
                          {
                            className: N.startedByName,
                            color:
                              null !==
                                (t = null == f ? void 0 : f.colorString) &&
                              void 0 !== t
                                ? t
                                : void 0,
                            name:
                              null !== (s = null == f ? void 0 : f.nick) &&
                              void 0 !== s
                                ? s
                                : T.ZP.getName(m),
                          },
                          n,
                        );
                      },
                    }),
                    (0, a.jsx)("span", { className: N.bullet, children: "•" }),
                    j.Z.Messages.THREAD_BROWSER_LAST_ACTIVE_TIME.format({
                      time: (0, _.Ye)(h),
                    }),
                  ],
                }),
        });
      }
    },
    342449: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return m;
        },
      }),
        t(47120);
      var a = t(735250),
        s = t(470079),
        l = t(683860),
        r = t(481060),
        i = t(235449),
        o = t(487894),
        c = t(300234),
        d = t(689938),
        u = t(77300);
      let h = new Set();
      function m(e) {
        let { channel: n, startThread: t, goToThread: m } = e,
          { joinedThreadIds: E, unjoinedThreadIds: f } = (0, i.FO)(n),
          {
            threadIds: Z,
            canLoadMore: x,
            loading: T,
            loadMore: v,
          } = (0, i.qQ)(n, l.z.LATEST_ACTIVITY, h),
          _ = s.useRef(null);
        (0, i.r7)();
        let R = s.useCallback(
            (e) => {
              let n = 0 === e.section ? E : 1 === e.section ? f : Z;
              return (0, a.jsx)(
                c.Z,
                { threadId: n[e.row], goToThread: m },
                "".concat(e.section, "-").concat(e.row),
              );
            },
            [Z, E, f, m],
          ),
          j = s.useCallback(
            (e) =>
              0 === e.section
                ? (0, a.jsx)(
                    g,
                    {
                      text: d.Z.Messages.THREAD_BROWSER_JOINED_HEADER.format({
                        count: E.length,
                      }),
                    },
                    e.section,
                  )
                : 1 === e.section
                  ? (0, a.jsx)(
                      g,
                      {
                        text: d.Z.Messages.THREAD_BROWSER_OTHER_HEADER.format({
                          count: f.length,
                        }),
                      },
                      e.section,
                    )
                  : (0, a.jsx)(
                      g,
                      { text: d.Z.Messages.THREAD_BROWSER_ARCHIVED_HEADER },
                      e.section,
                    ),
            [E.length, f.length],
          ),
          N = s.useCallback(
            (e) =>
              1 === e && E.length > 0
                ? 64
                : 2 === e && (E.length > 0 || f.length > 0)
                  ? 64
                  : 32,
            [E.length, f.length],
          ),
          S = s.useCallback(() => {
            var e;
            let n =
              null === (e = _.current) || void 0 === e
                ? void 0
                : e.getScrollerState();
            if (null == n) return;
            let t = n.scrollTop + n.offsetHeight;
            n.scrollHeight - t < 200 && v();
          }, [v]);
        if (0 === E.length && 0 === f.length && 0 === Z.length)
          return T
            ? (0, a.jsx)("div", {
                className: u.list,
                children: (0, a.jsx)(r.Spinner, { className: u.spinner }),
              })
            : (0, a.jsx)("div", {
                className: u.list,
                children: (0, a.jsx)(o.Z, {
                  channel: n,
                  header: d.Z.Messages.THREAD_BROWSER_EMPTY_STATE_HEADER,
                  startThread: t,
                }),
              });
        return (0, a.jsx)(r.List, {
          ref: _,
          className: u.list,
          fade: !0,
          sections: [E.length, f.length, Z.length],
          sectionHeight: N,
          rowHeight: 80,
          renderRow: R,
          renderSection: j,
          chunkSize: 20,
          onScroll: x ? S : void 0,
        });
      }
      function g(e) {
        let { text: n } = e;
        return (0, a.jsx)(r.Text, {
          color: "header-secondary",
          variant: "text-xs/bold",
          className: u.sectionHeader,
          children: n,
        });
      }
    },
  },
]);
//# sourceMappingURL=a9535228a48c15be401c.js.map
