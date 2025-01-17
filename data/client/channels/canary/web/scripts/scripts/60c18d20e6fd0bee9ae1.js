"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["86004"],
  {
    484614: function (e, t, o) {
      var n,
        a = o(200651),
        r = o(192379),
        i = o(846519),
        f = o(481060),
        d = o(572004),
        c = o(388032);
      function s(e, t, o) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = o),
          e
        );
      }
      class u extends (n = r.PureComponent) {
        componentWillUnmount() {
          this._timeout.stop();
        }
        render() {
          let { text: e } = this.props,
            { mode: t } = this.state,
            o =
              t === f.CopyInput.Modes.SUCCESS
                ? c.intl.string(c.t["t5VZ8/"])
                : e;
          return (0, a.jsx)(f.CopyInput, {
            ...this.props,
            onCopy: this.handleCopy,
            mode: t,
            text: o,
            supportsCopy: d.wS,
          });
        }
        handleCopy(e) {
          let { onCopy: t, delay: o = 1e3 } = this.props,
            n = (0, d.JG)(e);
          this.setState({
            mode: n ? f.CopyInput.Modes.SUCCESS : f.CopyInput.Modes.ERROR,
          }),
            this._timeout.start(o, () =>
              this.setState({ mode: f.CopyInput.Modes.DEFAULT }),
            ),
            null == t || t(e);
        }
        getVerticalButtonColor(e) {
          switch (e) {
            case f.CopyInput.Modes.SUCCESS:
              return f.Button.Colors.GREEN;
            case f.CopyInput.Modes.ERROR:
              return f.Button.Colors.RED;
            default:
              return f.Button.Colors.BRAND;
          }
        }
        constructor(e) {
          super(e),
            s(this, "_timeout", void 0),
            (this.state = { mode: f.CopyInput.Modes.DEFAULT }),
            (this._timeout = new i.V7()),
            (this.handleCopy = this.handleCopy.bind(this));
        }
      }
      s(u, "defaultProps", { delay: 1e3 }), (t.Z = u);
    },
    755527: function (e, t, o) {
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
    24182: function (e, t, o) {
      e.exports = {
        settingsContent: "settingsContent_eaf7c3 noScroll_eaf7c3",
        settingsForm: "settingsForm_eaf7c3",
        switch: "switch_eaf7c3",
      };
    },
  },
]);
//# sourceMappingURL=60c18d20e6fd0bee9ae1.js.map
