"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["36149"],
  {
    803316(t, e, r) {
      r.d(e, {
        N7: () => c,
        PK: () => d,
        XW: () => m,
        bc: () => f,
        e7: () => p,
        fW: () => u,
      });
      var a = r(376304),
        n = r(202803),
        s = r(68935),
        i = r(403362),
        l = r(998218),
        o = r(19575);
      let c = "png",
        h = "cdn.discordapp.com";
      function u(t) {
        return !((0, s.NO)(t) || (0, a.XD)(t));
      }
      function p(t, e, r) {
        let a = o.Ay.canSaveImage(t, r ?? e),
          n = l.A.isDiscordAssetUrl(t, e, r),
          s = u(t);
        return a && n && s;
      }
      function d(t, e, r) {
        let a = o.Ay.canCopyImage(t),
          n = l.A.isDiscordAssetUrl(t, e, r),
          s = u(t);
        return a && n && s;
      }
      function f(t, e) {
        if ((0, i.iT)()) return t ?? e;
        if (null != t) {
          let r = l.A.toURLSafe(e);
          if (null != r && (0, n.BX)(r)) return t;
        }
        return e;
      }
      function m(t, e, r, a) {
        let n = l.A.toURLSafe(t);
        if (null == n || n.host === h) return t;
        let s = (0, o.UB)(t, e),
          c = !1;
        if (
          ("https://media.discordapp.net" === n.origin && (c = !0),
          (0, i.iT)() && "http://localhost:4000" === n.origin && (c = !0),
          n.searchParams.delete("width"),
          n.searchParams.delete("height"),
          n.searchParams.delete("quality"),
          n.searchParams.delete("size"),
          c)
        )
          if ((0, i.iT)()) {
            if (l.A.isOriginalContentTypeDifferent(e, r)) return n.toString();
            (n.host = "localhost"),
              (n.port = "3000"),
              n.pathname.startsWith("/attachments/") &&
                (n.pathname = "/channels/" + n.pathname.substring(13));
          } else n.host = h;
        return (
          n.searchParams.delete("format"),
          null == s && null != a && n.searchParams.append("format", a),
          n.toString()
        );
      }
    },
  },
]);
//# sourceMappingURL=36149.6ea758b9882cd6e6.js.map
