"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["66915"],
  {
    662708: function (e, s, t) {
      t.r(s), t(47120);
      var a = t(735250),
        o = t(470079),
        l = t(481060),
        r = t(153867),
        n = t(663993),
        i = t(771845),
        h = t(981631),
        d = t(689938),
        c = t(861378);
      function m(e, s, t) {
        return (
          s in e
            ? Object.defineProperty(e, s, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[s] = t),
          e
        );
      }
      let u = (0, n.Un)({
        createPromise: () => t.e("5609").then(t.bind(t, 336231)),
        webpackId: 336231,
      });
      class p extends o.PureComponent {
        render() {
          let { transitionState: e } = this.props,
            { name: s, color: t } = this.state;
          return (0, a.jsxs)(l.ModalRoot, {
            transitionState: e,
            "aria-label": d.Z.Messages.SERVER_FOLDER_SETTINGS,
            size: l.ModalSize.DYNAMIC,
            children: [
              (0, a.jsxs)(l.ModalHeader, {
                className: c.header,
                separator: !1,
                children: [
                  (0, a.jsx)(l.Heading, {
                    variant: "heading-lg/semibold",
                    children: d.Z.Messages.SERVER_FOLDER_SETTINGS,
                  }),
                  (0, a.jsx)(l.ModalCloseButton, { onClick: this.close }),
                ],
              }),
              (0, a.jsx)(l.ModalContent, {
                children: (0, a.jsxs)("form", {
                  onSubmit: this.handleSubmit,
                  children: [
                    (0, a.jsx)(l.FormItem, {
                      title: d.Z.Messages.GUILD_FOLDER_NAME,
                      className: c.formItem,
                      children: (0, a.jsx)(l.TextInput, {
                        maxLength: h.dYL,
                        value: s,
                        onChange: this.handleNameChange,
                        placeholder: d.Z.Messages.SERVER_FOLDER_PLACEHOLDER,
                        autoFocus: !0,
                      }),
                    }),
                    (0, a.jsx)(l.FormItem, {
                      title: d.Z.Messages.GUILD_FOLDER_COLOR,
                      className: c.formItem,
                      children: (0, a.jsx)(u, {
                        defaultColor: h.Wyy,
                        colors: h.pmI,
                        value: null != t ? t : h.Wyy,
                        onChange: this.handleColorChange,
                      }),
                    }),
                  ],
                }),
              }),
              (0, a.jsx)(l.ModalFooter, {
                children: (0, a.jsx)(l.Button, {
                  type: "submit",
                  onClick: this.handleSubmit,
                  children: d.Z.Messages.DONE,
                }),
              }),
            ],
          });
        }
        constructor(...e) {
          var s;
          super(...e),
            m(this, "state", {
              name:
                null !== (s = this.props.folderName) && void 0 !== s ? s : "",
              color: this.props.folderColor,
            }),
            m(this, "close", () => {
              this.props.onClose();
            }),
            m(this, "handleNameChange", (e) => {
              this.setState({ name: e });
            }),
            m(this, "handleColorChange", (e) => {
              this.setState({ color: e });
            }),
            m(this, "handleSubmit", (e) => {
              e.preventDefault();
              let { folderId: s } = this.props,
                { name: t, color: a } = this.state,
                o = i.ZP.getGuildFolders().map((e) =>
                  e.folderId === s
                    ? { ...e, folderName: t, folderColor: a }
                    : e,
                );
              (0, r.V1)(o), this.close();
            });
        }
      }
      s.default = p;
    },
    861378: function (e, s, t) {
      e.exports = { header: "header_ead644", formItem: "formItem_ead644" };
    },
  },
]);
//# sourceMappingURL=e093df2de140de6dd439.js.map
