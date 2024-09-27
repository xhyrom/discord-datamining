"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["66389"],
  {
    518756: function (e, n, a) {
      a.d(n, {
        Z: function () {
          return d;
        },
      }),
        a(47120);
      var t = a(442837),
        c = a(357156),
        i = a(984933),
        o = a(430824),
        r = a(496675),
        l = a(981631);
      function d(e, n) {
        return (0, t.e7)(
          [o.Z, i.ZP, r.Z],
          () => {
            let a = o.Z.getGuild(e);
            if (
              r.Z.can(l.Plq.ADMINISTRATOR, a) ||
              r.Z.can(l.Plq.CREATE_EVENTS, a)
            )
              return !0;
            for (let { channel: a } of i.ZP.getChannels(e)[i.Zb])
              if (null == n || a.type === n) {
                let [e] = (0, c.Ob)(a);
                if (r.Z.can(e, a)) return !0;
              }
            return !1;
          },
          [e, n],
        );
      }
    },
    951539: function (e, n, a) {
      a.d(n, {
        ZP: function () {
          return b;
        },
        so: function () {
          return h;
        },
        wg: function () {
          return p;
        },
      }),
        a(47120);
      var t = a(442837),
        c = a(159300),
        i = a(427679),
        o = a(592125),
        r = a(984933),
        l = a(430824),
        d = a(496675),
        s = a(700785),
        u = a(924301),
        _ = a(765305),
        f = a(981631);
      function p(e) {
        var n;
        let [a] =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : [o.Z];
        let { entityType: t, channelId: c } =
          "entity_type" in (n = e)
            ? { entityType: n.entity_type, channelId: n.channel_id }
            : n;
        if (t === _.WX.EXTERNAL) return !0;
        let i = a.getChannel(c);
        return null != i && s.Uu(f.Plq.VIEW_CHANNEL, i);
      }
      function h(e) {
        let [n, a, t, s] =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : [r.ZP, o.Z, l.Z, i.Z];
        if ((0, u.Z2)(e)) return !1;
        let { guild_id: f, channel_id: h } = e,
          b =
            e.entity_type === _.WX.EXTERNAL
              ? n.getDefaultChannel(e.guild_id)
              : a.getChannel(h),
          m = t.getGuild(f),
          v = s.getStageInstanceByChannel(h);
        return !!(0, c.b)(d.Z, m, b, v) && null != b && p(e, [a]);
      }
      function b(e) {
        return (0, t.e7)(
          [r.ZP, o.Z, l.Z, i.Z],
          () => h(e, [r.ZP, o.Z, l.Z, i.Z]),
          [e],
        );
      }
    },
    460838: function (e, n, a) {
      a.d(n, {
        Q: function () {
          return c;
        },
        Z: function () {
          return B;
        },
      });
      var t,
        c,
        i = a(735250),
        o = a(470079),
        r = a(120356),
        l = a.n(r),
        d = a(442837),
        s = a(481060),
        u = a(447003),
        _ = a(471445),
        f = a(565138),
        p = a(357156),
        h = a(496675),
        b = a(725436),
        m = a(274311),
        v = a(854698),
        g = a(285784),
        x = a(95291),
        I = a(742593),
        C = a(810561),
        N = a(187443),
        k = a(131154),
        w = a(765305),
        T = a(981631),
        Z = a(689938),
        S = a(947017);
      function E(e) {
        let { channel: n, onClick: a } = e,
          { canManageAllEvents: t } = (0, p.XJ)(n),
          c = (0, d.e7)(
            [h.Z],
            () => !n.isGuildVocal() || h.Z.can(T.Plq.CONNECT, n),
            [n],
          ),
          r = o.useMemo(() => (0, u.Z)(n), [n]),
          f = (0, _.KS)(n);
        return (0, i.jsx)(s.Tooltip, {
          text: Z.Z.Messages.GUILD_EVENT_CANNOT_CONNECT,
          shouldShow: !c && null != a,
          children: (e) =>
            (0, i.jsxs)(s.Clickable, {
              ...e,
              className: l()(S.inline, S.channelContainer, {
                [S.channelContainerEnabled]: c && null != a,
                [S.channelContainerDisabled]: !c && null != a,
              }),
              onClick: a,
              children: [
                (0, i.jsx)(s.Tooltip, {
                  text: Z.Z.Messages.GUILD_EVENT_PRIVATE_CHANNEL_TOOLTIP,
                  shouldShow: t && r && c && null != a,
                  children: (e) =>
                    null != f
                      ? (0, i.jsx)(f, {
                          ...e,
                          color: "currentColor",
                          size: "custom",
                          width: 20,
                          height: 20,
                          className: S.icon,
                        })
                      : null,
                }),
                (0, i.jsx)(s.Text, {
                  variant: "text-sm/normal",
                  color: "none",
                  className: S.channelLocation,
                  children: n.name,
                }),
              ],
            }),
        });
      }
      function j(e) {
        let {
          guild: n,
          channel: a,
          onJoinClick: t,
          handleLocationClick: c,
          location: o,
          isExternal: r,
          isHub: d,
        } = e;
        if (d)
          return null == n
            ? (0, i.jsx)("div", {})
            : (0, i.jsxs)("div", {
                className: S.inline,
                children: [
                  (0, i.jsx)(f.Z, {
                    className: S.guildIcon,
                    size: f.Z.Sizes.MINI,
                    active: !0,
                    guild: n,
                  }),
                  (0, i.jsx)(s.Text, {
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: null == n ? void 0 : n.name,
                  }),
                ],
              });
        return null != a
          ? (0, i.jsx)(E, { channel: a, onClick: t })
          : (0, i.jsxs)(s.Clickable, {
              className: S.inline,
              onClick: c,
              children: [
                (0, i.jsx)(s.LocationIcon, {
                  size: "custom",
                  color: "currentColor",
                  height: 20,
                  width: 20,
                  className: l()(S.channelContainer, S.icon),
                }),
                (0, i.jsx)(s.Text, {
                  className: r ? S.externalLocation : S.channelLocation,
                  variant: "text-sm/normal",
                  children: (0, b.m)(o, !0),
                }),
              ],
            });
      }
      function B(e) {
        let {
            className: n,
            guild: a,
            channel: t,
            creator: c,
            name: o,
            entityType: r,
            description: d,
            imageLocation: u = 0,
            imageSource: _,
            isActive: f,
            isUserLurking: p,
            isJoined: h = !1,
            isMember: b = !1,
            isHub: T = !1,
            speakers: Z,
            speakerCount: E,
            rsvped: B,
            canInvite: U,
            location: y,
            truncate: R,
            onContextMenu: P,
            onJoinClick: L,
            onJoinGuildClick: A,
            onGoToGuildClick: M,
            onRsvpClick: D,
            onStartClick: H,
            onInviteClick: G,
            onEndClick: O,
            onClick: z,
            isNew: F,
            guildEvent: V,
            eventPreview: q,
            recurrenceRule: W,
            recurrenceId: X,
          } = e,
          J = (0, m.Q)(t, r),
          K = r === w.WX.EXTERNAL,
          Q = K ? (e) => e.stopPropagation() : void 0,
          Y = [];
        if (null != W && null != event) {
          let e = (0, v.Ho)(W);
          Y = (0, v.PJ)(4, e, new Date(V.scheduled_start_time));
        }
        let $ = Y.length > 0;
        return (0, i.jsxs)(s.ClickableContainer, {
          "aria-label": o,
          onClick: () => (null == z ? void 0 : z(X)),
          onContextMenu: P,
          className: l()(S.card, { [S.joined]: h, [S.lurking]: p }, n),
          children: [
            (0, i.jsxs)("div", {
              className: l()(S.padding, { [S.isRecurring]: $ }),
              children: [
                0 === u && (0, i.jsx)(x.Z, { source: _ }),
                (0, i.jsx)(I.ZP, {
                  creator: c,
                  name: o,
                  description: d,
                  imageSource: 1 === u ? _ : null,
                  truncate: R,
                  guildId: null == a ? void 0 : a.id,
                  isHub: T,
                  isNew: F,
                  guildEvent: V,
                  eventPreview: q,
                  recurrenceId: X,
                }),
                f &&
                  null != a &&
                  null != Z &&
                  E > 0 &&
                  (0, i.jsx)(k.Z, {
                    guild: a,
                    speakers: Z,
                    speakerCount: E,
                    className: S.spacing,
                  }),
                (0, i.jsx)("hr", { className: S.divider }),
                (0, i.jsxs)("div", {
                  className: l()(S.inline, S.footer),
                  children: [
                    (0, i.jsx)(j, {
                      guild: a,
                      channel: t,
                      onJoinClick: L,
                      handleLocationClick: Q,
                      location: y,
                      isExternal: K,
                      isHub: T,
                    }),
                    T
                      ? (0, i.jsx)(N.Z, {
                          isActive: f,
                          isUserLurking: p,
                          isMember: b,
                          rsvped: B,
                          onRsvpClick: D,
                          onJoinGuildClick: A,
                          onGoToGuildClick: M,
                          guildName: null == a ? void 0 : a.name,
                          canInvite: U,
                          isChannelPublic: J,
                          onInviteClick: G,
                        })
                      : (0, i.jsx)(g.ZP, {
                          entityType: r,
                          isJoined: h,
                          isActive: f,
                          isUserLurking: p,
                          rsvped: B,
                          canInvite: U,
                          isChannelPublic: J,
                          onContextMenu: P,
                          onJoinClick: L,
                          onRsvpClick: D,
                          onStartClick: H,
                          onInviteClick: G,
                          onEndClick: O,
                        }),
                  ],
                }),
                $ && (0, i.jsx)("hr", { className: S.divider }),
              ],
            }),
            $ &&
              (0, i.jsx)(C.Z, {
                guildId: null == a ? void 0 : a.id,
                recurrenceRule: W,
                guildEventId: V.id,
                onRecurrenceClick: z,
              }),
          ],
        });
      }
      ((t = c || (c = {}))[(t.BANNER = 0)] = "BANNER"),
        (t[(t.THUMBNAIL = 1)] = "THUMBNAIL");
    },
    131154: function (e, n, a) {
      a.d(n, {
        Z: function () {
          return d;
        },
      });
      var t = a(735250);
      a(470079);
      var c = a(120356),
        i = a.n(c),
        o = a(481060),
        r = a(689938),
        l = a(571032);
      function d(e) {
        let { guild: n, speakers: a, speakerCount: c, className: d } = e,
          s = a.slice(0, 5),
          u = s.map((e) => {
            var a, c;
            return (0, t.jsxs)(
              "div",
              {
                className: l.speakerContainer,
                children: [
                  (0, t.jsx)(o.Avatar, {
                    src:
                      null == e
                        ? void 0
                        : null === (a = e.user) || void 0 === a
                          ? void 0
                          : a.getAvatarURL(n.id, 20),
                    size: o.AvatarSizes.SIZE_20,
                    className: l.avatar,
                    "aria-label": "".concat(
                      null == e ? void 0 : e.userNick,
                      "-avatar",
                    ),
                  }),
                  (0, t.jsx)("div", {
                    className: l.textInGridContainer,
                    children: (0, t.jsx)(o.Text, {
                      color: "header-secondary",
                      variant: "text-sm/normal",
                      className: l.textInGrid,
                      children: null == e ? void 0 : e.userNick,
                    }),
                  }),
                ],
              },
              null == e
                ? void 0
                : null === (c = e.user) || void 0 === c
                  ? void 0
                  : c.id,
            );
          }),
          _ = c - s.length;
        return (0, t.jsxs)("div", {
          className: i()(l.grid, d),
          children: [
            u,
            _ > 0 &&
              (0, t.jsxs)("div", {
                className: l.speakerContainer,
                children: [
                  (0, t.jsx)("div", {
                    className: l.iconMicrophone,
                    children: (0, t.jsx)(o.MicrophoneIcon, {
                      size: "custom",
                      color: "currentColor",
                      height: 12,
                    }),
                  }),
                  (0, t.jsx)(o.Text, {
                    color: "header-secondary",
                    variant: "text-sm/normal",
                    className: l.textInGrid,
                    children:
                      r.Z.Messages.STAGE_DISCOVERY_LIVE_STAGE_TILE_SPEAKER_SUMMARY_OVERFLOW.format(
                        { count: _ },
                      ),
                  }),
                ],
              }),
          ],
        });
      }
    },
    981888: function (e, n, a) {
      a.d(n, {
        Z: function () {
          return i;
        },
      }),
        a(47120);
      var t = a(470079),
        c = a(881052);
      function i(e, n) {
        let [a, i] = t.useState(!1),
          [o, r] = t.useState(null);
        return [
          async () => {
            i(!0), r(null);
            try {
              let n = await e();
              return i(!1), r(null), n;
            } catch (a) {
              let e = new c.Hx(a);
              return null == n || n(e), r(e), i(!1), null;
            }
          },
          { loading: a, error: o },
        ];
      }
    },
    985992: function (e, n, a) {
      e.exports = {
        container: "container_eccd5f",
        stepContainer: "stepContainer_eccd5f",
        progressBar: "progressBar_eccd5f",
        selectedProgressBar: "selectedProgressBar_eccd5f",
      };
    },
    947017: function (e, n, a) {
      e.exports = {
        card: "card_cc2c09",
        lurking: "lurking_cc2c09",
        padding: "padding_cc2c09",
        isRecurring: "isRecurring_cc2c09",
        joined: "joined_cc2c09",
        inline: "inline_cc2c09",
        guildIcon: "guildIcon_cc2c09",
        channelContainer: "channelContainer_cc2c09",
        channelContainerEnabled: "channelContainerEnabled_cc2c09",
        channelContainerDisabled: "channelContainerDisabled_cc2c09",
        icon: "icon_cc2c09",
        spacing: "spacing_cc2c09",
        divider: "divider_cc2c09",
        footer: "footer_cc2c09",
        channelLocation: "channelLocation_cc2c09 label_cc2c09",
        externalLocation: "externalLocation_cc2c09 label_cc2c09",
      };
    },
    269907: function (e, n, a) {
      e.exports = {
        container: "container_e6c1bb",
        iconButton: "iconButton_e6c1bb",
        icon: "icon_e6c1bb",
        innerButton: "innerButton_e6c1bb",
        tooltips: "tooltips_e6c1bb",
      };
    },
    676646: function (e, n, a) {
      e.exports = {
        container: "container_ee9d1a",
        canceled: "canceled_ee9d1a",
        active: "active_ee9d1a",
        timeStatus: "timeStatus_ee9d1a",
        icon: "icon_ee9d1a",
        iconButton: "iconButton_ee9d1a",
        canceledStatus: "canceledStatus_ee9d1a",
        clickable: "clickable_ee9d1a",
      };
    },
    94277: function (e, n, a) {
      e.exports = { title: "title_a33974" };
    },
    128729: function (e, n, a) {
      e.exports = {
        recurrences: "recurrences_cf6131",
        heading: "heading_cf6131",
        scroller: "scroller_cf6131",
        showScroller: "showScroller_cf6131",
        button: "button_cf6131",
      };
    },
    805553: function (e, n, a) {
      e.exports = {
        doubleInput: "doubleInput_c8eacd",
        link: "link_c8eacd",
        addIcon: "addIcon_c8eacd",
        removeIcon: "removeIcon_c8eacd",
      };
    },
    351293: function (e, n, a) {
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
    494545: function (e, n, a) {
      e.exports = {
        container: "container_d9ad97",
        iconButton: "iconButton_d9ad97",
        icon: "icon_d9ad97",
        innerButton: "innerButton_d9ad97",
        button: "button_d9ad97",
      };
    },
    373520: function (e, n, a) {
      e.exports = {
        inline: "inline_a5724d",
        footer: "footer_a5724d",
        content: "content_a5724d",
        button: "button_a5724d",
      };
    },
    356731: function (e, n, a) {
      e.exports = {
        container: "container_c07d51",
        header: "header_c07d51",
        text: "text_c07d51",
        options: "options_c07d51",
        channelOptionIcon: "channelOptionIcon_c07d51",
        channelPrivate: "channelPrivate_c07d51",
      };
    },
    26940: function (e, n, a) {
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
    759704: function (e, n, a) {
      e.exports = { header: "header_e74886", text: "text_e74886" };
    },
    237645: function (e, n, a) {
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
    571032: function (e, n, a) {
      e.exports = {
        grid: "grid_bd205c",
        speakerContainer: "speakerContainer_bd205c",
        avatar: "avatar_bd205c",
        iconMicrophone: "iconMicrophone_bd205c",
        textInGridContainer: "textInGridContainer_bd205c",
        textInGrid: "textInGrid_bd205c",
      };
    },
    510863: function (e, n, a) {
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
    686550: function (e, n, a) {
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
    315822: function (e, n, a) {
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
    871820: function (e, n, a) {
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
    578814: function (e, n, a) {
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
//# sourceMappingURL=5ebf9a277eb7c16ae9e1.js.map
