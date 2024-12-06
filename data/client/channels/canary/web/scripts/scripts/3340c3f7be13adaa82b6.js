"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["82961"],
  {
    955522: function (t, e, n) {
      n.d(e, {
        F: function () {
          return s;
        },
      });
      var i = n(200651);
      n(192379);
      var o = n(481060);
      let s = (t) => {
        (0, o.openModalLazy)(async () => {
          let { default: e } = await n.e("12014").then(n.bind(n, 879367));
          return (n) => (0, i.jsx)(e, { ...t, ...n });
        });
      };
    },
    751744: function (t, e, n) {
      n.r(e);
      var i = n(200651),
        o = n(192379),
        s = n(442837),
        r = n(481060),
        l = n(955522),
        c = n(138201),
        a = n(103879),
        d = n(236289),
        h = n(853178),
        u = n(800530),
        x = n(388032),
        g = n(177872);
      let m = [
        {
          title: x.intl.string(x.t["1+E7LC"]),
          description: x.intl.string(x.t.BXiat7),
        },
        {
          title: x.intl.string(x.t.iMQXtL),
          description: x.intl.string(x.t.oQ0vws),
        },
        {
          title: x.intl.string(x.t["oY/z1d"]),
          description: x.intl.string(x.t.wtj02d),
        },
      ];
      e.default = function (t) {
        let { onClose: e, transitionState: n } = t,
          p = (0, s.e7)([d.Z], () => d.Z.getAgeVerificationWebviewUrl()),
          b = (0, s.e7)([d.Z], () => d.Z.getIsLoadingAgeVerification()),
          j = o.useCallback(() => {
            e(), h.Z.close();
          }, [e]),
          N = o.useCallback(() => {
            h.Z.success(), j(), h.Z.start_verification_check();
          }, [j]);
        return (
          o.useEffect(() => {
            "" !== p && (0, l.F)({ webviewUrl: p, onComplete: N });
          }, [p, N]),
          (0, i.jsxs)(r.ModalRoot, {
            transitionState: n,
            className: g.root,
            children: [
              (0, i.jsxs)(r.ModalContent, {
                className: g.content,
                children: [
                  (0, i.jsxs)("div", {
                    className: g.header,
                    children: [
                      (0, i.jsx)(r.Heading, {
                        variant: "heading-xl/bold",
                        children: x.intl.string(x.t["9SDLnp"]),
                      }),
                      (0, i.jsx)(r.Heading, {
                        variant: "heading-md/normal",
                        color: "header-secondary",
                        children: x.intl.string(x.t["yvx///"]),
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: g.listContent,
                    children: [
                      (0, i.jsx)("div", {
                        className: g.table,
                        children: m.map((t, e) => {
                          let { title: n, description: o } = t;
                          return (0, i.jsx)(
                            c.Z,
                            {
                              title: n,
                              description: o,
                              index: e,
                              listType: "numbered",
                              titleVariant: "text-md/medium",
                            },
                            e,
                          );
                        }),
                      }),
                      (0, i.jsx)(r.Anchor, {
                        href: u.sQ.TOS_LINK,
                        children: (0, i.jsx)(r.Heading, {
                          variant: "heading-sm/medium",
                          color: "text-link",
                          children: x.intl.string(x.t["0WIC4O"]),
                        }),
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: g.anotherOption,
                    children: [
                      (0, i.jsx)(r.Text, {
                        variant: "text-sm/semibold",
                        className: g.optionEyebrow,
                        color: "header-secondary",
                        children: x.intl.string(x.t.WPwp1d),
                      }),
                      (0, i.jsx)("div", {
                        className: g.table,
                        children: (0, i.jsx)(c.Z, {
                          title: x.intl.string(x.t.N9WJMD),
                          description: x.intl.string(x.t["NHq38/"]),
                          buttonText: x.intl.string(x.t["9iy4lJ"]),
                          buttonColor: r.Button.Colors.PRIMARY,
                          titleVariant: "text-md/medium",
                          onButtonPress: () =>
                            window.open(u.sQ.AGE_VERIFICATION_LINK, "_blank"),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.jsxs)(r.ModalFooter, {
                className: g.footer,
                children: [
                  (0, i.jsx)(r.Button, {
                    onClick: a.FN,
                    submitting: b,
                    children: x.intl.string(x.t["54b8V1"]),
                  }),
                  (0, i.jsx)(r.Button, {
                    color: r.Button.Colors.TRANSPARENT,
                    look: r.Button.Looks.BLANK,
                    onClick: j,
                    className: g.cancelButton,
                    children: x.intl.string(x.t.dKacJy),
                  }),
                ],
              }),
            ],
          })
        );
      };
    },
    177872: function (t, e, n) {
      t.exports = {
        header: "header_e4c51c",
        content: "content_e4c51c",
        footer: "footer_e4c51c",
        root: "root_e4c51c",
        table: "table_e4c51c",
        anotherOption: "anotherOption_e4c51c",
        optionEyebrow: "optionEyebrow_e4c51c",
        cancelButton: "cancelButton_e4c51c",
        listContent: "listContent_e4c51c",
      };
    },
  },
]);
//# sourceMappingURL=3340c3f7be13adaa82b6.js.map
