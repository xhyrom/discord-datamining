"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["4266"],
  {
    708901: function (e) {
      e.exports = "/assets/9cda127e69904bd8cd68.svg";
    },
    471985: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return n;
        },
      });
      var o = s(831565),
        a = s(282421);
      function n(e) {
        let t = (0, o.v)({ location: e, autoTrackExposure: !1 }),
          { enabled: s } = a.B.useExperiment(
            { location: e },
            { autoTrackExposure: !1 },
          );
        return s || t;
      }
    },
    316210: function (e, t, s) {
      s.r(t),
        s.d(t, {
          default: function () {
            return x;
          },
        });
      var o = s(735250),
        a = s(470079),
        n = s(481060),
        r = s(600164),
        i = s(63063),
        l = s(113434),
        c = s(497505),
        d = s(918701),
        u = s(471985),
        m = s(46140),
        _ = s(981631),
        S = s(689938),
        E = s(552461),
        T = s(708901);
      function x(e) {
        var t;
        let { transitionState: s, onClose: x, questContent: j, quest: f } = e,
          g = (0, d.zK)(f, m.S7.IN_HOUSE_CONSOLE_QUEST),
          C = (0, d.Mi)(f, c.jn.GIFT_INVENTORY_FOR_YOU),
          U = (0, l.tP)(f),
          h =
            (null === (t = f.userStatus) || void 0 === t
              ? void 0
              : t.claimedAt) != null,
          I =
            j === c.jn.QUEST_BAR || j === c.jn.QUEST_BAR_V2 || (C && !U && !h),
          R = (0, u.Z)(m.dr.QUEST_DISCLOSURE_MODAL),
          O = a.useMemo(
            () =>
              (0, d.Fs)({
                isTargetedDisclosure: I,
                gamePublisher: f.config.messages.gamePublisher,
                gameTitle: f.config.messages.gameTitle,
                isInHouseQuest: g,
                hasQuestHomeExperiment: R,
              }),
            [f, g, R, I],
          );
        return (0, o.jsxs)(n.ModalRoot, {
          transitionState: s,
          size: n.ModalSize.DYNAMIC,
          className: E.modalRoot,
          children: [
            (0, o.jsxs)(n.ModalHeader, {
              direction: r.Z.Direction.VERTICAL,
              separator: !1,
              className: E.modalHeader,
              children: [
                (0, o.jsxs)("div", {
                  className: E.modalTop,
                  children: [
                    (0, o.jsx)("div", {
                      className: E.iconFrame,
                      children: (0, o.jsx)("img", {
                        className: E.icon,
                        alt: "",
                        src: T,
                      }),
                    }),
                    (0, o.jsx)(n.ModalCloseButton, {
                      className: E.closeBtn,
                      onClick: x,
                    }),
                  ],
                }),
                (0, o.jsx)(n.Heading, {
                  variant: "heading-xl/bold",
                  children: S.Z.Messages.QUESTS_DISCLOSURE_LABEL,
                }),
              ],
            }),
            (0, o.jsxs)(n.ModalContent, {
              className: E.modalContent,
              children: [
                (0, o.jsx)(n.Text, {
                  variant: "text-sm/medium",
                  color: "header-secondary",
                  className: E.upperBodyText,
                  children: O,
                }),
                (0, o.jsx)(b, { quest: f, questContent: j }),
                (0, o.jsx)(n.Text, {
                  variant: "text-xs/medium",
                  color: "text-muted",
                  children: S.Z.Messages.QUESTS_DISCLOSURE_LEARN_MORE.format({
                    privacySettingsUrl: i.Z.getArticleURL(
                      _.BhN.QUESTS_PRIVACY_CONTROLS,
                    ),
                  }),
                }),
              ],
            }),
            (0, o.jsx)(n.ModalFooter, {
              className: E.footer,
              children: (0, o.jsx)(n.Button, {
                onClick: x,
                children: S.Z.Messages.CLOSE,
              }),
            }),
          ],
        });
      }
      function j(e) {
        let { location: t, age: s, activity: a } = e;
        return (0, o.jsxs)("ul", {
          className: E.targetList,
          children: [
            t &&
              (0, o.jsx)(f, {
                icon: n.GlobeEarthIcon,
                children: S.Z.Messages.QUESTS_DISCLOSURE_LOCATION,
              }),
            s &&
              (0, o.jsx)(f, {
                icon: n.UserIcon,
                children: S.Z.Messages.QUESTS_DISCLOSURE_AGE,
              }),
            a &&
              (0, o.jsx)(f, {
                icon: n.GameControllerIcon,
                children: S.Z.Messages.QUESTS_DISCLOSURE_ACTIVITY,
              }),
          ],
        });
      }
      function b(e) {
        var t;
        let { questContent: s, quest: a } = e,
          n = (0, d.Mi)(a, c.jn.GIFT_INVENTORY_FOR_YOU),
          r = (0, l.tP)(a),
          i =
            (null === (t = a.userStatus) || void 0 === t
              ? void 0
              : t.claimedAt) != null;
        return s !== c.jn.QUEST_BAR &&
          s !== c.jn.QUEST_BAR_V2 &&
          (s !== c.jn.QUEST_HOME_DESKTOP || !n || r || i)
          ? s === c.jn.ACTIVITY_PANEL ||
            s === c.jn.QUESTS_EMBED ||
            s === c.jn.QUEST_LIVE_STREAM
            ? (0, o.jsx)(j, { activity: !0 })
            : null
          : (0, o.jsx)(j, { location: !0, age: !0, activity: !0 });
      }
      function f(e) {
        let { icon: t, children: s } = e;
        return (0, o.jsxs)(n.Text, {
          variant: "text-sm/medium",
          tag: "li",
          className: E.targetItem,
          children: [(0, o.jsx)(t, { size: "xs", color: "currentColor" }), s],
        });
      }
    },
    552461: function (e, t, s) {
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
//# sourceMappingURL=16dd5984feacbe89178a.js.map
