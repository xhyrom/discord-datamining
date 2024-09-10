"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["86564"],
  {
    641758: function (e, s, t) {
      t.r(s),
        t.d(s, {
          ANSWERS_DISPLAY_DATA: function () {
            return h;
          },
          AnswerKey: function () {
            return a;
          },
          default: function () {
            return S;
          },
        }),
        t(47120),
        t(390547);
      var a,
        n,
        o = t(735250),
        _ = t(470079),
        r = t(120356),
        E = t.n(r),
        C = t(481060),
        l = t(471731),
        c = t(626135),
        i = t(124030),
        d = t(981631),
        N = t(689938),
        I = t(966724);
      ((n = a || (a = {})).WHEN_FRIENDS_PLAY = "WHEN_FRIENDS_PLAY"),
        (n.ACHIEVEMENTS = "ACHIEVEMENTS"),
        (n.NEWS = "NEWS"),
        (n.NONE_OF_BENEFITS = "NONE_OF_BENEFITS"),
        (n.NONE_OF_GAME_TYPES = "NONE_OF_GAME_TYPES"),
        (n.GAMES_I_PLAY_NOW = "GAMES_I_PLAY_NOW"),
        (n.GAMES_I_WANT_TO_PLAY = "GAMES_I_WANT_TO_PLAY"),
        (n.GAMES_FRIENDS_PLAY = "GAMES_FRIENDS_PLAY"),
        (n.FOLLOW_DEV = "FOLLOW_DEV"),
        (n.GENRES = "GENRES");
      let M = {
          getTitle: () => N.Z.Messages.GAME_PROFILE_QUESTION_BENEFITS,
          answers: {
            WHEN_FRIENDS_PLAY: !1,
            ACHIEVEMENTS: !1,
            NEWS: !1,
            NONE_OF_BENEFITS: !1,
          },
        },
        A = {
          getTitle: () => N.Z.Messages.GAME_PROFILE_QUESTION_GAME_TYPES,
          answers: {
            GAMES_I_PLAY_NOW: !1,
            GAMES_I_WANT_TO_PLAY: !1,
            GAMES_FRIENDS_PLAY: !1,
            FOLLOW_DEV: !1,
            GENRES: !1,
            NONE_OF_GAME_TYPES: !1,
          },
        },
        h = {
          WHEN_FRIENDS_PLAY: {
            getTitle: () => N.Z.Messages.GAME_PROFILE_Q1_WHEN_FRIENDS_PLAY,
            Icon: C.GameControllerIcon,
          },
          ACHIEVEMENTS: {
            getTitle: () => N.Z.Messages.GAME_PROFILE_Q1_ACHIEVEMENTS,
            Icon: C.ChatIcon,
          },
          NEWS: {
            getTitle: () => N.Z.Messages.GAME_PROFILE_Q1_NEWS,
            Icon: C.AnnouncementsIcon,
          },
          NONE_OF_BENEFITS: {
            getTitle: () => N.Z.Messages.GAME_PROFILE_NONE,
            Icon: C.DenyIcon,
          },
          NONE_OF_GAME_TYPES: {
            getTitle: () => N.Z.Messages.GAME_PROFILE_NONE,
            Icon: C.DenyIcon,
          },
          GAMES_I_PLAY_NOW: {
            getTitle: () => N.Z.Messages.GAME_PROFILE_Q2_GAMES_I_PLAY_NOW,
            Icon: C.GameControllerIcon,
          },
          GAMES_I_WANT_TO_PLAY: {
            getTitle: () => N.Z.Messages.GAME_PROFILE_Q2_GAMES_I_WANT_TO_PLAY,
            Icon: C.CalendarIcon,
          },
          GAMES_FRIENDS_PLAY: {
            getTitle: () => N.Z.Messages.GAME_PROFILE_Q2_GAMES_FRIENDS_PLAY,
            Icon: C.FriendsIcon,
          },
          FOLLOW_DEV: {
            getTitle: () => N.Z.Messages.GAME_PROFILE_Q2_FOLLOW_DEV,
            Icon: C.AnnouncementsIcon,
          },
          GENRES: {
            getTitle: () => N.Z.Messages.GAME_PROFILE_Q2_GENRES,
            Icon: C.ModerationIcon,
          },
        };
      function S(e) {
        let {
            transitionState: s,
            applicationId: t,
            viewId: a,
            background: n,
            onClose: r,
          } = e,
          S = (0, C.useToken)(C.tokens.colors.BORDER_STRONG).hex(),
          [O, u] = _.useState(!1),
          [g, x] = _.useState([M, A]),
          [T, L] = _.useState(0),
          m = T === g.length - 1,
          R = Object.values(g[T].answers).filter((e) => e).length > 0,
          [F, G] = _.useState(!1),
          P = Object.entries(g[T].answers)
            .filter((e) => {
              let [s, t] = e;
              return t;
            })
            .map((e) => {
              let [s] = e;
              return s;
            }),
          j = P.some((e) => e.startsWith("NONE")),
          Y = !j && P.length > 0,
          Z = Object.entries(g[T].answers).map((e) => {
            let [s, t] = e;
            return {
              key: s,
              isChecked: t,
              text: h[s].getTitle(),
              Icon: h[s].Icon,
              disabled: s.startsWith("NONE") ? Y : j,
            };
          });
        function p() {
          c.default.track(d.rMx.GAME_PROFILE_FOLLOW_SURVEY, {
            application_id: t,
            question_no: T,
            notify_on_launch: O,
            affirmative_answers: g.flatMap((e) =>
              Object.entries(e.answers)
                .filter((e) => {
                  let [s, t] = e;
                  return t;
                })
                .map((e) => {
                  let [s] = e;
                  return s;
                }),
            ),
            view_id: a,
          });
        }
        return (0, o.jsxs)(C.ModalRoot, {
          transitionState: s,
          className: I.modalRoot,
          size: C.ModalSize.LARGE,
          children: [
            (0, o.jsx)("img", {
              src: n,
              className: I.backgroundImage,
              alt: "",
            }),
            (0, o.jsx)("div", { className: I.background }),
            (0, o.jsx)(C.ModalCloseButton, {
              onClick: r,
              className: I.closeIcon,
            }),
            F &&
              (0, o.jsxs)("div", {
                className: I.thankYou,
                children: [
                  (0, o.jsx)(C.Heading, {
                    variant: "heading-md/bold",
                    color: "header-primary",
                    children: N.Z.Messages.GAME_PROFILE_SURVEY_TY,
                  }),
                  (0, o.jsx)(C.Text, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children: N.Z.Messages.GAME_PROFILE_SURVEY_TY_MORE,
                  }),
                ],
              }),
            !F &&
              (0, o.jsxs)(C.Scroller, {
                className: I.modalContent,
                children: [
                  (0, o.jsxs)("div", {
                    className: I.intro,
                    children: [
                      (0, o.jsx)(l.Z, { width: 84, height: 16 }),
                      0 === T &&
                        (0, o.jsx)(C.Text, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: N.Z.Messages.GAME_PROFILE_SURVEY_INTRO,
                        }),
                    ],
                  }),
                  (0, o.jsxs)("div", {
                    className: I.bottomHalf,
                    children: [
                      (0, o.jsx)(C.Text, {
                        variant: "eyebrow",
                        color: "header-muted",
                        children:
                          N.Z.Messages.GAME_PROFILE_SURVEY_PROGRESS.format({
                            step: T + 1,
                            total: g.length,
                          }),
                      }),
                      (0, o.jsx)(C.Heading, {
                        className: I.question,
                        variant: "heading-lg/medium",
                        color: "header-primary",
                        children: g[T].getTitle(),
                      }),
                      (0, o.jsx)("div", {
                        className: E()(I.answers, {
                          [I.gridFour]: Z.length % 4 == 0,
                        }),
                        children: Z.map((e) => {
                          let {
                            key: s,
                            text: t,
                            isChecked: a,
                            Icon: n,
                            disabled: _,
                          } = e;
                          return (0, o.jsxs)(
                            C.Checkbox,
                            {
                              className: E()(I.answerLabel, {
                                [I.checked]: a,
                                [I.disabled]: _,
                              }),
                              reverse: !0,
                              disabled: _,
                              type: C.Checkbox.Types.INVERTED,
                              shape: C.Checkbox.Shapes.SMALL_BOX,
                              checkboxColor: S,
                              value: a,
                              onChange: (e, t) =>
                                (function (e, s, t) {
                                  let a = [...g];
                                  (a[e] = {
                                    ...a[e],
                                    answers: { ...a[e].answers, [s]: t },
                                  }),
                                    x(a),
                                    (0, i.A)();
                                })(T, s, t),
                              children: [
                                (0, o.jsx)(n, {
                                  color: C.tokens.colors.INTERACTIVE_ACTIVE,
                                  className: I.answerIcon,
                                }),
                                (0, o.jsx)(C.Heading, {
                                  variant: "heading-md/medium",
                                  className: I.answerText,
                                  children: t,
                                }),
                              ],
                            },
                            s,
                          );
                        }),
                      }),
                      (0, o.jsxs)("div", {
                        className: I.footer,
                        children: [
                          (0, o.jsx)(C.Text, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            className: I.selectAll,
                            children:
                              N.Z.Messages.GAME_PROFILE_SURVEY_SELECT_ALL,
                          }),
                          !m &&
                            R &&
                            (0, o.jsx)(C.Button, {
                              onClick: function () {
                                p(), L(1);
                              },
                              children: N.Z.Messages.NEXT,
                            }),
                          m &&
                            (0, o.jsxs)(o.Fragment, {
                              children: [
                                (0, o.jsx)(C.Checkbox, {
                                  className: I.notify,
                                  type: C.Checkbox.Types.INVERTED,
                                  shape: C.Checkbox.Shapes.ROUND,
                                  checkboxColor: "var(--border-strong)",
                                  value: O,
                                  onChange: (e, s) => u(s),
                                  children: (0, o.jsx)(C.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-primary",
                                    children:
                                      N.Z.Messages
                                        .GAME_PROFILE_SURVEY_NOTIFY_ME,
                                  }),
                                }),
                                (0, o.jsx)(C.Button, {
                                  onClick: function () {
                                    p(), G(!0);
                                  },
                                  disabled: !R,
                                  children: N.Z.Messages.SUBMIT,
                                }),
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
          ],
        });
      }
    },
    471731: function (e, s, t) {
      t.d(s, {
        Z: function () {
          return o;
        },
      });
      var a = t(735250);
      t(470079);
      var n = t(325767);
      function o(e) {
        let {
          width: s = 124,
          height: t = 24,
          color: o = "currentColor",
          foreground: _,
          ...r
        } = e;
        return (0, a.jsx)("svg", {
          ...(0, n.Z)(r),
          width: s,
          height: t,
          viewBox: "0 0 124 24",
          children: (0, a.jsxs)("g", {
            fill: o,
            className: _,
            children: [
              (0, a.jsx)("path", {
                d: "M26.2421 2.00996C24.2367 1.07098 22.0925 0.388543 19.8509 0C19.5755 0.498132 19.2539 1.16812 19.0322 1.70112C16.6492 1.34247 14.2881 1.34247 11.949 1.70112C11.7273 1.16812 11.3983 0.498132 11.1206 0C8.87648 0.388543 6.72984 1.07347 4.72453 2.01494C0.679785 8.132 -0.41668 14.0971 0.131553 19.9776C2.81424 21.9826 5.41408 23.2005 7.97006 23.9975C8.60114 23.1283 9.16399 22.2042 9.64888 21.2304C8.72541 20.8792 7.84093 20.4458 7.00517 19.9427C7.2269 19.7783 7.44376 19.6065 7.65331 19.4296C12.7507 21.8157 18.289 21.8157 23.3255 19.4296C23.5374 19.6065 23.7543 19.7783 23.9736 19.9427C23.1354 20.4483 22.2485 20.8817 21.325 21.2329C21.8099 22.2042 22.3703 23.1308 23.0038 24C25.5622 23.203 28.1645 21.9851 30.8472 19.9776C31.4905 13.1606 29.7483 7.25031 26.2421 2.00996ZM10.3433 16.3611C8.81313 16.3611 7.55828 14.9315 7.55828 13.1905C7.55828 11.4496 8.78632 10.0174 10.3433 10.0174C11.9003 10.0174 13.1551 11.4471 13.1283 13.1905C13.1308 14.9315 11.9003 16.3611 10.3433 16.3611ZM20.6355 16.3611C19.1053 16.3611 17.8504 14.9315 17.8504 13.1905C17.8504 11.4496 19.0785 10.0174 20.6355 10.0174C22.1924 10.0174 23.4473 11.4471 23.4205 13.1905C23.4205 14.9315 22.1924 16.3611 20.6355 16.3611Z",
              }),
              (0, a.jsx)("path", {
                d: "M41.6289 6.12256H48.2808C49.8841 6.12256 51.2388 6.3791 52.3499 6.88968C53.4586 7.40027 54.2894 8.1126 54.8401 9.02418C55.3908 9.93576 55.6685 10.9793 55.6685 12.1549C55.6685 13.3056 55.381 14.3492 54.806 15.2832C54.2309 16.2197 53.3562 16.9594 52.1793 17.5049C51.0025 18.0503 49.5454 18.3243 47.8032 18.3243H41.6289V6.12256ZM47.735 15.2234C48.8144 15.2234 49.6453 14.947 50.2252 14.3965C50.8051 13.8436 51.0951 13.0914 51.0951 12.1375C51.0951 11.2533 50.8368 10.5485 50.3202 10.0204C49.8037 9.49242 49.0215 9.22592 47.9762 9.22592H45.8954V15.2234H47.735Z",
              }),
              (0, a.jsx)("path", {
                d: "M65.6272 18.3094C64.7061 18.0654 63.8752 17.7117 63.137 17.2459V14.3518C63.6949 14.7926 64.443 15.1563 65.3811 15.4427C66.3191 15.7266 67.2256 15.8686 68.1027 15.8686C68.5121 15.8686 68.8215 15.8138 69.0311 15.7042C69.2406 15.5946 69.3454 15.4626 69.3454 15.3107C69.3454 15.1363 69.2894 14.9919 69.1748 14.8748C69.0603 14.7578 68.8386 14.6606 68.5096 14.5784L66.4629 14.1077C65.2909 13.8287 64.46 13.4427 63.9654 12.947C63.4708 12.4539 63.2247 11.8063 63.2247 11.0043C63.2247 10.3294 63.4391 9.74406 63.8728 9.24343C64.3041 8.74281 64.9181 8.35676 65.7149 8.08528C66.5116 7.8113 67.4424 7.67432 68.5121 7.67432C69.4672 7.67432 70.342 7.77892 71.1387 7.98814C71.9355 8.19736 72.5934 8.46386 73.1172 8.79013V11.5274C72.5812 11.2011 71.9672 10.9446 71.2654 10.7503C70.5661 10.5585 69.8473 10.4639 69.1066 10.4639C68.0369 10.4639 67.5033 10.6507 67.5033 11.0218C67.5033 11.1961 67.5862 11.3256 67.7519 11.4128C67.9176 11.5 68.2221 11.5896 68.6631 11.6843L70.3688 11.9981C71.4823 12.1949 72.3132 12.5411 72.859 13.0342C73.4047 13.5274 73.6777 14.2571 73.6777 15.2235C73.6777 16.282 73.2269 17.1214 72.3229 17.7441C71.4189 18.3667 70.1373 18.6781 68.4755 18.6781C67.4985 18.6756 66.5482 18.5535 65.6272 18.3094Z",
              }),
              (0, a.jsx)("path", {
                d: "M77.703 17.9432C76.726 17.455 75.9877 16.7925 75.4955 15.9557C75.0033 15.1188 74.7548 14.1773 74.7548 13.1312C74.7548 12.0852 75.0106 11.1487 75.5223 10.3243C76.034 9.49986 76.7844 8.85229 77.7737 8.38155C78.763 7.91082 79.9447 7.6767 81.3214 7.6767C83.027 7.6767 84.4426 8.04282 85.5683 8.77508V11.9656C85.1712 11.6867 84.7082 11.46 84.1795 11.2857C83.6508 11.1113 83.0855 11.0241 82.4812 11.0241C81.4237 11.0241 80.5977 11.2209 80.0007 11.6169C79.4038 12.0129 79.1041 12.5285 79.1041 13.1686C79.1041 13.7962 79.394 14.3093 79.9739 14.7128C80.5538 15.1138 81.3945 15.3156 82.4982 15.3156C83.066 15.3156 83.6264 15.2309 84.1795 15.064C84.7302 14.8946 85.2053 14.6879 85.6025 14.4438V17.5297C84.3525 18.2969 82.9027 18.6804 81.2531 18.6804C79.8643 18.6755 78.6801 18.4314 77.703 17.9432Z",
              }),
              (0, a.jsx)("path", {
                d: "M89.8227 17.9433C88.8383 17.4551 88.0878 16.7876 87.5713 15.9383C87.0547 15.089 86.794 14.1425 86.794 13.0965C86.794 12.0504 87.0523 11.1164 87.5713 10.297C88.0903 9.47754 88.8359 8.83495 89.8154 8.3692C90.7925 7.90345 91.9596 7.67181 93.3119 7.67181C94.6642 7.67181 95.8313 7.90345 96.8084 8.3692C97.7855 8.83495 98.5311 9.47256 99.0428 10.287C99.5544 11.1015 99.8103 12.0354 99.8103 13.094C99.8103 14.1401 99.5544 15.0865 99.0428 15.9358C98.5311 16.7851 97.783 17.4526 96.7987 17.9408C95.8143 18.429 94.652 18.6731 93.3095 18.6731C91.9669 18.6731 90.8046 18.4315 89.8227 17.9433ZM95.0053 14.8499C95.4195 14.4265 95.6291 13.8661 95.6291 13.1687C95.6291 12.4713 95.422 11.9159 95.0053 11.5049C94.5911 11.0915 94.0258 10.8848 93.3095 10.8848C92.5809 10.8848 92.0108 11.0915 91.5941 11.5049C91.1799 11.9184 90.9728 12.4713 90.9728 13.1687C90.9728 13.8661 91.1799 14.4265 91.5941 14.8499C92.0083 15.2733 92.5809 15.4875 93.3095 15.4875C94.0258 15.485 94.5911 15.2733 95.0053 14.8499Z",
              }),
              (0, a.jsx)("path", {
                d: "M110.059 8.31931V12.0852C109.625 11.7938 109.065 11.6493 108.37 11.6493C107.461 11.6493 106.76 11.9308 106.272 12.4937C105.782 13.0565 105.539 13.9333 105.539 15.1188V18.3268H101.36V8.12753H105.454V11.3704C105.68 10.1848 106.048 9.31059 106.555 8.74521C107.059 8.18232 107.712 7.90088 108.507 7.90088C109.108 7.90088 109.625 8.04036 110.059 8.31931Z",
              }),
              (0, a.jsx)("path", {
                d: "M123.942 5.77393V18.3268H119.763V16.0429C119.41 16.9022 118.874 17.5572 118.153 18.0056C117.432 18.4514 116.54 18.6755 115.482 18.6755C114.537 18.6755 113.713 18.4414 113.009 17.9707C112.305 17.5 111.762 16.8549 111.379 16.0354C110.999 15.216 110.806 14.2895 110.806 13.2534C110.794 12.1849 110.997 11.226 111.413 10.3767C111.827 9.52735 112.415 8.86483 113.17 8.38912C113.925 7.9134 114.788 7.6743 115.755 7.6743C117.746 7.6743 119.081 8.55848 119.763 10.3244V5.77393H123.942ZM119.14 14.7802C119.566 14.3567 119.778 13.8063 119.778 13.1338C119.778 12.4838 119.571 11.9533 119.157 11.5473C118.742 11.1413 118.175 10.9371 117.461 10.9371C116.757 10.9371 116.194 11.1438 115.772 11.5572C115.351 11.9707 115.141 12.5062 115.141 13.1687C115.141 13.8312 115.351 14.3717 115.772 14.7901C116.194 15.2085 116.749 15.4178 117.444 15.4178C118.148 15.4153 118.713 15.2036 119.14 14.7802Z",
              }),
              (0, a.jsx)("path", {
                d: "M59.1896 9.21341C60.3401 9.21341 61.2728 8.35701 61.2728 7.30058C61.2728 6.24416 60.3401 5.38776 59.1896 5.38776C58.039 5.38776 57.1063 6.24416 57.1063 7.30058C57.1063 8.35701 58.039 9.21341 59.1896 9.21341Z",
              }),
              (0, a.jsx)("path", {
                d: "M57.1044 10.531C58.3811 11.0939 59.9649 11.1188 61.2709 10.531V18.3816H57.1044V10.531Z",
              }),
            ],
          }),
        });
      }
    },
    966724: function (e, s, t) {
      e.exports = {
        modalRoot: "modalRoot_ea3568",
        backgroundImage: "backgroundImage_ea3568",
        background: "background_ea3568",
        modalContent: "modalContent_ea3568",
        closeIcon: "closeIcon_ea3568",
        intro: "intro_ea3568",
        thankYou: "thankYou_ea3568",
        bottomHalf: "bottomHalf_ea3568",
        question: "question_ea3568",
        answers: "answers_ea3568",
        gridFour: "gridFour_ea3568",
        footer: "footer_ea3568",
        notify: "notify_ea3568",
        selectAll: "selectAll_ea3568",
        answerLabel: "answerLabel_ea3568",
        disabled: "disabled_ea3568",
        answerText: "answerText_ea3568",
        checked: "checked_ea3568",
        answerIcon: "answerIcon_ea3568",
      };
    },
  },
]);
//# sourceMappingURL=de8a1c4bf8db4a669395.js.map
