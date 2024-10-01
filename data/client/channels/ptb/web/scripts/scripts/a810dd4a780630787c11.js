(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["49131"],
  {
    286543: function (e) {
      e.exports = function (e, t, n) {
        if ("function" != typeof e) throw TypeError("Expected a function");
        return setTimeout(function () {
          e.apply(void 0, n);
        }, t);
      };
    },
    196434: function (e, t, n) {
      var a = n(286543),
        s = n(956656)(function (e, t) {
          return a(e, 1, t);
        });
      e.exports = s;
    },
    504764: function (e) {
      "use strict";
      e.exports = "/assets/db8dd898bbfa31caea78.svg";
    },
    906739: function (e) {
      "use strict";
      e.exports = "/assets/21b3d24e94a9d01ebd03.png";
    },
    965358: function (e) {
      "use strict";
      e.exports = "/assets/80179c36fc6b6ba07513.png";
    },
    420196: function (e) {
      "use strict";
      e.exports = "/assets/e20873ac00308b20612a.png";
    },
    433075: function (e) {
      "use strict";
      e.exports = "/assets/99a8b30bb6b6018e1542.png";
    },
    67158: function (e, t, n) {
      "use strict";
      n(47120);
      var a = n(735250),
        s = n(470079),
        r = n(120356),
        l = n.n(r),
        i = n(143927),
        o = n(318766),
        c = n(28546),
        d = n(957825),
        u = n(933283);
      t.Z = s.memo(
        s.forwardRef(function (e, t) {
          let { disabled: n, type: r, className: m, onClick: h } = e,
            [_, g] = (0, c.Iu)((e) => [e.activeView, e.activeViewType], i.Z),
            x = s.useCallback(() => {
              (0, c.j9)(r), null == h || h();
            }, [r, h]);
          return n
            ? null
            : (0, a.jsx)("div", {
                className: l()(d.CT, u.buttonContainer),
                ref: t,
                children: (0, a.jsx)(o.Z, {
                  className: l()(u.emojiButton, m),
                  onClick: x,
                  active:
                    (_ === d.X1.GIF ||
                      _ === d.X1.EMOJI ||
                      _ === d.X1.STICKER) &&
                    g === r,
                  tabIndex: 0,
                  focusProps: {
                    offset: { top: 4, bottom: 4, left: -4, right: -4 },
                  },
                }),
              });
        }),
      );
    },
    374794: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var a = n(735250);
      n(470079);
      var s = n(120356),
        r = n.n(s),
        l = n(481060),
        i = n(53281);
      function o(e) {
        let {
          children: t,
          className: n,
          innerClassName: s,
          onChange: o,
          "aria-label": c,
          "aria-describedby": d,
          filters: u,
          multiple: m = !1,
          disabled: h = !1,
          submitting: _ = !1,
          ...g
        } = e;
        return (0, a.jsx)(l.FocusRing, {
          within: !0,
          children: (0, a.jsxs)("div", {
            className: r()(
              n,
              (0, l.getButtonStyle)({ ...g, submitting: _, disabled: h }),
            ),
            "aria-disabled": h,
            children: [
              (0, a.jsx)("span", {
                "aria-hidden": !0,
                className: s,
                children: t,
              }),
              (0, a.jsx)(i.Z, {
                tabIndex: 0,
                onChange: o,
                filters: u,
                multiple: m,
                "aria-label": c,
                "aria-describedby": d,
                disabled: h,
              }),
            ],
          }),
        });
      }
    },
    681154: function (e, t, n) {
      "use strict";
      n.d(t, {
        Gx: function () {
          return u;
        },
        Op: function () {
          return m;
        },
        T4: function () {
          return d;
        },
        V_: function () {
          return c;
        },
      });
      var a,
        s,
        r = n(539573),
        l = n(689938);
      function i(e, t) {
        return { type: e, message: null != t ? t : null };
      }
      function o(e) {
        return i(0, e);
      }
      function c() {
        return i(0, l.Z.Messages.FORUM_POST_EMPTY_TITLE_ERROR);
      }
      function d() {
        return i(0, l.Z.Messages.FORUM_POST_EMPTY_MESSAGE_ERROR);
      }
      function u(e, t) {
        return i(1, (0, r.$q)(e, null == t ? void 0 : t.id));
      }
      function m(e, t) {
        var n;
        return null == e ||
          (0 === e.type && null != t.content && t.content.trim().length > 0) ||
          (2 === e.type && null != t.tags && t.tags.length > 0)
          ? null
          : null !== (n = e.message) && void 0 !== n
            ? n
            : null;
      }
      ((a = s || (s = {}))[(a.EmptyContent = 0)] = "EmptyContent"),
        (a[(a.AutomodViolation = 1)] = "AutomodViolation"),
        (a[(a.EmptyTags = 2)] = "EmptyTags");
    },
    993259: function (e, t, n) {
      "use strict";
      n.d(t, {
        E$: function () {
          return o;
        },
        KV: function () {
          return i;
        },
      });
      var a = n(149765),
        s = n(605436),
        r = n(700785);
      let l = (e, t, n) => {
        if (null == e.id) return !1;
        let s = r.I0({ forceRoles: { [e.id]: e }, context: n });
        return a.e$(s, t);
      };
      function i(e, t) {
        return Object.values(t)
          .sort(s.W)
          .map((e) => (0, s.X0)(e));
      }
      function o(e, t, n, a) {
        return Object.values(t).filter((e) => (0, s.GJ)(e) || l(e, a, n));
      }
    },
    90372: function (e, t, n) {
      "use strict";
      var a = n(470079),
        s = n(451478),
        r = n(830917),
        l = n(985518);
      t.Z = {
        useForumChannelSeenManager: function (e) {
          let { guildId: t, channelId: n } = e,
            i = a.useRef(null),
            o = (0, r.UU)(),
            c = !s.Z.isFocused(o);
          return (
            a.useLayoutEffect(
              () => (
                null == i.current &&
                  ((i.current = new l.ZP({
                    guildId: t,
                    channelId: n,
                    isPaused: c,
                    windowId: o,
                  })),
                  i.current.initialize()),
                () => {
                  var e;
                  null === (e = i.current) || void 0 === e || e.terminate(),
                    (i.current = null);
                }
              ),
              [n, t, c, o],
            ),
            i.current
          );
        },
      };
    },
    259637: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return _;
        },
      });
      var a = n(735250);
      n(470079);
      var s = n(658722),
        r = n.n(s),
        l = n(442837),
        i = n(481060),
        o = n(596454),
        c = n(339085),
        d = n(456269),
        u = n(689938),
        m = n(120160);
      let h = (e) => {
        let { tag: t } = e,
          { id: n, name: s, emojiId: r, emojiName: d } = t,
          u = (0, l.e7)([c.ZP], () =>
            null != r ? c.ZP.getUsableCustomEmojiById(r) : null,
          ),
          h = null != r || null != d;
        return (0, a.jsx)(
          i.ComboboxItem,
          {
            value: n,
            children: (0, a.jsx)(i.ComboboxItem.Label, {
              children: (0, a.jsxs)("div", {
                className: m.row,
                children: [
                  h
                    ? (0, a.jsx)(o.Z, {
                        className: m.__invalid_emoji,
                        emojiId: r,
                        emojiName: d,
                        animated: !!(null == u ? void 0 : u.animated),
                      })
                    : (0, a.jsx)(i.TagIcon, {
                        size: "md",
                        color: "currentColor",
                        className: m.__invalid_emoji,
                      }),
                  (0, a.jsx)(i.Text, {
                    variant: "text-md/semibold",
                    color: "header-secondary",
                    children: s,
                  }),
                ],
              }),
            }),
          },
          n,
        );
      };
      function _(e) {
        let {
            parentChannel: t,
            appliedTags: n,
            maxTagsApplied: s,
            onSelectTag: l,
            onClose: o,
          } = e,
          c = (0, d.Vm)(t),
          m = (e, t) =>
            t.filter((t) => r()(e.toLowerCase(), t.name.toLowerCase()));
        return (0, a.jsx)(i.ComboboxPopout, {
          showScrollbar: !0,
          value: n,
          onChange: (e) => {
            if (!s || !!n.has(e)) l(e), o();
          },
          placeholder: u.Z.Messages.FORUM_TAG_POST_SEARCH_PLACEHOLDER,
          "aria-label": u.Z.Messages.FORUM_TAG_POST_SEARCH_PLACEHOLDER,
          children: (e) => m(e, c).map((e) => (0, a.jsx)(h, { tag: e }, e.id)),
        });
      }
    },
    434878: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return ed;
          },
        }),
        n(47120);
      var a = n(735250),
        s = n(470079),
        r = n(120356),
        l = n.n(r),
        i = n(196434),
        o = n.n(i),
        c = n(143927),
        d = n(91192),
        u = n(924826),
        m = n(536895),
        h = n(313361),
        _ = n(442837),
        g = n(704215),
        x = n(481060),
        C = n(561472),
        f = n(393238),
        p = n(607070),
        T = n(933557),
        I = n(243778),
        E = n(71619),
        N = n(898188),
        b = n(256413),
        v = n(292853),
        S = n(359110),
        M = n(344185),
        A = n(235449),
        j = n(665906),
        R = n(488131),
        O = n(433355),
        Z = n(592125),
        L = n(703558),
        P = n(607744),
        w = n(117530),
        y = n(451478),
        D = n(459273),
        F = n(961675),
        U = n(883429),
        k = n(238349),
        H = n(109434),
        B = n(456269),
        G = n(90372),
        z = n(985518),
        V = n(228392),
        W = n(355589),
        q = n(542581),
        K = n(639184),
        Y = n(404616),
        X = n(470623),
        J = n(749913),
        Q = n(219664),
        $ = n(895932),
        ee = n(479099),
        et = n(510060),
        en = n(276357),
        ea = n(81490),
        es = n(482062),
        er = n(260503),
        el = n(981631),
        ei = n(124368),
        eo = n(689938),
        ec = n(738941);
      function ed(e) {
        let { channel: t, guild: n, sidebarState: s } = e;
        return (0, a.jsx)(
          X.oL,
          {
            createStore: () => (0, X.NU)(t),
            children: (0, a.jsx)(ef, { channel: t, guild: n, sidebarState: s }),
          },
          t.id,
        );
      }
      let eu = new et.Me({ minWidth: 320, maxWidth: 450, gap: 16 });
      function em(e) {
        return "forum-grid-header-section-".concat(e);
      }
      let eh = (e, t, n) => (0 === e ? 0 : (0, et.KW)(n));
      function e_(e) {
        let { itemRole: t, coords: n, section: s } = e;
        return (0, a.jsx)(
          "div",
          {
            className: l()(ec.card, ec.archivedDividerRow, ec.columnsSpan),
            style: n,
            "data-item-role": t,
            children: (0, a.jsx)("div", {
              className: ec.emptyMainCard,
              children: (0, a.jsx)(x.Heading, {
                variant: "eyebrow",
                className: ec.archivedDivider,
                id: em(s),
                children: eo.Z.Messages.FORUM_SECTION_ARCHIVED,
              }),
            }),
          },
          "section-divider",
        );
      }
      function eg(e) {
        let {
          section: t,
          coords: n,
          key: s,
          isShowingSearchResult: r,
          hasActiveThreads: l,
        } = e;
        return () =>
          2 === t && !r && l
            ? (0, a.jsx)(
                e_,
                {
                  section: t,
                  coords: null == n ? void 0 : { ...n, position: "absolute" },
                  itemRole: "section",
                },
                s,
              )
            : null;
      }
      function ex(e, t) {
        return "card-".concat(e, "-").concat(t);
      }
      function eC(e) {
        if ("string" == typeof e) {
          let t = e.match(/card-{\d+}-({\d+})$/);
          return null == t ? null : t[1];
        }
        return null;
      }
      function ef(e) {
        let { channel: t, sidebarState: n } = e,
          {
            editorHeight: r,
            editorAdditionRowHeight: i,
            listViewCardHeights: o,
            formOpen: u,
          } = (0, X.xH)((e) => {
            let {
              editorHeight: t,
              editorAdditionRowHeight: n,
              listViewCardHeights: a,
              formOpen: s,
              cardHeightVersion: r,
            } = e;
            return {
              editorHeight: t,
              editorAdditionRowHeight: n,
              listViewCardHeights: a,
              formOpen: s,
              cardHeightVersion: r,
            };
          }, c.Z),
          {
            activeThreadIds: m,
            archivedThreadIds: g,
            searchResults: f,
            canLoadMore: T,
            loadMore: I,
            activeThreadsLoading: E,
            archivedThreadsLoading: N,
            loading: j,
            isSearchLoading: P,
            layoutType: w,
          } = (function (e) {
            let { sortOrder: t, tagFilter: n, layoutType: a } = (0, H.H)(e.id),
              s = (0, B.vP)({
                channel: e,
                sortOrder: t,
                tagFilter: n,
                shouldAutomaticallyAck: !0,
              }),
              r = (0, _.e7)([M.Z], () => !M.Z.hasLoaded(e.guild_id)),
              {
                threadIds: l,
                canLoadMore: i,
                loadMore: o,
                loading: c,
              } = (0, A.qQ)(e, t, n),
              { searchResults: d, isSearchLoading: u } = (0, B.XZ)({
                channelId: e.id,
              });
            return (
              (0, B.ES)(e, t, n),
              {
                activeThreadIds: s,
                archivedThreadIds: l,
                searchResults: d,
                canLoadMore: i,
                loadMore: o,
                loading: r || c || u,
                archivedThreadsLoading: c,
                activeThreadsLoading: r,
                isSearchLoading: u,
                layoutType: a,
              }
            );
          })(t),
          y = m.length > 0,
          D = y || g.length > 0,
          k = (0, b.Z)(t),
          { tagFilter: q } = (0, H.H)(t.id);
        (0, B.ku)(t, q, u);
        let K = (0, B.jR)(t),
          J = (0, B.eZ)(t),
          $ = s.useRef(null),
          { observePostVisibilityAnalytics: ee } = (function (e) {
            let { guildId: t, channelId: n, scrollerRef: a } = e;
            G.Z.useForumChannelSeenManager({ guildId: t, channelId: n });
            let r = s.useRef(null),
              l = s.useCallback((e, t) => {
                for (let n of t) {
                  let t = n.target.dataset.itemId;
                  if (null == t) return;
                  let a = Date.now();
                  n.intersectionRatio >= 0.5
                    ? (0, z.rj)(e, t, a)
                    : (0, z.Ct)(e, t, a);
                }
              }, []);
            return (
              s.useEffect(() => {
                var e;
                let t =
                  null === (e = a.current) || void 0 === e
                    ? void 0
                    : e.getScrollerNode();
                if (null != t)
                  return (
                    (r.current = new IntersectionObserver((e) => l(n, e), {
                      root: t,
                      rootMargin: "0px 100000px 0px 100000px",
                      threshold: 0.5,
                    })),
                    () => {
                      var e;
                      null === (e = r.current) ||
                        void 0 === e ||
                        e.disconnect(),
                        (r.current = null);
                    }
                  );
              }, [n, l, a]),
              {
                observePostVisibilityAnalytics: s.useCallback(
                  (e, t) => {
                    var a;
                    if (null == e) {
                      (0, z.Ct)(n, t, Date.now());
                      return;
                    }
                    null === (a = r.current) || void 0 === a || a.observe(e);
                  },
                  [n],
                ),
              }
            );
          })({ scrollerRef: $, channelId: t.id, guildId: t.guild_id }),
          en = w === h.X.GRID,
          ed = null != f,
          e_ = s.useRef(null),
          { containerRef: ef, containerWidth: eE } = (0, ea.Z)();
        s.useEffect(
          () => () => {
            null != t.id && U.Z.clearForumSearch(t.id);
          },
          [t.id],
        );
        let { columns: eb } = s.useMemo(
            () => (en ? eu.getRenderOptions(eE) : et.eU),
            [en, eE],
          ),
          ev = s.useMemo(
            () => (j ? Math.round((window.innerHeight - 200) / 118) : 0),
            [j],
          ),
          eS = s.useMemo(() => {
            let e =
              Math.ceil(window.innerHeight / (0, et.KW)(eu.getWidth(eE))) * eb;
            return E ? e : 0;
          }, [eE, eb, E]),
          eM = s.useMemo(() => {
            let e =
              Math.ceil(window.innerHeight / (0, et.KW)(eu.getWidth(eE))) * eb;
            return N ? e : 0;
          }, [eE, eb, N]),
          eA = s.useMemo(() => {
            let e =
              Math.ceil(window.innerHeight / (0, et.KW)(eu.getWidth(eE))) * eb;
            return P && ed ? e : 0;
          }, [eE, eb, P, ed]),
          ej = s.useMemo(() => {
            if (en) {
              if (!K && ed) return [1, 0];
              if (!J) return [1, m.length + eS, 0];
              else if (ed) return [1, f.length + eA, 0];
              else return [1, m.length + eS, g.length + eM];
            }
            if (!K && ed) return [1, 1];
            if (!J) return [1, m.length, 1];
            else if (ed) return [1, f.length, 0, ev];
            else return [1, m.length, g.length, ev];
          }, [en, ed, m.length, g.length, K, J, ev, f, eS, eM, eA]),
          eR = s.useMemo(() => {
            if (!K && ed) return [[], []];
            if (!J) return [[], m, []];
            if (ed) return [[], f, [], []];
            else return [[], m, g, []];
          }, [ed, K, J, f, m, g]),
          eO = s.useCallback(
            (e, n) => {
              (0, V.B5)({
                guildId: t.guild_id,
                channelId: t.id,
                postId: e.id,
                location: {
                  page: el.ZY5.GUILD_CHANNEL,
                  section: el.jXE.FORUM_CHANNEL_POST,
                },
              }),
                n
                  ? (0, S.ad)(e, { source: ei.on.BROWSER })
                  : ((e_.current = e.id), (0, R.ok)(e));
            },
            [t.guild_id, t.id, e_],
          ),
          [eZ, eL] = s.useState(r + i - 24),
          eP = s.useCallback(
            (e, n, s) =>
              0 === e
                ? (0, a.jsx)(
                    eN,
                    {
                      channel: t,
                      isEmpty: !y,
                      isSearchLoading: P,
                      numResults: null == f ? void 0 : f.length,
                      coords: n,
                      onHeightChange: eL,
                      children:
                        !j &&
                        (0, a.jsx)(W.Z, { channel: t, hasAnyThread: D }, t.id),
                    },
                    "forum-channel-header",
                  )
                : 2 !== e || J
                  ? 1 === e && ed && !K
                    ? (0, a.jsx)(
                        eT,
                        { channel: t, coords: n },
                        "archive-or-search-result",
                      )
                    : s()
                  : (0, a.jsx)(
                      ep,
                      { channel: t, coords: n },
                      "archived-missing-reading-history-perm",
                    ),
            [ed, J, f, K, t, y, P, j, D],
          ),
          ew = (0, _.e7)([F.Z], () => F.Z.hasHidden(t.id));
        s.useEffect(() => {
          var e, t;
          let n = en ? eH : $,
            a =
              null === (e = n.current) || void 0 === e
                ? void 0
                : e.getScrollerState();
          null != a &&
            !ew &&
            a.scrollTop > r &&
            (null === (t = n.current) || void 0 === t || t.scrollTo({ to: 0 }));
        }, [ew]);
        let {
            updateListScrollerRef: ey,
            renderListSection: eD,
            renderListItem: eF,
            getListSectionHeight: eU,
            getListItemHeight: ek,
          } = (function (e) {
            let {
                listRef: t,
                hasActiveThreads: n,
                threadIdsBySection: r,
                listViewCardHeights: i,
                editorHeight: o,
                editorAdditionRowHeight: c,
                renderSectionOrItem: d,
                goToThread: u,
                observePostVisibilityAnalytics: m,
                isShowingSearchResult: h,
              } = e,
              _ = s.useCallback(
                (e) => (n) => {
                  var a;
                  (t.current = n),
                    (e.current =
                      null !== (a = null == n ? void 0 : n.getScrollerNode()) &&
                      void 0 !== a
                        ? a
                        : null);
                },
                [t],
              ),
              g = s.useCallback(
                (e) =>
                  eg({
                    section: e.section,
                    isShowingSearchResult: h,
                    hasActiveThreads: n,
                  })(),
                [n, h],
              ),
              C = s.useCallback(
                (e) =>
                  d(e.section, void 0, () => {
                    if (3 === e.section)
                      return __OVERLAY__
                        ? null
                        : (0, a.jsx)(
                            "div",
                            {
                              "data-item-role": "item",
                              className: l()(
                                ec.loadingCard,
                                ec["loadingCard-".concat(e.row % 3)],
                              ),
                            },
                            "loading-".concat(e.row),
                          );
                    let t = r[e.section][e.row];
                    return (0, a.jsx)(
                      "li",
                      {
                        className: ec.card,
                        "data-item-role": "item",
                        children: (0, a.jsx)(x.HeadingLevel, {
                          children: (0, a.jsx)(Y.ZP, {
                            className: ec.mainCard,
                            threadId: t,
                            goToThread: u,
                            observePostVisibilityAnalytics: m,
                          }),
                        }),
                      },
                      "".concat(e.section, "-").concat(t),
                    );
                  }),
                [d, r, u, m],
              ),
              f = s.useCallback(
                (e, t) => {
                  if (0 === e) return o + c;
                  let n = i[r[e][t]];
                  return null == n ? 104 : n + 8;
                },
                [r, i, o, c],
              );
            return {
              updateListScrollerRef: _,
              renderListSection: g,
              renderListItem: C,
              getListSectionHeight: s.useCallback(
                (e) => (2 === e && n ? 40 : 0),
                [n],
              ),
              getListItemHeight: f,
            };
          })({
            listRef: $,
            hasActiveThreads: y,
            threadIdsBySection: eR,
            listViewCardHeights: o,
            editorHeight: r,
            editorAdditionRowHeight: i,
            renderSectionOrItem: eP,
            goToThread: eO,
            observePostVisibilityAnalytics: ee,
            isShowingSearchResult: ed,
          }),
          eH = s.useRef(null),
          {
            updateMasonryListScrollerRef: eB,
            getItemKey: eG,
            renderGridSection: ez,
            renderGridItem: eV,
            getGridSectionHeight: eW,
            getSectionProps: eq,
            handleGridFocus: eK,
          } = (function (e) {
            let {
                masonryListScrollerRef: t,
                threadIdsBySection: n,
                goToThread: r,
                renderSectionOrItem: i,
                hasActiveThreads: o,
                isShowingSearchResult: c,
                canSearchForumPosts: d,
                canViewArchivedPosts: u,
                observePostVisibilityAnalytics: m,
                focusedThreadId: h,
                headerHeight: _,
              } = e,
              g = s.useRef(null),
              x = s.useCallback(
                (e) => {
                  (t.current = e),
                    (g.current = null == e ? void 0 : e.getScrollerNode());
                },
                [t],
              ),
              C = s.useCallback(
                (e, n) => {
                  let { current: a } = t;
                  if (null == a) return;
                  let s = document.querySelector(e);
                  if (null == s) return;
                  let r = a.getCoordsMap()[n],
                    l = null != r ? r.height + 20 : 200;
                  a.scrollIntoViewNode({
                    node: s,
                    padding: l,
                    callback() {
                      requestAnimationFrame(() => {
                        var t;
                        null === (t = document.querySelector(e)) ||
                          void 0 === t ||
                          t.focus({ preventScroll: !0 });
                      });
                    },
                  }),
                    (h.current = eC(n));
                },
                [t, h],
              ),
              f = s.useCallback(
                (e) => {
                  let t = eC(e);
                  if (null == t) return;
                  let n = Z.Z.getChannel(t);
                  null != n && r(n, !0);
                },
                [r],
              ),
              p = s.useCallback(
                function (e) {
                  let t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 0;
                  if (0 === n[e].length)
                    return "section-".concat(e, "-").concat(t);
                  {
                    let a = n[e][t];
                    return null == a ? ex(e, t) : ex(e, a);
                  }
                },
                [n],
              ),
              T = s.useCallback(
                (e, t, n) =>
                  i(
                    e,
                    t,
                    eg({
                      section: e,
                      coords: t,
                      key: n,
                      isShowingSearchResult: c,
                      hasActiveThreads: o,
                    }),
                  ),
                [i, o, c],
              ),
              I = s.useCallback(
                (e) =>
                  0 === e
                    ? {}
                    : { role: "grid", "aria-labelledby": "#".concat(em(e)) },
                [],
              ),
              E = s.useCallback(
                (e, t, s, i, o) => {
                  if (0 === e) return null;
                  let c = n[e][t];
                  return null != c
                    ? (0, a.jsx)(
                        Q.Z,
                        {
                          id: "".concat(i),
                          threadId: c,
                          className: l()(ec.card, ec.mainCard),
                          goToThread: r,
                          observePostVisibilityAnalytics: m,
                          coords: s,
                          gridCoords: o.coordinates[i],
                          gridSectionBoundaries: o.boundaries,
                        },
                        i,
                      )
                    : __OVERLAY__
                      ? null
                      : (0, a.jsx)(
                          "div",
                          {
                            style: { ...s },
                            "data-item-role": "item",
                            className: l()(
                              ec.loadingCard,
                              ec["loadingCard-".concat(t % 3)],
                            ),
                          },
                          i,
                        );
                },
                [n, r, m],
              );
            return {
              updateMasonryListScrollerRef: x,
              masonryListContainerRef: g,
              focusedThreadId: h,
              handleGridFocus: C,
              handleGridSelect: f,
              getItemKey: p,
              renderGridSection: T,
              renderGridItem: E,
              getSectionProps: I,
              getGridSectionHeight: s.useCallback(
                (e) =>
                  0 === e
                    ? _ - 8 - 24
                    : 2 === e
                      ? o || !u
                        ? 40
                        : 0
                      : 1 === e && c && !d
                        ? 40
                        : 0,
                [_, c, d, o, u],
              ),
            };
          })({
            masonryListScrollerRef: eH,
            threadIdsBySection: eR,
            goToThread: eO,
            renderSectionOrItem: eP,
            hasActiveThreads: y,
            isShowingSearchResult: ed,
            canSearchForumPosts: K,
            canViewArchivedPosts: J,
            observePostVisibilityAnalytics: ee,
            focusedThreadId: e_,
            headerHeight: eZ,
          });
        !(function (e) {
          let {
            masonryListScrollerRef: t,
            containerWidth: n,
            isGridLayout: a,
            threadIdsBySection: r,
            focusedThreadId: l,
            parentId: i,
          } = e;
          s.useEffect(() => {
            if (a) {
              let e = setTimeout(() => {
                if (null == t.current || null == l.current) return;
                let e = l.current;
                if ("string" != typeof e) return;
                if (null == O.ZP.getSidebarState(i)) {
                  l.current = null;
                  return;
                }
                let n = r.findIndex((t) => t.find((t) => t === e)),
                  a = t.current.getCoordsMap(),
                  s = a["__section__".concat(n)],
                  o = a[ex(n, e)];
                null != s &&
                  null != o &&
                  t.current.scrollIntoViewRect({
                    start: s.top + o.top - 100,
                    end: s.top + o.top + o.height + 50,
                  });
              }, 500);
              return () => clearTimeout(e);
            }
          }, [i, n, a, r, l, t]);
        })({
          masonryListScrollerRef: eH,
          containerWidth: eE,
          isGridLayout: en,
          threadIdsBySection: eR,
          parentId: t.id,
          focusedThreadId: e_,
        });
        let eY = s.useCallback(() => {
            var e, n;
            if (ed) return;
            let a = en
              ? null === (e = eH.current) || void 0 === e
                ? void 0
                : e.getScrollerState()
              : null === (n = $.current) || void 0 === n
                ? void 0
                : n.getScrollerState();
            if (null == a) return;
            (0, V.ab)({ guildId: t.guild_id, channelId: t.id });
            let s = a.scrollTop + a.offsetHeight,
              r = a.scrollHeight - s;
            r < (en ? Math.max(200, (0, et.KW)(eE)) : 200) && I();
          }, [ed, en, t.guild_id, t.id, eE, I]),
          eX = (0, _.e7)([p.Z], () => p.Z.keyboardModeEnabled),
          eJ = (0, es.ZP)({
            id: "forum-grid-view",
            isEnabled: en && eX,
            setFocus: eK,
          }),
          eQ = (0, er.Z)({
            listRef: $,
            padding: 96,
            isEnabled: !en && eX,
            channel: t,
          }),
          { ref: e$, ...e0 } = eJ.containerProps,
          e1 = O.ZP.getSidebarState(t.id),
          e6 = null != e1 && (0, O.D5)(e1);
        return (0, a.jsx)("div", {
          className: ec.container,
          ref: ef,
          children: (0, a.jsx)(x.FocusJumpSection, {
            children: (e) =>
              (0, a.jsxs)(a.Fragment, {
                children: [
                  u &&
                    (0, a.jsx)(C.Z, {
                      channel: t,
                      draftType: L.d.FirstThreadMessage,
                      className: ec.uploadArea,
                      style: {
                        right:
                          e6 && (null == n ? void 0 : n.isThreadSidebarFloating)
                            ? n.threadSidebarWidth
                            : 0,
                      },
                    }),
                  (0, a.jsx)(eI, { channel: t }),
                  (0, a.jsx)(x.HiddenVisually, {
                    children: (0, a.jsx)(x.H, {
                      children: eo.Z.Messages.THREADS,
                    }),
                  }),
                  k
                    ? (0, a.jsx)("div", {
                        className: ec.optInNotice,
                        children: (0, a.jsx)(v.Z, { channel: t }),
                      })
                    : null,
                  en
                    ? (0, a.jsx)(es.KT, {
                        navigator: eJ,
                        children: (0, a.jsx)(
                          x.MasonryList,
                          {
                            ref: (e) => {
                              var t;
                              (e$.current =
                                null !==
                                  (t =
                                    null == e ? void 0 : e.getScrollerNode()) &&
                                void 0 !== t
                                  ? t
                                  : null),
                                eB(e);
                            },
                            itemGutter: 16,
                            padding: 24,
                            className: ec.grid,
                            columns: eb,
                            sections: ej,
                            getItemKey: eG,
                            getSectionHeight: eW,
                            getItemHeight: eh,
                            renderSection: ez,
                            renderItem: eV,
                            getSectionProps: eq,
                            onScroll: T ? eY : void 0,
                            chunkSize: 350,
                            ...e0,
                            ...e,
                          },
                          w,
                        ),
                      })
                    : (0, a.jsx)(d.bG, {
                        navigator: eQ,
                        children: (0, a.jsx)(d.SJ, {
                          children: (t) => {
                            let { ref: n, ...s } = t;
                            return (0, a.jsx)(
                              x.ListAuto,
                              {
                                ref: ey(n),
                                className: ec.list,
                                sections: ej,
                                sectionHeight: eU,
                                rowHeight: ek,
                                renderRow: eF,
                                renderSection: eD,
                                chunkSize: 150,
                                onScroll: T ? eY : void 0,
                                paddingBottom: 24,
                                ...s,
                                ...e,
                                innerRole: "list",
                              },
                              w,
                            );
                          },
                        }),
                      }),
                ],
              }),
          }),
        });
      }
      function ep(e) {
        let { channel: t, coords: n } = e,
          s = (0, T.ZP)(t);
        return (0, a.jsx)("div", {
          className: l()(ec.missingReadHistoryPermission, ec.columnsSpan),
          style: n,
          children: (0, a.jsx)(x.Text, {
            color: "text-muted",
            variant: "text-md/normal",
            children: eo.Z.Messages.FORUM_CHANNEL_NO_POST_HISTORY.format({
              channelName: s,
            }),
          }),
        });
      }
      function eT(e) {
        let { channel: t, coords: n } = e,
          s = (0, T.ZP)(t);
        return (0, a.jsx)("div", {
          className: l()(ec.missingReadHistoryPermission, ec.columnsSpan),
          style: n,
          children: (0, a.jsx)(x.Text, {
            color: "text-muted",
            variant: "text-md/normal",
            children: eo.Z.Messages.FORUM_CHANNEL_NO_SEARCH_POST_HISTORY.format(
              { channelName: s },
            ),
          }),
        });
      }
      function eI(e) {
        let { channel: t } = e,
          n = s.useCallback(() => {
            U.Z.resort(t.id);
          }, [t]),
          r = (0, _.e7)([k.Z], () => k.Z.getNewThreadCount());
        return 0 === r
          ? null
          : (0, a.jsx)(x.Clickable, {
              className: ec.newPostsButton,
              onClick: n,
              children: (0, a.jsx)(x.Text, {
                color: "text-brand",
                variant: "text-md/medium",
                children: eo.Z.Messages.NEW_FORUM_POST_COUNT.format({
                  count: r,
                }),
              }),
            });
      }
      function eE() {
        return Promise.resolve();
      }
      function eN(e) {
        var t, n, r;
        let {
            channel: i,
            isEmpty: C,
            isSearchLoading: T,
            numResults: b,
            children: v,
            coords: S,
            onHeightChange: M,
          } = e,
          {
            name: A,
            formOpen: R,
            titleFocused: O,
            hasClickedForm: Z,
            textAreaState: F,
            onboardingExpanded: k,
            setEditorAdditionRowHeight: G,
          } = (0, X.xH)((e) => {
            let {
              name: t,
              formOpen: n,
              titleFocused: a,
              hasClickedForm: s,
              textAreaState: r,
              onboardingExpanded: l,
              setEditorAdditionRowHeight: i,
            } = e;
            return {
              name: t,
              formOpen: n,
              titleFocused: a,
              hasClickedForm: s,
              textAreaState: r,
              onboardingExpanded: l,
              setEditorAdditionRowHeight: i,
            };
          }, c.Z),
          { tagFilter: z, layoutType: W } = (0, H.H)(i.id),
          Y = (0, X.AF)(),
          Q = (0, H.v)(),
          $ = (0, _.e7)([P.Z], () => P.Z.canChatInGuild(i.guild_id)),
          et = (0, B.r_)(i),
          ea = (0, j.cD)(i),
          [es, er] = s.useState(ea),
          [, ei] = (0, E.AB)(
            null !== (r = i.getGuildId()) && void 0 !== r ? r : void 0,
          ),
          ed = $ && (ea || (es && ei)),
          eu = i.isMediaChannel();
        s.useEffect(() => {
          ea && er(!0);
        }, [ea]);
        let { ref: em, height: eh } = (0, f.Z)();
        s.useEffect(() => {
          null != eh && M(eh);
        }, [M, eh]);
        let e_ = s.useCallback(() => {
          o()(() => {
            null != em.current &&
              Y.getState().setEditorHeight(em.current.offsetHeight);
          });
        }, [em, Y]);
        s.useLayoutEffect(e_, [e_, C, ed, k]),
          (0, D.yp)({ event: el.CkL.REMEASURE_TARGET, handler: e_ });
        let eg = (0, _.e7)([w.Z], () =>
            w.Z.getUploads(i.id, L.d.FirstThreadMessage),
          ),
          ex = (0, B.ql)(i),
          eC = s.useRef(null),
          ef = s.useRef(null),
          [ep, eT] = s.useState(0),
          { width: eI } = (0, _.e7)([y.Z], () => y.Z.windowSize()),
          eN =
            null === (n = eC.current) || void 0 === n
              ? void 0
              : null === (t = n.getBoundingClientRect()) || void 0 === t
                ? void 0
                : t.width,
          ev = s.useRef(null);
        s.useLayoutEffect(() => {
          var e;
          let t = ef.current,
            n =
              null == t
                ? void 0
                : null === (e = t.children) || void 0 === e
                  ? void 0
                  : e[0];
          if (null != eC.current && null != n && null != n.children) {
            let { left: e, top: t } = eC.current.getBoundingClientRect(),
              a = 0;
            for (let s of n.children) {
              let { right: n, top: r, height: l } = s.getBoundingClientRect();
              if (r - t > l) break;
              n - e > a && (a = n - e);
            }
            eT(a);
          }
        }, [i.availableTags, eI, eN, z]);
        let eS = A.length > 0 && !R && (T || null != b),
          eM =
            !__OVERLAY__ &&
            !Z &&
            !R &&
            O &&
            (0 === F.textValue.trim().length || F.textValue.trim() === ex) &&
            0 === eg.length;
        s.useLayoutEffect(() => {
          let e = eS || eM;
          if (!e) return G(0);
          null != ev.current && G(e ? ev.current.clientHeight : 0);
        }, [G, eS, eM, ev]);
        let eA = (e) => {
            (0, V.e7)({
              guildId: i.guild_id,
              channelId: i.id,
              tagId: e,
              filterTagIds: Array.from(z),
              added: !z.has(e),
              location: {
                page: el.ZY5.GUILD_CHANNEL,
                section: el.jXE.FORUM_CHANNEL_HEADER,
                object: el.qAy.CHANNEL_TAG,
              },
            }),
              Q.getState().toggleTagFilter(i.id, e);
          },
          ej = (0, u.ZP)({
            id: "".concat(i.id, "-tags-navigator"),
            isEnabled: !0,
            wrap: !0,
            scrollToStart: eE,
            scrollToEnd: eE,
            orientation: m.hy.HORIZONTAL,
          }),
          { role: eR, onFocus: eO, ...eZ } = (0, d.JA)("forum-channel-header"),
          eL = s.useRef(null),
          eP = (function () {
            let e = s.useRef(!1),
              t = (0, _.e7)([p.Z], () => p.Z.keyboardModeEnabled),
              n = s.useCallback(
                (t) => {
                  e.current = t.shiftKey;
                },
                [e],
              );
            return (
              s.useLayoutEffect(
                () => (
                  t
                    ? window.addEventListener("keydown", n)
                    : window.removeEventListener("keydown", n),
                  () => window.removeEventListener("keydown", n)
                ),
                [t, n],
              ),
              e
            );
          })(),
          ew = s.useCallback(
            (e) => {
              if ((eO(), e.target === em.current && !eP.current)) {
                var t;
                null === (t = eL.current) || void 0 === t || t.focus();
              }
            },
            [eO, em, eP],
          );
        return (0, a.jsx)(
          "div",
          {
            className: l()(ec.card, ec.headerRow, ec.columnsSpan),
            ref: em,
            onFocus: ew,
            ...eZ,
            style: {
              ...S,
              position: W === h.X.GRID ? "absolute" : "static",
              height: "auto",
            },
            children: (0, a.jsxs)(D.I3, {
              children: [
                null != i.guild_id
                  ? (0, a.jsx)(N.Z, {
                      className: l()(ec.newMemberBanner, {
                        [ec.gridViewBanner]: W === h.X.GRID,
                      }),
                      guildId: i.guild_id,
                      channel: i,
                    })
                  : null,
                (0, a.jsx)("div", {
                  className: l()(ec.mainCard, ec.header, {
                    [ec.headerWithMatchingPosts]: eS || eM,
                  }),
                  children: (0, a.jsx)(J.Z, {
                    parentChannel: i,
                    onChange: e_,
                    isSearchLoading: T,
                    canCreatePost: ed,
                    inputRef: eL,
                  }),
                }),
                (eS || eM) &&
                  (0, a.jsxs)("div", {
                    className: ec.matchingPostsRow,
                    ref: ev,
                    children: [
                      eS &&
                        (0, a.jsxs)("div", {
                          className: ec.matchingPosts,
                          children: [
                            (0, a.jsx)(x.Heading, {
                              variant: "text-xs/normal",
                              color: "text-normal",
                              children: T
                                ? eo.Z.Messages.FORUM_SEARCHING
                                : 0 === b
                                  ? eo.Z.Messages.FORUM_SEARCH_NO_MATCHING_POSTS
                                  : eo.Z.Messages.FORUM_SEARCH_MATCHING_POSTS_ALT.format(
                                      { numPosts: b, query: A },
                                    ),
                            }),
                            !T &&
                              (0, a.jsx)(x.Clickable, {
                                onClick: () => {
                                  (0, V.zI)({
                                    guildId: i.guild_id,
                                    channelId: i.id,
                                  }),
                                    U.Z.clearForumSearch(i.id),
                                    Y.getState().setName("");
                                },
                                children: (0, a.jsx)(x.Text, {
                                  variant: "text-xs/semibold",
                                  color: "text-brand",
                                  className: ec.clear,
                                  children: eo.Z.Messages.CLEAR,
                                }),
                              }),
                          ],
                        }),
                      (0, a.jsx)("div", { className: ec.tagsSpacer }),
                      eM
                        ? ed
                          ? (0, a.jsxs)("div", {
                              className: ec.startPostHelp,
                              children: [
                                (0, a.jsx)(x.KeyCombo, {
                                  shortcut: "SHIFT",
                                  className: ec.keyboardShortcut,
                                }),
                                (0, a.jsx)(x.Text, {
                                  variant: "text-xs/normal",
                                  color: "text-normal",
                                  children: "+",
                                }),
                                (0, a.jsx)(x.KeyCombo, {
                                  shortcut: "ENTER",
                                  className: ec.keyboardShortcut,
                                }),
                                (0, a.jsx)(x.Text, {
                                  variant: "text-xs/normal",
                                  color: "text-normal",
                                  children:
                                    eo.Z.Messages.FORUM_ENTER_TO_START_POST,
                                }),
                              ],
                            })
                          : (0, a.jsxs)("div", {
                              className: ec.startPostHelp,
                              children: [
                                (0, a.jsx)(x.CircleWarningIcon, {
                                  size: "custom",
                                  color: "currentColor",
                                  height: 14,
                                  width: 14,
                                  className: ec.warnIcon,
                                }),
                                (0, a.jsx)(x.Text, {
                                  variant: "text-xs/normal",
                                  color: "text-normal",
                                  children:
                                    eo.Z.Messages.FORUM_NO_POST_PERMISSION_HELP,
                                }),
                              ],
                            })
                        : null,
                    ],
                  }),
                (0, a.jsx)(q.Z, { channel: i, onChange: e_ }),
                (0, a.jsxs)("div", {
                  className: ec.tagsContainer,
                  ref: eC,
                  children: [
                    (0, a.jsx)(eb, { channel: i }),
                    i.availableTags.length > 0
                      ? (0, a.jsxs)(a.Fragment, {
                          children: [
                            (0, a.jsx)("div", { className: ec.divider }),
                            (0, a.jsx)("div", {
                              className: ec.tagList,
                              ref: ef,
                              children: (0, a.jsx)(d.bG, {
                                navigator: ej,
                                children: (0, a.jsx)(d.SJ, {
                                  children: (e) => {
                                    let { ref: t, ...n } = e;
                                    return (0, a.jsx)("div", {
                                      className: ec.tagListInner,
                                      ref: t,
                                      ...n,
                                      children: i.availableTags.map((e) =>
                                        (0, a.jsx)(
                                          ee.Z,
                                          {
                                            className: ec.tag,
                                            tag: e,
                                            onClick: () => eA(e.id),
                                            selected: z.has(e.id),
                                          },
                                          e.id,
                                        ),
                                      ),
                                    });
                                  },
                                }),
                              }),
                            }),
                            (0, a.jsx)(x.Popout, {
                              renderPopout: (e) => {
                                let { closePopout: t, setPopoutRef: n } = e;
                                return (0, a.jsx)(en.Z, {
                                  channel: i,
                                  closePopout: t,
                                  setPopoutRef: n,
                                });
                              },
                              position: "bottom",
                              align: "right",
                              children: (e, t) => {
                                let { isShown: n } = t;
                                return (0, a.jsxs)(x.Button, {
                                  ...e,
                                  size: x.Button.Sizes.MIN,
                                  color: x.Button.Colors.CUSTOM,
                                  className: l()(ec.tagsButton, {
                                    [ec.tagsButtonWithCount]: z.size > 0,
                                  }),
                                  style: { left: ep },
                                  innerClassName: ec.tagsButtonInner,
                                  "aria-label":
                                    z.size > 0
                                      ? eo.Z.Messages
                                          .FORUM_TAG_SEE_MORE_A11Y_LABEL
                                      : eo.Z.Messages.FORUM_TAG_ALL_A11Y_LABEL,
                                  children: [
                                    z.size > 0
                                      ? (0, a.jsx)("div", {
                                          className: ec.countContainer,
                                          children: (0, a.jsx)(x.Text, {
                                            className: ec.countText,
                                            color: "none",
                                            variant: "text-xs/medium",
                                            children: z.size,
                                          }),
                                        })
                                      : eo.Z.Messages.FORUM_TAG_ALL,
                                    n
                                      ? (0, a.jsx)(x.ChevronSmallUpIcon, {
                                          size: "custom",
                                          color: "currentColor",
                                          width: 20,
                                        })
                                      : (0, a.jsx)(x.ChevronSmallDownIcon, {
                                          size: "custom",
                                          color: "currentColor",
                                          width: 20,
                                        }),
                                  ],
                                });
                              },
                            }),
                            (0, a.jsxs)(x.Button, {
                              size: x.Button.Sizes.MIN,
                              color: x.Button.Colors.CUSTOM,
                              className: l()(
                                ec.tagsButton,
                                ec.tagsButtonPlaceholder,
                              ),
                              innerClassName: ec.tagsButtonInner,
                              "aria-label":
                                eo.Z.Messages.FORUM_TAG_SEE_MORE_A11Y_LABEL,
                              children: [
                                z.size > 0
                                  ? (0, a.jsx)("div", {
                                      className: ec.countContainer,
                                      children: (0, a.jsx)(x.Text, {
                                        className: ec.countText,
                                        color: "none",
                                        variant: "text-xs/medium",
                                        children: z.size,
                                      }),
                                    })
                                  : null,
                                (0, a.jsx)(x.ChevronSmallUpIcon, {
                                  size: "custom",
                                  color: "currentColor",
                                  width: 24,
                                }),
                              ],
                            }),
                          ],
                        })
                      : null,
                  ],
                }),
                v,
                et &&
                  !eu &&
                  (0, a.jsx)(I.ZP, {
                    contentTypes: [g.z.FORUM_CHANNEL_HELPER_CARD],
                    children: (e) => {
                      let { visibleContent: t, markAsDismissed: n } = e;
                      return t === g.z.FORUM_CHANNEL_HELPER_CARD
                        ? (0, a.jsx)(K.Z, { onDismiss: n })
                        : null;
                    },
                  }),
              ],
            }),
          },
          "create-form",
        );
      }
      function eb(e) {
        let { channel: t } = e,
          n = t.isMediaChannel();
        return (0, a.jsx)(x.Popout, {
          renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, a.jsx)($.Z, { channel: t, closePopout: n });
          },
          position: "bottom",
          align: "left",
          children: (e, t) => {
            let { isShown: s } = t;
            return (0, a.jsxs)(x.Button, {
              ...e,
              size: x.Button.Sizes.MIN,
              color: x.Button.Colors.CUSTOM,
              className: ec.sortDropdown,
              innerClassName: ec.sortDropdownInner,
              "aria-label": n
                ? eo.Z.Messages.MEDIA_CHANNEL_SORT
                : eo.Z.Messages.FORUM_CHANNEL_SORT_AND_VIEW,
              children: [
                (0, a.jsx)(x.ArrowsUpDownIcon, {
                  size: "xs",
                  color: "currentColor",
                }),
                (0, a.jsx)(x.Text, {
                  className: ec.sortDropdownText,
                  variant: "text-sm/medium",
                  color: "interactive-normal",
                  children: n
                    ? eo.Z.Messages.MEDIA_CHANNEL_SORT
                    : eo.Z.Messages.FORUM_CHANNEL_SORT_AND_VIEW,
                }),
                s
                  ? (0, a.jsx)(x.ChevronSmallUpIcon, {
                      size: "custom",
                      color: "currentColor",
                      width: 20,
                    })
                  : (0, a.jsx)(x.ChevronSmallDownIcon, {
                      size: "custom",
                      color: "currentColor",
                      width: 20,
                    }),
              ],
            });
          },
        });
      }
    },
    355589: function (e, t, n) {
      "use strict";
      n(653041), n(47120);
      var a = n(735250),
        s = n(470079),
        r = n(120356),
        l = n.n(r),
        i = n(913527),
        o = n.n(i),
        c = n(212433),
        d = n(831209),
        u = n(149765),
        m = n(442837),
        h = n(481060),
        _ = n(787014),
        g = n(412899),
        x = n(447003),
        C = n(605436),
        f = n(621516),
        p = n(430824),
        T = n(186523),
        I = n(585483),
        E = n(70956),
        N = n(709054),
        b = n(961675),
        v = n(883429),
        S = n(993259),
        M = n(109434),
        A = n(456269),
        j = n(228392),
        R = n(432771),
        O = n(538366),
        Z = n(470623),
        L = n(710352),
        P = n(981631),
        w = n(689938),
        y = n(410784);
      function D(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      let F = { width: 28, height: 28 },
        U = { width: 20, height: 20, borderRadius: 10 },
        k = (e) => {
          (0, j.e5)({ onboardingCTA: e });
        };
      class H {
        addStep(e) {
          ++this.currentIndex,
            this.steps.push({ index: this.currentIndex, ...e }),
            e.isDone && this.completedSteps++;
        }
        getSteps() {
          return this.steps;
        }
        isAllDone() {
          return this.steps.every((e) => e.isDone);
        }
        constructor() {
          D(this, "currentIndex", 0),
            D(this, "steps", []),
            D(this, "completedSteps", 0);
        }
      }
      let B = (e) => {
          let t = null != e.topic && e.topic.length > 0;
          return {
            name: w.Z.Messages
              .FORUM_CHANNEL_ONBOARDING_CHECKLIST_GUIDELINES_TITLE,
            description:
              w.Z.Messages
                .FORUM_CHANNEL_ONBOARDING_CHECKLIST_GUIDELINES_DESCRIPTION,
            clickHandler: () => {
              k(L.ZI.GUIDELINES), _.ZP.open(e.id, void 0, P.ZfP.TOPIC);
            },
            isDone: t,
          };
        },
        G = (e) => {
          let t = null != e.availableTags && e.availableTags.length > 0;
          return {
            name: w.Z.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_TAGS_TITLE,
            description:
              w.Z.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_TAGS_DESCRIPTION,
            clickHandler: () => {
              k(L.ZI.TAGS),
                _.ZP.open(e.id),
                (0, h.openModalLazy)(async () => {
                  let { default: t } = await n
                    .e("21971")
                    .then(n.bind(n, 201049));
                  return (n) =>
                    (0, a.jsx)(t, {
                      ...n,
                      channelId: e.id,
                      guildId: e.guild_id,
                    });
                });
            },
            isDone: t,
          };
        },
        z = (e) => {
          let t = null != e.defaultReactionEmoji;
          return {
            name: w.Z.Messages
              .FORUM_CHANNEL_ONBOARDING_CHECKLIST_DEFAULT_REACTION_TITLE,
            description:
              w.Z.Messages
                .FORUM_CHANNEL_ONBOARDING_CHECKLIST_DEFAULT_REACTION_DESCRIPTION,
            clickHandler: () => {
              k(L.ZI.DEFAULT_REACTION),
                (0, h.openModalLazy)(async () => {
                  let { default: t } = await n
                    .e("80404")
                    .then(n.bind(n, 158586));
                  return (n) => (0, a.jsx)(t, { ...n, channel: e });
                });
            },
            isDone: t,
          };
        },
        V = (e, t, s) => ({
          name: w.Z.Messages
            .FORUM_CHANNEL_ONBOARDING_CHECKLIST_FIRST_POST_TITLE,
          description: t
            ? w.Z.Messages
                .MEDIA_CHANNEL_ONBOARDING_CHECKLIST_FIRST_POST_DESCRIPTION
            : w.Z.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_FIRST_POST_DESCRIPTION.format(
                {
                  onClick: (e) => {
                    null != s &&
                      (e.preventDefault(),
                      e.stopPropagation(),
                      (0, j.qz)(),
                      (0, h.openModalLazy)(async () => {
                        let { default: e } = await n
                          .e("18417")
                          .then(n.bind(n, 740696));
                        return (t) => (0, a.jsx)(e, { ...t, guildId: s });
                      }));
                  },
                },
              ),
          clickHandler: () => {
            k(L.ZI.CREATE_POST), I.S.dispatch(P.CkL.FOCUS_COMPOSER_TITLE);
          },
          isDone: e,
        }),
        W = (e, t) =>
          s.useCallback(() => (t(!1), v.Z.hideAdminOnboarding(e, !0)), [e, t]),
        q = (e) => {
          let t = N.default.extractTimestamp(e);
          return o()().isBefore(o()(t).add(o().duration(15, "days")));
        },
        K = (e, t, n) => {
          s.useEffect(() => {
            !e && n(!t);
          }, [e, n, t]);
        },
        Y = (e, t, n, a) => {
          let r = s.useRef(0);
          s.useEffect(
            () => (
              n || !e || t
                ? clearTimeout(r.current)
                : (r.current = setTimeout(() => {
                    a();
                  }, 60 * E.Z.Millis.SECOND)),
              () => clearTimeout(r.current)
            ),
            [e, t, a, n],
          );
        },
        X = (e, t, n) => {
          s.useEffect(() => {
            e && t && n();
          }, []);
        },
        J = (e) => {
          let {
              isAllDone: t,
              isVisible: n,
              canManageChannel: a,
              guildId: r,
              channel: l,
            } = e,
            i = (0, m.e7)([p.Z], () => (null != r ? p.Z.getRoles(r) : void 0)),
            o = s.useCallback(() => {
              I.S.dispatch(P.CkL.REMEASURE_TARGET);
            }, []);
          s.useEffect(() => {
            o();
          }, [o, t, n, a, i, l.id, l.permissionOverwrites]);
        },
        Q = () => {
          let [e, t] = s.useState(!0);
          return {
            transitions: (0, h.useTransition)(e, {
              keys: (e) => (e ? "shown" : "hidden"),
              config: et,
              from: { opacity: 0 },
              enter: { opacity: 1 },
              leave: { opacity: 0 },
              unique: !0,
            }),
            setVisible: t,
          };
        },
        $ = (e) =>
          (0, h.useTransition)(e, {
            from: { maxHeight: 0 },
            enter: { maxHeight: 500 },
            leave: { maxHeight: 0 },
            config: { duration: 200 },
          }),
        ee = (e) => {
          let { guild: t, roles: n } = e;
          return (0, a.jsx)("div", {
            className: y.rolesList,
            "aria-label": w.Z.Messages.ROLES_LIST.format({
              numRoles: n.length,
            }),
            children: n.map((e) =>
              (0, a.jsx)(
                g.UB,
                {
                  role: e,
                  canRemove: !1,
                  onRemove: P.VqG,
                  guildId: t.id,
                  className: y.rolePill,
                },
                e.id,
              ),
            ),
          });
        },
        et = { mass: 1, tension: 250, friction: 18, clamp: !0 },
        en = (e) => {
          let { guild: t, channel: r, hasAnyThread: l, handleHide: i } = e,
            [o, c] = s.useState(!1),
            d = (0, R.c)(r.id),
            _ = (0, m.e7)([b.Z], () => b.Z.hasHidden(r.id)),
            g = (function (e, t, r, l) {
              let i = null == e ? void 0 : e.id,
                o = (0, m.e7)([p.Z], () =>
                  null != i ? p.Z.getRoles(i) : void 0,
                );
              return s.useMemo(() => {
                let s = new H(),
                  i = (null == t ? void 0 : t.isMediaChannel()) === !0;
                return (
                  null != e &&
                    null != t &&
                    !i &&
                    null != o &&
                    s.addStep(
                      (function (e, t, s, r) {
                        let l = (0, x.Z)(s)
                            ? u.$e(P.Plq.VIEW_CHANNEL, P.Plq.SEND_MESSAGES)
                            : P.Plq.SEND_MESSAGES,
                          i =
                            null != e
                              ? (0, S.E$)(e, t, s, l).filter(
                                  (t) =>
                                    s.permissionOverwrites.hasOwnProperty(
                                      t.id,
                                    ) || (0, C.pM)(e.id, t.id),
                                )
                              : [],
                          o = i.length > 0,
                          c = i.some((t) => (0, C.pM)(e.id, t.id));
                        return {
                          name: w.Z.Messages
                            .FORUM_CHANNEL_ONBOARDING_CHECKLIST_PERMISSION_TITLE,
                          description:
                            w.Z.Messages
                              .FORUM_CHANNEL_ONBOARDING_CHECKLIST_PERMISSION_DESCRIPTION,
                          isDone: o && c,
                          shouldWarn: o && !c,
                          children: o
                            ? (0, a.jsx)(ee, { guild: e, roles: i })
                            : null,
                          clickHandler: () => {
                            k(L.ZI.PERMISSIONS),
                              (0, h.openModalLazy)(
                                async () => {
                                  let { default: t } = await n
                                    .e("78704")
                                    .then(n.bind(n, 560602));
                                  return (
                                    r(!0),
                                    (n) =>
                                      (0, a.jsx)(t, {
                                        ...n,
                                        channel: s,
                                        guild: e,
                                        permission: l,
                                        currentSelectedRoles: i,
                                      })
                                  );
                                },
                                {
                                  modalKey:
                                    "SEND_MESSAGE_ROLE_PERMISSION_FIX_MODAL_KEY",
                                  onCloseRequest: P.VqG,
                                  onCloseCallback: () => r(!1),
                                },
                              );
                          },
                        };
                      })(e, o, t, l),
                    ),
                  !i && s.addStep(B(t)),
                  s.addStep(G(t)),
                  s.addStep(z(t)),
                  s.addStep(V(r, i, null == e ? void 0 : e.id)),
                  s
                );
              }, [t, e, o, r, l]);
            })(t, r, l, c),
            f = g.isAllDone();
          return (
            Y(f, d || _ || !q(r.id), o, i),
            { onboardingSteps: g, isHidden: _, isDismissed: d, isAllDone: f }
          );
        },
        ea = () =>
          s.useCallback((e) => {
            var t;
            null === (t = e.clickHandler) || void 0 === t || t.call(e);
          }, []),
        es = (e) => {
          let { handleHide: t } = e;
          return (0, a.jsx)(h.Clickable, {
            onClick: t,
            className: y.closeButton,
            "aria-label": w.Z.Messages.DISMISS,
            children: (0, a.jsx)(h.XSmallIcon, {
              size: "md",
              color: "currentColor",
              className: y.closeIcon,
            }),
          });
        },
        er = (e) => {
          let { expanded: t, onClick: n } = e;
          return (0, a.jsx)(h.Clickable, {
            onClick: n,
            className: y.closeButton,
            "aria-label": t ? w.Z.Messages.COLLAPSE : w.Z.Messages.EXPAND,
            children: t
              ? (0, a.jsx)(h.MinimizeIcon, {
                  size: "xs",
                  color: "currentColor",
                  className: y.closeIcon,
                })
              : (0, a.jsx)(h.MaximizeIcon, {
                  size: "xs",
                  color: "currentColor",
                  className: y.closeIcon,
                }),
          });
        };
      t.Z = (e) => {
        let { hasAnyThread: t, channel: n } = e,
          { onboardingExpanded: r } = (0, Z.xH)((e) => {
            let { onboardingExpanded: t } = e;
            return { onboardingExpanded: t };
          }),
          { tagFilter: i } = (0, M.H)(n.id),
          o = (0, m.e7)([p.Z], () => p.Z.getGuild(n.getGuildId())),
          u = (0, A.r_)(n),
          { transitions: _, setVisible: g } = Q(),
          x = $(r),
          C = ea(),
          I = W(n.id, g),
          {
            onboardingSteps: E,
            isDismissed: N,
            isHidden: b,
            isAllDone: v,
          } = en({ guild: o, channel: n, hasAnyThread: t, handleHide: I }),
          S = !b && !N,
          j = (0, Z.AF)(),
          R = n.isMediaChannel(),
          L = (e) => j.getState().setOnboardingExpanded(e);
        return (X(v, S, I),
        J({
          isAllDone: v,
          isVisible: S,
          canManageChannel: u,
          guildId: null == o ? void 0 : o.id,
          channel: n,
        }),
        K(N, b, g),
        s.useEffect(() => {
          (!t || !S) && L(!0);
        }, []),
        null == o)
          ? null
          : S && u
            ? R
              ? t
                ? null
                : (0, a.jsx)(f.Z, { channel: n })
              : (0, a.jsx)(a.Fragment, {
                  children: _((e, t) =>
                    t
                      ? (0, a.jsx)(c.animated.div, {
                          style: e,
                          className: y.container,
                          children: (0, a.jsxs)("div", {
                            className: y.wrapper,
                            children: [
                              (0, a.jsx)("div", {
                                className: y.headerRow,
                                children: (0, a.jsxs)(h.HeadingLevel, {
                                  component: (0, a.jsx)(h.Heading, {
                                    variant: "heading-md/semibold",
                                    children: w.Z.Messages.GET_STARTED,
                                  }),
                                  children: [
                                    (0, a.jsx)(h.Heading, {
                                      variant: "heading-md/medium",
                                      className: y.header,
                                      children:
                                        w.Z.Messages.FORUM_CHANNEL_ONBOARDING_COMPLETED_COUNT.format(
                                          {
                                            numCompleted:
                                              E.completedSteps.toString(),
                                            numSteps: E.steps.length.toString(),
                                          },
                                        ),
                                    }),
                                    (0, a.jsxs)(h.Text, {
                                      variant: "text-xs/normal",
                                      className: y.visibilityInfo,
                                      children: [
                                        (0, a.jsx)(h.CircleInformationIcon, {
                                          size: "xxs",
                                          color: "currentColor",
                                          className: y.icon,
                                        }),
                                        w.Z.Messages
                                          .FORUM_CHANNEL_ONBOARDING_VISIBILITY,
                                      ],
                                    }),
                                    (0, a.jsx)(er, {
                                      expanded: r,
                                      onClick: () => L(!r),
                                    }),
                                    (0, a.jsx)(es, { handleHide: I }),
                                  ],
                                }),
                              }),
                              x((e, t) =>
                                t
                                  ? (0, a.jsx)(c.animated.div, {
                                      style: e,
                                      className: y.listContainer,
                                      children: (0, a.jsx)("ol", {
                                        className: y.checklist,
                                        children: E.getSteps().map((e) =>
                                          (0, a.jsxs)(
                                            h.Clickable,
                                            {
                                              tag: "li",
                                              "aria-label": e.name,
                                              onClick: () => C(e),
                                              className: l()(y.stepContainer, {
                                                [y.completed]: e.isDone,
                                              }),
                                              children: [
                                                e.shouldWarn
                                                  ? (0, a.jsx)(
                                                      h.CircleWarningIcon,
                                                      {
                                                        size: "custom",
                                                        width: 20,
                                                        height: 20,
                                                        color:
                                                          d.Z.STATUS_DANGER,
                                                        className: y.stepStatus,
                                                      },
                                                    )
                                                  : e.isDone
                                                    ? (0, a.jsx)(h.IconBadge, {
                                                        color:
                                                          d.Z
                                                            .STATUS_POSITIVE_BACKGROUND,
                                                        icon: h.CheckmarkLargeIcon,
                                                        style: U,
                                                        className: y.stepStatus,
                                                      })
                                                    : (0, a.jsx)(h.IconBadge, {
                                                        disableColor: !0,
                                                        icon: (0,
                                                        h.makeIconCompat)(T.Z),
                                                        style: F,
                                                        className: l()(
                                                          y.stepStatus,
                                                          y.completed,
                                                        ),
                                                      }),
                                                (0, a.jsxs)("div", {
                                                  className: y.step,
                                                  children: [
                                                    (0, a.jsx)(h.Text, {
                                                      variant: "text-md/medium",
                                                      color: e.isDone
                                                        ? "header-secondary"
                                                        : "header-primary",
                                                      className: y.stepName,
                                                      children: e.name,
                                                    }),
                                                    (0, a.jsx)(h.Text, {
                                                      variant: "text-sm/normal",
                                                      color: "header-secondary",
                                                      className:
                                                        y.stepDescription,
                                                      children: e.description,
                                                    }),
                                                    e.children,
                                                  ],
                                                }),
                                                (0, a.jsx)(
                                                  h.ChevronSmallRightIcon,
                                                  {
                                                    size: "custom",
                                                    color: "currentColor",
                                                    width: 12,
                                                    className: y.stepStatus,
                                                  },
                                                ),
                                              ],
                                            },
                                            "onboard-step-".concat(e.index),
                                          ),
                                        ),
                                      }),
                                    })
                                  : null,
                              ),
                            ],
                          }),
                        })
                      : null,
                  ),
                })
            : t
              ? null
              : (0, a.jsx)(O.Z, {
                  channelName: n.name,
                  guildId: n.guild_id,
                  tagFilter: i,
                  channel: n,
                });
      };
    },
    538366: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return _;
        },
      });
      var a = n(735250),
        s = n(470079),
        r = n(481060),
        l = n(665906),
        i = n(499033),
        o = n(585483),
        c = n(456269),
        d = n(228392),
        u = n(981631),
        m = n(689938),
        h = n(332236);
      function _(e) {
        let { channelName: t, guildId: _, tagFilter: g, channel: x } = e,
          C = (0, c.r_)(x),
          f = (0, l.cD)(x),
          p = x.isMediaChannel(),
          T = s.useCallback(() => {
            (0, d.qz)(),
              (0, r.openModalLazy)(async () => {
                let { default: e } = await n.e("18417").then(n.bind(n, 740696));
                return (t) => (0, a.jsx)(e, { ...t, guildId: _ });
              });
          }, [_]),
          I = g.size > 0,
          E = f || C,
          N = !I && C && !p,
          b = s.useCallback(
            () =>
              N
                ? T()
                : f
                  ? void o.S.dispatch(u.CkL.FOCUS_COMPOSER_TITLE)
                  : (0, u.VqG)(),
            [T, N, f],
          );
        return (0, a.jsxs)("div", {
          className: h.container,
          children: [
            (0, a.jsxs)("div", {
              className: h.iconContainer,
              children: [
                (0, a.jsx)("div", {
                  className: h.icon,
                  children: (0, a.jsx)(r.ChatIcon, {
                    size: "custom",
                    color: "currentColor",
                    width: 30,
                    height: 30,
                  }),
                }),
                (0, a.jsx)(i.Z, { className: h.stars }),
              ],
            }),
            (0, a.jsx)(r.Heading, {
              className: h.header,
              variant: "heading-md/semibold",
              children: I
                ? m.Z.Messages.FORUM_NO_POST_WITH_TAG_TITLE.format({
                    numTags: g.size,
                  })
                : m.Z.Messages.FORUM_EMPTY_STATE_TITLE,
            }),
            (0, a.jsx)(r.Text, {
              color: "header-secondary",
              variant: "text-sm/normal",
              children: I
                ? m.Z.Messages.FORUM_NO_POST_WITH_TAG_DESCRIPTION.format({
                    numTags: g.size,
                  })
                : m.Z.Messages.FORUM_EMPTY_STATE_DESCRIPTION.format({
                    channelName: t,
                  }),
            }),
            E &&
              (0, a.jsxs)(r.Button, {
                look: r.Button.Looks.BLANK,
                size: r.Button.Sizes.MIN,
                color: r.Button.Colors.GREEN,
                onClick: b,
                className: h.cta,
                innerClassName: h.button,
                children: [
                  N
                    ? m.Z.Messages.FORUM_EMPTY_STATE_CTA
                    : m.Z.Messages.FORUM_EMPTY_STATE_CREATE_POST_CTA,
                  (0, a.jsx)(r.ChevronSmallRightIcon, {
                    size: "custom",
                    color: "currentColor",
                    width: 12,
                  }),
                ],
              }),
          ],
        });
      }
    },
    542581: function (e, t, n) {
      "use strict";
      n(47120);
      var a = n(735250),
        s = n(470079),
        r = n(120356),
        l = n.n(r),
        i = n(212433),
        o = n(481060),
        c = n(787014),
        d = n(454585),
        u = n(456269),
        m = n(470623),
        h = n(981631),
        _ = n(689938),
        g = n(820634),
        x = n(554034);
      t.Z = s.memo(function (e) {
        let { channel: t, onChange: r } = e,
          C = (0, m.AF)(),
          { guidelinesOpen: f } = (0, m.xH)((e) => {
            let { guidelinesOpen: t } = e;
            return { guidelinesOpen: t };
          }),
          p = (0, u.r_)(t),
          [T, I] = s.useState(!1),
          E = s.useCallback(
            (e) => {
              if (null == e) return;
              let t = e.clientHeight >= 220;
              t !== T && I(t);
            },
            [T],
          );
        s.useLayoutEffect(() => {
          setTimeout(r, 350);
        }, [f, r]);
        let [N, b] = s.useState(!f),
          v = (0, o.useSpring)({
            opacity: f ? 1 : 0,
            maxHeight: f ? 500 : 0,
            config: { duration: 300 },
            onRest: () => b(!f),
          });
        return null != t.topic && t.topic.length > 0
          ? (0, a.jsx)(i.animated.div, {
              style: v,
              className: N ? g.hiddenVisually : void 0,
              children: (0, a.jsxs)("div", {
                className: g.container,
                children: [
                  (0, a.jsxs)("div", {
                    className: g.headerContainer,
                    children: [
                      (0, a.jsxs)(o.Heading, {
                        variant: "heading-lg/semibold",
                        className: g.guidelinesHeader,
                        children: [
                          (0, a.jsx)(o.BookCheckIcon, {
                            size: "custom",
                            color: "currentColor",
                            width: 20,
                            height: 20,
                          }),
                          _.Z.Messages.FORUM_POST_GUIDELINES_TITLE,
                          p &&
                            (0, a.jsx)(o.Clickable, {
                              onClick: () => {
                                c.ZP.open(t.id, void 0, h.ZfP.TOPIC);
                              },
                              tag: "span",
                              className: g.clickable,
                              children: (0, a.jsx)(o.PencilIcon, {
                                size: "xs",
                                color: "currentColor",
                              }),
                            }),
                        ],
                      }),
                      (0, a.jsx)(o.Clickable, {
                        "aria-label": _.Z.Messages.CLOSE,
                        className: g.clickable,
                        onClick: () => {
                          C.getState().setGuidelinesOpen(!1);
                        },
                        children: (0, a.jsx)(o.XSmallIcon, {
                          size: "xs",
                          color: "currentColor",
                        }),
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: g.descriptionContainer,
                    children: [
                      (0, a.jsx)(o.Text, {
                        selectable: !0,
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        style: { maxHeight: 220 },
                        className: l()(g.guidelines, x.markup),
                        children: (0, a.jsx)("div", {
                          ref: E,
                          children: d.Z.parseForumPostGuidelines(t.topic, !0, {
                            channelId: t.id,
                            allowHeading: !0,
                            allowList: !0,
                          }),
                        }),
                      }),
                      T &&
                        (0, a.jsxs)("div", {
                          className: g.showMore,
                          children: [
                            (0, a.jsx)("div", { className: g.gradient }),
                            (0, a.jsx)("div", {
                              className: g.linkContainer,
                              children: (0, a.jsx)(o.Clickable, {
                                className: g.showMoreLink,
                                onClick: () => {
                                  (0, o.openModalLazy)(async () => {
                                    let { default: e } = await n
                                      .e("78712")
                                      .then(n.bind(n, 223164));
                                    return (n) =>
                                      (0, a.jsx)(e, { ...n, channel: t });
                                  });
                                },
                                children: (0, a.jsxs)(o.Text, {
                                  variant: "text-sm/semibold",
                                  color: "text-brand",
                                  className: g.showMoreText,
                                  children: [
                                    _.Z.Messages.FORUM_CHANNEL_TOPIC_VIEW_ALL,
                                    (0, a.jsx)(o.MaximizeIcon, {
                                      size: "xs",
                                      color: "currentColor",
                                      className: g.showMoreIcon,
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          ],
                        }),
                    ],
                  }),
                ],
              }),
            })
          : null;
      });
    },
    639184: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return x;
        },
      });
      var a = n(735250);
      n(470079);
      var s = n(120356),
        r = n.n(s),
        l = n(481060),
        i = n(228392),
        o = n(404616),
        c = n(710352),
        d = n(921944),
        u = n(689938),
        m = n(738941),
        h = n(167135),
        _ = n(646230),
        g = n(504764);
      function x(e) {
        let { onDismiss: t } = e;
        return (0, a.jsxs)(l.Clickable, {
          onClick: () => {
            open(c.V8), (0, i.GX)({ readGuideCta: !0 });
          },
          className: r()(_.container, h.container, m.mainCard),
          children: [
            (0, a.jsxs)("div", {
              className: h.inline,
              children: [
                (0, a.jsxs)("div", {
                  className: h.author,
                  children: [
                    (0, a.jsx)(l.ClydeIcon, {
                      size: "custom",
                      width: 28,
                      height: 28,
                      color: "currentColor",
                      className: h.discordIcon,
                    }),
                    (0, a.jsx)(l.Text, {
                      variant: "text-sm/semibold",
                      color: "header-primary",
                      children: u.Z.Messages.DISCORD_NAME,
                    }),
                    (0, a.jsxs)("div", {
                      className: h.notice,
                      children: [
                        (0, a.jsx)(l.CircleInformationIcon, {
                          size: "md",
                          color: "currentColor",
                          className: h.infoIcon,
                        }),
                        (0, a.jsx)(l.Text, {
                          variant: "text-sm/normal",
                          color: "header-secondary",
                          children: u.Z.Messages.FORUM_HELPER_CARD_NOTICE,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsx)(l.Clickable, {
                  onClick: (e) => {
                    e.stopPropagation(),
                      t(d.L.DISMISS),
                      (0, i.GX)({ readGuideCta: !1 });
                  },
                  children: (0, a.jsx)(l.XSmallIcon, {
                    size: "xs",
                    color: "currentColor",
                    className: h.closeIcon,
                  }),
                }),
              ],
            }),
            (0, a.jsx)("hr", { className: h.separator }),
            (0, a.jsxs)("div", {
              className: h.inline,
              children: [
                (0, a.jsxs)("div", {
                  children: [
                    (0, a.jsx)(l.Heading, {
                      className: r()(_.__invalid_channelName, h.title),
                      variant: "heading-lg/semibold",
                      color: "header-primary",
                      children: u.Z.Messages.FORUM_HELPER_CARD_TITLE,
                    }),
                    (0, a.jsx)(l.Text, {
                      variant: "text-sm/normal",
                      color: "header-secondary",
                      children: u.Z.Messages.FORUM_HELPER_CARD_BODY,
                    }),
                  ],
                }),
                (0, a.jsx)("img", {
                  src: g,
                  alt: u.Z.Messages.FORUM_HELPER_CARD_ALT_TEXT,
                  width: o.TJ,
                  height: o.TJ,
                }),
              ],
            }),
          ],
        });
      }
    },
    76451: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return j;
        },
        _: function () {
          return M;
        },
      }),
        n(47120);
      var a = n(735250),
        s = n(470079),
        r = n(512722),
        l = n.n(r),
        i = n(212433),
        o = n(442837),
        c = n(481060),
        d = n(53281),
        u = n(607070),
        m = n(541716),
        h = n(859235),
        _ = n(898463),
        g = n(592125),
        x = n(703558),
        C = n(117530),
        f = n(585483),
        p = n(127654),
        T = n(228392),
        I = n(981631),
        E = n(628178);
      let N = { scale: 0.95, opacity: 0 },
        b = { scale: 1, opacity: 1 },
        v = { scale: 1, opacity: 1 },
        S = { tension: 2400, friction: 52 };
      function M(e) {
        let { channelId: t, onClick: n, onClose: r, onMouseEnter: i } = e,
          u = s.useRef(null),
          m = (0, o.e7)([g.Z], () => g.Z.getChannel(t), [t]);
        return (
          l()(null != m, "Forum Channel is null"),
          (0, a.jsxs)(c.Clickable, {
            className: E.uploadInput,
            onMouseEnter: i,
            onClick: () => {
              (0, T.N3)({ isMobile: !1 }), null == n || n();
            },
            onKeyPress: (e) => {
              if ("Enter" === e.key) {
                var t;
                null === (t = u.current) ||
                  void 0 === t ||
                  t.activateUploadDialogue(),
                  (0, T.N3)({ isMobile: !1 });
              }
            },
            children: [
              (0, a.jsx)(d.Z, {
                className: E.fileInput,
                ref: u,
                onChange: (e) => {
                  null == r || r(),
                    (0, p.d)(e.currentTarget.files, m, x.d.FirstThreadMessage, {
                      requireConfirm: !0,
                    }),
                    f.S.dispatch(I.CkL.TEXTAREA_FOCUS),
                    (e.currentTarget.value = null);
                },
                multiple: m.rateLimitPerUser <= 0,
                tabIndex: -1,
                "aria-hidden": !0,
              }),
              (0, a.jsx)(c.ImagePlusIcon, {
                size: "custom",
                color: "currentColor",
                width: 28,
                height: 28,
                className: E.uploadIcon,
              }),
            ],
          })
        );
      }
      function A(e) {
        let { channelId: t, closePopout: n } = e,
          [r, l] = s.useState(!1),
          { reducedMotion: d } = s.useContext(
            c.AccessibilityPreferencesContext,
          ),
          g = (0, c.useSpring)(
            { from: d.enabled ? b : N, to: v, config: S },
            "animate-always",
          ),
          x = (0, o.e7)([u.Z], () => u.Z.keyboardModeEnabled),
          f = (0, o.e7)([C.Z], () =>
            C.Z.getUploads(t, m.I.CREATE_FORUM_POST.drafts.type),
          );
        return (0, a.jsx)(i.animated.div, {
          className: E.popoutContainer,
          onMouseLeave: () => {
            !r && n();
          },
          style: g,
          children: (0, a.jsxs)(c.ScrollerThin, {
            orientation: "horizontal",
            className: E.popout,
            paddingFix: !1,
            fade: !0,
            children: [
              (0, a.jsx)(M, {
                channelId: t,
                onClick: () => {
                  l(!0);
                },
                onClose: () => {
                  l(!1), n();
                },
              }),
              (0, a.jsx)("div", {
                className: E.uploads,
                children: f.map((e) =>
                  (0, a.jsx)(
                    _.Z,
                    {
                      channelId: t,
                      draftType: m.I.CREATE_FORUM_POST.drafts.type,
                      upload: e,
                      keyboardModeEnabled: x,
                      hideFileName: !0,
                      size: h.q.SMALL,
                    },
                    e.id,
                  ),
                ),
              }),
            ],
          }),
        });
      }
      function j(e) {
        let { channelId: t } = e,
          [n, r] = s.useState(!1),
          l = (0, o.e7)([C.Z], () =>
            C.Z.getUploads(t, m.I.CREATE_FORUM_POST.drafts.type),
          ),
          i = l.length,
          c = i > 0;
        s.useEffect(() => {
          n && !c && r(!1);
        }, [n, c]);
        let d = () => {
          c && r(!0);
        };
        return (0, a.jsxs)("div", {
          className: E.container,
          children: [
            c
              ? (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)(_.r, {
                      upload: l[0],
                      size: h.q.SMALL,
                      onMouseEnter: d,
                    }),
                    !n &&
                      (0, a.jsx)("div", { className: E.badge, children: i }),
                  ],
                })
              : (0, a.jsx)(M, { onMouseEnter: d, channelId: t }),
            n &&
              (0, a.jsx)(A, {
                channelId: t,
                closePopout: () => {
                  r(!1);
                },
              }),
          ],
        });
      }
    },
    749913: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return es;
        },
      }),
        n(47120),
        n(733860);
      var a = n(735250),
        s = n(470079),
        r = n(120356),
        l = n.n(r),
        i = n(512722),
        o = n.n(i),
        c = n(143927),
        d = n(924826),
        u = n(91192),
        m = n(536895),
        h = n(442837),
        _ = n(481060),
        g = n(430742),
        x = n(166459),
        C = n(541716),
        f = n(67158),
        p = n(893718),
        T = n(472243),
        I = n(436660),
        E = n(284182),
        N = n(795639),
        b = n(957730),
        v = n(25015),
        S = n(252032),
        M = n(913663),
        A = n(268350),
        j = n(456077),
        R = n(488131),
        O = n(602034),
        Z = n(23750),
        L = n(703558),
        P = n(496675),
        w = n(300429),
        y = n(117530),
        D = n(594174),
        F = n(459273),
        U = n(838440),
        k = n(127654),
        H = n(681154),
        B = n(883429),
        G = n(945141),
        z = n(456269),
        V = n(228392),
        W = n(259637),
        q = n(76451),
        K = n(470623),
        Y = n(479099),
        X = n(399894),
        J = n(81490),
        Q = n(710352),
        $ = n(981631),
        ee = n(176505),
        et = n(689938),
        en = n(51785);
      let ea = C.I.CREATE_FORUM_POST;
      function es(e) {
        let {
            parentChannel: t,
            isSearchLoading: n,
            onChange: r,
            canCreatePost: i,
            inputRef: o,
          } = e,
          {
            textAreaState: d,
            formOpen: u,
            previewing: m,
          } = (0, K.xH)((e) => {
            let { textAreaState: t, formOpen: n, previewing: a } = e;
            return { textAreaState: t, formOpen: n, previewing: a };
          }, c.Z),
          [g, x] = s.useState(null),
          C = s.useContext(F.oo),
          f = s.useCallback(() => {
            C.bumpDispatchPriority();
          }, [C]),
          p = (0, h.e7)([P.Z], () => P.Z.can($.Plq.ATTACH_FILES, t)),
          T = (0, h.Wu)([y.Z], () =>
            y.Z.getUploads(t.id, L.d.FirstThreadMessage),
          ),
          I = u && p && i,
          v = (null == t ? void 0 : t.isMediaChannel()) === !0,
          S = (function (e, t) {
            let n = (0, K.AF)(),
              a = (0, z.ql)(e);
            return s.useCallback(() => {
              let {
                formOpen: s,
                setFormOpenFromUserAction: r,
                name: l,
                textAreaState: i,
                hasClickedForm: o,
              } = n.getState();
              !s &&
                (setTimeout(() => {
                  if (t.current instanceof _.TextAreaAutosize) {
                    var e, n, a, s;
                    null === (n = t.current) ||
                      void 0 === n ||
                      null === (e = n._textArea) ||
                      void 0 === e ||
                      e.setSelectionRange(l.length, l.length),
                      null === (s = t.current) ||
                        void 0 === s ||
                        null === (a = s._textArea) ||
                        void 0 === a ||
                        a.focus();
                  }
                }, 0),
                ((o && l.length > 0) ||
                  (i.textValue.trim().length > 0 && i.textValue.trim() !== a) ||
                  y.Z.getUploads(e.id, L.d.FirstThreadMessage).length > 0) &&
                  r());
            }, [n, e.id, a, t]);
          })(t, o),
          j = (function (e) {
            let { formOpen: t } = (0, K.xH)((e) => {
                let { formOpen: t } = e;
                return { formOpen: t };
              }, c.Z),
              n = (0, K.AF)(),
              a = (0, O.r)({ parentChannel: e });
            s.useEffect(() => {
              let { setNameError: e, setMessageError: t } = n.getState();
              e(null), t(null);
            }, [t, n]);
            let r = s.useCallback(
              (t, a, s) => {
                let { name: r, textAreaState: l } = n.getState();
                null == t && (t = l.textValue), (t = t.trim());
                let { content: i } = b.ZP.parse(e, t);
                if (((t = i), null == a || 0 === a.length)) {
                  var o;
                  a =
                    null ===
                      (o = M.Z.getStickerPreview(e.id, ea.drafts.type)) ||
                    void 0 === o
                      ? void 0
                      : o.map((e) => e.id);
                }
                if (
                  ((null == s || 0 === s.length) &&
                    (s = y.Z.getUploads(e.id, L.d.FirstThreadMessage)),
                  null != s && s.length > 0 && e.isMediaChannel())
                ) {
                  let e = s.findIndex((e) => !0 === e.isThumbnail);
                  if (e > -1) {
                    let t = s[e];
                    s.splice(e, 1), s.unshift(t);
                  }
                }
                let c = 0 === r.length,
                  d =
                    (null == t || 0 === t.length) &&
                    (null == a || 0 === a.length) &&
                    0 === s.length;
                return {
                  content: t,
                  stickers: a,
                  uploads: s,
                  hasNameError: c,
                  hasMessageError: d,
                };
              },
              [e, n],
            );
            return s.useCallback(
              async (t, s, l) => {
                let {
                    setNameError: i,
                    setMessageError: o,
                    setSubmitting: c,
                    resetFormState: d,
                    formOpen: u,
                    setFormOpen: m,
                    setPreviewing: h,
                    setFormOpenFromUserAction: _,
                    setGuidelinesOpen: g,
                  } = n.getState(),
                  x = G.Z.hasSeen(e.id);
                if (!u)
                  return (
                    (0, V.P_)({ guildId: e.guild_id, channelId: e.id }),
                    !x && n.getState().setGuidelinesOpen(!0),
                    _(),
                    { shouldClear: !1, shouldRefocus: !1 }
                  );
                let {
                  content: C,
                  stickers: f,
                  uploads: p,
                  hasNameError: T,
                  hasMessageError: I,
                } = r(t, s, l);
                if (
                  (i(T ? (0, H.V_)() : null), o(I ? (0, H.T4)() : null), T || I)
                )
                  return { shouldClear: !1, shouldRefocus: !0 };
                try {
                  c(!0);
                  let { valid: t } = await (0, U.v)({
                    content: C,
                    stickers: f,
                    uploads: p,
                    type: ea,
                    channel: e,
                  });
                  if (!t) return { shouldClear: !1, shouldRefocus: !0 };
                  let n = await a(C, f, p);
                  return (
                    (0, R.ok)(n),
                    B.Z.resort(e.id),
                    (0, A.qB)(e.id, ea.drafts.type),
                    d(),
                    m(!1),
                    h(!1),
                    G.Z.markAsSeen(e.id),
                    g(!1),
                    { shouldClear: !0, shouldRefocus: !1 }
                  );
                } catch (t) {
                  var E, N;
                  return (
                    (null === (E = t.body) || void 0 === E
                      ? void 0
                      : E.code) === $.evJ.AUTOMOD_TITLE_BLOCKED
                      ? i((0, H.Gx)(t.body, e))
                      : (null === (N = t.body) || void 0 === N
                          ? void 0
                          : N.code) === $.evJ.AUTOMOD_MESSAGE_BLOCKED &&
                        o((0, H.Gx)(t.body, e)),
                    { shouldClear: !1, shouldRefocus: !0 }
                  );
                } finally {
                  c(!1);
                }
              },
              [a, r, e, n],
            );
          })(t);
        return (
          s.useLayoutEffect(r, [u, d, T, r]),
          (0, a.jsx)(a.Fragment, {
            children: (0, a.jsx)("div", {
              "aria-label": i
                ? et.Z.Messages.NEW_FORUM_POST
                : et.Z.Messages.SEARCH,
              className: l()(en.container, { [en.collapsed]: !u }),
              onClick: !u && i ? S : void 0,
              children: (0, a.jsxs)("form", {
                onMouseDown: f,
                onFocus: f,
                onSubmit: (e) => {
                  if ((e.preventDefault(), !!i)) j();
                },
                children: [
                  (0, a.jsxs)("div", {
                    className: en.formContainer,
                    children: [
                      (0, a.jsx)(er, {
                        parentChannel: t,
                        isSearchLoading: n,
                        inputRef: o,
                      }),
                      (0, a.jsxs)("div", {
                        className: m ? en.previewForm : en.form,
                        children: [
                          (0, a.jsx)(el, {
                            editorRef: g,
                            parentChannel: t,
                            isSearchLoading: n,
                            inputRef: o,
                            canCreatePost: i,
                          }),
                          u &&
                            (0, a.jsx)(ec, {
                              editorRef: g,
                              setEditorRef: x,
                              parentChannel: t,
                              submit: j,
                              disabled: !i,
                            }),
                          m && (0, a.jsx)(ed, {}),
                        ],
                      }),
                      I &&
                        (v
                          ? (0, a.jsx)(N._, { parentChannel: t })
                          : (0, a.jsx)(q.Z, { channelId: t.id })),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: en.form,
                    children: [
                      I && v && (0, a.jsx)(E.Z, { parentChannel: t }),
                      u &&
                        (0, a.jsx)(em, {
                          className: en.horizontalPadding,
                          parentChannel: t,
                          canCreatePost: i,
                        }),
                    ],
                  }),
                ],
              }),
            }),
          })
        );
      }
      let er = s.memo(function (e) {
          let { parentChannel: t, isSearchLoading: n, inputRef: r } = e,
            {
              formOpen: l,
              name: i,
              textAreaState: o,
              hasClickedForm: d,
              submitting: u,
            } = (0, K.xH)((e) => {
              let {
                formOpen: t,
                nameError: n,
                name: a,
                previewing: s,
                textAreaState: r,
                hasClickedForm: l,
                submitting: i,
              } = e;
              return {
                formOpen: t,
                nameError: n,
                name: a,
                textAreaState: r,
                previewing: s,
                hasClickedForm: l,
                submitting: i,
              };
            }, c.Z),
            m = (0, K.AF)(),
            h = (0, z.ql)(t),
            C = s.useCallback(() => {
              var e;
              m.getState().resetFormState(),
                g.Z.clearDraft(t.id, L.d.ThreadSettings),
                g.Z.clearDraft(t.id, L.d.FirstThreadMessage),
                x.Z.clearAll(t.id, L.d.FirstThreadMessage),
                m.getState().setFormOpen(!1),
                m.getState().setBodyFocused(!1),
                m.getState().setTitleFocused(!1),
                m.getState().setHasClickedForm(!1),
                m.getState().setPreviewing(!1),
                null === (e = r.current) || void 0 === e || e.blur(),
                (0, V.Oq)({ guildId: t.guild_id, channelId: t.id });
            }, [m, t.id, t.guild_id, r]),
            f = s.useMemo(() => {
              if (n && !l) return (0, a.jsx)(ex, {});
              if (
                !n &&
                !l &&
                (0 === o.textValue.trim().length || o.textValue.trim() === h)
              )
                return (0, a.jsx)(_.MagnifyingGlassIcon, {
                  size: "md",
                  color: "currentColor",
                  className: en.searchIcon,
                });
              if (
                !l &&
                (i.trim().length > 0 ||
                  (o.textValue.trim().length > 0 && o.textValue.trim() !== h) ||
                  y.Z.getUploads(t.id, L.d.FirstThreadMessage).length > 0) &&
                d
              )
                return (0, a.jsx)(_.PencilIcon, {
                  size: "md",
                  color: "currentColor",
                  className: en.pencilIcon,
                });
              else
                return u
                  ? (0, a.jsx)(_.CircleXIcon, {
                      size: "md",
                      color: "currentColor",
                      className: en.closeIconDisabled,
                    })
                  : (0, a.jsx)(_.Tooltip, {
                      text: et.Z.Messages.FORUM_CLEAR_ALL,
                      children: (e) =>
                        (0, a.jsx)(_.Clickable, {
                          ...e,
                          onClick: C,
                          children: (0, a.jsx)(_.CircleXIcon, {
                            size: "md",
                            color: "currentColor",
                            className: en.closeIcon,
                          }),
                        }),
                    });
            }, [n, l, d, i, o.textValue, C, t.id, h, u]);
          return (0, a.jsx)("div", {
            className: en.prefixElement,
            children: f,
          });
        }),
        el = s.memo(function (e) {
          let {
              parentChannel: t,
              inputRef: n,
              canCreatePost: r,
              editorRef: l,
            } = e,
            {
              formOpen: i,
              nameError: d,
              name: u,
              textAreaState: m,
              previewing: g,
            } = (0, K.xH)((e) => {
              let {
                formOpen: t,
                nameError: n,
                name: a,
                previewing: s,
                textAreaState: r,
                hasClickedForm: l,
                submitting: i,
              } = e;
              return {
                formOpen: t,
                nameError: n,
                name: a,
                textAreaState: r,
                previewing: s,
                hasClickedForm: l,
                submitting: i,
              };
            }, c.Z),
            x = (0, K.AF)(),
            C = null != t.topic && 0 !== t.topic.length,
            f = G.Z.hasSeen(t.id),
            p = (0, z.ql)(t),
            T = (0, h.e7)([D.default], () => D.default.getCurrentUser());
          o()(null != T, "current user cannot be null");
          (0, F.yp)({
            event: $.CkL.FOCUS_COMPOSER_TITLE,
            handler: () => {
              var e;
              let t =
                n.current instanceof _.TextAreaAutosize
                  ? null === (e = n.current) || void 0 === e
                    ? void 0
                    : e._textArea
                  : n.current;
              null == t || t.focus(),
                x.getState().setTitleFocused(!0),
                x.getState().setFormOpen(!0),
                x.getState().setHasClickedForm(!0);
            },
          });
          let I = s.useCallback(
              (e) => {
                let n = e.clipboardData.files[0];
                null != n &&
                  n.type.startsWith("image/") &&
                  (e.preventDefault(),
                  (0, k.d)([n], t, L.d.FirstThreadMessage),
                  x.getState().setFormOpenFromUserAction());
              },
              [t, x],
            ),
            E = (0, H.Op)(d, { content: u });
          return (0, a.jsxs)("div", {
            className: en.titleContainer,
            onPaste: I,
            children: [
              i && g
                ? (0, a.jsx)(_.Heading, {
                    variant: "heading-md/semibold",
                    className: en.title,
                    children: u,
                  })
                : (0, a.jsx)(_.TextArea, {
                    value: u,
                    placeholder: r
                      ? i ||
                        (m.textValue.length > 0 && m.textValue.trim() !== p)
                        ? et.Z.Messages.FORUM_POST_TITLE_PLACEHOLDER_FOCUSED
                        : et.Z.Messages.FORUM_POST_TITLE_PLACEHOLDER_SEARCH
                      : et.Z.Messages.SEARCH,
                    flex: !0,
                    autosize: i,
                    rows: 1,
                    showCharacterCount: !1,
                    showRemainingCharacterCount: !1,
                    maxLength: $.HN8,
                    onChange: (e) => {
                      let n = (0, j.Z)(e, !1);
                      x.getState().setName(n);
                      let a = 0 === n.trim().length,
                        s = 0 === m.textValue.trim().length,
                        r = m.textValue.trim() === p;
                      a && (s || r) && x.getState().setHasClickedForm(!1),
                        !i && B.Z.updateForumSearchQuery(t.id, n);
                    },
                    onFocus: () => {
                      x.getState().setTitleFocused(!0),
                        x.getState().setBodyFocused(!1);
                    },
                    onBlur: () => {
                      x.getState().setTitleFocused(!1);
                      let e = (0, j.Z)(u, !0);
                      e !== u &&
                        (x.getState().setName(e),
                        !i && B.Z.updateForumSearchQuery(t.id, e));
                    },
                    onKeyDown: (e) => {
                      var a, s;
                      "Enter" === e.key &&
                        (e.preventDefault(),
                        e.stopPropagation(),
                        i && u.length > 0
                          ? null == l || l.focus()
                          : r &&
                            e.shiftKey &&
                            ((0, V.nH)({
                              guildId: t.guild_id,
                              channelId: t.id,
                            }),
                            C && !f && x.getState().setGuidelinesOpen(!0),
                            x.getState().setFormOpenFromUserAction(),
                            u.trim().length > 0 &&
                              (x.getState().setBodyFocused(!0),
                              null == l || l.focus())));
                      let o =
                        n.current instanceof _.TextAreaAutosize
                          ? null === (a = n.current) || void 0 === a
                            ? void 0
                            : a._textArea
                          : n.current;
                      if ("Home" === e.key || "End" === e.key) {
                        if (null == o) return;
                        if (
                          (e.preventDefault(),
                          e.stopPropagation(),
                          "Home" === e.key)
                        )
                          o.setSelectionRange(0, 0);
                        else {
                          let e = u.length;
                          o.setSelectionRange(e, e);
                        }
                      }
                      "Escape" === e.key &&
                        !x.getState().submitting &&
                        (null === (s = n.current) || void 0 === s || s.blur(),
                        x.getState().setFormOpen(!1),
                        x.getState().setTitleFocused(!1),
                        x.getState().setBodyFocused(!1),
                        x.getState().setPreviewing(!1));
                    },
                    error: E,
                    className: en.title,
                    inputRef: n,
                  }),
              i
                ? null
                : (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)(ei, { parentChannel: t }),
                      (0, a.jsx)(eh, { parentChannel: t, canCreatePost: r }),
                    ],
                  }),
            ],
          });
        });
      function ei(e) {
        let { parentChannel: t } = e,
          { guidelinesOpen: n } = (0, K.xH)((e) => {
            let { guidelinesOpen: t } = e;
            return { guidelinesOpen: t };
          }),
          s = (0, K.AF)(),
          r = null != t.topic && 0 !== t.topic.length,
          i = () => {
            s.getState().setGuidelinesOpen(!n);
          };
        return r
          ? (0, a.jsx)(_.Tooltip, {
              text: et.Z.Messages.FORUM_POST_GUIDELINES_TITLE,
              children: (e) =>
                (0, a.jsx)(_.Clickable, {
                  ...e,
                  onClick: i,
                  className: l()(en.forumPostFormButton, {
                    [en.forumPostFormButtonActive]: n,
                  }),
                  children: (0, a.jsx)(_.BookCheckIcon, {
                    size: "md",
                    color: "currentColor",
                    ...e,
                  }),
                }),
            })
          : null;
      }
      let eo = s.memo(function (e) {
          let { parentChannel: t, textValue: n } = e,
            s = new Z.ZP({ channelId: t.id, content: n }),
            { content: r } = (0, v.Z)(s, {
              hideSimpleEmbedContent: !0,
              isInteracting: !1,
              formatInline: !1,
              allowList: !0,
              allowHeading: !0,
              previewLinkTarget: !0,
            }),
            i = (0, S.Z)({ message: s, channel: t }, r, !1);
          return (0, a.jsx)("div", {
            className: l()(en.channelTextAreaInner, en.previewTextArea),
            children: i,
          });
        }),
        ec = s.memo(function (e) {
          let {
              parentChannel: t,
              submit: n,
              disabled: r = !1,
              editorRef: i,
              setEditorRef: d,
            } = e,
            u = (0, h.e7)([D.default], () => D.default.getCurrentUser());
          o()(null != u, "current user cannot be null");
          let {
              messageError: m,
              previewing: g,
              textAreaState: x,
              bodyFocused: C,
              formOpen: f,
            } = (0, K.xH)((e) => {
              let {
                messageError: t,
                textAreaState: n,
                previewing: a,
                bodyFocused: s,
                formOpen: r,
              } = e;
              return {
                messageError: t,
                textAreaState: n,
                previewing: a,
                bodyFocused: s,
                formOpen: r,
              };
            }, c.Z),
            T = (0, K.AF)();
          s.useEffect(
            () => () => (0, V.Vn)({ guildId: t.guild_id, channelId: t.id }),
            [t.guild_id, t.id],
          );
          let E = s.useCallback(() => {
              T.getState().setBodyFocused(!0);
            }, [T]),
            N = s.useCallback(() => {
              T.getState().setBodyFocused(!1);
            }, [T]),
            b = s.useCallback(
              (e, t, n) => {
                let { setTextAreaState: a } = T.getState();
                a({ textValue: t, richValue: n });
              },
              [T],
            ),
            v = s.useCallback(
              (e) => {
                let { value: t, uploads: a, stickers: s } = e;
                return n(t, s, a);
              },
              [n],
            );
          (0, F.yp)({ event: $.CkL.TEXTAREA_FOCUS, handler: E }),
            (0, F.yp)({ event: $.CkL.TEXTAREA_BLUR, handler: N });
          let S = (0, H.Op)(m, { content: x.textValue });
          return (0, a.jsx)("div", {
            className: en.bodyContainer,
            children: (0, a.jsxs)("div", {
              className: en.contentContainer,
              children: [
                g
                  ? (0, a.jsx)(eo, { parentChannel: t, textValue: x.textValue })
                  : (0, a.jsx)("div", {
                      onClick: E,
                      children: (0, a.jsx)(p.Z, {
                        type: ea,
                        setEditorRef: d,
                        channel: t,
                        placeholder:
                          et.Z.Messages.FORUM_POST_MESSAGE_PLACEHOLDER,
                        textValue: x.textValue,
                        richValue: x.richValue,
                        focused: C,
                        className: en.channelTextArea,
                        innerClassName: l()(en.channelTextAreaInner, {
                          [en.channelTextAreaInnerError]: null != S,
                        }),
                        onChange: b,
                        onSubmit: v,
                        promptToUpload: k.d,
                        disabled: r,
                        onKeyDown: (e) => {
                          if (
                            (("ArrowUp" === e.key || "ArrowDown" === e.key) &&
                              e.stopPropagation(),
                            "Home" === e.key || "End" === e.key)
                          ) {
                            if (null == i) return;
                            e.preventDefault(), e.stopPropagation();
                            let t = i.getSlateEditor();
                            if (null == t) return;
                            "Home" === e.key
                              ? I.Q.resetSelectionToStart(t)
                              : I.Q.resetSelectionToEnd(t);
                          }
                          f &&
                            "Escape" === e.key &&
                            !T.getState().submitting &&
                            (null == i || i.blur(),
                            T.getState().setFormOpen(!1),
                            T.getState().setTitleFocused(!1),
                            T.getState().setBodyFocused(!1),
                            T.getState().setPreviewing(!1));
                        },
                        autoCompletePosition: "bottom",
                      }),
                    }),
                (0, a.jsx)(_.InputError, { error: S }),
              ],
            }),
          });
        });
      function ed() {
        return (0, a.jsx)("div", {
          className: en.previewModeIndicator,
          children: (0, a.jsx)(_.Text, {
            variant: "text-sm/normal",
            color: "interactive-normal",
            children: et.Z.Messages.PREVIEW_MODE,
          }),
        });
      }
      function eu() {
        let { previewing: e } = (0, K.xH)((e) => {
            let { previewing: t } = e;
            return { previewing: t };
          }),
          t = (0, K.AF)(),
          n = s.useCallback(() => {
            t.getState().setPreviewing(!e), (0, V.nE)();
          }, [e, t]);
        return (0, a.jsx)(_.Tooltip, {
          text: e ? et.Z.Messages.EXIT_PREVIEW : et.Z.Messages.PREVIEW,
          children: (t) =>
            (0, a.jsx)(_.Clickable, {
              ...t,
              onClick: n,
              className: l()(en.forumPostFormButton, {
                [en.forumPostFormButtonActive]: e,
              }),
              children: e
                ? (0, a.jsx)(_.EyeSlashIcon, {
                    size: "md",
                    color: "currentColor",
                    ...t,
                  })
                : (0, a.jsx)(_.EyeIcon, {
                    size: "md",
                    color: "currentColor",
                    ...t,
                  }),
            }),
        });
      }
      let em = s.memo(function (e) {
        let { parentChannel: t, canCreatePost: n, className: r } = e,
          {
            textAreaState: l,
            appliedTags: i,
            name: o,
          } = (0, K.xH)((e) => {
            let { textAreaState: t, appliedTags: n, name: a } = e;
            return { textAreaState: t, appliedTags: n, name: a };
          }),
          { rateLimitPerUser: c } = t,
          d = c > 0,
          u = (0, h.e7)([w.Z], () =>
            w.Z.getSlowmodeCooldownGuess(t.id, w.S.CreateThread),
          ),
          m = (0, h.e7)(
            [P.Z],
            () =>
              P.Z.can($.Plq.MANAGE_THREADS, t) ||
              P.Z.can($.Plq.MANAGE_CHANNELS, t),
          ),
          g =
            t.hasFlag(ee.zZ.REQUIRE_TAG) &&
            0 === i.size &&
            o.length > 0 &&
            l.textValue.length > 0,
          x = (0, K.AF)(),
          C = s.useCallback(() => {
            x.getState().setBodyFocused(!1);
          }, [x]),
          p = s.useMemo(
            () => "" !== o.trim() && "" !== l.textValue.trim(),
            [o, l.textValue],
          );
        return (
          s.useEffect(() => {
            !p && x.getState().setPreviewing(!1);
          }, [p, x]),
          (0, a.jsxs)("div", {
            className: r,
            children: [
              (0, a.jsx)(eg, { parentChannel: t }),
              (0, a.jsx)("div", { className: en.tagsDivider }),
              (0, a.jsxs)("div", {
                className: en.controlsContainer,
                children: [
                  (0, a.jsxs)("div", {
                    className: en.controls,
                    children: [
                      (0, a.jsxs)("div", {
                        className: en.wrappedControls,
                        children: [
                          g &&
                            (0, a.jsx)(_.Text, {
                              variant: "text-sm/normal",
                              color: "text-danger",
                              children:
                                et.Z.Messages.FORUM_POST_TAG_REQUIRED_ERROR,
                            }),
                          (0, a.jsx)(T.Z, {
                            type: ea,
                            textValue: l.textValue,
                            className: en.characterCount,
                          }),
                          d &&
                            (0, a.jsx)(X.Z, {
                              rateLimitPerUser: c,
                              slowmodeCooldownGuess: u,
                              isBypassSlowmode: m,
                              leadingIcon: !0,
                            }),
                        ],
                      }),
                      (0, a.jsx)(ei, { parentChannel: t }),
                      p && (0, a.jsx)(eu, {}),
                      (0, a.jsx)(eh, {
                        parentChannel: t,
                        disableIfInvalid: !0,
                        canCreatePost: n,
                        disabled: d && !m && u > 0,
                      }),
                    ],
                  }),
                  (0, a.jsx)(
                    f.Z,
                    { type: ea, className: en.expressionPicker, onClick: C },
                    "expression",
                  ),
                ],
              }),
            ],
          })
        );
      });
      function eh(e) {
        let {
            parentChannel: t,
            canCreatePost: n,
            disabled: s,
            disableIfInvalid: r = !1,
          } = e,
          {
            submitting: l,
            textAreaState: i,
            name: o,
            appliedTags: c,
            formOpen: d,
          } = (0, K.xH)((e) => {
            let {
              submitting: t,
              textAreaState: n,
              name: a,
              appliedTags: s,
              formOpen: r,
            } = e;
            return {
              submitting: t,
              textAreaState: n,
              name: a,
              appliedTags: s,
              formOpen: r,
            };
          }),
          u =
            t.hasFlag(ee.zZ.REQUIRE_TAG) &&
            0 === c.size &&
            o.length > 0 &&
            i.textValue.length > 0,
          m = (0, h.Wu)([y.Z], () =>
            y.Z.getUploads(t.id, L.d.FirstThreadMessage),
          ),
          g = i.textValue.trim().length > 0 || m.length > 0,
          x = !u && g && o.trim().length > 0;
        if (__OVERLAY__) return null;
        let C = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return (0, a.jsxs)(_.Button, {
            ...e,
            size: _.Button.Sizes.SMALL,
            className: en.submitButton,
            innerClassName: en.submitButtonInner,
            type: "submit",
            submitting: l,
            disabled: (r && !x) || s || !n,
            children: [
              (0, a.jsx)(_.ChatIcon, {
                size: "xs",
                color: "currentColor",
                className: en.submitIcon,
              }),
              (0, a.jsx)(_.Text, {
                variant: "text-md/semibold",
                color: "none",
                children: d
                  ? et.Z.Messages.SUBMIT_POST
                  : et.Z.Messages.NEW_FORUM_POST_NEW,
              }),
            ],
          });
        };
        return n
          ? C()
          : (0, a.jsx)(_.Tooltip, {
              text: et.Z.Messages.FORUM_NO_POST_PERMISSION_HELP,
              children: (e) => C(e),
            });
      }
      function e_() {
        return Promise.resolve();
      }
      function eg(e) {
        let { parentChannel: t } = e,
          {
            appliedTags: n,
            toggleAppliedTag: r,
            setPopoutOpen: i,
          } = (0, K.xH)((e) => {
            let { appliedTags: t, toggleAppliedTag: n, setPopoutOpen: a } = e;
            return { appliedTags: t, toggleAppliedTag: n, setPopoutOpen: a };
          }, c.Z),
          o = n.size >= Q.Cn,
          h = (0, d.ZP)({
            id: "".concat(t.id, "-post-form-tags-navigator"),
            isEnabled: !0,
            wrap: !0,
            scrollToStart: e_,
            scrollToEnd: e_,
            orientation: m.hy.HORIZONTAL,
          }),
          { containerRef: g, containerWidth: x } = (0, J.Z)(),
          C = s.useRef(null),
          [f, p] = s.useState(!0),
          T = (0, z.Vm)(t),
          [I, E] = s.useState(0);
        return (s.useLayoutEffect(() => {
          var e;
          let t = C.current,
            n =
              null == t
                ? void 0
                : null === (e = t.children) || void 0 === e
                  ? void 0
                  : e[0],
            a = null == t || null == n || n.clientHeight > t.clientHeight;
          if (
            (a !== f && p(a),
            a && null != g.current && null != n && null != n.children)
          ) {
            let { left: e, top: t } = g.current.getBoundingClientRect(),
              a = 0;
            for (let s of n.children) {
              let { right: n, top: r, height: l } = s.getBoundingClientRect();
              if (r - t > l) break;
              n - e > a && (a = n - e);
            }
            E(a);
          }
        }, [T, f, g, x]),
        0 === T.length)
          ? null
          : (0, a.jsx)(a.Fragment, {
              children: (0, a.jsxs)("div", {
                className: en.tagsContainer,
                ref: g,
                children: [
                  (0, a.jsx)(_.TagIcon, {
                    size: "xs",
                    color: "currentColor",
                    className: en.tagsIcon,
                  }),
                  (0, a.jsx)("div", {
                    className: en.tagList,
                    ref: C,
                    children: (0, a.jsx)(u.bG, {
                      navigator: h,
                      children: (0, a.jsx)(u.SJ, {
                        children: (e) => {
                          let { ref: t, ...s } = e;
                          return (0, a.jsx)("div", {
                            className: en.tagListInner,
                            ref: t,
                            ...s,
                            children: T.map((e) =>
                              (0, a.jsx)(
                                Y.Z,
                                {
                                  ariaLabel:
                                    et.Z.Messages.FORUM_TAG_A11Y_ADD_TAG.format(
                                      { tagName: e.name },
                                    ),
                                  tag: e,
                                  onClick:
                                    o && !n.has(e.id) ? void 0 : () => r(e.id),
                                  disabled: !n.has(e.id) && n.size >= Q.Cn,
                                  selected: n.has(e.id),
                                  size: Y.Z.Sizes.SMALL,
                                },
                                e.id,
                              ),
                            ),
                          });
                        },
                      }),
                    }),
                  }),
                  f &&
                    (0, a.jsx)(_.Popout, {
                      onRequestOpen: () => i(!0),
                      onRequestClose: () => i(!1),
                      renderPopout: (e) => {
                        let { closePopout: s } = e;
                        return (0, a.jsx)(W.Z, {
                          parentChannel: t,
                          appliedTags: n,
                          maxTagsApplied: o,
                          onSelectTag: r,
                          onClose: s,
                        });
                      },
                      position: "bottom",
                      align: "center",
                      children: (e) =>
                        (0, a.jsxs)(_.Button, {
                          ...e,
                          size: _.Button.Sizes.TINY,
                          className: en.tagsButton,
                          innerClassName: en.tagsButtonInner,
                          style: { left: I },
                          look: _.Button.Looks.LINK,
                          "aria-label": et.Z.Messages.ADD_TAG_FORUM_POST,
                          children: [
                            et.Z.Messages.FORUM_TAG_SEE_MORE_A11Y_LABEL,
                            (0, a.jsx)(_.ChevronSmallDownIcon, {
                              size: "custom",
                              color: "currentColor",
                              width: 16,
                            }),
                          ],
                        }),
                    }),
                  (0, a.jsxs)(_.Button, {
                    size: _.Button.Sizes.TINY,
                    className: l()(en.tagsButton, en.tagsButtonPlaceholder),
                    innerClassName: en.tagsButtonInner,
                    look: _.Button.Looks.LINK,
                    "aria-label": et.Z.Messages.ADD_TAG_FORUM_POST,
                    children: [
                      et.Z.Messages.FORUM_TAG_SEE_MORE_A11Y_LABEL,
                      (0, a.jsx)(_.ChevronSmallDownIcon, {
                        size: "custom",
                        color: "currentColor",
                        width: 16,
                      }),
                    ],
                  }),
                ],
              }),
            });
      }
      function ex(e) {
        let { style: t, className: n } = e;
        return (0, a.jsx)("div", {
          className: n,
          style: t,
          children: (0, a.jsx)("div", { className: en.loader }),
        });
      }
    },
    219664: function (e, t, n) {
      "use strict";
      n(47120);
      var a = n(735250),
        s = n(470079),
        r = n(120356),
        l = n.n(r),
        i = n(683860),
        o = n(442837),
        c = n(692547),
        d = n(481060),
        u = n(738619),
        m = n(841762),
        h = n(25610),
        _ = n(406432),
        g = n(169525),
        x = n(255269),
        C = n(930282),
        f = n(524444),
        p = n(695346),
        T = n(433355),
        I = n(592125),
        E = n(496675),
        N = n(456269),
        b = n(109590),
        v = n(368844),
        S = n(73315),
        M = n(404616),
        A = n(510060),
        j = n(983200),
        R = n(196255),
        O = n(858543),
        Z = n(482062),
        L = n(883728),
        P = n(710352),
        w = n(981631),
        y = n(689938),
        D = n(127403);
      function F(e) {
        let {
            id: t,
            channel: n,
            goToThread: r,
            overrideMedia: u,
            className: m,
            coords: h,
            gridCoords: _,
            gridSectionBoundaries: g,
            observePostVisibilityAnalytics: C,
          } = e,
          f = (0, o.e7)([I.Z], () => I.Z.getChannel(n.parent_id)),
          S = n.id,
          j = s.useRef(null),
          F = (0, o.e7)(
            [T.ZP],
            () => T.ZP.getCurrentSidebarChannelId(n.parent_id) === n.id,
          ),
          { firstMessage: k, loaded: H } = (0, b.cl)(n),
          { firstMedia: G } = (0, N.mX)({
            firstMessage: k,
            formatInline: !1,
            noStyleAndInteraction: !1,
          }),
          { messageCountText: V } = (0, N.nP)(n),
          { isNew: W, hasUnreads: q } = (0, N.J$)(n),
          K = s.useRef(null),
          { handleLeftClick: Y, handleRightClick: X } = (0, L.Z)({
            facepileRef: K,
            goToThread: r,
            channel: n,
          });
        s.useEffect(() => {
          null == C || C(j.current, S);
        }, [C, S]);
        let J = (0, o.e7)([E.Z], () => E.Z.can(w.Plq.MANAGE_MESSAGES, n)),
          Q = p.QK.useSetting(),
          $ = p.cC.useSetting(),
          ee = (0, x.Z)($, J),
          et = (0, v.aU)(k, f, !1),
          [en, ea] = (0, A.rI)(h.width - 2 * A.LT),
          es = (0, N.xw)(n, i.z.CREATION_DATE, P.R6.POSTED_DURATION_AGO),
          er = (0, M.NN)(n),
          el = (null == k ? void 0 : k.blocked) || null == (null != u ? u : G),
          { onFocus: ei, ...eo } = (0, Z.nX)({
            id: t,
            row: _.row,
            column: _.column,
            section: _.section,
            boundaries: g,
          }),
          ec = n.isMediaPost();
        return (0, a.jsxs)("li", {
          ref: j,
          onClick: Y,
          onFocus: ei,
          onContextMenu: X,
          className: l()(D.container, m, { [D.isOpen]: F }),
          style: { ...h },
          children: [
            (0, a.jsx)(d.Clickable, {
              onClick: Y,
              focusProps: { ringTarget: j },
              onContextMenu: X,
              "aria-label": y.Z.Messages.FORUM_POST_ARIA_LABEL.format({
                title: n.name,
                count: V,
              }),
              className: D.focusTarget,
              ...eo,
            }),
            (0, a.jsxs)("div", {
              className: D.header,
              children: [
                (0, a.jsxs)("div", {
                  className: D.authorRow,
                  children: [
                    (0, a.jsxs)("div", {
                      className: D.rowGroup,
                      children: [
                        (0, a.jsx)(R.Z, { channel: n, message: k }),
                        (0, a.jsx)(d.Text, {
                          variant: "text-xs/normal",
                          color: "header-secondary",
                          className: D.postCreationTimestamp,
                          children: es,
                        }),
                      ],
                    }),
                    W
                      ? (0, a.jsx)(d.TextBadge, {
                          className: l()(D.newBadge),
                          color: c.Z.unsafe_rawColors.BRAND_260.css,
                          text: y.Z.Messages.NEW,
                        })
                      : null,
                  ],
                }),
                (0, a.jsx)(d.HeadingLevel, {
                  children: (0, a.jsx)(d.Heading, {
                    variant: "heading-md/extrabold",
                    className: D.title,
                    color: q ? "header-primary" : "text-muted",
                    style: { width: "".concat(h.width - 2 * A.I8, "px") },
                    children: er,
                  }),
                }),
              ],
            }),
            (0, a.jsx)("div", {
              className: D.postBody,
              children: (0, a.jsx)(d.FocusBlock, {
                children: el
                  ? (0, a.jsx)(z, {
                      channel: n,
                      firstMessage: k,
                      isFirstMessageLoaded: H,
                      containerWidth: h.width,
                      hasUnreads: q,
                    })
                  : (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)(B, {
                          mediaAttachments: et,
                          globalSpoilerRenderSetting: ee,
                          containerWidth: en,
                          containerHeight: ec ? (9 / 16) * en : ea,
                          canAutoPlay: Q,
                          shouldMaintainAspectRatio: ec,
                        }),
                        (0, a.jsx)("div", {
                          className: D.tagsRow,
                          children: (0, a.jsx)(O.ZP, {
                            channel: n,
                            tagsClassName: D.tagPill,
                          }),
                        }),
                      ],
                    }),
              }),
            }),
            (0, a.jsx)("div", {
              className: D.footer,
              children: (0, a.jsx)(d.FocusBlock, {
                children: (0, a.jsx)(U, {
                  channel: n,
                  firstMessage: k,
                  facepileRef: K,
                }),
              }),
            }),
          ],
        });
      }
      function U(e) {
        let { channel: t, facepileRef: n, firstMessage: s } = e,
          r = (0, N.Q)(t),
          l =
            (null == s ? void 0 : s.reactions) != null &&
            s.reactions.length > 0;
        return (0, a.jsxs)("div", {
          className: D.forumPostControls,
          children: [
            (0, a.jsxs)("div", {
              className: D.controlsGroup,
              children: [
                (0, a.jsx)("div", {
                  className: D.messageCountContainer,
                  children: (0, a.jsx)(M.m9, {
                    channel: t,
                    iconSize: 16,
                    showReadState: !0,
                  }),
                }),
                r.length > 0
                  ? (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)("span", {
                          className: D.bullet,
                          children: "•",
                        }),
                        (0, a.jsxs)("div", {
                          className: D.typing,
                          children: [
                            (0, a.jsx)(M.og, {
                              channel: t,
                              userIds: r,
                              facepileRef: n,
                            }),
                            (0, a.jsx)("div", {
                              className: D.dots,
                              children: (0, a.jsx)(d.Dots, {
                                themed: !0,
                                dotRadius: 2,
                              }),
                            }),
                            (0, a.jsx)(u.Z, {
                              channel: t,
                              className: D.typingUsers,
                              renderDots: !1,
                            }),
                          ],
                        }),
                      ],
                    })
                  : null,
              ],
            }),
            (0, a.jsxs)("div", {
              className: D.controlsGroup,
              children: [
                l || null == s
                  ? null
                  : (0, a.jsx)(M.kZ, { firstMessage: s, channel: t }),
                null == s
                  ? null
                  : (0, a.jsx)(M.au, { firstMessage: s, channel: t }),
              ],
            }),
          ],
        });
      }
      t.Z = s.memo(function (e) {
        let {
            id: t,
            threadId: n,
            goToThread: s,
            overrideMedia: r,
            className: l,
            coords: i,
            gridCoords: c,
            gridSectionBoundaries: d,
            observePostVisibilityAnalytics: u,
          } = e,
          m = (0, o.e7)([I.Z], () => I.Z.getChannel(n));
        return null == m
          ? null
          : (0, a.jsx)(F, {
              id: t,
              channel: m,
              goToThread: s,
              overrideMedia: r,
              className: l,
              coords: i,
              gridCoords: c,
              observePostVisibilityAnalytics: u,
              gridSectionBoundaries: d,
            });
      });
      let k = (e) => e.preventDefault(),
        H = s.memo(function (e) {
          return (0, a.jsx)(a.Fragment, { children: (0, f.Yi)(e) });
        }),
        B = s.memo(function (e) {
          let {
              mediaAttachments: t,
              globalSpoilerRenderSetting: n,
              containerWidth: r,
              containerHeight: i,
              canAutoPlay: o,
              shouldMaintainAspectRatio: c = !1,
            } = e,
            { containsVideo: u, containsGif: x } = s.useMemo(
              () => (0, v.cp)(t),
              [t],
            ),
            C = s.useMemo(() => t.slice(j.$x, j.GV), [t]),
            f = (0, j.tu)({
              numAttachments: C.length,
              containerWidth: r,
              containerHeight: i,
            }),
            p = (0, j.S$)({
              imageContainerStyles: f,
              containerWidth: r,
              containerHeight: i,
            }),
            T = (0, h.m)(),
            I = s.useMemo(
              () =>
                C.map((e, t) => {
                  var s;
                  let [r, i] = (0, g.As)(e, !n, T),
                    h = (0, g.MC)(i),
                    C = {
                      ...p[t],
                      src: e.src,
                      width: e.width,
                      height: e.height,
                      alt: null != e.alt && r ? h : e.alt,
                      onClick: k,
                      shouldRenderAccessory: !x && !u,
                      renderForwardComponent: w.VqG,
                    },
                    I = (0, _.d$)(e.src)
                      ? "".concat(e.src, "?format=png")
                      : e.src,
                    E = o && !r ? e.src : I;
                  return (0, a.jsxs)(
                    "div",
                    {
                      className: D.bodyMediaFrame,
                      style: f[t],
                      children: [
                        c
                          ? (0, a.jsx)(m.Z, {
                              ...C,
                              src: E,
                              backgroundSrc: I,
                              aspectRatio: C.maxWidth / C.maxHeight,
                              alt:
                                null !== (s = C.alt) && void 0 !== s ? s : "",
                              className: l()(D.mediaPostContainer, {
                                [D.obscured]: r,
                              }),
                              imageChildClassName: D.mediaPostThumbnail,
                            })
                          : e.src.startsWith("data:")
                            ? (0, a.jsx)(d.Image, {
                                ...C,
                                className: D.mediaContainer,
                                imageClassName: l()(D.thumbnailOverride, {
                                  [D.obscured]: r,
                                }),
                              })
                            : (0, a.jsx)(H, {
                                ...C,
                                autoPlay: o && !r,
                                containerClassName: D.mosaicMediaContainer,
                                imageClassName: l()(D.imageCover, {
                                  [D.obscured]: r,
                                }),
                                responsive: !0,
                              }),
                        r &&
                          (0, a.jsx)("div", {
                            className: D.obscuredTagContainer,
                            children: (0, a.jsx)(S.Z, {
                              obscureReason: i,
                              iconClassname: D.obscuredTag,
                            }),
                          }),
                      ],
                    },
                    e.src,
                  );
                }),
              [o, x, u, n, f, p, C, c, T],
            );
          return (0, a.jsxs)("div", {
            className: D.bodyMedia,
            style: { width: r, height: i },
            children: [
              (0, a.jsx)(a.Fragment, { children: I }),
              (x || u) &&
                (0, a.jsxs)("div", {
                  className: D.mediaIconsRow,
                  children: [
                    u &&
                      (0, a.jsx)(d.PlayIcon, {
                        color: "currentColor",
                        size: "custom",
                        width: 22,
                        height: 22,
                        className: D.mediaIcon,
                      }),
                    x &&
                      (0, a.jsx)(d.GifIcon, {
                        size: "custom",
                        width: 29,
                        height: 29,
                        color: "currentColor",
                        className: D.mediaIcon,
                      }),
                  ],
                }),
              t.length > j.Vn &&
                (0, a.jsx)(G, {
                  text: (t.length - j.Vn).toString(),
                  icon: d.ImageIcon,
                  pillClassName: D.moreImagesPill,
                  iconClassName: D.moreImagesPillIcon,
                  textClassName: D.moreImagesPillText,
                }),
            ],
          });
        });
      function G(e) {
        let {
          text: t,
          icon: n,
          pillClassName: s,
          iconClassName: r,
          textClassName: l,
        } = e;
        return (0, a.jsxs)("div", {
          className: s,
          children: [
            (0, a.jsx)(n, { className: r, color: "currentColor" }),
            (0, a.jsxs)(d.Text, {
              variant: "text-xs/medium",
              className: l,
              children: ["+", t],
            }),
          ],
        });
      }
      function z(e) {
        let {
            channel: t,
            firstMessage: n,
            isFirstMessageLoaded: r,
            containerWidth: i,
            hasUnreads: o,
          } = e,
          [c, u] = (0, A.rI)(i - 2 * A.LT),
          { content: m } = (0, N.mX)({
            firstMessage: n,
            formatInline: !1,
            noStyleAndInteraction: !0,
          }),
          { shouldRenderTagsRow: h } = (0, O.DM)({ channel: t, isNew: !1 }),
          _ = s.useMemo(() => ({ width: c, height: u }), [c, u]),
          g = o ? D.textContentUnread : D.textContentRead;
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsxs)("div", {
            className: D.contentPreview,
            style: _,
            children: [
              (0, a.jsxs)("div", {
                className: D.content,
                children: [
                  r &&
                    null == n &&
                    (0, a.jsx)(d.Text, {
                      variant: "text-sm/normal",
                      color: o ? "header-secondary" : "text-muted",
                      children: y.Z.Messages.REPLY_QUOTE_MESSAGE_DELETED,
                    }),
                  r &&
                    null != n &&
                    (0, a.jsx)(C.ZP, { message: n, content: m, className: g }),
                ],
              }),
              (0, a.jsx)("div", {
                className: l()(D.textContentFooter, { [D.noTags]: !h }),
                children: h
                  ? (0, a.jsx)(O.ZP, {
                      channel: t,
                      tagsClassName: D.tagPill,
                      className: D.__invalid_row,
                    })
                  : null,
              }),
            ],
          }),
        });
      }
    },
    895932: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var a = n(735250);
      n(470079);
      var s = n(313361),
        r = n(683860),
        l = n(481060),
        i = n(109434),
        o = n(228392),
        c = n(689938),
        d = n(704649);
      function u(e) {
        let { channel: t, closePopout: n } = e,
          { sortOrder: u, layoutType: m } = (0, i.H)(t.id),
          h = (0, i.v)(),
          _ = t.isMediaChannel(),
          g = (e) => {
            (0, o.KR)({ guildId: t.guild_id, channelId: t.id, sortOrder: e }),
              h.getState().setSortOrder(t.id, e),
              n();
          },
          x = (e) => {
            (0, o.Do)({ guildId: t.guild_id, channelId: t.id, forumLayout: e }),
              h.getState().setLayoutType(t.id, e),
              n();
          };
        return (0, a.jsx)("div", {
          className: d.container,
          children: (0, a.jsxs)(l.Menu, {
            navId: "sort-and-view",
            "aria-label": _
              ? c.Z.Messages.MEDIA_CHANNEL_SORT_A11Y_LABEL
              : c.Z.Messages.FORUM_SORT_AND_VIEW_AY11_LABEL,
            hideScroller: !0,
            onClose: n,
            onSelect: n,
            children: [
              (0, a.jsxs)(l.MenuGroup, {
                label: c.Z.Messages.FORUM_CHANNEL_SORT_BY,
                children: [
                  (0, a.jsx)(l.MenuRadioItem, {
                    id: "sort-by-recent-activity",
                    group: "sort-by",
                    label: c.Z.Messages.FORUM_CHANNEL_SORT_BY_RECENTLY_ACTIVE,
                    action: () => g(r.z.LATEST_ACTIVITY),
                    checked: u === r.z.LATEST_ACTIVITY,
                  }),
                  (0, a.jsx)(l.MenuRadioItem, {
                    id: "sort-by-date-posted",
                    group: "sort-by",
                    label: c.Z.Messages.FORUM_CHANNEL_SORT_BY_DATE_POSTED,
                    action: () => g(r.z.CREATION_DATE),
                    checked: u === r.z.CREATION_DATE,
                  }),
                ],
              }),
              !t.isMediaChannel() &&
                (0, a.jsxs)(l.MenuGroup, {
                  label: c.Z.Messages.FORUM_CHANNEL_VIEW_AS,
                  children: [
                    (0, a.jsx)(l.MenuRadioItem, {
                      id: "view-as-list",
                      group: "view-as",
                      label: c.Z.Messages.FORUM_CHANNEL_VIEW_AS_LIST,
                      action: () => x(s.X.LIST),
                      checked: m === s.X.LIST,
                    }),
                    (0, a.jsx)(l.MenuRadioItem, {
                      id: "view-as-grid",
                      group: "view-as",
                      label: c.Z.Messages.FORUM_CHANNEL_VIEW_AS_GRID,
                      action: () => x(s.X.GRID),
                      checked: m === s.X.GRID,
                    }),
                  ],
                }),
              (0, a.jsx)(l.MenuGroup, {
                children: (0, a.jsx)(l.MenuItem, {
                  id: "reset-all",
                  className: d.clearText,
                  label: (0, a.jsx)(l.Text, {
                    variant: "text-sm/medium",
                    color: "none",
                    children: c.Z.Messages.FORUM_CHANNEL_RESET_ALL,
                  }),
                  action: () => {
                    g(t.getDefaultSortOrder()), x(t.getDefaultLayout());
                  },
                }),
              }),
            ],
          }),
        });
      }
    },
    510060: function (e, t, n) {
      "use strict";
      n.d(t, {
        I8: function () {
          return i;
        },
        KW: function () {
          return m;
        },
        LT: function () {
          return u;
        },
        Me: function () {
          return o;
        },
        eU: function () {
          return c;
        },
        rI: function () {
          return d;
        },
      });
      var a = n(512722),
        s = n.n(a);
      function r(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      let l = 2 / 3,
        i = 12;
      class o {
        getWidth(e) {
          return this.getRenderOptions(e).columnWidth;
        }
        getRenderOptions(e) {
          if (e <= this.minWidth)
            return { columns: 1, columnWidth: this.minWidth };
          let t = e / this.maxWidth,
            n = Math.max(Math.floor(t + (e / this.minWidth - t) / 2), 1),
            a = this.gap * (n - 1);
          return { columns: n, columnWidth: (e - a) / n };
        }
        constructor({ minWidth: e, maxWidth: t, gap: n }) {
          r(this, "minWidth", void 0),
            r(this, "maxWidth", void 0),
            r(this, "gap", void 0),
            s()(e < t, "minWidth needs to be smaller than maxWidth"),
            (this.minWidth = e),
            (this.maxWidth = t),
            (this.gap = n);
        }
      }
      let c = { columns: 1, columnWidth: 450 },
        d = (e) => {
          let t = e - 2,
            n = Math.ceil(t * l);
          return [t, n];
        },
        u = 12,
        m = (e) => 60 + d(e - 2 * u)[1] + 24 + 3 * i;
    },
    983200: function (e, t, n) {
      "use strict";
      n.d(t, {
        $x: function () {
          return l;
        },
        GV: function () {
          return i;
        },
        S$: function () {
          return _;
        },
        Vn: function () {
          return o;
        },
        tu: function () {
          return m;
        },
      });
      var a = n(470079),
        s = n(31775),
        r = n.n(s);
      let l = 0,
        i = 4,
        o = 4,
        c = "absolute",
        d = (e, t, n, a) => {
          if (0 === n) return [];
          if (1 === n)
            return [{ width: e, height: t, top: 0, left: 0, position: c }];
          if (2 === n) {
            let n = Math.ceil((e - a) / 2);
            return [
              { top: 0, left: 0, position: c, width: n, height: t },
              { top: 0, left: n + a, position: c, width: n, height: t },
            ];
          }
          if (3 === n) {
            let n = Math.ceil((e - a) / 2),
              s = Math.ceil((t - a) / 2);
            return [
              { top: 0, left: 0, position: c, width: n, height: t },
              { top: 0, left: n + a, position: c, width: n, height: s },
              { top: s + a, left: n + a, position: c, width: n, height: s },
            ];
          } else {
            let n = Math.ceil((e - a) / 2),
              s = Math.ceil((t - a) / 2);
            return [
              { top: 0, left: 0, position: c, width: n, height: s },
              { top: s + a, left: 0, position: c, width: n, height: s },
              { top: 0, left: n + a, position: c, width: n, height: s },
              { top: s + a, left: n + a, position: c, width: n, height: s },
            ];
          }
        },
        u = new (r())({ max: 100 });
      function m(e) {
        let { numAttachments: t, containerWidth: n, containerHeight: s } = e;
        return a.useMemo(
          () =>
            (function (e) {
              var t, n, a;
              let {
                numAttachments: s,
                containerWidth: r,
                containerHeight: l,
              } = e;
              let i =
                  ((t = s),
                  (n = r),
                  (a = l),
                  "".concat(t, "-").concat(n, "-").concat(a)),
                o = u.get(i);
              if (null != o) return o;
              {
                let e = d(r, l, s, 4);
                return u.set(i, e), e;
              }
            })({ numAttachments: t, containerWidth: n, containerHeight: s }),
          [t, n, s],
        );
      }
      function h(e) {
        return e.map((t, n) => ({
          minWidth: 2 * e[n].width,
          minHeight: 2 * e[n].height,
          maxWidth: 2 * e[n].width,
          maxHeight: 2 * e[n].height,
        }));
      }
      function _(e) {
        let {
            imageContainerStyles: t,
            containerWidth: n,
            containerHeight: s,
          } = e,
          r = a.useRef(h(t)),
          l = a.useRef(n),
          i = a.useRef(s),
          o = n > l.current + 100,
          c = s > i.current + 100;
        return (o || c) && (r.current = h(t)), r.current;
      }
    },
    399894: function (e, t, n) {
      "use strict";
      var a = n(735250);
      n(470079);
      var s = n(120356),
        r = n.n(s),
        l = n(913527),
        i = n.n(l),
        o = n(481060),
        c = n(70956),
        d = n(689938),
        u = n(229361);
      t.Z = (e) => {
        let t,
          n,
          {
            rateLimitPerUser: s,
            slowmodeCooldownGuess: l,
            isBypassSlowmode: m,
            leadingIcon: h = !1,
          } = e;
        if (s >= c.Z.Seconds.HOUR) {
          let e = Math.floor(s / c.Z.Seconds.HOUR),
            t = Math.floor((s - e * c.Z.Seconds.HOUR) / c.Z.Seconds.MINUTE),
            a = s - e * c.Z.Seconds.HOUR - t * c.Z.Seconds.MINUTE;
          n = d.Z.Messages.FORUM_SLOWMODE_DESC_HOURS.format({
            hours: e,
            minutes: t,
            seconds: a,
          });
        } else if (s >= 60) {
          let e = Math.floor(s / 60);
          n = d.Z.Messages.FORUM_SLOWMODE_DESC_MINUTES.format({
            minutes: e,
            seconds: s - 60 * e,
          });
        } else n = d.Z.Messages.FORUM_SLOWMODE_DESC.format({ seconds: s });
        if (!m && l > 0) {
          let e = i().duration(l);
          if (l > c.Z.Millis.HOUR) {
            let n = "".concat(e.minutes()).padStart(2, "0"),
              a = "".concat(e.seconds()).padStart(2, "0");
            t = "".concat(e.hours(), ":").concat(n, ":").concat(a);
          } else {
            let n = "".concat(e.seconds()).padStart(2, "0");
            t = "".concat(e.minutes(), ":").concat(n);
          }
        } else
          t = m
            ? d.Z.Messages.CHANNEL_SLOWMODE_DESC_IMMUNE
            : d.Z.Messages.CHANNEL_SLOWMODE_DESC_SHORT;
        let _ = (0, a.jsx)(o.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: t,
          }),
          g = (0, a.jsx)(o.TimerIcon, {
            size: "xs",
            color: "currentColor",
            className: r()(u.slowModeIcon, { [u.leadingIcon]: h }),
          });
        return (0, a.jsx)(o.Tooltip, {
          text: n,
          children: (e) =>
            (0, a.jsx)("div", {
              className: u.cooldownWrapper,
              ...e,
              children: h
                ? (0, a.jsxs)(a.Fragment, { children: [g, _] })
                : (0, a.jsxs)(a.Fragment, { children: [_, g] }),
            }),
        });
      };
    },
    276357: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return f;
        },
      }),
        n(47120);
      var a = n(735250),
        s = n(470079),
        r = n(924826),
        l = n(91192),
        i = n(442837),
        o = n(481060),
        c = n(607070),
        d = n(109434),
        u = n(456269),
        m = n(228392),
        h = n(479099),
        _ = n(981631),
        g = n(689938),
        x = n(120160);
      function C() {
        return Promise.resolve();
      }
      function f(e) {
        let { channel: t, closePopout: n, setPopoutRef: f } = e,
          p = (0, u.Vm)(t),
          { tagFilter: T } = (0, d.H)(t.id),
          I = (0, d.v)(),
          E = (0, i.e7)([c.Z], () => c.Z.keyboardModeEnabled),
          N = s.useCallback(
            (e) => {
              (0, m.e7)({
                guildId: t.guild_id,
                channelId: t.id,
                tagId: e,
                filterTagIds: Array.from(T),
                added: !T.has(e),
                location: {
                  page: _.ZY5.GUILD_CHANNEL,
                  section: _.jXE.FORUM_CHANNEL_HEADER,
                  object: _.qAy.CHANNEL_TAG,
                },
              }),
                I.getState().toggleTagFilter(t.id, e);
            },
            [t, T, I],
          ),
          b = s.useCallback(() => {
            I.getState().setTagFilter(t.id, new Set()), !E && n();
          }, [I, t.id, E, n]),
          v = (0, r.ZP)({
            id: "".concat(t.id, "-all-tags-dropdown-navigator"),
            isEnabled: !0,
            wrap: !0,
            scrollToStart: C,
            scrollToEnd: C,
          }),
          S = s.useRef(null);
        return (
          s.useEffect(() => {
            requestAnimationFrame(() => {
              if (null != S.current) {
                let e = S.current.querySelector(".".concat(x.tag));
                null != e && e.focus();
              }
            });
          }, []),
          (0, a.jsxs)(o.Dialog, {
            ref: f,
            "aria-label": g.Z.Messages.FORUM_TAG_FILTER_HEADER,
            className: x.container,
            children: [
              (0, a.jsx)("div", {
                className: x.header,
                children: (0, a.jsxs)("div", {
                  className: x.headerLeft,
                  children: [
                    (0, a.jsx)(o.Heading, {
                      color: "interactive-normal",
                      variant: "text-xs/bold",
                      className: x.headerText,
                      children: g.Z.Messages.FORUM_TAG_POST_SELECT,
                    }),
                    (0, a.jsx)("div", {
                      className: x.countContainer,
                      children: (0, a.jsx)(o.Text, {
                        className: x.countText,
                        color: "none",
                        variant: "text-xs/medium",
                        children: T.size,
                      }),
                    }),
                  ],
                }),
              }),
              (0, a.jsx)(l.bG, {
                navigator: v,
                children: (0, a.jsx)(l.SJ, {
                  children: (e) => {
                    let { ref: t, ...n } = e;
                    return (0, a.jsx)("div", {
                      ref: (e) => {
                        (t.current = e), (S.current = e);
                      },
                      ...n,
                      className: x.tagContainer,
                      children: p.map((e) =>
                        (0, a.jsx)(
                          h.Z,
                          {
                            className: x.tag,
                            tag: e,
                            selected: T.has(e.id),
                            onClick: () => N(e.id),
                          },
                          e.id,
                        ),
                      ),
                    });
                  },
                }),
              }),
              (0, a.jsx)("div", { className: x.separator }),
              (0, a.jsx)(o.Button, {
                look: o.Button.Looks.LINK,
                size: o.Button.Sizes.MIN,
                color: o.Button.Colors.CUSTOM,
                className: x.clear,
                "aria-label": g.Z.Messages.FORUM_CLEAR_ALL,
                onClick: b,
                children: (0, a.jsx)(o.Text, {
                  variant: "text-sm/medium",
                  color: "text-link",
                  children: g.Z.Messages.FORUM_CLEAR_ALL,
                }),
              }),
            ],
          })
        );
      }
    },
    81490: function (e, t, n) {
      "use strict";
      n(47120);
      var a = n(470079),
        s = n(796075),
        r = n(481060);
      let l = "undefined" == typeof ResizeObserver ? s.d : ResizeObserver,
        i = new Map(),
        o = new l((e) => {
          e.forEach((e) => {
            var t;
            let { target: n } = e;
            null === (t = i.get(n)) || void 0 === t || t(e);
          });
        });
      t.Z = () => {
        let e = a.useRef(null),
          [t, n] = a.useState(400),
          s = a.useCallback(() => {
            null !== e.current && n(e.current.clientWidth);
          }, [n, e]);
        return (
          (0, r.useResizeObserverSubscription)({
            ref: e,
            key: "forum-container",
            onUpdate: s,
            resizeObserver: o,
            listenerMap: i,
          }),
          { containerRef: e, containerWidth: t }
        );
      };
    },
    482062: function (e, t, n) {
      "use strict";
      n.d(t, {
        KT: function () {
          return f;
        },
        ZP: function () {
          return h;
        },
        nX: function () {
          return C;
        },
      }),
        n(47120);
      var a = n(735250),
        s = n(470079),
        r = n(25441),
        l = n(536895),
        i = n(260866);
      let o = "data-grid-item-id",
        c = "data-grid-section",
        d = "data-grid-prev-section-boundary",
        u = new Set([l.R8.UP, l.R8.DOWN, l.R8.LEFT, l.R8.RIGHT]);
      function m(e) {
        let { section: t, column: n, row: a } = e,
          s = "[".concat(c, '="').concat(t, '"]'),
          r = "[".concat("aria-colindex", '="').concat(n, '"]'),
          l = "[".concat("aria-rowindex", '="').concat(a, '"]');
        return "".concat(s).concat(r).concat(l);
      }
      function h(e) {
        let { id: t, isEnabled: n, setFocus: a } = e,
          c = s.useRef(null),
          h = s.useRef(!1),
          _ = s.useRef(null),
          g = s.useRef(n);
        s.useLayoutEffect(() => {
          g.current = n;
        }, [n]);
        let x = s.useCallback((e) => {
            var t;
            return (
              null !== (t = _.current) && void 0 !== t ? t : document
            ).querySelector(e);
          }, []),
          C = s.useCallback(
            (e, t) => {
              g.current && a(e, t);
            },
            [a],
          ),
          f = s.useCallback((e) => {
            if (g.current) {
              var t;
              null === (t = document.querySelector(e)) ||
                void 0 === t ||
                t.focus();
            }
          }, []),
          p = s.useCallback(
            (e) => {
              c.current = e;
              let n = (0, i.P1)(e, o),
                a = (0, i.x3)(e);
              C(n, a), (0, r.h)(t, a, !0);
            },
            [t, C],
          ),
          [T, I] = s.useState(!1),
          E = s.useRef(T);
        s.useLayoutEffect(() => {
          E.current = T;
        }, [T]),
          s.useLayoutEffect(() => {
            let e = _.current;
            if (null != e)
              return (
                e.addEventListener("focusin", n),
                e.addEventListener("focusout", a),
                e.addEventListener("focus", s),
                e.addEventListener("scroll", r, { passive: !0 }),
                () => {
                  e.removeEventListener("focusin", n),
                    e.removeEventListener("focusout", a),
                    e.removeEventListener("focus", s),
                    e.removeEventListener("scroll", r);
                }
              );
            function n() {
              I(!0);
            }
            function a(e) {
              if (!e.currentTarget.contains(e.relatedTarget))
                I(!1),
                  requestAnimationFrame(() => {
                    let e = c.current;
                    null !== e &&
                      null == x((0, i.P1)(e, o)) &&
                      f((0, i.P1)(t, "data-grid-id"));
                  });
            }
            function s() {
              let e = _.current;
              if (E.current || null == e) return;
            }
            function r() {
              h.current = !0;
            }
          }, [t, C, f, p, x]);
        let N = s.useCallback(
            (e) => {
              var t, n;
              if (!g.current) return;
              let a = c.current,
                s = _.current;
              if (null == a) return;
              let r = (0, i.P1)(a, o),
                h = null == s ? void 0 : s.querySelector(r);
              if (null == h) return;
              let C = parseInt(
                  null !== (t = h.getAttribute("data-grid-section")) &&
                    void 0 !== t
                    ? t
                    : "",
                ),
                f = parseInt(h.getAttribute("aria-rowindex")),
                T = parseInt(h.getAttribute("aria-colindex"));
              switch (
                (u.has(e.key) && (e.stopPropagation(), e.preventDefault()),
                e.key)
              ) {
                case l.R8.RIGHT: {
                  let e = x(m({ section: C, row: f, column: T + 1 }));
                  if (null != e) {
                    let t = e.getAttribute(o);
                    null != t && p(t);
                  }
                  return;
                }
                case l.R8.LEFT: {
                  let e = x(m({ section: C, row: f, column: T - 1 }));
                  if (null != e) {
                    let t = e.getAttribute(o);
                    null != t && p(t);
                  }
                  return;
                }
                case l.R8.DOWN: {
                  let e = x(m({ section: C, row: f + 1, column: T }));
                  if (
                    (null == e &&
                      (e = x(m({ section: C + 1, row: 0, column: T }))),
                    null != e)
                  ) {
                    let t = e.getAttribute(o);
                    null != t && p(t);
                  }
                  return;
                }
                case l.R8.UP: {
                  let e;
                  if (0 === f) {
                    let t = parseInt(h.getAttribute(d));
                    null == (e = x(m({ section: C - 1, row: t, column: T }))) &&
                      (e = x(m({ section: C - 1, row: t - 1, column: T })));
                  } else e = x(m({ section: C, row: f - 1, column: T }));
                  if (null != e) {
                    let t = e.getAttribute(o);
                    null != t && p(t);
                  }
                  return;
                }
                case l.R8.SPACE:
                case l.R8.ENTER: {
                  if (e.repeat) return;
                  let t = c.current;
                  if (null != t) {
                    let a = x((0, i.P1)(t, o)),
                      s =
                        null !== (n = null == a ? void 0 : a.ownerDocument) &&
                        void 0 !== n
                          ? n
                          : document,
                      r = a === s.activeElement;
                    null != a &&
                      r &&
                      (e.preventDefault(),
                      e.stopPropagation(),
                      null == a || a.click());
                  }
                }
              }
            },
            [x, p],
          ),
          b = s.useCallback(
            (e) => {
              let n = null != e ? (0, i.jb)(t, e) : null;
              c.current = n;
            },
            [t],
          );
        return s.useMemo(
          () => ({
            id: t,
            containerProps: { onKeyDown: N, ref: _ },
            setFocus: b,
          }),
          [t, N, b],
        );
      }
      let _ = { id: "NO_LIST", onKeyDown() {}, ref: s.createRef() },
        g = s.createContext({ id: "NO_LIST", setFocus() {} }),
        x = s.createContext(_);
      function C(e) {
        let { id: t, section: n, row: a, column: l, boundaries: u } = e,
          [m, h] = s.useState(0 === a && 0 === l ? 0 : -1),
          { id: _, setFocus: x } = s.useContext(g),
          C = s.useCallback(() => x(t), [t, x]);
        return (
          s.useLayoutEffect(
            () =>
              (0, r.N)(_, (e) => {
                h(e === t ? 0 : -1);
              }),
            [t, _],
          ),
          {
            [o]: (0, i.jb)(_, t),
            [c]: n,
            [d]: u[n],
            role: "gridcell",
            "aria-rowindex": a,
            "aria-colindex": l,
            tabIndex: m,
            onFocus: C,
          }
        );
      }
      function f(e) {
        let { children: t, navigator: n } = e,
          {
            id: r,
            setFocus: l,
            containerProps: { onKeyDown: i, ref: o },
          } = n,
          c = s.useMemo(() => ({ id: r, setFocus: l }), [r, l]),
          d = s.useMemo(() => ({ onKeyDown: i, ref: o, id: r }), [i, o, r]);
        return (0, a.jsx)(x.Provider, {
          value: d,
          children: (0, a.jsx)(g.Provider, { value: c, children: t }),
        });
      }
    },
    260503: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var a = n(470079),
        s = n(924826);
      function r(e) {
        let { listRef: t, padding: n, channel: r, isEnabled: l } = e,
          i = a.useCallback(
            (e) => {
              let a = t.current,
                s = document.querySelector(e);
              null != s &&
                (null == a ||
                  a.scrollIntoViewNode({
                    node: s,
                    padding: n,
                    callback: () => {
                      var t;
                      null === (t = document.querySelector(e)) ||
                        void 0 === t ||
                        t.focus({ preventScroll: !0 });
                    },
                  }));
            },
            [n],
          ),
          o = a.useCallback(
            () =>
              new Promise((e) => {
                let n = t.current;
                null == n ||
                  n.scrollToTop({ callback: () => requestAnimationFrame(e) });
              }),
            [],
          ),
          c = a.useCallback(
            () =>
              new Promise((e) => {
                let n = t.current;
                null == n ||
                  n.scrollToBottom({
                    callback: () => requestAnimationFrame(e),
                  });
              }),
            [],
          );
        return (0, s.ZP)({
          id: "forum-channel-list-".concat(r.id),
          isEnabled: l,
          scrollToStart: o,
          scrollToEnd: c,
          setFocus: i,
        });
      }
    },
    337077: function (e, t, n) {
      "use strict";
      n.d(t, {
        M: function () {
          return o;
        },
      }),
        n(47120),
        n(653041);
      var a = n(470079),
        s = n(392711),
        r = n(591759),
        l = n(158222),
        i = n(154135);
      function o(e, t, n) {
        let o = a.useRef(new Map()),
          [, c] = a.useState(null),
          [d, u] = a.useState(null),
          m = a.useMemo(
            () =>
              s.debounce((e, n) => {
                if (null == n || e || 0 === t) return;
                let a = n.match(r.Z.URL_REGEX);
                if (null == a || 0 === a.length) {
                  (o.current = new Map()), u(null);
                  return;
                }
                u(s.uniq(a).slice(0, i.Yh));
              }, 1e3),
            [t, o],
          );
        a.useEffect(() => {
          m(e, n);
        }, [m, n, e]),
          a.useEffect(() => {
            (async function e(e, t) {
              if (null == t) return;
              let n = e.current,
                a = new Set(n.keys()),
                s = t.filter((e) => !(null == a ? void 0 : a.has(e)));
              if (0 !== s.length)
                try {
                  let t = await l.V6(s);
                  (e.current = (function (e, t, n) {
                    return (
                      null == n ||
                        n.forEach((n) => {
                          let a = (function (e, t) {
                            return e.find(
                              (e) =>
                                (null == t ? void 0 : t.url) != null &&
                                e.startsWith(t.url),
                            );
                          })(t, n);
                          if (null == a) return;
                          let s = e.get(a);
                          null == s ? e.set(a, [n]) : s.push(n);
                        }),
                      e
                    );
                  })(new Map(n), s, null == t ? void 0 : t.embeds)),
                    c({});
                } catch (e) {}
            })(o, d);
          }, [d]);
        let h = o.current,
          _ = a.useMemo(() => {
            let e = [];
            return (
              null == d ||
                d.forEach((t) => {
                  let n = h.get(t);
                  null != n && e.push(...n);
                }),
              e.length > 0 ? e : null
            );
          }, [d, h]);
        return { embeds: e ? null : _ };
      }
    },
    621516: function (e, t, n) {
      "use strict";
      var a = n(735250),
        s = n(470079),
        r = n(120356),
        l = n.n(r),
        i = n(212433),
        o = n(442837),
        c = n(780384),
        d = n(481060),
        u = n(410030),
        m = n(607070),
        h = n(70097),
        _ = n(961675),
        g = n(883429),
        x = n(432771),
        C = n(406074),
        f = n(434404),
        p = n(430824),
        T = n(63063),
        I = n(595433),
        E = n(981631),
        N = n(689938),
        b = n(19879),
        v = n(906739),
        S = n(965358),
        M = n(420196),
        A = n(433075);
      function j(e) {
        let { handleHide: t } = e;
        return (0, a.jsx)(d.Clickable, {
          onClick: t,
          className: b.closeButton,
          "aria-label": N.Z.Messages.DISMISS,
          children: (0, a.jsx)(d.XSmallIcon, {
            size: "md",
            color: "currentColor",
            className: b.closeIcon,
          }),
        });
      }
      function R(e) {
        let {
          username: t,
          title: n,
          videoSrc: s,
          messageCount: r,
          reaction: i,
          reactionCount: o,
          classname: c,
        } = e;
        return (0, a.jsxs)("div", {
          className: l()(b.videoPreview, c),
          children: [
            (0, a.jsx)("div", {
              className: b.authorRow,
              children: (0, a.jsxs)("div", {
                className: b.rowGroup,
                children: [
                  (0, a.jsx)(d.Text, {
                    tag: "span",
                    className: b.author,
                    variant: "text-sm/semibold",
                    children: t,
                  }),
                  (0, a.jsx)(d.Text, {
                    variant: "text-xs/normal",
                    color: "header-secondary",
                    className: b.postCreationTimestamp,
                    children:
                      N.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_TIMESTAMP,
                  }),
                ],
              }),
            }),
            (0, a.jsx)(d.Heading, {
              variant: "heading-md/extrabold",
              className: b.title,
              color: "header-primary",
              "aria-hidden": !0,
              children: n,
            }),
            (0, a.jsx)(d.Spacer, { size: 10 }),
            (0, a.jsx)(h.Z, {
              className: b.video,
              src: s,
              autoPlay: !0,
              loop: !0,
              muted: !0,
            }),
            (0, a.jsx)(d.Spacer, { size: 10 }),
            (0, a.jsx)("div", {
              className: b.footer,
              children: (0, a.jsxs)("div", {
                className: b.forumPostControls,
                children: [
                  (0, a.jsxs)("div", {
                    className: b.messageCountBox,
                    children: [
                      (0, a.jsx)("span", {
                        className: b.messageCountIcon,
                        children: (0, a.jsx)(d.ChatIcon, {
                          size: "xs",
                          color: "currentColor",
                        }),
                      }),
                      (0, a.jsx)(d.Text, {
                        variant: "text-xs/normal",
                        color: "interactive-normal",
                        children: r,
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: b.reactionBox,
                    children: [
                      (0, a.jsx)("span", {
                        role: "img",
                        "aria-label": "",
                        children: i,
                      }),
                      (0, a.jsx)(d.Text, {
                        variant: "text-xs/normal",
                        color: "interactive-normal",
                        children: o,
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      }
      t.Z = (e) => {
        var t, n;
        let { channel: r } = e,
          h = (0, u.ZP)(),
          O = (0, c.wj)(h),
          Z = (0, o.e7)([p.Z], () => p.Z.getGuild(r.guild_id)),
          L = (0, o.e7)([m.Z], () => m.Z.useReducedMotion),
          P = (0, o.e7)([_.Z], () => _.Z.hasHidden(r.id)),
          w = (0, C.C)({ guildId: r.guild_id, channelId: r.id }),
          { transitions: y, setVisible: D } = (0, I.H)(),
          F = s.useCallback(() => {
            D(!1), g.Z.hideAdminOnboarding(r.id, !0);
          }, [r, D]);
        s.useEffect(() => {
          !(0, x.c)(r.id) && D(!P);
        }, [r, D, P]);
        let U = s.useMemo(
            () => [
              N.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_FAN_ART_TAG,
              N.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_DESK_SETUP_TAG,
              N.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_PETS_TAG,
              N.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_HOUSEPLANTS_TAG,
            ],
            [],
          ),
          k = s.useMemo(
            () => [
              N.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_BEHIND_THE_SCENES_TAG,
              N.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_EXCLUSIVE_ART_TAG,
              N.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_PRERELEASES_TAG,
              N.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_TUTORIALS_TAG,
            ],
            [],
          ),
          H = () => {
            f.Z.open(r.guild_id, E.pNK.ROLE_SUBSCRIPTIONS);
          },
          B =
            null !==
              (t =
                null == Z
                  ? void 0
                  : Z.hasFeature(
                      E.oNc.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE,
                    )) &&
            void 0 !== t &&
            t
              ? N.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_HAS_TIERS_CTA
              : N.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_NO_TIERS_CTA,
          G =
            null !==
              (n =
                (null == Z
                  ? void 0
                  : Z.hasFeature(E.oNc.CREATOR_MONETIZABLE)) ||
                (null == Z
                  ? void 0
                  : Z.hasFeature(E.oNc.CREATOR_MONETIZABLE_PROVISIONAL))) &&
            void 0 !== n &&
            n,
          z = G
            ? N.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_ABOUT_MONETIZING_TITLE
            : N.Z.Messages
                .MEDIA_POST_ADMIN_EDUCATION_ABOUT_NON_MONETIZING_TITLE,
          V = G
            ? N.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_ABOUT_MONETIZING_SUBTITLE
            : N.Z.Messages
                .MEDIA_POST_ADMIN_EDUCATION_ABOUT_NON_MONETIZING_SUBTITLE;
        return (0, a.jsx)(a.Fragment, {
          children: y((e, t) =>
            t
              ? (0, a.jsxs)(i.animated.div, {
                  style: e,
                  className: b.container,
                  children: [
                    (0, a.jsxs)("div", {
                      className: l()(b.__invalid_wrapper, b.headerRow),
                      children: [
                        (0, a.jsxs)(d.Text, {
                          variant: "text-xs/normal",
                          className: b.visibilityInfo,
                          children: [
                            (0, a.jsx)(d.CircleInformationIcon, {
                              size: "xxs",
                              color: "currentColor",
                              className: b.icon,
                            }),
                            N.Z.Messages.FORUM_CHANNEL_ONBOARDING_VISIBILITY,
                          ],
                        }),
                        (0, a.jsx)(j, { handleHide: F }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: b.contentContainer,
                      children: [
                        (0, a.jsxs)("div", {
                          className: l()(b.contentRow, G && b.contentRowOne),
                          children: [
                            (0, a.jsx)("div", {
                              className: l()(b.contentMediaContainer),
                              children: (0, a.jsxs)("div", {
                                className: b.contentVideoContainer,
                                children: [
                                  (0, a.jsx)(R, {
                                    username:
                                      N.Z.Messages
                                        .MEDIA_POST_ADMIN_EDUCATION_PREVIEW_USERNAME_ONE,
                                    videoSrc:
                                      "https://cdn.discordapp.com/assets/media_channel/admin_edu_discord_birthday.mp4",
                                    title:
                                      N.Z.Messages
                                        .MEDIA_POST_ADMIN_EDUCATION_PREVIEW_TITLE_ONE,
                                    messageCount: "34",
                                    reaction: "⚡️",
                                    reactionCount: "724",
                                    classname: b.backgroundVideo,
                                  }),
                                  (0, a.jsx)(R, {
                                    username:
                                      N.Z.Messages
                                        .MEDIA_POST_ADMIN_EDUCATION_PREVIEW_USERNAME_TWO,
                                    videoSrc:
                                      "https://cdn.discordapp.com/assets/media_channel/admin_edu_wumpus_onboarding.mp4",
                                    title:
                                      N.Z.Messages
                                        .MEDIA_POST_ADMIN_EDUCATION_PREVIEW_TITLE_TWO,
                                    messageCount: "34",
                                    reactionCount: "84",
                                    reaction: "\uD83D\uDC9E",
                                    classname: l()(
                                      b.backgroundVideo,
                                      b.secondaryVideo,
                                    ),
                                  }),
                                  (0, a.jsx)(R, {
                                    username:
                                      N.Z.Messages
                                        .MEDIA_POST_ADMIN_EDUCATION_PREVIEW_USERNAME_THREE,
                                    videoSrc:
                                      "https://cdn.discordapp.com/assets/media_channel/admin_edu_scientist_wumpus.mp4",
                                    title:
                                      N.Z.Messages
                                        .MEDIA_POST_ADMIN_EDUCATION_PREVIEW_TITLE_THREE,
                                    messageCount: "7,103",
                                    reaction: "⚡️",
                                    reactionCount: "724",
                                    classname: b.highlightVideo,
                                  }),
                                ],
                              }),
                            }),
                            (0, a.jsxs)("article", {
                              className: b.contentTextContainer,
                              children: [
                                (0, a.jsx)(d.Heading, {
                                  variant: "heading-lg/semibold",
                                  color: "header-primary",
                                  children: z,
                                }),
                                (0, a.jsx)(d.Spacer, { size: 8 }),
                                (0, a.jsx)(d.Text, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: V,
                                }),
                                (0, a.jsx)(d.Spacer, { size: 16 }),
                                (0, a.jsxs)(d.Clickable, {
                                  onClick: () =>
                                    open(
                                      T.Z.getCreatorSupportArticleURL(
                                        E.BhN.MEDIA_CHANNEL,
                                      ),
                                    ),
                                  className: b.helpCenterLink,
                                  children: [
                                    (0, a.jsx)(d.Text, {
                                      variant: "text-sm/medium",
                                      color: "text-link",
                                      className: b.__invalid_helpCenterLinkText,
                                      children:
                                        N.Z.Messages
                                          .MEDIA_POST_ADMIN_EDUCATION_HELP_CENTER,
                                    }),
                                    (0, a.jsx)(d.WindowLaunchIcon, {
                                      size: "xs",
                                      color: "currentColor",
                                      className: b.helpCenterLinkIcon,
                                    }),
                                  ],
                                }),
                                (0, a.jsx)(d.Spacer, { size: 16 }),
                                (0, a.jsx)("div", {
                                  className: b.mediaChannelTagsContainer,
                                  children: U.map((e) =>
                                    (0, a.jsx)(
                                      d.Text,
                                      {
                                        variant: "text-sm/medium",
                                        color: "text-normal",
                                        className: b.mediaChannelTag,
                                        children: e,
                                      },
                                      e,
                                    ),
                                  ),
                                }),
                              ],
                            }),
                          ],
                        }),
                        G &&
                          (0, a.jsxs)("div", {
                            className: l()(b.contentRow, b.contentRowTwo),
                            children: [
                              (0, a.jsx)("div", {
                                className: l()(b.contentMediaContainer),
                                children: (0, a.jsxs)("div", {
                                  className: b.contentImageContainer,
                                  children: [
                                    (0, a.jsx)("img", {
                                      src: O ? M : A,
                                      alt: "",
                                      className: l()(
                                        b.previewEmbedImage,
                                        b.secondaryImage,
                                      ),
                                    }),
                                    (0, a.jsx)("img", {
                                      src: O ? v : S,
                                      alt: "",
                                      className: b.previewEmbedImage,
                                    }),
                                  ],
                                }),
                              }),
                              (0, a.jsxs)("article", {
                                className: b.contentTextContainer,
                                children: [
                                  (0, a.jsxs)(d.Text, {
                                    variant: "text-xxs/bold",
                                    className: b.serverSubPill,
                                    children: [
                                      N.Z.Messages
                                        .MEDIA_POST_ADMIN_EDUCATION_SERVER_SUB_PILL,
                                      " ",
                                      (0, a.jsx)("span", {
                                        role: "img",
                                        "aria-label": "",
                                        children: "\uD83D\uDD25",
                                      }),
                                    ],
                                  }),
                                  (0, a.jsx)(d.Spacer, { size: 10 }),
                                  (0, a.jsx)(d.Heading, {
                                    variant: "heading-lg/semibold",
                                    color: "header-primary",
                                    children:
                                      N.Z.Messages
                                        .MEDIA_POST_ADMIN_EDUCATION_SHARE_TITLE,
                                  }),
                                  (0, a.jsx)(d.Spacer, { size: 8 }),
                                  (0, a.jsx)(d.Text, {
                                    variant: "text-md/normal",
                                    color: "text-muted",
                                    children:
                                      N.Z.Messages
                                        .MEDIA_POST_ADMIN_EDUCATION_SHARE_SUBTITLE,
                                  }),
                                  (0, a.jsx)(d.Spacer, { size: 16 }),
                                  (0, a.jsx)("div", {
                                    className: b.mediaChannelTagsContainer,
                                    children: k.map((e) =>
                                      (0, a.jsx)(
                                        d.Text,
                                        {
                                          variant: "text-sm/medium",
                                          color: "text-normal",
                                          className: b.mediaChannelTag,
                                          children: e,
                                        },
                                        e,
                                      ),
                                    ),
                                  }),
                                  (0, a.jsx)(d.Spacer, { size: 16 }),
                                  0 === w.length &&
                                    (0, a.jsx)(d.ShinyButton, {
                                      size: d.Button.Sizes.MEDIUM,
                                      pauseAnimation: L,
                                      onClick: H,
                                      className: b.addChannelButton,
                                      color: d.Button.Colors.CUSTOM,
                                      children: B,
                                    }),
                                ],
                              }),
                            ],
                          }),
                      ],
                    }),
                  ],
                })
              : null,
          ),
        });
      };
    },
    284182: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return h;
        },
      });
      var a = n(735250);
      n(470079);
      var s = n(399606),
        r = n(481060),
        l = n(541716),
        i = n(859235),
        o = n(898463),
        c = n(76451),
        d = n(117530),
        u = n(689938),
        m = n(67809);
      function h(e) {
        let { parentChannel: t } = e,
          n = (0, s.Wu)([d.Z], () => {
            let e = d.Z.getUploads(t.id, l.I.CREATE_FORUM_POST.drafts.type);
            return null == e ? void 0 : e.filter((e) => !0 !== e.isThumbnail);
          });
        return (0, a.jsxs)("div", {
          className: m.container,
          children: [
            (0, a.jsx)(r.Text, {
              variant: "text-md/semibold",
              color: "text-muted",
              children: u.Z.Messages.MEDIA_CHANNEL_ATTACHMENTS_SECTION_TITLE,
            }),
            (0, a.jsx)(r.Text, {
              variant: "text-sm/normal",
              color: "text-muted",
              children:
                u.Z.Messages.MEDIA_CHANNEL_ATTACHMENTS_SECTION_DESCRIPTION,
            }),
            (0, a.jsx)("div", {
              children: (0, a.jsx)(r.ScrollerThin, {
                className: m.uploadsContainer,
                orientation: "horizontal",
                paddingFix: !1,
                fade: !0,
                children: (0, a.jsxs)("div", {
                  className: m.uploads,
                  children: [
                    n.map((e) =>
                      (0, a.jsx)(
                        o.Z,
                        {
                          channelId: t.id,
                          draftType: l.I.CREATE_FORUM_POST.drafts.type,
                          upload: e,
                          keyboardModeEnabled: !0,
                          hideFileName: !0,
                          size: i.q.SMALL,
                        },
                        e.id,
                      ),
                    ),
                    (0, a.jsx)(c._, { channelId: t.id }),
                  ],
                }),
              }),
            }),
          ],
        });
      }
    },
    795639: function (e, t, n) {
      "use strict";
      n.d(t, {
        _: function () {
          return A;
        },
      });
      var a = n(735250),
        s = n(470079),
        r = n(120356),
        l = n.n(r),
        i = n(512722),
        o = n.n(i),
        c = n(399606),
        d = n(481060),
        u = n(166459),
        m = n(607070),
        h = n(541716),
        _ = n(273031),
        g = n(859235),
        x = n(313201),
        C = n(70097),
        f = n(374794),
        p = n(470623),
        T = n(983200),
        I = n(127654),
        E = n(124252),
        N = n(689938),
        b = n(682459);
      let v = [
          {
            name: "Media Post Thumbnail",
            extensions: ["jpg", "jpeg", "png", "gif", "webp"],
          },
        ],
        S = (0, x.hQ)();
      function M(e) {
        let { mediaAttachments: t, containerWidth: n, containerHeight: s } = e,
          r = (0, T.tu)({
            numAttachments: t.length,
            containerWidth: n,
            containerHeight: s,
          });
        return (0, a.jsx)(a.Fragment, {
          children: t.map((e, t) => {
            var n;
            return (0, a.jsx)(
              "div",
              {
                style: r[t],
                children:
                  !0 === e.isVideo
                    ? (0, a.jsx)(C.Z, {
                        src: e.src,
                        className: b.thumbnail,
                        "aria-hidden": !0,
                      })
                    : (0, a.jsx)("img", {
                        src: e.src,
                        className: b.thumbnail,
                        "aria-hidden": !0,
                        alt:
                          null !== (n = null == e ? void 0 : e.alt) &&
                          void 0 !== n
                            ? n
                            : "",
                      }),
              },
              e.src,
            );
          }),
        });
      }
      let A = (e) => {
        var t;
        let { parentChannel: r } = e,
          { textAreaState: i } = (0, p.xH)((e) => {
            let { textAreaState: t } = e;
            return { textAreaState: t };
          }),
          x = (0, c.e7)([m.Z], () => m.Z.keyboardModeEnabled),
          C = (0, E.Z)(
            r,
            null === (t = i.textValue) || void 0 === t ? void 0 : t.trim(),
          ),
          T = s.useMemo(() => C.find((e) => e.isThumbnail), [C]),
          A = null != C && C.length > 0,
          j = s.useMemo(() => {
            let e = (null == C ? void 0 : C.length) > 1 ? 1.15 : 1;
            return { width: 153 * e, height: 86 * e };
          }, [C]),
          R = s.useCallback(
            (e) => {
              null != T &&
                u.Z.remove(r.id, T.id, h.I.CREATE_FORUM_POST.drafts.type),
                (0, I.d)(
                  e.currentTarget.files,
                  r,
                  h.I.CREATE_FORUM_POST.drafts.type,
                  { requireConfirm: !0, isThumbnail: !0 },
                ),
                (e.currentTarget.value = null);
            },
            [r, T],
          ),
          O = (e) => {
            if ((e.stopPropagation(), (null == T ? void 0 : T.upload) != null))
              (0, d.openModalLazy)(async () => {
                let e = T.upload;
                o()(null != e, "upload should not be null");
                let { default: t } = await Promise.resolve().then(
                  n.bind(n, 95152),
                );
                return (n) =>
                  (0, a.jsx)(t, {
                    ...n,
                    upload: e,
                    channelId: r.id,
                    draftType: h.I.CREATE_FORUM_POST.drafts.type,
                    onSubmit: (t) => {
                      let { name: n, description: a, spoiler: s } = t;
                      u.Z.update(
                        r.id,
                        e.id,
                        h.I.CREATE_FORUM_POST.drafts.type,
                        { filename: n, description: a, spoiler: s },
                      );
                    },
                    disableSpoiler: !0,
                  });
              });
          },
          Z = (0, a.jsx)(f.Z, {
            color: d.ButtonColors.CUSTOM,
            className: l()(b.uploadFileInputContainer),
            innerClassName: b.uploadThumbnailContainer,
            onChange: R,
            multiple: !1,
            "aria-hidden": !0,
            filters: v,
            "aria-describedby": S,
            "aria-label": A
              ? N.Z.Messages.MEDIA_CHANNEL_CHANGE_THUMBNAIL_LABEL
              : N.Z.Messages.MEDIA_CHANNEL_UPLOAD_THUMBNAIL_LABEL,
            children: A
              ? (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)(M, {
                      mediaAttachments: C,
                      containerWidth: j.width,
                      containerHeight: j.height,
                    }),
                    (0, a.jsxs)("div", {
                      className: l()(b.changeThumbnailLabelContainer, {
                        [b.changeThumbnailLabelOverflow]:
                          (null == C ? void 0 : C.length) > 2,
                      }),
                      children: [
                        (0, a.jsx)(d.Text, {
                          variant: "text-xs/medium",
                          color: "header-secondary",
                          children:
                            N.Z.Messages.MEDIA_CHANNEL_CHANGE_THUMBNAIL_LABEL,
                        }),
                        null == T &&
                          (0, a.jsx)(d.PencilIcon, {
                            size: "xs",
                            color: "currentColor",
                            className: b.editIcon,
                          }),
                      ],
                    }),
                  ],
                })
              : (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)(d.ImagePlusIcon, {
                      size: "custom",
                      width: 39,
                      height: 39,
                      color: "currentColor",
                      className: b.uploadIcon,
                    }),
                    (0, a.jsx)(d.Text, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children:
                        N.Z.Messages.MEDIA_CHANNEL_UPLOAD_THUMBNAIL_LABEL,
                    }),
                  ],
                }),
          });
        return (0, a.jsx)("div", {
          className: b.thumbnailContainer,
          style: j,
          children:
            null != T
              ? (0, a.jsx)(g.Z, {
                  actions: (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)(_.Z, {
                        className: b.action,
                        tooltip: N.Z.Messages.ATTACHMENT_UTILITIES_MODIFY,
                        onClick: O,
                        children: (0, a.jsx)(d.PencilIcon, {
                          size: "xs",
                          color: "currentColor",
                        }),
                      }),
                      (0, a.jsx)(_.Z, {
                        className: b.action,
                        tooltip: N.Z.Messages.ATTACHMENT_UTILITIES_REMOVE,
                        onClick: () =>
                          u.Z.remove(
                            r.id,
                            T.id,
                            h.I.CREATE_FORUM_POST.drafts.type,
                          ),
                        dangerous: !0,
                        children: (0, a.jsx)(d.TrashIcon, {
                          size: "md",
                          color: "currentColor",
                        }),
                      }),
                    ],
                  }),
                  draftType: h.I.CREATE_FORUM_POST.drafts.type,
                  id: T.id,
                  channelId: r.id,
                  handleEditModal: O,
                  keyboardModeEnabled: x,
                  size: g.q.SMALL,
                  className: b.attachmentListItem,
                  children: Z,
                })
              : (0, a.jsx)(a.Fragment, { children: Z }),
        });
      };
    },
    124252: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return c;
        },
      }),
        n(390547),
        n(47120),
        n(653041),
        n(315314),
        n(610138),
        n(216116),
        n(78328),
        n(815648);
      var a = n(470079),
        s = n(399606),
        r = n(541716),
        l = n(117530),
        i = n(154135),
        o = n(337077);
      function c(e, t) {
        var n, c;
        let { mediaAttachments: d, hasThumbnail: u } = (function (e) {
            let [t, n] = a.useState(null),
              o = (0, s.Wu)([l.Z], () => {
                let t = l.Z.getUploads(e.id, r.I.CREATE_FORUM_POST.drafts.type),
                  n = t.find((e) => e.isThumbnail);
                return null != n
                  ? [n]
                  : t.filter((e) => e.isVideo || e.isImage);
              }),
              c = a.useMemo(() => o.some((e) => e.isThumbnail), [o]);
            return (
              a.useEffect(() => {
                let e = [];
                return (
                  n(
                    o.slice(0, i.Yh).flatMap((t) => {
                      var n;
                      let a =
                        null == t
                          ? void 0
                          : null === (n = t.item) || void 0 === n
                            ? void 0
                            : n.file;
                      if (null == a) return [];
                      let s = URL.createObjectURL(a);
                      return (
                        e.push(s),
                        {
                          id: t.id,
                          src: s,
                          spoiler: t.spoiler,
                          alt: t.description,
                          isThumbnail: t.isThumbnail,
                          upload: !0 === t.isThumbnail ? t : void 0,
                          isVideo: t.isVideo,
                        }
                      );
                    }),
                  ),
                  () => {
                    n(null), e.forEach((e) => URL.revokeObjectURL(e));
                  }
                );
              }, [o]),
              { mediaAttachments: t, hasThumbnail: c }
            );
          })(e),
          m = Math.max(
            i.Yh -
              (null !== (n = null == d ? void 0 : d.length) && void 0 !== n
                ? n
                : 0),
            0,
          ),
          { embeds: h } = (0, o.M)(u, m, t),
          _ = a.useMemo(
            () =>
              null == h
                ? void 0
                : h.flatMap((e) => {
                    let t = (0, i.Vh)(e);
                    return null == t
                      ? []
                      : { id: t, src: t, spoiler: !1, alt: e.title };
                  }),
            [h],
          ),
          g = [...(null != d ? d : [])];
        return (
          !u &&
            m > 0 &&
            g.push(
              ...(null !== (c = null == _ ? void 0 : _.slice(0, m)) &&
              void 0 !== c
                ? c
                : []),
            ),
          g
        );
      }
    },
    595433: function (e, t, n) {
      "use strict";
      n.d(t, {
        H: function () {
          return r;
        },
      }),
        n(47120);
      var a = n(470079),
        s = n(481060);
      function r() {
        let [e, t] = a.useState(!0);
        return {
          transitions: (0, s.useTransition)(e, {
            keys: (e) => (e ? "shown" : "hidden"),
            config: l,
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
            unique: !0,
          }),
          setVisible: t,
        };
      }
      let l = { mass: 1, tension: 250, friction: 18, clamp: !0 };
    },
    120160: function (e, t, n) {
      "use strict";
      e.exports = {
        container: "container_ae4f46",
        header: "header_ae4f46",
        headerLeft: "headerLeft_ae4f46",
        headerText: "headerText_ae4f46",
        countContainer: "countContainer_ae4f46",
        countText: "countText_ae4f46",
        tagContainer: "tagContainer_ae4f46",
        tag: "tag_ae4f46",
        clear: "clear_ae4f46",
        row: "row_ae4f46",
        separator: "separator_ae4f46",
      };
    },
    738941: function (e, t, n) {
      "use strict";
      n.r(
        (e.exports = {
          container: "container_a6d69a",
          uploadArea: "uploadArea_a6d69a",
          label: "label_a6d69a",
          content: "content_a6d69a",
          noListContainer: "noListContainer_a6d69a",
          list: "list_a6d69a",
          grid: "grid_a6d69a",
          headerRow: "headerRow_a6d69a",
          card: "card_a6d69a",
          columnsSpan: "columnsSpan_a6d69a",
          emptyStateRow: "emptyStateRow_a6d69a",
          newMemberBanner: "newMemberBanner_a6d69a",
          gridViewBanner: "gridViewBanner_a6d69a",
          placeholder: "placeholder_a6d69a",
          mainCard: "mainCard_a6d69a",
          emptyMainCard: "emptyMainCard_a6d69a",
          outOfDate: "outOfDate_a6d69a",
          header: "header_a6d69a",
          headerWithMatchingPosts: "headerWithMatchingPosts_a6d69a",
          noForm: "noForm_a6d69a",
          sortContainer: "sortContainer_a6d69a",
          sort: "sort_a6d69a",
          sortPopout: "sortPopout_a6d69a",
          archivedDividerRow: "archivedDividerRow_a6d69a",
          archivedDivider: "archivedDivider_a6d69a",
          newPostsButton: "newPostsButton_a6d69a",
          loadingCard: "loadingCard_a6d69a",
          "loadingCard-0": "loadingCard-0_a6d69a",
          "loadingCard-1": "loadingCard-1_a6d69a",
          "loadingCard-2": "loadingCard-2_a6d69a",
          matchingPostsRow: "matchingPostsRow_a6d69a",
          enterIcon: "enterIcon_a6d69a",
          warnIcon: "warnIcon_a6d69a",
          searchIcon: "searchIcon_a6d69a",
          missingReadHistoryPermission: "missingReadHistoryPermission_a6d69a",
          divider: "divider_a6d69a",
          tagsContainer: "tagsContainer_a6d69a",
          filterIcon: "filterIcon_a6d69a",
          tagList: "tagList_a6d69a",
          tagListInner: "tagListInner_a6d69a",
          tag: "tag_a6d69a",
          tagsButton: "tagsButton_a6d69a",
          tagsButtonInner: "tagsButtonInner_a6d69a",
          tagsButtonPlaceholder: "tagsButtonPlaceholder_a6d69a",
          tagsButtonWithCount: "tagsButtonWithCount_a6d69a",
          sortDropdown: "sortDropdown_a6d69a",
          sortDropdownInner: "sortDropdownInner_a6d69a",
          sortDropdownText: "sortDropdownText_a6d69a",
          clear: "clear_a6d69a",
          matchingPosts: "matchingPosts_a6d69a",
          startPostHelp: "startPostHelp_a6d69a",
          tagsSpacer: "tagsSpacer_a6d69a",
          keyboardShortcut: "keyboardShortcut_a6d69a",
          key: "key_a6d69a",
          countContainer: "countContainer_a6d69a",
          countText: "countText_a6d69a",
          optInNotice: "optInNotice_a6d69a",
        }),
      );
    },
    410784: function (e, t, n) {
      "use strict";
      e.exports = {
        container: "container_a039eb",
        wrapper: "wrapper_a039eb",
        headerRow: "headerRow_a039eb",
        header: "header_a039eb",
        visibilityInfo: "visibilityInfo_a039eb",
        icon: "icon_a039eb",
        closeButton: "closeButton_a039eb",
        closeIcon: "closeIcon_a039eb",
        stepContainer: "stepContainer_a039eb",
        stepDescription: "stepDescription_a039eb",
        completed: "completed_a039eb",
        stepName: "stepName_a039eb",
        checklist: "checklist_a039eb",
        stepStatus: "stepStatus_a039eb",
        step: "step_a039eb",
        rolesList: "rolesList_a039eb",
        rolePill: "rolePill_a039eb",
        listContainer: "listContainer_a039eb",
      };
    },
    332236: function (e, t, n) {
      "use strict";
      e.exports = {
        container: "container_a03b48",
        iconContainer: "iconContainer_a03b48",
        icon: "icon_a03b48",
        stars: "stars_a03b48",
        header: "header_a03b48",
        cta: "cta_a03b48",
        button: "button_a03b48",
      };
    },
    820634: function (e, t, n) {
      "use strict";
      e.exports = {
        container: "container_ddbb27",
        guidelines: "guidelines_ddbb27",
        guidelinesHeader: "guidelinesHeader_ddbb27",
        headerContainer: "headerContainer_ddbb27",
        descriptionContainer: "descriptionContainer_ddbb27",
        showMore: "showMore_ddbb27",
        gradient: "gradient_ddbb27",
        linkContainer: "linkContainer_ddbb27",
        showMoreLink: "showMoreLink_ddbb27",
        showMoreText: "showMoreText_ddbb27",
        showMoreIcon: "showMoreIcon_ddbb27",
        clickable: "clickable_ddbb27",
        hiddenVisually: "hiddenVisually_ddbb27",
      };
    },
    167135: function (e, t, n) {
      "use strict";
      e.exports = {
        container: "container_ad4d4c",
        author: "author_ad4d4c",
        closeIcon: "closeIcon_ad4d4c",
        inline: "inline_ad4d4c",
        discordIcon: "discordIcon_ad4d4c",
        title: "title_ad4d4c",
        notice: "notice_ad4d4c",
        infoIcon: "infoIcon_ad4d4c",
        separator: "separator_ad4d4c",
      };
    },
    628178: function (e, t, n) {
      "use strict";
      e.exports = {
        uploadInput: "uploadInput_a15d29",
        uploadIcon: "uploadIcon_a15d29",
        fileInput: "fileInput_a15d29",
        container: "container_a15d29",
        popoutContainer: "popoutContainer_a15d29",
        popout: "popout_a15d29",
        uploads: "uploads_a15d29",
        badge: "badge_a15d29",
      };
    },
    51785: function (e, t, n) {
      "use strict";
      e.exports = {
        container: "container_c1668f",
        horizontalPadding: "horizontalPadding_c1668f",
        formContainer: "formContainer_c1668f",
        form: "form_c1668f",
        previewForm: "previewForm_c1668f",
        prefixElement: "prefixElement_c1668f",
        titleContainer: "titleContainer_c1668f",
        title: "title_c1668f",
        collapsed: "collapsed_c1668f",
        bodyContainer: "bodyContainer_c1668f",
        contentContainer: "contentContainer_c1668f",
        channelTextArea: "channelTextArea_c1668f",
        channelTextAreaInner: "channelTextAreaInner_c1668f",
        previewTextArea: "previewTextArea_c1668f",
        channelTextAreaInnerError: "channelTextAreaInnerError_c1668f",
        controlsContainer: "controlsContainer_c1668f",
        controls: "controls_c1668f",
        wrappedControls: "wrappedControls_c1668f",
        characterCount: "characterCount_c1668f",
        expressionPicker: "expressionPicker_c1668f",
        submitButton: "submitButton_c1668f",
        submitButtonInner: "submitButtonInner_c1668f",
        submitIcon: "submitIcon_c1668f",
        tagsContainer: "tagsContainer_c1668f",
        tagsIcon: "tagsIcon_c1668f",
        tagList: "tagList_c1668f",
        tagListInner: "tagListInner_c1668f",
        tagsButton: "tagsButton_c1668f",
        tagsButtonInner: "tagsButtonInner_c1668f",
        tagsButtonPlaceholder: "tagsButtonPlaceholder_c1668f",
        tagsDivider: "tagsDivider_c1668f",
        closeIcon: "closeIcon_c1668f",
        closeIconDisabled: "closeIconDisabled_c1668f",
        searchIcon: "searchIcon_c1668f",
        pencilIcon: "pencilIcon_c1668f",
        loader: "loader_c1668f",
        forumPostFormButton: "forumPostFormButton_c1668f",
        forumPostFormButtonActive: "forumPostFormButtonActive_c1668f",
        previewModeIndicator: "previewModeIndicator_c1668f",
      };
    },
    127403: function (e, t, n) {
      "use strict";
      e.exports = {
        focusTarget: "focusTarget_a57509",
        obscuredTagContainer: "obscuredTagContainer_a57509",
        obscuredTag: "obscuredTag_a57509",
        thumbnailOverride: "thumbnailOverride_a57509",
        imageCover: "imageCover_a57509",
        obscured: "obscured_a57509",
        bullet: "bullet_a57509",
        typing: "typing_a57509",
        dots: "dots_a57509",
        typingUsers: "typingUsers_a57509",
        mediaIconsRow: "mediaIconsRow_a57509",
        mediaIcon: "mediaIcon_a57509",
        moreImagesPill: "moreImagesPill_a57509",
        moreImagesPillText: "moreImagesPillText_a57509",
        moreImagesPillIcon: "moreImagesPillIcon_a57509",
        mosaicMediaContainer: "mosaicMediaContainer_a57509",
        container: "container_a57509",
        isOpen: "isOpen_a57509",
        mediaContainer: "mediaContainer_a57509",
        bodyMedia: "bodyMedia_a57509",
        bodyMediaFrame: "bodyMediaFrame_a57509",
        postBody: "postBody_a57509",
        tagsRow: "tagsRow_a57509",
        header: "header_a57509",
        footer: "footer_a57509",
        title: "title_a57509",
        forumPostControls: "forumPostControls_a57509",
        controlsGroup: "controlsGroup_a57509",
        contentPreview: "contentPreview_a57509",
        content: "content_a57509",
        textContentFooter: "textContentFooter_a57509",
        noTags: "noTags_a57509",
        tagPill: "tagPill_a57509",
        authorRow: "authorRow_a57509",
        rowGroup: "rowGroup_a57509",
        postCreationTimestamp: "postCreationTimestamp_a57509",
        messageCountContainer: "messageCountContainer_a57509",
        newBadge: "newBadge_a57509",
        textContentUnread: "textContentUnread_a57509",
        textContentRead: "textContentRead_a57509",
        mediaPostContainer: "mediaPostContainer_a57509",
        mediaPostThumbnail: "mediaPostThumbnail_a57509",
      };
    },
    704649: function (e, t, n) {
      "use strict";
      e.exports = {
        container: "container_d0f4b1",
        clearText: "clearText_d0f4b1",
      };
    },
    229361: function (e, t, n) {
      "use strict";
      e.exports = {
        cooldownWrapper: "cooldownWrapper_fbe485",
        slowModeIcon: "slowModeIcon_fbe485",
        leadingIcon: "leadingIcon_fbe485",
      };
    },
    19879: function (e, t, n) {
      "use strict";
      e.exports = {
        container: "container_ba1b69",
        headerRow: "headerRow_ba1b69",
        visibilityInfo: "visibilityInfo_ba1b69",
        icon: "icon_ba1b69",
        closeButton: "closeButton_ba1b69",
        closeIcon: "closeIcon_ba1b69",
        contentContainer: "contentContainer_ba1b69",
        contentRow: "contentRow_ba1b69",
        contentMediaContainer: "contentMediaContainer_ba1b69",
        contentRowOne: "contentRowOne_ba1b69",
        contentImageContainer: "contentImageContainer_ba1b69",
        previewEmbedImage: "previewEmbedImage_ba1b69",
        secondaryImage: "secondaryImage_ba1b69",
        serverSubPill: "serverSubPill_ba1b69",
        addChannelButton: "addChannelButton_ba1b69",
        contentRowTwo: "contentRowTwo_ba1b69",
        contentVideoContainer: "contentVideoContainer_ba1b69",
        contentTextContainer: "contentTextContainer_ba1b69",
        mediaChannelTagsContainer: "mediaChannelTagsContainer_ba1b69",
        mediaChannelTag: "mediaChannelTag_ba1b69",
        helpCenterLink: "helpCenterLink_ba1b69",
        helpCenterLinkIcon: "helpCenterLinkIcon_ba1b69",
        videoPreview: "videoPreview_ba1b69",
        authorRow: "authorRow_ba1b69",
        rowGroup: "rowGroup_ba1b69",
        author: "author_ba1b69",
        title: "title_ba1b69",
        postCreationTimestamp: "postCreationTimestamp_ba1b69",
        messageCountBox: "messageCountBox_ba1b69",
        messageCountIcon: "messageCountIcon_ba1b69",
        footer: "footer_ba1b69",
        forumPostControls: "forumPostControls_ba1b69",
        reactionBox: "reactionBox_ba1b69",
        video: "video_ba1b69",
        backgroundVideo: "backgroundVideo_ba1b69",
        secondaryVideo: "secondaryVideo_ba1b69",
        highlightVideo: "highlightVideo_ba1b69",
      };
    },
    67809: function (e, t, n) {
      "use strict";
      e.exports = {
        container: "container_b6cc23",
        uploads: "uploads_b6cc23",
        uploadsContainer: "uploadsContainer_b6cc23",
      };
    },
    682459: function (e, t, n) {
      "use strict";
      e.exports = {
        thumbnailContainer: "thumbnailContainer_dbcd8f",
        uploadThumbnailContainer: "uploadThumbnailContainer_dbcd8f",
        uploadFileInputContainer: "uploadFileInputContainer_dbcd8f",
        changeThumbnailLabelContainer: "changeThumbnailLabelContainer_dbcd8f",
        editIcon: "editIcon_dbcd8f",
        uploadIcon: "uploadIcon_dbcd8f",
        thumbnail: "thumbnail_dbcd8f",
        attachmentListItem: "attachmentListItem_dbcd8f",
        action: "action_dbcd8f",
        changeThumbnailLabelOverflow: "changeThumbnailLabelOverflow_dbcd8f",
      };
    },
  },
]);
//# sourceMappingURL=a810dd4a780630787c11.js.map
