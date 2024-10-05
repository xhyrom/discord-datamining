"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["53289"],
  {
    781402: function (e, t, l) {
      l.d(t, {
        Z: function () {
          return n;
        },
      });
      var i = l(470079);
      function n() {
        let e = (0, i.createContext)(void 0);
        return {
          Provider: ({ initialStore: t, createStore: l, children: n }) => {
            let s = (0, i.useRef)();
            return (
              !s.current &&
                (t &&
                  (console.warn(
                    "Provider initialStore is deprecated and will be removed in the next version.",
                  ),
                  !l && (l = () => t)),
                (s.current = l())),
              (0, i.createElement)(e.Provider, { value: s.current }, n)
            );
          },
          useStore: (t, l = Object.is) => {
            let n = (0, i.useContext)(e);
            if (!n)
              throw Error(
                "Seems like you have not used zustand provider as an ancestor.",
              );
            return n(t, l);
          },
          useStoreApi: () => {
            let t = (0, i.useContext)(e);
            if (!t)
              throw Error(
                "Seems like you have not used zustand provider as an ancestor.",
              );
            return (0, i.useMemo)(
              () => ({
                getState: t.getState,
                setState: t.setState,
                subscribe: t.subscribe,
                destroy: t.destroy,
              }),
              [t],
            );
          },
        };
      }
    },
    273602: function (e, t, l) {
      l.r(t),
        l.d(t, {
          default: function () {
            return C;
          },
        }),
        l(47120);
      var i = l(735250),
        n = l(470079),
        s = l(442837),
        a = l(481060),
        o = l(904245),
        r = l(166459),
        d = l(680287),
        u = l(313201),
        c = l(163268),
        _ = l(813197),
        m = l(592125),
        f = l(703558),
        g = l(430824),
        h = l(375954),
        E = l(403182),
        A = l(709054),
        p = l(127654),
        M = l(979956),
        x = l(228392),
        I = l(404616),
        T = l(470623),
        O = l(981631),
        R = l(231338),
        v = l(689938),
        b = l(947251);
      function C(e) {
        var t;
        let {
            threadId: l,
            attachments: C,
            sendMessage: L,
            transitionState: j,
            onClose: P,
          } = e,
          Z = (0, u.Dt)(),
          D = (0, s.e7)([m.Z], () => m.Z.getChannel(l), [l]),
          S = (0, s.e7)(
            [g.Z],
            () => g.Z.getGuild(null == D ? void 0 : D.getGuildId()),
            [D],
          ),
          N = (0, s.e7)(
            [m.Z],
            () => m.Z.getChannel(null == D ? void 0 : D.parent_id),
            [D],
          ),
          U = null === (t = C[0]) || void 0 === t ? void 0 : t.item,
          [y, z] = n.useState(null);
        n.useEffect(() => {
          null != U && (0, _.Fq)(U.file, (e, t) => z(e), R.dG);
        }, [U]);
        let w =
            null != U && null != y
              ? {
                  src: y,
                  width: I.TJ,
                  height: I.Lp,
                  spoiler: C[0].spoiler,
                  alt: C[0].description,
                }
              : null,
          [G, B] = n.useState(!1),
          k = n.useCallback(() => {
            (0, x.xI)({ added: !1 }), L(), P();
          }, [L, P]),
          F = n.useCallback(() => {
            null != D &&
              null != S &&
              ((0, x.xI)({ added: !0 }),
              !(function (e) {
                let {
                    thread: t,
                    attachments: l,
                    setIsUploading: i,
                    guild: n,
                    onClose: s,
                  } = e,
                  a = new d.Z(
                    O.ANM.MESSAGE(
                      t.id,
                      A.default.castChannelIdAsMessageId(t.id),
                    ),
                    "PATCH",
                  );
                a.on("start", () => {
                  i(!0);
                }),
                  a.on("progress", (e) => {
                    let o = (0, E.dg)(n.id);
                    e.currentSize > o &&
                      (a.cancel(), i(!1), s(), (0, p.G)(t, (0, M.KZ)(l)));
                  }),
                  a.on("error", (e, l, n) => {
                    i(!1),
                      l === O.evJ.EXPLICIT_CONTENT &&
                        (s(),
                        o.Z.sendExplicitMediaClydeError(
                          t.id,
                          null == n ? void 0 : n.attachments,
                          c.UU.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED,
                        ),
                        r.Z.clearAll(t.id, f.d.ChannelMessage));
                  }),
                  a.on("complete", () => {
                    i(!1), s(), r.Z.clearAll(t.id, f.d.ChannelMessage);
                  });
                let u = h.Z.getMessages(t.id).get(
                    A.default.castChannelIdAsMessageId(t.id),
                  ),
                  _ = null != u ? u.attachments : [];
                a.uploadFiles(
                  l,
                  { attachments: [..._] },
                  { addFilesTo: "attachments" },
                );
              })({
                thread: D,
                attachments: C,
                setIsUploading: B,
                guild: S,
                onClose: P,
              }));
          }, [D, C, B, S, P]);
        return null == N
          ? null
          : (0, i.jsxs)(a.ModalRoot, {
              transitionState: j,
              size: a.ModalSize.SMALL,
              className: b.modalRoot,
              "aria-labelledby": Z,
              children: [
                (0, i.jsxs)(a.ModalContent, {
                  className: b.modal,
                  children: [
                    (0, i.jsx)(a.Heading, {
                      variant: "heading-md/semibold",
                      className: b.header,
                      id: Z,
                      children:
                        v.Z.Messages.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_TITLE,
                    }),
                    (0, i.jsx)(a.Text, {
                      variant: "text-md/normal",
                      className: b.__invalid_body,
                      children:
                        v.Z.Messages
                          .FORUM_ADD_MEDIA_TO_ORIGINAL_POST_DESCRIPTION,
                    }),
                    (0, i.jsx)("div", {
                      className: b.forumPost,
                      children: (0, i.jsx)(T.oL, {
                        createStore: () => (0, T.NU)(N),
                        children: (0, i.jsx)(I.ZP, {
                          threadId: l,
                          goToThread: R.dG,
                          overrideMedia: w,
                        }),
                      }),
                    }),
                  ],
                }),
                (0, i.jsxs)(a.ModalFooter, {
                  className: b.modalFooter,
                  children: [
                    (0, i.jsx)(a.Button, {
                      look: a.Button.Looks.BLANK,
                      className: b.cancelButton,
                      disabled: G,
                      onClick: P,
                      children: v.Z.Messages.CANCEL,
                    }),
                    (0, i.jsx)(a.Button, {
                      color: a.Button.Colors.PRIMARY,
                      className: b.dontAddButton,
                      disabled: G,
                      onClick: k,
                      children:
                        v.Z.Messages.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_DONT_ADD,
                    }),
                    (0, i.jsx)(a.Button, {
                      color: a.Button.Colors.BRAND,
                      className: b.__invalid_button,
                      submitting: G,
                      onClick: F,
                      autoFocus: !0,
                      children:
                        v.Z.Messages.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_ADD,
                    }),
                  ],
                }),
              ],
            });
      }
    },
    479099: function (e, t, l) {
      l.d(t, {
        Z: function () {
          return M;
        },
        f: function () {
          return x;
        },
      }),
        l(47120);
      var i,
        n,
        s = l(735250),
        a = l(470079),
        o = l(120356),
        r = l.n(o),
        d = l(91192),
        u = l(442837),
        c = l(481060),
        _ = l(239091),
        m = l(596454),
        f = l(607070),
        g = l(339085),
        h = l(695346),
        E = l(572004),
        A = l(689938),
        p = l(813778);
      function M(e) {
        let {
            tag: t,
            size: i = 1,
            disabled: n,
            className: o,
            onClick: M,
            onRemove: x,
            selected: I,
            ariaLabel: T,
          } = e,
          { name: O, emojiId: R, emojiName: v } = t,
          b = null != x,
          [C, L] = a.useState(!1),
          j = (0, u.e7)([g.ZP], () =>
            null != R ? g.ZP.getUsableCustomEmojiById(R) : null,
          ),
          P = b || null != M,
          Z = (!b || !C) && (null != R || null != v),
          D = 0 === i,
          S = a.useRef(null),
          N = (0, u.e7)([f.Z], () => f.Z.keyboardModeEnabled),
          U = (e) => {
            let i = h.Sb.getSetting();
            E.wS &&
              i &&
              (0, _.jW)(e, async () => {
                let { default: e } = await l.e("29646").then(l.bind(l, 955116));
                return (l) => (0, s.jsx)(e, { ...l, tag: t });
              });
          },
          y = (0, s.jsxs)(s.Fragment, {
            children: [
              Z
                ? (0, s.jsx)(m.Z, {
                    className: r()(p.emoji, { [p.small]: D }),
                    emojiId: R,
                    emojiName: v,
                    animated: !!(null == j ? void 0 : j.animated),
                    size: "reaction",
                  })
                : null,
              C &&
                b &&
                (0, s.jsx)("div", {
                  className: p.closeCircle,
                  children: (0, s.jsx)(c.XSmallIcon, {
                    size: "md",
                    color: "currentColor",
                    className: p.close,
                  }),
                }),
              (0, s.jsx)(c.Text, {
                variant: D ? "text-xs/semibold" : "text-sm/semibold",
                lineClamp: 1,
                children: O,
              }),
            ],
          }),
          z = {
            key: t.id,
            className: r()(
              p.pill,
              {
                [p.disabled]: n,
                [p.clickable]: P,
                [p.small]: D,
                [p.selected]: I,
              },
              o,
            ),
            onClick: (e) => {
              null == M || M(e),
                null == x || x(t),
                !N && null != S.current && S.current.blur();
            },
            onContextMenu: (e) => U(e),
            onMouseEnter: () => b && L(!0),
            onMouseLeave: () => b && L(!1),
          },
          w = (0, d.JA)("forum-tag-".concat(t.id));
        return P
          ? (0, s.jsx)(c.Clickable, {
              ...w,
              innerRef: S,
              focusProps: { ringTarget: S },
              "aria-label":
                null != T
                  ? T
                  : A.Z.Messages.FORUM_TAG_A11Y_FILTER_BY_TAG.format({
                      tagName: O,
                    }),
              role: "button",
              "aria-pressed": I,
              ...z,
              children: y,
            })
          : (0, s.jsx)("div", { ...z, children: y });
      }
      function x(e) {
        let { tags: t, count: l, size: i = 1 } = e,
          n = 0 === i;
        return (0, s.jsx)(c.Tooltip, {
          "aria-label": A.Z.Messages.FORUM_TAGS,
          text: (0, s.jsx)(s.Fragment, {
            children: t.map((e) =>
              (0, s.jsx)(
                M,
                { tag: e, className: p.tooltipPill, size: M.Sizes.SMALL },
                e.id,
              ),
            ),
          }),
          children: (e) =>
            (0, s.jsx)("div", {
              ...e,
              className: r()(p.pill, { [p.small]: n }),
              children: (0, s.jsxs)(c.Text, {
                variant: n ? "text-xs/semibold" : "text-sm/semibold",
                children: ["+", l],
              }),
            }),
        });
      }
      ((n = i || (i = {}))[(n.SMALL = 0)] = "SMALL"),
        (n[(n.MEDIUM = 1)] = "MEDIUM"),
        (M.Sizes = i);
    },
    91047: function (e, t, l) {
      l.d(t, {
        Pv: function () {
          return s;
        },
        _j: function () {
          return a;
        },
        nm: function () {
          return o;
        },
        xS: function () {
          return r;
        },
      }),
        l(411104);
      var i = l(735250);
      l(470079);
      var n = l(239091);
      function s(e, t, s) {
        s.isGroupDM()
          ? (0, n.jW)(e, async () => {
              let { default: e } = await Promise.all([
                l.e("50506"),
                l.e("79695"),
                l.e("79107"),
                l.e("92453"),
                l.e("60222"),
              ]).then(l.bind(l, 354589));
              return (l) => (0, i.jsx)(e, { ...l, user: t, channel: s });
            })
          : s.isDM()
            ? (0, n.jW)(e, async () => {
                let { default: e } = await Promise.all([
                  l.e("50506"),
                  l.e("79695"),
                  l.e("79107"),
                  l.e("59743"),
                  l.e("92453"),
                  l.e("22036"),
                  l.e("56826"),
                  l.e("95470"),
                ]).then(l.bind(l, 131404));
                return (l) =>
                  (0, i.jsx)(e, {
                    ...l,
                    user: t,
                    channel: s,
                    showMute: !1,
                    targetIsUser: !0,
                  });
              })
            : null != s.guild_id
              ? (0, n.jW)(e, async () => {
                  let { default: e } = await Promise.all([
                    l.e("50506"),
                    l.e("79695"),
                    l.e("79107"),
                    l.e("92453"),
                    l.e("13125"),
                    l.e("34879"),
                  ]).then(l.bind(l, 757387));
                  return (l) =>
                    (0, i.jsx)(e, {
                      ...l,
                      user: t,
                      channel: s,
                      guildId: s.guild_id,
                    });
                })
              : (0, n.jW)(e, async () => {
                  let { default: e } = await Promise.all([
                    l.e("79695"),
                    l.e("69220"),
                    l.e("50261"),
                  ]).then(l.bind(l, 881351));
                  return (l) => (0, i.jsx)(e, { ...l, user: t });
                });
      }
      function a(e, t) {
        let { user: s, channel: a, moderationAlertId: o, guildId: r, ...d } = t;
        if (
          (null == a ? void 0 : a.isGroupDM()) ||
          (null == a ? void 0 : a.isDM())
        )
          throw Error("Cannot moderate user in DM or group DM");
        let u = null != r ? r : null == a ? void 0 : a.getGuildId();
        null != u &&
          (0, n.jW)(e, async () => {
            let { default: e } = await Promise.all([
              l.e("13125"),
              l.e("33685"),
            ]).then(l.bind(l, 833737));
            return (t) =>
              (0, i.jsx)(e, {
                ...t,
                user: s,
                channelId: null == a ? void 0 : a.id,
                guildId: u,
                moderationAlertId: o,
                ...d,
              });
          });
      }
      function o(e, t) {
        let {
          user: s,
          guildId: a,
          analyticsLocations: o,
          onCloseContextMenu: r,
          isViewOnly: d,
        } = t;
        (0, n.jW)(e, async () => {
          let { default: e } = await l.e("45130").then(l.bind(l, 246389));
          return (t) =>
            (0, i.jsx)(e, {
              ...t,
              user: s,
              guildId: a,
              analyticsLocations: o,
              onCloseContextMenu: r,
              isViewOnly: d,
            });
        });
      }
      function r(e, t, s) {
        null != s &&
          (0, n.jW)(e, async () => {
            let { default: e } = await l.e("50331").then(l.bind(l, 158195));
            return (t) => (0, i.jsx)(e, { ...t, guildId: s });
          });
      }
    },
    127654: function (e, t, l) {
      l.d(t, {
        G: function () {
          return M;
        },
        d: function () {
          return x;
        },
      }),
        l(653041),
        l(47120),
        l(411104);
      var i = l(475179),
        n = l(166459),
        s = l(966390),
        a = l(531643),
        o = l(476326),
        r = l(367907),
        d = l(358221),
        u = l(117530),
        c = l(594174),
        _ = l(626135),
        m = l(403182),
        f = l(74538),
        g = l(979956),
        h = l(981631),
        E = l(959517),
        A = l(474936),
        p = l(689938);
      function M(e, t) {
        let l = c.default.getCurrentUser(),
          i = e.getGuildId(),
          n = m.dg(i),
          s = [],
          o = 0,
          d = 0,
          u = 0,
          _ = [];
        for (let e of t)
          (u += 1),
            (o += e.size),
            s.push(e.size),
            e.size > d && (d = e.size),
            null != e.type ? _.push(e.type) : _.push("unknown");
        if (d > n) {
          (0, r.yw)(h.rMx.FILE_SIZE_LIMIT_EXCEEDED, {
            channel_id: e.id,
            guild_id: i,
            user_individual_file_size_limit: n,
            pre_compression_file_sizes: s,
            pre_compression_aggregate_file_size: o,
            num_attachments: u,
            error_type: E.xi.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
            attachment_mimetypes: _,
          }),
            (0, a.openUploadError)({
              title: p.Z.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
              help: (0, g.BK)(l, i),
              showPremiumUpsell: !(0, f.M5)(l, A.p9.TIER_2),
              fileSize: d,
            });
          return;
        }
        (0, a.openUploadError)({
          title: p.Z.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
          help: p.Z.Messages.UPLOAD_AREA_REQUEST_LIMIT_HELP.format({
            maxSize: m.Ng(m.OC()),
          }),
        });
      }
      function x(e, t, l) {
        let {
          filesMetadata: r,
          requireConfirm: c = !0,
          showLargeMessageDialog: m = !1,
          isThumbnail: f = !1,
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (e.length < 1) return;
        if (null != r && r.length !== e.length)
          throw Error("Unexpected mismatch between files and file metadata");
        let E = t.getGuildId();
        if ((0, g.Bf)(e, E)) {
          M(t, e);
          return;
        }
        if (u.Z.getUploadCount(t.id, l) + e.length > h.dN1) {
          (0, a.openUploadError)({
            title: p.Z.Messages.ATTACHMENT_TOO_MANY_ERROR_TITLE,
            help: p.Z.Messages.ATTACHMENT_TOO_MANY_ERROR_MESSAGE.format({
              limit: h.dN1,
            }),
          }),
            _.default.track(h.rMx.UPLOAD_FILE_LIMIT_ERROR, {
              existing_count: u.Z.getUploadCount(t.id, l),
              new_count: e.length,
            });
          return;
        }
        if (
          ((t.type === h.d4z.GUILD_VOICE ||
            t.type === h.d4z.GUILD_STAGE_VOICE) &&
            !d.Z.getChatOpen(t.id) &&
            i.Z.updateChatOpen(t.id, !0),
          c)
        ) {
          let i = Array.from(e).map((e, t) => ({
            file: e,
            platform: o.ow.WEB,
            isThumbnail: f,
            ...(null == r ? void 0 : r[t]),
          }));
          n.Z.addFiles({
            files: i,
            channelId: t.id,
            showLargeMessageDialog: m,
            draftType: l,
          });
        } else
          s.Z.instantBatchUpload({
            channelId: t.id,
            files: e,
            draftType: l,
            isThumbnail: f,
            filesMetadata: r,
          });
      }
    },
    979956: function (e, t, l) {
      l.d(t, {
        BK: function () {
          return r;
        },
        Bf: function () {
          return d;
        },
        KZ: function () {
          return u;
        },
      }),
        l(724458),
        l(653041);
      var i = l(476326),
        n = l(403182),
        s = l(74538),
        a = l(474936),
        o = l(689938);
      function r(e, t) {
        let l = n.Ng(n.dg(t));
        return s.ZP.isPremium(e, a.p9.TIER_2)
          ? o.Z.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({ maxSize: l })
          : s.ZP.isPremium(e, a.p9.TIER_1)
            ? o.Z.Messages.UPLOAD_AREA_TOO_LARGE_HELP_PREMIUM_TIER_1.format({
                maxSize: l,
              })
            : o.Z.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({ maxSize: l });
      }
      function d(e, t) {
        return n.nA(e, t) || n.vY(e);
      }
      function u(e) {
        return e.reduce(
          (e, t) => (t.item.platform === i.ow.WEB && e.push(t.item.file), e),
          [],
        );
      }
    },
    947251: function (e, t, l) {
      e.exports = {
        modalRoot: "modalRoot_f94590",
        modal: "modal_f94590",
        modalFooter: "modalFooter_f94590",
        header: "header_f94590",
        forumPost: "forumPost_f94590",
        cancelButton: "cancelButton_f94590",
        dontAddButton: "dontAddButton_f94590",
      };
    },
    813778: function (e, t, l) {
      e.exports = {
        pill: "pill_c993da",
        clickable: "clickable_c993da",
        disabled: "disabled_c993da",
        small: "small_c993da",
        selected: "selected_c993da",
        emoji: "emoji_c993da",
        closeCircle: "closeCircle_c993da emoji_c993da",
        close: "close_c993da",
        tooltipPill: "tooltipPill_c993da",
      };
    },
    697741: function (e, t, l) {
      l.d(t, {
        $: function () {
          return v;
        },
      });
      let i = {
          ational: "ate",
          tional: "tion",
          enci: "ence",
          anci: "ance",
          izer: "ize",
          bli: "ble",
          alli: "al",
          entli: "ent",
          eli: "e",
          ousli: "ous",
          ization: "ize",
          ation: "ate",
          ator: "ate",
          alism: "al",
          iveness: "ive",
          fulness: "ful",
          ousness: "ous",
          aliti: "al",
          iviti: "ive",
          biliti: "ble",
          logi: "log",
        },
        n = {
          icate: "ic",
          ative: "",
          alize: "al",
          iciti: "ic",
          ical: "ic",
          ful: "",
          ness: "",
        },
        s = "[aeiouy]",
        a = "([^aeiou][^aeiouy]*)",
        o = "(" + s + "[aeiou]*)",
        r = RegExp("^" + a + "?" + o + a),
        d = RegExp("^" + a + "?" + o + a + o + "?$"),
        u = RegExp("^" + a + "?(" + o + a + "){2,}"),
        c = RegExp("^" + a + "?" + s),
        _ = RegExp("^" + a + s + "[^aeiouwxy]$"),
        m = /ll$/,
        f = /^(.+?)e$/,
        g = /^(.+?)y$/,
        h = /^(.+?(s|t))(ion)$/,
        E = /^(.+?)(ed|ing)$/,
        A = /(at|bl|iz)$/,
        p = /^(.+?)eed$/,
        M = /^.+?[^s]s$/,
        x = /^.+?(ss|i)es$/,
        I = /([^aeiouylsz])\1$/,
        T =
          /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,
        O = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
        R =
          /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;
      function v(e) {
        let t,
          l = String(e).toLowerCase();
        if (l.length < 3) return l;
        let s = !1;
        return (
          121 === l.codePointAt(0) && ((s = !0), (l = "Y" + l.slice(1))),
          x.test(l) ? (l = l.slice(0, -2)) : M.test(l) && (l = l.slice(0, -1)),
          (t = p.exec(l))
            ? r.test(t[1]) && (l = l.slice(0, -1))
            : (t = E.exec(l)) &&
              c.test(t[1]) &&
              ((l = t[1]),
              A.test(l)
                ? (l += "e")
                : I.test(l)
                  ? (l = l.slice(0, -1))
                  : _.test(l) && (l += "e")),
          (t = g.exec(l)) && c.test(t[1]) && (l = t[1] + "i"),
          (t = T.exec(l)) && r.test(t[1]) && (l = t[1] + i[t[2]]),
          (t = O.exec(l)) && r.test(t[1]) && (l = t[1] + n[t[2]]),
          (t = R.exec(l))
            ? u.test(t[1]) && (l = t[1])
            : (t = h.exec(l)) && u.test(t[1]) && (l = t[1]),
          (t = f.exec(l)) &&
            (u.test(t[1]) || (d.test(t[1]) && !_.test(t[1]))) &&
            (l = t[1]),
          m.test(l) && u.test(l) && (l = l.slice(0, -1)),
          s && (l = "y" + l.slice(1)),
          l
        );
      }
    },
  },
]);
//# sourceMappingURL=04e4ded9def8f05d8617.js.map
