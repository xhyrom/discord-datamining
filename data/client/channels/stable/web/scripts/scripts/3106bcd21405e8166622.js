"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["22482"],
  {
    918125: function (e, a, s) {
      s.d(a, {
        Z: function () {
          return h;
        },
      });
      var n = s(735250),
        c = s(470079),
        o = s(120356),
        r = s.n(o),
        i = s(481060),
        t = s(235449),
        l = s(300234),
        d = s(77300);
      function h(e) {
        let { guildId: a, goToThread: s } = e,
          o = (0, t.nA)(a),
          h = c.useCallback(
            (e) => {
              let a = o[e.row];
              return (0, n.jsx)(
                l.Z,
                { threadId: a, goToThread: s, showChannelName: !0 },
                "".concat(e.section, "-").concat(e.row),
              );
            },
            [o, s],
          );
        return (0, n.jsx)(i.List, {
          className: r()(d.list, d.activeThreadsList),
          fade: !0,
          sections: [o.length],
          renderSection: () => null,
          sectionHeight: 0,
          rowHeight: 80,
          renderRow: h,
          chunkSize: 20,
        });
      }
    },
    157743: function (e, a, s) {
      s.r(a),
        s.d(a, {
          default: function () {
            return d;
          },
        });
      var n = s(735250);
      s(470079);
      var c = s(481060),
        o = s(918125),
        r = s(488131),
        i = s(124368),
        t = s(689938),
        l = s(453100);
      function d(e) {
        let { guildId: a, onClose: s, transitionState: d } = e;
        return (0, n.jsx)(c.ModalRoot, {
          className: l.modal,
          transitionState: d,
          "aria-label": t.Z.Messages.THREADS,
          size: c.ModalSize.DYNAMIC,
          children: (0, n.jsxs)("div", {
            className: l.container,
            children: [
              (0, n.jsxs)("div", {
                className: l.header,
                children: [
                  (0, n.jsx)(c.ThreadIcon, {
                    size: "md",
                    color: "currentColor",
                    className: l.threadIcon,
                  }),
                  (0, n.jsx)(c.Heading, {
                    variant: "heading-md/semibold",
                    className: l.__invalid_title,
                    children: t.Z.Messages.ALL_ACTIVE_THREADS,
                  }),
                  (0, n.jsx)("div", { className: l.spacer }),
                  (0, n.jsx)(c.Clickable, {
                    className: l.closeIcon,
                    onClick: s,
                    "aria-label": t.Z.Messages.CLOSE,
                    children: (0, n.jsx)(c.XSmallIcon, {
                      size: "md",
                      color: "currentColor",
                    }),
                  }),
                ],
              }),
              (0, n.jsx)(o.Z, {
                guildId: a,
                goToThread: (e, a) => {
                  s(), (0, r.ok)(e, !a, i.on.GUILD_ACTIVE_THREADS_MODAL);
                },
              }),
            ],
          }),
        });
      }
    },
    453100: function (e, a, s) {
      e.exports = {
        modal: "modal_f30e90",
        container: "container_f30e90",
        header: "header_f30e90",
        spacer: "spacer_f30e90",
        threadIcon: "threadIcon_f30e90",
        closeIcon: "closeIcon_f30e90",
      };
    },
  },
]);
//# sourceMappingURL=3106bcd21405e8166622.js.map
