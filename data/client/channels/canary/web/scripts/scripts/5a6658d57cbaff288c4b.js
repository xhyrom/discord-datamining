"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["66462"],
  {
    756226: function (t, e, n) {
      n.r(e), n(47120);
      var r = n(200651);
      n(192379);
      var o = n(435935),
        i = n(481060),
        a = n(259756),
        c = n(785681),
        s = n(880257),
        l = n(863552),
        d = n(292352),
        h = n(388032),
        C = n(251754),
        x = n(128216);
      let u = {
          [d.MY.USER_INTERACTION]: (0, r.jsx)(l.Z, { width: 18, height: 18 }),
          [d.MY.USER_CALLED]: (0, r.jsx)(i.PhoneCallIcon, {
            size: "custom",
            color: "currentColor",
            width: 22,
            height: 22,
          }),
          [d.MY.USER_ADD]: (0, r.jsx)(i.FriendsIcon, {
            size: "custom",
            color: "currentColor",
            className: C.personWavingIcon,
            width: 22,
            height: 22,
          }),
          [d.MY.GUILD_ADD]: (0, r.jsx)(i.ServerGridIcon, {
            size: "custom",
            color: "currentColor",
            width: 22,
            height: 22,
          }),
          [d.MY.GUILD_INTERACTION]: (0, r.jsx)(i.TextIcon, {
            size: "custom",
            color: "currentColor",
            className: C.threadIcon,
            width: 22,
            height: 22,
          }),
        },
        m = (t) => {
          let { header: e, description: n, icon: a } = t;
          return (0, r.jsxs)(o.k, {
            className: C.row,
            grow: 0,
            children: [
              (0, r.jsx)("div", { className: C.iconContainer, children: a }),
              (0, r.jsxs)("div", {
                className: C.rowContent,
                children: [
                  (0, r.jsx)(i.Text, {
                    className: C.__invalid_rowHeader,
                    variant: "text-sm/bold",
                    children: e,
                  }),
                  (0, r.jsx)(i.Text, {
                    variant: "text-xs/medium",
                    children: n,
                  }),
                ],
              }),
            ],
          });
        };
      e.default = (t) => {
        let { transitionState: e, onClose: n } = t,
          l = (0, c.o)(h.intl.string(h.t.q3IRam), h.intl.string(h.t.JNLpDQ)),
          _ = (0, s.Z)(),
          g = Array.from(d.tx.entries()),
          j = (0, a.Xi)({ location: "family_center_tooltip_modal_web" });
        return (0, r.jsxs)(i.ModalRoot, {
          transitionState: e,
          children: [
            (0, r.jsx)("img", {
              className: C.art,
              src: x,
              alt: h.intl.string(h.t.ffg6xc),
            }),
            (0, r.jsx)(i.ModalContent, {
              className: C.content,
              children: (0, r.jsxs)(o.k, {
                direction: o.k.Direction.VERTICAL,
                align: o.k.Align.CENTER,
                children: [
                  (0, r.jsx)(i.Heading, {
                    className: C.header,
                    color: "header-primary",
                    variant: "heading-lg/semibold",
                    children: (0, r.jsx)(i.HeadingLevel, { children: l }),
                  }),
                  g.map((t) => {
                    let [e, n] = t;
                    return (0, r.jsx)(
                      m,
                      {
                        icon: u[e],
                        header: n.tooltipHeader(),
                        description: n.tooltipDescription(
                          null != _ ? _ : void 0,
                          j,
                        ),
                      },
                      e,
                    );
                  }),
                ],
              }),
            }),
            (0, r.jsx)(i.ModalFooter, {
              children: (0, r.jsx)(i.Button, {
                className: C.__invalid_button,
                type: "button",
                color: i.Button.Colors.BRAND,
                onClick: n,
                children: h.intl.string(h.t["NX+WJC"]),
              }),
            }),
          ],
        });
      };
    },
    863552: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return i;
        },
      });
      var r = n(200651);
      n(192379);
      var o = n(331595);
      function i(t) {
        let {
          width: e = 24,
          height: n = 24,
          color: i = "currentColor",
          ...a
        } = t;
        return (0, r.jsxs)("svg", {
          ...(0, o.Z)(a),
          width: e,
          height: n,
          viewBox: "0 0 20 20",
          fill: "none",
          children: [
            (0, r.jsx)("path", {
              d: "M5.42999 16C5.73201 16 5.97454 15.7326 5.98651 15.4309C5.99216 15.2885 6 15.145 6 15C6 10.582 8.97355 7 13.6115 7C15.3176 7 16.9378 7.60732 18.2734 8.47894C18.6009 8.69267 19.0088 8.49717 19.0012 8.10616C19.0004 8.06876 19 8.03318 19 8C19 3.589 15.0439 0 10.1825 0C5.32115 0 1.36504 3.589 1.36504 8C1.36504 9.24168 1.67304 10.4357 2.26529 11.523C2.49433 11.9436 2.45549 12.472 2.12042 12.8141L0.664819 14.3003C0.0449194 14.9332 0.493315 16 1.37923 16H5.42999Z",
              fill: i,
            }),
            (0, r.jsx)("path", {
              d: "M20.0134 17.8398C19.8366 17.558 19.8172 17.2085 19.9242 16.8935C20.1307 16.2852 20.2371 15.6451 20.2371 15C20.2371 11.691 17.4914 9 14.1166 9C10.7419 9 7.99609 11.691 7.99609 15C7.99609 18.309 10.7419 21 14.1166 21H20.1882C20.9744 21 21.4531 20.1345 21.0353 19.4685L20.0134 17.8398Z",
              fill: i,
            }),
          ],
        });
      }
    },
    251754: function (t, e, n) {
      t.exports = {
        content: "content_c04baf",
        art: "art_c04baf",
        header: "header_c04baf",
        row: "row_c04baf",
        rowContent: "rowContent_c04baf",
        iconContainer: "iconContainer_c04baf",
        threadIcon: "threadIcon_c04baf",
        personWavingIcon: "personWavingIcon_c04baf",
      };
    },
  },
]);
//# sourceMappingURL=5a6658d57cbaff288c4b.js.map
