"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["41281"],
  {
    337667: function (t) {
      t.exports = "/assets/1e7a8bc758953dbcd3ee.png";
    },
    669732: function (t, e, n) {
      n.r(e);
      var r = n(200651);
      n(192379);
      var i = n(120356),
        a = n.n(i),
        s = n(481060),
        o = n(923928),
        c = n(600164),
        l = n(388032),
        m = n(328414),
        d = n(337667);
      e.default = (t) => {
        let {
          onClose: e,
          transitionState: n,
          showHideSuppressWarning: i = !1,
        } = t;
        return (0, r.jsx)(s.ModalRoot, {
          transitionState: n,
          className: m.container,
          "aria-label": l.intl.string(l.t["4Y2AS0"]),
          children: (0, r.jsxs)("form", {
            onSubmit: (t) => {
              null == t || t.preventDefault(),
                o.Z.clearSuppressWarning(),
                null == e || e();
            },
            className: m.form,
            children: [
              (0, r.jsxs)(s.ModalContent, {
                className: m.modalContent,
                children: [
                  (0, r.jsx)("img", { src: d, alt: "", className: m.hero }),
                  (0, r.jsx)(s.Text, {
                    className: m.title,
                    color: "header-primary",
                    variant: "text-md/semibold",
                    children: l.intl.string(l.t.sDvH0d),
                  }),
                  (0, r.jsx)(s.Text, {
                    className: m.description,
                    color: "header-secondary",
                    variant: "text-sm/normal",
                    children: l.intl.string(l.t["CLpr//"]),
                  }),
                ],
              }),
              (0, r.jsxs)(s.ModalFooter, {
                justify: c.Z.Justify.BETWEEN,
                wrap: c.Z.Wrap.WRAP,
                children: [
                  (0, r.jsx)(s.Button, {
                    type: "submit",
                    size: s.Button.Sizes.LARGE,
                    className: a()(m.primaryButton, m.gutter),
                    autoFocus: !0,
                    children: l.intl.string(l.t["NX+WJC"]),
                  }),
                  i &&
                    (0, r.jsx)(s.Clickable, {
                      onClick: () => o.Z.clearSuppressWarning(!0),
                      className: m.minorContainer,
                      children: (0, r.jsx)(s.Text, {
                        className: m.minorAction,
                        variant: "text-xs/normal",
                        children: l.intl.string(l.t["5E9SBw"]),
                      }),
                    }),
                ],
              }),
            ],
          }),
        });
      };
    },
    328414: function (t, e, n) {
      t.exports = {
        container: "container_ec343b",
        form: "form_ec343b",
        modalContent: "modalContent_ec343b",
        minorContainer: "minorContainer_ec343b",
        minorAction: "minorAction_ec343b",
        title: "title_ec343b",
        description: "description_ec343b",
        primaryButton: "primaryButton_ec343b",
        gutter: "gutter_ec343b",
        hero: "hero_ec343b",
      };
    },
  },
]);
//# sourceMappingURL=312e208fa1d45e4c5002.js.map
