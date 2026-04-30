"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["63309"],
  {
    675704(d, s, a) {
      a.d(s, { R: () => i });
      var o = a(793322),
        t = a(186111);
      let i = {
        binds: ["mod+k", "mod+t"],
        comboKeysBindGlobal: !0,
        action: () => (t.A.hasLayers() || (0, o.WU)(), !1),
      };
    },
    28647(d, s, a) {
      a.d(s, { z: () => e });
      var o = a(192308),
        t = a(228366),
        i = a(946974);
      let e = {
        binds: ["mod+/", "mod+shift+/"],
        comboKeysBindGlobal: !0,
        action: () => (
          (0, o.hasModalOpen)(i.P)
            ? t.h.dispatch({ type: "HIDE_KEYBOARD_SHORTCUTS" })
            : t.h.dispatch({ type: "SHOW_KEYBOARD_SHORTCUTS" }),
          !1
        ),
      };
    },
    946974(d, s, a) {
      a.d(s, { P: () => o });
      let o = "KEYBOARD_SHORTCUT_MODAL_KEY";
    },
  },
]);
//# sourceMappingURL=63309.dee05897f5933499.js.map
