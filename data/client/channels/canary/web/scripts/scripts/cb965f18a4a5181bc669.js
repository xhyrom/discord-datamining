"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["57951"],
  {
    845133: function (t) {
      t.exports = "/assets/df670815658f288bce7d.svg";
    },
    764896: function (t) {
      t.exports = "/assets/0c660075ce66b46cdaf0.svg";
    },
    102579: function (t) {
      t.exports = "/assets/21a50bd7c588820c1bef.svg";
    },
    252528: function (t, e, i) {
      i.r(e),
        i.d(e, {
          ActivityAgeGateModal: function () {
            return c;
          },
        });
      var n = i(200651);
      i(192379);
      var s = i(481060),
        o = i(986035),
        a = i(388032),
        r = i(345441);
      function c(t) {
        let { application: e, onAgree: i, onClose: c, onDisagree: l, ...d } = t;
        return (0, n.jsx)(s.ModalRoot, {
          ...d,
          children: (0, n.jsx)("div", {
            children: (0, n.jsx)(o.Z, {
              onAgree: () => {
                i(), c();
              },
              onDisagree: () => {
                l(), c();
              },
              title: a.intl.string(a.t.SSDPOD),
              description: a.intl.formatToPlainString(a.t.OgmIq6, {
                applicationName: e.name,
              }),
              agreement: a.intl.string(a.t.wVq7ur),
              disagreement: a.intl.string(a.t.hg1uxs),
              imageClassName: r.image,
            }),
          }),
        });
      }
    },
    986035: function (t, e, i) {
      var n = i(200651),
        s = i(192379),
        o = i(120356),
        a = i.n(o),
        r = i(481060),
        c = i(600164),
        l = i(644583),
        d = i(275477);
      class u extends s.PureComponent {
        render() {
          let {
            title: t,
            description: e,
            agreement: i,
            disagreement: s,
            onAgree: o,
            onDisagree: u,
            imageClassName: g,
          } = this.props;
          return (0, n.jsxs)(c.Z, {
            className: l.gatedContent,
            justify: c.Z.Justify.CENTER,
            align: c.Z.Align.CENTER,
            direction: c.Z.Direction.VERTICAL,
            children: [
              (0, n.jsx)("div", { className: a()(l.image, g) }),
              (0, n.jsx)("div", {
                className: a()(l.title, d.marginBottom8),
                children: t,
              }),
              (0, n.jsx)("div", {
                className: a()(l.description, d.marginBottom20),
                children: e,
              }),
              (0, n.jsxs)(c.Z, {
                justify: c.Z.Justify.CENTER,
                align: c.Z.Align.CENTER,
                grow: 0,
                children: [
                  null != s
                    ? (0, n.jsx)(r.Button, {
                        className: l.action,
                        size: r.ButtonSizes.LARGE,
                        color: r.ButtonColors.PRIMARY,
                        onClick: u,
                        children: s,
                      })
                    : null,
                  null != i
                    ? (0, n.jsx)(r.Button, {
                        className: l.action,
                        color: r.Button.Colors.RED,
                        size: r.ButtonSizes.LARGE,
                        onClick: o,
                        children: i,
                      })
                    : null,
                ],
              }),
            ],
          });
        }
      }
      e.Z = u;
    },
    345441: function (t, e, i) {
      t.exports = { image: "image_f307a0" };
    },
    644583: function (t, e, i) {
      t.exports = {
        gatedContent: "gatedContent_def860",
        image: "image_def860",
        title: "title_def860",
        description: "description_def860",
        action: "action_def860",
      };
    },
  },
]);
//# sourceMappingURL=cb965f18a4a5181bc669.js.map
