"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["91899"],
  {
    296507: function (e) {
      e.exports = "/assets/8447e4e321cc04bd6a4c.svg";
    },
    866402: function (e) {
      e.exports = "/assets/9d5696b9d1f0b77fd074.svg";
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
        d = a(430824),
        l = a(496675),
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
            : [r.ZP, o.Z, d.Z, i.Z];
        if ((0, u.Z2)(e)) return !1;
        let { guild_id: f, channel_id: h } = e,
          b =
            e.entity_type === _.WX.EXTERNAL
              ? n.getDefaultChannel(e.guild_id)
              : a.getChannel(h),
          m = t.getGuild(f),
          v = s.getStageInstanceByChannel(h);
        return !!(0, c.b)(l.Z, m, b, v) && null != b && p(e, [a]);
      }
      function b(e) {
        return (0, t.e7)(
          [r.ZP, o.Z, d.Z, i.Z],
          () => h(e, [r.ZP, o.Z, d.Z, i.Z]),
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
          return R;
        },
      });
      var t,
        c,
        i = a(735250),
        o = a(470079),
        r = a(120356),
        d = a.n(r),
        l = a(442837),
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
        I = a(95291),
        x = a(742593),
        C = a(810561),
        N = a(187443),
        k = a(131154),
        T = a(765305),
        w = a(981631),
        E = a(689938),
        B = a(947017);
      function S(e) {
        let { channel: n, onClick: a } = e,
          { canManageAllEvents: t } = (0, p.XJ)(n),
          c = (0, l.e7)(
            [h.Z],
            () => !n.isGuildVocal() || h.Z.can(w.Plq.CONNECT, n),
            [n],
          ),
          r = o.useMemo(() => (0, u.Z)(n), [n]),
          f = (0, _.KS)(n);
        return (0, i.jsx)(s.Tooltip, {
          text: E.Z.Messages.GUILD_EVENT_CANNOT_CONNECT,
          shouldShow: !c && null != a,
          children: (e) =>
            (0, i.jsxs)(s.Clickable, {
              ...e,
              className: d()(B.inline, B.channelContainer, {
                [B.channelContainerEnabled]: c && null != a,
                [B.channelContainerDisabled]: !c && null != a,
              }),
              onClick: a,
              children: [
                (0, i.jsx)(s.Tooltip, {
                  text: E.Z.Messages.GUILD_EVENT_PRIVATE_CHANNEL_TOOLTIP,
                  shouldShow: t && r && c && null != a,
                  children: (e) =>
                    null != f
                      ? (0, i.jsx)(f, {
                          ...e,
                          color: "currentColor",
                          size: "custom",
                          width: 20,
                          height: 20,
                          className: B.icon,
                        })
                      : null,
                }),
                (0, i.jsx)(s.Text, {
                  variant: "text-sm/normal",
                  color: "none",
                  className: B.channelLocation,
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
          isHub: l,
        } = e;
        if (l)
          return null == n
            ? (0, i.jsx)("div", {})
            : (0, i.jsxs)("div", {
                className: B.inline,
                children: [
                  (0, i.jsx)(f.Z, {
                    className: B.guildIcon,
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
          ? (0, i.jsx)(S, { channel: a, onClick: t })
          : (0, i.jsxs)(s.Clickable, {
              className: B.inline,
              onClick: c,
              children: [
                (0, i.jsx)(s.LocationIcon, {
                  size: "custom",
                  color: "currentColor",
                  height: 20,
                  width: 20,
                  className: d()(B.channelContainer, B.icon),
                }),
                (0, i.jsx)(s.Text, {
                  className: r ? B.externalLocation : B.channelLocation,
                  variant: "text-sm/normal",
                  children: (0, b.m)(o, !0),
                }),
              ],
            });
      }
      function R(e) {
        let {
            className: n,
            guild: a,
            channel: t,
            creator: c,
            name: o,
            entityType: r,
            description: l,
            imageLocation: u = 0,
            imageSource: _,
            isActive: f,
            isUserLurking: p,
            isJoined: h = !1,
            isMember: b = !1,
            isHub: w = !1,
            speakers: E,
            speakerCount: S,
            rsvped: R,
            canInvite: U,
            location: Z,
            truncate: y,
            onContextMenu: L,
            onJoinClick: A,
            onJoinGuildClick: M,
            onGoToGuildClick: P,
            onRsvpClick: D,
            onStartClick: H,
            onInviteClick: G,
            onEndClick: O,
            onClick: F,
            isNew: V,
            guildEvent: z,
            eventPreview: W,
            recurrenceRule: X,
            recurrenceId: q,
          } = e,
          J = (0, m.Q)(t, r),
          K = r === T.WX.EXTERNAL,
          Q = K ? (e) => e.stopPropagation() : void 0,
          Y = [];
        if (null != X && null != event) {
          let e = (0, v.Ho)(X);
          Y = (0, v.PJ)(4, e, new Date(z.scheduled_start_time));
        }
        let $ = Y.length > 0;
        return (0, i.jsxs)(s.ClickableContainer, {
          "aria-label": o,
          onClick: () => (null == F ? void 0 : F(q)),
          onContextMenu: L,
          className: d()(B.card, { [B.joined]: h, [B.lurking]: p }, n),
          children: [
            (0, i.jsxs)("div", {
              className: d()(B.padding, { [B.isRecurring]: $ }),
              children: [
                0 === u && (0, i.jsx)(I.Z, { source: _ }),
                (0, i.jsx)(x.ZP, {
                  creator: c,
                  name: o,
                  description: l,
                  imageSource: 1 === u ? _ : null,
                  truncate: y,
                  guildId: null == a ? void 0 : a.id,
                  isHub: w,
                  isNew: V,
                  guildEvent: z,
                  eventPreview: W,
                  recurrenceId: q,
                }),
                f &&
                  null != a &&
                  null != E &&
                  S > 0 &&
                  (0, i.jsx)(k.Z, {
                    guild: a,
                    speakers: E,
                    speakerCount: S,
                    className: B.spacing,
                  }),
                (0, i.jsx)("hr", { className: B.divider }),
                (0, i.jsxs)("div", {
                  className: d()(B.inline, B.footer),
                  children: [
                    (0, i.jsx)(j, {
                      guild: a,
                      channel: t,
                      onJoinClick: A,
                      handleLocationClick: Q,
                      location: Z,
                      isExternal: K,
                      isHub: w,
                    }),
                    w
                      ? (0, i.jsx)(N.Z, {
                          isActive: f,
                          isUserLurking: p,
                          isMember: b,
                          rsvped: R,
                          onRsvpClick: D,
                          onJoinGuildClick: M,
                          onGoToGuildClick: P,
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
                          rsvped: R,
                          canInvite: U,
                          isChannelPublic: J,
                          onContextMenu: L,
                          onJoinClick: A,
                          onRsvpClick: D,
                          onStartClick: H,
                          onInviteClick: G,
                          onEndClick: O,
                        }),
                  ],
                }),
                $ && (0, i.jsx)("hr", { className: B.divider }),
              ],
            }),
            $ &&
              (0, i.jsx)(C.Z, {
                guildId: null == a ? void 0 : a.id,
                recurrenceRule: X,
                guildEventId: z.id,
                onRecurrenceClick: F,
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
          return l;
        },
      });
      var t = a(735250);
      a(470079);
      var c = a(120356),
        i = a.n(c),
        o = a(481060),
        r = a(689938),
        d = a(571032);
      function l(e) {
        let { guild: n, speakers: a, speakerCount: c, className: l } = e,
          s = a.slice(0, 5),
          u = s.map((e) => {
            var a, c;
            return (0, t.jsxs)(
              "div",
              {
                className: d.speakerContainer,
                children: [
                  (0, t.jsx)(o.Avatar, {
                    src:
                      null == e
                        ? void 0
                        : null === (a = e.user) || void 0 === a
                          ? void 0
                          : a.getAvatarURL(n.id, 20),
                    size: o.AvatarSizes.SIZE_20,
                    className: d.avatar,
                    "aria-label": "".concat(
                      null == e ? void 0 : e.userNick,
                      "-avatar",
                    ),
                  }),
                  (0, t.jsx)("div", {
                    className: d.textInGridContainer,
                    children: (0, t.jsx)(o.Text, {
                      color: "header-secondary",
                      variant: "text-sm/normal",
                      className: d.textInGrid,
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
          className: i()(d.grid, l),
          children: [
            u,
            _ > 0 &&
              (0, t.jsxs)("div", {
                className: d.speakerContainer,
                children: [
                  (0, t.jsx)("div", {
                    className: d.iconMicrophone,
                    children: (0, t.jsx)(o.MicrophoneIcon, {
                      size: "custom",
                      color: "currentColor",
                      height: 12,
                    }),
                  }),
                  (0, t.jsx)(o.Text, {
                    color: "header-secondary",
                    variant: "text-sm/normal",
                    className: d.textInGrid,
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
    939863: function (e, n, a) {
      a.d(n, {
        Z: function () {
          return s;
        },
      });
      var t = a(735250);
      a(470079);
      var c = a(120356),
        i = a.n(c),
        o = a(689938),
        r = a(843117),
        d = a(296507),
        l = a(866402);
      function s(e) {
        let { className: n, children: a } = e;
        return (0, t.jsxs)("div", {
          className: i()(r.container, n),
          children: [
            (0, t.jsx)("img", {
              alt: o.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
              src: l,
              className: i()(r.sparkleIcon, r.sparkleBottom),
            }),
            a,
            (0, t.jsx)("img", {
              alt: o.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
              src: d,
              className: i()(r.sparkleIcon, r.sparkleTop),
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
    737602: function (e, n, a) {
      e.exports = {
        descriptionText: "descriptionText_f4ba67",
        truncate: "truncate_f4ba67",
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
    731006: function (e, n, a) {
      e.exports = { container: "container_f87f77" };
    },
    247912: function (e, n, a) {
      e.exports = {
        container: "container_a4ec62",
        eventName: "eventName_a4ec62",
        description: "description_a4ec62",
        descriptionWithThumbnail: "descriptionWithThumbnail_a4ec62",
        spacer: "spacer_a4ec62",
        rsvpCount: "rsvpCount_a4ec62",
        rsvpIcon: "rsvpIcon_a4ec62",
        creator: "creator_a4ec62",
        eventInfoStatusContainer: "eventInfoStatusContainer_a4ec62",
        statusContainer: "statusContainer_a4ec62",
        withThumbnail: "withThumbnail_a4ec62",
        thumbnailContainer: "thumbnailContainer_a4ec62",
        thumbnail: "thumbnail_a4ec62",
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
    205569: function (e, n, a) {
      e.exports = {
        eventStatusContainer: "eventStatusContainer_d6a475",
        isRecurring: "isRecurring_d6a475",
        eventStatusLabel: "eventStatusLabel_d6a475",
        liveEventEndTime: "liveEventEndTime_d6a475",
        newBadge: "newBadge_d6a475",
        newBadgeText: "newBadgeText_d6a475",
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
    843117: function (e, n, a) {
      e.exports = {
        container: "container_c5e69b",
        sparkleIcon: "sparkleIcon_c5e69b",
        sparkleTop: "sparkleTop_c5e69b",
        sparkleBottom: "sparkleBottom_c5e69b",
      };
    },
  },
]);
//# sourceMappingURL=7a81fdc627ed50390772.js.map
