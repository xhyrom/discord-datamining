"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["67550"],
  {
    766775: function (e, n, o) {
      o.r(n),
        o.d(n, {
          default: function () {
            return m;
          },
        });
      var i = o(200651);
      o(192379);
      var a = o(120356),
        t = o.n(a),
        r = o(481060),
        l = o(388905),
        c = o(313201),
        d = o(659900),
        s = o(473855),
        _ = o(388032),
        f = o(537813);
      function m(e) {
        let { transitionState: n, onClose: o, guildTemplate: a } = e,
          { form: m, preview: h, handleSubmit: u } = (0, d.Z)(a, !1),
          p = (0, c.Dt)();
        return (0, i.jsx)("div", {
          children: (0, i.jsxs)(r.ModalRoot, {
            size: r.ModalSize.DYNAMIC,
            transitionState: n,
            className: t()(f.modalRoot),
            "aria-labelledby": p,
            children: [
              (0, i.jsxs)("div", {
                className: f.modalContainer,
                children: [
                  (0, i.jsx)("div", {
                    className: t()(f.modalSection, f.ctaSection),
                    children: (0, i.jsx)("div", {
                      className: f.ctaContainer,
                      children: (0, i.jsx)(s.Z, {
                        guildTemplate: a,
                        headerId: p,
                      }),
                    }),
                  }),
                  (0, i.jsx)("div", {
                    className: t()(f.modalSection, f.formSection),
                    children: (0, i.jsxs)(r.Scroller, {
                      className: f.formContainer,
                      children: [
                        (0, i.jsx)(l.Dx, {
                          className: f.header,
                          children: _.intl.string(_.t.UNFvtL),
                        }),
                        m,
                        h,
                      ],
                    }),
                  }),
                ],
              }),
              (0, i.jsxs)(r.ModalFooter, {
                className: f.modalFooter,
                children: [
                  (0, i.jsx)(r.Button, {
                    color: r.Button.Colors.PRIMARY,
                    onClick: o,
                    children: _.intl.string(_.t.cpT0Cg),
                  }),
                  (0, i.jsx)(r.Button, {
                    color: r.Button.Colors.GREEN,
                    onClick: async () => {
                      null != (await u()) && o();
                    },
                    children: _.intl.string(_.t.CumH4u),
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    398584: function (e, n, o) {
      e.exports = {
        iconContainer: "iconContainer_a2aef9",
        filledIcon: "filledIcon_a2aef9",
      };
    },
    114549: function (e, n, o) {
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
    965890: function (e, n, o) {
      e.exports = {
        image: "image_be5c11",
        header: "header_be5c11",
        usagePill: "usagePill_be5c11",
      };
    },
    877515: function (e, n, o) {
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
    537813: function (e, n, o) {
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
//# sourceMappingURL=d2d6f35d7ec28f326bb0.js.map
