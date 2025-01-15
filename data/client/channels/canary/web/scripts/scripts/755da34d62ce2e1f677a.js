"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["263"],
  {
    477520: function (e, t, a) {
      a.r(t), a(47120);
      var d = a(200651),
        o = a(192379),
        n = a(442837),
        r = a(481060),
        s = a(367907),
        i = a(313201),
        l = a(650774),
        c = a(434404),
        C = a(166184),
        u = a(981631),
        m = a(388032),
        h = a(565629);
      t.default = (e) => {
        let { transitionState: t, onClose: a, guild: p } = e,
          _ = (0, i.Dt)();
        o.useEffect(() => {
          s.ZP.trackWithMetadata(u.rMx.OPEN_MODAL, {
            type: u.jXE.DISCOVERY_SETUP_SUCCESS_MODAL,
          });
        }, []);
        let [x, S] = (0, n.Wu)(
          [l.Z],
          () => [l.Z.getOnlineCount(p.id), l.Z.getMemberCount(p.id)],
          [p.id],
        );
        return (0, d.jsxs)(r.ModalRoot, {
          transitionState: t,
          "aria-labelledby": _,
          className: h.root,
          children: [
            (0, d.jsx)(r.ModalHeader, {
              className: h.modalHeader,
              separator: !1,
              children: (0, d.jsx)(r.ModalCloseButton, {
                onClick: a,
                className: h.modalCloseButton,
              }),
            }),
            (0, d.jsx)(r.Heading, {
              variant: "heading-xl/semibold",
              id: _,
              className: h.header,
              children: m.intl.string(m.t["2ocCIi"]),
            }),
            (0, d.jsxs)(r.ModalContent, {
              className: h.modalContent,
              children: [
                (0, d.jsx)(r.Text, {
                  variant: "text-md/normal",
                  className: h.subheader,
                  children: m.intl.format(m.t.TRh6a2, {
                    onServerSettingsClick: () => {
                      a(),
                        c.Z.setSection(u.pNK.DISCOVERY),
                        s.ZP.trackWithMetadata(u.rMx.SETTINGS_PANE_VIEWED, {
                          settings_type: "guild",
                          origin_pane: "DISCOVERY",
                          destination_pane: "DISCOVERY",
                        });
                    },
                  }),
                }),
                (0, d.jsx)(C.Z, {
                  className: h.previewCard,
                  guild: p,
                  presenceCount: x,
                  memberCount: S,
                }),
              ],
            }),
            (0, d.jsx)(r.ModalFooter, {
              children: (0, d.jsx)(r.Button, {
                onClick: a,
                children: m.intl.string(m.t["NX+WJC"]),
              }),
            }),
          ],
        });
      };
    },
    565629: function (e, t, a) {
      e.exports = {
        root: "root_c8fed9",
        modalContent: "modalContent_c8fed9",
        modalHeader: "modalHeader_c8fed9",
        modalCloseButton: "modalCloseButton_c8fed9",
        header: "header_c8fed9",
        subheader: "subheader_c8fed9",
        previewCard: "previewCard_c8fed9",
      };
    },
  },
]);
//# sourceMappingURL=755da34d62ce2e1f677a.js.map
