"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["4266"],
  {
    708901: function (e) {
      e.exports = "/assets/9cda127e69904bd8cd68.svg";
    },
    316210: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return b;
          },
        });
      var s = n(200651),
        o = n(192379),
        a = n(481060),
        r = n(600164),
        i = n(63063),
        l = n(497505),
        c = n(918701),
        d = n(981631),
        m = n(388032),
        u = n(64184),
        x = n(708901);
      let g = (e) => {
        switch (e) {
          case l.jn.QUEST_BAR:
          case l.jn.QUEST_BAR_V2:
            return { location: !0, age: !0, activity: !0 };
          case l.jn.ACTIVITY_PANEL:
          case l.jn.QUESTS_EMBED:
          case l.jn.QUEST_LIVE_STREAM:
            return { activity: !0 };
          default:
            return;
        }
      };
      function b(e) {
        let { transitionState: t, onClose: n, questContent: l, quest: b } = e,
          f = g(l),
          j = o.useMemo(() => {
            var e;
            return (0, c.Fs)({
              isTargetedDisclosure: null != f,
              gamePublisher: b.config.messages.gamePublisher,
              gameTitle: b.config.messages.gameTitle,
              cosponsorName:
                null === (e = b.config.cosponsorMetadata) || void 0 === e
                  ? void 0
                  : e.name,
            });
          }, [b, f]);
        return (0, s.jsxs)(a.ModalRoot, {
          transitionState: t,
          size: a.ModalSize.DYNAMIC,
          className: u.modalRoot,
          children: [
            (0, s.jsxs)(a.ModalHeader, {
              direction: r.Z.Direction.VERTICAL,
              separator: !1,
              className: u.modalHeader,
              children: [
                (0, s.jsxs)("div", {
                  className: u.modalTop,
                  children: [
                    (0, s.jsx)("div", {
                      className: u.iconFrame,
                      children: (0, s.jsx)("img", {
                        className: u.icon,
                        alt: "",
                        src: x,
                      }),
                    }),
                    (0, s.jsx)(a.ModalCloseButton, {
                      className: u.closeBtn,
                      onClick: n,
                    }),
                  ],
                }),
                (0, s.jsx)(a.Heading, {
                  variant: "heading-xl/bold",
                  children: m.intl.string(m.t.GcsZKC),
                }),
              ],
            }),
            (0, s.jsxs)(a.ModalContent, {
              className: u.modalContent,
              children: [
                (0, s.jsx)(a.Text, {
                  variant: "text-sm/medium",
                  color: "header-secondary",
                  className: u.upperBodyText,
                  children: j,
                }),
                (0, s.jsx)(h, { targetedTraits: f }),
                (0, s.jsx)(a.Text, {
                  variant: "text-xs/medium",
                  color: "text-muted",
                  children: m.intl.format(m.t.tzq9WV, {
                    privacySettingsUrl: i.Z.getArticleURL(
                      d.BhN.QUESTS_PRIVACY_CONTROLS,
                    ),
                  }),
                }),
              ],
            }),
            (0, s.jsx)(a.ModalFooter, {
              className: u.footer,
              children: (0, s.jsx)(a.Button, {
                onClick: n,
                children: m.intl.string(m.t.cpT0Cg),
              }),
            }),
          ],
        });
      }
      function f(e) {
        let { location: t, age: n, activity: o } = e;
        return (0, s.jsxs)("ul", {
          className: u.targetList,
          children: [
            t &&
              (0, s.jsx)(j, {
                icon: a.GlobeEarthIcon,
                children: m.intl.string(m.t.xQSdPj),
              }),
            n &&
              (0, s.jsx)(j, {
                icon: a.UserIcon,
                children: m.intl.string(m.t.mYt7hY),
              }),
            o &&
              (0, s.jsx)(j, {
                icon: a.GameControllerIcon,
                children: m.intl.string(m.t.XAsWxc),
              }),
          ],
        });
      }
      function h(e) {
        let { targetedTraits: t } = e;
        return null != t ? (0, s.jsx)(f, { ...t }) : null;
      }
      function j(e) {
        let { icon: t, children: n } = e;
        return (0, s.jsxs)(a.Text, {
          variant: "text-sm/medium",
          tag: "li",
          className: u.targetItem,
          children: [(0, s.jsx)(t, { size: "xs", color: "currentColor" }), n],
        });
      }
    },
    64184: function (e, t, n) {
      e.exports = {
        modalRoot: "modalRoot_bfd39b",
        modalHeader: "modalHeader_bfd39b",
        modalTop: "modalTop_bfd39b",
        iconFrame: "iconFrame_bfd39b",
        icon: "icon_bfd39b",
        closeBtn: "closeBtn_bfd39b",
        modalContent: "modalContent_bfd39b",
        upperBodyText: "upperBodyText_bfd39b",
        targetList: "targetList_bfd39b",
        targetItem: "targetItem_bfd39b",
        footer: "footer_bfd39b",
      };
    },
  },
]);
//# sourceMappingURL=f24b4b30cf50b22db103.js.map
