"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["46765"],
  {
    518756: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return d;
        },
      }),
        t(47120);
      var a = t(442837),
        c = t(357156),
        i = t(984933),
        o = t(430824),
        r = t(496675),
        l = t(981631);
      function d(e, n) {
        return (0, a.e7)(
          [o.Z, i.ZP, r.Z],
          () => {
            let t = o.Z.getGuild(e);
            if (
              r.Z.can(l.Plq.ADMINISTRATOR, t) ||
              r.Z.can(l.Plq.CREATE_EVENTS, t)
            )
              return !0;
            for (let { channel: t } of i.ZP.getChannels(e)[i.Zb])
              if (null == n || t.type === n) {
                let [e] = (0, c.Ob)(t);
                if (r.Z.can(e, t)) return !0;
              }
            return !1;
          },
          [e, n],
        );
      }
    },
    951539: function (e, n, t) {
      t.d(n, {
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
        t(47120);
      var a = t(442837),
        c = t(159300),
        i = t(427679),
        o = t(592125),
        r = t(984933),
        l = t(430824),
        d = t(496675),
        s = t(700785),
        u = t(924301),
        f = t(765305),
        _ = t(981631);
      function p(e) {
        var n;
        let [t] =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : [o.Z];
        let { entityType: a, channelId: c } =
          "entity_type" in (n = e)
            ? { entityType: n.entity_type, channelId: n.channel_id }
            : n;
        if (a === f.WX.EXTERNAL) return !0;
        let i = t.getChannel(c);
        return null != i && s.Uu(_.Plq.VIEW_CHANNEL, i);
      }
      function h(e) {
        let [n, t, a, s] =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : [r.ZP, o.Z, l.Z, i.Z];
        if ((0, u.Z2)(e)) return !1;
        let { guild_id: _, channel_id: h } = e,
          b =
            e.entity_type === f.WX.EXTERNAL
              ? n.getDefaultChannel(e.guild_id)
              : t.getChannel(h),
          m = a.getGuild(_),
          g = s.getStageInstanceByChannel(h);
        return !!(0, c.b)(d.Z, m, b, g) && null != b && p(e, [t]);
      }
      function b(e) {
        return (0, a.e7)(
          [r.ZP, o.Z, l.Z, i.Z],
          () => h(e, [r.ZP, o.Z, l.Z, i.Z]),
          [e],
        );
      }
    },
    460838: function (e, n, t) {
      t.d(n, {
        Q: function () {
          return c;
        },
        Z: function () {
          return T;
        },
      });
      var a,
        c,
        i = t(200651),
        o = t(192379),
        r = t(120356),
        l = t.n(r),
        d = t(442837),
        s = t(481060),
        u = t(447003),
        f = t(471445),
        _ = t(565138),
        p = t(357156),
        h = t(496675),
        b = t(725436),
        m = t(274311),
        g = t(854698),
        v = t(285784),
        x = t(95291),
        I = t(742593),
        C = t(810561),
        k = t(187443),
        N = t(131154),
        w = t(765305),
        Z = t(981631),
        j = t(388032),
        B = t(727642);
      function S(e) {
        let { channel: n, onClick: t } = e,
          { canManageAllEvents: a } = (0, p.XJ)(n),
          c = (0, d.e7)(
            [h.Z],
            () => !n.isGuildVocal() || h.Z.can(Z.Plq.CONNECT, n),
            [n],
          ),
          r = o.useMemo(() => (0, u.Z)(n), [n]),
          _ = (0, f.KS)(n);
        return (0, i.jsx)(s.Tooltip, {
          text: j.intl.string(j.t.nHjY9P),
          shouldShow: !c && null != t,
          children: (e) =>
            (0, i.jsxs)(s.Clickable, {
              ...e,
              className: l()(B.inline, B.channelContainer, {
                [B.channelContainerEnabled]: c && null != t,
                [B.channelContainerDisabled]: !c && null != t,
              }),
              onClick: t,
              children: [
                (0, i.jsx)(s.Tooltip, {
                  text: j.intl.string(j.t["48WXaW"]),
                  shouldShow: a && r && c && null != t,
                  children: (e) =>
                    null != _
                      ? (0, i.jsx)(_, {
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
      function y(e) {
        let {
          guild: n,
          channel: t,
          onJoinClick: a,
          handleLocationClick: c,
          location: o,
          isExternal: r,
          isHub: d,
        } = e;
        if (d)
          return null == n
            ? (0, i.jsx)("div", {})
            : (0, i.jsxs)("div", {
                className: B.inline,
                children: [
                  (0, i.jsx)(_.Z, {
                    className: B.guildIcon,
                    size: _.Z.Sizes.MINI,
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
        return null != t
          ? (0, i.jsx)(S, { channel: t, onClick: a })
          : (0, i.jsxs)(s.Clickable, {
              className: B.inline,
              onClick: c,
              children: [
                (0, i.jsx)(s.LocationIcon, {
                  size: "custom",
                  color: "currentColor",
                  height: 20,
                  width: 20,
                  className: l()(B.channelContainer, B.icon),
                }),
                (0, i.jsx)(s.Text, {
                  className: r ? B.externalLocation : B.channelLocation,
                  variant: "text-sm/normal",
                  children: (0, b.m)(o, !0),
                }),
              ],
            });
      }
      function T(e) {
        let {
            className: n,
            guild: t,
            channel: a,
            creator: c,
            name: o,
            entityType: r,
            description: d,
            imageLocation: u = 0,
            imageSource: f,
            isActive: _,
            isUserLurking: p,
            isJoined: h = !1,
            isMember: b = !1,
            isHub: Z = !1,
            speakers: j,
            speakerCount: S,
            rsvped: T,
            canInvite: U,
            location: P,
            truncate: R,
            onContextMenu: E,
            onJoinClick: L,
            onJoinGuildClick: A,
            onGoToGuildClick: H,
            onRsvpClick: D,
            onStartClick: M,
            onInviteClick: G,
            onEndClick: z,
            onClick: q,
            isNew: F,
            guildEvent: W,
            eventPreview: X,
            recurrenceRule: J,
            recurrenceId: O,
          } = e,
          V = (0, m.Q)(a, r),
          Q = r === w.WX.EXTERNAL,
          K = Q ? (e) => e.stopPropagation() : void 0,
          Y = [];
        if (null != J && null != event) {
          let e = (0, g.Ho)(J);
          Y = (0, g.PJ)(4, e, new Date(W.scheduled_start_time));
        }
        let $ = Y.length > 0;
        return (0, i.jsxs)(s.ClickableContainer, {
          "aria-label": o,
          onClick: () => (null == q ? void 0 : q(O)),
          onContextMenu: E,
          className: l()(B.card, { [B.joined]: h, [B.lurking]: p }, n),
          children: [
            (0, i.jsxs)("div", {
              className: l()(B.padding, { [B.isRecurring]: $ }),
              children: [
                0 === u && (0, i.jsx)(x.Z, { source: f }),
                (0, i.jsx)(I.ZP, {
                  creator: c,
                  name: o,
                  description: d,
                  imageSource: 1 === u ? f : null,
                  truncate: R,
                  guildId: null == t ? void 0 : t.id,
                  isHub: Z,
                  isNew: F,
                  guildEvent: W,
                  eventPreview: X,
                  recurrenceId: O,
                }),
                _ &&
                  null != t &&
                  null != j &&
                  S > 0 &&
                  (0, i.jsx)(N.Z, {
                    guild: t,
                    speakers: j,
                    speakerCount: S,
                    className: B.spacing,
                  }),
                (0, i.jsx)("hr", { className: B.divider }),
                (0, i.jsxs)("div", {
                  className: l()(B.inline, B.footer),
                  children: [
                    (0, i.jsx)(y, {
                      guild: t,
                      channel: a,
                      onJoinClick: L,
                      handleLocationClick: K,
                      location: P,
                      isExternal: Q,
                      isHub: Z,
                    }),
                    Z
                      ? (0, i.jsx)(k.Z, {
                          isActive: _,
                          isUserLurking: p,
                          isMember: b,
                          rsvped: T,
                          onRsvpClick: D,
                          onJoinGuildClick: A,
                          onGoToGuildClick: H,
                          guildName: null == t ? void 0 : t.name,
                          canInvite: U,
                          isChannelPublic: V,
                          onInviteClick: G,
                        })
                      : (0, i.jsx)(v.ZP, {
                          entityType: r,
                          isJoined: h,
                          isActive: _,
                          isUserLurking: p,
                          rsvped: T,
                          canInvite: U,
                          isChannelPublic: V,
                          onContextMenu: E,
                          onJoinClick: L,
                          onRsvpClick: D,
                          onStartClick: M,
                          onInviteClick: G,
                          onEndClick: z,
                        }),
                  ],
                }),
                $ && (0, i.jsx)("hr", { className: B.divider }),
              ],
            }),
            $ &&
              (0, i.jsx)(C.Z, {
                guildId: null == t ? void 0 : t.id,
                recurrenceRule: J,
                guildEventId: W.id,
                onRecurrenceClick: q,
              }),
          ],
        });
      }
      ((a = c || (c = {}))[(a.BANNER = 0)] = "BANNER"),
        (a[(a.THUMBNAIL = 1)] = "THUMBNAIL");
    },
    131154: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return d;
        },
      });
      var a = t(200651);
      t(192379);
      var c = t(120356),
        i = t.n(c),
        o = t(481060),
        r = t(388032),
        l = t(673444);
      function d(e) {
        let { guild: n, speakers: t, speakerCount: c, className: d } = e,
          s = t.slice(0, 5),
          u = s.map((e) => {
            var t, c;
            return (0, a.jsxs)(
              "div",
              {
                className: l.speakerContainer,
                children: [
                  (0, a.jsx)(o.Avatar, {
                    src:
                      null == e
                        ? void 0
                        : null === (t = e.user) || void 0 === t
                          ? void 0
                          : t.getAvatarURL(n.id, 20),
                    size: o.AvatarSizes.SIZE_20,
                    className: l.avatar,
                    "aria-label": "".concat(
                      null == e ? void 0 : e.userNick,
                      "-avatar",
                    ),
                  }),
                  (0, a.jsx)("div", {
                    className: l.textInGridContainer,
                    children: (0, a.jsx)(o.Text, {
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
          f = c - s.length;
        return (0, a.jsxs)("div", {
          className: i()(l.grid, d),
          children: [
            u,
            f > 0 &&
              (0, a.jsxs)("div", {
                className: l.speakerContainer,
                children: [
                  (0, a.jsx)("div", {
                    className: l.iconMicrophone,
                    children: (0, a.jsx)(o.MicrophoneIcon, {
                      size: "custom",
                      color: "currentColor",
                      height: 12,
                    }),
                  }),
                  (0, a.jsx)(o.Text, {
                    color: "header-secondary",
                    variant: "text-sm/normal",
                    className: l.textInGrid,
                    children: r.intl.format(r.t["185ggI"], { count: f }),
                  }),
                ],
              }),
          ],
        });
      }
    },
    981888: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return i;
        },
      }),
        t(47120);
      var a = t(192379),
        c = t(881052);
      function i(e, n) {
        let [t, i] = a.useState(!1),
          [o, r] = a.useState(null);
        return [
          async () => {
            i(!0), r(null);
            try {
              let n = await e();
              return i(!1), r(null), n;
            } catch (t) {
              let e = new c.Hx(t);
              return null == n || n(e), r(e), i(!1), null;
            }
          },
          { loading: t, error: o },
        ];
      }
    },
    505227: function (e, n, t) {
      e.exports = {
        container: "container_eccd5f",
        stepContainer: "stepContainer_eccd5f",
        progressBar: "progressBar_eccd5f",
        selectedProgressBar: "selectedProgressBar_eccd5f",
      };
    },
    727642: function (e, n, t) {
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
    660072: function (e, n, t) {
      e.exports = {
        container: "container_e6c1bb",
        iconButton: "iconButton_e6c1bb",
        icon: "icon_e6c1bb",
        innerButton: "innerButton_e6c1bb",
        tooltips: "tooltips_e6c1bb",
      };
    },
    621773: function (e, n, t) {
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
    322262: function (e, n, t) {
      e.exports = { title: "title_a33974" };
    },
    395019: function (e, n, t) {
      e.exports = {
        recurrences: "recurrences_cf6131",
        heading: "heading_cf6131",
        scroller: "scroller_cf6131",
        showScroller: "showScroller_cf6131",
        button: "button_cf6131",
      };
    },
    711136: function (e, n, t) {
      e.exports = {
        doubleInput: "doubleInput_c8eacd",
        link: "link_c8eacd",
        addIcon: "addIcon_c8eacd",
        removeIcon: "removeIcon_c8eacd",
      };
    },
    371922: function (e, n, t) {
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
    338161: function (e, n, t) {
      e.exports = {
        container: "container_d9ad97",
        iconButton: "iconButton_d9ad97",
        icon: "icon_d9ad97",
        innerButton: "innerButton_d9ad97",
        button: "button_d9ad97",
      };
    },
    834635: function (e, n, t) {
      e.exports = {
        inline: "inline_a5724d",
        footer: "footer_a5724d",
        content: "content_a5724d",
        button: "button_a5724d",
      };
    },
    565784: function (e, n, t) {
      e.exports = {
        container: "container_c07d51",
        header: "header_c07d51",
        text: "text_c07d51",
        options: "options_c07d51",
        channelOptionIcon: "channelOptionIcon_c07d51",
        channelPrivate: "channelPrivate_c07d51",
      };
    },
    286631: function (e, n, t) {
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
    556782: function (e, n, t) {
      e.exports = { header: "header_e74886", text: "text_e74886" };
    },
    871661: function (e, n, t) {
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
    673444: function (e, n, t) {
      e.exports = {
        grid: "grid_bd205c",
        speakerContainer: "speakerContainer_bd205c",
        avatar: "avatar_bd205c",
        iconMicrophone: "iconMicrophone_bd205c",
        textInGridContainer: "textInGridContainer_bd205c",
        textInGrid: "textInGrid_bd205c",
      };
    },
    546067: function (e, n, t) {
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
    166302: function (e, n, t) {
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
    211848: function (e, n, t) {
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
    696456: function (e, n, t) {
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
    72235: function (e, n, t) {
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
//# sourceMappingURL=bc95c0ba8b0ed5a8cc90.js.map
