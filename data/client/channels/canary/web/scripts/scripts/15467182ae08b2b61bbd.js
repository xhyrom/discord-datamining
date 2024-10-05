"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["64391"],
  {
    766775: function (e, o, a) {
      a.r(o),
        a.d(o, {
          default: function () {
            return h;
          },
        });
      var n = a(735250);
      a(470079);
      var i = a(120356),
        r = a.n(i),
        t = a(481060),
        l = a(388905),
        c = a(313201),
        d = a(659900),
        s = a(473855),
        _ = a(689938),
        f = a(881549);
      function h(e) {
        let { transitionState: o, onClose: a, guildTemplate: i } = e,
          { form: h, preview: m, handleSubmit: p } = (0, d.Z)(i, !1),
          u = (0, c.Dt)();
        return (0, n.jsx)("div", {
          children: (0, n.jsxs)(t.ModalRoot, {
            size: t.ModalSize.DYNAMIC,
            transitionState: o,
            className: r()(f.modalRoot),
            "aria-labelledby": u,
            children: [
              (0, n.jsxs)("div", {
                className: f.modalContainer,
                children: [
                  (0, n.jsx)("div", {
                    className: r()(f.modalSection, f.ctaSection),
                    children: (0, n.jsx)("div", {
                      className: f.ctaContainer,
                      children: (0, n.jsx)(s.Z, {
                        guildTemplate: i,
                        headerId: u,
                      }),
                    }),
                  }),
                  (0, n.jsx)("div", {
                    className: r()(f.modalSection, f.formSection),
                    children: (0, n.jsxs)(t.Scroller, {
                      className: f.formContainer,
                      children: [
                        (0, n.jsx)(l.Dx, {
                          className: f.header,
                          children: _.Z.Messages.GUILD_TEMPLATE_SETUP_DISCORD,
                        }),
                        h,
                        m,
                      ],
                    }),
                  }),
                ],
              }),
              (0, n.jsxs)(t.ModalFooter, {
                className: f.modalFooter,
                children: [
                  (0, n.jsx)(t.Button, {
                    color: t.Button.Colors.PRIMARY,
                    onClick: a,
                    children: _.Z.Messages.CLOSE,
                  }),
                  (0, n.jsx)(t.Button, {
                    color: t.Button.Colors.GREEN,
                    onClick: async () => {
                      null != (await p()) && a();
                    },
                    children: _.Z.Messages.CREATE,
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    510186: function (e, o, a) {
      e.exports = {
        iconContainer: "iconContainer_a2aef9",
        filledIcon: "filledIcon_a2aef9",
      };
    },
    34964: function (e, o, a) {
      e.exports = {
        icon: "icon_b52547",
        guidelines: "guidelines_b52547",
        divider: "divider_b52547",
        previewSection: "previewSection_b52547",
        channelsWrapper: "channelsWrapper_b52547",
        rolesWrapper: "rolesWrapper_b52547",
        protip: "protip_b52547",
        protipText: "protipText_b52547",
        channel: "channel_b52547",
        category: "category_b52547",
        channelIcon: "channelIcon_b52547",
        channelText: "channelText_b52547",
        role: "role_b52547",
        roleCircle: "roleCircle_b52547",
        roleName: "roleName_b52547",
      };
    },
    251320: function (e, o, a) {
      e.exports = {
        image: "image_be5c11",
        header: "header_be5c11",
        usagePill: "usagePill_be5c11",
      };
    },
    712457: function (e, o, a) {
      e.exports = {
        container: "container_de67e1",
        title: "title_de67e1",
        subtitle: "subtitle_de67e1",
        userText: "userText_de67e1",
        usagePill: "usagePill_de67e1",
        verifiedNameContainer: "verifiedNameContainer_de67e1",
        verifiedIcon: "verifiedIcon_de67e1",
        verifiedCheckContainer: "verifiedCheckContainer_de67e1",
        verifiedCheck: "verifiedCheck_de67e1",
      };
    },
    881549: function (e, o, a) {
      e.exports = {
        modalContainer: "modalContainer_d18efa",
        modalSection: "modalSection_d18efa",
        ctaSection: "ctaSection_d18efa",
        ctaContainer: "ctaContainer_d18efa",
        formSection: "formSection_d18efa",
        formContainer: "formContainer_d18efa",
        modalRoot: "modalRoot_d18efa",
        modalFooter: "modalFooter_d18efa",
        header: "header_d18efa",
      };
    },
  },
]);
//# sourceMappingURL=15467182ae08b2b61bbd.js.map
