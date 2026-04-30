"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["20491"],
  {
    178418(e, n, t) {
      t.d(n, { c: () => l });
      var i = t(734057);
      function l(e, n) {
        let t = i.A.getChannel(n);
        return (
          null != t &&
          e.bot &&
          t.isPrivate() &&
          null == t.rawRecipients.find((n) => n.id === e.id)
        );
      }
    },
    146655(e, n, t) {
      t.d(n, { A: () => m });
      var i = t(64700),
        l = t(735438),
        r = t(17928),
        u = t(87664),
        a = t(517164),
        p = t(20805),
        s = t(83971),
        d = t(583846),
        c = t(290863),
        o = t(652215);
      let A = [],
        h = [];
      function m(e) {
        let n = (0, u.A)(e),
          t = (0, r.bG)([c.A], () => c.A.getActivities(e)),
          m = (0, r.bG)([a.A], () => a.A.getUserOutbox(e)),
          _ = (0, i.useMemo)(
            () =>
              t.filter((e) => {
                let { type: n } = e;
                return n !== o.$pd.CUSTOM_STATUS && n !== o.$pd.HANG_STATUS;
              }),
            [t],
          ),
          { live: b, recent: f } = (0, i.useMemo)(() => {
            let e = (0, l.uniqWith)(
                _,
                (e, n) =>
                  (null != e.application_id &&
                    null != n.application_id &&
                    e.application_id === n.application_id) ||
                  (null != e.name && null != n.name && e.name === n.name),
              ),
              n = m?.entries.filter(
                (n) =>
                  !(0, d.Hd)(n) &&
                  ((0, p.Tq)(n)
                    ? n.extra.entries.length > 0 &&
                      !e.some((e) => null != e && (0, s.qb)(n, e))
                    : (0, p.Lf)(n)
                      ? !e.some((e) => null != e && (0, s.SU)(n, e))
                      : (0, p.$R)(n)),
              );
            return {
              live: 0 === e.length ? A : e,
              recent: null == n || 0 === n.length ? h : n,
            };
          }, [_, m?.entries]);
        return { live: b, recent: f, stream: n, outbox: m };
      }
    },
  },
]);
//# sourceMappingURL=20491.76a8094a79eac493.js.map
