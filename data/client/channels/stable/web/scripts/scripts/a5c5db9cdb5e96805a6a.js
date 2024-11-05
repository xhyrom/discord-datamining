"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["99414"],
  {
    187658: function (t, n, i) {
      i.r(n),
        i.d(n, {
          default: function () {
            return s;
          },
        });
      var r = i(200651);
      i(192379);
      var e = i(481060),
        a = i(239091),
        o = i(716161),
        c = i(647177),
        l = i(388032);
      function s(t) {
        let { onSelect: n, backgroundOption: i, optionIsInUse: s } = t;
        return (0, r.jsx)(e.Menu, {
          navId: "video-background-context",
          onClose: a.Zy,
          onSelect: n,
          "aria-label": l.intl.string(l.t.ptxALC),
          children: (0, r.jsx)(e.MenuItem, {
            id: "remove",
            action: () => {
              if (!!(0, c.rD)(i)) (0, o.KH)(i), (0, c.$w)(i);
            },
            label: (0, c.rD)(i)
              ? s
                ? l.intl.string(l.t["xh/P//"])
                : l.intl.string(l.t.oKuPwc)
              : l.intl.string(l.t.hFYUDA),
            disabled: !(0, c.rD)(i) || s,
            color: "danger",
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=a5c5db9cdb5e96805a6a.js.map
