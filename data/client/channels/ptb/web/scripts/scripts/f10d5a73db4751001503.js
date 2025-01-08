"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["53809"],
  {
    858341: function (n, e, t) {
      t.r(e),
        t.d(e, {
          default: function () {
            return M;
          },
        });
      var l = t(200651);
      t(192379);
      var r = t(513431),
        i = t(481060),
        u = t(239091),
        s = t(299206),
        o = t(26737),
        c = t(905041),
        d = t(89013),
        a = t(449751),
        h = t(601184),
        p = t(168405),
        Z = t(536639),
        f = t(388032);
      function M(n) {
        var e;
        let t,
          M,
          k,
          { channel: g, message: x, target: j, attachment: v, onSelect: b } = n,
          m = j;
        if (null != v) M = t = v.url;
        else
          for (; (0, r.k)(m); )
            (0, r.k)(m, HTMLImageElement) && null != m.src && (M = m.src),
              (0, r.k)(m, HTMLAnchorElement) &&
                null != m.href &&
                ((t = m.href), (k = m.textContent)),
              (m = m.parentNode);
        let C =
            null === (e = document.getSelection()) || void 0 === e
              ? void 0
              : e.toString(),
          G = (0, o.Z)(C),
          w = (0, d.Z)(C),
          H = (0, Z.Z)(x, g),
          I = (0, p.Z)(x, g),
          S = (0, a.Z)(x, g),
          _ = (0, h.Z)(x, g),
          E = (0, c.Z)(null != t ? t : M, k),
          L = (0, s.Z)({
            id: x.id,
            label: f.intl.string(f.t.zBoHlZ),
            shiftId: "".concat(x.channel_id, "-").concat(x.id),
          }),
          N = (0, s.Z)({ id: x.author.id, label: f.intl.string(f.t.Muw4ws) });
        return (0, l.jsxs)(i.Menu, {
          navId: "message",
          onClose: u.Zy,
          "aria-label": f.intl.string(f.t.ChPNkJ),
          onSelect: b,
          children: [
            (0, l.jsx)(i.MenuGroup, { children: G }),
            (0, l.jsx)(i.MenuGroup, { children: w }),
            (0, l.jsxs)(i.MenuGroup, { children: [H, I, S, _] }),
            (0, l.jsx)(i.MenuGroup, { children: E }),
            (0, l.jsxs)(i.MenuGroup, { children: [L, N] }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=f10d5a73db4751001503.js.map
