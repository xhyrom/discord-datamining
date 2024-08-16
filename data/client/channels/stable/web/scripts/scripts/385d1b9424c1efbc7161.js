"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["53809"],
  {
    858341: function (e, n, l) {
      l.r(n),
        l.d(n, {
          default: function () {
            return _;
          },
        });
      var r = l(735250);
      l(470079);
      var s = l(374470),
        t = l(481060),
        u = l(239091),
        i = l(299206),
        c = l(26737),
        o = l(905041),
        a = l(89013),
        d = l(449751),
        h = l(601184),
        M = l(168405),
        p = l(536639),
        Z = l(689938);
      function _(e) {
        var n;
        let l,
          _,
          f,
          { channel: E, message: S, target: g, attachment: k, onSelect: x } = e,
          C = g;
        if (null != k) _ = l = k.url;
        else
          for (; (0, s.k)(C); )
            (0, s.k)(C, HTMLImageElement) && null != C.src && (_ = C.src),
              (0, s.k)(C, HTMLAnchorElement) &&
                null != C.href &&
                ((l = C.href), (f = C.textContent)),
              (C = C.parentNode);
        let G =
            null === (n = document.getSelection()) || void 0 === n
              ? void 0
              : n.toString(),
          j = (0, c.Z)(G),
          v = (0, a.Z)(G),
          A = (0, p.Z)(S, E),
          I = (0, M.Z)(S, E),
          b = (0, d.Z)(S, E),
          m = (0, h.Z)(S, E),
          L = (0, o.Z)(null != l ? l : _, f),
          O = (0, i.Z)({
            id: S.id,
            label: Z.Z.Messages.COPY_ID_MESSAGE,
            shiftId: "".concat(S.channel_id, "-").concat(S.id),
          }),
          T = (0, i.Z)({ id: S.author.id, label: Z.Z.Messages.COPY_ID_AUTHOR });
        return (0, r.jsxs)(t.Menu, {
          navId: "message",
          onClose: u.Zy,
          "aria-label": Z.Z.Messages.MESSAGE_ACTIONS_MENU_LABEL,
          onSelect: x,
          children: [
            (0, r.jsx)(t.MenuGroup, { children: j }),
            (0, r.jsx)(t.MenuGroup, { children: v }),
            (0, r.jsxs)(t.MenuGroup, { children: [A, I, b, m] }),
            (0, r.jsx)(t.MenuGroup, { children: L }),
            (0, r.jsxs)(t.MenuGroup, { children: [O, T] }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=385d1b9424c1efbc7161.js.map
