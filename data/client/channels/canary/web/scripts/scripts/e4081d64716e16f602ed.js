"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["47512"],
  {
    700582: function (e, t, l) {
      var i = l(200651),
        n = l(192379),
        a = l(481060),
        s = l(372900);
      t.Z = n.memo(function (e) {
        var t, l, o, r;
        let {
            user: d,
            size: u = a.AvatarSizes.SIZE_32,
            animate: c = !1,
            "aria-hidden": m = !1,
            ...f
          } = e,
          g = n.useContext(s.Z);
        return (0, i.jsx)(a.Avatar, {
          src:
            ((t = d),
            (l = (0, a.getAvatarSize)(u)),
            (o = c),
            (r = g),
            t.getAvatarURL(r, l, o)),
          size: u,
          "aria-label": m ? void 0 : d.username,
          "aria-hidden": m,
          ...f,
        });
      });
    },
    273602: function (e, t, l) {
      l.r(t),
        l.d(t, {
          default: function () {
            return S;
          },
        }),
        l(47120);
      var i = l(200651),
        n = l(192379),
        a = l(442837),
        s = l(481060),
        o = l(904245),
        r = l(166459),
        d = l(680287),
        u = l(313201),
        c = l(247206),
        m = l(813197),
        f = l(592125),
        g = l(703558),
        h = l(430824),
        p = l(375954),
        x = l(403182),
        _ = l(709054),
        b = l(127654),
        v = l(979956),
        E = l(228392),
        I = l(404616),
        j = l(470623),
        M = l(981631),
        C = l(231338),
        P = l(388032),
        A = l(30125);
      function S(e) {
        var t;
        let {
            threadId: l,
            attachments: S,
            sendMessage: z,
            transitionState: T,
            onClose: y,
          } = e,
          Z = (0, u.Dt)(),
          L = (0, a.e7)([f.Z], () => f.Z.getChannel(l), [l]),
          N = (0, a.e7)(
            [h.Z],
            () => h.Z.getGuild(null == L ? void 0 : L.getGuildId()),
            [L],
          ),
          w = (0, a.e7)(
            [f.Z],
            () => f.Z.getChannel(null == L ? void 0 : L.parent_id),
            [L],
          ),
          R = null === (t = S[0]) || void 0 === t ? void 0 : t.item,
          [B, U] = n.useState(null);
        n.useEffect(() => {
          null != R && (0, m.Fq)(R.file, (e, t) => U(e), C.dG);
        }, [R]);
        let D =
            null != R && null != B
              ? {
                  src: B,
                  width: I.TJ,
                  height: I.Lp,
                  spoiler: S[0].spoiler,
                  alt: S[0].description,
                }
              : null,
          [k, G] = n.useState(!1),
          O = n.useCallback(() => {
            (0, E.xI)({ added: !1 }), z(), y();
          }, [z, y]),
          $ = n.useCallback(() => {
            null != L &&
              null != N &&
              ((0, E.xI)({ added: !0 }),
              !(function (e) {
                let {
                    thread: t,
                    attachments: l,
                    setIsUploading: i,
                    guild: n,
                    onClose: a,
                  } = e,
                  s = new d.Z(
                    M.ANM.MESSAGE(
                      t.id,
                      _.default.castChannelIdAsMessageId(t.id),
                    ),
                    "PATCH",
                  );
                s.on("start", () => {
                  i(!0);
                }),
                  s.on("progress", (e) => {
                    let o = (0, x.dg)(n.id);
                    e.currentSize > o &&
                      (s.cancel(), i(!1), a(), (0, b.G)(t, (0, v.KZ)(l)));
                  }),
                  s.on("error", (e, l, n) => {
                    i(!1),
                      l === M.evJ.EXPLICIT_CONTENT &&
                        (a(),
                        o.Z.sendExplicitMediaClydeError(
                          t.id,
                          null == n ? void 0 : n.attachments,
                          c.UU.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED,
                        ),
                        r.Z.clearAll(t.id, g.d.ChannelMessage));
                  }),
                  s.on("complete", () => {
                    i(!1), a(), r.Z.clearAll(t.id, g.d.ChannelMessage);
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
                thread: L,
                attachments: S,
                setIsUploading: G,
                guild: N,
                onClose: y,
              }));
          }, [L, S, G, N, y]);
        return null == w
          ? null
          : (0, i.jsxs)(s.ModalRoot, {
              transitionState: T,
              size: s.ModalSize.SMALL,
              className: A.modalRoot,
              "aria-labelledby": Z,
              children: [
                (0, i.jsxs)(s.ModalContent, {
                  className: A.modal,
                  children: [
                    (0, i.jsx)(s.Heading, {
                      variant: "heading-md/semibold",
                      className: A.header,
                      id: Z,
                      children: P.intl.string(P.t.hMWWMT),
                    }),
                    (0, i.jsx)(s.Text, {
                      variant: "text-md/normal",
                      className: A.__invalid_body,
                      children: P.intl.string(P.t.zMsUsr),
                    }),
                    (0, i.jsx)("div", {
                      className: A.forumPost,
                      children: (0, i.jsx)(j.oL, {
                        channel: w,
                        children: (0, i.jsx)(I.ZP, {
                          threadId: l,
                          goToThread: C.dG,
                          overrideMedia: D,
                        }),
                      }),
                    }),
                  ],
                }),
                (0, i.jsxs)(s.ModalFooter, {
                  className: A.modalFooter,
                  children: [
                    (0, i.jsx)(s.Button, {
                      look: s.Button.Looks.BLANK,
                      className: A.cancelButton,
                      disabled: k,
                      onClick: y,
                      children: P.intl.string(P.t["ETE/oK"]),
                    }),
                    (0, i.jsx)(s.Button, {
                      color: s.Button.Colors.PRIMARY,
                      className: A.dontAddButton,
                      disabled: k,
                      onClick: O,
                      children: P.intl.string(P.t["8rKVHB"]),
                    }),
                    (0, i.jsx)(s.Button, {
                      color: s.Button.Colors.BRAND,
                      className: A.__invalid_button,
                      submitting: k,
                      onClick: $,
                      autoFocus: !0,
                      children: P.intl.string(P.t.d611xM),
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
          return v;
        },
        f: function () {
          return E;
        },
      }),
        l(47120);
      var i,
        n,
        a = l(200651),
        s = l(192379),
        o = l(120356),
        r = l.n(o),
        d = l(91192),
        u = l(442837),
        c = l(481060),
        m = l(239091),
        f = l(596454),
        g = l(607070),
        h = l(339085),
        p = l(695346),
        x = l(572004),
        _ = l(388032),
        b = l(680475);
      function v(e) {
        let {
            tag: t,
            size: i = 1,
            disabled: n,
            className: o,
            onClick: v,
            onRemove: E,
            selected: I,
            ariaLabel: j,
          } = e,
          { name: M, emojiId: C, emojiName: P } = t,
          A = null != E,
          [S, z] = s.useState(!1),
          T = (0, u.e7)([h.ZP], () =>
            null != C ? h.ZP.getUsableCustomEmojiById(C) : null,
          ),
          y = A || null != v,
          Z = (!A || !S) && (null != C || null != P),
          L = 0 === i,
          N = s.useRef(null),
          w = (0, u.e7)([g.Z], () => g.Z.keyboardModeEnabled),
          R = (e) => {
            let i = p.Sb.getSetting();
            x.wS &&
              i &&
              (0, m.jW)(e, async () => {
                let { default: e } = await l.e("29646").then(l.bind(l, 955116));
                return (l) => (0, a.jsx)(e, { ...l, tag: t });
              });
          },
          B = (0, a.jsxs)(a.Fragment, {
            children: [
              Z
                ? (0, a.jsx)(f.Z, {
                    className: r()(b.emoji, { [b.small]: L }),
                    emojiId: C,
                    emojiName: P,
                    animated: !!(null == T ? void 0 : T.animated),
                    size: "reaction",
                  })
                : null,
              S &&
                A &&
                (0, a.jsx)("div", {
                  className: b.closeCircle,
                  children: (0, a.jsx)(c.XSmallIcon, {
                    size: "md",
                    color: "currentColor",
                    className: b.close,
                  }),
                }),
              (0, a.jsx)(c.Text, {
                variant: L ? "text-xs/semibold" : "text-sm/semibold",
                lineClamp: 1,
                children: M,
              }),
            ],
          }),
          U = {
            key: t.id,
            className: r()(
              b.pill,
              {
                [b.disabled]: n,
                [b.clickable]: y,
                [b.small]: L,
                [b.selected]: I,
              },
              o,
            ),
            onClick: (e) => {
              null == v || v(e),
                null == E || E(t),
                !w && null != N.current && N.current.blur();
            },
            onContextMenu: (e) => R(e),
            onMouseEnter: () => A && z(!0),
            onMouseLeave: () => A && z(!1),
          },
          D = (0, d.JA)("forum-tag-".concat(t.id));
        return y
          ? (0, a.jsx)(c.Clickable, {
              ...D,
              innerRef: N,
              focusProps: { ringTarget: N },
              "aria-label":
                null != j
                  ? j
                  : _.intl.formatToPlainString(_.t.iyRTLi, { tagName: M }),
              role: "button",
              "aria-pressed": I,
              ...U,
              children: B,
            })
          : (0, a.jsx)("div", { ...U, children: B });
      }
      function E(e) {
        let { tags: t, count: l, size: i = 1 } = e,
          n = 0 === i;
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
                children: ["+", l],
              }),
            }),
        });
      }
      ((n = i || (i = {}))[(n.SMALL = 0)] = "SMALL"),
        (n[(n.MEDIUM = 1)] = "MEDIUM"),
        (v.Sizes = i);
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
      var i = l(200651);
      l(192379);
      var n = l(239091);
      function a(e, t, a) {
        a.isGroupDM()
          ? (0, n.jW)(e, async () => {
              let { default: e } = await Promise.all([
                l.e("50506"),
                l.e("79695"),
                l.e("51269"),
                l.e("13351"),
                l.e("33862"),
                l.e("92453"),
                l.e("62507"),
              ]).then(l.bind(l, 354589));
              return (l) => (0, i.jsx)(e, { ...l, user: t, channel: a });
            })
          : a.isDM()
            ? (0, n.jW)(e, async () => {
                let { default: e } = await Promise.all([
                  l.e("50506"),
                  l.e("79695"),
                  l.e("51269"),
                  l.e("90508"),
                  l.e("13351"),
                  l.e("33862"),
                  l.e("70205"),
                  l.e("92453"),
                  l.e("56826"),
                  l.e("2986"),
                ]).then(l.bind(l, 131404));
                return (l) =>
                  (0, i.jsx)(e, {
                    ...l,
                    user: t,
                    channel: a,
                    showMute: !1,
                    targetIsUser: !0,
                  });
              })
            : null != a.guild_id
              ? (0, n.jW)(e, async () => {
                  let { default: e } = await Promise.all([
                    l.e("50506"),
                    l.e("79695"),
                    l.e("51269"),
                    l.e("13351"),
                    l.e("33862"),
                    l.e("92453"),
                    l.e("13125"),
                    l.e("54492"),
                  ]).then(l.bind(l, 757387));
                  return (l) =>
                    (0, i.jsx)(e, {
                      ...l,
                      user: t,
                      channel: a,
                      guildId: a.guild_id,
                    });
                })
              : (0, n.jW)(e, async () => {
                  let { default: e } = await Promise.all([
                    l.e("79695"),
                    l.e("69220"),
                    l.e("351"),
                  ]).then(l.bind(l, 881351));
                  return (l) => (0, i.jsx)(e, { ...l, user: t });
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
              l.e("13125"),
              l.e("9124"),
            ]).then(l.bind(l, 833737));
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
        (0, n.jW)(e, async () => {
          let { default: e } = await l.e("45130").then(l.bind(l, 246389));
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
          (0, n.jW)(e, async () => {
            let { default: e } = await l.e("50331").then(l.bind(l, 158195));
            return (t) => (0, i.jsx)(e, { ...t, guildId: a });
          });
      }
    },
    127654: function (e, t, l) {
      l.d(t, {
        G: function () {
          return v;
        },
        d: function () {
          return E;
        },
      }),
        l(653041),
        l(47120),
        l(411104);
      var i = l(475179),
        n = l(166459),
        a = l(966390),
        s = l(531643),
        o = l(476326),
        r = l(367907),
        d = l(358221),
        u = l(117530),
        c = l(594174),
        m = l(626135),
        f = l(403182),
        g = l(74538),
        h = l(979956),
        p = l(981631),
        x = l(959517),
        _ = l(474936),
        b = l(388032);
      function v(e, t) {
        let l = c.default.getCurrentUser(),
          i = e.getGuildId(),
          n = f.dg(i),
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
            guild_id: i,
            user_individual_file_size_limit: n,
            pre_compression_file_sizes: a,
            pre_compression_aggregate_file_size: o,
            num_attachments: u,
            error_type: x.xi.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
            attachment_mimetypes: m,
          }),
            (0, s.openUploadError)({
              title: b.intl.string(b.t["/tGlcn"]),
              help: (0, h.BK)(l, i),
              showPremiumUpsell: !(0, g.M5)(l, _.p9.TIER_2),
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
      function E(e, t, l) {
        let {
          filesMetadata: r,
          requireConfirm: c = !0,
          showLargeMessageDialog: f = !1,
          isThumbnail: g = !1,
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (e.length < 1) return;
        if (null != r && r.length !== e.length)
          throw Error("Unexpected mismatch between files and file metadata");
        let x = t.getGuildId();
        if ((0, h.Bf)(e, x)) {
          v(t, e);
          return;
        }
        if (u.Z.getUploadCount(t.id, l) + e.length > p.dN1) {
          (0, s.openUploadError)({
            title: b.intl.string(b.t.wOr6hI),
            help: b.intl.formatToPlainString(b.t["qqyp/f"], { limit: p.dN1 }),
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
            i.Z.updateChatOpen(t.id, !0),
          c)
        ) {
          let i = Array.from(e).map((e, t) => ({
            file: e,
            platform: o.ow.WEB,
            isThumbnail: g,
            ...(null == r ? void 0 : r[t]),
          }));
          n.Z.addFiles({
            files: i,
            channelId: t.id,
            showLargeMessageDialog: f,
            draftType: l,
          });
        } else
          a.Z.instantBatchUpload({
            channelId: t.id,
            files: e,
            draftType: l,
            isThumbnail: g,
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
        a = l(74538),
        s = l(474936),
        o = l(388032);
      function r(e, t) {
        let l = n.Ng(n.dg(t));
        return a.ZP.isPremium(e, s.p9.TIER_2)
          ? o.intl.formatToPlainString(o.t.fxEKdX, { maxSize: l })
          : a.ZP.isPremium(e, s.p9.TIER_1)
            ? o.intl.formatToPlainString(o.t["Nr+Lsb"], { maxSize: l })
            : o.intl.formatToPlainString(o.t.fxEKdX, { maxSize: l });
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
    30125: function (e, t, l) {
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
    680475: function (e, t, l) {
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
          return P;
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
        a = "[aeiouy]",
        s = "([^aeiou][^aeiouy]*)",
        o = "(" + a + "[aeiou]*)",
        r = RegExp("^" + s + "?" + o + s),
        d = RegExp("^" + s + "?" + o + s + o + "?$"),
        u = RegExp("^" + s + "?(" + o + s + "){2,}"),
        c = RegExp("^" + s + "?" + a),
        m = RegExp("^" + s + a + "[^aeiouwxy]$"),
        f = /ll$/,
        g = /^(.+?)e$/,
        h = /^(.+?)y$/,
        p = /^(.+?(s|t))(ion)$/,
        x = /^(.+?)(ed|ing)$/,
        _ = /(at|bl|iz)$/,
        b = /^(.+?)eed$/,
        v = /^.+?[^s]s$/,
        E = /^.+?(ss|i)es$/,
        I = /([^aeiouylsz])\1$/,
        j =
          /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,
        M = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
        C =
          /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;
      function P(e) {
        let t,
          l = String(e).toLowerCase();
        if (l.length < 3) return l;
        let a = !1;
        return (
          121 === l.codePointAt(0) && ((a = !0), (l = "Y" + l.slice(1))),
          E.test(l) ? (l = l.slice(0, -2)) : v.test(l) && (l = l.slice(0, -1)),
          (t = b.exec(l))
            ? r.test(t[1]) && (l = l.slice(0, -1))
            : (t = x.exec(l)) &&
              c.test(t[1]) &&
              ((l = t[1]),
              _.test(l)
                ? (l += "e")
                : I.test(l)
                  ? (l = l.slice(0, -1))
                  : m.test(l) && (l += "e")),
          (t = h.exec(l)) && c.test(t[1]) && (l = t[1] + "i"),
          (t = j.exec(l)) && r.test(t[1]) && (l = t[1] + i[t[2]]),
          (t = M.exec(l)) && r.test(t[1]) && (l = t[1] + n[t[2]]),
          (t = C.exec(l))
            ? u.test(t[1]) && (l = t[1])
            : (t = p.exec(l)) && u.test(t[1]) && (l = t[1]),
          (t = g.exec(l)) &&
            (u.test(t[1]) || (d.test(t[1]) && !m.test(t[1]))) &&
            (l = t[1]),
          f.test(l) && u.test(l) && (l = l.slice(0, -1)),
          a && (l = "y" + l.slice(1)),
          l
        );
      }
    },
  },
]);
//# sourceMappingURL=e4081d64716e16f602ed.js.map
