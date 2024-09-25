"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["91842"],
  {
    273602: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return Z;
          },
        }),
        n(47120);
      var l = n(735250),
        a = n(470079),
        s = n(442837),
        o = n(481060),
        i = n(904245),
        d = n(166459),
        r = n(680287),
        _ = n(313201),
        u = n(163268),
        c = n(813197),
        A = n(592125),
        E = n(703558),
        f = n(430824),
        m = n(375954),
        h = n(403182),
        I = n(709054),
        T = n(127654),
        p = n(979956),
        M = n(228392),
        O = n(404616),
        g = n(470623),
        R = n(981631),
        L = n(231338),
        C = n(689938),
        D = n(947251);
      function Z(e) {
        var t;
        let {
            threadId: n,
            attachments: Z,
            sendMessage: P,
            transitionState: N,
            onClose: U,
          } = e,
          x = (0, _.Dt)(),
          S = (0, s.e7)([A.Z], () => A.Z.getChannel(n), [n]),
          B = (0, s.e7)(
            [f.Z],
            () => f.Z.getGuild(null == S ? void 0 : S.getGuildId()),
            [S],
          ),
          G = (0, s.e7)(
            [A.Z],
            () => A.Z.getChannel(null == S ? void 0 : S.parent_id),
            [S],
          ),
          v = null === (t = Z[0]) || void 0 === t ? void 0 : t.item,
          [F, z] = a.useState(null);
        a.useEffect(() => {
          null != v && (0, c.Fq)(v.file, (e, t) => z(e), L.dG);
        }, [v]);
        let b =
            null != v && null != F
              ? {
                  src: F,
                  width: O.TJ,
                  height: O.Lp,
                  spoiler: Z[0].spoiler,
                  alt: Z[0].description,
                }
              : null,
          [k, w] = a.useState(!1),
          j = a.useCallback(() => {
            (0, M.xI)({ added: !1 }), P(), U();
          }, [P, U]),
          y = a.useCallback(() => {
            null != S &&
              null != B &&
              ((0, M.xI)({ added: !0 }),
              !(function (e) {
                let {
                    thread: t,
                    attachments: n,
                    setIsUploading: l,
                    guild: a,
                    onClose: s,
                  } = e,
                  o = new r.Z(
                    R.ANM.MESSAGE(
                      t.id,
                      I.default.castChannelIdAsMessageId(t.id),
                    ),
                    "PATCH",
                  );
                o.on("start", () => {
                  l(!0);
                }),
                  o.on("progress", (e) => {
                    let i = (0, h.dg)(a.id);
                    e.currentSize > i &&
                      (o.cancel(), l(!1), s(), (0, T.G)(t, (0, p.KZ)(n)));
                  }),
                  o.on("error", (e, n, a) => {
                    l(!1),
                      n === R.evJ.EXPLICIT_CONTENT &&
                        (s(),
                        i.Z.sendExplicitMediaClydeError(
                          t.id,
                          null == a ? void 0 : a.attachments,
                          u.UU.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED,
                        ),
                        d.Z.clearAll(t.id, E.d.ChannelMessage));
                  }),
                  o.on("complete", () => {
                    l(!1), s(), d.Z.clearAll(t.id, E.d.ChannelMessage);
                  });
                let _ = m.Z.getMessages(t.id).get(
                    I.default.castChannelIdAsMessageId(t.id),
                  ),
                  c = null != _ ? _.attachments : [];
                o.uploadFiles(
                  n,
                  { attachments: [...c] },
                  { addFilesTo: "attachments" },
                );
              })({
                thread: S,
                attachments: Z,
                setIsUploading: w,
                guild: B,
                onClose: U,
              }));
          }, [S, Z, w, B, U]);
        return null == G
          ? null
          : (0, l.jsxs)(o.ModalRoot, {
              transitionState: N,
              size: o.ModalSize.SMALL,
              className: D.modalRoot,
              "aria-labelledby": x,
              children: [
                (0, l.jsxs)(o.ModalContent, {
                  className: D.modal,
                  children: [
                    (0, l.jsx)(o.Heading, {
                      variant: "heading-md/semibold",
                      className: D.header,
                      id: x,
                      children:
                        C.Z.Messages.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_TITLE,
                    }),
                    (0, l.jsx)(o.Text, {
                      variant: "text-md/normal",
                      className: D.__invalid_body,
                      children:
                        C.Z.Messages
                          .FORUM_ADD_MEDIA_TO_ORIGINAL_POST_DESCRIPTION,
                    }),
                    (0, l.jsx)("div", {
                      className: D.forumPost,
                      children: (0, l.jsx)(g.oL, {
                        createStore: () => (0, g.NU)(G),
                        children: (0, l.jsx)(O.ZP, {
                          threadId: n,
                          goToThread: L.dG,
                          overrideMedia: b,
                        }),
                      }),
                    }),
                  ],
                }),
                (0, l.jsxs)(o.ModalFooter, {
                  className: D.modalFooter,
                  children: [
                    (0, l.jsx)(o.Button, {
                      look: o.Button.Looks.BLANK,
                      className: D.cancelButton,
                      disabled: k,
                      onClick: U,
                      children: C.Z.Messages.CANCEL,
                    }),
                    (0, l.jsx)(o.Button, {
                      color: o.Button.Colors.PRIMARY,
                      className: D.dontAddButton,
                      disabled: k,
                      onClick: j,
                      children:
                        C.Z.Messages.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_DONT_ADD,
                    }),
                    (0, l.jsx)(o.Button, {
                      color: o.Button.Colors.BRAND,
                      className: D.__invalid_button,
                      submitting: k,
                      onClick: y,
                      autoFocus: !0,
                      children:
                        C.Z.Messages.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_ADD,
                    }),
                  ],
                }),
              ],
            });
      }
    },
    127654: function (e, t, n) {
      n.d(t, {
        G: function () {
          return p;
        },
        d: function () {
          return M;
        },
      }),
        n(653041),
        n(47120),
        n(411104);
      var l = n(475179),
        a = n(166459),
        s = n(966390),
        o = n(531643),
        i = n(476326),
        d = n(367907),
        r = n(358221),
        _ = n(117530),
        u = n(594174),
        c = n(626135),
        A = n(403182),
        E = n(74538),
        f = n(979956),
        m = n(981631),
        h = n(959517),
        I = n(474936),
        T = n(689938);
      function p(e, t) {
        let n = u.default.getCurrentUser(),
          l = e.getGuildId(),
          a = A.dg(l),
          s = [],
          i = 0,
          r = 0,
          _ = 0,
          c = [];
        for (let e of t)
          (_ += 1),
            (i += e.size),
            s.push(e.size),
            e.size > r && (r = e.size),
            null != e.type ? c.push(e.type) : c.push("unknown");
        if (r > a) {
          (0, d.yw)(m.rMx.FILE_SIZE_LIMIT_EXCEEDED, {
            channel_id: e.id,
            guild_id: l,
            user_individual_file_size_limit: a,
            pre_compression_file_sizes: s,
            pre_compression_aggregate_file_size: i,
            num_attachments: _,
            error_type: h.xi.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
            attachment_mimetypes: c,
          }),
            (0, o.openUploadError)({
              title: T.Z.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
              help: (0, f.BK)(n, l),
              showPremiumUpsell: !(0, E.M5)(n, I.p9.TIER_2),
              fileSize: r,
            });
          return;
        }
        (0, o.openUploadError)({
          title: T.Z.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
          help: T.Z.Messages.UPLOAD_AREA_REQUEST_LIMIT_HELP.format({
            maxSize: A.Ng(A.OC()),
          }),
        });
      }
      function M(e, t, n) {
        let {
          filesMetadata: d,
          requireConfirm: u = !0,
          showLargeMessageDialog: A = !1,
          isThumbnail: E = !1,
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (e.length < 1) return;
        if (null != d && d.length !== e.length)
          throw Error("Unexpected mismatch between files and file metadata");
        let h = t.getGuildId();
        if ((0, f.Bf)(e, h)) {
          p(t, e);
          return;
        }
        if (_.Z.getUploadCount(t.id, n) + e.length > m.dN1) {
          (0, o.openUploadError)({
            title: T.Z.Messages.ATTACHMENT_TOO_MANY_ERROR_TITLE,
            help: T.Z.Messages.ATTACHMENT_TOO_MANY_ERROR_MESSAGE.format({
              limit: m.dN1,
            }),
          }),
            c.default.track(m.rMx.UPLOAD_FILE_LIMIT_ERROR, {
              existing_count: _.Z.getUploadCount(t.id, n),
              new_count: e.length,
            });
          return;
        }
        if (
          ((t.type === m.d4z.GUILD_VOICE ||
            t.type === m.d4z.GUILD_STAGE_VOICE) &&
            !r.Z.getChatOpen(t.id) &&
            l.Z.updateChatOpen(t.id, !0),
          u)
        ) {
          let l = Array.from(e).map((e, t) => ({
            file: e,
            platform: i.ow.WEB,
            isThumbnail: E,
            ...(null == d ? void 0 : d[t]),
          }));
          a.Z.addFiles({
            files: l,
            channelId: t.id,
            showLargeMessageDialog: A,
            draftType: n,
          });
        } else
          s.Z.instantBatchUpload({
            channelId: t.id,
            files: e,
            draftType: n,
            isThumbnail: E,
            filesMetadata: d,
          });
      }
    },
    979956: function (e, t, n) {
      n.d(t, {
        BK: function () {
          return d;
        },
        Bf: function () {
          return r;
        },
        KZ: function () {
          return _;
        },
      }),
        n(724458),
        n(653041);
      var l = n(476326),
        a = n(403182),
        s = n(74538),
        o = n(474936),
        i = n(689938);
      function d(e, t) {
        let n = a.Ng(a.dg(t));
        return s.ZP.isPremium(e, o.p9.TIER_2)
          ? i.Z.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({ maxSize: n })
          : s.ZP.isPremium(e, o.p9.TIER_1)
            ? i.Z.Messages.UPLOAD_AREA_TOO_LARGE_HELP_PREMIUM_TIER_1.format({
                maxSize: n,
              })
            : i.Z.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({ maxSize: n });
      }
      function r(e, t) {
        return a.nA(e, t) || a.vY(e);
      }
      function _(e) {
        return e.reduce(
          (e, t) => (t.item.platform === l.ow.WEB && e.push(t.item.file), e),
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
  },
]);
//# sourceMappingURL=cd36b7ed66dd33e5ce4f.js.map
