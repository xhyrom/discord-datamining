"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["33897"],
  {
    273602: function (e, t, l) {
      l.r(t),
        l.d(t, {
          default: function () {
            return y;
          },
        }),
        l(47120);
      var n = l(200651),
        i = l(192379),
        a = l(442837),
        s = l(481060),
        o = l(904245),
        r = l(166459),
        d = l(680287),
        u = l(313201),
        c = l(247206),
        m = l(813197),
        f = l(592125),
        h = l(703558),
        g = l(430824),
        p = l(375954),
        x = l(403182),
        _ = l(709054),
        v = l(127654),
        E = l(979956),
        b = l(228392),
        I = l(404616),
        M = l(470623),
        j = l(981631),
        C = l(231338),
        S = l(388032),
        P = l(947251);
      function y(e) {
        var t;
        let {
            threadId: l,
            attachments: y,
            sendMessage: z,
            transitionState: T,
            onClose: A,
          } = e,
          w = (0, u.Dt)(),
          Z = (0, a.e7)([f.Z], () => f.Z.getChannel(l), [l]),
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
          [B, D] = i.useState(null);
        i.useEffect(() => {
          null != R && (0, m.Fq)(R.file, (e, t) => D(e), C.dG);
        }, [R]);
        let U =
            null != R && null != B
              ? {
                  src: B,
                  width: I.TJ,
                  height: I.Lp,
                  spoiler: y[0].spoiler,
                  alt: y[0].description,
                }
              : null,
          [k, G] = i.useState(!1),
          O = i.useCallback(() => {
            (0, b.xI)({ added: !1 }), z(), A();
          }, [z, A]),
          $ = i.useCallback(() => {
            null != Z &&
              null != N &&
              ((0, b.xI)({ added: !0 }),
              !(function (e) {
                let {
                    thread: t,
                    attachments: l,
                    setIsUploading: n,
                    guild: i,
                    onClose: a,
                  } = e,
                  s = new d.Z(
                    j.ANM.MESSAGE(
                      t.id,
                      _.default.castChannelIdAsMessageId(t.id),
                    ),
                    "PATCH",
                  );
                s.on("start", () => {
                  n(!0);
                }),
                  s.on("progress", (e) => {
                    let o = (0, x.dg)(i.id);
                    e.currentSize > o &&
                      (s.cancel(), n(!1), a(), (0, v.G)(t, (0, E.KZ)(l)));
                  }),
                  s.on("error", (e, l, i) => {
                    n(!1),
                      l === j.evJ.EXPLICIT_CONTENT &&
                        (a(),
                        o.Z.sendExplicitMediaClydeError(
                          t.id,
                          null == i ? void 0 : i.attachments,
                          c.UU.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED,
                        ),
                        r.Z.clearAll(t.id, h.d.ChannelMessage));
                  }),
                  s.on("complete", () => {
                    n(!1), a(), r.Z.clearAll(t.id, h.d.ChannelMessage);
                  });
                let u = p.Z.getMessages(t.id).get(
                    _.default.castChannelIdAsMessageId(t.id),
                  ),
                  m = null != u ? u.attachments : [];
                s.uploadFiles(
                  l,
                  { attachments: [...m] },
                  { addFilesTo: "attachments" },
                );
              })({
                thread: Z,
                attachments: y,
                setIsUploading: G,
                guild: N,
                onClose: A,
              }));
          }, [Z, y, G, N, A]);
        return null == L
          ? null
          : (0, n.jsxs)(s.ModalRoot, {
              transitionState: T,
              size: s.ModalSize.SMALL,
              className: P.modalRoot,
              "aria-labelledby": w,
              children: [
                (0, n.jsxs)(s.ModalContent, {
                  className: P.modal,
                  children: [
                    (0, n.jsx)(s.Heading, {
                      variant: "heading-md/semibold",
                      className: P.header,
                      id: w,
                      children: S.intl.string(S.t.hMWWMT),
                    }),
                    (0, n.jsx)(s.Text, {
                      variant: "text-md/normal",
                      className: P.__invalid_body,
                      children: S.intl.string(S.t.zMsUsr),
                    }),
                    (0, n.jsx)("div", {
                      className: P.forumPost,
                      children: (0, n.jsx)(M.oL, {
                        createStore: () => (0, M.NU)(L),
                        children: (0, n.jsx)(I.ZP, {
                          threadId: l,
                          goToThread: C.dG,
                          overrideMedia: U,
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
                      onClick: A,
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
    479099: function (e, t, l) {
      l.d(t, {
        Z: function () {
          return E;
        },
        f: function () {
          return b;
        },
      }),
        l(47120);
      var n,
        i,
        a = l(200651),
        s = l(192379),
        o = l(120356),
        r = l.n(o),
        d = l(91192),
        u = l(442837),
        c = l(481060),
        m = l(239091),
        f = l(596454),
        h = l(607070),
        g = l(339085),
        p = l(695346),
        x = l(572004),
        _ = l(388032),
        v = l(813778);
      function E(e) {
        let {
            tag: t,
            size: n = 1,
            disabled: i,
            className: o,
            onClick: E,
            onRemove: b,
            selected: I,
            ariaLabel: M,
          } = e,
          { name: j, emojiId: C, emojiName: S } = t,
          P = null != b,
          [y, z] = s.useState(!1),
          T = (0, u.e7)([g.ZP], () =>
            null != C ? g.ZP.getUsableCustomEmojiById(C) : null,
          ),
          A = P || null != E,
          w = (!P || !y) && (null != C || null != S),
          Z = 0 === n,
          N = s.useRef(null),
          L = (0, u.e7)([h.Z], () => h.Z.keyboardModeEnabled),
          R = (e) => {
            let n = p.Sb.getSetting();
            x.wS &&
              n &&
              (0, m.jW)(e, async () => {
                let { default: e } = await l.e("29646").then(l.bind(l, 955116));
                return (l) => (0, a.jsx)(e, { ...l, tag: t });
              });
          },
          B = (0, a.jsxs)(a.Fragment, {
            children: [
              w
                ? (0, a.jsx)(f.Z, {
                    className: r()(v.emoji, { [v.small]: Z }),
                    emojiId: C,
                    emojiName: S,
                    animated: !!(null == T ? void 0 : T.animated),
                    size: "reaction",
                  })
                : null,
              y &&
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
                variant: Z ? "text-xs/semibold" : "text-sm/semibold",
                lineClamp: 1,
                children: j,
              }),
            ],
          }),
          D = {
            key: t.id,
            className: r()(
              v.pill,
              {
                [v.disabled]: i,
                [v.clickable]: A,
                [v.small]: Z,
                [v.selected]: I,
              },
              o,
            ),
            onClick: (e) => {
              null == E || E(e),
                null == b || b(t),
                !L && null != N.current && N.current.blur();
            },
            onContextMenu: (e) => R(e),
            onMouseEnter: () => P && z(!0),
            onMouseLeave: () => P && z(!1),
          },
          U = (0, d.JA)("forum-tag-".concat(t.id));
        return A
          ? (0, a.jsx)(c.Clickable, {
              ...U,
              innerRef: N,
              focusProps: { ringTarget: N },
              "aria-label":
                null != M
                  ? M
                  : _.intl.formatToPlainString(_.t.iyRTLi, { tagName: j }),
              role: "button",
              "aria-pressed": I,
              ...D,
              children: B,
            })
          : (0, a.jsx)("div", { ...D, children: B });
      }
      function b(e) {
        let { tags: t, count: l, size: n = 1 } = e,
          i = 0 === n;
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
              className: r()(v.pill, { [v.small]: i }),
              children: (0, a.jsxs)(c.Text, {
                variant: i ? "text-xs/semibold" : "text-sm/semibold",
                children: ["+", l],
              }),
            }),
        });
      }
      ((i = n || (n = {}))[(i.SMALL = 0)] = "SMALL"),
        (i[(i.MEDIUM = 1)] = "MEDIUM"),
        (E.Sizes = n);
    },
    91047: function (e, t, l) {
      l.d(t, {
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
        l(411104);
      var n = l(200651);
      l(192379);
      var i = l(239091);
      function a(e, t, a) {
        a.isGroupDM()
          ? (0, i.jW)(e, async () => {
              let { default: e } = await Promise.all([
                l.e("50506"),
                l.e("79695"),
                l.e("51269"),
                l.e("13351"),
                l.e("33862"),
                l.e("92453"),
                l.e("38718"),
              ]).then(l.bind(l, 354589));
              return (l) => (0, n.jsx)(e, { ...l, user: t, channel: a });
            })
          : a.isDM()
            ? (0, i.jW)(e, async () => {
                let { default: e } = await Promise.all([
                  l.e("50506"),
                  l.e("79695"),
                  l.e("51269"),
                  l.e("13351"),
                  l.e("33862"),
                  l.e("92453"),
                  l.e("70205"),
                  l.e("56826"),
                  l.e("71427"),
                ]).then(l.bind(l, 131404));
                return (l) =>
                  (0, n.jsx)(e, {
                    ...l,
                    user: t,
                    channel: a,
                    showMute: !1,
                    targetIsUser: !0,
                  });
              })
            : null != a.guild_id
              ? (0, i.jW)(e, async () => {
                  let { default: e } = await Promise.all([
                    l.e("50506"),
                    l.e("79695"),
                    l.e("51269"),
                    l.e("13351"),
                    l.e("33862"),
                    l.e("92453"),
                    l.e("13125"),
                    l.e("13441"),
                  ]).then(l.bind(l, 757387));
                  return (l) =>
                    (0, n.jsx)(e, {
                      ...l,
                      user: t,
                      channel: a,
                      guildId: a.guild_id,
                    });
                })
              : (0, i.jW)(e, async () => {
                  let { default: e } = await Promise.all([
                    l.e("79695"),
                    l.e("69220"),
                    l.e("50261"),
                  ]).then(l.bind(l, 881351));
                  return (l) => (0, n.jsx)(e, { ...l, user: t });
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
          (0, i.jW)(e, async () => {
            let { default: e } = await Promise.all([
              l.e("13125"),
              l.e("33685"),
            ]).then(l.bind(l, 833737));
            return (t) =>
              (0, n.jsx)(e, {
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
        (0, i.jW)(e, async () => {
          let { default: e } = await l.e("45130").then(l.bind(l, 246389));
          return (t) =>
            (0, n.jsx)(e, {
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
          (0, i.jW)(e, async () => {
            let { default: e } = await l.e("50331").then(l.bind(l, 158195));
            return (t) => (0, n.jsx)(e, { ...t, guildId: a });
          });
      }
    },
    127654: function (e, t, l) {
      l.d(t, {
        G: function () {
          return E;
        },
        d: function () {
          return b;
        },
      }),
        l(653041),
        l(47120),
        l(411104);
      var n = l(475179),
        i = l(166459),
        a = l(966390),
        s = l(531643),
        o = l(476326),
        r = l(367907),
        d = l(358221),
        u = l(117530),
        c = l(594174),
        m = l(626135),
        f = l(403182),
        h = l(74538),
        g = l(979956),
        p = l(981631),
        x = l(959517),
        _ = l(474936),
        v = l(388032);
      function E(e, t) {
        let l = c.default.getCurrentUser(),
          n = e.getGuildId(),
          i = f.dg(n),
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
        if (d > i) {
          (0, r.yw)(p.rMx.FILE_SIZE_LIMIT_EXCEEDED, {
            channel_id: e.id,
            guild_id: n,
            user_individual_file_size_limit: i,
            pre_compression_file_sizes: a,
            pre_compression_aggregate_file_size: o,
            num_attachments: u,
            error_type: x.xi.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
            attachment_mimetypes: m,
          }),
            (0, s.openUploadError)({
              title: v.intl.string(v.t["/tGlcn"]),
              help: (0, g.BK)(l, n),
              showPremiumUpsell: !(0, h.M5)(l, _.p9.TIER_2),
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
      function b(e, t, l) {
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
          E(t, e);
          return;
        }
        if (u.Z.getUploadCount(t.id, l) + e.length > p.dN1) {
          (0, s.openUploadError)({
            title: v.intl.string(v.t.wOr6hI),
            help: v.intl.formatToPlainString(v.t["qqyp/f"], { limit: p.dN1 }),
          }),
            m.default.track(p.rMx.UPLOAD_FILE_LIMIT_ERROR, {
              existing_count: u.Z.getUploadCount(t.id, l),
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
            platform: o.ow.WEB,
            isThumbnail: h,
            ...(null == r ? void 0 : r[t]),
          }));
          i.Z.addFiles({
            files: n,
            channelId: t.id,
            showLargeMessageDialog: f,
            draftType: l,
          });
        } else
          a.Z.instantBatchUpload({
            channelId: t.id,
            files: e,
            draftType: l,
            isThumbnail: h,
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
      var n = l(476326),
        i = l(403182),
        a = l(74538),
        s = l(474936),
        o = l(388032);
      function r(e, t) {
        let l = i.Ng(i.dg(t));
        return a.ZP.isPremium(e, s.p9.TIER_2)
          ? o.intl.formatToPlainString(o.t.fxEKdX, { maxSize: l })
          : a.ZP.isPremium(e, s.p9.TIER_1)
            ? o.intl.formatToPlainString(o.t["Nr+Lsb"], { maxSize: l })
            : o.intl.formatToPlainString(o.t.fxEKdX, { maxSize: l });
      }
      function d(e, t) {
        return i.nA(e, t) || i.vY(e);
      }
      function u(e) {
        return e.reduce(
          (e, t) => (t.item.platform === n.ow.WEB && e.push(t.item.file), e),
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
        i = {
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
        v = /^(.+?)eed$/,
        E = /^.+?[^s]s$/,
        b = /^.+?(ss|i)es$/,
        I = /([^aeiouylsz])\1$/,
        M =
          /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,
        j = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
        C =
          /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;
      function S(e) {
        let t,
          l = String(e).toLowerCase();
        if (l.length < 3) return l;
        let a = !1;
        return (
          121 === l.codePointAt(0) && ((a = !0), (l = "Y" + l.slice(1))),
          b.test(l) ? (l = l.slice(0, -2)) : E.test(l) && (l = l.slice(0, -1)),
          (t = v.exec(l))
            ? r.test(t[1]) && (l = l.slice(0, -1))
            : (t = x.exec(l)) &&
              c.test(t[1]) &&
              ((l = t[1]),
              _.test(l)
                ? (l += "e")
                : I.test(l)
                  ? (l = l.slice(0, -1))
                  : m.test(l) && (l += "e")),
          (t = g.exec(l)) && c.test(t[1]) && (l = t[1] + "i"),
          (t = M.exec(l)) && r.test(t[1]) && (l = t[1] + n[t[2]]),
          (t = j.exec(l)) && r.test(t[1]) && (l = t[1] + i[t[2]]),
          (t = C.exec(l))
            ? u.test(t[1]) && (l = t[1])
            : (t = p.exec(l)) && u.test(t[1]) && (l = t[1]),
          (t = h.exec(l)) &&
            (u.test(t[1]) || (d.test(t[1]) && !m.test(t[1]))) &&
            (l = t[1]),
          f.test(l) && u.test(l) && (l = l.slice(0, -1)),
          a && (l = "y" + l.slice(1)),
          l
        );
      }
    },
    588744: function (e, t, l) {
      l.d(t, {
        Z: function () {
          return u;
        },
      });
      var n = l(192379),
        i = l(454e3);
      let {
        createElement: a,
        createContext: s,
        useContext: o,
        useMemo: r,
        useRef: d,
      } = n;
      function u() {
        console.warn(
          "[DEPRECATED] `context` will be removed in a future version. Instead use `import { createStore, useStore } from 'zustand'`. See: https://github.com/pmndrs/zustand/discussions/1180.",
        );
        let e = s(void 0);
        return {
          Provider: ({ createStore: t, children: l }) => {
            let n = d();
            return (
              !n.current && (n.current = t()),
              a(e.Provider, { value: n.current }, l)
            );
          },
          useStore: (t, l) => {
            let n = o(e);
            if (!n)
              throw Error(
                "Seems like you have not used zustand provider as an ancestor.",
              );
            return (0, i.s)(n, t, l);
          },
          useStoreApi: () => {
            let t = o(e);
            if (!t)
              throw Error(
                "Seems like you have not used zustand provider as an ancestor.",
              );
            return r(() => ({ ...t }), [t]);
          },
        };
      }
    },
  },
]);
//# sourceMappingURL=2570ec1a8c755abec7ec.js.map
