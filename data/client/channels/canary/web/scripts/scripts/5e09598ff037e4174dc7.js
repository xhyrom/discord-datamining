"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["91315"],
  {
    235449: function (e, t, n) {
      n.d(t, {
        FO: function () {
          return N;
        },
        nA: function () {
          return T;
        },
        qQ: function () {
          return C;
        },
        r7: function () {
          return j;
        },
      }),
        n(47120);
      var a = n(192379),
        l = n(392711),
        r = n.n(l),
        s = n(442837),
        i = n(883429),
        o = n(592125),
        c = n(496675),
        d = n(306680),
        u = n(823379),
        h = n(709054),
        m = n(344185),
        g = n(920303),
        f = n(569471),
        x = n(346479),
        v = n(91159),
        Z = n(231338);
      function j() {
        a.useEffect(() => {
          (0, v.A_)();
        }, []);
      }
      function N(e) {
        let t = (function (e) {
            let t = (0, s.Wu)(
              [c.Z, m.Z, o.Z],
              () =>
                r()(m.Z.getThreadsForParent(e.guild_id, e.id))
                  .values()
                  .map((e) => {
                    let { id: t } = e;
                    return o.Z.getChannel(t);
                  })
                  .filter(u.lm)
                  .filter((e) => c.Z.can(Z.Pl.VIEW_CHANNEL, e))
                  .map((e) => e.id)
                  .value(),
              [e.guild_id, e.id],
            );
            return a.useMemo(
              () =>
                r()(t)
                  .sort((e, t) =>
                    h.default.compare(
                      d.ZP.lastMessageId(e),
                      d.ZP.lastMessageId(t),
                    ),
                  )
                  .reverse()
                  .value(),
              [t],
            );
          })(e),
          [n, l] = (0, s.e7)(
            [f.Z],
            () => r().partition(t, (e) => f.Z.hasJoined(e)),
            [t],
            s.pF,
          );
        return { joinedThreadIds: n, unjoinedThreadIds: l };
      }
      function T(e) {
        let t = (0, s.Wu)(
          [c.Z, m.Z, o.Z],
          () =>
            r()(m.Z.getThreadsForGuild(e))
              .values()
              .map((e) => r().values(e))
              .flatten()
              .map((e) => {
                let { id: t } = e;
                return o.Z.getChannel(t);
              })
              .filter(u.lm)
              .filter((e) => c.Z.can(Z.Pl.VIEW_CHANNEL, e))
              .map((e) => e.id)
              .value(),
          [e],
        );
        return a.useMemo(
          () =>
            r()(t)
              .sort((e, t) =>
                h.default.compare(d.ZP.lastMessageId(e), d.ZP.lastMessageId(t)),
              )
              .reverse()
              .value(),
          [t],
        );
      }
      function C(e, t, n) {
        let {
            canLoadMore: l,
            loading: d,
            nextOffset: u,
            isInitialLoad: h,
          } = (0, s.cj)([g.Z], () => ({
            loading: g.Z.isLoading(e.id, t, n),
            isInitialLoad: g.Z.isInitialLoad,
            canLoadMore: g.Z.canLoadMore,
            nextOffset: g.Z.nextOffset,
          })),
          m = a.useCallback(() => {
            c.Z.can(Z.Pl.READ_MESSAGE_HISTORY, e) &&
              x.Z.loadArchivedThreads(e.guild_id, e.id, t, n, u);
          }, [e, t, n, u]);
        return (
          a.useEffect(() => {
            h && m();
          }, [e.id, t, n, h]),
          a.useEffect(() => {
            i.Z.resort(e.id);
          }, [e.id]),
          {
            threadIds: (0, s.Wu)([g.Z, o.Z, c.Z], () =>
              r()(g.Z.getThreads(e.id, t, n))
                .filter((e) => {
                  let t = o.Z.getChannel(e);
                  return null != t && c.Z.can(Z.Pl.VIEW_CHANNEL, t);
                })
                .value(),
            ),
            canLoadMore: l,
            loading: d || h,
            loadMore: m,
          }
        );
      }
    },
    443671: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return h;
        },
      });
      var a = n(200651),
        l = n(192379),
        r = n(120356),
        s = n.n(r),
        i = n(481060),
        o = n(487894),
        c = n(300234),
        d = n(388032),
        u = n(77300);
      function h(e) {
        let { channel: t, threadIds: n, startThread: r, goToThread: h } = e,
          m = l.useCallback(
            (e) =>
              (0, a.jsx)(
                c.Z,
                { threadId: n[e.row], goToThread: h },
                "".concat(e.section, "-").concat(e.row),
              ),
            [n, h],
          );
        return 0 === n.length
          ? (0, a.jsx)(o.Z, {
              channel: t,
              header: d.intl.string(d.t.HgTQ8v),
              startThread: r,
            })
          : (0, a.jsx)(i.List, {
              className: s()(u.list, u.activeThreadsList),
              fade: !0,
              sections: [n.length],
              sectionHeight: 0,
              rowHeight: 80,
              renderRow: m,
              renderSection: () => null,
              chunkSize: 20,
            });
      }
    },
    593130: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return N;
        },
      }),
        n(47120);
      var a = n(200651),
        l = n(192379),
        r = n(120356),
        s = n.n(r),
        i = n(442837),
        o = n(481060),
        c = n(496675),
        d = n(346479),
        u = n(665906),
        h = n(91159),
        m = n(443671),
        g = n(342449),
        f = n(488131),
        x = n(124368),
        v = n(981631),
        Z = n(388032),
        j = n(70737);
      function N(e) {
        let { channel: t, className: n, onClose: r } = e,
          N = (0, i.e7)([c.Z], () => c.Z.can(v.Plq.READ_MESSAGE_HISTORY, t)),
          C = (0, u.cD)(t),
          I = () => {
            r(), (0, f.R6)(t, void 0, "Thread Browser Empty State");
          },
          p = l.useCallback(
            (e, t) => {
              r(), (0, f.ok)(e, !t, x.on.BROWSER);
            },
            [r],
          ),
          S = (function (e, t) {
            let [n, a] = l.useState(""),
              [r, s] = l.useState(!1),
              [i, o] = l.useState(!1),
              [c, u] = l.useState([]),
              h = async () => {
                if (null != n && "" !== n) {
                  if (!r) {
                    s(!0);
                    try {
                      let a = await d.Z.searchThreads(e, t, n);
                      o(!0), u(a);
                    } finally {
                      s(!1);
                    }
                  }
                }
              };
            return {
              query: n,
              setQuery: (e) => {
                a(e), 0 === e.length && o(!1);
              },
              isLoading: r,
              hasResults: i,
              submit: h,
              results: c,
            };
          })(t.guild_id, t.id);
        return (
          l.useEffect(() => {
            (0, h.A_)();
          }, []),
          (0, a.jsx)("div", {
            className: s()(n, j.container),
            children: (0, a.jsx)(o.HeadingLevel, {
              component: (0, a.jsxs)("div", {
                className: j.header,
                children: [
                  (0, a.jsx)(o.ThreadIcon, {
                    size: "md",
                    color: "currentColor",
                    className: j.threadIcon,
                  }),
                  (0, a.jsx)(o.Heading, {
                    variant: "heading-md/semibold",
                    className: j.title,
                    children: Z.intl.string(Z.t.E3H5lJ),
                  }),
                  N
                    ? (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)("div", { className: j.divider }),
                          (0, a.jsx)(T, { ...S }),
                        ],
                      })
                    : null,
                  (0, a.jsx)("div", { className: j.spacer }),
                  C
                    ? (0, a.jsx)(o.Button, {
                        size: o.Button.Sizes.MIN,
                        className: j.createButton,
                        onClick: () => {
                          r(), (0, f.R6)(t, void 0, "Thread Browser Toolbar");
                        },
                        children: Z.intl.string(Z.t.CumH4u),
                      })
                    : null,
                  (0, a.jsx)(o.Clickable, {
                    className: j.closeIcon,
                    onClick: r,
                    "aria-label": Z.intl.string(Z.t.cpT0Cg),
                    children: (0, a.jsx)(o.XSmallIcon, {
                      size: "md",
                      color: "currentColor",
                    }),
                  }),
                ],
              }),
              children: S.hasResults
                ? (0, a.jsx)(m.Z, {
                    channel: t,
                    startThread: I,
                    goToThread: p,
                    threadIds: S.results,
                  })
                : (0, a.jsx)(g.Z, {
                    channel: t,
                    startThread: I,
                    goToThread: p,
                  }),
            }),
          })
        );
      }
      function T(e) {
        let { query: t, setQuery: n, submit: l, isLoading: r } = e;
        return (0, a.jsx)(o.SearchBar, {
          autoFocus: !0,
          className: j.searchBox,
          query: t,
          isLoading: r,
          onChange: (e) => n(e),
          onClear: () => n(""),
          onKeyDown: (e) => "Enter" === e.key && l(),
          placeholder: Z.intl.string(Z.t.h0JN7e),
          "aria-label": Z.intl.string(Z.t.h0JN7e),
        });
      }
    },
    487894: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var a = n(200651);
      n(192379);
      var l = n(481060),
        r = n(499033),
        s = n(665906),
        i = n(388032),
        o = n(417716);
      function c(e) {
        let { channel: t, header: n, startThread: c } = e,
          d = (0, s.NE)(t),
          u = (0, s.Xu)(t);
        return (0, a.jsxs)("div", {
          className: o.container,
          children: [
            (0, a.jsxs)("div", {
              className: o.iconContainer,
              children: [
                (0, a.jsx)("div", {
                  className: o.icon,
                  children: (0, a.jsx)(l.ThreadIcon, {
                    size: "custom",
                    color: "currentColor",
                    width: 36,
                    height: 36,
                  }),
                }),
                (0, a.jsx)(r.Z, { className: o.stars }),
              ],
            }),
            (0, a.jsx)(l.Heading, {
              className: o.header,
              variant: "heading-xl/semibold",
              children: n,
            }),
            (0, a.jsx)(l.Text, {
              color: "header-secondary",
              variant: "text-md/normal",
              children: i.intl.string(i.t.jmq9GB),
            }),
            d || u
              ? (0, a.jsx)(l.Button, {
                  className: o.cta,
                  onClick: c,
                  children: i.intl.string(i.t.rBIGBA),
                })
              : null,
          ],
        });
      }
    },
    300234: function (e, t, n) {
      var a = n(200651),
        l = n(192379),
        r = n(442837),
        s = n(481060),
        i = n(239091),
        o = n(884338),
        c = n(592125),
        d = n(720202),
        u = n(594174),
        h = n(260483),
        m = n(314208),
        g = n(124368),
        f = n(31812);
      function x(e) {
        let { channel: t } = e,
          n = (0, r.e7)([h.Z], () => {
            var e;
            return null !== (e = h.Z.getMemberIdsPreview(t.id)) && void 0 !== e
              ? e
              : [];
          }),
          s = (0, r.e7)([h.Z], () => {
            var e;
            return null !== (e = h.Z.getMemberCount(t.id)) && void 0 !== e
              ? e
              : 0;
          }),
          i = (0, r.Wu)([u.default], () => n.map((e) => u.default.getUser(e)));
        return (l.useEffect(() => {
          n.filter((e, t) => null == i[t]).forEach((e) => {
            d.Z.requestMember(t.guild_id, e);
          });
        }, []),
        0 === n.length)
          ? null
          : (0, a.jsx)(o.Z, {
              className: f.facepile,
              showDefaultAvatarsForNullUsers: !0,
              guildId: t.guild_id,
              users: i,
              count: s,
              max: g.yX,
            });
      }
      t.Z = l.memo(function (e) {
        let { threadId: t, goToThread: l, showChannelName: o } = e,
          d = (0, r.e7)([c.Z], () => c.Z.getChannel(t)),
          u = (0, r.e7)([c.Z], () => c.Z.getChannel(d.parent_id));
        return (0, a.jsxs)(s.Clickable, {
          className: f.container,
          onClick: (e) => l(d, e.shiftKey),
          onContextMenu: (e) =>
            (0, i.jW)(e, async () => {
              let { default: e } = await Promise.all([
                n.e("38902"),
                n.e("77564"),
                n.e("13154"),
              ]).then(n.bind(n, 422200));
              return (t) => (0, a.jsx)(e, { ...t, channel: d });
            }),
          children: [
            (0, a.jsxs)("div", {
              className: f.left,
              children: [
                (0, a.jsxs)(s.Heading, {
                  className: f.threadNameLine,
                  variant: "heading-md/semibold",
                  children: [
                    (0, a.jsx)("span", {
                      className: f.threadName,
                      children: d.name,
                    }),
                    o && null != u
                      ? (0, a.jsx)("span", {
                          className: f.parentName,
                          children: "#".concat(u.name),
                        })
                      : null,
                  ],
                }),
                (0, m.Z)(d),
              ],
            }),
            (0, a.jsx)(x, { channel: d }),
          ],
        });
      });
    },
    314208: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return S;
        },
      });
      var a = n(200651),
        l = n(192379),
        r = n(442837),
        s = n(481060),
        i = n(99690),
        o = n(58540),
        c = n(471445),
        d = n(905405),
        u = n(937889),
        h = n(739566),
        m = n(267128),
        g = n(271383),
        f = n(306680),
        x = n(699516),
        v = n(594174),
        Z = n(709054),
        j = n(51144),
        N = n(144140),
        T = n(91159),
        C = n(217702),
        I = n(388032),
        p = n(31812);
      function S(e) {
        return e.isActiveThread()
          ? (0, a.jsx)(b, { channel: e })
          : (0, a.jsx)(w, { channel: e });
      }
      function b(e) {
        let { channel: t } = e,
          n = (0, r.e7)([N.Z], () => N.Z.getMostRecentMessage(t.id));
        return null == n
          ? (0, a.jsx)(k, { channel: t })
          : (0, a.jsx)(E, { channel: t, message: n });
      }
      function k(e) {
        let { channel: t } = e,
          n = (0, T.Ok)(t);
        return (0, a.jsxs)(s.Text, {
          className: p.subtext,
          variant: "text-sm/normal",
          color: "header-secondary",
          children: [I.intl.string(I.t.Jmh6n5), "\xa0 • \xa0", (0, T.Ye)(n)],
        });
      }
      function E(e) {
        let { channel: t, message: n } = e;
        (0, o.$)({ [t.guild_id]: [n.author.id] });
        let c = (0, r.e7)([v.default], () => {
            var e;
            return null !== (e = v.default.getUser(n.author.id)) && void 0 !== e
              ? e
              : n.author;
          }),
          { nick: g, colorString: f } = (0, h.ZP)(n),
          j = (0, r.e7)([x.Z], () => x.Z.isBlockedForMessage(n)),
          N = (0, d.p)(),
          I = l.useMemo(() => {
            let e =
                null != n.content && "" !== n.content
                  ? (0, u.ZP)(n, { formatInline: !0, shouldFilterKeywords: N })
                      .content
                  : null,
              {
                contentPlaceholder: t,
                renderedContent: l,
                trailingIcon: r,
                leadingIcon: s,
              } = (0, m.f)(n, e, j, p.messageContent, {
                trailingIconClass: p.messageContentTrailingIcon,
                leadingIconClass: p.messageContentLeadingIcon,
                iconSize: C.WW,
              });
            return (0, a.jsxs)(a.Fragment, {
              children: [
                s,
                null != l ? l : (0, a.jsx)("span", { children: t }),
                r,
              ],
            });
          }, [n, j, N]);
        return (0, a.jsxs)(s.Text, {
          className: p.subtext,
          variant: "text-sm/normal",
          color: "header-secondary",
          children: [
            (0, a.jsx)(i.Z, {
              className: p.avatar,
              user: c,
              size: s.AvatarSizes.SIZE_16,
            }),
            (0, a.jsx)(s.NameWithRole, {
              name: g,
              color: f,
              className: p.authorName,
            }),
            ":\xa0",
            I,
            "\xa0 • \xa0",
            (0, T.Ye)(Z.default.extractTimestamp(n.id)),
          ],
        });
      }
      function w(e) {
        var t, n, l;
        let { channel: d } = e,
          u = (0, r.e7)([f.ZP], () => f.ZP.lastMessageId(d.id)),
          h =
            null == u
              ? new Date(
                  null !==
                    (n =
                      null === (t = d.threadMetadata) || void 0 === t
                        ? void 0
                        : t.archiveTimestamp) && void 0 !== n
                    ? n
                    : Date.now(),
                ).getTime()
              : Z.default.extractTimestamp(u);
        (0, o.$)({ [d.guild_id]: [d.ownerId] });
        let m = (0, r.e7)([v.default], () => v.default.getUser(d.ownerId)),
          x = (0, r.e7)([g.ZP], () => g.ZP.getMember(d.guild_id, d.ownerId)),
          N = null !== (l = (0, c.KS)(d)) && void 0 !== l ? l : s.ThreadIcon;
        return (0, a.jsx)(s.Text, {
          className: p.subtext,
          variant: "text-sm/normal",
          color: "header-secondary",
          children:
            null == m
              ? (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)("div", {
                      className: p.noAvatarIcon,
                      children: (0, a.jsx)(N, {
                        width: 10,
                        height: 10,
                        size: "custom",
                        color: "currentColor",
                      }),
                    }),
                    I.intl.format(I.t["5Wk9+v"], { time: (0, T.Ye)(h) }),
                  ],
                })
              : (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)(i.Z, {
                      className: p.avatar,
                      user: m,
                      size: s.AvatarSizes.SIZE_16,
                    }),
                    I.intl.format(I.t.GFDmd3, {
                      authorHook(e, t) {
                        var n, l;
                        return (0, a.jsx)(
                          s.NameWithRole,
                          {
                            className: p.startedByName,
                            color:
                              null !==
                                (n = null == x ? void 0 : x.colorString) &&
                              void 0 !== n
                                ? n
                                : void 0,
                            name:
                              null !== (l = null == x ? void 0 : x.nick) &&
                              void 0 !== l
                                ? l
                                : j.ZP.getName(m),
                          },
                          t,
                        );
                      },
                    }),
                    (0, a.jsx)("span", { className: p.bullet, children: "•" }),
                    I.intl.format(I.t["5Wk9+v"], { time: (0, T.Ye)(h) }),
                  ],
                }),
        });
      }
    },
    342449: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return m;
        },
      }),
        n(47120);
      var a = n(200651),
        l = n(192379),
        r = n(683860),
        s = n(481060),
        i = n(235449),
        o = n(487894),
        c = n(300234),
        d = n(388032),
        u = n(77300);
      let h = new Set();
      function m(e) {
        let { channel: t, startThread: n, goToThread: m } = e,
          { joinedThreadIds: f, unjoinedThreadIds: x } = (0, i.FO)(t),
          {
            threadIds: v,
            canLoadMore: Z,
            loading: j,
            loadMore: N,
          } = (0, i.qQ)(t, r.z.LATEST_ACTIVITY, h),
          T = l.useRef(null);
        (0, i.r7)();
        let C = l.useCallback(
            (e) => {
              let t = 0 === e.section ? f : 1 === e.section ? x : v;
              return (0, a.jsx)(
                c.Z,
                { threadId: t[e.row], goToThread: m },
                "".concat(e.section, "-").concat(e.row),
              );
            },
            [v, f, x, m],
          ),
          I = l.useCallback(
            (e) =>
              0 === e.section
                ? (0, a.jsx)(
                    g,
                    {
                      text: d.intl.formatToPlainString(d.t["4E27f3"], {
                        count: f.length,
                      }),
                    },
                    e.section,
                  )
                : 1 === e.section
                  ? (0, a.jsx)(
                      g,
                      {
                        text: d.intl.formatToPlainString(d.t.csPc4O, {
                          count: x.length,
                        }),
                      },
                      e.section,
                    )
                  : (0, a.jsx)(
                      g,
                      { text: d.intl.string(d.t["wUNQ+/"]) },
                      e.section,
                    ),
            [f.length, x.length],
          ),
          p = l.useCallback(
            (e) =>
              1 === e && f.length > 0
                ? 64
                : 2 === e && (f.length > 0 || x.length > 0)
                  ? 64
                  : 32,
            [f.length, x.length],
          ),
          S = l.useCallback(() => {
            var e;
            let t =
              null === (e = T.current) || void 0 === e
                ? void 0
                : e.getScrollerState();
            if (null == t) return;
            let n = t.scrollTop + t.offsetHeight;
            t.scrollHeight - n < 200 && N();
          }, [N]);
        if (0 === f.length && 0 === x.length && 0 === v.length)
          return j
            ? (0, a.jsx)("div", {
                className: u.list,
                children: (0, a.jsx)(s.Spinner, { className: u.spinner }),
              })
            : (0, a.jsx)("div", {
                className: u.list,
                children: (0, a.jsx)(o.Z, {
                  channel: t,
                  header: d.intl.string(d.t.HgTQ8v),
                  startThread: n,
                }),
              });
        return (0, a.jsx)(s.List, {
          ref: T,
          className: u.list,
          fade: !0,
          sections: [f.length, x.length, v.length],
          sectionHeight: p,
          rowHeight: 80,
          renderRow: C,
          renderSection: I,
          chunkSize: 20,
          onScroll: Z ? S : void 0,
        });
      }
      function g(e) {
        let { text: t } = e;
        return (0, a.jsx)(s.Text, {
          color: "header-secondary",
          variant: "text-xs/bold",
          className: u.sectionHeader,
          children: t,
        });
      }
    },
  },
]);
//# sourceMappingURL=5e09598ff037e4174dc7.js.map
