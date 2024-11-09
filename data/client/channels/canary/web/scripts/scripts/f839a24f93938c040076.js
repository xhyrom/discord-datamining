"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["32525"],
  {
    905642: function (e, t, i) {
      i.d(t, {
        Z: function () {
          return n;
        },
      });
      var l = i(192379);
      function n() {
        let e = (0, l.createContext)(void 0);
        return {
          Provider: ({ initialStore: t, createStore: i, children: n }) => {
            let a = (0, l.useRef)();
            return (
              !a.current &&
                (t &&
                  (console.warn(
                    "Provider initialStore is deprecated and will be removed in the next version.",
                  ),
                  !i && (i = () => t)),
                (a.current = i())),
              (0, l.createElement)(e.Provider, { value: a.current }, n)
            );
          },
          useStore: (t, i = Object.is) => {
            let n = (0, l.useContext)(e);
            if (!n)
              throw Error(
                "Seems like you have not used zustand provider as an ancestor.",
              );
            return n(t, i);
          },
          useStoreApi: () => {
            let t = (0, l.useContext)(e);
            if (!t)
              throw Error(
                "Seems like you have not used zustand provider as an ancestor.",
              );
            return (0, l.useMemo)(
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
    273602: function (e, t, i) {
      i.r(t),
        i.d(t, {
          default: function () {
            return y;
          },
        }),
        i(47120);
      var l = i(200651),
        n = i(192379),
        a = i(442837),
        s = i(481060),
        o = i(904245),
        r = i(166459),
        d = i(680287),
        u = i(313201),
        c = i(247206),
        m = i(813197),
        f = i(592125),
        h = i(703558),
        g = i(430824),
        p = i(375954),
        x = i(403182),
        _ = i(709054),
        b = i(127654),
        v = i(979956),
        E = i(228392),
        M = i(404616),
        j = i(470623),
        C = i(981631),
        I = i(231338),
        S = i(388032),
        P = i(947251);
      function y(e) {
        var t;
        let {
            threadId: i,
            attachments: y,
            sendMessage: T,
            transitionState: z,
            onClose: A,
          } = e,
          w = (0, u.Dt)(),
          Z = (0, a.e7)([f.Z], () => f.Z.getChannel(i), [i]),
          N = (0, a.e7)(
            [g.Z],
            () => g.Z.getGuild(null == Z ? void 0 : Z.getGuildId()),
            [Z],
          ),
          L = (0, a.e7)(
            [f.Z],
            () => f.Z.getChannel(null == Z ? void 0 : Z.parent_id),
            [Z],
          ),
          R = null === (t = y[0]) || void 0 === t ? void 0 : t.item,
          [B, U] = n.useState(null);
        n.useEffect(() => {
          null != R && (0, m.Fq)(R.file, (e, t) => U(e), I.dG);
        }, [R]);
        let k =
            null != R && null != B
              ? {
                  src: B,
                  width: M.TJ,
                  height: M.Lp,
                  spoiler: y[0].spoiler,
                  alt: y[0].description,
                }
              : null,
          [D, O] = n.useState(!1),
          G = n.useCallback(() => {
            (0, E.xI)({ added: !1 }), T(), A();
          }, [T, A]),
          $ = n.useCallback(() => {
            null != Z &&
              null != N &&
              ((0, E.xI)({ added: !0 }),
              !(function (e) {
                let {
                    thread: t,
                    attachments: i,
                    setIsUploading: l,
                    guild: n,
                    onClose: a,
                  } = e,
                  s = new d.Z(
                    C.ANM.MESSAGE(
                      t.id,
                      _.default.castChannelIdAsMessageId(t.id),
                    ),
                    "PATCH",
                  );
                s.on("start", () => {
                  l(!0);
                }),
                  s.on("progress", (e) => {
                    let o = (0, x.dg)(n.id);
                    e.currentSize > o &&
                      (s.cancel(), l(!1), a(), (0, b.G)(t, (0, v.KZ)(i)));
                  }),
                  s.on("error", (e, i, n) => {
                    l(!1),
                      i === C.evJ.EXPLICIT_CONTENT &&
                        (a(),
                        o.Z.sendExplicitMediaClydeError(
                          t.id,
                          null == n ? void 0 : n.attachments,
                          c.UU.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED,
                        ),
                        r.Z.clearAll(t.id, h.d.ChannelMessage));
                  }),
                  s.on("complete", () => {
                    l(!1), a(), r.Z.clearAll(t.id, h.d.ChannelMessage);
                  });
                let u = p.Z.getMessages(t.id).get(
                    _.default.castChannelIdAsMessageId(t.id),
                  ),
                  m = null != u ? u.attachments : [];
                s.uploadFiles(
                  i,
                  { attachments: [...m] },
                  { addFilesTo: "attachments" },
                );
              })({
                thread: Z,
                attachments: y,
                setIsUploading: O,
                guild: N,
                onClose: A,
              }));
          }, [Z, y, O, N, A]);
        return null == L
          ? null
          : (0, l.jsxs)(s.ModalRoot, {
              transitionState: z,
              size: s.ModalSize.SMALL,
              className: P.modalRoot,
              "aria-labelledby": w,
              children: [
                (0, l.jsxs)(s.ModalContent, {
                  className: P.modal,
                  children: [
                    (0, l.jsx)(s.Heading, {
                      variant: "heading-md/semibold",
                      className: P.header,
                      id: w,
                      children: S.intl.string(S.t.hMWWMT),
                    }),
                    (0, l.jsx)(s.Text, {
                      variant: "text-md/normal",
                      className: P.__invalid_body,
                      children: S.intl.string(S.t.zMsUsr),
                    }),
                    (0, l.jsx)("div", {
                      className: P.forumPost,
                      children: (0, l.jsx)(j.oL, {
                        createStore: () => (0, j.NU)(L),
                        children: (0, l.jsx)(M.ZP, {
                          threadId: i,
                          goToThread: I.dG,
                          overrideMedia: k,
                        }),
                      }),
                    }),
                  ],
                }),
                (0, l.jsxs)(s.ModalFooter, {
                  className: P.modalFooter,
                  children: [
                    (0, l.jsx)(s.Button, {
                      look: s.Button.Looks.BLANK,
                      className: P.cancelButton,
                      disabled: D,
                      onClick: A,
                      children: S.intl.string(S.t["ETE/oK"]),
                    }),
                    (0, l.jsx)(s.Button, {
                      color: s.Button.Colors.PRIMARY,
                      className: P.dontAddButton,
                      disabled: D,
                      onClick: G,
                      children: S.intl.string(S.t["8rKVHB"]),
                    }),
                    (0, l.jsx)(s.Button, {
                      color: s.Button.Colors.BRAND,
                      className: P.__invalid_button,
                      submitting: D,
                      onClick: $,
                      autoFocus: !0,
                      children: S.intl.string(S.t.d611xM),
                    }),
                  ],
                }),
              ],
            });
      }
    },
    479099: function (e, t, i) {
      i.d(t, {
        Z: function () {
          return v;
        },
        f: function () {
          return E;
        },
      }),
        i(47120);
      var l,
        n,
        a = i(200651),
        s = i(192379),
        o = i(120356),
        r = i.n(o),
        d = i(91192),
        u = i(442837),
        c = i(481060),
        m = i(239091),
        f = i(596454),
        h = i(607070),
        g = i(339085),
        p = i(695346),
        x = i(572004),
        _ = i(388032),
        b = i(813778);
      function v(e) {
        let {
            tag: t,
            size: l = 1,
            disabled: n,
            className: o,
            onClick: v,
            onRemove: E,
            selected: M,
            ariaLabel: j,
          } = e,
          { name: C, emojiId: I, emojiName: S } = t,
          P = null != E,
          [y, T] = s.useState(!1),
          z = (0, u.e7)([g.ZP], () =>
            null != I ? g.ZP.getUsableCustomEmojiById(I) : null,
          ),
          A = P || null != v,
          w = (!P || !y) && (null != I || null != S),
          Z = 0 === l,
          N = s.useRef(null),
          L = (0, u.e7)([h.Z], () => h.Z.keyboardModeEnabled),
          R = (e) => {
            let l = p.Sb.getSetting();
            x.wS &&
              l &&
              (0, m.jW)(e, async () => {
                let { default: e } = await i.e("29646").then(i.bind(i, 955116));
                return (i) => (0, a.jsx)(e, { ...i, tag: t });
              });
          },
          B = (0, a.jsxs)(a.Fragment, {
            children: [
              w
                ? (0, a.jsx)(f.Z, {
                    className: r()(b.emoji, { [b.small]: Z }),
                    emojiId: I,
                    emojiName: S,
                    animated: !!(null == z ? void 0 : z.animated),
                    size: "reaction",
                  })
                : null,
              y &&
                P &&
                (0, a.jsx)("div", {
                  className: b.closeCircle,
                  children: (0, a.jsx)(c.XSmallIcon, {
                    size: "md",
                    color: "currentColor",
                    className: b.close,
                  }),
                }),
              (0, a.jsx)(c.Text, {
                variant: Z ? "text-xs/semibold" : "text-sm/semibold",
                lineClamp: 1,
                children: C,
              }),
            ],
          }),
          U = {
            key: t.id,
            className: r()(
              b.pill,
              {
                [b.disabled]: n,
                [b.clickable]: A,
                [b.small]: Z,
                [b.selected]: M,
              },
              o,
            ),
            onClick: (e) => {
              null == v || v(e),
                null == E || E(t),
                !L && null != N.current && N.current.blur();
            },
            onContextMenu: (e) => R(e),
            onMouseEnter: () => P && T(!0),
            onMouseLeave: () => P && T(!1),
          },
          k = (0, d.JA)("forum-tag-".concat(t.id));
        return A
          ? (0, a.jsx)(c.Clickable, {
              ...k,
              innerRef: N,
              focusProps: { ringTarget: N },
              "aria-label":
                null != j
                  ? j
                  : _.intl.formatToPlainString(_.t.iyRTLi, { tagName: C }),
              role: "button",
              "aria-pressed": M,
              ...U,
              children: B,
            })
          : (0, a.jsx)("div", { ...U, children: B });
      }
      function E(e) {
        let { tags: t, count: i, size: l = 1 } = e,
          n = 0 === l;
        return (0, a.jsx)(c.Tooltip, {
          "aria-label": _.intl.string(_.t["P/y+sr"]),
          text: (0, a.jsx)(a.Fragment, {
            children: t.map((e) =>
              (0, a.jsx)(
                v,
                { tag: e, className: b.tooltipPill, size: v.Sizes.SMALL },
                e.id,
              ),
            ),
          }),
          children: (e) =>
            (0, a.jsx)("div", {
              ...e,
              className: r()(b.pill, { [b.small]: n }),
              children: (0, a.jsxs)(c.Text, {
                variant: n ? "text-xs/semibold" : "text-sm/semibold",
                children: ["+", i],
              }),
            }),
        });
      }
      ((n = l || (l = {}))[(n.SMALL = 0)] = "SMALL"),
        (n[(n.MEDIUM = 1)] = "MEDIUM"),
        (v.Sizes = l);
    },
    91047: function (e, t, i) {
      i.d(t, {
        Pv: function () {
          return a;
        },
        _j: function () {
          return s;
        },
        nm: function () {
          return o;
        },
        xS: function () {
          return r;
        },
      }),
        i(411104);
      var l = i(200651);
      i(192379);
      var n = i(239091);
      function a(e, t, a) {
        a.isGroupDM()
          ? (0, n.jW)(e, async () => {
              let { default: e } = await Promise.all([
                i.e("50506"),
                i.e("79695"),
                i.e("51269"),
                i.e("13351"),
                i.e("33862"),
                i.e("92453"),
                i.e("38718"),
              ]).then(i.bind(i, 354589));
              return (i) => (0, l.jsx)(e, { ...i, user: t, channel: a });
            })
          : a.isDM()
            ? (0, n.jW)(e, async () => {
                let { default: e } = await Promise.all([
                  i.e("50506"),
                  i.e("79695"),
                  i.e("51269"),
                  i.e("13351"),
                  i.e("33862"),
                  i.e("70348"),
                  i.e("92453"),
                  i.e("70205"),
                  i.e("56826"),
                  i.e("41271"),
                ]).then(i.bind(i, 131404));
                return (i) =>
                  (0, l.jsx)(e, {
                    ...i,
                    user: t,
                    channel: a,
                    showMute: !1,
                    targetIsUser: !0,
                  });
              })
            : null != a.guild_id
              ? (0, n.jW)(e, async () => {
                  let { default: e } = await Promise.all([
                    i.e("50506"),
                    i.e("79695"),
                    i.e("51269"),
                    i.e("13351"),
                    i.e("33862"),
                    i.e("92453"),
                    i.e("13125"),
                    i.e("13441"),
                  ]).then(i.bind(i, 757387));
                  return (i) =>
                    (0, l.jsx)(e, {
                      ...i,
                      user: t,
                      channel: a,
                      guildId: a.guild_id,
                    });
                })
              : (0, n.jW)(e, async () => {
                  let { default: e } = await Promise.all([
                    i.e("79695"),
                    i.e("69220"),
                    i.e("50261"),
                  ]).then(i.bind(i, 881351));
                  return (i) => (0, l.jsx)(e, { ...i, user: t });
                });
      }
      function s(e, t) {
        let { user: a, channel: s, moderationAlertId: o, guildId: r, ...d } = t;
        if (
          (null == s ? void 0 : s.isGroupDM()) ||
          (null == s ? void 0 : s.isDM())
        )
          throw Error("Cannot moderate user in DM or group DM");
        let u = null != r ? r : null == s ? void 0 : s.getGuildId();
        null != u &&
          (0, n.jW)(e, async () => {
            let { default: e } = await Promise.all([
              i.e("13125"),
              i.e("33685"),
            ]).then(i.bind(i, 833737));
            return (t) =>
              (0, l.jsx)(e, {
                ...t,
                user: a,
                channelId: null == s ? void 0 : s.id,
                guildId: u,
                moderationAlertId: o,
                ...d,
              });
          });
      }
      function o(e, t) {
        let {
          user: a,
          guildId: s,
          analyticsLocations: o,
          onCloseContextMenu: r,
          isViewOnly: d,
        } = t;
        (0, n.jW)(e, async () => {
          let { default: e } = await i.e("45130").then(i.bind(i, 246389));
          return (t) =>
            (0, l.jsx)(e, {
              ...t,
              user: a,
              guildId: s,
              analyticsLocations: o,
              onCloseContextMenu: r,
              isViewOnly: d,
            });
        });
      }
      function r(e, t, a) {
        null != a &&
          (0, n.jW)(e, async () => {
            let { default: e } = await i.e("50331").then(i.bind(i, 158195));
            return (t) => (0, l.jsx)(e, { ...t, guildId: a });
          });
      }
    },
    127654: function (e, t, i) {
      i.d(t, {
        G: function () {
          return v;
        },
        d: function () {
          return E;
        },
      }),
        i(653041),
        i(47120),
        i(411104);
      var l = i(475179),
        n = i(166459),
        a = i(966390),
        s = i(531643),
        o = i(476326),
        r = i(367907),
        d = i(358221),
        u = i(117530),
        c = i(594174),
        m = i(626135),
        f = i(403182),
        h = i(74538),
        g = i(979956),
        p = i(981631),
        x = i(959517),
        _ = i(474936),
        b = i(388032);
      function v(e, t) {
        let i = c.default.getCurrentUser(),
          l = e.getGuildId(),
          n = f.dg(l),
          a = [],
          o = 0,
          d = 0,
          u = 0,
          m = [];
        for (let e of t)
          (u += 1),
            (o += e.size),
            a.push(e.size),
            e.size > d && (d = e.size),
            null != e.type ? m.push(e.type) : m.push("unknown");
        if (d > n) {
          (0, r.yw)(p.rMx.FILE_SIZE_LIMIT_EXCEEDED, {
            channel_id: e.id,
            guild_id: l,
            user_individual_file_size_limit: n,
            pre_compression_file_sizes: a,
            pre_compression_aggregate_file_size: o,
            num_attachments: u,
            error_type: x.xi.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
            attachment_mimetypes: m,
          }),
            (0, s.openUploadError)({
              title: b.intl.string(b.t["/tGlcn"]),
              help: (0, g.BK)(i, l),
              showPremiumUpsell: !(0, h.M5)(i, _.p9.TIER_2),
              fileSize: d,
            });
          return;
        }
        (0, s.openUploadError)({
          title: b.intl.string(b.t["/tGlcn"]),
          help: b.intl.formatToPlainString(b.t.tUOJdH, {
            maxSize: f.Ng(f.OC()),
          }),
        });
      }
      function E(e, t, i) {
        let {
          filesMetadata: r,
          requireConfirm: c = !0,
          showLargeMessageDialog: f = !1,
          isThumbnail: h = !1,
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (e.length < 1) return;
        if (null != r && r.length !== e.length)
          throw Error("Unexpected mismatch between files and file metadata");
        let x = t.getGuildId();
        if ((0, g.Bf)(e, x)) {
          v(t, e);
          return;
        }
        if (u.Z.getUploadCount(t.id, i) + e.length > p.dN1) {
          (0, s.openUploadError)({
            title: b.intl.string(b.t.wOr6hI),
            help: b.intl.formatToPlainString(b.t["qqyp/f"], { limit: p.dN1 }),
          }),
            m.default.track(p.rMx.UPLOAD_FILE_LIMIT_ERROR, {
              existing_count: u.Z.getUploadCount(t.id, i),
              new_count: e.length,
            });
          return;
        }
        if (
          ((t.type === p.d4z.GUILD_VOICE ||
            t.type === p.d4z.GUILD_STAGE_VOICE) &&
            !d.Z.getChatOpen(t.id) &&
            l.Z.updateChatOpen(t.id, !0),
          c)
        ) {
          let l = Array.from(e).map((e, t) => ({
            file: e,
            platform: o.ow.WEB,
            isThumbnail: h,
            ...(null == r ? void 0 : r[t]),
          }));
          n.Z.addFiles({
            files: l,
            channelId: t.id,
            showLargeMessageDialog: f,
            draftType: i,
          });
        } else
          a.Z.instantBatchUpload({
            channelId: t.id,
            files: e,
            draftType: i,
            isThumbnail: h,
            filesMetadata: r,
          });
      }
    },
    979956: function (e, t, i) {
      i.d(t, {
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
        i(724458),
        i(653041);
      var l = i(476326),
        n = i(403182),
        a = i(74538),
        s = i(474936),
        o = i(388032);
      function r(e, t) {
        let i = n.Ng(n.dg(t));
        return a.ZP.isPremium(e, s.p9.TIER_2)
          ? o.intl.formatToPlainString(o.t.fxEKdX, { maxSize: i })
          : a.ZP.isPremium(e, s.p9.TIER_1)
            ? o.intl.formatToPlainString(o.t["Nr+Lsb"], { maxSize: i })
            : o.intl.formatToPlainString(o.t.fxEKdX, { maxSize: i });
      }
      function d(e, t) {
        return n.nA(e, t) || n.vY(e);
      }
      function u(e) {
        return e.reduce(
          (e, t) => (t.item.platform === l.ow.WEB && e.push(t.item.file), e),
          [],
        );
      }
    },
    947251: function (e, t, i) {
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
    813778: function (e, t, i) {
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
    697741: function (e, t, i) {
      i.d(t, {
        $: function () {
          return S;
        },
      });
      let l = {
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
        a = "[aeiouy]",
        s = "([^aeiou][^aeiouy]*)",
        o = "(" + a + "[aeiou]*)",
        r = RegExp("^" + s + "?" + o + s),
        d = RegExp("^" + s + "?" + o + s + o + "?$"),
        u = RegExp("^" + s + "?(" + o + s + "){2,}"),
        c = RegExp("^" + s + "?" + a),
        m = RegExp("^" + s + a + "[^aeiouwxy]$"),
        f = /ll$/,
        h = /^(.+?)e$/,
        g = /^(.+?)y$/,
        p = /^(.+?(s|t))(ion)$/,
        x = /^(.+?)(ed|ing)$/,
        _ = /(at|bl|iz)$/,
        b = /^(.+?)eed$/,
        v = /^.+?[^s]s$/,
        E = /^.+?(ss|i)es$/,
        M = /([^aeiouylsz])\1$/,
        j =
          /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,
        C = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
        I =
          /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;
      function S(e) {
        let t,
          i = String(e).toLowerCase();
        if (i.length < 3) return i;
        let a = !1;
        return (
          121 === i.codePointAt(0) && ((a = !0), (i = "Y" + i.slice(1))),
          E.test(i) ? (i = i.slice(0, -2)) : v.test(i) && (i = i.slice(0, -1)),
          (t = b.exec(i))
            ? r.test(t[1]) && (i = i.slice(0, -1))
            : (t = x.exec(i)) &&
              c.test(t[1]) &&
              ((i = t[1]),
              _.test(i)
                ? (i += "e")
                : M.test(i)
                  ? (i = i.slice(0, -1))
                  : m.test(i) && (i += "e")),
          (t = g.exec(i)) && c.test(t[1]) && (i = t[1] + "i"),
          (t = j.exec(i)) && r.test(t[1]) && (i = t[1] + l[t[2]]),
          (t = C.exec(i)) && r.test(t[1]) && (i = t[1] + n[t[2]]),
          (t = I.exec(i))
            ? u.test(t[1]) && (i = t[1])
            : (t = p.exec(i)) && u.test(t[1]) && (i = t[1]),
          (t = h.exec(i)) &&
            (u.test(t[1]) || (d.test(t[1]) && !m.test(t[1]))) &&
            (i = t[1]),
          f.test(i) && u.test(i) && (i = i.slice(0, -1)),
          a && (i = "y" + i.slice(1)),
          i
        );
      }
    },
  },
]);
//# sourceMappingURL=f839a24f93938c040076.js.map
