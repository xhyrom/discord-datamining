"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["25417"],
  {
    971130: function (e, n, t) {
      let a;
      t.d(n, {
        Sz: function () {
          return v;
        },
        Vg: function () {
          return C;
        },
        an: function () {
          return U;
        },
        bm: function () {
          return r;
        },
        rh: function () {
          return D;
        },
      }),
        t(653041),
        t(47120);
      var r,
        i,
        o = t(317381),
        c = t(592125),
        _ = t(271383),
        I = t(306680),
        l = t(699516),
        d = t(594174),
        u = t(55589),
        f = t(483360),
        s = t(981631),
        T = t(245335),
        S = t(388032);
      (a = t(603617)),
        ((i = r || (r = {})).GROUP_DM = "GROUP_DM"),
        (i.DM = "DM"),
        (i.FRIEND = "FRIEND"),
        (i.CHANNEL = "CHANNEL");
      let N = (e, n) => null != e && _.ZP.isMember(e, n),
        O = (e) => {
          let {
            omitUserIds: n,
            suggestedUserIds: t,
            maxRowsWithoutQuery: a,
            omitGuildId: r,
            shownUserIds: i,
            rows: o,
            counts: c,
          } = e;
          if (null != t)
            for (let e of t) {
              if (null != a && a > 0 && o.length >= a) break;
              if (n.has(e) || i.has(e)) continue;
              let t = d.default.getUser(e);
              !(null == t || N(r, t.id)) &&
                (i.add(t.id),
                o.push({ type: "FRIEND", item: t, isSuggested: !0 }),
                c.numFriends++);
            }
        },
        m = (e) => {
          let {
            suggestedChannelIds: n,
            maxRowsWithoutQuery: t,
            rows: a,
            counts: r,
          } = e;
          if (null != n)
            for (let e of n) {
              if (null != t && t > 0 && a.length >= t) break;
              let n = c.Z.getChannel(e);
              null != n &&
                (a.push({ type: "CHANNEL", item: n, isSuggested: !0 }),
                r.numChannels++);
            }
        },
        p = (e) => {
          let {
              omitUserIds: n,
              maxRowsWithoutQuery: t,
              omitGuildId: a,
              shownUserIds: r,
              rows: i,
              counts: o,
              includeGroupDms: _,
              limit: l,
            } = e,
            f = 0;
          for (let e of u.Z.getPrivateChannelIds()) {
            if ((null != t && t > 0 && i.length >= t) || (null != l && f >= l))
              break;
            let u = c.Z.getChannel(e);
            if (null == u || !u.isPrivate()) continue;
            if (_ && u.type === s.d4z.GROUP_DM) {
              i.push({ type: "GROUP_DM", item: u, isSuggested: !1 }),
                o.numGroupDms++,
                f++;
              continue;
            }
            if (null == I.ZP.lastMessageId(u.id)) continue;
            let T = u.getRecipientId();
            if (null != T && !n.has(T) && !r.has(T)) {
              let e = d.default.getUser(T);
              if (null == e || e.bot || N(a, e.id)) continue;
              r.add(e.id),
                i.push({ type: "DM", item: e, isSuggested: !1 }),
                o.numDms++,
                f++;
            }
          }
        },
        g = (e) => {
          let {
            omitUserIds: n,
            maxRowsWithoutQuery: t,
            omitGuildId: a,
            shownUserIds: r,
            rows: i,
            counts: o,
          } = e;
          for (let e of l.Z.getFriendIDs()) {
            if (null != t && t > 0 && i.length >= t) break;
            if (n.has(e) || r.has(e)) continue;
            let c = d.default.getUser(e);
            !(null == c || N(a, c.id)) &&
              (i.push({ type: "FRIEND", item: c, isSuggested: !1 }),
              o.numFriends++);
          }
        },
        E = (e) => {
          let { query: n, rows: t, counts: a, inviteTargetType: r } = e;
          r === T.Iq.EMBEDDED_APPLICATION &&
            f.ZP.queryChannels({ query: n, limit: 3, guildId: void 0 }).forEach(
              (e) => {
                let { record: n } = e;
                t.push({ type: "CHANNEL", item: n, isSuggested: !1 }),
                  a.numChannels++;
              },
            );
        },
        P = (e) => {
          let {
            query: n,
            omitUserIds: t,
            shownUserIds: a,
            rows: r,
            counts: i,
          } = e;
          f.ZP.queryDMUsers({ query: n, limit: 50 }).forEach((e) => {
            let { record: n } = e;
            if (t.has(n.id)) return;
            let o = c.Z.getDMFromUserId(n.id);
            if (null != o && null != I.ZP.lastMessageId(o))
              a.add(n.id),
                r.push({ type: "DM", item: n, isSuggested: !1 }),
                i.numDms++;
          });
        },
        h = (e) => {
          let { query: n, rows: t, counts: a } = e;
          f.ZP.queryGroupDMs({ query: n, limit: 50, fuzzy: !1 }).forEach(
            (e) => {
              let { record: n } = e;
              t.push({ type: "GROUP_DM", item: n, isSuggested: !1 }),
                a.numGroupDms++;
            },
          );
        },
        b = (e) => {
          let {
            query: n,
            rows: t,
            counts: a,
            omitUserIds: r,
            shownUserIds: i,
          } = e;
          f.ZP.queryFriends({ query: n, limit: 500, _fuzzy: !1 }).forEach(
            (e) => {
              let { record: n } = e;
              if (!(r.has(n.id) || i.has(n.id)))
                i.add(n.id),
                  t.push({ type: "FRIEND", item: n, isSuggested: !1 }),
                  a.numFriends++;
            },
          );
        };
      function U(e) {
        let {
            query: n,
            inviteTargetType: t,
            omitUserIds: a,
            suggestedUserIds: r,
            suggestedChannelIds: i,
            maxRowsWithoutQuery: o,
            omitGuildId: c,
          } = e,
          _ = new Set(),
          I = [],
          l = {
            numFriends: 0,
            numDms: 0,
            numGroupDms: 0,
            numGuildMembers: 0,
            numChannels: 0,
          };
        if ("" === n) {
          let e = {
            omitUserIds: a,
            maxRowsWithoutQuery: o,
            omitGuildId: c,
            shownUserIds: _,
            rows: I,
            counts: l,
          };
          t === T.Iq.EMBEDDED_APPLICATION &&
            (p({ ...e, includeGroupDms: !1, limit: 1 }),
            m({ ...e, suggestedChannelIds: i })),
            O({ ...e, suggestedUserIds: r }),
            p({ ...e, includeGroupDms: !0 }),
            g(e);
        } else {
          let e = { query: n, rows: I, counts: l };
          t === T.Iq.EMBEDDED_APPLICATION && E({ ...e, inviteTargetType: t }),
            P({ ...e, omitUserIds: a, shownUserIds: _ }),
            h(e),
            b({ ...e, omitUserIds: a, shownUserIds: _ });
        }
        return { rows: I, counts: l };
      }
      function D(e, n) {
        for (let t of u.Z.getPrivateChannelIds()) {
          let a = c.Z.getChannel(t);
          if (null == a || !a.isDM() || null == I.ZP.lastMessageId(a.id))
            continue;
          let r = a.getRecipientId();
          if (null != r && !e.has(r)) {
            let e = d.default.getUser(r);
            if (null == e || e.bot || N(n, e.id)) continue;
            return e;
          }
        }
        return null;
      }
      function v(e) {
        let { channel: n, inviteTargetType: t, applicationId: a } = e;
        if (t === T.Iq.EMBEDDED_APPLICATION) {
          if (null != n) {
            for (let e of o.ZP.getEmbeddedActivitiesForChannel(n.id))
              if (e.applicationId === a) return new Set(e.userIds);
          }
        }
        return new Set();
      }
      let M = {
          MINUTES: "minutes",
          HOURS: "hours",
          DAYS: "days",
          NEVER: "never",
        },
        V = {
          [a.INVITE_OPTIONS_30_MINUTES.value]: { value: 30, type: M.MINUTES },
          [a.INVITE_OPTIONS_1_HOUR.value]: { value: 1, type: M.HOURS },
          [a.INVITE_OPTIONS_6_HOURS.value]: { value: 6, type: M.HOURS },
          [a.INVITE_OPTIONS_12_HOURS.value]: { value: 12, type: M.HOURS },
          [a.INVITE_OPTIONS_1_DAY.value]: { value: 1, type: M.DAYS },
          [a.INVITE_OPTIONS_7_DAYS.value]: { value: 7, type: M.DAYS },
          [a.INVITE_OPTIONS_FOREVER.value]: { value: 0, type: M.NEVER },
        };
      function C(e, n) {
        let t = parseInt(n, 10),
          a = 0 === t,
          r = V[e].value;
        switch (V[e].type) {
          case M.MINUTES:
            if (a) return S.intl.string(S.t["/WbTXF"]);
            return S.intl.formatToPlainString(S.t.eDRWJC, { numUses: t });
          case M.HOURS:
            if (a)
              return S.intl.formatToPlainString(S.t.ZVdJMz, { numHours: r });
            return S.intl.formatToPlainString(S.t.NgZgAA, {
              numHours: r,
              numUses: t,
            });
          case M.DAYS:
            if (a)
              return S.intl.formatToPlainString(S.t.T96qsr, { numDays: r });
            return S.intl.formatToPlainString(S.t.TfuB9P, {
              numDays: r,
              numUses: t,
            });
          case M.NEVER:
            if (a) return S.intl.string(S.t.QrHBnJ);
            return S.intl.formatToPlainString(S.t.yJnTxM, { numUses: t });
          default:
            return "";
        }
      }
      n.ZP = {
        getMaxAgeOptions: a.MAX_AGE_OPTIONS,
        getMaxUsesOptions: a.MAX_USES_OPTIONS,
        INVITE_OPTIONS_FOREVER: a.INVITE_OPTIONS_FOREVER,
        INVITE_OPTIONS_1_DAY: a.INVITE_OPTIONS_1_DAY,
        INVITE_OPTIONS_7_DAYS: a.INVITE_OPTIONS_7_DAYS,
        INVITE_OPTIONS_12_HOURS: a.INVITE_OPTIONS_12_HOURS,
        INVITE_OPTIONS_6_HOURS: a.INVITE_OPTIONS_6_HOURS,
        INVITE_OPTIONS_1_HOUR: a.INVITE_OPTIONS_1_HOUR,
        INVITE_OPTIONS_30_MINUTES: a.INVITE_OPTIONS_30_MINUTES,
        INVITE_OPTIONS_UNLIMITED: a.INVITE_OPTIONS_UNLIMITED,
        INVITE_OPTIONS_ONCE: a.INVITE_OPTIONS_ONCE,
        INVITE_OPTIONS_5_TIMES: a.INVITE_OPTIONS_5_TIMES,
        INVITE_OPTIONS_10_TIMES: a.INVITE_OPTIONS_10_TIMES,
        INVITE_OPTIONS_25_TIMES: a.INVITE_OPTIONS_25_TIMES,
        INVITE_OPTIONS_50_TIMES: a.INVITE_OPTIONS_50_TIMES,
        INVITE_OPTIONS_100_TIMES: a.INVITE_OPTIONS_100_TIMES,
      };
    },
    603617: function (e, n, t) {
      t.r(n),
        t.d(n, {
          INVITE_OPTIONS_100_TIMES: function () {
            return d;
          },
          INVITE_OPTIONS_10_TIMES: function () {
            return _;
          },
          INVITE_OPTIONS_12_HOURS: function () {
            return S;
          },
          INVITE_OPTIONS_1_DAY: function () {
            return N;
          },
          INVITE_OPTIONS_1_HOUR: function () {
            return s;
          },
          INVITE_OPTIONS_25_TIMES: function () {
            return I;
          },
          INVITE_OPTIONS_30_MINUTES: function () {
            return f;
          },
          INVITE_OPTIONS_50_TIMES: function () {
            return l;
          },
          INVITE_OPTIONS_5_TIMES: function () {
            return c;
          },
          INVITE_OPTIONS_6_HOURS: function () {
            return T;
          },
          INVITE_OPTIONS_7_DAYS: function () {
            return O;
          },
          INVITE_OPTIONS_FOREVER: function () {
            return m;
          },
          INVITE_OPTIONS_ONCE: function () {
            return o;
          },
          INVITE_OPTIONS_UNLIMITED: function () {
            return i;
          },
          MAX_AGE_OPTIONS: function () {
            return p;
          },
          MAX_USES_OPTIONS: function () {
            return u;
          },
        });
      var a = t(388032);
      function r(e, n) {
        return {
          value: e,
          get label() {
            return n();
          },
        };
      }
      let i = r(0, () =>
          a.intl.formatToPlainString(a.t["r/IcuL"], { maxUses: 0 }),
        ),
        o = r(1, () =>
          a.intl.formatToPlainString(a.t["r/IcuL"], { maxUses: 1 }),
        ),
        c = r(5, () =>
          a.intl.formatToPlainString(a.t["r/IcuL"], { maxUses: 5 }),
        ),
        _ = r(10, () =>
          a.intl.formatToPlainString(a.t["r/IcuL"], { maxUses: 10 }),
        ),
        I = r(25, () =>
          a.intl.formatToPlainString(a.t["r/IcuL"], { maxUses: 25 }),
        ),
        l = r(50, () =>
          a.intl.formatToPlainString(a.t["r/IcuL"], { maxUses: 50 }),
        ),
        d = r(100, () =>
          a.intl.formatToPlainString(a.t["r/IcuL"], { maxUses: 100 }),
        ),
        u = [i, o, c, _, I, l, d],
        f = r(1800, () =>
          a.intl.formatToPlainString(a.t.iXLF9f, { minutes: 30 }),
        ),
        s = r(3600, () => a.intl.formatToPlainString(a.t.xCjYxM, { hours: 1 })),
        T = r(21600, () =>
          a.intl.formatToPlainString(a.t.xCjYxM, { hours: 6 }),
        ),
        S = r(43200, () =>
          a.intl.formatToPlainString(a.t.xCjYxM, { hours: 12 }),
        ),
        N = r(86400, () => a.intl.formatToPlainString(a.t.k2UNz8, { days: 1 })),
        O = r(604800, () =>
          a.intl.formatToPlainString(a.t.k2UNz8, { days: 7 }),
        ),
        m = r(0, () => a.intl.string(a.t.PqEzn5)),
        p = [f, s, T, S, N, O, m];
    },
    243351: function (e, n, t) {
      e.exports = {
        container: "container_eccd5f",
        stepContainer: "stepContainer_eccd5f",
        progressBar: "progressBar_eccd5f",
        selectedProgressBar: "selectedProgressBar_eccd5f",
      };
    },
    94277: function (e, n, t) {
      e.exports = { title: "title_a33974" };
    },
    805553: function (e, n, t) {
      e.exports = {
        doubleInput: "doubleInput_c8eacd",
        link: "link_c8eacd",
        addIcon: "addIcon_c8eacd",
        removeIcon: "removeIcon_c8eacd",
      };
    },
    351293: function (e, n, t) {
      e.exports = {
        blockedUsersContainer: "blockedUsersContainer_b229b0",
        form: "form_b229b0",
        formItem: "formItem_b229b0",
        topicFormItem: "topicFormItem_b229b0",
        textInput: "textInput_b229b0",
        warning: "warning_b229b0",
        broadcastInfoDescription: "broadcastInfoDescription_b229b0",
        broadcastInfoTooltip: "broadcastInfoTooltip_b229b0",
        addImageHint: "addImageHint_b229b0",
        imagePreview: "imagePreview_b229b0",
        imagePreviewInner: "imagePreviewInner_b229b0",
      };
    },
    373520: function (e, n, t) {
      e.exports = {
        inline: "inline_a5724d",
        footer: "footer_a5724d",
        content: "content_a5724d",
        button: "button_a5724d",
      };
    },
    356731: function (e, n, t) {
      e.exports = {
        container: "container_c07d51",
        header: "header_c07d51",
        text: "text_c07d51",
        options: "options_c07d51",
        channelOptionIcon: "channelOptionIcon_c07d51",
        channelPrivate: "channelPrivate_c07d51",
      };
    },
    26940: function (e, n, t) {
      e.exports = {
        content: "content_f9a98f",
        channelName: "channelName_f9a98f",
        icon: "icon_f9a98f",
        locationIcon: "locationIcon_f9a98f",
        textContainer: "textContainer_f9a98f",
        subheader: "subheader_f9a98f",
        previewCard: "previewCard_f9a98f",
      };
    },
    759704: function (e, n, t) {
      e.exports = { header: "header_e74886", text: "text_e74886" };
    },
    237645: function (e, n, t) {
      e.exports = {
        container: "container_d7123a",
        close: "close_d7123a",
        iconContainer: "iconContainer_d7123a",
        icon: "icon_d7123a",
        header: "header_d7123a text_d7123a",
        body: "body_d7123a text_d7123a",
        invite: "invite_d7123a",
        inviteDetail: "inviteDetail_d7123a",
      };
    },
    510863: function (e, n, t) {
      e.exports = {
        container: "container_c811f3",
        content: "content_c811f3",
        textContainer: "textContainer_c811f3",
        descriptionText: "descriptionText_c811f3",
        image: "image_c811f3",
        inlineText: "inlineText_c811f3",
        footer: "footer_c811f3",
        button: "button_c811f3",
      };
    },
    686550: function (e, n, t) {
      e.exports = {
        avatarUploader: "avatarUploader_e9b3be",
        avatarUploaderDisabled: "avatarUploaderDisabled_e9b3be",
        avatarUploaderInnerSquare: "avatarUploaderInnerSquare_e9b3be",
        avatarUploaderInnerSquareDisabled:
          "avatarUploaderInnerSquareDisabled_e9b3be",
        avatarUploadIcon: "avatarUploadIcon_e9b3be",
        hideDefaultIcon: "hideDefaultIcon_e9b3be",
      };
    },
    315822: function (e, n, t) {
      e.exports = {
        imageUploader: "imageUploader_de76e4",
        removeButton: "removeButton_de76e4",
        sizeInfo: "sizeInfo_de76e4",
        disabled: "disabled_de76e4",
        imageUploaderInner: "imageUploaderInner_de76e4",
        imageUploaderIconWrapper: "imageUploaderIconWrapper_de76e4",
        imageUploaderFileInput: "imageUploaderFileInput_de76e4",
        imageUploaderAcronym: "imageUploaderAcronym_de76e4",
        imageUploaderHint: "imageUploaderHint_de76e4",
        imageUploaderIcon: "imageUploaderIcon_de76e4",
        imageUploaderIconDisabled: "imageUploaderIconDisabled_de76e4",
      };
    },
    871820: function (e, n, t) {
      e.exports = {
        wrapper: "wrapper_cedfaf",
        scroller: "scroller_cedfaf",
        modal: "modal_cedfaf",
        closeButton: "closeButton_cedfaf",
        headerCloseButtonSpacing: "headerCloseButtonSpacing_cedfaf",
        header: "header_cedfaf",
        headerText: "headerText_cedfaf",
        headerChannelContainer: "headerChannelContainer_cedfaf",
        channelIcon: "channelIcon_cedfaf",
        searchBar: "searchBar_cedfaf",
        hubHeader: "hubHeader_cedfaf",
        hubInviteTitle: "hubInviteTitle_cedfaf",
        hubFriendSearch: "hubFriendSearch_cedfaf",
        inviteRow: "inviteRow_cedfaf",
        inviteRowAvatar: "inviteRowAvatar_cedfaf",
        inviteRowInfo: "inviteRowInfo_cedfaf",
        inviteRowName: "inviteRowName_cedfaf",
        inviteRowButton: "inviteRowButton_cedfaf",
        inviteRowEmptyState: "inviteRowEmptyState_cedfaf",
        warningContainer: "warningContainer_cedfaf",
        warningIcon: "warningIcon_cedfaf",
        input: "input_cedfaf",
        noPadding: "noPadding_cedfaf",
        content: "content_cedfaf",
        copyInput: "copyInput_cedfaf",
        copyButton: "copyButton_cedfaf",
        subText: "subText_cedfaf",
        temporaryMembershipContainerBackground:
          "temporaryMembershipContainerBackground_cedfaf",
        temporaryMembershipContainer: "temporaryMembershipContainer_cedfaf",
        noScroll: "noScroll_cedfaf",
        settingsFooter: "settingsFooter_cedfaf",
        footer: "footer_cedfaf",
        footerText: "footerText_cedfaf",
        headerContainer: "headerContainer_cedfaf",
        welcomeImage: "welcomeImage_cedfaf",
        welcomeHeading: "welcomeHeading_cedfaf",
        welcomeSubheading: "welcomeSubheading_cedfaf",
        errorMessage: "errorMessage_cedfaf",
        errorLink: "errorLink_cedfaf",
        acronym: "acronym_cedfaf",
        guestBody: "guestBody_cedfaf",
        guestSendInviteLinkHeader: "guestSendInviteLinkHeader_cedfaf",
        guestSelectChannelHeader: "guestSelectChannelHeader_cedfaf",
      };
    },
    578814: function (e, n, t) {
      e.exports = {
        container: "container_cc6cdc",
        user: "user_cc6cdc",
        username: "username_cc6cdc",
        blockedNotice: "blockedNotice_cc6cdc",
        blockedButton: "blockedButton_cc6cdc",
        icon: "icon_cc6cdc",
        userInfo: "userInfo_cc6cdc",
      };
    },
  },
]);
//# sourceMappingURL=28eaf6bebdeb9fc909e7.js.map
