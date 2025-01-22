"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["39362"],
  {
    561716: function (t, e, n) {
      n.d(e, {
        $: function () {
          return l;
        },
      });
      var c = n(51596),
        i = n(819640);
      let l = {
        binds: ["mod+k", "mod+t"],
        comboKeysBindGlobal: !0,
        action: () => (!i.Z.hasLayers() && (0, c.$Z)(), !1),
      };
    },
    721383: function (t, e, n) {
      n.d(e, {
        _: function () {
          return a;
        },
      });
      var c = n(481060),
        i = n(191980),
        l = n(285371);
      let a = {
        binds: ["mod+/", "mod+shift+/"],
        comboKeysBindGlobal: !0,
        action: () => ((0, c.hasModalOpen)(l.J) ? i.C() : i.$(), !1),
      };
    },
    461964: function (t, e, n) {
      n.r(e),
        n.d(e, {
          default: function () {
            return f;
          },
        });
      var c = n(200651),
        i = n(192379),
        l = n(481060),
        a = n(561716),
        o = n(721383),
        r = n(313201),
        s = n(63063),
        u = n(857595),
        d = n(981631),
        _ = n(388032),
        h = n(549164);
      function f(t) {
        let { transitionState: e, onClose: n } = t,
          f = (0, r.Dt)();
        return (
          i.useEffect(() => {
            u.r_();
          }, []),
          (0, c.jsxs)(l.ModalRoot, {
            transitionState: e,
            role: "alertdialog",
            "aria-labelledby": f,
            children: [
              (0, c.jsxs)(l.ModalContent, {
                className: h.content,
                children: [
                  (0, c.jsx)(l.Heading, {
                    variant: "heading-xl/semibold",
                    id: f,
                    className: h.header,
                    children: _.intl.format(_.t.V4fxrq, {
                      tab: (t, e) =>
                        (0, c.jsx)(
                          l.KeyCombo,
                          { shortcut: "tab", className: h.headerShortcut },
                          e,
                        ),
                    }),
                  }),
                  (0, c.jsx)(l.Text, {
                    variant: "text-md/normal",
                    children: _.intl.string(_.t["oQA/OD"]),
                  }),
                  (0, c.jsxs)("ul", {
                    className: h.tips,
                    children: [
                      (0, c.jsxs)("li", {
                        children: [
                          (0, c.jsx)(l.KeyCombo, { shortcut: o._.binds["0"] }),
                          (0, c.jsx)(l.Text, {
                            variant: "text-md/normal",
                            children: _.intl.string(_.t["43Qn2t"]),
                          }),
                        ],
                      }),
                      (0, c.jsxs)("li", {
                        children: [
                          (0, c.jsx)(l.KeyCombo, { shortcut: a.$.binds["0"] }),
                          (0, c.jsx)(l.Text, {
                            variant: "text-md/normal",
                            children: _.intl.string(_.t.zJg4FR),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, c.jsx)(l.Text, {
                    variant: "text-md/normal",
                    children: _.intl.format(_.t.EWFVSU, {
                      link: s.Z.getArticleURL(d.BhN.KEYBOARD_NAVIGATION),
                    }),
                  }),
                ],
              }),
              (0, c.jsx)(l.ModalFooter, {
                children: (0, c.jsx)(l.Button, {
                  onClick: n,
                  color: l.Button.Colors.BRAND,
                  size: l.Button.Sizes.SMALL,
                  autoFocus: !0,
                  children: _.intl.string(_.t.BddRzc),
                }),
              }),
            ],
          })
        );
      }
    },
    191980: function (t, e, n) {
      n.d(e, {
        $: function () {
          return i;
        },
        C: function () {
          return l;
        },
      });
      var c = n(570140);
      function i() {
        c.Z.dispatch({ type: "SHOW_KEYBOARD_SHORTCUTS" });
      }
      function l() {
        c.Z.dispatch({ type: "HIDE_KEYBOARD_SHORTCUTS" });
      }
    },
    285371: function (t, e, n) {
      n.d(e, {
        J: function () {
          return c;
        },
      });
      let c = "KEYBOARD_SHORTCUT_MODAL_KEY";
    },
    51596: function (t, e, n) {
      n.d(e, {
        $Z: function () {
          return Z;
        },
        Cp: function () {
          return y;
        },
        F_: function () {
          return m;
        },
        Se: function () {
          return b;
        },
        tF: function () {
          return U;
        },
        yC: function () {
          return O;
        },
      }),
        n(757143),
        n(47120);
      var c = n(570140),
        i = n(493683),
        l = n(475179),
        a = n(925549),
        o = n(287734),
        r = n(212819),
        s = n(336197),
        u = n(359110),
        d = n(769654),
        _ = n(131704),
        h = n(592125),
        f = n(283595),
        p = n(944486),
        C = n(914010),
        E = n(626135);
      if (12633 == n.j) var I = n(777754);
      var T = n(823385),
        A = n(981631),
        g = n(176505);
      let N = () => Promise.resolve();
      N = n(346329).playApplication;
      let R = Object.freeze({
          [r.xQ.USER]: r.h8.USER,
          [r.xQ.TEXT_CHANNEL]: r.h8.TEXT_CHANNEL,
          [r.xQ.VOICE_CHANNEL]: r.h8.VOICE_CHANNEL,
          [r.xQ.GUILD]: r.h8.GUILD,
          [r.xQ.APPLICATION]: r.h8.APPLICATION,
        }),
        S = new RegExp(
          "^"
            .concat(r.xQ.USER, "|")
            .concat(r.xQ.TEXT_CHANNEL, "|")
            .concat(r.xQ.VOICE_CHANNEL, "|\\")
            .concat(r.xQ.GUILD, "|\\")
            .concat(r.xQ.APPLICATION),
        );
      function m(t) {
        var e, n;
        let c;
        let [i, l] =
          ((c = null !== (n = R[(e = t).charAt(0)]) && void 0 !== n ? n : null),
          [e.replace(S, ""), c]);
        return { query: i, queryMode: l };
      }
      function x(t, e) {
        let {
            results: n,
            queryMode: c,
            query: i,
            maxQueryLength: l,
          } = T.Z.getProps(),
          a = C.Z.getGuildId(),
          o = p.Z.getChannelId(a),
          s = n[(0, r.gJ)(r.a8.DOWN, -1, n)],
          u = I.Z.isEmail(i),
          d = I.Z.isPhoneNumber(i),
          f = I.Z.isUserTagLike(i),
          A = null != o && (0, g.AB)(o),
          N = (t) =>
            null == t
              ? null
              : t.type === r.h8.IN_APP_NAVIGATION
                ? t.type + "_" + t.record.type
                : t.type,
          R = {
            current_channel_id: A ? void 0 : o,
            current_channel_static_route: A ? o : void 0,
            current_guild_id: a,
            query_mode: null != c ? c : "GENERAL",
            query_length: i.length,
            max_query_length: l,
            is_email_like: u,
            is_phone_like: d,
            is_username_like: f,
            query: u || d || f ? null : i,
            top_result_type: N(s),
            top_result_score: null != s ? s.score : null,
            num_results_total: T.Z.getResultTotals(),
            num_results_users: T.Z.getResultTotals(r.h8.USER),
            num_results_text_channels: T.Z.getResultTotals(r.h8.TEXT_CHANNEL),
            num_results_voice_channels: T.Z.getResultTotals(r.h8.VOICE_CHANNEL),
            num_results_guilds: T.Z.getResultTotals(r.h8.GUILD),
            num_results_group_dms: T.Z.getResultTotals(r.h8.GROUP_DM),
          };
        if (null != o) {
          let t = h.Z.getChannel(o);
          R.current_channel_type = null != t ? t.type : null;
        }
        if (null != e) {
          let { type: t, score: c, record: i } = e;
          switch (
            ((R.selected_type = N(e)),
            (R.selected_score = c),
            (R.selected_index = n.indexOf(e)),
            t)
          ) {
            case r.h8.GUILD:
              R.selected_guild_id = i.id;
              break;
            case r.h8.TEXT_CHANNEL:
            case r.h8.VOICE_CHANNEL:
              i instanceof _.Sf &&
                (R.selected_guild_id = null != i.guild_id ? i.guild_id : null),
                (R.selected_channel_id = i.id);
              break;
            case r.h8.GROUP_DM:
              R.selected_channel_id = i.id;
              break;
            case r.h8.USER:
              R.selected_user_id = i.id;
          }
        }
        E.default.track(t, R);
      }
      function L() {
        c.Z.dispatch({ type: "QUICKSWITCHER_HIDE" });
      }
      function Z() {
        let t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "KEYBIND",
          e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        !(function (t) {
          let e;
          if (T.Z.isOpen()) return;
          let n = C.Z.getGuildId(),
            c = p.Z.getChannelId(n);
          if (null != c) {
            let t = h.Z.getChannel(c);
            e = null != t ? t.type : null;
          }
          E.default.track(A.rMx.QUICKSWITCHER_OPENED, {
            source: t,
            current_guild_id: n,
            current_channel_id: c,
            current_channel_type: e,
          });
        })(t),
          c.Z.dispatch({ type: "QUICKSWITCHER_SHOW", ...m(e) });
      }
      function y() {
        x(A.rMx.QUICKSWITCHER_CLOSED), L();
      }
      function O(t) {
        c.Z.dispatch({ type: "QUICKSWITCHER_SEARCH", ...m(t) });
      }
      function U(t) {
        c.Z.dispatch({ type: "QUICKSWITCHER_SELECT", selectedIndex: t });
      }
      function b(t) {
        let e,
          n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        L(), x(A.rMx.QUICKSWITCHER_RESULT_SELECTED, t);
        let { type: _, record: p } = t,
          C = { page: A.ZY5.QUICK_SWITCHER };
        switch (_) {
          case r.h8.GUILD:
            (0, d.X)(p.id, { navigationReplace: !0 });
            break;
          case r.h8.TEXT_CHANNEL:
            null != (e = h.Z.getChannel(p.id)) &&
              (0, u.Kh)(e.id, {
                state: { analyticsSource: C },
                navigationReplace: !0,
              });
            break;
          case r.h8.VOICE_CHANNEL:
            null != (e = h.Z.getChannel(p.id)) &&
              (n
                ? l.Z.updateChatOpen(p.id, !0)
                : o.default.selectVoiceChannel(p.id),
              (0, u.Kh)(e.id, {
                state: { analyticsSource: C },
                navigationReplace: !0,
              }));
            break;
          case r.h8.USER:
            i.Z.openPrivateChannel([p.id], !1, !1, "Quickswitcher"),
              a.Z.channelListScrollTo(A.ME, h.Z.getDMFromUserId(p.id));
            break;
          case r.h8.GROUP_DM:
            (0, u.Kh)(p.id, { navigationReplace: !0 }),
              a.Z.channelListScrollTo(A.ME, p.id);
            break;
          case r.h8.APPLICATION:
            let E = f.Z.getActiveLibraryApplication(p.id);
            N(p.id, E, {
              analyticsParams: {
                source: A.Sbl.QUICK_SWITCHER,
                location: A.Sbl.QUICK_SWITCHER,
              },
            });
            break;
          case r.h8.LINK:
            (0, s.Z)(p.path, { navigationReplace: !0 });
            break;
          case r.h8.IN_APP_NAVIGATION:
            (0, s.Z)(p.path, { navigationReplace: !0 });
        }
        c.Z.dispatch({ type: "QUICKSWITCHER_SWITCH_TO", result: t });
      }
    },
    678099: function (t, e, n) {
      t.exports = {
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
    549164: function (t, e, n) {
      t.exports = {
        content: "content_ca0caf",
        header: "header_ca0caf",
        headerShortcut: "headerShortcut_ca0caf",
        tips: "tips_ca0caf",
      };
    },
  },
]);
//# sourceMappingURL=eddd5d7c5f745e77cf54.js.map
