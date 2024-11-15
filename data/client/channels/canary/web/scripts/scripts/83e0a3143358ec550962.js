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
      var s = n(200651),
        o = n(192379),
        a = n(481060),
        i = n(600164),
        r = n(63063),
        l = n(113434),
        c = n(497505),
        d = n(918701),
        m = n(981631),
        u = n(388032),
        x = n(384848),
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
        let { transitionState: n, onClose: T, questContent: b, quest: h } = t,
          f = (0, d.Mi)(h, c.jn.GIFT_INVENTORY_FOR_YOU),
          E = (0, l.tP)(h),
          p =
            (null === (e = h.userStatus) || void 0 === e
              ? void 0
              : e.claimedAt) != null,
          S = j(b, f && !E && !p),
          C = o.useMemo(
            () =>
              (0, d.Fs)({
                isTargetedDisclosure: S,
                gamePublisher: h.config.messages.gamePublisher,
                gameTitle: h.config.messages.gameTitle,
              }),
            [h, S],
          );
        return (0, s.jsxs)(a.ModalRoot, {
          transitionState: n,
          size: a.ModalSize.DYNAMIC,
          className: x.modalRoot,
          children: [
            (0, s.jsxs)(a.ModalHeader, {
              direction: i.Z.Direction.VERTICAL,
              separator: !1,
              className: x.modalHeader,
              children: [
                (0, s.jsxs)("div", {
                  className: x.modalTop,
                  children: [
                    (0, s.jsx)("div", {
                      className: x.iconFrame,
                      children: (0, s.jsx)("img", {
                        className: x.icon,
                        alt: "",
                        src: _,
                      }),
                    }),
                    (0, s.jsx)(a.ModalCloseButton, {
                      className: x.closeBtn,
                      onClick: T,
                    }),
                  ],
                }),
                (0, s.jsx)(a.Heading, {
                  variant: "heading-xl/bold",
                  children: u.intl.string(u.t.GcsZKC),
                }),
              ],
            }),
            (0, s.jsxs)(a.ModalContent, {
              className: x.modalContent,
              children: [
                (0, s.jsx)(a.Text, {
                  variant: "text-sm/medium",
                  color: "header-secondary",
                  className: x.upperBodyText,
                  children: C,
                }),
                (0, s.jsx)(g, { quest: h, questContent: b }),
                (0, s.jsx)(a.Text, {
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
            (0, s.jsx)(a.ModalFooter, {
              className: x.footer,
              children: (0, s.jsx)(a.Button, {
                onClick: T,
                children: u.intl.string(u.t.cpT0Cg),
              }),
            }),
          ],
        });
      }
      function b(t) {
        let { location: e, age: n, activity: o } = t;
        return (0, s.jsxs)("ul", {
          className: x.targetList,
          children: [
            e &&
              (0, s.jsx)(h, {
                icon: a.GlobeEarthIcon,
                children: u.intl.string(u.t.xQSdPj),
              }),
            n &&
              (0, s.jsx)(h, {
                icon: a.UserIcon,
                children: u.intl.string(u.t.mYt7hY),
              }),
            o &&
              (0, s.jsx)(h, {
                icon: a.GameControllerIcon,
                children: u.intl.string(u.t.XAsWxc),
              }),
          ],
        });
      }
      function g(t) {
        var e;
        let { questContent: n, quest: o } = t,
          a = (0, d.Mi)(o, c.jn.GIFT_INVENTORY_FOR_YOU),
          i = (0, l.tP)(o),
          r =
            (null === (e = o.userStatus) || void 0 === e
              ? void 0
              : e.claimedAt) != null;
        return n !== c.jn.QUEST_BAR &&
          n !== c.jn.QUEST_BAR_V2 &&
          (n !== c.jn.QUEST_HOME_DESKTOP || !a || i || r)
          ? n === c.jn.ACTIVITY_PANEL ||
            n === c.jn.QUESTS_EMBED ||
            n === c.jn.QUEST_LIVE_STREAM
            ? (0, s.jsx)(b, { activity: !0 })
            : null
          : (0, s.jsx)(b, { location: !0, age: !0, activity: !0 });
      }
      function h(t) {
        let { icon: e, children: n } = t;
        return (0, s.jsxs)(a.Text, {
          variant: "text-sm/medium",
          tag: "li",
          className: x.targetItem,
          children: [(0, s.jsx)(e, { size: "xs", color: "currentColor" }), n],
        });
      }
    },
    384848: function (t, e, n) {
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
//# sourceMappingURL=83e0a3143358ec550962.js.map
