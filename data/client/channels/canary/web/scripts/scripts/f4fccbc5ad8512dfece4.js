"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["74300"],
  {
    566852: function (e, t, s) {
      s.r(t), s(47120);
      var n = s(735250),
        l = s(470079),
        o = s(481060),
        a = s(923928),
        i = s(600164),
        r = s(594190),
        d = s(626135),
        u = s(981631),
        h = s(689938),
        E = s(113207);
      function c(e, t, s) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: s,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = s),
          e
        );
      }
      class S extends l.Component {
        componentDidMount() {
          let { pid: e } = this.props,
            t = null != e ? r.ZP.getGameForPID(e) : null;
          d.default.track(u.rMx.OPEN_MODAL, {
            type: "Elevated Permissions Sound",
            application_id: null != t ? t.id : null,
            application_name: null != t ? t.name : null,
            game_id: null != t ? t.id : null,
          });
        }
        render() {
          return (0, n.jsxs)(o.ModalRoot, {
            transitionState: this.props.transitionState,
            "aria-label": h.Z.Messages.ELEVATED_PERMISSIONS_SOUND_TITLE,
            children: [
              (0, n.jsxs)(o.ModalHeader, {
                justify: i.Z.Justify.BETWEEN,
                separator: !1,
                children: [
                  (0, n.jsx)(o.Heading, {
                    variant: "heading-lg/semibold",
                    children: h.Z.Messages.ELEVATED_PERMISSIONS_SOUND_TITLE,
                  }),
                  (0, n.jsx)(o.ModalCloseButton, { onClick: this.handleClose }),
                ],
              }),
              (0, n.jsx)(o.ModalContent, {
                children: (0, n.jsx)(o.Text, {
                  tag: "strong",
                  variant: "text-md/normal",
                  className: E.marginBottom20,
                  children: h.Z.Messages.ELEVATED_PERMISSIONS_SOUND_BODY,
                }),
              }),
              (0, n.jsxs)(o.ModalFooter, {
                children: [
                  (0, n.jsx)(o.Button, {
                    onClick: this.handleRequestElevated,
                    children:
                      h.Z.Messages
                        .ELEVATED_PERMISSIONS_SOUND_REQUEST_ACCESS_BUTTON,
                  }),
                  (0, n.jsx)(o.Button, {
                    look: o.Button.Looks.LINK,
                    color: o.Button.Colors.PRIMARY,
                    onClick: this.handleStreamWithoutSound,
                    children:
                      h.Z.Messages.ELEVATED_PERMISSIONS_SOUND_NO_SOUND_BUTTON,
                  }),
                ],
              }),
            ],
          });
        }
        constructor(...e) {
          super(...e),
            c(this, "handleClose", () => {
              let { onClose: e } = this.props;
              null == e || e();
            }),
            c(this, "handleStreamWithoutSound", () => {
              let { handleStream: e, onClose: t, pid: s } = this.props;
              a.Z.continueNonelevatedProcess(s), e(), t();
            }),
            c(this, "handleRequestElevated", () => {
              let { handleStream: e, onClose: t, pid: s } = this.props;
              a.Z.requestElevatedProcess(s), e(), t();
            });
        }
      }
      t.default = S;
    },
  },
]);
//# sourceMappingURL=f4fccbc5ad8512dfece4.js.map
