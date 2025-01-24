"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["82961"],
  {
    191237: function (t, e, n) {
      var i = n(200651);
      n(192379);
      var o = n(481060);
      e.Z = {
        showAgeVerification: (t) => {
          (0, o.openModalLazy)(async () => {
            let { default: e } = await n.e("12014").then(n.bind(n, 879367));
            return (n) => (0, i.jsx)(e, { ...t, ...n });
          });
        },
      };
    },
    751744: function (t, e, n) {
      n.r(e);
      var i = n(200651),
        o = n(192379),
        s = n(442837),
        r = n(481060),
        a = n(191237),
        l = n(138201),
        c = n(331692),
        d = n(103879),
        h = n(236289),
        u = n(800530),
        m = n(388032),
        g = n(177872);
      let x = [
        {
          title: m.intl.string(m.t["1+E7LC"]),
          description: m.intl.string(m.t.BXiat7),
        },
        {
          title: m.intl.string(m.t.iMQXtL),
          description: m.intl.string(m.t.oQ0vws),
        },
        {
          title: m.intl.string(m.t["oY/z1d"]),
          description: m.intl.string(m.t.wtj02d),
        },
      ];
      e.default = function (t) {
        let { onClose: e, transitionState: n } = t,
          p = (0, s.e7)([h.Z], () => h.Z.getAgeVerificationWebviewUrl()),
          b = (0, s.e7)([h.Z], () => h.Z.getIsLoadingAgeVerification()),
          N = o.useCallback(() => {
            e(), c.Z.close();
          }, [e]),
          _ = o.useCallback(() => {
            c.Z.success(), N(), c.Z.start_verification_check();
          }, [N]);
        return (
          o.useEffect(() => {
            "" !== p &&
              a.Z.showAgeVerification({ webviewUrl: p, onComplete: _ });
          }, [p, _]),
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
                        children: m.intl.string(m.t["9SDLnp"]),
                      }),
                      (0, i.jsx)(r.Heading, {
                        variant: "heading-md/normal",
                        color: "header-secondary",
                        children: m.intl.string(m.t["yvx///"]),
                      }),
                    ],
                  }),
                  (0, i.jsx)("div", {
                    className: g.listContent,
                    children: (0, i.jsx)("div", {
                      className: g.table,
                      children: x.map((t, e) => {
                        let { title: n, description: o } = t;
                        return (0, i.jsx)(
                          l.ZP,
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
                  }),
                  (0, i.jsxs)("div", {
                    className: g.anotherOption,
                    children: [
                      (0, i.jsx)(r.Text, {
                        variant: "text-sm/semibold",
                        className: g.optionEyebrow,
                        color: "header-secondary",
                        children: m.intl.string(m.t.WPwp1d),
                      }),
                      (0, i.jsx)("div", {
                        className: g.table,
                        children: (0, i.jsx)(l.ZP, {
                          title: m.intl.string(m.t.N9WJMD),
                          description: m.intl.string(m.t["NHq38/"]),
                          buttonText: m.intl.string(m.t["9iy4lJ"]),
                          buttonColor: r.Button.Colors.PRIMARY,
                          titleVariant: "text-md/medium",
                          onButtonPress: () =>
                            window.open(u.sQ.AGE_VERIFICATION_LINK, "_blank"),
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className: g.learnMore,
                        children: (0, i.jsx)(r.Heading, {
                          variant: "heading-sm/medium",
                          color: "text-secondary",
                          children: m.intl.format(m.t.ZbWsOD, {
                            learnMoreLink: u.sQ.LEARN_MORE_UU_APPEAL_LINK,
                          }),
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
                    onClick: d.FN,
                    submitting: b,
                    children: m.intl.string(m.t["54b8V1"]),
                  }),
                  (0, i.jsx)(r.Button, {
                    color: r.Button.Colors.TRANSPARENT,
                    look: r.Button.Looks.BLANK,
                    onClick: N,
                    className: g.cancelButton,
                    children: m.intl.string(m.t.dKacJy),
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
        learnMore: "learnMore_e4c51c",
      };
    },
  },
]);
//# sourceMappingURL=99b68bc46ee26c41f9e2.js.map
