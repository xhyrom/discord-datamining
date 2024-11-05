"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["94706"],
  {
    168133: function (t, e, i) {
      i.r(e),
        i.d(e, {
          default: function () {
            return l;
          },
        });
      var n = i(200651),
        o = i(192379),
        c = i(442837),
        a = i(481060),
        u = i(239091),
        r = i(13245),
        s = i(237997),
        d = i(981631),
        f = i(388032);
      function l(t) {
        let { onSelect: e, onClose: i } = t,
          { textChatNotificationMode: l } = (0, c.cj)([s.Z], () => ({
            textChatNotificationMode: s.Z.getTextChatNotificationMode(),
          })),
          h = o.useRef(i);
        return (
          o.useEffect(() => void (h.current = i)),
          o.useEffect(() => () => h.current(), []),
          (0, n.jsx)(a.Menu, {
            navId: "overlay-notifications-widget-context-menu",
            onClose: u.Zy,
            "aria-label": f.intl.string(f.t.tPfVWl),
            onSelect: e,
            children: (0, n.jsx)(a.MenuCheckboxItem, {
              label: f.intl.string(f.t.Fy5kPj),
              checked: l === d.Ypu.ENABLED,
              id: "overlay-text-chat-notifications",
              action: () =>
                r.Z.setTextChatNotificationMode(
                  l === d.Ypu.ENABLED ? d.Ypu.DISABLED : d.Ypu.ENABLED,
                ),
            }),
          })
        );
      }
    },
  },
]);
//# sourceMappingURL=3d77a3740199c6d611cc.js.map
