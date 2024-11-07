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
            return b;
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
        m = n(46140),
        u = n(981631),
        x = n(388032),
        _ = n(384848),
        j = n(708901);
      let T = (t, e) => {
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
      function b(t) {
        var e;
        let { transitionState: n, onClose: b, questContent: g, quest: f } = t,
          E = (0, d.zK)(f, m.S7.IN_HOUSE_CONSOLE_QUEST),
          S = (0, d.Mi)(f, c.jn.GIFT_INVENTORY_FOR_YOU),
          p = (0, l.tP)(f),
          N =
            (null === (e = f.userStatus) || void 0 === e
              ? void 0
              : e.claimedAt) != null,
          C = T(g, S && !p && !N),
          v = o.useMemo(
            () =>
              (0, d.Fs)({
                isTargetedDisclosure: C,
                gamePublisher: f.config.messages.gamePublisher,
                gameTitle: f.config.messages.gameTitle,
                isInHouseQuest: E,
              }),
            [f, E, C],
          );
        return (0, s.jsxs)(a.ModalRoot, {
          transitionState: n,
          size: a.ModalSize.DYNAMIC,
          className: _.modalRoot,
          children: [
            (0, s.jsxs)(a.ModalHeader, {
              direction: i.Z.Direction.VERTICAL,
              separator: !1,
              className: _.modalHeader,
              children: [
                (0, s.jsxs)("div", {
                  className: _.modalTop,
                  children: [
                    (0, s.jsx)("div", {
                      className: _.iconFrame,
                      children: (0, s.jsx)("img", {
                        className: _.icon,
                        alt: "",
                        src: j,
                      }),
                    }),
                    (0, s.jsx)(a.ModalCloseButton, {
                      className: _.closeBtn,
                      onClick: b,
                    }),
                  ],
                }),
                (0, s.jsx)(a.Heading, {
                  variant: "heading-xl/bold",
                  children: x.intl.string(x.t.GcsZKC),
                }),
              ],
            }),
            (0, s.jsxs)(a.ModalContent, {
              className: _.modalContent,
              children: [
                (0, s.jsx)(a.Text, {
                  variant: "text-sm/medium",
                  color: "header-secondary",
                  className: _.upperBodyText,
                  children: v,
                }),
                (0, s.jsx)(h, { quest: f, questContent: g }),
                (0, s.jsx)(a.Text, {
                  variant: "text-xs/medium",
                  color: "text-muted",
                  children: x.intl.format(x.t.tzq9WV, {
                    privacySettingsUrl: r.Z.getArticleURL(
                      u.BhN.QUESTS_PRIVACY_CONTROLS,
                    ),
                  }),
                }),
              ],
            }),
            (0, s.jsx)(a.ModalFooter, {
              className: _.footer,
              children: (0, s.jsx)(a.Button, {
                onClick: b,
                children: x.intl.string(x.t.cpT0Cg),
              }),
            }),
          ],
        });
      }
      function g(t) {
        let { location: e, age: n, activity: o } = t;
        return (0, s.jsxs)("ul", {
          className: _.targetList,
          children: [
            e &&
              (0, s.jsx)(f, {
                icon: a.GlobeEarthIcon,
                children: x.intl.string(x.t.xQSdPj),
              }),
            n &&
              (0, s.jsx)(f, {
                icon: a.UserIcon,
                children: x.intl.string(x.t.mYt7hY),
              }),
            o &&
              (0, s.jsx)(f, {
                icon: a.GameControllerIcon,
                children: x.intl.string(x.t.XAsWxc),
              }),
          ],
        });
      }
      function h(t) {
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
            ? (0, s.jsx)(g, { activity: !0 })
            : null
          : (0, s.jsx)(g, { location: !0, age: !0, activity: !0 });
      }
      function f(t) {
        let { icon: e, children: n } = t;
        return (0, s.jsxs)(a.Text, {
          variant: "text-sm/medium",
          tag: "li",
          className: _.targetItem,
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
//# sourceMappingURL=d08e697f3586b9bedeb2.js.map
