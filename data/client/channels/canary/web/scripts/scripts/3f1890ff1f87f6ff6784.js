"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["15503"],
  {
    700582: function (e, t, i) {
      var n = i(200651),
        l = i(192379),
        a = i(481060),
        s = i(372900);
      t.Z = l.memo(function (e) {
        var t, i, r, o;
        let {
            user: d,
            size: u = a.AvatarSizes.SIZE_32,
            animate: c = !1,
            "aria-hidden": m = !1,
            ...f
          } = e,
          h = l.useContext(s.Z);
        return (0, n.jsx)(a.Avatar, {
          src:
            ((t = d),
            (i = (0, a.getAvatarSize)(u)),
            (r = c),
            (o = h),
            t.getAvatarURL(o, i, r)),
          size: u,
          "aria-label": m ? void 0 : d.username,
          "aria-hidden": m,
          ...f,
        });
      });
    },
    273602: function (e, t, i) {
      i.r(t),
        i.d(t, {
          default: function () {
            return z;
          },
        }),
        i(47120);
      var n = i(200651),
        l = i(192379),
        a = i(442837),
        s = i(481060),
        r = i(904245),
        o = i(166459),
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
        v = i(127654),
        E = i(979956),
        b = i(228392),
        I = i(404616),
        j = i(470623),
        C = i(981631),
        M = i(231338),
        S = i(388032),
        P = i(947251);
      function z(e) {
        var t;
        let {
            threadId: i,
            attachments: z,
            sendMessage: A,
            transitionState: y,
            onClose: T,
          } = e,
          Z = (0, u.Dt)(),
          w = (0, a.e7)([f.Z], () => f.Z.getChannel(i), [i]),
          L = (0, a.e7)(
            [g.Z],
            () => g.Z.getGuild(null == w ? void 0 : w.getGuildId()),
            [w],
          ),
          N = (0, a.e7)(
            [f.Z],
            () => f.Z.getChannel(null == w ? void 0 : w.parent_id),
            [w],
          ),
          R = null === (t = z[0]) || void 0 === t ? void 0 : t.item,
          [B, U] = l.useState(null);
        l.useEffect(() => {
          null != R && (0, m.Fq)(R.file, (e, t) => U(e), M.dG);
        }, [R]);
        let D =
            null != R && null != B
              ? {
                  src: B,
                  width: I.TJ,
                  height: I.Lp,
                  spoiler: z[0].spoiler,
                  alt: z[0].description,
                }
              : null,
          [k, G] = l.useState(!1),
          O = l.useCallback(() => {
            (0, b.xI)({ added: !1 }), A(), T();
          }, [A, T]),
          $ = l.useCallback(() => {
            null != w &&
              null != L &&
              ((0, b.xI)({ added: !0 }),
              !(function (e) {
                let {
                    thread: t,
                    attachments: i,
                    setIsUploading: n,
                    guild: l,
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
                  n(!0);
                }),
                  s.on("progress", (e) => {
                    let r = (0, x.dg)(l.id);
                    e.currentSize > r &&
                      (s.cancel(), n(!1), a(), (0, v.G)(t, (0, E.KZ)(i)));
                  }),
                  s.on("error", (e, i, l) => {
                    n(!1),
                      i === C.evJ.EXPLICIT_CONTENT &&
                        (a(),
                        r.Z.sendExplicitMediaClydeError(
                          t.id,
                          null == l ? void 0 : l.attachments,
                          c.UU.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED,
                        ),
                        o.Z.clearAll(t.id, h.d.ChannelMessage));
                  }),
                  s.on("complete", () => {
                    n(!1), a(), o.Z.clearAll(t.id, h.d.ChannelMessage);
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
                thread: w,
                attachments: z,
                setIsUploading: G,
                guild: L,
                onClose: T,
              }));
          }, [w, z, G, L, T]);
        return null == N
          ? null
          : (0, n.jsxs)(s.ModalRoot, {
              transitionState: y,
              size: s.ModalSize.SMALL,
              className: P.modalRoot,
              "aria-labelledby": Z,
              children: [
                (0, n.jsxs)(s.ModalContent, {
                  className: P.modal,
                  children: [
                    (0, n.jsx)(s.Heading, {
                      variant: "heading-md/semibold",
                      className: P.header,
                      id: Z,
                      children: S.intl.string(S.t.hMWWMT),
                    }),
                    (0, n.jsx)(s.Text, {
                      variant: "text-md/normal",
                      className: P.__invalid_body,
                      children: S.intl.string(S.t.zMsUsr),
                    }),
                    (0, n.jsx)("div", {
                      className: P.forumPost,
                      children: (0, n.jsx)(j.oL, {
                        createStore: () => (0, j.NU)(N),
                        children: (0, n.jsx)(I.ZP, {
                          threadId: i,
                          goToThread: M.dG,
                          overrideMedia: D,
                        }),
                      }),
                    }),
                  ],
                }),
                (0, n.jsxs)(s.ModalFooter, {
                  className: P.modalFooter,
                  children: [
                    (0, n.jsx)(s.Button, {
                      look: s.Button.Looks.BLANK,
                      className: P.cancelButton,
                      disabled: k,
                      onClick: T,
                      children: S.intl.string(S.t["ETE/oK"]),
                    }),
                    (0, n.jsx)(s.Button, {
                      color: s.Button.Colors.PRIMARY,
                      className: P.dontAddButton,
                      disabled: k,
                      onClick: O,
                      children: S.intl.string(S.t["8rKVHB"]),
                    }),
                    (0, n.jsx)(s.Button, {
                      color: s.Button.Colors.BRAND,
                      className: P.__invalid_button,
                      submitting: k,
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
          return E;
        },
        f: function () {
          return b;
        },
      }),
        i(47120);
      var n,
        l,
        a = i(200651),
        s = i(192379),
        r = i(120356),
        o = i.n(r),
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
        v = i(813778);
      function E(e) {
        let {
            tag: t,
            size: n = 1,
            disabled: l,
            className: r,
            onClick: E,
            onRemove: b,
            selected: I,
            ariaLabel: j,
          } = e,
          { name: C, emojiId: M, emojiName: S } = t,
          P = null != b,
          [z, A] = s.useState(!1),
          y = (0, u.e7)([g.ZP], () =>
            null != M ? g.ZP.getUsableCustomEmojiById(M) : null,
          ),
          T = P || null != E,
          Z = (!P || !z) && (null != M || null != S),
          w = 0 === n,
          L = s.useRef(null),
          N = (0, u.e7)([h.Z], () => h.Z.keyboardModeEnabled),
          R = (e) => {
            let n = p.Sb.getSetting();
            x.wS &&
              n &&
              (0, m.jW)(e, async () => {
                let { default: e } = await i.e("29646").then(i.bind(i, 955116));
                return (i) => (0, a.jsx)(e, { ...i, tag: t });
              });
          },
          B = (0, a.jsxs)(a.Fragment, {
            children: [
              Z
                ? (0, a.jsx)(f.Z, {
                    className: o()(v.emoji, { [v.small]: w }),
                    emojiId: M,
                    emojiName: S,
                    animated: !!(null == y ? void 0 : y.animated),
                    size: "reaction",
                  })
                : null,
              z &&
                P &&
                (0, a.jsx)("div", {
                  className: v.closeCircle,
                  children: (0, a.jsx)(c.XSmallIcon, {
                    size: "md",
                    color: "currentColor",
                    className: v.close,
                  }),
                }),
              (0, a.jsx)(c.Text, {
                variant: w ? "text-xs/semibold" : "text-sm/semibold",
                lineClamp: 1,
                children: C,
              }),
            ],
          }),
          U = {
            key: t.id,
            className: o()(
              v.pill,
              {
                [v.disabled]: l,
                [v.clickable]: T,
                [v.small]: w,
                [v.selected]: I,
              },
              r,
            ),
            onClick: (e) => {
              null == E || E(e),
                null == b || b(t),
                !N && null != L.current && L.current.blur();
            },
            onContextMenu: (e) => R(e),
            onMouseEnter: () => P && A(!0),
            onMouseLeave: () => P && A(!1),
          },
          D = (0, d.JA)("forum-tag-".concat(t.id));
        return T
          ? (0, a.jsx)(c.Clickable, {
              ...D,
              innerRef: L,
              focusProps: { ringTarget: L },
              "aria-label":
                null != j
                  ? j
                  : _.intl.formatToPlainString(_.t.iyRTLi, { tagName: C }),
              role: "button",
              "aria-pressed": I,
              ...U,
              children: B,
            })
          : (0, a.jsx)("div", { ...U, children: B });
      }
      function b(e) {
        let { tags: t, count: i, size: n = 1 } = e,
          l = 0 === n;
        return (0, a.jsx)(c.Tooltip, {
          "aria-label": _.intl.string(_.t["P/y+sr"]),
          text: (0, a.jsx)(a.Fragment, {
            children: t.map((e) =>
              (0, a.jsx)(
                E,
                { tag: e, className: v.tooltipPill, size: E.Sizes.SMALL },
                e.id,
              ),
            ),
          }),
          children: (e) =>
            (0, a.jsx)("div", {
              ...e,
              className: o()(v.pill, { [v.small]: l }),
              children: (0, a.jsxs)(c.Text, {
                variant: l ? "text-xs/semibold" : "text-sm/semibold",
                children: ["+", i],
              }),
            }),
        });
      }
      ((l = n || (n = {}))[(l.SMALL = 0)] = "SMALL"),
        (l[(l.MEDIUM = 1)] = "MEDIUM"),
        (E.Sizes = n);
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
          return r;
        },
        xS: function () {
          return o;
        },
      }),
        i(411104);
      var n = i(200651);
      i(192379);
      var l = i(239091);
      function a(e, t, a) {
        a.isGroupDM()
          ? (0, l.jW)(e, async () => {
              let { default: e } = await Promise.all([
                i.e("50506"),
                i.e("79695"),
                i.e("51269"),
                i.e("13351"),
                i.e("33862"),
                i.e("92453"),
                i.e("38718"),
              ]).then(i.bind(i, 354589));
              return (i) => (0, n.jsx)(e, { ...i, user: t, channel: a });
            })
          : a.isDM()
            ? (0, l.jW)(e, async () => {
                let { default: e } = await Promise.all([
                  i.e("50506"),
                  i.e("79695"),
                  i.e("51269"),
                  i.e("13351"),
                  i.e("33862"),
                  i.e("70205"),
                  i.e("92453"),
                  i.e("56826"),
                  i.e("71427"),
                ]).then(i.bind(i, 131404));
                return (i) =>
                  (0, n.jsx)(e, {
                    ...i,
                    user: t,
                    channel: a,
                    showMute: !1,
                    targetIsUser: !0,
                  });
              })
            : null != a.guild_id
              ? (0, l.jW)(e, async () => {
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
                    (0, n.jsx)(e, {
                      ...i,
                      user: t,
                      channel: a,
                      guildId: a.guild_id,
                    });
                })
              : (0, l.jW)(e, async () => {
                  let { default: e } = await Promise.all([
                    i.e("79695"),
                    i.e("69220"),
                    i.e("50261"),
                  ]).then(i.bind(i, 881351));
                  return (i) => (0, n.jsx)(e, { ...i, user: t });
                });
      }
      function s(e, t) {
        let { user: a, channel: s, moderationAlertId: r, guildId: o, ...d } = t;
        if (
          (null == s ? void 0 : s.isGroupDM()) ||
          (null == s ? void 0 : s.isDM())
        )
          throw Error("Cannot moderate user in DM or group DM");
        let u = null != o ? o : null == s ? void 0 : s.getGuildId();
        null != u &&
          (0, l.jW)(e, async () => {
            let { default: e } = await Promise.all([
              i.e("13125"),
              i.e("33685"),
            ]).then(i.bind(i, 833737));
            return (t) =>
              (0, n.jsx)(e, {
                ...t,
                user: a,
                channelId: null == s ? void 0 : s.id,
                guildId: u,
                moderationAlertId: r,
                ...d,
              });
          });
      }
      function r(e, t) {
        let {
          user: a,
          guildId: s,
          analyticsLocations: r,
          onCloseContextMenu: o,
          isViewOnly: d,
        } = t;
        (0, l.jW)(e, async () => {
          let { default: e } = await i.e("45130").then(i.bind(i, 246389));
          return (t) =>
            (0, n.jsx)(e, {
              ...t,
              user: a,
              guildId: s,
              analyticsLocations: r,
              onCloseContextMenu: o,
              isViewOnly: d,
            });
        });
      }
      function o(e, t, a) {
        null != a &&
          (0, l.jW)(e, async () => {
            let { default: e } = await i.e("50331").then(i.bind(i, 158195));
            return (t) => (0, n.jsx)(e, { ...t, guildId: a });
          });
      }
    },
    127654: function (e, t, i) {
      i.d(t, {
        G: function () {
          return E;
        },
        d: function () {
          return b;
        },
      }),
        i(653041),
        i(47120),
        i(411104);
      var n = i(475179),
        l = i(166459),
        a = i(966390),
        s = i(531643),
        r = i(476326),
        o = i(367907),
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
        v = i(388032);
      function E(e, t) {
        let i = c.default.getCurrentUser(),
          n = e.getGuildId(),
          l = f.dg(n),
          a = [],
          r = 0,
          d = 0,
          u = 0,
          m = [];
        for (let e of t)
          (u += 1),
            (r += e.size),
            a.push(e.size),
            e.size > d && (d = e.size),
            null != e.type ? m.push(e.type) : m.push("unknown");
        if (d > l) {
          (0, o.yw)(p.rMx.FILE_SIZE_LIMIT_EXCEEDED, {
            channel_id: e.id,
            guild_id: n,
            user_individual_file_size_limit: l,
            pre_compression_file_sizes: a,
            pre_compression_aggregate_file_size: r,
            num_attachments: u,
            error_type: x.xi.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
            attachment_mimetypes: m,
          }),
            (0, s.openUploadError)({
              title: v.intl.string(v.t["/tGlcn"]),
              help: (0, g.BK)(i, n),
              showPremiumUpsell: !(0, h.M5)(i, _.p9.TIER_2),
              fileSize: d,
            });
          return;
        }
        (0, s.openUploadError)({
          title: v.intl.string(v.t["/tGlcn"]),
          help: v.intl.formatToPlainString(v.t.tUOJdH, {
            maxSize: f.Ng(f.OC()),
          }),
        });
      }
      function b(e, t, i) {
        let {
          filesMetadata: o,
          requireConfirm: c = !0,
          showLargeMessageDialog: f = !1,
          isThumbnail: h = !1,
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (e.length < 1) return;
        if (null != o && o.length !== e.length)
          throw Error("Unexpected mismatch between files and file metadata");
        let x = t.getGuildId();
        if ((0, g.Bf)(e, x)) {
          E(t, e);
          return;
        }
        if (u.Z.getUploadCount(t.id, i) + e.length > p.dN1) {
          (0, s.openUploadError)({
            title: v.intl.string(v.t.wOr6hI),
            help: v.intl.formatToPlainString(v.t["qqyp/f"], { limit: p.dN1 }),
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
            n.Z.updateChatOpen(t.id, !0),
          c)
        ) {
          let n = Array.from(e).map((e, t) => ({
            file: e,
            platform: r.ow.WEB,
            isThumbnail: h,
            ...(null == o ? void 0 : o[t]),
          }));
          l.Z.addFiles({
            files: n,
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
            filesMetadata: o,
          });
      }
    },
    979956: function (e, t, i) {
      i.d(t, {
        BK: function () {
          return o;
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
      var n = i(476326),
        l = i(403182),
        a = i(74538),
        s = i(474936),
        r = i(388032);
      function o(e, t) {
        let i = l.Ng(l.dg(t));
        return a.ZP.isPremium(e, s.p9.TIER_2)
          ? r.intl.formatToPlainString(r.t.fxEKdX, { maxSize: i })
          : a.ZP.isPremium(e, s.p9.TIER_1)
            ? r.intl.formatToPlainString(r.t["Nr+Lsb"], { maxSize: i })
            : r.intl.formatToPlainString(r.t.fxEKdX, { maxSize: i });
      }
      function d(e, t) {
        return l.nA(e, t) || l.vY(e);
      }
      function u(e) {
        return e.reduce(
          (e, t) => (t.item.platform === n.ow.WEB && e.push(t.item.file), e),
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
      let n = {
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
        l = {
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
        r = "(" + a + "[aeiou]*)",
        o = RegExp("^" + s + "?" + r + s),
        d = RegExp("^" + s + "?" + r + s + r + "?$"),
        u = RegExp("^" + s + "?(" + r + s + "){2,}"),
        c = RegExp("^" + s + "?" + a),
        m = RegExp("^" + s + a + "[^aeiouwxy]$"),
        f = /ll$/,
        h = /^(.+?)e$/,
        g = /^(.+?)y$/,
        p = /^(.+?(s|t))(ion)$/,
        x = /^(.+?)(ed|ing)$/,
        _ = /(at|bl|iz)$/,
        v = /^(.+?)eed$/,
        E = /^.+?[^s]s$/,
        b = /^.+?(ss|i)es$/,
        I = /([^aeiouylsz])\1$/,
        j =
          /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,
        C = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
        M =
          /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;
      function S(e) {
        let t,
          i = String(e).toLowerCase();
        if (i.length < 3) return i;
        let a = !1;
        return (
          121 === i.codePointAt(0) && ((a = !0), (i = "Y" + i.slice(1))),
          b.test(i) ? (i = i.slice(0, -2)) : E.test(i) && (i = i.slice(0, -1)),
          (t = v.exec(i))
            ? o.test(t[1]) && (i = i.slice(0, -1))
            : (t = x.exec(i)) &&
              c.test(t[1]) &&
              ((i = t[1]),
              _.test(i)
                ? (i += "e")
                : I.test(i)
                  ? (i = i.slice(0, -1))
                  : m.test(i) && (i += "e")),
          (t = g.exec(i)) && c.test(t[1]) && (i = t[1] + "i"),
          (t = j.exec(i)) && o.test(t[1]) && (i = t[1] + n[t[2]]),
          (t = C.exec(i)) && o.test(t[1]) && (i = t[1] + l[t[2]]),
          (t = M.exec(i))
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
    588744: function (e, t, i) {
      i.d(t, {
        Z: function () {
          return u;
        },
      });
      var n = i(192379),
        l = i(454e3);
      let {
        createElement: a,
        createContext: s,
        useContext: r,
        useMemo: o,
        useRef: d,
      } = n;
      function u() {
        console.warn(
          "[DEPRECATED] `context` will be removed in a future version. Instead use `import { createStore, useStore } from 'zustand'`. See: https://github.com/pmndrs/zustand/discussions/1180.",
        );
        let e = s(void 0);
        return {
          Provider: ({ createStore: t, children: i }) => {
            let n = d();
            return (
              !n.current && (n.current = t()),
              a(e.Provider, { value: n.current }, i)
            );
          },
          useStore: (t, i) => {
            let n = r(e);
            if (!n)
              throw Error(
                "Seems like you have not used zustand provider as an ancestor.",
              );
            return (0, l.s)(n, t, i);
          },
          useStoreApi: () => {
            let t = r(e);
            if (!t)
              throw Error(
                "Seems like you have not used zustand provider as an ancestor.",
              );
            return o(() => ({ ...t }), [t]);
          },
        };
      }
    },
  },
]);
//# sourceMappingURL=3f1890ff1f87f6ff6784.js.map
