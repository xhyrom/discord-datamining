"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["32382"],
  {
    955280: function (e, a, t) {
      t.r(a),
        t.d(a, {
          default: function () {
            return g;
          },
        });
      var n = t(200651),
        l = t(192379),
        i = t(442837),
        s = t(481060),
        u = t(239091),
        r = t(13245),
        d = t(237997),
        o = t(981631),
        c = t(388032);
      let v = () => [
          { value: o.ipw.LARGE, name: c.intl.string(c.t.YcOxtr) },
          { value: o.ipw.SMALL, name: c.intl.string(c.t.BKIKq6) },
        ],
        m = () => [
          { value: o.wC$.ALWAYS, name: c.intl.string(c.t.nBmDra) },
          {
            value: o.wC$.ONLY_WHILE_SPEAKING,
            name: c.intl.string(c.t["2OvIZW"]),
          },
          { value: o.wC$.NEVER, name: c.intl.string(c.t.ekjlPD) },
        ],
        p = () => [
          { value: o.OYC.ALWAYS, name: c.intl.string(c.t.nBmDra) },
          {
            value: o.OYC.ONLY_WHILE_SPEAKING,
            name: c.intl.string(c.t["2OvIZW"]),
          },
        ];
      function g(e) {
        let { onSelect: a, onClose: t } = e,
          {
            avatarSizeMode: o,
            displayNameMode: g,
            displayUserMode: M,
          } = (0, i.cj)([d.Z], () => ({
            avatarSizeMode: d.Z.getAvatarSizeMode(),
            displayNameMode: d.Z.getDisplayNameMode(),
            displayUserMode: d.Z.getDisplayUserMode(),
          })),
          h = l.useRef(t);
        return (
          l.useEffect(() => void (h.current = t)),
          l.useEffect(() => () => h.current(), []),
          (0, n.jsxs)(s.Menu, {
            navId: "overlay-voice-widget-context-menu",
            onClose: u.Zy,
            "aria-label": c.intl.string(c.t.tPfVWl),
            onSelect: a,
            children: [
              (0, n.jsx)(s.MenuGroup, {
                label: c.intl.string(c.t.dnvZSk),
                children: v().map((e) =>
                  (0, n.jsx)(
                    s.MenuRadioItem,
                    {
                      label: e.name,
                      checked: o === e.value,
                      id: "avatar-size-mode-".concat(e.value),
                      group: "avatar-size-mode",
                      action: () => r.Z.setAvatarSizeMode(e.value),
                    },
                    e.value,
                  ),
                ),
              }),
              (0, n.jsx)(s.MenuGroup, {
                label: c.intl.string(c.t.J0dpcH),
                children: m().map((e) =>
                  (0, n.jsx)(
                    s.MenuRadioItem,
                    {
                      label: e.name,
                      checked: g === e.value,
                      id: "display-name-mode-".concat(e.value),
                      group: "display-name-mode",
                      action: () => r.Z.setDisplayNameMode(e.value),
                    },
                    e.value,
                  ),
                ),
              }),
              (0, n.jsx)(s.MenuGroup, {
                label: c.intl.string(c.t.swsWWF),
                children: p().map((e) =>
                  (0, n.jsx)(
                    s.MenuRadioItem,
                    {
                      label: e.name,
                      checked: M === e.value,
                      id: "display-user-mode-".concat(e.value),
                      group: "display-user-mode",
                      action: () => r.Z.setDisplayUserMode(e.value),
                    },
                    e.value,
                  ),
                ),
              }),
            ],
          })
        );
      }
    },
  },
]);
//# sourceMappingURL=d91c7fbb56e744e2064e.js.map
