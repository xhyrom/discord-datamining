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
            return x;
          },
        });
      var a = s(735250),
        o = s(470079),
        n = s(481060),
        r = s(600164),
        i = s(63063),
        l = s(113434),
        c = s(497505),
        d = s(918701),
        m = s(46140),
        _ = s(981631),
        u = s(689938),
        S = s(367928),
        E = s(708901);
      let T = (e, t) => {
        switch (e) {
          case c.jn.QUEST_BAR:
          case c.jn.QUEST_BAR_V2:
            return !0;
          case c.jn.QUEST_HOME_DESKTOP:
            return t;
          default:
            return !1;
        }
      };
      function x(e) {
        var t;
        let { transitionState: s, onClose: x, questContent: j, quest: g } = e,
          f = (0, d.zK)(g, m.S7.IN_HOUSE_CONSOLE_QUEST),
          h = (0, d.Mi)(g, c.jn.GIFT_INVENTORY_FOR_YOU),
          C = (0, l.tP)(g),
          U =
            (null === (t = g.userStatus) || void 0 === t
              ? void 0
              : t.claimedAt) != null,
          I = T(j, h && !C && !U),
          O = o.useMemo(
            () =>
              (0, d.Fs)({
                isTargetedDisclosure: I,
                gamePublisher: g.config.messages.gamePublisher,
                gameTitle: g.config.messages.gameTitle,
                isInHouseQuest: f,
              }),
            [g, f, I],
          );
        return (0, a.jsxs)(n.ModalRoot, {
          transitionState: s,
          size: n.ModalSize.DYNAMIC,
          className: S.modalRoot,
          children: [
            (0, a.jsxs)(n.ModalHeader, {
              direction: r.Z.Direction.VERTICAL,
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
                        src: E,
                      }),
                    }),
                    (0, a.jsx)(n.ModalCloseButton, {
                      className: S.closeBtn,
                      onClick: x,
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
                  children: O,
                }),
                (0, a.jsx)(b, { quest: g, questContent: j }),
                (0, a.jsx)(n.Text, {
                  variant: "text-xs/medium",
                  color: "text-muted",
                  children: u.Z.Messages.QUESTS_DISCLOSURE_LEARN_MORE.format({
                    privacySettingsUrl: i.Z.getArticleURL(
                      _.BhN.QUESTS_PRIVACY_CONTROLS,
                    ),
                  }),
                }),
              ],
            }),
            (0, a.jsx)(n.ModalFooter, {
              className: S.footer,
              children: (0, a.jsx)(n.Button, {
                onClick: x,
                children: u.Z.Messages.CLOSE,
              }),
            }),
          ],
        });
      }
      function j(e) {
        let { location: t, age: s, activity: o } = e;
        return (0, a.jsxs)("ul", {
          className: S.targetList,
          children: [
            t &&
              (0, a.jsx)(g, {
                icon: n.GlobeEarthIcon,
                children: u.Z.Messages.QUESTS_DISCLOSURE_LOCATION,
              }),
            s &&
              (0, a.jsx)(g, {
                icon: n.UserIcon,
                children: u.Z.Messages.QUESTS_DISCLOSURE_AGE,
              }),
            o &&
              (0, a.jsx)(g, {
                icon: n.GameControllerIcon,
                children: u.Z.Messages.QUESTS_DISCLOSURE_ACTIVITY,
              }),
          ],
        });
      }
      function b(e) {
        var t;
        let { questContent: s, quest: o } = e,
          n = (0, d.Mi)(o, c.jn.GIFT_INVENTORY_FOR_YOU),
          r = (0, l.tP)(o),
          i =
            (null === (t = o.userStatus) || void 0 === t
              ? void 0
              : t.claimedAt) != null;
        return s !== c.jn.QUEST_BAR &&
          s !== c.jn.QUEST_BAR_V2 &&
          (s !== c.jn.QUEST_HOME_DESKTOP || !n || r || i)
          ? s === c.jn.ACTIVITY_PANEL ||
            s === c.jn.QUESTS_EMBED ||
            s === c.jn.QUEST_LIVE_STREAM
            ? (0, a.jsx)(j, { activity: !0 })
            : null
          : (0, a.jsx)(j, { location: !0, age: !0, activity: !0 });
      }
      function g(e) {
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
//# sourceMappingURL=e982a5dd224a453377ec.js.map
