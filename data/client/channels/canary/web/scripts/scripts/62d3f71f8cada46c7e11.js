"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["66915"],
  {
    662708: function (e, t, s) {
      s.r(t), s(47120);
      var i = s(200651),
        l = s(192379),
        n = s(481060),
        r = s(153867),
        o = s(663993),
        a = s(771845),
        h = s(981631),
        d = s(388032),
        c = s(177160);
      function m(e, t, s) {
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
      let u = (0, o.Un)({
        createPromise: () => s.e("5609").then(s.bind(s, 336231)),
        webpackId: 336231,
      });
      class p extends l.PureComponent {
        render() {
          let { transitionState: e } = this.props,
            { name: t, color: s } = this.state;
          return (0, i.jsxs)(n.ModalRoot, {
            transitionState: e,
            "aria-label": d.intl.string(d.t.Dx7im5),
            size: n.ModalSize.DYNAMIC,
            children: [
              (0, i.jsxs)(n.ModalHeader, {
                className: c.header,
                separator: !1,
                children: [
                  (0, i.jsx)(n.Heading, {
                    variant: "heading-lg/semibold",
                    children: d.intl.string(d.t.Dx7im5),
                  }),
                  (0, i.jsx)(n.ModalCloseButton, { onClick: this.close }),
                ],
              }),
              (0, i.jsx)(n.ModalContent, {
                children: (0, i.jsxs)("form", {
                  onSubmit: this.handleSubmit,
                  children: [
                    (0, i.jsx)(n.FormItem, {
                      title: d.intl.string(d.t.tGRbjI),
                      className: c.formItem,
                      children: (0, i.jsx)(n.TextInput, {
                        maxLength: h.dYL,
                        value: t,
                        onChange: this.handleNameChange,
                        placeholder: d.intl.string(d.t.xV9hVl),
                        autoFocus: !0,
                      }),
                    }),
                    (0, i.jsx)(n.FormItem, {
                      title: d.intl.string(d.t.xpurRE),
                      className: c.formItem,
                      children: (0, i.jsx)(u, {
                        defaultColor: h.Wyy,
                        colors: h.pmI,
                        value: null != s ? s : h.Wyy,
                        onChange: this.handleColorChange,
                      }),
                    }),
                  ],
                }),
              }),
              (0, i.jsx)(n.ModalFooter, {
                children: (0, i.jsx)(n.Button, {
                  type: "submit",
                  onClick: this.handleSubmit,
                  children: d.intl.string(d.t.i4jeWV),
                }),
              }),
            ],
          });
        }
        constructor(...e) {
          var t;
          super(...e),
            m(this, "state", {
              name:
                null !== (t = this.props.folderName) && void 0 !== t ? t : "",
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
              let { folderId: t } = this.props,
                { name: s, color: i } = this.state,
                l = a.ZP.getGuildFolders().map((e) =>
                  e.folderId === t
                    ? { ...e, folderName: s, folderColor: i }
                    : e,
                );
              (0, r.V1)(l), this.close();
            });
        }
      }
      t.default = p;
    },
    177160: function (e, t, s) {
      e.exports = { header: "header_ead644", formItem: "formItem_ead644" };
    },
  },
]);
//# sourceMappingURL=62d3f71f8cada46c7e11.js.map
