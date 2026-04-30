"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["74288"],
  {
    885437(e, t, l) {
      l.d(t, { p: () => s });
      var n = l(976860),
        a = l(734057),
        r = l(332456);
      function s(e) {
        let t = (0, r.C)(a.A.getChannel(e), !0),
          l = t?.location ?? (0, n.PR)();
        return { ...(t ?? {}), ...(null != l ? { location: l } : {}) };
      }
    },
    944775(e, t, l) {
      l.d(t, { Lk: () => o, hK: () => u }), l(627968), l(64700);
      var n = l(228366),
        a = l(489277);
      l(979186), l(574172), l(734057), l(763827);
      var r = l(256415);
      l(19575), l(317084);
      var s = l(980504);
      l(652215), l(985018);
      let i = {
        width: s.ed.width,
        height: s.ed.height,
        resizable: !1,
        movable: !1,
        alwaysOnTop: !0,
        frame: !1,
        transparent: !0,
        hasShadow: !1,
        skipTaskbar: !0,
        menubar: !0,
        backgroundColor: "#00000000",
        titleBarStyle: null,
      };
      function u(e, t) {
        let l = a.A.isOverlayV3EnabledForPID(t),
          s = r.default.disableClickableRegions;
        l ||
          s ||
          n.h.dispatch({
            type: "OVERLAY_SET_INPUT_LOCKED",
            locked: !1,
            pid: t,
          }),
          n.h.dispatch({
            type: "SOUNDBOARD_SET_OVERLAY_ENABLED",
            pid: t,
            enabled: !0,
            keepOpen: e,
          });
      }
      function o(e) {
        n.h.dispatch({
          type: "SOUNDBOARD_SET_OVERLAY_ENABLED",
          pid: e,
          enabled: !1,
        });
        let t = a.A.isOverlayV3EnabledForPID(e),
          l = r.default.disableClickableRegions;
        r.default.isLocked(e) ||
          t ||
          l ||
          n.h.dispatch({
            type: "OVERLAY_SET_INPUT_LOCKED",
            locked: !0,
            pid: e,
          });
      }
      s.ed.padding, i.width, i.height;
    },
    317084(e, t, l) {
      l.d(t, { A: () => b }), l(321073);
      var n = l(627968),
        a = l(64700),
        r = l(110259),
        s = l(17928),
        i = l(793574),
        u = l(688810),
        o = l(139286),
        c = l(594061),
        d = l(763827),
        h = l(935208),
        x = l(796774),
        f = l(209932),
        y = l(536432),
        p = l(933204),
        g = l(805143),
        A = l(735438),
        v = l.n(A),
        m = l(939249);
      function _(e, t, l) {
        return (l.y - e.y) * (t.x - e.x) > (t.y - e.y) * (l.x - e.x);
      }
      function I(e, t, l, n) {
        return _(e, l, n) !== _(t, l, n) && _(e, t, l) !== _(e, t, n);
      }
      var M = l(985018),
        E = l(740371);
      function C(e) {
        let { className: t } = e;
        return (0, n.jsxs)("svg", {
          className: t,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 48 48",
          children: [
            (0, n.jsx)("g", {
              filter: "url(#a)",
              children: (0, n.jsx)("path", {
                d: "M30.4 8 24 14.4 17.6 8 16 9.6l6.4 6.4-6.4 6.4 1.6 1.6 6.4-6.4 6.4 6.4 1.6-1.6-6.4-6.4L32 9.6 30.4 8Z",
                fill: "currentColor",
              }),
            }),
            (0, n.jsx)("defs", {
              children: (0, n.jsxs)("filter", {
                id: "a",
                x: "0",
                y: "0",
                width: "48",
                height: "48",
                filterUnits: "userSpaceOnUse",
                colorInterpolationFilters: "sRGB",
                children: [
                  (0, n.jsx)("feFlood", {
                    floodOpacity: "0",
                    result: "BackgroundImageFix",
                  }),
                  (0, n.jsx)("feColorMatrix", {
                    in: "SourceAlpha",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    result: "hardAlpha",
                  }),
                  (0, n.jsx)("feOffset", { dy: "8" }),
                  (0, n.jsx)("feGaussianBlur", { stdDeviation: "8" }),
                  (0, n.jsx)("feColorMatrix", {
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0",
                  }),
                  (0, n.jsx)("feBlend", {
                    in2: "BackgroundImageFix",
                    result: "effect1_dropShadow_605_72103",
                  }),
                  (0, n.jsx)("feBlend", {
                    in: "SourceGraphic",
                    in2: "effect1_dropShadow_605_72103",
                    result: "shape",
                  }),
                ],
              }),
            }),
          ],
        });
      }
      let w = [
          { x: 0.5, y: 0.05 },
          { x: 0.95, y: 0.2 },
          { x: 1, y: 0.5 },
          { x: 0.95, y: 0.8 },
          { x: 0.5, y: 0.95 },
          { x: 0.05, y: 0.8 },
          { x: 0, y: 0.5 },
          { x: 0.05, y: 0.2 },
        ],
        D = w.length;
      function N(e, t, l) {
        let n = e * t;
        return e > 0.5 ? n - l : e < 0.5 ? n : n - l / 2;
      }
      let O = a.memo(function (e) {
        let {
            wheelWidth: t,
            wheelHeight: l,
            itemWidth: r,
            itemHeight: s,
            showDeadZoneIndicator: i,
            activeItem: u,
            onItemSelect: o,
            onItemAction: c,
            interactive: d = !0,
            onClose: h,
            children: x,
          } = e,
          f = a.useRef(null),
          y = a.useRef([]),
          p = a.useRef(!1),
          g = a.useRef(null),
          [_, O] = a.useState(0),
          [T, j] = a.useState({ x: 0, y: 0 }),
          b = Math.abs(T.x) + Math.abs(T.y) > 0,
          S = a.useMemo(() => v().chunk(x, D), [x]),
          k = a.useCallback(
            (e, t) => {
              null == y.current[_]
                ? (y.current[_] = [])
                : (y.current[_][t] = e);
            },
            [_],
          ),
          R = a.useCallback(
            (e, t) => {
              (g.current = t), o(D * e + t);
            },
            [o],
          ),
          L = a.useCallback(() => {
            (g.current = null), o(null);
          }, [o]),
          U = a.useCallback(
            (e) => {
              L(), (p.current = e);
            },
            [L],
          ),
          B = a.useCallback((e, t, l) => {
            let n, a, r;
            if (p.current) return void j({ x: 0, y: 0 });
            let s = { x: e.x - t.x, y: e.y - t.y },
              i = s.x < 0,
              u = s.y < 0,
              o =
                ((n = Math.abs(s.x)),
                (a = (180 / Math.PI) * Math.atan2(Math.abs(s.y), n)),
                {
                  x: Math.max(
                    (r = l / 2 - 28.8) * Math.cos((2 * Math.PI * a) / 360),
                    0,
                  ),
                  y: Math.max(r * Math.sin((2 * Math.PI * a) / 360), 0),
                });
            j({
              x: (i ? Math.max(s.x, -o.x) : Math.min(s.x, o.x)) / 2,
              y: (u ? Math.max(s.y, -o.y) : Math.min(s.y, o.y)) / 2,
            });
          }, []),
          P = a.useCallback(
            (e) => {
              null != g.current &&
                (e.preventDefault(),
                e.stopPropagation(),
                c?.(D * _ + g.current));
            },
            [c, _],
          ),
          V = a.useMemo(
            () =>
              (0, A.throttle)((e) => {
                var n;
                let a;
                if (null == f.current) return;
                let r = f.current.getBoundingClientRect(),
                  s = { x: r.left + r.width / 2, y: r.top + r.height / 2 },
                  i = { x: e.clientX, y: e.clientY };
                if ((B(i, s, Math.max(t, l)), p.current)) {
                  null != u && L();
                  return;
                }
                let o =
                  ((n = Math.max(t, l)),
                  (a = Math.sqrt(
                    Math.pow(s.x - i.x, 2) + Math.pow(s.y - i.y, 2),
                  )),
                  {
                    x: i.x + ((i.x - s.x) / a) * n,
                    y: i.y + ((i.y - s.y) / a) * n,
                  });
                for (let e = 0; e < y.current[_].length; e++) {
                  let t = y.current[_][e];
                  if (
                    null != t &&
                    (function (e, t, l) {
                      let n = { x: l.x, y: l.y },
                        a = { x: l.x + l.width, y: l.y },
                        r = { x: l.x, y: l.y + l.height },
                        s = { x: l.x + l.width, y: l.y + l.height };
                      return (
                        I(e, t, n, a) ||
                        I(e, t, a, s) ||
                        I(e, t, s, r) ||
                        I(e, t, r, n)
                      );
                    })(s, o, t.getBoundingClientRect())
                  )
                    return void R(_, e);
                }
                L();
              }, 16),
            [u, B, L, R, _, l, t],
          ),
          Y = a.useCallback(
            (e) => {
              if (!d) return;
              let t = _ + (e.deltaY > 0 ? 1 : -1);
              t >= 0 &&
                t < S.length &&
                (null != g.current &&
                  (S[t].length > g.current ? R(t, g.current) : L()),
                O(t));
            },
            [d, _, S, R, L],
          ),
          F = a.useMemo(
            () =>
              S[_].map((e, a) => {
                let i = w[a];
                if (null == i)
                  throw Error(
                    `Too many items supplied ${x.length} expected max of ${w.length}`,
                  );
                let u = N(i.x, t, r),
                  o = N(i.y, l, s);
                return (0, n.jsx)(
                  "div",
                  {
                    ref: (e) => k(e, a),
                    className: E.Tj,
                    style: { left: u, top: o, width: r, height: s },
                    children: e,
                  },
                  a,
                );
              }),
            [S, _, t, r, l, s, x.length, k],
          );
        return (0, n.jsx)(m.D, {
          className: E.Pw,
          onMouseMove: V,
          onWheel: Y,
          onClick: P,
          children: (0, n.jsxs)("div", {
            ref: f,
            className: E._$,
            style: { width: t, height: l },
            children: [
              (0, n.jsxs)("svg", {
                className: E.cA,
                viewBox: "0 0 288 288",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  (0, n.jsxs)("filter", {
                    id: "soundboard-wheel-background-shadow",
                    x: "0",
                    y: "0",
                    width: "288",
                    height: "288",
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB",
                    children: [
                      (0, n.jsx)("feFlood", {
                        floodOpacity: "0",
                        result: "BackgroundImageFix",
                      }),
                      (0, n.jsx)("feColorMatrix", {
                        in: "SourceAlpha",
                        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                        result: "hardAlpha",
                      }),
                      (0, n.jsx)("feOffset", { dy: "8" }),
                      (0, n.jsx)("feGaussianBlur", { stdDeviation: "8" }),
                      (0, n.jsx)("feColorMatrix", {
                        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0",
                      }),
                      (0, n.jsx)("feBlend", {
                        in2: "BackgroundImageFix",
                        result: "effect1_dropShadow_489_60382",
                      }),
                      (0, n.jsx)("feBlend", {
                        in: "SourceGraphic",
                        in2: "effect1_dropShadow_489_60382",
                        result: "shape",
                      }),
                    ],
                  }),
                  (0, n.jsxs)("g", {
                    filter: "url(#soundboard-wheel-background-shadow)",
                    children: [
                      (0, n.jsx)("circle", {
                        className: E.cA,
                        cx: "144",
                        cy: "144",
                        r: "103.68",
                        strokeWidth: "40.32",
                      }),
                      i &&
                        (0, n.jsx)("circle", {
                          className: E.u1,
                          onMouseEnter: () => U(!0),
                          onMouseLeave: () => U(!1),
                          cx: 144,
                          cy: 144,
                          r: 28.8,
                        }),
                      b &&
                        (0, n.jsx)("circle", {
                          className: E.JV,
                          cx: 144 + T.x,
                          cy: 144 + T.y,
                          r: 28.8,
                        }),
                    ],
                  }),
                  i &&
                    (0, n.jsx)("circle", {
                      className: E.u1,
                      onMouseEnter: () => U(!0),
                      onMouseLeave: () => U(!1),
                      cx: 144,
                      cy: 144,
                      r: 28.8,
                      stroke: "none",
                    }),
                ],
              }),
              (0, n.jsxs)("div", {
                className: E.gx,
                children: [
                  i &&
                    (0, n.jsx)(m.D, {
                      className: E.$2,
                      onClick: h,
                      children: (0, n.jsx)(C, { className: E.$2 }),
                    }),
                  d && S.length > 1
                    ? (0, n.jsx)("div", {
                        className: E.YB,
                        children: M.intl.string(M.t["Xy+S02"]),
                      })
                    : null,
                ],
              }),
              F,
            ],
          }),
        });
      });
      var T = l(805945);
      l(980504);
      var j = l(1986);
      function b(e) {
        let {
            guildId: t,
            channel: l,
            width: A,
            height: v,
            keepOpen: m,
            interactive: _ = !0,
            analyticsSource: I,
            onClose: M,
          } = e,
          E = (function (e) {
            let [t, l] = (0, s.yK)([f.A], () => [
              f.A.getSounds(),
              f.A.getFavorites(),
            ]);
            return a.useMemo(() => {
              let n = [],
                a = [...e, "0"],
                r = (e, a) => {
                  for (let r of t
                    .get(e)
                    ?.sort((e, t) => h.default.compare(e.soundId, t.soundId)) ??
                    []) {
                    let e = l.has(r.soundId);
                    ((e && a) || (!e && !a)) && r.available && n.push(r);
                  }
                };
              return a.forEach((e) => r(e, !0)), a.forEach((e) => r(e, !1)), n;
            }, [t, l, e]);
          })((0, g.Y)(l, !0)),
          C = (0, p.T)(),
          w = a.useRef(null),
          [D, N] = a.useState(void 0),
          b = (0, s.bG)([d.A], () => d.A.getMediaSessionId()),
          { analyticsLocations: S } = (0, u.Ay)(i.A.SOUNDBOARD_WHEEL),
          k = a.useCallback(
            (e) => {
              (0, y.Ak)(e, l.id, S), M();
            },
            [S, l.id, M],
          );
        a.useEffect(() => {
          x.E7(), c.bW.loadIfNecessary();
        }, []),
          a.useEffect(() => {
            0 === E.length && 0 === C.length && M();
          }, [E.length, C, M]),
          a.useEffect(
            () => () => {
              let e = w.current;
              m || null == e || k(e);
            },
            [m, k],
          ),
          (0, o.A)(
            {
              type: r.ImpressionTypes.POPOUT,
              name: r.ImpressionNames.SOUNDBOARD_POPOUT,
              properties: { source: I, guild_id: t, media_session_id: b },
            },
            { disableTrack: !_ },
          );
        let R = a.useCallback((e) => {
            (w.current = e), N(e?.soundId);
          }, []),
          L = a.useCallback(
            (e) => {
              if (null == e) return void R(null);
              let t = E[e];
              null != t && R(t);
            },
            [R, E],
          ),
          U = a.useCallback(
            (e) => {
              if (null == e) return;
              let t = E[e];
              null != t && k(t);
            },
            [E, k],
          ),
          B = a.useMemo(
            () =>
              E.map((e) =>
                (0, n.jsx)(
                  T.Ay,
                  {
                    interactive: _,
                    className: j.a,
                    sound: e,
                    focused: D === e.soundId,
                    channel: l,
                  },
                  e.soundId,
                ),
              ),
            [D, l, _, E],
          );
        return 0 === E.length
          ? null
          : (0, n.jsx)(u.f5, {
              value: S,
              children: (0, n.jsx)(O, {
                wheelWidth: A,
                wheelHeight: v,
                itemWidth: 96,
                itemHeight: 52,
                showDeadZoneIndicator: !m,
                activeItem: D,
                onItemSelect: L,
                onItemAction: U,
                onClose: M,
                interactive: _,
                children: B,
              }),
            });
      }
    },
    921955(e, t, l) {
      let n;
      l.d(t, { A: () => D }), l(321073);
      var a = l(17928),
        r = l(228366),
        s = l(308368),
        i = l(115718),
        u = l(47167),
        o = l(734057),
        c = l(71393),
        d = l(375492),
        h = l(290863),
        x = l(994500),
        f = l(287809),
        y = l(567761),
        p = l(652215);
      let g = [i.rD.TEXT_CHANNEL, i.rD.GROUP_DM, i.rD.USER],
        A = null,
        v = null,
        m = [],
        _ = [];
      function I(e) {
        (m = [...m, e]),
          (_ = _.map((e) => ({ ...e, sent: m.includes(e.data.record.id) }))),
          w.emitChange();
      }
      function M() {
        (A = null), null != n && (n.destroy(), (n = null)), null != v && v();
      }
      function E() {
        let e =
          null != A && null != A.application_id
            ? d.A.getApplicationActivity(A.application_id)
            : null;
        if (null != A && (null == e || null == e.party || null == e.party.id))
          return M();
      }
      class C extends a.Ay.Store {
        static displayName = "ActivityInviteModalStore";
        initialize() {
          this.waitFor(o.A, c.A, d.A, h.A, y.default, f.default);
        }
        getActivity() {
          return A;
        }
        getQuery() {
          return n?.query ?? "";
        }
        getResults() {
          return _;
        }
      }
      let w = new C(r.h, {
          ACTIVITY_INVITE_MODAL_OPEN: function (e) {
            (A = e.activity),
              (v = e.resolve),
              (m = []),
              null == n &&
                (n = new i.Ay(
                  (e, t) => {
                    let l;
                    (_ = (
                      "" === t.trim()
                        ? ((l = []),
                          y.default.getPrivateChannelIds().forEach((e) => {
                            let t = o.A.getChannel(e);
                            if (null != t)
                              if (t.type === p.rbe.DM) {
                                let e = t.getRecipientId(),
                                  n = null != e ? f.default.getUser(e) : null;
                                null != n &&
                                  l.push({
                                    type: i.rD.USER,
                                    record: n,
                                    score: 0,
                                  });
                              } else
                                t.isMultiUserDM() &&
                                  l.push({
                                    type: i.rD.GROUP_DM,
                                    record: t,
                                    score: 0,
                                  });
                          }),
                          l)
                        : e
                    )
                      .map((e) => {
                        switch (e.type) {
                          case i.rD.USER: {
                            let { record: t } = e;
                            return {
                              type: i.rD.USER,
                              sent: m.includes(t.id),
                              status: h.A.getStatus(t.id),
                              data: e,
                            };
                          }
                          case i.rD.TEXT_CHANNEL: {
                            let { record: t } = e,
                              l = o.A.getChannel(t.parent_id),
                              n = c.A.getGuild(t.guild_id);
                            return {
                              type: i.rD.TEXT_CHANNEL,
                              sent: m.includes(t.id),
                              categoryName:
                                null != l ? (0, u.m1)(l, f.default, x.A) : "",
                              guildName: n?.name ?? "",
                              data: e,
                            };
                          }
                          case i.rD.GROUP_DM: {
                            let { record: t } = e;
                            return {
                              type: i.rD.GROUP_DM,
                              sent: m.includes(t.id),
                              data: e,
                            };
                          }
                          default:
                            return null;
                        }
                      })
                      .filter((e) => null != e)),
                      w.emitChange();
                  },
                  g,
                  100,
                )),
              n.search("");
          },
          ACTIVITY_INVITE_MODAL_QUERY: function (e) {
            let { query: t } = e;
            null != n && n.search(t);
          },
          ACTIVITY_INVITE_MODAL_SEND: function (e) {
            if (null == A) return;
            let t = e.channelId,
              l = e.userId;
            null != t
              ? s.A.sendActivityInvite({
                  channelId: t,
                  type: p.xL.JOIN,
                  activity: A,
                  location: "Channel Text Area - Invite to Join Modal",
                }).then(() => I(t))
              : null != l &&
                s.A.sendActivityInviteUser({
                  userId: l,
                  type: p.xL.JOIN,
                  activity: A,
                  location: "Channel Text Area - Invite to Join Modal",
                }).then(() => I(l));
          },
          ACTIVITY_INVITE_MODAL_CLOSE: M,
          OVERLAY_SET_INPUT_LOCKED: function (e) {
            let { locked: t } = e;
            return !!t && null != A && (M(), !0);
          },
          LOCAL_ACTIVITY_UPDATE: E,
          RPC_APP_DISCONNECTED: E,
        }),
        D = 21552 == l.j ? w : null;
    },
    352255(e, t, l) {
      l.d(t, { X: () => i });
      var n = l(627968);
      l(64700);
      var a = l(661531),
        r = l(996682),
        s = l(27989);
      let i = (e) => {
        let {
            size: t = "md",
            width: l,
            height: i,
            color: u = a.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: o = "",
            ...c
          } = e,
          d = (0, s.J)(t),
          h = d?.width ?? l,
          x = d?.height ?? i;
        return (0, n.jsx)("svg", {
          ...(0, r.A)(c),
          xmlns: "http://www.w3.org/2000/svg",
          width: h,
          height: x,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, n.jsx)("path", {
            fill: "string" == typeof u ? u : u.css,
            d: "M18.45 1.85a3 3 0 0 0-4.1 1.1l-1.5 2.6a3 3 0 0 0 1.1 4.1l2.6 1.5a3 3 0 0 0 4.1-1.1l1.5-2.6a3 3 0 0 0-1.1-4.1l-2.6-1.5ZM2 5a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5ZM2 16a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-3ZM19 14a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z",
            className: o,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=74288.798c36b55624e2fa.js.map
