"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["4266"],
  {
    708901: function (t) {
      t.exports = "/assets/9cda127e69904bd8cd68.svg";
    },
    316210: function (t, e, n) {
      n.r(e),
        n.d(e, {
          default: function () {
            return T;
          },
        });
      var o = n(200651),
        s = n(192379),
        a = n(481060),
        i = n(600164),
        r = n(63063),
        l = n(113434),
        c = n(497505),
        d = n(918701),
        m = n(981631),
        u = n(388032),
        x = n(367928),
        _ = n(708901);
      let j = (t, e) => {
        switch (t) {
          case c.jn.QUEST_BAR:
          case c.jn.QUEST_BAR_V2:
            return !0;
          case c.jn.QUEST_HOME_DESKTOP:
            return e;
          default:
            return !1;
        }
      };
      function T(t) {
        var e;
        let { transitionState: n, onClose: T, questContent: b, quest: f } = t,
          h = (0, d.Mi)(f, c.jn.GIFT_INVENTORY_FOR_YOU),
          p = (0, l.tP)(f),
          E =
            (null === (e = f.userStatus) || void 0 === e
              ? void 0
              : e.claimedAt) != null,
          S = j(b, h && !p && !E),
          v = s.useMemo(() => {
            var t;
            return (0, d.Fs)({
              isTargetedDisclosure: S,
              gamePublisher: f.config.messages.gamePublisher,
              gameTitle: f.config.messages.gameTitle,
              cosponsorName:
                null === (t = f.config.cosponsorMetadata) || void 0 === t
                  ? void 0
                  : t.name,
            });
          }, [f, S]);
        return (0, o.jsxs)(a.ModalRoot, {
          transitionState: n,
          size: a.ModalSize.DYNAMIC,
          className: x.modalRoot,
          children: [
            (0, o.jsxs)(a.ModalHeader, {
              direction: i.Z.Direction.VERTICAL,
              separator: !1,
              className: x.modalHeader,
              children: [
                (0, o.jsxs)("div", {
                  className: x.modalTop,
                  children: [
                    (0, o.jsx)("div", {
                      className: x.iconFrame,
                      children: (0, o.jsx)("img", {
                        className: x.icon,
                        alt: "",
                        src: _,
                      }),
                    }),
                    (0, o.jsx)(a.ModalCloseButton, {
                      className: x.closeBtn,
                      onClick: T,
                    }),
                  ],
                }),
                (0, o.jsx)(a.Heading, {
                  variant: "heading-xl/bold",
                  children: u.intl.string(u.t.GcsZKC),
                }),
              ],
            }),
            (0, o.jsxs)(a.ModalContent, {
              className: x.modalContent,
              children: [
                (0, o.jsx)(a.Text, {
                  variant: "text-sm/medium",
                  color: "header-secondary",
                  className: x.upperBodyText,
                  children: v,
                }),
                (0, o.jsx)(g, { quest: f, questContent: b }),
                (0, o.jsx)(a.Text, {
                  variant: "text-xs/medium",
                  color: "text-muted",
                  children: u.intl.format(u.t.tzq9WV, {
                    privacySettingsUrl: r.Z.getArticleURL(
                      m.BhN.QUESTS_PRIVACY_CONTROLS,
                    ),
                  }),
                }),
              ],
            }),
            (0, o.jsx)(a.ModalFooter, {
              className: x.footer,
              children: (0, o.jsx)(a.Button, {
                onClick: T,
                children: u.intl.string(u.t.cpT0Cg),
              }),
            }),
          ],
        });
      }
      function b(t) {
        let { location: e, age: n, activity: s } = t;
        return (0, o.jsxs)("ul", {
          className: x.targetList,
          children: [
            e &&
              (0, o.jsx)(f, {
                icon: a.GlobeEarthIcon,
                children: u.intl.string(u.t.xQSdPj),
              }),
            n &&
              (0, o.jsx)(f, {
                icon: a.UserIcon,
                children: u.intl.string(u.t.mYt7hY),
              }),
            s &&
              (0, o.jsx)(f, {
                icon: a.GameControllerIcon,
                children: u.intl.string(u.t.XAsWxc),
              }),
          ],
        });
      }
      function g(t) {
        var e;
        let { questContent: n, quest: s } = t,
          a = (0, d.Mi)(s, c.jn.GIFT_INVENTORY_FOR_YOU),
          i = (0, l.tP)(s),
          r =
            (null === (e = s.userStatus) || void 0 === e
              ? void 0
              : e.claimedAt) != null;
        return n !== c.jn.QUEST_BAR &&
          n !== c.jn.QUEST_BAR_V2 &&
          (n !== c.jn.QUEST_HOME_DESKTOP || !a || i || r)
          ? n === c.jn.ACTIVITY_PANEL ||
            n === c.jn.QUESTS_EMBED ||
            n === c.jn.QUEST_LIVE_STREAM
            ? (0, o.jsx)(b, { activity: !0 })
            : null
          : (0, o.jsx)(b, { location: !0, age: !0, activity: !0 });
      }
      function f(t) {
        let { icon: e, children: n } = t;
        return (0, o.jsxs)(a.Text, {
          variant: "text-sm/medium",
          tag: "li",
          className: x.targetItem,
          children: [(0, o.jsx)(e, { size: "xs", color: "currentColor" }), n],
        });
      }
    },
    367928: function (t, e, n) {
      t.exports = {
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
//# sourceMappingURL=ed19f795bcfaff8d36d3.js.map
