"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["30770"],
  {
    501838(t, e, l) {
      l.d(e, {
        mn: () => a,
        px: () => h,
        qx: () => g,
        rY: () => I,
        tR: () => c,
        w: () => s,
      }),
        l(321073);
      var i = l(17928),
        n = l(517164),
        r = l(20805),
        u = l(328153),
        o = l(841595),
        d = l(71393),
        f = l(290863),
        p = l(832163),
        A = l(533562);
      function a(t) {
        let { userIds: e } = t;
        return (0, i.yK)(
          [n.A, p.A],
          () => {
            let t = [];
            for (let l of e)
              for (let e of n.A.getUserOutbox(l)?.entries ?? [])
                if (null != e && (0, r.zD)(e)) {
                  let l = p.A.getApplicationIdFromDetectableId(
                    e.extra.application_id,
                  );
                  null != l && t.push(l);
                }
            return t;
          },
          [e],
        );
      }
      function c(t) {
        return (0, i.yK)(
          [o.A, p.A],
          () => {
            let e = [];
            for (let l of t) {
              let t = o.A.getMutualGuilds(l);
              if (null != t) {
                for (let l of t)
                  if (p.A.getStorefrontGuildIds().has(l.guild.id)) {
                    let t = p.A.getApplicationIdFromGuildId(l.guild.id);
                    null != t && e.push(t);
                  }
              }
            }
            return e;
          },
          [t],
        );
      }
      function s(t) {
        let { userIds: e } = t,
          l = (0, i.yK)(
            [f.A, p.A],
            () => {
              let t = [];
              for (let l of e)
                for (let e of f.A.getActivities(l))
                  if (null != e.application_id) {
                    let l = p.A.getApplicationIdFromDetectableId(
                      e.application_id,
                    );
                    null != l && t.push(l);
                  }
              return t;
            },
            [e],
          ),
          n = (0, A.W)();
        return null != n ? [...l, n] : l;
      }
      function g() {
        return (0, i.yK)([u.Ay, p.A], () => {
          let t = [];
          for (let e of u.Ay.getGamesSeen(!1, !1))
            if (null != e.id) {
              let l = p.A.getApplicationIdFromDetectableId(e.id);
              null != l && t.push(l);
            }
          return t;
        });
      }
      function I() {
        return (0, i.yK)(
          [u.Ay, p.A],
          () => {
            let t = [];
            for (let e of u.Ay.getRunningGames())
              if (null != e.id && u.Ay.isDetectionEnabled(e)) {
                let l = p.A.getApplicationIdFromDetectableId(e.id);
                null != l && t.push(l);
              }
            return t;
          },
          [],
        );
      }
      function h() {
        let t = (0, i.bG)([d.A], () => d.A.getGuildIds());
        return (0, i.yK)(
          [p.A],
          () => {
            let e = [];
            for (let l of t) {
              let t = p.A.getApplicationIdFromGuildId(l);
              null != t && e.push(t);
            }
            return e;
          },
          [t],
        );
      }
    },
    533562(t, e, l) {
      l.d(e, { W: () => n });
      var i = l(760716);
      function n() {
        return (0, i.i)((t) => t.overrideApplicationId) ?? void 0;
      }
    },
    792334(t, e, l) {
      l.d(e, { B: () => n });
      var i = l(64700);
      function n(t) {
        return i.useMemo(
          () => t?.items.filter((t) => !0 !== t.isOwned) ?? [],
          [t],
        );
      }
    },
  },
]);
//# sourceMappingURL=30770.bb4de6157436d7d2.js.map
