"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["80239"],
  {
    570287(t, e, n) {
      n.d(e, { A: () => c, q: () => d });
      var i = n(17928),
        l = n(800828),
        a = n(857071),
        s = n(253932),
        r = n(495544),
        u = n(696451),
        o = n(994500);
      let d = (t, e) => {
        let n = r.default.getId() === t,
          i = null != e && a.A.isLurking(e),
          d = s.$s.getSetting(),
          c = o.A.isFriend(t);
        return (
          (!n &&
            !i &&
            (c || null != u.Ay.memberOf(t).find((t) => !d.includes(t)))) ||
          (l.A.getGameFriendsForUser(t).length > 0 && s.Zk.getSetting())
        );
      };
      function c(t, e) {
        let n = (0, i.bG)([r.default], () => r.default.getId() === t),
          d = (0, i.bG)([a.A], () => null != e && a.A.isLurking(e)),
          c = s.$s.useSetting();
        return (0, i.bG)(
          [o.A, u.Ay, l.A],
          () =>
            (!n &&
              !d &&
              (o.A.isFriend(t) ||
                null != u.Ay.memberOf(t).find((t) => !c.includes(t)))) ||
            (l.A.getGameFriendsForUser(t).length > 0 && s.Zk.getSetting()),
        );
      }
    },
    679492(t, e, n) {
      n.d(e, { Hl: () => d, NR: () => S, Pq: () => A, fC: () => c });
      var i = n(627968),
        l = n(64700),
        a = n(284009),
        s = n.n(a),
        r = n(451988),
        u = n(8925);
      let o = l.createContext(void 0);
      function d(t) {
        let { value: e, children: n } = t;
        return (0, i.jsx)(o.Provider, { value: e, children: n });
      }
      function c() {
        let [t, e] = l.useState(null),
          [n, i] = l.useState(null),
          [a, s] = l.useState(null),
          [o, d] = l.useState(l.createRef()),
          c = l.useCallback((t) => {
            e(t.interactionType),
              i(t.interactionSource),
              s(t.interactionSourceId);
          }, []),
          S = l.useCallback((t) => {
            d(t);
          }, []),
          A = l.useCallback(() => {
            c({
              interactionType: null,
              interactionSource: null,
              interactionSourceId: null,
            });
          }, [c]),
          [T, g] = l.useState(!1),
          [h, C] = l.useState(null),
          [f] = l.useState(new r.Ep()),
          x = l.useCallback(
            (t) => {
              C(t), g(!0), null === t ? f.stop() : f.start(u.ME, () => g(!1));
            },
            [f],
          );
        return (
          l.useEffect(() => {
            f.stop();
          }, [f]),
          l.useMemo(
            () => ({
              interactionType: t,
              interactionSource: n,
              interactionSourceId: a,
              onInteraction: c,
              setInteractionToast: x,
              resetInteraction: A,
              showInteractionToast: T,
              interactionTypeSent: h,
              interactionPopoutTargetRef: o,
              onInteractionPopoutTargetRefChange: S,
            }),
            [c, x, n, a, T, t, h, A, o, S],
          )
        );
      }
      function S() {
        return l.useContext(o);
      }
      function A() {
        let t = S();
        return (
          s()(
            null != t,
            "must use useUserProfileInteractionContext within a UserProfileInteractionContextProvider",
          ),
          t
        );
      }
    },
    8925(t, e, n) {
      n.d(e, { Ay: () => m, ME: () => x, c5: () => R });
      var i = n(627968),
        l = n(64700),
        a = n(503698),
        s = n.n(a),
        r = n(17928),
        u = n(990078),
        o = n(460905),
        d = n(110384),
        c = n(365199),
        S = n(101555),
        A = n(495544),
        T = n(570287),
        g = n(679492),
        h = n(518477),
        C = n(985018),
        f = n(172432);
      let x = 2700,
        R = "> -# *",
        p = {
          [h.dS.AVATAR]: () => C.intl.string(C.t["fEUP/i"]),
          [h.dS.STATUS]: () => C.intl.string(C.t.TKdBC8),
          [h.dS.ACTIVITY]: () => C.intl.string(C.t.bSe71F),
        },
        I = {
          [h.dS.AVATAR]: () => C.intl.string(C.t.xvN0fV),
          [h.dS.STATUS]: () => C.intl.string(C.t["C/vzS7"]),
          [h.dS.ACTIVITY]: () => C.intl.string(C.t.ObfsSj),
        };
      function m(t) {
        let {
            user: e,
            sourceType: n,
            isVisible: a,
            isExpandable: x,
            interactionSourceId: R,
            targetRef: m,
            onAction: E,
            renderMoreButtonPopout: b,
          } = t,
          k = l.useRef(null),
          U = (0, r.bG)([A.default], () => A.default.getId() === e.id),
          _ = (0, T.A)(e.id),
          { onInteraction: P, onInteractionPopoutTargetRefChange: v } = (0,
          g.Pq)();
        return e.bot || U || !_
          ? null
          : (0, i.jsxs)(S.Ay, {
              className: s()(f.oO, {
                [f.RK]: a,
                [f.lu]: x,
                [f.U7]: n === h.dS.STATUS,
                [f.nL]: n === h.dS.AVATAR,
                [f.bt]: n === h.dS.ACTIVITY,
              }),
              children: [
                (0, i.jsx)(u.m, {
                  asContainer: !0,
                  text: C.intl.string(C.t.nhaI4b),
                  shouldShow: a,
                  delay: 0,
                  ariaHidden: !0,
                  children: (0, i.jsx)(S.$n, {
                    onClick: () => {
                      v(m),
                        n === h.dS.AVATAR
                          ? E({ action: "PRESS_REACT_AVATAR" })
                          : n === h.dS.STATUS
                            ? E({ action: "PRESS_REACT_CUSTOM_STATUS" })
                            : E({ action: "PRESS_REACT_ACTIVITY" }),
                        P?.({
                          interactionType: h.AQ.REACT,
                          interactionSource: n,
                          interactionSourceId: R,
                        });
                    },
                    className: f.x6,
                    "aria-label": p[n](),
                    "aria-haspopup": "dialog",
                    children: (0, i.jsx)(o.n, { size: "xs", className: f.Kk }),
                  }),
                }),
                (0, i.jsx)(u.m, {
                  asContainer: !0,
                  text: C.intl.string(C.t.RmDYKK),
                  shouldShow: a,
                  delay: 0,
                  ariaHidden: !0,
                  children: (0, i.jsx)(S.$n, {
                    onClick: () => {
                      v(m),
                        n === h.dS.AVATAR
                          ? E({ action: "PRESS_REPLY_AVATAR" })
                          : n === h.dS.STATUS
                            ? E({ action: "PRESS_REPLY_CUSTOM_STATUS" })
                            : E({ action: "PRESS_REPLY_ACTIVITY" }),
                        P?.({
                          interactionType: h.AQ.REPLY,
                          interactionSource: n,
                          interactionSourceId: R,
                        });
                    },
                    className: f.x6,
                    "aria-label": I[n](),
                    "aria-haspopup": "dialog",
                    children: (0, i.jsx)(d.W, { size: "xs", className: f.Kk }),
                  }),
                }),
                b?.((t) =>
                  (0, i.jsx)(u.m, {
                    asContainer: !0,
                    text: C.intl.string(C.t["UKOtz+"]),
                    shouldShow: a,
                    delay: 0,
                    ariaHidden: !0,
                    children: (0, i.jsx)(S.$n, {
                      ref: k,
                      ...t,
                      onClick: () => {
                        v(k), t.onClick?.();
                      },
                      className: f.x6,
                      "aria-label": C.intl.string(C.t["UKOtz+"]),
                      children: (0, i.jsx)(c.j, {
                        size: "xs",
                        className: f.Kk,
                      }),
                    }),
                  }),
                ),
              ],
            });
      }
    },
    110384(t, e, n) {
      n.d(e, { W: () => r });
      var i = n(627968);
      n(64700);
      var l = n(661531),
        a = n(996682),
        s = n(27989);
      let r = (t) => {
        let {
            size: e = "md",
            width: n,
            height: r,
            color: u = l.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: o = "",
            ...d
          } = t,
          c = (0, s.J)(e),
          S = c?.width ?? n,
          A = c?.height ?? r;
        return (0, i.jsx)("svg", {
          ...(0, a.A)(d),
          xmlns: "http://www.w3.org/2000/svg",
          width: S,
          height: A,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, i.jsx)("path", {
            fill: "string" == typeof u ? u : u.css,
            d: "M2.3 7.3a1 1 0 0 0 0 1.4l5 5a1 1 0 0 0 1.4-1.4L5.42 9H11a7 7 0 0 1 7 7v4a1 1 0 1 0 2 0v-4a9 9 0 0 0-9-9H5.41l3.3-3.3a1 1 0 0 0-1.42-1.4l-5 5Z",
            className: o,
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=80239.ce5c6c78df16a488.js.map
