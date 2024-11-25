"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["74750"],
  {
    127654: function (t, e, n) {
      n.d(e, {
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
        c = n(166459),
        o = n(966390),
        l = n(531643),
        r = n(476326),
        a = n(367907),
        f = n(358221),
        p = n(117530),
        u = n(594174),
        s = n(626135),
        _ = n(403182),
        d = n(74538),
        g = n(979956),
        m = n(981631),
        h = n(959517),
        I = n(474936),
        T = n(388032);
      function b(t, e) {
        let n = u.default.getCurrentUser(),
          i = t.getGuildId(),
          c = _.dg(i),
          o = [],
          r = 0,
          f = 0,
          p = 0,
          s = [];
        for (let t of e)
          (p += 1),
            (r += t.size),
            o.push(t.size),
            t.size > f && (f = t.size),
            null != t.type ? s.push(t.type) : s.push("unknown");
        if (f > c) {
          (0, a.yw)(m.rMx.FILE_SIZE_LIMIT_EXCEEDED, {
            channel_id: t.id,
            guild_id: i,
            user_individual_file_size_limit: c,
            pre_compression_file_sizes: o,
            pre_compression_aggregate_file_size: r,
            num_attachments: p,
            error_type: h.xi.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
            attachment_mimetypes: s,
          }),
            (0, l.openUploadError)({
              title: T.intl.string(T.t["/tGlcn"]),
              help: (0, g.BK)(n, i),
              showPremiumUpsell: !(0, d.M5)(n, I.p9.TIER_2),
              fileSize: f,
            });
          return;
        }
        (0, l.openUploadError)({
          title: T.intl.string(T.t["/tGlcn"]),
          help: T.intl.formatToPlainString(T.t.tUOJdH, {
            maxSize: _.Ng(_.OC()),
          }),
        });
      }
      function E(t, e, n) {
        let {
          filesMetadata: a,
          requireConfirm: u = !0,
          showLargeMessageDialog: _ = !1,
          isThumbnail: d = !1,
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (t.length < 1) return;
        if (null != a && a.length !== t.length)
          throw Error("Unexpected mismatch between files and file metadata");
        let h = e.getGuildId();
        if ((0, g.Bf)(t, h)) {
          b(e, t);
          return;
        }
        if (p.Z.getUploadCount(e.id, n) + t.length > m.dN1) {
          (0, l.openUploadError)({
            title: T.intl.string(T.t.wOr6hI),
            help: T.intl.formatToPlainString(T.t["qqyp/f"], { limit: m.dN1 }),
          }),
            s.default.track(m.rMx.UPLOAD_FILE_LIMIT_ERROR, {
              existing_count: p.Z.getUploadCount(e.id, n),
              new_count: t.length,
            });
          return;
        }
        if (
          ((e.type === m.d4z.GUILD_VOICE ||
            e.type === m.d4z.GUILD_STAGE_VOICE) &&
            !f.Z.getChatOpen(e.id) &&
            i.Z.updateChatOpen(e.id, !0),
          u)
        ) {
          let i = Array.from(t).map((t, e) => ({
            file: t,
            platform: r.ow.WEB,
            isThumbnail: d,
            ...(null == a ? void 0 : a[e]),
          }));
          c.Z.addFiles({
            files: i,
            channelId: e.id,
            showLargeMessageDialog: _,
            draftType: n,
          });
        } else
          o.Z.instantBatchUpload({
            channelId: e.id,
            files: t,
            draftType: n,
            isThumbnail: d,
            filesMetadata: a,
          });
      }
    },
    979956: function (t, e, n) {
      n.d(e, {
        BK: function () {
          return a;
        },
        Bf: function () {
          return f;
        },
        KZ: function () {
          return p;
        },
      }),
        n(724458),
        n(653041);
      var i = n(476326),
        c = n(403182),
        o = n(74538),
        l = n(474936),
        r = n(388032);
      function a(t, e) {
        let n = c.Ng(c.dg(e));
        return o.ZP.isPremium(t, l.p9.TIER_2)
          ? r.intl.formatToPlainString(r.t.fxEKdX, { maxSize: n })
          : o.ZP.isPremium(t, l.p9.TIER_1)
            ? r.intl.formatToPlainString(r.t["Nr+Lsb"], { maxSize: n })
            : r.intl.formatToPlainString(r.t.fxEKdX, { maxSize: n });
      }
      function f(t, e) {
        return c.nA(t, e) || c.vY(t);
      }
      function p(t) {
        return t.reduce(
          (t, e) => (e.item.platform === i.ow.WEB && t.push(e.item.file), t),
          [],
        );
      }
    },
    272964: function (t, e, n) {
      t.exports = {
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
    680901: function (t, e, n) {
      t.exports = {
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
    173855: function (t, e, n) {
      t.exports = {
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
    436898: function (t, e, n) {
      t.exports = {
        root: "root_e3c915",
        clipGrid: "clipGrid_e3c915",
        clipsRow: "clipsRow_e3c915",
        spinnerContainer: "spinnerContainer_e3c915",
      };
    },
  },
]);
//# sourceMappingURL=8a9cee13998ee9381cb7.js.map
