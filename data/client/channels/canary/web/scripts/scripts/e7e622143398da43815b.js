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
        a = n(138201),
        c = n(103879),
        d = n(236289),
        u = n(853178),
        h = n(800530),
        m = n(388032),
        x = n(177872);
      let g = [
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
          p = (0, s.e7)([d.Z], () => d.Z.getAgeVerificationWebviewUrl()),
          b = (0, s.e7)([d.Z], () => d.Z.getIsLoadingAgeVerification()),
          N = o.useCallback(() => {
            e(), u.Z.close();
          }, [e]),
          _ = o.useCallback(() => {
            u.Z.success(), N(), u.Z.start_verification_check();
          }, [N]);
        return (
          o.useEffect(() => {
            "" !== p && (0, l.F)({ webviewUrl: p, onComplete: _ });
          }, [p, _]),
          (0, i.jsxs)(r.ModalRoot, {
            transitionState: n,
            className: x.root,
            children: [
              (0, i.jsxs)(r.ModalContent, {
                className: x.content,
                children: [
                  (0, i.jsxs)("div", {
                    className: x.header,
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
                    className: x.listContent,
                    children: (0, i.jsx)("div", {
                      className: x.table,
                      children: g.map((t, e) => {
                        let { title: n, description: o } = t;
                        return (0, i.jsx)(
                          a.ZP,
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
                    className: x.anotherOption,
                    children: [
                      (0, i.jsx)(r.Text, {
                        variant: "text-sm/semibold",
                        className: x.optionEyebrow,
                        color: "header-secondary",
                        children: m.intl.string(m.t.WPwp1d),
                      }),
                      (0, i.jsx)("div", {
                        className: x.table,
                        children: (0, i.jsx)(a.ZP, {
                          title: m.intl.string(m.t.N9WJMD),
                          description: m.intl.string(m.t["NHq38/"]),
                          buttonText: m.intl.string(m.t["9iy4lJ"]),
                          buttonColor: r.Button.Colors.PRIMARY,
                          titleVariant: "text-md/medium",
                          onButtonPress: () =>
                            window.open(h.sQ.AGE_VERIFICATION_LINK, "_blank"),
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className: x.learnMore,
                        children: (0, i.jsx)(r.Heading, {
                          variant: "heading-sm/medium",
                          color: "text-secondary",
                          children: m.intl.format(m.t.ZbWsOD, {
                            learnMoreLink: h.sQ.LEARN_MORE_UU_APPEAL_LINK,
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.jsxs)(r.ModalFooter, {
                className: x.footer,
                children: [
                  (0, i.jsx)(r.Button, {
                    onClick: c.FN,
                    submitting: b,
                    children: m.intl.string(m.t["54b8V1"]),
                  }),
                  (0, i.jsx)(r.Button, {
                    color: r.Button.Colors.TRANSPARENT,
                    look: r.Button.Looks.BLANK,
                    onClick: N,
                    className: x.cancelButton,
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
//# sourceMappingURL=e7e622143398da43815b.js.map
