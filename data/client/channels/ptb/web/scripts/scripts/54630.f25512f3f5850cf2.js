"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["54630"],
  {
    500470(e, t, n) {
      n.d(t, { k: () => a, x: () => i });
      var l = n(702841),
        u = n(287809),
        r = n(695515);
      let i = () => {
          let e = (0, l.bG)([r.A], () => r.A.getSelectedTeenId());
          return (0, l.bG)([u.default], () =>
            null !== e ? u.default.getUser(e) : void 0,
          );
        },
        a = () => (0, l.bG)([r.A], () => r.A.getSelectedTeenId());
    },
    834981(e, t, n) {
      n.d(t, {
        Du: () => b,
        GR: () => o,
        Li: () => k,
        VE: () => p,
        VT: () => m,
        W1: () => E,
        XC: () => _,
        v4: () => T,
        vx: () => g,
        xk: () => c,
        xr: () => G,
      });
      var l = n(64700),
        u = n(702841),
        r = n(287809),
        i = n(695515),
        a = n(923531),
        s = n(438732),
        d = n(500470),
        f = n(191627);
      function A(e) {
        let t = (0, u.bG)([i.A], () => i.A.getLinkedUsers());
        return l.useMemo(
          () =>
            Object.values(t)
              .filter((t) => null != t && t.link_status === e)
              .sort(
                (e, t) =>
                  new Date(e.updated_at).getTime() -
                  new Date(t.updated_at).getTime(),
              )
              .map((e) => e.user_id)
              .filter((e) => null != e),
          [t, e],
        );
      }
      let c = (e) => {
        let t = A(e);
        return (0, u.yK)([r.default], () =>
          t.map((e) => r.default.getUser(e)),
        ).filter((e) => null != e);
      };
      function g() {
        return A(f.Ef.ACTIVE);
      }
      function o() {
        return c(f.Ef.ACTIVE);
      }
      let k = () => g().length > 0;
      function b() {
        let e = (0, u.bG)([i.A], () => i.A.getLinkedUsers());
        return l.useMemo(
          () =>
            Object.values(e).some(
              (e) =>
                null != e &&
                e.link_status === f.Ef.ACTIVE &&
                e.link_type === f.QM.PARENT,
            ),
          [e],
        );
      }
      function p() {
        let e = (0, u.bG)([i.A], () => i.A.getLinkCode()),
          t = (0, u.bG)([r.default], () => r.default.getCurrentUser());
        return null == e || null == t ? null : (0, f.jZ)(t.id, e);
      }
      function G() {
        let e = (0, s.A)(),
          t = g(),
          n = e ? f.Y7 : f.kp;
        return t.length >= n;
      }
      function m() {
        let e = (0, u.bG)([r.default], () => r.default.getCurrentUser()),
          t = (0, u.bG)([i.A], () => i.A.getLinkedUsers());
        return null == e
          ? 0
          : Object.values(t).filter(
              (t) =>
                null != t &&
                t.link_status === f.Ef.PENDING &&
                e.id !== t.requestor_id,
            ).length;
      }
      function E() {
        return g().length;
      }
      function T(e) {
        let t = (0, d.k)(),
          n = (0, u.bG)([i.A], () =>
            null == t ? null : i.A.getRangeStartTimestamp(),
          );
        return null == n ? null : (0, a.i6)(new Date(n).getTime(), () => e, 7);
      }
      function _(e, t) {
        let n = (0, u.bG)([i.A], () => i.A.getLinkTimestamp(e));
        return null != n
          ? (0, a.mV)(Date.parse(n), t === f.Ef.PENDING ? f.lu : f.dI)
          : null;
      }
    },
  },
]);
//# sourceMappingURL=54630.f25512f3f5850cf2.js.map
