"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["1009"],
  {
    775322: function (e) {
      e.exports = "/assets/e5e07cf5a6e7f19be45b.svg";
    },
    853453: function (e) {
      e.exports = "/assets/3cfc93ceb08d74acbcf8.svg";
    },
    963886: function (e, t, n) {
      n.d(t, {
        E: function () {
          return l;
        },
      });
      var r = n(200651);
      n(192379);
      var a = n(481060);
      function l(e) {
        (0, a.openModalLazy)(
          async () => {
            let { default: e } = await n.e("33811").then(n.bind(n, 986741));
            return (t) => (0, r.jsx)(e, { ...t });
          },
          { onCloseCallback: e },
        );
      }
    },
    570928: function (e, t, n) {
      var r,
        a,
        l,
        i,
        o = n(200651),
        s = n(192379),
        c = n(120356),
        d = n.n(c),
        u = n(971139);
      class m extends (i = s.PureComponent) {
        render() {
          let {
            tag: e,
            children: t,
            hoverText: n,
            className: r,
            forceHover: a,
            ...l
          } = this.props;
          return (0, o.jsxs)("div", {
            ...l,
            className: d()(r, u.hoverRoll, {
              [u.disabled]: null == n,
              [u.forceHover]: a,
            }),
            children: [
              (0, o.jsx)(e, { className: u.hovered, children: n }),
              (0, o.jsx)(e, { className: u.default, children: t }),
            ],
          });
        }
      }
      (l = { tag: "div", forceHover: !1 }),
        (a = "defaultProps") in (r = m)
          ? Object.defineProperty(r, a, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (r[a] = l),
        (t.Z = m);
    },
    110478: function (e, t, n) {
      n.d(t, {
        N: function () {
          return l;
        },
      });
      var r = n(200651);
      n(192379);
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
    650613: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return b;
        },
      }),
        n(47120),
        n(390547);
      var r = n(200651),
        a = n(442837),
        l = n(481060),
        i = n(100527),
        o = n(171368),
        s = n(594174),
        c = n(719247),
        d = n(71585),
        u = n(146282),
        m = n(897674),
        h = n(561308),
        x = n(206583),
        f = n(44529);
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
                  if (!(0, m.g)(n, t)) return [];
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
                        (0, h.n2)(t) &&
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
          return Z;
        },
      }),
        n(47120);
      var r = n(200651),
        a = n(192379),
        l = n(120356),
        i = n.n(l),
        o = n(392711),
        s = n.n(o),
        c = n(876215),
        d = n(126313),
        u = n(442837),
        m = n(433517),
        h = n(481060),
        x = n(570140),
        f = n(812206),
        p = n(835473),
        b = n(681619),
        g = n(810568),
        v = n(168524),
        j = n(77498),
        C = n(823379),
        T = n(71585),
        _ = n(146282),
        S = n(650613),
        y = n(789086),
        N = n(206583),
        k = n(298149),
        E = n(941469);
      let I = [
        {
          key: "type",
          cellClassName: i()(k.cell, k.cellType),
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
          cellClassName: i()(k.cell, k.cellCount),
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
          cellClassName: k.cell,
          render(e) {
            let { type: t } = e;
            return (0, r.jsx)(w, { type: t });
          },
        },
      ];
      function w(e) {
        var t, n;
        let { type: a } = e,
          l = (0, u.e7)([_.Z], () => _.Z.getFilters()),
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
              ? x.Z.dispatch({
                  type: "CONTENT_INVENTORY_SET_FILTERS",
                  filters: void 0,
                })
              : x.Z.dispatch({
                  type: "CONTENT_INVENTORY_SET_FILTERS",
                  filters: { types: new Set([a]) },
                });
          },
        });
      }
      function Z() {
        var e, t;
        let n = (0, u.e7)([_.Z], () => _.Z.getFeed(N.YN.GLOBAL_FEED)),
          l = (0, u.e7)([_.Z], () => _.Z.getDebugImpressionCappingDisabled()),
          o = (0, u.e7)([T.Z], () =>
            T.Z.getDebugFastImpressionCappingEnabled(),
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
          w = (0, u.e7)([_.Z], () => {
            var e;
            return (
              (null === (e = _.Z.getFeedState(N.YN.GLOBAL_FEED)) || void 0 === e
                ? void 0
                : e.loading) === !0
            );
          }),
          [Z, O] = a.useState(""),
          B = (0, u.e7)(
            [j.Z, f.Z],
            () => {
              var e, t, n;
              return parseInt(Z) > 0
                ? Z
                : null !==
                      (n =
                        null === (e = j.Z.getGameByName(Z)) || void 0 === e
                          ? void 0
                          : e.id) && void 0 !== n
                  ? n
                  : null === (t = f.Z.getApplicationByName(Z)) || void 0 === t
                    ? void 0
                    : t.id;
            },
            [Z],
          ),
          P = (0, v.Z)({
            applicationId: B,
            location: "DevToolsContentInventory",
            source: g.m1.DevTools,
          }),
          L = Object.entries(
            null !== (t = m.K.get("GameProfileModal")) && void 0 !== t ? t : {},
          )
            .filter((e) => {
              let [t, n] = e;
              return n;
            })
            .map((e) => {
              let [t] = e;
              return t;
            }),
          A = (0, p.Z)(L).filter(C.lm);
        return (0, r.jsx)("div", {
          className: i()(E.panel),
          children: (0, r.jsxs)(h.ScrollerThin, {
            className: k.content,
            children: [
              (0, r.jsxs)(h.FormSection, {
                children: [
                  (0, r.jsx)(h.FormTitle, { children: "Inventory" }),
                  c.length > 0 && (0, r.jsx)(b.Z, { columns: I, data: c }),
                  (0, r.jsx)(h.Spacer, { size: 8 }),
                  (0, r.jsx)(y.Z, {}),
                  (0, r.jsx)(h.Button, {
                    fullWidth: !0,
                    onClick: function () {
                      x.Z.dispatch({
                        type: "CONTENT_INVENTORY_MANUAL_REFRESH",
                        feedId: N.YN.GLOBAL_FEED,
                        feature: d.L.INBOX,
                      });
                    },
                    submitting: w,
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
                      x.Z.dispatch({
                        type: "CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS",
                      });
                    },
                    children: "Clear Impressions",
                  }),
                  (0, r.jsx)(h.Spacer, { size: 8 }),
                  (0, r.jsx)(h.Button, {
                    fullWidth: !0,
                    onClick: function () {
                      x.Z.dispatch({
                        type: "CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS",
                      });
                    },
                    children: "Log Impressions",
                  }),
                  (0, r.jsx)(h.Spacer, { size: 8 }),
                  (0, r.jsx)(h.Button, {
                    fullWidth: !0,
                    onClick: function () {
                      x.Z.dispatch({
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
                      x.Z.dispatch({
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
                    onChange: (e) => (0 === e.length || e.length >= 18) && O(e),
                    onKeyDown: (e) => {
                      "Enter" === e.key &&
                        (Z === e.currentTarget.value
                          ? null == P || P(e)
                          : O(e.currentTarget.value));
                    },
                    error:
                      Z.length > 0 && null == P
                        ? "No game profile for ".concat(
                            null != B ? B : Z + " - try by id",
                            ".",
                          )
                        : void 0,
                    style: null != P ? { border: "1px solid green" } : {},
                  }),
                  (0, r.jsx)("ul", {
                    children: A.map((e) =>
                      (0, r.jsx)(
                        "li",
                        { children: (0, r.jsx)(R, { application: e }) },
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
      let R = (e) => {
        let { application: t } = e,
          n = (0, v.Z)({
            applicationId: t.id,
            location: "DevToolsContentInventory",
            source: g.m1.DevTools,
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
      var r = n(200651),
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
    120816: function (e, t, n) {
      n(653041), n(47120);
      var r,
        a,
        l,
        i,
        o = n(772848),
        s = n(756647),
        c = n(442837),
        d = n(570140),
        u = n(314897),
        m = n(906467);
      let h = 0,
        x = [],
        f = 0,
        p = [],
        b = !1;
      class g extends (r = c.ZP.Store) {
        initialize() {
          this.waitFor(m.Z);
        }
        get loggedEvents() {
          return x;
        }
        get loggedEventsVersion() {
          return f;
        }
        get loggedTriggers() {
          return p;
        }
        get trackTriggers() {
          return b;
        }
      }
      (i = "AnalyticsLogStore"),
        (l = "displayName") in (a = g)
          ? Object.defineProperty(a, l, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (a[l] = i),
        (t.Z = new g(d.Z, {
          TRACK: function (e) {
            let { event: t, properties: n, fingerprint: r } = e;
            if (m.Z.isDeveloper) {
              var a;
              x.push({
                key: (h++).toString(),
                event: t,
                properties: n,
                fingerprint: null != (a = r) ? (0, s.s)(a) : u.default.getId(),
                timestamp: new Date(),
              }),
                f++,
                x.length > 500 && (x = x.slice(-Math.floor(250)));
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
            if (!!m.Z.isDeveloper)
              b &&
                (p = [
                  ...p,
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
                p.shift();
          },
          SET_TRACK_TRIGGERS: function (e) {
            let { enabled: t } = e;
            b = t;
          },
          ANALYTICS_LOG_CLEAR: function () {
            (x = []), f++, (p = []);
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
            return ee;
          },
        }),
        n(653041),
        n(47120);
      var r = n(200651),
        a = n(192379),
        l = n(120356),
        i = n.n(l),
        o = n(990547),
        s = n(442837),
        c = n(481060),
        d = n(347469),
        u = n(213609),
        m = n(213713),
        h = n(665149),
        x = n(906467),
        f = n(259580),
        p = n(31336),
        b = n(19759),
        g = n(432877);
      n(381996);
      var v = n(392750),
        j = n(926976),
        C = n(592197),
        T = n(806240),
        _ = n(789654),
        S = n(719672),
        y = n(691867),
        N = n(916790),
        k = n(645973),
        E = n(903502),
        I = n(912072),
        w = n(272193),
        Z = n(735959),
        R = n(246992),
        O = n(496025),
        B = n(442954),
        P = n(633001),
        L = n(702904),
        A = n(178821),
        D = n(248526),
        F = n(958328),
        M = n(315384),
        H = n(514866),
        G = n(678639),
        U = n(351930),
        z = n(771751),
        V = n(596768),
        W = n(621060),
        K = n(388032),
        Y = n(771466),
        X = n(941469);
      function q(e) {
        let { resizableNode: t, onResize: n, onResizeEnd: a } = e,
          l = (0, d.Z)({
            minDimension: b.h,
            resizableDomNodeRef: t,
            onElementResize: n,
            onElementResizeEnd: a,
            orientation: d.y.HORIZONTAL_LEFT,
          });
        return (0, r.jsx)("div", { onMouseDown: l, className: Y.resizeHandle });
      }
      function $() {
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
                render: () => (0, r.jsx)(V.Z, {}),
              },
              {
                id: "stores",
                name: "Stores",
                render: () => (0, r.jsx)(G.Z, {}),
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
                  render: () => (0, r.jsx)(H.Z, {}),
                }),
                e.push({
                  id: "perks_demos",
                  name: "Perks Demos",
                  render: () => (0, r.jsx)(D.Z, {}),
                })),
              x.Z.isDeveloper &&
                (e.push({
                  id: "end_to_end_encryption",
                  name: "E2EE",
                  render: () => (0, r.jsx)(k.Z, {}),
                }),
                e.push({
                  id: "clans",
                  name: "Clans",
                  render: () => (0, r.jsx)(T.Z, {}),
                }),
                e.push({
                  id: "performance",
                  name: "Performance",
                  render: () => (0, r.jsx)(A.Z, {}),
                }),
                e.push({
                  id: "feedback",
                  name: "Feedback",
                  render: () => (0, r.jsx)(E.Z, {}),
                }),
                e.push({
                  id: "overlay",
                  name: "Overlay v3",
                  render: () => (0, r.jsx)(P.Z, {}),
                })),
              e.push({
                id: "intl",
                name: "Intl",
                render: () => (0, r.jsx)(Z.Z, {}),
              }),
              e.push({
                id: "colors",
                name: "Colors",
                render: () => (0, r.jsx)(_.Z, {}),
              }),
              e.push({
                id: "design_toggles",
                name: "Design Toggles",
                render: () => (0, r.jsx)(y.Z, {}),
              }),
              e.push({
                id: "overlays",
                name: "Dev Overlays",
                render: () =>
                  (0, r.jsx)(I.Z, { devSettingsCategory: g.zU.OVERLAYS }),
              }),
              e.push({
                id: "messaging",
                name: "Messaging",
                render: () => (0, r.jsx)(O.Z, {}),
              }),
              e.push({
                id: "reporting",
                name: "Reporting",
                render: () =>
                  (0, r.jsx)(I.Z, { devSettingsCategory: g.zU.REPORTING }),
              }),
              e.push({
                id: "permissions",
                name: "Permissions",
                render: () => (0, r.jsx)(F.Z, {}),
              }),
              e.push({
                id: "modals",
                name: "Modals",
                render: () => (0, r.jsx)(B.Z, {}),
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
                  render: () => (0, r.jsx)(m.Z, {}),
                }),
              e.push({
                id: "dcf",
                name: "DCF",
                render: () => (0, r.jsx)(S.Z, {}),
              }),
              e.push({
                id: "potions",
                name: "Potions",
                render: () => (0, r.jsx)(M.Z, {}),
              }),
              window.GLOBAL_ENV.RELEASE_CHANNEL.startsWith("staging") &&
                (e.push({
                  id: "trials",
                  name: "Trials",
                  render: () => (0, r.jsx)(z.Z, {}),
                }),
                e.push({
                  id: "payments",
                  name: "Payments",
                  render: () => (0, r.jsx)(L.Z, {}),
                }),
                e.push({
                  id: "subscriptions",
                  name: "Subscriptions",
                  render: () => (0, r.jsx)(U.Z, {}),
                }),
                e.push({
                  id: "billing",
                  name: "Billing",
                  render: () => (0, r.jsx)(C.Z, {}),
                })),
              e.push({
                id: "gifting_intent",
                name: "Gifting Intent",
                render: () => (0, r.jsx)(w.Z, {}),
              }),
              e
            );
          }, []),
          {
            TabBar: n,
            renderSelectedTab: l,
            selectedTabId: i,
          } = (0, W.Z)(
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
          (0, r.jsxs)(R.Gk, {
            children: [
              (0, r.jsxs)(h.ZP, {
                className: X.headerBar,
                toolbar: (0, r.jsx)(h.ZP.Icon, {
                  icon: c.XSmallIcon,
                  tooltip: K.intl.string(K.t.cpT0Cg),
                  onClick: p.SO,
                }),
                children: [
                  (0, r.jsx)(h.ZP.Icon, {
                    icon: c.StaffBadgeIcon,
                    tooltip: "DevTools",
                  }),
                  (0, r.jsx)(h.ZP.Title, { children: "DevTools" }),
                ],
              }),
              (0, r.jsx)(n, {}),
              l(),
              (0, r.jsx)(R.Br, { className: Y.layerContainer }),
            ],
          })
        );
      }
      function J() {
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
              className: i()(Y.container),
              style: { minWidth: b.h, width: n },
              "data-app-right-panel": !0,
              children: [
                (0, r.jsx)(q, {
                  resizableNode: e,
                  onResize: l,
                  onResizeEnd: o,
                }),
                (0, r.jsx)("div", {
                  className: Y.sidebarContent,
                  children: (0, r.jsx)($, {}),
                }),
              ],
            });
      }
      function Q() {
        let e = (0, s.e7)([b.Z], () => b.Z.displayTools);
        return e
          ? (0, r.jsx)("div", {
              className: i()(Y.container, Y.mobileContainerExpanded),
              children: (0, r.jsx)("div", {
                className: Y.sidebarContent,
                children: (0, r.jsx)($, {}),
              }),
            })
          : (0, r.jsx)("div", {
              className: Y.container,
              children: (0, r.jsx)(c.Clickable, {
                onClick: p.SO,
                children: (0, r.jsxs)(h.ZP, {
                  className: i()(X.headerBar, Y.mobileHeaderCollapsed),
                  toolbar: (0, r.jsx)(f.Z, { direction: f.Z.Directions.UP }),
                  children: [
                    (0, r.jsx)(h.ZP.Icon, {
                      icon: c.StaffBadgeIcon,
                      tooltip: "DevTools",
                    }),
                    (0, r.jsx)(h.ZP.Title, { children: "DevTools" }),
                  ],
                }),
              }),
            });
      }
      function ee(e) {
        let { mobile: t } = e;
        return t ? (0, r.jsx)(Q, {}) : (0, r.jsx)(J, {});
      }
    },
    381996: function (e, t, n) {
      n(47120),
        n(200651),
        n(192379),
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
        n(725217),
        n(941469);
    },
    392750: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var r = n(200651);
      n(192379);
      var a = n(442837),
        l = n(814443),
        i = n(594174),
        o = n(681619),
        s = n(299205),
        c = n(941469);
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
      var r = n(200651),
        a = n(192379),
        l = n(120356),
        i = n.n(l),
        o = n(392711),
        s = n(913527),
        c = n.n(s),
        d = n(442837),
        u = n(481060),
        m = n(129861),
        h = n(665149),
        x = n(301801),
        f = n(594174),
        p = n(55935),
        b = n(120816),
        g = n(31336),
        v = n(257785),
        j = n(484036),
        C = n(681619),
        T = n(621060),
        _ = n(388032),
        S = n(931933),
        y = n(941469);
      let N = [
        {
          key: "event",
          cellClassName: S.eventColumn,
          render(e) {
            let { event: t } = e;
            return t;
          },
        },
        {
          key: "location",
          cellClassName: S.locationColumn,
          render(e) {
            let { properties: t } = e;
            return null == t.location ? null : t.location;
          },
        },
      ];
      function k(e) {
        let { children: t } = e;
        return (0, r.jsx)(u.ScrollerThin, {
          className: S.customPropertiesContainer,
          children: (0, r.jsx)("dl", { children: t }),
        });
      }
      function E(e) {
        let { name: t, children: n } = e;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)("dt", {
              className: S.customPropertiesName,
              children: t,
            }),
            (0, r.jsx)("dd", {
              className: S.customPropertiesValue,
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
                  (0, r.jsxs)(h.ZP, {
                    className: i()(y.headerBar, S.subPanelHeaderBar),
                    children: [
                      (0, r.jsx)(h.ZP.Icon, {
                        icon: u.AnalyticsIcon,
                        tooltip: t,
                      }),
                      (0, r.jsx)(h.ZP.Title, {
                        wrapperClassName: y.headerTitle,
                        children: t,
                      }),
                      (0, r.jsx)(h.ZP.Icon, {
                        icon: u.CircleXIcon,
                        tooltip: "Close",
                        onClick: o,
                      }),
                    ],
                  }),
                  (0, r.jsxs)(v.E, {
                    className: S.commonProperties,
                    children: [
                      (0, r.jsx)(v.Z9, {
                        name: "Timestamp (local)",
                        children: (0, r.jsxs)("time", {
                          dateTime: a.toISOString(),
                          title: (0, p.vc)(d, "LLLL"),
                          children: [c().locale(), (0, p.Y4)(d)],
                        }),
                      }),
                      null != s &&
                        (0, r.jsx)(v.Z9, {
                          name: "User",
                          children: (0, r.jsx)(m.Z, { user: s }),
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
                        E,
                        {
                          name: "".concat(t, ":"),
                          children:
                            null != n
                              ? (0, r.jsx)("code", {
                                  children: JSON.stringify(n),
                                })
                              : (0, r.jsx)("code", {
                                  className: S.emptyProperty,
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
        w = {
          events: {
            label: "Events",
            filter: (e) =>
              Object.entries(w)
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
          l = (0, d.e7)([b.Z], () => b.Z.loggedEventsVersion),
          s = a.useMemo(() => b.Z.loggedEvents, [l]),
          [c, m] = a.useState(Object.keys(w)),
          [h, f] = a.useState(s),
          p = a.useRef(null),
          v = a.useMemo(
            () =>
              (0, o.throttle)(
                async (e, t) => {
                  if ("" === e) {
                    f(t);
                    return;
                  }
                  p.current = (0, o.uniqueId)();
                  let n = await (0, x.H)(
                    t,
                    (e) => {
                      let { event: t } = e;
                      return t;
                    },
                    e,
                    !0,
                  );
                  if (null != p.current) f(n);
                },
                300,
                { leading: !0 },
              ),
            [],
          ),
          k = a.useMemo(
            () =>
              h.filter((e) => {
                for (let t of c) if (w[t].filter(e)) return !0;
                return !1;
              }),
            [h, c],
          );
        a.useEffect(() => {
          v(t, s);
        }, [t, v, s]);
        let [E, Z] = a.useState(void 0),
          R = k.find((e) => e.key === E),
          { TabBar: O, renderSelectedTab: B } = (0, T.Z)({ tabs: I }, []);
        return (0, r.jsxs)("div", {
          ref: e,
          className: i()(y.panel, S.panel),
          children: [
            (0, r.jsxs)("div", {
              className: S.toolbar,
              children: [
                (0, r.jsx)(u.Button, {
                  className: S.toolbarButton,
                  look: u.Button.Looks.BLANK,
                  size: u.Button.Sizes.ICON,
                  onClick: g.Zw,
                  children: (0, r.jsx)("span", {
                    title: _.intl.string(_.t.VkKicX),
                    children: (0, r.jsx)(u.TrashIcon, {
                      size: "md",
                      color: "currentColor",
                      "aria-label": _.intl.string(_.t.VkKicX),
                    }),
                  }),
                }),
                (0, r.jsx)("div", { className: S.toolbarDivider }),
                (0, r.jsx)("div", {
                  className: S.filters,
                  children: Object.entries(w).map((e) => {
                    let [t, n] = e;
                    return (0, r.jsx)(
                      u.Clickable,
                      {
                        className: i()(
                          S.filter,
                          c.includes(t) && S.activeFilter,
                        ),
                        onClick: () => {
                          var e;
                          return (
                            (e = t),
                            void m((t) =>
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
              className: S.toolbar,
              children: (0, r.jsx)(u.SearchBar, {
                className: S.searchBar,
                query: t,
                onChange: n,
                onClear: () => n(""),
                placeholder: "Search by event name",
              }),
            }),
            (0, r.jsx)(C.Z, {
              columns: N,
              data: k,
              selectedRowKey: E,
              onClickRow: (e) => Z(e.key),
            }),
            null != R &&
              (0, r.jsxs)(j.Z, {
                className: S.subPanel,
                minHeight: 100,
                initialHeight:
                  null != e.current ? e.current.clientHeight / 2 : 300,
                children: [
                  (0, r.jsx)(O, {}),
                  B({ loggedEvent: R, onClose: () => Z(void 0) }),
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
      var r = n(200651);
      n(192379);
      var a = n(702904),
        l = n(351930);
      function i() {
        return (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(a.Z, {}), (0, r.jsx)(l.Z, {})],
        });
      }
    },
    806240: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return h;
        },
      });
      var r = n(200651),
        a = n(192379),
        l = n(120356),
        i = n.n(l),
        o = n(481060),
        s = n(931240),
        c = n(836768),
        d = n(859921),
        u = n(53876),
        m = n(941469);
      function h() {
        let e = a.useRef(null);
        return (0, r.jsxs)("div", {
          ref: e,
          className: i()(m.panel, u.panel),
          children: [
            (0, r.jsx)(o.Button, {
              size: o.Button.Sizes.SMALL,
              onClick: s.LX,
              children: "Reset Every Clan Setup State",
            }),
            (0, r.jsx)(o.Button, {
              size: o.Button.Sizes.SMALL,
              onClick: c.Z.resetState,
              children: "Reset Global Discovery State",
            }),
            (0, r.jsx)(o.Button, {
              size: o.Button.Sizes.SMALL,
              onClick: d.Z.resetState,
              children: "Reset Global Discovery Servers State",
            }),
          ],
        });
      }
    },
    789654: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return S;
        },
        q: function () {
          return _;
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
      var r = n(200651),
        a = n(192379),
        l = n(688619),
        i = n.n(l),
        o = n(392711),
        s = n.n(o),
        c = n(765053),
        d = n(190558),
        u = n(203165),
        m = n(481060),
        h = n(410030),
        x = n(705262),
        f = n(374794),
        p = n(58755),
        b = n(246992),
        g = n(500949),
        v = n(833999);
      let { SemanticColors: j } = d.V;
      function C(e) {
        return e.replaceAll(/_|\./g, "-").toLowerCase();
      }
      function T(e) {
        return e.replaceAll(/_|-/g, ".").toLowerCase();
      }
      function _(e, t) {
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
      function S() {
        let e = (0, h.Fg)(),
          [t, n, l, o, d, u] = (0, g.zn)(),
          {
            semanticColorOverrides: b,
            rawColorOverrides: j,
            tab: T,
            scales: S,
          } = t,
          N = a.useMemo(() => {
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
              r = S.reduce((e, t) => {
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
          }, [j, S, b, e]);
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
                (0, r.jsxs)(m.TabBar, {
                  className: v.tabBar,
                  type: "top",
                  look: "brand",
                  selectedItem: T,
                  onItemSelect: (e) => {
                    n((t) => ({ ...t, tab: e }));
                  },
                  children: [
                    (0, r.jsx)(m.TabBar.Item, {
                      id: g.H8.TOKENS,
                      children: "Tokens",
                    }),
                    (0, r.jsx)(m.TabBar.Item, {
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
                    (0, r.jsx)(m.Button, {
                      size: m.Button.Sizes.ICON,
                      color: m.Button.Colors.TRANSPARENT,
                      look: m.Button.Looks.BLANK,
                      onClick: l,
                      disabled: !d,
                      children: (0, r.jsx)(m.UndoIcon, {}),
                    }),
                    (0, r.jsx)(m.Button, {
                      size: m.Button.Sizes.ICON,
                      color: m.Button.Colors.TRANSPARENT,
                      look: m.Button.Looks.BLANK,
                      onClick: o,
                      disabled: !u,
                      children: (0, r.jsx)(m.RedoIcon, {}),
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
                      size: m.Button.Sizes.ICON,
                      color: m.Button.Colors.TRANSPARENT,
                      look: m.Button.Looks.BLANK,
                      children: (0, r.jsx)(m.UploadIcon, {}),
                    }),
                    (0, r.jsx)(m.Button, {
                      size: m.Button.Sizes.ICON,
                      color: m.Button.Colors.TRANSPARENT,
                      look: m.Button.Looks.BLANK,
                      onClick: () => {
                        _("color-overrides", JSON.stringify({ ...t }, null, 2));
                      },
                      children: (0, r.jsx)(m.DownloadIcon, {}),
                    }),
                  ],
                }),
              ],
            }),
            (0, r.jsx)("div", {
              className: v.tab,
              hidden: T !== g.H8.TOKENS,
              children: (0, r.jsx)(y, { state: t, setState: n }),
            }),
            (0, r.jsx)("div", {
              className: v.tab,
              hidden: T !== g.H8.PALETTES,
              children: (0, r.jsx)(p.P, { state: t, setState: n }),
            }),
            (0, r.jsx)(c.ql, {
              children: (0, r.jsx)("style", {
                id: "devtools-color-overrides",
                children: N,
              }),
            }),
          ],
        });
      }
      function y(e) {
        let { state: t, setState: n } = e,
          l = (0, h.Fg)(),
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
          _ = Object.keys(u.b).map((e) => ({ value: e, label: e }));
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(m.Text, {
              variant: "text-lg/semibold",
              children: "Semantic Tokens",
            }),
            (0, r.jsx)(m.SearchableSelect, {
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
                let o = T(i.color),
                  c = i.opacity,
                  d = g.jC[t][l];
                return (0, r.jsx)(
                  N,
                  {
                    title: C(t),
                    subtitle:
                      1 === d.opacity
                        ? T(d.raw)
                        : ""
                            .concat(T(d.raw), " @ ")
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
                        (0, r.jsx)(m.SearchableSelect, {
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
                        (0, r.jsx)(m.TextInput, {
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
            (0, r.jsx)(m.Text, {
              variant: "text-lg/semibold",
              children: "Raw Tokens",
            }),
            (0, r.jsx)(m.SearchableSelect, {
              options: _,
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
                  N,
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
                      (0, r.jsx)(m.Text, {
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
      function N(e) {
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
                    (0, r.jsx)(m.Text, {
                      lineClamp: 1,
                      variant: "text-md/medium",
                      className: v.overrideHeading,
                      tabularNumbers: !0,
                      children: t,
                    }),
                    null != n
                      ? (0, r.jsx)(m.Text, {
                          variant: "text-sm/medium",
                          color: "text-secondary",
                          tabularNumbers: !0,
                          children: n,
                        })
                      : null,
                  ],
                }),
                (0, r.jsx)(m.Clickable, {
                  onClick: o,
                  className: v.clickabeIcon,
                  children: (0, r.jsx)(m.EyeIcon, {
                    size: "xs",
                    color: a ? "var(--text-brand)" : "currentColor",
                  }),
                }),
                (0, r.jsx)(m.Clickable, {
                  className: v.clickabeIcon,
                  onClick: l,
                  children: (0, r.jsx)(m.RefreshIcon, {
                    size: "xs",
                    color: "currentColor",
                  }),
                }),
                (0, r.jsx)(m.Clickable, {
                  className: v.removeOverride,
                  onClick: i,
                  children: (0, r.jsx)(m.XSmallIcon, {
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
      var r = n(200651),
        a = n(192379),
        l = n(394900),
        i = n(661105),
        o = n(609067),
        s = n(94367),
        c = n(203165),
        d = n(481060),
        u = n(789654),
        m = n(246992),
        h = n(500949),
        x = n(833999);
      let f = Object.keys(h.jQ).map((e) => ({ value: e, label: e })),
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
                      colorSpace: h.jQ.ICTCP,
                      showColumnarPalettePreview: !1,
                      useP3ColorSpace: !1,
                      darkness: 0,
                      lightness: 0,
                      easing: h.iw.LINEAR,
                      easingStrength: 1,
                      steps: 26,
                    }),
                      n({ ...t, scales: [...t.scales, r] });
                },
                popoutLayerContext: m.O$,
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
            easingStrength: T = 1,
            useP3ColorSpace: _,
            steps: S = 26,
          } = t,
          y = (0, h.XM)(t),
          N = (0, h.W6)(y, c);
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
                    let e = Object.entries(y).reduce((e, t) => {
                      let [n, r] = t;
                      return (
                        (e[n] = {
                          value: (0, l.Z)((0, i.Z)(r, h.HW.sRGB), {
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
                  onChange: (e) => (0, h.Ib)(c, e.target.value, n),
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
                  onChange: (e) => (0, h.t4)(c, e, n),
                  popoutLayerContext: m.O$,
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
                      onValueChange: (e) => (0, h.h9)(c, e, n),
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
                      onValueChange: (e) => (0, h.YE)(c, e, n),
                      onMarkerRender: () => null,
                    }),
                  ],
                }),
              ],
            }),
            (0, r.jsx)(d.FormSection, {
              title: "Easing",
              children: (0, r.jsxs)(d.FormItem, {
                title: "Easing Strength (".concat(T.toFixed(2), ")"),
                children: [
                  (0, r.jsx)(d.FormText, {
                    type: d.FormTextTypes.DESCRIPTION,
                    children: "Adjust the strength of the easing function.",
                  }),
                  (0, r.jsx)(d.Slider, {
                    onValueRender: () => null,
                    initialValue: T,
                    minValue: 1,
                    maxValue: 5,
                    onValueChange: (e) => (0, h.rd)(c, e, n),
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
                    onChange: (e) => (0, h.KB)(c, e, n),
                    children: "Show columnar palette preview",
                  }),
                }),
                (0, r.jsx)(d.FormItem, {
                  children: (0, r.jsx)(d.FormSwitch, {
                    note: "Renders the palette preview in a single column, useful for comparing the luminance of each step.",
                    value: _,
                    disabled: !h.S2,
                    onChange: (e) => (0, h.uF)(c, e, n),
                    children: "Use P3 Color Space",
                  }),
                }),
                (0, r.jsx)(d.FormItem, {
                  title: "Steps (".concat(S, ")"),
                  children: (0, r.jsx)(d.Slider, {
                    onValueRender: () => null,
                    initialValue: S,
                    minValue: (0, h.A0)(c).length,
                    maxValue: 100,
                    onValueChange: (e) => (0, h.YC)(c, Math.round(e), n),
                    onMarkerRender: () => null,
                  }),
                }),
                (0, r.jsx)(d.FormItem, {
                  title: "Palette Preview",
                  children: (0, r.jsx)("div", {
                    className: x.paletteOverrides,
                    "data-columnar": v,
                    children: Object.entries(y).map((e, n) => {
                      let [a, c] = e,
                        u = (0, h.HI)(c),
                        m =
                          (0, o.Z)((0, s.Z)("black"), c) > 4.5
                            ? "black"
                            : "white",
                        x = N[a];
                      return (0, r.jsxs)(
                        "div",
                        {
                          style: { backgroundColor: u },
                          children: [
                            (0, r.jsxs)(d.Text, {
                              variant: v ? "text-sm/medium" : "text-xs/medium",
                              style: { color: m },
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
                                style: { opacity: 0.75, color: m },
                                children: [
                                  (0, l.Z)((0, i.Z)(c, h.HW.sRGB), {
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
              Object.values((0, h.XM)(t)).map((e) =>
                (0, l.Z)((0, i.Z)(e, h.HW.sRGB), { format: "hex" }),
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
    719672: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return j;
        },
      }),
        n(47120);
      var r,
        a,
        l = n(200651);
      n(192379);
      var i = n(913527),
        o = n.n(i),
        s = n(442837),
        c = n(704215),
        d = n(481060),
        u = n(713284),
        m = n(883904),
        h = n(211644),
        x = n(675478),
        f = n(681619),
        p = n(388958);
      ((a = r || (r = {})).EVENT = "events"), (a.CANDIDATES = "candidates");
      let b = (e) => {
          switch (e) {
            case u.D.DC_DISMISSED:
              return "DISMISS:";
            case u.D.DC_SHOWN:
              return "SHOW:";
            case u.D.DC_SHOW_REQUEST:
              return "REQUEST TO SHOW:";
            default:
              return "UNKNOWN TYPE:";
          }
        },
        g = [
          {
            key: "events",
            render(e) {
              let { event: t, dismissibleContent: n } = e;
              return "".concat(t, " ").concat(c.z[n]);
            },
          },
        ],
        v = [
          {
            key: "candidates",
            render(e) {
              let { dismissibleContent: t } = e;
              return "".concat(c.z[t]);
            },
          },
        ];
      function j() {
        let e = (0, s.e7)([u.Z], () => u.Z.getDCFEvents()),
          t = (0, h.ZP)((e) => e.candidates),
          n = (0, h.ZP)((e) => e.lastWinnerTime),
          r = o()(n).fromNow(),
          a = e.map((e) => {
            let { eventType: t, dismissibleContent: n } = e;
            return {
              key: b(t) + n.toString(),
              event: b(t),
              dismissibleContent: n,
            };
          }),
          i = Array.from(t.keys()).map((e) => ({
            key: e.toString(),
            dismissibleContent: e,
          }));
        return (0, l.jsxs)("div", {
          className: p.panelContainer,
          children: [
            (0, l.jsxs)("div", {
              className: p.buttonContainer,
              children: [
                (0, l.jsx)(d.Button, {
                  className: p.button,
                  onClick: () => (0, m.EG)(),
                  children: "Reset Daily Cap",
                }),
                (0, l.jsx)(d.Button, {
                  className: p.button,
                  onClick: x.sr,
                  children: "Clear All Dismissed Contents",
                }),
                (0, l.jsx)(d.Button, {
                  className: p.button,
                  onClick: x.bE,
                  children: "Check All Dismissed Contents",
                }),
              ],
            }),
            (0, l.jsx)("br", {}),
            (0, l.jsxs)("div", {
              className: p.info,
              children: ["Last winner time: ", r],
            }),
            (0, l.jsx)("br", {}),
            (0, l.jsx)("div", {
              className: p.candidatesTableContainer,
              children: (0, l.jsx)(f.Z, {
                className: p.candidatesTable,
                columns: v,
                data: i,
              }),
            }),
            (0, l.jsx)("br", {}),
            (0, l.jsx)(f.Z, { columns: g, data: a }),
          ],
        });
      }
    },
    691867: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return d;
        },
      }),
        n(47120);
      var r = n(200651),
        a = n(192379),
        l = n(442837),
        i = n(481060),
        o = n(581612),
        s = n(91311),
        c = n(844426);
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
      var r = n(200651),
        a = n(192379),
        l = n(120356),
        i = n.n(l),
        o = n(392711),
        s = n(913527),
        c = n.n(s),
        d = n(481060),
        u = n(570140),
        m = n(665149),
        h = n(301801),
        x = n(4912),
        f = n(55935),
        p = n(428530),
        b = n(257785),
        g = n(484036),
        v = n(681619),
        j = n(621060),
        C = n(912130),
        T = n(941469);
      function _(e) {
        return parseFloat(e.toFixed(3));
      }
      let S = [
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
            return "".concat(_(t.time), " ms");
          },
        },
      ];
      function y(e) {
        let { actionLog: t } = e,
          n = a.useMemo(
            () => t.traces.map((e) => ({ key: e.name, trace: e })),
            [t],
          );
        return (0, r.jsx)(d.ScrollerThin, {
          children: (0, r.jsx)(v.Z, { columns: S, data: n }),
        });
      }
      let N = [
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
                      children: [_(n.totalTime), " ms"],
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
            return (0, r.jsx)(y, { actionLog: t });
          },
        },
      ];
      function k(e) {
        let { actionLog: t, initialHeight: n } = e,
          l = a.useMemo(
            () =>
              t.error
                ? [
                    ...N,
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
                              className: i()(C.errorToolbar, T.toolbar),
                              children: (0, r.jsx)("div", {
                                className: T.toolbarGroup,
                                children: (0, r.jsx)(d.Button, {
                                  className: T.toolbarButton,
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
                : N,
            [t],
          ),
          { TabBar: o, renderSelectedTab: s } = (0, j.Z)({ tabs: l }, [l]);
        return (0, r.jsxs)(g.Z, {
          className: C.subPanel,
          minHeight: 100,
          initialHeight: n,
          children: [
            (0, r.jsx)(o, {}),
            (0, r.jsxs)(m.ZP, {
              className: i()(T.headerBar, C.subPanelHeaderBar),
              children: [
                (0, r.jsx)(m.ZP.Icon, { icon: d.ReceiptIcon, tooltip: t.name }),
                (0, r.jsx)(m.ZP.Title, { children: t.name }),
              ],
            }),
            s({ actionLog: t }),
          ],
        });
      }
      let E = [
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
            return "".concat(_(t.totalTime), " ms");
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
          [c, m] = a.useState(s),
          [x, f] = a.useState(s),
          [p, b] = a.useState(!1),
          [g, j] = a.useState(),
          _ = a.useRef(null),
          S = a.useMemo(
            () =>
              (0, o.throttle)(
                async (e, t) => {
                  if ("" === e) {
                    f(t);
                    return;
                  }
                  _.current = (0, o.uniqueId)();
                  let n = await (0, h.H)(
                    t,
                    (e) => {
                      let { actionLog: t } = e;
                      return t.name;
                    },
                    e,
                    !0,
                  );
                  if (null != _.current) f(n);
                },
                300,
                { leading: !0 },
              ),
            [],
          ),
          y = a.useCallback(
            (e) => {
              m(s), b(e);
            },
            [s],
          );
        a.useEffect(() => {
          if (p) {
            S(t, null != c ? c : s);
            return;
          }
          S(t, s);
        }, [p, t, S, s, c]),
          a.useEffect(() => {
            _.current = null;
          }, []);
        let N = t.trim().length > 0,
          I = a.useMemo(() => (N ? x : p ? c : s), [s, x, N, p, c]);
        return (0, r.jsxs)("div", {
          ref: e,
          className: i()(T.panel, C.panel),
          children: [
            (0, r.jsxs)("div", {
              className: C.toolbar,
              children: [
                (0, r.jsx)("div", {
                  title: "Toggles the flow of Actions",
                  className: C.pausedEvents,
                  children: (0, r.jsx)(d.Switch, {
                    checked: !p,
                    onChange: (e) => y(!e),
                  }),
                }),
                (0, r.jsx)(d.SearchBar, {
                  className: C.searchBar,
                  query: t,
                  onChange: n,
                  onClear: () => n(""),
                  placeholder: "Search by action name",
                }),
              ],
            }),
            (0, r.jsx)(v.Z, {
              columns: E,
              data: I,
              selectedRowKey: null == g ? void 0 : g.id.toString(),
              onClickRow: (e) => j(e.actionLog),
            }),
            null != g &&
              (0, r.jsx)(k, {
                actionLog: g,
                initialHeight:
                  null != e.current ? e.current.clientHeight / 2 : 300,
              }),
          ],
        });
      }
    },
    645973: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var r = n(200651),
        a = n(192379),
        l = n(120356),
        i = n.n(l),
        o = n(481060),
        s = n(90641),
        c = n(315906),
        d = n(941469);
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
      var r = n(200651),
        a = n(192379),
        l = n(442837),
        i = n(481060),
        o = n(570140),
        s = n(178635),
        c = n(115470),
        d = n(511010),
        u = n(246992),
        m = n(719);
      let h = 6e4,
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
          T = (0, l.e7)([c.Z], () => {
            var t;
            return null === e
              ? null
              : null !== (t = c.Z.getFeedbackConfig(e)) && void 0 !== t
                ? t
                : s.R[e];
          }),
          _ = Object.keys(s.R).map((e) => ({ label: e, value: e })),
          S = a.useMemo(
            () => null != e && j >= 0 && j <= 100 && n >= 0,
            [e, j, n],
          );
        return (0, r.jsxs)("div", {
          className: m.container,
          children: [
            (0, r.jsx)(i.FormSection, {
              title: "Feedback Survey",
              className: m.formElement,
              tag: i.FormTitleTags.H3,
              children: (0, r.jsx)(i.SingleSelect, {
                options: _,
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
              className: m.formElement,
              tag: i.FormTitleTags.H3,
              children: [
                null != T &&
                  (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(d.Z, {
                        className: m.formDividerTitle,
                        children: (0, r.jsx)(i.Text, {
                          variant: "text-sm/semibold",
                          children: "Current cooldown",
                        }),
                      }),
                      (0, r.jsx)(i.Text, {
                        variant: "text-sm/normal",
                        children: "".concat(T.cooldown / 1e3, " second(s) or"),
                      }),
                      (0, r.jsx)(i.Text, {
                        variant: "text-sm/normal",
                        children: "".concat(T.cooldown / h, " minute(s) or"),
                      }),
                      (0, r.jsx)(i.Text, {
                        variant: "text-sm/normal",
                        children: "".concat(T.cooldown / x, " hour(s) or"),
                      }),
                      (0, r.jsx)(i.Text, {
                        variant: "text-sm/normal",
                        children: "".concat(T.cooldown / f, " day(s)"),
                      }),
                    ],
                  }),
                (0, r.jsx)(d.Z, {
                  className: m.formDividerTitle,
                  children: (0, r.jsx)(i.Text, {
                    variant: "text-sm/semibold",
                    children: "Override cooldown",
                  }),
                }),
                (0, r.jsxs)("div", {
                  className: m.formRow,
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
              className: m.formElement,
              tag: i.FormTitleTags.H3,
              children: [
                null != T &&
                  (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(d.Z, {
                        className: m.formDividerTitle,
                        children: (0, r.jsx)(i.Text, {
                          variant: "text-sm/semibold",
                          children: "Current chance",
                        }),
                      }),
                      (0, r.jsx)(i.Text, {
                        variant: "text-sm/normal",
                        children: "".concat(100 * T.chance, "%"),
                      }),
                    ],
                  }),
                (0, r.jsx)(d.Z, {
                  className: m.formDividerTitle,
                  children: (0, r.jsx)(i.Text, {
                    variant: "text-sm/semibold",
                    children: "Override chance",
                  }),
                }),
                (0, r.jsxs)("div", {
                  className: m.formRow,
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
              className: m.formRow,
              children: [
                (0, r.jsx)(i.Button, {
                  onClick: () =>
                    void o.Z.dispatch({
                      type: "FEEDBACK_OVERRIDE_SET",
                      feedbackType: e,
                      cooldown: n * g,
                      chance: j / 100,
                    }),
                  disabled: !S,
                  children: "Update",
                }),
                (0, r.jsx)(i.Button, {
                  onClick: () =>
                    void o.Z.dispatch({
                      type: "FEEDBACK_OVERRIDE_CLEAR",
                      feedbackType: e,
                    }),
                  disabled: !S,
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
          return h;
        },
      }),
        n(47120);
      var r = n(200651),
        a = n(192379),
        l = n(120356),
        i = n.n(l),
        o = n(442837),
        s = n(481060),
        c = n(98357),
        d = n(432877),
        u = n(725754),
        m = n(941469);
      function h(e) {
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
          className: i()(m.panel, u.panel),
          children: l,
        });
      }
    },
    272193: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return h;
        },
      });
      var r = n(200651);
      n(192379);
      var a = n(120356),
        l = n.n(a),
        i = n(442837),
        o = n(481060),
        s = n(570140),
        c = n(441623),
        d = n(246992),
        u = n(562708),
        m = n(941469);
      function h() {
        let e = (0, i.e7)([c.Z], () =>
            c.Z.getDevToolTotalFriendAnniversaries(),
          ),
          t = (e) => {
            s.Z.dispatch({
              type: "DEV_TOOLS_SET_FRIEND_ANNIVERSARY_COUNT",
              total: e,
            });
          };
        return (0, r.jsx)(o.ScrollerThin, {
          className: l()(m.panel),
          children: (0, r.jsxs)("div", {
            className: u.panelInner,
            children: [
              (0, r.jsx)(o.Text, {
                className: u.panelHeader,
                variant: "text-lg/bold",
                children: "Friend Anniversary",
              }),
              (0, r.jsxs)("div", {
                className: u.panelRow,
                children: [
                  (0, r.jsx)(o.Text, {
                    variant: "text-md/normal",
                    children: "Reset gift message cooldown",
                  }),
                  (0, r.jsx)(o.Button, {
                    size: o.Button.Sizes.SMALL,
                    onClick: () => {
                      s.Z.dispatch({
                        type: "DEV_TOOLS_GIFT_MESSAGE_COOLDOWN_RESET",
                      });
                    },
                    children: "Reset",
                  }),
                ],
              }),
              (0, r.jsxs)("div", {
                className: u.panelRow,
                children: [
                  (0, r.jsx)(o.Text, {
                    variant: "text-md/normal",
                    children: "Reset badge cooldown",
                  }),
                  (0, r.jsx)(o.Button, {
                    size: o.Button.Sizes.SMALL,
                    onClick: () => {
                      s.Z.dispatch({
                        type: "DEV_TOOLS_FRIENDS_TAB_BADGE_COOLDOWN_RESET",
                      });
                    },
                    children: "Reset",
                  }),
                ],
              }),
              (0, r.jsxs)("div", {
                className: u.panelRow,
                children: [
                  (0, r.jsx)(o.Text, {
                    variant: "text-md/normal",
                    children:
                      "Clear last seen friend anniversaries in All Friends",
                  }),
                  (0, r.jsx)(o.Button, {
                    size: o.Button.Sizes.SMALL,
                    onClick: () => {
                      s.Z.dispatch({
                        type: "DEV_TOOLS_FRIENDS_LIST_GIFT_INTENTS_SHOWN_RESET",
                      });
                    },
                    children: "Clear",
                  }),
                ],
              }),
              (0, r.jsxs)("div", {
                className: u.panelRow,
                children: [
                  (0, r.jsx)(o.Text, {
                    variant: "text-md/normal",
                    children:
                      "Select number of friend anniversaries to generate",
                  }),
                  (0, r.jsx)(o.SingleSelect, {
                    className: u.anniversaryCountSelect,
                    options: [
                      { label: "None", value: null },
                      { label: "1", value: 1 },
                      { label: "2", value: 2 },
                      { label: "3", value: 3 },
                      { label: "4", value: 4 },
                      { label: "5", value: 5 },
                      { label: "10", value: 10 },
                      { label: "25", value: 25 },
                    ],
                    value: e,
                    onChange: (e) => {
                      t(e);
                    },
                    popoutLayerContext: d.O$,
                  }),
                  (0, r.jsx)(o.Button, {
                    look: o.Button.Looks.LINK,
                    className: u.anniversaryCountResetButton,
                    onClick: () => {
                      t(null);
                    },
                    children: "Reset to None",
                  }),
                ],
              }),
            ],
          }),
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
      var r = n(200651);
      n(192379);
      var a = n(189223),
        l = n(692547),
        i = n(410030),
        o = n(95398),
        s = n(981631),
        c = n(941469);
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
      let m = u(d),
        h = u(d);
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
            theme: "light" === n ? h : m,
            invertTheme: !1,
            valueRenderer: x,
            shouldExpandNode: () => !0,
          }),
        });
      }
    },
    735959: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return b;
        },
      }),
        n(47120);
      var r = n(200651),
        a = n(192379),
        l = n(969090),
        i = n(913527),
        o = n.n(i),
        s = n(330711),
        c = n(442837),
        d = n(481060),
        u = n(424395),
        m = n(665149),
        h = n(706454),
        x = n(428530),
        f = n(257785),
        p = n(388032);
      function b() {
        let e = (0, c.e7)([h.default], () => h.default.locale),
          [t, n] = a.useState(),
          i = (0, l.runtimeHashMessageKey)(null != t ? t : ""),
          b = a.useMemo(() => p.t[i], [i]);
        return (0, r.jsxs)("div", {
          children: [
            (0, r.jsxs)(m.ZP, {
              children: [
                (0, r.jsx)(m.ZP.Icon, {
                  icon: d.LanguageIcon,
                  tooltip: "Locale",
                }),
                (0, r.jsx)(m.ZP.Title, { children: "Locale" }),
              ],
            }),
            (0, r.jsxs)(f.E, {
              children: [
                (0, r.jsx)(f.Z9, {
                  name: "Active System",
                  children: u.vJ ? "@discord/intl" : "@discordapp/i18n",
                }),
                (0, r.jsx)(f.Z9, { name: "App", children: e }),
                (0, r.jsx)(f.Z9, {
                  name: "@discord/intl",
                  children: p.intl.currentLocale,
                }),
                (0, r.jsx)(f.Z9, {
                  name: "common i18n",
                  children: s.Z.getLocale(),
                }),
                (0, r.jsx)(f.Z9, { name: "Moment", children: o().locale() }),
              ],
            }),
            (0, r.jsxs)(m.ZP, {
              children: [
                (0, r.jsx)(m.ZP.Icon, {
                  icon: d.LanguageIcon,
                  tooltip: "Messages",
                }),
                (0, r.jsx)(m.ZP.Title, { children: "New System Messages" }),
              ],
            }),
            (0, r.jsx)(d.TextInput, {
              onChange: function (e) {
                n(e);
              },
              name: "Message name",
              style: { margin: 16 },
              placeholder: "Find a message",
            }),
            (0, r.jsxs)(f.E, {
              children: [
                (0, r.jsx)(f.Z9, { name: "Hashed key", children: i }),
                (0, r.jsx)(f.Z9, {
                  name: "Exists?",
                  children: null != b ? "yes" : "no",
                }),
              ],
            }),
            (0, r.jsx)(x.Z, { data: null == b ? void 0 : b(e) }),
          ],
        });
      }
    },
    496025: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return S;
        },
      }),
        n(47120);
      var r = n(200651),
        a = n(192379),
        l = n(120356),
        i = n.n(l),
        o = n(602715),
        s = n(442837),
        c = n(481060),
        d = n(43267),
        u = n(933557),
        m = n(258732),
        h = n(592125),
        x = n(699516),
        f = n(594174),
        p = n(55589),
        b = n(630388),
        g = n(98357),
        v = n(432877),
        j = n(246992),
        C = n(821843),
        T = n(941469);
      function _() {
        var e;
        let t = (0, s.Wu)([p.Z], () => p.Z.getSortedChannels()[1]),
          [n, l] = a.useState(t.length > 0 ? t[0].channelId : void 0),
          { selectedChannel: i, options: g } = (0, s.cj)(
            [h.Z, f.default, x.Z],
            () => ({
              selectedChannel: h.Z.getChannel(n),
              options: t.map((e) => {
                let t = h.Z.getChannel(e.channelId);
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
            m.Z.updatePrivateChannelRecipientFlags(i.id, t);
          }, [i]),
          T =
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
                    let t = h.Z.getChannel(e.value);
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
                  children: T ? "Clear NUX Flag" : "Set NUX Flag",
                }),
              ],
            }),
          ],
        });
      }
      function S() {
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
          className: i()(T.panel, C.panel),
          children: [
            e,
            (0, r.jsx)("div", { className: C.divider }),
            (0, r.jsx)(_, {}),
          ],
        });
      }
    },
    442954: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return x;
        },
      }),
        n(47120);
      var r = n(200651),
        a = n(192379),
        l = n(120356),
        i = n.n(l),
        o = n(481060),
        s = n(138464),
        c = n(585483),
        d = n(246992),
        u = n(981631),
        m = n(941469),
        h = n(509345);
      function x() {
        let e = {
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
          [l, x] = a.useState(t[0].value);
        return (0, r.jsx)(o.ScrollerThin, {
          className: i()(m.panel),
          children: (0, r.jsxs)("div", {
            className: h.panelInner,
            children: [
              (0, r.jsxs)("section", {
                className: h.section,
                children: [
                  (0, r.jsx)(o.Heading, {
                    variant: "heading-md/semibold",
                    children: "Open a Modal",
                  }),
                  (0, r.jsxs)("div", {
                    className: h.inputRow,
                    children: [
                      (0, r.jsx)(o.Select, {
                        className: h.input,
                        options: t,
                        isSelected: (e) => l === e,
                        placeholder: "Trial ID",
                        serialize: (e) => String(e),
                        select: (e) => x(e),
                        popoutLayerContext: d.O$,
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
              (0, r.jsxs)("section", {
                className: h.section,
                children: [
                  (0, r.jsx)(o.Heading, {
                    variant: "heading-md/semibold",
                    children: "Wow moment",
                  }),
                  (0, r.jsx)("div", {
                    className: h.inputRow,
                    children: (0, r.jsx)(o.Button, {
                      onClick: () => {
                        (0, s.H)(!0),
                          c.S.dispatch(u.CkL.PREMIUM_SUBSCRIPTION_CREATED);
                      },
                      children: "Open",
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    633001: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return I;
        },
      }),
        n(47120),
        n(653041),
        n(724458);
      var r = n(200651),
        a = n(192379),
        l = n(120356),
        i = n.n(l),
        o = n(772848),
        s = n(442837),
        c = n(481060),
        d = n(765250),
        u = n(13245),
        m = n(615287),
        h = n(594190),
        x = n(371651),
        f = n(829907),
        p = n(610394),
        b = n(355863),
        g = n(449224),
        v = n(808506),
        j = n(70956),
        C = n(246992),
        T = n(981631),
        _ = n(501787),
        S = n(27731),
        y = n(941469);
      let N = (e) => ({
          type: T.Odu.CLICK_ZONE_DEBUG,
          id: (0, o.Z)(),
          layoutId: e,
          anchor: { top: 0.35, right: 0.35 },
          size: { width: 100, height: 100 },
          ...b.Z.getWidgetDefaultSettings(T.Odu.CLICK_ZONE_DEBUG),
          pinned: !0,
        }),
        k = (e, t) => e.find((e) => e.type === t);
      function E(e) {
        let { trackedGame: t } = e,
          n = (0, s.e7)([h.ZP], () => h.ZP.getGameForPID(t.pid)),
          a = (0, s.e7)([g.Z], () => g.Z.getGameForPID(t.pid));
        return (0, r.jsxs)("div", {
          className: S.panelGroup,
          children: [
            (0, r.jsx)(c.Text, {
              variant: "text-md/bold",
              color: "text-primary",
              children: t.gameName,
            }),
            (0, r.jsx)(c.Text, {
              variant: "text-sm/bold",
              color: "text-secondary",
              children: t.pid,
            }),
            (0, r.jsx)(c.Text, {
              variant: "text-sm/normal",
              color: "text-secondary",
              children: null == n ? void 0 : n.exeName,
            }),
            (0, r.jsxs)(c.Text, {
              variant: "text-sm/normal",
              color: "text-normal",
              children: [
                "isLauncher: ",
                (null == n ? void 0 : n.isLauncher) ? "Yes" : "No",
              ],
            }),
            (0, r.jsxs)(c.Text, {
              variant: "text-sm/normal",
              color: "text-normal",
              children: ["fullscreenType: ", (0, f.sS)(t.fullscreenType)],
            }),
            (0, r.jsxs)(c.Text, {
              variant: "text-sm/normal",
              color: "text-normal",
              children: ["state: ", t.state],
            }),
            (0, r.jsxs)(c.Text, {
              variant: "text-sm/normal",
              color: "text-normal",
              children: ["source: ", t.source],
            }),
            (0, r.jsxs)(c.Text, {
              variant: "text-sm/normal",
              color: "text-normal",
              children: ["enabled: ", t.enabled ? "Yes" : "No"],
            }),
            (0, r.jsxs)(c.Text, {
              variant: "text-sm/normal",
              color: "text-normal",
              children: ["overlayMethod: ", (0, f.P_)(t.overlayMethod)],
            }),
            (0, r.jsxs)(c.Text, {
              variant: "text-sm/normal",
              color: "text-normal",
              children: [
                "hidden: ",
                (null == n ? void 0 : n.hidden) ? "Yes" : "No",
              ],
            }),
            (0, r.jsxs)(c.Text, {
              variant: "text-sm/normal",
              color: "text-normal",
              children: [
                "hook: ",
                (null == a ? void 0 : a.hook) ? "Yes" : "No",
              ],
            }),
            (0, r.jsxs)(c.Text, {
              variant: "text-sm/normal",
              color: "text-normal",
              children: [
                "overlay: ",
                (null == a ? void 0 : a.overlay) ? "Yes" : "No",
              ],
            }),
            (0, r.jsxs)(c.Text, {
              variant: "text-sm/normal",
              color: "text-normal",
              children: [
                "overlayCompatibilityHook: ",
                (null == a ? void 0 : a.overlayCompatibilityHook)
                  ? "Yes"
                  : "No",
              ],
            }),
            (0, r.jsxs)(c.Text, {
              variant: "text-sm/normal",
              color: "text-normal",
              children: [
                "supportsOutOfProcessOverlay: ",
                (null == a ? void 0 : a.supportsOutOfProcessOverlay)
                  ? "Yes"
                  : "No",
              ],
            }),
          ],
        });
      }
      function I() {
        let e = (0, s.Wu)([b.Z], () =>
            b.Z.getWidgetsForLayout(_.OVERLAY_V3_LAYOUT_ID),
          ),
          t = (0, s.e7)([p.Z], () => p.Z.clickZoneDebugMode),
          n = (0, s.e7)([p.Z], () => p.Z.renderDebugMode),
          l = (0, s.e7)([x.Z], () => x.Z.getForcedRenderMode()),
          [o, g] = a.useState({}),
          [I, w] = a.useState(l),
          Z = (e) => {
            w(e), u.Z.forceRenderMode(e);
          },
          R = [
            { label: m.R5.UNSET, value: m.R5.UNSET },
            { label: m.R5.IN_PROCESS_V2, value: m.R5.IN_PROCESS_V2 },
            { label: m.R5.OUT_OF_PROCESS_V2, value: m.R5.OUT_OF_PROCESS_V2 },
            { label: m.R5.OUT_OF_PROCESS_V3, value: m.R5.OUT_OF_PROCESS_V3 },
          ].map((e) => ({
            ...e,
            label: ""
              .concat(e.label, " ")
              .concat(l === e.value ? "(current)" : ""),
          })),
          O = (0, s.cj)([x.Z], () => x.Z.getTrackedGames()),
          B = (0, s.e7)([h.ZP], () => h.ZP.getRunningGames());
        a.useEffect(() => {
          g((e) => {
            for (let t of Object.keys(O)) e[Number(t)] = O[Number(t)];
            return e;
          });
        }, [O]);
        let P = (0, s.cj)([v.Z], () => v.Z.getOverlayPIDStatuses()),
          [L, A] = a.useState({}),
          D = a.useRef();
        a.useEffect(
          () => (
            (D.current = setInterval(async () => {
              let e = h.ZP.getRunningGames(),
                t = [],
                n = Date.now();
              for (let r of e)
                t.push((0, f.hj)(r.pid, 0).then((e) => [r.pid, e, n]));
              let r = await Promise.all(t);
              A((e) =>
                r.reduce(
                  (e, t) => {
                    var n;
                    let [r, a, l] = t;
                    if (null == a || null == r) return e;
                    let i = null !== (n = e[r]) && void 0 !== n ? n : [];
                    return (
                      (0 === i.length || i[i.length - 1].screenType !== a) &&
                        (e[r] = [
                          ...i,
                          { pid: r, screenType: a, timestamp: l },
                        ]),
                      e
                    );
                  },
                  { ...e },
                ),
              );
            }, 10 * j.Z.Millis.SECOND)),
            () => clearInterval(D.current)
          ),
          [],
        );
        let F = () => {
            u.Z.setClickZoneDebugMode(!p.Z.clickZoneDebugMode);
          },
          M = () => {
            u.Z.setRenderDebugMode(!p.Z.renderDebugMode);
          },
          H = k(Object.values(e), T.Odu.CLICK_ZONE_DEBUG),
          G = () => {
            if (null != H) (0, d.E9)(H.id);
            else {
              let e = N(_.OVERLAY_V3_LAYOUT_ID);
              (0, d.A4)(e);
            }
          },
          U = (e) => {
            var t, n;
            return null !==
              (n = null === (t = o[e]) || void 0 === t ? void 0 : t.gameName) &&
              void 0 !== n
              ? n
              : "Unknown";
          },
          z = (e) => {
            var t, n;
            return null !==
              (n =
                null === (t = o[e]) || void 0 === t
                  ? void 0
                  : t.fullscreenType) && void 0 !== n
              ? n
              : "Unknown";
          },
          V = (e) => {
            var t;
            let n = null === (t = O[e]) || void 0 === t ? void 0 : t.timer;
            if (null == n || null == n.screenTypeResolutionTimestamp)
              return "...";
            let r = n.screenTypeResolutionTimestamp - n.startTrackingTimestamp;
            return "".concat(r.toFixed(2), "ms");
          },
          W = (e) => {
            var t;
            let n = null === (t = O[e]) || void 0 === t ? void 0 : t.timer;
            if (
              null == n ||
              null == n.moduleTrackingTimestamp ||
              null == n.screenTypeResolutionTimestamp
            )
              return "...";
            let r = n.moduleTrackingTimestamp - n.screenTypeResolutionTimestamp;
            return "".concat(r.toFixed(2), "ms");
          },
          K = (e) => {
            var t;
            let n = null === (t = O[e]) || void 0 === t ? void 0 : t.timer;
            if (
              null == n ||
              null == n.overlayRenderingTimestamp ||
              null == n.moduleTrackingTimestamp
            )
              return "...";
            let r = n.overlayRenderingTimestamp - n.moduleTrackingTimestamp;
            return "".concat(r.toFixed(2), "ms");
          },
          Y = B.filter((e) => null == O[e.pid]);
        return (0, r.jsx)(c.ScrollerAuto, {
          children: (0, r.jsxs)("div", {
            className: i()(y.panel, S.panel),
            children: [
              (0, r.jsxs)("div", {
                className: S.panelGroup,
                children: [
                  (0, r.jsx)(c.Tooltip, {
                    position: "left",
                    text: "Enables a red border around click zones to help with debugging.",
                    children: (e) =>
                      (0, r.jsx)("div", {
                        ...e,
                        children: (0, r.jsx)(c.Checkbox, {
                          value: t,
                          onChange: () => F(),
                          size: 18,
                          type: c.Checkbox.Types.INVERTED,
                          shape: c.Checkbox.Shapes.BOX,
                          children: (0, r.jsx)(c.Text, {
                            tag: "span",
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: "Enable Click Zone Debug Mode",
                          }),
                        }),
                      }),
                  }),
                  (0, r.jsx)(c.Tooltip, {
                    position: "left",
                    text: "Enables a border around any widgets that are rendered on screen that are pinned (even if they are hidden). Blue = pinned widgets, Gray = unpinned widgets",
                    children: (e) =>
                      (0, r.jsx)("div", {
                        ...e,
                        children: (0, r.jsx)(c.Checkbox, {
                          value: n,
                          onChange: () => M(),
                          size: 18,
                          type: c.Checkbox.Types.INVERTED,
                          shape: c.Checkbox.Shapes.BOX,
                          children: (0, r.jsx)(c.Text, {
                            tag: "span",
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: "Enable Render Debug Mode",
                          }),
                        }),
                      }),
                  }),
                  (0, r.jsx)(c.Tooltip, {
                    position: "left",
                    text: "Creates a widget that has a clickzone inside of it, which will show/hide every few seconds.",
                    children: (e) =>
                      (0, r.jsx)("div", {
                        ...e,
                        children: (0, r.jsx)(c.Checkbox, {
                          value: null != H,
                          onChange: () => G(),
                          size: 18,
                          type: c.Checkbox.Types.INVERTED,
                          shape: c.Checkbox.Shapes.BOX,
                          children: (0, r.jsx)(c.Text, {
                            tag: "span",
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: "Click Zone Debug Widget",
                          }),
                        }),
                      }),
                  }),
                ],
              }),
              (0, r.jsx)(c.Tooltip, {
                position: "left",
                text: "Override the overlay render mode",
                children: (e) =>
                  (0, r.jsx)("div", {
                    ...e,
                    className: S.panelGroup,
                    children: (0, r.jsx)(c.Select, {
                      serialize: (e) => e,
                      isSelected: (e) => e === I,
                      options: R,
                      select: Z,
                      popoutLayerContext: C.O$,
                    }),
                  }),
              }),
              Y.length > 0 &&
                (0, r.jsx)(c.Tooltip, {
                  position: "left",
                  text: "Games that are running but not tracked by the overlay",
                  children: (e) =>
                    (0, r.jsx)("div", {
                      ...e,
                      children: (0, r.jsxs)("div", {
                        className: S.panelGroup,
                        children: [
                          (0, r.jsx)(c.Text, {
                            variant: "text-md/bold",
                            color: "text-danger",
                            children: "Untracked Running Games",
                          }),
                          Y.map((e) =>
                            (0, r.jsx)(
                              c.Text,
                              {
                                variant: "text-sm/normal",
                                color: "text-danger",
                                children: ""
                                  .concat(e.pid, ":")
                                  .concat(e.name, " (")
                                  .concat(e.exeName, ")"),
                              },
                              e.pid,
                            ),
                          ),
                        ],
                      }),
                    }),
                }),
              (0, r.jsx)(c.Tooltip, {
                position: "left",
                text: "The current running games process information",
                children: (e) =>
                  (0, r.jsx)("div", {
                    ...e,
                    children: (0, r.jsxs)("div", {
                      className: S.panelGroup,
                      children: [
                        0 === Object.keys(O).length &&
                          (0, r.jsx)(c.Text, {
                            variant: "text-sm/normal",
                            color: "text-normal",
                            children: "No running games",
                          }),
                        Object.values(O).map((e) =>
                          (0, r.jsx)(E, { trackedGame: e }, e.pid),
                        ),
                      ],
                    }),
                  }),
              }),
              (0, r.jsxs)("div", {
                className: S.panelGroup,
                children: [
                  0 === Object.keys(O).length &&
                    (0, r.jsx)(c.Text, {
                      variant: "text-sm/normal",
                      color: "text-normal",
                      children: "No tracked game times",
                    }),
                  Object.values(O).map((e) =>
                    (0, r.jsxs)(
                      "div",
                      {
                        children: [
                          (0, r.jsx)(c.Text, {
                            variant: "text-md/semibold",
                            color: "text-primary",
                            children: "".concat(e.pid),
                          }),
                          (0, r.jsx)(c.Text, {
                            variant: "text-md/normal",
                            color: "text-secondary",
                            children: "Screen Type Resolution: ".concat(
                              V(e.pid),
                            ),
                          }),
                          (0, r.jsx)(c.Text, {
                            variant: "text-md/normal",
                            color: "text-secondary",
                            children: "Window Creation: ".concat(W(e.pid)),
                          }),
                          (0, r.jsx)(c.Text, {
                            variant: "text-md/normal",
                            color: "text-secondary",
                            children: "Rendering: ".concat(K(e.pid)),
                          }),
                          (0, r.jsx)(c.Text, {
                            variant: "text-md/medium",
                            color: "text-primary",
                            children: "Bridge Status: ".concat(
                              P.get(Number(e.pid)),
                            ),
                          }),
                        ],
                      },
                      e.pid,
                    ),
                  ),
                ],
              }),
              (0, r.jsx)(c.Tooltip, {
                position: "left",
                text: "The most recent screen types we've logged, indexed by pid",
                children: (e) =>
                  (0, r.jsx)("div", {
                    ...e,
                    children: (0, r.jsxs)("div", {
                      className: S.panelGroup,
                      children: [
                        0 === Object.keys(O).length &&
                          (0, r.jsx)(c.Text, {
                            variant: "text-sm/normal",
                            color: "text-normal",
                            children: "No recent screen types",
                          }),
                        Object.values(O).map((e) => {
                          var t;
                          return (0, r.jsxs)(
                            "div",
                            {
                              children: [
                                (0, r.jsx)(c.Text, {
                                  variant: "text-md/semibold",
                                  color: "text-primary",
                                  children: U(e.pid),
                                }),
                                (0, r.jsxs)(c.Text, {
                                  variant: "text-sm/medium",
                                  color: "text-secondary",
                                  children: [
                                    "Original Screen Type: ",
                                    z(e.pid),
                                  ],
                                }),
                                null === (t = L[e.pid]) || void 0 === t
                                  ? void 0
                                  : t.reverse().map((t) => {
                                      let { screenType: n, timestamp: a } = t;
                                      return (0, r.jsx)(
                                        c.Text,
                                        {
                                          variant: "text-xs/normal",
                                          color: "text-normal",
                                          children: ""
                                            .concat(n, ":")
                                            .concat((0, f.sS)(n), " @ ")
                                            .concat(a),
                                        },
                                        ""
                                          .concat(e.pid, "-")
                                          .concat(n, "-")
                                          .concat(a),
                                      );
                                    }),
                              ],
                            },
                            e.pid,
                          );
                        }),
                      ],
                    }),
                  }),
              }),
            ],
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
      var r = n(200651),
        a = n(192379),
        l = n(120356),
        i = n.n(l),
        o = n(399606),
        s = n(544891),
        c = n(481060),
        d = n(355467),
        u = n(244526),
        m = n(853872),
        h = n(246992),
        x = n(941469),
        f = n(509345);
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
          n = Object.values((0, o.e7)([m.Z], () => m.Z.paymentSources)),
          l = async () => {
            let t = e;
            "" === t && (t = "pm_card_us"),
              await s.tn.post({
                url: "/debug/payment-source",
                body: { token: t },
                rejectWithError: !1,
              }),
              await (0, d.tZ)();
          },
          u = async () => {
            await s.tn.del({
              url: "/debug/payment-source",
              rejectWithError: !1,
            }),
              await (0, d.tZ)();
          },
          b = async () => {
            await s.tn.del({ url: "/debug/rate-limits", rejectWithError: !1 }),
              window.location.reload();
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
                      popoutLayerContext: h.O$,
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
                    (0, r.jsx)(c.Button, {
                      size: c.Button.Sizes.SMALL,
                      onClick: b,
                      children: "Reset API Rate limits and reload app",
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
          return C;
        },
      }),
        n(47120);
      var r = n(200651),
        a = n(192379),
        l = n(120356),
        i = n.n(l),
        o = n(442837),
        s = n(481060),
        c = n(493773),
        d = n(38618),
        u = n(719967),
        m = n(941469);
      let h = 1e3 / 60,
        x = 1e3 / 45,
        f = 3 * h,
        p = Math.ceil(3e3 / h);
      function b(e) {
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
            averageFrameTime: d,
            timeSinceLastDrop: m,
            onResetFrameData: x,
            droppedFramesRef: b,
            renderedFrameCount: g,
            bufferFramecountRef: v,
            frameCheckerEffect: j,
          } = (function (e, t) {
            let n = a.useRef(Array(p).fill(0)),
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
                    s.current < p && (s.current += 1),
                    (c.current = (c.current + 1) % p),
                    u > f)
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
              x = 0 === s.current ? 0 : i.current / s.current;
            return {
              currentFPS: 0 === x ? 0 : (h / x) * 60,
              averageFrameTime: x,
              timeSinceLastDrop: (performance.now() - d.current) / 1e3,
              droppedFramesRef: l,
              bufferFramecountRef: s,
              renderedFrameCount: o,
              frameCheckerEffect: m,
              onResetFrameData: u,
            };
          })(n, l),
          [C, T, _] = (function (e) {
            let t = a.useRef(Array(p).fill(0)),
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
                  l.current < p && (l.current += 1),
                  (i.current = (i.current + 1) % p);
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
          [S, y] = (function (e, t) {
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
          })(C, j),
          N = performance.now() - i.current < 5e3,
          k = T(d, v.current);
        (0, c.Z)(
          () => (
            S(),
            () => {
              y();
            }
          ),
        );
        let E = a.useCallback(() => {
          x(), _(), S();
        }, [x, _, S]);
        return (0, r.jsxs)("div", {
          className: u.panelGroup,
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
                    m < 2
                      ? "text-danger"
                      : m < 5
                        ? "text-warning"
                        : "text-primary",
                  children: b.current,
                }),
                (0, r.jsxs)(s.Text, {
                  tag: "span",
                  variant: "text-sm/normal",
                  color: "text-muted",
                  className: u.secondaryInfoText,
                  children: [
                    "(Dropped: ",
                    ((b.current / g.current) * 100).toFixed(4),
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
                          className: u.secondaryInfoText,
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
                  children: g.current.toFixed(0),
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
                  color: d > 1.1 * h ? "text-warning" : "text-secondary",
                  children: [d.toFixed(2), "ms"],
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
                        color: k > 1 ? "text-danger" : "text-secondary",
                        children: [k.toFixed(2), "ms"],
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
                                className: u.secondaryInfoText,
                                children: "(Backgrounded)",
                              }),
                            }),
                        }),
                    ],
                  }),
                }),
            }),
            (0, r.jsx)("div", {
              className: u.bottomPanelButton,
              children: (0, r.jsx)(s.Button, {
                size: s.Button.Sizes.SMALL,
                onClick: E,
                children: "Reset Frame Data",
              }),
            }),
          ],
        });
      }
      function g(e) {
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
          }, x);
          return (
            (c.current = e),
            () => {
              null != c.current && clearInterval(c.current);
            }
          );
        }, [t.dispatcher]);
        let d = (e) => {
          t.dispatcher.toggleRequestIdleCallback(e), o(e);
        };
        return (0, r.jsxs)("div", {
          className: u.panelGroup,
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
              onChange: () => d(!i),
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
      function v(e) {
        let { socket: t } = e,
          n = t.dispatcher.getDispatchTimings(),
          [l, o] = a.useState(!1);
        return (0, r.jsxs)("div", {
          className: u.panelGroup,
          children: [
            (0, r.jsx)("div", {
              className: i()(l && u.topPanelToggle),
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
      function j(e) {
        let { socket: t } = e,
          n = t.dispatcher.getSchedulerTelemetry(),
          [l, o] = a.useState(n.isTelemetryEnabled),
          [c, d] = a.useState(n.isTelemetryEnabled),
          m = (e) => {
            d(e), n.toggleTelemetry(e);
          };
        return (0, r.jsxs)("div", {
          className: u.panelGroup,
          children: [
            (0, r.jsx)(s.Checkbox, {
              value: c,
              onChange: () => m(!c),
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
              className: i()(l && u.topPanelToggle),
              children: (0, r.jsx)(s.Checkbox, {
                value: l,
                onChange: () => {
                  o((e) => {
                    let t = !e;
                    return t && m(!0), t;
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
                      className: u.bottomPanelButton,
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
      function C() {
        let e = (0, o.e7)([d.Z], () => d.Z.getSocket()),
          [t, n] = a.useState(!1);
        return (
          !(function () {
            let [, e] = a.useState({});
            a.useEffect(() => {
              let t = setInterval(() => {
                e({});
              }, x);
              return () => {
                clearInterval(t);
              };
            }, []);
          })(),
          (0, r.jsx)("div", {
            className: i()(m.panel, u.panel),
            children: (0, r.jsxs)(s.ScrollerThin, {
              className: u.panel,
              children: [
                (0, r.jsx)(b, { socket: e, isAverageFrameTime: t }),
                (0, r.jsx)(g, {
                  socket: e,
                  isAverageFrameTime: t,
                  onToggleAverageFrameTime: n,
                }),
                (0, r.jsx)(v, { socket: e }),
                (0, r.jsx)(j, { socket: e }),
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
      var r = n(200651),
        a = n(192379),
        l = n(848246),
        i = n(442837),
        o = n(481060),
        s = n(570140),
        c = n(746599),
        d = n(594174),
        u = n(246992),
        m = n(473657);
      let h = [
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
          className: m.container,
          children: [
            (0, r.jsx)(o.FormSection, {
              title: "Override HQ Streaming: Available",
              className: m.formElement,
              tag: o.FormTitleTags.H3,
              children: (0, r.jsx)(o.SingleSelect, {
                options: h,
                value: t,
                onChange: (e) => {
                  n(e);
                },
                popoutLayerContext: u.O$,
              }),
            }),
            (0, r.jsx)(o.FormSection, {
              title: "Override HQ Streaming: Activate",
              className: m.formElement,
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
              className: m.formElement,
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
      var r = n(200651);
      n(192379);
      var a = n(120356),
        l = n.n(a),
        i = n(149765),
        o = n(442837),
        s = n(481060),
        c = n(933557),
        d = n(592125),
        u = n(430824),
        m = n(496675),
        h = n(944486),
        x = n(914010),
        f = n(233608),
        p = n(71080),
        b = n(182682),
        g = n(941469);
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
        let e = (0, o.e7)([h.Z], () => h.Z.getChannelId()),
          t = (0, o.e7)([x.Z], () => x.Z.getGuildId()),
          n = (0, o.e7)([d.Z], () => d.Z.getChannel(e)),
          a = (0, o.e7)([u.Z], () => u.Z.getGuild(t)),
          j = (0, o.e7)([m.Z], () => m.Z.computePermissions(n)),
          C = (0, o.e7)([m.Z], () => m.Z.computePermissions(a)),
          T = (0, c.ZP)(n, !0),
          _ = null != n ? (0, p.IG)(n, !1, !0) : null,
          S = null != a ? f.Z.getGuildPermissionSpecMap(a) : null,
          y = Object.values(null != _ ? _ : {}).map((e) => {
            let { title: t, flag: n } = e,
              a = i.e$(j, n);
            return (0, r.jsx)(v, { title: t, can: a }, t);
          }),
          N = Object.values(null != S ? S : {}).map((e) => {
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
                      null != T
                        ? "Permissions in ".concat(T)
                        : "No channel selected",
                  }),
                  y,
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
                  N,
                ],
              }),
            ],
          }),
        });
      }
    },
    315384: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return m;
        },
      }),
        n(47120);
      var r = n(200651),
        a = n(192379),
        l = n(544891),
        i = n(481060),
        o = n(317951),
        s = n(959546),
        c = n(695063);
      let d = "/users/@me/debug/consumables/",
        u = { [o.FX]: "HD Streaming Potion", [o.D1]: "Confetti Potion" };
      function m() {
        let e,
          [t, n] = (0, a.useState)([]),
          [m, h] = (0, a.useState)(null),
          [x, f] = (0, a.useState)(!1);
        (0, a.useEffect)(
          () => (
            (async () => {
              try {
                let e = (await l.tn.get(d)).body.entitlements.map((e) =>
                  s.Z.createFromServer(e),
                );
                n(e);
              } catch (e) {
                h("Failed to fetch entitlements");
              }
            })(),
            () => {
              n([]), h(null);
            }
          ),
          [],
        );
        return (0, r.jsx)("div", {
          className: c.panel,
          children:
            null != m
              ? (0, r.jsx)(i.Text, { variant: "text-md/normal", children: m })
              : (0, r.jsx)(r.Fragment, {
                  children:
                    0 === t.length
                      ? (0, r.jsxs)(r.Fragment, {
                          children: [
                            (0, r.jsx)(i.Text, {
                              variant: "text-lg/bold",
                              children: "Create Entitlements",
                            }),
                            (0, r.jsx)(i.Button, {
                              onClick:
                                ((e = o.D1),
                                async () => {
                                  f(!0);
                                  try {
                                    let r = await l.tn.post({
                                        url: d,
                                        query: { sku_id: e },
                                        rejectWithError: !0,
                                      }),
                                      a = new s.Z(r.body.entitlement);
                                    n([...t, a]);
                                  } catch (e) {
                                    h("Failed to create entitlement");
                                  } finally {
                                    f(!1);
                                  }
                                }),
                              className: c.button,
                              look: i.ButtonLooks.OUTLINED,
                              color: i.ButtonColors.PRIMARY,
                              children: "Create Confetti Entitlement",
                            }),
                            x && (0, r.jsx)(i.Spinner, {}),
                          ],
                        })
                      : (0, r.jsxs)(r.Fragment, {
                          children: [
                            (0, r.jsxs)("div", {
                              className: c.title,
                              children: [
                                (0, r.jsx)(i.Text, {
                                  variant: "text-lg/bold",
                                  children: "Existing Entitlements",
                                }),
                                (0, r.jsx)(i.PotionIcon, {}),
                              ],
                            }),
                            (0, r.jsx)("ul", {
                              children: t.map((e) =>
                                (0, r.jsx)(
                                  "li",
                                  {
                                    children: (0, r.jsxs)("div", {
                                      children: [
                                        (0, r.jsx)(i.Text, {
                                          selectable: !0,
                                          variant: "text-md/normal",
                                          children: e.id,
                                        }),
                                        (0, r.jsxs)(i.Text, {
                                          selectable: !0,
                                          variant: "text-md/normal",
                                          children: ["Type: ", u[e.skuId]],
                                        }),
                                        (0, r.jsxs)(i.Text, {
                                          selectable: !0,
                                          variant: "text-md/normal",
                                          children: [
                                            "Consumed? : ",
                                            e.consumed ? "Yes" : "No",
                                          ],
                                        }),
                                      ],
                                    }),
                                  },
                                  e.id,
                                ),
                              ),
                            }),
                          ],
                        }),
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
      var r = n(200651);
      n(192379);
      var a = n(120356),
        l = n.n(a),
        i = n(481060),
        o = n(941469);
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
          return p;
        },
      });
      var r = n(200651);
      n(192379);
      var a = n(120356),
        l = n.n(a),
        i = n(481060),
        o = n(963886),
        s = n(110478),
        c = n(423932),
        d = n(695346),
        u = n(601948),
        m = n(594174),
        h = n(173183),
        x = n(232186);
      let f = () => {
        Promise.all([n.e("52030"), n.e("66411")])
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
      function p() {
        let e = m.default.getCurrentUser(),
          t = null == e ? void 0 : e.isStaff(),
          n = d.Rt.useSetting();
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)("div", {
              className: l()(h.buttonsContainer, x.marginBottom20),
              children: (0, r.jsx)(u.S, { isDevTools: !0 }),
            }),
            (0, r.jsx)("div", {
              className: l()(h.buttonsContainer, x.marginBottom20),
              children: (0, r.jsx)(i.Button, {
                onClick: f,
                children: "Launch MFA",
              }),
            }),
            (0, r.jsx)("div", {
              className: l()(h.buttonsContainer, x.marginBottom20),
              children: (0, r.jsx)(i.Button, {
                onClick: () => (0, c.Z)(),
                children: "Launch Vibing Wumpus",
              }),
            }),
            t &&
              (0, r.jsx)("div", {
                className: l()(h.buttonsContainer, x.marginBottom20),
                children: (0, r.jsx)(i.Button, {
                  onClick: () => (0, s.N)(),
                  children: "Launch Captcha Test Tool",
                }),
              }),
            t &&
              (0, r.jsx)("div", {
                className: l()(h.buttonsContainer, x.marginBottom20),
                children: (0, r.jsx)(i.Button, {
                  onClick: () => (0, o.E)(),
                  children: "Launch Age Verification Test Tool",
                }),
              }),
            t &&
              (0, r.jsx)("div", {
                className: l()(h.buttonsContainer, x.marginBottom20),
                children: (0, r.jsx)(i.FormSwitch, {
                  value: n,
                  onChange: (e) => d.Rt.updateSetting(e),
                  hideBorder: !0,
                  children: "Ignore profile speedbump disabled",
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
      var r = n(200651),
        a = n(192379),
        l = n(120356),
        i = n.n(l),
        o = n(442837),
        s = n(481060),
        c = n(665149),
        d = n(428530),
        u = n(484036),
        m = n(681619),
        h = n(621060),
        x = n(941469),
        f = n(668055);
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
          { TabBar: a, renderSelectedTab: l } = (0, h.Z)({ tabs: v }, []);
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
          h = l.find((e) => e._dispatchToken === d);
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
            (0, r.jsx)(m.Z, {
              columns: g,
              data: c,
              selectedRowKey: d,
              onClickRow: (e) => u(e.key),
            }),
            null != h &&
              (0, r.jsx)(j, {
                store: h,
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
      var r = n(200651),
        a = n(192379),
        l = n(120356),
        i = n.n(l),
        o = n(347469),
        s = n(613795);
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
          [u, m] = a.useState(l);
        return (0, r.jsxs)("div", {
          ref: d,
          className: s.container,
          style: { minHeight: o, height: u },
          children: [
            (0, r.jsx)(c, { resizableNode: d, minHeight: o, onResize: m }),
            (0, r.jsx)("div", {
              className: i()(s.subPanelContent, n),
              children: t,
            }),
          ],
        });
      }
    },
    41340: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return _;
        },
      }),
        n(47120);
      var r,
        a,
        l,
        i,
        o = n(200651),
        s = n(192379),
        c = n(120356),
        d = n.n(c),
        u = n(544891),
        m = n(481060),
        h = n(259580),
        x = n(55935),
        f = n(709054),
        p = n(246992),
        b = n(981631),
        g = n(474936),
        v = n(236990),
        j = n(509345);
      let C = {
          [b.O0b.UNPAID]: "Unpaid",
          [b.O0b.ACTIVE]: "Active",
          [b.O0b.PAST_DUE]: "Past Due",
          [b.O0b.CANCELED]: "Canceled",
          [b.O0b.ENDED]: "Ended",
          [b.O0b.ACCOUNT_HOLD]: "Account Hold",
          [b.O0b.BILLING_RETRY]: "Billing Retry",
          [b.O0b.PAUSED]: "Paused",
          [b.O0b.PAUSE_PENDING]: "Pause Pending",
        },
        T = [
          { label: "Unpaid", value: b.O0b.UNPAID },
          { label: "Active", value: b.O0b.ACTIVE },
          { label: "Past Due", value: b.O0b.PAST_DUE },
          { label: "Canceled", value: b.O0b.CANCELED },
          { label: "Ended", value: b.O0b.ENDED },
          { label: "Account Hold", value: b.O0b.ACCOUNT_HOLD },
          { label: "Billing Retry", value: b.O0b.BILLING_RETRY },
          { label: "Paused", value: b.O0b.PAUSED },
          { label: "Pause Pending", value: b.O0b.PAUSE_PENDING },
        ];
      function _(e) {
        var t, n, r;
        let { subscription: a, onUpdated: l } = e,
          [i, c] = s.useState(!1),
          [_, S] = s.useState(!1),
          [y, N] = s.useState(null),
          k = (e) =>
            (null == e && (e = a.status), e in C)
              ? C[e]
              : "Unknown status ".concat(e),
          E = (e) => {
            let t = new Date(e);
            return f.default.fromTimestamp(t.getTime());
          },
          I = async (e) => {
            let { status: t = a.status, premiumStreakStart: n, endedAt: r } = e,
              i = {
                subscription_status: t,
                ...(null != n ? { premium_streak_started_at: E(n) } : null),
                ...(null != r ? { ended_at: E(r) } : null),
              };
            await u.tn.patch({
              url: "/debug/subscriptions/".concat(a.id),
              body: i,
              rejectWithError: !1,
            }),
              l();
          },
          w = async () => {
            try {
              await u.tn.post({
                url: "/debug/subscriptions/".concat(a.id, "/transition"),
                body: {
                  target_datetime: new Date().toISOString(),
                  payment_type: 0,
                  transition: 2,
                  send_reminder_email: !1,
                },
                rejectWithError: !1,
              });
            } catch (e) {
              N(e.body.message);
            }
            l();
          },
          Z =
            (null === (t = g.GP[a.planIdFromItems]) || void 0 === t
              ? void 0
              : t.premiumType) === g.p9.TIER_0,
          R = null === (n = a.metadata) || void 0 === n ? void 0 : n.ended_at,
          O = null != R ? new Date(R).toISOString().substring(0, 10) : "";
        return (0, o.jsx)(o.Fragment, {
          children: (0, o.jsxs)("div", {
            className: d()(
              j.card,
              Z ? j.gradientWrapperTier0 : j.gradientWrapperTier2,
            ),
            children: [
              (0, o.jsxs)(m.Text, {
                variant: "text-md/normal",
                children: [
                  "Type: ",
                  (() => {
                    let e = a.planIdFromItems;
                    return null == e
                      ? "No plan id"
                      : e in g.GP
                        ? g.GP[e].name
                        : "Unknown plan id ".concat(e);
                  })(),
                  " ",
                ],
              }),
              (0, o.jsxs)(m.Text, {
                variant: "text-md/normal",
                children: ["ID: ", a.id, " "],
              }),
              a.status !== b.O0b.ACTIVE &&
                (0, o.jsxs)(m.Text, {
                  variant: "text-md/normal",
                  children: [
                    "Dates: ",
                    (0, x.vc)(a.createdAt, "LL"),
                    " - ",
                    (0, x.vc)(a.currentPeriodEnd, "LL"),
                  ],
                }),
              (0, o.jsxs)(m.Text, {
                style: { marginBottom: "15px" },
                variant: "text-md/normal",
                children: ["Status: ", k()],
              }),
              null != a.metadata &&
                (0, o.jsxs)("div", {
                  className: v.collapsablePane,
                  children: [
                    (0, o.jsxs)(m.Clickable, {
                      onClick: () => {
                        c(!i);
                      },
                      className: v.collapsablePaneHeader,
                      children: [
                        (0, o.jsx)("div", {
                          children: (0, o.jsx)(m.Text, {
                            variant: "text-md/bold",
                            children: "Metadata",
                          }),
                        }),
                        (0, o.jsx)(h.Z, {
                          direction: i
                            ? h.Z.Directions.UP
                            : h.Z.Directions.DOWN,
                        }),
                      ],
                    }),
                    i &&
                      (0, o.jsx)("ul", {
                        style: { marginBottom: "15px" },
                        children: Object.entries(a.metadata).map((e) => {
                          let [t, n] = e;
                          return (0, o.jsxs)(
                            "li",
                            {
                              style: { margin: "8px 0" },
                              children: [
                                (0, o.jsx)(m.Text, {
                                  variant: "text-md/bold",
                                  children: t,
                                }),
                                (0, o.jsx)(m.Text, {
                                  variant: "text-sm/normal",
                                  children: n,
                                }),
                              ],
                            },
                            t,
                          );
                        }),
                      }),
                  ],
                }),
              (0, o.jsxs)("div", {
                className: v.collapsablePane,
                children: [
                  (0, o.jsxs)(m.Clickable, {
                    onClick: () => {
                      S(!_);
                    },
                    className: v.collapsablePaneHeader,
                    children: [
                      (0, o.jsx)("div", {
                        children: (0, o.jsx)(m.Text, {
                          variant: "text-md/bold",
                          children: "Modifications",
                        }),
                      }),
                      (0, o.jsx)(h.Z, {
                        direction: _ ? h.Z.Directions.UP : h.Z.Directions.DOWN,
                      }),
                    ],
                  }),
                  _ &&
                    (0, o.jsxs)(o.Fragment, {
                      children: [
                        (0, o.jsx)(m.FormSection, {
                          title: "Status",
                          tag: m.FormTitleTags.H3,
                          className: v.formSection,
                          children: (0, o.jsx)(m.Select, {
                            serialize: (e) => k(e),
                            isSelected: (e) => e === a.status,
                            options: T,
                            select: (e) => I({ status: e }),
                            popoutLayerContext: p.O$,
                          }),
                        }),
                        (0, o.jsxs)(m.FormSection, {
                          title: "Renew",
                          tag: m.FormTitleTags.H3,
                          className: v.formSection,
                          children: [
                            (0, o.jsx)(m.Button, {
                              size: m.Button.Sizes.SMALL,
                              onClick: (e) => w(),
                              children: "Renew Subscription",
                            }),
                            null !== y &&
                              (0, o.jsx)(m.FormErrorBlock, {
                                className: v.error,
                                onDismiss: () => N(null),
                                children: y,
                              }),
                          ],
                        }),
                        (0, o.jsx)(m.FormSection, {
                          title: "Override Premium Streak Start Date",
                          tag: m.FormTitleTags.H3,
                          className: v.formSection,
                          children: (0, o.jsx)("input", {
                            type: "date",
                            value:
                              null === (r = a.premiumSince) || void 0 === r
                                ? void 0
                                : r.toISOString().substring(0, 10),
                            onChange: (e) =>
                              I({ premiumStreakStart: e.target.value }),
                          }),
                        }),
                        (0, o.jsx)(m.FormSection, {
                          title: "Override Metadata Ended At Date",
                          tag: m.FormTitleTags.H3,
                          className: v.formSection,
                          children: (0, o.jsx)("input", {
                            type: "date",
                            value: O,
                            onChange: (e) => I({ endedAt: e.target.value }),
                          }),
                        }),
                      ],
                    }),
                ],
              }),
            ],
          }),
        });
      }
      ((l = r || (r = {}))[(l.DEFAULT = 0)] = "DEFAULT"),
        ((i = a || (a = {}))[(i.RENEW = 2)] = "RENEW");
    },
    351930: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return g;
        },
      }),
        n(47120);
      var r = n(200651),
        a = n(192379),
        l = n(120356),
        i = n.n(l),
        o = n(544891),
        s = n(481060),
        c = n(255078),
        d = n(246992),
        u = n(41340),
        m = n(981631),
        h = n(474936),
        x = n(941469),
        f = n(509345);
      let p = async () =>
          (
            await o.tn.get({
              url: m.ANM.BILLING_SUBSCRIPTIONS,
              query: { include_inactive: !0, limit: 5 },
              rejectWithError: !1,
            })
          ).body.map((e) => c.Z.createFromServer(e)),
        b = [
          { label: "Nitro Monthly", value: h.Xh.PREMIUM_MONTH_TIER_2 },
          { label: "Nitro Yearly", value: h.Xh.PREMIUM_YEAR_TIER_2 },
          { label: "Nitro Classic Monthly", value: h.Xh.PREMIUM_MONTH_TIER_1 },
          { label: "Nitro Classic Yearly", value: h.Xh.PREMIUM_YEAR_TIER_1 },
          { label: "Basic Monthly", value: h.Xh.PREMIUM_MONTH_TIER_0 },
          { label: "Basic Yearly", value: h.Xh.PREMIUM_YEAR_TIER_0 },
          { label: "Reverse Trial 1-week", value: h.dO },
          { label: "Reverse Trial 2-week", value: h.xT },
        ];
      function g() {
        let [e, t] = a.useState("511651880837840896"),
          [n, l] = a.useState([]),
          c = async () => {
            l(await p());
          };
        a.useEffect(() => {
          c();
        }, []);
        let h = a.useMemo(() => n.find((e) => e.status === m.O0b.ACTIVE), [n]),
          g = a.useMemo(
            () =>
              n
                .filter((e) => e.status !== m.O0b.ACTIVE)
                .sort((e, t) => (e.id > t.id ? -1 : 1)),
            [n],
          ),
          v = async () => {
            await o.tn.post({
              url: "/debug/subscription",
              body: { plan_id: e },
              rejectWithError: !1,
            }),
              await c();
          },
          j = async () => {
            await o.tn.del({ url: "/debug/subscription", rejectWithError: !1 }),
              await c();
          };
        return (0, r.jsx)(s.ScrollerThin, {
          className: i()(x.panel),
          children: (0, r.jsxs)("div", {
            className: f.panelInner,
            children: [
              (0, r.jsx)(s.Text, {
                style: { marginBottom: "8px" },
                variant: "text-lg/bold",
                children: "Manage Subscription",
              }),
              (0, r.jsx)("section", {
                className: i()([f.section, f.buttons]),
                children:
                  null == h &&
                  (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(s.Text, {
                        variant: "text-md/normal",
                        children: " Subscription Type",
                      }),
                      (0, r.jsx)(s.Select, {
                        serialize: (e) => e,
                        isSelected: (t) => t === e,
                        options: b,
                        select: t,
                        popoutLayerContext: d.O$,
                      }),
                      (0, r.jsx)(s.Button, {
                        size: s.Button.Sizes.SMALL,
                        onClick: v,
                        children: "Create Subscription",
                      }),
                    ],
                  }),
              }),
              (0, r.jsx)(s.Text, {
                style: { marginBottom: "8px" },
                variant: "text-lg/bold",
                children: "Bulk action",
              }),
              (0, r.jsx)("section", {
                className: i()([f.section, f.buttons]),
                children: (0, r.jsx)(s.Button, {
                  size: s.Button.Sizes.SMALL,
                  onClick: j,
                  children: "End All Subscriptions",
                }),
              }),
              null != h &&
                (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)(s.Text, {
                      style: { marginTop: "15px" },
                      variant: "text-md/normal",
                      children: "Existing active subscription",
                    }),
                    (0, r.jsx)(u.Z, { subscription: h, onUpdated: c }),
                  ],
                }),
              g.length > 0 &&
                (0, r.jsxs)("div", {
                  style: { marginTop: "8px" },
                  children: [
                    (0, r.jsx)(s.Text, {
                      style: { marginTop: "15px" },
                      variant: "text-md/normal",
                      children: "Previous subscriptions",
                    }),
                    g.map((e) =>
                      (0, r.jsx)(u.Z, { subscription: e, onUpdated: c }, e.id),
                    ),
                  ],
                }),
            ],
          }),
        });
      }
    },
    681619: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var r = n(200651),
        a = n(192379),
        l = n(120356),
        i = n.n(l),
        o = n(481060),
        s = n(941469);
      function c(e) {
        let {
            columns: t,
            data: n,
            className: l,
            rowClassName: c,
            onClickRow: d,
            selectedRowKey: u,
            rowHeight: m = 40,
          } = e,
          h = a.useMemo(
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
                  children: h.map((e) => {
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
            rowHeight: m,
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
                  children: h.map((e) => {
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
                        height: "calc(".concat(m, "px - ").concat(16, "px)"),
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
          return E;
        },
      }),
        n(47120);
      var r = n(200651),
        a = n(192379),
        l = n(120356),
        i = n.n(l),
        o = n(544891),
        s = n(704215),
        c = n(481060),
        d = n(937579),
        u = n(675478),
        m = n(431),
        h = n(572004),
        x = n(74538),
        f = n(246992),
        p = n(981631),
        b = n(474936),
        g = n(941469),
        v = n(509345);
      let j = async () => {
          try {
            let { body: e } = await o.tn.get({
              url: p.ANM.USER_OFFER_IDS,
              rejectWithError: !0,
            });
            return e;
          } catch (e) {
            return [];
          }
        },
        C = async (e, t) => {
          try {
            await o.tn.post({
              url: p.ANM.CREATE_USER_OFFER(e, t),
              rejectWithError: !0,
            });
          } catch {
          } finally {
            await (0, d.T)();
          }
        },
        T = async (e, t) => {
          try {
            await o.tn.del({
              url: p.ANM.DELETE_USER_OFFER(e, t),
              rejectWithError: !0,
            });
          } catch {
          } finally {
            await (0, d.T)();
          }
        },
        _ = async (e, t) => {
          try {
            await o.tn.post({
              url: p.ANM.UNACK_USER_OFFER(e, t),
              rejectWithError: !0,
            });
          } catch {
          } finally {
            await (0, d.T)();
          }
        },
        S = async () => {
          try {
            let { body: e } = await o.tn.get({
              url: p.ANM.USER_OFFERS,
              rejectWithError: !0,
            });
            return e;
          } catch (e) {
            return { trial: [], discount: [] };
          }
        },
        y = async () => {
          try {
            await o.tn.del({ url: p.ANM.USER_OFFERS, rejectWithError: !0 });
          } catch {
          } finally {
            await m.Z.forceReset(), await (0, d.T)();
          }
        };
      function N(e) {
        var t, n, l, o;
        let { offer: s, offerOptions: u, forceRefetch: m } = e,
          [f, p] = a.useState(!1),
          [g, j] = a.useState(!1),
          [C, S] = a.useState(!1),
          [y, N] = a.useState(!1);
        a.useEffect(() => {
          C && N(!0);
          let e = setTimeout(() => {
            N(!1);
          }, 500);
          return () => {
            clearTimeout(e);
          };
        }, [C]);
        let {
            id: k,
            expires_at: E,
            redeemed_at: I,
            trial_id: w,
            subscription_trial: Z,
            referrer: R,
          } = s,
          O =
            null !==
              (n =
                null ===
                  (t = u.find((e) => {
                    let { value: t } = e;
                    return t === w;
                  })) || void 0 === t
                  ? void 0
                  : t.label) && void 0 !== n
              ? n
              : "Unknown";
        null != R && (O = "".concat(O, " from @").concat(R.username));
        let B = null != E,
          P = null != E && new Date(E).getTime() < Date.now(),
          L = (null == Z ? void 0 : Z.sku_id) === b.Si.TIER_0,
          A = async () => {
            S(!0), B ? await _(k, "trial") : await (0, d.a)(s), m(), S(!1);
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
        let D = "Active";
        return (
          B && (D = "Acknowledged"),
          P && (D = "Expired"),
          (0, r.jsxs)("div", {
            className: i()(
              v.card,
              L ? v.gradientWrapperTier0 : v.gradientWrapperTier2,
            ),
            children: [
              (0, r.jsxs)("div", {
                className: i()(v.row, v.nameRow),
                children: [
                  (0, r.jsx)(c.Heading, {
                    variant: "heading-lg/semibold",
                    color: "always-white",
                    children: O,
                  }),
                  (0, r.jsx)(c.Clickable, {
                    onClick: async () => {
                      S(!0), await T(k, "trial"), m(), S(!1);
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
                  (0, h.JG)(k), p(!0);
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
                  (0, h.JG)(w), j(!0);
                },
                children: [
                  (0, r.jsxs)(c.Text, {
                    variant: "eyebrow",
                    color: "always-white",
                    children: ["Trial: ", w],
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
                      [v.acked]: B,
                      [v.expired]: P,
                    }),
                    children: (0, r.jsx)(c.Text, {
                      variant: "eyebrow",
                      color: "Acknowledged" === D ? void 0 : "always-white",
                      children: D,
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
                className: i()(v.loadingContainer, { [v.isLoading]: C || y }),
                children: (0, r.jsx)(c.Spinner, {}),
              }),
            ],
          })
        );
      }
      function k(e) {
        var t, n;
        let { offer: l, offerOptions: o, forceRefetch: s } = e,
          [u, m] = a.useState(!1),
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
            expires_at: S,
            applied_at: y,
            discount_id: N,
            discount: k,
          } = l,
          E =
            null !==
              (n =
                null ===
                  (t = o.find((e) => {
                    let { value: t } = e;
                    return t === N;
                  })) || void 0 === t
                  ? void 0
                  : t.label) && void 0 !== n
              ? n
              : "Unknown",
          I = null != S,
          w = null != S && new Date(S).getTime() < Date.now(),
          Z = async () => {
            b(!0),
              I ? await _(C, "discount") : await (0, d.a)(void 0, l),
              s(),
              b(!1);
          };
        a.useEffect(() => {
          if (u) {
            let e = setTimeout(() => {
              m(!1);
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
          w && (R = "Expired"),
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
                    children: E,
                  }),
                  (0, r.jsx)(c.Clickable, {
                    onClick: async () => {
                      b(!0), await T(C, "discount"), s(), b(!1);
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
                  (0, h.JG)(C), m(!0);
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
                  (0, h.JG)(N), f(!0);
                },
                children: [
                  (0, r.jsxs)(c.Text, {
                    variant: "eyebrow",
                    color: "text-normal",
                    children: ["Discount: ", N],
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
              (null == k ? void 0 : k.amount) != null &&
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
                      [v.expired]: w,
                    }),
                    children: (0, r.jsx)(c.Text, {
                      variant: "eyebrow",
                      color: "Acknowledged" === R ? void 0 : "always-white",
                      children: R,
                    }),
                  }),
                  null != y &&
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
      function E() {
        let [e, t] = a.useState([]),
          [n, l] = a.useState([]),
          [o, h] = a.useState(),
          [x, p] = a.useState(),
          [b, T] = a.useState([]),
          [_, E] = a.useState([]),
          [I, w] = a.useState(!0);
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
                null == o && h(n[0].value),
                null == x && p(r[0].value);
            });
        }, [e, n, o, x, I]),
          a.useEffect(() => {
            I &&
              (w(!1),
              m.Z.forceReset(),
              (0, d.T)(),
              S().then((e) => {
                T(e.trial.sort((e, t) => e.id.localeCompare(t.id))),
                  E(e.discount.sort((e, t) => e.id.localeCompare(t.id)));
              }));
          }, [I]);
        let Z = async () => {
            null != o && (await C(o, "trial"), w(!0));
          },
          R = async () => {
            null != x && (await C(x, "discount"), w(!0));
          },
          O = async () => {
            await y(), w(!0);
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
                        onClick: () => w(!0),
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
                        select: (e) => h(e),
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
                        N,
                        {
                          offer: t,
                          offerOptions: e,
                          forceRefetch: () => w(!0),
                        },
                        t.id,
                      ),
                    ),
                  ],
                }),
              _.length > 0 &&
                (0, r.jsxs)("section", {
                  className: v.section,
                  children: [
                    (0, r.jsx)(c.Heading, {
                      variant: "heading-md/semibold",
                      children: "Existing Discount Offers",
                    }),
                    _.map((e) =>
                      (0, r.jsx)(
                        k,
                        {
                          offer: e,
                          offerOptions: n,
                          forceRefetch: () => w(!0),
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
      var r = n(200651),
        a = n(192379),
        l = n(120356),
        i = n.n(l),
        o = n(658722),
        s = n.n(o),
        c = n(913527),
        d = n.n(c),
        u = n(442837),
        m = n(481060),
        h = n(570140),
        x = n(665149),
        f = n(55935),
        p = n(120816),
        b = n(31336),
        g = n(257785),
        v = n(484036),
        j = n(681619),
        C = n(621060),
        T = n(388032),
        _ = n(931933),
        S = n(941469);
      let y = [
          {
            key: "id",
            cellClassName: _.eventColumn,
            render(e) {
              let { experimentId: t } = e;
              return t;
            },
          },
          {
            key: "bucket",
            cellClassName: _.locationColumn,
            render(e) {
              let { descriptor: t } = e;
              return t.bucket;
            },
          },
          {
            key: "timestamp",
            cellClassName: _.locationColumn,
            render(e) {
              let { timestamp: t } = e;
              return t.toLocaleString();
            },
          },
        ],
        N = [
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
                    className: i()(S.headerBar, _.subPanelHeaderBar),
                    children: [
                      (0, r.jsx)(x.ZP.Icon, {
                        icon: m.AnalyticsIcon,
                        tooltip: t,
                      }),
                      (0, r.jsx)(x.ZP.Title, { children: t }),
                    ],
                  }),
                  (0, r.jsxs)(g.E, {
                    className: _.commonProperties,
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
          { TabBar: f, renderSelectedTab: g } = (0, C.Z)({ tabs: N }, []),
          k = (0, u.e7)([p.Z], () => p.Z.trackTriggers),
          E = a.useCallback((e) => {
            h.Z.dispatch({ type: "SET_TRACK_TRIGGERS", enabled: e });
          }, []);
        return (0, r.jsxs)("div", {
          ref: n,
          className: i()(S.panel, _.panel),
          children: [
            (0, r.jsxs)("div", {
              className: _.toolbar,
              children: [
                (0, r.jsx)("div", {
                  title: "Enables tracking of all triggers",
                  className: _.triggersEnable,
                  children: (0, r.jsx)(m.Switch, {
                    checked: k,
                    onChange: E,
                    className: _.__invalid_toolbarSwitch,
                  }),
                }),
                (0, r.jsx)(m.Button, {
                  className: _.toolbarButton,
                  look: m.Button.Looks.BLANK,
                  size: m.Button.Sizes.ICON,
                  onClick: b.Zw,
                  children: (0, r.jsx)("span", {
                    title: T.intl.string(T.t.VkKicX),
                    children: (0, r.jsx)(m.TrashIcon, {
                      size: "md",
                      color: "currentColor",
                      "aria-label": T.intl.string(T.t.VkKicX),
                    }),
                  }),
                }),
                (0, r.jsx)(m.SearchBar, {
                  className: _.searchBar,
                  query: e,
                  onChange: t,
                  onClear: () => t(""),
                  placeholder: "Search by experiment id",
                }),
              ],
            }),
            (0, r.jsx)(j.Z, {
              columns: y,
              data: o,
              selectedRowKey: c,
              onClickRow: (e) => d(e.key),
            }),
            null != x &&
              (0, r.jsxs)(v.Z, {
                className: _.subPanel,
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
          return X;
        },
        H8: function () {
          return r;
        },
        HI: function () {
          return q;
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
          return z;
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
        o = n(192379),
        s = n(216397),
        c = n(764160),
        d = n(808131),
        u = n(757028),
        m = n(694626),
        h = n(855930),
        x = n(385787),
        f = n(566162),
        p = n(567027),
        b = n(461195),
        g = n(857702),
        v = n(20450),
        j = n(312976),
        C = n(147591),
        T = n(135164),
        _ = n(940172),
        S = n(81011),
        y = n(981613),
        N = n(762399),
        k = n(232112),
        E = n(53796),
        I = n(402332),
        w = n(375924),
        Z = n(596136),
        R = n(341901),
        O = n(856308),
        B = n(665352),
        P = n(394900),
        L = n(661105),
        A = n(525169),
        D = n(433517),
        F = n(190558),
        M = n(231338);
      let H = {
          sRGB: s.Z,
          A98RGB: c.Z,
          ACEScc: d.Z,
          ACEScg: u.Z,
          HPLuv: m.Z,
          HSL: h.Z,
          HSLuv: x.Z,
          HSV: f.Z,
          HWB: p.Z,
          ICTCP: b.Z,
          JzCzHz: g.Z,
          Jzazbz: v.Z,
          LCH: j.Z,
          LCHuv: C.Z,
          Lab: T.Z,
          Lab_D65: _.Z,
          Luv: S.Z,
          OKLCH: y.Z,
          OKLab: N.Z,
          P3: k.Z,
          ProPhoto: E.Z,
          REC_2020: I.Z,
          REC_2100_HLG: w.Z,
          REC_2100_PQ: Z.Z,
          XYZ_D50: R.Z,
          XYZ_D65: O.Z,
        },
        G = Object.fromEntries(Object.keys(H).map((e) => [e, e]));
      Object.values(H).forEach((e) => B.Z.register(e));
      let { SemanticColors: U } = F.V,
        z = U,
        V =
          CSS.supports("color", "color(display-p3 1 0 0)") &&
          CSS.supports("color", "color(display-p3 1 0 0 / 1)");
      function W(e, t) {
        let [n, r] = o.useState(() => {
          let n = D.K.get(e);
          return null != n ? n : t;
        });
        return (
          o.useEffect(() => {
            D.K.set(e, n);
          }, [e, n]),
          [n, r]
        );
      }
      function K(e) {
        let t = z[e];
        return {
          name: e,
          colors: Object.fromEntries(
            Object.values(M.BR).map((e) => [
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
      function X(e) {
        return { ...e, highlight: !e.highlight };
      }
      function q(e) {
        return (0, P.Z)((0, L.Z)(e, s.Z), { format: "hex" });
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
          c = (0, L.Z)(n, o),
          d = (0, A.CD)(c, "white", 1 - a, { space: o, outputSpace: s.Z }),
          u = (0, A.CD)(c, "black", 1 - l, { space: o, outputSpace: s.Z }),
          m = Math.floor(r / 2),
          h = r - m,
          x = (0, A.w6)(d, c, {
            steps: m,
            outputSpace: o,
            space: o,
            progression: (e) => e ** i,
          }),
          f = (0, A.w6)(u, c, {
            steps: h,
            outputSpace: o,
            space: o,
            progression: (e) => e ** i,
          }),
          p = [];
        for (let e = 0; e < m; e++) {
          let t = x(e / m);
          p.push(t);
        }
        p.push(c);
        for (let e = 1; e < h; e++) {
          let t = f(1 - e / h);
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
      var r = n(200651),
        a = n(192379),
        l = n(120356),
        i = n.n(l),
        o = n(481060),
        s = n(424625),
        c = n(823379),
        d = n(246992),
        u = n(941469);
      let m = a.forwardRef(function (e, t) {
        let { id: n, selected: a, onClick: l, children: s } = e;
        return (0, r.jsx)(o.Clickable, {
          className: i()(u.tabItem, { [u.selected]: a }),
          "data-tab-id": n,
          innerRef: t,
          onClick: l,
          children: s,
        });
      });
      function h(e) {
        let { tabs: t, selectedTabId: n, onSelectTab: l } = e,
          i = a.useRef(null),
          h = a.useRef(0),
          x = a.useRef(new Map()),
          [f, p] = a.useState([]),
          b = a.useCallback(() => {
            var e, r, a, l;
            if (null == i.current) return;
            let o = [],
              s = i.current.getBoundingClientRect().width;
            if (s !== h.current) {
              for (let i of ((h.current = s),
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
                    m,
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
          m = a.useCallback(
            () =>
              (0, r.jsx)(h, {
                tabs: o,
                selectedTabId: d,
                onSelectTab: (e) => {
                  u(e), null == c || c(e);
                },
              }),
            [d, u, c, ...t],
          );
        return {
          TabBar: m,
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
    214852: function (e, t, n) {
      n.d(t, {
        z: function () {
          return i;
        },
      }),
        n(47120);
      var r = n(192379),
        a = n(442837),
        l = n(353926);
      function i(e) {
        let [t, n] = (0, a.Wu)([l.Z], () => [
          l.Z.getAllUserExperimentDescriptors(),
          l.Z.getGuildExperiments(),
        ]);
        r.useEffect(() => {
          e.trigger();
        }, [e, t, n]);
      }
    },
    374794: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var r = n(200651);
      n(192379);
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
          multiple: m = !1,
          disabled: h = !1,
          submitting: x = !1,
          ...f
        } = e;
        return (0, r.jsx)(i.FocusRing, {
          within: !0,
          children: (0, r.jsxs)("div", {
            className: l()(
              n,
              (0, i.getButtonStyle)({ ...f, submitting: x, disabled: h }),
            ),
            "aria-disabled": h,
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
    258732: function (e, t, n) {
      var r = n(544891),
        a = n(981631);
      t.Z = {
        updatePrivateChannelRecipientFlags: (e, t) =>
          r.tn.patch({
            url: a.ANM.CHANNEL_RECIPIENT_ME(e),
            body: { flags: t },
            rejectWithError: !1,
          }),
      };
    },
    106371: function (e, t, n) {
      var r = n(818083);
      let a = (0, r.B)({
        kind: "user",
        id: "2024-08_reaction_push_notifications_user",
        label: "In App Notifications for Reactions",
        defaultConfig: {
          enableInAppNotifications: !1,
          enableNotificationsForAllReactions: !1,
        },
        treatments: [
          {
            id: 1,
            label: "Enable In App Notifications for Reactions (First Reaction)",
            config: {
              enableInAppNotifications: !0,
              enableNotificationsForAllReactions: !1,
            },
          },
          {
            id: 2,
            label: "Enable In App Notifications for Reactions (All Reactions)",
            config: {
              enableInAppNotifications: !0,
              enableNotificationsForAllReactions: !0,
            },
          },
          {
            id: 3,
            label: "Enable In App Notifications for Reactions (All Reactions)",
            config: {
              enableInAppNotifications: !0,
              enableNotificationsForAllReactions: !0,
            },
          },
        ],
      });
      (0, r.B)({
        kind: "guild",
        id: "2024-08_reaction_push_notifications_guild",
        label: "In App Notifications for Reactions (Guild)",
        defaultConfig: { enableInAppNotifications: !1 },
        treatments: [
          {
            id: 1,
            label: "Enable In App Notifications for Reactions",
            config: { enableInAppNotifications: !0 },
          },
        ],
      }),
        (t.Z = a);
    },
    905423: function (e, t, n) {
      var r = n(512969),
        a = n(65400),
        l = n(731965),
        i = n(893607),
        o = n(981631);
      function s(e) {
        let t = (0, r.LX)(null != e ? e : "", {
          path: o.Z5c.CHANNEL(
            i.Hw.guildId(),
            i.Hw.channelId({ optional: !0 }),
            ":messageId?",
          ),
        });
        if (null != t) {
          let { guildId: e, channelId: n } = t.params;
          return {
            guildId: e === o.ME ? null : e,
            channelId: null != n ? n : null,
          };
        }
        let n = (0, r.LX)(null != e ? e : "", {
          path: o.Z5c.GUILD_BOOSTING_MARKETING(i.Hw.guildId()),
        });
        return null != n
          ? { guildId: n.params.guildId, channelId: null }
          : { guildId: null, channelId: null };
      }
      t.Z = (0, a.F)((e) => ({
        path: null,
        basePath: "/",
        guildId: null,
        channelId: null,
        updatePath(t) {
          let { guildId: n, channelId: r } = s(t);
          (0, l.j)(() => e({ path: t, guildId: n, channelId: r }));
        },
        resetPath(t) {
          let { guildId: n, channelId: r } = s(t);
          (0, l.j)(() =>
            e({ path: null, guildId: n, channelId: r, basePath: t }),
          );
        },
      }));
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
    460562: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var r = n(200651);
      n(192379);
      var a = n(331595);
      function l(e) {
        let {
          width: t = 32,
          height: n = 32,
          color: l = "currentColor",
          ...i
        } = e;
        return (0, r.jsxs)("svg", {
          ...(0, a.Z)(i),
          width: t,
          height: n,
          viewBox: "0 0 12 12",
          fill: "none",
          children: [
            (0, r.jsx)("path", { d: "M7.25 1H4.75V7.25H7.25V1Z", fill: l }),
            (0, r.jsx)("path", {
              d: "M4.75 9.75C4.75 10.4167 5.33333 11 6 11C6.66667 11 7.25 10.4167 7.25 9.75C7.25 9.08333 6.66667 8.5 6 8.5C5.33333 8.5 4.75 9.08333 4.75 9.75Z",
              fill: l,
            }),
          ],
        });
      }
    },
    671533: function (e, t, n) {
      n(411104);
      var r,
        a,
        l = n(200651);
      n(192379);
      var i = n(120356),
        o = n.n(i),
        s = n(331595),
        c = n(485270);
      ((a = r || (r = {})).LEFT = "LEFT"),
        (a.RIGHT = "RIGHT"),
        (a.UP = "UP"),
        (a.DOWN = "DOWN"),
        (a.UP_LEFT = "UP_LEFT"),
        (a.DOWN_RIGHT = "DOWN_RIGHT");
      let d = (e) => {
        let {
          width: t = 24,
          height: n = 24,
          color: r = "currentColor",
          direction: a,
          foreground: i,
          className: d,
          title: u,
          ...m
        } = e;
        return (0, l.jsxs)("svg", {
          ...(0, s.Z)(m),
          width: t,
          height: n,
          className: o()(
            d,
            (function (e) {
              switch (e) {
                case "LEFT":
                  return c.left;
                case "RIGHT":
                  return c.right;
                case "UP":
                  return null;
                case "DOWN":
                  return c.down;
                case "UP_LEFT":
                  return c.upLeft;
                case "DOWN_RIGHT":
                  return c.downRight;
                default:
                  throw Error("Invalid Direction ".concat(e));
              }
            })(a),
          ),
          viewBox: "0 0 24 24",
          children: [
            null != u ? (0, l.jsx)("title", { children: u }) : null,
            (0, l.jsx)("polygon", {
              className: i,
              fill: r,
              fillRule: "nonzero",
              points:
                "13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8",
            }),
          ],
        });
      };
      (d.Directions = r), (t.Z = d);
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
          return h;
        },
        ac: function () {
          return b;
        },
        bL: function () {
          return f;
        },
        g0: function () {
          return r;
        },
        gl: function () {
          return m;
        },
        rr: function () {
          return x;
        },
        xH: function () {
          return g;
        },
      }),
        n(47120);
      var r,
        a,
        l = n(695346),
        i = n(486472),
        o = n(430824);
      n(626135);
      var s = n(981631),
        c = n(388032);
      let d = 864e5 * s.eBq;
      function u() {
        let e = l.h2.getSetting();
        return (
          0 === i.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != o.Z.getGuild(e))),
          new Set(e)
        );
      }
      function m() {
        let e = l.zA.getSetting();
        return (
          0 === i.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != o.Z.getGuild(e))),
          new Set(e)
        );
      }
      function h() {
        let e = l.SE.getSetting();
        return (
          0 === i.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != o.Z.getGuild(e))),
          new Set(e)
        );
      }
      function x() {
        let e = l.iH.getSetting();
        return (
          0 === i.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != o.Z.getGuild(e))),
          new Set(e)
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
          !!(!t.verified || t.isStaff()) ||
          (null != e && d > Date.now() - new Date(e.created_at).getTime())
        );
      }
      ((a = r || (r = {}))[(a.UNDECIDED = 0)] = "UNDECIDED"),
        (a[(a.OPTIN = 1)] = "OPTIN"),
        (a[(a.OPTOUT = 2)] = "OPTOUT");
      let b = { 0: void 0, 1: !0, 2: !1 };
      function g() {
        return [
          {
            name: c.intl.string(c.t["/yLMRU"]),
            desc: c.intl.string(c.t["3fzkPj"]),
            value: 1,
          },
          {
            name: c.intl.string(c.t["21fP2d"]),
            desc: c.intl.string(c.t.ggJ9jY),
            value: 2,
          },
          {
            name: c.intl.string(c.t["OWIo8/"]),
            desc: c.intl.string(c.t.HqYXp6),
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
        m = n(358085),
        h = n(557177),
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
      let b = m.isPlatformEmbedded && (0, m.isWindows)(),
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
        C = l().throttle(h.GN, 1e3, { leading: !0 });
      function T() {
        x.ZP.flashFrame(!1);
      }
      b &&
        (window.addEventListener("focus", T), x.ZP.on("MAIN_WINDOW_FOCUS", T));
      let _ = window.Notification;
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
            p(this, "id", _._id++),
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
        (_ = r));
      function S() {
        return null != _ && "granted" === _.permission;
      }
      function y(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          n = arguments.length > 2 ? arguments[2] : void 0;
        e.includes("message") ? C(e, t, void 0, n) : (0, h.GN)(e, t);
      }
      function N(e) {
        return (
          (d.Z.disableNotifications && null == e.overrideStreamerMode) ||
          !S() ||
          (m.isPlatformEmbedded && !x.ZP.shouldDisplayNotifications())
        );
      }
      t.Z = {
        hasPermission: S,
        requestPermission: function (e) {
          null != _ &&
            _.requestPermission(() => {
              null != e && e(S());
            });
        },
        showNotification: function (e, t, n, r, a) {
          var i, o, s, d;
          let h;
          if (N(a)) {
            null != a.sound &&
              !1 !== a.playSoundIfDisabled &&
              y(
                a.sound,
                null !== (o = a.volume) && void 0 !== o ? o : 1,
                a.soundpack,
              );
            return;
          }
          null != a.sound &&
            y(
              a.sound,
              null !== (s = a.volume) && void 0 !== s ? s : 1,
              a.soundpack,
            );
          let p =
            null !== (d = null == a ? void 0 : a.tag) && void 0 !== d
              ? d
              : null;
          (0, m.isLinux)() && (n = l().escape(n));
          let g = { icon: e, body: n, tag: p, silent: !0 };
          b && c.Z.taskbarFlash && x.ZP.flashFrame(!0);
          try {
            h = new _(t, g);
          } catch (e) {
            return null;
          }
          return (null === (i = a.onShown) || void 0 === i || i.call(a),
          !a.omitViewTracking && u.default.track(f.rMx.NOTIFICATION_VIEWED, r),
          (h.onclick = () => {
            var e;
            m.isPlatformEmbedded ? x.ZP.focus() : (window.focus(), h.close()),
              !a.omitClickTracking &&
                u.default.track(f.rMx.NOTIFICATION_CLICKED, r),
              null === (e = a.onClick) || void 0 === e || e.call(a);
          }),
          j && setTimeout(() => h.close(), 5e3),
          v)
            ? h
            : {
                close() {
                  var e;
                  null == h ||
                    null === (e = h.onclose) ||
                    void 0 === e ||
                    e.call(h);
                },
              };
        },
        disabled: N,
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
    744149: function (e, t, n) {
      e.exports = {
        button: "button_a467ac",
        default: "default_a467ac",
        filled: "filled_a467ac",
      };
    },
    261121: function (e, t, n) {
      e.exports = {
        streamerModeEnabled: "streamerModeEnabled_c50c8b",
        streamerModeEnabledImage: "streamerModeEnabledImage_c50c8b",
        streamerModeEnabledBtn: "streamerModeEnabledBtn_c50c8b",
        disabled: "disabled_c50c8b",
      };
    },
    363969: function (e, t, n) {
      e.exports = {
        button: "button_a79c58",
        open: "open_a79c58",
        withHighlight: "withHighlight_a79c58",
      };
    },
    272786: function (e, t, n) {
      e.exports = {
        container: "container_effbe2",
        inner: "inner_effbe2",
        disabled: "disabled_effbe2",
        input: "input_effbe2",
        tag: "tag_effbe2",
        small: "small_effbe2",
        medium: "medium_effbe2",
        large: "large_effbe2",
        richTag: "richTag_effbe2",
        richTagInput: "richTagInput_effbe2",
        tagLabel: "tagLabel_effbe2",
        tagRoleColor: "tagRoleColor_effbe2",
        close: "close_effbe2",
        iconLayout: "iconLayout_effbe2",
        iconContainer: "iconContainer_effbe2",
        icon: "icon_effbe2",
        visible: "visible_effbe2",
        clear: "clear_effbe2",
      };
    },
    840814: function (e, t, n) {
      e.exports = {
        container: "container_b6cd66",
        flexContainer: "flexContainer_b6cd66",
        shrinkingContainer: "shrinkingContainer_b6cd66",
        actions: "actions_b6cd66",
        resetButton: "resetButton_b6cd66",
        message: "message_b6cd66",
      };
    },
    583535: function (e, t, n) {
      e.exports = {
        tabBarItemContainer: "tabBarItemContainer_e7c031",
        searchFilterCount: "searchFilterCount_e7c031",
        searchBar: "searchBar_e7c031",
      };
    },
    670189: function (e, t, n) {
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
    971139: function (e, t, n) {
      e.exports = {
        hoverRoll: "hoverRoll_e07331",
        forceHover: "forceHover_e07331",
        disabled: "disabled_e07331",
        default: "default_e07331",
        hovered: "hovered_e07331",
      };
    },
    44529: function (e, t, n) {
      e.exports = {
        locatorEntry: "locatorEntry_f63175",
        entryAuthor: "entryAuthor_f63175",
      };
    },
    298149: function (e, t, n) {
      e.exports = {
        content: "content_e5c341",
        cell: "cell_e5c341",
        cellType: "cellType_e5c341",
        cellCount: "cellCount_e5c341",
      };
    },
    542508: function (e, t, n) {
      e.exports = {
        container: "container_dc71f0",
        imageContainer: "imageContainer_dc71f0",
        image: "image_dc71f0",
        backgroundImage: "backgroundImage_dc71f0",
        backgroundImageFilter: "backgroundImageFilter_dc71f0",
        loader: "loader_dc71f0",
      };
    },
    771466: function (e, t, n) {
      e.exports = {
        container: "container_d69a57",
        resizeHandle: "resizeHandle_d69a57",
        sidebarContent: "sidebarContent_d69a57",
        mobileHeaderCollapsed: "mobileHeaderCollapsed_d69a57",
        mobileContainerExpanded: "mobileContainerExpanded_d69a57",
        layerContainer: "layerContainer_d69a57",
      };
    },
    725217: function (e, t, n) {
      e.exports = {
        inspectorContainer: "inspectorContainer_c9d7a3",
        traceContainer: "traceContainer_c9d7a3",
        traceItem: "traceItem_c9d7a3",
        violationList: "violationList_c9d7a3",
      };
    },
    299205: function (e, t, n) {
      e.exports = {
        row: "row_c76498",
        userCell: "userCell_c76498",
        affinityCell: "affinityCell_c76498",
      };
    },
    931933: function (e, t, n) {
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
    53876: function (e, t, n) {
      e.exports = { panel: "panel_a03d84" };
    },
    833999: function (e, t, n) {
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
    388958: function (e, t, n) {
      e.exports = {
        panelContainer: "panelContainer_c44f9a",
        buttonContainer: "buttonContainer_c44f9a",
        button: "button_c44f9a",
        candidatesTable: "candidatesTable_c44f9a",
        candidatesTableContainer: "candidatesTableContainer_c44f9a",
        info: "info_c44f9a",
      };
    },
    844426: function (e, t, n) {
      e.exports = {
        button: "button_a46444",
        container: "container_a46444",
        rowsContainer: "rowsContainer_a46444",
      };
    },
    912130: function (e, t, n) {
      e.exports = {
        panel: "panel_d5d68c",
        toolbar: "toolbar_d5d68c",
        searchBar: "searchBar_d5d68c",
        pausedEvents: "pausedEvents_d5d68c",
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
    315906: function (e, t, n) {
      e.exports = { panel: "panel_a28317" };
    },
    719: function (e, t, n) {
      e.exports = {
        container: "container_a261a0",
        formElement: "formElement_a261a0",
        formRow: "formRow_a261a0",
        formDividerTitle: "formDividerTitle_a261a0",
      };
    },
    725754: function (e, t, n) {
      e.exports = { panel: "panel_d59bf9", switch: "switch_d59bf9" };
    },
    562708: function (e, t, n) {
      e.exports = {
        panelHeader: "panelHeader_e155ff",
        panelInner: "panelInner_e155ff",
        panelRow: "panelRow_e155ff",
        anniversaryCountSelect: "anniversaryCountSelect_e155ff",
        anniversaryCountResetButton: "anniversaryCountResetButton_e155ff",
      };
    },
    821843: function (e, t, n) {
      e.exports = {
        switch: "switch_e3bb71",
        panel: "panel_e3bb71",
        divider: "divider_e3bb71",
        inGameNuxContainer: "inGameNuxContainer_e3bb71",
        search: "search_e3bb71",
      };
    },
    27731: function (e, t, n) {
      e.exports = { panel: "panel_cb7302", panelGroup: "panelGroup_cb7302" };
    },
    719967: function (e, t, n) {
      e.exports = {
        panel: "panel_a8c982",
        panelGroup: "panelGroup_a8c982",
        bottomPanelButton: "bottomPanelButton_a8c982",
        topPanelToggle: "topPanelToggle_a8c982",
        secondaryInfoText: "secondaryInfoText_a8c982",
      };
    },
    473657: function (e, t, n) {
      e.exports = {
        container: "container_c3d7aa",
        formElement: "formElement_c3d7aa",
      };
    },
    182682: function (e, t, n) {
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
    695063: function (e, t, n) {
      e.exports = {
        panel: "panel_f9fd16",
        button: "button_f9fd16",
        title: "title_f9fd16",
      };
    },
    173183: function (e, t, n) {
      e.exports = { buttonsContainer: "buttonsContainer_cd92e9" };
    },
    941469: function (e, t, n) {
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
      };
    },
    668055: function (e, t, n) {
      e.exports = {
        panel: "panel_f511f4",
        toolbar: "toolbar_f511f4",
        searchBar: "searchBar_f511f4",
        subPanel: "subPanel_f511f4",
        subPanelHeaderBar: "subPanelHeaderBar_f511f4",
        inspectorContainer: "inspectorContainer_f511f4",
      };
    },
    613795: function (e, t, n) {
      e.exports = {
        container: "container_accdc4",
        resizeHandle: "resizeHandle_accdc4",
        subPanelContent: "subPanelContent_accdc4",
      };
    },
    236990: function (e, t, n) {
      e.exports = {
        collapsablePane: "collapsablePane_e12489",
        collapsablePaneHeader: "collapsablePaneHeader_e12489",
        formSection: "formSection_e12489",
        error: "error_e12489",
      };
    },
    509345: function (e, t, n) {
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
    680475: function (e, t, n) {
      e.exports = {
        pill: "pill_c993da",
        clickable: "clickable_c993da",
        disabled: "disabled_c993da",
        small: "small_c993da",
        selected: "selected_c993da",
        emoji: "emoji_c993da",
        closeCircle: "closeCircle_c993da emoji_c993da",
        close: "close_c993da",
        tooltipPill: "tooltipPill_c993da",
      };
    },
    201950: function (e, t, n) {
      e.exports = {
        boostedGuildIconGem: "boostedGuildIconGem_d4a69b",
        iconBackgroundTierNone: "iconBackgroundTierNone_d4a69b",
        iconBackgroundTierOne: "iconBackgroundTierOne_d4a69b",
        iconBackgroundTierTwo: "iconBackgroundTierTwo_d4a69b",
        iconBackgroundTierThree: "iconBackgroundTierThree_d4a69b",
        iconTierNone: "iconTierNone_d4a69b",
        iconTierOne: "iconTierOne_d4a69b",
        iconTierTwo: "iconTierTwo_d4a69b",
        iconTierThree: "iconTierThree_d4a69b",
      };
    },
    24753: function (e, t, n) {
      e.exports = {
        productCard: "productCard_f26f9b",
        productCardClickable: "productCardClickable_f26f9b",
        productThumbnail: "productThumbnail_f26f9b",
        productInfo: "productInfo_f26f9b",
        productInfoContent: "productInfoContent_f26f9b",
        productName: "productName_f26f9b",
        productDetails: "productDetails_f26f9b",
        dotSeparator: "dotSeparator_f26f9b",
        productActionMenuButton: "productActionMenuButton_f26f9b",
        productActionMenuIcon: "productActionMenuIcon_f26f9b",
        menuContainer: "menuContainer_f26f9b",
        disabled: "disabled_f26f9b",
      };
    },
    383011: function (e, t, n) {
      e.exports = { badge: "badge_a24a11", badgeIcon: "badgeIcon_a24a11" };
    },
    139266: function (e, t, n) {
      e.exports = { container: "container_e39b68", body: "body_e39b68" };
    },
    989384: function (e, t, n) {
      e.exports = { emojiIcon: "emojiIcon_e6e8e8" };
    },
    507641: function (e, t, n) {
      e.exports = { icon: "icon_acc5ff" };
    },
    759821: function (e, t, n) {
      e.exports = {
        yellowMessageBlock: "yellowMessageBlock_b74455 messageBlock_b74455",
        messageBlockIcon: "messageBlockIcon_b74455",
        redMessageBlock: "redMessageBlock_b74455 messageBlock_b74455",
        brownMessageBlock: "brownMessageBlock_b74455 messageBlock_b74455",
      };
    },
    674055: function (e, t, n) {
      e.exports = { container: "container_f8690a" };
    },
    776394: function (e, t, n) {
      e.exports = {
        container: "container_e08e86",
        innerContainer: "innerContainer_e08e86",
        iconWrapper: "iconWrapper_e08e86",
        star: "star_e08e86",
        sparkle: "sparkle_e08e86",
      };
    },
    529819: function (e, t, n) {
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
    70172: function (e, t, n) {
      e.exports = {
        guildIconContainer: "guildIconContainer_ed9816",
        guildIconV2Container: "guildIconV2Container_ed9816",
        guildBadge: "guildBadge_ed9816",
        disableColor: "disableColor_ed9816",
        tierTooltipTitle: "tierTooltipTitle_ed9816",
        boostedGuildTierMutedIconWithVisibleBanner:
          "boostedGuildTierMutedIconWithVisibleBanner_ed9816",
        boostedGuildTierIconBackgroundWithVisibleBanner:
          "boostedGuildTierIconBackgroundWithVisibleBanner_ed9816",
        guildBadgeIcon: "guildBadgeIcon_ed9816",
      };
    },
    767493: function (e, t, n) {
      n.r(
        (e.exports = {
          badgeIconPrivateMessages: "badgeIconPrivateMessages_d98ec4",
          badgeIconSettingsMenu: "badgeIconSettingsMenu_d98ec4",
        }),
      );
    },
    229830: function (e, t, n) {
      e.exports = {
        premiumTrialBadge: "premiumTrialBadge_b089d3",
        premiumTrialBadgeV2: "premiumTrialBadgeV2_b089d3",
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
    844812: function (e, t, n) {
      e.exports = {
        badgeContainer: "badgeContainer_b7316a",
        newBadge: "newBadge_b7316a",
        star: "star_b7316a",
        starLeft: "starLeft_b7316a",
        starRight: "starRight_b7316a",
      };
    },
    913074: function (e, t, n) {
      e.exports = {
        premiumLabel: "premiumLabel_ae3c77",
        selected: "selected_ae3c77",
        background: "background_ae3c77",
        selectedBackground: "selectedBackground_ae3c77",
        auPromo: "auPromo_ae3c77",
        auPromoSelected: "auPromoSelected_ae3c77",
      };
    },
    231220: function (e, t, n) {
      e.exports = {
        container: "container_a1db3b",
        iconContainer: "iconContainer_a1db3b",
        icon: "icon_a1db3b",
        foreground: "foreground_a1db3b",
        avatarSize: "avatarSize_a1db3b",
        emptyUser: "emptyUser_a1db3b",
        avatarMasked: "avatarMasked_a1db3b avatar_a1db3b",
        moreUsers: "moreUsers_a1db3b",
      };
    },
    684309: function (e, t, n) {
      n.r((e.exports = { card: "card_ffe375", active: "active_ffe375" }));
    },
    107720: function (e, t, n) {
      e.exports = { cursorPointer: "cursorPointer_aaab09" };
    },
    485270: function (e, t, n) {
      e.exports = {
        left: "left_c48316",
        right: "right_c48316",
        down: "down_c48316",
        downRight: "downRight_c48316",
        upLeft: "upLeft_c48316",
      };
    },
  },
]);
//# sourceMappingURL=15cabbc2d93549d97146.js.map
