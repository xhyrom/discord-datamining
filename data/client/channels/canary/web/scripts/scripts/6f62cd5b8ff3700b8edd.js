"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["31453"],
  {
    440934: function (s, e, o) {
      o.r(e),
        o.d(e, {
          default: function () {
            return p;
          },
          openInteractionModal: function () {
            return I;
          },
        });
      var n = o(735250);
      o(470079);
      var a = o(481060),
        t = o(112831),
        i = o(970184),
        l = o(471073),
        r = o(293979),
        c = o(954654),
        u = o(689938),
        d = o(251686);
      function p(s) {
        let { title: e, onClose: o, transitionState: p } = s,
          {
            components: I,
            applicationIconURL: M,
            applicationName: h,
            submissionState: m,
            error: x,
            validators: j,
            onSubmit: g,
          } = (0, r.X9)(s, o);
        return (0, n.jsx)("form", {
          onSubmit: (s) => {
            s.preventDefault(), g();
          },
          children: (0, n.jsxs)(a.ModalRoot, {
            transitionState: p,
            children: [
              (0, n.jsxs)(a.ModalHeader, {
                separator: !1,
                children: [
                  (0, n.jsx)(a.Avatar, {
                    src: M,
                    size: a.AvatarSizes.SIZE_24,
                    "aria-label": h,
                    className: d.applicationIcon,
                  }),
                  (0, n.jsx)(t.Z, {
                    color: t.Z.Colors.HEADER_PRIMARY,
                    size: t.Z.Sizes.SIZE_24,
                    children: e,
                  }),
                  (0, n.jsx)(a.ModalCloseButton, {
                    onClick: o,
                    className: d.closeButton,
                  }),
                ],
              }),
              (0, n.jsxs)(a.ModalContent, {
                children: [
                  null != x && "" !== x
                    ? (0, n.jsx)(a.HelpMessage, {
                        messageType: a.HelpMessageTypes.ERROR,
                        className: d.submissionWarning,
                        children: x,
                      })
                    : null,
                  (0, n.jsx)(a.HelpMessage, {
                    messageType: a.HelpMessageTypes.WARNING,
                    className: d.submissionWarning,
                    children:
                      u.Z.Messages.INTERACTION_FORM_SUBMISSION_APPLICATION.format(
                        { applicationName: h },
                      ),
                  }),
                  (0, n.jsx)(a.FormSection, {
                    children: (0, n.jsx)(i.Il, {
                      modal: s,
                      validators: j,
                      children: (0, c.xX)(I),
                    }),
                  }),
                ],
              }),
              (0, n.jsxs)(a.ModalFooter, {
                children: [
                  (0, n.jsx)(a.Button, {
                    type: "submit",
                    color: a.Button.Colors.BRAND,
                    size: a.Button.Sizes.MEDIUM,
                    submitting: m === l.i.IN_FLIGHT,
                    children: u.Z.Messages.SUBMIT,
                  }),
                  (0, n.jsx)(a.Button, {
                    look: a.Button.Looks.LINK,
                    color: a.Button.Colors.PRIMARY,
                    onClick: o,
                    children: u.Z.Messages.CANCEL,
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function I(s) {
        (0, a.openModal)((e) => (0, n.jsx)(p, { ...e, ...s }));
      }
    },
    251686: function (s, e, o) {
      s.exports = {
        closeButton: "closeButton_e6af31",
        applicationIcon: "applicationIcon_e6af31",
        submissionWarning: "submissionWarning_e6af31",
      };
    },
  },
]);
//# sourceMappingURL=6f62cd5b8ff3700b8edd.js.map
