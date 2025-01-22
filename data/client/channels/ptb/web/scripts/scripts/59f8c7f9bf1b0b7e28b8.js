"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["54444"],
  {
    484614: function (e, t, n) {
      var r,
        a = n(200651),
        o = n(192379),
        i = n(846519),
        l = n(481060),
        c = n(572004),
        u = n(388032);
      function d(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      class I extends (r = o.PureComponent) {
        componentWillUnmount() {
          this._timeout.stop();
        }
        render() {
          let { text: e } = this.props,
            { mode: t } = this.state,
            n =
              t === l.CopyInput.Modes.SUCCESS
                ? u.intl.string(u.t["t5VZ8/"])
                : e;
          return (0, a.jsx)(l.CopyInput, {
            ...this.props,
            onCopy: this.handleCopy,
            mode: t,
            text: n,
            supportsCopy: c.wS,
          });
        }
        handleCopy(e) {
          let { onCopy: t, delay: n = 1e3 } = this.props,
            r = (0, c.JG)(e);
          this.setState({
            mode: r ? l.CopyInput.Modes.SUCCESS : l.CopyInput.Modes.ERROR,
          }),
            this._timeout.start(n, () =>
              this.setState({ mode: l.CopyInput.Modes.DEFAULT }),
            ),
            null == t || t(e);
        }
        getVerticalButtonColor(e) {
          switch (e) {
            case l.CopyInput.Modes.SUCCESS:
              return l.Button.Colors.GREEN;
            case l.CopyInput.Modes.ERROR:
              return l.Button.Colors.RED;
            default:
              return l.Button.Colors.BRAND;
          }
        }
        constructor(e) {
          super(e),
            d(this, "_timeout", void 0),
            (this.state = { mode: l.CopyInput.Modes.DEFAULT }),
            (this._timeout = new i.V7()),
            (this.handleCopy = this.handleCopy.bind(this));
        }
      }
      d(I, "defaultProps", { delay: 1e3 }), (t.Z = I);
    },
    971130: function (e, t, n) {
      let r;
      n.d(t, {
        Sz: function () {
          return D;
        },
        Vg: function () {
          return R;
        },
        an: function () {
          return U;
        },
        bm: function () {
          return a;
        },
        rh: function () {
          return C;
        },
      }),
        n(653041),
        n(47120);
      var a,
        o,
        i = n(317381),
        l = n(592125),
        c = n(271383),
        u = n(306680),
        d = n(699516),
        I = n(594174),
        _ = n(55589),
        s = n(483360),
        f = n(981631),
        T = n(245335),
        p = n(388032);
      (r = n(603617)),
        ((o = a || (a = {})).GROUP_DM = "GROUP_DM"),
        (o.DM = "DM"),
        (o.FRIEND = "FRIEND"),
        (o.CHANNEL = "CHANNEL");
      let S = (e, t) => null != e && c.ZP.isMember(e, t),
        m = (e) => {
          let {
            omitUserIds: t,
            suggestedUserIds: n,
            maxRowsWithoutQuery: r,
            omitGuildId: a,
            shownUserIds: o,
            rows: i,
            counts: l,
          } = e;
          if (null != n)
            for (let e of n) {
              if (null != r && r > 0 && i.length >= r) break;
              if (t.has(e) || o.has(e)) continue;
              let n = I.default.getUser(e);
              !(null == n || S(a, n.id)) &&
                (o.add(n.id),
                i.push({ type: "FRIEND", item: n, isSuggested: !0 }),
                l.numFriends++);
            }
        },
        N = (e) => {
          let {
            suggestedChannelIds: t,
            maxRowsWithoutQuery: n,
            rows: r,
            counts: a,
          } = e;
          if (null != t)
            for (let e of t) {
              if (null != n && n > 0 && r.length >= n) break;
              let t = l.Z.getChannel(e);
              null != t &&
                (r.push({ type: "CHANNEL", item: t, isSuggested: !0 }),
                a.numChannels++);
            }
        },
        O = (e) => {
          let {
              omitUserIds: t,
              maxRowsWithoutQuery: n,
              omitGuildId: r,
              shownUserIds: a,
              rows: o,
              counts: i,
              includeGroupDms: c,
              limit: d,
            } = e,
            s = 0;
          for (let e of _.Z.getPrivateChannelIds()) {
            if ((null != n && n > 0 && o.length >= n) || (null != d && s >= d))
              break;
            let _ = l.Z.getChannel(e);
            if (null == _ || !_.isPrivate()) continue;
            if (c && _.type === f.d4z.GROUP_DM) {
              o.push({ type: "GROUP_DM", item: _, isSuggested: !1 }),
                i.numGroupDms++,
                s++;
              continue;
            }
            if (null == u.ZP.lastMessageId(_.id)) continue;
            let T = _.getRecipientId();
            if (null != T && !t.has(T) && !a.has(T)) {
              let e = I.default.getUser(T);
              if (null == e || e.bot || S(r, e.id)) continue;
              a.add(e.id),
                o.push({ type: "DM", item: e, isSuggested: !1 }),
                i.numDms++,
                s++;
            }
          }
        },
        E = (e) => {
          let {
            omitUserIds: t,
            maxRowsWithoutQuery: n,
            omitGuildId: r,
            shownUserIds: a,
            rows: o,
            counts: i,
          } = e;
          for (let e of d.Z.getFriendIDs()) {
            if (null != n && n > 0 && o.length >= n) break;
            if (t.has(e) || a.has(e)) continue;
            let l = I.default.getUser(e);
            !(null == l || S(r, l.id)) &&
              (o.push({ type: "FRIEND", item: l, isSuggested: !1 }),
              i.numFriends++);
          }
        },
        g = (e) => {
          let { query: t, rows: n, counts: r, inviteTargetType: a } = e;
          a === T.Iq.EMBEDDED_APPLICATION &&
            s.ZP.queryChannels({ query: t, limit: 3, guildId: void 0 }).forEach(
              (e) => {
                let { record: t } = e;
                n.push({ type: "CHANNEL", item: t, isSuggested: !1 }),
                  r.numChannels++;
              },
            );
        },
        P = (e) => {
          let {
            query: t,
            omitUserIds: n,
            shownUserIds: r,
            rows: a,
            counts: o,
          } = e;
          s.ZP.queryDMUsers({ query: t, limit: 50 }).forEach((e) => {
            let { record: t } = e;
            if (n.has(t.id)) return;
            let i = l.Z.getDMFromUserId(t.id);
            if (null != i && null != u.ZP.lastMessageId(i))
              r.add(t.id),
                a.push({ type: "DM", item: t, isSuggested: !1 }),
                o.numDms++;
          });
        },
        h = (e) => {
          let { query: t, rows: n, counts: r } = e;
          s.ZP.queryGroupDMs({ query: t, limit: 50, fuzzy: !1 }).forEach(
            (e) => {
              let { record: t } = e;
              n.push({ type: "GROUP_DM", item: t, isSuggested: !1 }),
                r.numGroupDms++;
            },
          );
        },
        b = (e) => {
          let {
            query: t,
            rows: n,
            counts: r,
            omitUserIds: a,
            shownUserIds: o,
          } = e;
          s.ZP.queryFriends({ query: t, limit: 500, _fuzzy: !1 }).forEach(
            (e) => {
              let { record: t } = e;
              if (!(a.has(t.id) || o.has(t.id)))
                o.add(t.id),
                  n.push({ type: "FRIEND", item: t, isSuggested: !1 }),
                  r.numFriends++;
            },
          );
        };
      function U(e) {
        let {
            query: t,
            inviteTargetType: n,
            omitUserIds: r,
            suggestedUserIds: a,
            suggestedChannelIds: o,
            maxRowsWithoutQuery: i,
            omitGuildId: l,
          } = e,
          c = new Set(),
          u = [],
          d = {
            numFriends: 0,
            numDms: 0,
            numGroupDms: 0,
            numGuildMembers: 0,
            numChannels: 0,
          };
        if ("" === t) {
          let e = {
            omitUserIds: r,
            maxRowsWithoutQuery: i,
            omitGuildId: l,
            shownUserIds: c,
            rows: u,
            counts: d,
          };
          n === T.Iq.EMBEDDED_APPLICATION &&
            (O({ ...e, includeGroupDms: !1, limit: 1 }),
            N({ ...e, suggestedChannelIds: o })),
            m({ ...e, suggestedUserIds: a }),
            O({ ...e, includeGroupDms: !0 }),
            E(e);
        } else {
          let e = { query: t, rows: u, counts: d };
          n === T.Iq.EMBEDDED_APPLICATION && g({ ...e, inviteTargetType: n }),
            P({ ...e, omitUserIds: r, shownUserIds: c }),
            h(e),
            b({ ...e, omitUserIds: r, shownUserIds: c });
        }
        return { rows: u, counts: d };
      }
      function C(e, t) {
        for (let n of _.Z.getPrivateChannelIds()) {
          let r = l.Z.getChannel(n);
          if (null == r || !r.isDM() || null == u.ZP.lastMessageId(r.id))
            continue;
          let a = r.getRecipientId();
          if (null != a && !e.has(a)) {
            let e = I.default.getUser(a);
            if (null == e || e.bot || S(t, e.id)) continue;
            return e;
          }
        }
        return null;
      }
      function D(e) {
        let { channel: t, inviteTargetType: n, applicationId: r } = e;
        if (n === T.Iq.EMBEDDED_APPLICATION) {
          if (null != t) {
            for (let e of i.ZP.getEmbeddedActivitiesForChannel(t.id))
              if (e.applicationId === r) return new Set(e.userIds);
          }
        }
        return new Set();
      }
      let v = {
          MINUTES: "minutes",
          HOURS: "hours",
          DAYS: "days",
          NEVER: "never",
        },
        M = {
          [r.INVITE_OPTIONS_30_MINUTES.value]: { value: 30, type: v.MINUTES },
          [r.INVITE_OPTIONS_1_HOUR.value]: { value: 1, type: v.HOURS },
          [r.INVITE_OPTIONS_6_HOURS.value]: { value: 6, type: v.HOURS },
          [r.INVITE_OPTIONS_12_HOURS.value]: { value: 12, type: v.HOURS },
          [r.INVITE_OPTIONS_1_DAY.value]: { value: 1, type: v.DAYS },
          [r.INVITE_OPTIONS_7_DAYS.value]: { value: 7, type: v.DAYS },
          [r.INVITE_OPTIONS_FOREVER.value]: { value: 0, type: v.NEVER },
        };
      function R(e, t) {
        let n = parseInt(t, 10),
          r = 0 === n,
          a = M[e].value;
        switch (M[e].type) {
          case v.MINUTES:
            if (r) return p.intl.string(p.t["/WbTXF"]);
            return p.intl.formatToPlainString(p.t.eDRWJC, { numUses: n });
          case v.HOURS:
            if (r)
              return p.intl.formatToPlainString(p.t.ZVdJMz, { numHours: a });
            return p.intl.formatToPlainString(p.t.NgZgAA, {
              numHours: a,
              numUses: n,
            });
          case v.DAYS:
            if (r)
              return p.intl.formatToPlainString(p.t.T96qsr, { numDays: a });
            return p.intl.formatToPlainString(p.t.TfuB9P, {
              numDays: a,
              numUses: n,
            });
          case v.NEVER:
            if (r) return p.intl.string(p.t.QrHBnJ);
            return p.intl.formatToPlainString(p.t.yJnTxM, { numUses: n });
          default:
            return "";
        }
      }
      t.ZP = {
        getMaxAgeOptions: r.MAX_AGE_OPTIONS,
        getMaxUsesOptions: r.MAX_USES_OPTIONS,
        INVITE_OPTIONS_FOREVER: r.INVITE_OPTIONS_FOREVER,
        INVITE_OPTIONS_1_DAY: r.INVITE_OPTIONS_1_DAY,
        INVITE_OPTIONS_7_DAYS: r.INVITE_OPTIONS_7_DAYS,
        INVITE_OPTIONS_12_HOURS: r.INVITE_OPTIONS_12_HOURS,
        INVITE_OPTIONS_6_HOURS: r.INVITE_OPTIONS_6_HOURS,
        INVITE_OPTIONS_1_HOUR: r.INVITE_OPTIONS_1_HOUR,
        INVITE_OPTIONS_30_MINUTES: r.INVITE_OPTIONS_30_MINUTES,
        INVITE_OPTIONS_UNLIMITED: r.INVITE_OPTIONS_UNLIMITED,
        INVITE_OPTIONS_ONCE: r.INVITE_OPTIONS_ONCE,
        INVITE_OPTIONS_5_TIMES: r.INVITE_OPTIONS_5_TIMES,
        INVITE_OPTIONS_10_TIMES: r.INVITE_OPTIONS_10_TIMES,
        INVITE_OPTIONS_25_TIMES: r.INVITE_OPTIONS_25_TIMES,
        INVITE_OPTIONS_50_TIMES: r.INVITE_OPTIONS_50_TIMES,
        INVITE_OPTIONS_100_TIMES: r.INVITE_OPTIONS_100_TIMES,
      };
    },
    603617: function (e, t, n) {
      n.r(t),
        n.d(t, {
          INVITE_OPTIONS_100_TIMES: function () {
            return I;
          },
          INVITE_OPTIONS_10_TIMES: function () {
            return c;
          },
          INVITE_OPTIONS_12_HOURS: function () {
            return p;
          },
          INVITE_OPTIONS_1_DAY: function () {
            return S;
          },
          INVITE_OPTIONS_1_HOUR: function () {
            return f;
          },
          INVITE_OPTIONS_25_TIMES: function () {
            return u;
          },
          INVITE_OPTIONS_30_MINUTES: function () {
            return s;
          },
          INVITE_OPTIONS_50_TIMES: function () {
            return d;
          },
          INVITE_OPTIONS_5_TIMES: function () {
            return l;
          },
          INVITE_OPTIONS_6_HOURS: function () {
            return T;
          },
          INVITE_OPTIONS_7_DAYS: function () {
            return m;
          },
          INVITE_OPTIONS_FOREVER: function () {
            return N;
          },
          INVITE_OPTIONS_ONCE: function () {
            return i;
          },
          INVITE_OPTIONS_UNLIMITED: function () {
            return o;
          },
          MAX_AGE_OPTIONS: function () {
            return O;
          },
          MAX_USES_OPTIONS: function () {
            return _;
          },
        });
      var r = n(388032);
      function a(e, t) {
        return {
          value: e,
          get label() {
            return t();
          },
        };
      }
      let o = a(0, () =>
          r.intl.formatToPlainString(r.t["r/IcuL"], { maxUses: 0 }),
        ),
        i = a(1, () =>
          r.intl.formatToPlainString(r.t["r/IcuL"], { maxUses: 1 }),
        ),
        l = a(5, () =>
          r.intl.formatToPlainString(r.t["r/IcuL"], { maxUses: 5 }),
        ),
        c = a(10, () =>
          r.intl.formatToPlainString(r.t["r/IcuL"], { maxUses: 10 }),
        ),
        u = a(25, () =>
          r.intl.formatToPlainString(r.t["r/IcuL"], { maxUses: 25 }),
        ),
        d = a(50, () =>
          r.intl.formatToPlainString(r.t["r/IcuL"], { maxUses: 50 }),
        ),
        I = a(100, () =>
          r.intl.formatToPlainString(r.t["r/IcuL"], { maxUses: 100 }),
        ),
        _ = [o, i, l, c, u, d, I],
        s = a(1800, () =>
          r.intl.formatToPlainString(r.t.iXLF9f, { minutes: 30 }),
        ),
        f = a(3600, () => r.intl.formatToPlainString(r.t.xCjYxM, { hours: 1 })),
        T = a(21600, () =>
          r.intl.formatToPlainString(r.t.xCjYxM, { hours: 6 }),
        ),
        p = a(43200, () =>
          r.intl.formatToPlainString(r.t.xCjYxM, { hours: 12 }),
        ),
        S = a(86400, () => r.intl.formatToPlainString(r.t.k2UNz8, { days: 1 })),
        m = a(604800, () =>
          r.intl.formatToPlainString(r.t.k2UNz8, { days: 7 }),
        ),
        N = a(0, () => r.intl.string(r.t.PqEzn5)),
        O = [s, f, T, p, S, m, N];
    },
    913943: function (e, t, n) {
      e.exports = {
        container: "container_eccd5f",
        stepContainer: "stepContainer_eccd5f",
        progressBar: "progressBar_eccd5f",
        selectedProgressBar: "selectedProgressBar_eccd5f",
      };
    },
    195197: function (e, t, n) {
      e.exports = { title: "title_a33974" };
    },
    297229: function (e, t, n) {
      e.exports = {
        doubleInput: "doubleInput_c8eacd",
        link: "link_c8eacd",
        addIcon: "addIcon_c8eacd",
        removeIcon: "removeIcon_c8eacd",
      };
    },
    378816: function (e, t, n) {
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
    859312: function (e, t, n) {
      e.exports = {
        inline: "inline_a5724d",
        footer: "footer_a5724d",
        content: "content_a5724d",
        button: "button_a5724d",
      };
    },
    601335: function (e, t, n) {
      e.exports = {
        container: "container_c07d51",
        header: "header_c07d51",
        text: "text_c07d51",
        options: "options_c07d51",
        channelOptionIcon: "channelOptionIcon_c07d51",
        channelPrivate: "channelPrivate_c07d51",
      };
    },
    959320: function (e, t, n) {
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
    115672: function (e, t, n) {
      e.exports = { header: "header_e74886", text: "text_e74886" };
    },
    880083: function (e, t, n) {
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
    142863: function (e, t, n) {
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
    351079: function (e, t, n) {
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
    640041: function (e, t, n) {
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
    755527: function (e, t, n) {
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
        noPadding: "noPadding_cedfaf",
        content: "content_cedfaf",
        subText: "subText_cedfaf",
        formText: "formText_cedfaf",
        toggle: "toggle_cedfaf",
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
        divider: "divider_cedfaf",
      };
    },
    834110: function (e, t, n) {
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
//# sourceMappingURL=59f8c7f9bf1b0b7e28b8.js.map
