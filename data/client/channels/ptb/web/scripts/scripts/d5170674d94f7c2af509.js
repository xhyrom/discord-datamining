"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["99414"],
  {
    187658: function (e, s, a) {
      a.r(s),
        a.d(s, {
          default: function () {
            return o;
          },
        });
      var n = a(735250);
      a(470079);
      var r = a(481060),
        E = a(239091),
        t = a(716161),
        _ = a(647177),
        i = a(689938);
      function o(e) {
        let { onSelect: s, backgroundOption: a, optionIsInUse: o } = e;
        return (0, n.jsx)(r.Menu, {
          navId: "video-background-context",
          onClose: E.Zy,
          onSelect: s,
          "aria-label": i.Z.Messages.VIDEO_BACKGROUND_CONTEXT_MENU_LABEL,
          children: (0, n.jsx)(r.MenuItem, {
            id: "remove",
            action: () => {
              if (!!(0, _.rD)(a)) (0, t.KH)(a), (0, _.$w)(a);
            },
            label: (0, _.rD)(a)
              ? o
                ? i.Z.Messages.VIDEO_BACKGROUND_CANNOT_REMOVE_SELECTED
                : i.Z.Messages.VIDEO_BACKGROUND_REMOVE
              : i.Z.Messages.VIDEO_BACKGROUND_CANNOT_REMOVE_DEFAULT,
            disabled: !(0, _.rD)(a) || o,
            color: "danger",
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=d5170674d94f7c2af509.js.map
