"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["81056"],
  {
    743161: function (e, o, s) {
      s.r(o);
      var t = s(735250),
        a = s(470079),
        n = s(442837),
        r = s(481060),
        c = s(541099),
        l = s(827498),
        i = s(421591),
        u = s(314734),
        d = s(689938),
        h = s(551397);
      o.default = a.memo(function (e) {
        let { channel: o, ...s } = e,
          p = (0, n.e7)([c.Z], () => c.Z.shouldShowModal());
        return (
          a.useEffect(() => {
            !p && (0, r.closeModal)(u.e9);
          }),
          (0, t.jsx)("span", {
            style: u.u$,
            children: (0, t.jsx)(r.ModalRoot, {
              className: h.root,
              "aria-label": d.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE,
              ...s,
              children: (0, t.jsx)(i.Z, { channel: o, entrypoint: l._b.VOICE }),
            }),
          })
        );
      });
    },
    551397: function (e, o, s) {
      e.exports = { root: "root_ebf21e" };
    },
  },
]);
//# sourceMappingURL=01b08de06545d0f924ab.js.map
