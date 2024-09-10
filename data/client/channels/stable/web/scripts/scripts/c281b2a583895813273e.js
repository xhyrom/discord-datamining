"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["66462"],
  {
    756226: function (e, t, o) {
      o.r(t), o(47120);
      var n = o(735250);
      o(470079);
      var r = o(435935),
        i = o(481060),
        s = o(259756),
        a = o(785681),
        c = o(880257),
        l = o(863552),
        d = o(292352),
        h = o(689938),
        C = o(62436),
        _ = o(128216);
      let x = {
          [d.MY.USER_INTERACTION]: (0, n.jsx)(l.Z, { width: 18, height: 18 }),
          [d.MY.USER_CALLED]: (0, n.jsx)(i.PhoneCallIcon, {
            size: "custom",
            color: "currentColor",
            width: 22,
            height: 22,
          }),
          [d.MY.USER_ADD]: (0, n.jsx)(i.FriendsIcon, {
            size: "custom",
            color: "currentColor",
            className: C.personWavingIcon,
            width: 22,
            height: 22,
          }),
          [d.MY.GUILD_ADD]: (0, n.jsx)(i.ServerGridIcon, {
            size: "custom",
            color: "currentColor",
            width: 22,
            height: 22,
          }),
          [d.MY.GUILD_INTERACTION]: (0, n.jsx)(i.TextIcon, {
            size: "custom",
            color: "currentColor",
            className: C.threadIcon,
            width: 22,
            height: 22,
          }),
        },
        u = (e) => {
          let { header: t, description: o, icon: s } = e;
          return (0, n.jsxs)(r.k, {
            className: C.row,
            grow: 0,
            children: [
              (0, n.jsx)("div", { className: C.iconContainer, children: s }),
              (0, n.jsxs)("div", {
                className: C.rowContent,
                children: [
                  (0, n.jsx)(i.Text, {
                    className: C.__invalid_rowHeader,
                    variant: "text-sm/bold",
                    children: t,
                  }),
                  (0, n.jsx)(i.Text, {
                    variant: "text-xs/medium",
                    children: o,
                  }),
                ],
              }),
            ],
          });
        };
      t.default = (e) => {
        let { transitionState: t, onClose: o } = e,
          l = (0, a.o)(
            h.Z.Messages.FAMILY_CENTER_TOOLTIP_MODAL_HEADER_TEEN,
            h.Z.Messages.FAMILY_CENTER_TOOLTIP_MODAL_HEADER_PARENT,
          ),
          I = (0, c.Z)(),
          m = Array.from(d.tx.entries()),
          E = (0, s.Xi)({ location: "family_center_tooltip_modal_web" });
        return (0, n.jsxs)(i.ModalRoot, {
          transitionState: t,
          children: [
            (0, n.jsx)("img", {
              className: C.art,
              src: _,
              alt: h.Z.Messages.FAMILY_CENTER_ACTIVITY_BANNER_IMAGE_ALT,
            }),
            (0, n.jsx)(i.ModalContent, {
              className: C.content,
              children: (0, n.jsxs)(r.k, {
                direction: r.k.Direction.VERTICAL,
                align: r.k.Align.CENTER,
                children: [
                  (0, n.jsx)(i.Heading, {
                    className: C.header,
                    color: "header-primary",
                    variant: "heading-lg/semibold",
                    children: (0, n.jsx)(i.HeadingLevel, { children: l }),
                  }),
                  m.map((e) => {
                    let [t, o] = e;
                    return (0, n.jsx)(
                      u,
                      {
                        icon: x[t],
                        header: o.tooltipHeader(),
                        description: o.tooltipDescription(
                          null != I ? I : void 0,
                          E,
                        ),
                      },
                      t,
                    );
                  }),
                ],
              }),
            }),
            (0, n.jsx)(i.ModalFooter, {
              children: (0, n.jsx)(i.Button, {
                className: C.__invalid_button,
                type: "button",
                color: i.Button.Colors.BRAND,
                onClick: o,
                children: h.Z.Messages.GOT_IT,
              }),
            }),
          ],
        });
      };
    },
    863552: function (e, t, o) {
      o.d(t, {
        Z: function () {
          return i;
        },
      });
      var n = o(735250);
      o(470079);
      var r = o(325767);
      function i(e) {
        let {
          width: t = 24,
          height: o = 24,
          color: i = "currentColor",
          ...s
        } = e;
        return (0, n.jsxs)("svg", {
          ...(0, r.Z)(s),
          width: t,
          height: o,
          viewBox: "0 0 20 20",
          fill: "none",
          children: [
            (0, n.jsx)("path", {
              d: "M5.42999 16C5.73201 16 5.97454 15.7326 5.98651 15.4309C5.99216 15.2885 6 15.145 6 15C6 10.582 8.97355 7 13.6115 7C15.3176 7 16.9378 7.60732 18.2734 8.47894C18.6009 8.69267 19.0088 8.49717 19.0012 8.10616C19.0004 8.06876 19 8.03318 19 8C19 3.589 15.0439 0 10.1825 0C5.32115 0 1.36504 3.589 1.36504 8C1.36504 9.24168 1.67304 10.4357 2.26529 11.523C2.49433 11.9436 2.45549 12.472 2.12042 12.8141L0.664819 14.3003C0.0449194 14.9332 0.493315 16 1.37923 16H5.42999Z",
              fill: i,
            }),
            (0, n.jsx)("path", {
              d: "M20.0134 17.8398C19.8366 17.558 19.8172 17.2085 19.9242 16.8935C20.1307 16.2852 20.2371 15.6451 20.2371 15C20.2371 11.691 17.4914 9 14.1166 9C10.7419 9 7.99609 11.691 7.99609 15C7.99609 18.309 10.7419 21 14.1166 21H20.1882C20.9744 21 21.4531 20.1345 21.0353 19.4685L20.0134 17.8398Z",
              fill: i,
            }),
          ],
        });
      }
    },
    62436: function (e, t, o) {
      e.exports = {
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
//# sourceMappingURL=c281b2a583895813273e.js.map
