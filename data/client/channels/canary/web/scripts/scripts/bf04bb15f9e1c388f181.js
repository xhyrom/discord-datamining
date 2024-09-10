"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["89069"],
  {
    646364: function (e, a, t) {
      t.r(a), t(47120);
      var s = t(735250),
        o = t(470079),
        d = t(442837),
        r = t(481060),
        n = t(367907),
        l = t(313201),
        i = t(434404),
        C = t(650774),
        c = t(816817),
        _ = t(981631),
        E = t(689938),
        u = t(25476);
      a.default = (e) => {
        let { transitionState: a, onClose: t, guild: m } = e,
          h = (0, l.Dt)();
        o.useEffect(() => {
          n.ZP.trackWithMetadata(_.rMx.OPEN_MODAL, {
            type: _.jXE.DISCOVERY_SETUP_SUCCESS_MODAL,
          });
        }, []);
        let [S, p] = (0, d.Wu)(
          [C.Z],
          () => [C.Z.getOnlineCount(m.id), C.Z.getMemberCount(m.id)],
          [m.id],
        );
        return (0, s.jsxs)(r.ModalRoot, {
          transitionState: a,
          "aria-labelledby": h,
          className: u.root,
          children: [
            (0, s.jsx)(r.ModalHeader, {
              className: u.modalHeader,
              separator: !1,
              children: (0, s.jsx)(r.ModalCloseButton, {
                onClick: t,
                className: u.modalCloseButton,
              }),
            }),
            (0, s.jsx)(r.Heading, {
              variant: "heading-xl/semibold",
              id: h,
              className: u.header,
              children:
                E.Z.Messages.SERVER_DISCOVERY_SETUP_CONFIRMATION_PAGE_HEADER,
            }),
            (0, s.jsxs)(r.ModalContent, {
              className: u.modalContent,
              children: [
                (0, s.jsx)(r.Text, {
                  variant: "text-md/normal",
                  className: u.subheader,
                  children:
                    E.Z.Messages.SERVER_DISCOVERY_SETUP_CONFIRMATION_PAGE_SUBHEADING.format(
                      {
                        onServerSettingsClick: () => {
                          t(),
                            i.Z.setSection(_.pNK.DISCOVERY),
                            n.ZP.trackWithMetadata(_.rMx.SETTINGS_PANE_VIEWED, {
                              settings_type: "guild",
                              origin_pane: "DISCOVERY",
                              destination_pane: "DISCOVERY",
                            });
                        },
                      },
                    ),
                }),
                (0, s.jsx)(c.Z, {
                  className: u.previewCard,
                  guild: m,
                  presenceCount: S,
                  memberCount: p,
                }),
              ],
            }),
            (0, s.jsx)(r.ModalFooter, {
              children: (0, s.jsx)(r.Button, {
                onClick: t,
                children: E.Z.Messages.GOT_IT,
              }),
            }),
          ],
        });
      };
    },
    25476: function (e, a, t) {
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
//# sourceMappingURL=bf04bb15f9e1c388f181.js.map
