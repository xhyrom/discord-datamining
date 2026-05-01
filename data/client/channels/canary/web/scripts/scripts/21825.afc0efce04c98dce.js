"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["21825"],
  {
    101058(e, t, n) {
      n.d(t, {
        Rh: () => A,
        V7: () => d,
        XB: () => p,
        Xp: () => E,
        yM: () => g,
      });
      var i = n(488428),
        r = n(776231),
        a = n(486020),
        u = n(403362),
        l = n(392107),
        s = n(652215),
        o = n(985018);
      function c(e) {
        let { storageHash: t, canAnimate: n = !1, allowWebp: i = !0 } = e;
        if (n && (0, a.VI)(t)) return "gif";
        let { CDN_HOST: r } = window.GLOBAL_ENV;
        return null == r ? "jpg" : i && a.QB ? "webp" : "png";
      }
      function E(e) {
        let {
            userId: t,
            avatarId: n,
            storageHash: a,
            canAnimate: u = !1,
            allowWebp: l = !0,
            size: o,
          } = e,
          { CDN_HOST: E } = window.GLOBAL_ENV,
          A =
            null != E
              ? `https://${E}`
              : location.protocol + window.GLOBAL_ENV.API_ENDPOINT,
          g = c({ storageHash: a, canAnimate: u, allowWebp: l }),
          p = `?${i.stringify({ size: (0, r.kr)(o * (0, r.mZ)()) })}`;
        return `${A}${s.Rsh.ARCHIVED_AVATAR(t, n, a, g)}${p}`;
      }
      function A(e) {
        let { filename: t, assetOrigin: n = l.E.NEW_ASSET } = e ?? {};
        if (n === l.E.ARCHIVED_ASSET) return;
        let i = t ?? o.intl.string(o.t.lqaIxI),
          r = new Date().toLocaleString(o.intl.currentLocale, {
            year: "numeric",
            day: "numeric",
            month: "long",
            hour: "numeric",
            minute: "numeric",
          });
        return o.intl.formatToPlainString(
          n === l.E.EDITED_ARCHIVED_ASSET ? o.t.eC2sZi : o.t.DYil93,
          { name: i, dateTime: r },
        );
      }
      function g(e, t) {
        let n = c({ storageHash: e, canAnimate: !0, allowWebp: !1 }),
          i = null == t ? o.intl.string(o.t.lqaIxI) : t.split(",")[0];
        return {
          filename: `${i}.${n}`,
          type: (function (e) {
            switch (e) {
              case "gif":
                return "image/gif";
              case "png":
                return "image/png";
              case "jpg":
                return "image/jpeg";
              default:
                (0, u.xb)(e);
            }
          })(n),
        };
      }
      function p(e) {
        let {
          assetOrigin: t = l.E.NEW_ASSET,
          imageUri: n,
          description: i,
          originalAsset: r,
        } = e;
        switch (t) {
          case l.E.NEW_ASSET:
            return { assetOrigin: t, imageUri: n, description: i };
          case l.E.EDITED_ARCHIVED_ASSET:
            return {
              assetOrigin: t,
              imageUri: n,
              description: i,
              originalAsset: r,
            };
          case l.E.ARCHIVED_ASSET:
            return { assetOrigin: t, imageUri: n, originalAsset: r };
          default:
            (0, u.xb)(t);
        }
      }
      function d(e) {
        let { userId: t, image: n, size: i = 80, canAnimate: r = !0 } = e;
        return null != n && "string" != typeof n
          ? n.assetOrigin === l.E.ARCHIVED_ASSET
            ? E({
                userId: t,
                avatarId: n.originalAsset.id,
                storageHash: n.originalAsset.storageHash,
                size: i,
                canAnimate: r,
                allowWebp: !1,
              })
            : n.imageUri
          : n;
      }
    },
    45837(e, t, n) {
      n.d(t, { A: () => s });
      var i = n(64700),
        r = n(17928),
        a = n(775602),
        u = n(253932),
        l = n(531685);
      function s() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          [t, n] = i.useState(!1),
          s = (0, r.bG)([a.A], () => a.A.useReducedMotion),
          o = (0, r.bG)([l.A], () => l.A.isFocused()),
          c = u.kt.useSetting();
        return {
          shouldAnimate: o && (t || (!s && !e && c)),
          onMouseEnter: i.useCallback(() => n(!0), []),
          onMouseLeave: i.useCallback(() => n(!1), []),
        };
      }
    },
  },
]);
//# sourceMappingURL=21825.afc0efce04c98dce.js.map
