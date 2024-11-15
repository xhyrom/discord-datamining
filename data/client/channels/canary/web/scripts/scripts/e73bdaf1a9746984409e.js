"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["89069"],
  {
    646364: function (e, t, a) {
      a.r(t), a(47120);
      var o = a(200651),
        n = a(192379),
        r = a(442837),
        d = a(481060),
        s = a(367907),
        i = a(313201),
        l = a(434404),
        c = a(650774),
        C = a(816817),
        u = a(981631),
        m = a(388032),
        h = a(108788);
      t.default = (e) => {
        let { transitionState: t, onClose: a, guild: p } = e,
          _ = (0, i.Dt)();
        n.useEffect(() => {
          s.ZP.trackWithMetadata(u.rMx.OPEN_MODAL, {
            type: u.jXE.DISCOVERY_SETUP_SUCCESS_MODAL,
          });
        }, []);
        let [b, x] = (0, r.Wu)(
          [c.Z],
          () => [c.Z.getOnlineCount(p.id), c.Z.getMemberCount(p.id)],
          [p.id],
        );
        return (0, o.jsxs)(d.ModalRoot, {
          transitionState: t,
          "aria-labelledby": _,
          className: h.root,
          children: [
            (0, o.jsx)(d.ModalHeader, {
              className: h.modalHeader,
              separator: !1,
              children: (0, o.jsx)(d.ModalCloseButton, {
                onClick: a,
                className: h.modalCloseButton,
              }),
            }),
            (0, o.jsx)(d.Heading, {
              variant: "heading-xl/semibold",
              id: _,
              className: h.header,
              children: m.intl.string(m.t["2ocCIi"]),
            }),
            (0, o.jsxs)(d.ModalContent, {
              className: h.modalContent,
              children: [
                (0, o.jsx)(d.Text, {
                  variant: "text-md/normal",
                  className: h.subheader,
                  children: m.intl.format(m.t.TRh6a2, {
                    onServerSettingsClick: () => {
                      a(),
                        l.Z.setSection(u.pNK.DISCOVERY),
                        s.ZP.trackWithMetadata(u.rMx.SETTINGS_PANE_VIEWED, {
                          settings_type: "guild",
                          origin_pane: "DISCOVERY",
                          destination_pane: "DISCOVERY",
                        });
                    },
                  }),
                }),
                (0, o.jsx)(C.Z, {
                  className: h.previewCard,
                  guild: p,
                  presenceCount: b,
                  memberCount: x,
                }),
              ],
            }),
            (0, o.jsx)(d.ModalFooter, {
              children: (0, o.jsx)(d.Button, {
                onClick: a,
                children: m.intl.string(m.t["NX+WJC"]),
              }),
            }),
          ],
        });
      };
    },
    108788: function (e, t, a) {
      e.exports = {
        root: "root_b7185e",
        modalContent: "modalContent_b7185e",
        modalHeader: "modalHeader_b7185e",
        modalCloseButton: "modalCloseButton_b7185e",
        header: "header_b7185e",
        subheader: "subheader_b7185e",
        previewCard: "previewCard_b7185e",
      };
    },
  },
]);
//# sourceMappingURL=e73bdaf1a9746984409e.js.map
