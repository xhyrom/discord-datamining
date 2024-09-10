"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["25417"],
  {
    971130: function (e, n, t) {
      let a;
      t.d(n, {
        Sz: function () {
          return D;
        },
        Vg: function () {
          return V;
        },
        an: function () {
          return M;
        },
        bm: function () {
          return r;
        },
        rh: function () {
          return b;
        },
      }),
        t(653041),
        t(47120);
      var r,
        o,
        i = t(317381),
        _ = t(592125),
        I = t(271383),
        c = t(306680),
        s = t(699516),
        d = t(594174),
        u = t(55589),
        f = t(483360),
        l = t(981631),
        S = t(245335),
        E = t(689938);
      (a = t(603617)),
        ((o = r || (r = {})).GROUP_DM = "GROUP_DM"),
        (o.DM = "DM"),
        (o.FRIEND = "FRIEND"),
        (o.CHANNEL = "CHANNEL");
      let T = (e, n) => null != e && I.ZP.isMember(e, n),
        N = (e) => {
          let {
            omitUserIds: n,
            suggestedUserIds: t,
            maxRowsWithoutQuery: a,
            omitGuildId: r,
            shownUserIds: o,
            rows: i,
            counts: _,
          } = e;
          if (null != t)
            for (let e of t) {
              if (null != a && a > 0 && i.length >= a) break;
              if (n.has(e) || o.has(e)) continue;
              let t = d.default.getUser(e);
              !(null == t || T(r, t.id)) &&
                (o.add(t.id),
                i.push({ type: "FRIEND", item: t, isSuggested: !0 }),
                _.numFriends++);
            }
        },
        O = (e) => {
          let {
            suggestedChannelIds: n,
            maxRowsWithoutQuery: t,
            rows: a,
            counts: r,
          } = e;
          if (null != n)
            for (let e of n) {
              if (null != t && t > 0 && a.length >= t) break;
              let n = _.Z.getChannel(e);
              null != n &&
                (a.push({ type: "CHANNEL", item: n, isSuggested: !0 }),
                r.numChannels++);
            }
        },
        m = (e) => {
          let {
              omitUserIds: n,
              maxRowsWithoutQuery: t,
              omitGuildId: a,
              shownUserIds: r,
              rows: o,
              counts: i,
              includeGroupDms: I,
              limit: s,
            } = e,
            f = 0;
          for (let e of u.Z.getPrivateChannelIds()) {
            if ((null != t && t > 0 && o.length >= t) || (null != s && f >= s))
              break;
            let u = _.Z.getChannel(e);
            if (null == u || !u.isPrivate()) continue;
            if (I && u.type === l.d4z.GROUP_DM) {
              o.push({ type: "GROUP_DM", item: u, isSuggested: !1 }),
                i.numGroupDms++,
                f++;
              continue;
            }
            if (null == c.ZP.lastMessageId(u.id)) continue;
            let S = u.getRecipientId();
            if (null != S && !n.has(S) && !r.has(S)) {
              let e = d.default.getUser(S);
              if (null == e || e.bot || T(a, e.id)) continue;
              r.add(e.id),
                o.push({ type: "DM", item: e, isSuggested: !1 }),
                i.numDms++,
                f++;
            }
          }
        },
        p = (e) => {
          let {
            omitUserIds: n,
            maxRowsWithoutQuery: t,
            omitGuildId: a,
            shownUserIds: r,
            rows: o,
            counts: i,
          } = e;
          for (let e of s.Z.getFriendIDs()) {
            if (null != t && t > 0 && o.length >= t) break;
            if (n.has(e) || r.has(e)) continue;
            let _ = d.default.getUser(e);
            !(null == _ || T(a, _.id)) &&
              (o.push({ type: "FRIEND", item: _, isSuggested: !1 }),
              i.numFriends++);
          }
        },
        g = (e) => {
          let { query: n, rows: t, counts: a, inviteTargetType: r } = e;
          r === S.Iq.EMBEDDED_APPLICATION &&
            f.ZP.queryChannels({ query: n, limit: 3, guildId: void 0 }).forEach(
              (e) => {
                let { record: n } = e;
                t.push({ type: "CHANNEL", item: n, isSuggested: !1 }),
                  a.numChannels++;
              },
            );
        },
        U = (e) => {
          let {
            query: n,
            omitUserIds: t,
            shownUserIds: a,
            rows: r,
            counts: o,
          } = e;
          f.ZP.queryDMUsers({ query: n, limit: 50 }).forEach((e) => {
            let { record: n } = e;
            if (t.has(n.id)) return;
            let i = _.Z.getDMFromUserId(n.id);
            if (null != i && null != c.ZP.lastMessageId(i))
              a.add(n.id),
                r.push({ type: "DM", item: n, isSuggested: !1 }),
                o.numDms++;
          });
        },
        P = (e) => {
          let { query: n, rows: t, counts: a } = e;
          f.ZP.queryGroupDMs({ query: n, limit: 50, fuzzy: !1 }).forEach(
            (e) => {
              let { record: n } = e;
              t.push({ type: "GROUP_DM", item: n, isSuggested: !1 }),
                a.numGroupDms++;
            },
          );
        },
        h = (e) => {
          let {
            query: n,
            rows: t,
            counts: a,
            omitUserIds: r,
            shownUserIds: o,
          } = e;
          f.ZP.queryFriends({ query: n, limit: 500, _fuzzy: !1 }).forEach(
            (e) => {
              let { record: n } = e;
              if (!(r.has(n.id) || o.has(n.id)))
                o.add(n.id),
                  t.push({ type: "FRIEND", item: n, isSuggested: !1 }),
                  a.numFriends++;
            },
          );
        };
      function M(e) {
        let {
            query: n,
            inviteTargetType: t,
            omitUserIds: a,
            suggestedUserIds: r,
            suggestedChannelIds: o,
            maxRowsWithoutQuery: i,
            omitGuildId: _,
          } = e,
          I = new Set(),
          c = [],
          s = {
            numFriends: 0,
            numDms: 0,
            numGroupDms: 0,
            numGuildMembers: 0,
            numChannels: 0,
          };
        if ("" === n) {
          let e = {
            omitUserIds: a,
            maxRowsWithoutQuery: i,
            omitGuildId: _,
            shownUserIds: I,
            rows: c,
            counts: s,
          };
          t === S.Iq.EMBEDDED_APPLICATION &&
            (m({ ...e, includeGroupDms: !1, limit: 1 }),
            O({ ...e, suggestedChannelIds: o })),
            N({ ...e, suggestedUserIds: r }),
            m({ ...e, includeGroupDms: !0 }),
            p(e);
        } else {
          let e = { query: n, rows: c, counts: s };
          t === S.Iq.EMBEDDED_APPLICATION && g({ ...e, inviteTargetType: t }),
            U({ ...e, omitUserIds: a, shownUserIds: I }),
            P(e),
            h({ ...e, omitUserIds: a, shownUserIds: I });
        }
        return { rows: c, counts: s };
      }
      function b(e, n) {
        for (let t of u.Z.getPrivateChannelIds()) {
          let a = _.Z.getChannel(t);
          if (null == a || !a.isDM() || null == c.ZP.lastMessageId(a.id))
            continue;
          let r = a.getRecipientId();
          if (null != r && !e.has(r)) {
            let e = d.default.getUser(r);
            if (null == e || e.bot || T(n, e.id)) continue;
            return e;
          }
        }
        return null;
      }
      function D(e) {
        let { channel: n, inviteTargetType: t, applicationId: a } = e;
        if (t === S.Iq.EMBEDDED_APPLICATION) {
          if (null != n) {
            for (let e of i.ZP.getEmbeddedActivitiesForChannel(n.id))
              if (e.applicationId === a) return new Set(e.userIds);
          }
        }
        return new Set();
      }
      let R = {
          MINUTES: "minutes",
          HOURS: "hours",
          DAYS: "days",
          NEVER: "never",
        },
        v = {
          [a.INVITE_OPTIONS_30_MINUTES.value]: { value: 30, type: R.MINUTES },
          [a.INVITE_OPTIONS_1_HOUR.value]: { value: 1, type: R.HOURS },
          [a.INVITE_OPTIONS_6_HOURS.value]: { value: 6, type: R.HOURS },
          [a.INVITE_OPTIONS_12_HOURS.value]: { value: 12, type: R.HOURS },
          [a.INVITE_OPTIONS_1_DAY.value]: { value: 1, type: R.DAYS },
          [a.INVITE_OPTIONS_7_DAYS.value]: { value: 7, type: R.DAYS },
          [a.INVITE_OPTIONS_FOREVER.value]: { value: 0, type: R.NEVER },
        };
      function V(e, n) {
        let t = parseInt(n, 10),
          a = 0 === t,
          r = v[e].value;
        switch (v[e].type) {
          case R.MINUTES:
            if (a) return E.Z.Messages.INVITE_EXPIRES_MINUTES;
            return E.Z.Messages.INVITE_EXPIRES_MINUTES_OR_USES.format({
              numUses: t,
            });
          case R.HOURS:
            if (a)
              return E.Z.Messages.INVITE_EXPIRES_HOURS.format({ numHours: r });
            return E.Z.Messages.INVITE_EXPIRES_HOURS_OR_USES.format({
              numHours: r,
              numUses: t,
            });
          case R.DAYS:
            if (a)
              return E.Z.Messages.INVITE_EXPIRES_DAYS_PLURAL.format({
                numDays: r,
              });
            return E.Z.Messages.INVITE_EXPIRES_DAYS_OR_USES_PLURAL.format({
              numDays: r,
              numUses: t,
            });
          case R.NEVER:
            if (a) return E.Z.Messages.INVITE_EXPIRES_NEVER;
            return E.Z.Messages.INVITE_EXPIRES_USES.format({ numUses: t });
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
            return I;
          },
          INVITE_OPTIONS_12_HOURS: function () {
            return E;
          },
          INVITE_OPTIONS_1_DAY: function () {
            return T;
          },
          INVITE_OPTIONS_1_HOUR: function () {
            return l;
          },
          INVITE_OPTIONS_25_TIMES: function () {
            return c;
          },
          INVITE_OPTIONS_30_MINUTES: function () {
            return f;
          },
          INVITE_OPTIONS_50_TIMES: function () {
            return s;
          },
          INVITE_OPTIONS_5_TIMES: function () {
            return _;
          },
          INVITE_OPTIONS_6_HOURS: function () {
            return S;
          },
          INVITE_OPTIONS_7_DAYS: function () {
            return N;
          },
          INVITE_OPTIONS_FOREVER: function () {
            return O;
          },
          INVITE_OPTIONS_ONCE: function () {
            return i;
          },
          INVITE_OPTIONS_UNLIMITED: function () {
            return o;
          },
          MAX_AGE_OPTIONS: function () {
            return m;
          },
          MAX_USES_OPTIONS: function () {
            return u;
          },
        });
      var a = t(689938);
      function r(e, n) {
        return {
          value: e,
          get label() {
            return n();
          },
        };
      }
      let o = r(0, () => a.Z.Messages.MAX_USES.format({ maxUses: 0 })),
        i = r(1, () => a.Z.Messages.MAX_USES.format({ maxUses: 1 })),
        _ = r(5, () => a.Z.Messages.MAX_USES.format({ maxUses: 5 })),
        I = r(10, () => a.Z.Messages.MAX_USES.format({ maxUses: 10 })),
        c = r(25, () => a.Z.Messages.MAX_USES.format({ maxUses: 25 })),
        s = r(50, () => a.Z.Messages.MAX_USES.format({ maxUses: 50 })),
        d = r(100, () => a.Z.Messages.MAX_USES.format({ maxUses: 100 })),
        u = [o, i, _, I, c, s, d],
        f = r(1800, () =>
          a.Z.Messages.DURATION_MINUTES.format({ minutes: 30 }),
        ),
        l = r(3600, () => a.Z.Messages.DURATION_HOURS.format({ hours: 1 })),
        S = r(21600, () => a.Z.Messages.DURATION_HOURS.format({ hours: 6 })),
        E = r(43200, () => a.Z.Messages.DURATION_HOURS.format({ hours: 12 })),
        T = r(86400, () => a.Z.Messages.DURATION_DAYS.format({ days: 1 })),
        N = r(604800, () => a.Z.Messages.DURATION_DAYS.format({ days: 7 })),
        O = r(0, () => a.Z.Messages.MAX_AGE_NEVER),
        m = [f, l, S, E, T, N, O];
    },
    985992: function (e, n, t) {
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
//# sourceMappingURL=93861775d9a3edee06b9.js.map
