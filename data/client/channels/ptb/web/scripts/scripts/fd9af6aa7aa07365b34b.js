"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["65060"],
  {
    700582: function (e, t, l) {
      var n = l(200651),
        i = l(192379),
        a = l(481060),
        o = l(372900);
      t.Z = i.memo(function (e) {
        var t, l, r, s;
        let {
            user: d,
            size: u = a.AvatarSizes.SIZE_32,
            animate: c = !1,
            "aria-hidden": m = !1,
            ...f
          } = e,
          h = i.useContext(o.Z);
        return (0, n.jsx)(a.Avatar, {
          src:
            ((t = d),
            (l = (0, a.getAvatarSize)(u)),
            (r = c),
            (s = h),
            t.getAvatarURL(s, l, r)),
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
            return A;
          },
        }),
        l(47120);
      var n = l(200651),
        i = l(192379),
        a = l(442837),
        o = l(481060),
        r = l(904245),
        s = l(166459),
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
        C = l(470623),
        j = l(981631),
        M = l(231338),
        S = l(388032),
        P = l(947251);
      function A(e) {
        var t;
        let {
            threadId: l,
            attachments: A,
            sendMessage: Z,
            transitionState: z,
            onClose: y,
          } = e,
          T = (0, u.Dt)(),
          N = (0, a.e7)([f.Z], () => f.Z.getChannel(l), [l]),
          R = (0, a.e7)(
            [g.Z],
            () => g.Z.getGuild(null == N ? void 0 : N.getGuildId()),
            [N],
          ),
          w = (0, a.e7)(
            [f.Z],
            () => f.Z.getChannel(null == N ? void 0 : N.parent_id),
            [N],
          ),
          L = null === (t = A[0]) || void 0 === t ? void 0 : t.item,
          [k, U] = i.useState(null);
        i.useEffect(() => {
          null != L && (0, m.Fq)(L.file, (e, t) => U(e), M.dG);
        }, [L]);
        let B =
            null != L && null != k
              ? {
                  src: k,
                  width: I.TJ,
                  height: I.Lp,
                  spoiler: A[0].spoiler,
                  alt: A[0].description,
                }
              : null,
          [D, G] = i.useState(!1),
          O = i.useCallback(() => {
            (0, b.xI)({ added: !1 }), Z(), y();
          }, [Z, y]),
          $ = i.useCallback(() => {
            null != N &&
              null != R &&
              ((0, b.xI)({ added: !0 }),
              !(function (e) {
                let {
                    thread: t,
                    attachments: l,
                    setIsUploading: n,
                    guild: i,
                    onClose: a,
                  } = e,
                  o = new d.Z(
                    j.ANM.MESSAGE(
                      t.id,
                      _.default.castChannelIdAsMessageId(t.id),
                    ),
                    "PATCH",
                  );
                o.on("start", () => {
                  n(!0);
                }),
                  o.on("progress", (e) => {
                    let r = (0, x.dg)(i.id);
                    e.currentSize > r &&
                      (o.cancel(), n(!1), a(), (0, v.G)(t, (0, E.KZ)(l)));
                  }),
                  o.on("error", (e, l, i) => {
                    n(!1),
                      l === j.evJ.EXPLICIT_CONTENT &&
                        (a(),
                        r.Z.sendExplicitMediaClydeError(
                          t.id,
                          null == i ? void 0 : i.attachments,
                          c.UU.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED,
                        ),
                        s.Z.clearAll(t.id, h.d.ChannelMessage));
                  }),
                  o.on("complete", () => {
                    n(!1), a(), s.Z.clearAll(t.id, h.d.ChannelMessage);
                  });
                let u = p.Z.getMessages(t.id).get(
                    _.default.castChannelIdAsMessageId(t.id),
                  ),
                  m = null != u ? u.attachments : [];
                o.uploadFiles(
                  l,
                  { attachments: [...m] },
                  { addFilesTo: "attachments" },
                );
              })({
                thread: N,
                attachments: A,
                setIsUploading: G,
                guild: R,
                onClose: y,
              }));
          }, [N, A, G, R, y]);
        return null == w
          ? null
          : (0, n.jsxs)(o.ModalRoot, {
              transitionState: z,
              size: o.ModalSize.SMALL,
              className: P.modalRoot,
              "aria-labelledby": T,
              children: [
                (0, n.jsxs)(o.ModalContent, {
                  className: P.modal,
                  children: [
                    (0, n.jsx)(o.Heading, {
                      variant: "heading-md/semibold",
                      className: P.header,
                      id: T,
                      children: S.intl.string(S.t.hMWWMT),
                    }),
                    (0, n.jsx)(o.Text, {
                      variant: "text-md/normal",
                      className: P.__invalid_body,
                      children: S.intl.string(S.t.zMsUsr),
                    }),
                    (0, n.jsx)("div", {
                      className: P.forumPost,
                      children: (0, n.jsx)(C.oL, {
                        createStore: () => (0, C.NU)(w),
                        children: (0, n.jsx)(I.ZP, {
                          threadId: l,
                          goToThread: M.dG,
                          overrideMedia: B,
                        }),
                      }),
                    }),
                  ],
                }),
                (0, n.jsxs)(o.ModalFooter, {
                  className: P.modalFooter,
                  children: [
                    (0, n.jsx)(o.Button, {
                      look: o.Button.Looks.BLANK,
                      className: P.cancelButton,
                      disabled: D,
                      onClick: y,
                      children: S.intl.string(S.t["ETE/oK"]),
                    }),
                    (0, n.jsx)(o.Button, {
                      color: o.Button.Colors.PRIMARY,
                      className: P.dontAddButton,
                      disabled: D,
                      onClick: O,
                      children: S.intl.string(S.t["8rKVHB"]),
                    }),
                    (0, n.jsx)(o.Button, {
                      color: o.Button.Colors.BRAND,
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
        o = l(192379),
        r = l(120356),
        s = l.n(r),
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
            className: r,
            onClick: E,
            onRemove: b,
            selected: I,
            ariaLabel: C,
          } = e,
          { name: j, emojiId: M, emojiName: S } = t,
          P = null != b,
          [A, Z] = o.useState(!1),
          z = (0, u.e7)([g.ZP], () =>
            null != M ? g.ZP.getUsableCustomEmojiById(M) : null,
          ),
          y = P || null != E,
          T = (!P || !A) && (null != M || null != S),
          N = 0 === n,
          R = o.useRef(null),
          w = (0, u.e7)([h.Z], () => h.Z.keyboardModeEnabled),
          L = (e) => {
            let n = p.Sb.getSetting();
            x.wS &&
              n &&
              (0, m.jW)(e, async () => {
                let { default: e } = await l.e("29646").then(l.bind(l, 955116));
                return (l) => (0, a.jsx)(e, { ...l, tag: t });
              });
          },
          k = (0, a.jsxs)(a.Fragment, {
            children: [
              T
                ? (0, a.jsx)(f.Z, {
                    className: s()(v.emoji, { [v.small]: N }),
                    emojiId: M,
                    emojiName: S,
                    animated: !!(null == z ? void 0 : z.animated),
                    size: "reaction",
                  })
                : null,
              A &&
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
                variant: N ? "text-xs/semibold" : "text-sm/semibold",
                lineClamp: 1,
                children: j,
              }),
            ],
          }),
          U = {
            key: t.id,
            className: s()(
              v.pill,
              {
                [v.disabled]: i,
                [v.clickable]: y,
                [v.small]: N,
                [v.selected]: I,
              },
              r,
            ),
            onClick: (e) => {
              null == E || E(e),
                null == b || b(t),
                !w && null != R.current && R.current.blur();
            },
            onContextMenu: (e) => L(e),
            onMouseEnter: () => P && Z(!0),
            onMouseLeave: () => P && Z(!1),
          },
          B = (0, d.JA)("forum-tag-".concat(t.id));
        return y
          ? (0, a.jsx)(c.Clickable, {
              ...B,
              innerRef: R,
              focusProps: { ringTarget: R },
              "aria-label":
                null != C
                  ? C
                  : _.intl.formatToPlainString(_.t.iyRTLi, { tagName: j }),
              role: "button",
              "aria-pressed": I,
              ...U,
              children: k,
            })
          : (0, a.jsx)("div", { ...U, children: k });
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
              className: s()(v.pill, { [v.small]: i }),
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
    942951: function (e, t, l) {
      l.d(t, {
        l: function () {
          return m;
        },
      });
      var n = l(200651),
        i = l(192379),
        a = l(481060),
        o = l(100527),
        r = l(906732),
        s = l(184301),
        d = l(347475),
        u = l(592125),
        c = l(91047);
      function m(e) {
        var t, l;
        let {
            user: m,
            channelId: f,
            guildId: h,
            messageId: g,
            stopPropagation: p = !1,
            ariaLabel: x,
          } = e,
          { analyticsLocations: _ } = (0, r.ZP)(o.Z.USERNAME);
        let v =
          ((t = m),
          (l = f),
          i.useCallback(
            (e) => {
              let n = u.Z.getChannel(l);
              null != n && null != t && (0, c.Pv)(e, t, n);
            },
            [t, l],
          ));
        return i.useCallback(
          (e) => (t, l) => {
            let i = (l) =>
                (0, n.jsx)(a.NameWithRoleAnchor, {
                  ...(null != l ? l : {}),
                  onContextMenu: v,
                  name: t,
                  color: null == e ? void 0 : e.colorString,
                  roleName: null == e ? void 0 : e.colorRoleName,
                  "aria-label": x,
                }),
              o = (e) => (t) => {
                p && t.stopPropagation(), e(t);
              };
            return (0, n.jsx)(
              r.Gt,
              {
                value: _,
                children:
                  null != m
                    ? (0, n.jsx)(a.Popout, {
                        position: "right",
                        preload: () =>
                          (0, s.Z)(m.id, m.getAvatarURL(h, 80), {
                            guildId: h,
                            channelId: f,
                          }),
                        renderPopout: (t) =>
                          (0, n.jsx)(d.Z, {
                            ...t,
                            userId: m.id,
                            guildId: h,
                            channelId: f,
                            messageId: g,
                            roleId: null == e ? void 0 : e.colorRoleId,
                          }),
                        children: (e) => {
                          let { onClick: t, ...l } = e;
                          return i({ onClick: o(t), ...l });
                        },
                      })
                    : i(void 0),
              },
              l,
            );
          },
          [_, m, f, h, g, v, p, x],
        );
      }
    },
    91047: function (e, t, l) {
      l.d(t, {
        Pv: function () {
          return a;
        },
        _j: function () {
          return o;
        },
        nm: function () {
          return r;
        },
        xS: function () {
          return s;
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
                  l.e("90508"),
                  l.e("13351"),
                  l.e("33862"),
                  l.e("70205"),
                  l.e("92453"),
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
      function o(e, t) {
        let { user: a, channel: o, moderationAlertId: r, guildId: s, ...d } = t;
        if (
          (null == o ? void 0 : o.isGroupDM()) ||
          (null == o ? void 0 : o.isDM())
        )
          throw Error("Cannot moderate user in DM or group DM");
        let u = null != s ? s : null == o ? void 0 : o.getGuildId();
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
                channelId: null == o ? void 0 : o.id,
                guildId: u,
                moderationAlertId: r,
                ...d,
              });
          });
      }
      function r(e, t) {
        let {
          user: a,
          guildId: o,
          analyticsLocations: r,
          onCloseContextMenu: s,
          isViewOnly: d,
        } = t;
        (0, i.jW)(e, async () => {
          let { default: e } = await l.e("45130").then(l.bind(l, 246389));
          return (t) =>
            (0, n.jsx)(e, {
              ...t,
              user: a,
              guildId: o,
              analyticsLocations: r,
              onCloseContextMenu: s,
              isViewOnly: d,
            });
        });
      }
      function s(e, t, a) {
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
        o = l(531643),
        r = l(476326),
        s = l(367907),
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
        if (d > i) {
          (0, s.yw)(p.rMx.FILE_SIZE_LIMIT_EXCEEDED, {
            channel_id: e.id,
            guild_id: n,
            user_individual_file_size_limit: i,
            pre_compression_file_sizes: a,
            pre_compression_aggregate_file_size: r,
            num_attachments: u,
            error_type: x.xi.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
            attachment_mimetypes: m,
          }),
            (0, o.openUploadError)({
              title: v.intl.string(v.t["/tGlcn"]),
              help: (0, g.BK)(l, n),
              showPremiumUpsell: !(0, h.M5)(l, _.p9.TIER_2),
              fileSize: d,
            });
          return;
        }
        (0, o.openUploadError)({
          title: v.intl.string(v.t["/tGlcn"]),
          help: v.intl.formatToPlainString(v.t.tUOJdH, {
            maxSize: f.Ng(f.OC()),
          }),
        });
      }
      function b(e, t, l) {
        let {
          filesMetadata: s,
          requireConfirm: c = !0,
          showLargeMessageDialog: f = !1,
          isThumbnail: h = !1,
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (e.length < 1) return;
        if (null != s && s.length !== e.length)
          throw Error("Unexpected mismatch between files and file metadata");
        let x = t.getGuildId();
        if ((0, g.Bf)(e, x)) {
          E(t, e);
          return;
        }
        if (u.Z.getUploadCount(t.id, l) + e.length > p.dN1) {
          (0, o.openUploadError)({
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
            platform: r.ow.WEB,
            isThumbnail: h,
            ...(null == s ? void 0 : s[t]),
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
            filesMetadata: s,
          });
      }
    },
    979956: function (e, t, l) {
      l.d(t, {
        BK: function () {
          return s;
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
        o = l(474936),
        r = l(388032);
      function s(e, t) {
        let l = i.Ng(i.dg(t));
        return a.ZP.isPremium(e, o.p9.TIER_2)
          ? r.intl.formatToPlainString(r.t.fxEKdX, { maxSize: l })
          : a.ZP.isPremium(e, o.p9.TIER_1)
            ? r.intl.formatToPlainString(r.t["Nr+Lsb"], { maxSize: l })
            : r.intl.formatToPlainString(r.t.fxEKdX, { maxSize: l });
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
        o = "([^aeiou][^aeiouy]*)",
        r = "(" + a + "[aeiou]*)",
        s = RegExp("^" + o + "?" + r + o),
        d = RegExp("^" + o + "?" + r + o + r + "?$"),
        u = RegExp("^" + o + "?(" + r + o + "){2,}"),
        c = RegExp("^" + o + "?" + a),
        m = RegExp("^" + o + a + "[^aeiouwxy]$"),
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
        C =
          /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,
        j = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
        M =
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
            ? s.test(t[1]) && (l = l.slice(0, -1))
            : (t = x.exec(l)) &&
              c.test(t[1]) &&
              ((l = t[1]),
              _.test(l)
                ? (l += "e")
                : I.test(l)
                  ? (l = l.slice(0, -1))
                  : m.test(l) && (l += "e")),
          (t = g.exec(l)) && c.test(t[1]) && (l = t[1] + "i"),
          (t = C.exec(l)) && s.test(t[1]) && (l = t[1] + n[t[2]]),
          (t = j.exec(l)) && s.test(t[1]) && (l = t[1] + i[t[2]]),
          (t = M.exec(l))
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
        createContext: o,
        useContext: r,
        useMemo: s,
        useRef: d,
      } = n;
      function u() {
        console.warn(
          "[DEPRECATED] `context` will be removed in a future version. Instead use `import { createStore, useStore } from 'zustand'`. See: https://github.com/pmndrs/zustand/discussions/1180.",
        );
        let e = o(void 0);
        return {
          Provider: ({ createStore: t, children: l }) => {
            let n = d();
            return (
              !n.current && (n.current = t()),
              a(e.Provider, { value: n.current }, l)
            );
          },
          useStore: (t, l) => {
            let n = r(e);
            if (!n)
              throw Error(
                "Seems like you have not used zustand provider as an ancestor.",
              );
            return (0, i.s)(n, t, l);
          },
          useStoreApi: () => {
            let t = r(e);
            if (!t)
              throw Error(
                "Seems like you have not used zustand provider as an ancestor.",
              );
            return s(() => ({ ...t }), [t]);
          },
        };
      }
    },
  },
]);
//# sourceMappingURL=fd9af6aa7aa07365b34b.js.map
