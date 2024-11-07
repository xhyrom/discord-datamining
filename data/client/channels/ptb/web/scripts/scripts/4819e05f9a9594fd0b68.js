"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["33897"],
  {
    273602: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return y;
          },
        }),
        n(47120);
      var i = n(200651),
        l = n(192379),
        a = n(442837),
        s = n(481060),
        o = n(904245),
        r = n(166459),
        d = n(680287),
        u = n(313201),
        c = n(247206),
        m = n(813197),
        f = n(592125),
        h = n(703558),
        g = n(430824),
        p = n(375954),
        x = n(403182),
        _ = n(709054),
        v = n(127654),
        b = n(979956),
        E = n(228392),
        I = n(404616),
        M = n(470623),
        j = n(981631),
        C = n(231338),
        S = n(388032),
        P = n(947251);
      function y(e) {
        var t;
        let {
            threadId: n,
            attachments: y,
            sendMessage: z,
            transitionState: T,
            onClose: A,
          } = e,
          w = (0, u.Dt)(),
          Z = (0, a.e7)([f.Z], () => f.Z.getChannel(n), [n]),
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
          [B, D] = l.useState(null);
        l.useEffect(() => {
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
          [k, G] = l.useState(!1),
          O = l.useCallback(() => {
            (0, E.xI)({ added: !1 }), z(), A();
          }, [z, A]),
          $ = l.useCallback(() => {
            null != Z &&
              null != N &&
              ((0, E.xI)({ added: !0 }),
              !(function (e) {
                let {
                    thread: t,
                    attachments: n,
                    setIsUploading: i,
                    guild: l,
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
                  i(!0);
                }),
                  s.on("progress", (e) => {
                    let o = (0, x.dg)(l.id);
                    e.currentSize > o &&
                      (s.cancel(), i(!1), a(), (0, v.G)(t, (0, b.KZ)(n)));
                  }),
                  s.on("error", (e, n, l) => {
                    i(!1),
                      n === j.evJ.EXPLICIT_CONTENT &&
                        (a(),
                        o.Z.sendExplicitMediaClydeError(
                          t.id,
                          null == l ? void 0 : l.attachments,
                          c.UU.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED,
                        ),
                        r.Z.clearAll(t.id, h.d.ChannelMessage));
                  }),
                  s.on("complete", () => {
                    i(!1), a(), r.Z.clearAll(t.id, h.d.ChannelMessage);
                  });
                let u = p.Z.getMessages(t.id).get(
                    _.default.castChannelIdAsMessageId(t.id),
                  ),
                  m = null != u ? u.attachments : [];
                s.uploadFiles(
                  n,
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
          : (0, i.jsxs)(s.ModalRoot, {
              transitionState: T,
              size: s.ModalSize.SMALL,
              className: P.modalRoot,
              "aria-labelledby": w,
              children: [
                (0, i.jsxs)(s.ModalContent, {
                  className: P.modal,
                  children: [
                    (0, i.jsx)(s.Heading, {
                      variant: "heading-md/semibold",
                      className: P.header,
                      id: w,
                      children: S.intl.string(S.t.hMWWMT),
                    }),
                    (0, i.jsx)(s.Text, {
                      variant: "text-md/normal",
                      className: P.__invalid_body,
                      children: S.intl.string(S.t.zMsUsr),
                    }),
                    (0, i.jsx)("div", {
                      className: P.forumPost,
                      children: (0, i.jsx)(M.oL, {
                        createStore: () => (0, M.NU)(L),
                        children: (0, i.jsx)(I.ZP, {
                          threadId: n,
                          goToThread: C.dG,
                          overrideMedia: U,
                        }),
                      }),
                    }),
                  ],
                }),
                (0, i.jsxs)(s.ModalFooter, {
                  className: P.modalFooter,
                  children: [
                    (0, i.jsx)(s.Button, {
                      look: s.Button.Looks.BLANK,
                      className: P.cancelButton,
                      disabled: k,
                      onClick: A,
                      children: S.intl.string(S.t["ETE/oK"]),
                    }),
                    (0, i.jsx)(s.Button, {
                      color: s.Button.Colors.PRIMARY,
                      className: P.dontAddButton,
                      disabled: k,
                      onClick: O,
                      children: S.intl.string(S.t["8rKVHB"]),
                    }),
                    (0, i.jsx)(s.Button, {
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
    479099: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return b;
        },
        f: function () {
          return E;
        },
      }),
        n(47120);
      var i,
        l,
        a = n(200651),
        s = n(192379),
        o = n(120356),
        r = n.n(o),
        d = n(91192),
        u = n(442837),
        c = n(481060),
        m = n(239091),
        f = n(596454),
        h = n(607070),
        g = n(339085),
        p = n(695346),
        x = n(572004),
        _ = n(388032),
        v = n(813778);
      function b(e) {
        let {
            tag: t,
            size: i = 1,
            disabled: l,
            className: o,
            onClick: b,
            onRemove: E,
            selected: I,
            ariaLabel: M,
          } = e,
          { name: j, emojiId: C, emojiName: S } = t,
          P = null != E,
          [y, z] = s.useState(!1),
          T = (0, u.e7)([g.ZP], () =>
            null != C ? g.ZP.getUsableCustomEmojiById(C) : null,
          ),
          A = P || null != b,
          w = (!P || !y) && (null != C || null != S),
          Z = 0 === i,
          N = s.useRef(null),
          L = (0, u.e7)([h.Z], () => h.Z.keyboardModeEnabled),
          R = (e) => {
            let i = p.Sb.getSetting();
            x.wS &&
              i &&
              (0, m.jW)(e, async () => {
                let { default: e } = await n.e("29646").then(n.bind(n, 955116));
                return (n) => (0, a.jsx)(e, { ...n, tag: t });
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
                [v.disabled]: l,
                [v.clickable]: A,
                [v.small]: Z,
                [v.selected]: I,
              },
              o,
            ),
            onClick: (e) => {
              null == b || b(e),
                null == E || E(t),
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
      function E(e) {
        let { tags: t, count: n, size: i = 1 } = e,
          l = 0 === i;
        return (0, a.jsx)(c.Tooltip, {
          "aria-label": _.intl.string(_.t["P/y+sr"]),
          text: (0, a.jsx)(a.Fragment, {
            children: t.map((e) =>
              (0, a.jsx)(
                b,
                { tag: e, className: v.tooltipPill, size: b.Sizes.SMALL },
                e.id,
              ),
            ),
          }),
          children: (e) =>
            (0, a.jsx)("div", {
              ...e,
              className: r()(v.pill, { [v.small]: l }),
              children: (0, a.jsxs)(c.Text, {
                variant: l ? "text-xs/semibold" : "text-sm/semibold",
                children: ["+", n],
              }),
            }),
        });
      }
      ((l = i || (i = {}))[(l.SMALL = 0)] = "SMALL"),
        (l[(l.MEDIUM = 1)] = "MEDIUM"),
        (b.Sizes = i);
    },
    91047: function (e, t, n) {
      n.d(t, {
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
        n(411104);
      var i = n(200651);
      n(192379);
      var l = n(239091);
      function a(e, t, a) {
        a.isGroupDM()
          ? (0, l.jW)(e, async () => {
              let { default: e } = await Promise.all([
                n.e("50506"),
                n.e("79695"),
                n.e("51269"),
                n.e("13351"),
                n.e("33862"),
                n.e("92453"),
                n.e("38718"),
              ]).then(n.bind(n, 354589));
              return (n) => (0, i.jsx)(e, { ...n, user: t, channel: a });
            })
          : a.isDM()
            ? (0, l.jW)(e, async () => {
                let { default: e } = await Promise.all([
                  n.e("50506"),
                  n.e("79695"),
                  n.e("51269"),
                  n.e("13351"),
                  n.e("33862"),
                  n.e("70348"),
                  n.e("92453"),
                  n.e("70205"),
                  n.e("56826"),
                  n.e("41271"),
                ]).then(n.bind(n, 131404));
                return (n) =>
                  (0, i.jsx)(e, {
                    ...n,
                    user: t,
                    channel: a,
                    showMute: !1,
                    targetIsUser: !0,
                  });
              })
            : null != a.guild_id
              ? (0, l.jW)(e, async () => {
                  let { default: e } = await Promise.all([
                    n.e("50506"),
                    n.e("79695"),
                    n.e("51269"),
                    n.e("13351"),
                    n.e("33862"),
                    n.e("92453"),
                    n.e("13125"),
                    n.e("13441"),
                  ]).then(n.bind(n, 757387));
                  return (n) =>
                    (0, i.jsx)(e, {
                      ...n,
                      user: t,
                      channel: a,
                      guildId: a.guild_id,
                    });
                })
              : (0, l.jW)(e, async () => {
                  let { default: e } = await Promise.all([
                    n.e("79695"),
                    n.e("69220"),
                    n.e("50261"),
                  ]).then(n.bind(n, 881351));
                  return (n) => (0, i.jsx)(e, { ...n, user: t });
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
          (0, l.jW)(e, async () => {
            let { default: e } = await Promise.all([
              n.e("13125"),
              n.e("33685"),
            ]).then(n.bind(n, 833737));
            return (t) =>
              (0, i.jsx)(e, {
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
        (0, l.jW)(e, async () => {
          let { default: e } = await n.e("45130").then(n.bind(n, 246389));
          return (t) =>
            (0, i.jsx)(e, {
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
          (0, l.jW)(e, async () => {
            let { default: e } = await n.e("50331").then(n.bind(n, 158195));
            return (t) => (0, i.jsx)(e, { ...t, guildId: a });
          });
      }
    },
    127654: function (e, t, n) {
      n.d(t, {
        G: function () {
          return b;
        },
        d: function () {
          return E;
        },
      }),
        n(653041),
        n(47120),
        n(411104);
      var i = n(475179),
        l = n(166459),
        a = n(966390),
        s = n(531643),
        o = n(476326),
        r = n(367907),
        d = n(358221),
        u = n(117530),
        c = n(594174),
        m = n(626135),
        f = n(403182),
        h = n(74538),
        g = n(979956),
        p = n(981631),
        x = n(959517),
        _ = n(474936),
        v = n(388032);
      function b(e, t) {
        let n = c.default.getCurrentUser(),
          i = e.getGuildId(),
          l = f.dg(i),
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
        if (d > l) {
          (0, r.yw)(p.rMx.FILE_SIZE_LIMIT_EXCEEDED, {
            channel_id: e.id,
            guild_id: i,
            user_individual_file_size_limit: l,
            pre_compression_file_sizes: a,
            pre_compression_aggregate_file_size: o,
            num_attachments: u,
            error_type: x.xi.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
            attachment_mimetypes: m,
          }),
            (0, s.openUploadError)({
              title: v.intl.string(v.t["/tGlcn"]),
              help: (0, g.BK)(n, i),
              showPremiumUpsell: !(0, h.M5)(n, _.p9.TIER_2),
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
      function E(e, t, n) {
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
          b(t, e);
          return;
        }
        if (u.Z.getUploadCount(t.id, n) + e.length > p.dN1) {
          (0, s.openUploadError)({
            title: v.intl.string(v.t.wOr6hI),
            help: v.intl.formatToPlainString(v.t["qqyp/f"], { limit: p.dN1 }),
          }),
            m.default.track(p.rMx.UPLOAD_FILE_LIMIT_ERROR, {
              existing_count: u.Z.getUploadCount(t.id, n),
              new_count: e.length,
            });
          return;
        }
        if (
          ((t.type === p.d4z.GUILD_VOICE ||
            t.type === p.d4z.GUILD_STAGE_VOICE) &&
            !d.Z.getChatOpen(t.id) &&
            i.Z.updateChatOpen(t.id, !0),
          c)
        ) {
          let i = Array.from(e).map((e, t) => ({
            file: e,
            platform: o.ow.WEB,
            isThumbnail: h,
            ...(null == r ? void 0 : r[t]),
          }));
          l.Z.addFiles({
            files: i,
            channelId: t.id,
            showLargeMessageDialog: f,
            draftType: n,
          });
        } else
          a.Z.instantBatchUpload({
            channelId: t.id,
            files: e,
            draftType: n,
            isThumbnail: h,
            filesMetadata: r,
          });
      }
    },
    979956: function (e, t, n) {
      n.d(t, {
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
        n(724458),
        n(653041);
      var i = n(476326),
        l = n(403182),
        a = n(74538),
        s = n(474936),
        o = n(388032);
      function r(e, t) {
        let n = l.Ng(l.dg(t));
        return a.ZP.isPremium(e, s.p9.TIER_2)
          ? o.intl.formatToPlainString(o.t.fxEKdX, { maxSize: n })
          : a.ZP.isPremium(e, s.p9.TIER_1)
            ? o.intl.formatToPlainString(o.t["Nr+Lsb"], { maxSize: n })
            : o.intl.formatToPlainString(o.t.fxEKdX, { maxSize: n });
      }
      function d(e, t) {
        return l.nA(e, t) || l.vY(e);
      }
      function u(e) {
        return e.reduce(
          (e, t) => (t.item.platform === i.ow.WEB && e.push(t.item.file), e),
          [],
        );
      }
    },
    947251: function (e, t, n) {
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
    813778: function (e, t, n) {
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
    697741: function (e, t, n) {
      n.d(t, {
        $: function () {
          return S;
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
        b = /^.+?[^s]s$/,
        E = /^.+?(ss|i)es$/,
        I = /([^aeiouylsz])\1$/,
        M =
          /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,
        j = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
        C =
          /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;
      function S(e) {
        let t,
          n = String(e).toLowerCase();
        if (n.length < 3) return n;
        let a = !1;
        return (
          121 === n.codePointAt(0) && ((a = !0), (n = "Y" + n.slice(1))),
          E.test(n) ? (n = n.slice(0, -2)) : b.test(n) && (n = n.slice(0, -1)),
          (t = v.exec(n))
            ? r.test(t[1]) && (n = n.slice(0, -1))
            : (t = x.exec(n)) &&
              c.test(t[1]) &&
              ((n = t[1]),
              _.test(n)
                ? (n += "e")
                : I.test(n)
                  ? (n = n.slice(0, -1))
                  : m.test(n) && (n += "e")),
          (t = g.exec(n)) && c.test(t[1]) && (n = t[1] + "i"),
          (t = M.exec(n)) && r.test(t[1]) && (n = t[1] + i[t[2]]),
          (t = j.exec(n)) && r.test(t[1]) && (n = t[1] + l[t[2]]),
          (t = C.exec(n))
            ? u.test(t[1]) && (n = t[1])
            : (t = p.exec(n)) && u.test(t[1]) && (n = t[1]),
          (t = h.exec(n)) &&
            (u.test(t[1]) || (d.test(t[1]) && !m.test(t[1]))) &&
            (n = t[1]),
          f.test(n) && u.test(n) && (n = n.slice(0, -1)),
          a && (n = "y" + n.slice(1)),
          n
        );
      }
    },
    588744: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var i = n(192379),
        l = n(454e3);
      let {
        createElement: a,
        createContext: s,
        useContext: o,
        useMemo: r,
        useRef: d,
      } = i;
      function u() {
        console.warn(
          "[DEPRECATED] `context` will be removed in a future version. Instead use `import { createStore, useStore } from 'zustand'`. See: https://github.com/pmndrs/zustand/discussions/1180.",
        );
        let e = s(void 0);
        return {
          Provider: ({ createStore: t, children: n }) => {
            let i = d();
            return (
              !i.current && (i.current = t()),
              a(e.Provider, { value: i.current }, n)
            );
          },
          useStore: (t, n) => {
            let i = o(e);
            if (!i)
              throw Error(
                "Seems like you have not used zustand provider as an ancestor.",
              );
            return (0, l.s)(i, t, n);
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
    454e3: function (e, t, n) {
      n.d(t, {
        s: function () {
          return r;
        },
      });
      var i = n(192379),
        l = n(584171);
      let { useDebugValue: a } = i,
        { useSyncExternalStoreWithSelector: s } = l,
        o = (e) => e;
      function r(e, t = o, n) {
        let i = s(
          e.subscribe,
          e.getState,
          e.getServerState || e.getInitialState,
          t,
          n,
        );
        return a(i), i;
      }
    },
  },
]);
//# sourceMappingURL=4819e05f9a9594fd0b68.js.map
