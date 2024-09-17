"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["37220"],
  {
    112554: function (e, n, t) {
      t.d(n, {
        K: function () {
          return r;
        },
        b: function () {
          return s;
        },
      });
      var a = t(399606),
        i = t(375954),
        l = t(163268);
      let r = (e, n, t) => {
          var r, s;
          let o = (0, a.e7)([i.Z], () => i.Z.getMessage(e, n));
          if (null == o) return [];
          let u =
            void 0 !== t
              ? (e) => e.url === t
              : (e) =>
                  (0, l.KP)({ type: l.lJ.Attachment, media: e }, (0, l.HH)(o));
          return null !==
            (s =
              null == o
                ? void 0
                : null === (r = o.attachments) || void 0 === r
                  ? void 0
                  : r.filter(u)) && void 0 !== s
            ? s
            : [];
        },
        s = (e, n, t) => {
          var r, s;
          let o = (0, a.e7)([i.Z], () => i.Z.getMessage(e, n));
          if (null == o) return [];
          let u =
            void 0 !== t
              ? (e) => e.id === t
              : (e) => (0, l.KP)({ type: l.lJ.Embed, media: e }, (0, l.HH)(o));
          return null !==
            (s =
              null == o
                ? void 0
                : null === (r = o.embeds) || void 0 === r
                  ? void 0
                  : r.filter(u)) && void 0 !== s
            ? s
            : [];
        };
    },
    788679: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return E;
          },
        });
      var a = t(735250);
      t(470079);
      var i = t(481060),
        l = t(522664),
        r = t(651530),
        s = t(163268),
        o = t(668058),
        u = t(112554),
        d = t(160877),
        c = t(689938);
      function E(e) {
        let {
            channelId: n,
            messageId: t,
            mediaItemUrl: E,
            embedId: M,
            transitionState: I,
            onClose: m,
          } = e,
          g = (0, r.yh)(),
          _ = (0, u.K)(n, t, E),
          f = (0, u.b)(n, t, M),
          { reportFalsePositive: Z, isReportFalsePositiveLoading: S } = (0,
          o.$)({
            onSuccess: () => (0, d.s)(m),
            onError: () => {
              (0, i.showToast)(
                (0, i.createToast)(
                  c.Z.Messages.ERROR_GENERIC_TITLE,
                  i.ToastType.FAILURE,
                ),
              );
            },
            report: () => {
              (0, l.Uj)(
                n,
                t,
                _.map((e) => e.id),
                f.map((e) => e.id),
              );
            },
          });
        return (
          !(g && (_.length > 0 || f.length > 0)) && m(),
          (0, a.jsx)(d.$, {
            messageId: t,
            channelId: n,
            isReportFalsePositiveLoading: S,
            analyticsContext: s.UU.EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW,
            onConfirmPress: Z,
            attachmentPreview: 1 === _.length && 0 === f.length ? _[0] : void 0,
            embedPreview: 1 === f.length && 0 === _.length ? f[0] : void 0,
            transitionState: I,
            onClose: m,
          })
        );
      }
    },
    151007: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return r;
        },
      });
      var a = t(665906),
        i = t(901461),
        l = t(981631);
      function r(e, n, t) {
        return (
          !n.isSystemDM() &&
          !(0, i.Z)(e) &&
          (t || n.isPrivate()) &&
          (0, a.RG)(n) &&
          n.type !== l.d4z.GUILD_VOICE &&
          n.type !== l.d4z.GUILD_STAGE_VOICE
        );
      }
    },
    225138: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return w;
          },
          useMessageMenu: function () {
            return k;
          },
        });
      var a = t(735250);
      t(470079);
      var i = t(374470),
        l = t(481060),
        r = t(239091),
        s = t(911969),
        o = t(299206),
        u = t(26737),
        d = t(29264),
        c = t(905041),
        E = t(89013),
        M = t(988500),
        I = t(570870),
        m = t(786095),
        g = t(268623),
        _ = t(667922),
        f = t(941389),
        Z = t(449751),
        S = t(749339),
        A = t(601184),
        T = t(6148),
        v = t(519110),
        R = t(759875),
        h = t(168405),
        O = t(536639),
        N = t(720904),
        p = t(88791),
        x = t(385302),
        j = t(873699),
        b = t(134323),
        C = t(429260),
        D = t(1626),
        L = t(279329),
        P = t(627938),
        G = t(512303),
        y = t(481300),
        U = t(689938);
      function w(e) {
        var n, t;
        let a,
          l,
          s,
          o,
          {
            channel: u,
            message: d,
            target: c,
            mediaItem: E,
            shouldHideMediaOptions: M,
            onSelect: I,
            onHeightUpdate: m,
          } = e,
          g = c,
          _ = c.getAttribute("data-type"),
          f = c.getAttribute("data-id"),
          Z = c.getAttribute("data-name");
        if (null != E) l = a = s = E.url;
        else
          for (; (0, i.k)(g); )
            (0, i.k)(g, HTMLImageElement) && null != g.src && (l = g.src),
              (0, i.k)(g, HTMLAnchorElement) &&
                null != g.href &&
                ((a = g.href),
                (o = g.textContent),
                null == l &&
                  "img" === g.getAttribute("data-role") &&
                  ((l = a),
                  g.hasAttribute("data-safe-src") &&
                    "" !== g.getAttribute("data-safe-src") &&
                    (s = g.getAttribute("data-safe-src")))),
              (g = g.parentNode);
        return k({
          message: d,
          channel: u,
          mediaItem: E,
          textSelection:
            null !==
              (t =
                null === (n = document.getSelection()) || void 0 === n
                  ? void 0
                  : n.toString()) && void 0 !== t
              ? t
              : "",
          favoriteableType: _,
          favoriteableId: f,
          favoriteableName: Z,
          itemHref: a,
          itemSrc: l,
          itemSafeSrc: s,
          itemTextContent: o,
          canReport: !0,
          onHeightUpdate: m,
          onSelect: I,
          onClose: r.Zy,
          navId: "message",
          ariaLabel: U.Z.Messages.MESSAGE_ACTIONS_MENU_LABEL,
          shouldHideMediaOptions: M,
        });
      }
      function k(e) {
        let {
            message: n,
            channel: t,
            mediaItem: i,
            textSelection: r,
            favoriteableType: w,
            favoriteableId: k,
            favoriteableName: F,
            itemHref: V,
            itemSrc: z,
            itemSafeSrc: K,
            itemTextContent: X,
            canReport: H,
            onHeightUpdate: Y,
            onSelect: B,
            onClose: W,
            navId: q,
            ariaLabel: J,
            shouldHideMediaOptions: $ = !1,
          } = e,
          Q = (0, u.Z)(r),
          ee = (0, E.Z)(r),
          en = (0, N.Z)(n, t),
          et = (0, _.Z)(n, t),
          ea = (0, T.Z)(n, t),
          ei = (0, O.Z)(n, t),
          el = (0, v.Z)({ type: w, id: k, name: F }),
          er = (0, D.Z)(n, t),
          es = (0, h.Z)(n, t),
          eo = (0, p.Z)(n),
          eu = (0, f.Z)(n, t),
          ed = (0, Z.Z)(n, t),
          ec = (0, x.Z)(n, t),
          eE = (0, j.Z)(n, t),
          eM = (0, A.Z)(n, t),
          eI = (0, C.Z)(n),
          em = (0, L.Z)(n, t),
          eg = (0, c.Z)(null != V ? V : z, X, n, { shouldHideMediaOptions: $ }),
          e_ = (0, d.Z)(K, n, { shouldHideMediaOptions: $ }),
          ef = (0, y.Z)(n, i),
          eZ = (0, o.Z)({
            id: n.id,
            label: U.Z.Messages.COPY_ID_MESSAGE,
            shiftId: "".concat(n.channel_id, "-").concat(n.id),
          }),
          eS = (0, b.Z)(n, t),
          eA = (0, R.Z)(n, t),
          eT = (0, P.Z)(n, t),
          ev = (0, m.Z)(r, t.getGuildId()),
          eR = (0, g.Z)(n),
          eh = (0, S.Z)(n),
          eO = (0, I.Z)({
            commandType: s.yU.MESSAGE,
            commandTargetId: n.id,
            channel: t,
            guildId: void 0,
            onHeightUpdate: Y,
          }),
          eN = (0, G.Z)(n),
          ep = (0, M.Z)(n);
        return (0, a.jsxs)(l.Menu, {
          navId: q,
          onClose: W,
          "aria-label": J,
          onSelect: B,
          children: [
            (0, a.jsx)(l.MenuGroup, { children: Q }),
            (0, a.jsx)(l.MenuGroup, { children: ee }),
            (0, a.jsxs)(l.MenuGroup, {
              children: [
                "" === r ? en : null,
                et,
                eo,
                ea,
                ei,
                eR,
                el,
                eS,
                eA,
                eT,
                eh,
                eO,
                er,
                es,
                eu,
                ed,
                em,
                ep,
                eE,
                ec,
                eN,
                eM,
                H && eI,
              ],
            }),
            null != ev && (0, a.jsx)(l.MenuGroup, { children: ev }),
            (0, a.jsxs)(l.MenuGroup, { children: [e_, ef] }),
            (0, a.jsx)(l.MenuGroup, { children: eg }),
            (0, a.jsx)(l.MenuGroup, { children: eZ }),
          ],
        });
      }
    },
    786095: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return S;
        },
      }),
        t(47120),
        t(724458);
      var a = t(735250),
        i = t(470079),
        l = t(481060),
        r = t(239091),
        s = t(236413),
        o = t(727072),
        u = t(85960),
        d = t(676317),
        c = t(65912),
        E = t(556012),
        M = t(572456),
        I = t(434404),
        m = t(981631),
        g = t(273504),
        _ = t(689938),
        f = t(561240);
      let Z = g.fX.KEYWORD;
      function S(e, n) {
        let { perGuildMaxCount: t } = u.I6[Z],
          { isLoading: S, saveRule: A, errorMessage: T } = (0, c.w)(),
          { createNewEditingRule: v } = (0, c.V)(),
          [R, h] = i.useState(!1),
          [O, N] = (0, o.I2)(n),
          { rulesByTriggerType: p, updateRule: x } = (0, o.pH)(n),
          j = i.useMemo(() => {
            var e;
            return null !== (e = p[Z]) && void 0 !== e ? e : [];
          }, [p]),
          b = 0 === j.length,
          C = t > j.length && !b;
        if (
          !i.useMemo(() => (0, d.ze)(n), [n]) ||
          null == e ||
          0 === e.length ||
          null == n
        )
          return null;
        let D = e.split(" "),
          L = D.length;
        try {
          (0, s.km)(D, g.RH);
        } catch (e) {
          return null;
        }
        let P = () => {
            if (null != n)
              (0, r.Zy)(),
                I.Z.open(n, m.pNK.GUILD_AUTOMOD),
                setTimeout(() => {
                  v(n, Z, {
                    triggerMetadata: {
                      keywordFilter: [e],
                      regexPatterns: [],
                      allowList: [],
                    },
                  });
                }, 400);
          },
          G = async (n) => {
            var t, a;
            if (((0, r.Zy)(), !(await (0, M.XN)(n.name, e)))) return;
            let i = {
              ...n,
              triggerMetadata: {
                ...n.triggerMetadata,
                keywordFilter: [
                  ...(null !==
                    (a =
                      null === (t = n.triggerMetadata) || void 0 === t
                        ? void 0
                        : t.keywordFilter) && void 0 !== a
                    ? a
                    : []),
                  e,
                ],
              },
            };
            await A(i, j),
              x(i),
              null != T
                ? (0, l.showToast)(
                    (0, l.createToast)(
                      _.Z.Messages.GUILD_AUTOMOD_ADD_SELECTION_TOAST_ERROR,
                      l.ToastType.FAILURE,
                    ),
                  )
                : (0, l.showToast)(
                    (0, l.createToast)(
                      _.Z.Messages.GUILD_AUTOMOD_ADD_SELECTION_TOAST_SUCCESS,
                      l.ToastType.SUCCESS,
                    ),
                  );
          },
          y = (0, a.jsx)(a.Fragment, {
            children: (0, a.jsx)(l.MenuItem, {
              id: "automod-rules-loading",
              label: _.Z.Messages.LOADING,
            }),
          });
        return (
          !O &&
            (y = (0, a.jsxs)(a.Fragment, {
              children: [
                b &&
                  (0, a.jsx)(l.MenuItem, {
                    id: "add-first-rule",
                    label:
                      _.Z.Messages
                        .GUILD_SETTINGS_ACTION_FILTER_AUTOMOD_RULE_CREATE,
                    action: P,
                    disabled: S,
                  }),
                j.map((e) => {
                  let n = (0, u.V9)(Z).reduce((n, t) => {
                    let a = e.actions.find((e) => {
                      let { type: n } = e;
                      return t === n;
                    });
                    if (null == a) return n;
                    let i = (0, E.c)(t, a);
                    return (n += ", ".concat(
                      null == i ? void 0 : i.headerText,
                    ));
                  }, "");
                  return (0, a.jsx)(
                    l.MenuRadioItem,
                    {
                      id: e.id,
                      label: e.name,
                      subtext: (0, a.jsx)(l.Text, {
                        color: "text-muted",
                        className: f.actionTextHeader,
                        variant: "text-xs/normal",
                        children: n.slice(2),
                      }),
                      group: "automod-rule-selection",
                      checked: !1,
                      disabled: S,
                      action: () => G(e),
                    },
                    e.id,
                  );
                }),
                C &&
                  (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)(l.MenuSeparator, {}),
                      (0, a.jsx)(l.MenuItem, {
                        id: "add-another-rule",
                        label: _.Z.Messages.GUILD_AUTOMOD_ADD_NEW_RULE,
                        action: P,
                        disabled: S,
                      }),
                    ],
                  }),
              ],
            })),
          (0, a.jsx)(l.MenuItem, {
            id: "guild-automod-add-selection",
            label: _.Z.Messages.GUILD_AUTOMOD_ADD_SELECTION.format({
              keywordCount: L,
            }),
            onFocus: () => {
              if (!R) h(!0), N();
            },
            children: y,
          })
        );
      }
    },
    268623: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return _;
        },
      }),
        t(47120);
      var a = t(735250),
        i = t(470079),
        l = t(442837),
        r = t(481060),
        s = t(436774),
        o = t(2818),
        u = t(324701),
        d = t(575016),
        c = t(768943),
        E = t(175006),
        M = t(742989),
        I = t(898150),
        m = t(70956),
        g = t(689938);
      function _(e) {
        let { enabled: n } = o.Z.useExperiment({
            location: "LongPressMessageActionSheet",
          }),
          { showReminders: t } = M.Z.useExperiment({
            location: "LongPressMessageActionSheet",
          }),
          _ = (0, l.e7)([c.Z], () => c.Z.getSavedMessage(e.channel_id, e.id)),
          f = (function (e) {
            let { message: n, savedMessage: t } = e,
              [l, s] = i.useState(new Date());
            i.useEffect(() => {
              let e = setInterval(() => s(new Date()), m.Z.Millis.MINUTE);
              return () => {
                clearInterval(e);
              };
            }, []);
            let o = i.useCallback(
                (e) =>
                  (0, u.z)({
                    channelId: n.channel_id,
                    messageId: n.id,
                    dueAt: e,
                    displayToast: !0,
                  }),
                [n.channel_id, n.id],
              ),
              c = (0, I.useMessageReminderDurationSuggestions)({
                createReminder: o,
              }),
              { dueInText: E } = (0, d.A)({
                dueAt: null == t ? void 0 : t.saveData.dueAt,
                now: l,
                type: d.h.LONG,
              });
            return (null == t ? void 0 : t.saveData.dueAt) == null
              ? (0, a.jsx)(r.MenuGroup, {
                  label: g.Z.Messages.MESSAGE_REMINDERS_REMIND_ME,
                  children: c,
                })
              : (0, a.jsxs)(r.MenuGroup, {
                  label: E,
                  children: [
                    (0, a.jsx)(r.MenuItem, {
                      id: "mark-complete",
                      label: g.Z.Messages.MESSAGE_REMINDERS_MARK_COMPLETE,
                      icon: r.CheckmarkSmallIcon,
                      action: () =>
                        (0, u.z)({
                          channelId: n.channel_id,
                          messageId: n.id,
                          dueAt: void 0,
                        }),
                    }),
                    (0, a.jsx)(r.MenuItem, {
                      id: "edit-reminder",
                      label: g.Z.Messages.MESSAGE_REMINDERS_EDIT,
                      children: c,
                    }),
                  ],
                });
          })({ message: e, savedMessage: _ });
        return n || t
          ? (0, E.Z)()
            ? (0, a.jsxs)(r.MenuItem, {
                id: "save-for-later",
                label: g.Z.Messages.FOR_LATER_SAVE,
                action: () =>
                  (0, u.z)({
                    channelId: e.channel_id,
                    messageId: e.id,
                    displayToast: !0,
                  }),
                children: [
                  null != _
                    ? (0, a.jsx)(r.MenuItem, {
                        id: "remove-from-for-later",
                        label: g.Z.Messages.FOR_LATER_REMOVE,
                        action: () =>
                          (0, u.x)({
                            channelId: e.channel_id,
                            messageId: e.id,
                            dueAt: _.saveData.dueAt,
                            displayToast: !0,
                          }),
                        color: "danger",
                      })
                    : (0, a.jsx)(r.MenuItem, {
                        id: "create-bookmark",
                        label: g.Z.Messages.MESSAGE_BOOKMARKS_CREATE,
                        icon: r.BookmarkOutlineIcon,
                        action: () =>
                          (0, u.z)({
                            channelId: e.channel_id,
                            messageId: e.id,
                            displayToast: !0,
                          }),
                      }),
                  (0, a.jsx)(r.MenuSeparator, {}),
                  f,
                ],
              })
            : (0, a.jsx)(r.MenuItem, {
                id: "save-for-later-upsell",
                label: g.Z.Messages.FOR_LATER_SAVE,
                icon: r.NitroWheelIcon,
                iconProps: { color: s.JX.PREMIUM_TIER_2 },
                action: () =>
                  (0, u.z)({
                    channelId: e.channel_id,
                    messageId: e.id,
                    displayToast: !0,
                  }),
              })
          : null;
      }
    },
    667922: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return Z;
        },
      });
      var a = t(735250),
        i = t(470079),
        l = t(442837),
        r = t(481060),
        s = t(543241),
        o = t(222677),
        u = t(995774),
        d = t(665906),
        c = t(695346),
        E = t(496675),
        M = t(768581),
        I = t(585483),
        m = t(176354),
        g = t(981631),
        _ = t(185923),
        f = t(689938);
      function Z(e, n) {
        let { reducedMotion: t } = i.useContext(
            r.AccessibilityPreferencesContext,
          ),
          M = (0, d.$R)(n),
          Z = (0, l.e7)(
            [E.Z],
            () => (n.isPrivate() || E.Z.can(g.Plq.ADD_REACTIONS, n)) && M,
            [n, M],
          ),
          A = (0, s.MZ)(n.getGuildId());
        if (!c.nc.getSetting() || !Z || e.type === g.uaV.GUILD_INVITE_REMINDER)
          return null;
        let T = A.filter(
          (e) =>
            !m.ZP.isEmojiFilteredOrLocked({
              emoji: e,
              channel: n,
              intention: _.Hz.REACTION,
            }),
        )
          .slice(0, 12)
          .map((i, l) => {
            var s, d;
            return (0, a.jsx)(
              r.MenuItem,
              {
                color: "default",
                id:
                  null !==
                    (d =
                      null !== (s = i.id) && void 0 !== s
                        ? s
                        : i.optionallyDiverseSequence) && void 0 !== d
                    ? d
                    : i.name,
                label: ":".concat(i.name, ":"),
                icon: (e) =>
                  (0, a.jsx)(S, {
                    ...e,
                    reducedMotionEnabled: t.enabled,
                    emoji: i,
                  }),
                action: () => {
                  (0, o.rU)(
                    n.id,
                    e.id,
                    (0, u.g1)(i),
                    o.TW.MESSAGE_CONTEXT_MENU,
                  );
                },
                dontCloseOnActionIfHoldingShiftKey: !0,
              },
              l,
            );
          });
        return (0, a.jsx)(r.MenuItem, {
          id: "add-reaction",
          label: f.Z.Messages.ADD_REACTION,
          action: () => {
            I.S.dispatchKeyed(g.LPv.TOGGLE_REACTION_POPOUT, e.id, {
              emojiPicker: !0,
            });
          },
          color: "default",
          children: (0, a.jsxs)(a.Fragment, {
            children: [
              T,
              (0, a.jsx)(r.MenuSeparator, {}),
              (0, a.jsx)(r.MenuItem, {
                color: "default",
                id: "other-reactions",
                label: f.Z.Messages.VIEW_MORE,
                icon: r.ReactionIcon,
                action: () => {
                  I.S.dispatchKeyed(g.LPv.TOGGLE_REACTION_POPOUT, e.id, {
                    emojiPicker: !0,
                  });
                },
              }),
            ],
          }),
        });
      }
      function S(e) {
        var n;
        let {
          emoji: t,
          reducedMotionEnabled: i,
          className: l = "",
          isFocused: r = !1,
        } = e;
        return (0, a.jsx)("img", {
          className: l,
          src:
            null != t.id
              ? M.ZP.getEmojiURL({
                  id: t.id,
                  animated: t.animated && (!i || r),
                  size: 18,
                })
              : m.ZP.getURL(
                  null !== (n = t.optionallyDiverseSequence) && void 0 !== n
                    ? n
                    : "",
                ),
          alt: "",
        });
      }
    },
    941389: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var a = t(735250);
      t(470079);
      var i = t(481060),
        l = t(496675),
        r = t(996861),
        s = t(981631),
        o = t(689938);
      function u(e, n) {
        let t = n.getGuildId();
        return null != t &&
          (e.type === s.uaV.USER_JOIN ||
            e.type === s.uaV.GUILD_INVITE_REMINDER) &&
          l.Z.canWithPartialContext(s.Plq.MANAGE_GUILD, { guildId: t })
          ? (0, a.jsx)(i.MenuItem, {
              id: "configure",
              label: o.Z.Messages.CONFIGURE,
              icon: i.CircleQuestionIcon,
              action: () => (0, r.zW)(n),
            })
          : null;
      }
    },
    749339: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var a = t(735250);
      t(470079);
      var i = t(481060),
        l = t(39154),
        r = t(572004),
        s = t(689938);
      function o(e) {
        return r.wS
          ? (0, a.jsx)(i.MenuItem, {
              id: "copy-text",
              label: s.Z.Messages.COPY_TEXT,
              icon: i.CopyIcon,
              action: () => {
                (e = (0, l.Z)(e)), (0, r.JG)(e.content);
              },
            })
          : null;
      }
    },
    6148: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      });
      var a = t(735250);
      t(470079);
      var i = t(442837),
        l = t(481060),
        r = t(904245),
        s = t(665906),
        o = t(314897),
        u = t(418476),
        d = t(689938);
      function c(e, n) {
        let t = (0, i.e7)([o.default], () => o.default.getId()),
          c = (0, s.$R)(n),
          E = (0, s.Gu)(n);
        return (0, u.Z)(e, t) && c && !E
          ? (0, a.jsx)(l.MenuItem, {
              id: "edit",
              label: d.Z.Messages.EDIT_MESSAGE,
              action: () => r.Z.startEditMessage(n.id, e.id, e.content),
              icon: l.PencilIcon,
            })
          : null;
      }
    },
    519110: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return A;
        },
      }),
        t(757143);
      var a = t(735250),
        i = t(470079),
        l = t(442837),
        r = t(481060),
        s = t(80932),
        o = t(2052),
        u = t(543241),
        d = t(339085),
        c = t(633302),
        E = t(691251),
        M = t(268350),
        I = t(217590),
        m = t(453070),
        g = t(926491),
        _ = t(378233),
        f = t(981631),
        Z = t(689938);
      function S(e) {
        return c.ZP.getByName(e.replace(/(^:|:$)/g, ""));
      }
      function A(e) {
        let { type: n, id: t, name: A, isInExpressionPicker: T = !1 } = e,
          { location: v } = (0, o.O)(),
          R = i.useMemo(
            () => ({
              ...v,
              section: T ? f.jXE.EXPRESSION_PICKER : f.jXE.CONTEXT_MENU,
            }),
            [v, T],
          ),
          h = (0, m.Go)(),
          O = (0, l.e7)([g.Z], () =>
            n === E.S.STICKER && null != t ? g.Z.getStickerById(t) : null,
          ),
          N = null != O && h.includes(O.id),
          p = (0, l.e7)([d.ZP], () => {
            if (n === E.S.EMOJI) {
              if (null != t)
                return d.ZP.getDisambiguatedEmojiContext().getById(t);
              if (null != A) {
                var e;
                return null !== (e = S(A)) && void 0 !== e
                  ? e
                  : S(c.ZP.convertSurrogateToName(A));
              }
            }
          }),
          x = (0, u.C1)(null, p);
        if (null != O && n === E.S.STICKER)
          return (0, _.J8)(O) && !(0, _.V9)(O)
            ? null
            : N
              ? (0, a.jsx)(r.MenuItem, {
                  id: "unfavorite",
                  action: () => (0, M.hW)(O.id),
                  label: Z.Z.Messages.UNFAVORITE_ITEM,
                })
              : (0, a.jsx)(r.MenuItem, {
                  id: "favorite",
                  action: () => {
                    (0, I.cQ)({
                      sticker: O,
                      location: { ...R, object: f.qAy.STICKER },
                    }),
                      (0, M.SA)(null == O ? void 0 : O.id);
                  },
                  label: Z.Z.Messages.FAVORITE_ITEM,
                });
        if (null != p && n === E.S.EMOJI)
          return x
            ? (0, a.jsx)(r.MenuItem, {
                id: "unfavorite",
                action: () => (0, s.Xe)(p),
                label: Z.Z.Messages.UNFAVORITE_ITEM,
              })
            : (0, a.jsx)(r.MenuItem, {
                id: "favorite",
                action: () => {
                  (0, u.J1)({
                    emoji: p,
                    location: { ...R, object: f.qAy.EMOJI },
                  }),
                    (0, s.$K)(p);
                },
                label: Z.Z.Messages.FAVORITE_ITEM,
              });
      }
    },
    759875: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return d;
        },
      });
      var a = t(735250);
      t(470079);
      var i = t(481060),
        l = t(346610),
        r = t(868643),
        s = t(245216),
        o = t(996861),
        u = t(689938);
      function d(e, n) {
        let t = (0, r.a)(e),
          { canForwardMessages: d } = (0, l.yk)(
            { location: "MessageActionsMenu" },
            { autoTrackExposure: !1 },
          );
        return t && d
          ? (0, a.jsx)(i.MenuItem, {
              id: "forward",
              label: u.Z.Messages.MESSAGE_ACTION_FORWARD,
              icon: s.Z,
              action: () => {
                (0, o.ts)(n, e);
              },
            })
          : null;
      }
    },
    536639: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return E;
        },
      });
      var a = t(735250);
      t(470079);
      var i = t(442837),
        l = t(481060),
        r = t(332148),
        s = t(257559),
        o = t(496675),
        u = t(151007),
        d = t(981631),
        c = t(689938);
      function E(e, n) {
        let t = (0, i.e7)([o.Z], () => o.Z.can(d.Plq.MANAGE_MESSAGES, n), [n]);
        return e.state !== d.yb.SEND_FAILED && (0, u.Z)(e, n, t)
          ? !1 === e.pinned
            ? (0, a.jsx)(l.MenuItem, {
                id: "pin",
                action: function (t) {
                  t.shiftKey ? r.Z.pinMessage(n, e.id) : s.Z.confirmPin(n, e);
                },
                label: c.Z.Messages.PIN_MESSAGE,
                icon: l.PinIcon,
              })
            : (0, a.jsx)(l.MenuItem, {
                id: "unpin",
                action: function (t) {
                  t.shiftKey
                    ? r.Z.unpinMessage(n, e.id)
                    : s.Z.confirmUnpin(n, e);
                },
                label: c.Z.Messages.UNPIN_MESSAGE,
                icon: l.PinIcon,
              })
          : null;
      }
    },
    720904: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return T;
        },
      });
      var a = t(735250);
      t(470079);
      var i = t(120356),
        l = t.n(i),
        r = t(442837),
        s = t(481060),
        o = t(543241),
        u = t(222677),
        d = t(995774),
        c = t(665906),
        E = t(695346),
        M = t(496675),
        I = t(768581),
        m = t(176354),
        g = t(981631),
        _ = t(185923),
        f = t(689938),
        Z = t(50455);
      let S = ["slight_smile", "frowning", "smile", "stuck_out_tongue", "wink"];
      function A(e) {
        var n;
        let { emoji: t, isFocused: i } = e,
          { animated: r, src: o, surrogates: u } = t;
        return (
          null == o && null != t.id
            ? (o = I.ZP.getEmojiURL({ id: t.id, animated: !!r, size: 20 }))
            : null == o && (o = m.ZP.getURL(u)),
          (0, a.jsx)(
            s.Tooltip,
            {
              text: t.allNamesString,
              hideOnClick: !0,
              spacing: 16,
              forceOpen: i,
              children: (e) =>
                (0, a.jsx)("div", {
                  "aria-label": f.Z.Messages.ADD_REACTION_NAMED.format({
                    emojiName: t.name,
                  }),
                  className: l()(Z.button, { [Z.focused]: i }),
                  ...e,
                  children:
                    null == o || "" === o.trim()
                      ? (0, a.jsx)("span", {
                          className: l()("emoji", "emoji-text", Z.icon),
                          ...e,
                          children: u,
                        })
                      : (0, a.jsx)("img", {
                          className: Z.icon,
                          src: o,
                          alt: "",
                        }),
                }),
            },
            null !== (n = t.id) && void 0 !== n ? n : t.name,
          )
        );
      }
      function T(e, n) {
        let t = (0, o.MZ)(n.guild_id).filter((e) => {
          var t;
          return (
            !(
              e.useSpriteSheet &&
              S.indexOf(null !== (t = e.uniqueName) && void 0 !== t ? t : "") >=
                0
            ) &&
            !m.ZP.isEmojiPremiumLocked({
              emoji: e,
              channel: n,
              intention: _.Hz.REACTION,
            })
          );
        });
        t.length > 4 && (t.length = 4);
        let i = E.nc.useSetting(),
          l = (0, c.$R)(n),
          I = (0, r.e7)(
            [M.Z],
            () => i && l && (n.isPrivate() || M.Z.can(g.Plq.ADD_REACTIONS, n)),
            [n, l, i],
          ),
          f = (t) => {
            (0, u.rU)(n.id, e.id, (0, d.g1)(t), u.TW.MESSAGE_CONTEXT_MENU);
          };
        return I && t.length > 0
          ? (0, a.jsx)(s.MenuGroup, {
              className: Z.wrapper,
              children: t.map((e, n) => {
                var t;
                return (0, a.jsx)(
                  s.MenuItem,
                  {
                    id: "quickreact-".concat(
                      null !== (t = e.id) && void 0 !== t ? t : n,
                    ),
                    render: (n) => {
                      let { isFocused: t } = n;
                      return (0, a.jsx)(A, { emoji: e, isFocused: t });
                    },
                    action: () => f(e),
                    dontCloseOnActionIfHoldingShiftKey: !0,
                  },
                  n,
                );
              }),
            })
          : null;
      }
    },
    88791: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      });
      var a = t(735250);
      t(470079);
      var i = t(481060),
        l = t(79390),
        r = t(689938);
      function s(e) {
        return null == e.reactions ||
          0 === e.reactions.length ||
          (e.isPoll() && !(0, l.eQ)(e))
          ? null
          : (0, a.jsx)(i.MenuItem, {
              id: "reactions",
              label: r.Z.Messages.VIEW_REACTIONS,
              icon: i.ReactionIcon,
              action: () =>
                (0, i.openModalLazy)(async () => {
                  let { default: n } = await Promise.resolve().then(
                    t.bind(t, 785388),
                  );
                  return (t) => (0, a.jsx)(n, { ...t, message: e });
                }),
            });
      }
    },
    385302: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return M;
        },
      });
      var a = t(735250);
      t(470079);
      var i = t(442837),
        l = t(481060),
        r = t(668781),
        s = t(79390),
        o = t(222677),
        u = t(665906),
        d = t(496675),
        c = t(981631),
        E = t(689938);
      function M(e, n) {
        let t = (0, u.$R)(n),
          M = (0, i.e7)([d.Z], () => d.Z.can(c.Plq.MANAGE_MESSAGES, n) && t, [
            n,
            t,
          ]);
        return !M ||
          null == e.reactions ||
          0 === e.reactions.length ||
          (e.isPoll() && !(0, s.eQ)(e))
          ? null
          : (0, a.jsx)(l.MenuItem, {
              id: "remove-reactions",
              label: E.Z.Messages.REMOVE_ALL_REACTIONS,
              action: function (t) {
                t.shiftKey
                  ? (0, o.wX)(n.id, e.id)
                  : r.Z.show({
                      title: E.Z.Messages.REMOVE_ALL_REACTIONS_CONFIRM_TITLE,
                      body: E.Z.Messages.REMOVE_ALL_REACTIONS_CONFIRM_BODY,
                      confirmText: E.Z.Messages.YES_TEXT,
                      cancelText: E.Z.Messages.NO_TEXT,
                      onConfirm: () => {
                        (0, o.wX)(n.id, e.id);
                      },
                    });
              },
              color: "danger",
            });
      }
    },
    873699: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return g;
        },
      }),
        t(724458),
        t(47120);
      var a = t(735250),
        i = t(470079),
        l = t(442837),
        r = t(481060),
        s = t(668781),
        o = t(79390),
        u = t(222677),
        d = t(665906),
        c = t(496675),
        E = t(768581),
        M = t(176354),
        I = t(981631),
        m = t(689938);
      function g(e, n) {
        let { reducedMotion: t } = i.useContext(
            r.AccessibilityPreferencesContext,
          ),
          E = (0, d.$R)(n),
          M = (0, l.e7)([c.Z], () => c.Z.can(I.Plq.MANAGE_MESSAGES, n) && E, [
            n,
            E,
          ]),
          g = e.reactions.reduce((e, n) => {
            var t;
            return (null === (t = n.count_details) || void 0 === t
              ? void 0
              : t.vote) != null ||
              null !=
                e.find(
                  (e) =>
                    (null != e.id && e.id === n.emoji.id) ||
                    e.name === n.emoji.name,
                )
              ? e
              : [...e, n.emoji];
          }, []),
          f = (t, a) => {
            t.shiftKey
              ? (0, u.$E)(n.id, e.id, a)
              : s.Z.show({
                  title: m.Z.Messages.REMOVE_EMOJI_REACTIONS_CONFIRM_TITLE,
                  body: m.Z.Messages.REMOVE_EMOJI_REACTIONS_CONFIRM_BODY,
                  confirmText: m.Z.Messages.YES_TEXT,
                  cancelText: m.Z.Messages.NO_TEXT,
                  onConfirm: () => {
                    (0, u.$E)(n.id, e.id, a);
                  },
                });
          };
        return !M ||
          null == e.reactions ||
          0 === e.reactions.length ||
          (e.isPoll() && !(0, o.eQ)(e))
          ? null
          : (0, a.jsx)(r.MenuItem, {
              id: "remove-emoji-reactions",
              label: m.Z.Messages.REMOVE_EMOJI_REACTIONS,
              color: "danger",
              children: g.map((e) => {
                var n, i;
                return (0, a.jsx)(
                  r.MenuItem,
                  {
                    id: "remove-emoji-reactions-".concat(
                      null !== (n = e.name) && void 0 !== n ? n : e.id,
                    ),
                    label: null == e.id ? e.name : ":".concat(e.name, ":"),
                    action: (n) => f(n, e),
                    icon: (n) =>
                      (0, a.jsx)(_, {
                        ...n,
                        reducedMotionEnabled: t.enabled,
                        emoji: e,
                      }),
                    dontCloseOnActionIfHoldingShiftKey: !0,
                  },
                  null !== (i = e.name) && void 0 !== i ? i : e.id,
                );
              }),
            });
      }
      function _(e) {
        var n;
        let {
          emoji: t,
          reducedMotionEnabled: i,
          className: l = "",
          isFocused: r = !1,
        } = e;
        return (0, a.jsx)("img", {
          className: l,
          src:
            null != t.id
              ? E.ZP.getEmojiURL({
                  id: t.id,
                  animated: t.animated && (!i || r),
                  size: 18,
                })
              : M.ZP.getURL(null !== (n = t.name) && void 0 !== n ? n : ""),
          alt: "",
        });
      }
    },
    429260: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var a = t(735250);
      t(470079);
      var i = t(481060),
        l = t(726521),
        r = t(970257),
        s = t(689938);
      function o(e) {
        return (0, r.a4)(e)
          ? (0, a.jsx)(i.MenuItem, {
              id: "report",
              label: s.Z.Messages.REPORT_MESSAGE_MENU_OPTION,
              action: () => (0, l.ak)(e, "web_message_context_menu"),
              icon: i.FlagIcon,
              color: "danger",
            })
          : null;
      }
    },
    1626: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var a = t(735250);
      t(470079);
      var i = t(481060),
        l = t(111618),
        r = t(730954),
        s = t(981631),
        o = t(689938);
      function u(e, n) {
        return e.state !== s.yb.SEND_FAILED
          ? null
          : (0, a.jsx)(i.MenuItem, {
              id: "resend",
              label: o.Z.Messages.RESEND_MESSAGE,
              action: () => (0, r.Z)(n, e, void 0, l.Z.getOptions(e.id)),
            });
      }
    },
    279329: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var a = t(735250);
      t(470079);
      var i = t(442837),
        l = t(481060),
        r = t(196051),
        s = t(441729),
        o = t(689938);
      function u(e, n) {
        let t = (0, i.e7)([s.Z], () => s.Z.isSpeakingMessage(n.id, e.id), [
          n,
          e,
        ]);
        return "" === e.content
          ? null
          : (0, a.jsx)(l.MenuItem, {
              id: "tts",
              label: t
                ? o.Z.Messages.STOP_SPEAKING_MESSAGE
                : o.Z.Messages.SPEAK_MESSAGE,
              icon: l.ChatSpeakIcon,
              action: () => (t ? (0, r.NB)() : (0, r.LA)(n, e)),
            });
      }
    },
    627938: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var a = t(735250);
      t(470079);
      var i = t(481060),
        l = t(665906),
        r = t(996861),
        s = t(689938);
      function o(e, n) {
        return (0, l.NE)(n, e)
          ? (0, a.jsx)(i.MenuItem, {
              id: "thread",
              label: s.Z.Messages.CREATE_THREAD,
              icon: i.ThreadIcon,
              action: () => {
                (0, r.gK)(n, e);
              },
            })
          : null;
      }
    },
    512303: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return M;
        },
      });
      var a = t(735250);
      t(470079);
      var i = t(373793),
        l = t(481060),
        r = t(700582),
        s = t(592180),
        o = t(565138),
        u = t(430824),
        d = t(594174),
        c = t(689938),
        E = t(461404);
      function M(e) {
        var n, t, M;
        if (!(0, s.a)(e)) return null;
        let I =
            null === (n = e.interactionMetadata) || void 0 === n
              ? void 0
              : n.authorizing_integration_owners[i.Y.USER_INSTALL],
          m =
            null === (t = e.interactionMetadata) || void 0 === t
              ? void 0
              : t.authorizing_integration_owners[i.Y.GUILD_INSTALL],
          g = d.default.getUser(I),
          _ = u.Z.getGuild(m),
          f = d.default.getUser(
            null === (M = e.interactionMetadata) || void 0 === M
              ? void 0
              : M.user.id,
          ),
          Z = null;
        return (
          null != _
            ? (Z = (0, a.jsx)(l.MenuItem, {
                className: E.interactionInfoMenuItem,
                disabled: !0,
                iconLeft: () =>
                  (0, a.jsx)(o.Z, { guild: _, size: o.Z.Sizes.MINI }),
                id: "integration-owner",
                label: _.name,
                subtext:
                  c.Z.Messages.INTERACTION_RESPONSE_CONTEXT_INSTALLED_BY.format(
                    { application: e.author.username },
                  ),
              }))
            : null != g &&
              (Z = (0, a.jsx)(l.MenuItem, {
                className: E.interactionInfoMenuItem,
                disabled: !0,
                iconLeft: () =>
                  (0, a.jsx)(r.Z, { user: g, size: l.AvatarSizes.SIZE_20 }),
                id: "integration-owner",
                label: g.username,
                subtext:
                  c.Z.Messages.INTERACTION_RESPONSE_CONTEXT_INSTALLED_BY.format(
                    { application: e.author.username },
                  ),
              })),
          (0, a.jsxs)(l.MenuItem, {
            id: "view-interaction-info",
            label: c.Z.Messages.VIEW_INTERACTION_INFO,
            children: [
              Z,
              null != f
                ? (0, a.jsx)(l.MenuItem, {
                    className: E.interactionInfoMenuItem,
                    disabled: !0,
                    iconLeft: () =>
                      (0, a.jsx)(r.Z, { user: f, size: l.AvatarSizes.SIZE_20 }),
                    id: "interaction-user",
                    label: f.username,
                    subtext:
                      c.Z.Messages.INTERACTION_RESPONSE_CONTEXT_TRIGGERED_BY,
                  })
                : null,
            ],
          })
        );
      }
    },
    481300: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      });
      var a = t(735250);
      t(470079);
      var i = t(481060),
        l = t(163268),
        r = t(689938);
      function s(e, n) {
        return null != n &&
          (0, l.KP)({ type: l.lJ.GenericMedia, media: n }, (0, l.HH)(e))
          ? (0, a.jsx)(
              i.MenuItem,
              {
                id: "report-image-false-positive",
                label: r.Z.Messages.OBSCURED_CONTENT_MARK_FALSE_POSITIVE,
                action: () => {
                  (0, i.openModalLazy)(async () => {
                    let { default: i } = await t(788679);
                    return (t) =>
                      (0, a.jsx)(i, {
                        channelId: e.channel_id,
                        messageId: e.id,
                        mediaItemUrl: n.url,
                        ...t,
                      });
                  });
                },
                icon: i.ImageWarningIcon,
              },
              "report-image-false-positive",
            )
          : null;
      }
    },
    29264: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return R;
        },
      }),
        t(47120);
      var a = t(735250);
      t(470079);
      var i = t(481060),
        l = t(668781),
        r = t(829883),
        s = t(976853),
        o = t(626135),
        u = t(358085),
        d = t(960048),
        c = t(591759),
        E = t(998502),
        M = t(36998),
        I = t(981631),
        m = t(689938);
      let g = "https://media.discordapp.net",
        _ = /^.*\.discordapp\.net$/,
        f = "cdn.discordapp.com",
        Z = "".concat(g, "/stickers"),
        S = new Set(["jpg", "jpeg", "png", "webp", "gif", "tiff", "bmp"]),
        A = new Set(["jpg", "jpeg", "png"]),
        T = (e) => {
          var n, t, a, i;
          return null === (i = c.Z.toURLSafe(e)) || void 0 === i
            ? void 0
            : null === (a = i.pathname) || void 0 === a
              ? void 0
              : null === (t = a.split(".")) || void 0 === t
                ? void 0
                : null === (n = t.pop()) || void 0 === n
                  ? void 0
                  : n.toLowerCase();
        };
      function v(e, n) {
        l.Z.show({ title: m.Z.Messages.ERROR, body: e }),
          d.Z.captureException(n);
      }
      function R(e, n, t) {
        if (
          (0, s.Z)(null == n ? void 0 : n.getChannelId()) ||
          (null == t ? void 0 : t.shouldHideMediaOptions) === !0 ||
          !u.isPlatformEmbedded ||
          null == e ||
          !(function (e) {
            let n = c.Z.toURLSafe(e);
            if (null == n) return !1;
            let t = T(e);
            return (
              (_.test(n.hostname) || n.host === f) &&
              !e.startsWith(Z) &&
              !(0, r.zt)(e) &&
              null != t &&
              S.has(t)
            );
          })(e)
        )
          return null;
        let l = (function (e) {
            let n = c.Z.toURLSafe(e);
            return null == n || n.host === f
              ? e
              : n.origin === g
                ? ((n.host = f),
                  n.searchParams.delete("size"),
                  n.searchParams.delete("width"),
                  n.searchParams.delete("height"),
                  n.searchParams.delete("quality"),
                  n.searchParams.delete("format"),
                  n.toString())
                : (n.searchParams.delete("width"),
                  n.searchParams.delete("height"),
                  n.searchParams.set("quality", "lossless"),
                  n.toString());
          })(e),
          d = async () => {
            try {
              await E.ZP.saveImage(l),
                o.default.track(I.rMx.CONTEXT_MENU_IMAGE_SAVED, {
                  ...(0, M.v)(),
                });
            } catch (e) {
              o.default.track(I.rMx.CONTEXT_MENU_IMAGE_SAVE_FAILED, {
                ...(0, M.v)(),
              }),
                v(m.Z.Messages.ERROR_SAVING_IMAGE, e);
            }
          },
          R = async () => {
            try {
              await E.ZP.copyImage(l),
                o.default.track(I.rMx.CONTEXT_MENU_IMAGE_COPIED, {
                  ...(0, M.v)(),
                });
            } catch (e) {
              v(m.Z.Messages.ERROR_COPYING_IMAGE, e),
                o.default.track(I.rMx.CONTEXT_MENU_IMAGE_COPY_FAILED, {
                  ...(0, M.v)(),
                });
            }
          };
        return [
          E.ZP.canCopyImage() &&
          (function (e) {
            let n = T(e);
            return null != n && A.has(n);
          })(e)
            ? (0, a.jsx)(
                i.MenuItem,
                {
                  id: "copy-image",
                  label: m.Z.Messages.COPY_IMAGE_MENU_ITEM,
                  action: R,
                },
                "copy-image",
              )
            : null,
          (0, a.jsx)(
            i.MenuItem,
            {
              id: "save-image",
              label: m.Z.Messages.SAVE_IMAGE_MENU_ITEM,
              action: d,
            },
            "save-image",
          ),
        ];
      }
    },
    615669: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
        z: function () {
          return a;
        },
      }),
        t(653041);
      var a,
        i,
        l = t(442837),
        r = t(314897);
      (i = a || (a = {}))[(i.END_EARLY = 0)] = "END_EARLY";
      let s = [];
      function o(e) {
        let n = (0, l.e7)([r.default], () => r.default.getId()),
          { poll: t } = e;
        if (!e.isPoll() || null == t) return s;
        let a = [];
        return (
          !t.expiry.isSameOrBefore(Date.now()) &&
            e.author.id === n &&
            a.push(0),
          a
        );
      }
    },
    988500: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var a = t(735250);
      t(470079);
      var i = t(481060),
        l = t(203143),
        r = t(615669),
        s = t(689938);
      let o = {
        [r.z.END_EARLY]: (e) =>
          (0, a.jsx)(i.MenuItem, {
            id: "end-poll-early",
            label: s.Z.Messages.POLL_END_EARLY,
            icon: i.ClockXIcon,
            action: () => {
              l.Z.endPollEarly({ channelId: e.channel_id, messageId: e.id });
            },
            iconProps: { color: "currentColor" },
          }),
      };
      function u(e) {
        let n = (0, r.Z)(e);
        return 0 === n.length
          ? null
          : (0, a.jsx)(a.Fragment, { children: n.map((n) => o[n](e)) });
      }
    },
    550727: function (e, n, t) {
      t.d(n, {
        B: function () {
          return r;
        },
      });
      var a = t(913527),
        i = t.n(a),
        l = t(689938);
      let r = [
        {
          getDueAt: () => i()().add(30, "minutes").toDate(),
          getLabel: () => l.Z.Messages.MESSAGE_REMINDERS_IN_THIRTY_MIN,
        },
        {
          getDueAt: () => i()().add(1, "hour").toDate(),
          getLabel: () => l.Z.Messages.MESSAGE_REMINDERS_IN_ONE_HOUR,
        },
        {
          getDueAt: () => i()().add(4, "hour").toDate(),
          getLabel: () => l.Z.Messages.MESSAGE_REMINDERS_IN_FOUR_HOURS,
        },
        {
          getDueAt: () =>
            i()().add(1, "day").startOf("day").add(9, "hours").toDate(),
          getLabel: () => l.Z.Messages.MESSAGE_REMINDERS_TOMORROW_MORNING,
        },
        {
          getDueAt: () => i()().day(8).startOf("day").add(9, "hours").toDate(),
          getLabel: () => l.Z.Messages.MESSAGE_REMINDERS_NEXT_WEEK,
        },
      ];
    },
    898150: function (e, n, t) {
      t.r(n),
        t.d(n, {
          MessageReminderEditMenu: function () {
            return c;
          },
          useMessageReminderDurationSuggestions: function () {
            return d;
          },
        }),
        t(653041);
      var a = t(735250),
        i = t(470079),
        l = t(481060),
        r = t(239091),
        s = t(324701),
        o = t(550727),
        u = t(689938);
      function d(e) {
        let { createReminder: n } = e,
          r = i.useCallback(() => {
            (0, l.openModalLazy)(async () => {
              let { default: e } = await t.e("43866").then(t.bind(t, 423639));
              return (t) => (0, a.jsx)(e, { ...t, createReminder: n });
            });
          }, [n]);
        return i.useMemo(() => {
          let e = o.B.map((e) => {
            let { getDueAt: t, getLabel: i } = e;
            return (0, a.jsx)(
              l.MenuItem,
              {
                id: "create-reminder-".concat(i()),
                label: i(),
                action: () => n(t()),
              },
              "create-reminder-".concat(i()),
            );
          });
          return (
            e.push(
              (0, a.jsx)(
                l.MenuItem,
                {
                  id: "create-reminder-custom",
                  label: u.Z.Messages.MESSAGE_REMINDERS_CUSTOM_DUE,
                  action: r,
                },
                "custom",
              ),
            ),
            e
          );
        }, [n, r]);
      }
      function c(e) {
        let { message: n, label: t } = e,
          i = d({
            createReminder: (e) =>
              (0, s.z)({ channelId: n.channel_id, messageId: n.id, dueAt: e }),
          });
        return (0, a.jsx)(l.Menu, {
          navId: "message-reminder-create",
          onClose: r.Zy,
          "aria-label": u.Z.Messages.MESSAGE_REMINDERS_CREATE,
          onSelect: () => null,
          children: (0, a.jsx)(l.MenuGroup, { label: t, children: i }),
        });
      }
    },
  },
]);
//# sourceMappingURL=285cc29d824f6d726e41.js.map
