"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["32304"],
  {
    127654: function (e, t, i) {
      i.d(t, {
        G: function () {
          return h;
        },
        d: function () {
          return A;
        },
      }),
        i(653041),
        i(47120),
        i(411104);
      var n = i(475179),
        c = i(166459),
        o = i(966390),
        a = i(531643),
        l = i(476326),
        _ = i(367907),
        r = i(358221),
        s = i(117530),
        f = i(594174),
        p = i(626135),
        u = i(403182),
        d = i(74538),
        E = i(979956),
        T = i(981631),
        g = i(959517),
        I = i(474936),
        m = i(689938);
      function h(e, t) {
        let i = f.default.getCurrentUser(),
          n = e.getGuildId(),
          c = u.dg(n),
          o = [],
          l = 0,
          r = 0,
          s = 0,
          p = [];
        for (let e of t)
          (s += 1),
            (l += e.size),
            o.push(e.size),
            e.size > r && (r = e.size),
            null != e.type ? p.push(e.type) : p.push("unknown");
        if (r > c) {
          (0, _.yw)(T.rMx.FILE_SIZE_LIMIT_EXCEEDED, {
            channel_id: e.id,
            guild_id: n,
            user_individual_file_size_limit: c,
            pre_compression_file_sizes: o,
            pre_compression_aggregate_file_size: l,
            num_attachments: s,
            error_type: g.xi.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
            attachment_mimetypes: p,
          }),
            (0, a.openUploadError)({
              title: m.Z.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
              help: (0, E.BK)(i, n),
              showPremiumUpsell: !(0, d.M5)(i, I.p9.TIER_2),
              fileSize: r,
            });
          return;
        }
        (0, a.openUploadError)({
          title: m.Z.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
          help: m.Z.Messages.UPLOAD_AREA_REQUEST_LIMIT_HELP.format({
            maxSize: u.Ng(u.OC()),
          }),
        });
      }
      function A(e, t, i) {
        let {
          filesMetadata: _,
          requireConfirm: f = !0,
          showLargeMessageDialog: u = !1,
          isThumbnail: d = !1,
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (e.length < 1) return;
        if (null != _ && _.length !== e.length)
          throw Error("Unexpected mismatch between files and file metadata");
        let g = t.getGuildId();
        if ((0, E.Bf)(e, g)) {
          h(t, e);
          return;
        }
        if (s.Z.getUploadCount(t.id, i) + e.length > T.dN1) {
          (0, a.openUploadError)({
            title: m.Z.Messages.ATTACHMENT_TOO_MANY_ERROR_TITLE,
            help: m.Z.Messages.ATTACHMENT_TOO_MANY_ERROR_MESSAGE.format({
              limit: T.dN1,
            }),
          }),
            p.default.track(T.rMx.UPLOAD_FILE_LIMIT_ERROR, {
              existing_count: s.Z.getUploadCount(t.id, i),
              new_count: e.length,
            });
          return;
        }
        if (
          ((t.type === T.d4z.GUILD_VOICE ||
            t.type === T.d4z.GUILD_STAGE_VOICE) &&
            !r.Z.getChatOpen(t.id) &&
            n.Z.updateChatOpen(t.id, !0),
          f)
        ) {
          let n = Array.from(e).map((e, t) => ({
            file: e,
            platform: l.ow.WEB,
            isThumbnail: d,
            ...(null == _ ? void 0 : _[t]),
          }));
          c.Z.addFiles({
            files: n,
            channelId: t.id,
            showLargeMessageDialog: u,
            draftType: i,
          });
        } else
          o.Z.instantBatchUpload({
            channelId: t.id,
            files: e,
            draftType: i,
            isThumbnail: d,
            filesMetadata: _,
          });
      }
    },
    979956: function (e, t, i) {
      i.d(t, {
        BK: function () {
          return _;
        },
        Bf: function () {
          return r;
        },
        KZ: function () {
          return s;
        },
      }),
        i(724458),
        i(653041);
      var n = i(476326),
        c = i(403182),
        o = i(74538),
        a = i(474936),
        l = i(689938);
      function _(e, t) {
        let i = c.Ng(c.dg(t));
        return o.ZP.isPremium(e, a.p9.TIER_2)
          ? l.Z.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({ maxSize: i })
          : o.ZP.isPremium(e, a.p9.TIER_1)
            ? l.Z.Messages.UPLOAD_AREA_TOO_LARGE_HELP_PREMIUM_TIER_1.format({
                maxSize: i,
              })
            : l.Z.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({ maxSize: i });
      }
      function r(e, t) {
        return c.nA(e, t) || c.vY(e);
      }
      function s(e) {
        return e.reduce(
          (e, t) => (t.item.platform === n.ow.WEB && e.push(t.item.file), e),
          [],
        );
      }
    },
    66120: function (e, t, i) {
      e.exports = {
        clipItem: "clipItem_fcf712",
        disabled: "disabled_fcf712",
        newIcon: "newIcon_fcf712",
        clipBadges: "clipBadges_fcf712",
        clipNewBadge: "clipNewBadge_fcf712 clipBadge_fcf712",
        clipDurationBadge: "clipDurationBadge_fcf712 clipBadge_fcf712",
        clipProcessingBadge: "clipProcessingBadge_fcf712 clipBadge_fcf712",
        clipDurationEditIcon: "clipDurationEditIcon_fcf712",
        clipThumb: "clipThumb_fcf712",
        clipThumbContainer: "clipThumbContainer_fcf712",
        clipFooter: "clipFooter_fcf712",
        clipTitleIcon: "clipTitleIcon_fcf712",
        clipTitleInput: "clipTitleInput_fcf712",
        clipTitleInputPlaceholder: "clipTitleInputPlaceholder_fcf712",
        clipTitle: "clipTitle_fcf712",
        clipMetadata: "clipMetadata_fcf712",
        usersAndDelete: "usersAndDelete_fcf712",
        buttonContainer: "buttonContainer_fcf712",
        button: "button_fcf712",
        miniIcon: "miniIcon_fcf712",
      };
    },
    630814: function (e, t, i) {
      e.exports = {
        container: "container_ce6af6",
        content: "content_ce6af6",
        noClipsText: "noClipsText_ce6af6 commonText_ce6af6",
        noSearchResultsText: "noSearchResultsText_ce6af6 commonText_ce6af6",
        noSearchResultsImage: "noSearchResultsImage_ce6af6",
        noClipsImage: "noClipsImage_ce6af6",
        keybindHintKeys: "keybindHintKeys_ce6af6",
        keybindShortcut: "keybindShortcut_ce6af6",
      };
    },
    89441: function (e, t, i) {
      e.exports = {
        root: "root_b0623a",
        icon: "icon_b0623a",
        title: "title_b0623a",
        betaTag: "betaTag_b0623a",
        queryInput: "queryInput_b0623a",
        sortInput: "sortInput_b0623a",
        button: "button_b0623a",
        settingsButton: "settingsButton_b0623a button_b0623a",
      };
    },
    21554: function (e, t, i) {
      e.exports = {
        root: "root_e3c915",
        clipGrid: "clipGrid_e3c915",
        clipsRow: "clipsRow_e3c915",
        spinnerContainer: "spinnerContainer_e3c915",
      };
    },
  },
]);
//# sourceMappingURL=086cdb3097770c17e4eb.js.map
