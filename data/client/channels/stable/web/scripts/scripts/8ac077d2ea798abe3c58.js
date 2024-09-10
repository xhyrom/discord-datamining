"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["57951"],
  {
    845133: function (e) {
      e.exports = "/assets/df670815658f288bce7d.svg";
    },
    764896: function (e) {
      e.exports = "/assets/0c660075ce66b46cdaf0.svg";
    },
    102579: function (e) {
      e.exports = "/assets/21a50bd7c588820c1bef.svg";
    },
    224604: function (e, t, s) {
      s.r(t),
        s.d(t, {
          ActivityAgeGateModal: function () {
            return r;
          },
        });
      var i = s(735250);
      s(470079);
      var n = s(481060),
        a = s(986035),
        o = s(689938),
        c = s(639630);
      function r(e) {
        let { application: t, onAgree: s, onClose: r, onDisagree: l, ...d } = e;
        return (0, i.jsx)(n.ModalRoot, {
          ...d,
          children: (0, i.jsx)("div", {
            children: (0, i.jsx)(a.Z, {
              onAgree: () => {
                s(), r();
              },
              onDisagree: () => {
                l(), r();
              },
              title: o.Z.Messages.EMBEDDED_ACTIVITIES_AGE_GATED_TITLE,
              description:
                o.Z.Messages.EMBEDDED_ACTIVITIES_AGE_GATED_DESCRIPTION.format({
                  applicationName: t.name,
                }),
              agreement: o.Z.Messages.NSFW_ACCEPT,
              disagreement: o.Z.Messages.NSFW_DECLINE,
              imageClassName: c.image,
            }),
          }),
        });
      }
    },
    986035: function (e, t, s) {
      var i = s(735250),
        n = s(470079),
        a = s(120356),
        o = s.n(a),
        c = s(481060),
        r = s(600164),
        l = s(138894),
        d = s(113207);
      class u extends n.PureComponent {
        render() {
          let {
            title: e,
            description: t,
            agreement: s,
            disagreement: n,
            onAgree: a,
            onDisagree: u,
            imageClassName: g,
          } = this.props;
          return (0, i.jsxs)(r.Z, {
            className: l.gatedContent,
            justify: r.Z.Justify.CENTER,
            align: r.Z.Align.CENTER,
            direction: r.Z.Direction.VERTICAL,
            children: [
              (0, i.jsx)("div", { className: o()(l.image, g) }),
              (0, i.jsx)("div", {
                className: o()(l.title, d.marginBottom8),
                children: e,
              }),
              (0, i.jsx)("div", {
                className: o()(l.description, d.marginBottom20),
                children: t,
              }),
              (0, i.jsxs)(r.Z, {
                justify: r.Z.Justify.CENTER,
                align: r.Z.Align.CENTER,
                grow: 0,
                children: [
                  null != n
                    ? (0, i.jsx)(c.Button, {
                        className: l.action,
                        size: c.ButtonSizes.LARGE,
                        color: c.ButtonColors.PRIMARY,
                        onClick: u,
                        children: n,
                      })
                    : null,
                  null != s
                    ? (0, i.jsx)(c.Button, {
                        className: l.action,
                        color: c.Button.Colors.RED,
                        size: c.ButtonSizes.LARGE,
                        onClick: a,
                        children: s,
                      })
                    : null,
                ],
              }),
            ],
          });
        }
      }
      t.Z = u;
    },
    639630: function (e, t, s) {
      e.exports = { image: "image_f307a0" };
    },
    138894: function (e, t, s) {
      e.exports = {
        gatedContent: "gatedContent_def860",
        image: "image_def860",
        title: "title_def860",
        description: "description_def860",
        action: "action_def860",
      };
    },
  },
]);
//# sourceMappingURL=8ac077d2ea798abe3c58.js.map
