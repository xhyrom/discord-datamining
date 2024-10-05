"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["21373"],
  {
    561716: function (e, t, n) {
      n.d(t, {
        $: function () {
          return i;
        },
      });
      var c = n(51596),
        l = n(819640);
      let i = {
        binds: ["mod+k", "mod+t"],
        comboKeysBindGlobal: !0,
        action: () => (!l.Z.hasLayers() && (0, c.$Z)(), !1),
      };
    },
    721383: function (e, t, n) {
      n.d(t, {
        _: function () {
          return a;
        },
      });
      var c = n(481060),
        l = n(191980),
        i = n(285371);
      let a = {
        binds: ["mod+/", "mod+shift+/"],
        comboKeysBindGlobal: !0,
        action: () => ((0, c.hasModalOpen)(i.J) ? l.C() : l.$(), !1),
      };
    },
    461964: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        });
      var c = n(735250),
        l = n(470079),
        i = n(481060),
        a = n(561716),
        o = n(721383),
        r = n(313201),
        s = n(63063),
        _ = n(857595),
        u = n(981631),
        d = n(689938),
        h = n(312573);
      function f(e) {
        let { transitionState: t, onClose: n } = e,
          f = (0, r.Dt)();
        return (
          l.useEffect(() => {
            _.r_();
          }, []),
          (0, c.jsxs)(i.ModalRoot, {
            transitionState: t,
            role: "alertdialog",
            "aria-labelledby": f,
            children: [
              (0, c.jsxs)(i.ModalContent, {
                className: h.content,
                children: [
                  (0, c.jsx)(i.Heading, {
                    variant: "heading-xl/semibold",
                    id: f,
                    className: h.header,
                    children:
                      d.Z.Messages.KEYBOARD_SHORTCUTS_EXPLAINER_MODAL_TITLE.format(
                        {
                          tab: (e, t) =>
                            (0, c.jsx)(
                              i.KeyCombo,
                              { shortcut: "tab", className: h.headerShortcut },
                              t,
                            ),
                        },
                      ),
                  }),
                  (0, c.jsx)(i.Text, {
                    variant: "text-md/normal",
                    children:
                      d.Z.Messages.KEYBOARD_SHORTCUTS_EXPLAINER_MODAL_BODY,
                  }),
                  (0, c.jsxs)("ul", {
                    className: h.tips,
                    children: [
                      (0, c.jsxs)("li", {
                        children: [
                          (0, c.jsx)(i.KeyCombo, { shortcut: o._.binds["0"] }),
                          (0, c.jsx)(i.Text, {
                            variant: "text-md/normal",
                            children:
                              d.Z.Messages
                                .KEYBOARD_SHORTCUTS_EXPLAINER_LIST_SHORTCUT,
                          }),
                        ],
                      }),
                      (0, c.jsxs)("li", {
                        children: [
                          (0, c.jsx)(i.KeyCombo, { shortcut: a.$.binds["0"] }),
                          (0, c.jsx)(i.Text, {
                            variant: "text-md/normal",
                            children:
                              d.Z.Messages
                                .KEYBOARD_SHORTCUTS_EXPLAINER_QUICKSWITCHER_SHORTCUT,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, c.jsx)(i.Text, {
                    variant: "text-md/normal",
                    children:
                      d.Z.Messages.KEYBOARD_SHORTCUTS_EXPLAINER_HELP_CENTER_LINK.format(
                        { link: s.Z.getArticleURL(u.BhN.KEYBOARD_NAVIGATION) },
                      ),
                  }),
                ],
              }),
              (0, c.jsx)(i.ModalFooter, {
                children: (0, c.jsx)(i.Button, {
                  onClick: n,
                  color: i.Button.Colors.BRAND,
                  size: i.Button.Sizes.SMALL,
                  autoFocus: !0,
                  children: d.Z.Messages.OKAY,
                }),
              }),
            ],
          })
        );
      }
    },
    191980: function (e, t, n) {
      n.d(t, {
        $: function () {
          return l;
        },
        C: function () {
          return i;
        },
      });
      var c = n(570140);
      function l() {
        c.Z.dispatch({ type: "SHOW_KEYBOARD_SHORTCUTS" });
      }
      function i() {
        c.Z.dispatch({ type: "HIDE_KEYBOARD_SHORTCUTS" });
      }
    },
    285371: function (e, t, n) {
      n.d(t, {
        J: function () {
          return c;
        },
      });
      let c = "KEYBOARD_SHORTCUT_MODAL_KEY";
    },
    51596: function (e, t, n) {
      n.d(t, {
        $Z: function () {
          return Z;
        },
        Cp: function () {
          return x;
        },
        F_: function () {
          return O;
        },
        Se: function () {
          return y;
        },
        tF: function () {
          return H;
        },
        yC: function () {
          return U;
        },
      }),
        n(757143),
        n(47120);
      var c = n(570140),
        l = n(493683),
        i = n(475179),
        a = n(925549),
        o = n(287734),
        r = n(212819),
        s = n(336197),
        _ = n(359110),
        u = n(769654),
        d = n(131704),
        h = n(592125),
        f = n(283595),
        E = n(944486),
        C = n(914010),
        T = n(626135),
        p = n(777754),
        I = n(823385),
        R = n(981631),
        A = n(176505);
      let S = () => Promise.resolve();
      S = n(346329).playApplication;
      let N = Object.freeze({
          [r.xQ.USER]: r.h8.USER,
          [r.xQ.TEXT_CHANNEL]: r.h8.TEXT_CHANNEL,
          [r.xQ.VOICE_CHANNEL]: r.h8.VOICE_CHANNEL,
          [r.xQ.GUILD]: r.h8.GUILD,
          [r.xQ.APPLICATION]: r.h8.APPLICATION,
        }),
        g = new RegExp(
          "^"
            .concat(r.xQ.USER, "|")
            .concat(r.xQ.TEXT_CHANNEL, "|")
            .concat(r.xQ.VOICE_CHANNEL, "|\\")
            .concat(r.xQ.GUILD, "|\\")
            .concat(r.xQ.APPLICATION),
        );
      function O(e) {
        var t, n;
        let c;
        let [l, i] =
          ((c = null !== (n = N[(t = e).charAt(0)]) && void 0 !== n ? n : null),
          [t.replace(g, ""), c]);
        return { query: l, queryMode: i };
      }
      function L(e, t) {
        let {
            results: n,
            queryMode: c,
            query: l,
            maxQueryLength: i,
          } = I.Z.getProps(),
          a = C.Z.getGuildId(),
          o = E.Z.getChannelId(a),
          s = n[(0, r.gJ)(r.a8.DOWN, -1, n)],
          _ = p.Z.isEmail(l),
          u = p.Z.isPhoneNumber(l),
          f = p.Z.isUserTagLike(l),
          R = null != o && (0, A.AB)(o),
          S = (e) =>
            null == e
              ? null
              : e.type === r.h8.IN_APP_NAVIGATION
                ? e.type + "_" + e.record.type
                : e.type,
          N = {
            current_channel_id: R ? void 0 : o,
            current_channel_static_route: R ? o : void 0,
            current_guild_id: a,
            query_mode: null != c ? c : "GENERAL",
            query_length: l.length,
            max_query_length: i,
            is_email_like: _,
            is_phone_like: u,
            is_username_like: f,
            query: _ || u || f ? null : l,
            top_result_type: S(s),
            top_result_score: null != s ? s.score : null,
            num_results_total: I.Z.getResultTotals(),
            num_results_users: I.Z.getResultTotals(r.h8.USER),
            num_results_text_channels: I.Z.getResultTotals(r.h8.TEXT_CHANNEL),
            num_results_voice_channels: I.Z.getResultTotals(r.h8.VOICE_CHANNEL),
            num_results_guilds: I.Z.getResultTotals(r.h8.GUILD),
            num_results_group_dms: I.Z.getResultTotals(r.h8.GROUP_DM),
          };
        if (null != o) {
          let e = h.Z.getChannel(o);
          N.current_channel_type = null != e ? e.type : null;
        }
        if (null != t) {
          let { type: e, score: c, record: l } = t;
          switch (
            ((N.selected_type = S(t)),
            (N.selected_score = c),
            (N.selected_index = n.indexOf(t)),
            e)
          ) {
            case r.h8.GUILD:
              N.selected_guild_id = l.id;
              break;
            case r.h8.TEXT_CHANNEL:
            case r.h8.VOICE_CHANNEL:
              l instanceof d.Sf &&
                (N.selected_guild_id = null != l.guild_id ? l.guild_id : null),
                (N.selected_channel_id = l.id);
              break;
            case r.h8.GROUP_DM:
              N.selected_channel_id = l.id;
              break;
            case r.h8.USER:
              N.selected_user_id = l.id;
          }
        }
        T.default.track(e, N);
      }
      function m() {
        c.Z.dispatch({ type: "QUICKSWITCHER_HIDE" });
      }
      function Z() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "KEYBIND",
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        !(function (e) {
          let t;
          if (I.Z.isOpen()) return;
          let n = C.Z.getGuildId(),
            c = E.Z.getChannelId(n);
          if (null != c) {
            let e = h.Z.getChannel(c);
            t = null != e ? e.type : null;
          }
          T.default.track(R.rMx.QUICKSWITCHER_OPENED, {
            source: e,
            current_guild_id: n,
            current_channel_id: c,
            current_channel_type: t,
          });
        })(e),
          c.Z.dispatch({ type: "QUICKSWITCHER_SHOW", ...O(t) });
      }
      function x() {
        L(R.rMx.QUICKSWITCHER_CLOSED), m();
      }
      function U(e) {
        c.Z.dispatch({ type: "QUICKSWITCHER_SEARCH", ...O(e) });
      }
      function H(e) {
        c.Z.dispatch({ type: "QUICKSWITCHER_SELECT", selectedIndex: e });
      }
      function y(e) {
        let t,
          n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        m(), L(R.rMx.QUICKSWITCHER_RESULT_SELECTED, e);
        let { type: d, record: E } = e,
          C = { page: R.ZY5.QUICK_SWITCHER };
        switch (d) {
          case r.h8.GUILD:
            (0, u.X)(E.id, { navigationReplace: !0 });
            break;
          case r.h8.TEXT_CHANNEL:
            null != (t = h.Z.getChannel(E.id)) &&
              (0, _.Kh)(t.id, {
                state: { analyticsSource: C },
                navigationReplace: !0,
              });
            break;
          case r.h8.VOICE_CHANNEL:
            null != (t = h.Z.getChannel(E.id)) &&
              (n
                ? i.Z.updateChatOpen(E.id, !0)
                : o.default.selectVoiceChannel(E.id),
              (0, _.Kh)(t.id, {
                state: { analyticsSource: C },
                navigationReplace: !0,
              }));
            break;
          case r.h8.USER:
            l.Z.openPrivateChannel([E.id], !1, !1, "Quickswitcher"),
              a.Z.channelListScrollTo(R.ME, h.Z.getDMFromUserId(E.id));
            break;
          case r.h8.GROUP_DM:
            (0, _.Kh)(E.id, { navigationReplace: !0 }),
              a.Z.channelListScrollTo(R.ME, E.id);
            break;
          case r.h8.APPLICATION:
            let T = f.Z.getActiveLibraryApplication(E.id);
            S(E.id, T, {
              analyticsParams: {
                source: R.Sbl.QUICK_SWITCHER,
                location: R.Sbl.QUICK_SWITCHER,
              },
            });
            break;
          case r.h8.LINK:
            (0, s.Z)(E.path, { navigationReplace: !0 });
            break;
          case r.h8.IN_APP_NAVIGATION:
            (0, s.Z)(E.path, { navigationReplace: !0 });
        }
        c.Z.dispatch({ type: "QUICKSWITCHER_SWITCH_TO", result: e });
      }
    },
    621839: function (e, t, n) {
      e.exports = {
        closeButton: "closeButton_e3c9f3",
        description: "description_e3c9f3",
        conflictButton: "conflictButton_e3c9f3",
        linkButtonSize: "linkButtonSize_e3c9f3",
        linkButton: "linkButton_e3c9f3",
        retryButton: "retryButton_e3c9f3",
        conflictButtonInner: "conflictButtonInner_e3c9f3",
        buttonBody: "buttonBody_e3c9f3",
        timestamp: "timestamp_e3c9f3",
        choiceWrapper: "choiceWrapper_e3c9f3",
        choiceLine: "choiceLine_e3c9f3",
        choiceTitle: "choiceTitle_e3c9f3 title_e3c9f3",
        conflictTitle: "conflictTitle_e3c9f3 title_e3c9f3",
        conflictUploadArt:
          "conflictUploadArt_e3c9f3 conflictArt_e3c9f3 art_e3c9f3",
        conflictDownloadArt:
          "conflictDownloadArt_e3c9f3 conflictArt_e3c9f3 art_e3c9f3",
        errorArt: "errorArt_e3c9f3 art_e3c9f3",
        modal: "modal_e3c9f3",
      };
    },
    312573: function (e, t, n) {
      e.exports = {
        content: "content_ca0caf",
        header: "header_ca0caf",
        headerShortcut: "headerShortcut_ca0caf",
        tips: "tips_ca0caf",
      };
    },
  },
]);
//# sourceMappingURL=417284ecc280379c8e41.js.map
