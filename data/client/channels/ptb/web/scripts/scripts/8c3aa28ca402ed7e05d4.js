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
      var i = t(399606),
        a = t(375954),
        l = t(163268);
      let r = (e, n, t) => {
          var r, s;
          let o = (0, i.e7)([a.Z], () => a.Z.getMessage(e, n));
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
          let o = (0, i.e7)([a.Z], () => a.Z.getMessage(e, n));
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
      var i = t(735250);
      t(470079);
      var a = t(481060),
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
          _ = (0, r.yh)(),
          g = (0, u.K)(n, t, E),
          f = (0, u.b)(n, t, M),
          { reportFalsePositive: Z, isReportFalsePositiveLoading: S } = (0,
          o.$)({
            onSuccess: () => (0, d.s)(m),
            onError: () => {
              (0, a.showToast)(
                (0, a.createToast)(
                  c.Z.Messages.ERROR_GENERIC_TITLE,
                  a.ToastType.FAILURE,
                ),
              );
            },
            report: () => {
              (0, l.Uj)(
                n,
                t,
                g.map((e) => e.id),
                f.map((e) => e.id),
              );
            },
          });
        return (
          !(_ && (g.length > 0 || f.length > 0)) && m(),
          (0, i.jsx)(d.$, {
            messageId: t,
            channelId: n,
            isReportFalsePositiveLoading: S,
            analyticsContext: s.UU.EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW,
            onConfirmPress: Z,
            attachmentPreview: 1 === g.length && 0 === f.length ? g[0] : void 0,
            embedPreview: 1 === f.length && 0 === g.length ? f[0] : void 0,
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
      var i = t(665906),
        a = t(901461),
        l = t(981631);
      function r(e, n, t) {
        return (
          !n.isSystemDM() &&
          !(0, a.Z)(e) &&
          (t || n.isPrivate()) &&
          (0, i.RG)(n) &&
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
            return F;
          },
        });
      var i = t(735250);
      t(470079);
      var a = t(374470),
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
        _ = t(667922),
        g = t(235624),
        f = t(941389),
        Z = t(449751),
        S = t(749339),
        T = t(601184),
        v = t(6148),
        R = t(519110),
        A = t(759875),
        O = t(168405),
        h = t(536639),
        N = t(720904),
        p = t(88791),
        x = t(235047),
        j = t(385302),
        b = t(873699),
        C = t(134323),
        D = t(429260),
        L = t(1626),
        P = t(279329),
        G = t(627938),
        y = t(512303),
        U = t(481300),
        k = t(689938);
      function w(e) {
        var n, t;
        let i,
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
          _ = c,
          g = c.getAttribute("data-type"),
          f = c.getAttribute("data-id"),
          Z = c.getAttribute("data-name");
        if (null != E) l = i = s = E.url;
        else
          for (; (0, a.k)(_); )
            (0, a.k)(_, HTMLImageElement) && null != _.src && (l = _.src),
              (0, a.k)(_, HTMLAnchorElement) &&
                null != _.href &&
                ((i = _.href),
                (o = _.textContent),
                null == l &&
                  "img" === _.getAttribute("data-role") &&
                  ((l = i),
                  _.hasAttribute("data-safe-src") &&
                    "" !== _.getAttribute("data-safe-src") &&
                    (s = _.getAttribute("data-safe-src")))),
              (_ = _.parentNode);
        return F({
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
          favoriteableType: g,
          favoriteableId: f,
          favoriteableName: Z,
          itemHref: i,
          itemSrc: l,
          itemSafeSrc: s,
          itemTextContent: o,
          canReport: !0,
          onHeightUpdate: m,
          onSelect: I,
          onClose: r.Zy,
          navId: "message",
          ariaLabel: k.Z.Messages.MESSAGE_ACTIONS_MENU_LABEL,
          shouldHideMediaOptions: M,
        });
      }
      function F(e) {
        let {
            message: n,
            channel: t,
            mediaItem: a,
            textSelection: r,
            favoriteableType: w,
            favoriteableId: F,
            favoriteableName: K,
            itemHref: V,
            itemSrc: z,
            itemSafeSrc: H,
            itemTextContent: X,
            canReport: B,
            onHeightUpdate: Y,
            onSelect: W,
            onClose: q,
            navId: J,
            ariaLabel: $,
            shouldHideMediaOptions: Q = !1,
          } = e,
          ee = (0, u.Z)(r),
          en = (0, E.Z)(r),
          et = (0, N.Z)(n, t),
          ei = (0, _.Z)(n, t),
          ea = (0, v.Z)(n, t),
          el = (0, h.Z)(n, t),
          er = (0, R.Z)({ type: w, id: F, name: K }),
          es = (0, L.Z)(n, t),
          eo = (0, O.Z)(n, t),
          eu = (0, p.Z)(n),
          ed = (0, f.Z)(n, t),
          ec = (0, Z.Z)(n, t),
          eE = (0, j.Z)(n, t),
          eM = (0, b.Z)(n, t),
          eI = (0, T.Z)(n, t),
          em = (0, D.Z)(n),
          e_ = (0, P.Z)(n, t),
          eg = (0, c.Z)(null != V ? V : z, X, n, { shouldHideMediaOptions: Q }),
          ef = (0, d.Z)(H, n, { shouldHideMediaOptions: Q }),
          eZ = (0, U.Z)(n, a),
          eS = (0, o.Z)({
            id: n.id,
            label: k.Z.Messages.COPY_ID_MESSAGE,
            shiftId: "".concat(n.channel_id, "-").concat(n.id),
          }),
          eT = (0, C.Z)(n, t),
          ev = (0, A.Z)(n, t),
          eR = (0, G.Z)(n, t),
          eA = (0, m.Z)(r, t.getGuildId()),
          eO = (0, x.Z)(n),
          eh = (0, g.Z)(n),
          eN = (0, S.Z)(n),
          ep = (0, I.Z)({
            commandType: s.yU.MESSAGE,
            commandTargetId: n.id,
            channel: t,
            guildId: void 0,
            onHeightUpdate: Y,
          }),
          ex = (0, y.Z)(n),
          ej = (0, M.Z)(n);
        return (0, i.jsxs)(l.Menu, {
          navId: J,
          onClose: q,
          "aria-label": $,
          onSelect: W,
          children: [
            (0, i.jsx)(l.MenuGroup, { children: ee }),
            (0, i.jsx)(l.MenuGroup, { children: en }),
            (0, i.jsxs)(l.MenuGroup, {
              children: [
                "" === r ? et : null,
                ei,
                eu,
                ea,
                el,
                eh,
                eO,
                er,
                eT,
                ev,
                eR,
                eN,
                ep,
                es,
                eo,
                ed,
                ec,
                e_,
                ej,
                eM,
                eE,
                ex,
                eI,
                B && em,
              ],
            }),
            null != eA && (0, i.jsx)(l.MenuGroup, { children: eA }),
            (0, i.jsxs)(l.MenuGroup, { children: [ef, eZ] }),
            (0, i.jsx)(l.MenuGroup, { children: eg }),
            (0, i.jsx)(l.MenuGroup, { children: eS }),
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
      var i = t(735250),
        a = t(470079),
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
        _ = t(273504),
        g = t(689938),
        f = t(858733);
      let Z = _.fX.KEYWORD;
      function S(e, n) {
        let { perGuildMaxCount: t } = u.I6[Z],
          { isLoading: S, saveRule: T, errorMessage: v } = (0, c.w)(),
          { createNewEditingRule: R } = (0, c.V)(),
          [A, O] = a.useState(!1),
          [h, N] = (0, o.I2)(n),
          { rulesByTriggerType: p, updateRule: x } = (0, o.pH)(n),
          j = a.useMemo(() => {
            var e;
            return null !== (e = p[Z]) && void 0 !== e ? e : [];
          }, [p]),
          b = 0 === j.length,
          C = t > j.length && !b;
        if (
          !a.useMemo(() => (0, d.ze)(n), [n]) ||
          null == e ||
          0 === e.length ||
          null == n
        )
          return null;
        let D = e.split(" "),
          L = D.length;
        try {
          (0, s.km)(D, _.RH);
        } catch (e) {
          return null;
        }
        let P = () => {
            if (null != n)
              (0, r.Zy)(),
                I.Z.open(n, m.pNK.GUILD_AUTOMOD),
                setTimeout(() => {
                  R(n, Z, {
                    triggerMetadata: {
                      keywordFilter: [e],
                      regexPatterns: [],
                      allowList: [],
                    },
                  });
                }, 400);
          },
          G = async (n) => {
            var t, i;
            if (((0, r.Zy)(), !(await (0, M.XN)(n.name, e)))) return;
            let a = {
              ...n,
              triggerMetadata: {
                ...n.triggerMetadata,
                keywordFilter: [
                  ...(null !==
                    (i =
                      null === (t = n.triggerMetadata) || void 0 === t
                        ? void 0
                        : t.keywordFilter) && void 0 !== i
                    ? i
                    : []),
                  e,
                ],
              },
            };
            await T(a, j),
              x(a),
              null != v
                ? (0, l.showToast)(
                    (0, l.createToast)(
                      g.Z.Messages.GUILD_AUTOMOD_ADD_SELECTION_TOAST_ERROR,
                      l.ToastType.FAILURE,
                    ),
                  )
                : (0, l.showToast)(
                    (0, l.createToast)(
                      g.Z.Messages.GUILD_AUTOMOD_ADD_SELECTION_TOAST_SUCCESS,
                      l.ToastType.SUCCESS,
                    ),
                  );
          },
          y = (0, i.jsx)(i.Fragment, {
            children: (0, i.jsx)(l.MenuItem, {
              id: "automod-rules-loading",
              label: g.Z.Messages.LOADING,
            }),
          });
        return (
          !h &&
            (y = (0, i.jsxs)(i.Fragment, {
              children: [
                b &&
                  (0, i.jsx)(l.MenuItem, {
                    id: "add-first-rule",
                    label:
                      g.Z.Messages
                        .GUILD_SETTINGS_ACTION_FILTER_AUTOMOD_RULE_CREATE,
                    action: P,
                    disabled: S,
                  }),
                j.map((e) => {
                  let n = (0, u.V9)(Z).reduce((n, t) => {
                    let i = e.actions.find((e) => {
                      let { type: n } = e;
                      return t === n;
                    });
                    if (null == i) return n;
                    let a = (0, E.c)(t, i);
                    return (n += ", ".concat(
                      null == a ? void 0 : a.headerText,
                    ));
                  }, "");
                  return (0, i.jsx)(
                    l.MenuRadioItem,
                    {
                      id: e.id,
                      label: e.name,
                      subtext: (0, i.jsx)(l.Text, {
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
                  (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)(l.MenuSeparator, {}),
                      (0, i.jsx)(l.MenuItem, {
                        id: "add-another-rule",
                        label: g.Z.Messages.GUILD_AUTOMOD_ADD_NEW_RULE,
                        action: P,
                        disabled: S,
                      }),
                    ],
                  }),
              ],
            })),
          (0, i.jsx)(l.MenuItem, {
            id: "guild-automod-add-selection",
            label: g.Z.Messages.GUILD_AUTOMOD_ADD_SELECTION.format({
              keywordCount: L,
            }),
            onFocus: () => {
              if (!A) O(!0), N();
            },
            children: y,
          })
        );
      }
    },
    667922: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return Z;
        },
      });
      var i = t(735250),
        a = t(470079),
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
        _ = t(981631),
        g = t(185923),
        f = t(689938);
      function Z(e, n) {
        let { reducedMotion: t } = a.useContext(
            r.AccessibilityPreferencesContext,
          ),
          M = (0, d.$R)(n),
          Z = (0, l.e7)(
            [E.Z],
            () => (n.isPrivate() || E.Z.can(_.Plq.ADD_REACTIONS, n)) && M,
            [n, M],
          ),
          T = (0, s.MZ)(n.getGuildId());
        if (!c.nc.getSetting() || !Z || e.type === _.uaV.GUILD_INVITE_REMINDER)
          return null;
        let v = T.filter(
          (e) =>
            !m.ZP.isEmojiFilteredOrLocked({
              emoji: e,
              channel: n,
              intention: g.Hz.REACTION,
            }),
        )
          .slice(0, 12)
          .map((a, l) => {
            var s, d;
            return (0, i.jsx)(
              r.MenuItem,
              {
                color: "default",
                id:
                  null !==
                    (d =
                      null !== (s = a.id) && void 0 !== s
                        ? s
                        : a.optionallyDiverseSequence) && void 0 !== d
                    ? d
                    : a.name,
                label: ":".concat(a.name, ":"),
                icon: (e) =>
                  (0, i.jsx)(S, {
                    ...e,
                    reducedMotionEnabled: t.enabled,
                    emoji: a,
                  }),
                action: () => {
                  (0, o.rU)(
                    n.id,
                    e.id,
                    (0, u.g1)(a),
                    o.TW.MESSAGE_CONTEXT_MENU,
                  );
                },
                dontCloseOnActionIfHoldingShiftKey: !0,
              },
              l,
            );
          });
        return (0, i.jsx)(r.MenuItem, {
          id: "add-reaction",
          label: f.Z.Messages.ADD_REACTION,
          action: () => {
            I.S.dispatchKeyed(_.LPv.TOGGLE_REACTION_POPOUT, e.id, {
              emojiPicker: !0,
            });
          },
          color: "default",
          children: (0, i.jsxs)(i.Fragment, {
            children: [
              v,
              (0, i.jsx)(r.MenuSeparator, {}),
              (0, i.jsx)(r.MenuItem, {
                color: "default",
                id: "other-reactions",
                label: f.Z.Messages.VIEW_MORE,
                icon: r.ReactionIcon,
                action: () => {
                  I.S.dispatchKeyed(_.LPv.TOGGLE_REACTION_POPOUT, e.id, {
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
          reducedMotionEnabled: a,
          className: l = "",
          isFocused: r = !1,
        } = e;
        return (0, i.jsx)("img", {
          className: l,
          src:
            null != t.id
              ? M.ZP.getEmojiURL({
                  id: t.id,
                  animated: t.animated && (!a || r),
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
    235624: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return d;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(442837),
        l = t(481060),
        r = t(324701),
        s = t(768943),
        o = t(121254),
        u = t(689938);
      function d(e) {
        let { enabled: n } = o.Z.useExperiment(
            { location: "use_message_bookmarks_item" },
            { autoTrackExposure: !1 },
          ),
          t = (0, a.e7)([s.Z], () =>
            s.Z.isMessageBookmarked(e.channel_id, e.id),
          );
        return n
          ? (0, i.jsx)(l.MenuItem, {
              id: "mark-bookmark",
              label: t
                ? u.Z.Messages.MESSAGE_BOOKMARKS_REMOVE
                : u.Z.Messages.MESSAGE_BOOKMARKS_CREATE,
              icon: t ? l.BookmarkIcon : l.BookmarkOutlineIcon,
              action: () =>
                t
                  ? (0, r.x)({
                      channelId: e.channel_id,
                      messageId: e.id,
                      displayToast: !0,
                    })
                  : (0, r.z)({
                      channelId: e.channel_id,
                      messageId: e.id,
                      displayToast: !0,
                    }),
            })
          : null;
      }
    },
    941389: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(481060),
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
          ? (0, i.jsx)(a.MenuItem, {
              id: "configure",
              label: o.Z.Messages.CONFIGURE,
              icon: a.CircleQuestionIcon,
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
      var i = t(735250);
      t(470079);
      var a = t(481060),
        l = t(39154),
        r = t(572004),
        s = t(689938);
      function o(e) {
        return r.wS
          ? (0, i.jsx)(a.MenuItem, {
              id: "copy-text",
              label: s.Z.Messages.COPY_TEXT,
              icon: a.CopyIcon,
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
      var i = t(735250);
      t(470079);
      var a = t(442837),
        l = t(481060),
        r = t(904245),
        s = t(665906),
        o = t(314897),
        u = t(418476),
        d = t(689938);
      function c(e, n) {
        let t = (0, a.e7)([o.default], () => o.default.getId()),
          c = (0, s.$R)(n),
          E = (0, s.Gu)(n);
        return (0, u.Z)(e, t) && c && !E
          ? (0, i.jsx)(l.MenuItem, {
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
          return T;
        },
      }),
        t(757143);
      var i = t(735250),
        a = t(470079),
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
        _ = t(926491),
        g = t(378233),
        f = t(981631),
        Z = t(689938);
      function S(e) {
        return c.ZP.getByName(e.replace(/(^:|:$)/g, ""));
      }
      function T(e) {
        let { type: n, id: t, name: T, isInExpressionPicker: v = !1 } = e,
          { location: R } = (0, o.O)(),
          A = a.useMemo(
            () => ({
              ...R,
              section: v ? f.jXE.EXPRESSION_PICKER : f.jXE.CONTEXT_MENU,
            }),
            [R, v],
          ),
          O = (0, m.Go)(),
          h = (0, l.e7)([_.Z], () =>
            n === E.S.STICKER && null != t ? _.Z.getStickerById(t) : null,
          ),
          N = null != h && O.includes(h.id),
          p = (0, l.e7)([d.ZP], () => {
            if (n === E.S.EMOJI) {
              if (null != t)
                return d.ZP.getDisambiguatedEmojiContext().getById(t);
              if (null != T) {
                var e;
                return null !== (e = S(T)) && void 0 !== e
                  ? e
                  : S(c.ZP.convertSurrogateToName(T));
              }
            }
          }),
          x = (0, u.C1)(null, p);
        if (null != h && n === E.S.STICKER)
          return (0, g.J8)(h) && !(0, g.V9)(h)
            ? null
            : N
              ? (0, i.jsx)(r.MenuItem, {
                  id: "unfavorite",
                  action: () => (0, M.hW)(h.id),
                  label: Z.Z.Messages.UNFAVORITE_ITEM,
                })
              : (0, i.jsx)(r.MenuItem, {
                  id: "favorite",
                  action: () => {
                    (0, I.cQ)({
                      sticker: h,
                      location: { ...A, object: f.qAy.STICKER },
                    }),
                      (0, M.SA)(null == h ? void 0 : h.id);
                  },
                  label: Z.Z.Messages.FAVORITE_ITEM,
                });
        if (null != p && n === E.S.EMOJI)
          return x
            ? (0, i.jsx)(r.MenuItem, {
                id: "unfavorite",
                action: () => (0, s.Xe)(p),
                label: Z.Z.Messages.UNFAVORITE_ITEM,
              })
            : (0, i.jsx)(r.MenuItem, {
                id: "favorite",
                action: () => {
                  (0, u.J1)({
                    emoji: p,
                    location: { ...A, object: f.qAy.EMOJI },
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
      var i = t(735250);
      t(470079);
      var a = t(481060),
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
          ? (0, i.jsx)(a.MenuItem, {
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
      var i = t(735250);
      t(470079);
      var a = t(442837),
        l = t(481060),
        r = t(332148),
        s = t(257559),
        o = t(496675),
        u = t(151007),
        d = t(981631),
        c = t(689938);
      function E(e, n) {
        let t = (0, a.e7)([o.Z], () => o.Z.can(d.Plq.MANAGE_MESSAGES, n), [n]);
        return e.state !== d.yb.SEND_FAILED && (0, u.Z)(e, n, t)
          ? !1 === e.pinned
            ? (0, i.jsx)(l.MenuItem, {
                id: "pin",
                action: function (t) {
                  t.shiftKey ? r.Z.pinMessage(n, e.id) : s.Z.confirmPin(n, e);
                },
                label: c.Z.Messages.PIN_MESSAGE,
                icon: l.PinIcon,
              })
            : (0, i.jsx)(l.MenuItem, {
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
          return v;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(120356),
        l = t.n(a),
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
        _ = t(981631),
        g = t(185923),
        f = t(689938),
        Z = t(994209);
      let S = ["slight_smile", "frowning", "smile", "stuck_out_tongue", "wink"];
      function T(e) {
        var n;
        let { emoji: t, isFocused: a } = e,
          { animated: r, src: o, surrogates: u } = t;
        return (
          null == o && null != t.id
            ? (o = I.ZP.getEmojiURL({ id: t.id, animated: !!r, size: 20 }))
            : null == o && (o = m.ZP.getURL(u)),
          (0, i.jsx)(
            s.Tooltip,
            {
              text: t.allNamesString,
              hideOnClick: !0,
              spacing: 16,
              forceOpen: a,
              children: (e) =>
                (0, i.jsx)("div", {
                  "aria-label": f.Z.Messages.ADD_REACTION_NAMED.format({
                    emojiName: t.name,
                  }),
                  className: l()(Z.button, { [Z.focused]: a }),
                  ...e,
                  children:
                    null == o || "" === o.trim()
                      ? (0, i.jsx)("span", {
                          className: l()("emoji", "emoji-text", Z.icon),
                          ...e,
                          children: u,
                        })
                      : (0, i.jsx)("img", {
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
      function v(e, n) {
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
              intention: g.Hz.REACTION,
            })
          );
        });
        t.length > 4 && (t.length = 4);
        let a = E.nc.useSetting(),
          l = (0, c.$R)(n),
          I = (0, r.e7)(
            [M.Z],
            () => a && l && (n.isPrivate() || M.Z.can(_.Plq.ADD_REACTIONS, n)),
            [n, l, a],
          ),
          f = (t) => {
            (0, u.rU)(n.id, e.id, (0, d.g1)(t), u.TW.MESSAGE_CONTEXT_MENU);
          };
        return I && t.length > 0
          ? (0, i.jsx)(s.MenuGroup, {
              className: Z.wrapper,
              children: t.map((e, n) => {
                var t;
                return (0, i.jsx)(
                  s.MenuItem,
                  {
                    id: "quickreact-".concat(
                      null !== (t = e.id) && void 0 !== t ? t : n,
                    ),
                    render: (n) => {
                      let { isFocused: t } = n;
                      return (0, i.jsx)(T, { emoji: e, isFocused: t });
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
      var i = t(735250);
      t(470079);
      var a = t(481060),
        l = t(79390),
        r = t(689938);
      function s(e) {
        return null == e.reactions ||
          0 === e.reactions.length ||
          (e.isPoll() && !(0, l.eQ)(e))
          ? null
          : (0, i.jsx)(a.MenuItem, {
              id: "reactions",
              label: r.Z.Messages.VIEW_REACTIONS,
              icon: a.ReactionIcon,
              action: () =>
                (0, a.openModalLazy)(async () => {
                  let { default: n } = await Promise.resolve().then(
                    t.bind(t, 785388),
                  );
                  return (t) => (0, i.jsx)(n, { ...t, message: e });
                }),
            });
      }
    },
    235047: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(442837),
        l = t(481060),
        r = t(324701),
        s = t(768943),
        o = t(742989),
        u = t(898150),
        d = t(689938);
      function c(e) {
        let { showReminders: n } = o.Z.useExperiment(
            { location: "use_message_reminders_item" },
            { autoTrackExposure: !1 },
          ),
          t = (0, a.e7)([s.Z], () => s.Z.isMessageReminder(e.channel_id, e.id)),
          c = (0, u.useMessageReminderDurationSuggestions)({
            createReminder: (n) =>
              (0, r.z)({
                channelId: e.channel_id,
                messageId: e.id,
                dueAt: n,
                displayToast: !0,
              }),
          });
        return n
          ? (0, i.jsxs)(l.MenuItem, {
              id: "mark-todo",
              label: t
                ? d.Z.Messages.MESSAGE_REMINDERS_EDIT
                : d.Z.Messages.MESSAGE_REMINDERS_CREATE,
              children: [
                (0, i.jsx)(l.MenuGroup, {
                  label: d.Z.Messages.MESSAGE_REMINDERS_REMIND_ME,
                  children: c,
                }),
                t
                  ? (0, i.jsx)(l.MenuItem, {
                      id: "remove-reminder",
                      label: d.Z.Messages.MESSAGE_REMINDERS_MARK_AS_DONE,
                      action: () =>
                        (0, r.x)({
                          channelId: e.channel_id,
                          messageId: e.id,
                          dueAt: new Date(),
                          displayToast: !0,
                        }),
                      color: "danger",
                    })
                  : null,
              ],
            })
          : null;
      }
    },
    385302: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return M;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(442837),
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
          M = (0, a.e7)([d.Z], () => d.Z.can(c.Plq.MANAGE_MESSAGES, n) && t, [
            n,
            t,
          ]);
        return !M ||
          null == e.reactions ||
          0 === e.reactions.length ||
          (e.isPoll() && !(0, s.eQ)(e))
          ? null
          : (0, i.jsx)(l.MenuItem, {
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
          return _;
        },
      }),
        t(724458),
        t(47120);
      var i = t(735250),
        a = t(470079),
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
      function _(e, n) {
        let { reducedMotion: t } = a.useContext(
            r.AccessibilityPreferencesContext,
          ),
          E = (0, d.$R)(n),
          M = (0, l.e7)([c.Z], () => c.Z.can(I.Plq.MANAGE_MESSAGES, n) && E, [
            n,
            E,
          ]),
          _ = e.reactions.reduce((e, n) => {
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
          f = (t, i) => {
            t.shiftKey
              ? (0, u.$E)(n.id, e.id, i)
              : s.Z.show({
                  title: m.Z.Messages.REMOVE_EMOJI_REACTIONS_CONFIRM_TITLE,
                  body: m.Z.Messages.REMOVE_EMOJI_REACTIONS_CONFIRM_BODY,
                  confirmText: m.Z.Messages.YES_TEXT,
                  cancelText: m.Z.Messages.NO_TEXT,
                  onConfirm: () => {
                    (0, u.$E)(n.id, e.id, i);
                  },
                });
          };
        return !M ||
          null == e.reactions ||
          0 === e.reactions.length ||
          (e.isPoll() && !(0, o.eQ)(e))
          ? null
          : (0, i.jsx)(r.MenuItem, {
              id: "remove-emoji-reactions",
              label: m.Z.Messages.REMOVE_EMOJI_REACTIONS,
              color: "danger",
              children: _.map((e) => {
                var n, a;
                return (0, i.jsx)(
                  r.MenuItem,
                  {
                    id: "remove-emoji-reactions-".concat(
                      null !== (n = e.name) && void 0 !== n ? n : e.id,
                    ),
                    label: null == e.id ? e.name : ":".concat(e.name, ":"),
                    action: (n) => f(n, e),
                    icon: (n) =>
                      (0, i.jsx)(g, {
                        ...n,
                        reducedMotionEnabled: t.enabled,
                        emoji: e,
                      }),
                    dontCloseOnActionIfHoldingShiftKey: !0,
                  },
                  null !== (a = e.name) && void 0 !== a ? a : e.id,
                );
              }),
            });
      }
      function g(e) {
        var n;
        let {
          emoji: t,
          reducedMotionEnabled: a,
          className: l = "",
          isFocused: r = !1,
        } = e;
        return (0, i.jsx)("img", {
          className: l,
          src:
            null != t.id
              ? E.ZP.getEmojiURL({
                  id: t.id,
                  animated: t.animated && (!a || r),
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
      var i = t(735250);
      t(470079);
      var a = t(481060),
        l = t(726521),
        r = t(970257),
        s = t(689938);
      function o(e) {
        return (0, r.a4)(e)
          ? (0, i.jsx)(a.MenuItem, {
              id: "report",
              label: s.Z.Messages.REPORT_MESSAGE_MENU_OPTION,
              action: () => (0, l.ak)(e, "web_message_context_menu"),
              icon: a.FlagIcon,
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
      var i = t(735250);
      t(470079);
      var a = t(481060),
        l = t(111618),
        r = t(730954),
        s = t(981631),
        o = t(689938);
      function u(e, n) {
        return e.state !== s.yb.SEND_FAILED
          ? null
          : (0, i.jsx)(a.MenuItem, {
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
      var i = t(735250);
      t(470079);
      var a = t(442837),
        l = t(481060),
        r = t(196051),
        s = t(441729),
        o = t(689938);
      function u(e, n) {
        let t = (0, a.e7)([s.Z], () => s.Z.isSpeakingMessage(n.id, e.id), [
          n,
          e,
        ]);
        return "" === e.content
          ? null
          : (0, i.jsx)(l.MenuItem, {
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
      var i = t(735250);
      t(470079);
      var a = t(481060),
        l = t(665906),
        r = t(996861),
        s = t(689938);
      function o(e, n) {
        return (0, l.NE)(n, e)
          ? (0, i.jsx)(a.MenuItem, {
              id: "thread",
              label: s.Z.Messages.CREATE_THREAD,
              icon: a.ThreadIcon,
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
      var i = t(735250);
      t(470079);
      var a = t(373793),
        l = t(481060),
        r = t(700582),
        s = t(592180),
        o = t(565138),
        u = t(430824),
        d = t(594174),
        c = t(689938),
        E = t(919062);
      function M(e) {
        var n, t, M;
        if (!(0, s.a)(e)) return null;
        let I =
            null === (n = e.interactionMetadata) || void 0 === n
              ? void 0
              : n.authorizing_integration_owners[a.Y.USER_INSTALL],
          m =
            null === (t = e.interactionMetadata) || void 0 === t
              ? void 0
              : t.authorizing_integration_owners[a.Y.GUILD_INSTALL],
          _ = d.default.getUser(I),
          g = u.Z.getGuild(m),
          f = d.default.getUser(
            null === (M = e.interactionMetadata) || void 0 === M
              ? void 0
              : M.user.id,
          ),
          Z = null;
        return (
          null != g
            ? (Z = (0, i.jsx)(l.MenuItem, {
                className: E.interactionInfoMenuItem,
                disabled: !0,
                iconLeft: () =>
                  (0, i.jsx)(o.Z, { guild: g, size: o.Z.Sizes.MINI }),
                id: "integration-owner",
                label: g.name,
                subtext:
                  c.Z.Messages.INTERACTION_RESPONSE_CONTEXT_INSTALLED_BY.format(
                    { application: e.author.username },
                  ),
              }))
            : null != _ &&
              (Z = (0, i.jsx)(l.MenuItem, {
                className: E.interactionInfoMenuItem,
                disabled: !0,
                iconLeft: () =>
                  (0, i.jsx)(r.Z, { user: _, size: l.AvatarSizes.SIZE_20 }),
                id: "integration-owner",
                label: _.username,
                subtext:
                  c.Z.Messages.INTERACTION_RESPONSE_CONTEXT_INSTALLED_BY.format(
                    { application: e.author.username },
                  ),
              })),
          (0, i.jsxs)(l.MenuItem, {
            id: "view-interaction-info",
            label: c.Z.Messages.VIEW_INTERACTION_INFO,
            children: [
              Z,
              null != f
                ? (0, i.jsx)(l.MenuItem, {
                    className: E.interactionInfoMenuItem,
                    disabled: !0,
                    iconLeft: () =>
                      (0, i.jsx)(r.Z, { user: f, size: l.AvatarSizes.SIZE_20 }),
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
      var i = t(735250);
      t(470079);
      var a = t(481060),
        l = t(163268),
        r = t(689938);
      function s(e, n) {
        return null != n &&
          (0, l.KP)({ type: l.lJ.GenericMedia, media: n }, (0, l.HH)(e))
          ? (0, i.jsx)(
              a.MenuItem,
              {
                id: "report-image-false-positive",
                label: r.Z.Messages.OBSCURED_CONTENT_MARK_FALSE_POSITIVE,
                action: () => {
                  (0, a.openModalLazy)(async () => {
                    let { default: a } = await t(788679);
                    return (t) =>
                      (0, i.jsx)(a, {
                        channelId: e.channel_id,
                        messageId: e.id,
                        mediaItemUrl: n.url,
                        ...t,
                      });
                  });
                },
                icon: a.ImageWarningIcon,
              },
              "report-image-false-positive",
            )
          : null;
      }
    },
    29264: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return A;
        },
      }),
        t(47120);
      var i = t(735250);
      t(470079);
      var a = t(481060),
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
      let _ = "https://media.discordapp.net",
        g = /^.*\.discordapp\.net$/,
        f = "cdn.discordapp.com",
        Z = "".concat(_, "/stickers"),
        S = new Set(["jpg", "jpeg", "png", "webp", "gif", "tiff", "bmp"]),
        T = new Set(["jpg", "jpeg", "png"]),
        v = (e) => {
          var n, t, i, a;
          return null === (a = c.Z.toURLSafe(e)) || void 0 === a
            ? void 0
            : null === (i = a.pathname) || void 0 === i
              ? void 0
              : null === (t = i.split(".")) || void 0 === t
                ? void 0
                : null === (n = t.pop()) || void 0 === n
                  ? void 0
                  : n.toLowerCase();
        };
      function R(e, n) {
        l.Z.show({ title: m.Z.Messages.ERROR, body: e }),
          d.Z.captureException(n);
      }
      function A(e, n, t) {
        if (
          (0, s.Z)(null == n ? void 0 : n.getChannelId()) ||
          (null == t ? void 0 : t.shouldHideMediaOptions) === !0 ||
          !u.isPlatformEmbedded ||
          null == e ||
          !(function (e) {
            let n = c.Z.toURLSafe(e);
            if (null == n) return !1;
            let t = v(e);
            return (
              (g.test(n.hostname) || n.host === f) &&
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
              : n.origin === _
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
                R(m.Z.Messages.ERROR_SAVING_IMAGE, e);
            }
          },
          A = async () => {
            try {
              await E.ZP.copyImage(l),
                o.default.track(I.rMx.CONTEXT_MENU_IMAGE_COPIED, {
                  ...(0, M.v)(),
                });
            } catch (e) {
              R(m.Z.Messages.ERROR_COPYING_IMAGE, e),
                o.default.track(I.rMx.CONTEXT_MENU_IMAGE_COPY_FAILED, {
                  ...(0, M.v)(),
                });
            }
          };
        return [
          E.ZP.canCopyImage() &&
          (function (e) {
            let n = v(e);
            return null != n && T.has(n);
          })(e)
            ? (0, i.jsx)(
                a.MenuItem,
                {
                  id: "copy-image",
                  label: m.Z.Messages.COPY_IMAGE_MENU_ITEM,
                  action: A,
                },
                "copy-image",
              )
            : null,
          (0, i.jsx)(
            a.MenuItem,
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
          return i;
        },
      }),
        t(653041);
      var i,
        a,
        l = t(442837),
        r = t(314897);
      (a = i || (i = {}))[(a.END_EARLY = 0)] = "END_EARLY";
      let s = [];
      function o(e) {
        let n = (0, l.e7)([r.default], () => r.default.getId()),
          { poll: t } = e;
        if (!e.isPoll() || null == t) return s;
        let i = [];
        return (
          !t.expiry.isSameOrBefore(Date.now()) &&
            e.author.id === n &&
            i.push(0),
          i
        );
      }
    },
    988500: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(481060),
        l = t(203143),
        r = t(615669),
        s = t(689938);
      let o = {
        [r.z.END_EARLY]: (e) =>
          (0, i.jsx)(a.MenuItem, {
            id: "end-poll-early",
            label: s.Z.Messages.POLL_END_EARLY,
            icon: a.ClockXIcon,
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
          : (0, i.jsx)(i.Fragment, { children: n.map((n) => o[n](e)) });
      }
    },
    550727: function (e, n, t) {
      t.d(n, {
        B: function () {
          return l;
        },
      });
      var i = t(70956),
        a = t(689938);
      let l = [
        {
          duration: 30 * i.Z.Millis.MINUTE,
          getLabel: () => a.Z.Messages.MESSAGE_REMINDERS_IN_THIRTY_MIN,
        },
        {
          duration: i.Z.Millis.HOUR,
          getLabel: () => a.Z.Messages.MESSAGE_REMINDERS_IN_ONE_HOUR,
        },
        {
          duration: 2 * i.Z.Millis.HOUR,
          getLabel: () => a.Z.Messages.MESSAGE_REMINDERS_IN_TWO_HOURS,
        },
        {
          duration: 4 * i.Z.Millis.HOUR,
          getLabel: () => a.Z.Messages.MESSAGE_REMINDERS_IN_FOUR_HOURS,
        },
      ];
    },
    898150: function (e, n, t) {
      t.r(n),
        t.d(n, {
          MessageReminderEditMenu: function () {
            return M;
          },
          useMessageReminderDurationSuggestions: function () {
            return E;
          },
        }),
        t(653041);
      var i = t(735250),
        a = t(470079),
        l = t(913527),
        r = t.n(l),
        s = t(481060),
        o = t(239091),
        u = t(324701),
        d = t(550727),
        c = t(689938);
      function E(e) {
        let { createReminder: n } = e,
          l = a.useCallback(
            (e) => n(r()().add(e, "millisecond").toDate()),
            [n],
          ),
          o = a.useCallback(() => {
            (0, s.openModalLazy)(async () => {
              let { default: e } = await t.e("43866").then(t.bind(t, 423639));
              return (t) => (0, i.jsx)(e, { ...t, createReminder: n });
            });
          }, [n]);
        return a.useMemo(() => {
          let e = d.B.map((e) => {
            let { duration: n, getLabel: t } = e;
            return (0, i.jsx)(
              s.MenuItem,
              {
                id: "create-reminder-".concat(n),
                label: t(),
                action: () => l(n),
              },
              n,
            );
          });
          return (
            e.push(
              (0, i.jsx)(
                s.MenuItem,
                {
                  id: "create-reminder-custom",
                  label: c.Z.Messages.MESSAGE_REMINDERS_CUSTOM_DUE,
                  action: o,
                },
                "custom",
              ),
            ),
            e
          );
        }, [l, o]);
      }
      function M(e) {
        let { message: n, label: t } = e,
          a = E({
            createReminder: (e) =>
              (0, u.z)({ channelId: n.channel_id, messageId: n.id, dueAt: e }),
          });
        return (0, i.jsx)(s.Menu, {
          navId: "message-reminder-create",
          onClose: o.Zy,
          "aria-label": c.Z.Messages.MESSAGE_REMINDERS_CREATE,
          onSelect: () => null,
          children: (0, i.jsx)(s.MenuGroup, { label: t, children: a }),
        });
      }
    },
  },
]);
//# sourceMappingURL=8c3aa28ca402ed7e05d4.js.map
