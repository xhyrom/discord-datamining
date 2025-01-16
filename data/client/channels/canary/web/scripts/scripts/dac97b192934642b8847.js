"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["74300"],
  {
    566852: function (t, e, n) {
      n.r(e), n(47120);
      var l = n(200651),
        i = n(192379),
        o = n(481060),
        s = n(923928),
        a = n(600164),
        r = n(594190),
        d = n(626135),
        u = n(981631),
        c = n(388032),
        h = n(232186);
      function p(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      class m extends i.Component {
        componentDidMount() {
          let { pid: t } = this.props,
            e = null != t ? r.ZP.getGameForPID(t) : null;
          d.default.track(u.rMx.OPEN_MODAL, {
            type: "Elevated Permissions Sound",
            application_id: null != e ? e.id : null,
            application_name: null != e ? e.name : null,
            game_id: null != e ? e.id : null,
          });
        }
        render() {
          return (0, l.jsxs)(o.ModalRoot, {
            transitionState: this.props.transitionState,
            "aria-label": c.intl.string(c.t["4xSkEB"]),
            children: [
              (0, l.jsxs)(o.ModalHeader, {
                justify: a.Z.Justify.BETWEEN,
                separator: !1,
                children: [
                  (0, l.jsx)(o.Heading, {
                    variant: "heading-lg/semibold",
                    children: c.intl.string(c.t["4xSkEB"]),
                  }),
                  (0, l.jsx)(o.ModalCloseButton, { onClick: this.handleClose }),
                ],
              }),
              (0, l.jsx)(o.ModalContent, {
                children: (0, l.jsx)(o.Text, {
                  tag: "strong",
                  variant: "text-md/normal",
                  className: h.marginBottom20,
                  children: c.intl.string(c.t.UCEXPj),
                }),
              }),
              (0, l.jsxs)(o.ModalFooter, {
                children: [
                  (0, l.jsx)(o.Button, {
                    onClick: this.handleRequestElevated,
                    children: c.intl.string(c.t.taPRcH),
                  }),
                  (0, l.jsx)(o.Button, {
                    look: o.Button.Looks.LINK,
                    color: o.Button.Colors.PRIMARY,
                    onClick: this.handleStreamWithoutSound,
                    children: c.intl.string(c.t.of0VoK),
                  }),
                ],
              }),
            ],
          });
        }
        constructor(...t) {
          super(...t),
            p(this, "handleClose", () => {
              let { onClose: t } = this.props;
              null == t || t();
            }),
            p(this, "handleStreamWithoutSound", () => {
              let { handleStream: t, onClose: e, pid: n } = this.props;
              s.Z.continueNonelevatedProcess(n), t(), e();
            }),
            p(this, "handleRequestElevated", () => {
              let { handleStream: t, onClose: e, pid: n } = this.props;
              s.Z.requestElevatedProcess(n), t(), e();
            });
        }
      }
      e.default = m;
    },
  },
]);
//# sourceMappingURL=dac97b192934642b8847.js.map
