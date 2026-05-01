"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["45724"],
  {
    53257(t, l, e) {
      e.d(l, { A: () => n });
      var s = e(652215);
      function n(t) {
        return (
          (t.type === s.$pd.LISTENING || t.type === s.$pd.WATCHING) &&
          t.timestamps?.start != null &&
          null != t.timestamps.end
        );
      }
    },
    78871(t, l, e) {
      e.d(l, { QA: () => g, Rq: () => w, cy: () => T });
      var s = e(627968);
      e(64700);
      var n = e(339350),
        a = e(687966),
        r = e(323384),
        i = e(432017),
        u = e(526181),
        o = e(661531),
        d = e(177953),
        p = e(306788),
        c = e(765379),
        h = e(471107),
        v = e(506326),
        A = e(85451),
        x = e(583846),
        f = e(53257),
        m = e(652215);
      let I = function (t) {
        let l = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          e = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return l
          ? n.Q
          : (0, c.A)(t)
            ? e
              ? a._
              : r.k
            : t.type === m.$pd.LISTENING
              ? i.T
              : t.type === m.$pd.WATCHING
                ? u.U
                : a._;
      };
      function g(t) {
        let { activity: l } = t,
          e = l.timestamps?.start ?? l.created_at,
          { now: n } = (0, h.G)();
        if (null == e || (0, f.A)(l)) return null;
        let a = l.timestamps?.end,
          r = l.timestamps?.isCountDown ?? !1,
          i = I(l, r && null != a && a > n);
        return (0, s.jsxs)(v.er, {
          children: [
            (0, s.jsx)(i, {
              size: "xxs",
              color: o.A.colors.TEXT_FEEDBACK_POSITIVE,
            }),
            (0, s.jsx)(A.z, {
              entry: { start: e, end: a, isCountDown: r },
              textColor: "text-feedback-positive",
              bold: !0,
            }),
          ],
        });
      }
      function T(t) {
        let { activity: l } = t;
        if ((0, c.A)(l) || null == l.party) return null;
        let e = (0, x.gF)(l.state, l.party);
        return null == e ? null : (0, s.jsx)(v.fM, { Icon: d.n, text: e });
      }
      function w(t) {
        let { activity: l } = t,
          e = (0, x.kR)(l.assets?.large_text);
        return null == e ? null : (0, s.jsx)(v.fM, { Icon: p.K, text: e });
      }
    },
    339350(t, l, e) {
      e.d(l, { Q: () => i });
      var s = e(627968);
      e(64700);
      var n = e(661531),
        a = e(996682),
        r = e(27989);
      let i = (t) => {
        let {
            size: l = "md",
            width: e,
            height: i,
            color: u = n.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: o = "",
            ...d
          } = t,
          p = (0, r.J)(l),
          c = p?.width ?? e,
          h = p?.height ?? i;
        return (0, s.jsxs)("svg", {
          ...(0, a.A)(d),
          xmlns: "http://www.w3.org/2000/svg",
          width: c,
          height: h,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, s.jsx)("path", {
              fill: "string" == typeof u ? u : u.css,
              d: "M9.1 8.85A.5.5 0 0 1 9.45 8h5.1a.5.5 0 0 1 .35.85l-.84.85a3.25 3.25 0 0 0 0 4.6l2.06 2.06A3 3 0 0 1 17 18.5v1.01a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-1.01a3 3 0 0 1 .88-2.13l2.06-2.06a3.25 3.25 0 0 0 0-4.6l-.84-.85Z",
              className: o,
            }),
            (0, s.jsx)("path", {
              fill: "string" == typeof u ? u : u.css,
              fillRule: "evenodd",
              d: "M7 1a3 3 0 0 0-3 3v1.51a6 6 0 0 0 1.76 4.25l2.06 2.06c.1.1.1.26 0 .36l-2.06 2.06A6 6 0 0 0 4 18.5V20a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1.51a6 6 0 0 0-1.76-4.25l-2.06-2.06a.25.25 0 0 1 0-.36l2.06-2.06A6 6 0 0 0 20 5.5V4a3 3 0 0 0-3-3H7ZM6 4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1.51a4 4 0 0 1-1.17 2.83l-2.07 2.07c-.88.88-.88 2.3 0 3.18l2.07 2.07A4 4 0 0 1 18 18.49V20a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-1.51a4 4 0 0 1 1.17-2.83l2.07-2.07c.88-.88.88-2.3 0-3.18L7.17 8.34A4 4 0 0 1 6 5.51V4Z",
              clipRule: "evenodd",
              className: o,
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=45724.275d9f37494b0355.js.map
