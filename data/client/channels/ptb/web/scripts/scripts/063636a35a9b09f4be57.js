"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["4266"],
  {
    708901: function (e) {
      e.exports = "/assets/9cda127e69904bd8cd68.svg";
    },
    316210: function (e, t, s) {
      s.r(t),
        s.d(t, {
          default: function () {
            return E;
          },
        });
      var a = s(735250),
        o = s(470079),
        n = s(481060),
        i = s(600164),
        l = s(63063),
        r = s(113434),
        d = s(497505),
        c = s(918701),
        m = s(46140),
        _ = s(981631),
        u = s(689938),
        S = s(367928),
        T = s(708901);
      function E(e) {
        var t;
        let { transitionState: s, onClose: E, questContent: x, quest: b } = e,
          g = (0, c.zK)(b, m.S7.IN_HOUSE_CONSOLE_QUEST),
          f = (0, c.Mi)(b, d.jn.GIFT_INVENTORY_FOR_YOU),
          h = (0, r.tP)(b),
          C =
            (null === (t = b.userStatus) || void 0 === t
              ? void 0
              : t.claimedAt) != null,
          I =
            x === d.jn.QUEST_BAR || x === d.jn.QUEST_BAR_V2 || (f && !h && !C),
          U = o.useMemo(
            () =>
              (0, c.Fs)({
                isTargetedDisclosure: I,
                gamePublisher: b.config.messages.gamePublisher,
                gameTitle: b.config.messages.gameTitle,
                isInHouseQuest: g,
              }),
            [b, g, I],
          );
        return (0, a.jsxs)(n.ModalRoot, {
          transitionState: s,
          size: n.ModalSize.DYNAMIC,
          className: S.modalRoot,
          children: [
            (0, a.jsxs)(n.ModalHeader, {
              direction: i.Z.Direction.VERTICAL,
              separator: !1,
              className: S.modalHeader,
              children: [
                (0, a.jsxs)("div", {
                  className: S.modalTop,
                  children: [
                    (0, a.jsx)("div", {
                      className: S.iconFrame,
                      children: (0, a.jsx)("img", {
                        className: S.icon,
                        alt: "",
                        src: T,
                      }),
                    }),
                    (0, a.jsx)(n.ModalCloseButton, {
                      className: S.closeBtn,
                      onClick: E,
                    }),
                  ],
                }),
                (0, a.jsx)(n.Heading, {
                  variant: "heading-xl/bold",
                  children: u.Z.Messages.QUESTS_DISCLOSURE_LABEL,
                }),
              ],
            }),
            (0, a.jsxs)(n.ModalContent, {
              className: S.modalContent,
              children: [
                (0, a.jsx)(n.Text, {
                  variant: "text-sm/medium",
                  color: "header-secondary",
                  className: S.upperBodyText,
                  children: U,
                }),
                (0, a.jsx)(j, { quest: b, questContent: x }),
                (0, a.jsx)(n.Text, {
                  variant: "text-xs/medium",
                  color: "text-muted",
                  children: u.Z.Messages.QUESTS_DISCLOSURE_LEARN_MORE.format({
                    privacySettingsUrl: l.Z.getArticleURL(
                      _.BhN.QUESTS_PRIVACY_CONTROLS,
                    ),
                  }),
                }),
              ],
            }),
            (0, a.jsx)(n.ModalFooter, {
              className: S.footer,
              children: (0, a.jsx)(n.Button, {
                onClick: E,
                children: u.Z.Messages.CLOSE,
              }),
            }),
          ],
        });
      }
      function x(e) {
        let { location: t, age: s, activity: o } = e;
        return (0, a.jsxs)("ul", {
          className: S.targetList,
          children: [
            t &&
              (0, a.jsx)(b, {
                icon: n.GlobeEarthIcon,
                children: u.Z.Messages.QUESTS_DISCLOSURE_LOCATION,
              }),
            s &&
              (0, a.jsx)(b, {
                icon: n.UserIcon,
                children: u.Z.Messages.QUESTS_DISCLOSURE_AGE,
              }),
            o &&
              (0, a.jsx)(b, {
                icon: n.GameControllerIcon,
                children: u.Z.Messages.QUESTS_DISCLOSURE_ACTIVITY,
              }),
          ],
        });
      }
      function j(e) {
        var t;
        let { questContent: s, quest: o } = e,
          n = (0, c.Mi)(o, d.jn.GIFT_INVENTORY_FOR_YOU),
          i = (0, r.tP)(o),
          l =
            (null === (t = o.userStatus) || void 0 === t
              ? void 0
              : t.claimedAt) != null;
        return s !== d.jn.QUEST_BAR &&
          s !== d.jn.QUEST_BAR_V2 &&
          (s !== d.jn.QUEST_HOME_DESKTOP || !n || i || l)
          ? s === d.jn.ACTIVITY_PANEL ||
            s === d.jn.QUESTS_EMBED ||
            s === d.jn.QUEST_LIVE_STREAM
            ? (0, a.jsx)(x, { activity: !0 })
            : null
          : (0, a.jsx)(x, { location: !0, age: !0, activity: !0 });
      }
      function b(e) {
        let { icon: t, children: s } = e;
        return (0, a.jsxs)(n.Text, {
          variant: "text-sm/medium",
          tag: "li",
          className: S.targetItem,
          children: [(0, a.jsx)(t, { size: "xs", color: "currentColor" }), s],
        });
      }
    },
    367928: function (e, t, s) {
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
//# sourceMappingURL=063636a35a9b09f4be57.js.map
