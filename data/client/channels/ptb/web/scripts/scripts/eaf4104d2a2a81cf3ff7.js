"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["57094"],
  {
    110478: function (e, t, n) {
      n.d(t, {
        N: function () {
          return l;
        },
      });
      var r = n(735250);
      n(470079);
      var a = n(481060);
      function l(e) {
        (0, a.openModalLazy)(
          async () => {
            let { default: e } = await n.e("61323").then(n.bind(n, 333636));
            return (t) => (0, r.jsx)(e, { ...t });
          },
          { onCloseCallback: e },
        );
      }
    },
    327220: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      }),
        n(47120);
      var r = n(470079),
        a = n(442837),
        l = n(592125),
        i = n(9156);
      function o(e) {
        let t = (0, a.e7)([l.Z], () => l.Z.getPrivateChannelsVersion()),
          n = (0, a.e7)([l.Z], () => l.Z.getMutableDMsByUserIds(), [t]),
          o = (0, a.e7)([i.ZP], () => i.ZP.getMutedChannels(null)),
          s = r.useMemo(() => {
            let e = new Set();
            for (let t in n) {
              let r = n[t];
              null != r && o.has(r) && e.add(t);
            }
            return e;
          }, [n, o]);
        return r.useMemo(
          () =>
            null == e
              ? void 0
              : e.filter((e) => {
                  for (let t of e.participants) if (s.has(t)) return !1;
                  return !0;
                }),
          [e, s],
        );
      }
    },
    959580: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var r = n(442837),
        a = n(719247);
      let l = [];
      function i(e) {
        return (0, r.Wu)(
          [a.Z],
          () => (null == e ? l : e.filter(a.Z.canRenderContent)),
          [e],
        );
      }
    },
    371177: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      }),
        n(47120);
      var r = n(470079),
        a = n(442837),
        l = n(902704),
        i = n(158776),
        o = n(561308),
        s = n(231338);
      function c(e) {
        let t = r.useRef(new Set()),
          n = r.useMemo(() => {
            let n = new Set(null == e ? void 0 : e.map((e) => e.author_id));
            return (
              !(0, l.E)([...t.current], [...n]) && (t.current = n), t.current
            );
          }, [e]),
          c = (0, a.Wu)([i.Z], () =>
            Array.from(n).filter((e) => {
              let t = i.Z.getStatus(e);
              return null !== t && [s.Sk.OFFLINE, s.Sk.INVISIBLE].includes(t);
            }),
          );
        return r.useMemo(() => {
          let t = new Set(c);
          return null == e
            ? void 0
            : e.filter((e) => !(0, o.kr)(e) || !t.has(e.author_id));
        }, [e, c]);
      }
    },
    650613: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return b;
        },
      }),
        n(47120),
        n(390547);
      var r = n(735250),
        a = n(442837),
        l = n(481060),
        i = n(100527),
        o = n(171368),
        s = n(594174),
        c = n(719247),
        d = n(71585),
        u = n(146282),
        h = n(897674),
        m = n(561308),
        x = n(206583),
        f = n(355750);
      function p(e) {
        let { id: t } = e,
          n = (0, a.e7)([s.default], () => s.default.getUser(t));
        return null == n
          ? null
          : (0, r.jsx)(l.Clickable, {
              className: f.entryAuthor,
              onClick: function () {
                (0, o.openUserProfileModal)({
                  sourceAnalyticsLocations: [i.Z.DEV_TOOLS],
                  userId: t,
                });
              },
              children: (0, r.jsx)(l.Text, {
                variant: "text-md/semibold",
                children: n.username,
              }),
            });
      }
      function b() {
        var e;
        let t = (0, a.e7)([u.Z], () => u.Z.getFeed(x.YN.GLOBAL_FEED)),
          n = (0, a.e7)([u.Z], () => u.Z.getFilters()),
          i = (0, a.cj)(
            [c.Z],
            () => {
              var e;
              let n = {};
              for (let r of null !== (e = null == t ? void 0 : t.entries) &&
              void 0 !== e
                ? e
                : [])
                n[(0, c.T)(r.content)] = c.Z.canRenderContent(r.content);
              return n;
            },
            [t],
          ),
          o = (0, a.e7)([d.Z], () => d.Z.getImpressionCappedItemIds());
        if (null == n) return null;
        let s =
          null == t
            ? void 0
            : null === (e = t.entries) || void 0 === e
              ? void 0
              : e.flatMap((e) => {
                  let { content: t } = e;
                  if (!(0, h.g)(n, t)) return [];
                  let a = i[(0, c.T)(t)];
                  return (0, r.jsxs)(
                    "li",
                    {
                      className: f.locatorEntry,
                      children: [
                        (0, r.jsx)(p, { type: t.author_type, id: t.author_id }),
                        !a &&
                          (0, r.jsx)(l.Text, {
                            variant: "text-md/normal",
                            children: "Expired or no matching presence",
                          }),
                        (0, m.n2)(t) &&
                          (0, r.jsxs)(l.Text, {
                            variant: "text-md/normal",
                            children: ["Expired at ", t.expires_at],
                          }),
                        o.has(t.id) &&
                          (0, r.jsx)(l.Text, {
                            variant: "text-md/normal",
                            children: "Impression capped",
                          }),
                      ],
                    },
                    t.id,
                  );
                });
        return (0, r.jsxs)(l.FormSection, {
          children: [
            (0, r.jsx)(l.FormTitle, { children: "Selected Content" }),
            null != s
              ? (0, r.jsx)("ul", { children: s })
              : (0, r.jsx)("div", { children: "(none?)" }),
          ],
        });
      }
    },
    213713: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return E;
        },
      }),
        n(47120);
      var r = n(735250),
        a = n(470079),
        l = n(120356),
        i = n.n(l),
        o = n(392711),
        s = n.n(o),
        c = n(876215),
        d = n(442837),
        u = n(433517),
        h = n(481060),
        m = n(570140),
        x = n(812206),
        f = n(835473),
        p = n(681619),
        b = n(810568),
        g = n(168524),
        v = n(77498),
        j = n(823379),
        C = n(71585),
        _ = n(146282),
        S = n(650613),
        T = n(789086),
        N = n(206583),
        y = n(768452),
        k = n(219299);
      let w = [
        {
          key: "type",
          cellClassName: i()(y.cell, y.cellType),
          render(e) {
            let { type: t } = e;
            return (0, r.jsx)(h.Text, {
              variant: "text-md/semibold",
              children: c.s[t],
            });
          },
        },
        {
          key: "count",
          cellClassName: i()(y.cell, y.cellCount),
          render(e) {
            let { entries: t } = e;
            return (0, r.jsx)("div", {
              children: (0, r.jsx)(h.Text, {
                variant: "text-md/normal",
                children: t.length,
              }),
            });
          },
        },
        {
          key: "only?",
          cellClassName: y.cell,
          render(e) {
            let { type: t } = e;
            return (0, r.jsx)(I, { type: t });
          },
        },
      ];
      function I(e) {
        var t, n;
        let { type: a } = e,
          l = (0, d.e7)([_.Z], () => _.Z.getFilters()),
          i =
            null !==
              (n =
                null == l
                  ? void 0
                  : null === (t = l.types) || void 0 === t
                    ? void 0
                    : t.has(a)) &&
            void 0 !== n &&
            n;
        return (0, r.jsx)(h.Checkbox, {
          value: i,
          onClick: function () {
            i
              ? m.Z.dispatch({
                  type: "CONTENT_INVENTORY_SET_FILTERS",
                  filters: void 0,
                })
              : m.Z.dispatch({
                  type: "CONTENT_INVENTORY_SET_FILTERS",
                  filters: { types: new Set([a]) },
                });
          },
        });
      }
      function E() {
        var e, t;
        let n = (0, d.e7)([_.Z], () => _.Z.getFeed(N.YN.GLOBAL_FEED)),
          l = (0, d.e7)([_.Z], () => _.Z.getDebugImpressionCappingDisabled()),
          o = (0, d.e7)([C.Z], () =>
            C.Z.getDebugFastImpressionCappingEnabled(),
          ),
          c = (function (e) {
            let t = s().groupBy(e, (e) => e.content_type);
            return Object.keys(t).map((e) => {
              let n = t[e];
              return { key: "".concat(e), type: n[0].content_type, entries: n };
            });
          })(
            null == n
              ? void 0
              : null === (e = n.entries) || void 0 === e
                ? void 0
                : e.map((e) => e.content),
          ),
          I = (0, d.e7)([_.Z], () => {
            var e;
            return (
              (null === (e = _.Z.getFeedState(N.YN.GLOBAL_FEED)) || void 0 === e
                ? void 0
                : e.loading) === !0
            );
          }),
          [E, R] = a.useState(""),
          O = (0, d.e7)(
            [v.Z, x.Z],
            () => {
              var e, t, n;
              return parseInt(E) > 0
                ? E
                : null !==
                      (n =
                        null === (e = v.Z.getGameByName(E)) || void 0 === e
                          ? void 0
                          : e.id) && void 0 !== n
                  ? n
                  : null === (t = x.Z.getApplicationByName(E)) || void 0 === t
                    ? void 0
                    : t.id;
            },
            [E],
          ),
          B = (0, g.Z)({
            applicationId: O,
            location: "DevToolsContentInventory",
            source: b.m1.DevTools,
          }),
          P = Object.entries(
            null !== (t = u.K.get("GameProfileModal")) && void 0 !== t ? t : {},
          )
            .filter((e) => {
              let [t, n] = e;
              return n;
            })
            .map((e) => {
              let [t] = e;
              return t;
            }),
          A = (0, f.Z)(P).filter(j.lm);
        return (0, r.jsx)("div", {
          className: i()(k.panel),
          children: (0, r.jsxs)(h.ScrollerThin, {
            className: y.content,
            children: [
              (0, r.jsxs)(h.FormSection, {
                children: [
                  (0, r.jsx)(h.FormTitle, { children: "Inventory" }),
                  c.length > 0 && (0, r.jsx)(p.Z, { columns: w, data: c }),
                  (0, r.jsx)(h.Spacer, { size: 8 }),
                  (0, r.jsx)(T.Z, {}),
                  (0, r.jsx)(h.Button, {
                    fullWidth: !0,
                    onClick: function () {
                      m.Z.dispatch({
                        type: "CONTENT_INVENTORY_MANUAL_REFRESH",
                        feedId: N.YN.GLOBAL_FEED,
                      });
                    },
                    submitting: I,
                    children: "Refresh Now",
                  }),
                ],
              }),
              (0, r.jsxs)(h.FormSection, {
                children: [
                  (0, r.jsx)(h.FormTitle, { children: "Impression Capping" }),
                  (0, r.jsx)(h.Button, {
                    fullWidth: !0,
                    onClick: function () {
                      m.Z.dispatch({
                        type: "CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS",
                      });
                    },
                    children: "Clear Impressions",
                  }),
                  (0, r.jsx)(h.Spacer, { size: 8 }),
                  (0, r.jsx)(h.Button, {
                    fullWidth: !0,
                    onClick: function () {
                      m.Z.dispatch({
                        type: "CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS",
                      });
                    },
                    children: "Log Impressions",
                  }),
                  (0, r.jsx)(h.Spacer, { size: 8 }),
                  (0, r.jsx)(h.Button, {
                    fullWidth: !0,
                    onClick: function () {
                      m.Z.dispatch({
                        type: "CONTENT_INVENTORY_DEBUG_TOGGLE_IMPRESSION_CAPPING",
                      });
                    },
                    children: l
                      ? "Enable Impression Capping"
                      : "Disable Impression Capping",
                  }),
                  (0, r.jsx)(h.Spacer, { size: 8 }),
                  (0, r.jsx)(h.Button, {
                    fullWidth: !0,
                    onClick: function () {
                      m.Z.dispatch({
                        type: "CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING",
                      });
                    },
                    children: o
                      ? "Disable Fast Impression Capping"
                      : "Enable Fast Impression Capping",
                  }),
                ],
              }),
              false,
              (0, r.jsx)(S.Z, {}),
              (0, r.jsxs)(h.FormSection, {
                children: [
                  (0, r.jsx)(h.FormTitle, { children: "Game Profile" }),
                  (0, r.jsx)(h.TextInput, {
                    placeholder: "App ID or full name",
                    onChange: (e) => (0 === e.length || e.length >= 18) && R(e),
                    onKeyDown: (e) => {
                      "Enter" === e.key &&
                        (E === e.currentTarget.value
                          ? null == B || B()
                          : R(e.currentTarget.value));
                    },
                    error:
                      E.length > 0 && null == B
                        ? "No game profile for ".concat(
                            null != O ? O : E + " - try by id",
                            ".",
                          )
                        : void 0,
                    style: null != B ? { border: "1px solid green" } : {},
                  }),
                  (0, r.jsx)("ul", {
                    children: A.map((e) =>
                      (0, r.jsx)(
                        "li",
                        { children: (0, r.jsx)(Z, { application: e }) },
                        "follow-game-".concat(e.id),
                      ),
                    ),
                  }),
                ],
              }),
            ],
          }),
        });
      }
      let Z = (e) => {
        let { application: t } = e,
          n = (0, g.Z)({
            applicationId: t.id,
            location: "DevToolsContentInventory",
            source: b.m1.DevTools,
          });
        return (0, r.jsx)(h.Clickable, {
          onClick: n,
          style: { margin: "2px", cursor: "pointer" },
          children: (0, r.jsx)(h.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: t.name,
          }),
        });
      };
    },
    789086: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return d;
        },
      });
      var r = n(735250),
        a = n(442837),
        l = n(481060),
        i = n(346486),
        o = n(146282),
        s = n(371991),
        c = n(206583);
      function d() {
        let e = (0, a.e7)([o.Z], () => {
            var e;
            return (
              (null === (e = o.Z.getFeed(c.YN.GLOBAL_FEED)) || void 0 === e
                ? void 0
                : e.refresh_stale_inbox_after_ms) != null
            );
          }),
          { loading: t, nextFetchDate: n } = (0, a.cj)([o.Z], () => {
            var e;
            return null !== (e = o.Z.getFeedState(c.YN.GLOBAL_FEED)) &&
              void 0 !== e
              ? e
              : { loading: !1 };
          }),
          d = (0, a.e7)([o.Z], () =>
            o.Z.getLastFeedFetchDate(c.YN.GLOBAL_FEED),
          );
        return (0, r.jsxs)("div", {
          children: [
            t
              ? (0, r.jsx)(l.Text, {
                  variant: "text-md/normal",
                  children: "(fetching)",
                })
              : (0, r.jsxs)(l.Text, {
                  variant: "text-md/normal",
                  children: [
                    "Next fetch: ",
                    null != n
                      ? (0, r.jsx)(i.Z, { deadline: n })
                      : e
                        ? "(awaiting push)"
                        : "(unscheduled)",
                  ],
                }),
            (0, r.jsxs)(l.Text, {
              variant: "text-md/normal",
              children: [
                "Last fetch:",
                " ",
                null != d
                  ? (0, r.jsx)(s.x3, {
                      inline: !0,
                      entry: { start: d.getTime() },
                    })
                  : "(never)",
              ],
            }),
          ],
        });
      }
    },
    897674: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return d;
        },
        g: function () {
          return c;
        },
      }),
        n(47120);
      var r = n(470079),
        a = n(442837),
        l = n(146282),
        i = n(327220),
        o = n(959580),
        s = n(371177);
      function c(e, t) {
        let { types: n } = e;
        return !!(null == n || n.has(t.content_type)) || !1;
      }
      function d(e) {
        let { feed: t, filters: n } = (0, a.cj)([l.Z], () => ({
            feed: l.Z.getFeed(e),
            filters: l.Z.getFilters(),
          })),
          d = r.useMemo(() => {
            let e = null == t ? void 0 : t.entries.map((e) => e.content);
            return null != n
              ? null == e
                ? void 0
                : e.filter((e) => c(n, e))
              : e;
          }, [t, n]);
        return (d = (0, i.Z)(d)), (d = (0, o.Z)(d)), (d = (0, s.Z)(d));
      }
    },
    770146: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var r = n(735250);
      n(470079);
      var a = n(120356),
        l = n.n(a),
        i = n(353947);
      function o(e) {
        let { children: t, tag: n, className: a } = e;
        return (
          (n = null != n ? n : "h3"),
          (0, r.jsx)(n, { className: l()(i.title, a), children: t })
        );
      }
    },
    120816: function (e, t, n) {
      n(47120);
      var r,
        a,
        l,
        i,
        o = n(772848),
        s = n(756647),
        c = n(442837),
        d = n(570140),
        u = n(314897),
        h = n(906467);
      let m = 0,
        x = [],
        f = [],
        p = !1;
      class b extends (r = c.ZP.Store) {
        initialize() {
          this.waitFor(h.Z);
        }
        get loggedEvents() {
          return x;
        }
        get loggedTriggers() {
          return f;
        }
        get trackTriggers() {
          return p;
        }
      }
      (i = "AnalyticsLogStore"),
        (l = "displayName") in (a = b)
          ? Object.defineProperty(a, l, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (a[l] = i),
        (t.Z = new b(d.Z, {
          TRACK: function (e) {
            let { event: t, properties: n, fingerprint: r } = e;
            if (h.Z.isDeveloper) {
              var a;
              (x = [
                ...x,
                {
                  key: (m++).toString(),
                  event: t,
                  properties: n,
                  fingerprint:
                    null != (a = r) ? (0, s.s)(a) : u.default.getId(),
                  timestamp: new Date(),
                },
              ]).length > 500 && x.shift();
            }
          },
          TRACK_TRIGGER: function (e) {
            let {
              experimentId: t,
              descriptor: n,
              exposureType: r,
              excluded: a,
              location: l,
              previouslyTracked: i,
            } = e;
            if (!!h.Z.isDeveloper)
              p &&
                (f = [
                  ...f,
                  {
                    key: (0, o.Z)(),
                    experimentId: t,
                    descriptor: n,
                    exposureType: r,
                    excluded: a,
                    location: l,
                    previouslyTracked: i,
                    timestamp: new Date(),
                  },
                ]).length > 500 &&
                f.shift();
          },
          SET_TRACK_TRIGGERS: function (e) {
            let { enabled: t } = e;
            p = t;
          },
          ANALYTICS_LOG_CLEAR: function () {
            (x = []), (f = []);
          },
        }));
    },
    98357: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var r = n(570140),
        a = n(432877);
      function l(e, t) {
        let n = "boolean" == typeof t ? t : !a.ZP.get(e);
        r.Z.dispatch({
          type: "DEV_TOOLS_DEV_SETTING_SET",
          toggle: e,
          value: n,
        });
      }
    },
    678717: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return q;
          },
        }),
        n(653041),
        n(47120);
      var r = n(735250),
        a = n(470079),
        l = n(120356),
        i = n.n(l),
        o = n(990547),
        s = n(442837),
        c = n(481060),
        d = n(347469),
        u = n(213609),
        h = n(213713),
        m = n(665149),
        x = n(906467),
        f = n(259580),
        p = n(31336),
        b = n(19759),
        g = n(432877);
      n(381996);
      var v = n(392750),
        j = n(926976),
        C = n(592197),
        _ = n(860337),
        S = n(789654),
        T = n(691867),
        N = n(916790),
        y = n(645973),
        k = n(903502),
        w = n(912072),
        I = n(246992),
        E = n(496025),
        Z = n(442954),
        R = n(702904),
        O = n(178821),
        B = n(248526),
        P = n(958328),
        A = n(514866),
        L = n(678639),
        F = n(351930),
        M = n(771751),
        D = n(596768),
        H = n(621060),
        G = n(689938),
        z = n(622331),
        U = n(219299);
      function V(e) {
        let { resizableNode: t, onResize: n, onResizeEnd: a } = e,
          l = (0, d.Z)({
            minDimension: b.h,
            resizableDomNodeRef: t,
            onElementResize: n,
            onElementResizeEnd: a,
            orientation: d.y.HORIZONTAL_LEFT,
          });
        return (0, r.jsx)("div", { onMouseDown: l, className: z.resizeHandle });
      }
      function W() {
        var e;
        let t = a.useMemo(() => {
            let e = [
              {
                id: "analytics",
                name: "Analytics",
                render: () => (0, r.jsx)(j.Z, {}),
              },
              {
                id: "triggers",
                name: "Triggers",
                render: () => (0, r.jsx)(D.Z, {}),
              },
              {
                id: "stores",
                name: "Stores",
                render: () => (0, r.jsx)(L.Z, {}),
              },
              {
                id: "dispatcher",
                name: "Dispatcher",
                render: () => (0, r.jsx)(N.Z, {}),
              },
            ];
            return (
              x.Z.isDeveloper &&
                (e.push({
                  id: "quick_actions",
                  name: "Quick Actions",
                  render: () => (0, r.jsx)(A.Z, {}),
                }),
                e.push({
                  id: "perks_demos",
                  name: "Perks Demos",
                  render: () => (0, r.jsx)(B.Z, {}),
                })),
              x.Z.isDeveloper &&
                (e.push({
                  id: "end_to_end_encryption",
                  name: "E2EE",
                  render: () => (0, r.jsx)(y.Z, {}),
                }),
                e.push({
                  id: "clans",
                  name: "Clans",
                  render: () => (0, r.jsx)(_.Z, {}),
                }),
                e.push({
                  id: "performance",
                  name: "Performance",
                  render: () => (0, r.jsx)(O.Z, {}),
                }),
                e.push({
                  id: "feedback",
                  name: "Feedback",
                  render: () => (0, r.jsx)(k.Z, {}),
                })),
              e.push({
                id: "colors",
                name: "Colors",
                render: () => (0, r.jsx)(S.Z, {}),
              }),
              e.push({
                id: "design_toggles",
                name: "Design Toggles",
                render: () => (0, r.jsx)(T.Z, {}),
              }),
              e.push({
                id: "overlays",
                name: "Dev Overlays",
                render: () =>
                  (0, r.jsx)(w.Z, { devSettingsCategory: g.zU.OVERLAYS }),
              }),
              e.push({
                id: "messaging",
                name: "Messaging",
                render: () => (0, r.jsx)(E.Z, {}),
              }),
              e.push({
                id: "reporting",
                name: "Reporting",
                render: () =>
                  (0, r.jsx)(w.Z, { devSettingsCategory: g.zU.REPORTING }),
              }),
              e.push({
                id: "permissions",
                name: "Permissions",
                render: () => (0, r.jsx)(P.Z, {}),
              }),
              e.push({
                id: "modals",
                name: "Modals",
                render: () => (0, r.jsx)(Z.Z, {}),
              }),
              e.push({
                id: "affinity",
                name: "Affinity",
                render: () => (0, r.jsx)(v.Z, {}),
              }),
              x.Z.isDeveloper &&
                e.push({
                  id: "content_inventory",
                  name: "Content Inventory",
                  render: () => (0, r.jsx)(h.Z, {}),
                }),
              window.GLOBAL_ENV.RELEASE_CHANNEL.startsWith("staging") &&
                (e.push({
                  id: "trials",
                  name: "Trials",
                  render: () => (0, r.jsx)(M.Z, {}),
                }),
                e.push({
                  id: "payments",
                  name: "Payments",
                  render: () => (0, r.jsx)(R.Z, {}),
                }),
                e.push({
                  id: "subscriptions",
                  name: "Subscriptions",
                  render: () => (0, r.jsx)(F.Z, {}),
                }),
                e.push({
                  id: "billing",
                  name: "Billing",
                  render: () => (0, r.jsx)(C.Z, {}),
                })),
              e
            );
          }, []),
          {
            TabBar: n,
            renderSelectedTab: l,
            selectedTabId: i,
          } = (0, H.Z)(
            {
              tabs: t,
              initialSelectedTabId:
                null !== (e = b.Z.lastOpenTabId) && void 0 !== e ? e : void 0,
              onChangeTab: (e) => {
                (0, p.Qh)({ lastOpenTabId: e });
              },
            },
            [t],
          );
        return (
          (0, u.Z)({
            type: o.ImpressionTypes.PANE,
            name: o.ImpressionNames.VIEW_PANEL_DEVTOOLS,
            properties: { panel: i },
          }),
          (0, r.jsxs)(I.Gk, {
            children: [
              (0, r.jsxs)(m.ZP, {
                className: U.headerBar,
                toolbar: (0, r.jsx)(m.ZP.Icon, {
                  icon: c.XSmallIcon,
                  tooltip: G.Z.Messages.CLOSE,
                  onClick: p.SO,
                }),
                children: [
                  (0, r.jsx)(m.ZP.Icon, {
                    icon: c.StaffBadgeIcon,
                    tooltip: "DevTools",
                  }),
                  (0, r.jsx)(m.ZP.Title, { children: "DevTools" }),
                ],
              }),
              (0, r.jsx)(n, {}),
              l(),
              (0, r.jsx)(I.Br, { className: z.layerContainer }),
            ],
          })
        );
      }
      function K() {
        let e = a.useRef(null),
          t = (0, s.e7)([b.Z], () => b.Z.sidebarWidth),
          [n, l] = a.useState(null),
          o = a.useCallback((e) => (0, p.Qh)({ sidebarWidth: e }), []);
        return (a.useEffect(() => {
          null === n && null !== t && l(t);
        }, [t, n]),
        null === n)
          ? null
          : (0, r.jsxs)("div", {
              ref: e,
              className: i()(z.container),
              style: { minWidth: b.h, width: n },
              children: [
                (0, r.jsx)(V, {
                  resizableNode: e,
                  onResize: l,
                  onResizeEnd: o,
                }),
                (0, r.jsx)("div", {
                  className: z.sidebarContent,
                  children: (0, r.jsx)(W, {}),
                }),
              ],
            });
      }
      function Y() {
        let e = (0, s.e7)([b.Z], () => b.Z.displayTools);
        return e
          ? (0, r.jsx)("div", {
              className: i()(z.container, z.mobileContainerExpanded),
              children: (0, r.jsx)("div", {
                className: z.sidebarContent,
                children: (0, r.jsx)(W, {}),
              }),
            })
          : (0, r.jsx)("div", {
              className: z.container,
              children: (0, r.jsx)(c.Clickable, {
                onClick: p.SO,
                children: (0, r.jsxs)(m.ZP, {
                  className: i()(U.headerBar, z.mobileHeaderCollapsed),
                  toolbar: (0, r.jsx)(f.Z, { direction: f.Z.Directions.UP }),
                  children: [
                    (0, r.jsx)(m.ZP.Icon, {
                      icon: c.StaffBadgeIcon,
                      tooltip: "DevTools",
                    }),
                    (0, r.jsx)(m.ZP.Title, { children: "DevTools" }),
                  ],
                }),
              }),
            });
      }
      function q(e) {
        let { mobile: t } = e;
        return t ? (0, r.jsx)(Y, {}) : (0, r.jsx)(K, {});
      }
    },
    381996: function (e, t, n) {
      n(47120),
        n(735250),
        n(470079),
        n(120356),
        n(481060),
        n(532810),
        n(915312),
        n(665149),
        n(241209),
        n(622131),
        n(428530),
        n(484036),
        n(681619),
        n(621060),
        n(627277),
        n(219299);
    },
    392750: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var r = n(735250);
      n(470079);
      var a = n(442837),
        l = n(814443),
        i = n(594174),
        o = n(681619),
        s = n(14136),
        c = n(219299);
      let d = [
        {
          key: "user",
          cellClassName: s.userCell,
          render(e) {
            var t;
            let { user: n, key: r } = e;
            return null !== (t = null == n ? void 0 : n.username) &&
              void 0 !== t
              ? t
              : r;
          },
        },
        {
          key: "affinity",
          cellClassName: s.affinityCell,
          render(e) {
            let { affinity: t } = e;
            return "".concat(t);
          },
        },
      ];
      function u() {
        let e = (0, a.Wu)([l.Z, i.default], () =>
          l.Z.getUserAffinities().map((e) => {
            let { user_id: t, affinity: n } = e;
            return { user: i.default.getUser(t), affinity: n, key: t };
          }),
        );
        return 0 === e.length
          ? null
          : (0, r.jsx)(o.Z, {
              className: c.panel,
              columns: d,
              rowClassName: s.row,
              data: e,
            });
      }
    },
    926976: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return Z;
        },
      }),
        n(47120);
      var r = n(735250),
        a = n(470079),
        l = n(120356),
        i = n.n(l),
        o = n(392711),
        s = n(913527),
        c = n.n(s),
        d = n(442837),
        u = n(481060),
        h = n(129861),
        m = n(665149),
        x = n(301801),
        f = n(594174),
        p = n(55935),
        b = n(120816),
        g = n(31336),
        v = n(257785),
        j = n(484036),
        C = n(681619),
        _ = n(621060),
        S = n(689938),
        T = n(574001),
        N = n(219299);
      let y = [
        {
          key: "event",
          cellClassName: T.eventColumn,
          render(e) {
            let { event: t } = e;
            return t;
          },
        },
        {
          key: "location",
          cellClassName: T.locationColumn,
          render(e) {
            let { properties: t } = e;
            return null == t.location ? null : t.location;
          },
        },
      ];
      function k(e) {
        let { children: t } = e;
        return (0, r.jsx)(u.ScrollerThin, {
          className: T.customPropertiesContainer,
          children: (0, r.jsx)("dl", { children: t }),
        });
      }
      function w(e) {
        let { name: t, children: n } = e;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)("dt", {
              className: T.customPropertiesName,
              children: t,
            }),
            (0, r.jsx)("dd", {
              className: T.customPropertiesValue,
              children: n,
            }),
          ],
        });
      }
      let I = [
          {
            id: "details",
            name: "Details",
            render: (e) => {
              let {
                  loggedEvent: {
                    event: t,
                    properties: n,
                    timestamp: a,
                    fingerprint: l,
                  },
                  onClose: o,
                } = e,
                s = f.default.getUser(l),
                d = c()(a);
              return (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsxs)(m.ZP, {
                    className: i()(N.headerBar, T.subPanelHeaderBar),
                    children: [
                      (0, r.jsx)(m.ZP.Icon, {
                        icon: u.AnalyticsIcon,
                        tooltip: t,
                      }),
                      (0, r.jsx)(m.ZP.Title, {
                        wrapperClassName: N.headerTitle,
                        children: t,
                      }),
                      (0, r.jsx)(m.ZP.Icon, {
                        icon: u.CircleXIcon,
                        tooltip: "Close",
                        onClick: o,
                      }),
                    ],
                  }),
                  (0, r.jsxs)(v.E, {
                    className: T.commonProperties,
                    children: [
                      (0, r.jsx)(v.Z9, {
                        name: "Timestamp (local)",
                        children: (0, r.jsx)("time", {
                          dateTime: a.toISOString(),
                          title: (0, p.vc)(d, "LLLL"),
                          children: (0, p.Y4)(d),
                        }),
                      }),
                      null != s &&
                        (0, r.jsx)(v.Z9, {
                          name: "User",
                          children: (0, r.jsx)(h.Z, { user: s }),
                        }),
                      (0, r.jsx)(v.Z9, {
                        name: "Fingerprint",
                        children: (0, r.jsx)("code", { children: l }),
                      }),
                    ],
                  }),
                  (0, r.jsx)(k, {
                    children: Object.entries(n).map((e) => {
                      let [t, n] = e;
                      return (0, r.jsx)(
                        w,
                        {
                          name: "".concat(t, ":"),
                          children:
                            null != n
                              ? (0, r.jsx)("code", {
                                  children: JSON.stringify(n),
                                })
                              : (0, r.jsx)("code", {
                                  className: T.emptyProperty,
                                  children: "null",
                                }),
                        },
                        t,
                      );
                    }),
                  }),
                ],
              });
            },
          },
        ],
        E = {
          events: {
            label: "Events",
            filter: (e) =>
              Object.entries(E)
                .filter((e) => {
                  let [t] = e;
                  return "events" !== t;
                })
                .map((t) => {
                  let [n, { filter: r }] = t;
                  return !r(e);
                })
                .every((e) => e),
          },
          experiments: {
            label: "Experiments",
            filter: (e) =>
              [
                "experiment_user_triggered",
                "experiment_guild_triggered",
              ].includes(e.event),
          },
          impressions: {
            label: "Impressions",
            filter: (e) => e.event.startsWith("impression_"),
          },
          networkActions: {
            label: "Network",
            filter: (e) => e.event.startsWith("network_action"),
          },
        };
      function Z() {
        let e = a.useRef(null),
          [t, n] = a.useState(""),
          l = (0, d.e7)([b.Z], () => b.Z.loggedEvents),
          [s, c] = a.useState(Object.keys(E)),
          [h, m] = a.useState(l),
          f = a.useRef(null),
          p = a.useCallback(
            (0, o.throttle)(
              async (e, t) => {
                if ("" === e) {
                  m(t);
                  return;
                }
                f.current = (0, o.uniqueId)();
                let n = await (0, x.H)(
                  t,
                  (e) => {
                    let { event: t } = e;
                    return t;
                  },
                  e,
                  !0,
                );
                if (null != f.current) m(n);
              },
              300,
              { leading: !0 },
            ),
            [],
          ),
          v = a.useMemo(
            () =>
              h.filter((e) => {
                for (let t of s) if (E[t].filter(e)) return !0;
                return !1;
              }),
            [h, s],
          );
        a.useEffect(() => {
          p(t, l);
        }, [t, p, l]);
        let [k, w] = a.useState(void 0),
          Z = v.find((e) => e.key === k),
          { TabBar: R, renderSelectedTab: O } = (0, _.Z)({ tabs: I }, []);
        return (0, r.jsxs)("div", {
          ref: e,
          className: i()(N.panel, T.panel),
          children: [
            (0, r.jsxs)("div", {
              className: T.toolbar,
              children: [
                (0, r.jsx)(u.Button, {
                  className: T.toolbarButton,
                  look: u.Button.Looks.BLANK,
                  size: u.Button.Sizes.ICON,
                  onClick: g.Zw,
                  children: (0, r.jsx)("span", {
                    title: S.Z.Messages.CLEAR,
                    children: (0, r.jsx)(u.TrashIcon, {
                      size: "md",
                      color: "currentColor",
                      "aria-label": S.Z.Messages.CLEAR,
                    }),
                  }),
                }),
                (0, r.jsx)("div", { className: T.toolbarDivider }),
                (0, r.jsx)("div", {
                  className: T.filters,
                  children: Object.entries(E).map((e) => {
                    let [t, n] = e;
                    return (0, r.jsx)(
                      u.Clickable,
                      {
                        className: i()(
                          T.filter,
                          s.includes(t) && T.activeFilter,
                        ),
                        onClick: () => {
                          var e;
                          return (
                            (e = t),
                            void c((t) =>
                              t.includes(e)
                                ? t.filter((t) => t !== e)
                                : [...t, e],
                            )
                          );
                        },
                        children: n.label,
                      },
                      t,
                    );
                  }),
                }),
              ],
            }),
            (0, r.jsx)("div", {
              className: T.toolbar,
              children: (0, r.jsx)(u.SearchBar, {
                className: T.searchBar,
                query: t,
                onChange: n,
                onClear: () => n(""),
                placeholder: "Search by event name",
              }),
            }),
            (0, r.jsx)(C.Z, {
              columns: y,
              data: v,
              selectedRowKey: k,
              onClickRow: (e) => w(e.key),
            }),
            null != Z &&
              (0, r.jsxs)(j.Z, {
                className: T.subPanel,
                minHeight: 100,
                initialHeight:
                  null != e.current ? e.current.clientHeight / 2 : 300,
                children: [
                  (0, r.jsx)(R, {}),
                  O({ loggedEvent: Z, onClose: () => w(void 0) }),
                ],
              }),
          ],
        });
      }
    },
    592197: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var r = n(735250);
      n(470079);
      var a = n(702904),
        l = n(351930);
      function i() {
        return (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(a.Z, {}), (0, r.jsx)(l.Z, {})],
        });
      }
    },
    860337: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return x;
        },
      });
      var r = n(735250),
        a = n(470079),
        l = n(120356),
        i = n.n(l),
        o = n(481060),
        s = n(931240),
        c = n(207796),
        d = n(836768),
        u = n(859921),
        h = n(785287),
        m = n(219299);
      function x() {
        let e = a.useRef(null);
        return (0, r.jsxs)("div", {
          ref: e,
          className: i()(m.panel, h.panel),
          children: [
            (0, r.jsx)(o.Button, {
              size: o.Button.Sizes.SMALL,
              onClick: s.LX,
              children: "Reset Every Clan Setup State",
            }),
            (0, r.jsx)(o.Button, {
              size: o.Button.Sizes.SMALL,
              onClick: c.PJ,
              children: "Reset Clan Discovery State",
            }),
            (0, r.jsx)(o.Button, {
              size: o.Button.Sizes.SMALL,
              onClick: d.u,
              children: "Reset Global Discovery State",
            }),
            (0, r.jsx)(o.Button, {
              size: o.Button.Sizes.SMALL,
              onClick: u.OI,
              children: "Reset Global Discovery Servers State",
            }),
          ],
        });
      }
    },
    789654: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return T;
        },
        q: function () {
          return S;
        },
      }),
        n(627494),
        n(757143),
        n(47120),
        n(315314),
        n(610138),
        n(216116),
        n(78328),
        n(815648),
        n(518263),
        n(970173),
        n(520712),
        n(268111),
        n(941497),
        n(32026),
        n(480839),
        n(744285),
        n(492257),
        n(873817),
        n(390547),
        n(724458);
      var r = n(735250),
        a = n(470079),
        l = n(688619),
        i = n.n(l),
        o = n(392711),
        s = n.n(o),
        c = n(470716),
        d = n(190558),
        u = n(203165),
        h = n(481060),
        m = n(410030),
        x = n(705262),
        f = n(374794),
        p = n(58755),
        b = n(246992),
        g = n(500949),
        v = n(806714);
      let { SemanticColors: j } = d.V;
      function C(e) {
        return e.replaceAll(/_|\./g, "-").toLowerCase();
      }
      function _(e) {
        return e.replaceAll(/_|-/g, ".").toLowerCase();
      }
      function S(e, t) {
        let n = new Blob([t], { type: "application/json" }),
          r = URL.createObjectURL(n),
          a = document.createElement("a"),
          l = new TextEncoder().encode(t);
        crypto.subtle.digest("SHA-256", l).then((t) => {
          let n = Array.from(new Uint8Array(t))
            .map((e) => e.toString(16).padStart(2, "0"))
            .join("");
          (a.href = r),
            (a.download = "".concat(e, "-").concat(n.slice(0, 8), ".json")),
            a.click(),
            URL.revokeObjectURL(r);
        });
      }
      function T() {
        let e = (0, m.Fg)(),
          [t, n, l, o, d, u] = (0, g.zn)(),
          {
            semanticColorOverrides: b,
            rawColorOverrides: j,
            tab: _,
            scales: T,
          } = t,
          y = a.useMemo(() => {
            let t = Object.entries(b).map((t) => {
                let [n, r] = t,
                  { colors: a, highlight: l } = r,
                  i = a[e];
                if (null == i) return "";
                let o = C(n);
                if (l) return "--".concat(o, ": magenta !important;");
                let s = C(i.color),
                  c = i.opacity,
                  d =
                    c < 1
                      ? "hsl(var(--".concat(s, "-hsl) / ").concat(c, ")")
                      : "var(--".concat(s, ")");
                return "--"
                  .concat(o, ": color-mix(\n        in oklab,\n        ")
                  .concat(
                    d,
                    " 100%,\n        var(--theme-base-color, black) var(--theme-base-color-amount, 0%)\n      );",
                  );
              }),
              n = Object.keys(j).flatMap((e) => {
                let t = j[e],
                  {
                    h: n,
                    s: r,
                    l: a,
                  } = (function (e) {
                    let [t, n, r] =
                        "transparent" === e ? [0, 0, 0] : i()(e).hsl(),
                      a = isNaN(t) ? 0 : s().round(t, 1),
                      l = s().round(100 * r, 1);
                    return { h: a, s: s().round(100 * n, 1), l: l };
                  })(t.highlight ? "#FF00FF" : t.color),
                  l = s().kebabCase(e);
                return [
                  "--"
                    .concat(l, "-hsl: ")
                    .concat(n, " calc(var(--saturation-factor, 1) * ")
                    .concat(r, "%) ")
                    .concat(a, "% !important;"),
                  "--"
                    .concat(l, ": hsl(var(--")
                    .concat(l, "-hsl)) !important;"),
                ];
              }),
              r = T.reduce((e, t) => {
                let { name: n } = t,
                  r = (0, g.XM)(t),
                  a = (0, g.W6)(r, n);
                return (
                  e +
                  Object.keys(a).reduce((e, t) => {
                    let n = a[t],
                      l = r[t],
                      i = (0, g.HI)(l);
                    return "".concat(e, "\n--").concat(n, ": ").concat(i, ";");
                  }, "")
                );
              }, "");
            return "\n      :root {\n        "
              .concat(r, "\n      }\n\n      .theme-")
              .concat(e, " {\n        ")
              .concat(t.join("\n"), "\n      }\n\n      html {\n        ")
              .concat(n.join("\n"), "\n      }\n    ");
          }, [j, T, b, e]);
        return (0, r.jsxs)("div", {
          className: v.panel,
          children: [
            (0, r.jsxs)("div", {
              className: v.toolbar,
              style: {
                "--custom-theme-selection-selection-size": "40px",
                "--custom-theme-selection-group-column-gap": "var(--spacing-8)",
              },
              children: [
                (0, r.jsxs)(h.TabBar, {
                  className: v.tabBar,
                  type: "top",
                  look: "brand",
                  selectedItem: _,
                  onItemSelect: (e) => {
                    n((t) => ({ ...t, tab: e }));
                  },
                  children: [
                    (0, r.jsx)(h.TabBar.Item, {
                      id: g.H8.TOKENS,
                      children: "Tokens",
                    }),
                    (0, r.jsx)(h.TabBar.Item, {
                      id: g.H8.PALETTES,
                      children: "Palettes",
                    }),
                  ],
                }),
                (0, r.jsx)(x.ZP, {
                  type: x.yH.SETTINGS,
                  children: (0, r.jsx)(x.ZP.Basic, {
                    className: v.toolbarThemeSelector,
                    hideSystemSelector: !0,
                  }),
                }),
                (0, r.jsxs)("div", {
                  className: v.toolbarButtons,
                  children: [
                    (0, r.jsx)(h.Button, {
                      size: h.Button.Sizes.ICON,
                      color: h.Button.Colors.TRANSPARENT,
                      look: h.Button.Looks.BLANK,
                      onClick: l,
                      disabled: !d,
                      children: (0, r.jsx)(h.UndoIcon, {}),
                    }),
                    (0, r.jsx)(h.Button, {
                      size: h.Button.Sizes.ICON,
                      color: h.Button.Colors.TRANSPARENT,
                      look: h.Button.Looks.BLANK,
                      onClick: o,
                      disabled: !u,
                      children: (0, r.jsx)(h.RedoIcon, {}),
                    }),
                    (0, r.jsx)(f.Z, {
                      "aria-label": "Import",
                      filters: [{ name: "JSON", extensions: ["json"] }],
                      onChange: (e) => {
                        let t = e.currentTarget.files,
                          r = null == t ? void 0 : t[0];
                        if (null == r) return;
                        let a = new FileReader();
                        (a.onload = () => {
                          let e = a.result;
                          if ("string" == typeof e)
                            try {
                              let t = JSON.parse(e);
                              if (null == t) return;
                              n(t);
                            } catch (e) {}
                        }),
                          a.readAsText(r);
                      },
                      size: h.Button.Sizes.ICON,
                      color: h.Button.Colors.TRANSPARENT,
                      look: h.Button.Looks.BLANK,
                      children: (0, r.jsx)(h.UploadIcon, {}),
                    }),
                    (0, r.jsx)(h.Button, {
                      size: h.Button.Sizes.ICON,
                      color: h.Button.Colors.TRANSPARENT,
                      look: h.Button.Looks.BLANK,
                      onClick: () => {
                        S("color-overrides", JSON.stringify({ ...t }, null, 2));
                      },
                      children: (0, r.jsx)(h.DownloadIcon, {}),
                    }),
                  ],
                }),
              ],
            }),
            (0, r.jsx)("div", {
              className: v.tab,
              hidden: _ !== g.H8.TOKENS,
              children: (0, r.jsx)(N, { state: t, setState: n }),
            }),
            (0, r.jsx)("div", {
              className: v.tab,
              hidden: _ !== g.H8.PALETTES,
              children: (0, r.jsx)(p.P, { state: t, setState: n }),
            }),
            (0, r.jsx)(c.ql, {
              children: (0, r.jsx)("style", {
                id: "devtools-color-overrides",
                children: y,
              }),
            }),
          ],
        });
      }
      function N(e) {
        let { state: t, setState: n } = e,
          l = (0, m.Fg)(),
          { semanticColorOverrides: i, rawColorOverrides: o } = t,
          s = a.useMemo(
            () =>
              Object.keys(u.b).reduce(
                (e, t) => [...e, { value: t, label: t }],
                [],
              ),
            [],
          ),
          c = a.useCallback(
            (e) => {
              n((t) => {
                var n;
                let { semanticColorOverrides: r } = t,
                  a = null !== (n = r[e]) && void 0 !== n ? n : (0, g.$R)(e);
                return { ...t, semanticColorOverrides: { ...r, [e]: a } };
              });
            },
            [n],
          ),
          d = a.useCallback(
            (e) => {
              n((t) => {
                let { rawColorOverrides: n } = t;
                return null == n[e]
                  ? {
                      ...t,
                      rawColorOverrides: {
                        ...n,
                        [e]: { color: u.b[e].hex, highlight: !1 },
                      },
                    }
                  : t;
              });
            },
            [n],
          ),
          x = a.useCallback(
            (e) => {
              n((t) => {
                let { semanticColorOverrides: n } = t,
                  r = { ...n };
                return delete r[e], { ...t, semanticColorOverrides: r };
              });
            },
            [n],
          ),
          f = a.useCallback(
            (e) => {
              n((t) => {
                let { semanticColorOverrides: n } = t,
                  r = n[e];
                if (null == r) return t;
                let a = { ...n };
                return (
                  (a[e] = (0, g.GU)(r)), { ...t, semanticColorOverrides: a }
                );
              });
            },
            [n],
          ),
          p = Object.keys(j).map((e) => ({ value: e, label: C(e) })),
          S = Object.keys(u.b).map((e) => ({ value: e, label: e }));
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(h.Text, {
              variant: "text-lg/semibold",
              children: "Semantic Tokens",
            }),
            (0, r.jsx)(h.SearchableSelect, {
              options: p,
              placeholder: "Search for a semantic token...",
              value: void 0,
              onChange: c,
              renderOptionPrefix: (e) =>
                null == e
                  ? null
                  : (0, r.jsx)("div", {
                      "data-theme": l,
                      className: v.colorPreview,
                      style: {
                        "--custom-color": "var(--".concat(e.label, ")"),
                      },
                    }),
              popoutLayerContext: b.O$,
            }),
            (0, r.jsx)("ul", {
              className: v.overrides,
              children: Object.entries(i).map((e) => {
                let [t, a] = e,
                  i = a.colors[l];
                if (null == i) return null;
                let o = _(i.color),
                  c = i.opacity,
                  d = g.jC[t][l];
                return (0, r.jsx)(
                  y,
                  {
                    title: C(t),
                    subtitle:
                      1 === d.opacity
                        ? _(d.raw)
                        : ""
                            .concat(_(d.raw), " @ ")
                            .concat(100 * d.opacity, "%"),
                    highlight: a.highlight,
                    onReset: () => {
                      n((e) => {
                        let { semanticColorOverrides: n } = e;
                        if (null == n[t]) return e;
                        let r = (0, g.$R)(t);
                        return {
                          ...e,
                          semanticColorOverrides: { ...n, [t]: r },
                        };
                      });
                    },
                    onRemove: () => x(t),
                    onHighlightToggle: () => f(t),
                    children: (0, r.jsxs)("div", {
                      className: v.semanticOverride,
                      children: [
                        (0, r.jsx)(h.SearchableSelect, {
                          value: o,
                          options: s,
                          onChange: (e) => {
                            n((n) => {
                              let { semanticColorOverrides: r } = n,
                                a = r[t];
                              if (null == a) return n;
                              let i = a.colors[l];
                              if (null == i) return n;
                              let o = (0, g.lT)(a, t, e, i.opacity, l);
                              return {
                                ...n,
                                semanticColorOverrides: { ...r, [t]: o },
                              };
                            });
                          },
                          renderOptionPrefix: (e) => {
                            if (null == e) return null;
                            let t = e.label.replaceAll(".", "-");
                            return (0, r.jsx)("div", {
                              "data-theme": l,
                              className: v.colorPreview,
                              style: {
                                "--custom-color": "var(--".concat(t, ")"),
                              },
                            });
                          },
                          popoutLayerContext: b.O$,
                        }),
                        (0, r.jsx)(h.TextInput, {
                          inputClassName: v.opacityInput,
                          type: "number",
                          value: c,
                          min: 0,
                          max: 1,
                          step: 0.01,
                          onChange: (e) => {
                            let r = parseFloat(e);
                            !isNaN(r) &&
                              n((e) => {
                                let { semanticColorOverrides: n } = e,
                                  a = n[t];
                                if (null == a) return e;
                                let i = a.colors[l];
                                if (null == i) return e;
                                let o = (0, g.lT)(a, t, i.color, r, l);
                                return {
                                  ...e,
                                  semanticColorOverrides: { ...n, [t]: o },
                                };
                              });
                          },
                        }),
                      ],
                    }),
                  },
                  t,
                );
              }),
            }),
            (0, r.jsx)("div", { className: v.divider }),
            (0, r.jsx)(h.Text, {
              variant: "text-lg/semibold",
              children: "Raw Tokens",
            }),
            (0, r.jsx)(h.SearchableSelect, {
              options: S,
              placeholder: "Search for a raw color...",
              value: void 0,
              onChange: d,
              renderOptionPrefix: (e) => {
                if (null == e) return null;
                let t = e.label.replaceAll(".", "-");
                return (0, r.jsx)("div", {
                  "data-theme": l,
                  className: v.colorPreview,
                  style: { "--custom-color": "var(--".concat(t, ")") },
                });
              },
              popoutLayerContext: b.O$,
            }),
            (0, r.jsx)("ul", {
              className: v.rawOverrides,
              children: Object.entries(o).map((e) => {
                let [t, a] = e;
                return (0, r.jsxs)(
                  y,
                  {
                    title: t,
                    subtitle: u.b[t].hex,
                    highlight: a.highlight,
                    onReset: () => {
                      n((e) => {
                        let { rawColorOverrides: n } = e,
                          r = { ...n };
                        return (
                          (r[t] = { color: u.b[t].hex, highlight: !1 }),
                          { ...e, rawColorOverrides: r }
                        );
                      });
                    },
                    onRemove: () => {
                      n((e) => {
                        let { rawColorOverrides: n } = e,
                          r = { ...n };
                        return delete r[t], { ...e, rawColorOverrides: r };
                      });
                    },
                    onHighlightToggle: () => {
                      n((e) => {
                        let { rawColorOverrides: n } = e,
                          r = n[t];
                        if (null == r) return e;
                        let a = { ...n };
                        return (
                          (a[t] = { ...r, highlight: !r.highlight }),
                          { ...e, rawColorOverrides: a }
                        );
                      });
                    },
                    children: [
                      (0, r.jsx)("input", {
                        className: v.colorInput,
                        type: "color",
                        value: a.color,
                        onChange: (e) => {
                          let r = e.target.value;
                          n((e) => {
                            let { rawColorOverrides: n } = e;
                            return {
                              ...e,
                              rawColorOverrides: {
                                ...n,
                                [t]: { color: r, highlight: !1 },
                              },
                            };
                          });
                        },
                      }),
                      (0, r.jsx)(h.Text, {
                        variant: "text-sm/medium",
                        tabularNumbers: !0,
                        children: a.color,
                      }),
                    ],
                  },
                  t,
                );
              }),
            }),
          ],
        });
      }
      function y(e) {
        let {
          title: t,
          subtitle: n,
          highlight: a,
          onReset: l,
          onRemove: i,
          onHighlightToggle: o,
          children: s,
        } = e;
        return (0, r.jsxs)("li", {
          className: v.override,
          "data-highlight": a,
          children: [
            (0, r.jsxs)("div", {
              className: v.overrideHeader,
              children: [
                (0, r.jsxs)("div", {
                  className: v.title,
                  children: [
                    (0, r.jsx)(h.Text, {
                      lineClamp: 1,
                      variant: "text-md/medium",
                      className: v.overrideHeading,
                      tabularNumbers: !0,
                      children: t,
                    }),
                    null != n
                      ? (0, r.jsx)(h.Text, {
                          variant: "text-sm/medium",
                          color: "text-secondary",
                          tabularNumbers: !0,
                          children: n,
                        })
                      : null,
                  ],
                }),
                (0, r.jsx)(h.Clickable, {
                  onClick: o,
                  className: v.clickabeIcon,
                  children: (0, r.jsx)(h.EyeIcon, {
                    size: "xs",
                    color: a ? "var(--text-brand)" : "currentColor",
                  }),
                }),
                (0, r.jsx)(h.Clickable, {
                  className: v.clickabeIcon,
                  onClick: l,
                  children: (0, r.jsx)(h.RefreshIcon, {
                    size: "xs",
                    color: "currentColor",
                  }),
                }),
                (0, r.jsx)(h.Clickable, {
                  className: v.removeOverride,
                  onClick: i,
                  children: (0, r.jsx)(h.XSmallIcon, {
                    size: "xs",
                    color: "currentColor",
                  }),
                }),
              ],
            }),
            (0, r.jsx)("div", { className: v.overrideContent, children: s }),
          ],
        });
      }
    },
    58755: function (e, t, n) {
      n.d(t, {
        P: function () {
          return b;
        },
      }),
        n(724458),
        n(47120);
      var r = n(735250),
        a = n(470079),
        l = n(394900),
        i = n(661105),
        o = n(609067),
        s = n(94367),
        c = n(203165),
        d = n(481060),
        u = n(789654),
        h = n(246992),
        m = n(500949),
        x = n(806714);
      let f = Object.keys(m.jQ).map((e) => ({ value: e, label: e })),
        p = Array.from(
          Array.from(
            Object.keys(c.b).reduce((e, t) => {
              let [n] = t.split(".");
              return e.add(n), e;
            }, new Set()),
          ),
        ).map((e) => ({ value: e, label: e }));
      function b(e) {
        let { state: t, setState: n } = e,
          { scales: l } = t,
          [i, o] = a.useState(null),
          s = (0, r.jsxs)("div", {
            className: x.section,
            children: [
              (0, r.jsx)(d.SearchableSelect, {
                options: p,
                placeholder: "Select a scale to edit...",
                value: void 0,
                onChange: (e) => {
                  let r = t.scales.find((t) => t.name === e);
                  if (null == r)
                    (r = {
                      name: e,
                      base:
                        "plum" === e
                          ? c.b["plum.10"].hex
                          : c.b["".concat(e, ".500")].hex,
                      colorSpace: m.jQ.ICTCP,
                      showColumnarPalettePreview: !1,
                      useP3ColorSpace: !1,
                      darkness: 0,
                      lightness: 0,
                      easing: m.iw.LINEAR,
                      easingStrength: 1,
                      steps: 26,
                    }),
                      n({ ...t, scales: [...t.scales, r] });
                },
                popoutLayerContext: h.O$,
              }),
              (0, r.jsx)("ul", {
                className: x.overrides,
                children: l.map((e) =>
                  (0, r.jsx)(
                    "li",
                    {
                      children: (0, r.jsx)(d.Clickable, {
                        onClick: () => o(e.name),
                        style: { cursor: "pointer" },
                        children: (0, r.jsx)(v, {
                          scale: e,
                          onRemove: () =>
                            n({
                              ...t,
                              scales: t.scales.filter((t) => t.name !== e.name),
                            }),
                        }),
                      }),
                    },
                    e.name,
                  ),
                ),
              }),
            ],
          }),
          u = l.find((e) => e.name === i),
          f =
            null != u
              ? (0, r.jsx)(g, { onClose: () => o(null), scale: u, setState: n })
              : s;
        return (0, r.jsx)("div", { children: f });
      }
      function g(e) {
        let { scale: t, setState: n, onClose: a } = e,
          {
            name: c,
            base: p,
            darkness: b,
            lightness: g,
            showColumnarPalettePreview: v,
            colorSpace: C,
            easingStrength: _ = 1,
            useP3ColorSpace: S,
            steps: T = 26,
          } = t,
          N = (0, m.XM)(t),
          y = (0, m.W6)(N, c);
        return (0, r.jsxs)(d.FormSection, {
          className: x.paletteSettings,
          children: [
            (0, r.jsxs)("div", {
              className: x.titleWithIcon,
              children: [
                (0, r.jsx)(d.Clickable, {
                  onClick: a,
                  style: { maxWidth: 80 },
                  children: (0, r.jsx)(d.ArrowSmallLeftIcon, { size: "sm" }),
                }),
                (0, r.jsx)(d.Text, { variant: "text-lg/bold", children: c }),
                (0, r.jsx)(d.Clickable, {
                  onClick: function () {
                    let e = Object.entries(N).reduce((e, t) => {
                      let [n, r] = t;
                      return (
                        (e[n] = {
                          value: (0, l.Z)((0, i.Z)(r, m.HW.sRGB), {
                            format: "hex",
                          }),
                          type: "color",
                        }),
                        e
                      );
                    }, {});
                    (0, u.q)(
                      "figma-".concat(t.name),
                      JSON.stringify(e, null, 4),
                    );
                  },
                  style: { cursor: "pointer" },
                  children: (0, r.jsx)(j, {}),
                }),
              ],
            }),
            (0, r.jsxs)(d.FormItem, {
              title: "Base Color",
              className: x.formItem,
              children: [
                (0, r.jsxs)(d.Text, {
                  variant: "text-sm/medium",
                  color: "text-secondary",
                  children: [
                    "The base color the ",
                    (0, r.jsx)("code", { children: c }),
                    " palette is generated from.",
                  ],
                }),
                (0, r.jsx)("input", {
                  type: "color",
                  value: p,
                  onChange: (e) => (0, m.Ib)(c, e.target.value, n),
                }),
              ],
            }),
            (0, r.jsxs)(d.FormItem, {
              title: "Color Space",
              children: [
                (0, r.jsx)(d.FormText, {
                  type: d.FormTextTypes.DESCRIPTION,
                  children:
                    "The color space used to generate the palette. Different color spaces will produce different results.",
                }),
                (0, r.jsx)(d.SingleSelect, {
                  options: f,
                  value: C,
                  onChange: (e) => (0, m.t4)(c, e, n),
                  popoutLayerContext: h.O$,
                }),
              ],
            }),
            (0, r.jsxs)(d.FormSection, {
              title: "Luminance",
              children: [
                (0, r.jsx)(d.FormItem, {}),
                (0, r.jsxs)(d.FormItem, {
                  title: "Lighten (".concat((100 * g).toFixed(), "%)"),
                  children: [
                    (0, r.jsx)(d.FormText, {
                      type: d.FormTextTypes.DESCRIPTION,
                      children:
                        "Decrease the darkness of the darkest color in the palette. Increasing this makes the darker colors in the palette lighter.",
                    }),
                    (0, r.jsx)(d.Slider, {
                      onValueRender: () => null,
                      initialValue: g,
                      stickToMarkers: !0,
                      markers: Array.from({ length: 21 }, (e, t) => t / 10),
                      minValue: 0,
                      maxValue: 2,
                      onValueChange: (e) => (0, m.h9)(c, e, n),
                      onMarkerRender: () => null,
                    }),
                  ],
                }),
                (0, r.jsxs)(d.FormItem, {
                  title: "Darken (".concat((100 * b).toFixed(), "%)"),
                  children: [
                    (0, r.jsx)(d.FormText, {
                      type: d.FormTextTypes.DESCRIPTION,
                      children:
                        "Increase the darkness of the lightest color in the palette. Increasing this makes the lighter colors in the palette darker.",
                    }),
                    (0, r.jsx)(d.Slider, {
                      onValueRender: () => null,
                      initialValue: 0,
                      stickToMarkers: !0,
                      markers: Array.from({ length: 21 }, (e, t) => t / 10),
                      minValue: 0,
                      maxValue: 2,
                      onValueChange: (e) => (0, m.YE)(c, e, n),
                      onMarkerRender: () => null,
                    }),
                  ],
                }),
              ],
            }),
            (0, r.jsx)(d.FormSection, {
              title: "Easing",
              children: (0, r.jsxs)(d.FormItem, {
                title: "Easing Strength (".concat(_.toFixed(2), ")"),
                children: [
                  (0, r.jsx)(d.FormText, {
                    type: d.FormTextTypes.DESCRIPTION,
                    children: "Adjust the strength of the easing function.",
                  }),
                  (0, r.jsx)(d.Slider, {
                    onValueRender: () => null,
                    initialValue: _,
                    minValue: 1,
                    maxValue: 5,
                    onValueChange: (e) => (0, m.rd)(c, e, n),
                    onMarkerRender: () => null,
                  }),
                ],
              }),
            }),
            (0, r.jsxs)(d.FormSection, {
              title: "Palette",
              children: [
                (0, r.jsx)(d.FormItem, {
                  children: (0, r.jsx)(d.FormSwitch, {
                    note: "Renders the palette preview in a single column, useful for comparing the luminance of each step.",
                    value: v,
                    onChange: (e) => (0, m.KB)(c, e, n),
                    children: "Show columnar palette preview",
                  }),
                }),
                (0, r.jsx)(d.FormItem, {
                  children: (0, r.jsx)(d.FormSwitch, {
                    note: "Renders the palette preview in a single column, useful for comparing the luminance of each step.",
                    value: S,
                    disabled: !m.S2,
                    onChange: (e) => (0, m.uF)(c, e, n),
                    children: "Use P3 Color Space",
                  }),
                }),
                (0, r.jsx)(d.FormItem, {
                  title: "Steps (".concat(T, ")"),
                  children: (0, r.jsx)(d.Slider, {
                    onValueRender: () => null,
                    initialValue: T,
                    minValue: (0, m.A0)(c).length,
                    maxValue: 100,
                    onValueChange: (e) => (0, m.YC)(c, Math.round(e), n),
                    onMarkerRender: () => null,
                  }),
                }),
                (0, r.jsx)(d.FormItem, {
                  title: "Palette Preview",
                  children: (0, r.jsx)("div", {
                    className: x.paletteOverrides,
                    "data-columnar": v,
                    children: Object.entries(N).map((e, n) => {
                      let [a, c] = e,
                        u = (0, m.HI)(c),
                        h =
                          (0, o.Z)((0, s.Z)("black"), c) > 4.5
                            ? "black"
                            : "white",
                        x = y[a];
                      return (0, r.jsxs)(
                        "div",
                        {
                          style: { backgroundColor: u },
                          children: [
                            (0, r.jsxs)(d.Text, {
                              variant: v ? "text-sm/medium" : "text-xs/medium",
                              style: { color: h },
                              children: [
                                t.name,
                                ".",
                                n + 1,
                                v && null != x
                                  ? (0, r.jsx)("strong", {
                                      children: " - ".concat(x),
                                    })
                                  : "",
                              ],
                            }),
                            v &&
                              (0, r.jsxs)(d.Text, {
                                variant: "text-xxs/medium",
                                style: { opacity: 0.75, color: h },
                                children: [
                                  (0, l.Z)((0, i.Z)(c, m.HW.sRGB), {
                                    format: "hex",
                                  }).toUpperCase(),
                                  " - ",
                                  u,
                                ],
                              }),
                          ],
                        },
                        a,
                      );
                    }),
                  }),
                }),
              ],
            }),
          ],
        });
      }
      function v(e) {
        let { scale: t, onRemove: n } = e,
          o = a.useMemo(
            () =>
              Object.values((0, m.XM)(t)).map((e) =>
                (0, l.Z)((0, i.Z)(e, m.HW.sRGB), { format: "hex" }),
              ),
            [t],
          );
        return (0, r.jsxs)("li", {
          className: x.override,
          children: [
            (0, r.jsxs)("div", {
              className: x.overrideHeader,
              children: [
                (0, r.jsx)("div", {
                  className: x.title,
                  children: (0, r.jsx)(d.Text, {
                    lineClamp: 1,
                    variant: "text-md/medium",
                    className: x.overrideHeading,
                    tabularNumbers: !0,
                    children: t.name,
                  }),
                }),
                (0, r.jsx)("span", {}),
                (0, r.jsx)("span", {}),
                (0, r.jsx)(d.Clickable, {
                  className: x.removeOverride,
                  onClick: n,
                  children: (0, r.jsx)(d.XSmallIcon, {
                    size: "xs",
                    color: "currentColor",
                  }),
                }),
              ],
            }),
            (0, r.jsx)("div", {
              className: x.palettePreview,
              children: o.map((e) =>
                (0, r.jsx)(
                  "span",
                  {
                    style: {
                      width: 16,
                      height: 16,
                      backgroundColor: e,
                      borderRadius: "var(--radius-xs)",
                    },
                  },
                  e,
                ),
              ),
            }),
          ],
        });
      }
      let j = () =>
        (0, r.jsxs)("svg", {
          width: "20",
          height: "20",
          viewBox: "0 0 20 20",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, r.jsx)("path", {
              d: "M7.08366 18.3337C8.69366 18.3337 10.0003 17.0892 10.0003 15.5559V12.7781H7.08366C5.47366 12.7781 4.16699 14.0225 4.16699 15.5559C4.16699 17.0892 5.47366 18.3337 7.08366 18.3337Z",
              fill: "#0ACF83",
            }),
            (0, r.jsx)("path", {
              d: "M4.16699 10.0003C4.16699 8.46699 5.47366 7.22255 7.08366 7.22255H10.0003V12.7781H7.08366C5.47366 12.7781 4.16699 11.5337 4.16699 10.0003Z",
              fill: "#A259FF",
            }),
            (0, r.jsx)("path", {
              d: "M4.16702 4.44477C4.16702 2.91144 5.47369 1.66699 7.08369 1.66699H10.0004L10.0003 7.22255H7.08366C5.47366 7.22255 4.16702 5.9781 4.16702 4.44477Z",
              fill: "#F24E1E",
            }),
            (0, r.jsx)("path", {
              d: "M10.0004 1.66699L12.917 1.66699C14.527 1.66699 15.8337 2.91144 15.8337 4.44477C15.8337 5.9781 14.527 7.22255 12.917 7.22255H10.0003L10.0004 1.66699Z",
              fill: "#FF7262",
            }),
            (0, r.jsx)("path", {
              d: "M15.8337 10.0003C15.8337 11.5337 14.527 12.7781 12.917 12.7781C11.307 12.7781 10.0003 11.5337 10.0003 10.0003C10.0003 8.46699 11.307 7.22255 12.917 7.22255C14.527 7.22255 15.8337 8.46699 15.8337 10.0003Z",
              fill: "#1ABCFE",
            }),
          ],
        });
    },
    691867: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return d;
        },
      }),
        n(47120);
      var r = n(735250),
        a = n(470079),
        l = n(442837),
        i = n(481060),
        o = n(581612),
        s = n(91311),
        c = n(638135);
      function d() {
        let e = (0, l.e7)([s.Z], () => s.Z.allWithDescriptions(), [], l.pF),
          t = a.useMemo(
            () =>
              e.map((e) => {
                let [t, n, a] = e;
                return (0, r.jsx)(
                  i.FormItem,
                  {
                    children: (0, r.jsx)(i.FormSwitch, {
                      value: n,
                      note: t,
                      onChange: (e) => (0, o.Z)(t, e),
                      hideBorder: !0,
                      children: a,
                    }),
                  },
                  t,
                );
              }),
            [e],
          );
        return (0, r.jsxs)("div", {
          className: c.container,
          children: [
            (0, r.jsx)(i.Button, {
              onClick: o.q,
              className: c.button,
              fullWidth: !0,
              children: "Clear all",
            }),
            (0, r.jsx)("div", { className: c.rowsContainer, children: t }),
          ],
        });
      }
    },
    916790: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return I;
        },
      }),
        n(47120);
      var r = n(735250),
        a = n(470079),
        l = n(120356),
        i = n.n(l),
        o = n(392711),
        s = n(913527),
        c = n.n(s),
        d = n(481060),
        u = n(570140),
        h = n(665149),
        m = n(301801),
        x = n(4912),
        f = n(55935),
        p = n(428530),
        b = n(257785),
        g = n(484036),
        v = n(681619),
        j = n(621060),
        C = n(246195),
        _ = n(219299);
      function S(e) {
        return parseFloat(e.toFixed(3));
      }
      let T = [
        {
          key: "store",
          cellClassName: C.actionColumn,
          render(e) {
            let { trace: t } = e;
            return t.name;
          },
        },
        {
          key: "time",
          cellClassName: C.totalTimeColumn,
          render(e) {
            let { trace: t } = e;
            return "".concat(S(t.time), " ms");
          },
        },
      ];
      function N(e) {
        let { actionLog: t } = e,
          n = a.useMemo(
            () => t.traces.map((e) => ({ key: e.name, trace: e })),
            [t],
          );
        return (0, r.jsx)(d.ScrollerThin, {
          children: (0, r.jsx)(v.Z, { columns: T, data: n }),
        });
      }
      let y = [
        {
          id: "action",
          name: "Action",
          render(e) {
            var t;
            let { actionLog: n } = e,
              a = c()(n.createdAt);
            return (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsxs)(b.E, {
                  className: C.actionProperties,
                  children: [
                    (0, r.jsx)(b.Z9, {
                      name: "Created at",
                      children: (0, r.jsx)("time", {
                        dateTime:
                          null === (t = n.createdAt) || void 0 === t
                            ? void 0
                            : t.toISOString(),
                        title: (0, f.vc)(a, "LLLL"),
                        children: (0, f.Y4)(a),
                      }),
                    }),
                    (0, r.jsxs)(b.Z9, {
                      name: "Total Time",
                      children: [S(n.totalTime), " ms"],
                    }),
                  ],
                }),
                (0, r.jsx)(d.ScrollerThin, {
                  className: C.inspectorContainer,
                  children: (0, r.jsx)(p.Z, { data: n.action }),
                }),
              ],
            });
          },
        },
        {
          id: "traces",
          name: "Store Handlers",
          render(e) {
            let { actionLog: t } = e;
            return (0, r.jsx)(N, { actionLog: t });
          },
        },
      ];
      function k(e) {
        let { actionLog: t, initialHeight: n } = e,
          l = a.useMemo(
            () =>
              t.error
                ? [
                    ...y,
                    {
                      id: "error",
                      name: (0, r.jsxs)(r.Fragment, {
                        children: [
                          (0, r.jsx)(x.Z, { className: C.errorIcon }),
                          "Error",
                        ],
                      }),
                      render(e) {
                        let { actionLog: t } = e;
                        return (0, r.jsxs)(r.Fragment, {
                          children: [
                            (0, r.jsx)("div", {
                              className: i()(C.errorToolbar, _.toolbar),
                              children: (0, r.jsx)("div", {
                                className: _.toolbarGroup,
                                children: (0, r.jsx)(d.Button, {
                                  className: _.toolbarButton,
                                  size: d.Button.Sizes.MIN,
                                  onClick: () => console.error(t.error),
                                  children: "Log to Console",
                                }),
                              }),
                            }),
                            (0, r.jsx)(d.ScrollerThin, {
                              className: C.inspectorContainer,
                              children: (0, r.jsx)(p.Z, { data: t.error }),
                            }),
                          ],
                        });
                      },
                    },
                  ]
                : y,
            [t],
          ),
          { TabBar: o, renderSelectedTab: s } = (0, j.Z)({ tabs: l }, [l]);
        return (0, r.jsxs)(g.Z, {
          className: C.subPanel,
          minHeight: 100,
          initialHeight: n,
          children: [
            (0, r.jsx)(o, {}),
            (0, r.jsxs)(h.ZP, {
              className: i()(_.headerBar, C.subPanelHeaderBar),
              children: [
                (0, r.jsx)(h.ZP.Icon, { icon: d.ReceiptIcon, tooltip: t.name }),
                (0, r.jsx)(h.ZP.Title, { children: t.name }),
              ],
            }),
            s({ actionLog: t }),
          ],
        });
      }
      let w = [
        {
          key: "action",
          cellClassName: C.actionColumn,
          render(e) {
            let { actionLog: t } = e;
            return (0, r.jsxs)(r.Fragment, {
              children: [
                t.error && (0, r.jsx)(x.Z, { className: C.errorIcon }),
                t.name,
              ],
            });
          },
        },
        {
          key: "total time",
          cellClassName: C.totalTimeColumn,
          render(e) {
            let { actionLog: t } = e;
            return "".concat(S(t.totalTime), " ms");
          },
        },
      ];
      function I() {
        let e = a.useRef(null),
          [t, n] = a.useState(""),
          l = (function (e) {
            let [t, n] = a.useState(e.logs),
              r = a.useCallback(() => n([...e.logs]), [e]);
            return (
              a.useEffect(
                () => (
                  e.on("log", r),
                  () => {
                    e.off("log", r);
                  }
                ),
                [e, r],
              ),
              t
            );
          })(u.Z.actionLogger),
          s = a.useMemo(
            () => l.map((e) => ({ key: e.id.toString(), actionLog: e })),
            [l],
          ),
          [c, h] = a.useState(s),
          [x, f] = a.useState(),
          p = a.useRef(null),
          b = a.useCallback(
            (0, o.throttle)(
              async (e, t) => {
                if ("" === e) {
                  h(t);
                  return;
                }
                p.current = (0, o.uniqueId)();
                let n = await (0, m.H)(
                  t,
                  (e) => {
                    let { actionLog: t } = e;
                    return t.name;
                  },
                  e,
                  !0,
                );
                if (null != p.current) h(n);
              },
              300,
              { leading: !0 },
            ),
            [],
          );
        return (
          a.useEffect(() => {
            b(t, s);
          }, [t, b, s]),
          a.useEffect(() => {
            p.current = null;
          }, []),
          (0, r.jsxs)("div", {
            ref: e,
            className: i()(_.panel, C.panel),
            children: [
              (0, r.jsx)("div", {
                className: C.toolbar,
                children: (0, r.jsx)(d.SearchBar, {
                  className: C.searchBar,
                  query: t,
                  onChange: n,
                  onClear: () => n(""),
                  placeholder: "Search by action name",
                }),
              }),
              (0, r.jsx)(v.Z, {
                columns: w,
                data: t.trim().length > 0 ? c : s,
                selectedRowKey: null == x ? void 0 : x.id.toString(),
                onClickRow: (e) => f(e.actionLog),
              }),
              null != x &&
                (0, r.jsx)(k, {
                  actionLog: x,
                  initialHeight:
                    null != e.current ? e.current.clientHeight / 2 : 300,
                }),
            ],
          })
        );
      }
    },
    645973: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var r = n(735250),
        a = n(470079),
        l = n(120356),
        i = n.n(l),
        o = n(481060),
        s = n(718629),
        c = n(124849),
        d = n(219299);
      function u() {
        let e = a.useRef(null);
        return (0, r.jsx)("div", {
          ref: e,
          className: i()(d.panel, c.panel),
          children: (0, r.jsx)(o.Button, {
            size: o.Button.Sizes.SMALL,
            onClick: s.Z.clearUploadedKeyVersions,
            children: "Reset Uploaded Key Versions Cache",
          }),
        });
      }
    },
    903502: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return b;
        },
      }),
        n(47120);
      var r = n(735250),
        a = n(470079),
        l = n(442837),
        i = n(481060),
        o = n(570140),
        s = n(178635),
        c = n(115470),
        d = n(511010),
        u = n(246992),
        h = n(501775);
      let m = 6e4,
        x = 36e5,
        f = 864e5,
        p = [
          { label: "second(s)", value: 1e3 },
          { label: "minute(s)", value: 6e4 },
          { label: "hour(s)", value: 36e5 },
          { label: "day(s)", value: 864e5 },
        ];
      function b() {
        let [e, t] = a.useState(null),
          [n, b] = a.useState(0),
          [g, v] = a.useState(1e3),
          [j, C] = a.useState(0),
          _ = (0, l.e7)([c.Z], () => {
            var t;
            return null === e
              ? null
              : null !== (t = c.Z.getFeedbackConfig(e)) && void 0 !== t
                ? t
                : s.R[e];
          }),
          S = Object.keys(s.R).map((e) => ({ label: e, value: e })),
          T = a.useMemo(
            () => null != e && j >= 0 && j <= 100 && n >= 0,
            [e, j, n],
          );
        return (0, r.jsxs)("div", {
          className: h.container,
          children: [
            (0, r.jsx)(i.FormSection, {
              title: "Feedback Survey",
              className: h.formElement,
              tag: i.FormTitleTags.H3,
              children: (0, r.jsx)(i.SingleSelect, {
                options: S,
                value: e,
                onChange: (e) => {
                  t(e);
                },
                popoutLayerContext: u.O$,
                placeholder: "Select Feedback Survey",
              }),
            }),
            (0, r.jsxs)(i.FormSection, {
              title: "Override Survey Cooldown",
              className: h.formElement,
              tag: i.FormTitleTags.H3,
              children: [
                null != _ &&
                  (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(d.Z, {
                        className: h.formDividerTitle,
                        children: (0, r.jsx)(i.Text, {
                          variant: "text-sm/semibold",
                          children: "Current cooldown",
                        }),
                      }),
                      (0, r.jsx)(i.Text, {
                        variant: "text-sm/normal",
                        children: "".concat(_.cooldown / 1e3, " second(s) or"),
                      }),
                      (0, r.jsx)(i.Text, {
                        variant: "text-sm/normal",
                        children: "".concat(_.cooldown / m, " minute(s) or"),
                      }),
                      (0, r.jsx)(i.Text, {
                        variant: "text-sm/normal",
                        children: "".concat(_.cooldown / x, " hour(s) or"),
                      }),
                      (0, r.jsx)(i.Text, {
                        variant: "text-sm/normal",
                        children: "".concat(_.cooldown / f, " day(s)"),
                      }),
                    ],
                  }),
                (0, r.jsx)(d.Z, {
                  className: h.formDividerTitle,
                  children: (0, r.jsx)(i.Text, {
                    variant: "text-sm/semibold",
                    children: "Override cooldown",
                  }),
                }),
                (0, r.jsxs)("div", {
                  className: h.formRow,
                  children: [
                    (0, r.jsx)(i.TextInput, {
                      min: 0,
                      value: n.toString(),
                      type: "number",
                      placeholder: "Duration length",
                      onChange: (e) => b(parseFloat(e)),
                    }),
                    (0, r.jsx)(i.SingleSelect, {
                      options: p,
                      value: g,
                      onChange: (e) => {
                        v(e);
                      },
                      popoutLayerContext: u.O$,
                    }),
                  ],
                }),
              ],
            }),
            (0, r.jsxs)(i.FormSection, {
              title: "Override Survey Chance",
              className: h.formElement,
              tag: i.FormTitleTags.H3,
              children: [
                null != _ &&
                  (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(d.Z, {
                        className: h.formDividerTitle,
                        children: (0, r.jsx)(i.Text, {
                          variant: "text-sm/semibold",
                          children: "Current chance",
                        }),
                      }),
                      (0, r.jsx)(i.Text, {
                        variant: "text-sm/normal",
                        children: "".concat(100 * _.chance, "%"),
                      }),
                    ],
                  }),
                (0, r.jsx)(d.Z, {
                  className: h.formDividerTitle,
                  children: (0, r.jsx)(i.Text, {
                    variant: "text-sm/semibold",
                    children: "Override chance",
                  }),
                }),
                (0, r.jsxs)("div", {
                  className: h.formRow,
                  children: [
                    (0, r.jsx)(i.TextInput, {
                      min: 0,
                      max: 100,
                      value: j.toString(),
                      type: "number",
                      onChange: (e) => C(parseFloat(e)),
                    }),
                    (0, r.jsx)(i.Text, {
                      variant: "text-md/normal",
                      children: "%",
                    }),
                  ],
                }),
              ],
            }),
            (0, r.jsxs)("div", {
              className: h.formRow,
              children: [
                (0, r.jsx)(i.Button, {
                  onClick: () =>
                    void o.Z.dispatch({
                      type: "FEEDBACK_OVERRIDE_SET",
                      feedbackType: e,
                      cooldown: n * g,
                      chance: j / 100,
                    }),
                  disabled: !T,
                  children: "Update",
                }),
                (0, r.jsx)(i.Button, {
                  onClick: () =>
                    void o.Z.dispatch({
                      type: "FEEDBACK_OVERRIDE_CLEAR",
                      feedbackType: e,
                    }),
                  disabled: !T,
                  children: "Clear Override",
                }),
              ],
            }),
            null == e &&
              (0, r.jsx)(i.Text, {
                variant: "text-sm/normal",
                color: "text-danger",
                children: "Error: need to select a survey",
              }),
            !(n >= 0) &&
              (0, r.jsx)(i.Text, {
                variant: "text-sm/normal",
                color: "text-danger",
                children: "Error: cooldown needs to be a number greater than 0",
              }),
            !(j >= 0 && j <= 100) &&
              (0, r.jsx)(i.Text, {
                variant: "text-sm/normal",
                color: "text-danger",
                children:
                  "Error: chance needs to be a number between 0 and 100",
              }),
            (0, r.jsx)(i.Text, {
              variant: "text-sm/normal",
              children:
                "Clear override resets a feedback survey to its default values",
            }),
          ],
        });
      }
    },
    912072: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return m;
        },
      }),
        n(47120);
      var r = n(735250),
        a = n(470079),
        l = n(120356),
        i = n.n(l),
        o = n(442837),
        s = n(481060),
        c = n(98357),
        d = n(432877),
        u = n(756192),
        h = n(219299);
      function m(e) {
        let { devSettingsCategory: t } = e,
          n = (0, o.e7)([d.ZP], () => d.ZP.allByCategory(t), [t], o.pF),
          l = a.useMemo(
            () =>
              n.map((e) => {
                let [t, n, { label: a }] = e;
                return (0, r.jsx)(
                  s.FormSwitch,
                  {
                    value: n,
                    onChange: (e) => (0, c.Z)(t, e),
                    hideBorder: !0,
                    className: u.switch,
                    children: a,
                  },
                  t,
                );
              }),
            [n],
          );
        return (0, r.jsx)("div", {
          className: i()(h.panel, u.panel),
          children: l,
        });
      }
    },
    428530: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return f;
        },
      }),
        n(47120);
      var r = n(735250);
      n(470079);
      var a = n(346652),
        l = n(692547),
        i = n(410030),
        o = n(95398),
        s = n(981631),
        c = n(219299);
      let d = {
        base00: l.Z.colors.BACKGROUND_SECONDARY.css,
        base03: l.Z.colors.TEXT_WARNING.css,
        base07: l.Z.colors.TEXT_NORMAL.css,
        base08: l.Z.colors.TEXT_MUTED.css,
        base09: l.Z.colors.TEXT_POSITIVE.css,
        base0B: l.Z.colors.TEXT_WARNING.css,
        base0D: l.Z.colors.TEXT_BRAND.css,
      };
      function u(e) {
        let t = {};
        for (let [n, r] of Object.entries(e)) t[n] = r;
        return t;
      }
      let h = u(d),
        m = u(d);
      function x(e) {
        return s.Jn9.test(e)
          ? (0, r.jsx)(o.Z, {
              type: o.Z.Types.TEXT,
              children: () => (0, r.jsx)(r.Fragment, { children: e }),
            })
          : e;
      }
      function f(e) {
        let { data: t } = e,
          n = (0, i.ZP)();
        return (0, r.jsx)("div", {
          className: c.inspectorWrapper,
          children: (0, r.jsx)(a.L, {
            data: t,
            theme: "light" === n ? m : h,
            invertTheme: !1,
            valueRenderer: x,
          }),
        });
      }
    },
    496025: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return T;
        },
      }),
        n(47120);
      var r = n(735250),
        a = n(470079),
        l = n(120356),
        i = n.n(l),
        o = n(602715),
        s = n(442837),
        c = n(481060),
        d = n(43267),
        u = n(933557),
        h = n(258732),
        m = n(592125),
        x = n(699516),
        f = n(594174),
        p = n(55589),
        b = n(630388),
        g = n(98357),
        v = n(432877),
        j = n(246992),
        C = n(128374),
        _ = n(219299);
      function S() {
        var e;
        let t = (0, s.Wu)([p.Z], () => p.Z.getSortedChannels()[1]),
          [n, l] = a.useState(t.length > 0 ? t[0].channelId : void 0),
          { selectedChannel: i, options: g } = (0, s.cj)(
            [m.Z, f.default, x.Z],
            () => ({
              selectedChannel: m.Z.getChannel(n),
              options: t.map((e) => {
                let t = m.Z.getChannel(e.channelId);
                return {
                  value: e.channelId,
                  label: null != t ? (0, u.F6)(t, f.default, x.Z) : e.channelId,
                };
              }),
            }),
          ),
          v = a.useCallback(() => {
            var e;
            if (null == i || !i.isPrivate()) return;
            let t = (0, b.x9)(
              null !== (e = i.recipientFlags) && void 0 !== e ? e : 0,
              o.V.DISMISSED_IN_GAME_MESSAGE_NUX,
            );
            h.Z.updatePrivateChannelRecipientFlags(i.id, t);
          }, [i]),
          _ =
            null != i &&
            !!i.isPrivate() &&
            (0, b.yE)(
              null !== (e = i.recipientFlags) && void 0 !== e ? e : 0,
              o.V.DISMISSED_IN_GAME_MESSAGE_NUX,
            );
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(c.Text, {
              variant: "text-md/semibold",
              children: "In-Game NUX Message for DMs",
            }),
            (0, r.jsxs)("div", {
              className: C.inGameNuxContainer,
              children: [
                (0, r.jsx)(c.SearchableSelect, {
                  wrapperClassName: C.search,
                  options: g,
                  placeholder: "Select DM",
                  value: n,
                  onChange: l,
                  renderOptionPrefix: (e) => {
                    if (null == e) return null;
                    let t = m.Z.getChannel(e.value);
                    return null == t
                      ? null
                      : (0, r.jsx)(c.Avatar, {
                          src: (0, d.x)(t),
                          "aria-hidden": !0,
                          size: c.AvatarSizes.SIZE_16,
                        });
                  },
                  popoutLayerContext: j.O$,
                }),
                (0, r.jsx)(c.Button, {
                  size: c.Button.Sizes.SMALL,
                  onClick: v,
                  disabled: null == n,
                  children: _ ? "Clear NUX Flag" : "Set NUX Flag",
                }),
              ],
            }),
          ],
        });
      }
      function T() {
        let e = v.ZP.allByCategory(v.zU.MESSAGING).map((e) => {
          let [t, n, { label: a }] = e;
          return (0, r.jsx)(
            c.FormSwitch,
            {
              value: n,
              onChange: (e) => (0, g.Z)(t, e),
              hideBorder: !0,
              className: C.switch,
              children: a,
            },
            t,
          );
        });
        return (0, r.jsxs)("div", {
          className: i()(_.panel, C.panel),
          children: [
            e,
            (0, r.jsx)("div", { className: C.divider }),
            (0, r.jsx)(S, {}),
          ],
        });
      }
    },
    442954: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      }),
        n(47120);
      var r = n(735250),
        a = n(470079),
        l = n(120356),
        i = n.n(l),
        o = n(481060),
        s = n(246992),
        c = n(219299),
        d = n(423705);
      function u() {
        let e = {
            BOGOAnnouncementModal: async () => {
              let { default: e } = await n.e("34049").then(n.bind(n, 868508));
              return (t) => (0, r.jsx)(e, { renderModalProps: t });
            },
            PremiumSubscriptionAprilMarketingDecoModal: async () => {
              let { default: e } = await n.e("18327").then(n.bind(n, 731433));
              return (t) => (0, r.jsx)(e, { ...t });
            },
            CollectiblesExpiryModal: async () => {
              let { default: e } = await n.e("77370").then(n.bind(n, 83950));
              return (t) => (0, r.jsx)(e, { ...t });
            },
          },
          t = Object.keys(e).map((e) => ({ label: e, value: e })),
          [l, u] = a.useState(t[0].value);
        return (0, r.jsx)(o.ScrollerThin, {
          className: i()(c.panel),
          children: (0, r.jsx)("div", {
            className: d.panelInner,
            children: (0, r.jsxs)("section", {
              className: d.section,
              children: [
                (0, r.jsx)(o.Heading, {
                  variant: "heading-md/semibold",
                  children: "Open a Modal",
                }),
                (0, r.jsxs)("div", {
                  className: d.inputRow,
                  children: [
                    (0, r.jsx)(o.Select, {
                      className: d.input,
                      options: t,
                      isSelected: (e) => l === e,
                      placeholder: "Trial ID",
                      serialize: (e) => String(e),
                      select: (e) => u(e),
                      popoutLayerContext: s.O$,
                    }),
                    (0, r.jsx)(o.Button, {
                      onClick: () => {
                        (0, o.openModalLazy)(e[l]);
                      },
                      children: "Open",
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      }
    },
    702904: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return b;
        },
      }),
        n(47120);
      var r = n(735250),
        a = n(470079),
        l = n(120356),
        i = n.n(l),
        o = n(399606),
        s = n(544891),
        c = n(481060),
        d = n(355467),
        u = n(244526),
        h = n(853872),
        m = n(246992),
        x = n(219299),
        f = n(423705);
      let p = [
        { label: "VISA", value: "pm_card_us" },
        { label: "Mastercard", value: "pm_card_mastercard" },
        { label: "Canadian Visa", value: "pm_card_ca" },
        { label: "Mexican Visa", value: "pm_card_mx" },
        { label: "German Visa", value: "pm_card_de" },
        { label: "Brazilian Visa", value: "pm_card_br" },
        { label: "UK Visa", value: "pm_card_gb" },
        { label: "Japanese Visa", value: "pm_card_jp" },
        { label: "Malaysia Visa", value: "pm_card_my" },
        { label: "Polish Visa", value: "pm_card_pl" },
      ];
      function b() {
        let [e, t] = a.useState("pm_card_us"),
          n = Object.values((0, o.e7)([h.Z], () => h.Z.paymentSources)),
          l = async () => {
            let t = e;
            "" === t && (t = "pm_card_us"),
              await s.tn.post({
                url: "/debug/payment-source",
                body: { token: t },
              }),
              await (0, d.tZ)();
          },
          u = async () => {
            await s.tn.del("/debug/payment-source"), await (0, d.tZ)();
          };
        return (
          a.useEffect(() => {
            (0, d.tZ)();
          }, []),
          (0, r.jsx)(c.ScrollerThin, {
            className: i()(x.panel),
            children: (0, r.jsxs)("div", {
              className: f.panelInner,
              children: [
                (0, r.jsxs)(c.Text, {
                  style: { marginBottom: "16px" },
                  variant: "text-lg/bold",
                  children: [" ", "Manage Payment Sources", " "],
                }),
                (0, r.jsxs)("div", {
                  className: f.buttons,
                  children: [
                    (0, r.jsx)(c.Text, {
                      variant: "text-md/normal",
                      children: " Card Type ",
                    }),
                    (0, r.jsx)(c.Select, {
                      serialize: (e) => e,
                      isSelected: (t) => t === e,
                      options: p,
                      select: t,
                      popoutLayerContext: m.O$,
                    }),
                    (0, r.jsx)(c.Button, {
                      size: c.Button.Sizes.SMALL,
                      onClick: l,
                      children: "Create Stripe Credit Card",
                    }),
                    n.length > 0 &&
                      (0, r.jsx)(c.Button, {
                        size: c.Button.Sizes.SMALL,
                        onClick: u,
                        children: "Delete All Payment Sources",
                      }),
                  ],
                }),
                (0, r.jsx)(c.Text, {
                  style: { marginTop: "16px", marginBottom: "16px" },
                  variant: "text-md/normal",
                  children: "Existing Payment Sources",
                }),
                n.map((e) => (0, r.jsx)(g, { paymentSource: e }, e.id)),
              ],
            }),
          })
        );
      }
      function g(e) {
        let { paymentSource: t } = e;
        return (0, r.jsxs)("div", {
          className: f.inputRow,
          children: [
            (0, r.jsx)(
              u.Z,
              {
                locale: "en-US",
                paymentSource: t,
                showLabels: !0,
                showPaymentSourceIcon: !0,
              },
              t.id,
            ),
            (0, r.jsx)("img", {
              alt: t.country,
              style: { marginRight: 5, height: 25 },
              src: j(t.country),
            }),
          ],
        });
      }
      let v = ["AN", "MI", "TP"],
        j = (e) => {
          if (null == e) return "";
          if (v.includes(e))
            return "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f30e.svg";
          let t = e
            .toUpperCase()
            .split("")
            .map((e) => (127397 + e.charCodeAt(0)).toString(16))
            .join("-");
          return "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/".concat(
            t,
            ".svg",
          );
        };
    },
    178821: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return j;
        },
      }),
        n(47120);
      var r = n(735250),
        a = n(470079),
        l = n(120356),
        i = n.n(l),
        o = n(442837),
        s = n(481060),
        c = n(38618),
        d = n(980361),
        u = n(219299);
      let h = 1e3 / 60,
        m = 1e3 / 45,
        x = 3 * h,
        f = Math.ceil(3e3 / h);
      function p(e) {
        let { socket: t, isAverageFrameTime: n } = e,
          [l, i] = (function (e) {
            let t = e.dispatcher.getIsSchedulerBackgrounded(),
              n = a.useRef(t);
            n.current = t;
            let r = a.useRef(t ? performance.now() : 0);
            return (
              a.useEffect(() => {
                e.dispatcher.getIsSchedulerBackgrounded() &&
                  (r.current = performance.now());
              }),
              [n, r]
            );
          })(t),
          {
            currentFPS: o,
            averageFrameTime: c,
            timeSinceLastDrop: u,
            onResetFrameData: m,
            droppedFramesRef: p,
            renderedFrameCount: b,
            bufferFramecountRef: g,
            frameCheckerEffect: v,
          } = (function (e, t) {
            let n = a.useRef(Array(f).fill(0)),
              r = a.useRef(performance.now()),
              l = a.useRef(0),
              i = a.useRef(0),
              o = a.useRef(0),
              s = a.useRef(0),
              c = a.useRef(0),
              d = a.useRef(0),
              u = a.useCallback(() => {
                n.current.fill(0),
                  (l.current = 0),
                  (i.current = 0),
                  (s.current = 0),
                  (c.current = 0),
                  (r.current = performance.now()),
                  (o.current = 0);
              }, []),
              m = a.useCallback(
                function () {
                  let a = performance.now(),
                    u = a - r.current;
                  if (((r.current = a), t.current)) return;
                  if (
                    ((i.current -= n.current[c.current]),
                    (n.current[c.current] = u),
                    (i.current += u),
                    s.current < f && (s.current += 1),
                    (c.current = (c.current + 1) % f),
                    u > x)
                  ) {
                    let t = 0 === s.current ? h : i.current / s.current,
                      n = Math.min(2 * h, t),
                      r = Math.floor(u / (e ? n : h));
                    r > 0 && (d.current = performance.now()), (l.current += r);
                  }
                  let m = 0 === s.current ? h : i.current / s.current;
                  o.current += u / m;
                },
                [e, t],
              ),
              p = 0 === s.current ? 0 : i.current / s.current;
            return {
              currentFPS: 0 === p ? 0 : (h / p) * 60,
              averageFrameTime: p,
              timeSinceLastDrop: (performance.now() - d.current) / 1e3,
              droppedFramesRef: l,
              bufferFramecountRef: s,
              renderedFrameCount: o,
              frameCheckerEffect: m,
              onResetFrameData: u,
            };
          })(n, l),
          [j, C, _] = (function (e) {
            let t = a.useRef(Array(f).fill(0)),
              n = a.useRef(performance.now()),
              r = a.useRef(0),
              l = a.useRef(0),
              i = a.useRef(0),
              o = e.dispatcher.getIsSchedulerBackgrounded(),
              s = a.useRef(o);
            s.current = o;
            let c = a.useRef(o ? performance.now() : 0);
            a.useEffect(() => {
              e.dispatcher.getIsSchedulerBackgrounded() &&
                (c.current = performance.now());
            });
            let d = a.useCallback(function () {
              let e = performance.now(),
                a = e - n.current;
              if (((n.current = e), !s.current))
                (r.current -= t.current[i.current]),
                  (t.current[i.current] = a),
                  (r.current += a),
                  l.current < f && (l.current += 1),
                  (i.current = (i.current + 1) % f);
            }, []);
            return [
              d,
              (e, t) => {
                var n;
                let a = null !== (n = l.current) && void 0 !== n ? n : 1,
                  i = r.current / a;
                return Math.abs(e * t - i * a) / t;
              },
              () => {
                (r.current = 0),
                  (l.current = 0),
                  t.current.fill(0),
                  (n.current = performance.now()),
                  (i.current = 0);
              },
            ];
          })(t),
          [S, T] = (function (e, t) {
            let n = a.useRef(null),
              r = a.useRef(null),
              l = a.useRef(null),
              i = a.useCallback(() => {
                null != n.current && clearInterval(n.current),
                  null != r.current && cancelIdleCallback(r.current),
                  null != l.current && cancelAnimationFrame(l.current);
              }, []),
              o = a.useCallback(() => {
                n.current = setTimeout(() => {
                  (r.current = requestIdleCallback(e)),
                    (l.current = requestAnimationFrame(() => {
                      t(), o();
                    }));
                }, 12);
              }, [e, t]);
            return [
              a.useCallback(() => {
                i(), o();
              }, [i, o]),
              i,
            ];
          })(j, v),
          N = performance.now() - i.current < 5e3,
          y = C(c, g.current);
        a.useEffect(
          () => (
            S(),
            () => {
              T();
            }
          ),
          [],
        );
        let k = a.useCallback(() => {
          m(), _(), S();
        }, [m, _, S]);
        return (0, r.jsxs)("div", {
          className: d.panelGroup,
          children: [
            (0, r.jsxs)(s.Text, {
              variant: "text-md/normal",
              color: "text-muted",
              children: [
                "FPS (~3sec):",
                " ",
                (0, r.jsx)(s.Text, {
                  tag: "span",
                  variant: "text-md/bold",
                  color:
                    o < 30
                      ? "text-danger"
                      : o < 45
                        ? "text-warning"
                        : "text-primary",
                  children: o.toFixed(2),
                }),
              ],
            }),
            (0, r.jsxs)(s.Text, {
              variant: "text-md/normal",
              color: "text-muted",
              children: [
                "Dropped Frames:",
                " ",
                (0, r.jsx)(s.Text, {
                  tag: "span",
                  variant: "text-md/bold",
                  color:
                    u < 2
                      ? "text-danger"
                      : u < 5
                        ? "text-warning"
                        : "text-primary",
                  children: p.current,
                }),
                (0, r.jsxs)(s.Text, {
                  tag: "span",
                  variant: "text-sm/normal",
                  color: "text-muted",
                  className: d.secondaryInfoText,
                  children: [
                    "(Dropped: ",
                    ((p.current / b.current) * 100).toFixed(4),
                    "%)",
                  ],
                }),
                N &&
                  (0, r.jsx)(s.Tooltip, {
                    position: "left",
                    text: "We don't track frames while the app is in the background, because requestAnimationFrame doesn't fire in the background",
                    children: (e) =>
                      (0, r.jsx)("span", {
                        ...e,
                        children: (0, r.jsx)(s.Text, {
                          tag: "span",
                          variant: "text-xs/bold",
                          color: "text-danger",
                          className: d.secondaryInfoText,
                          children: "(Backgrounded)",
                        }),
                      }),
                  }),
              ],
            }),
            (0, r.jsxs)(s.Text, {
              variant: "text-md/normal",
              color: "text-muted",
              children: [
                "Rendered Frames:",
                " ",
                (0, r.jsx)(s.Text, {
                  tag: "span",
                  variant: "text-md/semibold",
                  color: "text-secondary",
                  children: b.current.toFixed(0),
                }),
              ],
            }),
            (0, r.jsxs)(s.Text, {
              variant: "text-md/normal",
              color: "text-muted",
              children: [
                "Frame Times (~3sec):",
                " ",
                (0, r.jsxs)(s.Text, {
                  tag: "span",
                  variant: "text-md/semibold",
                  color: c > 1.1 * h ? "text-warning" : "text-secondary",
                  children: [c.toFixed(2), "ms"],
                }),
              ],
            }),
            (0, r.jsx)(s.Tooltip, {
              position: "left",
              text: "The average amount of 'lag' between us rendering a frame and being able to process background tasks. Values constantly above 1-2ms means our main thread is being burried by work and is taking all of its time in animation frames, most likely producing user interaciton blocking jank. (This doesn't work when the app is backgrounded though)",
              children: (e) =>
                (0, r.jsx)("div", {
                  ...e,
                  children: (0, r.jsxs)(s.Text, {
                    variant: "text-md/normal",
                    color: "text-muted",
                    children: [
                      "Idle Frame Delta (~3sec):",
                      " ",
                      (0, r.jsxs)(s.Text, {
                        tag: "span",
                        variant: "text-md/semibold",
                        color: y > 1 ? "text-danger" : "text-secondary",
                        children: [y.toFixed(2), "ms"],
                      }),
                      N &&
                        (0, r.jsx)(s.Tooltip, {
                          position: "left",
                          text: "We don't track frames while the app is in the background, because requestAnimationFrame doesn't fire in the background",
                          children: (e) =>
                            (0, r.jsx)("span", {
                              ...e,
                              children: (0, r.jsx)(s.Text, {
                                tag: "span",
                                variant: "text-xs/bold",
                                color: "text-danger",
                                className: d.secondaryInfoText,
                                children: "(Backgrounded)",
                              }),
                            }),
                        }),
                    ],
                  }),
                }),
            }),
            (0, r.jsx)("div", {
              className: d.bottomPanelButton,
              children: (0, r.jsx)(s.Button, {
                size: s.Button.Sizes.SMALL,
                onClick: k,
                children: "Reset Frame Data",
              }),
            }),
          ],
        });
      }
      function b(e) {
        let {
            socket: t,
            isAverageFrameTime: n,
            onToggleAverageFrameTime: l,
          } = e,
          [i, o] = a.useState(t.dispatcher.getIsRequestIdleCallbackEnabled()),
          c = a.useRef(null);
        a.useEffect(() => {
          let e = setInterval(() => {
            o(t.dispatcher.getIsRequestIdleCallbackEnabled());
          }, m);
          return (
            (c.current = e),
            () => {
              null != c.current && clearInterval(c.current);
            }
          );
        }, [t.dispatcher]);
        let u = (e) => {
          t.dispatcher.toggleRequestIdleCallback(e), o(e);
        };
        return (0, r.jsxs)("div", {
          className: d.panelGroup,
          children: [
            (0, r.jsx)(s.Tooltip, {
              position: "left",
              text: "Instead of using 60fps to calculate the number of dropped frames, we use the average framerate to more accurately determine the number of actual dropped frames. Turn this off when benchmarking to get better comparsion between two different runtimes, where higher FPS might result in a higher dropped frame count.",
              children: (e) =>
                (0, r.jsx)("div", {
                  ...e,
                  children: (0, r.jsx)(s.Checkbox, {
                    value: n,
                    onChange: () => l(!n),
                    size: 18,
                    type: s.Checkbox.Types.INVERTED,
                    shape: s.Checkbox.Shapes.BOX,
                    children: (0, r.jsx)(s.Text, {
                      tag: "span",
                      variant: "text-md/normal",
                      color: "text-muted",
                      children: "Use Average Frame Time",
                    }),
                  }),
                }),
            }),
            (0, r.jsx)(s.Checkbox, {
              value: i,
              onChange: () => u(!i),
              size: 18,
              type: s.Checkbox.Types.INVERTED,
              shape: s.Checkbox.Shapes.BOX,
              children: (0, r.jsx)(s.Text, {
                tag: "span",
                variant: "text-md/normal",
                color: "text-muted",
                children: "Enable New Dispatch Scheduler (requestIdleCallback)",
              }),
            }),
          ],
        });
      }
      function g(e) {
        let { socket: t } = e,
          n = t.dispatcher.getDispatchTimings(),
          [l, o] = a.useState(!1);
        return (0, r.jsxs)("div", {
          className: d.panelGroup,
          children: [
            (0, r.jsx)("div", {
              className: i()(l && d.topPanelToggle),
              children: (0, r.jsx)(s.Checkbox, {
                value: l,
                onChange: () => o((e) => !e),
                size: 18,
                type: s.Checkbox.Types.INVERTED,
                shape: s.Checkbox.Shapes.BOX,
                children: (0, r.jsx)(s.Text, {
                  tag: "span",
                  variant: "text-md/normal",
                  color: "text-muted",
                  children: "Show Dispatch Timings",
                }),
              }),
            }),
            l
              ? (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)(s.Text, {
                      variant: "text-md/medium",
                      color: "text-muted",
                      children: "Gateway Dispatch Timings:",
                    }),
                    (0, r.jsx)("table", {
                      cellPadding: 4,
                      children: Object.entries(n).map((e) => {
                        let [t, [n, a]] = e;
                        return (0, r.jsxs)(
                          "tr",
                          {
                            children: [
                              (0, r.jsx)("td", {
                                children: (0, r.jsx)(s.Text, {
                                  variant: "text-xs/normal",
                                  color: "text-normal",
                                  children: t,
                                }),
                              }),
                              (0, r.jsx)("td", {
                                children: (0, r.jsxs)(s.Text, {
                                  tag: "span",
                                  variant: "text-xs/bold",
                                  color: "text-normal",
                                  children: [n.toFixed(2), "ms"],
                                }),
                              }),
                              (0, r.jsx)("td", {
                                children: (0, r.jsxs)(s.Text, {
                                  tag: "span",
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: ["(count: ", a, ")"],
                                }),
                              }),
                            ],
                          },
                          t,
                        );
                      }),
                    }),
                  ],
                })
              : null,
          ],
        });
      }
      function v(e) {
        let { socket: t } = e,
          n = t.dispatcher.getSchedulerTelemetry(),
          [l, o] = a.useState(n.isTelemetryEnabled),
          [c, u] = a.useState(n.isTelemetryEnabled),
          h = (e) => {
            u(e), n.toggleTelemetry(e);
          };
        return (0, r.jsxs)("div", {
          className: d.panelGroup,
          children: [
            (0, r.jsx)(s.Checkbox, {
              value: c,
              onChange: () => h(!c),
              size: 18,
              type: s.Checkbox.Types.INVERTED,
              shape: s.Checkbox.Shapes.BOX,
              children: (0, r.jsx)(s.Text, {
                tag: "span",
                variant: "text-md/normal",
                color: "text-muted",
                children: "Enable Dispatch Telemetry",
              }),
            }),
            (0, r.jsx)("div", {
              className: i()(l && d.topPanelToggle),
              children: (0, r.jsx)(s.Checkbox, {
                value: l,
                onChange: () => {
                  o((e) => {
                    let t = !e;
                    return t && h(!0), t;
                  });
                },
                size: 18,
                type: s.Checkbox.Types.INVERTED,
                shape: s.Checkbox.Shapes.BOX,
                children: (0, r.jsx)(s.Text, {
                  tag: "span",
                  variant: "text-md/normal",
                  color: "text-muted",
                  children: "Show Dispatch Scheduler Telemetry",
                }),
              }),
            }),
            l
              ? (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)(s.Text, {
                      variant: "text-md/medium",
                      color: "text-muted",
                      children: "Dispatch Scheduler Telemetry:",
                    }),
                    (0, r.jsx)("table", {
                      cellPadding: 4,
                      children: Object.entries(n.generateTelemetry()).map(
                        (e) => {
                          let [t, n] = e;
                          return (0, r.jsxs)(
                            "tr",
                            {
                              children: [
                                (0, r.jsx)("td", {
                                  children: (0, r.jsx)(s.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-normal",
                                    children: t,
                                  }),
                                }),
                                (0, r.jsx)("td", {
                                  children: (0, r.jsx)(s.Text, {
                                    tag: "span",
                                    variant: "text-xs/bold",
                                    color: "text-normal",
                                    children: n,
                                  }),
                                }),
                              ],
                            },
                            t,
                          );
                        },
                      ),
                    }),
                    (0, r.jsx)("div", {
                      className: d.bottomPanelButton,
                      children: (0, r.jsx)(s.Button, {
                        size: s.Button.Sizes.SMALL,
                        onClick: () => {
                          n.reset();
                        },
                        children: "Reset Scheduler Telemetry",
                      }),
                    }),
                  ],
                })
              : null,
          ],
        });
      }
      function j() {
        let e = (0, o.e7)([c.Z], () => c.Z.getSocket()),
          [t, n] = a.useState(!1);
        return (
          !(function () {
            let [, e] = a.useState({});
            a.useEffect(() => {
              let t = setInterval(() => {
                e({});
              }, m);
              return () => {
                clearInterval(t);
              };
            }, []);
          })(),
          (0, r.jsx)("div", {
            className: i()(u.panel, d.panel),
            children: (0, r.jsxs)(s.ScrollerThin, {
              className: d.panel,
              children: [
                (0, r.jsx)(p, { socket: e, isAverageFrameTime: t }),
                (0, r.jsx)(b, {
                  socket: e,
                  isAverageFrameTime: t,
                  onToggleAverageFrameTime: n,
                }),
                (0, r.jsx)(g, { socket: e }),
                (0, r.jsx)(v, { socket: e }),
              ],
            }),
          })
        );
      }
    },
    248526: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return p;
        },
      }),
        n(47120);
      var r = n(735250),
        a = n(470079),
        l = n(848246),
        i = n(442837),
        o = n(481060),
        s = n(570140),
        c = n(746599),
        d = n(594174),
        u = n(246992),
        h = n(373839);
      let m = [
          { label: "No Override", value: !1 },
          { label: "Available: true", value: !0 },
        ],
        x = [
          { label: "No Override", value: !1 },
          { label: "Success", value: !0 },
        ],
        f = [
          { label: "1 day", value: 1 },
          { label: "7 days", value: 7 },
        ];
      function p() {
        let e = (0, i.e7)([d.default], () => d.default.getCurrentUser()),
          [t, n] = a.useState(!1),
          [p, b] = a.useState(!1),
          [g, v] = a.useState(1);
        return (0, r.jsxs)("div", {
          className: h.container,
          children: [
            (0, r.jsx)(o.FormSection, {
              title: "Override HQ Streaming: Available",
              className: h.formElement,
              tag: o.FormTitleTags.H3,
              children: (0, r.jsx)(o.SingleSelect, {
                options: m,
                value: t,
                onChange: (e) => {
                  n(e);
                },
                popoutLayerContext: u.O$,
              }),
            }),
            (0, r.jsx)(o.FormSection, {
              title: "Override HQ Streaming: Activate",
              className: h.formElement,
              tag: o.FormTitleTags.H3,
              children: (0, r.jsx)(o.SingleSelect, {
                options: x,
                value: p,
                onChange: (e) => {
                  b(e);
                },
                popoutLayerContext: u.O$,
              }),
            }),
            (0, r.jsx)(o.FormSection, {
              title: "Override Demo Duration",
              className: h.formElement,
              tag: o.FormTitleTags.H3,
              children: (0, r.jsx)(o.SingleSelect, {
                options: f,
                value: g,
                onChange: (e) => {
                  v(e);
                },
                popoutLayerContext: u.O$,
              }),
            }),
            (0, r.jsx)(o.Button, {
              onClick: () =>
                void (s.Z.dispatch({
                  type: "PREMIUM_PERKS_DEMO_OVERRIDE",
                  perkType: l.q.STREAM_HIGH_QUALITY,
                  user: e,
                  available: t,
                  activateSuccess: p,
                  demoDuration: g,
                }),
                (0, c.Vk)()),
              children: "Update",
            }),
          ],
        });
      }
    },
    958328: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return j;
        },
      });
      var r = n(735250);
      n(470079);
      var a = n(120356),
        l = n.n(a),
        i = n(149765),
        o = n(442837),
        s = n(481060),
        c = n(933557),
        d = n(592125),
        u = n(430824),
        h = n(496675),
        m = n(944486),
        x = n(914010),
        f = n(233608),
        p = n(71080),
        b = n(644715),
        g = n(219299);
      function v(e) {
        let { title: t, can: n } = e,
          a = n ? s.CheckmarkLargeIcon : s.XSmallIcon,
          i = (0, r.jsx)("div", {
            className: l()(b.iconOuter, n ? b.iconCheck : b.iconCross),
            children: (0, r.jsx)(a, { className: b.icon }),
          });
        return (0, r.jsxs)("div", {
          className: b.scope,
          children: [
            i,
            (0, r.jsx)("div", {
              className: b.scopeInner,
              children: (0, r.jsx)(s.Text, {
                variant: "text-md/normal",
                children: t,
              }),
            }),
          ],
        });
      }
      function j() {
        let e = (0, o.e7)([m.Z], () => m.Z.getChannelId()),
          t = (0, o.e7)([x.Z], () => x.Z.getGuildId()),
          n = (0, o.e7)([d.Z], () => d.Z.getChannel(e)),
          a = (0, o.e7)([u.Z], () => u.Z.getGuild(t)),
          j = (0, o.e7)([h.Z], () => h.Z.computePermissions(n)),
          C = (0, o.e7)([h.Z], () => h.Z.computePermissions(a)),
          _ = (0, c.ZP)(n, !0),
          S = null != n ? (0, p.IG)(n, !1, !0) : null,
          T = null != a ? f.Z.getGuildPermissionSpecMap(a) : null,
          N = Object.values(null != S ? S : {}).map((e) => {
            let { title: t, flag: n } = e,
              a = i.e$(j, n);
            return (0, r.jsx)(v, { title: t, can: a }, t);
          }),
          y = Object.values(null != T ? T : {}).map((e) => {
            let { title: t, flag: n } = e,
              a = i.e$(C, n);
            return (0, r.jsx)(v, { title: t, can: a }, t);
          });
        return (0, r.jsx)("div", {
          className: l()(g.panel, b.panel),
          children: (0, r.jsxs)("div", {
            className: b.panelInner,
            children: [
              (0, r.jsxs)("section", {
                className: b.section,
                children: [
                  (0, r.jsx)(s.Heading, {
                    variant: "heading-md/semibold",
                    children:
                      null != _
                        ? "Permissions in ".concat(_)
                        : "No channel selected",
                  }),
                  N,
                ],
              }),
              (0, r.jsxs)("section", {
                className: b.section,
                children: [
                  (0, r.jsx)(s.Heading, {
                    variant: "heading-md/semibold",
                    children:
                      null != a
                        ? "Permissions in ".concat(a.name)
                        : "No guild selected",
                  }),
                  y,
                ],
              }),
            ],
          }),
        });
      }
    },
    257785: function (e, t, n) {
      n.d(t, {
        E: function () {
          return s;
        },
        Z9: function () {
          return c;
        },
        wl: function () {
          return d;
        },
      });
      var r = n(735250);
      n(470079);
      var a = n(120356),
        l = n.n(a),
        i = n(481060),
        o = n(219299);
      function s(e) {
        let { className: t, children: n } = e;
        return (0, r.jsx)("dl", {
          className: l()(o.properties, t),
          children: n,
        });
      }
      function c(e) {
        let { name: t, children: n } = e;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)("dt", { className: o.propertyName, children: t }),
            (0, r.jsx)("dd", { children: n }),
          ],
        });
      }
      function d(e) {
        let { value: t } = e;
        return (0, r.jsx)(i.Checkbox, {
          size: 16,
          value: t,
          shape: i.Checkbox.Shapes.SMALL_BOX,
          displayOnly: !0,
        });
      }
    },
    514866: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return x;
        },
      });
      var r = n(735250);
      n(470079);
      var a = n(120356),
        l = n.n(a),
        i = n(481060),
        o = n(110478),
        s = n(423932),
        c = n(601948),
        d = n(594174),
        u = n(820756),
        h = n(113207);
      let m = () => {
        Promise.all([n.e("52030"), n.e("47238")])
          .then(n.bind(n, 24031))
          .then((e) => {
            let { openMFAModal: t } = e;
            t(
              {
                ticket: "ticket",
                methods: [
                  { type: "webauthn", challenge: "{}" },
                  { type: "totp", backup_codes_allowed: !0 },
                  { type: "sms" },
                  { type: "password" },
                ],
              },
              console.log,
              console.error,
            );
          });
      };
      function x() {
        let e = d.default.getCurrentUser(),
          t = null == e ? void 0 : e.isStaff();
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)("div", {
              className: l()(u.buttonsContainer, h.marginBottom20),
              children: (0, r.jsx)(c.S, { isDevTools: !0 }),
            }),
            (0, r.jsx)("div", {
              className: l()(u.buttonsContainer, h.marginBottom20),
              children: (0, r.jsx)(i.Button, {
                onClick: m,
                children: "Launch MFA",
              }),
            }),
            (0, r.jsx)("div", {
              className: l()(u.buttonsContainer, h.marginBottom20),
              children: (0, r.jsx)(i.Button, {
                onClick: () => (0, s.Z)(),
                children: "Launch Vibing Wumpus",
              }),
            }),
            t &&
              (0, r.jsx)("div", {
                className: l()(u.buttonsContainer, h.marginBottom20),
                children: (0, r.jsx)(i.Button, {
                  onClick: () => (0, o.N)(),
                  children: "Launch Captcha Test Tool",
                }),
              }),
          ],
        });
      }
    },
    678639: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return C;
        },
      }),
        n(47120);
      var r = n(735250),
        a = n(470079),
        l = n(120356),
        i = n.n(l),
        o = n(442837),
        s = n(481060),
        c = n(665149),
        d = n(428530),
        u = n(484036),
        h = n(681619),
        m = n(621060),
        x = n(219299),
        f = n(152622);
      function p(e, t) {
        return e.store.getName().localeCompare(t.store.getName());
      }
      function b(e) {
        let { store: t, dataGetter: n } = e,
          [l, i] = a.useState(n(t));
        return (
          a.useEffect(() => {
            let e = () => i(n(t));
            return (
              e(),
              t.addChangeListener(e),
              () => {
                t.removeChangeListener(e);
              }
            );
          }, [t, n]),
          (0, r.jsx)(s.ScrollerThin, {
            className: f.inspectorContainer,
            children: (0, r.jsx)(d.Z, { data: l }),
          })
        );
      }
      let g = [
          {
            key: "name",
            cellClassName: f.__invalid_eventColumn,
            render(e) {
              let { store: t } = e;
              return t.getName();
            },
          },
        ],
        v = [
          {
            id: "local",
            name: "Local Variables",
            render(e) {
              let { store: t } = e;
              return null == t.__getLocalVars
                ? (0, r.jsxs)("div", {
                    className: f.inspectorContainer,
                    children: [
                      "Store is missing ",
                      (0, r.jsx)("code", { children: "__getLocalVars" }),
                      " method.",
                    ],
                  })
                : (0, r.jsx)(b, {
                    store: t,
                    dataGetter: (e) => e.__getLocalVars(),
                  });
            },
          },
          {
            id: "instance",
            name: "Store Instance",
            render(e) {
              let { store: t } = e;
              return (0, r.jsx)(b, { store: t, dataGetter: (e) => e });
            },
          },
        ];
      function j(e) {
        let { store: t, initialHeight: n } = e,
          { TabBar: a, renderSelectedTab: l } = (0, m.Z)({ tabs: v }, []);
        return (0, r.jsxs)(u.Z, {
          className: f.subPanel,
          minHeight: 100,
          initialHeight: n,
          children: [
            (0, r.jsx)(a, {}),
            (0, r.jsxs)(c.ZP, {
              className: i()(x.headerBar, f.subPanelHeaderBar),
              children: [
                (0, r.jsx)(c.ZP.Icon, {
                  icon: s.TagIcon,
                  tooltip: t.getName(),
                }),
                (0, r.jsx)(c.ZP.Title, { children: t.getName() }),
              ],
            }),
            l({ store: t }),
          ],
        });
      }
      function C() {
        let e = a.useRef(null),
          [t, n] = a.useState(""),
          l = o.yh.getAll(),
          c = a
            .useMemo(
              () => l.map((e) => ({ key: e._dispatchToken, store: e })).sort(p),
              [l],
            )
            .filter((e) =>
              (function (e, t) {
                let { store: n } = e;
                return n.getName().toLowerCase().includes(t.toLowerCase());
              })(e, t),
            ),
          [d, u] = a.useState(),
          m = l.find((e) => e._dispatchToken === d);
        return (0, r.jsxs)("div", {
          ref: e,
          className: i()(x.panel, f.panel),
          children: [
            (0, r.jsx)("div", {
              className: f.toolbar,
              children: (0, r.jsx)(s.SearchBar, {
                className: f.searchBar,
                size: s.SearchBar.Sizes.SMALL,
                query: t,
                onChange: n,
                onClear: () => n(""),
                placeholder: "Search stores",
                "aria-label": "Search stores",
              }),
            }),
            (0, r.jsx)(h.Z, {
              columns: g,
              data: c,
              selectedRowKey: d,
              onClickRow: (e) => u(e.key),
            }),
            null != m &&
              (0, r.jsx)(j, {
                store: m,
                initialHeight:
                  null != e.current ? e.current.clientHeight / 2 : 300,
              }),
          ],
        });
      }
    },
    484036: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return d;
        },
      }),
        n(47120);
      var r = n(735250),
        a = n(470079),
        l = n(120356),
        i = n.n(l),
        o = n(347469),
        s = n(354211);
      function c(e) {
        let { resizableNode: t, minHeight: n, onResize: a } = e,
          l = (0, o.Z)({
            minDimension: n,
            resizableDomNodeRef: t,
            onElementResize: a,
            orientation: o.y.VERTICAL_TOP,
            usePointerEvents: !0,
          });
        return (0, r.jsx)("div", {
          onPointerDown: l,
          className: s.resizeHandle,
        });
      }
      function d(e) {
        let { children: t, className: n, initialHeight: l, minHeight: o } = e,
          d = a.useRef(null),
          [u, h] = a.useState(l);
        return (0, r.jsxs)("div", {
          ref: d,
          className: s.container,
          style: { minHeight: o, height: u },
          children: [
            (0, r.jsx)(c, { resizableNode: d, minHeight: o, onResize: h }),
            (0, r.jsx)("div", {
              className: i()(s.subPanelContent, n),
              children: t,
            }),
          ],
        });
      }
    },
    351930: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return C;
        },
      }),
        n(47120);
      var r = n(735250),
        a = n(470079),
        l = n(120356),
        i = n.n(l),
        o = n(399606),
        s = n(544891),
        c = n(481060),
        d = n(355467),
        u = n(78839),
        h = n(709054),
        m = n(246992),
        x = n(981631),
        f = n(219299),
        p = n(423705);
      let b = [
          { label: "Nitro Monthly", value: "511651880837840896" },
          { label: "Nitro Yearly", value: "511651885459963904" },
          { label: "Nitro Classic Monthly", value: "511651871736201216" },
          { label: "Nitro Classic Yearly", value: "511651876987469824" },
          { label: "Basic Monthly", value: "978380692553465866" },
          { label: "Basic Yearly", value: "1024422698568122368" },
          { label: "Reverse Trial 1-week", value: "1267968635301789696" },
          { label: "Reverse Trial 2-week", value: "1267969164312576000" },
        ],
        g = {
          [x.O0b.UNPAID]: "Unpaid",
          [x.O0b.ACTIVE]: "Active",
          [x.O0b.PAST_DUE]: "Past Due",
          [x.O0b.CANCELED]: "Canceled",
          [x.O0b.ENDED]: "Ended",
          [x.O0b.ACCOUNT_HOLD]: "Account Hold",
          [x.O0b.BILLING_RETRY]: "Billing Retry",
          [x.O0b.PAUSED]: "Paused",
          [x.O0b.PAUSE_PENDING]: "Pause Pending",
        },
        v = [
          { label: "Unpaid", value: x.O0b.UNPAID },
          { label: "Active", value: x.O0b.ACTIVE },
          { label: "Past Due", value: x.O0b.PAST_DUE },
          { label: "Canceled", value: x.O0b.CANCELED },
          { label: "Ended", value: x.O0b.ENDED },
          { label: "Account Hold", value: x.O0b.ACCOUNT_HOLD },
          { label: "Billing Retry", value: x.O0b.BILLING_RETRY },
          { label: "Paused", value: x.O0b.PAUSED },
          { label: "Pause Pending", value: x.O0b.PAUSE_PENDING },
        ],
        j = {
          "511651880837840896": "Nitro Monthly",
          "511651885459963904": "Nitro Yearly",
          "511651871736201216": "Nitro Classic Monthly",
          "511651876987469824": "Nitro Classic Yearly",
          "978380692553465866": "Basic Monthly",
          "1024422698568122368": "Basic Yearly",
        };
      function C() {
        let [e, t] = a.useState("511651880837840896"),
          n = (0, o.e7)([u.ZP], () => u.ZP.getPremiumSubscription()),
          l = async () => {
            await s.tn.post({
              url: "/debug/subscription",
              body: { plan_id: e },
            }),
              await (0, d.jg)();
          },
          h = async () => {
            await s.tn.del("/debug/subscription"), await (0, d.jg)();
          };
        return (0, r.jsx)(c.ScrollerThin, {
          className: i()(f.panel),
          children: (0, r.jsxs)("div", {
            className: p.panelInner,
            children: [
              (0, r.jsx)(c.Text, {
                style: { marginBottom: "16px" },
                variant: "text-lg/bold",
                children: "Manage Subscription",
              }),
              (0, r.jsxs)("section", {
                className: p.buttons,
                children: [
                  null == n &&
                    (0, r.jsxs)(r.Fragment, {
                      children: [
                        (0, r.jsx)(c.Text, {
                          variant: "text-md/normal",
                          children: " Subscription Type",
                        }),
                        (0, r.jsx)(c.Select, {
                          serialize: (e) => e,
                          isSelected: (t) => t === e,
                          options: b,
                          select: t,
                          popoutLayerContext: m.O$,
                        }),
                        (0, r.jsx)(c.Button, {
                          size: c.Button.Sizes.SMALL,
                          onClick: l,
                          children: "Create Subscription",
                        }),
                      ],
                    }),
                  (0, r.jsx)(c.Button, {
                    size: c.Button.Sizes.SMALL,
                    onClick: h,
                    children: "Delete Subscription",
                  }),
                ],
              }),
              null != n && (0, r.jsx)(_, { subscription: n }),
            ],
          }),
        });
      }
      function _(e) {
        var t;
        let { subscription: n } = e,
          a = (e) =>
            (null == e && (e = n.status), e in g)
              ? g[e]
              : "Unknown status ".concat(e),
          l = async (e) => {
            await s.tn.patch({
              url: "/debug/subscription",
              body: { subscription_status: e },
            }),
              await (0, d.jg)();
          },
          o = async (e) => {
            let t = new Date(e),
              r = h.default.fromTimestamp(t.getTime());
            await s.tn.patch({
              url: "/debug/subscription",
              body: {
                subscription_status: n.status,
                premium_streak_started_at: r,
              },
            }),
              await (0, d.jg)();
          },
          u =
            n.planIdFromItems in
            { "978380692553465866": !0, "1024422698568122368": !0 };
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(c.Text, {
              style: { marginTop: "15px" },
              variant: "text-md/normal",
              children: "Existing Subscription",
            }),
            (0, r.jsxs)("div", {
              className: i()(
                p.card,
                u ? p.gradientWrapperTier0 : p.gradientWrapperTier2,
              ),
              children: [
                (0, r.jsxs)(c.Text, {
                  variant: "text-md/normal",
                  children: [
                    " Subscription Type: ",
                    (() => {
                      let e = n.planIdFromItems;
                      return null == e
                        ? "No plan id"
                        : e in j
                          ? j[e]
                          : "Unknown plan id ".concat(e);
                    })(),
                    " ",
                  ],
                }),
                (0, r.jsxs)(c.Text, {
                  variant: "text-md/normal",
                  children: [" Subscription ID ", n.id, " "],
                }),
                (0, r.jsxs)(c.Text, {
                  style: { marginBottom: "15px" },
                  variant: "text-md/normal",
                  children: ["Subscription Status: ", a()],
                }),
                (0, r.jsx)(c.Select, {
                  serialize: (e) => a(e),
                  isSelected: (e) => e === n.status,
                  options: v,
                  select: l,
                  popoutLayerContext: m.O$,
                }),
                (0, r.jsx)(c.FormSection, {
                  title: "Override Premium Streak Start Date",
                  tag: c.FormTitleTags.H3,
                  className: f.premiumStreakOverride,
                  children: (0, r.jsx)("input", {
                    type: "date",
                    value:
                      null === (t = n.premiumSince) || void 0 === t
                        ? void 0
                        : t.toISOString().substring(0, 10),
                    onChange: (e) => o(e.target.value),
                  }),
                }),
              ],
            }),
          ],
        });
      }
    },
    681619: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var r = n(735250),
        a = n(470079),
        l = n(120356),
        i = n.n(l),
        o = n(481060),
        s = n(219299);
      function c(e) {
        let {
            columns: t,
            data: n,
            className: l,
            rowClassName: c,
            onClickRow: d,
            selectedRowKey: u,
            rowHeight: h = 40,
          } = e,
          m = a.useMemo(
            () =>
              t.map((e) => ({
                renderHeader: () =>
                  (0, r.jsx)(o.Text, {
                    variant: "text-sm/semibold",
                    children: e.key,
                  }),
                ...e,
              })),
            [t],
          ),
          x = [n.length];
        return (0, r.jsx)("div", {
          className: s.tableContainer,
          children: (0, r.jsx)(o.ListThin, {
            className: i()(l),
            innerClassName: s.table,
            sections: x,
            sectionHeight: 40,
            renderSection: (e) => {
              let { section: t } = e,
                a = i()(s.tableHeader);
              return (0, r.jsx)(
                "div",
                {
                  className: a,
                  children: m.map((e) => {
                    var a, l;
                    let o = i()(e.cellClassName),
                      s = {
                        width: "calc("
                          .concat(
                            null !== (l = e.cellWidth) && void 0 !== l
                              ? l
                              : "1fr",
                            " - ",
                          )
                          .concat(16, "px)"),
                      };
                    return (0, r.jsx)(
                      "div",
                      {
                        className: o,
                        style: s,
                        children:
                          null === (a = e.renderHeader) || void 0 === a
                            ? void 0
                            : a.call(e, e, n),
                      },
                      "dev-tools-th-".concat(t, "-").concat(e.key),
                    );
                  }),
                },
                "dev-tools-header-".concat(t),
              );
            },
            rowHeight: h,
            renderRow: (e) => {
              let { rowIndex: t } = e,
                a = n[t],
                l = a.key,
                x = i()(s.tableRow, {
                  [s.selectedTableRow]: l === u,
                  rowClassName: c,
                });
              return (0, r.jsx)(
                o.Clickable,
                {
                  className: x,
                  onClick: () => (null == d ? void 0 : d(a)),
                  children: m.map((e) => {
                    var n, l;
                    let o = i()(e.cellClassName),
                      s = {
                        width: "calc("
                          .concat(
                            null !== (l = e.cellWidth) && void 0 !== l
                              ? l
                              : "1fr",
                            " - ",
                          )
                          .concat(16, "px)"),
                        height: "calc(".concat(h, "px - ").concat(16, "px)"),
                      };
                    return (0, r.jsx)(
                      "div",
                      {
                        className: o,
                        style: s,
                        children:
                          null === (n = e.render) || void 0 === n
                            ? void 0
                            : n.call(e, a, void 0, t),
                      },
                      "dev-tools-td-".concat(t, "-").concat(e.key),
                    );
                  }),
                },
                "dev-tools-tr-".concat(t),
              );
            },
          }),
        });
      }
    },
    771751: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return w;
        },
      }),
        n(47120);
      var r = n(735250),
        a = n(470079),
        l = n(120356),
        i = n.n(l),
        o = n(544891),
        s = n(704215),
        c = n(481060),
        d = n(937579),
        u = n(675478),
        h = n(295226),
        m = n(572004),
        x = n(74538),
        f = n(246992),
        p = n(981631),
        b = n(474936),
        g = n(219299),
        v = n(423705);
      let j = async () => {
          try {
            let { body: e } = await o.tn.get({ url: p.ANM.USER_OFFER_IDS });
            return e;
          } catch (e) {
            return [];
          }
        },
        C = async (e, t) => {
          try {
            await o.tn.post({ url: p.ANM.CREATE_USER_OFFER(e, t) });
          } catch {
          } finally {
            await (0, d.T)();
          }
        },
        _ = async (e, t) => {
          try {
            await o.tn.del({ url: p.ANM.DELETE_USER_OFFER(e, t) });
          } catch {
          } finally {
            await (0, d.T)();
          }
        },
        S = async (e, t) => {
          try {
            await o.tn.post({ url: p.ANM.UNACK_USER_OFFER(e, t) });
          } catch {
          } finally {
            await (0, d.T)();
          }
        },
        T = async () => {
          try {
            let { body: e } = await o.tn.get({ url: p.ANM.USER_OFFERS });
            return e;
          } catch (e) {
            return { trial: [], discount: [] };
          }
        },
        N = async () => {
          try {
            await o.tn.del({ url: p.ANM.USER_OFFERS });
          } catch {
          } finally {
            await h.Z.forceReset(), await (0, d.T)();
          }
        };
      function y(e) {
        var t, n, l, o;
        let { offer: s, offerOptions: u, forceRefetch: h } = e,
          [f, p] = a.useState(!1),
          [g, j] = a.useState(!1),
          [C, T] = a.useState(!1),
          [N, y] = a.useState(!1);
        a.useEffect(() => {
          C && y(!0);
          let e = setTimeout(() => {
            y(!1);
          }, 500);
          return () => {
            clearTimeout(e);
          };
        }, [C]);
        let {
            id: k,
            expires_at: w,
            redeemed_at: I,
            trial_id: E,
            subscription_trial: Z,
          } = s,
          R =
            null !==
              (n =
                null ===
                  (t = u.find((e) => {
                    let { value: t } = e;
                    return t === E;
                  })) || void 0 === t
                  ? void 0
                  : t.label) && void 0 !== n
              ? n
              : "Unknown",
          O = null != w,
          B = null != w && new Date(w).getTime() < Date.now(),
          P = (null == Z ? void 0 : Z.sku_id) === b.Si.TIER_0,
          A = async () => {
            T(!0), O ? await S(k, "trial") : await (0, d.a)(s), h(), T(!1);
          };
        a.useEffect(() => {
          if (f) {
            let e = setTimeout(() => {
              p(!1);
            }, 3e3);
            return () => {
              clearTimeout(e);
            };
          }
          if (g) {
            let e = setTimeout(() => {
              j(!1);
            }, 3e3);
            return () => {
              clearTimeout(e);
            };
          }
        }, [f, g]);
        let L = "Active";
        return (
          O && (L = "Acknowledged"),
          B && (L = "Expired"),
          (0, r.jsxs)("div", {
            className: i()(
              v.card,
              P ? v.gradientWrapperTier0 : v.gradientWrapperTier2,
            ),
            children: [
              (0, r.jsxs)("div", {
                className: i()(v.row, v.nameRow),
                children: [
                  (0, r.jsx)(c.Heading, {
                    variant: "heading-lg/semibold",
                    color: "always-white",
                    children: R,
                  }),
                  (0, r.jsx)(c.Clickable, {
                    onClick: async () => {
                      T(!0), await _(k, "trial"), h(), T(!1);
                    },
                    children: (0, r.jsx)(c.TrashIcon, {
                      size: "md",
                      color: "currentColor",
                      className: i()(v.icon, v.trashIcon),
                    }),
                  }),
                ],
              }),
              (0, r.jsxs)(c.Clickable, {
                className: i()(v.row, v.idRow),
                onClick: () => {
                  (0, m.JG)(k), p(!0);
                },
                children: [
                  (0, r.jsxs)(c.Text, {
                    variant: "eyebrow",
                    color: "always-white",
                    children: ["Offer: ", k],
                  }),
                  f
                    ? (0, r.jsx)(c.CheckmarkLargeIcon, {
                        size: "md",
                        color: "currentColor",
                        className: i()(v.icon, v.noMargin),
                      })
                    : (0, r.jsx)(c.CopyIcon, {
                        size: "xs",
                        color: "currentColor",
                        className: v.icon,
                      }),
                ],
              }),
              (0, r.jsxs)(c.Clickable, {
                className: i()(v.row, v.idRow),
                onClick: () => {
                  (0, m.JG)(E), j(!0);
                },
                children: [
                  (0, r.jsxs)(c.Text, {
                    variant: "eyebrow",
                    color: "always-white",
                    children: ["Trial: ", E],
                  }),
                  g
                    ? (0, r.jsx)(c.CheckmarkLargeIcon, {
                        size: "md",
                        color: "currentColor",
                        className: i()(v.icon, v.noMargin),
                      })
                    : (0, r.jsx)(c.CopyIcon, {
                        size: "xs",
                        color: "currentColor",
                        className: v.icon,
                      }),
                ],
              }),
              (0, r.jsx)("div", {
                children: (0, r.jsxs)(c.Text, {
                  variant: "eyebrow",
                  color: "always-white",
                  children: [
                    "Trial Length:",
                    " ",
                    (0, x.if)({
                      intervalType:
                        null !== (l = null == Z ? void 0 : Z.interval) &&
                        void 0 !== l
                          ? l
                          : b.rV.MONTH,
                      intervalCount:
                        null !== (o = null == Z ? void 0 : Z.interval_count) &&
                        void 0 !== o
                          ? o
                          : 1,
                      capitalize: !1,
                    }),
                  ],
                }),
              }),
              (0, r.jsxs)("div", {
                className: v.badgeContainer,
                children: [
                  (0, r.jsx)(c.Clickable, {
                    onClick: A,
                    className: i()(v.badge, v.clickable, {
                      [v.acked]: O,
                      [v.expired]: B,
                    }),
                    children: (0, r.jsx)(c.Text, {
                      variant: "eyebrow",
                      color: "Acknowledged" === L ? void 0 : "always-white",
                      children: L,
                    }),
                  }),
                  null != I &&
                    (0, r.jsx)("div", {
                      className: i()(
                        v.badge,
                        v.__invalid_badgeBottom,
                        v.redeemed,
                      ),
                      children: (0, r.jsx)(c.Text, {
                        variant: "eyebrow",
                        color: "always-white",
                        children: "Redeemed",
                      }),
                    }),
                ],
              }),
              (0, r.jsx)("div", {
                className: i()(v.loadingContainer, { [v.isLoading]: C || N }),
                children: (0, r.jsx)(c.Spinner, {}),
              }),
            ],
          })
        );
      }
      function k(e) {
        var t, n;
        let { offer: l, offerOptions: o, forceRefetch: s } = e,
          [u, h] = a.useState(!1),
          [x, f] = a.useState(!1),
          [p, b] = a.useState(!1),
          [g, j] = a.useState(!1);
        a.useEffect(() => {
          p && j(!0);
          let e = setTimeout(() => {
            j(!1);
          }, 500);
          return () => {
            clearTimeout(e);
          };
        }, [p]);
        let {
            id: C,
            expires_at: T,
            applied_at: N,
            discount_id: y,
            discount: k,
          } = l,
          w =
            null !==
              (n =
                null ===
                  (t = o.find((e) => {
                    let { value: t } = e;
                    return t === y;
                  })) || void 0 === t
                  ? void 0
                  : t.label) && void 0 !== n
              ? n
              : "Unknown",
          I = null != T,
          E = null != T && new Date(T).getTime() < Date.now(),
          Z = async () => {
            b(!0),
              I ? await S(C, "discount") : await (0, d.a)(void 0, l),
              s(),
              b(!1);
          };
        a.useEffect(() => {
          if (u) {
            let e = setTimeout(() => {
              h(!1);
            }, 3e3);
            return () => {
              clearTimeout(e);
            };
          }
          if (x) {
            let e = setTimeout(() => {
              f(!1);
            }, 3e3);
            return () => {
              clearTimeout(e);
            };
          }
        }, [u, x]);
        let R = "Active";
        return (
          E && (R = "Expired"),
          I && (R = "Acknowledged"),
          (0, r.jsxs)("div", {
            className: i()(v.card, v.discount),
            children: [
              (0, r.jsxs)("div", {
                className: i()(v.row, v.nameRow),
                children: [
                  (0, r.jsx)(c.Heading, {
                    variant: "heading-lg/semibold",
                    color: "text-normal",
                    children: w,
                  }),
                  (0, r.jsx)(c.Clickable, {
                    onClick: async () => {
                      b(!0), await _(C, "discount"), s(), b(!1);
                    },
                    children: (0, r.jsx)(c.TrashIcon, {
                      size: "md",
                      color: "currentColor",
                      className: i()(v.icon, v.trashIcon),
                    }),
                  }),
                ],
              }),
              (0, r.jsxs)(c.Clickable, {
                className: i()(v.row, v.idRow),
                onClick: () => {
                  (0, m.JG)(C), h(!0);
                },
                children: [
                  (0, r.jsxs)(c.Text, {
                    variant: "eyebrow",
                    color: "text-normal",
                    children: ["Offer: ", C],
                  }),
                  u
                    ? (0, r.jsx)(c.CheckmarkLargeIcon, {
                        size: "md",
                        color: "currentColor",
                        className: i()(v.icon, v.noMargin),
                      })
                    : (0, r.jsx)(c.CopyIcon, {
                        size: "xs",
                        color: "currentColor",
                        className: v.icon,
                      }),
                ],
              }),
              (0, r.jsxs)(c.Clickable, {
                className: i()(v.row, v.idRow),
                onClick: () => {
                  (0, m.JG)(y), f(!0);
                },
                children: [
                  (0, r.jsxs)(c.Text, {
                    variant: "eyebrow",
                    color: "text-normal",
                    children: ["Discount: ", y],
                  }),
                  x
                    ? (0, r.jsx)(c.CheckmarkLargeIcon, {
                        size: "md",
                        color: "currentColor",
                        className: i()(v.icon, v.noMargin),
                      })
                    : (0, r.jsx)(c.CopyIcon, {
                        size: "xs",
                        color: "currentColor",
                        className: v.icon,
                      }),
                ],
              }),
              (0, r.jsx)("div", {
                children: (0, r.jsxs)(c.Text, {
                  variant: "eyebrow",
                  color: "text-normal",
                  children: [k.amount, "% off"],
                }),
              }),
              (0, r.jsxs)("div", {
                className: v.badgeContainer,
                children: [
                  (0, r.jsx)(c.Clickable, {
                    onClick: Z,
                    className: i()(v.badge, v.clickable, {
                      [v.acked]: I,
                      [v.expired]: E,
                    }),
                    children: (0, r.jsx)(c.Text, {
                      variant: "eyebrow",
                      color: "Acknowledged" === R ? void 0 : "always-white",
                      children: R,
                    }),
                  }),
                  null != N &&
                    (0, r.jsx)("div", {
                      className: i()(
                        v.badge,
                        v.__invalid_badgeBottom,
                        v.redeemed,
                      ),
                      children: (0, r.jsx)(c.Text, {
                        variant: "eyebrow",
                        color: "always-white",
                        children: "Applied",
                      }),
                    }),
                ],
              }),
              (0, r.jsx)("div", {
                className: i()(v.loadingContainer, { [v.isLoading]: p || g }),
                children: (0, r.jsx)(c.Spinner, {}),
              }),
            ],
          })
        );
      }
      function w() {
        let [e, t] = a.useState([]),
          [n, l] = a.useState([]),
          [o, m] = a.useState(),
          [x, p] = a.useState(),
          [b, _] = a.useState([]),
          [S, w] = a.useState([]),
          [I, E] = a.useState(!0);
        a.useEffect(() => {
          (0 === e.length || 0 === n.length || I) &&
            j().then((e) => {
              let n = Object.keys(e.trial).map((t) => ({
                  label: t,
                  value: e.trial[t],
                })),
                r = Object.keys(e.discount).map((t) => ({
                  label: t,
                  value: e.discount[t],
                }));
              t(n),
                l(r),
                null == o && m(n[0].value),
                null == x && p(r[0].value);
            });
        }, [e, n, o, x, I]),
          a.useEffect(() => {
            I &&
              (E(!1),
              h.Z.forceReset(),
              (0, d.T)(),
              T().then((e) => {
                _(e.trial.sort((e, t) => e.id.localeCompare(t.id))),
                  w(e.discount.sort((e, t) => e.id.localeCompare(t.id)));
              }));
          }, [I]);
        let Z = async () => {
            null != o && (await C(o, "trial"), E(!0));
          },
          R = async () => {
            null != x && (await C(x, "discount"), E(!0));
          },
          O = async () => {
            await N(), E(!0);
          };
        return (0, r.jsx)(c.ScrollerThin, {
          className: i()(g.panel),
          children: (0, r.jsxs)("div", {
            className: v.panelInner,
            children: [
              (0, r.jsxs)("section", {
                className: v.section,
                children: [
                  (0, r.jsx)(c.Heading, {
                    variant: "heading-md/semibold",
                    children: "Utils",
                  }),
                  (0, r.jsxs)("div", {
                    className: v.buttons,
                    children: [
                      (0, r.jsx)(c.Button, {
                        size: c.Button.Sizes.SMALL,
                        onClick: O,
                        children: "Clear all User Offers",
                      }),
                      (0, r.jsx)(c.Button, {
                        size: c.Button.Sizes.SMALL,
                        onClick: () =>
                          (0, u.w9)(
                            s.z.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE,
                          ),
                        children: "Clear Mobile Trials DismissibleContent",
                      }),
                      (0, r.jsx)(c.Button, {
                        size: c.Button.Sizes.SMALL,
                        onClick: () => E(!0),
                        children: "Refresh DevTools",
                      }),
                    ],
                  }),
                ],
              }),
              (0, r.jsxs)("section", {
                className: v.section,
                children: [
                  (0, r.jsx)(c.Heading, {
                    variant: "heading-md/semibold",
                    children: "Create a Trial Offer",
                  }),
                  (0, r.jsxs)("div", {
                    className: v.inputRow,
                    children: [
                      (0, r.jsx)(c.Select, {
                        className: v.input,
                        options: e,
                        isSelected: (e) => o === e,
                        placeholder: "Trial Type",
                        serialize: (e) => String(e),
                        select: (e) => m(e),
                        popoutLayerContext: f.O$,
                      }),
                      (0, r.jsx)(c.Button, { onClick: Z, children: "Create" }),
                    ],
                  }),
                ],
              }),
              (0, r.jsxs)("section", {
                className: v.section,
                children: [
                  (0, r.jsx)(c.Heading, {
                    variant: "heading-md/semibold",
                    children: "Create a Discount Offer",
                  }),
                  (0, r.jsxs)("div", {
                    className: v.inputRow,
                    children: [
                      (0, r.jsx)(c.Select, {
                        className: v.input,
                        options: n,
                        isSelected: (e) => x === e,
                        placeholder: "Discount Type",
                        serialize: (e) => String(e),
                        select: (e) => p(e),
                        popoutLayerContext: f.O$,
                      }),
                      (0, r.jsx)(c.Button, { onClick: R, children: "Create" }),
                    ],
                  }),
                ],
              }),
              b.length > 0 &&
                (0, r.jsxs)("section", {
                  className: v.section,
                  children: [
                    (0, r.jsx)(c.Heading, {
                      variant: "heading-md/semibold",
                      children: "Existing Trial Offers",
                    }),
                    b.map((t) =>
                      (0, r.jsx)(
                        y,
                        {
                          offer: t,
                          offerOptions: e,
                          forceRefetch: () => E(!0),
                        },
                        t.id,
                      ),
                    ),
                  ],
                }),
              S.length > 0 &&
                (0, r.jsxs)("section", {
                  className: v.section,
                  children: [
                    (0, r.jsx)(c.Heading, {
                      variant: "heading-md/semibold",
                      children: "Existing Discount Offers",
                    }),
                    S.map((e) =>
                      (0, r.jsx)(
                        k,
                        {
                          offer: e,
                          offerOptions: n,
                          forceRefetch: () => E(!0),
                        },
                        e.id,
                      ),
                    ),
                  ],
                }),
            ],
          }),
        });
      }
    },
    596768: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return k;
        },
      }),
        n(47120);
      var r = n(735250),
        a = n(470079),
        l = n(120356),
        i = n.n(l),
        o = n(658722),
        s = n.n(o),
        c = n(913527),
        d = n.n(c),
        u = n(442837),
        h = n(481060),
        m = n(570140),
        x = n(665149),
        f = n(55935),
        p = n(120816),
        b = n(31336),
        g = n(257785),
        v = n(484036),
        j = n(681619),
        C = n(621060),
        _ = n(689938),
        S = n(574001),
        T = n(219299);
      let N = [
          {
            key: "id",
            cellClassName: S.eventColumn,
            render(e) {
              let { experimentId: t } = e;
              return t;
            },
          },
          {
            key: "bucket",
            cellClassName: S.locationColumn,
            render(e) {
              let { descriptor: t } = e;
              return t.bucket;
            },
          },
          {
            key: "timestamp",
            cellClassName: S.locationColumn,
            render(e) {
              let { timestamp: t } = e;
              return t.toLocaleString();
            },
          },
        ],
        y = [
          {
            id: "details",
            name: "Details",
            render: (e) => {
              let {
                  loggedTrigger: {
                    experimentId: t,
                    descriptor: n,
                    exposureType: a,
                    excluded: l,
                    timestamp: o,
                    location: s,
                    previouslyTracked: c,
                  },
                } = e,
                u = d()(o);
              return (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsxs)(x.ZP, {
                    className: i()(T.headerBar, S.subPanelHeaderBar),
                    children: [
                      (0, r.jsx)(x.ZP.Icon, {
                        icon: h.AnalyticsIcon,
                        tooltip: t,
                      }),
                      (0, r.jsx)(x.ZP.Title, { children: t }),
                    ],
                  }),
                  (0, r.jsxs)(g.E, {
                    className: S.commonProperties,
                    children: [
                      (0, r.jsx)(g.Z9, {
                        name: "Timestamp (local)",
                        children: (0, r.jsx)("time", {
                          dateTime: o.toISOString(),
                          title: (0, f.vc)(u, "LLLL"),
                          children: (0, f.Y4)(u),
                        }),
                      }),
                      "guild" === n.type &&
                        (0, r.jsx)(g.Z9, {
                          name: "Guild ID",
                          children: (0, r.jsx)("code", { children: n.guildId }),
                        }),
                      (0, r.jsx)(g.Z9, {
                        name: "Bucket",
                        children: (0, r.jsx)("code", { children: n.bucket }),
                      }),
                      (0, r.jsx)(g.Z9, {
                        name: "Revision",
                        children: (0, r.jsx)("code", { children: n.revision }),
                      }),
                      (0, r.jsx)(g.Z9, {
                        name: "Override",
                        children: (0, r.jsx)(g.wl, { value: n.override }),
                      }),
                      (0, r.jsx)(g.Z9, {
                        name: "Exposure type",
                        children: (0, r.jsx)("code", { children: a }),
                      }),
                      (0, r.jsx)(g.Z9, {
                        name: "Excluded",
                        children: (0, r.jsx)(g.wl, { value: l }),
                      }),
                      (0, r.jsx)(g.Z9, {
                        name: "Previously tracked",
                        children: (0, r.jsx)(g.wl, { value: c }),
                      }),
                      (0, r.jsx)(g.Z9, {
                        name: "Location",
                        children: (0, r.jsx)("code", { children: s }),
                      }),
                    ],
                  }),
                ],
              });
            },
          },
        ];
      function k() {
        let [e, t] = a.useState(""),
          n = a.useRef(null),
          l = (0, u.Wu)([p.Z], () => p.Z.loggedTriggers),
          o = a.useMemo(
            () =>
              l
                .filter((t) => 0 === e.length || s()(e, t.experimentId))
                .sort((e, t) => t.timestamp.getTime() - e.timestamp.getTime()),
            [l, e],
          ),
          [c, d] = a.useState(void 0),
          x = o.find((e) => e.key === c),
          { TabBar: f, renderSelectedTab: g } = (0, C.Z)({ tabs: y }, []),
          k = (0, u.e7)([p.Z], () => p.Z.trackTriggers),
          w = a.useCallback((e) => {
            m.Z.dispatch({ type: "SET_TRACK_TRIGGERS", enabled: e });
          }, []);
        return (0, r.jsxs)("div", {
          ref: n,
          className: i()(T.panel, S.panel),
          children: [
            (0, r.jsxs)("div", {
              className: S.toolbar,
              children: [
                (0, r.jsx)("div", {
                  title: "Enables tracking of all triggers",
                  className: S.triggersEnable,
                  children: (0, r.jsx)(h.Switch, {
                    checked: k,
                    onChange: w,
                    className: S.__invalid_toolbarSwitch,
                  }),
                }),
                (0, r.jsx)(h.Button, {
                  className: S.toolbarButton,
                  look: h.Button.Looks.BLANK,
                  size: h.Button.Sizes.ICON,
                  onClick: b.Zw,
                  children: (0, r.jsx)("span", {
                    title: _.Z.Messages.CLEAR,
                    children: (0, r.jsx)(h.TrashIcon, {
                      size: "md",
                      color: "currentColor",
                      "aria-label": _.Z.Messages.CLEAR,
                    }),
                  }),
                }),
                (0, r.jsx)(h.SearchBar, {
                  className: S.searchBar,
                  query: e,
                  onChange: t,
                  onClear: () => t(""),
                  placeholder: "Search by experiment id",
                }),
              ],
            }),
            (0, r.jsx)(j.Z, {
              columns: N,
              data: o,
              selectedRowKey: c,
              onClickRow: (e) => d(e.key),
            }),
            null != x &&
              (0, r.jsxs)(v.Z, {
                className: S.subPanel,
                minHeight: 100,
                initialHeight:
                  null != n.current ? n.current.clientHeight / 2 : 300,
                children: [(0, r.jsx)(f, {}), g({ loggedTrigger: x })],
              }),
          ],
        });
      }
    },
    581612: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
        q: function () {
          return i;
        },
      });
      var r = n(570140),
        a = n(91311);
      function l(e, t) {
        let n = "boolean" == typeof t ? t : !a.Z.get(e);
        r.Z.dispatch({
          type: "DEV_TOOLS_DESIGN_TOGGLE_WEB_SET",
          toggle: e,
          value: n,
        });
      }
      function i() {
        for (let e in a.Z.all()) l(e, !1);
      }
    },
    500949: function (e, t, n) {
      n.d(t, {
        $R: function () {
          return K;
        },
        A0: function () {
          return ee;
        },
        GU: function () {
          return q;
        },
        H8: function () {
          return r;
        },
        HI: function () {
          return X;
        },
        HW: function () {
          return H;
        },
        Ib: function () {
          return ei;
        },
        KB: function () {
          return ec;
        },
        S2: function () {
          return V;
        },
        W6: function () {
          return et;
        },
        XM: function () {
          return en;
        },
        YC: function () {
          return eu;
        },
        YE: function () {
          return ea;
        },
        h9: function () {
          return el;
        },
        iw: function () {
          return a;
        },
        jC: function () {
          return U;
        },
        jQ: function () {
          return G;
        },
        lT: function () {
          return Y;
        },
        rd: function () {
          return es;
        },
        t4: function () {
          return eo;
        },
        uF: function () {
          return ed;
        },
        zn: function () {
          return $;
        },
      }),
        n(47120),
        n(724458),
        n(653041);
      var r,
        a,
        l,
        i,
        o = n(470079),
        s = n(216397),
        c = n(764160),
        d = n(808131),
        u = n(757028),
        h = n(694626),
        m = n(855930),
        x = n(385787),
        f = n(566162),
        p = n(567027),
        b = n(461195),
        g = n(857702),
        v = n(20450),
        j = n(312976),
        C = n(147591),
        _ = n(135164),
        S = n(940172),
        T = n(81011),
        N = n(981613),
        y = n(762399),
        k = n(232112),
        w = n(53796),
        I = n(723757),
        E = n(375924),
        Z = n(596136),
        R = n(341901),
        O = n(856308),
        B = n(665352),
        P = n(394900),
        A = n(661105),
        L = n(525169),
        F = n(433517),
        M = n(190558),
        D = n(231338);
      let H = {
          sRGB: s.Z,
          A98RGB: c.Z,
          ACEScc: d.Z,
          ACEScg: u.Z,
          HPLuv: h.Z,
          HSL: m.Z,
          HSLuv: x.Z,
          HSV: f.Z,
          HWB: p.Z,
          ICTCP: b.Z,
          JzCzHz: g.Z,
          Jzazbz: v.Z,
          LCH: j.Z,
          LCHuv: C.Z,
          Lab: _.Z,
          Lab_D65: S.Z,
          Luv: T.Z,
          OKLCH: N.Z,
          OKLab: y.Z,
          P3: k.Z,
          ProPhoto: w.Z,
          REC_2020: I.Z,
          REC_2100_HLG: E.Z,
          REC_2100_PQ: Z.Z,
          XYZ_D50: R.Z,
          XYZ_D65: O.Z,
        },
        G = Object.fromEntries(Object.keys(H).map((e) => [e, e]));
      Object.values(H).forEach((e) => B.Z.register(e));
      let { SemanticColors: z } = M.V,
        U = z,
        V =
          CSS.supports("color", "color(display-p3 1 0 0)") &&
          CSS.supports("color", "color(display-p3 1 0 0 / 1)");
      function W(e, t) {
        let [n, r] = o.useState(() => {
          let n = F.K.get(e);
          return null != n ? n : t;
        });
        return (
          o.useEffect(() => {
            F.K.set(e, n);
          }, [e, n]),
          [n, r]
        );
      }
      function K(e) {
        let t = U[e];
        return {
          name: e,
          colors: Object.fromEntries(
            Object.values(D.BR).map((e) => [
              e,
              { color: t[e].raw, opacity: t[e].opacity },
            ]),
          ),
          highlight: !1,
        };
      }
      function Y(e, t, n, r, a) {
        return {
          name: t,
          colors: { ...e.colors, [a]: { color: n, opacity: r } },
          highlight: !1,
        };
      }
      function q(e) {
        return { ...e, highlight: !e.highlight };
      }
      function X(e) {
        return (0, P.Z)((0, A.Z)(e, s.Z), { format: "hex" });
      }
      function $() {
        return (function (e, t) {
          let [n, r] = W("".concat(e, "-states"), [t]),
            [a, l] = W("".concat(e, "-index"), 0),
            i = n[a],
            s = o.useCallback(
              (e) => {
                r(["function" == typeof e ? e(i) : e, ...n].slice(0, 20)), l(0);
              },
              [l, r, n, i],
            ),
            c = o.useCallback(() => {
              l(Math.min(n.length - 1, a + 1));
            }, [a, l, n.length]),
            d = o.useCallback(() => {
              l(Math.max(0, a - 1));
            }, [a, l]),
            u = a < n.length - 1;
          return [i, s, c, d, u, a > 0];
        })("color-override-9-24-2024", {
          semanticColorOverrides: {},
          rawColorOverrides: {},
          tab: "Tokens",
          scales: [],
        });
      }
      ((l = r || (r = {})).TOKENS = "Tokens"), (l.PALETTES = "Palettes");
      let J = [
          100, 130, 160, 200, 230, 260, 300, 330, 345, 360, 400, 430, 460, 500,
          530, 560, 600, 630, 660, 700, 730, 760, 800, 830, 860, 900,
        ],
        Q = [
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
          20, 21, 22, 23, 24, 25, 26,
        ];
      function ee(e) {
        return "plum" === e ? Q : J;
      }
      function et(e, t) {
        let n = ee(t),
          r = Object.keys(e).map((e) => parseInt(e.split("-")[1])),
          a = Math.max(...r) / (n.length - 1),
          l = {};
        return (
          n.forEach((e, n) => {
            let i = Math.round(n * a),
              o = r.reduce((e, t) =>
                Math.abs(t - i) < Math.abs(e - i) ? t : e,
              );
            l["".concat(t, "-").concat(o)] = "".concat(t, "-").concat(e);
          }),
          l
        );
      }
      function en(e) {
        let {
            name: t,
            base: n,
            steps: r = 26,
            darkness: a,
            lightness: l,
            easingStrength: i = 1,
          } = e,
          o = H[e.colorSpace],
          c = (0, A.Z)(n, o),
          d = (0, L.CD)(c, "white", 1 - a, { space: o, outputSpace: s.Z }),
          u = (0, L.CD)(c, "black", 1 - l, { space: o, outputSpace: s.Z }),
          h = Math.floor(r / 2),
          m = r - h,
          x = (0, L.w6)(d, c, {
            steps: h,
            outputSpace: o,
            space: o,
            progression: (e) => e ** i,
          }),
          f = (0, L.w6)(u, c, {
            steps: m,
            outputSpace: o,
            space: o,
            progression: (e) => e ** i,
          }),
          p = [];
        for (let e = 0; e < h; e++) {
          let t = x(e / h);
          p.push(t);
        }
        p.push(c);
        for (let e = 1; e < m; e++) {
          let t = f(1 - e / m);
          p.push(t);
        }
        return Object.fromEntries(
          p.map((e, n) => ["".concat(t, "-").concat(n), e]),
        );
      }
      function er(e, t, n) {
        n((n) =>
          null == n.scales.find((t) => t.name === e)
            ? n
            : { ...n, scales: n.scales.map((n) => (n.name === e ? t(n) : n)) },
        );
      }
      function ea(e, t, n) {
        er(e, (e) => ({ ...e, darkness: t }), n);
      }
      function el(e, t, n) {
        er(e, (e) => ({ ...e, lightness: t }), n);
      }
      function ei(e, t, n) {
        er(e, (e) => ({ ...e, base: t }), n);
      }
      function eo(e, t, n) {
        er(e, (e) => ({ ...e, colorSpace: t }), n);
      }
      function es(e, t, n) {
        er(e, (e) => ({ ...e, easingStrength: t }), n);
      }
      function ec(e, t, n) {
        er(e, (e) => ({ ...e, showColumnarPalettePreview: t }), n);
      }
      function ed(e, t, n) {
        er(e, (e) => ({ ...e, useP3ColorSpace: t }), n);
      }
      function eu(e, t, n) {
        er(e, (e) => ({ ...e, steps: t }), n);
      }
      ((i = a || (a = {})).LINEAR = "Linear"),
        (i.EASE_IN = "Ease In"),
        (i.EASE_OUT = "Ease Out"),
        (i.EASE_IN_OUT = "Ease In Out");
    },
    621060: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return x;
        },
      }),
        n(47120),
        n(653041);
      var r = n(735250),
        a = n(470079),
        l = n(120356),
        i = n.n(l),
        o = n(481060),
        s = n(424625),
        c = n(823379),
        d = n(246992),
        u = n(219299);
      let h = a.forwardRef(function (e, t) {
        let { id: n, selected: a, onClick: l, children: s } = e;
        return (0, r.jsx)(o.Clickable, {
          className: i()(u.tabItem, { [u.selected]: a }),
          "data-tab-id": n,
          innerRef: t,
          onClick: l,
          children: s,
        });
      });
      function m(e) {
        let { tabs: t, selectedTabId: n, onSelectTab: l } = e,
          i = a.useRef(null),
          m = a.useRef(0),
          x = a.useRef(new Map()),
          [f, p] = a.useState([]),
          b = a.useCallback(() => {
            var e, r, a, l;
            if (null == i.current) return;
            let o = [],
              s = i.current.getBoundingClientRect().width;
            if (s !== m.current) {
              for (let i of ((m.current = s),
              (s -=
                null !==
                  (r =
                    null === (e = x.current.get(n)) || void 0 === e
                      ? void 0
                      : e.width) && void 0 !== r
                  ? r
                  : 0),
              t)) {
                if (i.id !== n)
                  (s -=
                    null !==
                      (l =
                        null === (a = x.current.get(i.id)) || void 0 === a
                          ? void 0
                          : a.width) && void 0 !== l
                      ? l
                      : 0) < 0 && o.push(i.id);
              }
              p(o);
            }
          }, [t, n]),
          g = a.useRef(null);
        a.useEffect(
          () => (
            (g.current = new ResizeObserver(() => b())),
            null != i.current && g.current.observe(i.current),
            () => {
              var e;
              null === (e = g.current) || void 0 === e || e.disconnect();
            }
          ),
          [b],
        );
        let v = a.useCallback(
          (e) => {
            let { closePopout: a } = e;
            return (0, r.jsx)(o.Menu, {
              navId: "devtools-overflow",
              variant: "fixed",
              onClose: a,
              "aria-label": "Overflowed DevTools Tabs",
              onSelect: a,
              children: t
                .map((e) => {
                  let { id: t, name: a } = e;
                  return f.includes(t) && n !== t
                    ? (0, r.jsx)(
                        o.MenuItem,
                        { id: t, label: a, action: () => l(t) },
                        t,
                      )
                    : null;
                })
                .filter(c.lm),
            });
          },
          [t, f, l, n],
        );
        return (0, r.jsxs)("div", {
          className: u.tabBar,
          ref: i,
          children: [
            t
              .map((e) => {
                let { id: t, name: a } = e;
                if (!f.includes(t))
                  return (0, r.jsx)(
                    h,
                    {
                      id: t,
                      selected: n === t,
                      ref: (e) => {
                        var n, r, a;
                        let l =
                          null !==
                            (r =
                              null === (n = x.current.get(t)) || void 0 === n
                                ? void 0
                                : n.width) && void 0 !== r
                            ? r
                            : 0;
                        x.current.set(t, {
                          node: e,
                          width:
                            null !==
                              (a =
                                null == e
                                  ? void 0
                                  : e.getBoundingClientRect().width) &&
                            void 0 !== a
                              ? a
                              : l,
                        });
                      },
                      onClick: n !== t ? () => l(t) : void 0,
                      children: a,
                    },
                    t,
                  );
              })
              .filter(c.lm),
            f.length > 0 &&
              (0, r.jsx)(r.Fragment, {
                children: (0, r.jsx)(o.Popout, {
                  layerContext: d.O$,
                  renderPopout: v,
                  position: "bottom",
                  align: "right",
                  spacing: 0,
                  children: (e) =>
                    (0, r.jsx)(o.Button, {
                      ...e,
                      className: u.overflowChevron,
                      size: o.Button.Sizes.ICON,
                      look: o.Button.Looks.BLANK,
                      children: (0, r.jsx)(s.Z, {
                        className: u.__invalid_overflowIcon,
                        width: 16,
                        height: 16,
                      }),
                    }),
                }),
              }),
          ],
        });
      }
      function x(e, t) {
        var n, l, i;
        let { tabs: o, initialSelectedTabId: s, onChangeTab: c } = e,
          [d, u] = a.useState(
            null != s ? s : null === (n = o[0]) || void 0 === n ? void 0 : n.id,
          ),
          h = a.useCallback(
            () =>
              (0, r.jsx)(m, {
                tabs: o,
                selectedTabId: d,
                onSelectTab: (e) => {
                  u(e), null == c || c(e);
                },
              }),
            [d, u, c, ...t],
          );
        return {
          TabBar: h,
          renderSelectedTab:
            null !==
              (i =
                null === (l = o.find((e) => e.id === d)) || void 0 === l
                  ? void 0
                  : l.render) && void 0 !== i
              ? i
              : () => null,
          selectedTabId: d,
        };
      }
    },
    374794: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var r = n(735250);
      n(470079);
      var a = n(120356),
        l = n.n(a),
        i = n(481060),
        o = n(53281);
      function s(e) {
        let {
          children: t,
          className: n,
          innerClassName: a,
          onChange: s,
          "aria-label": c,
          "aria-describedby": d,
          filters: u,
          multiple: h = !1,
          disabled: m = !1,
          submitting: x = !1,
          ...f
        } = e;
        return (0, r.jsx)(i.FocusRing, {
          within: !0,
          children: (0, r.jsxs)("div", {
            className: l()(
              n,
              (0, i.getButtonStyle)({ ...f, submitting: x, disabled: m }),
            ),
            "aria-disabled": m,
            children: [
              (0, r.jsx)("span", {
                "aria-hidden": !0,
                className: a,
                children: t,
              }),
              (0, r.jsx)(o.Z, {
                tabIndex: 0,
                onChange: s,
                filters: u,
                multiple: h,
                "aria-label": c,
                "aria-describedby": d,
                disabled: m,
              }),
            ],
          }),
        });
      }
    },
    49898: function (e, t, n) {
      var r, a, l, i, o, s, c;
      n.d(t, {
        D7: function () {
          return u;
        },
        F$: function () {
          return r;
        },
        JU: function () {
          return i;
        },
        Kl: function () {
          return h;
        },
        U1: function () {
          return m;
        },
        WB: function () {
          return a;
        },
        mc: function () {
          return d;
        },
      }),
        ((o = r || (r = {})).SERVERS = "servers"),
        (o.QUESTS = "quests"),
        (o.APPS = "apps");
      let d = 12633 == n.j ? ["servers", "apps", "quests"] : null,
        u = "servers",
        h = 24,
        m = 240;
      ((s = a || (a = {})).DEFAULT = "default"),
        (s.FLOATING = "floating"),
        (s.COLLAPSED = "collapsed"),
        ((c = l || (l = {})).ROOT = "root"),
        (c.SERVER_TAB = "server_tab"),
        (c.SERVER_SEARCH = "server_search"),
        ((i || (i = {})).GUILDS_BAR_ICON = "guilds_bar_icon");
    },
    836768: function (e, t, n) {
      n.d(t, {
        d: function () {
          return o;
        },
        u: function () {
          return s;
        },
      });
      var r = n(652874),
        a = n(868888),
        l = n(433517);
      let i = { selectedTab: n(49898).F$.SERVERS },
        o = (0, r.Z)(
          (0, a.tJ)(() => i, {
            name: "global-discovery-ui-store",
            getStorage: () => ({
              getItem: (e) => {
                var t;
                return null !== (t = l.K.get(e)) && void 0 !== t ? t : null;
              },
              setItem: (e, t) => l.K.set(e, t),
              removeItem: (e) => l.K.remove(e),
            }),
            partialize: (e) => ({ selectedTab: e.selectedTab }),
          }),
        );
      function s() {
        o.setState(i);
      }
    },
    859921: function (e, t, n) {
      n.d(t, {
        OI: function () {
          return m;
        },
        QQ: function () {
          return d;
        },
        jY: function () {
          return h;
        },
        jg: function () {
          return u;
        },
      });
      var r = n(470079),
        a = n(652874);
      if (12633 == n.j) var l = n(143927);
      var i = n(731965);
      let o = Object.freeze({ selectedTab: null, isSearchVisible: !1 }),
        s = (0, a.Z)(() => o);
      function c(e) {
        var t;
        return s(r.useRef(((t = e), (e) => e[t])).current, l.Z);
      }
      let d = () => c("isSearchVisible"),
        u = () => c("selectedTab"),
        h = (e) => {
          (0, i.j)(() => s.setState(e));
        };
      function m() {
        h(o);
      }
    },
    676317: function (e, t, n) {
      n.d(t, {
        Nb: function () {
          return c;
        },
        oA: function () {
          return u;
        },
        pr: function () {
          return d;
        },
        ze: function () {
          return s;
        },
      });
      var r = n(442837),
        a = n(430824),
        l = n(496675),
        i = n(981631);
      let o = function (e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : a.Z,
          n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : l.Z,
          r = t.getGuild(e);
        return null != r && n.can(i.Plq.MANAGE_GUILD, r);
      };
      function s(e) {
        return null != e && o(e);
      }
      function c(e) {
        return o(e);
      }
      function d(e) {
        return (0, r.e7)([a.Z, l.Z], () => o(e, a.Z, l.Z), [e]);
      }
      function u(e) {
        return (0, r.e7)(
          [a.Z],
          () => {
            let t = a.Z.getGuild(e);
            return (null == t ? void 0 : t.hasFeature(i.oNc.COMMUNITY)) || !1;
          },
          [e],
        );
      }
    },
    241209: function (e, t, n) {
      var r,
        a,
        l = n(735250),
        i = n(470079),
        o = n(120356),
        s = n.n(o),
        c = n(302454),
        d = n.n(c),
        u = n(663993),
        h = n(770146),
        m = n(772096),
        x = n(428595),
        f = n(532901),
        p = n(207533),
        b = n(112864);
      function g(e, t, n) {
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
      let v = new RegExp(
        "https?://".concat(
          null !== (r = window.GLOBAL_ENV.CDN_HOST) && void 0 !== r ? r : "",
        ),
      );
      function j(e) {
        return "string" == typeof e.content ? e.content : S(e.content);
      }
      let C = {
          ...d().defaultRules,
          heading: {
            ...d().defaultRules.heading,
            react(e, t, n) {
              let r = "h".concat(e.level);
              return (0, l.jsx)(
                h.Z,
                { tag: r, children: t(e.content, n) },
                n.key,
              );
            },
          },
          paragraph: {
            ...d().defaultRules.paragraph,
            react: (e, t, n) =>
              (0, l.jsx)(
                "div",
                { className: p.paragraph, children: t(e.content, n) },
                n.key,
              ),
          },
          strong: { ...d().defaultRules.strong, order: 6 },
          em: { ...d().defaultRules.em, order: 6 },
          u: { ...d().defaultRules.u, order: 5 },
          del: { ...d().defaultRules.del, order: 6 },
          link: {
            ...m.ZP,
            ...(0, f.Z)({ enableBuildOverrides: !1 }),
            order: 6,
          },
          blockQuote: {
            ...d().defaultRules.blockQuote,
            react: (e, t, n) =>
              (0, l.jsx)(
                "blockquote",
                { className: p.blockquote, children: j(e) },
                n.key,
              ),
          },
          image: {
            ...d().defaultRules.image,
            order: 6,
            match(e, t, n) {
              let r = d().defaultRules.image;
              if (null == r || null == r.match) return !1;
              let a = r.match(e, t, n);
              if (null != a && Array.isArray(a) && a.length >= 3) {
                let e = a[2];
                if ("string" == typeof e) return null != e.match(v) ? a : null;
              }
              return !1;
            },
          },
          inlineCode: {
            ...x.Z.RULES.inlineCode,
            order: 6,
            react: (e, t, n) =>
              (0, l.jsx)(
                "code",
                { className: p.codeInline, children: j(e) },
                n.key,
              ),
          },
          codeBlock: {
            ...d().defaultRules.codeBlock,
            react(e, t, r) {
              let a = () =>
                (0, l.jsx)(
                  "pre",
                  {
                    children: (0, l.jsx)("code", {
                      className: s()(b.scrollbarGhostHairline, "hljs"),
                      children: j(e),
                    }),
                  },
                  r.key,
                );
              return (0, l.jsx)(
                u.GI,
                {
                  createPromise: () =>
                    Promise.resolve().then(n.bind(n, 364964)),
                  webpackId: 364964,
                  renderFallback: a,
                  render: (t) => {
                    if (
                      !(e.lang && t.hasLanguage(e.lang)) ||
                      "string" != typeof e.content
                    )
                      return a();
                    {
                      let n = t.highlight(e.lang, e.content, !0);
                      return null == n
                        ? a()
                        : (0, l.jsx)(
                            "pre",
                            {
                              children: (0, l.jsx)("code", {
                                className: s()(
                                  b.scrollbarGhostHairline,
                                  "hljs",
                                  n.language,
                                ),
                                dangerouslySetInnerHTML: { __html: n.value },
                              }),
                            },
                            r.key,
                          );
                    }
                  },
                },
                r.key,
              );
            },
          },
        },
        _ = d().parserFor(C),
        S = d().reactFor(d().ruleOutput(C, "react"));
      class T extends (a = i.PureComponent) {
        render() {
          let {
              className: e,
              children: t,
              state: n,
              parser: r,
              output: a,
            } = this.props,
            i = a(r("".concat(t, "\n\n"), { inline: !1, ...n }));
          return (0, l.jsx)("div", {
            className: s()(p.markdown, e),
            children: i,
          });
        }
      }
      g(T, "rules", C),
        g(T, "defaultProps", { parser: _, output: S }),
        (t.Z = T);
    },
    511010: function (e, t, n) {
      var r = n(735250),
        a = n(470079),
        l = n(120356),
        i = n.n(l),
        o = n(661824),
        s = n(916315);
      let c = a.forwardRef(function (e, t) {
        let { className: n, isBeforeGroup: a = !1, ...l } = e,
          { children: c } = l;
        return (0, r.jsx)(o.Z, {
          ...l,
          ref: t,
          role: "separator",
          "aria-label": "string" == typeof c ? c : void 0,
          className: i()(n, {
            [s.divider]: !0,
            [s.hasContent]: null != c,
            [s.beforeGroup]: a,
          }),
        });
      });
      t.Z = a.memo(c);
    },
    258732: function (e, t, n) {
      var r = n(544891),
        a = n(981631);
      t.Z = {
        updatePrivateChannelRecipientFlags: (e, t) =>
          r.tn.patch({
            url: a.ANM.CHANNEL_RECIPIENT_ME(e),
            body: { flags: t },
          }),
      };
    },
    304445: function (e, t, n) {
      n(47120), n(411104);
      var r = n(572299),
        a = n(38618),
        l = n(905423),
        i = n(622143),
        o = n(703656),
        s = n(981631);
      function c(e, t, n) {
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
      t.Z = new (class e {
        initialize() {
          this.cleanup(),
            (this.unlistenHistory = (0, o.s1)().listen(this.handleRouteChange));
          let { pathname: e } = (0, o.s1)().location;
          l.Z.getState().resetPath(e),
            (this.unlistenKeyboardChange = l.Z.subscribe(
              this.handleKeybindRouteChange,
            )),
            a.Z.addChangeListener(this.handleConnectionChange);
        }
        executeRouteRewrites(e, t) {
          if (((this.routeChangeCount += 1), this.routeChangeCount < 10))
            for (let n of this.rewrites) {
              let a = (0, o.s1)().location.pathname,
                l = n(e, t);
              if (null != l)
                return (
                  (0, r.n)({
                    message:
                      "RouteManager.handleRouteChange: A route rewrite is replacing the current route",
                    data: { replacePath: l.path, previousPath: a },
                  }),
                  (0, o.dL)(l.path, l.state),
                  !0
                );
            }
          else
            throw Error(
              "RouteManager: Something has gone horribly wrong with rewrites",
            );
          return !1;
        }
        cleanup() {
          var e, t;
          null === (e = this.unlistenHistory) || void 0 === e || e.call(this),
            (this.unlistenHistory = void 0),
            null === (t = this.unlistenKeyboardChange) ||
              void 0 === t ||
              t.call(this),
            (this.unlistenKeyboardChange = void 0),
            a.Z.removeChangeListener(this.handleConnectionChange);
        }
        addRouteChangeListener(e) {
          return (
            null != this.unlistenHistory && e((0, o.s1)().location, "REPLACE"),
            this.listeners.add(e),
            () => this.removeRouteChangeListener(e)
          );
        }
        addRouteRewriter(e) {
          if (null != this.unlistenHistory) {
            let t = e((0, o.s1)().location, (0, o.s1)().action);
            null != t && (0, o.dL)(t.path, t.state);
          }
          return this.rewrites.add(e), () => this.removeRouteRewriter(e);
        }
        removeRouteChangeListener(e) {
          this.listeners.delete(e);
        }
        removeRouteRewriter(e) {
          this.rewrites.delete(e);
        }
        getHistory() {
          return (0, o.s1)();
        }
        constructor() {
          c(this, "unlistenHistory", void 0),
            c(this, "unlistenKeyboardChange", void 0),
            c(this, "rewrites", new Set()),
            c(this, "listeners", new Set()),
            c(this, "routeChangeCount", 0),
            c(this, "timer", -1),
            c(this, "connected", !1),
            c(this, "handleConnectionChange", () => {
              let e = a.Z.isConnected(),
                t = e && !this.connected;
              (this.connected = e),
                t &&
                  ((this.routeChangeCount = 0),
                  this.executeRouteRewrites((0, o.s1)().location, "REPLACE"));
            }),
            c(this, "handleRouteChange", (e, t) => {
              if (this.executeRouteRewrites(e, t)) return;
              if (!(0, i.r)(e)) {
                (0, o.dL)(s.Z5c.ME);
                return;
              }
              let n = l.Z.getState();
              for (let r of (n.basePath !== e.pathname &&
                n.resetPath(e.pathname),
              this.listeners))
                try {
                  r(e, t);
                } catch (e) {
                  console.warn(
                    "RouteManager.listen: A route listener has caused an error",
                    e.message,
                  );
                }
              this.routeChangeCount = 0;
            }),
            c(this, "handleKeybindRouteChange", (e) => {
              let { path: t } = e;
              null != t
                ? (clearTimeout(this.timer),
                  (this.timer = setTimeout(this.flushRoute, 200)))
                : null == t && clearTimeout(this.timer);
            }),
            c(this, "flushRoute", () => {
              clearTimeout(this.timer);
              let e = l.Z.getState();
              null != e.path && (0, o.uL)(e.path);
            });
        }
      })();
    },
    622143: function (e, t, n) {
      n.d(t, {
        r: function () {
          return r;
        },
      });
      function r(e) {
        return !0;
      }
    },
    977059: function (e, t, n) {
      n.d(t, {
        R: function () {
          return l;
        },
        S: function () {
          return a;
        },
      });
      let r = (0, n(987170).Z)({
        kind: "user",
        id: "2024-05_secure_frames_ui_rollout",
        label: "Secure Frames Rollout",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled.", config: { enabled: !0 } }],
      });
      function a(e) {
        let { location: t } = e;
        return r.useExperiment({ location: t }, { autoTrackExposure: !0 });
      }
      function l(e) {
        let { location: t } = e;
        return r.getCurrentConfig({ location: t }, { autoTrackExposure: !0 });
      }
    },
    301801: function (e, t, n) {
      n.d(t, {
        H: function () {
          return i;
        },
      }),
        n(315314),
        n(610138),
        n(216116),
        n(78328),
        n(815648),
        n(47120);
      var r = n(392711),
        a = n(823379);
      let l = new Worker(new URL("/assets/" + n.u("56558"), n.b));
      function i(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          o = (0, r.uniqueId)();
        return new Promise((r) => {
          let s = (t) => {
            let {
              data: { id: n, foundItemIndexes: i },
            } = t;
            o === n && r(i.map((t) => e[t]).filter(a.lm)),
              null == l || l.removeEventListener("message", s);
          };
          null == l || l.addEventListener("message", s);
          let c = {
            id: o,
            searchTerm: n,
            searchStrings: e.map(t),
            useRegex: i,
          };
          null == l || l.postMessage(c);
        });
      }
    },
    912101: function (e, t, n) {
      let r;
      n(654769);
      (r = n(654769).Z), (t.Z = r);
    },
    88658: function (e, t, n) {
      n.d(t, {
        $6: function () {
          return p;
        },
        YK: function () {
          return u;
        },
        _o: function () {
          return m;
        },
        ac: function () {
          return b;
        },
        bL: function () {
          return f;
        },
        g0: function () {
          return a;
        },
        gl: function () {
          return h;
        },
        rr: function () {
          return x;
        },
        xH: function () {
          return g;
        },
      });
      var r,
        a,
        l = n(695346),
        i = n(486472),
        o = n(430824);
      n(626135);
      var s = n(981631),
        c = n(689938);
      let d = 864e5 * s.eBq;
      function u() {
        let e = l.h2.getSetting();
        return (
          0 === i.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != o.Z.getGuild(e))),
          e
        );
      }
      function h() {
        let e = l.zA.getSetting();
        return (
          0 === i.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != o.Z.getGuild(e))),
          e
        );
      }
      function m() {
        let e = l.SE.getSetting();
        return (
          0 === i.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != o.Z.getGuild(e))),
          e
        );
      }
      function x() {
        let e = l.iH.getSetting();
        return (
          0 === i.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != o.Z.getGuild(e))),
          e
        );
      }
      function f(e) {
        return (e & s.HGf) === s.HGf
          ? { all: !0, mutualFriends: !0, mutualGuilds: !0 }
          : {
              all: !1,
              mutualFriends:
                (e & s.SOq.MUTUAL_FRIENDS) === s.SOq.MUTUAL_FRIENDS,
              mutualGuilds: (e & s.SOq.MUTUAL_GUILDS) === s.SOq.MUTUAL_GUILDS,
            };
      }
      function p(e, t) {
        return (
          !t.verified ||
          (null != e && d > Date.now() - new Date(e.created_at).getTime())
        );
      }
      ((r = a || (a = {}))[(r.UNDECIDED = 0)] = "UNDECIDED"),
        (r[(r.OPTIN = 1)] = "OPTIN"),
        (r[(r.OPTOUT = 2)] = "OPTOUT");
      let b = { 0: void 0, 1: !0, 2: !1 };
      function g() {
        return [
          {
            name: c.Z.Messages
              .PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_IN_HEADER,
            desc: c.Z.Messages
              .PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_IN_DESC,
            value: 1,
          },
          {
            name: c.Z.Messages
              .PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_OUT_HEADER,
            desc: c.Z.Messages
              .PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_OUT_DESC,
            value: 2,
          },
          {
            name: c.Z.Messages
              .PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_UNSET_HEADER,
            desc: c.Z.Messages
              .PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_UNSET_DESC,
            value: 0,
          },
        ];
      }
    },
    654769: function (e, t, n) {
      n(47120), n(177593);
      var r,
        a = n(392711),
        l = n.n(a),
        i = n(525654),
        o = n.n(i),
        s = n(579806),
        c = n(292959),
        d = n(246946),
        u = n(626135),
        h = n(358085),
        m = n(557177),
        x = n(998502),
        f = n(981631);
      function p(e, t, n) {
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
      let b = h.isPlatformEmbedded && (0, h.isWindows)(),
        g = b && 10 > parseFloat(s.Z.os.release),
        v = !0;
      if (b && !g) {
        let [e, , t] = s.Z.os.release.split(".");
        v = parseInt(e) > 10 || parseInt(t) >= 15063;
      }
      let j =
          (b && v) ||
          ("Chrome" === o().name && 47 > parseFloat(o().version)) ||
          ("Firefox" === o().name && 52 > parseFloat(o().version)),
        C = l().throttle(m.GN, 1e3, { leading: !0 });
      function _() {
        x.ZP.flashFrame(!1);
      }
      b &&
        (window.addEventListener("focus", _), x.ZP.on("MAIN_WINDOW_FOCUS", _));
      let S = window.Notification;
      g &&
        (x.ZP.on("NOTIFICATION_CLICK", (e, t) => {
          let n = null[t];
          null != n && (n.onclick(), n.close());
        }),
        x.ZP.send("NOTIFICATIONS_CLEAR"),
        (r = class {
          static requestPermission(e) {
            e();
          }
          close() {
            null != null[this.id] &&
              (delete null[this.id],
              x.ZP.send("NOTIFICATION_CLOSE", this.id),
              this.onclose());
          }
          constructor(e, { body: t, icon: n }) {
            p(this, "id", S._id++),
              p(this, "title", void 0),
              p(this, "body", void 0),
              p(this, "icon", void 0),
              p(this, "onshow", function () {}),
              p(this, "onclick", function () {}),
              p(this, "onclose", function () {}),
              (this.title = e),
              (this.body = t),
              (this.icon = n),
              setImmediate(() => this.onshow()),
              (null[this.id] = this),
              x.ZP.send("NOTIFICATION_SHOW", {
                id: this.id,
                title: this.title,
                body: this.body,
                icon: this.icon,
              });
          }
        }),
        p(r, "permission", "granted"),
        p(r, "_id", 0),
        (S = r));
      function T() {
        return null != S && "granted" === S.permission;
      }
      function N(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          n = arguments.length > 2 ? arguments[2] : void 0;
        e.includes("message") ? C(e, t, void 0, n) : (0, m.GN)(e, t);
      }
      function y(e) {
        return (
          (d.Z.disableNotifications && null == e.overrideStreamerMode) ||
          !T() ||
          (h.isPlatformEmbedded && !x.ZP.shouldDisplayNotifications())
        );
      }
      t.Z = {
        hasPermission: T,
        requestPermission: function (e) {
          null != S &&
            S.requestPermission(() => {
              null != e && e(T());
            });
        },
        showNotification: function (e, t, n, r, a) {
          var i, o, s, d;
          let m;
          if (y(a)) {
            null != a.sound &&
              !1 !== a.playSoundIfDisabled &&
              N(
                a.sound,
                null !== (o = a.volume) && void 0 !== o ? o : 1,
                a.soundpack,
              );
            return;
          }
          null != a.sound &&
            N(
              a.sound,
              null !== (s = a.volume) && void 0 !== s ? s : 1,
              a.soundpack,
            );
          let p =
            null !== (d = null == a ? void 0 : a.tag) && void 0 !== d
              ? d
              : null;
          (0, h.isLinux)() && (n = l().escape(n));
          let g = { icon: e, body: n, tag: p, silent: !0 };
          b && c.Z.taskbarFlash && x.ZP.flashFrame(!0);
          try {
            m = new S(t, g);
          } catch (e) {
            return null;
          }
          return (null === (i = a.onShown) || void 0 === i || i.call(a),
          !a.omitViewTracking && u.default.track(f.rMx.NOTIFICATION_VIEWED, r),
          (m.onclick = () => {
            var e;
            h.isPlatformEmbedded ? x.ZP.focus() : (window.focus(), m.close()),
              !a.omitClickTracking &&
                u.default.track(f.rMx.NOTIFICATION_CLICKED, r),
              null === (e = a.onClick) || void 0 === e || e.call(a);
          }),
          j && setTimeout(() => m.close(), 5e3),
          v)
            ? m
            : {
                close() {
                  var e;
                  null == m ||
                    null === (e = m.onclose) ||
                    void 0 === e ||
                    e.call(m);
                },
              };
        },
        disabled: y,
      };
    },
    203165: function (e, t, n) {
      n.d(t, {
        b: function () {
          return r;
        },
      });
      let r = {
        "red.100": { hex: "#fef8f9" },
        "red.130": { hex: "#fef4f4" },
        "red.160": { hex: "#feeaea" },
        "red.200": { hex: "#fdddde" },
        "red.230": { hex: "#fbcdce" },
        "red.260": { hex: "#fbbabb" },
        "red.300": { hex: "#fba6a8" },
        "red.330": { hex: "#fa9193" },
        "red.345": { hex: "#fa777b" },
        "red.360": { hex: "#f85b5f" },
        "red.400": { hex: "#f23f43" },
        "red.430": { hex: "#da373c" },
        "red.460": { hex: "#bb3033" },
        "red.500": { hex: "#a12829" },
        "red.530": { hex: "#8f2022" },
        "red.560": { hex: "#7f1c1e" },
        "red.600": { hex: "#70181a" },
        "red.630": { hex: "#651517" },
        "red.660": { hex: "#5a1314" },
        "red.700": { hex: "#501012" },
        "red.730": { hex: "#460e0f" },
        "red.760": { hex: "#3f0b0c" },
        "red.800": { hex: "#360a0b" },
        "red.830": { hex: "#2e090a" },
        "red.860": { hex: "#280808" },
        "red.900": { hex: "#220606" },
        "orange.100": { hex: "#fff8f5" },
        "orange.130": { hex: "#fff4ed" },
        "orange.160": { hex: "#feeadf" },
        "orange.200": { hex: "#fddecd" },
        "orange.230": { hex: "#fccfb2" },
        "orange.260": { hex: "#fcbd95" },
        "orange.300": { hex: "#fbab70" },
        "orange.330": { hex: "#fa9746" },
        "orange.345": { hex: "#f1882a" },
        "orange.360": { hex: "#db7628" },
        "orange.400": { hex: "#c46926" },
        "orange.430": { hex: "#ac591f" },
        "orange.460": { hex: "#9b4c19" },
        "orange.500": { hex: "#8c4013" },
        "orange.530": { hex: "#7b3710" },
        "orange.560": { hex: "#6d300e" },
        "orange.600": { hex: "#5f2b0b" },
        "orange.630": { hex: "#56260a" },
        "orange.660": { hex: "#4c2209" },
        "orange.700": { hex: "#431e09" },
        "orange.730": { hex: "#3b1a07" },
        "orange.760": { hex: "#331606" },
        "orange.800": { hex: "#2d1305" },
        "orange.830": { hex: "#261005" },
        "orange.860": { hex: "#200e05" },
        "orange.900": { hex: "#190d04" },
        "yellow.100": { hex: "#fff8ef" },
        "yellow.130": { hex: "#fff4e8" },
        "yellow.160": { hex: "#ffebd3" },
        "yellow.200": { hex: "#fee0b6" },
        "yellow.230": { hex: "#fdd18c" },
        "yellow.260": { hex: "#fcc145" },
        "yellow.300": { hex: "#f0b232" },
        "yellow.330": { hex: "#e1a42a" },
        "yellow.345": { hex: "#d49824" },
        "yellow.360": { hex: "#bf861c" },
        "yellow.400": { hex: "#af7615" },
        "yellow.430": { hex: "#9a650d" },
        "yellow.460": { hex: "#8a5709" },
        "yellow.500": { hex: "#7c4b04" },
        "yellow.530": { hex: "#6d4104" },
        "yellow.560": { hex: "#613803" },
        "yellow.600": { hex: "#543203" },
        "yellow.630": { hex: "#4c2d03" },
        "yellow.660": { hex: "#432803" },
        "yellow.700": { hex: "#3b2303" },
        "yellow.730": { hex: "#351e02" },
        "yellow.760": { hex: "#2e1a02" },
        "yellow.800": { hex: "#271602" },
        "yellow.830": { hex: "#221302" },
        "yellow.860": { hex: "#1c1002" },
        "yellow.900": { hex: "#160e02" },
        "green.100": { hex: "#ecfef1" },
        "green.130": { hex: "#defee7" },
        "green.160": { hex: "#bdfcd3" },
        "green.200": { hex: "#88fbb5" },
        "green.230": { hex: "#58f39c" },
        "green.260": { hex: "#48e58b" },
        "green.300": { hex: "#3bd67f" },
        "green.330": { hex: "#2dc771" },
        "green.345": { hex: "#26b968" },
        "green.360": { hex: "#23a55a" },
        "green.400": { hex: "#24934e" },
        "green.430": { hex: "#248045" },
        "green.460": { hex: "#1f703c" },
        "green.500": { hex: "#1a6334" },
        "green.530": { hex: "#15562b" },
        "green.560": { hex: "#124c24" },
        "green.600": { hex: "#0e431f" },
        "green.630": { hex: "#0c3c1c" },
        "green.660": { hex: "#0a3618" },
        "green.700": { hex: "#072f15" },
        "green.730": { hex: "#052910" },
        "green.760": { hex: "#03240e" },
        "green.800": { hex: "#031f0c" },
        "green.830": { hex: "#031b0a" },
        "green.860": { hex: "#041708" },
        "green.900": { hex: "#051307" },
        "blue.100": { hex: "#f6fafe" },
        "blue.130": { hex: "#f0f7fe" },
        "blue.160": { hex: "#e2f0fd" },
        "blue.200": { hex: "#cde8fd" },
        "blue.230": { hex: "#b2ddfc" },
        "blue.260": { hex: "#94d2fc" },
        "blue.300": { hex: "#66c4fd" },
        "blue.330": { hex: "#2eb6ff" },
        "blue.345": { hex: "#00aafc" },
        "blue.360": { hex: "#0097f2" },
        "blue.400": { hex: "#0082eb" },
        "blue.430": { hex: "#006be7" },
        "blue.460": { hex: "#005cd1" },
        "blue.500": { hex: "#0051b6" },
        "blue.530": { hex: "#00489b" },
        "blue.560": { hex: "#004088" },
        "blue.600": { hex: "#003976" },
        "blue.630": { hex: "#00336a" },
        "blue.660": { hex: "#002d5f" },
        "blue.700": { hex: "#002855" },
        "blue.730": { hex: "#002348" },
        "blue.760": { hex: "#001e3f" },
        "blue.800": { hex: "#001a36" },
        "blue.830": { hex: "#001630" },
        "blue.860": { hex: "#00132b" },
        "blue.900": { hex: "#001024" },
        "teal.100": { hex: "#f4fbfd" },
        "teal.130": { hex: "#e9f9fd" },
        "teal.160": { hex: "#d3f4fb" },
        "teal.200": { hex: "#b1eff9" },
        "teal.230": { hex: "#7ee7f7" },
        "teal.260": { hex: "#5edbef" },
        "teal.300": { hex: "#47cbe2" },
        "teal.330": { hex: "#35bcd5" },
        "teal.345": { hex: "#2eb0c9" },
        "teal.360": { hex: "#289fb6" },
        "teal.400": { hex: "#248da1" },
        "teal.430": { hex: "#207a8d" },
        "teal.460": { hex: "#1b6b7c" },
        "teal.500": { hex: "#175e6d" },
        "teal.530": { hex: "#13525f" },
        "teal.560": { hex: "#0f4954" },
        "teal.600": { hex: "#0c4049" },
        "teal.630": { hex: "#0a3942" },
        "teal.660": { hex: "#08333a" },
        "teal.700": { hex: "#062d34" },
        "teal.730": { hex: "#05272d" },
        "teal.760": { hex: "#042227" },
        "teal.800": { hex: "#031d21" },
        "teal.830": { hex: "#02191d" },
        "teal.860": { hex: "#021619" },
        "teal.900": { hex: "#011215" },
        white: { hex: "#ffffff" },
        "white.100": { hex: "#ffffff", meta: { figma: { ignore: !0 } } },
        "white.130": { hex: "#ffffff", meta: { figma: { ignore: !0 } } },
        "white.160": { hex: "#ffffff", meta: { figma: { ignore: !0 } } },
        "white.200": { hex: "#ffffff", meta: { figma: { ignore: !0 } } },
        "white.230": { hex: "#ffffff", meta: { figma: { ignore: !0 } } },
        "white.260": { hex: "#ffffff", meta: { figma: { ignore: !0 } } },
        "white.300": { hex: "#ffffff", meta: { figma: { ignore: !0 } } },
        "white.330": { hex: "#ffffff", meta: { figma: { ignore: !0 } } },
        "white.345": { hex: "#ffffff", meta: { figma: { ignore: !0 } } },
        "white.360": { hex: "#ffffff", meta: { figma: { ignore: !0 } } },
        "white.400": { hex: "#ffffff", meta: { figma: { ignore: !0 } } },
        "white.430": { hex: "#ffffff", meta: { figma: { ignore: !0 } } },
        "white.460": { hex: "#ffffff", meta: { figma: { ignore: !0 } } },
        "white.500": { hex: "#ffffff" },
        "white.530": { hex: "#e8e8e8", meta: { figma: { ignore: !0 } } },
        "white.560": { hex: "#cfcfcf", meta: { figma: { ignore: !0 } } },
        "white.600": { hex: "#adadad", meta: { figma: { ignore: !0 } } },
        "white.630": { hex: "#969696", meta: { figma: { ignore: !0 } } },
        "white.660": { hex: "#838383", meta: { figma: { ignore: !0 } } },
        "white.700": { hex: "#666666", meta: { figma: { ignore: !0 } } },
        "white.730": { hex: "#5f5f5f", meta: { figma: { ignore: !0 } } },
        "white.760": { hex: "#585858", meta: { figma: { ignore: !0 } } },
        "white.800": { hex: "#4d4d4d", meta: { figma: { ignore: !0 } } },
        "white.830": { hex: "#3b3b3b", meta: { figma: { ignore: !0 } } },
        "white.860": { hex: "#262626", meta: { figma: { ignore: !0 } } },
        "white.900": { hex: "#0d0d0d", meta: { figma: { ignore: !0 } } },
        black: { hex: "#000000" },
        "black.100": { hex: "#f2f2f2", meta: { figma: { ignore: !0 } } },
        "black.130": { hex: "#e8e8e8", meta: { figma: { ignore: !0 } } },
        "black.160": { hex: "#dadada", meta: { figma: { ignore: !0 } } },
        "black.200": { hex: "#cccccc", meta: { figma: { ignore: !0 } } },
        "black.230": { hex: "#bdbdbd", meta: { figma: { ignore: !0 } } },
        "black.260": { hex: "#acacac", meta: { figma: { ignore: !0 } } },
        "black.300": { hex: "#999999", meta: { figma: { ignore: !0 } } },
        "black.330": { hex: "#7a7a7a", meta: { figma: { ignore: !0 } } },
        "black.345": { hex: "#666666", meta: { figma: { ignore: !0 } } },
        "black.360": { hex: "#5c5c5c", meta: { figma: { ignore: !0 } } },
        "black.400": { hex: "#333333", meta: { figma: { ignore: !0 } } },
        "black.430": { hex: "#252525", meta: { figma: { ignore: !0 } } },
        "black.460": { hex: "#141414", meta: { figma: { ignore: !0 } } },
        "black.500": { hex: "#000000" },
        "black.530": { hex: "#000000", meta: { figma: { ignore: !0 } } },
        "black.560": { hex: "#000000", meta: { figma: { ignore: !0 } } },
        "black.600": { hex: "#000000", meta: { figma: { ignore: !0 } } },
        "black.630": { hex: "#000000", meta: { figma: { ignore: !0 } } },
        "black.660": { hex: "#000000", meta: { figma: { ignore: !0 } } },
        "black.700": { hex: "#000000", meta: { figma: { ignore: !0 } } },
        "black.730": { hex: "#000000", meta: { figma: { ignore: !0 } } },
        "black.760": { hex: "#000000", meta: { figma: { ignore: !0 } } },
        "black.800": { hex: "#000000", meta: { figma: { ignore: !0 } } },
        "black.830": { hex: "#000000", meta: { figma: { ignore: !0 } } },
        "black.860": { hex: "#000000", meta: { figma: { ignore: !0 } } },
        "black.900": { hex: "#000000", meta: { figma: { ignore: !0 } } },
        "brand.100": { hex: "#f7f7fe" },
        "brand.130": { hex: "#f0f1fe" },
        "brand.160": { hex: "#e7e9fd" },
        "brand.200": { hex: "#dee0fc" },
        "brand.230": { hex: "#d4d7fc" },
        "brand.260": { hex: "#c9cdfb" },
        "brand.300": { hex: "#bcc1fa" },
        "brand.330": { hex: "#a8aff8" },
        "brand.345": { hex: "#9ba3f7" },
        "brand.360": { hex: "#949cf7" },
        "brand.400": { hex: "#7984f5" },
        "brand.430": { hex: "#707bf4" },
        "brand.460": { hex: "#6571f3" },
        "brand.500": { hex: "#5865f2" },
        "brand.530": { hex: "#505cdc" },
        "brand.560": { hex: "#4752c4" },
        "brand.600": { hex: "#3c45a5" },
        "brand.630": { hex: "#343b8f" },
        "brand.660": { hex: "#2d347d" },
        "brand.700": { hex: "#232861" },
        "brand.730": { hex: "#21265b" },
        "brand.760": { hex: "#1e2353" },
        "brand.800": { hex: "#1a1e49" },
        "brand.830": { hex: "#141738" },
        "brand.860": { hex: "#0d0f24" },
        "brand.900": { hex: "#04050c" },
        "primary.100": { hex: "#f9f9f9" },
        "primary.130": { hex: "#f2f3f5" },
        "primary.160": { hex: "#ebedef" },
        "primary.200": { hex: "#e3e5e8" },
        "primary.230": { hex: "#dbdee1" },
        "primary.260": { hex: "#d2d5d9" },
        "primary.300": { hex: "#c4c9ce" },
        "primary.330": { hex: "#b5bac1" },
        "primary.345": { hex: "#a5abb3" },
        "primary.360": { hex: "#949ba4" },
        "primary.400": { hex: "#80848e" },
        "primary.430": { hex: "#6d6f78" },
        "primary.460": { hex: "#5c5e66" },
        "primary.500": { hex: "#4e5058" },
        "primary.530": { hex: "#41434a" },
        "primary.560": { hex: "#383a40" },
        "primary.600": { hex: "#313338" },
        "primary.630": { hex: "#2b2d31" },
        "primary.645": { hex: "#282a2e" },
        "primary.660": { hex: "#232428" },
        "primary.700": { hex: "#1e1f22" },
        "primary.730": { hex: "#1a1b1e" },
        "primary.760": { hex: "#161719" },
        "primary.800": { hex: "#111214" },
        "primary.830": { hex: "#0c0c0d" },
        "primary.860": { hex: "#060607" },
        "primary.900": { hex: "#020202" },
        "plum.0": { hex: "#f9f9fa" },
        "plum.1": { hex: "#f3f3f4" },
        "plum.2": { hex: "#ecedef" },
        "plum.3": { hex: "#e4e5e8" },
        "plum.4": { hex: "#dddee1" },
        "plum.5": { hex: "#d3d5d9" },
        "plum.6": { hex: "#c7c8ce" },
        "plum.7": { hex: "#b8bac1" },
        "plum.8": { hex: "#a8aab4" },
        "plum.9": { hex: "#9597a3" },
        "plum.10": { hex: "#818491" },
        "plum.11": { hex: "#6c6f7c" },
        "plum.12": { hex: "#5b5e6a" },
        "plum.13": { hex: "#4d505b" },
        "plum.14": { hex: "#41434d" },
        "plum.15": { hex: "#383a43" },
        "plum.16": { hex: "#31323b" },
        "plum.17": { hex: "#2c2d35" },
        "plum.18": { hex: "#26272f" },
        "plum.19": { hex: "#212229" },
        "plum.20": { hex: "#1c1d23" },
        "plum.21": { hex: "#18191f" },
        "plum.22": { hex: "#16161c" },
        "plum.23": { hex: "#131318" },
        "plum.24": { hex: "#0f1014" },
        "plum.25": { hex: "#0c0c10" },
        "plum.26": { hex: "#08080b" },
      };
    },
    602715: function (e, t, n) {
      var r, a;
      n.d(t, {
        V: function () {
          return r;
        },
      }),
        ((a = r || (r = {}))[(a.DISMISSED_IN_GAME_MESSAGE_NUX = 1)] =
          "DISMISSED_IN_GAME_MESSAGE_NUX");
    },
    60179: function (e, t, n) {
      e.exports = {
        button: "button_a467ac",
        default: "default_a467ac",
        filled: "filled_a467ac",
      };
    },
    243014: function (e, t, n) {
      e.exports = {
        streamerModeEnabled: "streamerModeEnabled_c50c8b",
        streamerModeEnabledImage: "streamerModeEnabledImage_c50c8b",
        streamerModeEnabledBtn: "streamerModeEnabledBtn_c50c8b",
        disabled: "disabled_c50c8b",
      };
    },
    681130: function (e, t, n) {
      e.exports = { button: "button_f23d00" };
    },
    841261: function (e, t, n) {
      e.exports = {
        button: "button_a79c58",
        open: "open_a79c58",
        withHighlight: "withHighlight_a79c58",
      };
    },
    147768: function (e, t, n) {
      e.exports = {
        container: "container_b6cd66",
        flexContainer: "flexContainer_b6cd66",
        shrinkingContainer: "shrinkingContainer_b6cd66",
        actions: "actions_b6cd66",
        resetButton: "resetButton_b6cd66",
        message: "message_b6cd66",
      };
    },
    11377: function (e, t, n) {
      e.exports = {
        tabBarItemContainer: "tabBarItemContainer_e7c031",
        searchFilterCount: "searchFilterCount_e7c031",
        searchBar: "searchBar_e7c031",
      };
    },
    156725: function (e, t, n) {
      n.r(
        (e.exports = {
          standardSidebarView: "standardSidebarView_c25c6d",
          withUpsell: "withUpsell_c25c6d",
          sidebarRegion: "sidebarRegion_c25c6d",
          sidebarRegionScroller: "sidebarRegionScroller_c25c6d",
          sidebar: "sidebar_c25c6d",
          mobileSidebar: "mobileSidebar_c25c6d",
          contentTransitionWrap: "contentTransitionWrap_c25c6d",
          contentRegionScroller: "contentRegionScroller_c25c6d",
          toolsContainer: "toolsContainer_c25c6d",
          tools: "tools_c25c6d",
          contentRegionHiddenSidebar: "contentRegionHiddenSidebar_c25c6d",
          contentRegionShownSidebar: "contentRegionShownSidebar_c25c6d",
          contentRegion: "contentRegion_c25c6d",
          customColumn: "customColumn_c25c6d",
          contentColumn: "contentColumn_c25c6d",
          contentColumnWide: "contentColumnWide_c25c6d",
          contentColumnDefault: "contentColumnDefault_c25c6d",
          contentColumnMinimal: "contentColumnMinimal_c25c6d",
          customHeader: "customHeader_c25c6d",
          customContainer: "customContainer_c25c6d",
          customScroller: "customScroller_c25c6d",
          noticeRegion: "noticeRegion_c25c6d",
          noticeRegionHiddenSidebar: "noticeRegionHiddenSidebar_c25c6d",
          mobileSidebarTools: "mobileSidebarTools_c25c6d",
          flexFullWidth: "flexFullWidth_c25c6d",
          hidden: "hidden_c25c6d",
          mobileContent: "mobileContent_c25c6d",
          mobileContentHeader: "mobileContentHeader_c25c6d",
          hideHamburger: "hideHamburger_c25c6d",
          mobileToolsContainer: "mobileToolsContainer_c25c6d",
          closeIconOnly: "closeIconOnly_c25c6d",
          isMobileAndroid: "isMobileAndroid_c25c6d",
          mobileToolsCloseIcon: "mobileToolsCloseIcon_c25c6d",
          mobileSidebarHeader: "mobileSidebarHeader_c25c6d",
        }),
      );
    },
    207341: function (e, t, n) {
      e.exports = {
        hoverRoll: "hoverRoll_e07331",
        forceHover: "forceHover_e07331",
        disabled: "disabled_e07331",
        default: "default_e07331",
        hovered: "hovered_e07331",
      };
    },
    355750: function (e, t, n) {
      e.exports = {
        locatorEntry: "locatorEntry_f63175",
        entryAuthor: "entryAuthor_f63175",
      };
    },
    768452: function (e, t, n) {
      e.exports = {
        content: "content_e5c341",
        cell: "cell_e5c341",
        cellType: "cellType_e5c341",
        cellCount: "cellCount_e5c341",
      };
    },
    353947: function (e, t, n) {
      e.exports = { title: "title_eaa702" };
    },
    622331: function (e, t, n) {
      e.exports = {
        container: "container_d69a57",
        resizeHandle: "resizeHandle_d69a57",
        sidebarContent: "sidebarContent_d69a57",
        mobileHeaderCollapsed: "mobileHeaderCollapsed_d69a57",
        mobileContainerExpanded: "mobileContainerExpanded_d69a57",
        layerContainer: "layerContainer_d69a57",
      };
    },
    627277: function (e, t, n) {
      e.exports = {
        inspectorContainer: "inspectorContainer_c9d7a3",
        traceContainer: "traceContainer_c9d7a3",
        traceItem: "traceItem_c9d7a3",
        violationList: "violationList_c9d7a3",
      };
    },
    14136: function (e, t, n) {
      e.exports = {
        row: "row_c76498",
        userCell: "userCell_c76498",
        affinityCell: "affinityCell_c76498",
      };
    },
    574001: function (e, t, n) {
      e.exports = {
        panel: "panel_c2734c",
        subPanel: "subPanel_c2734c",
        toolbar: "toolbar_c2734c",
        toolbarButton: "toolbarButton_c2734c",
        toolbarDivider: "toolbarDivider_c2734c",
        filters: "filters_c2734c",
        filter: "filter_c2734c",
        activeFilter: "activeFilter_c2734c",
        eventColumn: "eventColumn_c2734c",
        locationColumn: "locationColumn_c2734c",
        subPanelHeaderBar: "subPanelHeaderBar_c2734c",
        commonProperties: "commonProperties_c2734c",
        customPropertiesContainer: "customPropertiesContainer_c2734c",
        customPropertiesName: "customPropertiesName_c2734c",
        customPropertiesValue: "customPropertiesValue_c2734c",
        emptyProperty: "emptyProperty_c2734c",
        searchBar: "searchBar_c2734c",
        triggersEnable: "triggersEnable_c2734c",
      };
    },
    785287: function (e, t, n) {
      e.exports = { panel: "panel_a03d84" };
    },
    806714: function (e, t, n) {
      e.exports = {
        panel: "panel_bcec8d",
        tabBar: "tabBar_bcec8d",
        tab: "tab_bcec8d",
        toolbar: "toolbar_bcec8d",
        toolbarThemeSelector: "toolbarThemeSelector_bcec8d",
        toolbarButtons: "toolbarButtons_bcec8d",
        colorPreview: "colorPreview_bcec8d",
        overrides: "overrides_bcec8d",
        override: "override_bcec8d",
        overrideContent: "overrideContent_bcec8d",
        rawOverrides: "rawOverrides_bcec8d",
        colorInput: "colorInput_bcec8d",
        opacityInput: "opacityInput_bcec8d",
        semanticOverride: "semanticOverride_bcec8d",
        overrideHeader: "overrideHeader_bcec8d",
        title: "title_bcec8d",
        titleWithIcon: "titleWithIcon_bcec8d",
        overrideHeading: "overrideHeading_bcec8d",
        clickabeIcon: "clickabeIcon_bcec8d",
        removeOverride: "removeOverride_bcec8d",
        divider: "divider_bcec8d",
        formItem: "formItem_bcec8d",
        paletteSettings: "paletteSettings_bcec8d",
        section: "section_bcec8d",
        paletteOverrides: "paletteOverrides_bcec8d",
        palettePreview: "palettePreview_bcec8d",
      };
    },
    638135: function (e, t, n) {
      e.exports = {
        button: "button_a46444",
        container: "container_a46444",
        rowsContainer: "rowsContainer_a46444",
      };
    },
    246195: function (e, t, n) {
      e.exports = {
        panel: "panel_d5d68c",
        toolbar: "toolbar_d5d68c",
        searchBar: "searchBar_d5d68c",
        actionColumn: "actionColumn_d5d68c",
        totalTimeColumn: "totalTimeColumn_d5d68c",
        subPanel: "subPanel_d5d68c",
        subPanelHeaderBar: "subPanelHeaderBar_d5d68c",
        inspectorContainer: "inspectorContainer_d5d68c",
        actionProperties: "actionProperties_d5d68c",
        errorIcon: "errorIcon_d5d68c",
        errorToolbar: "errorToolbar_d5d68c",
      };
    },
    124849: function (e, t, n) {
      e.exports = { panel: "panel_a28317" };
    },
    501775: function (e, t, n) {
      e.exports = {
        container: "container_a261a0",
        formElement: "formElement_a261a0",
        formRow: "formRow_a261a0",
        formDividerTitle: "formDividerTitle_a261a0",
      };
    },
    756192: function (e, t, n) {
      e.exports = { panel: "panel_d59bf9", switch: "switch_d59bf9" };
    },
    128374: function (e, t, n) {
      e.exports = {
        switch: "switch_e3bb71",
        panel: "panel_e3bb71",
        divider: "divider_e3bb71",
        inGameNuxContainer: "inGameNuxContainer_e3bb71",
        search: "search_e3bb71",
      };
    },
    980361: function (e, t, n) {
      e.exports = {
        panel: "panel_a8c982",
        panelGroup: "panelGroup_a8c982",
        bottomPanelButton: "bottomPanelButton_a8c982",
        topPanelToggle: "topPanelToggle_a8c982",
        secondaryInfoText: "secondaryInfoText_a8c982",
      };
    },
    373839: function (e, t, n) {
      e.exports = {
        container: "container_c3d7aa",
        formElement: "formElement_c3d7aa",
      };
    },
    644715: function (e, t, n) {
      e.exports = {
        icon: "icon_d2f4d0",
        iconOuter: "iconOuter_d2f4d0",
        iconCheck: "iconCheck_d2f4d0",
        iconCross: "iconCross_d2f4d0",
        scope: "scope_d2f4d0",
        scopeInner: "scopeInner_d2f4d0",
        panel: "panel_d2f4d0",
        panelInner: "panelInner_d2f4d0",
        section: "section_d2f4d0",
      };
    },
    820756: function (e, t, n) {
      e.exports = { buttonsContainer: "buttonsContainer_cd92e9" };
    },
    219299: function (e, t, n) {
      e.exports = {
        panel: "panel_a6b188",
        headerBar: "headerBar_a6b188",
        headerTitle: "headerTitle_a6b188",
        inspectorWrapper: "inspectorWrapper_a6b188",
        tabBar: "tabBar_a6b188",
        tabItem: "tabItem_a6b188",
        selected: "selected_a6b188",
        overflowChevron: "overflowChevron_a6b188",
        tableContainer: "tableContainer_a6b188",
        table: "table_a6b188",
        tableHeader: "tableHeader_a6b188",
        tableRow: "tableRow_a6b188",
        selectedTableRow: "selectedTableRow_a6b188",
        properties: "properties_a6b188",
        propertyName: "propertyName_a6b188",
        toolbar: "toolbar_a6b188",
        toolbarGroup: "toolbarGroup_a6b188",
        toolbarButton: "toolbarButton_a6b188",
        premiumStreakOverride: "premiumStreakOverride_a6b188",
      };
    },
    152622: function (e, t, n) {
      e.exports = {
        panel: "panel_f511f4",
        toolbar: "toolbar_f511f4",
        searchBar: "searchBar_f511f4",
        subPanel: "subPanel_f511f4",
        subPanelHeaderBar: "subPanelHeaderBar_f511f4",
        inspectorContainer: "inspectorContainer_f511f4",
      };
    },
    354211: function (e, t, n) {
      e.exports = {
        container: "container_accdc4",
        resizeHandle: "resizeHandle_accdc4",
        subPanelContent: "subPanelContent_accdc4",
      };
    },
    423705: function (e, t, n) {
      e.exports = {
        panelInner: "panelInner_a12ab2",
        section: "section_a12ab2",
        buttons: "buttons_a12ab2",
        inputRow: "inputRow_a12ab2",
        input: "input_a12ab2",
        card: "card_a12ab2",
        badgeContainer: "badgeContainer_a12ab2",
        badge: "badge_a12ab2",
        clickable: "clickable_a12ab2",
        acked: "acked_a12ab2",
        expired: "expired_a12ab2",
        redeemed: "redeemed_a12ab2",
        row: "row_a12ab2",
        nameRow: "nameRow_a12ab2",
        trashIcon: "trashIcon_a12ab2",
        idRow: "idRow_a12ab2",
        icon: "icon_a12ab2",
        discount: "discount_a12ab2",
        noMargin: "noMargin_a12ab2",
        gradientWrapperTier0: "gradientWrapperTier0_a12ab2",
        gradientWrapperTier2: "gradientWrapperTier2_a12ab2",
        loadingContainer: "loadingContainer_a12ab2",
        isLoading: "isLoading_a12ab2",
      };
    },
    404934: function (e, t, n) {
      e.exports = {
        select: "select_fbe7b1",
        error: "error_fbe7b1",
        errorMessage: "errorMessage_fbe7b1",
      };
    },
    169528: function (e, t, n) {
      e.exports = { container: "container_e39b68", body: "body_e39b68" };
    },
    873198: function (e, t, n) {
      e.exports = { emojiIcon: "emojiIcon_e6e8e8" };
    },
    681027: function (e, t, n) {
      e.exports = { icon: "icon_acc5ff" };
    },
    915938: function (e, t, n) {
      e.exports = {
        yellowMessageBlock: "yellowMessageBlock_b74455 messageBlock_b74455",
        messageBlockIcon: "messageBlockIcon_b74455",
        redMessageBlock: "redMessageBlock_b74455 messageBlock_b74455",
        brownMessageBlock: "brownMessageBlock_b74455 messageBlock_b74455",
      };
    },
    391317: function (e, t, n) {
      e.exports = { container: "container_f8690a" };
    },
    848435: function (e, t, n) {
      e.exports = {
        container: "container_e08e86",
        innerContainer: "innerContainer_e08e86",
        iconWrapper: "iconWrapper_e08e86",
        star: "star_e08e86",
        sparkle: "sparkle_e08e86",
      };
    },
    861277: function (e, t, n) {
      e.exports = {
        statusWarningBlock: "statusWarningBlock_e45fae",
        statusWarningBlockWithCta: "statusWarningBlockWithCta_e45fae",
        horizontalStatusWarningBlock: "horizontalStatusWarningBlock_e45fae",
        verticalStatusWarningBlock: "verticalStatusWarningBlock_e45fae",
        ctaButtonContainer: "ctaButtonContainer_e45fae",
        ctaButton: "ctaButton_e45fae",
        ctaBlackButton: "ctaBlackButton_e45fae",
        ctaButtonText: "ctaButtonText_e45fae",
      };
    },
    207533: function (e, t, n) {
      e.exports = {
        markdown: "markdown_b97ce2",
        blockquote: "blockquote_b97ce2",
        codeInline: "codeInline_b97ce2",
        paragraph: "paragraph_b97ce2",
      };
    },
    526207: function (e, t, n) {
      n.r(
        (e.exports = {
          badgeIconPrivateMessages: "badgeIconPrivateMessages_d98ec4",
          badgeIconSettingsMenu: "badgeIconSettingsMenu_d98ec4",
        }),
      );
    },
    742774: function (e, t, n) {
      e.exports = {
        premiumTrialBadge: "premiumTrialBadge_b089d3",
        premiumTrialBadgeIcon: "premiumTrialBadgeIcon_b089d3",
        premiumTrialTier0UnacknowledgedBadge:
          "premiumTrialTier0UnacknowledgedBadge_b089d3",
        premiumTrialTier2UnacknowledgedBadge:
          "premiumTrialTier2UnacknowledgedBadge_b089d3",
        premiumDiscountUnacknowledgedBadge:
          "premiumDiscountUnacknowledgedBadge_b089d3",
        premiumTrialAcknowledgedBadge: "premiumTrialAcknowledgedBadge_b089d3",
        premiumTrialBadgeSelected: "premiumTrialBadgeSelected_b089d3",
        premiumOfferBadgeCopy: "premiumOfferBadgeCopy_b089d3",
      };
    },
    704448: function (e, t, n) {
      e.exports = {
        badgeContainer: "badgeContainer_b7316a",
        newBadge: "newBadge_b7316a",
        star: "star_b7316a",
        starLeft: "starLeft_b7316a",
        starRight: "starRight_b7316a",
      };
    },
    30352: function (e, t, n) {
      e.exports = {
        result: "result_e3c1c6",
        contentUnread: "contentUnread_e3c1c6 content_e3c1c6",
        contentDefault: "contentDefault_e3c1c6 content_e3c1c6",
        voiceSummaryContainer: "voiceSummaryContainer_e3c1c6",
        iconContainer: "iconContainer_e3c1c6",
        gameIcon: "gameIcon_e3c1c6",
        gameIconSize: "gameIconSize_e3c1c6",
        icon: "icon_e3c1c6",
        name: "name_e3c1c6",
        misc: "misc_e3c1c6",
        match: "match_e3c1c6",
        badge: "badge_e3c1c6",
        note: "note_e3c1c6",
        username: "username_e3c1c6",
        header: "header_e3c1c6",
        guildIconContainer: "guildIconContainer_e3c1c6 iconContainer_e3c1c6",
        guildIcon: "guildIcon_e3c1c6",
        dmIconContainer: "dmIconContainer_e3c1c6 iconContainer_e3c1c6",
        score: "score_e3c1c6",
      };
    },
    655580: function (e, t, n) {
      e.exports = {
        premiumLabel: "premiumLabel_ae3c77",
        selected: "selected_ae3c77",
        background: "background_ae3c77",
        selectedBackground: "selectedBackground_ae3c77",
        auPromo: "auPromo_ae3c77",
        auPromoSelected: "auPromoSelected_ae3c77",
      };
    },
    869042: function (e, t, n) {
      n.r((e.exports = { card: "card_ffe375", active: "active_ffe375" }));
    },
  },
]);
//# sourceMappingURL=eaf4104d2a2a81cf3ff7.js.map
