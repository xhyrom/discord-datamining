"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["78712"],
  {
    223164: function (e, a, n) {
      n.r(a),
        n.d(a, {
          default: function () {
            return _;
          },
        });
      var s = n(735250),
        t = n(470079),
        o = n(120356),
        r = n.n(o),
        d = n(481060),
        c = n(313201),
        i = n(454585),
        l = n(585483),
        h = n(981631),
        u = n(689938),
        p = n(736891),
        x = n(554034);
      function _(e) {
        let {
            channel: a,
            isFromComposer: n,
            transitionState: o,
            onClose: _,
          } = e,
          I = (0, c.Dt)();
        return (
          t.useEffect(
            () => () => {
              n && l.S.dispatch(h.CkL.FOCUS_COMPOSER_TITLE);
            },
            [n],
          ),
          (0, s.jsxs)(d.ModalRoot, {
            transitionState: o,
            "aria-labelledby": I,
            size: d.ModalSize.DYNAMIC,
            className: p.container,
            children: [
              (0, s.jsxs)(d.ModalHeader, {
                className: p.header,
                separator: !1,
                children: [
                  (0, s.jsx)(d.BookCheckIcon, {
                    size: "custom",
                    color: "currentColor",
                    className: p.rulesIcon,
                    width: 24,
                    height: 24,
                  }),
                  (0, s.jsx)(d.Heading, {
                    variant: "heading-lg/extrabold",
                    children: u.Z.Messages.FORUM_POST_GUIDELINES_TITLE,
                  }),
                ],
              }),
              (0, s.jsx)(d.ModalContent, {
                children: (0, s.jsx)(d.Text, {
                  className: r()(p.content, x.markup),
                  variant: "text-sm/normal",
                  color: "header-secondary",
                  children: (0, s.jsx)("div", {
                    children: i.Z.parseForumPostGuidelines(a.topic, !0, {
                      channelId: a.id,
                      allowHeading: !0,
                      allowList: !0,
                    }),
                  }),
                }),
              }),
              (0, s.jsx)(d.ModalFooter, {
                children: (0, s.jsx)(d.Button, {
                  onClick: _,
                  children: u.Z.Messages.GOT_IT,
                }),
              }),
            ],
          })
        );
      }
    },
    736891: function (e, a, n) {
      e.exports = {
        container: "container_ada0d0",
        header: "header_ada0d0",
        content: "content_ada0d0",
        rulesIcon: "rulesIcon_ada0d0",
      };
    },
  },
]);
//# sourceMappingURL=fcd1e22badfea4832999.js.map
