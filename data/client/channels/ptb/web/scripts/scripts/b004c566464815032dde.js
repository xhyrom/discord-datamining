"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["22583"],
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
            return E;
          },
        });
      var c = n(735250),
        l = n(470079),
        i = n(481060),
        a = n(561716),
        r = n(721383),
        s = n(313201),
        o = n(63063),
        u = n(857595),
        _ = n(981631),
        d = n(689938),
        h = n(312573);
      function E(e) {
        let { transitionState: t, onClose: n } = e,
          E = (0, s.Dt)();
        return (
          l.useEffect(() => {
            u.r_();
          }, []),
          (0, c.jsxs)(i.ModalRoot, {
            transitionState: t,
            role: "alertdialog",
            "aria-labelledby": E,
            children: [
              (0, c.jsxs)(i.ModalContent, {
                className: h.content,
                children: [
                  (0, c.jsx)(i.Heading, {
                    variant: "heading-xl/semibold",
                    id: E,
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
                          (0, c.jsx)(i.KeyCombo, { shortcut: r._.binds["0"] }),
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
                        { link: o.Z.getArticleURL(_.BhN.KEYBOARD_NAVIGATION) },
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
          return U;
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
          return x;
        },
      }),
        n(757143),
        n(47120);
      var c = n(570140),
        l = n(493683),
        i = n(475179),
        a = n(925549),
        r = n(287734),
        s = n(212819),
        o = n(336197),
        u = n(359110),
        _ = n(769654),
        d = n(131704),
        h = n(592125),
        E = n(283595),
        f = n(944486),
        p = n(914010),
        C = n(626135),
        T = n(777754),
        A = n(823385),
        I = n(981631),
        S = n(176505);
      let R = () => Promise.resolve();
      R = n(346329).playApplication;
      let N = Object.freeze({
          [s.xQ.USER]: s.h8.USER,
          [s.xQ.TEXT_CHANNEL]: s.h8.TEXT_CHANNEL,
          [s.xQ.VOICE_CHANNEL]: s.h8.VOICE_CHANNEL,
          [s.xQ.GUILD]: s.h8.GUILD,
          [s.xQ.APPLICATION]: s.h8.APPLICATION,
        }),
        g = new RegExp(
          "^"
            .concat(s.xQ.USER, "|")
            .concat(s.xQ.TEXT_CHANNEL, "|")
            .concat(s.xQ.VOICE_CHANNEL, "|\\")
            .concat(s.xQ.GUILD, "|\\")
            .concat(s.xQ.APPLICATION),
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
          } = A.Z.getProps(),
          a = p.Z.getGuildId(),
          r = f.Z.getChannelId(a),
          o = n[(0, s.gJ)(s.a8.DOWN, -1, n)],
          u = T.Z.isEmail(l),
          _ = T.Z.isPhoneNumber(l),
          E = T.Z.isUserTagLike(l),
          I = null != r && (0, S.AB)(r),
          R = (e) =>
            null == e
              ? null
              : e.type === s.h8.IN_APP_NAVIGATION
                ? e.type + "_" + e.record.type
                : e.type,
          N = {
            current_channel_id: I ? void 0 : r,
            current_channel_static_route: I ? r : void 0,
            current_guild_id: a,
            query_mode: null != c ? c : "GENERAL",
            query_length: l.length,
            max_query_length: i,
            is_email_like: u,
            is_phone_like: _,
            is_username_like: E,
            query: u || _ || E ? null : l,
            top_result_type: R(o),
            top_result_score: null != o ? o.score : null,
            num_results_total: A.Z.getResultTotals(),
            num_results_users: A.Z.getResultTotals(s.h8.USER),
            num_results_text_channels: A.Z.getResultTotals(s.h8.TEXT_CHANNEL),
            num_results_voice_channels: A.Z.getResultTotals(s.h8.VOICE_CHANNEL),
            num_results_guilds: A.Z.getResultTotals(s.h8.GUILD),
            num_results_group_dms: A.Z.getResultTotals(s.h8.GROUP_DM),
          };
        if (null != r) {
          let e = h.Z.getChannel(r);
          N.current_channel_type = null != e ? e.type : null;
        }
        if (null != t) {
          let { type: e, score: c, record: l } = t;
          switch (
            ((N.selected_type = R(t)),
            (N.selected_score = c),
            (N.selected_index = n.indexOf(t)),
            e)
          ) {
            case s.h8.GUILD:
              N.selected_guild_id = l.id;
              break;
            case s.h8.TEXT_CHANNEL:
            case s.h8.VOICE_CHANNEL:
              l instanceof d.Sf &&
                (N.selected_guild_id = null != l.guild_id ? l.guild_id : null),
                (N.selected_channel_id = l.id);
              break;
            case s.h8.GROUP_DM:
              N.selected_channel_id = l.id;
              break;
            case s.h8.USER:
              N.selected_user_id = l.id;
          }
        }
        C.default.track(e, N);
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
          if (A.Z.isOpen()) return;
          let n = p.Z.getGuildId(),
            c = f.Z.getChannelId(n);
          if (null != c) {
            let e = h.Z.getChannel(c);
            t = null != e ? e.type : null;
          }
          C.default.track(I.rMx.QUICKSWITCHER_OPENED, {
            source: e,
            current_guild_id: n,
            current_channel_id: c,
            current_channel_type: t,
          });
        })(e),
          c.Z.dispatch({ type: "QUICKSWITCHER_SHOW", ...O(t) });
      }
      function U() {
        L(I.rMx.QUICKSWITCHER_CLOSED), m();
      }
      function x(e) {
        c.Z.dispatch({ type: "QUICKSWITCHER_SEARCH", ...O(e) });
      }
      function H(e) {
        c.Z.dispatch({ type: "QUICKSWITCHER_SELECT", selectedIndex: e });
      }
      function y(e) {
        let t,
          n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        m(), L(I.rMx.QUICKSWITCHER_RESULT_SELECTED, e);
        let { type: d, record: f } = e,
          p = { page: I.ZY5.QUICK_SWITCHER };
        switch (d) {
          case s.h8.GUILD:
            (0, _.X)(f.id, { navigationReplace: !0 });
            break;
          case s.h8.TEXT_CHANNEL:
            null != (t = h.Z.getChannel(f.id)) &&
              (0, u.Kh)(t.id, {
                state: { analyticsSource: p },
                navigationReplace: !0,
              });
            break;
          case s.h8.VOICE_CHANNEL:
            null != (t = h.Z.getChannel(f.id)) &&
              (n
                ? i.Z.updateChatOpen(f.id, !0)
                : r.default.selectVoiceChannel(f.id),
              (0, u.Kh)(t.id, {
                state: { analyticsSource: p },
                navigationReplace: !0,
              }));
            break;
          case s.h8.USER:
            l.Z.openPrivateChannel([f.id], !1, !1, "Quickswitcher"),
              a.Z.channelListScrollTo(I.ME, h.Z.getDMFromUserId(f.id));
            break;
          case s.h8.GROUP_DM:
            (0, u.Kh)(f.id, { navigationReplace: !0 }),
              a.Z.channelListScrollTo(I.ME, f.id);
            break;
          case s.h8.APPLICATION:
            let C = E.Z.getActiveLibraryApplication(f.id);
            R(f.id, C, {
              analyticsParams: {
                source: I.Sbl.QUICK_SWITCHER,
                location: I.Sbl.QUICK_SWITCHER,
              },
            });
            break;
          case s.h8.LINK:
            (0, o.Z)(f.path, { navigationReplace: !0 });
            break;
          case s.h8.IN_APP_NAVIGATION:
            (0, o.Z)(f.path, { navigationReplace: !0 });
        }
        c.Z.dispatch({ type: "QUICKSWITCHER_SWITCH_TO", result: e });
      }
    },
    850840: function (e, t, n) {
      let c;
      n(653041);
      var l,
        i = n(442837),
        a = n(570140);
      function r(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      let s = { hasAcceptedStoreTerms: !1, hasAcceptedEulaIds: [] };
      class o extends (l = i.ZP.PersistedStore) {
        initialize(e) {
          c = null != e ? e : s;
        }
        getState() {
          return c;
        }
        get hasAcceptedStoreTerms() {
          return c.hasAcceptedStoreTerms;
        }
        hasAcceptedEULA(e) {
          return c.hasAcceptedEulaIds.includes(e);
        }
      }
      r(o, "displayName", "ApplicationStoreUserSettingsStore"),
        r(o, "persistKey", "ApplicationStoreUserSettingsStore"),
        r(o, "migrations", [
          (e) =>
            null == e.hasAcceptedEulaIds ? { ...e, hasAcceptedEulaIds: [] } : e,
        ]),
        (t.Z = new o(a.Z, {
          APPLICATION_STORE_ACCEPT_STORE_TERMS: function () {
            c.hasAcceptedStoreTerms = !0;
          },
          APPLICATION_STORE_ACCEPT_EULA: function (e) {
            let { eulaId: t } = e;
            if (c.hasAcceptedEulaIds.includes(t)) return !1;
            c.hasAcceptedEulaIds.push(t);
          },
        }));
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
//# sourceMappingURL=b004c566464815032dde.js.map
