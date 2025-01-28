"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["83909"],
  {
    932374: function (n, t, i) {
      i.r(t);
      var e = i(200651);
      i(192379);
      var s = i(481060),
        r = i(230711),
        l = i(695346),
        a = i(981631),
        o = i(388032),
        d = i(298858);
      t.default = (n) => {
        let { transitionState: t, onClose: i } = n,
          c = [
            {
              title: o.intl.string(o.t["wnt8/P"]),
              description: o.intl.string(o.t.VupM1t),
            },
            {
              title: o.intl.string(o.t.Arohq6),
              description: o.intl.string(o.t.nYLud3),
            },
            {
              title: o.intl.string(o.t.MDXRKi),
              description: o.intl.string(o.t.EG31Wl),
            },
          ];
        return (0, e.jsx)(s.ModalRoot, {
          transitionState: t,
          "aria-label": "",
          children: (0, e.jsxs)(s.ModalContent, {
            className: d.content,
            children: [
              (0, e.jsxs)("div", {
                className: d.header,
                children: [
                  (0, e.jsx)(s.Heading, {
                    variant: "heading-xl/bold",
                    children: o.intl.string(o.t["3k4hTU"]),
                  }),
                  (0, e.jsx)(s.Text, {
                    variant: "text-md/normal",
                    children: o.intl.string(o.t.IR0Bf3),
                  }),
                ],
              }),
              (0, e.jsx)("div", {
                className: d.notes,
                children: c.map((n, t) => {
                  let { title: i, description: r } = n;
                  return (0, e.jsxs)(e.Fragment, {
                    children: [
                      (0, e.jsxs)(
                        "div",
                        {
                          className: d.note,
                          children: [
                            (0, e.jsx)(s.CircleXIcon, {}),
                            (0, e.jsxs)("div", {
                              children: [
                                (0, e.jsx)(s.Heading, {
                                  variant: "heading-md/semibold",
                                  children: i,
                                }),
                                (0, e.jsx)(s.Text, {
                                  variant: "text-xs/normal",
                                  children: r,
                                }),
                              ],
                            }),
                          ],
                        },
                        t,
                      ),
                      t !== c.length - 1 &&
                        (0, e.jsx)(s.FormDivider, { className: d.noteDivider }),
                    ],
                  });
                }),
              }),
              (0, e.jsx)(s.Text, {
                variant: "text-md/normal",
                children: o.intl.string(o.t.cEjHRk),
              }),
              (0, e.jsxs)("div", {
                className: d.linksContainer,
                children: [
                  (0, e.jsxs)(s.Clickable, {
                    onClick: () => {
                      i(), r.Z.open(a.oAB.REGISTERED_GAMES);
                    },
                    className: d.link,
                    children: [
                      (0, e.jsx)(s.Text, {
                        variant: "text-md/medium",
                        children: o.intl.string(o.t["8uoLf3"]),
                      }),
                      (0, e.jsx)(s.ChevronLargeRightIcon, { size: "md" }),
                    ],
                  }),
                  (0, e.jsx)(s.FormDivider, { className: d.linkDivider }),
                  (0, e.jsxs)(s.Clickable, {
                    onClick: () => {
                      i(), r.Z.open(a.oAB.CONNECTIONS);
                    },
                    className: d.link,
                    children: [
                      (0, e.jsx)(s.Text, {
                        variant: "text-md/medium",
                        children: o.intl.string(o.t.Q42xe3),
                      }),
                      (0, e.jsx)(s.ChevronLargeRightIcon, { size: "md" }),
                    ],
                  }),
                ],
              }),
              (0, e.jsxs)("div", {
                className: d.buttonsContainer,
                children: [
                  (0, e.jsx)(s.Button, {
                    onClick: i,
                    color: s.ButtonColors.PRIMARY,
                    children: o.intl.string(o.t["ETE/oK"]),
                  }),
                  (0, e.jsx)(s.Button, {
                    onClick: () => {
                      l.G6.updateSetting(!1), i();
                    },
                    color: s.ButtonColors.RED,
                    children: o.intl.string(o.t.R9GHyc),
                  }),
                ],
              }),
            ],
          }),
        });
      };
    },
    298858: function (n, t, i) {
      n.exports = {
        content: "content_bb75fe",
        header: "header_bb75fe",
        notes: "notes_bb75fe",
        note: "note_bb75fe",
        noteDivider: "noteDivider_bb75fe",
        linksContainer: "linksContainer_bb75fe",
        link: "link_bb75fe",
        linkDivider: "linkDivider_bb75fe",
        buttonsContainer: "buttonsContainer_bb75fe",
      };
    },
  },
]);
//# sourceMappingURL=6c64d3cbf3fb370e469d.js.map
