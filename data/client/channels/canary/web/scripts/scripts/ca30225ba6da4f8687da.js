"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["22482"],
  {
    918125: function (e, n, a) {
      a.d(n, {
        Z: function () {
          return h;
        },
      });
      var r = a(200651),
        s = a(192379),
        c = a(120356),
        t = a.n(c),
        o = a(481060),
        i = a(235449),
        l = a(300234),
        d = a(773159);
      function h(e) {
        let { guildId: n, goToThread: a } = e,
          c = (0, i.nA)(n),
          h = s.useCallback(
            (e) => {
              let n = c[e.row];
              return (0, r.jsx)(
                l.Z,
                { threadId: n, goToThread: a, showChannelName: !0 },
                "".concat(e.section, "-").concat(e.row),
              );
            },
            [c, a],
          );
        return (0, r.jsx)(o.List, {
          className: t()(d.list, d.activeThreadsList),
          fade: !0,
          sections: [c.length],
          renderSection: () => null,
          sectionHeight: 0,
          rowHeight: 80,
          renderRow: h,
          chunkSize: 20,
        });
      }
    },
    157743: function (e, n, a) {
      a.r(n),
        a.d(n, {
          default: function () {
            return d;
          },
        });
      var r = a(200651);
      a(192379);
      var s = a(481060),
        c = a(918125),
        t = a(488131),
        o = a(124368),
        i = a(388032),
        l = a(258533);
      function d(e) {
        let { guildId: n, onClose: a, transitionState: d } = e;
        return (0, r.jsx)(s.ModalRoot, {
          className: l.modal,
          transitionState: d,
          "aria-label": i.intl.string(i.t.B2panJ),
          size: s.ModalSize.DYNAMIC,
          children: (0, r.jsxs)("div", {
            className: l.container,
            children: [
              (0, r.jsxs)("div", {
                className: l.header,
                children: [
                  (0, r.jsx)(s.ThreadIcon, {
                    size: "md",
                    color: "currentColor",
                    className: l.threadIcon,
                  }),
                  (0, r.jsx)(s.Heading, {
                    variant: "heading-md/semibold",
                    className: l.__invalid_title,
                    children: i.intl.string(i.t["dOWb+f"]),
                  }),
                  (0, r.jsx)("div", { className: l.spacer }),
                  (0, r.jsx)(s.Clickable, {
                    className: l.closeIcon,
                    onClick: a,
                    "aria-label": i.intl.string(i.t.cpT0Cg),
                    children: (0, r.jsx)(s.XSmallIcon, {
                      size: "md",
                      color: "currentColor",
                    }),
                  }),
                ],
              }),
              (0, r.jsx)(c.Z, {
                guildId: n,
                goToThread: (e, n) => {
                  a(), (0, t.ok)(e, !n, o.on.GUILD_ACTIVE_THREADS_MODAL);
                },
              }),
            ],
          }),
        });
      }
    },
    258533: function (e, n, a) {
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
//# sourceMappingURL=ca30225ba6da4f8687da.js.map
