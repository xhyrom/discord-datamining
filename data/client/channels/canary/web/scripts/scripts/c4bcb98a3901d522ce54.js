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
        i = n(956656)(function (e, t) {
          return a(e, 1, t);
        });
      e.exports = i;
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
      var a = n(200651),
        i = n(192379),
        r = n(120356),
        l = n.n(r),
        s = n(232713),
        o = n(318766),
        c = n(28546),
        d = n(957825),
        u = n(553796);
      t.Z = i.memo(
        i.forwardRef(function (e, t) {
          let { disabled: n, type: r, className: m, onClick: h } = e,
            [g, x] = (0, c.Iu)((e) => [e.activeView, e.activeViewType], s.X),
            f = i.useCallback(() => {
              (0, c.j9)(r), null == h || h();
            }, [r, h]);
          return n
            ? null
            : (0, a.jsx)("div", {
                className: l()(d.CT, u.buttonContainer),
                ref: t,
                children: (0, a.jsx)(o.Z, {
                  className: l()(u.emojiButton, m),
                  onClick: f,
                  active:
                    (g === d.X1.GIF ||
                      g === d.X1.EMOJI ||
                      g === d.X1.STICKER) &&
                    x === r,
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
      var a = n(200651);
      n(192379);
      var i = n(120356),
        r = n.n(i),
        l = n(481060),
        s = n(53281);
      function o(e) {
        let {
          children: t,
          className: n,
          innerClassName: i,
          onChange: o,
          "aria-label": c,
          "aria-describedby": d,
          filters: u,
          multiple: m = !1,
          disabled: h = !1,
          submitting: g = !1,
          ...x
        } = e;
        return (0, a.jsx)(l.FocusRing, {
          within: !0,
          children: (0, a.jsxs)("div", {
            className: r()(
              n,
              (0, l.getButtonStyle)({ ...x, submitting: g, disabled: h }),
            ),
            "aria-disabled": h,
            children: [
              (0, a.jsx)("span", {
                "aria-hidden": !0,
                className: i,
                children: t,
              }),
              (0, a.jsx)(s.Z, {
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
        i,
        r = n(539573),
        l = n(388032);
      function s(e, t) {
        return { type: e, message: null != t ? t : null };
      }
      function o(e) {
        return s(0, e);
      }
      function c() {
        return s(0, l.intl.string(l.t["71wuR0"]));
      }
      function d() {
        return s(0, l.intl.string(l.t["w/BT3N"]));
      }
      function u(e, t) {
        return s(1, (0, r.$q)(e, null == t ? void 0 : t.id));
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
      ((a = i || (i = {}))[(a.EmptyContent = 0)] = "EmptyContent"),
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
          return s;
        },
      });
      var a = n(149765),
        i = n(605436),
        r = n(700785);
      let l = (e, t, n) => {
        if (null == e.id) return !1;
        let i = r.I0({ forceRoles: { [e.id]: e }, context: n });
        return a.e$(i, t);
      };
      function s(e, t) {
        return Object.values(t)
          .sort(i.W)
          .map((e) => (0, i.X0)(e));
      }
      function o(e, t, n, a) {
        return Object.values(t).filter((e) => (0, i.GJ)(e) || l(e, a, n));
      }
    },
    90372: function (e, t, n) {
      "use strict";
      var a = n(192379),
        i = n(451478),
        r = n(830917),
        l = n(985518);
      t.Z = {
        useForumChannelSeenManager: function (e) {
          let { guildId: t, channelId: n } = e,
            s = a.useRef(null),
            o = (0, r.UU)(),
            c = !i.Z.isFocused(o);
          return (
            a.useLayoutEffect(
              () => (
                null == s.current &&
                  ((s.current = new l.ZP({
                    guildId: t,
                    channelId: n,
                    isPaused: c,
                    windowId: o,
                  })),
                  s.current.initialize()),
                () => {
                  var e;
                  null === (e = s.current) || void 0 === e || e.terminate(),
                    (s.current = null);
                }
              ),
              [n, t, c, o],
            ),
            s.current
          );
        },
      };
    },
    259637: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return g;
        },
      });
      var a = n(200651);
      n(192379);
      var i = n(658722),
        r = n.n(i),
        l = n(442837),
        s = n(481060),
        o = n(596454),
        c = n(339085),
        d = n(456269),
        u = n(388032),
        m = n(158804);
      let h = (e) => {
        let { tag: t } = e,
          { id: n, name: i, emojiId: r, emojiName: d } = t,
          u = (0, l.e7)([c.ZP], () =>
            null != r ? c.ZP.getUsableCustomEmojiById(r) : null,
          ),
          h = null != r || null != d;
        return (0, a.jsx)(
          s.ComboboxItem,
          {
            value: n,
            children: (0, a.jsx)(s.ComboboxItem.Label, {
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
                    : (0, a.jsx)(s.TagIcon, {
                        size: "md",
                        color: "currentColor",
                        className: m.__invalid_emoji,
                      }),
                  (0, a.jsx)(s.Text, {
                    variant: "text-md/semibold",
                    color: "header-secondary",
                    children: i,
                  }),
                ],
              }),
            }),
          },
          n,
        );
      };
      function g(e) {
        let {
            parentChannel: t,
            appliedTags: n,
            maxTagsApplied: i,
            onSelectTag: l,
            onClose: o,
          } = e,
          c = (0, d.Vm)(t),
          m = (e, t) =>
            t.filter((t) => r()(e.toLowerCase(), t.name.toLowerCase()));
        return (0, a.jsx)(s.ComboboxPopout, {
          showScrollbar: !0,
          value: n,
          onChange: (e) => {
            if (!i || !!n.has(e)) l(e), o();
          },
          placeholder: u.intl.string(u.t.MbhGm5),
          "aria-label": u.intl.string(u.t.MbhGm5),
          children: (e) => m(e, c).map((e) => (0, a.jsx)(h, { tag: e }, e.id)),
        });
      }
    },
    434878: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return eu;
          },
        }),
        n(47120);
      var a = n(200651),
        i = n(192379),
        r = n(120356),
        l = n.n(r),
        s = n(196434),
        o = n.n(s),
        c = n(232713),
        d = n(91192),
        u = n(924826),
        m = n(536895),
        h = n(313361),
        g = n(442837),
        x = n(704215),
        f = n(481060),
        p = n(561472),
        C = n(393238),
        v = n(607070),
        b = n(933557),
        j = n(243778),
        _ = n(71619),
        I = n(898188),
        T = n(41776),
        N = n(256413),
        S = n(292853),
        w = n(359110),
        y = n(344185),
        E = n(235449),
        R = n(665906),
        P = n(488131),
        M = n(433355),
        k = n(592125),
        Z = n(703558),
        A = n(607744),
        L = n(117530),
        F = n(451478),
        O = n(459273),
        B = n(961675),
        z = n(883429),
        H = n(238349),
        D = n(109434),
        U = n(456269),
        V = n(90372),
        G = n(985518),
        W = n(228392),
        q = n(355589),
        X = n(542581),
        K = n(639184),
        J = n(404616),
        Y = n(470623),
        Q = n(749913),
        $ = n(219664),
        ee = n(895932),
        et = n(479099),
        en = n(510060),
        ea = n(276357),
        ei = n(81490),
        er = n(482062),
        el = n(260503),
        es = n(981631),
        eo = n(124368),
        ec = n(388032),
        ed = n(444087);
      function eu(e) {
        let { channel: t, guild: n, sidebarState: i } = e;
        return (0, a.jsx)(
          Y.oL,
          {
            channel: t,
            children: (0, a.jsx)(ev, { channel: t, guild: n, sidebarState: i }),
          },
          t.id,
        );
      }
      let em = new en.Me({ minWidth: 320, maxWidth: 450, gap: 16 });
      function eh(e) {
        return "forum-grid-header-section-".concat(e);
      }
      let eg = (e, t, n) => (0 === e ? 0 : (0, en.KW)(n));
      function ex(e) {
        let { itemRole: t, coords: n, section: i } = e;
        return (0, a.jsx)(
          "div",
          {
            className: l()(ed.card, ed.archivedDividerRow, ed.columnsSpan),
            style: n,
            "data-item-role": t,
            children: (0, a.jsx)("div", {
              className: ed.emptyMainCard,
              children: (0, a.jsx)(f.Heading, {
                variant: "eyebrow",
                className: ed.archivedDivider,
                id: eh(i),
                children: ec.intl.string(ec.t["3+LO19"]),
              }),
            }),
          },
          "section-divider",
        );
      }
      function ef(e) {
        let {
          section: t,
          coords: n,
          key: i,
          isShowingSearchResult: r,
          hasActiveThreads: l,
        } = e;
        return () =>
          2 === t && !r && l
            ? (0, a.jsx)(
                ex,
                {
                  section: t,
                  coords: null == n ? void 0 : { ...n, position: "absolute" },
                  itemRole: "section",
                },
                i,
              )
            : null;
      }
      function ep(e, t) {
        return "card-".concat(e, "-").concat(t);
      }
      function eC(e) {
        if ("string" == typeof e) {
          let t = e.match(/card-{\d+}-({\d+})$/);
          return null == t ? null : t[1];
        }
        return null;
      }
      function ev(e) {
        let { channel: t, sidebarState: n } = e,
          {
            editorHeight: r,
            editorAdditionRowHeight: s,
            listViewCardHeights: o,
            formOpen: u,
          } = (0, Y.xH)((e) => {
            let {
              editorHeight: t,
              editorAdditionRowHeight: n,
              listViewCardHeights: a,
              formOpen: i,
              cardHeightVersion: r,
            } = e;
            return {
              editorHeight: t,
              editorAdditionRowHeight: n,
              listViewCardHeights: a,
              formOpen: i,
              cardHeightVersion: r,
            };
          }, c.X),
          {
            activeThreadIds: m,
            archivedThreadIds: x,
            searchResults: C,
            canLoadMore: b,
            loadMore: j,
            activeThreadsLoading: _,
            archivedThreadsLoading: I,
            loading: R,
            isSearchLoading: A,
            layoutType: L,
          } = (function (e) {
            let { sortOrder: t, tagFilter: n, layoutType: a } = (0, D.H)(e.id),
              i = (0, U.vP)({
                channel: e,
                sortOrder: t,
                tagFilter: n,
                shouldAutomaticallyAck: !0,
              }),
              r = (0, g.e7)([y.Z, T.Z], () => {
                let t = y.Z.hasLoaded(e.guild_id),
                  n = T.Z.isLurking(e.guild_id);
                return !t && !n;
              }),
              {
                threadIds: l,
                canLoadMore: s,
                loadMore: o,
                loading: c,
              } = (0, E.qQ)(e, t, n),
              { searchResults: d, isSearchLoading: u } = (0, U.XZ)({
                channelId: e.id,
              });
            return (
              (0, U.ES)(e, t, n),
              {
                activeThreadIds: i,
                archivedThreadIds: l,
                searchResults: d,
                canLoadMore: s,
                loadMore: o,
                loading: r || c || u,
                archivedThreadsLoading: c,
                activeThreadsLoading: r,
                isSearchLoading: u,
                layoutType: a,
              }
            );
          })(t),
          F = m.length > 0,
          O = F || x.length > 0,
          H = (0, N.Z)(t),
          { tagFilter: X } = (0, D.H)(t.id);
        (0, U.ku)(t, X, u);
        let K = (0, U.jR)(t),
          Q = (0, U.eZ)(t),
          ee = i.useRef(null),
          { observePostVisibilityAnalytics: et } = (function (e) {
            let { guildId: t, channelId: n, scrollerRef: a } = e;
            V.Z.useForumChannelSeenManager({ guildId: t, channelId: n });
            let r = i.useRef(null),
              l = i.useCallback((e, t) => {
                for (let n of t) {
                  let t = n.target.dataset.itemId;
                  if (null == t) return;
                  let a = Date.now();
                  n.intersectionRatio >= 0.5
                    ? (0, G.rj)(e, t, a)
                    : (0, G.Ct)(e, t, a);
                }
              }, []);
            return (
              i.useEffect(() => {
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
                observePostVisibilityAnalytics: i.useCallback(
                  (e, t) => {
                    var a;
                    if (null == e) {
                      (0, G.Ct)(n, t, Date.now());
                      return;
                    }
                    null === (a = r.current) || void 0 === a || a.observe(e);
                  },
                  [n],
                ),
              }
            );
          })({ scrollerRef: ee, channelId: t.id, guildId: t.guild_id }),
          ea = L === h.X.GRID,
          eu = null != C,
          ex = i.useRef(null),
          { containerRef: ev, containerWidth: eI } = (0, ei.Z)();
        i.useEffect(
          () => () => {
            null != t.id && z.Z.clearForumSearch(t.id);
          },
          [t.id],
        );
        let { columns: eN } = i.useMemo(
            () => (ea ? em.getRenderOptions(eI) : en.eU),
            [ea, eI],
          ),
          eS = i.useMemo(
            () => (R ? Math.round((window.innerHeight - 200) / 118) : 0),
            [R],
          ),
          ew = i.useMemo(() => {
            let e =
              Math.ceil(window.innerHeight / (0, en.KW)(em.getWidth(eI))) * eN;
            return _ ? e : 0;
          }, [eI, eN, _]),
          ey = i.useMemo(() => {
            let e =
              Math.ceil(window.innerHeight / (0, en.KW)(em.getWidth(eI))) * eN;
            return I ? e : 0;
          }, [eI, eN, I]),
          eE = i.useMemo(() => {
            let e =
              Math.ceil(window.innerHeight / (0, en.KW)(em.getWidth(eI))) * eN;
            return A && eu ? e : 0;
          }, [eI, eN, A, eu]),
          eR = i.useMemo(() => {
            if (ea) {
              if (!K && eu) return [1, 0];
              if (!Q) return [1, m.length + ew, 0];
              else if (eu) return [1, C.length + eE, 0];
              else return [1, m.length + ew, x.length + ey];
            }
            if (!K && eu) return [1, 1];
            if (!Q) return [1, m.length, 1];
            else if (eu) return [1, C.length, 0, eS];
            else return [1, m.length, x.length, eS];
          }, [ea, eu, m.length, x.length, K, Q, eS, C, ew, ey, eE]),
          eP = i.useMemo(() => {
            if (!K && eu) return [[], []];
            if (!Q) return [[], m, []];
            if (eu) return [[], C, [], []];
            else return [[], m, x, []];
          }, [eu, K, Q, C, m, x]),
          eM = i.useCallback(
            (e, n) => {
              (0, W.B5)({
                guildId: t.guild_id,
                channelId: t.id,
                postId: e.id,
                location: {
                  page: es.ZY5.GUILD_CHANNEL,
                  section: es.jXE.FORUM_CHANNEL_POST,
                },
              }),
                n
                  ? (0, w.ad)(e, { source: eo.on.BROWSER })
                  : ((ex.current = e.id), (0, P.ok)(e));
            },
            [t.guild_id, t.id, ex],
          ),
          [ek, eZ] = i.useState(r + s - 24),
          eA = i.useCallback(
            (e, n, i) =>
              0 === e
                ? (0, a.jsx)(
                    eT,
                    {
                      channel: t,
                      isEmpty: !F,
                      isSearchLoading: A,
                      numResults: null == C ? void 0 : C.length,
                      coords: n,
                      onHeightChange: eZ,
                      children:
                        !R &&
                        (0, a.jsx)(q.Z, { channel: t, hasAnyThread: O }, t.id),
                    },
                    "forum-channel-header",
                  )
                : 2 !== e || Q
                  ? 1 === e && eu && !K
                    ? (0, a.jsx)(
                        ej,
                        { channel: t, coords: n },
                        "archive-or-search-result",
                      )
                    : i()
                  : (0, a.jsx)(
                      eb,
                      { channel: t, coords: n },
                      "archived-missing-reading-history-perm",
                    ),
            [eu, Q, C, K, t, F, A, R, O],
          ),
          eL = (0, g.e7)([B.Z], () => B.Z.hasHidden(t.id)),
          eF = { editorHeight: r, isGridLayout: ea },
          eO = i.useRef(eF);
        i.useEffect(() => {
          eO.current = eF;
        }),
          i.useEffect(() => {
            var e, t;
            let { editorHeight: n, isGridLayout: a } = eO.current,
              i = a ? eV : ee,
              r =
                null === (e = i.current) || void 0 === e
                  ? void 0
                  : e.getScrollerState();
            null != r &&
              !eL &&
              r.scrollTop > n &&
              (null === (t = i.current) ||
                void 0 === t ||
                t.scrollTo({ to: 0 }));
          }, [eL]);
        let {
            updateListScrollerRef: eB,
            renderListSection: ez,
            renderListItem: eH,
            getListSectionHeight: eD,
            getListItemHeight: eU,
          } = (function (e) {
            let {
                listRef: t,
                hasActiveThreads: n,
                threadIdsBySection: r,
                listViewCardHeights: s,
                editorHeight: o,
                editorAdditionRowHeight: c,
                renderSectionOrItem: d,
                goToThread: u,
                observePostVisibilityAnalytics: m,
                isShowingSearchResult: h,
              } = e,
              g = i.useCallback(
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
              x = i.useCallback(
                (e) =>
                  ef({
                    section: e.section,
                    isShowingSearchResult: h,
                    hasActiveThreads: n,
                  })(),
                [n, h],
              ),
              p = i.useCallback(
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
                                ed.loadingCard,
                                ed["loadingCard-".concat(e.row % 3)],
                              ),
                            },
                            "loading-".concat(e.row),
                          );
                    let t = r[e.section][e.row];
                    return (0, a.jsx)(
                      "li",
                      {
                        className: ed.card,
                        "data-item-role": "item",
                        children: (0, a.jsx)(f.HeadingLevel, {
                          children: (0, a.jsx)(J.ZP, {
                            className: ed.mainCard,
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
              C = i.useCallback(
                (e, t) => {
                  if (0 === e) return o + c;
                  let n = s[r[e][t]];
                  return null == n ? 104 : n + 8;
                },
                [r, s, o, c],
              );
            return {
              updateListScrollerRef: g,
              renderListSection: x,
              renderListItem: p,
              getListSectionHeight: i.useCallback(
                (e) => (2 === e && n ? 40 : 0),
                [n],
              ),
              getListItemHeight: C,
            };
          })({
            listRef: ee,
            hasActiveThreads: F,
            threadIdsBySection: eP,
            listViewCardHeights: o,
            editorHeight: r,
            editorAdditionRowHeight: s,
            renderSectionOrItem: eA,
            goToThread: eM,
            observePostVisibilityAnalytics: et,
            isShowingSearchResult: eu,
          }),
          eV = i.useRef(null),
          {
            updateMasonryListScrollerRef: eG,
            getItemKey: eW,
            renderGridSection: eq,
            renderGridItem: eX,
            getGridSectionHeight: eK,
            getSectionProps: eJ,
            handleGridFocus: eY,
          } = (function (e) {
            let {
                masonryListScrollerRef: t,
                threadIdsBySection: n,
                goToThread: r,
                renderSectionOrItem: s,
                hasActiveThreads: o,
                isShowingSearchResult: c,
                canSearchForumPosts: d,
                canViewArchivedPosts: u,
                observePostVisibilityAnalytics: m,
                focusedThreadId: h,
                headerHeight: g,
              } = e,
              x = i.useRef(null),
              f = i.useCallback(
                (e) => {
                  (t.current = e),
                    (x.current = null == e ? void 0 : e.getScrollerNode());
                },
                [t],
              ),
              p = i.useCallback(
                (e, n) => {
                  let { current: a } = t;
                  if (null == a) return;
                  let i = document.querySelector(e);
                  if (null == i) return;
                  let r = a.getCoordsMap()[n],
                    l = null != r ? r.height + 20 : 200;
                  a.scrollIntoViewNode({
                    node: i,
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
              C = i.useCallback(
                (e) => {
                  let t = eC(e);
                  if (null == t) return;
                  let n = k.Z.getChannel(t);
                  null != n && r(n, !0);
                },
                [r],
              ),
              v = i.useCallback(
                function (e) {
                  let t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 0;
                  if (0 === n[e].length)
                    return "section-".concat(e, "-").concat(t);
                  {
                    let a = n[e][t];
                    return null == a ? ep(e, t) : ep(e, a);
                  }
                },
                [n],
              ),
              b = i.useCallback(
                (e, t, n) =>
                  s(
                    e,
                    t,
                    ef({
                      section: e,
                      coords: t,
                      key: n,
                      isShowingSearchResult: c,
                      hasActiveThreads: o,
                    }),
                  ),
                [s, o, c],
              ),
              j = i.useCallback(
                (e) =>
                  0 === e
                    ? {}
                    : { role: "grid", "aria-labelledby": "#".concat(eh(e)) },
                [],
              ),
              _ = i.useCallback(
                (e, t, i, s, o) => {
                  if (0 === e) return null;
                  let c = n[e][t];
                  return null != c
                    ? (0, a.jsx)(
                        $.Z,
                        {
                          id: "".concat(s),
                          threadId: c,
                          className: l()(ed.card, ed.mainCard),
                          goToThread: r,
                          observePostVisibilityAnalytics: m,
                          coords: i,
                          gridCoords: o.coordinates[s],
                          gridSectionBoundaries: o.boundaries,
                        },
                        s,
                      )
                    : __OVERLAY__
                      ? null
                      : (0, a.jsx)(
                          "div",
                          {
                            style: { ...i },
                            "data-item-role": "item",
                            className: l()(
                              ed.loadingCard,
                              ed["loadingCard-".concat(t % 3)],
                            ),
                          },
                          s,
                        );
                },
                [n, r, m],
              );
            return {
              updateMasonryListScrollerRef: f,
              masonryListContainerRef: x,
              focusedThreadId: h,
              handleGridFocus: p,
              handleGridSelect: C,
              getItemKey: v,
              renderGridSection: b,
              renderGridItem: _,
              getSectionProps: j,
              getGridSectionHeight: i.useCallback(
                (e) =>
                  0 === e
                    ? g - 8 - 24
                    : 2 === e
                      ? o || !u
                        ? 40
                        : 0
                      : 1 === e && c && !d
                        ? 40
                        : 0,
                [g, c, d, o, u],
              ),
            };
          })({
            masonryListScrollerRef: eV,
            threadIdsBySection: eP,
            goToThread: eM,
            renderSectionOrItem: eA,
            hasActiveThreads: F,
            isShowingSearchResult: eu,
            canSearchForumPosts: K,
            canViewArchivedPosts: Q,
            observePostVisibilityAnalytics: et,
            focusedThreadId: ex,
            headerHeight: ek,
          });
        !(function (e) {
          let {
            masonryListScrollerRef: t,
            containerWidth: n,
            isGridLayout: a,
            threadIdsBySection: r,
            focusedThreadId: l,
            parentId: s,
          } = e;
          i.useEffect(() => {
            if (a) {
              let e = setTimeout(() => {
                if (null == t.current || null == l.current) return;
                let e = l.current;
                if ("string" != typeof e) return;
                if (null == M.ZP.getSidebarState(s)) {
                  l.current = null;
                  return;
                }
                let n = r.findIndex((t) => t.find((t) => t === e)),
                  a = t.current.getCoordsMap(),
                  i = a["__section__".concat(n)],
                  o = a[ep(n, e)];
                null != i &&
                  null != o &&
                  t.current.scrollIntoViewRect({
                    start: i.top + o.top - 100,
                    end: i.top + o.top + o.height + 50,
                  });
              }, 500);
              return () => clearTimeout(e);
            }
          }, [s, n, a, r, l, t]);
        })({
          masonryListScrollerRef: eV,
          containerWidth: eI,
          isGridLayout: ea,
          threadIdsBySection: eP,
          parentId: t.id,
          focusedThreadId: ex,
        });
        let eQ = i.useCallback(() => {
            var e, n;
            if (eu) return;
            let a = ea
              ? null === (e = eV.current) || void 0 === e
                ? void 0
                : e.getScrollerState()
              : null === (n = ee.current) || void 0 === n
                ? void 0
                : n.getScrollerState();
            if (null == a) return;
            (0, W.ab)({ guildId: t.guild_id, channelId: t.id });
            let i = a.scrollTop + a.offsetHeight,
              r = a.scrollHeight - i;
            r < (ea ? Math.max(200, (0, en.KW)(eI)) : 200) && j();
          }, [eu, ea, t.guild_id, t.id, eI, j]),
          e$ = (0, g.e7)([v.Z], () => v.Z.keyboardModeEnabled),
          e0 = (0, er.ZP)({
            id: "forum-grid-view",
            isEnabled: ea && e$,
            setFocus: eY,
          }),
          e1 = (0, el.Z)({
            listRef: ee,
            padding: 96,
            isEnabled: !ea && e$,
            channel: t,
          }),
          { ref: e6, ...e9 } = e0.containerProps,
          e2 = M.ZP.getSidebarState(t.id),
          e5 = null != e2 && (0, M.D5)(e2),
          e3 =
            (0, g.e7)([M.ZP], () => M.ZP.getSection(t.id)) === es.ULH.MEMBERS;
        return (0, a.jsx)("div", {
          className: ed.container,
          ref: ev,
          "data-member-list-open": e3,
          children: (0, a.jsx)(f.FocusJumpSection, {
            children: (e) =>
              (0, a.jsxs)(a.Fragment, {
                children: [
                  u &&
                    (0, a.jsx)(p.Z, {
                      channel: t,
                      draftType: Z.d.FirstThreadMessage,
                      className: ed.uploadArea,
                      style: {
                        right:
                          e5 && (null == n ? void 0 : n.isThreadSidebarFloating)
                            ? n.threadSidebarWidth
                            : 0,
                      },
                    }),
                  (0, a.jsx)(e_, { channel: t }),
                  (0, a.jsx)(f.HiddenVisually, {
                    children: (0, a.jsx)(f.H, {
                      children: ec.intl.string(ec.t.B2panJ),
                    }),
                  }),
                  H
                    ? (0, a.jsx)("div", {
                        className: ed.optInNotice,
                        children: (0, a.jsx)(S.Z, { channel: t }),
                      })
                    : null,
                  ea
                    ? (0, a.jsx)(er.KT, {
                        navigator: e0,
                        children: (0, a.jsx)(
                          f.MasonryList,
                          {
                            ref: (e) => {
                              var t;
                              (e6.current =
                                null !==
                                  (t =
                                    null == e ? void 0 : e.getScrollerNode()) &&
                                void 0 !== t
                                  ? t
                                  : null),
                                eG(e);
                            },
                            itemGutter: 16,
                            padding: 24,
                            className: ed.grid,
                            columns: eN,
                            sections: eR,
                            getItemKey: eW,
                            getSectionHeight: eK,
                            getItemHeight: eg,
                            renderSection: eq,
                            renderItem: eX,
                            getSectionProps: eJ,
                            onScroll: b ? eQ : void 0,
                            chunkSize: 350,
                            ...e9,
                            ...e,
                          },
                          L,
                        ),
                      })
                    : (0, a.jsx)(d.bG, {
                        navigator: e1,
                        children: (0, a.jsx)(d.SJ, {
                          children: (t) => {
                            let { ref: n, ...i } = t;
                            return (0, a.jsx)(
                              f.ListAuto,
                              {
                                ref: eB(n),
                                className: ed.list,
                                sections: eR,
                                sectionHeight: eD,
                                rowHeight: eU,
                                renderRow: eH,
                                renderSection: ez,
                                chunkSize: 150,
                                onScroll: b ? eQ : void 0,
                                paddingBottom: 24,
                                ...i,
                                ...e,
                                innerRole: "list",
                              },
                              L,
                            );
                          },
                        }),
                      }),
                ],
              }),
          }),
        });
      }
      function eb(e) {
        let { channel: t, coords: n } = e,
          i = (0, b.ZP)(t);
        return (0, a.jsx)("div", {
          className: l()(ed.missingReadHistoryPermission, ed.columnsSpan),
          style: n,
          children: (0, a.jsx)(f.Text, {
            color: "text-muted",
            variant: "text-md/normal",
            children: ec.intl.format(ec.t.TycmzM, { channelName: i }),
          }),
        });
      }
      function ej(e) {
        let { channel: t, coords: n } = e,
          i = (0, b.ZP)(t);
        return (0, a.jsx)("div", {
          className: l()(ed.missingReadHistoryPermission, ed.columnsSpan),
          style: n,
          children: (0, a.jsx)(f.Text, {
            color: "text-muted",
            variant: "text-md/normal",
            children: ec.intl.format(ec.t.OWZJdX, { channelName: i }),
          }),
        });
      }
      function e_(e) {
        let { channel: t } = e,
          n = i.useCallback(() => {
            z.Z.resort(t.id);
          }, [t]),
          r = (0, g.e7)([H.Z], () => H.Z.getNewThreadCount());
        return 0 === r
          ? null
          : (0, a.jsx)(f.Clickable, {
              className: ed.newPostsButton,
              onClick: n,
              children: (0, a.jsx)(f.Text, {
                color: "text-brand",
                variant: "text-md/medium",
                children: ec.intl.format(ec.t.ue1qfH, { count: r }),
              }),
            });
      }
      function eI() {
        return Promise.resolve();
      }
      function eT(e) {
        var t, n, r;
        let {
            channel: s,
            isEmpty: p,
            isSearchLoading: b,
            numResults: T,
            children: N,
            coords: S,
            onHeightChange: w,
          } = e,
          {
            name: y,
            formOpen: E,
            titleFocused: P,
            hasClickedForm: M,
            textAreaState: k,
            onboardingExpanded: B,
            setEditorAdditionRowHeight: H,
          } = (0, Y.xH)((e) => {
            let {
              name: t,
              formOpen: n,
              titleFocused: a,
              hasClickedForm: i,
              textAreaState: r,
              onboardingExpanded: l,
              setEditorAdditionRowHeight: s,
            } = e;
            return {
              name: t,
              formOpen: n,
              titleFocused: a,
              hasClickedForm: i,
              textAreaState: r,
              onboardingExpanded: l,
              setEditorAdditionRowHeight: s,
            };
          }, c.X),
          { tagFilter: V, layoutType: G } = (0, D.H)(s.id),
          q = (0, Y.AF)(),
          J = (0, D.v)(),
          $ = (0, g.e7)([A.Z], () => A.Z.canChatInGuild(s.guild_id)),
          ee = (0, U.r_)(s),
          en = (0, R.cD)(s),
          [ei, er] = i.useState(en),
          [, el] = (0, _.AB)(
            null !== (r = s.getGuildId()) && void 0 !== r ? r : void 0,
          ),
          eo = $ && (en || (ei && el)),
          eu = s.isMediaChannel();
        i.useEffect(() => {
          en && er(!0);
        }, [en]);
        let { ref: em, height: eh } = (0, C.Z)();
        i.useEffect(() => {
          null != eh && w(eh);
        }, [w, eh]);
        let eg = i.useCallback(() => {
          o()(() => {
            null != em.current &&
              q.getState().setEditorHeight(em.current.offsetHeight);
          });
        }, [em, q]);
        i.useLayoutEffect(eg, [eg, p, eo, B]),
          (0, O.yp)({ event: es.CkL.REMEASURE_TARGET, handler: eg });
        let ex = (0, g.e7)([L.Z], () =>
            L.Z.getUploads(s.id, Z.d.FirstThreadMessage),
          ),
          ef = (0, U.ql)(s),
          ep = i.useRef(null),
          eC = i.useRef(null),
          [ev, eb] = i.useState(0),
          { width: ej } = (0, g.e7)([F.Z], () => F.Z.windowSize()),
          e_ =
            null === (n = ep.current) || void 0 === n
              ? void 0
              : null === (t = n.getBoundingClientRect()) || void 0 === t
                ? void 0
                : t.width,
          eT = i.useRef(null);
        i.useLayoutEffect(() => {
          var e;
          let t = eC.current,
            n =
              null == t
                ? void 0
                : null === (e = t.children) || void 0 === e
                  ? void 0
                  : e[0];
          if (null != ep.current && null != n && null != n.children) {
            let { left: e, top: t } = ep.current.getBoundingClientRect(),
              a = 0;
            for (let i of n.children) {
              let { right: n, top: r, height: l } = i.getBoundingClientRect();
              if (r - t > l) break;
              n - e > a && (a = n - e);
            }
            eb(a);
          }
        }, [s.availableTags, ej, e_, V]);
        let eS = y.length > 0 && !E && (b || null != T),
          ew =
            !__OVERLAY__ &&
            !M &&
            !E &&
            P &&
            (0 === k.textValue.trim().length || k.textValue.trim() === ef) &&
            0 === ex.length;
        i.useLayoutEffect(() => {
          let e = eS || ew;
          if (!e) return H(0);
          null != eT.current && H(e ? eT.current.clientHeight : 0);
        }, [H, eS, ew, eT]);
        let ey = (e) => {
            (0, W.e7)({
              guildId: s.guild_id,
              channelId: s.id,
              tagId: e,
              filterTagIds: Array.from(V),
              added: !V.has(e),
              location: {
                page: es.ZY5.GUILD_CHANNEL,
                section: es.jXE.FORUM_CHANNEL_HEADER,
                object: es.qAy.CHANNEL_TAG,
              },
            }),
              J.getState().toggleTagFilter(s.id, e);
          },
          eE = (0, u.ZP)({
            id: "".concat(s.id, "-tags-navigator"),
            isEnabled: !0,
            wrap: !0,
            scrollToStart: eI,
            scrollToEnd: eI,
            orientation: m.hy.HORIZONTAL,
          }),
          { role: eR, onFocus: eP, ...eM } = (0, d.JA)("forum-channel-header"),
          ek = i.useRef(null),
          eZ = (function () {
            let e = i.useRef(!1),
              t = (0, g.e7)([v.Z], () => v.Z.keyboardModeEnabled),
              n = i.useCallback(
                (t) => {
                  e.current = t.shiftKey;
                },
                [e],
              );
            return (
              i.useLayoutEffect(
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
          eA = i.useCallback(
            (e) => {
              if ((eP(), e.target === em.current && !eZ.current)) {
                var t;
                null === (t = ek.current) || void 0 === t || t.focus();
              }
            },
            [eP, em, eZ],
          );
        return (0, a.jsx)(
          "div",
          {
            className: l()(ed.card, ed.headerRow, ed.columnsSpan),
            ref: em,
            onFocus: eA,
            ...eM,
            style: {
              ...S,
              position: G === h.X.GRID ? "absolute" : "static",
              height: "auto",
            },
            children: (0, a.jsxs)(O.I3, {
              children: [
                null != s.guild_id
                  ? (0, a.jsx)(I.Z, {
                      className: l()(ed.newMemberBanner, {
                        [ed.gridViewBanner]: G === h.X.GRID,
                      }),
                      guildId: s.guild_id,
                      channel: s,
                    })
                  : null,
                (0, a.jsx)("div", {
                  className: l()(ed.mainCard, ed.header, {
                    [ed.headerWithMatchingPosts]: eS || ew,
                  }),
                  children: (0, a.jsx)(Q.Z, {
                    parentChannel: s,
                    onChange: eg,
                    isSearchLoading: b,
                    canCreatePost: eo,
                    inputRef: ek,
                  }),
                }),
                (eS || ew) &&
                  (0, a.jsxs)("div", {
                    className: ed.matchingPostsRow,
                    ref: eT,
                    children: [
                      eS &&
                        (0, a.jsxs)("div", {
                          className: ed.matchingPosts,
                          children: [
                            (0, a.jsx)(f.Heading, {
                              variant: "text-xs/normal",
                              color: "text-normal",
                              children: b
                                ? ec.intl.string(ec.t["/9i3qq"])
                                : 0 === T
                                  ? ec.intl.string(ec.t.DbgHxs)
                                  : ec.intl.formatToPlainString(
                                      ec.t["tBz/8f"],
                                      { numPosts: T, query: y },
                                    ),
                            }),
                            !b &&
                              (0, a.jsx)(f.Clickable, {
                                onClick: () => {
                                  (0, W.zI)({
                                    guildId: s.guild_id,
                                    channelId: s.id,
                                  }),
                                    z.Z.clearForumSearch(s.id),
                                    q.getState().setName("");
                                },
                                children: (0, a.jsx)(f.Text, {
                                  variant: "text-xs/semibold",
                                  color: "text-brand",
                                  className: ed.clear,
                                  children: ec.intl.string(ec.t.VkKicX),
                                }),
                              }),
                          ],
                        }),
                      (0, a.jsx)("div", { className: ed.tagsSpacer }),
                      ew
                        ? eo
                          ? (0, a.jsxs)("div", {
                              className: ed.startPostHelp,
                              children: [
                                (0, a.jsx)(f.KeyCombo, {
                                  shortcut: "SHIFT",
                                  className: ed.keyboardShortcut,
                                }),
                                (0, a.jsx)(f.Text, {
                                  variant: "text-xs/normal",
                                  color: "text-normal",
                                  children: "+",
                                }),
                                (0, a.jsx)(f.KeyCombo, {
                                  shortcut: "ENTER",
                                  className: ed.keyboardShortcut,
                                }),
                                (0, a.jsx)(f.Text, {
                                  variant: "text-xs/normal",
                                  color: "text-normal",
                                  children: ec.intl.string(ec.t.ZvJ0ys),
                                }),
                              ],
                            })
                          : (0, a.jsxs)("div", {
                              className: ed.startPostHelp,
                              children: [
                                (0, a.jsx)(f.CircleWarningIcon, {
                                  size: "custom",
                                  color: "currentColor",
                                  height: 14,
                                  width: 14,
                                  className: ed.warnIcon,
                                }),
                                (0, a.jsx)(f.Text, {
                                  variant: "text-xs/normal",
                                  color: "text-normal",
                                  children: ec.intl.string(ec.t.iyzwnJ),
                                }),
                              ],
                            })
                        : null,
                    ],
                  }),
                (0, a.jsx)(X.Z, { channel: s, onChange: eg }),
                (0, a.jsxs)("div", {
                  className: ed.tagsContainer,
                  ref: ep,
                  children: [
                    (0, a.jsx)(eN, { channel: s }),
                    s.availableTags.length > 0
                      ? (0, a.jsxs)(a.Fragment, {
                          children: [
                            (0, a.jsx)("div", { className: ed.divider }),
                            (0, a.jsx)("div", {
                              className: ed.tagList,
                              ref: eC,
                              children: (0, a.jsx)(d.bG, {
                                navigator: eE,
                                children: (0, a.jsx)(d.SJ, {
                                  children: (e) => {
                                    let { ref: t, ...n } = e;
                                    return (0, a.jsx)("div", {
                                      className: ed.tagListInner,
                                      ref: t,
                                      ...n,
                                      children: s.availableTags.map((e) =>
                                        (0, a.jsx)(
                                          et.Z,
                                          {
                                            className: ed.tag,
                                            tag: e,
                                            onClick: () => ey(e.id),
                                            selected: V.has(e.id),
                                          },
                                          e.id,
                                        ),
                                      ),
                                    });
                                  },
                                }),
                              }),
                            }),
                            (0, a.jsx)(f.Popout, {
                              renderPopout: (e) => {
                                let { closePopout: t, setPopoutRef: n } = e;
                                return (0, a.jsx)(ea.Z, {
                                  channel: s,
                                  closePopout: t,
                                  setPopoutRef: n,
                                });
                              },
                              position: "bottom",
                              align: "right",
                              children: (e, t) => {
                                let { isShown: n } = t;
                                return (0, a.jsxs)(f.Button, {
                                  ...e,
                                  size: f.Button.Sizes.MIN,
                                  color: f.Button.Colors.CUSTOM,
                                  className: l()(ed.tagsButton, {
                                    [ed.tagsButtonWithCount]: V.size > 0,
                                  }),
                                  style: { left: ev },
                                  innerClassName: ed.tagsButtonInner,
                                  "aria-label":
                                    V.size > 0
                                      ? ec.intl.string(ec.t.IkpM1d)
                                      : ec.intl.string(ec.t["9vKK/P"]),
                                  children: [
                                    V.size > 0
                                      ? (0, a.jsx)("div", {
                                          className: ed.countContainer,
                                          children: (0, a.jsx)(f.Text, {
                                            className: ed.countText,
                                            color: "none",
                                            variant: "text-xs/medium",
                                            children: V.size,
                                          }),
                                        })
                                      : ec.intl.string(ec.t.fZ8hzs),
                                    n
                                      ? (0, a.jsx)(f.ChevronSmallUpIcon, {
                                          size: "custom",
                                          color: "currentColor",
                                          width: 20,
                                        })
                                      : (0, a.jsx)(f.ChevronSmallDownIcon, {
                                          size: "custom",
                                          color: "currentColor",
                                          width: 20,
                                        }),
                                  ],
                                });
                              },
                            }),
                            (0, a.jsxs)(f.Button, {
                              size: f.Button.Sizes.MIN,
                              color: f.Button.Colors.CUSTOM,
                              className: l()(
                                ed.tagsButton,
                                ed.tagsButtonPlaceholder,
                              ),
                              innerClassName: ed.tagsButtonInner,
                              "aria-label": ec.intl.string(ec.t.IkpM1d),
                              children: [
                                V.size > 0
                                  ? (0, a.jsx)("div", {
                                      className: ed.countContainer,
                                      children: (0, a.jsx)(f.Text, {
                                        className: ed.countText,
                                        color: "none",
                                        variant: "text-xs/medium",
                                        children: V.size,
                                      }),
                                    })
                                  : null,
                                (0, a.jsx)(f.ChevronSmallUpIcon, {
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
                N,
                ee &&
                  !eu &&
                  (0, a.jsx)(j.ZP, {
                    contentTypes: [x.z.FORUM_CHANNEL_HELPER_CARD],
                    children: (e) => {
                      let { visibleContent: t, markAsDismissed: n } = e;
                      return t === x.z.FORUM_CHANNEL_HELPER_CARD
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
      function eN(e) {
        let { channel: t } = e,
          n = t.isMediaChannel();
        return (0, a.jsx)(f.Popout, {
          renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, a.jsx)(ee.Z, { channel: t, closePopout: n });
          },
          position: "bottom",
          align: "left",
          children: (e, t) => {
            let { isShown: i } = t;
            return (0, a.jsxs)(f.Button, {
              ...e,
              size: f.Button.Sizes.MIN,
              color: f.Button.Colors.CUSTOM,
              className: ed.sortDropdown,
              innerClassName: ed.sortDropdownInner,
              "aria-label": n
                ? ec.intl.string(ec.t.JxU0ws)
                : ec.intl.string(ec.t.xyYt8P),
              children: [
                (0, a.jsx)(f.ArrowsUpDownIcon, {
                  size: "xs",
                  color: "currentColor",
                }),
                (0, a.jsx)(f.Text, {
                  className: ed.sortDropdownText,
                  variant: "text-sm/medium",
                  color: "interactive-normal",
                  children: n
                    ? ec.intl.string(ec.t.JxU0ws)
                    : ec.intl.string(ec.t.xyYt8P),
                }),
                i
                  ? (0, a.jsx)(f.ChevronSmallUpIcon, {
                      size: "custom",
                      color: "currentColor",
                      width: 20,
                    })
                  : (0, a.jsx)(f.ChevronSmallDownIcon, {
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
      var a = n(200651),
        i = n(192379),
        r = n(120356),
        l = n.n(r),
        s = n(913527),
        o = n.n(s),
        c = n(642128),
        d = n(232713),
        u = n(831209),
        m = n(149765),
        h = n(442837),
        g = n(481060),
        x = n(787014),
        f = n(412899),
        p = n(493773),
        C = n(447003),
        v = n(605436),
        b = n(621516),
        j = n(430824),
        _ = n(186523),
        I = n(585483),
        T = n(70956),
        N = n(709054),
        S = n(961675),
        w = n(883429),
        y = n(993259),
        E = n(109434),
        R = n(456269),
        P = n(228392),
        M = n(432771),
        k = n(538366),
        Z = n(470623),
        A = n(710352),
        L = n(981631),
        F = n(388032),
        O = n(969818);
      function B(e, t, n) {
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
      let z = { width: 28, height: 28 },
        H = { width: 20, height: 20, borderRadius: 10 },
        D = (e) => {
          (0, P.e5)({ onboardingCTA: e });
        };
      class U {
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
          B(this, "currentIndex", 0),
            B(this, "steps", []),
            B(this, "completedSteps", 0);
        }
      }
      let V = (e) => {
          let t = null != e.topic && e.topic.length > 0;
          return {
            name: F.intl.string(F.t.UgJu1d),
            description: F.intl.string(F.t["3C6/Gx"]),
            clickHandler: () => {
              D(A.ZI.GUIDELINES), x.ZP.open(e.id, void 0, L.ZfP.TOPIC);
            },
            isDone: t,
          };
        },
        G = (e) => {
          let t = null != e.availableTags && e.availableTags.length > 0;
          return {
            name: F.intl.string(F.t.xiBFCg),
            description: F.intl.string(F.t.wCv4Oz),
            clickHandler: () => {
              D(A.ZI.TAGS),
                x.ZP.open(e.id),
                (0, g.openModalLazy)(async () => {
                  let { default: t } = await n
                    .e("21971")
                    .then(n.bind(n, 915774));
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
        W = (e) => {
          let t = null != e.defaultReactionEmoji;
          return {
            name: F.intl.string(F.t.QlyC9v),
            description: F.intl.string(F.t["+50LJi"]),
            clickHandler: () => {
              D(A.ZI.DEFAULT_REACTION),
                (0, g.openModalLazy)(async () => {
                  let { default: t } = await n
                    .e("80404")
                    .then(n.bind(n, 158586));
                  return (n) => (0, a.jsx)(t, { ...n, channel: e });
                });
            },
            isDone: t,
          };
        },
        q = (e, t, i) => ({
          name: F.intl.string(F.t["6A0O6+"]),
          description: t
            ? F.intl.string(F.t["8hI5vr"])
            : F.intl.format(F.t.ysxcAw, {
                onClick: (e) => {
                  null != i &&
                    (e.preventDefault(),
                    e.stopPropagation(),
                    (0, P.qz)(),
                    (0, g.openModalLazy)(async () => {
                      let { default: e } = await n
                        .e("18417")
                        .then(n.bind(n, 740696));
                      return (t) => (0, a.jsx)(e, { ...t, guildId: i });
                    }));
                },
              }),
          clickHandler: () => {
            D(A.ZI.CREATE_POST), I.S.dispatch(L.CkL.FOCUS_COMPOSER_TITLE);
          },
          isDone: e,
        }),
        X = (e, t) =>
          i.useCallback(() => (t(!1), w.Z.hideAdminOnboarding(e, !0)), [e, t]),
        K = (e) => {
          let t = N.default.extractTimestamp(e);
          return o()().isBefore(o()(t).add(o().duration(15, "days")));
        },
        J = (e, t, n) => {
          i.useEffect(() => {
            !e && n(!t);
          }, [e, n, t]);
        },
        Y = (e, t, n, a) => {
          let r = i.useRef(0);
          i.useEffect(
            () => (
              n || !e || t
                ? clearTimeout(r.current)
                : (r.current = setTimeout(() => {
                    a();
                  }, 60 * T.Z.Millis.SECOND)),
              () => clearTimeout(r.current)
            ),
            [e, t, a, n],
          );
        },
        Q = (e, t, n) => {
          (0, p.Z)(() => {
            e && t && n();
          });
        },
        $ = (e) => {
          let {
              isAllDone: t,
              isVisible: n,
              canManageChannel: a,
              guildId: r,
              channel: l,
            } = e,
            s = (0, h.e7)([j.Z], () => (null != r ? j.Z.getRoles(r) : void 0)),
            o = i.useCallback(() => {
              I.S.dispatch(L.CkL.REMEASURE_TARGET);
            }, []);
          i.useEffect(() => {
            o();
          }, [o, t, n, a, s, l.id, l.permissionOverwrites]);
        },
        ee = () => {
          let [e, t] = i.useState(!0);
          return {
            transitions: (0, g.useTransition)(e, {
              keys: (e) => (e ? "shown" : "hidden"),
              config: ea,
              from: { opacity: 0 },
              enter: { opacity: 1 },
              leave: { opacity: 0 },
              unique: !0,
            }),
            setVisible: t,
          };
        },
        et = (e) =>
          (0, g.useTransition)(e, {
            from: { maxHeight: 0 },
            enter: { maxHeight: 500 },
            leave: { maxHeight: 0 },
            config: { duration: 200 },
          }),
        en = (e) => {
          let { guild: t, roles: n } = e;
          return (0, a.jsx)("div", {
            className: O.rolesList,
            "aria-label": F.intl.formatToPlainString(F.t.PCs0oq, {
              numRoles: n.length,
            }),
            children: n.map((e) =>
              (0, a.jsx)(
                f.UB,
                {
                  role: e,
                  canRemove: !1,
                  onRemove: L.VqG,
                  guildId: t.id,
                  className: O.rolePill,
                },
                e.id,
              ),
            ),
          });
        },
        ea = { mass: 1, tension: 250, friction: 18, clamp: !0 },
        ei = (e) => {
          let { guild: t, channel: r, hasAnyThread: l, handleHide: s } = e,
            [o, c] = i.useState(!1),
            d = (0, M.c)(r.id),
            u = (0, h.e7)([S.Z], () => S.Z.hasHidden(r.id)),
            x = (function (e, t, r, l) {
              let s = null == e ? void 0 : e.id,
                o = (0, h.e7)([j.Z], () =>
                  null != s ? j.Z.getRoles(s) : void 0,
                );
              return i.useMemo(() => {
                let i = new U(),
                  s = (null == t ? void 0 : t.isMediaChannel()) === !0;
                return (
                  null != e &&
                    null != t &&
                    !s &&
                    null != o &&
                    i.addStep(
                      (function (e, t, i, r) {
                        let l = (0, C.Z)(i)
                            ? m.$e(L.Plq.VIEW_CHANNEL, L.Plq.SEND_MESSAGES)
                            : L.Plq.SEND_MESSAGES,
                          s =
                            null != e
                              ? (0, y.E$)(e, t, i, l).filter(
                                  (t) =>
                                    i.permissionOverwrites.hasOwnProperty(
                                      t.id,
                                    ) || (0, v.pM)(e.id, t.id),
                                )
                              : [],
                          o = s.length > 0,
                          c = s.some((t) => (0, v.pM)(e.id, t.id));
                        return {
                          name: F.intl.string(F.t["/Ax2go"]),
                          description: F.intl.string(F.t.oMIexc),
                          isDone: o && c,
                          shouldWarn: o && !c,
                          children: o
                            ? (0, a.jsx)(en, { guild: e, roles: s })
                            : null,
                          clickHandler: () => {
                            D(A.ZI.PERMISSIONS),
                              (0, g.openModalLazy)(
                                async () => {
                                  let { default: t } = await n
                                    .e("78704")
                                    .then(n.bind(n, 560602));
                                  return (
                                    r(!0),
                                    (n) =>
                                      (0, a.jsx)(t, {
                                        ...n,
                                        channel: i,
                                        guild: e,
                                        permission: l,
                                        currentSelectedRoles: s,
                                      })
                                  );
                                },
                                {
                                  modalKey:
                                    "SEND_MESSAGE_ROLE_PERMISSION_FIX_MODAL_KEY",
                                  onCloseRequest: L.VqG,
                                  onCloseCallback: () => r(!1),
                                },
                              );
                          },
                        };
                      })(e, o, t, l),
                    ),
                  !s && i.addStep(V(t)),
                  i.addStep(G(t)),
                  i.addStep(W(t)),
                  i.addStep(q(r, s, null == e ? void 0 : e.id)),
                  i
                );
              }, [t, e, o, r, l]);
            })(t, r, l, c),
            f = x.isAllDone();
          return (
            Y(f, d || u || !K(r.id), o, s),
            { onboardingSteps: x, isHidden: u, isDismissed: d, isAllDone: f }
          );
        },
        er = () =>
          i.useCallback((e) => {
            var t;
            null === (t = e.clickHandler) || void 0 === t || t.call(e);
          }, []),
        el = (e) => {
          let { handleHide: t } = e;
          return (0, a.jsx)(g.Clickable, {
            onClick: t,
            className: O.closeButton,
            "aria-label": F.intl.string(F.t.WAI6xs),
            children: (0, a.jsx)(g.XSmallIcon, {
              size: "md",
              color: "currentColor",
              className: O.closeIcon,
            }),
          });
        },
        es = (e) => {
          let { expanded: t, onClick: n } = e;
          return (0, a.jsx)(g.Clickable, {
            onClick: n,
            className: O.closeButton,
            "aria-label": t
              ? F.intl.string(F.t.iTcumZ)
              : F.intl.string(F.t.dcl9MT),
            children: t
              ? (0, a.jsx)(g.MinimizeIcon, {
                  size: "xs",
                  color: "currentColor",
                  className: O.closeIcon,
                })
              : (0, a.jsx)(g.MaximizeIcon, {
                  size: "xs",
                  color: "currentColor",
                  className: O.closeIcon,
                }),
          });
        };
      t.Z = (e) => {
        let { hasAnyThread: t, channel: n } = e,
          { onboardingExpanded: i } = (0, Z.xH)((e) => {
            let { onboardingExpanded: t } = e;
            return { onboardingExpanded: t };
          }, d.X),
          { tagFilter: r } = (0, E.H)(n.id),
          s = (0, h.e7)([j.Z], () => j.Z.getGuild(n.getGuildId())),
          o = (0, R.r_)(n),
          { transitions: m, setVisible: x } = ee(),
          f = et(i),
          C = er(),
          v = X(n.id, x),
          {
            onboardingSteps: I,
            isDismissed: T,
            isHidden: N,
            isAllDone: S,
          } = ei({ guild: s, channel: n, hasAnyThread: t, handleHide: v }),
          w = !N && !T,
          y = (0, Z.AF)(),
          P = n.isMediaChannel(),
          M = (e) => y.getState().setOnboardingExpanded(e);
        return (Q(S, w, v),
        $({
          isAllDone: S,
          isVisible: w,
          canManageChannel: o,
          guildId: null == s ? void 0 : s.id,
          channel: n,
        }),
        J(T, N, x),
        (0, p.Z)(() => {
          (!t || !w) && M(!0);
        }),
        null == s)
          ? null
          : w && o
            ? P
              ? t
                ? null
                : (0, a.jsx)(b.Z, { channel: n })
              : (0, a.jsx)(a.Fragment, {
                  children: m((e, t) =>
                    t
                      ? (0, a.jsx)(c.animated.div, {
                          style: e,
                          className: O.container,
                          children: (0, a.jsxs)("div", {
                            className: O.wrapper,
                            children: [
                              (0, a.jsx)("div", {
                                className: O.headerRow,
                                children: (0, a.jsxs)(g.HeadingLevel, {
                                  component: (0, a.jsx)(g.Heading, {
                                    variant: "heading-md/semibold",
                                    children: F.intl.string(F.t.LhlgY2),
                                  }),
                                  children: [
                                    (0, a.jsx)(g.Heading, {
                                      variant: "heading-md/medium",
                                      className: O.header,
                                      children: F.intl.format(F.t["9L+8b2"], {
                                        numCompleted:
                                          I.completedSteps.toString(),
                                        numSteps: I.steps.length.toString(),
                                      }),
                                    }),
                                    (0, a.jsxs)(g.Text, {
                                      variant: "text-xs/normal",
                                      className: O.visibilityInfo,
                                      children: [
                                        (0, a.jsx)(g.CircleInformationIcon, {
                                          size: "xxs",
                                          color: "currentColor",
                                          className: O.icon,
                                        }),
                                        F.intl.string(F.t.znhX2d),
                                      ],
                                    }),
                                    (0, a.jsx)(es, {
                                      expanded: i,
                                      onClick: () => M(!i),
                                    }),
                                    (0, a.jsx)(el, { handleHide: v }),
                                  ],
                                }),
                              }),
                              f((e, t) =>
                                t
                                  ? (0, a.jsx)(c.animated.div, {
                                      style: e,
                                      className: O.listContainer,
                                      children: (0, a.jsx)("ol", {
                                        className: O.checklist,
                                        children: I.getSteps().map((e) =>
                                          (0, a.jsxs)(
                                            g.Clickable,
                                            {
                                              tag: "li",
                                              "aria-label": e.name,
                                              onClick: () => C(e),
                                              className: l()(O.stepContainer, {
                                                [O.completed]: e.isDone,
                                              }),
                                              children: [
                                                e.shouldWarn
                                                  ? (0, a.jsx)(
                                                      g.CircleWarningIcon,
                                                      {
                                                        size: "custom",
                                                        width: 20,
                                                        height: 20,
                                                        color:
                                                          u.Z.STATUS_DANGER,
                                                        className: O.stepStatus,
                                                      },
                                                    )
                                                  : e.isDone
                                                    ? (0, a.jsx)(g.IconBadge, {
                                                        color:
                                                          u.Z
                                                            .STATUS_POSITIVE_BACKGROUND,
                                                        icon: g.CheckmarkLargeIcon,
                                                        style: H,
                                                        className: O.stepStatus,
                                                      })
                                                    : (0, a.jsx)(g.IconBadge, {
                                                        disableColor: !0,
                                                        icon: (0,
                                                        g.makeIconCompat)(_.Z),
                                                        style: z,
                                                        className: l()(
                                                          O.stepStatus,
                                                          O.completed,
                                                        ),
                                                      }),
                                                (0, a.jsxs)("div", {
                                                  className: O.step,
                                                  children: [
                                                    (0, a.jsx)(g.Text, {
                                                      variant: "text-md/medium",
                                                      color: e.isDone
                                                        ? "header-secondary"
                                                        : "header-primary",
                                                      className: O.stepName,
                                                      children: e.name,
                                                    }),
                                                    (0, a.jsx)(g.Text, {
                                                      variant: "text-sm/normal",
                                                      color: "header-secondary",
                                                      className:
                                                        O.stepDescription,
                                                      children: e.description,
                                                    }),
                                                    e.children,
                                                  ],
                                                }),
                                                (0, a.jsx)(
                                                  g.ChevronSmallRightIcon,
                                                  {
                                                    size: "custom",
                                                    color: "currentColor",
                                                    width: 12,
                                                    className: O.stepStatus,
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
              : (0, a.jsx)(k.Z, {
                  channelName: n.name,
                  guildId: n.guild_id,
                  tagFilter: r,
                  channel: n,
                });
      };
    },
    538366: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return g;
        },
      });
      var a = n(200651),
        i = n(192379),
        r = n(481060),
        l = n(665906),
        s = n(499033),
        o = n(585483),
        c = n(456269),
        d = n(228392),
        u = n(981631),
        m = n(388032),
        h = n(51092);
      function g(e) {
        let { channelName: t, guildId: g, tagFilter: x, channel: f } = e,
          p = (0, c.r_)(f),
          C = (0, l.cD)(f),
          v = f.isMediaChannel(),
          b = i.useCallback(() => {
            (0, d.qz)(),
              (0, r.openModalLazy)(async () => {
                let { default: e } = await n.e("18417").then(n.bind(n, 740696));
                return (t) => (0, a.jsx)(e, { ...t, guildId: g });
              });
          }, [g]),
          j = x.size > 0,
          _ = C || p,
          I = !j && p && !v,
          T = i.useCallback(
            () =>
              I
                ? b()
                : C
                  ? void o.S.dispatch(u.CkL.FOCUS_COMPOSER_TITLE)
                  : (0, u.VqG)(),
            [b, I, C],
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
                (0, a.jsx)(s.Z, { className: h.stars }),
              ],
            }),
            (0, a.jsx)(r.Heading, {
              className: h.header,
              variant: "heading-md/semibold",
              children: j
                ? m.intl.formatToPlainString(m.t.lvPci4, { numTags: x.size })
                : m.intl.string(m.t.PwTMGx),
            }),
            (0, a.jsx)(r.Text, {
              color: "header-secondary",
              variant: "text-sm/normal",
              children: j
                ? m.intl.formatToPlainString(m.t.AAeye3, { numTags: x.size })
                : m.intl.formatToPlainString(m.t.YtsXFB, { channelName: t }),
            }),
            _ &&
              (0, a.jsxs)(r.Button, {
                look: r.Button.Looks.BLANK,
                size: r.Button.Sizes.MIN,
                color: r.Button.Colors.GREEN,
                onClick: T,
                className: h.cta,
                innerClassName: h.button,
                children: [
                  I ? m.intl.string(m.t.DgatTU) : m.intl.string(m.t.wOKE8P),
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
      var a = n(200651),
        i = n(192379),
        r = n(120356),
        l = n.n(r),
        s = n(642128),
        o = n(232713),
        c = n(481060),
        d = n(787014),
        u = n(454585),
        m = n(456269),
        h = n(470623),
        g = n(981631),
        x = n(388032),
        f = n(655910),
        p = n(665162);
      t.Z = i.memo(function (e) {
        let { channel: t, onChange: r } = e,
          C = (0, h.AF)(),
          { guidelinesOpen: v } = (0, h.xH)((e) => {
            let { guidelinesOpen: t } = e;
            return { guidelinesOpen: t };
          }, o.X),
          b = (0, m.r_)(t),
          [j, _] = i.useState(!1),
          I = i.useCallback(
            (e) => {
              if (null == e) return;
              let t = e.clientHeight >= 220;
              t !== j && _(t);
            },
            [j],
          );
        i.useLayoutEffect(() => {
          setTimeout(r, 350);
        }, [v, r]);
        let [T, N] = i.useState(!v),
          S = (0, c.useSpring)({
            opacity: v ? 1 : 0,
            maxHeight: v ? 500 : 0,
            config: { duration: 300 },
            onRest: () => N(!v),
          });
        return null != t.topic && t.topic.length > 0
          ? (0, a.jsx)(s.animated.div, {
              style: S,
              className: T ? f.hiddenVisually : void 0,
              children: (0, a.jsxs)("div", {
                className: f.container,
                children: [
                  (0, a.jsxs)("div", {
                    className: f.headerContainer,
                    children: [
                      (0, a.jsxs)(c.Heading, {
                        variant: "heading-lg/semibold",
                        className: f.guidelinesHeader,
                        children: [
                          (0, a.jsx)(c.BookCheckIcon, {
                            size: "custom",
                            color: "currentColor",
                            width: 20,
                            height: 20,
                          }),
                          x.intl.string(x.t["4d4T4u"]),
                          b &&
                            (0, a.jsx)(c.Clickable, {
                              onClick: () => {
                                d.ZP.open(t.id, void 0, g.ZfP.TOPIC);
                              },
                              tag: "span",
                              className: f.clickable,
                              children: (0, a.jsx)(c.PencilIcon, {
                                size: "xs",
                                color: "currentColor",
                              }),
                            }),
                        ],
                      }),
                      (0, a.jsx)(c.Clickable, {
                        "aria-label": x.intl.string(x.t.cpT0Cg),
                        className: f.clickable,
                        onClick: () => {
                          C.getState().setGuidelinesOpen(!1);
                        },
                        children: (0, a.jsx)(c.XSmallIcon, {
                          size: "xs",
                          color: "currentColor",
                        }),
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: f.descriptionContainer,
                    children: [
                      (0, a.jsx)(c.Text, {
                        selectable: !0,
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        style: { maxHeight: 220 },
                        className: l()(f.guidelines, p.markup),
                        children: (0, a.jsx)("div", {
                          ref: I,
                          children: u.Z.parseForumPostGuidelines(t.topic, !0, {
                            channelId: t.id,
                            allowHeading: !0,
                            allowList: !0,
                          }),
                        }),
                      }),
                      j &&
                        (0, a.jsxs)("div", {
                          className: f.showMore,
                          children: [
                            (0, a.jsx)("div", { className: f.gradient }),
                            (0, a.jsx)("div", {
                              className: f.linkContainer,
                              children: (0, a.jsx)(c.Clickable, {
                                className: f.showMoreLink,
                                onClick: () => {
                                  (0, c.openModalLazy)(async () => {
                                    let { default: e } = await n
                                      .e("78712")
                                      .then(n.bind(n, 223164));
                                    return (n) =>
                                      (0, a.jsx)(e, { ...n, channel: t });
                                  });
                                },
                                children: (0, a.jsxs)(c.Text, {
                                  variant: "text-sm/semibold",
                                  color: "text-brand",
                                  className: f.showMoreText,
                                  children: [
                                    x.intl.string(x.t.Vu7odH),
                                    (0, a.jsx)(c.MaximizeIcon, {
                                      size: "xs",
                                      color: "currentColor",
                                      className: f.showMoreIcon,
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
          return f;
        },
      });
      var a = n(200651);
      n(192379);
      var i = n(120356),
        r = n.n(i),
        l = n(481060),
        s = n(228392),
        o = n(404616),
        c = n(710352),
        d = n(921944),
        u = n(388032),
        m = n(444087),
        h = n(559198),
        g = n(994973),
        x = n(504764);
      function f(e) {
        let { onDismiss: t } = e;
        return (0, a.jsxs)(l.Clickable, {
          onClick: () => {
            open(c.V8), (0, s.GX)({ readGuideCta: !0 });
          },
          className: r()(g.container, h.container, m.mainCard),
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
                      children: u.intl.string(u.t.uvGmCw),
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
                          children: u.intl.string(u.t.t2GkVV),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsx)(l.Clickable, {
                  onClick: (e) => {
                    e.stopPropagation(),
                      t(d.L.DISMISS),
                      (0, s.GX)({ readGuideCta: !1 });
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
                      className: r()(g.__invalid_channelName, h.title),
                      variant: "heading-lg/semibold",
                      color: "header-primary",
                      children: u.intl.string(u.t.JtSpDw),
                    }),
                    (0, a.jsx)(l.Text, {
                      variant: "text-sm/normal",
                      color: "header-secondary",
                      children: u.intl.string(u.t.Ajhp09),
                    }),
                  ],
                }),
                (0, a.jsx)("img", {
                  src: x,
                  alt: u.intl.string(u.t.gAlJzc),
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
          return E;
        },
        _: function () {
          return w;
        },
      }),
        n(47120);
      var a = n(200651),
        i = n(192379),
        r = n(512722),
        l = n.n(r),
        s = n(642128),
        o = n(442837),
        c = n(481060),
        d = n(53281),
        u = n(607070),
        m = n(541716),
        h = n(859235),
        g = n(898463),
        x = n(592125),
        f = n(703558),
        p = n(117530),
        C = n(585483),
        v = n(127654),
        b = n(228392),
        j = n(981631),
        _ = n(933907);
      let I = { scale: 0.95, opacity: 0 },
        T = { scale: 1, opacity: 1 },
        N = { scale: 1, opacity: 1 },
        S = { tension: 2400, friction: 52 };
      function w(e) {
        let { channelId: t, onClick: n, onClose: r, onMouseEnter: s } = e,
          u = i.useRef(null),
          m = (0, o.e7)([x.Z], () => x.Z.getChannel(t), [t]);
        return (
          l()(null != m, "Forum Channel is null"),
          (0, a.jsxs)(c.Clickable, {
            className: _.uploadInput,
            onMouseEnter: s,
            onClick: () => {
              (0, b.N3)({ isMobile: !1 }), null == n || n();
            },
            onKeyPress: (e) => {
              if ("Enter" === e.key) {
                var t;
                null === (t = u.current) ||
                  void 0 === t ||
                  t.activateUploadDialogue(),
                  (0, b.N3)({ isMobile: !1 });
              }
            },
            children: [
              (0, a.jsx)(d.Z, {
                className: _.fileInput,
                ref: u,
                onChange: (e) => {
                  null == r || r(),
                    (0, v.d)(e.currentTarget.files, m, f.d.FirstThreadMessage, {
                      requireConfirm: !0,
                    }),
                    C.S.dispatch(j.CkL.TEXTAREA_FOCUS),
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
                className: _.uploadIcon,
              }),
            ],
          })
        );
      }
      function y(e) {
        let { channelId: t, closePopout: n } = e,
          [r, l] = i.useState(!1),
          { reducedMotion: d } = i.useContext(
            c.AccessibilityPreferencesContext,
          ),
          x = (0, c.useSpring)(
            { from: d.enabled ? T : I, to: N, config: S },
            "animate-always",
          ),
          f = (0, o.e7)([u.Z], () => u.Z.keyboardModeEnabled),
          C = (0, o.e7)([p.Z], () =>
            p.Z.getUploads(t, m.Ie.CREATE_FORUM_POST.drafts.type),
          );
        return (0, a.jsx)(s.animated.div, {
          className: _.popoutContainer,
          onMouseLeave: () => {
            !r && n();
          },
          style: x,
          children: (0, a.jsxs)(c.ScrollerThin, {
            orientation: "horizontal",
            className: _.popout,
            paddingFix: !1,
            fade: !0,
            children: [
              (0, a.jsx)(w, {
                channelId: t,
                onClick: () => {
                  l(!0);
                },
                onClose: () => {
                  l(!1), n();
                },
              }),
              (0, a.jsx)("div", {
                className: _.uploads,
                children: C.map((e) =>
                  (0, a.jsx)(
                    g.Z,
                    {
                      channelId: t,
                      draftType: m.Ie.CREATE_FORUM_POST.drafts.type,
                      upload: e,
                      keyboardModeEnabled: f,
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
      function E(e) {
        let { channelId: t } = e,
          [n, r] = i.useState(!1),
          l = (0, o.e7)([p.Z], () =>
            p.Z.getUploads(t, m.Ie.CREATE_FORUM_POST.drafts.type),
          ),
          s = l.length,
          c = s > 0;
        i.useEffect(() => {
          n && !c && r(!1);
        }, [n, c]);
        let d = () => {
          c && r(!0);
        };
        return (0, a.jsxs)("div", {
          className: _.container,
          children: [
            c
              ? (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)(g.r, {
                      upload: l[0],
                      size: h.q.SMALL,
                      onMouseEnter: d,
                    }),
                    !n &&
                      (0, a.jsx)("div", { className: _.badge, children: s }),
                  ],
                })
              : (0, a.jsx)(w, { onMouseEnter: d, channelId: t }),
            n &&
              (0, a.jsx)(y, {
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
          return ei;
        },
      }),
        n(47120),
        n(733860);
      var a = n(200651),
        i = n(192379),
        r = n(120356),
        l = n.n(r),
        s = n(512722),
        o = n.n(s),
        c = n(232713),
        d = n(924826),
        u = n(91192),
        m = n(536895),
        h = n(442837),
        g = n(481060),
        x = n(430742),
        f = n(166459),
        p = n(541716),
        C = n(67158),
        v = n(893718),
        b = n(472243),
        j = n(436660),
        _ = n(284182),
        I = n(795639),
        T = n(957730),
        N = n(25015),
        S = n(252032),
        w = n(913663),
        y = n(268350),
        E = n(456077),
        R = n(488131),
        P = n(602034),
        M = n(23750),
        k = n(703558),
        Z = n(496675),
        A = n(300429),
        L = n(117530),
        F = n(594174),
        O = n(459273),
        B = n(838440),
        z = n(127654),
        H = n(681154),
        D = n(883429),
        U = n(945141),
        V = n(456269),
        G = n(228392),
        W = n(259637),
        q = n(76451),
        X = n(470623),
        K = n(479099),
        J = n(399894),
        Y = n(81490),
        Q = n(710352),
        $ = n(981631),
        ee = n(176505),
        et = n(388032),
        en = n(40620);
      let ea = p.Ie.CREATE_FORUM_POST;
      function ei(e) {
        let {
            parentChannel: t,
            isSearchLoading: n,
            onChange: r,
            canCreatePost: s,
            inputRef: o,
          } = e,
          {
            textAreaState: d,
            formOpen: u,
            previewing: m,
          } = (0, X.xH)((e) => {
            let { textAreaState: t, formOpen: n, previewing: a } = e;
            return { textAreaState: t, formOpen: n, previewing: a };
          }, c.X),
          [x, f] = i.useState(null),
          p = i.useContext(O.oo),
          C = i.useCallback(() => {
            p.bumpDispatchPriority();
          }, [p]),
          v = (0, h.e7)([Z.Z], () => Z.Z.can($.Plq.ATTACH_FILES, t)),
          b = (0, h.Wu)([L.Z], () =>
            L.Z.getUploads(t.id, k.d.FirstThreadMessage),
          ),
          j = u && v && s,
          N = (null == t ? void 0 : t.isMediaChannel()) === !0,
          S = (function (e, t) {
            let n = (0, X.AF)(),
              a = (0, V.ql)(e);
            return i.useCallback(() => {
              let {
                formOpen: i,
                setFormOpenFromUserAction: r,
                name: l,
                textAreaState: s,
                hasClickedForm: o,
              } = n.getState();
              !i &&
                (setTimeout(() => {
                  if (t.current instanceof g.TextAreaAutosize) {
                    var e, n, a, i;
                    null === (n = t.current) ||
                      void 0 === n ||
                      null === (e = n._textArea) ||
                      void 0 === e ||
                      e.setSelectionRange(l.length, l.length),
                      null === (i = t.current) ||
                        void 0 === i ||
                        null === (a = i._textArea) ||
                        void 0 === a ||
                        a.focus();
                  }
                }, 0),
                ((o && l.length > 0) ||
                  (s.textValue.trim().length > 0 && s.textValue.trim() !== a) ||
                  L.Z.getUploads(e.id, k.d.FirstThreadMessage).length > 0) &&
                  r());
            }, [n, e.id, a, t]);
          })(t, o),
          E = (function (e) {
            let { formOpen: t } = (0, X.xH)((e) => {
                let { formOpen: t } = e;
                return { formOpen: t };
              }, c.X),
              n = (0, X.AF)(),
              a = (0, P.r)({ parentChannel: e });
            i.useEffect(() => {
              let { setNameError: e, setMessageError: t } = n.getState();
              e(null), t(null);
            }, [t, n]);
            let r = i.useCallback(
              (t, a, i) => {
                let { name: r, textAreaState: l } = n.getState();
                null == t && (t = l.textValue), (t = t.trim());
                let { content: s } = T.ZP.parse(e, t);
                if (((t = s), null == a || 0 === a.length)) {
                  var o;
                  a =
                    null ===
                      (o = w.Z.getStickerPreview(e.id, ea.drafts.type)) ||
                    void 0 === o
                      ? void 0
                      : o.map((e) => e.id);
                }
                if (
                  ((null == i || 0 === i.length) &&
                    (i = L.Z.getUploads(e.id, k.d.FirstThreadMessage)),
                  null != i && i.length > 0 && e.isMediaChannel())
                ) {
                  let e = i.findIndex((e) => !0 === e.isThumbnail);
                  if (e > -1) {
                    let t = i[e];
                    i.splice(e, 1), i.unshift(t);
                  }
                }
                let c = 0 === r.length,
                  d =
                    (null == t || 0 === t.length) &&
                    (null == a || 0 === a.length) &&
                    0 === i.length;
                return {
                  content: t,
                  stickers: a,
                  uploads: i,
                  hasNameError: c,
                  hasMessageError: d,
                };
              },
              [e, n],
            );
            return i.useCallback(
              async (t, i, l) => {
                let {
                    setNameError: s,
                    setMessageError: o,
                    setSubmitting: c,
                    resetFormState: d,
                    formOpen: u,
                    setFormOpen: m,
                    setPreviewing: h,
                    setFormOpenFromUserAction: g,
                    setGuidelinesOpen: x,
                  } = n.getState(),
                  f = U.Z.hasSeen(e.id);
                if (!u)
                  return (
                    (0, G.P_)({ guildId: e.guild_id, channelId: e.id }),
                    !f && n.getState().setGuidelinesOpen(!0),
                    g(),
                    { shouldClear: !1, shouldRefocus: !1 }
                  );
                let {
                  content: p,
                  stickers: C,
                  uploads: v,
                  hasNameError: b,
                  hasMessageError: j,
                } = r(t, i, l);
                if (
                  (s(b ? (0, H.V_)() : null), o(j ? (0, H.T4)() : null), b || j)
                )
                  return { shouldClear: !1, shouldRefocus: !0 };
                try {
                  c(!0);
                  let { valid: t } = await (0, B.v)({
                    content: p,
                    stickers: C,
                    uploads: v,
                    type: ea,
                    channel: e,
                  });
                  if (!t) return { shouldClear: !1, shouldRefocus: !0 };
                  let n = await a(p, C, v);
                  return (
                    (0, R.ok)(n),
                    D.Z.resort(e.id),
                    (0, y.qB)(e.id, ea.drafts.type),
                    d(),
                    m(!1),
                    h(!1),
                    U.Z.markAsSeen(e.id),
                    x(!1),
                    { shouldClear: !0, shouldRefocus: !1 }
                  );
                } catch (t) {
                  var _, I;
                  return (
                    (null === (_ = t.body) || void 0 === _
                      ? void 0
                      : _.code) === $.evJ.AUTOMOD_TITLE_BLOCKED
                      ? s((0, H.Gx)(t.body, e))
                      : (null === (I = t.body) || void 0 === I
                          ? void 0
                          : I.code) === $.evJ.AUTOMOD_MESSAGE_BLOCKED &&
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
          i.useLayoutEffect(r, [u, d, b, r]),
          (0, a.jsx)(a.Fragment, {
            children: (0, a.jsx)("div", {
              "aria-label": s
                ? et.intl.string(et.t.dq7mAQ)
                : et.intl.string(et.t["5h0QOD"]),
              className: l()(en.container, { [en.collapsed]: !u }),
              onClick: !u && s ? S : void 0,
              children: (0, a.jsxs)("form", {
                onMouseDown: C,
                onFocus: C,
                onSubmit: (e) => {
                  if ((e.preventDefault(), !!s)) E();
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
                            editorRef: x,
                            parentChannel: t,
                            isSearchLoading: n,
                            inputRef: o,
                            canCreatePost: s,
                          }),
                          u &&
                            (0, a.jsx)(ec, {
                              editorRef: x,
                              setEditorRef: f,
                              parentChannel: t,
                              submit: E,
                              disabled: !s,
                            }),
                          m && (0, a.jsx)(ed, {}),
                        ],
                      }),
                      j &&
                        (N
                          ? (0, a.jsx)(I._, { parentChannel: t })
                          : (0, a.jsx)(q.Z, { channelId: t.id })),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: en.form,
                    children: [
                      j && N && (0, a.jsx)(_.Z, { parentChannel: t }),
                      u &&
                        (0, a.jsx)(em, {
                          className: en.horizontalPadding,
                          parentChannel: t,
                          canCreatePost: s,
                        }),
                    ],
                  }),
                ],
              }),
            }),
          })
        );
      }
      let er = i.memo(function (e) {
          let { parentChannel: t, isSearchLoading: n, inputRef: r } = e,
            {
              formOpen: l,
              name: s,
              textAreaState: o,
              hasClickedForm: d,
              submitting: u,
            } = (0, X.xH)((e) => {
              let {
                formOpen: t,
                nameError: n,
                name: a,
                previewing: i,
                textAreaState: r,
                hasClickedForm: l,
                submitting: s,
              } = e;
              return {
                formOpen: t,
                nameError: n,
                name: a,
                textAreaState: r,
                previewing: i,
                hasClickedForm: l,
                submitting: s,
              };
            }, c.X),
            m = (0, X.AF)(),
            h = (0, V.ql)(t),
            p = i.useCallback(() => {
              var e;
              m.getState().resetFormState(),
                x.Z.clearDraft(t.id, k.d.ThreadSettings),
                x.Z.clearDraft(t.id, k.d.FirstThreadMessage),
                f.Z.clearAll(t.id, k.d.FirstThreadMessage),
                m.getState().setFormOpen(!1),
                m.getState().setBodyFocused(!1),
                m.getState().setTitleFocused(!1),
                m.getState().setHasClickedForm(!1),
                m.getState().setPreviewing(!1),
                null === (e = r.current) || void 0 === e || e.blur(),
                (0, G.Oq)({ guildId: t.guild_id, channelId: t.id });
            }, [m, t.id, t.guild_id, r]),
            C = i.useMemo(() => {
              if (n && !l) return (0, a.jsx)(ef, {});
              if (
                !n &&
                !l &&
                (0 === o.textValue.trim().length || o.textValue.trim() === h)
              )
                return (0, a.jsx)(g.MagnifyingGlassIcon, {
                  size: "md",
                  color: "currentColor",
                  className: en.searchIcon,
                });
              if (
                !l &&
                (s.trim().length > 0 ||
                  (o.textValue.trim().length > 0 && o.textValue.trim() !== h) ||
                  L.Z.getUploads(t.id, k.d.FirstThreadMessage).length > 0) &&
                d
              )
                return (0, a.jsx)(g.PencilIcon, {
                  size: "md",
                  color: "currentColor",
                  className: en.pencilIcon,
                });
              else
                return u
                  ? (0, a.jsx)(g.CircleXIcon, {
                      size: "md",
                      color: "currentColor",
                      className: en.closeIconDisabled,
                    })
                  : (0, a.jsx)(g.Tooltip, {
                      text: et.intl.string(et.t["98EPQE"]),
                      children: (e) =>
                        (0, a.jsx)(g.Clickable, {
                          ...e,
                          onClick: p,
                          children: (0, a.jsx)(g.CircleXIcon, {
                            size: "md",
                            color: "currentColor",
                            className: en.closeIcon,
                          }),
                        }),
                    });
            }, [n, l, d, s, o.textValue, p, t.id, h, u]);
          return (0, a.jsx)("div", {
            className: en.prefixElement,
            children: C,
          });
        }),
        el = i.memo(function (e) {
          let {
              parentChannel: t,
              inputRef: n,
              canCreatePost: r,
              editorRef: l,
            } = e,
            {
              formOpen: s,
              nameError: d,
              name: u,
              textAreaState: m,
              previewing: x,
            } = (0, X.xH)((e) => {
              let {
                formOpen: t,
                nameError: n,
                name: a,
                previewing: i,
                textAreaState: r,
                hasClickedForm: l,
                submitting: s,
              } = e;
              return {
                formOpen: t,
                nameError: n,
                name: a,
                textAreaState: r,
                previewing: i,
                hasClickedForm: l,
                submitting: s,
              };
            }, c.X),
            f = (0, X.AF)(),
            p = null != t.topic && 0 !== t.topic.length,
            C = U.Z.hasSeen(t.id),
            v = (0, V.ql)(t),
            b = (0, h.e7)([F.default], () => F.default.getCurrentUser());
          o()(null != b, "current user cannot be null");
          (0, O.yp)({
            event: $.CkL.FOCUS_COMPOSER_TITLE,
            handler: () => {
              var e;
              let t =
                n.current instanceof g.TextAreaAutosize
                  ? null === (e = n.current) || void 0 === e
                    ? void 0
                    : e._textArea
                  : n.current;
              null == t || t.focus(),
                f.getState().setTitleFocused(!0),
                f.getState().setFormOpen(!0),
                f.getState().setHasClickedForm(!0);
            },
          });
          let j = i.useCallback(
              (e) => {
                let n = e.clipboardData.files[0];
                null != n &&
                  n.type.startsWith("image/") &&
                  (e.preventDefault(),
                  (0, z.d)([n], t, k.d.FirstThreadMessage),
                  f.getState().setFormOpenFromUserAction());
              },
              [t, f],
            ),
            _ = (0, H.Op)(d, { content: u });
          return (0, a.jsxs)("div", {
            className: en.titleContainer,
            onPaste: j,
            children: [
              s && x
                ? (0, a.jsx)(g.Heading, {
                    variant: "heading-md/semibold",
                    className: en.title,
                    children: u,
                  })
                : (0, a.jsx)(g.TextArea, {
                    value: u,
                    placeholder: r
                      ? s ||
                        (m.textValue.length > 0 && m.textValue.trim() !== v)
                        ? et.intl.string(et.t.lU4dDQ)
                        : et.intl.string(et.t.CjmivL)
                      : et.intl.string(et.t["5h0QOD"]),
                    flex: !0,
                    autosize: s,
                    rows: 1,
                    showCharacterCount: !1,
                    showRemainingCharacterCount: !1,
                    maxLength: $.HN8,
                    onChange: (e) => {
                      let n = (0, E.Z)(e, !1);
                      f.getState().setName(n);
                      let a = 0 === n.trim().length,
                        i = 0 === m.textValue.trim().length,
                        r = m.textValue.trim() === v;
                      a && (i || r) && f.getState().setHasClickedForm(!1),
                        !s && D.Z.updateForumSearchQuery(t.id, n);
                    },
                    onFocus: () => {
                      f.getState().setTitleFocused(!0),
                        f.getState().setBodyFocused(!1);
                    },
                    onBlur: () => {
                      f.getState().setTitleFocused(!1);
                      let e = (0, E.Z)(u, !0);
                      e !== u &&
                        (f.getState().setName(e),
                        !s && D.Z.updateForumSearchQuery(t.id, e));
                    },
                    onKeyDown: (e) => {
                      var a, i;
                      "Enter" === e.key &&
                        (e.preventDefault(),
                        e.stopPropagation(),
                        s && u.length > 0
                          ? null == l || l.focus()
                          : r &&
                            e.shiftKey &&
                            ((0, G.nH)({
                              guildId: t.guild_id,
                              channelId: t.id,
                            }),
                            p && !C && f.getState().setGuidelinesOpen(!0),
                            f.getState().setFormOpenFromUserAction(),
                            u.trim().length > 0 &&
                              (f.getState().setBodyFocused(!0),
                              null == l || l.focus())));
                      let o =
                        n.current instanceof g.TextAreaAutosize
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
                        !f.getState().submitting &&
                        (null === (i = n.current) || void 0 === i || i.blur(),
                        f.getState().setFormOpen(!1),
                        f.getState().setTitleFocused(!1),
                        f.getState().setBodyFocused(!1),
                        f.getState().setPreviewing(!1));
                    },
                    error: _,
                    className: en.title,
                    inputRef: n,
                  }),
              s
                ? null
                : (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)(es, { parentChannel: t }),
                      (0, a.jsx)(eh, { parentChannel: t, canCreatePost: r }),
                    ],
                  }),
            ],
          });
        });
      function es(e) {
        let { parentChannel: t } = e,
          { guidelinesOpen: n } = (0, X.xH)((e) => {
            let { guidelinesOpen: t } = e;
            return { guidelinesOpen: t };
          }, c.X),
          i = (0, X.AF)(),
          r = null != t.topic && 0 !== t.topic.length,
          s = () => {
            i.getState().setGuidelinesOpen(!n);
          };
        return r
          ? (0, a.jsx)(g.Tooltip, {
              text: et.intl.string(et.t["4d4T4u"]),
              children: (e) =>
                (0, a.jsx)(g.Clickable, {
                  ...e,
                  onClick: s,
                  className: l()(en.forumPostFormButton, {
                    [en.forumPostFormButtonActive]: n,
                  }),
                  children: (0, a.jsx)(g.BookCheckIcon, {
                    size: "md",
                    color: "currentColor",
                    ...e,
                  }),
                }),
            })
          : null;
      }
      let eo = i.memo(function (e) {
          let { parentChannel: t, textValue: n } = e,
            i = new M.ZP({ channelId: t.id, content: n }),
            { content: r } = (0, N.Z)(i, {
              hideSimpleEmbedContent: !0,
              isInteracting: !1,
              formatInline: !1,
              allowList: !0,
              allowHeading: !0,
              previewLinkTarget: !0,
              allowLinks: !0,
            }),
            s = (0, S.Z)({ message: i, channel: t }, r, !1);
          return (0, a.jsx)("div", {
            className: l()(en.channelTextAreaInner, en.previewTextArea),
            children: s,
          });
        }),
        ec = i.memo(function (e) {
          let {
              parentChannel: t,
              submit: n,
              disabled: r = !1,
              editorRef: s,
              setEditorRef: d,
            } = e,
            u = (0, h.e7)([F.default], () => F.default.getCurrentUser());
          o()(null != u, "current user cannot be null");
          let {
              messageError: m,
              previewing: x,
              textAreaState: f,
              bodyFocused: p,
              formOpen: C,
            } = (0, X.xH)((e) => {
              let {
                messageError: t,
                textAreaState: n,
                previewing: a,
                bodyFocused: i,
                formOpen: r,
              } = e;
              return {
                messageError: t,
                textAreaState: n,
                previewing: a,
                bodyFocused: i,
                formOpen: r,
              };
            }, c.X),
            b = (0, X.AF)();
          i.useEffect(
            () => () => (0, G.Vn)({ guildId: t.guild_id, channelId: t.id }),
            [t.guild_id, t.id],
          );
          let _ = i.useCallback(() => {
              b.getState().setBodyFocused(!0);
            }, [b]),
            I = i.useCallback(() => {
              b.getState().setBodyFocused(!1);
            }, [b]),
            T = i.useCallback(
              (e, t, n) => {
                let { setTextAreaState: a } = b.getState();
                a({ textValue: t, richValue: n });
              },
              [b],
            ),
            N = i.useCallback(
              (e) => {
                let { value: t, uploads: a, stickers: i } = e;
                return n(t, i, a);
              },
              [n],
            );
          (0, O.yp)({ event: $.CkL.TEXTAREA_FOCUS, handler: _ }),
            (0, O.yp)({ event: $.CkL.TEXTAREA_BLUR, handler: I });
          let S = (0, H.Op)(m, { content: f.textValue });
          return (0, a.jsx)("div", {
            className: en.bodyContainer,
            children: (0, a.jsxs)("div", {
              className: en.contentContainer,
              children: [
                x
                  ? (0, a.jsx)(eo, { parentChannel: t, textValue: f.textValue })
                  : (0, a.jsx)("div", {
                      onClick: _,
                      children: (0, a.jsx)(v.Z, {
                        type: ea,
                        setEditorRef: d,
                        channel: t,
                        placeholder: et.intl.string(et.t["8IPnv7"]),
                        textValue: f.textValue,
                        richValue: f.richValue,
                        focused: p,
                        className: en.channelTextArea,
                        innerClassName: l()(en.channelTextAreaInner, {
                          [en.channelTextAreaInnerError]: null != S,
                        }),
                        onChange: T,
                        onSubmit: N,
                        promptToUpload: z.d,
                        disabled: r,
                        onKeyDown: (e) => {
                          if (
                            (("ArrowUp" === e.key || "ArrowDown" === e.key) &&
                              e.stopPropagation(),
                            "Home" === e.key || "End" === e.key)
                          ) {
                            if (null == s) return;
                            e.preventDefault(), e.stopPropagation();
                            let t = s.getSlateEditor();
                            if (null == t) return;
                            "Home" === e.key
                              ? j.Q.resetSelectionToStart(t)
                              : j.Q.resetSelectionToEnd(t);
                          }
                          C &&
                            "Escape" === e.key &&
                            !b.getState().submitting &&
                            (null == s || s.blur(),
                            b.getState().setFormOpen(!1),
                            b.getState().setTitleFocused(!1),
                            b.getState().setBodyFocused(!1),
                            b.getState().setPreviewing(!1));
                        },
                        autoCompletePosition: "bottom",
                      }),
                    }),
                (0, a.jsx)(g.InputError, { error: S }),
              ],
            }),
          });
        });
      function ed() {
        return (0, a.jsx)("div", {
          className: en.previewModeIndicator,
          children: (0, a.jsx)(g.Text, {
            variant: "text-sm/normal",
            color: "interactive-normal",
            children: et.intl.string(et.t["WE/cYm"]),
          }),
        });
      }
      function eu() {
        let { previewing: e } = (0, X.xH)((e) => {
            let { previewing: t } = e;
            return { previewing: t };
          }, c.X),
          t = (0, X.AF)(),
          n = i.useCallback(() => {
            t.getState().setPreviewing(!e), (0, G.nE)();
          }, [e, t]);
        return (0, a.jsx)(g.Tooltip, {
          text: e ? et.intl.string(et.t.ojM1xM) : et.intl.string(et.t.SKNnqq),
          children: (t) =>
            (0, a.jsx)(g.Clickable, {
              ...t,
              onClick: n,
              className: l()(en.forumPostFormButton, {
                [en.forumPostFormButtonActive]: e,
              }),
              children: e
                ? (0, a.jsx)(g.EyeSlashIcon, {
                    size: "md",
                    color: "currentColor",
                    ...t,
                  })
                : (0, a.jsx)(g.EyeIcon, {
                    size: "md",
                    color: "currentColor",
                    ...t,
                  }),
            }),
        });
      }
      let em = i.memo(function (e) {
        let { parentChannel: t, canCreatePost: n, className: r } = e,
          {
            textAreaState: l,
            appliedTags: s,
            name: o,
          } = (0, X.xH)((e) => {
            let { textAreaState: t, appliedTags: n, name: a } = e;
            return { textAreaState: t, appliedTags: n, name: a };
          }, c.X),
          { rateLimitPerUser: d } = t,
          u = d > 0,
          m = (0, h.e7)([A.Z], () =>
            A.Z.getSlowmodeCooldownGuess(t.id, A.S.CreateThread),
          ),
          x = (0, h.e7)(
            [Z.Z],
            () =>
              Z.Z.can($.Plq.MANAGE_THREADS, t) ||
              Z.Z.can($.Plq.MANAGE_CHANNELS, t),
          ),
          f =
            t.hasFlag(ee.zZ.REQUIRE_TAG) &&
            0 === s.size &&
            o.length > 0 &&
            l.textValue.length > 0,
          p = (0, X.AF)(),
          v = i.useCallback(() => {
            p.getState().setBodyFocused(!1);
          }, [p]),
          j = i.useMemo(
            () => "" !== o.trim() && "" !== l.textValue.trim(),
            [o, l.textValue],
          );
        return (
          i.useEffect(() => {
            !j && p.getState().setPreviewing(!1);
          }, [j, p]),
          (0, a.jsxs)("div", {
            className: r,
            children: [
              (0, a.jsx)(ex, { parentChannel: t }),
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
                          f &&
                            (0, a.jsx)(g.Text, {
                              variant: "text-sm/normal",
                              color: "text-danger",
                              children: et.intl.string(et.t.xPfNQk),
                            }),
                          (0, a.jsx)(b.Z, {
                            type: ea,
                            textValue: l.textValue,
                            className: en.characterCount,
                          }),
                          u &&
                            (0, a.jsx)(J.Z, {
                              rateLimitPerUser: d,
                              slowmodeCooldownGuess: m,
                              isBypassSlowmode: x,
                              leadingIcon: !0,
                            }),
                        ],
                      }),
                      (0, a.jsx)(es, { parentChannel: t }),
                      j && (0, a.jsx)(eu, {}),
                      (0, a.jsx)(eh, {
                        parentChannel: t,
                        disableIfInvalid: !0,
                        canCreatePost: n,
                        disabled: u && !x && m > 0,
                      }),
                    ],
                  }),
                  (0, a.jsx)(
                    C.Z,
                    { type: ea, className: en.expressionPicker, onClick: v },
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
            disabled: i,
            disableIfInvalid: r = !1,
          } = e,
          {
            submitting: l,
            textAreaState: s,
            name: o,
            appliedTags: d,
            formOpen: u,
          } = (0, X.xH)((e) => {
            let {
              submitting: t,
              textAreaState: n,
              name: a,
              appliedTags: i,
              formOpen: r,
            } = e;
            return {
              submitting: t,
              textAreaState: n,
              name: a,
              appliedTags: i,
              formOpen: r,
            };
          }, c.X),
          m =
            t.hasFlag(ee.zZ.REQUIRE_TAG) &&
            0 === d.size &&
            o.length > 0 &&
            s.textValue.length > 0,
          x = (0, h.Wu)([L.Z], () =>
            L.Z.getUploads(t.id, k.d.FirstThreadMessage),
          ),
          f = s.textValue.trim().length > 0 || x.length > 0,
          p = !m && f && o.trim().length > 0;
        if (__OVERLAY__) return null;
        let C = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return (0, a.jsxs)(g.Button, {
            ...e,
            size: g.Button.Sizes.SMALL,
            className: en.submitButton,
            innerClassName: en.submitButtonInner,
            type: "submit",
            submitting: l,
            disabled: (r && !p) || i || !n,
            children: [
              (0, a.jsx)(g.ChatIcon, {
                size: "xs",
                color: "currentColor",
                className: en.submitIcon,
              }),
              (0, a.jsx)(g.Text, {
                variant: "text-md/semibold",
                color: "none",
                children: u
                  ? et.intl.string(et.t.pIuQIy)
                  : et.intl.string(et.t.TyAuoa),
              }),
            ],
          });
        };
        return n
          ? C()
          : (0, a.jsx)(g.Tooltip, {
              text: et.intl.string(et.t.iyzwnJ),
              children: (e) => C(e),
            });
      }
      function eg() {
        return Promise.resolve();
      }
      function ex(e) {
        let { parentChannel: t } = e,
          {
            appliedTags: n,
            toggleAppliedTag: r,
            setPopoutOpen: s,
          } = (0, X.xH)((e) => {
            let { appliedTags: t, toggleAppliedTag: n, setPopoutOpen: a } = e;
            return { appliedTags: t, toggleAppliedTag: n, setPopoutOpen: a };
          }, c.X),
          o = n.size >= Q.Cn,
          h = (0, d.ZP)({
            id: "".concat(t.id, "-post-form-tags-navigator"),
            isEnabled: !0,
            wrap: !0,
            scrollToStart: eg,
            scrollToEnd: eg,
            orientation: m.hy.HORIZONTAL,
          }),
          { containerRef: x, containerWidth: f } = (0, Y.Z)(),
          p = i.useRef(null),
          [C, v] = i.useState(!0),
          b = (0, V.Vm)(t),
          [j, _] = i.useState(0);
        return (i.useLayoutEffect(() => {
          var e;
          let t = p.current,
            n =
              null == t
                ? void 0
                : null === (e = t.children) || void 0 === e
                  ? void 0
                  : e[0],
            a = null == t || null == n || n.clientHeight > t.clientHeight;
          if (
            (a !== C && v(a),
            a && null != x.current && null != n && null != n.children)
          ) {
            let { left: e, top: t } = x.current.getBoundingClientRect(),
              a = 0;
            for (let i of n.children) {
              let { right: n, top: r, height: l } = i.getBoundingClientRect();
              if (r - t > l) break;
              n - e > a && (a = n - e);
            }
            _(a);
          }
        }, [b, C, x, f]),
        0 === b.length)
          ? null
          : (0, a.jsx)(a.Fragment, {
              children: (0, a.jsxs)("div", {
                className: en.tagsContainer,
                ref: x,
                children: [
                  (0, a.jsx)(g.TagIcon, {
                    size: "xs",
                    color: "currentColor",
                    className: en.tagsIcon,
                  }),
                  (0, a.jsx)("div", {
                    className: en.tagList,
                    ref: p,
                    children: (0, a.jsx)(u.bG, {
                      navigator: h,
                      children: (0, a.jsx)(u.SJ, {
                        children: (e) => {
                          let { ref: t, ...i } = e;
                          return (0, a.jsx)("div", {
                            className: en.tagListInner,
                            ref: t,
                            ...i,
                            children: b.map((e) =>
                              (0, a.jsx)(
                                K.Z,
                                {
                                  ariaLabel: et.intl.formatToPlainString(
                                    et.t.FSZVIS,
                                    { tagName: e.name },
                                  ),
                                  tag: e,
                                  onClick:
                                    o && !n.has(e.id) ? void 0 : () => r(e.id),
                                  disabled: !n.has(e.id) && n.size >= Q.Cn,
                                  selected: n.has(e.id),
                                  size: K.Z.Sizes.SMALL,
                                },
                                e.id,
                              ),
                            ),
                          });
                        },
                      }),
                    }),
                  }),
                  C &&
                    (0, a.jsx)(g.Popout, {
                      onRequestOpen: () => s(!0),
                      onRequestClose: () => s(!1),
                      renderPopout: (e) => {
                        let { closePopout: i } = e;
                        return (0, a.jsx)(W.Z, {
                          parentChannel: t,
                          appliedTags: n,
                          maxTagsApplied: o,
                          onSelectTag: r,
                          onClose: i,
                        });
                      },
                      position: "bottom",
                      align: "center",
                      children: (e) =>
                        (0, a.jsxs)(g.Button, {
                          ...e,
                          size: g.Button.Sizes.TINY,
                          className: en.tagsButton,
                          innerClassName: en.tagsButtonInner,
                          style: { left: j },
                          look: g.Button.Looks.LINK,
                          "aria-label": et.intl.string(et.t.N5vP9P),
                          children: [
                            et.intl.string(et.t.IkpM1d),
                            (0, a.jsx)(g.ChevronSmallDownIcon, {
                              size: "custom",
                              color: "currentColor",
                              width: 16,
                            }),
                          ],
                        }),
                    }),
                  (0, a.jsxs)(g.Button, {
                    size: g.Button.Sizes.TINY,
                    className: l()(en.tagsButton, en.tagsButtonPlaceholder),
                    innerClassName: en.tagsButtonInner,
                    look: g.Button.Looks.LINK,
                    "aria-label": et.intl.string(et.t.N5vP9P),
                    children: [
                      et.intl.string(et.t.IkpM1d),
                      (0, a.jsx)(g.ChevronSmallDownIcon, {
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
      function ef(e) {
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
      var a = n(200651),
        i = n(192379),
        r = n(120356),
        l = n.n(r),
        s = n(683860),
        o = n(442837),
        c = n(692547),
        d = n(481060),
        u = n(738619),
        m = n(824578),
        h = n(841762),
        g = n(25610),
        x = n(406432),
        f = n(169525),
        p = n(255269),
        C = n(930282),
        v = n(524444),
        b = n(695346),
        j = n(433355),
        _ = n(592125),
        I = n(496675),
        T = n(456269),
        N = n(109590),
        S = n(368844),
        w = n(73315),
        y = n(404616),
        E = n(510060),
        R = n(983200),
        P = n(196255),
        M = n(858543),
        k = n(482062),
        Z = n(883728),
        A = n(710352),
        L = n(981631),
        F = n(388032),
        O = n(129702);
      function B(e) {
        let {
            id: t,
            channel: n,
            goToThread: r,
            overrideMedia: u,
            className: m,
            coords: h,
            gridCoords: g,
            gridSectionBoundaries: x,
            observePostVisibilityAnalytics: f,
          } = e,
          C = (0, o.e7)([_.Z], () => _.Z.getChannel(n.parent_id)),
          v = n.id,
          w = i.useRef(null),
          R = (0, o.e7)(
            [j.ZP],
            () => j.ZP.getCurrentSidebarChannelId(n.parent_id) === n.id,
          ),
          { firstMessage: B, loaded: H } = (0, N.cl)(n),
          { firstMedia: D } = (0, T.mX)({
            firstMessage: B,
            formatInline: !1,
            noStyleAndInteraction: !1,
          }),
          { messageCountText: V } = (0, T.nP)(n),
          { isNew: W, hasUnreads: q } = (0, T.J$)(n),
          X = i.useRef(null),
          { handleLeftClick: K, handleRightClick: J } = (0, Z.Z)({
            facepileRef: X,
            goToThread: r,
            channel: n,
          });
        i.useEffect(() => {
          null == f || f(w.current, v);
        }, [f, v]);
        let Y = (0, o.e7)([I.Z], () => I.Z.can(L.Plq.MANAGE_MESSAGES, n)),
          Q = b.QK.useSetting(),
          $ = b.cC.useSetting(),
          ee = (0, p.Z)($, Y),
          et = (0, S.aU)(B, C, !1),
          [en, ea] = (0, E.rI)(h.width - 2 * E.LT),
          ei = (0, T.xw)(n, s.z.CREATION_DATE, A.R6.POSTED_DURATION_AGO),
          er = (0, y.NN)(n),
          el = (null == B ? void 0 : B.blocked) || null == (null != u ? u : D),
          { onFocus: es, ...eo } = (0, k.nX)({
            id: t,
            row: g.row,
            column: g.column,
            section: g.section,
            boundaries: x,
          }),
          ec = n.isMediaPost();
        return (0, a.jsxs)("li", {
          ref: w,
          onClick: K,
          onFocus: es,
          onContextMenu: J,
          className: l()(O.container, m, { [O.isOpen]: R }),
          style: { ...h },
          children: [
            (0, a.jsx)(d.Clickable, {
              onClick: K,
              focusProps: { ringTarget: w },
              onContextMenu: J,
              "aria-label": F.intl.formatToPlainString(F.t.pgYN6e, {
                title: n.name,
                count: V,
              }),
              className: O.focusTarget,
              ...eo,
            }),
            (0, a.jsxs)("div", {
              className: O.header,
              children: [
                (0, a.jsxs)("div", {
                  className: O.authorRow,
                  children: [
                    (0, a.jsxs)("div", {
                      className: O.rowGroup,
                      children: [
                        (0, a.jsx)(P.Z, { channel: n, message: B }),
                        (0, a.jsx)(d.Text, {
                          variant: "text-xs/normal",
                          color: "header-secondary",
                          className: O.postCreationTimestamp,
                          children: ei,
                        }),
                      ],
                    }),
                    W
                      ? (0, a.jsx)(d.TextBadge, {
                          className: l()(O.newBadge),
                          color: c.Z.unsafe_rawColors.BRAND_260.css,
                          text: F.intl.string(F.t.y2b7CA),
                        })
                      : null,
                  ],
                }),
                (0, a.jsx)(d.HeadingLevel, {
                  children: (0, a.jsx)(d.Heading, {
                    variant: "heading-md/extrabold",
                    className: O.title,
                    color: q ? "header-primary" : "text-muted",
                    style: { width: "".concat(h.width - 2 * E.I8, "px") },
                    children: er,
                  }),
                }),
              ],
            }),
            (0, a.jsx)("div", {
              className: O.postBody,
              children: (0, a.jsx)(d.FocusBlock, {
                children: el
                  ? (0, a.jsx)(G, {
                      channel: n,
                      firstMessage: B,
                      isFirstMessageLoaded: H,
                      containerWidth: h.width,
                      hasUnreads: q,
                    })
                  : (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)(U, {
                          mediaAttachments: et,
                          globalSpoilerRenderSetting: ee,
                          containerWidth: en,
                          containerHeight: ec ? (9 / 16) * en : ea,
                          canAutoPlay: Q,
                          shouldMaintainAspectRatio: ec,
                        }),
                        (0, a.jsx)("div", {
                          className: O.tagsRow,
                          children: (0, a.jsx)(M.ZP, {
                            channel: n,
                            tagsClassName: O.tagPill,
                          }),
                        }),
                      ],
                    }),
              }),
            }),
            (0, a.jsx)("div", {
              className: O.footer,
              children: (0, a.jsx)(d.FocusBlock, {
                children: (0, a.jsx)(z, {
                  channel: n,
                  firstMessage: B,
                  facepileRef: X,
                }),
              }),
            }),
          ],
        });
      }
      function z(e) {
        let { channel: t, facepileRef: n, firstMessage: i } = e,
          r = (0, m.Q)(t.id),
          l =
            (null == i ? void 0 : i.reactions) != null &&
            i.reactions.length > 0;
        return (0, a.jsxs)("div", {
          className: O.forumPostControls,
          children: [
            (0, a.jsxs)("div", {
              className: O.controlsGroup,
              children: [
                (0, a.jsx)("div", {
                  className: O.messageCountContainer,
                  children: (0, a.jsx)(y.m9, {
                    channel: t,
                    iconSize: 16,
                    showReadState: !0,
                  }),
                }),
                r.length > 0
                  ? (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)("span", {
                          className: O.bullet,
                          children: "•",
                        }),
                        (0, a.jsxs)("div", {
                          className: O.typing,
                          children: [
                            (0, a.jsx)(y.og, {
                              channel: t,
                              userIds: r,
                              facepileRef: n,
                            }),
                            (0, a.jsx)("div", {
                              className: O.dots,
                              children: (0, a.jsx)(d.Dots, {
                                themed: !0,
                                dotRadius: 2,
                              }),
                            }),
                            (0, a.jsx)(u.Z, {
                              channel: t,
                              className: O.typingUsers,
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
              className: O.controlsGroup,
              children: [
                l || null == i
                  ? null
                  : (0, a.jsx)(y.kZ, { firstMessage: i, channel: t }),
                null == i
                  ? null
                  : (0, a.jsx)(y.au, { firstMessage: i, channel: t }),
              ],
            }),
          ],
        });
      }
      t.Z = i.memo(function (e) {
        let {
            id: t,
            threadId: n,
            goToThread: i,
            overrideMedia: r,
            className: l,
            coords: s,
            gridCoords: c,
            gridSectionBoundaries: d,
            observePostVisibilityAnalytics: u,
          } = e,
          m = (0, o.e7)([_.Z], () => _.Z.getChannel(n));
        return null == m
          ? null
          : (0, a.jsx)(B, {
              id: t,
              channel: m,
              goToThread: i,
              overrideMedia: r,
              className: l,
              coords: s,
              gridCoords: c,
              observePostVisibilityAnalytics: u,
              gridSectionBoundaries: d,
            });
      });
      let H = (e) => e.preventDefault(),
        D = i.memo(function (e) {
          return (0, a.jsx)(a.Fragment, {
            children: (0, v.Yi)({
              ...e,
              analyticsSource: "ForumPostMediaPreviewImage",
            }),
          });
        }),
        U = i.memo(function (e) {
          let {
              mediaAttachments: t,
              globalSpoilerRenderSetting: n,
              containerWidth: r,
              containerHeight: s,
              canAutoPlay: o,
              shouldMaintainAspectRatio: c = !1,
            } = e,
            { containsVideo: u, containsGif: m } = i.useMemo(
              () => (0, S.cp)(t),
              [t],
            ),
            p = i.useMemo(() => t.slice(R.$x, R.GV), [t]),
            C = (0, R.tu)({
              numAttachments: p.length,
              containerWidth: r,
              containerHeight: s,
            }),
            v = (0, R.S$)({
              imageContainerStyles: C,
              containerWidth: r,
              containerHeight: s,
            }),
            b = (0, g.m)(),
            j = i.useMemo(
              () =>
                p.map((e, t) => {
                  var i;
                  let [r, s] = (0, f.As)(e, !n, b),
                    g = (0, f.MC)(s),
                    p = {
                      ...v[t],
                      src: e.src,
                      width: e.width,
                      height: e.height,
                      alt: null != e.alt && r ? g : e.alt,
                      onClick: H,
                      shouldRenderAccessory: !m && !u,
                    },
                    j = (0, x.d$)(e.src)
                      ? "".concat(e.src, "?format=png")
                      : e.src,
                    _ = o && !r ? e.src : j;
                  return (0, a.jsxs)(
                    "div",
                    {
                      className: O.bodyMediaFrame,
                      style: C[t],
                      children: [
                        c
                          ? (0, a.jsx)(h.Z, {
                              ...p,
                              src: _,
                              backgroundSrc: j,
                              aspectRatio: p.maxWidth / p.maxHeight,
                              alt:
                                null !== (i = p.alt) && void 0 !== i ? i : "",
                              className: l()(O.mediaPostContainer, {
                                [O.obscured]: r,
                              }),
                              imageChildClassName: O.mediaPostThumbnail,
                            })
                          : e.src.startsWith("data:")
                            ? (0, a.jsx)(d.Image, {
                                ...p,
                                className: O.mediaContainer,
                                imageClassName: l()(O.thumbnailOverride, {
                                  [O.obscured]: r,
                                }),
                              })
                            : (0, a.jsx)(D, {
                                ...p,
                                autoPlay: o && !r,
                                containerClassName: O.mosaicMediaContainer,
                                imageClassName: l()(O.imageCover, {
                                  [O.obscured]: r,
                                }),
                                responsive: !0,
                              }),
                        r &&
                          (0, a.jsx)("div", {
                            className: O.obscuredTagContainer,
                            children: (0, a.jsx)(w.Z, {
                              obscureReason: s,
                              iconClassname: O.obscuredTag,
                            }),
                          }),
                      ],
                    },
                    e.src,
                  );
                }),
              [o, m, u, n, C, v, p, c, b],
            );
          return (0, a.jsxs)("div", {
            className: O.bodyMedia,
            style: { width: r, height: s },
            children: [
              (0, a.jsx)(a.Fragment, { children: j }),
              (m || u) &&
                (0, a.jsxs)("div", {
                  className: O.mediaIconsRow,
                  children: [
                    u &&
                      (0, a.jsx)(d.PlayIcon, {
                        color: "currentColor",
                        size: "custom",
                        width: 22,
                        height: 22,
                        className: O.mediaIcon,
                      }),
                    m &&
                      (0, a.jsx)(d.GifIcon, {
                        size: "custom",
                        width: 29,
                        height: 29,
                        color: "currentColor",
                        className: O.mediaIcon,
                      }),
                  ],
                }),
              t.length > R.Vn &&
                (0, a.jsx)(V, {
                  text: (t.length - R.Vn).toString(),
                  icon: d.ImageIcon,
                  pillClassName: O.moreImagesPill,
                  iconClassName: O.moreImagesPillIcon,
                  textClassName: O.moreImagesPillText,
                }),
            ],
          });
        });
      function V(e) {
        let {
          text: t,
          icon: n,
          pillClassName: i,
          iconClassName: r,
          textClassName: l,
        } = e;
        return (0, a.jsxs)("div", {
          className: i,
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
      function G(e) {
        let {
            channel: t,
            firstMessage: n,
            isFirstMessageLoaded: r,
            containerWidth: s,
            hasUnreads: o,
          } = e,
          [c, u] = (0, E.rI)(s - 2 * E.LT),
          { content: m } = (0, T.mX)({
            firstMessage: n,
            formatInline: !1,
            noStyleAndInteraction: !0,
          }),
          { shouldRenderTagsRow: h } = (0, M.DM)({ channel: t, isNew: !1 }),
          g = i.useMemo(() => ({ width: c, height: u }), [c, u]),
          x = o ? O.textContentUnread : O.textContentRead;
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsxs)("div", {
            className: O.contentPreview,
            style: g,
            children: [
              (0, a.jsxs)("div", {
                className: O.content,
                children: [
                  r &&
                    null == n &&
                    (0, a.jsx)(d.Text, {
                      variant: "text-sm/normal",
                      color: o ? "header-secondary" : "text-muted",
                      children: F.intl.string(F.t.mE3KJC),
                    }),
                  r &&
                    null != n &&
                    (0, a.jsx)(C.ZP, { message: n, content: m, className: x }),
                ],
              }),
              (0, a.jsx)("div", {
                className: l()(O.textContentFooter, { [O.noTags]: !h }),
                children: h
                  ? (0, a.jsx)(M.ZP, {
                      channel: t,
                      tagsClassName: O.tagPill,
                      className: O.__invalid_row,
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
      var a = n(200651);
      n(192379);
      var i = n(313361),
        r = n(683860),
        l = n(481060),
        s = n(109434),
        o = n(228392),
        c = n(388032),
        d = n(135408);
      function u(e) {
        let { channel: t, closePopout: n } = e,
          { sortOrder: u, layoutType: m } = (0, s.H)(t.id),
          h = (0, s.v)(),
          g = t.isMediaChannel(),
          x = (e) => {
            (0, o.KR)({ guildId: t.guild_id, channelId: t.id, sortOrder: e }),
              h.getState().setSortOrder(t.id, e),
              n();
          },
          f = (e) => {
            (0, o.Do)({ guildId: t.guild_id, channelId: t.id, forumLayout: e }),
              h.getState().setLayoutType(t.id, e),
              n();
          };
        return (0, a.jsx)("div", {
          className: d.container,
          children: (0, a.jsxs)(l.Menu, {
            navId: "sort-and-view",
            "aria-label": g
              ? c.intl.string(c.t["kQN/bm"])
              : c.intl.string(c.t.DJzbkJ),
            hideScroller: !0,
            onClose: n,
            onSelect: n,
            children: [
              (0, a.jsxs)(l.MenuGroup, {
                label: c.intl.string(c.t.f8wNDg),
                children: [
                  (0, a.jsx)(l.MenuRadioItem, {
                    id: "sort-by-recent-activity",
                    group: "sort-by",
                    label: c.intl.string(c.t.jOPmcH),
                    action: () => x(r.z.LATEST_ACTIVITY),
                    checked: u === r.z.LATEST_ACTIVITY,
                  }),
                  (0, a.jsx)(l.MenuRadioItem, {
                    id: "sort-by-date-posted",
                    group: "sort-by",
                    label: c.intl.string(c.t.UIltXV),
                    action: () => x(r.z.CREATION_DATE),
                    checked: u === r.z.CREATION_DATE,
                  }),
                ],
              }),
              !t.isMediaChannel() &&
                (0, a.jsxs)(l.MenuGroup, {
                  label: c.intl.string(c.t.mFMDSk),
                  children: [
                    (0, a.jsx)(l.MenuRadioItem, {
                      id: "view-as-list",
                      group: "view-as",
                      label: c.intl.string(c.t["NJFr+v"]),
                      action: () => f(i.X.LIST),
                      checked: m === i.X.LIST,
                    }),
                    (0, a.jsx)(l.MenuRadioItem, {
                      id: "view-as-grid",
                      group: "view-as",
                      label: c.intl.string(c.t.wKeggY),
                      action: () => f(i.X.GRID),
                      checked: m === i.X.GRID,
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
                    children: c.intl.string(c.t["3b//lJ"]),
                  }),
                  action: () => {
                    x(t.getDefaultSortOrder()), f(t.getDefaultLayout());
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
          return s;
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
        i = n.n(a);
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
        s = 12;
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
            i()(e < t, "minWidth needs to be smaller than maxWidth"),
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
        m = (e) => 60 + d(e - 2 * u)[1] + 24 + 3 * s;
    },
    983200: function (e, t, n) {
      "use strict";
      n.d(t, {
        $x: function () {
          return l;
        },
        GV: function () {
          return s;
        },
        S$: function () {
          return g;
        },
        Vn: function () {
          return o;
        },
        tu: function () {
          return m;
        },
      });
      var a = n(192379),
        i = n(31775),
        r = n.n(i);
      let l = 0,
        s = 4,
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
              i = Math.ceil((t - a) / 2);
            return [
              { top: 0, left: 0, position: c, width: n, height: t },
              { top: 0, left: n + a, position: c, width: n, height: i },
              { top: i + a, left: n + a, position: c, width: n, height: i },
            ];
          } else {
            let n = Math.ceil((e - a) / 2),
              i = Math.ceil((t - a) / 2);
            return [
              { top: 0, left: 0, position: c, width: n, height: i },
              { top: i + a, left: 0, position: c, width: n, height: i },
              { top: 0, left: n + a, position: c, width: n, height: i },
              { top: i + a, left: n + a, position: c, width: n, height: i },
            ];
          }
        },
        u = new (r())({ max: 100 });
      function m(e) {
        let { numAttachments: t, containerWidth: n, containerHeight: i } = e;
        return a.useMemo(
          () =>
            (function (e) {
              var t, n, a;
              let {
                numAttachments: i,
                containerWidth: r,
                containerHeight: l,
              } = e;
              let s =
                  ((t = i),
                  (n = r),
                  (a = l),
                  "".concat(t, "-").concat(n, "-").concat(a)),
                o = u.get(s);
              if (null != o) return o;
              {
                let e = d(r, l, i, 4);
                return u.set(s, e), e;
              }
            })({ numAttachments: t, containerWidth: n, containerHeight: i }),
          [t, n, i],
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
      function g(e) {
        let {
            imageContainerStyles: t,
            containerWidth: n,
            containerHeight: i,
          } = e,
          r = a.useRef(h(t)),
          l = a.useRef(n),
          s = a.useRef(i),
          o = n > l.current + 100,
          c = i > s.current + 100;
        return (o || c) && (r.current = h(t)), r.current;
      }
    },
    399894: function (e, t, n) {
      "use strict";
      var a = n(200651);
      n(192379);
      var i = n(120356),
        r = n.n(i),
        l = n(913527),
        s = n.n(l),
        o = n(481060),
        c = n(70956),
        d = n(388032),
        u = n(991932);
      t.Z = (e) => {
        let t,
          n,
          {
            rateLimitPerUser: i,
            slowmodeCooldownGuess: l,
            isBypassSlowmode: m,
            leadingIcon: h = !1,
          } = e;
        if (i >= c.Z.Seconds.HOUR) {
          let e = Math.floor(i / c.Z.Seconds.HOUR),
            t = Math.floor((i - e * c.Z.Seconds.HOUR) / c.Z.Seconds.MINUTE),
            a = i - e * c.Z.Seconds.HOUR - t * c.Z.Seconds.MINUTE;
          n = d.intl.formatToPlainString(d.t.oEwLe3, {
            hours: e,
            minutes: t,
            seconds: a,
          });
        } else if (i >= 60) {
          let e = Math.floor(i / 60);
          n = d.intl.formatToPlainString(d.t.DARKYm, {
            minutes: e,
            seconds: i - 60 * e,
          });
        } else n = d.intl.formatToPlainString(d.t["9yE8GR"], { seconds: i });
        if (!m && l > 0) {
          let e = s().duration(l);
          if (l > c.Z.Millis.HOUR) {
            let n = "".concat(e.minutes()).padStart(2, "0"),
              a = "".concat(e.seconds()).padStart(2, "0");
            t = "".concat(e.hours(), ":").concat(n, ":").concat(a);
          } else {
            let n = "".concat(e.seconds()).padStart(2, "0");
            t = "".concat(e.minutes(), ":").concat(n);
          }
        } else t = m ? d.intl.string(d.t.SSzXvb) : d.intl.string(d.t.Icu3bW);
        let g = (0, a.jsx)(o.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: t,
          }),
          x = (0, a.jsx)(o.TimerIcon, {
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
                ? (0, a.jsxs)(a.Fragment, { children: [x, g] })
                : (0, a.jsxs)(a.Fragment, { children: [g, x] }),
            }),
        });
      };
    },
    276357: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return C;
        },
      }),
        n(47120);
      var a = n(200651),
        i = n(192379),
        r = n(924826),
        l = n(91192),
        s = n(442837),
        o = n(481060),
        c = n(607070),
        d = n(109434),
        u = n(456269),
        m = n(228392),
        h = n(479099),
        g = n(981631),
        x = n(388032),
        f = n(158804);
      function p() {
        return Promise.resolve();
      }
      function C(e) {
        let { channel: t, closePopout: n, setPopoutRef: C } = e,
          v = (0, u.Vm)(t),
          { tagFilter: b } = (0, d.H)(t.id),
          j = (0, d.v)(),
          _ = (0, s.e7)([c.Z], () => c.Z.keyboardModeEnabled),
          I = i.useCallback(
            (e) => {
              (0, m.e7)({
                guildId: t.guild_id,
                channelId: t.id,
                tagId: e,
                filterTagIds: Array.from(b),
                added: !b.has(e),
                location: {
                  page: g.ZY5.GUILD_CHANNEL,
                  section: g.jXE.FORUM_CHANNEL_HEADER,
                  object: g.qAy.CHANNEL_TAG,
                },
              }),
                j.getState().toggleTagFilter(t.id, e);
            },
            [t, b, j],
          ),
          T = i.useCallback(() => {
            j.getState().setTagFilter(t.id, new Set()), !_ && n();
          }, [j, t.id, _, n]),
          N = (0, r.ZP)({
            id: "".concat(t.id, "-all-tags-dropdown-navigator"),
            isEnabled: !0,
            wrap: !0,
            scrollToStart: p,
            scrollToEnd: p,
          }),
          S = i.useRef(null);
        return (
          i.useEffect(() => {
            requestAnimationFrame(() => {
              if (null != S.current) {
                let e = S.current.querySelector(".".concat(f.tag));
                null != e && e.focus();
              }
            });
          }, []),
          (0, a.jsxs)(o.Dialog, {
            ref: C,
            "aria-label": x.intl.string(x.t.TdqRTk),
            className: f.container,
            children: [
              (0, a.jsx)("div", {
                className: f.header,
                children: (0, a.jsxs)("div", {
                  className: f.headerLeft,
                  children: [
                    (0, a.jsx)(o.Heading, {
                      color: "interactive-normal",
                      variant: "text-xs/bold",
                      className: f.headerText,
                      children: x.intl.string(x.t.HPu3kp),
                    }),
                    (0, a.jsx)("div", {
                      className: f.countContainer,
                      children: (0, a.jsx)(o.Text, {
                        className: f.countText,
                        color: "none",
                        variant: "text-xs/medium",
                        children: b.size,
                      }),
                    }),
                  ],
                }),
              }),
              (0, a.jsx)(l.bG, {
                navigator: N,
                children: (0, a.jsx)(l.SJ, {
                  children: (e) => {
                    let { ref: t, ...n } = e;
                    return (0, a.jsx)("div", {
                      ref: (e) => {
                        (t.current = e), (S.current = e);
                      },
                      ...n,
                      className: f.tagContainer,
                      children: v.map((e) =>
                        (0, a.jsx)(
                          h.Z,
                          {
                            className: f.tag,
                            tag: e,
                            selected: b.has(e.id),
                            onClick: () => I(e.id),
                          },
                          e.id,
                        ),
                      ),
                    });
                  },
                }),
              }),
              (0, a.jsx)("div", { className: f.separator }),
              (0, a.jsx)(o.Button, {
                look: o.Button.Looks.LINK,
                size: o.Button.Sizes.MIN,
                color: o.Button.Colors.CUSTOM,
                className: f.clear,
                "aria-label": x.intl.string(x.t["98EPQE"]),
                onClick: T,
                children: (0, a.jsx)(o.Text, {
                  variant: "text-sm/medium",
                  color: "text-link",
                  children: x.intl.string(x.t["98EPQE"]),
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
      var a = n(192379),
        i = n(796075),
        r = n(481060);
      let l = "undefined" == typeof ResizeObserver ? i.d : ResizeObserver,
        s = new Map(),
        o = new l((e) => {
          e.forEach((e) => {
            var t;
            let { target: n } = e;
            null === (t = s.get(n)) || void 0 === t || t(e);
          });
        });
      t.Z = () => {
        let e = a.useRef(null),
          [t, n] = a.useState(400),
          i = a.useCallback(() => {
            null !== e.current && n(e.current.clientWidth);
          }, [n, e]);
        return (
          (0, r.useResizeObserverSubscription)({
            ref: e,
            key: "forum-container",
            onUpdate: i,
            resizeObserver: o,
            listenerMap: s,
          }),
          { containerRef: e, containerWidth: t }
        );
      };
    },
    482062: function (e, t, n) {
      "use strict";
      n.d(t, {
        KT: function () {
          return C;
        },
        ZP: function () {
          return h;
        },
        nX: function () {
          return p;
        },
      }),
        n(47120);
      var a = n(200651),
        i = n(192379),
        r = n(25441),
        l = n(536895),
        s = n(260866);
      let o = "data-grid-item-id",
        c = "data-grid-section",
        d = "data-grid-prev-section-boundary",
        u = new Set([l.R8.UP, l.R8.DOWN, l.R8.LEFT, l.R8.RIGHT]);
      function m(e) {
        let { section: t, column: n, row: a } = e,
          i = "[".concat(c, '="').concat(t, '"]'),
          r = "[".concat("aria-colindex", '="').concat(n, '"]'),
          l = "[".concat("aria-rowindex", '="').concat(a, '"]');
        return "".concat(i).concat(r).concat(l);
      }
      function h(e) {
        let { id: t, isEnabled: n, setFocus: a } = e,
          c = i.useRef(null),
          h = i.useRef(!1),
          g = i.useRef(null),
          x = i.useRef(n);
        i.useLayoutEffect(() => {
          x.current = n;
        }, [n]);
        let f = i.useCallback((e) => {
            var t;
            return (
              null !== (t = g.current) && void 0 !== t ? t : document
            ).querySelector(e);
          }, []),
          p = i.useCallback(
            (e, t) => {
              x.current && a(e, t);
            },
            [a],
          ),
          C = i.useCallback((e) => {
            if (x.current) {
              var t;
              null === (t = document.querySelector(e)) ||
                void 0 === t ||
                t.focus();
            }
          }, []),
          v = i.useCallback(
            (e) => {
              c.current = e;
              let n = (0, s.P1)(e, o),
                a = (0, s.x3)(e);
              p(n, a), (0, r.h)(t, a, !0);
            },
            [t, p],
          ),
          [b, j] = i.useState(!1),
          _ = i.useRef(b);
        i.useLayoutEffect(() => {
          _.current = b;
        }, [b]),
          i.useLayoutEffect(() => {
            let e = g.current;
            if (null != e)
              return (
                e.addEventListener("focusin", n),
                e.addEventListener("focusout", a),
                e.addEventListener("focus", i),
                e.addEventListener("scroll", r, { passive: !0 }),
                () => {
                  e.removeEventListener("focusin", n),
                    e.removeEventListener("focusout", a),
                    e.removeEventListener("focus", i),
                    e.removeEventListener("scroll", r);
                }
              );
            function n() {
              j(!0);
            }
            function a(e) {
              if (!e.currentTarget.contains(e.relatedTarget))
                j(!1),
                  requestAnimationFrame(() => {
                    let e = c.current;
                    null !== e &&
                      null == f((0, s.P1)(e, o)) &&
                      C((0, s.P1)(t, "data-grid-id"));
                  });
            }
            function i() {
              let e = g.current;
              if (_.current || null == e) return;
            }
            function r() {
              h.current = !0;
            }
          }, [t, p, C, v, f]);
        let I = i.useCallback(
            (e) => {
              var t, n;
              if (!x.current) return;
              let a = c.current,
                i = g.current;
              if (null == a) return;
              let r = (0, s.P1)(a, o),
                h = null == i ? void 0 : i.querySelector(r);
              if (null == h) return;
              let p = parseInt(
                  null !== (t = h.getAttribute("data-grid-section")) &&
                    void 0 !== t
                    ? t
                    : "",
                ),
                C = parseInt(h.getAttribute("aria-rowindex")),
                b = parseInt(h.getAttribute("aria-colindex"));
              switch (
                (u.has(e.key) && (e.stopPropagation(), e.preventDefault()),
                e.key)
              ) {
                case l.R8.RIGHT: {
                  let e = f(m({ section: p, row: C, column: b + 1 }));
                  if (null != e) {
                    let t = e.getAttribute(o);
                    null != t && v(t);
                  }
                  return;
                }
                case l.R8.LEFT: {
                  let e = f(m({ section: p, row: C, column: b - 1 }));
                  if (null != e) {
                    let t = e.getAttribute(o);
                    null != t && v(t);
                  }
                  return;
                }
                case l.R8.DOWN: {
                  let e = f(m({ section: p, row: C + 1, column: b }));
                  if (
                    (null == e &&
                      (e = f(m({ section: p + 1, row: 0, column: b }))),
                    null != e)
                  ) {
                    let t = e.getAttribute(o);
                    null != t && v(t);
                  }
                  return;
                }
                case l.R8.UP: {
                  let e;
                  if (0 === C) {
                    let t = parseInt(h.getAttribute(d));
                    null == (e = f(m({ section: p - 1, row: t, column: b }))) &&
                      (e = f(m({ section: p - 1, row: t - 1, column: b })));
                  } else e = f(m({ section: p, row: C - 1, column: b }));
                  if (null != e) {
                    let t = e.getAttribute(o);
                    null != t && v(t);
                  }
                  return;
                }
                case l.R8.SPACE:
                case l.R8.ENTER: {
                  if (e.repeat) return;
                  let t = c.current;
                  if (null != t) {
                    let a = f((0, s.P1)(t, o)),
                      i =
                        null !== (n = null == a ? void 0 : a.ownerDocument) &&
                        void 0 !== n
                          ? n
                          : document,
                      r = a === i.activeElement;
                    null != a &&
                      r &&
                      (e.preventDefault(),
                      e.stopPropagation(),
                      null == a || a.click());
                  }
                }
              }
            },
            [f, v],
          ),
          T = i.useCallback(
            (e) => {
              let n = null != e ? (0, s.jb)(t, e) : null;
              c.current = n;
            },
            [t],
          );
        return i.useMemo(
          () => ({
            id: t,
            containerProps: { onKeyDown: I, ref: g },
            setFocus: T,
          }),
          [t, I, T],
        );
      }
      let g = { id: "NO_LIST", onKeyDown() {}, ref: i.createRef() },
        x = i.createContext({ id: "NO_LIST", setFocus() {} }),
        f = i.createContext(g);
      function p(e) {
        let { id: t, section: n, row: a, column: l, boundaries: u } = e,
          [m, h] = i.useState(0 === a && 0 === l ? 0 : -1),
          { id: g, setFocus: f } = i.useContext(x),
          p = i.useCallback(() => f(t), [t, f]);
        return (
          i.useLayoutEffect(
            () =>
              (0, r.N)(g, (e) => {
                h(e === t ? 0 : -1);
              }),
            [t, g],
          ),
          {
            [o]: (0, s.jb)(g, t),
            [c]: n,
            [d]: u[n],
            role: "gridcell",
            "aria-rowindex": a,
            "aria-colindex": l,
            tabIndex: m,
            onFocus: p,
          }
        );
      }
      function C(e) {
        let { children: t, navigator: n } = e,
          {
            id: r,
            setFocus: l,
            containerProps: { onKeyDown: s, ref: o },
          } = n,
          c = i.useMemo(() => ({ id: r, setFocus: l }), [r, l]),
          d = i.useMemo(() => ({ onKeyDown: s, ref: o, id: r }), [s, o, r]);
        return (0, a.jsx)(f.Provider, {
          value: d,
          children: (0, a.jsx)(x.Provider, { value: c, children: t }),
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
      var a = n(192379),
        i = n(924826);
      function r(e) {
        let { listRef: t, padding: n, channel: r, isEnabled: l } = e,
          s = a.useCallback(
            (e) => {
              let a = t.current,
                i = document.querySelector(e);
              null != i &&
                (null == a ||
                  a.scrollIntoViewNode({
                    node: i,
                    padding: n,
                    callback: () => {
                      var t;
                      null === (t = document.querySelector(e)) ||
                        void 0 === t ||
                        t.focus({ preventScroll: !0 });
                    },
                  }));
            },
            [n, t],
          ),
          o = a.useCallback(
            () =>
              new Promise((e) => {
                let n = t.current;
                null == n ||
                  n.scrollToTop({ callback: () => requestAnimationFrame(e) });
              }),
            [t],
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
            [t],
          );
        return (0, i.ZP)({
          id: "forum-channel-list-".concat(r.id),
          isEnabled: l,
          scrollToStart: o,
          scrollToEnd: c,
          setFocus: s,
        });
      }
    },
    337077: function (e, t, n) {
      "use strict";
      n.d(t, {
        M: function () {
          return c;
        },
      }),
        n(47120),
        n(653041);
      var a = n(192379),
        i = n(392711),
        r = n(990169),
        l = n(591759),
        s = n(158222),
        o = n(154135);
      function c(e, t, n) {
        var c, d, u;
        let m = a.useRef(new Map()),
          [, h] = a.useState(null),
          [g, x] = a.useState(null);
        let f =
          ((c = t),
          (d = m),
          (u = x),
          a.useMemo(
            () =>
              i.debounce((e, t) => {
                if (null == t || e || 0 === c) return;
                let n = t.match(l.Z.URL_REGEX);
                if (null == n || 0 === n.length) {
                  (d.current = new Map()), u(null);
                  return;
                }
                u(i.uniq(n).slice(0, o.Yh));
              }, 1e3),
            [c, d, u],
          ));
        a.useEffect(() => {
          f(e, n);
        }, [f, n, e]),
          a.useEffect(() => {
            (async function e(e, t) {
              if (null == t) return;
              let n = e.current,
                a = new Set(n.keys()),
                i = t.filter((e) => !(null == a ? void 0 : a.has(e)));
              if (0 !== i.length)
                try {
                  let t = await s.V6(i);
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
                          let i = e.get(a);
                          null == i ? e.set(a, [n]) : i.push(n);
                        }),
                      e
                    );
                  })(new Map(n), i, null == t ? void 0 : t.embeds)),
                    h({});
                } catch (e) {}
            })(m, g);
          }, [g]);
        let p = (0, r.Z)(m),
          C = a.useMemo(() => {
            let e = [];
            return (
              null == g ||
                g.forEach((t) => {
                  let n = p.get(t);
                  null != n && e.push(...n);
                }),
              e.length > 0 ? e : null
            );
          }, [g, p]);
        return { embeds: e ? null : C };
      }
    },
    621516: function (e, t, n) {
      "use strict";
      var a = n(200651),
        i = n(192379),
        r = n(120356),
        l = n.n(r),
        s = n(642128),
        o = n(442837),
        c = n(780384),
        d = n(481060),
        u = n(410030),
        m = n(607070),
        h = n(70097),
        g = n(961675),
        x = n(883429),
        f = n(432771),
        p = n(406074),
        C = n(434404),
        v = n(430824),
        b = n(63063),
        j = n(595433),
        _ = n(981631),
        I = n(388032),
        T = n(841835),
        N = n(906739),
        S = n(965358),
        w = n(420196),
        y = n(433075);
      function E(e) {
        let { handleHide: t } = e;
        return (0, a.jsx)(d.Clickable, {
          onClick: t,
          className: T.closeButton,
          "aria-label": I.intl.string(I.t.WAI6xs),
          children: (0, a.jsx)(d.XSmallIcon, {
            size: "md",
            color: "currentColor",
            className: T.closeIcon,
          }),
        });
      }
      function R(e) {
        let {
          username: t,
          title: n,
          videoSrc: i,
          messageCount: r,
          reaction: s,
          reactionCount: o,
          classname: c,
        } = e;
        return (0, a.jsxs)("div", {
          className: l()(T.videoPreview, c),
          children: [
            (0, a.jsx)("div", {
              className: T.authorRow,
              children: (0, a.jsxs)("div", {
                className: T.rowGroup,
                children: [
                  (0, a.jsx)(d.Text, {
                    tag: "span",
                    className: T.author,
                    variant: "text-sm/semibold",
                    children: t,
                  }),
                  (0, a.jsx)(d.Text, {
                    variant: "text-xs/normal",
                    color: "header-secondary",
                    className: T.postCreationTimestamp,
                    children: I.intl.string(I.t.mA0IvL),
                  }),
                ],
              }),
            }),
            (0, a.jsx)(d.Heading, {
              variant: "heading-md/extrabold",
              className: T.title,
              color: "header-primary",
              "aria-hidden": !0,
              children: n,
            }),
            (0, a.jsx)(d.Spacer, { size: 10 }),
            (0, a.jsx)(h.Z, {
              className: T.video,
              src: i,
              autoPlay: !0,
              loop: !0,
              muted: !0,
            }),
            (0, a.jsx)(d.Spacer, { size: 10 }),
            (0, a.jsx)("div", {
              className: T.footer,
              children: (0, a.jsxs)("div", {
                className: T.forumPostControls,
                children: [
                  (0, a.jsxs)("div", {
                    className: T.messageCountBox,
                    children: [
                      (0, a.jsx)("span", {
                        className: T.messageCountIcon,
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
                    className: T.reactionBox,
                    children: [
                      (0, a.jsx)("span", {
                        role: "img",
                        "aria-label": "",
                        children: s,
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
          P = (0, c.wj)(h),
          M = (0, o.e7)([v.Z], () => v.Z.getGuild(r.guild_id)),
          k = (0, o.e7)([m.Z], () => m.Z.useReducedMotion),
          Z = (0, o.e7)([g.Z], () => g.Z.hasHidden(r.id)),
          A = (0, p.C)({ guildId: r.guild_id, channelId: r.id }),
          { transitions: L, setVisible: F } = (0, j.H)(),
          O = i.useCallback(() => {
            F(!1), x.Z.hideAdminOnboarding(r.id, !0);
          }, [r, F]);
        i.useEffect(() => {
          !(0, f.c)(r.id) && F(!Z);
        }, [r, F, Z]);
        let B = i.useMemo(
            () => [
              I.intl.string(I.t["8pEGAw"]),
              I.intl.string(I.t.jwfgDQ),
              I.intl.string(I.t.mPKs29),
              I.intl.string(I.t.StRbvL),
            ],
            [],
          ),
          z = i.useMemo(
            () => [
              I.intl.string(I.t["m/b58P"]),
              I.intl.string(I.t.MuJSKy),
              I.intl.string(I.t["d/Wqvr"]),
              I.intl.string(I.t.GJklAw),
            ],
            [],
          ),
          H = () => {
            C.Z.open(r.guild_id, _.pNK.ROLE_SUBSCRIPTIONS);
          },
          D =
            null !==
              (t =
                null == M
                  ? void 0
                  : M.hasFeature(
                      _.oNc.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE,
                    )) &&
            void 0 !== t &&
            t
              ? I.intl.string(I.t.n0q7sL)
              : I.intl.string(I.t.QoYdiY),
          U =
            null !==
              (n =
                (null == M
                  ? void 0
                  : M.hasFeature(_.oNc.CREATOR_MONETIZABLE)) ||
                (null == M
                  ? void 0
                  : M.hasFeature(_.oNc.CREATOR_MONETIZABLE_PROVISIONAL))) &&
            void 0 !== n &&
            n,
          V = U ? I.intl.string(I.t["G/7ciY"]) : I.intl.string(I.t.IFOiio),
          G = U ? I.intl.string(I.t.GjgQOz) : I.intl.string(I.t.E7AO6u);
        return (0, a.jsx)(a.Fragment, {
          children: L((e, t) =>
            t
              ? (0, a.jsxs)(s.animated.div, {
                  style: e,
                  className: T.container,
                  children: [
                    (0, a.jsxs)("div", {
                      className: l()(T.__invalid_wrapper, T.headerRow),
                      children: [
                        (0, a.jsxs)(d.Text, {
                          variant: "text-xs/normal",
                          className: T.visibilityInfo,
                          children: [
                            (0, a.jsx)(d.CircleInformationIcon, {
                              size: "xxs",
                              color: "currentColor",
                              className: T.icon,
                            }),
                            I.intl.string(I.t.znhX2d),
                          ],
                        }),
                        (0, a.jsx)(E, { handleHide: O }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: T.contentContainer,
                      children: [
                        (0, a.jsxs)("div", {
                          className: l()(T.contentRow, U && T.contentRowOne),
                          children: [
                            (0, a.jsx)("div", {
                              className: l()(T.contentMediaContainer),
                              children: (0, a.jsxs)("div", {
                                className: T.contentVideoContainer,
                                children: [
                                  (0, a.jsx)(R, {
                                    username: I.intl.string(I.t.AkORcn),
                                    videoSrc:
                                      "https://cdn.discordapp.com/assets/media_channel/admin_edu_discord_birthday.mp4",
                                    title: I.intl.string(I.t.yO6Fxs),
                                    messageCount: "34",
                                    reaction: "⚡️",
                                    reactionCount: "724",
                                    classname: T.backgroundVideo,
                                  }),
                                  (0, a.jsx)(R, {
                                    username: I.intl.string(I.t.DPg3YG),
                                    videoSrc:
                                      "https://cdn.discordapp.com/assets/media_channel/admin_edu_wumpus_onboarding.mp4",
                                    title: I.intl.string(I.t.R5XnCw),
                                    messageCount: "34",
                                    reactionCount: "84",
                                    reaction: "\uD83D\uDC9E",
                                    classname: l()(
                                      T.backgroundVideo,
                                      T.secondaryVideo,
                                    ),
                                  }),
                                  (0, a.jsx)(R, {
                                    username: I.intl.string(I.t.KIele3),
                                    videoSrc:
                                      "https://cdn.discordapp.com/assets/media_channel/admin_edu_scientist_wumpus.mp4",
                                    title: I.intl.string(I.t.pt88VV),
                                    messageCount: "7,103",
                                    reaction: "⚡️",
                                    reactionCount: "724",
                                    classname: T.highlightVideo,
                                  }),
                                ],
                              }),
                            }),
                            (0, a.jsxs)("article", {
                              className: T.contentTextContainer,
                              children: [
                                (0, a.jsx)(d.Heading, {
                                  variant: "heading-lg/semibold",
                                  color: "header-primary",
                                  children: V,
                                }),
                                (0, a.jsx)(d.Spacer, { size: 8 }),
                                (0, a.jsx)(d.Text, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: G,
                                }),
                                (0, a.jsx)(d.Spacer, { size: 16 }),
                                (0, a.jsxs)(d.Clickable, {
                                  onClick: () =>
                                    open(
                                      b.Z.getCreatorSupportArticleURL(
                                        _.BhN.MEDIA_CHANNEL,
                                      ),
                                    ),
                                  className: T.helpCenterLink,
                                  children: [
                                    (0, a.jsx)(d.Text, {
                                      variant: "text-sm/medium",
                                      color: "text-link",
                                      className: T.__invalid_helpCenterLinkText,
                                      children: I.intl.string(I.t.OahzBQ),
                                    }),
                                    (0, a.jsx)(d.WindowLaunchIcon, {
                                      size: "xs",
                                      color: "currentColor",
                                      className: T.helpCenterLinkIcon,
                                    }),
                                  ],
                                }),
                                (0, a.jsx)(d.Spacer, { size: 16 }),
                                (0, a.jsx)("div", {
                                  className: T.mediaChannelTagsContainer,
                                  children: B.map((e) =>
                                    (0, a.jsx)(
                                      d.Text,
                                      {
                                        variant: "text-sm/medium",
                                        color: "text-normal",
                                        className: T.mediaChannelTag,
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
                        U &&
                          (0, a.jsxs)("div", {
                            className: l()(T.contentRow, T.contentRowTwo),
                            children: [
                              (0, a.jsx)("div", {
                                className: l()(T.contentMediaContainer),
                                children: (0, a.jsxs)("div", {
                                  className: T.contentImageContainer,
                                  children: [
                                    (0, a.jsx)("img", {
                                      src: P ? w : y,
                                      alt: "",
                                      className: l()(
                                        T.previewEmbedImage,
                                        T.secondaryImage,
                                      ),
                                    }),
                                    (0, a.jsx)("img", {
                                      src: P ? N : S,
                                      alt: "",
                                      className: T.previewEmbedImage,
                                    }),
                                  ],
                                }),
                              }),
                              (0, a.jsxs)("article", {
                                className: T.contentTextContainer,
                                children: [
                                  (0, a.jsxs)(d.Text, {
                                    variant: "text-xxs/bold",
                                    className: T.serverSubPill,
                                    children: [
                                      I.intl.string(I.t.NChGw8),
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
                                    children: I.intl.string(I.t["N/TRra"]),
                                  }),
                                  (0, a.jsx)(d.Spacer, { size: 8 }),
                                  (0, a.jsx)(d.Text, {
                                    variant: "text-md/normal",
                                    color: "text-muted",
                                    children: I.intl.string(I.t.t3yWxM),
                                  }),
                                  (0, a.jsx)(d.Spacer, { size: 16 }),
                                  (0, a.jsx)("div", {
                                    className: T.mediaChannelTagsContainer,
                                    children: z.map((e) =>
                                      (0, a.jsx)(
                                        d.Text,
                                        {
                                          variant: "text-sm/medium",
                                          color: "text-normal",
                                          className: T.mediaChannelTag,
                                          children: e,
                                        },
                                        e,
                                      ),
                                    ),
                                  }),
                                  (0, a.jsx)(d.Spacer, { size: 16 }),
                                  0 === A.length &&
                                    (0, a.jsx)(d.ShinyButton, {
                                      size: d.Button.Sizes.MEDIUM,
                                      pauseAnimation: k,
                                      onClick: H,
                                      className: T.addChannelButton,
                                      color: d.Button.Colors.CUSTOM,
                                      children: D,
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
      var a = n(200651);
      n(192379);
      var i = n(399606),
        r = n(481060),
        l = n(541716),
        s = n(859235),
        o = n(898463),
        c = n(76451),
        d = n(117530),
        u = n(388032),
        m = n(502560);
      function h(e) {
        let { parentChannel: t } = e,
          n = (0, i.Wu)([d.Z], () => {
            let e = d.Z.getUploads(t.id, l.Ie.CREATE_FORUM_POST.drafts.type);
            return null == e ? void 0 : e.filter((e) => !0 !== e.isThumbnail);
          });
        return (0, a.jsxs)("div", {
          className: m.container,
          children: [
            (0, a.jsx)(r.Text, {
              variant: "text-md/semibold",
              color: "text-muted",
              children: u.intl.string(u.t.omKGKi),
            }),
            (0, a.jsx)(r.Text, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: u.intl.string(u.t.zUjLl5),
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
                          draftType: l.Ie.CREATE_FORUM_POST.drafts.type,
                          upload: e,
                          keyboardModeEnabled: !0,
                          hideFileName: !0,
                          size: s.q.SMALL,
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
          return E;
        },
      });
      var a = n(200651),
        i = n(192379),
        r = n(120356),
        l = n.n(r),
        s = n(512722),
        o = n.n(s),
        c = n(232713),
        d = n(399606),
        u = n(481060),
        m = n(166459),
        h = n(607070),
        g = n(541716),
        x = n(273031),
        f = n(859235),
        p = n(313201),
        C = n(70097),
        v = n(374794),
        b = n(470623),
        j = n(983200),
        _ = n(127654),
        I = n(124252),
        T = n(388032),
        N = n(681519);
      let S = [
          {
            name: "Media Post Thumbnail",
            extensions: ["jpg", "jpeg", "png", "gif", "webp"],
          },
        ],
        w = (0, p.hQ)();
      function y(e) {
        let { mediaAttachments: t, containerWidth: n, containerHeight: i } = e,
          r = (0, j.tu)({
            numAttachments: t.length,
            containerWidth: n,
            containerHeight: i,
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
                        className: N.thumbnail,
                        "aria-hidden": !0,
                      })
                    : (0, a.jsx)("img", {
                        src: e.src,
                        className: N.thumbnail,
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
      let E = (e) => {
        var t;
        let { parentChannel: r } = e,
          { textAreaState: s } = (0, b.xH)((e) => {
            let { textAreaState: t } = e;
            return { textAreaState: t };
          }, c.X),
          p = (0, d.e7)([h.Z], () => h.Z.keyboardModeEnabled),
          C = (0, I.Z)(
            r,
            null === (t = s.textValue) || void 0 === t ? void 0 : t.trim(),
          ),
          j = i.useMemo(() => C.find((e) => e.isThumbnail), [C]),
          E = null != C && C.length > 0,
          R = i.useMemo(() => {
            let e = (null == C ? void 0 : C.length) > 1 ? 1.15 : 1;
            return { width: 153 * e, height: 86 * e };
          }, [C]),
          P = i.useCallback(
            (e) => {
              null != j &&
                m.Z.remove(r.id, j.id, g.Ie.CREATE_FORUM_POST.drafts.type),
                (0, _.d)(
                  e.currentTarget.files,
                  r,
                  g.Ie.CREATE_FORUM_POST.drafts.type,
                  { requireConfirm: !0, isThumbnail: !0 },
                ),
                (e.currentTarget.value = null);
            },
            [r, j],
          ),
          M = (e) => {
            if ((e.stopPropagation(), (null == j ? void 0 : j.upload) != null))
              (0, u.openModalLazy)(async () => {
                let e = j.upload;
                o()(null != e, "upload should not be null");
                let { default: t } = await Promise.resolve().then(
                  n.bind(n, 95152),
                );
                return (n) =>
                  (0, a.jsx)(t, {
                    ...n,
                    upload: e,
                    channelId: r.id,
                    draftType: g.Ie.CREATE_FORUM_POST.drafts.type,
                    onSubmit: (t) => {
                      let { name: n, description: a, spoiler: i } = t;
                      m.Z.update(
                        r.id,
                        e.id,
                        g.Ie.CREATE_FORUM_POST.drafts.type,
                        { filename: n, description: a, spoiler: i },
                      );
                    },
                    disableSpoiler: !0,
                  });
              });
          },
          k = (0, a.jsx)(v.Z, {
            color: u.ButtonColors.CUSTOM,
            className: l()(N.uploadFileInputContainer),
            innerClassName: N.uploadThumbnailContainer,
            onChange: P,
            multiple: !1,
            "aria-hidden": !0,
            filters: S,
            "aria-describedby": w,
            "aria-label": E
              ? T.intl.string(T.t.MxJI3d)
              : T.intl.string(T.t.CbiofX),
            children: E
              ? (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)(y, {
                      mediaAttachments: C,
                      containerWidth: R.width,
                      containerHeight: R.height,
                    }),
                    (0, a.jsxs)("div", {
                      className: l()(N.changeThumbnailLabelContainer, {
                        [N.changeThumbnailLabelOverflow]:
                          (null == C ? void 0 : C.length) > 2,
                      }),
                      children: [
                        (0, a.jsx)(u.Text, {
                          variant: "text-xs/medium",
                          color: "header-secondary",
                          children: T.intl.string(T.t.MxJI3d),
                        }),
                        null == j &&
                          (0, a.jsx)(u.PencilIcon, {
                            size: "xs",
                            color: "currentColor",
                            className: N.editIcon,
                          }),
                      ],
                    }),
                  ],
                })
              : (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)(u.ImagePlusIcon, {
                      size: "custom",
                      width: 39,
                      height: 39,
                      color: "currentColor",
                      className: N.uploadIcon,
                    }),
                    (0, a.jsx)(u.Text, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: T.intl.string(T.t.CbiofX),
                    }),
                  ],
                }),
          });
        return (0, a.jsx)("div", {
          className: N.thumbnailContainer,
          style: R,
          children:
            null != j
              ? (0, a.jsx)(f.Z, {
                  actions: (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)(x.Z, {
                        className: N.action,
                        tooltip: T.intl.string(T.t.Y8ujqq),
                        onClick: M,
                        children: (0, a.jsx)(u.PencilIcon, {
                          size: "xs",
                          color: "currentColor",
                        }),
                      }),
                      (0, a.jsx)(x.Z, {
                        className: N.action,
                        tooltip: T.intl.string(T.t.vN7REx),
                        onClick: () =>
                          m.Z.remove(
                            r.id,
                            j.id,
                            g.Ie.CREATE_FORUM_POST.drafts.type,
                          ),
                        dangerous: !0,
                        children: (0, a.jsx)(u.TrashIcon, {
                          size: "md",
                          color: "currentColor",
                        }),
                      }),
                    ],
                  }),
                  draftType: g.Ie.CREATE_FORUM_POST.drafts.type,
                  id: j.id,
                  channelId: r.id,
                  handleEditModal: M,
                  keyboardModeEnabled: p,
                  size: f.q.SMALL,
                  className: N.attachmentListItem,
                  children: k,
                })
              : (0, a.jsx)(a.Fragment, { children: k }),
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
      var a = n(192379),
        i = n(399606),
        r = n(541716),
        l = n(117530),
        s = n(154135),
        o = n(337077);
      function c(e, t) {
        var n, c;
        let { mediaAttachments: d, hasThumbnail: u } = (function (e) {
            let [t, n] = a.useState(null),
              o = (0, i.Wu)([l.Z], () => {
                let t = l.Z.getUploads(
                    e.id,
                    r.Ie.CREATE_FORUM_POST.drafts.type,
                  ),
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
                    o.slice(0, s.Yh).flatMap((t) => {
                      var n;
                      let a =
                        null == t
                          ? void 0
                          : null === (n = t.item) || void 0 === n
                            ? void 0
                            : n.file;
                      if (null == a) return [];
                      let i = URL.createObjectURL(a);
                      return (
                        e.push(i),
                        {
                          id: t.id,
                          src: i,
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
            s.Yh -
              (null !== (n = null == d ? void 0 : d.length) && void 0 !== n
                ? n
                : 0),
            0,
          ),
          { embeds: h } = (0, o.M)(u, m, t),
          g = a.useMemo(
            () =>
              null == h
                ? void 0
                : h.flatMap((e) => {
                    let t = (0, s.Vh)(e);
                    return null == t
                      ? []
                      : { id: t, src: t, spoiler: !1, alt: e.title };
                  }),
            [h],
          ),
          x = [...(null != d ? d : [])];
        return (
          !u &&
            m > 0 &&
            x.push(
              ...(null !== (c = null == g ? void 0 : g.slice(0, m)) &&
              void 0 !== c
                ? c
                : []),
            ),
          x
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
      var a = n(192379),
        i = n(481060);
      function r() {
        let [e, t] = a.useState(!0);
        return {
          transitions: (0, i.useTransition)(e, {
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
    158804: function (e, t, n) {
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
    444087: function (e, t, n) {
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
          matchingPostsRow: "matchingPostsRow_a6d69a",
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
    969818: function (e, t, n) {
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
    51092: function (e, t, n) {
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
    655910: function (e, t, n) {
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
    559198: function (e, t, n) {
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
    933907: function (e, t, n) {
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
    40620: function (e, t, n) {
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
    129702: function (e, t, n) {
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
    135408: function (e, t, n) {
      "use strict";
      e.exports = {
        container: "container_d0f4b1",
        clearText: "clearText_d0f4b1",
      };
    },
    991932: function (e, t, n) {
      "use strict";
      e.exports = {
        cooldownWrapper: "cooldownWrapper_fbe485",
        slowModeIcon: "slowModeIcon_fbe485",
        leadingIcon: "leadingIcon_fbe485",
      };
    },
    841835: function (e, t, n) {
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
    502560: function (e, t, n) {
      "use strict";
      e.exports = {
        container: "container_b6cc23",
        uploads: "uploads_b6cc23",
        uploadsContainer: "uploadsContainer_b6cc23",
      };
    },
    681519: function (e, t, n) {
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
//# sourceMappingURL=c4bcb98a3901d522ce54.js.map
