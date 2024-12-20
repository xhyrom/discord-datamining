"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["20577"],
  {
    484614: function (e, n, t) {
      var o,
        a = t(200651),
        i = t(192379),
        f = t(846519),
        d = t(481060),
        r = t(572004),
        c = t(388032);
      function s(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      class l extends (o = i.PureComponent) {
        componentWillUnmount() {
          this._timeout.stop();
        }
        render() {
          let { text: e } = this.props,
            { mode: n } = this.state,
            t =
              n === d.CopyInput.Modes.SUCCESS
                ? c.intl.string(c.t["t5VZ8/"])
                : e;
          return (0, a.jsx)(d.CopyInput, {
            ...this.props,
            onCopy: this.handleCopy,
            mode: n,
            text: t,
            supportsCopy: r.wS,
          });
        }
        handleCopy(e) {
          let { onCopy: n, delay: t = 1e3 } = this.props,
            o = (0, r.JG)(e);
          this.setState({
            mode: o ? d.CopyInput.Modes.SUCCESS : d.CopyInput.Modes.ERROR,
          }),
            this._timeout.start(t, () =>
              this.setState({ mode: d.CopyInput.Modes.DEFAULT }),
            ),
            null == n || n(e);
        }
        getVerticalButtonColor(e) {
          switch (e) {
            case d.CopyInput.Modes.SUCCESS:
              return d.Button.Colors.GREEN;
            case d.CopyInput.Modes.ERROR:
              return d.Button.Colors.RED;
            default:
              return d.Button.Colors.BRAND;
          }
        }
        constructor(e) {
          super(e),
            s(this, "_timeout", void 0),
            (this.state = { mode: d.CopyInput.Modes.DEFAULT }),
            (this._timeout = new f.V7()),
            (this.handleCopy = this.handleCopy.bind(this));
        }
      }
      s(l, "defaultProps", { delay: 1e3 }), (n.Z = l);
    },
    311533: function (e, n, t) {
      e.exports = {
        icon: "icon_fcf03e",
        iconWithGuildIcon: "iconWithGuildIcon_fcf03e",
        channelGuildIcon: "channelGuildIcon_fcf03e",
        acronym: "acronym_fcf03e",
      };
    },
    831746: function (e, n, t) {
      e.exports = {
        containerDefault: "containerDefault_f6f816",
        containerDragBefore: "containerDragBefore_f6f816",
        containerUserOver: "containerUserOver_f6f816",
        containerDragAfter: "containerDragAfter_f6f816",
        iconItem: "iconItem_f6f816 iconBase_f6f816",
        alwaysShown: "alwaysShown_f6f816",
        selected: "selected_f6f816",
        iconNoChannelInfo: "iconNoChannelInfo_f6f816",
        iconVisibility: "iconVisibility_f6f816",
        iconWithChannelInfo: "iconWithChannelInfo_f6f816",
        disabled: "disabled_f6f816",
        actionIcon: "actionIcon_f6f816",
        channelInfo: "channelInfo_f6f816",
        iconLive: "iconLive_f6f816",
        selectedChannel: "selectedChannel_f6f816",
      };
    },
    193877: function (e, n, t) {
      e.exports = {
        wrapper: "wrapper_d8bfb3",
        icon: "icon_d8bfb3",
        typeDefault: "typeDefault_d8bfb3",
        typeThread: "typeThread_d8bfb3",
        unread: "unread_d8bfb3",
        withGuildIcon: "withGuildIcon_d8bfb3",
        typeVoice: "typeVoice_d8bfb3",
        modeSelected: "modeSelected_d8bfb3",
        modeConnected: "modeConnected_d8bfb3",
        modeUnreadImportant: "modeUnreadImportant_d8bfb3",
        modeMuted: "modeMuted_d8bfb3",
        modeLocked: "modeLocked_d8bfb3",
        modeUnreadLessImportant: "modeUnreadLessImportant_d8bfb3",
        iconContainer: "iconContainer_d8bfb3",
        iconContainerWithGuildIcon: "iconContainerWithGuildIcon_d8bfb3",
        favoritesSuggestion: "favoritesSuggestion_d8bfb3",
        link: "link_d8bfb3",
        basicChannelRowLink: "basicChannelRowLink_d8bfb3",
        linkTop: "linkTop_d8bfb3",
        linkBottom: "linkBottom_d8bfb3",
        name: "name_d8bfb3",
        subtitle: "subtitle_d8bfb3",
        children: "children_d8bfb3",
        iconWithGuildIcon: "iconWithGuildIcon_d8bfb3",
        notInteractive: "notInteractive_d8bfb3",
        unreadImportant: "unreadImportant_d8bfb3",
        numberBadge: "numberBadge_d8bfb3",
        activeEvent: "activeEvent_d8bfb3",
      };
    },
    755527: function (e, n, t) {
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
    24182: function (e, n, t) {
      e.exports = {
        settingsContent: "settingsContent_eaf7c3 noScroll_eaf7c3",
        switch: "switch_eaf7c3",
      };
    },
  },
]);
//# sourceMappingURL=cc2e9f9fca3792678450.js.map
